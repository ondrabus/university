"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[7293],{530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(5893),i=n(1151);const s={title:"Dataset matching configuration",sidebar_position:3},o=void 0,r={id:"extensions/master-data-hub/dataset-matching-configuration",title:"Dataset matching configuration",description:"How to set up matching configuration",source:"@site/docs/extensions/master-data-hub/dataset-matching-configuration.md",sourceDirName:"extensions/master-data-hub",slug:"/extensions/master-data-hub/dataset-matching-configuration",permalink:"/docs/extensions/master-data-hub/dataset-matching-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/master-data-hub/dataset-matching-configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Dataset matching configuration",sidebar_position:3},sidebar:"extensionsSidebar",previous:{title:"Dataset management",permalink:"/docs/extensions/master-data-hub/dataset-management"},next:{title:"Configuration examples",permalink:"/docs/extensions/master-data-hub/configuration-examples"}},d={},c=[{value:"How to set up matching configuration",id:"how-to-set-up-matching-configuration",level:2},{value:"How to set up exact matching",id:"how-to-set-up-exact-matching",level:2},{value:"Query 1: Finding a vendor record using extracted vendor name",id:"query-1-finding-a-vendor-record-using-extracted-vendor-name",level:3},{value:"Query 2: Finding a vendor record using extracted vendor VAT number",id:"query-2-finding-a-vendor-record-using-extracted-vendor-vat-number",level:3},{value:"How to set up fuzzy matching",id:"how-to-set-up-fuzzy-matching",level:2},{value:"How multiple matching configurations work",id:"how-multiple-matching-configurations-work",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"how-to-set-up-matching-configuration",children:"How to set up matching configuration"}),"\n",(0,a.jsx)(t.p,{children:'In the "Matching Configuration" part of the extension, you can set up the rules for how data matching works.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: matching configuration",src:n(112).Z+"",width:"1024",height:"500"})}),"\n",(0,a.jsx)(t.p,{children:"Start with assigning a name to your configuration. This will help you identify it later."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: configuration name",src:n(4414).Z+"",width:"1024",height:"499"})}),"\n",(0,a.jsx)(t.p,{children:'Link the queues to which you would like to apply the configuration. You can apply the same matching logic to multiple queues. The queues added in "Rossum Store Extension Settings" will be automatically included here. If you want the rules to apply only to specific queues, you can make a selection.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: link queues to matching config",src:n(8529).Z+"",width:"1024",height:"498"})}),"\n",(0,a.jsx)(t.p,{children:"In the next step select the dataset you want to use for matching."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: select dataset for matching",src:n(446).Z+"",width:"1024",height:"499"})}),"\n",(0,a.jsxs)(t.p,{children:["Prepare your matching queries. Queries are executed in the given order until they find a result - that means queries after the one that returned a result are not executed. They use MongoDB syntax - ",(0,a.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/tutorial/query-documents/",children:"documentation can be found here"}),". The query must be translated into valid JSON. You can try out your queries on the Dataset Management page."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: matching queries",src:n(3992).Z+"",width:"1024",height:"501"})}),"\n",(0,a.jsx)(t.p,{children:"In the next step, specify how you want to display the results using:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'"Target Schema ID" - to show the schema ID of the field where the matched result will be kept'}),"\n",(0,a.jsx)(t.li,{children:'"Dataset Key" - to choose which attribute from the dataset should the extension return if a match is found (such as Vendor ID).'}),"\n",(0,a.jsx)(t.li,{children:'"Label" to define the data and its format that you want to show as a value in the target field. If you don\'t specify a "Label", the extension will display the value from the Dataset Key.'}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: displaying results",src:n(3204).Z+"",width:"1024",height:"501"})}),"\n",(0,a.jsx)(t.p,{children:"Choose a default value and its label to be placed in the target annotation field. Can be used for example if no matches are found."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: default value",src:n(3203).Z+"",width:"1024",height:"498"})}),"\n",(0,a.jsx)(t.p,{children:'Configure the "Result Actions". These actions determine what should happen when zero, one, or multiple matches are found in the dataset based on the specified queries. Use the "Action" field to define the value that will be displayed to the user in different situations.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: result action",src:n(9376).Z+"",width:"1024",height:"499"})}),"\n",(0,a.jsx)(t.p,{children:'Additionally, you can set up a message that will accompany the displayed result. An "error" message type will halt the automation and prevent annotators from manually confirming the document until the value is added. "Warning" and "info" messages will display the information, but automation will continue and annotators will be able to manually confirm the document.'}),"\n",(0,a.jsx)(t.p,{children:'As a final step, save your configuration. All the changes made in the "Matching configuration" tab will be reflected in the "Configuration" section of the extension. You can also use that field to define the rules.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: configuration",src:n(5359).Z+"",width:"1024",height:"501"})}),"\n",(0,a.jsx)(t.h2,{id:"how-to-set-up-exact-matching",children:"How to set up exact matching"}),"\n",(0,a.jsxs)(t.p,{children:["Exact data matching means that the value extracted from the document has to match the value from your dataset completely. To make this work, you can use simple 'find' queries. To understand this better, let's look at the example we ",(0,a.jsx)(t.a,{href:"/docs/extensions/master-data-hub/dataset-management",children:"discussed earlier"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"query-1-finding-a-vendor-record-using-extracted-vendor-name",children:"Query 1: Finding a vendor record using extracted vendor name"}),"\n",(0,a.jsx)(t.p,{children:"Query:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{ "find": { "Vendor name": "{sender_name}" } }\n'})}),"\n",(0,a.jsxs)(t.p,{children:['The query checks the "Vendor name" in the dataset and compares it to the value of the "Vendor name" field extracted from the document. To refer to the "Vendor name" field, we used its schema ID - ',(0,a.jsx)(t.code,{children:"sender_name"}),"."]}),"\n",(0,a.jsx)(t.p,{children:'In the configuration section we also defined that the value returned from the dataset in case the match is found will be "Vendor ID" (in "Dataset key").'}),"\n",(0,a.jsx)(t.p,{children:"Based on these rules, the extension found an exact match and returned Vendor ID that is now visible in Rossum and stored in the matching enum field."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Master Data Hub: matching results",src:n(3470).Z+"",width:"1024",height:"497"})}),"\n",(0,a.jsx)(t.h3,{id:"query-2-finding-a-vendor-record-using-extracted-vendor-vat-number",children:"Query 2: Finding a vendor record using extracted vendor VAT number"}),"\n",(0,a.jsx)(t.p,{children:"Query:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{ "find": { "vatNumber": "{sender_vat}" } }\n'})}),"\n",(0,a.jsx)(t.p,{children:'This query checks "vatNumber" in the dataset and compares it to the value of extracted vendor VAT number that is referenced here by schema ID of the field that holds extracted vendor VAT number in Rossum - "sender_vat".'}),"\n",(0,a.jsxs)(t.p,{children:["To learn more about the Master Data Hub configuration visit ",(0,a.jsx)(t.a,{href:"/docs/extensions/master-data-hub/configuration-examples",children:"Configuration Examples"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-set-up-fuzzy-matching",children:"How to set up fuzzy matching"}),"\n",(0,a.jsx)(t.p,{children:"The example we discussed covers the basic exact matching where the data needs to match completely. However, our extension offers more options and flexibility. It allows you to create complex rules and use fuzzy matching to match similar values within a certain range of error. Please note that this advanced feature is not yet available in the user interface and would require assistance from our team."}),"\n",(0,a.jsxs)(t.p,{children:["To learn more about the Master Data Hub configuration visit ",(0,a.jsx)(t.a,{href:"/docs/extensions/master-data-hub/configuration-examples",children:"Configuration Examples"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"how-multiple-matching-configurations-work",children:"How multiple matching configurations work"}),"\n",(0,a.jsx)(t.p,{children:"You have the flexibility to set up multiple configurations, and each configuration can have multiple queries within it. These configurations are executed in the specific order - from top to bottom as shown both in the UI and JSON."}),"\n",(0,a.jsx)(t.p,{children:"Within each configuration, the queries are also processed in the top to bottom order. However, if a query produces a result, any subsequent queries won't be triggered."}),"\n",(0,a.jsx)(t.p,{children:'These configurations pass the values from one to the next. For example, suppose the Vendor matching configuration is the first in the configuration list. If it finds a Vendor ID and stores it in a field called "vendor_match", you can use this "vendor_match" value in the next matching configuration. The value obtained from the previous query will be immediately available for use.'})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},4414:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-configuration-name-bab92751f588d947c9fcd5ee5fb3cd68.png"},5359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-configuration-2bffda0d6255c987d63f73d7f89b5760.png"},3203:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-default-value-ca8adbe38aae0184e9e5765ee1c3fd1a.png"},3204:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-displaying-results-ebc1b887c3d03bad41e7edcdbf4cd1b2.png"},8529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-link-queues-to-matching-config-ef67710b8b6901b49511ca2609b59443.png"},112:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-matching-configuration-2795f214495041b1f97542f9a4ff115b.png"},3992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-matching-queries-eb60e9cda6fbf806a9fcaf6e71fd33ba.png"},3470:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-matching-results-451c928a663a05c7775463991899a503.png"},9376:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-result-action-767dded72c7574d322fa6f060c3966a9.png"},446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mdh-select-dataset-for-matching-fc058f548913c708a2337916c5f5efad.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(7294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);