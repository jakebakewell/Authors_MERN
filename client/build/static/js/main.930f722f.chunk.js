(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(17),o=n.n(s),r=(n(23),n(24),n(3)),i=n(5),j=n(4),u=n.n(j),h=n(1),l=function(t){var e=t.authorId,n=t.successCallback;return Object(h.jsx)("button",{onClick:function(t){u.a.delete("http://localhost:8000/api/authors/delete/".concat(e)).then((function(t){n()}))},className:"btn btn-danger",children:"Delete"})},b=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(!1),o=Object(i.a)(s,2),j=o[0],b=o[1];Object(c.useEffect)((function(){u.a.get("http://localhost:8000/api/authors").then((function(t){a(t.data.authors),b(!0)})).catch((function(t){return console.log(t)}))}),[n]);return Object(h.jsxs)("div",{children:[Object(h.jsx)(r.a,{to:"/new",children:"Add an Author"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("table",{className:"table table-bordered",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Author"}),Object(h.jsx)("th",{children:"Actions"})]})}),Object(h.jsx)("tbody",{children:j?n.map((function(t,e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.name}),Object(h.jsxs)("td",{children:[Object(h.jsx)(r.a,{to:"/edit/".concat(t._id),className:"btn btn-warning",children:"Edit"})," ",Object(h.jsx)(l,{authorId:t._id,successCallback:function(){return e=t._id,void a(n.filter((function(t){return t._id!=e})));var e}})]})]},e)})):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Loading..."}),Object(h.jsx)("td",{children:"Loading..."})]})})]})})]})},d=function(t){var e=t.name,n=t.setName,c=t.onSubmitProp;return Object(h.jsxs)("form",{onSubmit:c,children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"name",value:e,onChange:function(t){n(t.target.value)}})]}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]})},O=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),j=o[0],l=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(r.a,{to:"/",children:"Home"}),Object(h.jsx)("h4",{children:"Add a new author:"}),n.map((function(t,e){return Object(h.jsx)("p",{className:"text-danger",children:t},e)})),Object(h.jsx)(d,{onSubmitProp:function(t){t.preventDefault(),u.a.post("http://localhost:8000/api/authors/new",{name:j}).then((function(t){console.log(t),console.log("RES STATUS--\x3e",t.status),200==t.status&&Object(r.c)("/")})).catch((function(t){console.log("we in the catch!!",n);for(var e=t.response.data.errors,c=[],s=0,o=Object.keys(e);s<o.length;s++){var r=o[s];c.push(e[r].message)}a(c)}))},name:j,setName:l})]})},f=function(t){var e=t.id,n=Object(c.useState)(""),a=Object(i.a)(n,2),s=a[0],o=a[1],j=Object(c.useState)(""),l=Object(i.a)(j,2),b=l[0],O=l[1],f=!1,x=Object(c.useState)([]),p=Object(i.a)(x,2),m=p[0],g=p[1];Object(c.useEffect)((function(){u.a.get("http://localhost:8000/api/authors/".concat(e)).then((function(t){o(t.data.author.name)})).catch((function(t){return console.log(t)}))}),[]),Object(c.useEffect)((function(){u.a.get("http://localhost:8000/api/authors").then((function(t){g(t.data.authors)})).catch((function(t){return console.log(t)}))}),[m]);return function(){for(var t=0;t<m.length;t++)if(e==m[t]._id)return f=!0;f=!1}(),1==f?Object(h.jsxs)("div",{children:[Object(h.jsx)(r.a,{to:"/",children:"Home"}),Object(h.jsx)("h4",{children:"Edit this author:"}),b?Object(h.jsx)("p",{className:"text-danger",children:b}):"",Object(h.jsx)(d,{onSubmitProp:function(t){t.preventDefault(),u.a.put("http://localhost:8000/api/authors/update/".concat(e),{name:s}).then((function(t){console.log(t),t.data.author?Object(r.c)("/"):O(t.data.name.message)})).catch((function(t){return console.log(t)}))},name:s,setName:o})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)(r.a,{to:"/",children:"Home"}),Object(h.jsx)("h3",{children:"We're sorry, but we could not find the author you are looking for."})]})};var x=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Favorite Authors"}),Object(h.jsxs)(r.b,{children:[Object(h.jsx)(b,{path:"/"}),Object(h.jsx)(O,{path:"/new"}),Object(h.jsx)(f,{path:"/edit/:id"})]})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),s(t),o(t)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),p()}},[[50,1,2]]]);
//# sourceMappingURL=main.930f722f.chunk.js.map