"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[3927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},i="Embedded Uploader",l={unversionedId:"embedded-uploader/embedded-uploader",id:"embedded-uploader/embedded-uploader",title:"Embedded Uploader",description:"Introduction",source:"@site/docs/embedded-uploader/embedded-uploader.md",sourceDirName:"embedded-uploader",slug:"/embedded-uploader/",permalink:"/docs/embedded-uploader/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"uploaderSidebar"},d={},p=[{value:"Introduction",id:"introduction",level:3},{value:"Guide to integrate the uploader",id:"guide-to-integrate-the-uploader",level:2},{value:"Step 1: Get the Authentication Token",id:"step-1-get-the-authentication-token",level:3},{value:"Step 2: Import the TPStreams Uploader SDK",id:"step-2-import-the-tpstreams-uploader-sdk",level:3},{value:"Step 3: Add the TPStreams Uploader HTML Element",id:"step-3-add-the-tpstreams-uploader-html-element",level:3},{value:"Step 4: Initialize the Uploader",id:"step-4-initialize-the-uploader",level:3},{value:"Full Example Code",id:"full-example-code",level:3},{value:"Domain Restrictions for Embedding",id:"domain-restrictions-for-embedding",level:3}],s={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"embedded-uploader"},"Embedded Uploader"),(0,n.kt)("h3",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The TPStreams Uploader allows you to embed a powerful video upload tool directly on your website. With this integration, you can upload videos directly to your TPStreams account without needing to navigate away from your site, making the experience smooth and efficient. Whether you're embedding the uploader on a standalone page or in a modal, this guide will walk you through each step to get it up and running."),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"Uploader UI",src:r(2721).Z,width:"2098",height:"1490"})),(0,n.kt)("h2",{id:"guide-to-integrate-the-uploader"},"Guide to integrate the uploader"),(0,n.kt)("p",null,"This guide will help you integrate the TPStreams video uploader into your website allowing you to upload videos directly to your TPStreams account."),(0,n.kt)("h3",{id:"step-1-get-the-authentication-token"},"Step 1: Get the Authentication Token"),(0,n.kt)("p",null,"Use the API mentioned ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"here")," to obtain a user authentication token. This token is required for the uploader to authenticate uploads."),(0,n.kt)("h3",{id:"step-2-import-the-tpstreams-uploader-sdk"},"Step 2: Import the TPStreams Uploader SDK"),(0,n.kt)("p",null,"Include the TPStreams Uploader SDK script in your webpage. Add the following ",(0,n.kt)("inlineCode",{parentName:"p"},"<script>")," tag in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," or right after the starting ",(0,n.kt)("inlineCode",{parentName:"p"},"<body>")," tag:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://static.testpress.in/static/js/tpstreams-uploader.min.js"><\/script>\n')),(0,n.kt)("h3",{id:"step-3-add-the-tpstreams-uploader-html-element"},"Step 3: Add the TPStreams Uploader HTML Element"),(0,n.kt)("p",null,"Place the following HTML tag where you want the uploader to appear on your webpage, including any modals if needed.\nMake sure to replace the organization-id attribute with your own TPStreams organization ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<tpstreams-uploader organization-id="your-organization-id"></tpstreams-uploader>\n')),(0,n.kt)("b",null,"Note:")," This tag also supports `width` and `height` attributes if you need to customize the dimensions of the uploader UI.",(0,n.kt)("h3",{id:"step-4-initialize-the-uploader"},"Step 4: Initialize the Uploader"),(0,n.kt)("p",null,"When you are ready to display the uploader, execute the following JavaScript to initialize it with the authentication token:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const tpstreamsUploader = document.querySelector('tpstreams-uploader');\n  tpstreamsUploader.authToken = '<authentication token>'; // Use token from Step 1\n  tpstreamsUploader.initialize();\n<\/script>\n")),(0,n.kt)("h3",{id:"full-example-code"},"Full Example Code"),(0,n.kt)("p",null,"The following code will display the TPStreams uploader UI on your webpage, allowing users to upload videos directly to your account."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <head>\n    \x3c!-- TPStreams Uploader SDK --\x3e\n    <script src=\"https://static.testpress.in/static/js/tpstreams-uploader.min.js\"><\/script>\n  </head>\n  <body>\n    \n    \x3c!-- TPStreams Uploader Element --\x3e\n    <tpstreams-uploader organization-id=\"cmcktz\"></tpstreams-uploader>\n    \n    \x3c!-- Initialization Script --\x3e\n    <script>\n      const uploader = document.querySelector('tpstreams-uploader');\n      uploader.authToken = '<authentication token>'; // Replace with the actual token\n      uploader.initialize();\n    <\/script>\n    \n  </body>\n</html>\n")),(0,n.kt)("h3",{id:"domain-restrictions-for-embedding"},"Domain Restrictions for Embedding"),(0,n.kt)("p",null,"In TPStreams settings, you can restrict the allowed domains that can embed this uploader. Set the allowed domain(s) to ensure only specified sites can use your uploader. If no domain is specified, all domains are permitted by default."),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"Domain Restriction",src:r(6198).Z,width:"790",height:"507"})))}u.isMDXComponent=!0},6198:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/uploader_allowed_domains-7c52a4c0091e6dd59074dd5d56184f59.png"},2721:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/uploader_step_1-525a70bb328bcb72c603015f3f72a3c9.png"}}]);