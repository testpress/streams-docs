"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[792],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:4},c="Cancel Transcoding Job",i={unversionedId:"transcoding-service/transcoding-cancelation",id:"transcoding-service/transcoding-cancelation",title:"Cancel Transcoding Job",description:"To cancel a transcoding job, you need to send an HTTP DELETE request to the API Endpoint , with the authentication Header.",source:"@site/docs/transcoding-service/transcoding-cancelation.md",sourceDirName:"transcoding-service",slug:"/transcoding-service/transcoding-cancelation",permalink:"/docs/transcoding-service/transcoding-cancelation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"transcodingSidebar",previous:{title:"Get Transcoding Job detail",permalink:"/docs/transcoding-service/get-transcoding-job-details"}},s={},l=[],p={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cancel-transcoding-job"},"Cancel Transcoding Job"),(0,a.kt)("p",null,"To cancel a transcoding job, you need to send an HTTP DELETE request to the API Endpoint , with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Endpoint")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/<job_id>/\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("p",null,"Upon a successful cancellation request, the API will respond with a message confirming the cancellation. Here is an example of the response you might receive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Job cancelled successfully."\n}\n')),(0,a.kt)("p",null,"In case the job has already been completed, the API will respond with a message indicating that the job is already done:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Job is already completed."\n}\n')),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"}," You can only cancel transcoding jobs that are not in a completed status.")))}d.isMDXComponent=!0}}]);