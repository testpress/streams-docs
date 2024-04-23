"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[6861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:2},i="Create a live stream instantly",s={unversionedId:"live-stream-api/create_live_stream_instantly",id:"live-stream-api/create_live_stream_instantly",title:"Create a live stream instantly",description:"To Create a live stream instantly you need to send an HTTP POST request to the API Endpoint, with the authentication Header.",source:"@site/docs/live-stream-api/create_live_stream_instantly.md",sourceDirName:"live-stream-api",slug:"/live-stream-api/create_live_stream_instantly",permalink:"/docs/live-stream-api/create_live_stream_instantly",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"liveStreamApi",previous:{title:"Introduction",permalink:"/docs/live-stream-api/Introduction"},next:{title:"Schedule a Live Stream",permalink:"/docs/category/schedule-a-live-stream"}},o={},p=[],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-live-stream-instantly"},"Create a live stream instantly"),(0,a.kt)("p",null,"To Create a live stream instantly you need to send an HTTP POST request to the API Endpoint, with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fields")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify a text string or identifier which can be used for filtering or searching the live stream."),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable_drm_for_recording"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"A boolean value to enable or disable DRM for live stream recording."),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"latency"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Selects the desired latency for the live stream (Options: Low Latency, Normal Latency)."),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample request body")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Data science Live class",\n  "enable_drm_for_recording": true,\n  "latency": "Low Latency"\n}\n\n')),(0,a.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Data science Live class",\n    "bytes": null,\n    "type": "livestream",\n    "video": null,\n    "id": "5h6EpZQC6sh",\n    "live_stream": {\n        "rtmp_url": "",\n        "stream_key": null,\n        "status": "Not Started",\n        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/gcdem4/5h6EpZQC6sh/video.m3u8",\n        "start": "2024-04-23 16:56:48",\n        "transcode_recorded_video": true,\n        "enable_drm_for_recording": true,\n        "chat_embed_url": null,\n        "resolutions": [\n            "240p",\n            "480p",\n            "720p"\n        ],\n        "enable_drm": true,\n        "enable_llhls": false,\n        "latency": "Low Latency"\n    },\n    "parent": null,\n    "parent_id": null\n}\n')),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The live stream server typically takes around 20-30 seconds to start. "),(0,a.kt)("li",{parentName:"ul"},'Once it\'s up and running, both the "rtmp_url" and "stream_key" will become accessible. '))),(0,a.kt)("p",null,"To automatically receive rtmp_url and stream key as soon as the server is established,",(0,a.kt)("a",{parentName:"p",href:"webhook-response"},"WebHook Response"),"."),(0,a.kt)("p",null,"After successfully registering the webhook, you will receive an rtmp_url and stream_key as a response paste it in the obs stream settings  ",(0,a.kt)("strong",{parentName:"p"},"Settings > Stream")),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"OBS settings",src:n(1700).Z,width:"1962",height:"713"})))}u.isMDXComponent=!0},1700:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/obs-4a13a4d48fb07916696a14cc5719dc91.png"}}]);