(this["webpackJsonpinsurance-platform"]=this["webpackJsonpinsurance-platform"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i,a,r=n(0),s=n.n(r),c=n(10),u=n.n(c),o=(n(25),n(8));n(26),n(27);!function(e){e.Submissions="Submissions",e.Bind="Bind",e.Actions="Actions"}(i||(i={})),function(e){e.NEW="NEW",e.BOUND="BOUND"}(a||(a={}));var l,b,d,p,f,j,m,O,h,v,g,y,x,w,S,N,A,C,P,B,k,R={id:"",companyName:"",address:"",annualRevenue:0,status:a.NEW,signedApplication:"",submittedBy:""},D=n(3),U=n.n(D),z=n(5),F=n(7),T=n(12),L=n(19),E=n(6),H=(n(18),n(2)),W=(l=function(){function e(){Object(T.a)(this,e),Object(F.a)(this,"id",b,this),Object(F.a)(this,"companyName",d,this),Object(F.a)(this,"address",p,this),Object(F.a)(this,"annualRevenue",f,this),Object(F.a)(this,"status",j,this),Object(F.a)(this,"signedApplication",m,this),Object(F.a)(this,"submittedBy",O,this),Object(F.a)(this,"submissionsToUpdate",h,this),Object(F.a)(this,"allSubmissions",v,this),Object(F.a)(this,"createOrUpdateNewSubmission",g,this),Object(F.a)(this,"deleteSubmission",y,this),Object(F.a)(this,"getCurrentSubmission",x,this),Object(F.a)(this,"getAllSubmissions",w,this),Object(F.a)(this,"clearCurrentSubmission",S,this),Object(F.a)(this,"uploadFile",N,this)}return Object(L.a)(e,[{key:"setData",value:function(e){this.id=e.id,this.companyName=e.companyName,this.address=e.address,this.annualRevenue=e.annualRevenue,this.status=e.status,this.signedApplication=e.signedApplication,this.submittedBy=e.submittedBy}}]),e}(),b=Object(E.a)(l.prototype,"id",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d=Object(E.a)(l.prototype,"companyName",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=Object(E.a)(l.prototype,"address",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=Object(E.a)(l.prototype,"annualRevenue",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),j=Object(E.a)(l.prototype,"status",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return a.NEW}}),m=Object(E.a)(l.prototype,"signedApplication",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),O=Object(E.a)(l.prototype,"submittedBy",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),h=Object(E.a)(l.prototype,"submissionsToUpdate",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return R}}),v=Object(E.a)(l.prototype,"allSubmissions",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(E.a)(l.prototype,"setData",[H.f],Object.getOwnPropertyDescriptor(l.prototype,"setData"),l.prototype),g=Object(E.a)(l.prototype,"createOrUpdateNewSubmission",[H.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(z.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.allSubmissions.some((function(e){return e.id===n.id}))?e.allSubmissions.forEach((function(t,i){t.id===n.id&&(e.allSubmissions[i]=n)})):e.allSubmissions.push({id:n.id,companyName:n.companyName,address:n.address,annualRevenue:n.annualRevenue,status:n.status,signedApplication:n.signedApplication,submittedBy:n.submittedBy}),t.next=3,fetch("http://localhost:4000/updateAllSubmissions  ",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e.allSubmissions)}).then((function(e){return e.json()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),y=Object(E.a)(l.prototype,"deleteSubmission",[H.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(z.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.allSubmissions=e.allSubmissions.filter((function(e){return e.id!==n})),t.next=3,fetch("http://localhost:4000/updateAllSubmissions  ",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e.allSubmissions)}).then((function(e){return e.json()}));case 3:e.clearCurrentSubmission();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),x=Object(E.a)(l.prototype,"getCurrentSubmission",[H.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){return{id:e.id,companyName:e.companyName,address:e.address,annualRevenue:e.annualRevenue,status:e.status,signedApplication:e.signedApplication,submittedBy:e.submittedBy}}}}),w=Object(E.a)(l.prototype,"getAllSubmissions",[H.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(z.a)(U.a.mark((function t(){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4000/getAllSubmissions",{method:"GET"}).then((function(e){return e.json()}));case 2:if(!1!==(n=t.sent).status){t.next=7;break}return t.abrupt("return",!1);case 7:return t.abrupt("return",e.allSubmissions=n.allSubmissions);case 8:case"end":return t.stop()}}),t)})))}}),S=Object(E.a)(l.prototype,"clearCurrentSubmission",[H.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.id=R.id,e.status=R.status,e.signedApplication=R.signedApplication}}}),N=Object(E.a)(l.prototype,"uploadFile",[H.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(z.a)(U.a.mark((function t(n,i,a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4000/picture:".concat(n,"?path=").concat(e.id,"&fileName=").concat(i),{method:"POST",body:a}).then((function(e){return console.log("e= ",e),e.status})).catch((function(e){console.log("heerere")}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}()}}),l),J=Object(r.createContext)(new W),q=n(16),G=n(1),I=Object(q.a)((function(e){var t=Object(r.useContext)(J);return Object(G.jsxs)("div",{className:"wrapper",children:[Object(G.jsx)("button",{className:"btn",onClick:function(){return e.renderPage(i.Submissions)},children:"Submissions"}),Object(G.jsx)("button",{className:"btn",onClick:function(){t.clearCurrentSubmission(),e.renderPage(i.Actions)},children:"New"})]})})),M=n(4),V=n(20),K=(n(32),A=function e(){Object(T.a)(this,e),Object(F.a)(this,"fullName",C,this),Object(F.a)(this,"password",P,this),Object(F.a)(this,"isLoging",B,this),Object(F.a)(this,"authenticateUser",k,this)},C=Object(E.a)(A.prototype,"fullName",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),P=Object(E.a)(A.prototype,"password",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),B=Object(E.a)(A.prototype,"isLoging",[H.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),k=Object(E.a)(A.prototype,"authenticateUser",[H.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(z.a)(U.a.mark((function t(){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4000/authenticateUser",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({fullName:e.fullName,password:e.password})}).then((function(e){return e.statusText})).catch((function(e){console.log("errrrrrr",e)}));case 2:if("Unauthorized"!==(n=t.sent)){t.next=8;break}return e.isLoging=!1,t.abrupt("return",n);case 8:return t.abrupt("return",e.isLoging=!0);case 9:case"end":return t.stop()}}),t)})))}}),A),Q=Object(r.createContext)(new K),X=n(15),Y=(n(33),new function e(){Object(T.a)(this,e),this.success=function(e){X.b.success(e,{autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,draggablePercent:0})},this.error=function(e){X.b.error(e,{autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,draggablePercent:0})}}),Z=Object(q.a)((function(e){var t=Object(r.useContext)(J),n=Object(r.useContext)(Q),a=Object(r.useState)(t),s=Object(o.a)(a,2),c=s[0],u=(s[1],Object(r.useState)(!1)),l=Object(o.a)(u,2),b=l[0],d=l[1],p=Object(r.useState)([]),f=Object(o.a)(p,2),j=f[0],m=f[1],O=Object(r.useState)([]),h=Object(o.a)(O,2),v=h[0],g=h[1],y=Object(r.useState)(!1),x=Object(o.a)(y,2),w=x[0],S=x[1];function N(e,t){var n=window.URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=n,i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n)}var A=function(){var e=Object(z.a)(U.a.mark((function e(i){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.signedApplication){e.next=2;break}return e.abrupt("return",Y.error("No PDF file, this submission is not bound yet"));case 2:return e.next=4,fetch("http://localhost:4000/getPdf?fileToDownload=".concat(n.fullName+"/"+t.id+"/"+i.signedApplication)).then((function(e){e.blob().then((function(e){return N(e,i.signedApplication)}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=[{Header:"Id",accessor:"id"},{Header:"Company Name",accessor:"companyName"},{Header:"Address",accessor:"address"},{Header:"Annual Revenue",accessor:"annualRevenue"},{Header:"Status",accessor:"status"},{Header:"Signed Application",accessor:"signedApplication",Cell:function(e){var t=e.row;return Object(G.jsx)("div",{children:Object(G.jsx)("i",{onClick:function(){A(t.original)},className:"fas fa-file-download","data-tip":"Download"})})}},{Header:"Submitted By",accessor:"submittedBy"},{Header:"Actions",Cell:function(n){var a=n.row;return Object(G.jsx)("div",{children:Object(G.jsxs)("div",{children:[Object(G.jsx)("i",{onClick:function(){!function(n){var a=t.allSubmissions.filter((function(e){return e.id===n.id}));t.setData(a[0]),e.setActivePage(i.Actions)}(a.original)},className:"fas fa-pen","data-tip":"Edit"}),Object(G.jsx)("i",{onClick:function(){var e;e=Object(M.a)({},a.original),t.deleteSubmission(e.id),d(!b)},"data-tip":"Delete",className:"fas fa-trash-alt",style:{paddingLeft:"10%"}}),Object(G.jsx)("i",{onClick:function(){!function(n){var a=t.allSubmissions.filter((function(e){return e.id===n.id}));t.setData(a[0]),e.setActivePage(i.Bind),d(!b)}(Object(M.a)({},a.original))},"data-tip":"Bind",className:"far fa-file-pdf",style:{paddingLeft:"10%"}})]})})}}];Object(r.useEffect)((function(){var e=function(){var e=Object(z.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getAllSubmissions();case 2:if(!e.sent){e.next=9;break}return m(C),g(c.allSubmissions),e.abrupt("return",S(!0));case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[b]);var P=Object(V.useTable)({columns:j,data:v}),B=P.getTableProps,k=P.getTableBodyProps,R=P.headerGroups,D=P.rows,F=P.prepareRow;return Object(G.jsx)("div",{children:w?Object(G.jsxs)("table",Object(M.a)(Object(M.a)({},B()),{},{children:[Object(G.jsx)("thead",{children:R.map((function(e){return Object(G.jsx)("tr",Object(M.a)(Object(M.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(G.jsx)("th",Object(M.a)(Object(M.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(G.jsx)("tbody",Object(M.a)(Object(M.a)({},k()),{},{children:D.map((function(e){return F(e),Object(G.jsx)("tr",Object(M.a)(Object(M.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(G.jsx)("td",Object(M.a)(Object(M.a)({},e.getCellProps()),{},{children:null===e||void 0===e?void 0:e.render("Cell")}))}))}))}))}))]})):Object(G.jsx)("div",{children:" No submissions"})})})),$=Z,_=n(13),ee=n(40);n(34);var te=function(e){var t=Object(r.useContext)(Q),n=Object(r.useContext)(J),s=Object(r.useState)(!0),c=Object(o.a)(s,2),u=c[0],l=c[1],b=Object(_.a)({defaultValues:{id:n.id?n.id:"",companyName:n.companyName?n.companyName:"",address:(null===n||void 0===n?void 0:n.address)?n.address:"",status:(null===n||void 0===n?void 0:n.status)?n.status:a.NEW,annualRevenue:(null===n||void 0===n?void 0:n.annualRevenue)?n.annualRevenue:0,signedApplication:(null===n||void 0===n?void 0:n.signedApplication)?null===n||void 0===n?void 0:n.signedApplication:"",submittedBy:(null===n||void 0===n?void 0:n.submittedBy)?n.submittedBy:""}}),d=b.register,p=b.handleSubmit,f=b.reset;return b.formState.errors,Object(r.useEffect)((function(){""===n.id?(f(R),l(!0)):l(!1)}),[]),Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)("div",{className:"title",children:u?"Create New Submission":"Update Submission"}),Object(G.jsxs)("form",{className:"formFields",onSubmit:p((function(r){if(n.allSubmissions.some((function(e){return e.id===r.id})))return n.setData(r),n.createOrUpdateNewSubmission(r),e.setActivePage(i.Submissions),f();var s=Object(ee.a)();return r.id=s,r.status=a.NEW,r.submittedBy=t.fullName,n.setData(r),n.createOrUpdateNewSubmission(r),e.setActivePage(i.Bind),f()})),children:[Object(G.jsx)("input",Object(M.a)({type:"text",placeholder:u?"Company Name":n.companyName},d("companyName"))),Object(G.jsx)("input",Object(M.a)({type:"text",placeholder:u?"Address":n.address},d("address"))),Object(G.jsx)("input",Object(M.a)({type:"number",placeholder:u?"Annual Revenue":n.annualRevenue.toString()},d("annualRevenue",{valueAsNumber:!0}))),Object(G.jsx)("input",{className:"submitBtn",type:"submit"})]}),Object(G.jsx)("button",{className:"clrBtn",type:"button",onClick:function(){n.clearCurrentSubmission(),l(!0),f(R)},children:"Create New"})]})},ne=(n(35),function(e){var t=Object(_.a)(),n=t.register,s=t.handleSubmit,c=Object(r.useContext)(J),u=Object(r.useContext)(Q),o=function(){var t=Object(z.a)(U.a.mark((function t(n){var r,s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==(null===(r=n.picture[0])||void 0===r?void 0:r.name)){t.next=2;break}return t.abrupt("return",Y.error("Please select a PDF file"));case 2:if("pdf"===n.picture[0].name.split(".")[n.picture[0].name.split(".").length-1]){t.next=4;break}return t.abrupt("return",Y.error("Please select a PDF file"));case 4:return(s=new FormData).append("picture",n.picture[0]),t.next=8,c.uploadFile(u.fullName,n.picture[0].name,s).then((function(t){if(500===t)return Y.error("Got status ".concat(t," from the server"));if(200===t){var r=c.getCurrentSubmission();r.status=a.BOUND,r.submittedBy=u.fullName,r.signedApplication="",r.signedApplication=n.picture[0].name,c.createOrUpdateNewSubmission(r),e.setActivePage(i.Submissions),Y.success("PDF file uploaded successfully")}})).catch((function(){Y.error("cant uploaded PDF file")}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:"title",children:"Please upload a signed pdf application"}),Object(G.jsxs)("form",{onSubmit:s(o),children:[Object(G.jsx)("input",Object(M.a)(Object(M.a)({},n("picture")),{},{type:"file",name:"picture"})),Object(G.jsx)("button",{children:"Submit"})]})]})}),ie=(n(36),n(37),function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],s=n[1],c=Object(r.useContext)(Q);Object(r.useEffect)((function(){s(e.show)}),[e.show]);var u=Object(_.a)(),l=u.register,b=u.handleSubmit,d=(u.formState.errors,function(){var t=Object(z.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.fullName=n.fullName,c.password=n.password,t.next=4,c.authenticateUser();case 4:if(c.isLoging){t.next=8;break}Y.error("Nooo"),t.next=10;break;case 8:return s(!1),e.onClose(!1),t.abrupt("return",e.setActivePage(i.Submissions));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return Object(G.jsx)("div",{style:{visibility:a?"visible":"hidden",opacity:a?"1":"0"},className:"overlay",children:Object(G.jsx)("div",{className:"popup",children:Object(G.jsx)("form",{onSubmit:b(d),children:Object(G.jsxs)("section",{children:[Object(G.jsx)("h1",{children:"Login"}),Object(G.jsxs)("div",{className:"field",children:[Object(G.jsx)("label",{htmlFor:"fullName",className:"fieldText",children:"FullName:"}),Object(G.jsx)("input",Object(M.a)(Object(M.a)({id:"fullName"},l("fullName",{required:"required"})),{},{type:"fullName",placeholder:"FullName"}))]}),Object(G.jsxs)("div",{className:"field",children:[Object(G.jsx)("label",{htmlFor:"password",className:"fieldText",children:"Password:"}),Object(G.jsx)("input",Object(M.a)(Object(M.a)({id:"password"},l("password",{required:"required"})),{},{type:"password",placeholder:"Password"}))]}),Object(G.jsx)("button",{type:"submit",children:"SUBMIT"})]})})})})}),ae=function(){var e=Object(r.useState)(i.Submissions),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!0),c=Object(o.a)(s,2),u=c[0],l=c[1];return Object(G.jsxs)("div",{className:"App",children:[Object(G.jsx)(I,{renderPage:a}),u?Object(G.jsx)(ie,{onClose:function(){l(!1)},setActivePage:a,show:u}):function(){switch(n){case i.Submissions:return Object(G.jsx)($,{setActivePage:a});case i.Bind:return Object(G.jsx)(ne,{setActivePage:a});case i.Actions:return Object(G.jsx)(te,{setActivePage:a});default:return null}}(),Object(G.jsx)(X.a,{autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,draggable:!0,pauseOnHover:!1,pauseOnFocusLoss:!1})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),r(e),s(e)}))};u.a.render(Object(G.jsx)(s.a.StrictMode,{children:Object(G.jsx)(ae,{})}),document.getElementById("root")),re()}},[[38,1,2]]]);
//# sourceMappingURL=main.c2c429ea.chunk.js.map