"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[8],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?t.createElement(y,a(a({ref:n},p),{},{components:r})):t.createElement(y,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7457:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const s={sidebar_position:5},a="DRM License",i={unversionedId:"server-api/drm",id:"server-api/drm",title:"DRM License",description:"To play DRM protected videos, your player should request DRM licence from our URL.",source:"@site/docs/server-api/drm.md",sourceDirName:"server-api",slug:"/server-api/drm",permalink:"/docs/server-api/drm",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"serverAPISidebar",previous:{title:"Live Streams",permalink:"/docs/server-api/live-stream"},next:{title:"Web Hooks",permalink:"/docs/server-api/webhooks"}},c={},l=[],p={toc:l};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"drm-license"},"DRM License"),(0,o.kt)("p",null,"To play DRM protected videos, your player should request DRM licence from our URL."),(0,o.kt)("p",null,"This API requires ",(0,o.kt)("a",{parentName:"p",href:"/docs/video-embedding/authentication"},"access_token")," in query param for authentication."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"POST: https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/drm_license/?access_token={{access_token}}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n   <head>\n      <meta charset="UTF-8" />\n      <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <link\n         href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.11.7/video-js.min.css"\n         rel="stylesheet"\n         />\n      <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.11.7/video.min.js"><\/script>\n      <script src="https://cdn.jsdelivr.net/npm/videojs-contrib-eme@3.8.0/dist/videojs-contrib-eme.js"><\/script>\n      <title>Test VideJS DRM</title>\n   </head>\n   <body>\n      <div style="margin: 50px auto; max-width: 400px">\n         <video id="my-video" class="video-js"></video>\n      </div>\n      <script>\n         const license_url = "" // replace with your endpoint which returns DRM license response\n         var player = videojs(\n           "my-video",\n           {\n             controls: true,\n             fluid: true,\n             html5: {\n               vhs: {\n                 overrideNative: true,\n               },\n             },\n           },\n           function () {\n             var player = this;\n             player.eme();\n             player.src({\n               src: "https://d7pdowhru2wq4.cloudfront.net/transcoded/8b9b948e-192d-4474-b909-5ac5c27918eb/video.mpd",\n               type: "application/dash+xml",\n               keySystems: {\n                 "com.widevine.alpha": {\n                   getLicense: (emeOptions, keyMessage, callback) => {\n                     let headers = {};\n                     let body = undefined;\n         \n                       headers["Content-type"] = "application/octet-stream";\n                       body = keyMessage;\n         \n                     videojs.xhr(\n                       {\n                         url: license_url,\n                         method: "POST",\n                         body: body,\n                         responseType: "arraybuffer",\n                         headers: headers,\n                       },\n                       (err, response, responseBody) => {\n                         if (err) {\n                           callback(err);\n                           return;\n                         }\n         \n                         if (\n                           response.statusCode >= 400 &&\n                           response.statusCode <= 599\n                         ) {\n                           // Pass an empty object as the error to use the default code 5 error message\n                           callback({});\n                           return;\n                         }\n         \n                         callback(null, responseBody);\n                       }\n                     );\n                   },\n                 },\n               },\n             });\n           }\n         );\n      <\/script>\n   </body>\n</html>\n\n')))}d.isMDXComponent=!0}}]);