(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77da0ab7"],{"01a1":function(e,t,n){"use strict";n("58d0")},"212c":function(e,t,n){"use strict";n.r(t);var i=n("7a23"),o=Object(i["M"])("data-v-1c435188");Object(i["w"])("data-v-1c435188");var r={class:"form-control"},a=Object(i["i"])("label",{for:"email"},"E-Mail",-1),c={class:"form-control"},s=Object(i["i"])("label",{for:"password"},"Password",-1),u={key:0};Object(i["u"])();var l=o((function(e,t,n,l,d,b){var p=Object(i["B"])("base-dialog"),m=Object(i["B"])("base-spinner"),f=Object(i["B"])("base-button"),j=Object(i["B"])("base-card");return Object(i["t"])(),Object(i["f"])("div",null,[Object(i["i"])(p,{show:!!d.error&&!d.isLoading,title:"An error occured",onClose:b.handleError},{default:o((function(){return[Object(i["i"])("p",null,Object(i["E"])(d.error),1)]})),_:1},8,["show","onClose"]),Object(i["i"])(p,{show:d.isLoading,title:"Authenticating...",fixed:""},{default:o((function(){return[Object(i["i"])(m)]})),_:1},8,["show"]),Object(i["i"])(j,null,{default:o((function(){return[Object(i["i"])("form",{onSubmit:t[3]||(t[3]=Object(i["L"])((function(){return b.submitForm&&b.submitForm.apply(b,arguments)}),["prevent"]))},[Object(i["i"])("div",r,[a,Object(i["K"])(Object(i["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.email=e})},null,512),[[i["H"],d.email,void 0,{trim:!0}]])]),Object(i["i"])("div",c,[s,Object(i["K"])(Object(i["i"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.password=e})},null,512),[[i["H"],d.password]])]),d.formIsValid?Object(i["g"])("",!0):(Object(i["t"])(),Object(i["f"])("p",u," Please enter a valid email and password (must be at least 6 characters long). ")),Object(i["i"])(f,null,{default:o((function(){return[Object(i["h"])(Object(i["E"])(b.submitButtonCaption),1)]})),_:1}),Object(i["i"])(f,{type:"button",mode:"flat",onClick:b.switchAuthMode},{default:o((function(){return[Object(i["h"])(Object(i["E"])(b.switchModeButtonCaption),1)]})),_:1},8,["onClick"])],32)]})),_:1})])})),d=(n("caad"),n("2532"),n("96cf"),n("1da1")),b=n("5530"),p=n("5502"),m={data:function(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,error:null}},computed:{submitButtonCaption:function(){return"login"===this.mode?"Login":"Signup"},switchModeButtonCaption:function(){return"login"===this.mode?"Signup instead":"Login insted"}},methods:Object(b["a"])(Object(b["a"])({},Object(p["b"])({signup:"signup",login:"login"})),{},{submitForm:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.email&&e.email.includes("@")&&!(e.password.lenght<6)){t.next=3;break}return e.formIsValid=!1,t.abrupt("return");case 3:if(n={email:e.email,password:e.password},e.isLoading=!0,t.prev=5,"login"!==e.mode){t.next=11;break}return t.next=9,e.login(n);case 9:t.next=13;break;case 11:return t.next=13,e.signup(n);case 13:t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](5),e.error=t.t0.message||"Failed to authenticate, check your login data.";case 18:e.isLoading=!1;case 19:case"end":return t.stop()}}),t,null,[[5,15]])})))()},switchAuthMode:function(){"login"===this.mode?this.mode="signup":this.mode="login"},handleError:function(){this.error=null}})};n("01a1");m.render=l,m.__scopeId="data-v-1c435188";t["default"]=m},"58d0":function(e,t,n){}}]);
//# sourceMappingURL=chunk-77da0ab7.71c1bbce.js.map