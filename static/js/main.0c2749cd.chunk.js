(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(5),a=n.n(s),l=(n(10),n(11),n(0)),o=function(e){return Object(l.jsxs)("div",{className:"card",style:{background:"#e3e3e3",marginTop:"20px"},children:[Object(l.jsx)("div",{className:"card-title",style:{padding:"10px"},children:e.title}),e.code&&Object(l.jsx)("div",{className:"card-subtitle text-muted",children:Object(l.jsx)("pre",{children:Object(l.jsx)("code",{children:null===e||void 0===e?void 0:e.code})})}),Object(l.jsx)("div",{className:"card-body",children:e.children})]})},r=function(e){var t=e.onClick;return Object(l.jsx)("button",{className:"btn btn-default pull-right",title:"refresh data",onClick:t,children:Object(l.jsx)("i",{className:"fa fa-refresh",style:{fontSize:"15px",display:"flex"}})})},j=function(){return Object(l.jsxs)("div",{className:"col",style:{marginTop:"20px"},children:[Object(l.jsx)("h4",{style:{textAlign:"center"},children:"Follow Us"}),Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center",textalign:"center"},children:[Object(l.jsx)("a",{href:"https://facebook.com/dhpradeep25",style:{textDecoration:"none"},children:Object(l.jsx)("i",{className:"fa fa-facebook",style:{fontSize:"25px"}})}),Object(l.jsx)("a",{href:"https://github.com/dhpradeep",style:{textDecoration:"none",paddingLeft:"10px"},children:Object(l.jsx)("i",{className:"fa fa-github",style:{fontSize:"25px"}})}),Object(l.jsx)("a",{href:"https://linkedin.com/in/dhpradeep25/",style:{textDecoration:"none",paddingLeft:"10px"},children:Object(l.jsx)("i",{className:"fa fa-linkedin",style:{fontSize:"25px"}})}),Object(l.jsx)("a",{href:"https://stackoverflow.com/users/8653313/pradip-dhaka/",style:{textDecoration:"none",paddingLeft:"10px"},children:Object(l.jsx)("i",{className:"fa fa-stack-overflow",style:{fontSize:"25px"}})})]})]})},d=n(2),b=n(3),u=Array(100).fill().map((function(){return{likes:Math.floor(100*Math.random()),user:Math.random().toString(36).substring(7),active:Math.random()>.5?"true":"false"}})),x=function(){return Object(l.jsx)("h4",{style:{textAlign:"center"},children:"Complete Table"})},O=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),a=Object(d.a)(s,2),j=a[0],O=a[1];return Object(c.useEffect)((function(){setTimeout((function(){i(u)}),5e3)}),[]),Object(l.jsxs)(o,{title:Object(l.jsx)(x,{}),code:'<ESTable\n    data={user}\n    fields={[\n        {\n            name: "Username",\n            key: "user"\n        },\n        {\n            name: "Likes",\n            key: "likes",\n            isSortable: true\n        },\n        {\n            name: "Active",\n            key: "active",\n        },\n    ]}\n    showPagination={true}\n    title="Table <b>Details</b>"\n    loadingTime={5000}\n    loading={loading}\n    showSearch={true}\n    onDeleteAction={(e) => onDelete(e)}\n    onEditAction={(e) => onEdit(e)}\n    addButton={{\n        title: "Add Button",\n        onClick: () => alert("Add Button Clicked"),\n    }}\n/>',children:[Object(l.jsx)(r,{onClick:function(){O(!0),setTimeout((function(){O(!1)}),5e3)}}),Object(l.jsx)(b.ESTable,{data:n,fields:[{name:"Username",key:"user"},{name:"Likes",key:"likes",isSortable:!0},{name:"Status",key:"active"}],showPagination:!0,title:"Table <b>Details</b>",loadingTime:5e3,loading:j,showSearch:!0,onDeleteAction:function(e){return t=e,alert("Row is: ".concat(JSON.stringify(t)));var t},onEditAction:function(e){return t=e,alert("Row is: ".concat(JSON.stringify(t)));var t},addButton:{title:"Add Button",onClick:function(){return alert("Add Button Clicked")}}})]})},f=function(){return Object(l.jsx)("h4",{style:{textAlign:"center"},children:"Table with actions"})},h=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),a=Object(d.a)(s,2),j=a[0],x=a[1];return Object(c.useEffect)((function(){setTimeout((function(){i(u)}),5e3)}),[]),Object(l.jsxs)(o,{title:Object(l.jsx)(f,{}),code:"const onDelete = (row) => alert(Row is: ${JSON.stringify(row)});\nconst onEdit = (row) => alert(Row is: ${JSON.stringify(row)});\n\n<ESTable\n  ...\n  onDeleteAction={(e) => onDelete(e)}\n  onEditAction={(e) => onEdit(e)}\n  ...\n/>",children:[Object(l.jsx)(r,{onClick:function(){x(!0),setTimeout((function(){x(!1)}),5e3)}}),Object(l.jsx)(b.ESTable,{data:n,fields:[{name:"Username",key:"user"},{name:"Likes",key:"likes"},{name:"Status",key:"active"}],showPagination:!0,title:"Table <b>Details</b>",loadingTime:5e3,loading:j,showSearch:!0,onDeleteAction:function(e){return t=e,alert("Row is: ".concat(JSON.stringify(t)));var t},onEditAction:function(e){return t=e,alert("Row is: ".concat(JSON.stringify(t)));var t}})]})},m=function(){return Object(l.jsx)("h4",{style:{textAlign:"center"},children:"Table with add actions"})},y=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),a=Object(d.a)(s,2),j=a[0],x=a[1];return Object(c.useEffect)((function(){setTimeout((function(){i(u)}),5e3)}),[]),Object(l.jsxs)(o,{title:Object(l.jsx)(m,{}),code:'<ESTable\n  ...\n  addButton={{\n    title: "Add Button",\n    onClick: () => alert("Add Button Clicked"),\n  }}\n  ...\n/>',children:[Object(l.jsx)(r,{onClick:function(){x(!0),setTimeout((function(){x(!1)}),5e3)}}),Object(l.jsx)(b.ESTable,{data:n,fields:[{name:"Username",key:"user"},{name:"Likes",key:"likes"},{name:"Status",key:"active"}],showPagination:!0,title:"Table <b>Details</b>",loadingTime:5e3,loading:j,showSearch:!0,onDeleteAction:function(e){return t=e,alert("Row is: ".concat(JSON.stringify(t)));var t},onEditAction:function(e){return t=e,alert("Row is: ".concat(JSON.stringify(t)));var t},addButton:{title:"Add Button",onClick:function(){return alert("Add Button Clicked")}}})]})},g=function(){return Object(l.jsx)("h4",{style:{textAlign:"center"},children:"Table with search and pagination"})},k=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),a=Object(d.a)(s,2),j=a[0],x=a[1];return Object(c.useEffect)((function(){setTimeout((function(){i(u)}),5e3)}),[]),Object(l.jsxs)(o,{title:Object(l.jsx)(g,{}),code:"<ESTable\n  ...\n  showPagination={true}\n  showSearch={true}\n  ...\n/>",children:[Object(l.jsx)(r,{onClick:function(){x(!0),setTimeout((function(){x(!1)}),5e3)}}),Object(l.jsx)(b.ESTable,{data:n,fields:[{name:"Username",key:"user"},{name:"Likes",key:"likes"},{name:"Status",key:"active"}],showPagination:!0,title:"Table <b>Details</b>",loadingTime:5e3,loading:j,showSearch:!0})]})},p=function(){return Object(l.jsx)("h4",{style:{textAlign:"center"},children:"Simple Table"})},v=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),a=Object(d.a)(s,2),j=a[0],x=a[1];return Object(c.useEffect)((function(){setTimeout((function(){i(u)}),5e3)}),[]),Object(l.jsxs)(o,{title:Object(l.jsx)(p,{}),code:"<ESTable\n  ...\n  fields={[]}\n  data={[]}\n  ...\n/>",children:[Object(l.jsx)(r,{onClick:function(){x(!0),setTimeout((function(){x(!1)}),5e3)}}),Object(l.jsx)(b.ESTable,{data:n,fields:[{name:"Username",key:"user"},{name:"Likes",key:"likes"},{name:"Status",key:"active"}],showPagination:!1,title:"Table <b>Details</b>",loadingTime:5e3,loading:j})]})};var S=function(){var e=function(){return Object(l.jsx)("h4",{style:{textAlign:"center"},children:"How to Use"})};return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(j,{})})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",style:{paddingRight:"40px"},children:Object(l.jsx)(o,{title:Object(l.jsx)(e,{}),code:"\n  npm i @eversoft/react-table\n  ",children:Object(l.jsx)("a",{href:"https://github.com/Eversoft-Group/react-table",style:{textDecoration:"none"},children:Object(l.jsx)("i",{className:"fa fa-github",style:{fontSize:"25px"}})})})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h4",{style:{marginTop:"25px"},children:"#Examples"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(v,{})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(k,{})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(h,{})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(y,{})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(O,{})})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("h4",{style:{textAlign:"center",padding:"20px"},children:"Thank you for visit!"})})]})]})})};n(27),n(28);a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0c2749cd.chunk.js.map