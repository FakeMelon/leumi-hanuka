(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(301)},128:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(62),i=a.n(n),r=a(105),c=a(18),l=a(19),o=a(21),s=a(20),u=a(22),m=a(0),p=a.n(m),d=a(15),h=a.n(d),g=(a(128),a(37)),f=a(114),b=a.n(f),k=a(120),v=a.n(k),y=a(112),E=a.n(y),w=a(117),j=a.n(w),O=a(119),x=a.n(O),C=a(118),B=a.n(C),N=a(115),D=a.n(N),I=a(113),S=a.n(I),T=a(116),L=a.n(T),W=a(5),F=a.n(W),R=a(28),U=a(107),A=a.n(U),M=a(109),P=a.n(M),H=(a(130),"https://leumi-hanuka.herokuapp.com/public/files/");Object(R.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:600,height:500},subheader:{width:"100%"}}})(function(e){var t=e.classes;return p.a.createElement("div",{className:t.root},p.a.createElement(A.a,{cellHeight:300,className:t.gridList,cols:3},e.imageNames.map(function(e){return p.a.createElement(P.a,{key:e,cols:e.cols||1},p.a.createElement("img",{src:H+e,alt:e.title||"title"}))})))});var q=a(56),J=a.n(q),_=a(57),z=a.n(_),G=a(58),K=a.n(G),Q=a(111),V=a.n(Q),X=a(59),Y=a.n(X),Z=a(60),$=a.n(Z),ee=a(61),te=a.n(ee),ae=a(38),ne=a.n(ae),ie=a(63),re=a.n(ie),ce=a(110),le=a.n(ce),oe="https://leumi-hanuka.herokuapp.com/public/",se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={images:a.props.images.map(function(e){var t=oe+"files/"+e.name,a=1,n=1;return e.width/e.height>1.5?a=2:e.height/e.width>1.5&&(n=2),{src:t,thumbnail:t,thumbnailWidth:a,thumbnailHeight:n}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("img",{src:"".concat(oe,"Title.png"),style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"50%"}}),p.a.createElement("div",{style:{position:"relative"}},p.a.createElement("img",{src:"".concat(oe,"Candle.png"),style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"70%"}}),p.a.createElement("div",{style:{position:"absolute",top:"17%",left:"35%",width:"28%",height:"73%",padding:"5px",overflow:"auto",backgroundColor:"rgba(0, 0, 255, 0)"}},p.a.createElement(le.a,{images:this.state.images,enableLightbox:!0,enableImageSelection:!1}))))}}]),t}(p.a.Component),ue="https://leumi-hanuka.herokuapp.com/upload",me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleSelectedFile=function(e){a.setState({isButtonDisabled:!e.target.files[0].type.startsWith("image"),selectedFile:e.target.files[0],loaded:0})},a.handleUpload=function(){a.setState({isButtonDisabled:!0});var e=new FormData;e.append("file",a.state.selectedFile,a.state.selectedFile.name),re.a.post(ue,e,{onUploadProgress:function(e){a.setState({loaded:e.loaded/e.total*100})}}).then(function(e){console.log(e.statusText),a.handleButtonClick()})},a.state={isButtonDisabled:!0,selectedFile:null,loaded:0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleButtonClick",value:function(e){re.a.get("/images").then(function(e){h.a.render(p.a.createElement(se,{images:e.data.images}),document.getElementById("root"))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.props.classes;return p.a.createElement("main",{className:t.main},p.a.createElement(J.a,null),p.a.createElement(z.a,{className:t.paper},p.a.createElement(K.a,{className:t.avatar},p.a.createElement(V.a,null)),p.a.createElement(Y.a,{component:"h1",variant:"h5"},"\u05d4\u05e2\u05dc\u05d0\u05ea \u05ea\u05de\u05d5\u05e0\u05d4"),p.a.createElement("form",{className:t.form},p.a.createElement($.a,{margin:"normal",required:!0,fullWidth:!0},p.a.createElement(te.a,{accept:"image/*",className:t.input,id:"raised-button-file",type:"file",value:this.state.code,onChange:function(t){return e.handleSelectedFile(t)}}),p.a.createElement("label",{htmlFor:"raised-button-file"},p.a.createElement(ne.a,{component:"span",fullWidth:!0,variant:"contained",color:"primary"},"\u05d1\u05d7\u05d9\u05e8\u05ea \u05ea\u05de\u05d5\u05e0\u05d4"))),p.a.createElement(ne.a,{onClick:function(){return e.handleUpload()},fullWidth:!0,variant:"contained",color:"primary",className:t.submit,disabled:this.state.isButtonDisabled},"\u05d4\u05e2\u05dc\u05d0\u05d4"),p.a.createElement("div",null," ",Math.round(this.state.loaded,2)," %"))))}}]),t}(p.a.Component),pe=F()(function(e){return{main:Object(g.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},input:{display:"none"}}})(me),de=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={isButtonDisabled:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){document.body.style.backgroundImage="url(".concat("https://leumi-hanuka.herokuapp.com/public/background.png",")")}},{key:"componentWillUnmount",value:function(){document.body.style.backgroundColor=null}},{key:"handleUserInput",value:function(e){"1234"===e.target.value?this.setState({isButtonDisabled:!1}):this.setState({isButtonDisabled:!0})}},{key:"render",value:function(){var e=this,t=this.props.classes;return p.a.createElement("main",{className:t.main},p.a.createElement(E.a,null),p.a.createElement(S.a,{className:t.paper},p.a.createElement(b.a,{className:t.avatar},p.a.createElement(D.a,null)),p.a.createElement(L.a,{component:"h1",variant:"h5"},"\u05d4\u05db\u05e0\u05e1 \u05e7\u05d5\u05d3 \u05db\u05e0\u05d9\u05e1\u05d4"),p.a.createElement("form",{className:t.form},p.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},p.a.createElement(B.a,{htmlFor:"number",dir:"rtl",style:{display:"inline-block",width:"98%",textAlign:"right"}},"\u05e7\u05d5\u05d3 \u05db\u05e0\u05d9\u05e1\u05d4"),p.a.createElement(x.a,{value:this.state.code,onChange:function(t){return e.handleUserInput(t)}})),p.a.createElement(v.a,{onClick:function(){return e.props.onChangeComponent()},type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,disabled:this.state.isButtonDisabled},"\u05db\u05e0\u05e1"))))}}]),t}(p.a.Component),he=F()(function(e){return{main:Object(g.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(de),ge=Object(R.createMuiTheme)({palette:{primary:{main:"#004BA6"},secondary:{light:"#0066ff",main:"#0044ff",contrastText:"#ffcc00"}}}),fe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).signInComponent=p.a.createElement(he,{onChangeComponent:function(){return a.setState({component:p.a.createElement(pe,null)})}}),a.state={data:null,component:a.signInComponent},a.callBackendAPI=Object(r.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/express_backend");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e,this)})),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="Leumi Hanukkah",this.callBackendAPI().then(function(t){return e.setState({data:t.express})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return p.a.createElement(R.MuiThemeProvider,{theme:ge},this.state.component)}}]),t}(p.a.Component);h.a.render(p.a.createElement(fe,null),document.getElementById("root"))}},[[121,2,1]]]);
//# sourceMappingURL=main.5c165fe0.chunk.js.map