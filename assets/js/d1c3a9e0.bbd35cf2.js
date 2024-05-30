"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[8656],{7453:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var t=s(5893),a=s(1151);const i={sidebar_position:1,title:"Business Rules Validation: Configuration examples",sidebar_label:"Configuration examples"},o="Configuration examples",l={id:"extensions/business-rules-validation/configuration-examples",title:"Business Rules Validation: Configuration examples",description:"Here you can find examples of the most common real-world use cases for Business Rules Validation. Simply copy-paste them into extension settings and adjust as needed.",source:"@site/docs/extensions/business-rules-validation/configuration-examples.md",sourceDirName:"extensions/business-rules-validation",slug:"/extensions/business-rules-validation/configuration-examples",permalink:"/docs/extensions/business-rules-validation/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/business-rules-validation/configuration-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Business Rules Validation: Configuration examples",sidebar_label:"Configuration examples"},sidebar:"extensionsSidebar",previous:{title:"Business Rules Validation",permalink:"/docs/extensions/business-rules-validation/"},next:{title:"Expression Engine",permalink:"/docs/extensions/business-rules-validation/expression-engine"}},u={},r=[{value:"Common Accounts Payable (AP) checks",id:"common-accounts-payable-ap-checks",level:2},{value:"Invoice face value discrepancy",id:"invoice-face-value-discrepancy",level:3},{value:"Sum of line items must match invoice total",id:"sum-of-line-items-must-match-invoice-total",level:3},{value:"At least one field must be filled",id:"at-least-one-field-must-be-filled",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,t.jsx)(n.p,{children:"Here you can find examples of the most common real-world use cases for Business Rules Validation. Simply copy-paste them into extension settings and adjust as needed."}),"\n",(0,t.jsx)(n.h2,{id:"common-accounts-payable-ap-checks",children:"Common Accounts Payable (AP) checks"}),"\n",(0,t.jsx)(n.h3,{id:"invoice-face-value-discrepancy",children:"Invoice face value discrepancy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "checks": [\n    {\n      "rule": "{amount_total} == {amount_total_base} + {amount_total_tax}",\n      "type": "error",\n      "message": "Total amount is not equal to the sum of amount base and the tax",\n      "automation_blocker": true\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sum-of-line-items-must-match-invoice-total",children:"Sum of line items must match invoice total"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "checks": [\n    {\n      "rule": "sum({item_amount_total}) == {amount_total}",\n      "type": "error",\n      "message": "The sum of line items is not equal to the total amount.",\n      "automation_blocker": true\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"at-least-one-field-must-be-filled",children:"At least one field must be filled"}),"\n",(0,t.jsx)(n.p,{children:"The following Business Rules Validation configuration shows errors only when all the values are empty. It is satisfied if at least one of the values is filled."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "checks": [\n    {\n      "or": [\n        {\n          "rule": "has_value({aaa})",\n          "message": "At least one value has to be filled."\n        },\n        {\n          "rule": "has_value({bbb})",\n          "message": "At least one value has to be filled."\n        },\n        {\n          "rule": "has_value({ccc})",\n          "message": "At least one value has to be filled."\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(7294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);