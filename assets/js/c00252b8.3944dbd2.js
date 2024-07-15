"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[2629],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,f=m["".concat(i,".").concat(u)]||m[u]||c[u]||l;return t?n.createElement(f,r(r({ref:a},p),{},{components:t})):n.createElement(f,r({ref:a},p))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var s=2;s<l;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3142:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const l={sidebar_position:2},r="Offline Downloads",d={unversionedId:"mobile-sdk/android-native-sdk/offline-downloads",id:"mobile-sdk/android-native-sdk/offline-downloads",title:"Offline Downloads",description:"We'll explore the workflow in this document.The Sample Android App on Github provides code examples for a typical use case.",source:"@site/docs/mobile-sdk/android-native-sdk/offline-downloads.md",sourceDirName:"mobile-sdk/android-native-sdk",slug:"/mobile-sdk/android-native-sdk/offline-downloads",permalink:"/docs/mobile-sdk/android-native-sdk/offline-downloads",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mobileSdk",previous:{title:"Getting Started",permalink:"/docs/mobile-sdk/android-native-sdk/getting-started"},next:{title:"iOS Native SDK",permalink:"/docs/category/ios-native-sdk"}},i={},s=[{value:"Enable Download support",id:"enable-download-support",level:2},{value:"Creating a TpStreamsDownloadManager",id:"creating-a-tpstreamsdownloadmanager",level:2},{value:"Get list of downloaded media",id:"get-list-of-downloaded-media",level:4},{value:"Start",id:"start",level:4},{value:"Delete",id:"delete",level:4},{value:"Pause",id:"pause",level:4},{value:"Resume",id:"resume",level:4},{value:"Cancel",id:"cancel",level:4},{value:"Delete All",id:"delete-all",level:4},{value:"Playing downloaded media",id:"playing-downloaded-media",level:2}],p={toc:s};function c(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"offline-downloads"},"Offline Downloads"),(0,o.kt)("p",null,"We'll explore the workflow in this document.The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testpress/sample-android-app"},"Sample Android App")," on Github provides code examples for a typical use case."),(0,o.kt)("h2",{id:"enable-download-support"},"Enable Download support"),(0,o.kt)("p",null,"Create TpInitParams with .enableDownloadSupport(true) to enable download support."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"var parameters = TpInitParams.Builder()\n    .setVideoId(videoId)\n    .setAccessToken(accessToken)\n    .enableDownloadSupport(true)\n    .build()\n")),(0,o.kt)("h2",{id:"creating-a-tpstreamsdownloadmanager"},"Creating a TpStreamsDownloadManager"),(0,o.kt)("p",null,"The following code snippet demonstrates how to instantiate a TpStreamsDownloadManager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val tpStreamDownloadManager : TpStreamDownloadManager = TpStreamDownloadManager(activityContext)\n")),(0,o.kt)("p",null,"Using this TpStreamDownloadManager we can get a list of downloaded media and the following media operations to start, delete, pause, resume, and cancel."),(0,o.kt)("h4",{id:"get-list-of-downloaded-media"},"Get list of downloaded media"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val downloads : LiveData<List<Asset>?> = tpStreamDownloadManager.getAllDownloads()\n")),(0,o.kt)("p",null,"It will return a list of Asset in LiveData to monitor the download progress use ViewModel and observe."),(0,o.kt)("h4",{id:"start"},"Start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Start download Using TpInitParams\ntpStreamDownloadManager.startDownload(fragmentActivity, params)\n// Start download Using TpStreamPlayer\ntpStreamDownloadManager.startDownload(fragmentActivity, player)\n")),(0,o.kt)("h4",{id:"delete"},"Delete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.deleteDownload(asset)\n")),(0,o.kt)("h4",{id:"pause"},"Pause"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.pauseDownload(asset)\n")),(0,o.kt)("h4",{id:"resume"},"Resume"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.resumeDownload(asset)\n")),(0,o.kt)("h4",{id:"cancel"},"Cancel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.cancelDownload(asset)\n")),(0,o.kt)("h4",{id:"delete-all"},"Delete All"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.deleteAllDownload()\n")),(0,o.kt)("h2",{id:"playing-downloaded-media"},"Playing downloaded media"),(0,o.kt)("p",null,"Create offline params and pass them to player activity via intent to play an offline video."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val intent = Intent(activityContext,PlayerActivity::class.java)\nintent.putExtra(TP_OFFLINE_PARAMS,TpInitParams.createOfflineParams(video.videoId))\nstartActivity(intent)\n")))}c.isMDXComponent=!0}}]);