(this.webpackJsonphomework_01=this.webpackJsonphomework_01||[]).push([[0],[,,,,,,function(e,t,a){e.exports={message:"Message_message__dtXXa",block_ava:"Message_block_ava__1RWlu",ava:"Message_ava__1Zm1-",content:"Message_content__3SSSM",text:"Message_text__vqjG8",name:"Message_name__sJxra",time:"Message_time__3s3Du",block_time:"Message_block_time__3e07R"}},,function(e,t,a){e.exports={affair:"Affair_affair__1vmRs",affair_button:"Affair_affair_button__1bnUk",affairItem:"Affair_affairItem__3cYba",high:"Affair_high__2_dzI",middle:"Affair_middle__35k_m",low:"Affair_low__IJUtT"}},,,function(e,t,a){e.exports={someClass:"Greeting_someClass__1acy3",errorSpan:"Greeting_errorSpan__10Jd2",error:"Greeting_error__WmTDo",inputOk:"Greeting_inputOk__3jYRW",buttonAdd:"Greeting_buttonAdd__2K0Rd"}},,function(e,t,a){e.exports={blue:"HW4_blue__12ROt",column:"HW4_column__2MkQz",testSpanError:"HW4_testSpanError__1K23x",siteForError:"HW4_siteForError__KKDJe"}},,function(e,t,a){e.exports={navbar:"Header_navbar__3RcUH",navLink:"Header_navLink__1uiyI",active:"Header_active__3bk66"}},function(e,t,a){e.exports={main_affairs:"Affairs_main_affairs__3uk_H",block_button:"Affairs_block_button__11yeW"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__cZHBs",errorInput:"SuperInputText_errorInput__3VDfk",error:"SuperInputText_error__1oc2O"}},function(e,t,a){e.exports={default:"SuperButton_default__1S_Ft",red:"SuperButton_red__2oUwW"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__prSe2",spanClassName:"SuperCheckbox_spanClassName__1S4Wx"}},function(e,t,a){e.exports={spanClassName:"SuperEditableSpan_spanClassName__24Y6x",inputInHW6:"SuperEditableSpan_inputInHW6__1HqTM"}},function(e,t,a){e.exports={blockSuperEditableSpan:"HW6_blockSuperEditableSpan__38VLh",buttonSetLocalStorage:"HW6_buttonSetLocalStorage__15HYN"}},function(e,t,a){e.exports={parentError404:"Error404_parentError404__3NKNP",error404:"Error404_error404__wmy_A"}},,,,function(e,t,a){e.exports={App:"App_App__2KNGR"}},,,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(25),s=a.n(c),i=(a(33),a(26)),o=a.n(i),l=a(10),j=a(15),u=a.n(j),b=a(0),d=function(e){var t=e.isActive;return u.a.navLink+(t?" "+u.a.active:"")};var m=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)(l.b,{className:d,to:"/pre-junior",children:"PreJunior"}),Object(b.jsx)(l.b,{className:d,to:"/junior",children:"Junior"}),Object(b.jsx)(l.b,{className:d,to:"/juniorPlus",children:"Junior+"})]}),Object(b.jsx)("hr",{})]})},x=a(2),_=a(6),h=a.n(_);var O=function(e){return Object(b.jsxs)("div",{className:h.a.message,children:[Object(b.jsx)("div",{className:h.a.block_ava,children:Object(b.jsx)("div",{className:h.a.ava,children:Object(b.jsx)("img",{src:e.avatar,alt:""})})}),Object(b.jsx)("div",{className:h.a.block_content,children:Object(b.jsxs)("div",{className:h.a.content,children:[Object(b.jsx)("div",{className:h.a.name,children:e.name}),Object(b.jsx)("div",{className:h.a.text,children:e.message})]})}),Object(b.jsx)("div",{className:h.a.block_time,children:Object(b.jsx)("div",{className:h.a.time,children:e.time})})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Yuki Kadono",v="some text some text some text some text some text some text some text ",k="05.32";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{avatar:f,name:p,message:v,time:k}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},N=a(3),C=a(8),S=a.n(C);var y=function(e){return Object(b.jsxs)("div",{className:S.a.affair,children:[Object(b.jsx)("div",{className:S.a.affairItem,children:e.affair._id}),Object(b.jsx)("div",{className:S.a.affairItem,children:e.affair.name}),Object(b.jsx)("div",{className:"".concat(S.a.affairItem," ").concat("high"===e.affair.priority?S.a.high:"middle"===e.affair.priority?S.a.middle:"low"===e.affair.priority?S.a.low:void 0),children:e.affair.priority}),Object(b.jsx)("button",{className:S.a.affair_button,onClick:function(){return t=e.affair._id,void e.deleteAffairCallback(t);var t}})]})},w=a(16),A=a.n(w);var E=function(e){var t=e.data.map((function(t){return Object(b.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:A.a.main_affairs,children:[t,Object(b.jsxs)("div",{className:A.a.block_button,children:[Object(b.jsx)("button",{onClick:function(){return t="all",void e.setFilter(t);var t},children:"All"}),Object(b.jsx)("button",{onClick:function(){return t="high",void e.setFilter(t);var t},children:"High"}),Object(b.jsx)("button",{onClick:function(){return t="middle",void e.setFilter(t);var t},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){return t="low",void e.setFilter(t);var t},children:"Low"})]})]})},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var H=function(){var e=Object(r.useState)(I),t=Object(N.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("all"),s=Object(N.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(E,{data:l,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},W=a(28),F=a(11),T=a.n(F),J=function(e){var t=e.name,a=e.setNameCallback,r=e.addUser,n=e.error,c=e.totalUsers,s=0===n.length?T.a.inputOk:T.a.error;return Object(b.jsxs)("div",{className:T.a.someClass,children:[Object(b.jsx)("input",{value:t,onChange:a,onKeyPress:function(e){"Enter"===e.key&&r()},className:s}),Object(b.jsx)("button",{className:T.a.buttonAdd,onClick:r,children:"add"}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("span",{className:T.a.errorSpan,children:n})]})},M=a(27),P=function(e){var t=e.users,a=e.addUserCallback,n=Object(r.useState)(""),c=Object(N.a)(n,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(N.a)(o,2),j=l[0],u=l[1],d=t.length;return Object(b.jsx)(J,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u(""),console.log(s)},addUser:function(){var e={_id:Object(M.v1)(),name:s.trim()};0!==e.name.length?(a(e),i(""),alert("Hello "+e.name+"!")):u("\u0410\u043b\u044f\u0440\u043c\u0430!!! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!")},error:j,totalUsers:d})};var K=function(){var e=Object(r.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(P,{users:a,addUserCallback:function(e){n([].concat(Object(W.a)(a),[e]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},U=a(5),B=a(7),R=a(17),G=a.n(R),L=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=e.margClassName,l=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","margClassName"]),j="".concat(G.a.error," ").concat(i||""),u="".concat(G.a.errorInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(U.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:u},l)),Object(b.jsx)("div",{className:o,children:c&&Object(b.jsx)("span",{className:j,children:c})})]})},D=a(13),Y=a.n(D),q=a(18),X=a.n(q),Z=function(e){var t=e.red,a=e.className,r=Object(B.a)(e,["red","className"]),n="".concat(t?X.a.red:X.a.default," ").concat(a);return Object(b.jsx)("button",Object(U.a)({className:n},r))},z=a(19),V=a.n(z),Q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(V.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(U.a)({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:s},c)),n&&Object(b.jsx)("span",{className:V.a.spanClassName,children:n})]})};var $=function(){var e=Object(r.useState)(""),t=Object(N.a)(e,2),a=t[0],n=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(r.useState)(!1),o=Object(N.a)(i,2),l=o[0],j=o[1];return console.log(l),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:Y.a.column,children:[Object(b.jsx)(L,{value:a,onChangeText:n,onEnter:s,error:c,margClassName:Y.a.siteForError}),Object(b.jsx)(L,{className:Y.a.blue}),Object(b.jsx)(Z,{children:"default"}),Object(b.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(Z,{disabled:!0,children:"disabled"}),Object(b.jsx)(Q,{checked:l,onChangeChecked:j,children:"some text"}),Object(b.jsx)(Q,{checked:l,onChange:function(e){j(e.currentTarget.checked)},children:"doth some text"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ee=a(20),te=a.n(ee),ae=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,n=e.spanProps,c=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(N.a)(s,2),o=i[0],l=i[1],j=n||{},u=j.children,d=j.onDoubleClick,m=j.className,x=Object(B.a)(j,["children","onDoubleClick","className"]),_="".concat(te.a.spanClassName," ").concat(m);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(L,Object(U.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),a&&a()},className:te.a.inputInHW6},c)):Object(b.jsxs)("span",Object(U.a)(Object(U.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:_},x),{},{children:["\ud83d\udd8a",u||c.value]}))})};function re(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ne(e,t){var a=t,r=localStorage.getItem(e);return null!==r&&(a=JSON.parse(r)),a}re("test",{x:"A",y:1});ne("test",{x:"",y:0});var ce=a(21),se=a.n(ce);var ie=function(){var e=Object(r.useState)(""),t=Object(N.a)(e,2),a=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{className:se.a.blockSuperEditableSpan,children:Object(b.jsx)(ae,{value:a,onChangeText:n,spanProps:{children:a?void 0:"enter text..."}})}),Object(b.jsxs)("div",{className:se.a.buttonSetLocalStorage,children:[Object(b.jsx)("div",{children:Object(b.jsx)(Z,{onClick:function(){re("editable-span-value",a)},children:"save"})}),Object(b.jsx)("div",{children:Object(b.jsx)(Z,{onClick:function(){n(ne("editable-span-value","\u0410\u043b\u0451, \u0442\u044b \u043d\u0438\u0447\u0451 \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u043b!"))},children:"restore"})}),Object(b.jsx)("div",{children:Object(b.jsx)(Z,{onClick:function(){localStorage.clear()},children:"clear"})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var oe=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(H,{}),Object(b.jsx)(K,{}),Object(b.jsx)($,{}),Object(b.jsx)(ie,{})]})};var le=function(){return Object(b.jsx)("div",{children:"Junior - empty"})};var je=function(){return Object(b.jsx)("div",{children:"JuniorPlus - empty"})},ue=a(22),be=a.n(ue);var de=function(){return Object(b.jsx)("div",{className:be.a.parentError404,children:Object(b.jsx)("div",{className:be.a.error404})})},me="/pre-junior",xe="/junior",_e="/juniorPlus";var he=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{path:me,element:Object(b.jsx)(oe,{})}),Object(b.jsx)(x.a,{path:"/",element:Object(b.jsx)(oe,{})}),Object(b.jsx)(x.a,{path:xe,element:Object(b.jsx)(le,{})}),Object(b.jsx)(x.a,{path:_e,element:Object(b.jsx)(je,{})}),Object(b.jsx)(x.a,{path:"/*",element:Object(b.jsx)(de,{})})]})]})})};var Oe=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(he,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(Oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.d49659fe.chunk.js.map