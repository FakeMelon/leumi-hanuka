const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const sizeOf = require('image-size');
const admin = require("firebase-admin");
const serviceAccount = require(`${__dirname}/leumi-hanukkah-firebase-adminsdk-k9802-feef990f95.json`);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://leumi-hanukkah.firebaseio.com"
});

const db = admin.database();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public/build'));

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/upload', (req, res, next) => {
    let uploadFile = req.files.file;
    let fileNameSplit = req.files.file.name.split('.');
    const fileName = uuidv4() + '.' + fileNameSplit[fileNameSplit.length - 1];
    uploadFile.mv(
        `${__dirname}/public/files/${fileName}`,
        function (err) {
            if (err) {
                return res.status(500).send(err)
            }

            res.json({
                file: `public/${req.files.file.name}`
            })
        },
    )
});

app.get('/images', (req, res, next) => {
    let imagesFolder = `${__dirname}/public/files/`;
    let images = [];
    fs.readdirSync(imagesFolder).forEach(imageName => {
        let dimensions = sizeOf(`${imagesFolder}/${imageName}`);
        images.push({
            name: imageName,
            width: dimensions.width,
            height: dimensions.height
        });
    });
    res.json({
        images: images
    });
});

app.get('/login/:group', (req, res, next) => {
    console.log(req.params);
    const ref = db.ref(`group${req.params.group}`);
    ref.transaction((current_value) => {
        return (current_value || 0) + 1;
    });
});

app.get('/checkPass/:pass', (req, res, next) => {
    let password = req.params.pass;
    let isAllowed = false;
    if (password === "1111" || password === "2222" || password === "3333" || password === "4444" || password === "5555") {
        isAllowed = true;
        const ref = db.ref(`group${password[0]}`);
        ref.transaction((current_value) => {
            return (current_value || 0) + 1;
        });
    }
    res.json({
        isAllowed: isAllowed
    })
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err)
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error')
});

module.exports = app;