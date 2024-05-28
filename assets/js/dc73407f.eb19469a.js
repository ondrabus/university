"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[9446],{4073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=a(5893),n=a(1151);const i={title:"Full dataset replace",sidebar_position:5},o=void 0,r={id:"extensions/master-data-hub/full-dataset-replace",title:"Full dataset replace",description:"This page describes a procedure for full replacement (the old data is fully replaced by the content of uploaded file) of the data in Master Data Hub dataset using file upload and the web UI.",source:"@site/docs/extensions/master-data-hub/full-dataset-replace.md",sourceDirName:"extensions/master-data-hub",slug:"/extensions/master-data-hub/full-dataset-replace",permalink:"/docs/extensions/master-data-hub/full-dataset-replace",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/master-data-hub/full-dataset-replace.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Full dataset replace",sidebar_position:5},sidebar:"extensionsSidebar",previous:{title:"Configuration examples",permalink:"/docs/extensions/master-data-hub/configuration-examples"},next:{title:"Using API",permalink:"/docs/extensions/master-data-hub/using-api"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dataset replacement procedure",id:"dataset-replacement-procedure",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This page describes a procedure for full replacement (the old data is fully replaced by the content of uploaded file) of the data in Master Data Hub dataset using file upload and the web UI."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"File containing the full new data of the dataset."}),"\n",(0,s.jsxs)(t.li,{children:["User of Rossum organisation to which the dataset belongs to.","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The user has to have the Administrator role assigned."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"dataset-replacement-procedure",children:"Dataset replacement procedure"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Please be aware the datasets in the Master Data Hub are usually part of the business logic configured in the Rossum system and changes in the datasets ",(0,s.jsx)(t.strong,{children:"might lead to errors or even block processing of the documents in Rossum"}),". The structure of the data (list of columns) should not be changed by the replacement unless discussed with the owner of the Data Matching configuration."]})}),"\n",(0,s.jsx)(t.p,{children:"First, login into Rossum application."}),"\n",(0,s.jsx)(t.p,{children:"To open Master Data Hub, use direct URL to the dataset management:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Rossum EU: ",(0,s.jsx)(t.a,{href:"https://elis.rossum.ai/svc/master-data-hub/web/management",children:"https://elis.rossum.ai/svc/master-data-hub/web/management"})]}),"\n",(0,s.jsxs)(t.li,{children:["Rossum US: ",(0,s.jsx)(t.a,{href:"https://us.app.rossum.ai/svc/master-data-hub/web/management",children:"https://us.app.rossum.ai/svc/master-data-hub/web/management"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can alternatively navigate to the Extensions tab in Rossum, pick any Master Data Hub extension and click on the Dataset Management button to reach this page:\n",(0,s.jsx)(t.img,{alt:"Master Data Hub: dataset management screen",src:a(7892).Z+"",width:"2864",height:"1386"})]}),"\n",(0,s.jsx)(t.p,{children:'In the list of datasets on the left side select the dataset you want to replace and click the "Replace" button in the top right part of the window.'}),"\n",(0,s.jsx)(t.p,{children:'Click "Choose file" and select the file from location on your computer or drag and drop the file directly to the window:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: replace dataset modal",src:a(7715).Z+"",width:"592",height:"541"})}),"\n",(0,s.jsx)(t.p,{children:"Rossum is automatically interpreting the file and detects the header column. If the header is missing, an alphabetical keys are generated for the columns. If you run into problems, consider turning off the dynamic mode by unchecking the checkbox."}),"\n",(0,s.jsx)(t.p,{children:'Click the "Replace" button to replace the dataset (the "Replace" button in the bottom right corner of the dialog becomes available after the file is chosen).'}),"\n",(0,s.jsxs)(t.p,{children:['The replacement operation was started. You can check its status by clicking on the "Upload Status" button in the bottom left part of the main window. The dataset was replaced when the ',(0,s.jsx)(t.code,{children:"replace"})," operation status is ",(0,s.jsx)(t.code,{children:"finished"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: replace dataset modal",src:a(7006).Z+"",width:"2462",height:"498"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7892:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/dataset-management-screen-e4a90ad2556d259fea1979e7f565cae3.png"},7006:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/operation-status-modal-b63ba913582732f7cd4e56e997f85447.png"},7715:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/replace-dataset-modal-417c32d2b9b3c8d5ab78355776309003.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var s=a(7294);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);