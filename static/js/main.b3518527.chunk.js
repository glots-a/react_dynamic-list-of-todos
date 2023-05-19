(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c.n(a),n=c(2),l=c(1),o=c.n(l);c(10),c(11);function i(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var d;!function(e){e.All="all",e.Active="active",e.Complited="completed"}(d||(d={}));var r=c(3),j=c.n(r),u=c(0),b=o.a.memo((function(e){var t=e.todo,c=e.onTodoSelect,a=e.todoStatus,s=t.id,n=t.title,l=t.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":a}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:s}),Object(u.jsx)("td",{className:"is-vcentered",children:l&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-success":l,"has-text-danger":!l}),children:n})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()({"far fa-eye":!a,"far fa-eye-slash":a})})})})})]})})),h=o.a.memo((function(e){var t=e.todos,c=e.selectedTodo,a=e.onTodoSelect;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.id===(null===c||void 0===c?void 0:c.id);return Object(u.jsx)(b,{todo:e,onTodoSelect:a,todoStatus:s},t)}))})]})})),m=o.a.memo((function(e){var t=e.onInputChange,c=e.inputValue,a=e.option,s=e.onFilterChange;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return s(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return t(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return t("")}})})]})]})})),O=(c(13),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),x=function(e){var t=e.selectedTodo,c=e.onClose,a=Object(l.useState)(null),s=Object(n.a)(a,2),o=s[0],d=s[1],r=Object(l.useState)(!0),j=Object(n.a)(r,2),b=j[0],h=j[1];return Object(l.useEffect)((function(){var e;(e=t.userId,i("/users/".concat(e))).then((function(e){d(e)})).catch((function(e){return"Get user data: ".concat(e)})).finally((function(){return h(!1)}))}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),b?Object(u.jsx)(O,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:null===o||void 0===o?void 0:o.email,children:null===o||void 0===o?void 0:o.name})]})]})]})]})},f=function(){var e=Object(l.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)([]),o=Object(n.a)(s,2),r=o[0],j=o[1],b=Object(l.useState)(!1),f=Object(n.a)(b,2),p=f[0],v=f[1],N=Object(l.useState)(""),y=Object(n.a)(N,2),g=y[0],C=y[1],k=Object(l.useState)(d.All),S=Object(n.a)(k,2),T=S[0],w=S[1],A=Object(l.useCallback)((function(){a(null)}),[]),I=Object(l.useMemo)((function(){return r.filter((function(e){var t=e.title.toLowerCase().includes(g.toLowerCase().trim());switch(T){case d.Active:return t&&!e.completed;case d.Complited:return t&&e.completed;default:return t}}))}),[r,T,g]),_=Object(l.useCallback)((function(e){w(e)}),[]),E=Object(l.useCallback)((function(e){C(e)}),[]),L=Object(l.useCallback)((function(e){a(e)}),[]);return Object(l.useEffect)((function(){i("/todos").then(j).catch((function(e){return"".concat(e," error in TODO's data")})).finally((function(){return v(!1)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(m,{onInputChange:E,inputValue:g,option:T,onFilterChange:_})}),Object(u.jsxs)("div",{className:"block",children:[p&&Object(u.jsx)(O,{}),Object(u.jsx)(h,{todos:I,selectedTodo:c,onTodoSelect:L})]})]})})}),c&&Object(u.jsx)(x,{selectedTodo:c,onClose:A})]})};s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b3518527.chunk.js.map