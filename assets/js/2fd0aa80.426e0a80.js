"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[3700],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(h,s(s({ref:e},d),{},{components:n})):a.createElement(h,s({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},792:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},s="Assets",i={unversionedId:"server-api/assets",id:"server-api/assets",title:"Assets",description:"- An asset refers to a media content/video that is processed, stored, and delivered through Streams. This endpoint creates an asset allowing users to ingest media content into the TP Streams system for processing and delivery.",source:"@site/docs/server-api/assets.md",sourceDirName:"server-api",slug:"/server-api/assets",permalink:"/docs/server-api/assets",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"serverAPISidebar",previous:{title:"Organization",permalink:"/docs/server-api/organizations"},next:{title:"Folders",permalink:"/docs/server-api/folders"}},o={},p=[{value:"Upload an video",id:"upload-an-video",level:2},{value:"Get all the assets that belong to the organization",id:"get-all-the-assets-that-belong-to-the-organization",level:2},{value:"Get Individual Asset Details",id:"get-individual-asset-details",level:2},{value:"Delete Individual Asset",id:"delete-individual-asset",level:2},{value:"Move Individual Asset",id:"move-individual-asset",level:2},{value:"Upload Subtitles to an Asset",id:"upload-subtitles-to-an-asset",level:2},{value:"Upload Thumbnail to an Asset",id:"upload-thumbnail-to-an-asset",level:2}],d={toc:p};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assets"},"Assets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An asset refers to a media content/video that is processed, stored, and delivered through Streams. This endpoint creates an asset allowing users to ingest media content into the TP Streams system for processing and delivery.")),(0,r.kt)("h2",{id:"upload-an-video"},"Upload an video"),(0,r.kt)("p",null,"To Upload a asset you need to send an HTTP POST request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/videos/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content_protection_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"To ensure the security of your video content, you can choose from available protection types: 'drm', 'aes' encryption, or indicate 'disable' for no specific protection. Each option offers varying levels of security for your content."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a text string or identifier which can be used for filtering or searching the asset."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resolutions"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Required resolutions of the transformed asset in case of HLS or MPEG-DASH delivery format. Can be a comma separated string out of the following values: 240p, 360p, 480p, 540p, 720p, and 1080p. Re-sized rendition will retain the input aspect ratio."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inputs"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"URL or web address of a file that TP streams should download to create a new asset."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"folder"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The UUID of the folder, if you want to upload the video into that specific folder"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample request body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Big Buck Bunny Video",\n  "inputs": [\n    {\n      "url": "https://static.testpress.in/BigBuckBunny.mp4"\n    }\n  ],\n  "resolutions": ["240p", "360p", "480p", "720p"],\n  "content_protection_type": "drm",\n  "folder": "32seYYHeNxE"\n}\n\n')),(0,r.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "9328558d-e0a5-4093-b3b9-8f15ad1550d8", // asset id\n    "title": "Big Buck Bunny Video",\n    "bytes": null,\n    "type": "video",\n    "video": {\n        "progress": 0,\n        "thumbnails": [],\n        "status": "Completed",\n        "playback_url": "https://d7pdowhru2wq4.cloudfront.net/transcoded/9328558d-e0a5-4093-b3b9-8f15ad1550d8/video.m3u8",\n        "dash_url": "https://d7pdowhru2wq4.cloudfront.net/transcoded/9328558d-e0a5-4093-b3b9-8f15ad1550d8/video.mpd",\n        "preview_thumbnail_url": null,\n        "format": "abr",\n        "resolutions": ["240p", "360p", "480p", "720p"],\n        "video_codec": "h264",\n        "audio_codec": "aac",\n        "content_protection_type": "drm",\n        "tracks": [],\n        "inputs": [\n            {\n                "url": "https://static.testpress.in/BigBuckBunny.mp4"\n            }\n        ],\n    },\n    "parent_id": "32seYYHeNxE",\n}\n\n')),(0,r.kt)("p",null,"Above response can also be obtained by asset detail API ",(0,r.kt)("strong",{parentName:"p"},"/api/v1/<organization_id>/assets/<asset_id>/")),(0,r.kt)("h2",{id:"get-all-the-assets-that-belong-to-the-organization"},"Get all the assets that belong to the organization"),(0,r.kt)("p",null,"To get all assets in the organization, you need to send an HTTP GET request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 2,\n    "next": "https://app.tpstreams.com/api/v1/dcek2m/assets/?limit=50&offset=50",\n    "previous": null,\n    "results": [\n        {\n            "title": "Big Buck Bunny Video",\n            "bytes": 450881324,\n            "type": "video",\n            "video": {\n                "progress": 0,\n                "thumbnails": [\n                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_4.png",\n                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_6.png",\n                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_5.png",\n                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_2.png",\n                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_1.png",\n                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_3.png"\n                ],\n                "status": "Completed",\n                "playback_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/video.m3u8",\n                "dash_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/video.mpd",\n                "preview_thumbnail_url": null,\n                "cover_thumbnail_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_4.png",\n                "format": "abr",\n                "resolutions": [\n                    "240p",\n                    "360p",\n                    "480p",\n                    "720p"\n                ],\n                "video_codec": "h264",\n                "audio_codec": "aac",\n                "enable_drm": true,\n                "tracks": [\n                            {\n                            "id": 4094,\n                            "type": "Preview Thumbnail",\n                            "preview_thumbnail": {\n                                "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/996NXydJQDU/sprite/sprite_image.png",\n                                "interval": 2,\n                                "width": 160,\n                                "height": 90,\n                                "rows": 10,\n                                "columns": 10\n                            }\n                             }\n                        ],\n                "inputs": [\n                    {\n                        "url": "private/yXrprYum2TS.mp4"\n                    }\n                ],\n                "transmux_only": null,\n                "duration": 597,\n                "content_protection_type": "drm"\n            },\n            "id": "yXrprYum2TS",\n            "live_stream": null,\n            "parent": null,\n            "parent_id": null\n        },\n        {\n            "title": "Data science Live class",\n            "bytes": null,\n            "type": "livestream",\n            "video": null,\n            "id": "AAbxGpp8DUm",\n            "live_stream": {\n                "rtmp_url": "rtmp://13.235.45.255/live",\n                "stream_key": "org-dcek2m-live-AAbxGpp8DUm-H4xB",\n                "status": "Not Started",\n                "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/dcek2m/AAbxGpp8DUm/video.m3u8",\n                "start": "2023-12-06 16:37:56",\n                "transcode_recorded_video": true,\n                "enable_drm_for_recording": true,\n                "chat_embed_url": "https://app.tpstreams.com/live-chat/dcek2m/AAbxGpp8DUm/",\n                "resolutions": [\n                    "240p",\n                    "480p",\n                    "720p"\n                ],\n                "enable_drm": true\n            },\n            "parent": null,\n            "parent_id": null\n        }\n    ]\n}\n\n')),(0,r.kt)("h2",{id:"get-individual-asset-details"},"Get Individual Asset Details"),(0,r.kt)("p",null,"To get a individual asset in the organization, you need to send an HTTP GET request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Big Buck Bunny Video",\n    "bytes": 450881324,\n    "type": "video",\n    "video": {\n        "progress": 0,\n        "thumbnails": [\n            "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_4.png",\n            "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_6.png",\n            "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_5.png",\n            "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_2.png",\n            "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_1.png",\n            "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_3.png"\n        ],\n        "status": "Completed",\n        "playback_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/video.m3u8",\n        "dash_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/video.mpd",\n        "preview_thumbnail_url": null,\n        "cover_thumbnail_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_4.png",\n        "format": "abr",\n        "resolutions": [\n            "240p",\n            "360p",\n            "480p",\n            "720p"\n        ],\n        "video_codec": "h264",\n        "audio_codec": "aac",\n        "enable_drm": true,\n        "tracks": [\n                {\n                "id": 4094,\n                "type": "Preview Thumbnail",\n                "preview_thumbnail": {\n                    "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/996NXydJQDU/sprite/sprite_image.png",\n                    "interval": 2,\n                    "width": 160,\n                    "height": 90,\n                    "rows": 10,\n                    "columns": 10\n                }\n                    }\n            ],\n        "inputs": [\n            {\n                "url": "private/yXrprYum2TS.mp4"\n            }\n        ],\n        "transmux_only": null,\n        "duration": 597,\n        "content_protection_type": "drm"\n    },\n    "id": "yXrprYum2TS",\n    "live_stream": null,\n    "parent": null,\n    "parent_id": null,\n    "download_url": "https://d28qihy7z761lk.cloudfront.net/private/yXrprYum2TS.mp4?response-content-disposition=attachment%3B+filename%3DBig+Buck+Bunny+Video.mp4&Expires=1708718514&Signature=wzuk7MhZsjKE9MwG0yaM1cMMFurc3ZIhCmrR0~fx2vgSwVd1d0B68GG~KwE6upj8XJMn~5zrBcadlf8TWeFuRyoRbIw6vipEDbWYLdPQhLwZcHp7mwz7ERNpikvBZJUO7KB5Z~h6BSGvcDBnVVc9pNZ8W2Zz95Ix28dnNhr~J9fqEgHtd0KaOqmX~LVjbHq56u6NiYrm4SZm3hmnWsfuaShWVJzkEBGrgnx8EnYtYe4JkHEBSvnskJvQPuCz82gwlK4vxNSdJ~0g08xkcwkJQG1mLqi39gbumkalS-8jp-pAKoyHMpXsHO6m9FKpwHHjnHp2wwPlSOykUPk1dcrt8Q__&Key-Pair-Id=K2XWKDWM065EGO"\n}\n\n')),(0,r.kt)("h2",{id:"delete-individual-asset"},"Delete Individual Asset"),(0,r.kt)("p",null,"To delete a individual asset in the organization, you need to send an HTTP DELETE request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/\n")),(0,r.kt)("p",null,"If the specified asset is a folder, it will remove all its child assets. you need to send an HTTP DELETE request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header"),"."),(0,r.kt)("p",null,"This will delete the specified asset from your organization"),(0,r.kt)("h2",{id:"move-individual-asset"},"Move Individual Asset"),(0,r.kt)("p",null,"To move an asset from one folder to another or to the root directory,  you need to send an HTTP POST request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/move/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parent"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID of the destination  folder"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample request body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "parent": "7hCCRZtXNmq"\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "detail": "Asset moved successfully."\n}\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"To move an asset to the root directory , send an HTTP POST request with an empty request body to the designated API endpoint.")),(0,r.kt)("h2",{id:"upload-subtitles-to-an-asset"},"Upload Subtitles to an Asset"),(0,r.kt)("p",null,"To upload subtitles to an asset , you need to send an HTTP POST request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/upload_subtitle/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subtitle"),(0,r.kt)("td",{parentName:"tr",align:null},".vtt file"),(0,r.kt)("td",{parentName:"tr",align:null},"File Containing Subtitles"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the subtitles"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"language"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Language code of the subtitles"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Send the subtitle file using form-data in the request body."),(0,r.kt)("p",null,"To know language code please check ",(0,r.kt)("a",{parentName:"p",href:"../language-codes"},"Language-codes")," \t"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Postman request body  (Form-data only) ")),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"OBS settings",src:n(9101).Z,width:"1324",height:"553"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "detail": "Subtitle uploaded successfully"\n}\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},'For subtitle upload, use form-data in the request body. Select your .vtt file with the "subtitle" key .')),(0,r.kt)("h2",{id:"upload-thumbnail-to-an-asset"},"Upload Thumbnail to an Asset"),(0,r.kt)("p",null,"To upload Thumbnail to an asset , you need to send an HTTP POST request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/authentication"},"authentication Header")," ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/upload_thumbnail/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thumbnail"),(0,r.kt)("td",{parentName:"tr",align:null},".png, .jpeg, .jpg image"),(0,r.kt)("td",{parentName:"tr",align:null},"Thumbnail image"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,"Send the thumbnail Image using form-data in the request body."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Postman request body  (Form-data only) ")),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"OBS settings",src:n(8039).Z,width:"1279",height:"771"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "detail": "Thumbnail uploaded successfully"\n}\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"For Thumbnail upload, use form-data in the request body. select an image file in .png, .jpeg, or .jpg format that is less than 2 MB in size .")))}u.isMDXComponent=!0},9101:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/upload_subtitle_req_body-24058f0ea91f036a57ad935843132d6b.png"},8039:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/upload_thumbnail_req_body-c4f5dfcf6e45b56f1dc9e4ea84b5eb3b.png"}}]);