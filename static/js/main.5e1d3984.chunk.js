(this["webpackJsonpsprint-retro-app"]=this["webpackJsonpsprint-retro-app"]||[]).push([[0],{28:function(e,t,c){},30:function(e,t,c){},40:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(2),a=c(9),r=c.n(a),i=(c(28),c(16)),j=c.n(i),l=c(22),d=c(12),b=(c(30),c(47)),o=c(48),h=c(49),x=c(53),O=c(50),u=c(51),p=c(52);function f(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.jsx)("div",{children:Object(s.jsxs)(b.a,{style:{backgroundColor:"#1e88e5"},className:"text-light",light:!0,expand:"md",children:[Object(s.jsx)(o.a,{href:"/",className:"text-light",children:"SprintRetro"}),Object(s.jsx)(h.a,{onClick:function(){return a(!c)}}),Object(s.jsx)(x.a,{isOpen:c,navbar:!0,children:Object(s.jsxs)(O.a,{className:"ml-auto",navbar:!0,children:[Object(s.jsx)(u.a,{active:!0,children:Object(s.jsx)(p.a,{className:"text-light",href:"#",children:"Sign In"})}),Object(s.jsx)(u.a,{children:Object(s.jsx)(p.a,{className:"text-light",href:"#",children:"Sign Up"})})]})})]})})}c(40);var m=c(7),v=c(8);function g(e){var t=e.boardList;return Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{className:"dashboard-item add-item",children:Object(s.jsxs)("span",{className:"add",children:[Object(s.jsx)(m.a,{icon:v.d,size:"4x"}),Object(s.jsx)("small",{children:"Add board"})]})}),t.map((function(e){return Object(s.jsx)("li",{className:"dashboard-item",children:Object(s.jsxs)("div",{className:"dashboard-item-body",children:[Object(s.jsx)("p",{children:e.title}),Object(s.jsxs)("span",{className:"board-date",children:[Object(s.jsx)(m.a,{icon:v.a}),e.createTime]}),Object(s.jsx)("ul",{}),Object(s.jsxs)("div",{className:"board-actions",children:[Object(s.jsxs)("a",{href:"#",children:[Object(s.jsx)(m.a,{icon:v.c}),"URL"]}),Object(s.jsxs)("a",{href:"#",children:[Object(s.jsx)(m.a,{icon:v.b}),"Clone"]})]})]})})}))]})}var N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),a(c.boards);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{}),Object(s.jsxs)("div",{className:"dashboard",children:[Object(s.jsx)("h1",{children:"My Boards"}),Object(s.jsx)("hr",{}),Object(s.jsx)(g,{boardList:c})]})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};c(44);r.a.render(Object(s.jsx)(N,{}),document.getElementById("root")),y()}},[[45,1,2]]]);
//# sourceMappingURL=main.5e1d3984.chunk.js.map