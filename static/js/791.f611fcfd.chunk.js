"use strict";(self.webpackChunkuniux=self.webpackChunkuniux||[]).push([[791],{8761:function(e,t,a){a.d(t,{r:function(){return c},Y:function(){return m}});var i=a(7689),A=a(1087),n="LinkBlue_LinkBlue__Zviul",r=a(184),m=function(e){var t=e.to,a=e.children,m=(0,i.TH)();return(0,r.jsx)(A.OL,{to:t,className:n,state:{from:"".concat(m.pathname).concat(m.search)},children:a})},c=function(e){var t=e.to,a=e.children,n=e.className,m=(0,i.TH)();return(0,r.jsx)(A.OL,{to:t,className:n,state:{from:"".concat(m.pathname).concat(m.search)},children:a})}},5222:function(e,t,a){a.d(t,{Z:function(){return m}});var i={Logo:"Logo_Logo__Kd2KD",left:"Logo_left__E01pH",right:"Logo_right__rtnOY"},A=a(1063),n=a(8761),r=a(184),m=function(e){var t=e.position,a=void 0===t?"left":t;return(0,r.jsx)(n.r,{to:"/",className:"".concat(i.Logo," ").concat(i[a]),children:(0,r.jsx)(A.Z,{name:"logo"})})}},3541:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var i=a(5861),A=a(9439),n=a(7757),r=a.n(n),m=a(4250),c=a(7294),E=a(6009),s="ProjectSidebar_ProjectSidebar__RjBe9",p=a(2791),d=a(3433),o=a(131),u=a(6733),l=a(184),M=function(e){var t=e.project,a=e.setHasTasks,n=(0,p.useState)([]),m=(0,A.Z)(n,2),c=m[0],E=m[1],s=(0,p.useState)(0),M=(0,A.Z)(s,2),R=M[0],I=M[1],q=t._id,z=window.location.href.includes("/test/");(0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.dz.getAll({project:q});case 2:t=e.sent,E(t),I(t.length),a(t.length>0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[q,a]);return(0,l.jsxs)(l.Fragment,{children:[c.length>0&&(0,l.jsx)(V,{tasks:c}),!z&&(0,l.jsx)(o.Ij,{number:R,projectId:q,onNewTaskAdd:function(e){E((function(t){return[].concat((0,d.Z)(t),[e])})),I((function(e){return e+1})),a(!0)}})]})},R="TasksCollection_TasksCollection__uFr5B",V=function(e){var t=e.tasks;return(0,l.jsx)("ul",{className:R,children:t.map((function(e){return(0,l.jsx)(B,{task:e},e._id)}))})},I=a(4942),q=a(1413),z=a(1063),Z="Accordeon_Accordeon__Pdyim",T="Accordeon_Open__y2nAy",x="Accordeon_Button__2dzu0",h="Accordeon_Head__90Irh",N="Accordeon_Title__zjP-B",b="Accordeon_Body__KmSwW",j="Accordeon_BodyContent__hv5gF",S=function(e){var t=e.title,a=void 0===t?"":t,i=e.children,n=(0,p.useState)(!1),r=(0,A.Z)(n,2),m=r[0],c=r[1],E=(0,p.useRef)(null),s=(0,p.useRef)(null);(0,p.useEffect)((function(){E.current.style.height=m?"".concat(s.current.scrollHeight,"px"):"0px"}),[m]);var d=function(){c(!m)};return(0,l.jsxs)("div",{className:"".concat(Z," ").concat(m&&T),children:[(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("div",{onClick:d,children:(0,l.jsx)(z.Z,{name:"accordeon"})}),(0,l.jsx)("div",{className:N,children:a}),(0,l.jsx)("div",{className:x,onClick:d,children:(0,l.jsx)(z.Z,{name:"accordeon-arrow"})})]}),(0,l.jsx)("div",{className:b,ref:E,children:(0,l.jsx)("div",{className:j,ref:s,children:i})})]})},k=a(6614),g=a(5208),J="TaskSingle_TaskSingle__OOx-W",y="TaskSingle_Loading__CiX3V",Q="TaskSingle_Form__-rzJc",v=a(2526),B=function(e){var t=e.task,a=(0,p.useState)(!1),n=(0,A.Z)(a,2),c=n[0],E=n[1],s=t._id,d=t.device,M=t.name,R=t.target,V=t.description,z=t.proto,Z=(0,p.useState)({device:d,proto:z,description:V}),T=(0,A.Z)(Z,2),x=T[0],h=T[1],N=(0,v.D)(function(){var e=(0,i.Z)(r().mark((function e(t,a){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),300),b=function(e){var t=(0,g.b)(e.target),a=e.target.name,i=e.target.value;h((function(e){return(0,q.Z)((0,q.Z)({},e),{},(0,I.Z)({},a,i.replace(/\s+/g," ")))})),t||N(a,i)},j=function(){var e=(0,i.Z)(r().mark((function e(t,a){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,u.dz.updateTask(s,t,(0,I.Z)({},t,a.trim().replace(/\s+/g," ")));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:return e.prev=9,setTimeout((function(){E(!1)}),300),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})));return function(t,a){return e.apply(this,arguments)}}();return(0,l.jsx)("li",{className:"".concat(J," ").concat(c&&y),children:(0,l.jsx)(S,{title:(0,l.jsx)(o.FG,{value:M,taskId:s}),children:(0,l.jsxs)("form",{className:Q,children:[(0,l.jsxs)(o.pg,{children:[(0,l.jsx)(k.rW,{type:"radio",name:"device",label:"Browser",value:"browser",checked:"browser"===x.device,onChange:b}),(0,l.jsx)(k.rW,{type:"radio",name:"device",label:"App",value:"app",checked:"app"===x.device,onChange:b})]}),(0,l.jsxs)(o.pg,{col:"1",children:[(0,l.jsx)(k.oH,{type:"url",name:"proto",placeholder:"Link to Figma preview",value:x.proto,onChange:b,autoComplete:"off",required:!0}),(0,l.jsx)(k.oH,{type:"text",name:"description",placeholder:"Describe the task",value:x.description,onChange:b,autoComplete:"off",required:!0})]}),(0,l.jsxs)(o.pg,{col:"1",children:[(0,l.jsx)(o.Sc,{type:"url",name:"target",value:R}),(0,l.jsx)(m.xv,{size:"small",color:"grey",align:"center",children:"Copy link to final action on test"})]})]})})},s)},P=function(e){var t=window.location.origin,a=window.location.pathname.includes("/project/")?"/project/":"/test/",i=window.location.pathname.split(a)[0]||"";return"".concat(t).concat(i,"/test/").concat(e).trim()},F=function(e){var t=e.project,a=void 0===t?{}:t,i=a._id,n=a.name,r=a.owner,d=(0,E.a)(),u=d.user,R=d.isLoggedIn,V=(0,p.useState)(!1),I=(0,A.Z)(V,2),q=I[0],z=I[1],Z=(0,p.useState)(!0),T=(0,A.Z)(Z,2),x=T[0],h=T[1],N=window.location.href.includes("/test/"),b=P(i);return(0,p.useEffect)((function(){r&&z(u._id===r._id)}),[r,u._id]),(0,l.jsxs)("aside",{className:"".concat(s," custom-scrollbar"),children:[(0,l.jsxs)(U,{children:[R&&!N&&(0,l.jsx)(c.ks,{}),N&&(0,l.jsx)(k.o2,{type:"checkbox",name:"test_start",label:"\xa0",value:"ok",checked:!0,readOnly:!0}),N&&(0,l.jsx)(m.Dx,{tag:"h2",size:"h2",children:"Your test is start"}),(0,l.jsx)(m.Dx,{tag:"h1",size:N?"h4":"h2",children:n}),R&&q&&(0,l.jsx)(M,{project:a,setHasTasks:h}),N&&(0,l.jsx)(o.Sc,{value:b})]}),(0,l.jsx)(U,{children:N?(0,l.jsx)(c.qu,{}):(0,l.jsx)(c.zx,{to:b,full:!0,disabled:!x,children:"Start test"})})]})},f="ProjectSidebarContent_ProjectSidebarContent__brrWY",U=function(e){var t=e.children;return(0,l.jsx)("div",{className:f,children:t})},O="IFrame_IFrameWrapper__ZOrqp",C="IFrame_IFrame__qEn-w",L="IFrame_Visible__ph-2C",W="IFrame_Top__2bSOC",G="IFrame_Bottom__gyGDX";var Y=a.p+"static/media/iframe_top.b40d2d70ea00c7ab20a833ca8ccb4532.svg";var D=a.p+"static/media/IF_bottom_small.26dc8d1e94576c2d1ebe839c0a7fff3e.svg",w=function(e){e.link;var t=e.name,a=(0,p.useState)(!0),i=(0,A.Z)(a,2),n=i[0],r=i[1];return(0,l.jsxs)("div",{className:"".concat(O," ").concat(n&&"loading"),children:[(0,l.jsx)("div",{className:W,children:(0,l.jsx)("img",{src:Y,alt:"Uniux"})}),(0,l.jsx)("div",{className:"".concat(C," ").concat(!n&&L),children:(0,l.jsx)("img",{src:"data:image/jpeg;base64,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IiIiIiPwMzMzMzMzMzMzEQkRERERERERERERw+rMzMzMzMzMzMzERERERERERERERERH3ZmZmZmZmZmZmIiIiIiIiIiIiIiIiPszMzMzMzMzMzMxERERERERERERERER9mZmZmZmZmZmZmIiIiIiIiIiIiIiIiI+rxmZmZmZmZmZmIiIiIiIiIiIiIiIiIj6szMzMzMzMzMzEREREREREREREREcI+zMzMzMzMzMzMxERERERERERERERER92ZmZmZmZmZmZiIiIiIiIiIiIiIiIjh9mZmZmZmZmZmYiIiIiIiIiIiIiIiI+zPGZmZmZmZmZmIiIiIiIiIiIiIiIiI6fJnjMzMzMzMzMzERERERERERERERERH4GZmZmZmZmZmYiIiIiIiIiIiIiIiIj8DMzMzMzMzMzEREREREREREREREcOn1eMzMzMzMzMzERERERERERERERERw/EzMzMzMzMzERERERF/jERERERERERH2eMzMzMzMzMzERERERERERERERERH4XjMzMzMzMzMRERERf4xERERERERERw+7x4zMzMzMzMRERERERERERERERER92ZmZmZmZmZmYiIiIiIiIiIiIiIiOEfd48ZmZmZmZ4RERERERERERERERHCPq8eMzMzMzMzMxEREREREREREREREcI+bx6zxmZmZmZmb/xAAUEAEAAAAAAAAAAAAAAAAAAADA/9oACAEBAAM/AElP/8QAHhEBAQEBAQADAQEBAAAAAAAAARECEgAgMEAQYHD/2gAIAQIBAQIAv8v+un6p6T88kkn5p6BJPvP7JJAgQJ9geA8ECAAAAST5ySSBAAAgAAAAST09JJJAAIAAAAAAAAZ5kkkkCQAAAAAAAMgZMmTPMkkkgSQAAAAAADJkyBkzzJJAkAyZMmTPJkyZMmTJkyZMmTJnmSTkyZMmTJnkyZMmTJkyZMmTJkyBkzzJDJkyZMmTJkyZMmTJkyZMmTJkyZMgE5M8mTJkyZMmTPJkyZMmTPJkyZMmQAAnJkyZMmTJkyZMmTJnkzzzzyZMgAAAQyZMmTJkyZMmTPPPJnnnnnkzACBJDJkyZMmTJkyZM8meeeeeeeYAQJJDJkyZMmTJkzyZ55555555kkkkkMmTJkyZMmTPPPPPPMkkkkkkhkyZMmTJkzzzzzzzJJJJJPgZMmTJkyZM8ySSSSSSfIAMmTJkJJJJJJJPoAAAACSSSSSSfSAAABJJJJPT7AAAAJJJJPvAAAJP5PxngA8fop48eP008ePHjx+a08ePHj8T62208ePHj8C1bbbTx48fc/xXyqtttE8ePhflbaqqtVbbTwiNttt/lttVVVVVbaIiI222221aqqqqq20RERtttttqqqqqqttoiIjbbbbbaqqqqqrbRERtttttqqqqqqq22iIjbbbbbaqqqqq1baI0bbbbbaq1VqqtttERG3q229Wraq1VtttEbbbb1erbbVttttvhttttttttttttv9tttttttttttt+Nttttttttttvr8bbbbbbbbbbb6/Rbbbbbbbbb9lttttttv4b62222/ivrfhf+B//EABQRAQAAAAAAAAAAAAAAAAAAAKD/2gAIAQIBAz8ATr//xAAdEQEBAQEBAAMBAQAAAAAAAAABAhEAEhAgMEBQ/9oACAEDAQECAMzMzM/mzMz/AEt1d/n3d1d/m1d1V3+XdVVVfX7vyqqqq00016/gVVVVVWmmmvX7PPKqqqtNNNNNev0eVVVVVpppppppv3+a8qqqq000000223734367qqqqqtNNNNNNttt+93e3t3t1VVVVWmqqqqqttttv3u7u7u6qqqqrVU1VNVVVVVdXVt+93d3d3dVVVWmmqqqqqqqq6urq2/e7u7u7qqqqq1VVVVVVVVVVV1VU163d3d3dVVVVaqqqqqqqqqqqqqqpr1u7u7uqqqqqtNVTVVVVVVVVVVTXrd3d3d1VVVWmmmqpqqqqqqqqqmt3d3d3dVVVVppppppppqqaVXd3d3d3VVVWmmmmmmmmmmmmld3d3d3d1VVVpppppppppppVd3d3d3dVVVVppppprqaa6urnl7d3d3d1VVVerq6urq6urq6urq55+N3d3d3eeeeeeerq6urq6urq6urnn43d3d3fh555556urq6urq6urq6uefw36PPPPPV1dXV1dXV1dXI89n6PPPPV1dXV1FFFFFCJn6PPPPPV1FFFFFFFCJn5vPPPPPPV1FFFFFFCJn6vPPPPV1FFFFFCImfq888889XUUUUUIiZ+rzzzzzz1dRRQiImfq88888889XUUIiJn7PPPPPPPPPPIiJn47vKqqrzzzzzzyIiZ9t+N3VVVVVV55555ETPvu7qqqqqqqvPPPzmfXd3d1VVVVVVVV/Ld3d3VVWmmlVVXd++7u7uqrTTTTTTTXrd3d+u7u7qqrTTTTTTTTXr1u7v03t3dVWmmmmmmmmmvXr163d04+d3VVWmmmmmmmmmmvXr163RET43dVVaaaaaaaaaaa9evXr1uiIj26qqrTTTTTTTTTTXr169ehEREe1VVVaaaaaaaaaaa9evW6IiIjqqqqqtNNNNNNNNb63dEREZR1VVVVVVpppppWt3d0RERll1VVVVVVVaVpV3d0RERlll1VVVpVVVVVVXd3RERGWWXVepppppWlVVVXd3dERETp6fh55aaaaVVVVVXd34E44446en4eerq6murlVVVV+xxxxx09PT8PPPV1dXVzzzzzzz9zjjjjp6en4eerq6urq56ueeeefscccccdPT0/D1dXV1dXVzzzzzzzz9Tjjjjjp6en4//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQM/AE6//9k=",alt:t,onLoad:function(){return r(!1)}})}),(0,l.jsx)("div",{className:G,children:(0,l.jsx)("img",{src:D,alt:"Uniux"})})]})},X=a(5222),K="ProjectBody_ProjectBody__HPo8l",_=function(e){var t=e.project.link;return(0,l.jsxs)("div",{className:K,children:[(0,l.jsx)(X.Z,{position:"right"}),(0,l.jsx)(w,{link:t})]})},H=a(7689),$=a(8080),ee=function(){var e=(0,H.s0)(),t=(0,E.a)(),a=t.user,n=t.isLoggedIn,m=(0,$.B)().popupOpen,c=(0,p.useState)({}),s=(0,A.Z)(c,2),d=s[0],o=s[1],M=(0,H.UO)().project_id;return(0,p.useEffect)((function(){var t=function(){var t=(0,i.Z)(r().mark((function t(){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.MA.getById(M);case 3:a=t.sent,o(a),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),e("/"),m("error","Error ".concat(t.t0.response.status),t.t0.response.statusText);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[M,m,o,e]),(0,p.useEffect)((function(){if(d.owner){var t=function(){var t=(0,i.Z)(r().mark((function t(){var i,A,c,E,s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=d._id,A=d.owner,c=d.lastview,E=d.views,s={id:i,lastview:A._id===a._id?(new Date).toISOString():new Date(c),views:!n||n&&A._id!==a._id?Number(E+1):E},t.prev=2,t.next=5,u.MA.updateViews(M,s);case 5:t.next=11;break;case 7:t.prev=7,t.t0=t.catch(2),e("/"),m("error","Error ".concat(t.t0.response.status),t.t0.response.statusText);case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[d,n,e,m,M,a._id]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F,{project:d}),(0,l.jsx)(_,{project:d})]})}}}]);
//# sourceMappingURL=791.f611fcfd.chunk.js.map