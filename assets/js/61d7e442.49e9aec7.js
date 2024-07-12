"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[7450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:1},i="Start the scheduled live stream",o={unversionedId:"live-stream-api/live-stream/start-server",id:"live-stream-api/live-stream/start-server",title:"Start the scheduled live stream",description:"To Start a server for the scheduled live stream you need to send an HTTP POST request to the API Endpoint, with the authentication Header.",source:"@site/docs/live-stream-api/live-stream/start-server.md",sourceDirName:"live-stream-api/live-stream",slug:"/live-stream-api/live-stream/start-server",permalink:"/docs/live-stream-api/live-stream/start-server",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"liveStreamApi",previous:{title:"Schedule a live stream",permalink:"/docs/live-stream-api/live-stream/schedule-a-live-stream"},next:{title:"List Live Streams API",permalink:"/docs/live-stream-api/list-live-stream-api"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"start-the-scheduled-live-stream"},"Start the scheduled live stream"),(0,a.kt)("p",null,"To Start a server for the scheduled live stream you need to send an HTTP POST request to the API Endpoint, with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/<str:asset_id>/start_server/\n")),(0,a.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Data science Live class",\n    "bytes": null,\n    "type": "livestream",\n    "video": null,\n    "id": "8XGEEj6ptnB",\n    "live_stream": {\n        "rtmp_url": "",\n        "stream_key": null,\n        "status": "Not Started",\n        "hls_url": "https://d3cydmgt9q030i.cloudfront.net/live/edee9b/8XGEEj6ptnB/video.m3u8",\n        "start": "2024-10-05 15:30:00",\n        "transcode_recorded_video": true,\n        "enable_drm_for_recording": false,\n        "chat_embed_url": "https://app.tpstreams.com/live-chat/edee9b/8XGEEj6ptnB/",\n        "resolutions": [\n            "240p",\n            "480p",\n            "720p"\n        ]\n    },\n    "parent": null,\n    "parent_id": null\n}\n')),(0,a.kt)("p",null,"This will start the server for specified live stream"),(0,a.kt)("p",null,"Above response has the details of the live stream started which can also be obtained by API\n",(0,a.kt)("strong",{parentName:"p"},"/api/v1/<organization_id>/assets/<asset_id>/")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The live stream server typically takes around 20-30 seconds to start. "),(0,a.kt)("li",{parentName:"ul"},'Once it\'s up and running, both the "rtmp_url" and "stream_key" will become accessible. '))),(0,a.kt)("p",null,"To automatically receive rtmp_url and stream key as soon as the server is established,",(0,a.kt)("a",{parentName:"p",href:"/docs/server-api/webhooks"},"Create a Web Hook"),"."),(0,a.kt)("p",null,"After successfully registering the webhook, you will receive an updated webhook response."))}u.isMDXComponent=!0}}]);