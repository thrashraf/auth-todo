(this["webpackJsonpauth-client"]=this["webpackJsonpauth-client"]||[]).push([[0],{33:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(16),l=a.n(n),i=(a(33),a(5)),r=a(3),o=a(2),j=a(0),d=function(e){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("button",{onClick:e.onClick,className:" bg-blue-600 text-white rounded-md px-5 py-2",children:e.name})})},u=a(56),b=c.a.createContext({}),h=function(){var e=Object(u.a)(["user"]),t=Object(r.a)(e,3),a=(t[0],t[1],t[2]),n=Object(o.f)(),l=Object(s.useContext)(b),h=Object(o.e)().pathname,x=Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("p",{className:"cursor-pointer",children:Object(j.jsx)(i.b,{to:"/admin",children:"USERS"})}),Object(j.jsx)("p",{className:"cursor-pointer",children:Object(j.jsx)(i.b,{to:"/todos",children:"TODOS"})})]});return Object(j.jsxs)("div",{className:"flex w-full justify-between py-5 px-10 font-mono bg-gray-100",style:"/login"===h||"/signup"===h?{display:"none"}:{display:"flex"},children:[Object(j.jsxs)("section",{className:"flex w-1/3 justify-evenly font-bold ".concat(l.data?"flex":"hidden"),children:[Object(j.jsx)("p",{className:" cursor-pointer",children:Object(j.jsx)(i.b,{to:"/",children:"HOME"})}),l.data?Object(j.jsx)("p",{className:"cursor-pointer",children:Object(j.jsx)(i.b,{to:"/profile",children:"PROFILE"})}):null,l.data&&"Admin"===l.data.role?x:null]}),Object(j.jsx)("section",{className:"flex  ".concat(l.data?"justify-between":" w-full justify-end "),children:Object(j.jsx)(d,{onClick:l.data?function(){a("token"),n("/"),l.setData(null)}:function(){return n("/login")},name:l.data?"LOGOUT":"LOGIN"})})]})},x=function(e){return Object(j.jsxs)("div",{className:" h-full",children:[Object(j.jsx)(h,{}),e.children]})},O=a(12),m=a(4),p=a.n(m),f=a.p+"static/media/delete.956af00f.png",g=a.p+"static/media/icon-check.a8fb15d0.svg",A=void 0,C=function(e){p.a.defaults.withCredentials=!0;var t=Object(s.useContext)(b),a=t?t.data:null,c=function(e){var s=a.todo.findIndex((function(t){return t.todoId===e})),c=Object(O.a)({},t.data);c.todo[s].isCheck=!c.todo[s].isCheck,t.setData(c);var n={id:e,isCheck:a.todo[s].isCheck};p.a.patch("/api/todo/updateTodo/:id",n,{withCredentials:!0}).then((function(e){})).catch((function(e){return console.log(e)}))},n=function(e){p.a.delete("/api/todo/deleteTodo/".concat(e),{withCredentials:!0}).then((function(s){console.log(s);var c=a.todo.findIndex((function(t){return t.todoId===e})),n=Object(O.a)({},t.data);n.todo.splice(c,1),t.setData(n)})).catch((function(e){return console.log(e)}))};return Object(j.jsxs)("div",{className:"mt-10 text-center",children:[function(){if(!a||a&&0===a.todo.length)return Object(j.jsx)("section",{className:"flex justify-between  bg-white px-7 py-5 rounded-lg dark:bg-gray-800 dark:text-white dark:line-through transition-colors duration-300 ease-out",children:Object(j.jsx)("section",{className:"flex",children:Object(j.jsx)("li",{className:"list-none pl-5",children:" Plan your day \ud83d\udc4b\ud83c\udf43"})})})}(),a?a.todo.filter((function(t){return"Active"===e.filter?!t.isCheck:"Completed"===e.filter?t.isCheck:t})).map((function(e){return Object(j.jsxs)("section",{className:"flex justify-between  bg-white px-7 py-5 dark:bg-gray-800 dark:text-white dark:line-through transition-colors duration-300 ease-out ".concat(1===a.todo.length?"rounded-md":"first:rounded-firstChild last:rounded-lastChild "," "),children:[Object(j.jsxs)("section",{className:"flex",children:[Object(j.jsx)("span",{onClick:c.bind(A,e.todoId),className:"w-6 h-6 bg-white border border-gray-400 rounded-full dark:bg-gray-900 dark:border-gray-900",style:e.isCheck?{background:"linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,45,252,1) 100%)"}:null,children:Object(j.jsx)("img",{src:g,alt:"check",className:"w-3 h-3 relative top-1 left-1",style:{display:e.isCheck?"block":"none"}})}),Object(j.jsx)("li",{className:"list-none pl-5",style:e.isCheck?{textDecoration:"line-through",textDecorationColor:"gray"}:null,children:e.input})]}),Object(j.jsx)("img",{src:f,alt:"delete",className:"w-5 h-5 cursor-pointer",onClick:n.bind(A,e.todoId)})]},e.todoId)})):null]})},w=function(e){var t=function(t){e.setFilter(t.target.innerHTML)},a=function(t){return t===e.filter?{color:"#998CEB"}:null};return Object(j.jsxs)("div",{className:"bg-white rounded-input p-4 text-gray-400 mt-10 flex justify-evenly text-sm dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-out",children:[Object(j.jsx)("button",{onClick:t,style:a("All"),children:"All"}),Object(j.jsx)("button",{onClick:t,style:a("Active"),children:"Active"}),Object(j.jsx)("button",{onClick:t,style:a("Completed"),children:"Completed"})]})},v=function(){var e=Object(s.useState)("All"),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(r.a)(n,2),i=l[0],d=l[1],u=Object(s.useContext)(b),h=Object(o.f)();return Object(j.jsx)("div",{className:"w-full h-full bg-gray-100 ",children:Object(j.jsxs)("section",{className:"tablet:m-auto  bg-no-repeat bg-cover h-52 w-full bg-desktop-light dark:bg-desktop-dark py-10 px-10",children:[Object(j.jsx)("header",{className:" max-w-lg m-auto",children:Object(j.jsx)("div",{className:"bg-white mt-5 rounded-lg ",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={input:i,isCheck:!1};u.data||h("/login"),p.a.post("/api/todo/createTodo",t,{withCredentials:!0}).then((function(e){var t={todoId:e.data.todoId,input:e.data.input,isCheck:!1},a=Object(O.a)({},u.data);a.todo.push(t),u.setData(a),d("")}))},children:Object(j.jsx)("input",{placeholder:"Create a new todo...",className:"text-sm py-5 px-5 w-full rounded-xl focus:border-white focus:outline-none",value:i,onChange:function(e){return d(e.target.value)}})})})}),Object(j.jsx)("main",{className:"max-w-lg m-auto",children:Object(j.jsx)(C,{filter:a})}),Object(j.jsx)("footer",{className:"max-w-lg m-auto pb-20",children:Object(j.jsx)(w,{setFilter:c,filter:a})})]})})},N=function(e){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("input",{placeholder:e.placeholder,type:e.type,className:"px-10 py-4 rounded-md border-gray-200 border-2 w-96",value:e.value,onChange:e.onChange})})},y=a(6),k=(a(15),function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(r.a)(n,2),u=l[0],h=l[1],x=Object(s.useContext)(b),O=Object(o.f)();return Object(j.jsxs)("div",{className:"w-full grid grid-cols-2 font-mono mt-10 overflow-hidden",children:[Object(j.jsx)("section",{className:"",children:Object(j.jsx)("img",{src:"https://doodleipsum.com/700/flat?i=0462f38b936928e4aded312497d316a7",alt:"",className:""})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:a,password:u};p.a.post("/api/user/login",t,{withCredentials:!0}).then((function(e){x.setData(e.data),O(e.data.redirectUrl)})).catch((function(e){y.b.error(e.response.data.message)}))},className:"flex flex-col justify-center items-center",children:[Object(j.jsxs)("section",{className:"flex flex-col justify-center items-center",children:[Object(j.jsxs)("section",{className:"flex mb-10",children:[Object(j.jsx)("span",{children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADeklEQVR4nO2aSWgUQRSGf9e4Hdw9uATFKLkYQdxAXJCoBwm4JAf1FBEEwYPxIEhwuygiaJiLXkRFiDsIikREFAzeRETB5RDBNQdB40KiRt+zKyA9r2arVz2t1Ac/NDPdf/2vp6eruqqBQCAQCCRKFWkr6QDppNF+89n0MubyyhBSE+kx6Vce8T47zDH/BfWkl8hfeFwdpHXJx9WjH2kvii88rmOk/slGd4eLPwP34vt0Ktn47uxG7oJ6Ef3Xr5Gum+3ePMfsSrQCBxaSfkIuoou0hzRROI4/22f2kY5lz/mes6twG3IBj0hTCzh+mtlX8rjrIa8qtZCDPyeNLsJnDOmFxWu5Yl51TkC+dOeU4DUP8n3huEpSD3BX9RbZgS86eF4W/N4gpd1iJeRL1mUw02DxnOSU1BMLIIed7OA5xeKZyt6gDnLYCgfPCotnnVNSTyyFHHacg+cEi+cSl6C+mAk57CIHz8UWzyqnpJ4YSvqG7LCHHTyPCH5fkeJHZR7bxwN/Io0vwWss6aPgd1UlqSe2QL5kzyF6QiwU3veCxWuzYl51hpFeQw5+lDSgAA/ep8Xi8cq0kWpsVwHrFmlWjmNrYH+YYjV6S60I/4JtsBfBzwb3ED36Nhrxdjvsj9GsGyjsCkoFo0jPYC+mWD0ljUy0AgUqSQ/hXvwDREPif5IRpFaUXvxZ0vDEU3uAR3T8Hy+0cN7XZQSZWqoRTW7eJD1BNP/XZbbbzHfVZUsXCAQCgdLgURqvAjeTMqTznpQxbdQjJSPDFYi6rx7oDXsLVY9pu9Z7lQIzEPXlSRdtE5+IxKbJ+Ix/8FxQKeLZo9Ue6/7DWtL3MheaS5xtja/iZ5M+5wnAMzZ34O8myN62Gac+8dC6Rrv4wYhWeKUGeQHzEmkuipv3KxVugxdOr1jysHj+YJBmo9stDfE0+AbNhopkPemLkIu1TasR/vXfCw38IK3UasSBVYiyxPO9g9JVYHvp4aCGuRKHIGdUeZkiIxjzYkcqRmIGziK9W9SiYX5fMG7VMFZGWkhp1zCW3vJs0jBWZieyc3ZoGHcLxhs1jJXZhOyc3RrG0s2lQcNYGdvrNM6EEyAonAANY2XCCYCnE9ApmC7TMFaGM8VzdmoYN8dMebFyoIaxMpyJs/2dtVnLnPv904hedU/TEDgOZ+OMnDWNY5VAIBBIF78B8YnTCXXffSQAAAAASUVORK5CYII=",alt:"username",className:"w-5 h-5 relative left-8 top-5"})}),Object(j.jsx)(N,{placeholder:"email",type:"email",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsxs)("section",{className:"flex mb-10",children:[Object(j.jsx)("span",{children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdElEQVR4nO2bS0hUURzGTy8s6AFl0aoWEUj0IigisEVBNUFGhjEFmUGrtE0gLqpFKzclvazApFWh9li4jBZS9HBTRFTL6LGotEKSSjLr/zFzYRjunfO453/mzPV+8Nuk3e/7f+p9nHtGCHdaRjQTN4lnxBAxTvwjholXxC2ilVjjMBerZhAHiaciN6gOr4njxGznqS2pnngr9Acv5gvRQkx1G99c84k7Iv7gxTwmljqcw0g1ws5PPQqcKzY7m0ZTa4mvgm/4gJ/EdkczKWs58VnwDx8wSqx3MpmCZhHPhbvhAz4SCxzMJ9UloR56hLhIZIhF+f9fRSwhskQ38UvjeD3cw8m0gfgr5EEniPPEHIVjLha5UicUjgu2WJvGQPciQhWftDIGx95NfFc4/pNYE8TQOoVwY8TWGB61Qu1PojaGh7E6FYK1WfBpVPDpsuCjpSnEJ0koXBls3b4OSLyGLHopaZUkEMha9Nuk4Of0CfKQJAxOXtMt+uE37p3E87BFP6naJWHuMnhelni2M3hGqksS5gSDZ6vE8xqDZ6R6JGGOMHjul3jeYPCMVJ8kTAOD50qJ52kGz0iVowAo6jyA5bNqJs9QlasACL8J9XkPgAWSKka/UJWzAC+UFiDSAiZXAbjPxvN5cOLBM3ipAs4WfG85QNbVNgbfRryRDOszuDwar0egyeDdXSWDGfbqDo+bihEPwtsCT6daK8jHPAhtm2adAq57ENg23ToFyC5zlUhfWkBaQFpAWoAvBWAd/wLRlAcvTIcnSwE49twQz3nE7aQXgJep00r44mv3k1oAXnfXKHivSGoBLzT8XyaxgH4N//4kFqCzkWEwiQVgo4PK2v1C4ncSCwBnFLw7mLy9KABXgqMlfFuE+uaoiiwgoC7Es47Z06sCwpbNG9ICPCqglzlM2P6hLLNnr04Bsu0ocekI8TzH7NmpU8Ap5jDYQLmjwC+T/zdOz5M6BRxgDgNwucNniQYF36WvEK1te3iJ8MdBKFeMC4Ot9Q88CG6LAd3hoT0eBLfFLpMCoEcehI/LQ9PhIewLGPVgCFN+iNy+5ljCn4KLs7RtkHlf3OEDNQmeZ3QukLXR1vCBsGX9vQfDycCu8o22hw+Ej8jhUyDfPBi0GGTChuqZXMMXCiY7iasit9b3QfDfyhYylveE9xWRu5U2Gvw/aNu2j+HOFakAAAAASUVORK5CYII=",alt:"username",className:"w-5 h-5 relative left-8 top-5"})}),Object(j.jsx)(N,{placeholder:"password",type:"password",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(d,{name:"LOGIN"}),Object(j.jsxs)("p",{className:"mt-10",children:["Doesn't have an account? ",Object(j.jsx)("span",{className:"text-blue-600 underline",children:Object(j.jsx)(i.b,{to:"/signup",children:"Register"})})]})]}),Object(j.jsx)(y.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})]})}),E=a(18),S=a.n(E),D=a(27),U=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(r.a)(n,2),o=l[0],u=l[1],h=Object(s.useState)(""),x=Object(r.a)(h,2),O=x[0],m=x[1],f=Object(s.useState)(""),g=Object(r.a)(f,2),A=g[0],C=g[1],w=Object(s.useContext)(b),v=function(){var e=Object(D.a)(S.a.mark((function e(t){var s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),O===A?(s={name:a,email:o,password:O},p.a.post("/api/user/signup",s,{withCredentials:!0}).then((function(e){var t=e.data;y.b.success("successful create account"),w.setData(t)})).catch((function(e){var t=e.response.data.message;y.b.error(t)}))):y.b.error("password not match");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"w-full grid grid-cols-2 font-mono mt-20",children:[Object(j.jsx)("section",{className:"",children:Object(j.jsx)("img",{src:"https://doodleipsum.com/700/flat?i=6afc4821e5d788380a4bb54d9dee5402",alt:"",className:"w-4/5"})}),Object(j.jsxs)("form",{onSubmit:v,className:"flex flex-col justify-center items-center",children:[Object(j.jsxs)("section",{className:"flex flex-col justify-center items-center",children:[Object(j.jsx)("section",{className:"flex mb-10",children:Object(j.jsx)(N,{placeholder:"name",type:"text",value:a,onChange:function(e){return c(e.target.value)}})}),Object(j.jsx)("section",{className:"flex mb-10",children:Object(j.jsx)(N,{placeholder:"email@test.com",type:"email",value:o,onChange:function(e){return u(e.target.value)}})}),Object(j.jsx)("section",{className:"flex mb-10",children:Object(j.jsx)(N,{placeholder:"password",type:"password",value:O,onChange:function(e){return m(e.target.value)}})}),Object(j.jsx)("section",{className:"flex mb-10",children:Object(j.jsx)(N,{placeholder:"Re Type-password",type:"password",value:A,onChange:function(e){return C(e.target.value)}})}),Object(j.jsx)(d,{name:"SIGN UP"}),Object(j.jsxs)("p",{className:"mt-10",children:["Already have an account? ",Object(j.jsx)("span",{className:"text-blue-600 underline",children:Object(j.jsx)(i.b,{to:"/login",children:"Login"})})]})]}),Object(j.jsx)(y.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})]})},I=a.p+"static/media/profile.7ce75ec1.png",H=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(r.a)(n,2),i=l[0],o=l[1],u=Object(s.useState)(""),b=Object(r.a)(u,2),h=b[0],x=b[1];return Object(j.jsxs)("div",{className:"max-w-lg m-auto pb-10",children:[Object(j.jsx)("img",{src:I,alt:"profile",className:" rounded-full w-32 h-32 m-auto mb-10"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i===h?p.a.post("/api/user/updateProfile",{password:i},{withCredentials:!0}).then((function(e){console.log(e),y.b.success(e.data.message)})).catch((function(e){y.b.error(e.response.data.message)})):y.b.error("password must be same")},className:"flex flex-col items-center",children:[Object(j.jsx)("section",{className:"flex mb-10",children:Object(j.jsx)(N,{placeholder:"email",type:"text",value:a,onChange:function(e){return c(e.target.value)}})}),Object(j.jsx)("section",{className:"flex mb-10",children:Object(j.jsx)(N,{placeholder:"password",type:"password",value:i,onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("section",{className:"flex mb-10",children:Object(j.jsx)(N,{placeholder:"password",type:"password",value:h,onChange:function(e){return x(e.target.value)}})}),Object(j.jsx)(d,{name:"SAVE CHANGE",className:"m-auto"}),Object(j.jsx)(y.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})]})},L=a(28),T=function(e){return e.show?Object(j.jsx)("div",{className:" fixed top-0 left-0 w-full h-full z-40 bg-backdrop",onClick:e.clicked}):null},B=function(e){var t={transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"};return Object(j.jsxs)("div",{className:"bg-white rounded-lg max-w-lg w-1/3 fixed left-1/3 top-1/3 transition-all z-50 flex flex-col justify-center items-center ease-in-out duration-300",style:t,children:[Object(j.jsx)("div",{className:" w-1/2 text-left my-10",children:e.children}),Object(j.jsx)("img",{src:f,alt:"delete",className:"w-5 cursor-pointer mb-10",onClick:e.clicked})]})},Q=void 0,F=function(e){var t=Object(s.useState)(null),a=Object(r.a)(t,2),c=a[0],n=a[1],l=Object(s.useState)(!1),i=Object(r.a)(l,2),d=i[0],u=i[1],b=Object(s.useState)([]),h=Object(r.a)(b,2),x=h[0],O=h[1],m=Object(o.f)();Object(s.useEffect)((function(){p.a.get("/api/admin/allUser",{withCredentials:!0}).then((function(e){var t=[],a=e.data;for(var s in a)t.push({id:s,name:a[s].name,email:a[s].email,date:a[s].date,role:a[s].role});n(t)}))}),[]);var g=function(e){p.a.delete("/api/admin/deleteUser/".concat(e)).then((function(t){var a=c.findIndex((function(t){return t.id===e})),s=Object(L.a)(c);s.splice(a,1),n(s)}))},A=function(e){m("/admin/edituser",{state:{id:e}})},C=function(e){u(!0),p.a.get("/api/admin/UserTodo/".concat(e)).then((function(e){var t=[],a=e.data.todo;for(var s in a)t.push({id:s,data:a[s].input,isCheck:a[s].isCheck});O(t)})).catch((function(e){return console.log(e)}))},w=function(){u(!1),O([])};return Object(j.jsxs)("div",{children:[Object(j.jsx)(T,{show:d,clicked:w}),Object(j.jsx)(B,{show:d,clicked:w,children:x?x.map((function(e){return Object(j.jsx)("li",{className:"list-none pl-5",style:e.isCheck?{textDecoration:"line-through",textDecorationColor:"gray"}:null,children:e.data})})):null}),Object(j.jsx)("div",{className:"w-full h-full flex flex-col justify-center items-center text-left pb-20",children:Object(j.jsxs)("table",{className:"w-2/4 m-auto bg-gray-200 text-center rounded-md mt-10",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"w-40",children:[Object(j.jsx)("th",{className:" py-2 ",children:"NAME"}),Object(j.jsx)("th",{children:"EMAIL"}),Object(j.jsx)("th",{children:"ROLES"})]})}),Object(j.jsx)("tbody",{children:c?c.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"p-4 bg-white",children:t.name}),Object(j.jsx)("td",{className:"p-4 bg-white",children:t.email}),Object(j.jsx)("td",{className:"p-4 bg-white",children:t.role}),Object(j.jsx)("td",{className:"p-4 bg-white",children:Object(j.jsx)("img",{style:e.editUser?{display:"block"}:{display:"none"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVRoge2YvUvDQBiHVVAEXQTxG3EUcXNwcBMEQdS/wkVdFKqDSOyki5N2UEGcO/UjSekgnVwkgiBYdXETxVXcavwdJHLEJObSI2+Ee+ElH83dPc/lmlyupUWFChUqVHBhmuairutaqVQapWYRDoBnDMOwWWL/rVwuT1IzRQ4e/t9JAHTBC8/lK4bVBDVjYFSr1S5N09ogcRYkgd9ekD3UrL8CUDsAvMd24C8J5KxQ5bVarRuF1pEHEnO/WCz2c/AuXJ2TOPW5A4/sTkWGtyyrHQVvQnpDOAHxhe0Kqx/bLT/IQqEwZNt2K45z3PnnSqUyJtT7KDgjEx7ZCIMPkogFzwIFl2X2PHLVgd+NUKYO6EEmgZdZrzC8nwCOD5FTcRIQ4wLwbuqxwEMENpqsb1sA/gnP/ZHUCIjC48073BS8TAESeFkCKLdHAi9DIA58Pp/vSIVAHHi8ZfvQxjm5QFx47N+hjWtSAVyXjQvvtEEnIALPpgvuHxbHt9x5GgHALAnAP7C5DtfOB6kAptydzsTrRBQ+FQL47cqdPeKa47Bh44UnF2DjmO/ZIIkgeHIBnJv3QnolwuDTIJDx62lH4shvzKdKAOcvfMb7z8dIlFUEagHvN/M7rrt0v74itkMqkENuIufYikLMdmgfoxLaUQJBFUv7qA9L1P2ZiEASKVXAkL+wFUXAlCbgLC1aCQo02KxWmgALtpiKitcMuYu7fplF709LhVehQoWKxOIb8W5KNn/O1+wAAAAASUVORK5CYII=",onClick:A.bind(Q,t.id),alt:"delete",className:"w-5 cursor-pointer"})}),Object(j.jsx)("td",{className:"p-4 bg-white",children:Object(j.jsx)("img",{style:e.deleteUser?{display:"block"}:{display:"none"},src:f,onClick:g.bind(Q,t.id),alt:"delete",className:"w-5 cursor-pointer"})}),Object(j.jsx)("td",{className:"p-4 bg-white",children:Object(j.jsx)("img",{style:e.seeTodos?{display:"block"}:{display:"none"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/0lEQVRoge1ZS0hUURi2osKiAoMoKAhq1fvpQnusW0TI9Fr0WPSwNuHKFkFTRA+EYiQpohZtChILM0evTmUtpAfuVJCQijQiemv2MHX6Pj3KnZ9z7z0zd8YM7g8/987c//H9//nPOf89NysroIACCui/p/Ly8gl1dXUbamtriy3Luo1rM/gt7n+Qec//1LNiylLnX+POApAlAFUKfgeOJ8nUKY1Go0tHHTidIpMVANCfAvAEhp0BjkxNTc2yjAPHsGfD4Qlwr1/gGu6H3SuVlZXTMgIeGVoJJ+0umfwIvgG5feC1KK9ZuE4m8x4yuXi+H9ebuH5ysfOyvr5+TVrBA8BeGP7p4PAZrjswOpNM7VEWge1UurpAfjHYtICHsWMOTl7ByRY/tuPx+DgEUkBbDsk56Rd8iQP4axiVqb6M24i2YPOqg6/SVMEf12TkD65H0wVcEgI5CPu/NUGcScoQgO7WgP+K4d6YIewjhCDy4euLJogDRgYguBzcI5R7uHua6HOPsIY2txYA+U7mPTjCjc/EBnRWQf6zSGAvErjOVTEWi83UTKgek8xzuYSTS5b75tYHLjNZsSCXB3vdQr+zurp6tptSVDrlcmcI/qHppgXZB4ZBhNROnaDL1UsnvEfjrMTLidK9bAreBuSioe1TGt3CBCHulNxJhVCjSceoar5f6L5h9tgWkNVa3ybLCXKLveyHw+HxkG3QLChzR4Twx3UhwIm30DBDEQ34HI1cDrhDyF4w8QG5+ZD/JhJwa/Chaon7xMMiE8MKWKvQDbkA2SYCaDb1A9lDQndgsGfCj7sCQEtTU9PEJALosuu7dZMY9unCV5epH5YSQD8V+g2MrFFE9lg7y9MQAJbpGX4CgPxzoR9jAOs1S+euJAJoFboFLrKhVEsI8oe1JUTCj3viIXv7OYaGIyIBbU6TGDZfpH0Sk5C1BWrlsQtETUrJYRHo4IRlzau6D0nw1MGzRV72Vek8cl1GVYaKZClZhp0n5Mo0ul5s1CZD7rTUZdeqjVROaGYJwpu8nLAtgOz9JMDHTFY6+N5q3EqoaOdB4L0cLnaHJkGwPdCUU0JCmHlD8PmasnZv5lQQeZZ4qWB/DoOrvZyS2B5wcqrDrW7FPNQ6b1LzykZq7bTNwBFN9j7wtMHIgA/y/UIzTMyiNMKTCZ5QZAg7fRbK0Vec3CsliRPFcm6T+VKSnS7gHi/1kZQNMwhk5ayD4XY43uwHeMaPVYbJGtrGdUNLfgJH28fswZYtiFzwa6clckwfLQ5TVVXVFDg457HWp8qZPdy1EzK6Ag7vyF0yVeDWaB2vawLx/YHD9Kwoo2T/xMQPH2rn7bTUJybeq525Ykx9YgoooIAC8k1/AfmC6XCNnVZwAAAAAElFTkSuQmCC",onClick:C.bind(Q,t.id),alt:"eye",className:"w-5 cursor-pointer"})})]},t.id)})):null})]})})]})},P=function(){return Object(j.jsx)(F,{deleteUser:!0,editUser:!0})},V=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),l=Object(r.a)(n,2),i=l[0],u=l[1],b=Object(s.useState)(""),h=Object(r.a)(b,2),x=h[0],O=h[1],m=Object(s.useState)(""),f=Object(r.a)(m,2),g=f[0],A=f[1],C=Object(o.e)().state.id;Object(s.useEffect)((function(){p.a.get("/api/admin/userDetail/".concat(C)).then((function(e){var t=e.data;c(t.name),u(t.email),O(t.role)}))}),[C]);return Object(j.jsxs)("div",{className:" flex justify-center items-center",children:[Object(j.jsx)(y.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:C,name:a,email:i,role:x,password:g};y.b.promise(p.a.post("/api/admin/updateUserDetail",t,{withCredentials:!0}).then((function(e){})).catch((function(e){})),{pending:"Updating your account \ud83e\uddd1\u200d\ud83d\udd27",success:"Successful Upadate \u2705",error:"Something went wrong \ud83d\udea9"})},className:"grid grid-cols-2 gap-5 mt-20",children:[Object(j.jsxs)("section",{className:"flex flex-col",children:[Object(j.jsx)("span",{className:"text-sm text-gray-400 ml-2",children:"Name"}),Object(j.jsx)(N,{placeholder:"New Username",type:"text",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsxs)("section",{className:"flex flex-col",children:[Object(j.jsx)("span",{className:"text-sm text-gray-400 ml-2",children:"Email"}),Object(j.jsx)(N,{placeholder:"New email",type:"email",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)("section",{className:"flex flex-col",children:[Object(j.jsx)("span",{className:"text-sm text-gray-400 ml-2",children:"Role"}),Object(j.jsx)(N,{placeholder:"New Role",type:"text",value:x,onChange:function(e){return O(e.target.value)}})]}),Object(j.jsxs)("section",{className:"flex flex-col",children:[Object(j.jsx)("span",{className:"text-sm text-gray-400 ml-2",children:"Password"}),Object(j.jsx)(N,{placeholder:"New Password",type:"password",value:g,onChange:function(e){return A(e.target.value)}})]}),Object(j.jsx)("section",{className:"mt-20",children:Object(j.jsx)(d,{name:"SAVE CHANGES"})})]})]})},Y=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(F,{seeTodos:!0})})};var G=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1];Object(s.useEffect)((function(){p.a.get("/api/user/user",{withCredentials:!0}).then((function(e){console.log(e),c(e.data)}))}),[]);var n=Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(v,{}),exact:!0}),Object(j.jsx)(o.a,{path:"/login",element:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:"/signup",element:Object(j.jsx)(U,{})})]});return a&&(n=Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(v,{}),exact:!0}),Object(j.jsx)(o.a,{path:"/login",element:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:"/signup",element:Object(j.jsx)(U,{})}),Object(j.jsx)(o.a,{path:"/profile",element:Object(j.jsx)(H,{})})]}),"Admin"===a.role&&(n=Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(v,{}),exact:!0}),Object(j.jsx)(o.a,{path:"/login",element:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:"/signup",element:Object(j.jsx)(U,{})}),Object(j.jsx)(o.a,{path:"/profile",element:Object(j.jsx)(H,{})}),Object(j.jsx)(o.a,{path:"/admin",element:Object(j.jsx)(P,{})}),Object(j.jsx)(o.a,{path:"/admin/edituser",element:Object(j.jsx)(V,{})}),Object(j.jsx)(o.a,{path:"/todos",element:Object(j.jsx)(Y,{})})]}))),Object(j.jsx)(b.Provider,{value:{data:a,setData:c},children:Object(j.jsx)("div",{className:"h-full",children:Object(j.jsx)(x,{children:n})})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};l.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),M()}},[[54,1,2]]]);
//# sourceMappingURL=main.98084aee.chunk.js.map