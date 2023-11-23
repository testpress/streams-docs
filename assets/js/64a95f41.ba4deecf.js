"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:4},s="Live Streams",i={unversionedId:"server-api/live-stream",id:"server-api/live-stream",title:"Live Streams",description:"- A live stream is a real-time video broadcast delivered through a streaming platform. You can create live streams, allowing users to ingest media content into the TP Streams system for processing and delivery.",source:"@site/docs/server-api/live-stream.md",sourceDirName:"server-api",slug:"/server-api/live-stream",permalink:"/docs/server-api/live-stream",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"serverAPISidebar",previous:{title:"Folders",permalink:"/docs/server-api/folders"},next:{title:"DRM License",permalink:"/docs/server-api/drm"}},o={},p=[{value:"Create a live stream instantly",id:"create-a-live-stream-instantly",level:2},{value:"Schedule a live stream and start the server later",id:"schedule-a-live-stream-and-start-the-server-later",level:2},{value:"Schedule a live stream",id:"schedule-a-live-stream",level:3},{value:"Start the server for the scheduled live stream",id:"start-the-server-for-the-scheduled-live-stream",level:3},{value:"Stop a live stream",id:"stop-a-live-stream",level:2},{value:"WebHook Response",id:"webhook-response",level:2}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"live-streams"},"Live Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A live stream is a real-time video broadcast delivered through a streaming platform. You can create live streams, allowing users to ingest media content into the TP Streams system for processing and delivery.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"With the TP Streams system, you have the ability to create live streams in two distinct ways:"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/server-api/live-stream#create-a-live-stream-instantly"},"Create a live stream instantly")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/server-api/live-stream#schedule-a-live-stream-and-start-the-server-later"},"Schedule live streams and start them later"))),(0,n.kt)("h2",{id:"create-a-live-stream-instantly"},"Create a live stream instantly"),(0,n.kt)("p",null,"To Create a live stream instantly you need to send an HTTP POST request to the API Endpoint, with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fields")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify a text string or identifier which can be used for filtering or searching the live stream."),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sample request body")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Data science Live class"\n}\n\n')),(0,n.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Data science Live class",\n    "bytes": null,\n    "type": "livestream",\n    "video": null,\n    "id": "4PtERT9d9uK",\n    "live_stream": {\n        "rtmp_url": "",\n        "stream_key": null,\n        "status": "Not Started",\n        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/4xu8ay/4PtERT9d9uK/video.m3u8",\n        "start": null,\n        "transcode_recorded_video": true,\n        "chat_embed_url": null\n    },\n    "parent_id": null\n}\n')),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The live stream server typically takes around 20-30 seconds to start. "),(0,n.kt)("li",{parentName:"ul"},'Once it\'s up and running, both the "rtmp_url" and "stream_key" will become accessible. '))),(0,n.kt)("p",null,"To automatically receive rtmp_url and stream key as soon as the server is established,",(0,n.kt)("a",{parentName:"p",href:"/docs/server-api/webhooks"},"Create a Web Hook"),"."),(0,n.kt)("p",null,"After successfully registering the webhook, you will receive an updated webhook response."),(0,n.kt)("h2",{id:"schedule-a-live-stream-and-start-the-server-later"},"Schedule a live stream and start the server later"),(0,n.kt)("h3",{id:"schedule-a-live-stream"},"Schedule a live stream"),(0,n.kt)("p",null,"To Schedule a live stream you need to send an HTTP POST request to the API Endpoint, with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fields")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify a text string or identifier which can be used for filtering or searching the live stream."),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'Specify the date and time (in the format: "YYYY-MM-DD HH:MM:SS") when the live stream should be scheduled.'),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sample request body")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Data science Live class",\n  "start": "2024-10-05 15:30:00"\n}\n\n')),(0,n.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Data science Live class",\n    "bytes": null,\n    "type": "livestream",\n    "video": null,\n    "id": "AuC9yX2EtBr",\n    "live_stream": {\n        "rtmp_url": "",\n        "stream_key": null,\n        "status": "Not Started",\n        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/gnarys/AuC9yX2EtBr/video.m3u8",\n        "start": "2024-10-05 15:30:00",\n        "transcode_recorded_video": true,\n        "enable_drm": false,\n        "chat_embed_url": null,\n        "resolutions": [\n            "240p",\n            "480p",\n            "720p"\n        ]\n    },\n    "parent": null,\n    "parent_id": null\n}\n')),(0,n.kt)("p",null,"Live stream is created with the scheduled time for you to start the server later."),(0,n.kt)("p",null,"Above response has the details of the live stream scheduled which can also be obtained by API\n",(0,n.kt)("strong",{parentName:"p"},"/api/v1/<organization_id>/assets/<asset_id>/")),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Scheduled live streams will not automatically start at the specified time; they must be manually initiated."),(0,n.kt)("li",{parentName:"ul"},"RTMP URL and stream key will be available once you start the stream"))),(0,n.kt)("h3",{id:"start-the-server-for-the-scheduled-live-stream"},"Start the server for the scheduled live stream"),(0,n.kt)("p",null,"To Start a server for the scheduled live stream you need to send an HTTP POST request to the API Endpoint, with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/<str:asset_id>/start_server/\n")),(0,n.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Data science Live class",\n    "bytes": null,\n    "type": "livestream",\n    "video": null,\n    "id": "8XGEEj6ptnB",\n    "live_stream": {\n        "rtmp_url": "",\n        "stream_key": null,\n        "status": "Not Started",\n        "hls_url": "https://d3cydmgt9q030i.cloudfront.net/live/edee9b/8XGEEj6ptnB/video.m3u8",\n        "start": "2024-10-05 15:30:00",\n        "transcode_recorded_video": true,\n        "enable_drm": false,\n        "chat_embed_url": "https://app.tpstreams.com/live-chat/edee9b/8XGEEj6ptnB/",\n        "resolutions": [\n            "240p",\n            "480p",\n            "720p"\n        ]\n    },\n    "parent": null,\n    "parent_id": null\n}\n')),(0,n.kt)("p",null,"This will start the server for specified live stream"),(0,n.kt)("p",null,"Above response has the details of the live stream started which can also be obtained by API\n",(0,n.kt)("strong",{parentName:"p"},"/api/v1/<organization_id>/assets/<asset_id>/")),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The live stream server typically takes around 20-30 seconds to start. "),(0,n.kt)("li",{parentName:"ul"},'Once it\'s up and running, both the "rtmp_url" and "stream_key" will become accessible. '))),(0,n.kt)("p",null,"To automatically receive rtmp_url and stream key as soon as the server is established,",(0,n.kt)("a",{parentName:"p",href:"/docs/server-api/webhooks"},"Create a Web Hook"),"."),(0,n.kt)("p",null,"After successfully registering the webhook, you will receive an updated webhook response."),(0,n.kt)("h2",{id:"stop-a-live-stream"},"Stop a live stream"),(0,n.kt)("p",null,"To Stop a live stream you need to send an HTTP POST request to the API Endpoint, with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/<str:asset_id>/stop_live_stream/\n")),(0,n.kt)("p",null,"This will stop the specified live stream"),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},'If the value of the parameter "transcode_recorded_video" is set to true, you will receive the video object in the webhook response.')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sample webhook response is as follows")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Data science Live class",\n    "bytes": null,\n    "type": "livestream",\n    "video": {\n        "progress": 0,\n        "thumbnails": [],\n        "status": "Completed",\n        "playback_url": "https://d7pdowhru2wq4.cloudfront.net/transcoded/9328558d-e0a5-4093-b3b9-8f15ad1550d8/video.m3u8",\n        "dash_url": "https://d7pdowhru2wq4.cloudfront.net/transcoded/9328558d-e0a5-4093-b3b9-8f15ad1550d8/video.mpd",\n        "preview_thumbnail_url": null,\n        "format": "abr",\n        "resolutions": ["240p", "360p", "480p", "720p"],\n        "video_codec": "h264",\n        "audio_codec": "aac",\n        "enable_drm": true,\n        "tracks": [],\n        "inputs": [\n            {\n                "url": "https://static.testpress.in/Data_science_Live_class.mp4"\n            }\n        ],\n    }, \n    "id": "4PtERT9d9uK",\n    "live_stream": {\n        "rtmp_url": "rtmp://23.427.127.24/live",\n        "stream_key": "org-4xu8ay-live-4PtERT9d9uK-jKP4",\n        "status": "Completed",\n        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/4xu8ay/4PtERT9d9uK/video.m3u8",\n        "start": null,\n        "transcode_recorded_video": true,\n        "chat_embed_url":"https://app.tpstreams.com/live-chat/4PtERT9d9uK/"\n    },\n    "parent_id": null\n}\n')),(0,n.kt)("h2",{id:"webhook-response"},"WebHook Response"),(0,n.kt)("p",null,"Upon a successful creation of live stream, to notify your application about things that happen asynchronously ,\n",(0,n.kt)("a",{parentName:"p",href:"/docs/server-api/webhooks"},"Create a Web Hook"),"."),(0,n.kt)("p",null,"After successfully registering the webhook, whenever the status of live stream changes, response will be sent to the webhook."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sample webhook response for livestream is as follows")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Data science Live class",\n    "bytes": null,\n    "type": "livestream",\n    "video": null,\n    "id": "4PtERT9d9uK",\n    "live_stream": {\n        "rtmp_url": "rtmp://23.427.127.24/live",\n        "stream_key": "org-4xu8ay-live-4PtERT9d9uK-jKP4",\n        "status": "Available",\n        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/4xu8ay/4PtERT9d9uK/video.m3u8",\n        "start": null,\n        "transcode_recorded_video": true,\n        "chat_embed_url":"https://app.tpstreams.com/live-chat/4PtERT9d9uK/"\n    },\n    "parent_id": null\n}\n')),(0,n.kt)("p",null,"After getting the rtmp_url and stream_key paste it in the obs stream settings  ",(0,n.kt)("strong",{parentName:"p"},"Settings > Stream")),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"OBS settings",src:a(1700).Z,width:"1962",height:"713"})))}d.isMDXComponent=!0},1700:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/obs-4a13a4d48fb07916696a14cc5719dc91.png"}}]);