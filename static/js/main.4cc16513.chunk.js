(this["webpackJsonpsprint-retro-app"]=this["webpackJsonpsprint-retro-app"]||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),c=a(29),r=a.n(c),o=(a(78),a(16)),i=a(15),l=(a(46),a(79),a(133)),j=a.p+"static/media/background.a71b81e4.png";function u(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"background active",style:{backgroundImage:"url(".concat(j,")")},children:Object(n.jsx)("div",{className:"carousel-caption",style:{bottom:"30%"},children:Object(n.jsxs)(l.a,{className:"heading",children:["Improve with Sprint Retrospectives",Object(n.jsx)("p",{className:"lead",children:"This is a description for the first slide."}),Object(n.jsx)(o.b,{className:"btn-start",to:"/auth/signup",children:" Get Started for Free "})]})})})})}var d=a(149),b=a(144),h=a(7),p=a(134),O=a(135),x=a(136),m=a(137),g=a(138),f=a(139),v=a(140),k=a(152),w=a(153),y=a(141),N=a(142),S=a(11),C=a(17);function E(){var e=Object(s.useState)(!1),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),l=Object(h.a)(r,2),j=(l[0],l[1],Object(s.useState)(!1)),u=Object(h.a)(j,2),d=u[0],b=u[1],E=Object(i.h)();return Object(n.jsx)("div",{children:Object(n.jsxs)(p.a,{style:(console.log(E.pathname),-1!==E.pathname.indexOf("auth")?{backgroundColor:"transparent"}:{backgroundColor:"#1e88e5"}),className:"text-light",fixed:"top",light:!0,expand:"md",children:[Object(n.jsx)(O.a,{href:"/",className:"text-light",style:{fontFamily:"thirsty_script_extrabold_deRg"},children:"Sprint Retro"}),Object(n.jsx)(x.a,{onClick:function(){return c(!a)}}),Object(n.jsx)(m.a,{isOpen:a,navbar:!0,children:localStorage.getItem("jwt-token")?Object(n.jsx)(g.a,{className:"ml-auto",navbar:!0,children:Object(n.jsx)(f.a,{active:!0,children:Object(n.jsxs)(v.a,{isOpen:d,toggle:function(){return b(!d)},children:[Object(n.jsx)(k.a,{className:"nav-link",style:{backgroundColor:"transparent"},children:Object(n.jsx)(S.a,{icon:C.h,size:"lg"})}),Object(n.jsxs)(w.a,{children:[Object(n.jsx)(y.a,{children:Object(n.jsx)(o.b,{to:"/profile",className:"text-decoration-none",children:" Profile"})}),Object(n.jsx)(y.a,{children:Object(n.jsx)(o.b,{to:"/auth/signout",className:"text-decoration-none",children:" Sign Out"})})]})]})})}):Object(n.jsxs)(g.a,{className:"ml-auto",navbar:!0,children:[Object(n.jsx)(f.a,{active:!0,children:Object(n.jsx)(N.a,{className:"text-light",href:"/auth/signin",children:"Sign In"})}),Object(n.jsx)(f.a,{children:Object(n.jsx)(N.a,{className:"text-light",href:"/auth/signup",children:"Sign Up"})})]})})]})})}var T=a(8),I=a.n(T),P=a(12),_=a(143),M=a(145),D=a(146),A=a(147),F=a(148),U=a(70),z=a(31),B=a(35),L=a.n(B),R=function(){var e=Object(P.a)(I.a.mark((function e(t,a,n){var s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("GET"!==t){e.next=6;break}return e.next=3,L.a.get(a,n);case 3:s=e.sent,e.next=22;break;case 6:if("POST"!==t){e.next=12;break}return e.next=9,L.a.post(a,n);case 9:s=e.sent,e.next=22;break;case 12:if("DELETE"!==t){e.next=18;break}return e.next=15,L.a.delete(a,{data:{object:n}});case 15:s=e.sent,e.next=22;break;case 18:if("PUT"!==t){e.next=22;break}return e.next=21,L.a.put(a,n);case 21:s=e.sent;case 22:return e.abrupt("return",s);case 23:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();function q(){var e=Object(i.h)(),t=Object(i.g)(),a=Object(s.useState)(""),c=Object(h.a)(a,2),r=c[0],l=c[1],j=Object(s.useState)(""),u=Object(h.a)(j,2),d=u[0],p=u[1],O=Object(s.useState)(e.state?e.state:{message:"",status:404}),x=Object(h.a)(O,2),m=x[0],g=x[1],f=function(){var e=Object(P.a)(I.a.mark((function e(a){var n,s,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:r,password:d},e.prev=2,e.next=5,R("POST","/auth/signin",n);case 5:s=e.sent,"undefined"!==typeof(c=s.data).token?(localStorage.setItem("jwt-token",c.token),t.push("/dashboard")):"undefined"!==typeof c.message&&g({message:c.message,status:404}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(b.a,{md:"9",lg:"8",className:"mx-auto",children:[Object(n.jsx)("h3",{className:"login-heading mb-4",children:"Welcome back!"}),(console.log(m),200===m.status?Object(n.jsx)(_.a,{color:"primary",children:m.message}):""!==m.message?Object(n.jsx)(_.a,{color:"danger",children:m.message}):void 0),Object(n.jsxs)(M.a,{onSubmit:function(e){return f(e)},children:[Object(n.jsxs)(D.a,{className:"form-label-group",children:[Object(n.jsx)(A.a,{type:"email",id:"inputEmail",onChange:function(e){l(e.target.value)},placeholder:"Email",required:!0}),Object(n.jsx)(F.a,{for:"inputEmail",children:"Email"})]}),Object(n.jsxs)(D.a,{className:"form-label-group",children:[Object(n.jsx)(A.a,{type:"password",id:"inputPassword",onChange:function(e){p(e.target.value)},placeholder:"Password",required:!0}),Object(n.jsx)(F.a,{for:"inputPassword",children:"Password"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(U.a,{type:"submit",color:"primary",size:"lg",block:!0,className:"btn-login text-uppercase font-weight-bold mb-2",children:" Sign In"}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)(o.b,{to:"#",children:"Forgot password?"})}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)(o.b,{to:"/auth/signup",children:"Sign up"})}),Object(n.jsx)("hr",{}),Object(n.jsxs)(U.a,{type:"submit",color:"danger",size:"lg",block:!0,className:"btn-login text-uppercase mr-2",children:[Object(n.jsx)(S.a,{icon:z.b,children:" "}),Object(n.jsx)("span",{children:"Google sign in"})]}),Object(n.jsxs)(U.a,{type:"submit",color:"primary",size:"lg",block:!0,className:"btn-login text-uppercase mr-2",children:[Object(n.jsx)(S.a,{icon:z.a,children:" "}),Object(n.jsx)("span",{children:" Facebook sign in"})]})]})]})}function G(){var e=Object(s.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),l=Object(h.a)(r,2),j=l[0],u=l[1],d=Object(i.g)(),p=Object(s.useState)(""),O=Object(h.a)(p,2),x=(O[0],O[1]),m=Object(s.useState)(""),g=Object(h.a)(m,2),f=g[0],v=g[1],k=Object(s.useState)(""),w=Object(h.a)(k,2),y=w[0],N=w[1],C=function(e,t){""!==e&&N(e!==t?"Password is not match!!!":"")},E=function(){var e=Object(P.a)(I.a.mark((function e(t){var n,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:f,username:a,password:j},e.prev=2,e.next=5,R("POST","/auth/signup",n);case 5:s=e.sent,console.log(s.data),200!==s.status||s.data.message?N(s.data.message):d.push({pathname:"/auth/signin",state:{message:"sign up success !!",status:200}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(b.a,{md:"9",lg:"8",className:"mx-auto",children:[Object(n.jsx)("h3",{className:"login-heading mb-4",children:"Register"}),""===y?null:Object(n.jsx)(_.a,{color:"danger",children:y}),Object(n.jsxs)(M.a,{onSubmit:function(e){E(e)},children:[Object(n.jsxs)(D.a,{className:"form-label-group",children:[Object(n.jsx)(A.a,{type:"email",id:"inputEmail",onChange:function(e){v(e.target.value)},placeholder:"Email address",required:!0}),Object(n.jsx)(F.a,{for:"inputEmail",children:"Email address"})]}),Object(n.jsxs)(D.a,{className:"form-label-group",children:[Object(n.jsx)(A.a,{type:"text",id:"inputusername",onChange:function(e){c(e.target.value)},placeholder:"Username",required:!0}),Object(n.jsx)(F.a,{for:"inputEmail",children:"Username"})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(D.a,{className:"form-label-group",children:[Object(n.jsx)(A.a,{type:"password",id:"inputPassword",onChange:function(e){u(e.target.value)},placeholder:"Password",required:!0}),Object(n.jsx)(F.a,{for:"inputPassword",children:"Password"})]}),Object(n.jsxs)(D.a,{className:"form-label-group",children:[Object(n.jsx)(A.a,{type:"password",id:"reInputPassword",onChange:function(e){C(j,e.target.value),x(e.target.value)},placeholder:"Re Password",required:!0}),Object(n.jsx)(F.a,{for:"reInputPassword",children:"Re Password"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(U.a,{type:"submit",color:"primary",size:"lg",block:!0,className:"btn-login text-uppercase font-weight-bold mb-2",children:" Sign Up"}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)(o.b,{to:"/auth/signin",children:"Sign In"})}),Object(n.jsx)("hr",{}),Object(n.jsxs)(U.a,{type:"submit",color:"danger",size:"lg",block:!0,className:"btn-login text-uppercase mr-2",children:[Object(n.jsx)(S.a,{icon:z.b,children:" "}),Object(n.jsx)("span",{children:"Google sign up"})]}),Object(n.jsxs)(U.a,{type:"submit",color:"primary",size:"lg",block:!0,className:"btn-login text-uppercase mr-2",children:[Object(n.jsx)(S.a,{icon:z.a,children:" "}),Object(n.jsx)("span",{children:" Facebook sign up"})]})]})]})}a(128);var W=a.p+"static/media/background.f9ad7e16.png";function H(e){var t=e.option;return Object(n.jsxs)("div",{className:"overflow-hidden",children:[Object(n.jsx)(E,{isTransparent:!0}),Object(n.jsx)(l.a,{fluid:!0,children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{xs:"6",md:"5",className:"bg-image d-none d-md-flex",style:{backgroundImage:"url(".concat(W,")")}}),Object(n.jsx)(b.a,{md:"7",lg:"6",children:Object(n.jsx)("div",{className:"login d-flex align-items-center py-5",children:Object(n.jsx)(l.a,{children:Object(n.jsx)(d.a,{children:"signin"===t?Object(n.jsx)(q,{}):Object(n.jsx)(G,{})})})})})]})})]})}a(129);function J(){var e=Object(i.g)(),t=Object(s.useState)(!1),a=Object(h.a)(t,2),c=a[0],r=a[1],o=Object(s.useState)(""),j=Object(h.a)(o,2),u=j[0],p=j[1],O=Object(s.useState)(""),x=Object(h.a)(O,2),m=x[0],g=x[1],f=Object(s.useState)(0),v=Object(h.a)(f,2),k=v[0],w=v[1],y=Object(s.useState)(""),N=Object(h.a)(y,2),E=N[0],T=N[1],z=Object(s.useState)(""),B=Object(h.a)(z,2),L=B[0],q=B[1],G=Object(s.useState)(""),W=Object(h.a)(G,2),H=W[0],J=W[1],V=Object(s.useState)({}),Y=Object(h.a)(V,2),X=Y[0],K=Y[1];Object(s.useEffect)((function(){function t(){return(t=Object(P.a)(I.a.mark((function t(){var a,n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R("GET","/profile");case 3:a=t.sent,n=a.data,console.log(n),p(n.username),g(n.email),w(n.sprints.length),K(n),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0.response),t.t0.response.status>=400&&t.t0.response.status<=500?(e.push("/auth/signin"),localStorage.removeItem("jwt-token")):J("Can not get data from server");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var Q=function(){var t=Object(P.a)(I.a.mark((function t(a){var n,s,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={isPassChange:c,isEmailChange:!0,user:{username:u,email:m,password:E,newPassword:L}},m===X.email&&u===X.username&&!c){t.next=18;break}return m===X&&(n.isEmailChange=!1),t.prev=4,t.next=7,R("POST","/profile",n);case 7:s=t.sent,"undefined"!==typeof(r=s.data).result&&"undefined"!==typeof r.token&&(p(r.result.username),g(r.result.email),w(r.result.sprints.length),K(r.result),localStorage.removeItem("jwt-token"),localStorage.setItem("jwt-token",r.token),J("")),"undefined"!==typeof r.message&&J(r.message),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),t.t0.response.status>=400&&t.t0.response.status<500?(e.push("/auth/signin"),localStorage.removeItem("jwt-token")):(J(t.t0),alert(t.t0));case 16:t.next=19;break;case 18:J("User's information did not change");case 19:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)("h2",{className:"text-center profile-header",children:"Th\xf4ng tin t\xe0i kho\u1ea3n"}),Object(n.jsxs)(d.a,{className:"justify-content-md-center profile",children:[Object(n.jsxs)(l.a,{children:[" ",""!==H?Object(n.jsx)(_.a,{color:"warning",className:"text-lg-center",children:H}):null]}),Object(n.jsx)(b.a,{lg:"2",children:Object(n.jsx)(S.a,{icon:C.h,size:"6x"})}),Object(n.jsx)(b.a,{lg:"8",children:Object(n.jsxs)(M.a,{onSubmit:function(e){return Q(e)},children:[Object(n.jsxs)(D.a,{children:[Object(n.jsx)(F.a,{className:"control-label",for:"username",children:"Username"}),Object(n.jsx)(A.a,{type:"text",id:"username",onChange:function(e){return p(e.target.value)},value:u,placeholder:"Username"})]}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)(F.a,{className:"control-label",for:"email",children:"Email"}),Object(n.jsx)(A.a,{type:"email",id:"email",onChange:function(e){return g(e.target.value)},value:m,placeholder:"Email"})]}),Object(n.jsxs)(F.a,{children:["Number of board: ",k]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)(A.a,{type:"checkbox",id:"is_change_pass",name:"is_change_pass",checked:c,onChange:function(){return r(!c)}}),Object(n.jsx)(F.a,{className:"control-label",for:"is_change_pass",children:"Change password?"})]}),c?Object(n.jsxs)(D.a,{children:[Object(n.jsxs)(D.a,{children:[Object(n.jsx)(F.a,{className:"control-label",for:"password",children:"Password "}),Object(n.jsx)(A.a,{type:"password",id:"password",onChange:function(e){return T(e.target.value)},value:E,autoComplete:"off",placeholder:"password"})]}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)(F.a,{className:"control-label",for:"new-password",children:"New password "}),Object(n.jsx)(A.a,{type:"password",id:"new_password",onChange:function(e){q(e.target.value)},value:L,autoComplete:"off",placeholder:"New password"})]})]}):null,Object(n.jsx)(D.a,{children:Object(n.jsx)(U.a,{color:"primary",size:"lg",outline:!0,type:"submit",children:"Save"})})]})})]})]})})}a(130);var V=a(154),Y=a(150),X=a(151);function K(e){var t=e.modal,a=e.toggle,c=e.addNewBoard,r=Object(s.useState)(""),o=Object(h.a)(r,2),i=o[0],l=o[1];return Object(n.jsxs)(V.a,{isOpen:t,toggle:a,children:[Object(n.jsx)(Y.a,{toggle:a,className:"text-uppercase justify-content-lg-around",children:"Create Board"}),Object(n.jsx)(X.a,{children:Object(n.jsxs)(M.a,{onSubmit:function(e){!function(e){e.preventDefault(),c({title:i,isActive:!0})}(e),a()},children:[Object(n.jsxs)(D.a,{children:[Object(n.jsx)(F.a,{for:"boardName",children:"Board Name"}),Object(n.jsx)(A.a,{type:"text",onChange:function(e){return l(e.target.value)},placeholder:"Input board name"})]}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)(F.a,{children:"Template"}),Object(n.jsx)("h5",{children:"Went Wel - To Improve - Action Items"})]}),Object(n.jsx)(D.a,{children:Object(n.jsx)(U.a,{color:"primary",block:!0,outline:!0,type:"submit",children:"Save"})})]})})]})}function Q(e){var t=e.modal,a=e.toggle,s=e.link;return Object(n.jsxs)(V.a,{isOpen:t,toggle:a,children:[Object(n.jsx)(Y.a,{toggle:a,className:"text-uppercase justify-content-lg-around",children:"Share Link"}),Object(n.jsx)(X.a,{children:Object(n.jsx)(A.a,{type:"text",readOnly:!0,defaultValue:s})})]})}function Z(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),o=Object(h.a)(r,2),l=o[0],j=o[1],u=Object(s.useState)(!1),d=Object(h.a)(u,2),b=d[0],p=d[1],O=Object(s.useState)(""),x=Object(h.a)(O,2),m=x[0],g=x[1],f=Object(i.g)(),v=Object(s.useState)(""),k=Object(h.a)(v,2),w=k[0],y=k[1],N=function(){return j(!l)},E=function(){return p(!b)};Object(s.useEffect)((function(){function e(){return(e=Object(P.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("GET","/dashboard");case 3:t=e.sent,a=t.data,200===t.status&&(a=a.boards.map((function(e){var t=new Date(e.createTime),a=t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear();return e.createTime=a,e})),console.log(a),c(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response.status>=400&&e.t0.response.status<500?(f.push("/auth/signin"),localStorage.removeItem("jwt-token")):alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]);var T=function(){var e=Object(P.a)(I.a.mark((function e(t){var n,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("DELETE","/dashboard",t);case 3:n=e.sent,console.log({deletedboard:t}),200===n.status&&(console.log(n),s=a.filter((function(e){return e._id!==t._id})),c(s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response.status>=400&&e.t0.response.status<500?(f.push("/auth/signin"),localStorage.removeItem("jwt-token")):alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(P.a)(I.a.mark((function e(t){var n,s,r,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("POST","/dashboard",t);case 3:200===(n=e.sent).status&&(s=new Date(n.data.createTime),t=n.data,r=s.getDate()+"/"+(s.getMonth()+1)+"/"+s.getFullYear(),t.createTime=r,a.push(t),o=Array.from(a),c(o)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response.status>=400&&e.t0.response.status<500?(f.push("/auth/signin"),localStorage.removeItem("jwt-token")):alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(K,{modal:l,toggle:N,addNewBoard:_}),Object(n.jsx)(Q,{modal:b,toggle:E,link:w}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"dashboard-item add-item",onClick:N,children:Object(n.jsxs)("span",{className:"add",children:[Object(n.jsx)(S.a,{icon:C.f,size:"4x"}),Object(n.jsx)("small",{children:"Add board"})]})}),a.map((function(e){return Object(n.jsx)("li",{className:"dashboard-item",children:Object(n.jsxs)("div",{className:"dashboard-item-body",children:[Object(n.jsxs)("div",{onClick:function(){return t=e._id,g(t),console.log(m),void f.push("/dashboard/".concat(t));var t},children:[Object(n.jsx)("p",{children:e.title}),Object(n.jsxs)("div",{className:"date-and-number",children:[Object(n.jsxs)("span",{className:"board-date",children:[Object(n.jsx)(S.a,{icon:C.a}),e.createTime.toLocaleString()]}),Object(n.jsxs)("span",{className:"board-date",children:[e.columns.length," cards"]})]})]}),Object(n.jsxs)("div",{className:"board-actions",children:[Object(n.jsxs)(U.a,{className:"text-decoration-none",color:"link",onClick:function(){return function(e){y("".concat("http://localhost:8000","/dashboard/").concat(e._id)),E()}(e)},children:[Object(n.jsx)(S.a,{icon:C.c}),"URL"]}),Object(n.jsxs)(U.a,{className:"text-decoration-none",color:"link",children:[Object(n.jsx)(S.a,{icon:C.b}),"Clone"]}),Object(n.jsxs)(U.a,{color:"link",className:"text-decoration-none",onClick:function(){T(e)},children:[Object(n.jsx)(S.a,{icon:C.g}),"Delete"]})]})]})},e._id)}))]})]})})}function $(){return Object(n.jsxs)("div",{className:"dashboard",children:[Object(n.jsx)("h1",{children:"My Boards"}),Object(n.jsx)("hr",{}),Object(n.jsx)(Z,{})]})}a(67);function ee(e){var t=e.addNewMessage,a=e.handleChangeMsg;return Object(n.jsx)(M.a,{onSubmit:t,children:Object(n.jsxs)(d.a,{className:"flex-end-btn",children:[Object(n.jsx)(b.a,{xs:"8",children:Object(n.jsx)(D.a,{children:Object(n.jsx)(A.a,{type:"text",onChange:a})})}),Object(n.jsx)(b.a,{xs:"3",children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)("div",{}),Object(n.jsx)(U.a,{color:"primary",block:!0,type:"submit",children:"Save"})]})})]})})}a(68);function te(e){var t=e.message,a=e.openEdit,s=e.deleteMessage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"message-body",children:Object(n.jsx)("div",{className:"text",children:t.comment})}),Object(n.jsx)(U.a,{onClick:function(){return a(t)},color:"link",style:{color:"white"},children:Object(n.jsx)(S.a,{icon:C.d})}),Object(n.jsx)(U.a,{onClick:function(){return s(t._id)},color:"link",style:{color:"white"},children:Object(n.jsx)(S.a,{icon:C.g})})]})}function ae(e){var t=e.message,a=e.handleEditMsg,s=e.changedMsg,c=e.editMessage;return Object(n.jsx)(M.a,{onSubmit:function(e){return c(e,t)},children:Object(n.jsxs)(d.a,{className:"flex-end-btn",children:[Object(n.jsx)(b.a,{xs:"8",children:Object(n.jsx)(D.a,{children:Object(n.jsx)(A.a,{type:"text",onChange:a,value:s})})}),Object(n.jsx)(b.a,{xs:"3",children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)("div",{}),Object(n.jsx)(U.a,{color:"primary",block:!0,type:"submit",children:"Save"})]})})]})})}function ne(e){var t=e.column,a=e.messages,c=e.addNewMsg,r=e.deleteMsg,o=e.editMsg,l=Object(i.h)(),j=Object(s.useState)(""),u=Object(h.a)(j,2),d=u[0],b=u[1],p=Object(s.useState)(""),O=Object(h.a)(p,2),x=O[0],m=O[1],g=Object(s.useState)(""),f=Object(h.a)(g,2),v=f[0],k=f[1],w=Object(s.useState)(!1),y=Object(h.a)(w,2),N=y[0],E=y[1],T=function(){var e=Object(P.a)(I.a.mark((function e(a){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n={columnType:t.type,comment:d,isActive:!0,sprintID:l.pathname.split("/")[2],order:1},c(n),E(!N);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){return m(e.target.value)},M=function(e,a){e.preventDefault();var n={_id:a._id,columnType:t.type,comment:x,isActive:a.isActive,sprintID:l.pathname.split("/")[2],order:1};o(n),k(-1)},D=function(e){m(e.comment),k(e._id),console.log("ssssss")},A=function(e){r(e,t.type)};return Object(n.jsxs)("div",{className:"message-list overflow-hidden",children:[Object(n.jsxs)("div",{className:"color-picker",children:[Object(n.jsx)("span",{className:"color-picker-selected",style:t.style}),Object(n.jsx)("span",{className:"column-name",children:t.name})]}),Object(n.jsx)(U.a,{outline:!0,color:"primary",block:!0,className:"btn-add",onClick:function(){return E(!N)},children:Object(n.jsx)(S.a,{icon:C.e})}),Object(n.jsxs)("ul",{children:[N?Object(n.jsx)("li",{className:"message",style:t.style,children:Object(n.jsx)(ee,{addNewMessage:T,handleChangeMsg:function(e){return b(e.target.value)}})}):null,a.map((function(e){return v===e._id?Object(n.jsx)("li",{className:"message",style:t.style,children:Object(n.jsx)(ae,{message:e,handleEditMsg:_,changedMsg:x,editMessage:M})},e._id):Object(n.jsx)("li",{className:"message",style:t.style,children:Object(n.jsx)(te,{message:e,openEdit:D,deleteMessage:A})},e._id)}))]})]})}function se(e){var t=e.board,a=e.changeBoardName,c=Object(s.useState)(""),r=Object(h.a)(c,2),i=r[0],l=r[1],j=Object(s.useState)(!1),u=Object(h.a)(j,2),p=u[0],O=u[1],x=function(){var e=Object(P.a)(I.a.mark((function e(n){var s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),(s=Object.assign({},t)).title=i,a(s),m();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){return O(!p)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(o.b,{type:"button",className:"go-back-link",to:"/dashboard",children:"/Dashboard"}),Object(n.jsx)(d.a,{className:"change-board-name-text",children:p?Object(n.jsx)(M.a,{onSubmit:function(e){return x(e)},className:"form",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{md:6,children:Object(n.jsx)(A.a,{type:"text",className:"form-input",onChange:function(e){l(e.target.value)},defaultValue:t.title})}),Object(n.jsxs)(b.a,{md:4,children:[Object(n.jsx)(U.a,{color:"primary",outline:!0,type:"submit",children:"Save"}),Object(n.jsx)(U.a,{color:"link",outline:!0,onClick:m,children:" Cancel"})]})]})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F.a,{style:{padding:"10px 30px 0px 30px"},children:t.title}),Object(n.jsx)(U.a,{color:"link",onClick:m,children:Object(n.jsx)(S.a,{icon:C.d})})]})})]})}var ce=[{name:"Went Well",style:{backgroundColor:"green",color:"white"},type:0},{name:"To Improve",style:{backgroundColor:"orange",color:"white"},type:1},{name:"Action Items",style:{backgroundColor:"blue",color:"white"},type:2}];function re(){var e=Object(i.h)(),t=Object(i.g)(),a=Object(s.useState)({}),c=Object(h.a)(a,2),r=c[0],o=c[1],l=Object(s.useState)({0:[],1:[],2:[]}),j=Object(h.a)(l,2),u=j[0],d=j[1];Object(s.useEffect)((function(){(function(){var a=Object(P.a)(I.a.mark((function a(){var n,s,c,r;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R("GET",e.pathname);case 3:n=a.sent,s=n.data,200===n.status&&(c=Array.from(s.columns),r={0:[],1:[],2:[]},o(s),c.forEach((function(e){var t=e.columnType;r[t].push(e)})),d(r)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),a.t0.response.status>=400&&a.t0.response.status<500?(t.push("/auth/signin"),localStorage.removeItem("jwt-token")):alert("can not get data from server");case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}})()()}),[e.pathname,t]);var b=function(){var a=Object(P.a)(I.a.mark((function a(n){var s,c;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R("PUT",e.pathname,n);case 3:200===(s=a.sent).status&&(console.log(s.data),c=Object.assign({},n),o(c)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),a.t0.response.status>=400&&a.t0.response.status<500?(t.push("/auth/signin"),localStorage.removeItem("jwt-token")):alert("can not change board name");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}(),p=function(){var a=Object(P.a)(I.a.mark((function a(n){var s,c,r,o;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R("POST",e.pathname,n);case 3:s=a.sent,c=s.data,console.log({Post:c}),200===s.status&&(r=c.columnType,(o=Object.assign({},u))[r].push(c),d(o)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),a.t0.response.status>=400&&a.t0.response.status<500?(t.push("/auth/signin"),localStorage.removeItem("jwt-token")):alert("can not add new message");case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}(),O=function(){var a=Object(P.a)(I.a.mark((function a(n,s){var c;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,console.log(e.pathname),a.next=4,R("DELETE","".concat(e.pathname,"/").concat(n),n);case 4:200===a.sent.status&&((c=Object.assign({},u))[s]=u[s].filter((function(e){return e._id!==n})),console.log(u),d(c)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),a.t0.response.status>=400&&a.t0.response.status<500?(t.push("/auth/signin"),localStorage.Item("jwt-token")):alert(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e,t){return a.apply(this,arguments)}}(),x=function(){var a=Object(P.a)(I.a.mark((function a(n){var s,c,r,o;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R("PUT","".concat(e.pathname,"/").concat(n._id),n);case 3:s=a.sent,c=s.data,console.log({Edit:c}),200===s.status&&(r=n.columnType,(o=Object.assign({},u))[r]=u[r].map((function(e){return e._id===c._id?c:e})),console.log(o),d(o)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),a.t0.response.status>=400&&a.t0.response.status<500?(t.push("/auth/signin"),localStorage.removeItem("jwt-token")):alert("can not edit message");case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"column",children:[Object(n.jsx)(se,{board:r,changeBoardName:b}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"column-container",children:ce.map((function(e,t){return Object(n.jsx)(ne,{column:e,messages:u[t],addNewMsg:p,deleteMsg:O,editMsg:x},t)}))})]})})}var oe=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(E,{}),Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{path:"/sprint-retro-app",children:Object(n.jsx)(i.a,{to:"/"})}),Object(n.jsx)(i.b,{path:"/auth/signin",children:Object(n.jsx)(H,{option:"signin"})}),Object(n.jsx)(i.b,{path:"/auth/signup",children:Object(n.jsx)(H,{option:"signup"})}),Object(n.jsx)(i.b,{path:"/profile",children:Object(n.jsx)(J,{})}),Object(n.jsx)(i.b,{path:"/dashboard/:sprintid",children:Object(n.jsx)(re,{})}),Object(n.jsx)(i.b,{path:"/dashboard",children:Object(n.jsx)($,{})}),Object(n.jsx)(i.b,{exact:!0,path:"/",children:Object(n.jsx)(u,{})})]})]})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,155)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};a(131);r.a.render(Object(n.jsx)(oe,{}),document.getElementById("root")),ie()},35:function(e,t,a){var n=a(111).create({baseURL:"http://localhost:8000",timeout:1e4,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept,Authorization"}});n.interceptors.request.use((function(e){var t=localStorage.getItem("jwt-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),e.exports=n},46:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.4cc16513.chunk.js.map