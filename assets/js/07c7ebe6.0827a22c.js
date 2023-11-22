"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[792],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:4},c="Cancel Transcoding Job",i={unversionedId:"transcoding-service/transcoding-cancelation",id:"transcoding-service/transcoding-cancelation",title:"Cancel Transcoding Job",description:"To cancel a transcoding job, you need to send an HTTP DELETE request to the API Endpoint .",source:"@site/docs/transcoding-service/transcoding-cancelation.md",sourceDirName:"transcoding-service",slug:"/transcoding-service/transcoding-cancelation",permalink:"/docs/transcoding-service/transcoding-cancelation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"transcodingSidebar",previous:{title:"Get Transcoding Job detail",permalink:"/docs/transcoding-service/get-transcoding-job-details"}},s={},l=[],p={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cancel-transcoding-job"},"Cancel Transcoding Job"),(0,o.kt)("p",null,"To cancel a transcoding job, you need to send an HTTP DELETE request to the API Endpoint ."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Endpoint")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/<job_id>/\n")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"}," You can only cancel transcoding jobs that are not in a completed status.")))}d.isMDXComponent=!0}}]);