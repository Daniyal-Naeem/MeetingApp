(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var A=n(0),a=n(1),c=n(17),r=n.n(c),s=n(13),i=n(4),o=(n(43),n(6)),l=n.n(o),u=n(14),j=n(12),g=n(10),E=n.n(g),d=Object(a.createContext)(),B=n(21),h=n(2),p="GET_MEETINGS",b="ADD_MEETING",C="DELETE_MEETING",O="SET_CURRENT",x="CLEAR_CURRENT",Q="UPDATE_MEETING",w="FILTER_MEETINGS",f="CLEAR_MEETINGS",I="CLEAR_FILTER",m="MEETING_ERROR",F="SET_ALERT",G="REMOVE_ALERT",y="REGISTER_SUCCESS",D="REGISTER_FAIL",U="USER_LOADED",R="AUTH_ERROR",k="LOGIN_SUCCESS",S="LOGIN_FAIL",M="LOGOUT",Y="CLEAR_ERRORS",N=function(e,t){switch(t.type){case p:return Object(h.a)(Object(h.a)({},e),{},{meetings:t.payload,loading:!1});case b:return Object(h.a)(Object(h.a)({},e),{},{meetings:[t.payload].concat(Object(B.a)(e.meetings)),loading:!1});case Q:return Object(h.a)(Object(h.a)({},e),{},{meetings:e.meetings.map((function(e){return e._id===t.payload._id?t.payload:e})),loading:!1});case C:return Object(h.a)(Object(h.a)({},e),{},{meetings:e.meetings.filter((function(e){return e._id!==t.payload})),loading:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{meetings:null,filtered:null,error:null,current:null});case O:return Object(h.a)(Object(h.a)({},e),{},{current:t.payload});case x:return Object(h.a)(Object(h.a)({},e),{},{current:null});case w:return Object(h.a)(Object(h.a)({},e),{},{filtered:e.meetings.filter((function(e){var n=new RegExp("".concat(t.payload),"gi");return e.classname.match(n)||e.classid.match(n)}))});case I:return Object(h.a)(Object(h.a)({},e),{},{filtered:null});case m:return Object(h.a)(Object(h.a)({},e),{},{error:t.payload});default:return e}},v=function(e){var t=Object(a.useReducer)(N,{meetings:[],current:null,filtered:null,error:null}),n=Object(j.a)(t,2),c=n[0],r=n[1],s=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/api/crud");case 3:t=e.sent,r({type:p,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r({type:m,payload:e.t0.response.msg});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,A;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,E.a.post("/api/crud",t,n);case 4:A=e.sent,r({type:b,payload:A.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:m,payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("/api/crud/".concat(t));case 3:r({type:C,payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r({type:m,payload:e.t0.response.msg});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,A;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,E.a.put("/api/crud/".concat(t._id),t,n);case 4:A=e.sent,r({type:Q,payload:A.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:m,payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(d.Provider,{value:{meetings:c.meetings,current:c.current,filtered:c.filtered,error:c.error,addMeeting:i,deleteMeeting:o,setCurrent:function(e){r({type:O,payload:e})},clearCurrent:function(){r({type:x})},updateMeeting:g,filterMeetings:function(e){r({type:w,payload:e})},clearFilter:function(){r({type:I})},getMeetings:s,clearMeetings:function(){r({type:f})}},children:e.children})},H=Object(a.createContext)(),J=function(e){var t=e.title,n=e.icon,c=Object(a.useContext)(H),r=Object(a.useContext)(d),i=c.isAuthenticated,o=c.logout,l=c.user,u=r.clearMeetings,j=Object(A.jsxs)(a.Fragment,{children:[Object(A.jsxs)("li",{children:["Hello ",l&&l.name]}),Object(A.jsx)("li",{children:Object(A.jsxs)("a",{onClick:function(){o(),u()},children:[Object(A.jsx)("li",{className:"fas fa-sign-out-alt"})," ",Object(A.jsx)("span",{className:"hide-sm",children:"Logout"})]})})]}),g=Object(A.jsx)(a.Fragment,{children:Object(A.jsx)(s.b,{to:"/login",children:"Login "})});return Object(A.jsxs)("div",{className:"navbar bg-danger",children:[Object(A.jsx)("h1",{children:Object(A.jsxs)(s.b,{to:"/",children:[Object(A.jsx)("i",{className:n})," ",t]})}),Object(A.jsxs)("ul",{children:[Object(A.jsx)(s.b,{to:"/",children:"Home "}),Object(A.jsx)(s.b,{to:"/about",children:"About"}),Object(A.jsx)(s.b,{to:"/courses",children:"Our Courses"})]}),Object(A.jsx)("ul",{children:i?j:g})]})};J.defaultProps={title:"Meeting App",icon:"far fa-handshake"};var K=J,L=n(72),Z=n(70),W=function(e){var t=e.meeting,n=Object(a.useContext)(d),c=n.deleteMeeting,r=n.setCurrent,s=n.clearCurrent,i=t._id,o=t.classname,l=t.classid,u=t.type;return Object(A.jsxs)("div",{className:"card bg-light",children:[Object(A.jsxs)("h3",{className:"text-danger text-left",children:[Object(A.jsxs)("a",{href:"http://localhost:3030/",children:["  ",o]}),Object(A.jsx)("span",{style:{float:"right"},className:"badge "+("professional"===u?"badge-success":"badge-primary"),children:u.charAt(0).toUpperCase()+u.slice(1)})]}),Object(A.jsx)("ul",{className:"list",children:l&&Object(A.jsxs)("li",{children:[Object(A.jsx)("i",{class:"fas fa-chalkboard-teacher"}),"   ",l]})}),Object(A.jsxs)("p",{children:[Object(A.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){return r(t)},children:"Edit"}),Object(A.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){c(i),s()},children:"Delete"})]})]})},T=function(){return Object(A.jsx)(a.Fragment,{children:Object(A.jsx)("img",{src:"data:image/gif;base64,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",style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},P=function(){var e=Object(a.useContext)(d),t=e.meetings,n=e.filtered,c=e.getMeetings,r=e.loading;return Object(a.useEffect)((function(){c()}),[]),null===t||0!==t.length||r?Object(A.jsx)(a.Fragment,{children:null===t||r?Object(A.jsx)(T,{}):Object(A.jsx)(L.a,{children:null!==n?n.map((function(e){return Object(A.jsx)(Z.a,{timeout:500,classNames:"item",children:Object(A.jsx)(W,{meeting:e})},e._id)})):t.map((function(e){return Object(A.jsx)(Z.a,{timeout:500,classNames:"item",children:Object(A.jsx)(W,{meeting:e})},e._id)}))})}):Object(A.jsx)("h4",{children:"Please add a meeting"})},q=n(16),V=function(){var e=Object(a.useContext)(d),t=e.addMeeting,n=e.updateMeeting,c=e.clearCurrent,r=e.current;Object(a.useEffect)((function(){l(null!==r?r:{classname:"",classid:"",type:"personal"})}),[e,r]);var s=Object(a.useState)({classname:"",classid:"",type:"personal"}),i=Object(j.a)(s,2),o=i[0],l=i[1],u=o.classname,g=o.classid,E=o.type,B=function(e){return l(Object(h.a)(Object(h.a)({},o),{},Object(q.a)({},e.target.name,e.target.value)))},p=function(){c()};return Object(A.jsxs)("form",{onSubmit:function(e){e.preventDefault(),null===r?t(o):n(o),p()},children:[Object(A.jsxs)("h2",{className:"text-danger",children:[Object(A.jsx)("i",{class:"fas fa-chalkboard-teacher"}),"   ",r?"Edit Meeting":"Add Meeting"]}),Object(A.jsx)("input",{type:"text",placeholder:"Class Name",name:"classname",value:u,onChange:B}),Object(A.jsx)("input",{type:"text",placeholder:"Class Id",name:"classid",value:g,onChange:B}),Object(A.jsx)("h5",{children:"Meeting Type"}),Object(A.jsx)("input",{type:"radio",name:"type",value:"personal",checked:"personal"===E,onChange:B})," ","Personal"," ",Object(A.jsx)("input",{type:"radio",name:"type",value:"professional",checked:"professional"===E,onChange:B})," ","Professional",Object(A.jsx)("div",{children:Object(A.jsx)("input",{type:"submit",value:r?"Update Meeting":"Add Meeting",className:"btn btn-danger btn-block"})}),r&&Object(A.jsx)("div",{children:Object(A.jsx)("button",{className:"btn btn-light btn-block",onClick:p,children:"Clear"})})]})},z=function(){var e=Object(a.useContext)(d),t=Object(a.useRef)(""),n=e.filterMeetings,c=e.clearFilter,r=e.filtered;Object(a.useEffect)((function(){null===r&&(t.current.value="")}));return Object(A.jsx)("form",{children:Object(A.jsx)("input",{ref:t,type:"text",placeholder:"Filter Meetings...",onChange:function(e){""!==t.current.value?n(e.target.value):c()}})})},X=function(){var e=Object(a.useContext)(H);return Object(a.useEffect)((function(){e.loadUser()}),[]),Object(A.jsxs)("div",{className:"grid-2",children:[Object(A.jsx)("div",{children:Object(A.jsx)(V,{})}),Object(A.jsxs)("div",{children:[Object(A.jsx)(z,{}),Object(A.jsx)(P,{})]})]})},_=function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"About This App"}),Object(A.jsx)("p",{className:"my-1",children:"This is a full stack React app for Online meeting..."}),Object(A.jsxs)("p",{className:"bg-dark p",children:[Object(A.jsx)("strong",{children:"Version: "})," 1.0.0"]})]})},$=Object(a.createContext)(),ee=function(e){var t=Object(a.useContext)($),n=Object(a.useContext)(H),c=t.setAlert,r=n.login,s=n.error,i=n.clearErrors,o=n.isAuthenticated;Object(a.useEffect)((function(){o&&e.history.push("/"),"Invalid Credentials"===s&&(c(s,"danger"),i())}),[s,o,e.history]);var l=Object(a.useState)({email:"",password:""}),u=Object(j.a)(l,2),g=u[0],E=u[1],d=g.email,B=g.password,p=function(e){return E(Object(h.a)(Object(h.a)({},g),{},Object(q.a)({},e.target.name,e.target.value)))};return Object(A.jsxs)("div",{className:"form-container",children:[Object(A.jsxs)("h1",{children:["Account ",Object(A.jsx)("span",{className:"text-danger",children:"Login"})]}),Object(A.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===d||""===B?c("Please fill in all fields","danger"):r({email:d,password:B})},children:[Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(A.jsx)("input",{id:"email",type:"email",name:"email",value:d,onChange:p,required:!0})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("label",{htmlFor:"password",children:"Password"}),Object(A.jsx)("input",{id:"password",type:"password",name:"password",value:B,onChange:p,required:!0})]}),Object(A.jsx)("input",{type:"submit",value:"Login",className:"btn btn-danger btn-block"})]})]})},te=n(71),ne=function(e,t){switch(t.type){case F:return[].concat(Object(B.a)(e),[t.payload]);case G:return e.filter((function(e){return e.id!==t.payload}));default:return e}},Ae=function(e){var t=Object(a.useReducer)(ne,[]),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(A.jsx)($.Provider,{value:{alerts:c,setAlert:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,A=Object(te.a)();r({type:F,payload:{msg:e,type:t,id:A}}),setTimeout((function(){return r({type:G,payload:A})}),n)}},children:e.children})},ae=function(e,t){switch(t.type){case U:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case y:case k:return localStorage.setItem("token",t.payload.token),Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case D:case R:case S:case M:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null,error:t.payload});case Y:return Object(h.a)(Object(h.a)({},e),{},{error:null});default:return e}},ce=function(e){e?E.a.defaults.headers.common["x-auth-token"]=e:delete E.a.defaults.headers.common["x-auth-token"]},re=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:null},n=Object(a.useReducer)(ae,t),c=Object(j.a)(n,2),r=c[0],s=c[1],i=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&ce(localStorage.token),e.prev=1,e.next=4,E.a.get("/api/auth");case 4:t=e.sent,s({type:U,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:R});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,A;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,E.a.post("/api/users",t,n);case 4:A=e.sent,s({type:y,payload:A.data}),i(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s({type:D,payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,A;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,E.a.post("/api/auth",t,n);case 4:A=e.sent,s({type:k,payload:A.data}),i(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s({type:S,payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(H.Provider,{value:{token:r.token,isAuthenticated:r.isAuthenticated,loading:r.loading,user:r.user,error:r.error,register:o,loadUser:i,login:g,logout:function(){return s({type:M})},clearErrors:function(){return s({type:Y})}},children:e.children})},se=function(){var e=Object(a.useContext)($);return e.alerts.length>0&&e.alerts.map((function(e){return Object(A.jsxs)("div",{className:"alert alert-".concat(e.type),children:[Object(A.jsx)("i",{className:"fas fa-info-circle"})," ",e.msg]},e.id)}))},ie=n(36),oe=function(e){var t=e.component,n=Object(ie.a)(e,["component"]),c=Object(a.useContext)(H),r=c.isAuthenticated,s=c.loading;return Object(A.jsx)(i.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return r||s?Object(A.jsx)(t,Object(h.a)({},e)):Object(A.jsx)(i.a,{to:"/login"})}}))};localStorage.token&&ce(localStorage.token);var le=function(){return Object(A.jsx)(re,{children:Object(A.jsx)(v,{children:Object(A.jsx)(Ae,{children:Object(A.jsx)(s.a,{children:Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(K,{}),Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(se,{}),Object(A.jsxs)(i.d,{children:[Object(A.jsx)(oe,{exact:!0,path:"/",component:X}),Object(A.jsx)(i.b,{exact:!0,path:"/about",component:_}),Object(A.jsx)(i.b,{exact:!0,path:"/login",component:ee})]})]})]})})})})})};r.a.render(Object(A.jsx)(le,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d680750a.chunk.js.map