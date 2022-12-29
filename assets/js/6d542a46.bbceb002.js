"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),v=a,h=c["".concat(s,".").concat(v)]||c[v]||u[v]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4},o="Player Events",i={unversionedId:"video-embedding/javascript-sdk/player-events",id:"video-embedding/javascript-sdk/player-events",title:"Player Events",description:"About Player events",source:"@site/docs/video-embedding/javascript-sdk/player-events.md",sourceDirName:"video-embedding/javascript-sdk",slug:"/video-embedding/javascript-sdk/player-events",permalink:"/docs/video-embedding/javascript-sdk/player-events",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"videoEmbeddingSidebar",previous:{title:"Player Methods",permalink:"/docs/video-embedding/javascript-sdk/player-methods"}},s={},d=[{value:"About Player events",id:"about-player-events",level:2},{value:"Events for playback controls",id:"events-for-playback-controls",level:2},{value:"ended",id:"ended",level:3},{value:"loaded",id:"loaded",level:3},{value:"volume",id:"volume",level:3},{value:"timeupdate",id:"timeupdate",level:3},{value:"seeked",id:"seeked",level:3},{value:"progress",id:"progress",level:3},{value:"play",id:"play",level:3},{value:"pause",id:"pause",level:3},{value:"error",id:"error",level:3},{value:"ratechange",id:"ratechange",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"player-events"},"Player Events"),(0,a.kt)("h2",{id:"about-player-events"},"About Player events"),(0,a.kt)("p",null,"You can listen for events in the player by attaching a callback using .on()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"player.on('ended', function() {\n  // Executes when the video is ended\n});\n")),(0,a.kt)("p",null,"The events are equivalent to the HTML5 video events."),(0,a.kt)("p",null,"To remove a listener, call .off() with the callback function. If you pass an event name only, you remove all listeners for that event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var onPlay = function() {\n\n};\n\nplayer.on('ended', onPlay);\n\n// If later you decide that you don't need to listen for `ended`\nplayer.off('ended', onPlay);\n\n// Alternatively, call `off` with just the event name to remove all listeners\nplayer.off('ended');\n")),(0,a.kt)("h2",{id:"events-for-playback-controls"},"Events for playback controls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ended"),(0,a.kt)("li",{parentName:"ul"},"error"),(0,a.kt)("li",{parentName:"ul"},"loaded"),(0,a.kt)("li",{parentName:"ul"},"pause"),(0,a.kt)("li",{parentName:"ul"},"play"),(0,a.kt)("li",{parentName:"ul"},"progress"),(0,a.kt)("li",{parentName:"ul"},"seeked"),(0,a.kt)("li",{parentName:"ul"},"timeupdate"),(0,a.kt)("li",{parentName:"ul"},"volumechange"),(0,a.kt)("li",{parentName:"ul"},"ratechange")),(0,a.kt)("h3",{id:"ended"},"ended"),(0,a.kt)("p",null,"This event fires when playback reaches the end of a video."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When the player's loop behavior is enabled, the ended event doesn't fire.")),(0,a.kt)("h3",{id:"loaded"},"loaded"),(0,a.kt)("p",null,"This event fires when a new video is loaded in the player."),(0,a.kt)("h3",{id:"volume"},"volume"),(0,a.kt)("p",null,"This event fires when the volume in the player changes."),(0,a.kt)("h3",{id:"timeupdate"},"timeupdate"),(0,a.kt)("p",null,"This event fires when the playback position of the video changes, generally every 250 ms during playback, but the interval can vary depending on the browser."),(0,a.kt)("h3",{id:"seeked"},"seeked"),(0,a.kt)("p",null,"This event fires when the player seeks  a specific time. A simultaneous timeupdate event also fires."),(0,a.kt)("h3",{id:"progress"},"progress"),(0,a.kt)("p",null,"This event fires while the video is loading. The event data indicates the amount of the video that has been buffered."),(0,a.kt)("h3",{id:"play"},"play"),(0,a.kt)("p",null,"This event fires when the video plays."),(0,a.kt)("h3",{id:"pause"},"pause"),(0,a.kt)("p",null,"This event fires when the video is paused."),(0,a.kt)("h3",{id:"error"},"error"),(0,a.kt)("p",null,"This event fires when the player experiences some sort of error. If a method call generated the error, the name of the method appears in the event data, along with the name of the error."),(0,a.kt)("h3",{id:"ratechange"},"ratechange"),(0,a.kt)("p",null,"This event fires when the playback rate of the video in the player changes."))}u.isMDXComponent=!0}}]);