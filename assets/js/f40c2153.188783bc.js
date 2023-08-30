"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[204],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o="Getting Started",l={unversionedId:"mobile-sdk/ios-native-sdk/getting-started",id:"mobile-sdk/ios-native-sdk/getting-started",title:"Getting Started",description:"TPStreamsSDK is a versatile iOS native SDK with support for both DRM (FairPlay) and non-DRM content.",source:"@site/docs/mobile-sdk/ios-native-sdk/getting-started.md",sourceDirName:"mobile-sdk/ios-native-sdk",slug:"/mobile-sdk/ios-native-sdk/getting-started",permalink:"/docs/mobile-sdk/ios-native-sdk/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mobileSdk",previous:{title:"iOS Native SDK",permalink:"/docs/category/ios-native-sdk"},next:{title:"Flutter SDK",permalink:"/docs/category/flutter-sdk"}},s={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Integration using Swift Package Manager (SPM)",id:"integration-using-swift-package-manager-spm",level:3},{value:"Initializing TPStreamsSDK",id:"initializing-tpstreamssdk",level:3},{value:"Playing a Video with TPStreamsSDK",id:"playing-a-video-with-tpstreamssdk",level:3},{value:"SwiftUI Integration",id:"swiftui-integration",level:4},{value:"UIKit Integration",id:"uikit-integration",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"TPStreamsSDK is a versatile iOS native SDK with support for both DRM (FairPlay) and non-DRM content."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Before integrating TPStreamsSDK into your iOS application, ensure that your project meets the following requirement:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minimum Deployment Version: iOS 11.4 or later"),(0,r.kt)("li",{parentName:"ul"},"Swift: Version 5.5 or later")),(0,r.kt)("h3",{id:"integration-using-swift-package-manager-spm"},"Integration using Swift Package Manager (SPM)"),(0,r.kt)("p",null,"To add TPStreamsSDK to your Xcode project using Swift Package Manager, follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select File > Add Packages in Xcode."),(0,r.kt)("li",{parentName:"ul"},"In the search bar, enter the following URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/testpress/iOSPlayerSDK"),"."),(0,r.kt)("li",{parentName:"ul"},"Select 'iOSPlayerSDK' from the search results. Click Add package button.")),(0,r.kt)("p",null,"Once the package is added, you can start using TPStreamsSDK in your iOS application."),(0,r.kt)("h3",{id:"initializing-tpstreamssdk"},"Initializing TPStreamsSDK"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"application(_:didFinishLaunchingWithOptions:)")," method in your AppDelegate, call ",(0,r.kt)("inlineCode",{parentName:"p"},"TPStreamsSDK.initialize(withOrgCode:)")," to initialize the SDK with your organization code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class AppDelegate: UIResponder, UIApplicationDelegate {\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        TPStreamsSDK.initialize(withOrgCode: "YOUR_ORGANIZATION_CODE")\n        return true\n    }\n}\n')),(0,r.kt)("p",null,"Please note that the above code assumes you are using SwiftUI for your application. If you are using a different app architecture, you may need to adapt the integration steps accordingly."),(0,r.kt)("h3",{id:"playing-a-video-with-tpstreamssdk"},"Playing a Video with TPStreamsSDK"),(0,r.kt)("h4",{id:"swiftui-integration"},"SwiftUI Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Instantiate a TPAVPlayer by providing the appropriate assetID and accessToken."),(0,r.kt)("li",{parentName:"ol"},"Embed the TPStreamPlayerView in your SwiftUI view.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    let player = TPAVPlayer(assetID: "YOUR_ASSET_ID", accessToken: "YOUR_ACCESS_TOKEN")\n\n    var body: some View {\n        VStack {\n            TPStreamPlayerView(player: player)\n                .frame(height: 240)\n            Spacer()\n        }\n    }\n}\n')),(0,r.kt)("h4",{id:"uikit-integration"},"UIKit Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Instantiate a TPAVPlayer with the relevant assetID and accessToken."),(0,r.kt)("li",{parentName:"ol"},"Create an TPStreamPlayerViewController and assign the previously created TPAVPlayer to the player attribute."),(0,r.kt)("li",{parentName:"ol"},"Add the TPStreamPlayerViewController.view to the view hierarchy. This will display the video player within the specified playerContainer view.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class ViewController: UIViewController {\n    @IBOutlet weak var playerContainer: UIView!\n\n    var playerViewController: TPStreamPlayerViewController?\n    var player: TPAVPlayer?\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        self.setupPlayerView()\n        player?.play()\n    }\n\n    func setupPlayerView(){\n        player = TPAVPlayer(assetID: "YOUR_ASSET_ID", accessToken: "YOUR_ACCESS_TOKEN")\n        playerViewController = TPStreamPlayerViewController()\n        playerViewController?.player = player\n\n        addChild(playerViewController!)\n        playerContainer.addSubview(playerViewController!.view)\n        playerViewController!.view.frame = playerContainer.bounds\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," TPAVPlayer is a wrapper class of AVPlayer that provides built-in support for playing our videos without requiring additional effort. It also supports FairPlay streaming for DRM-protected content."),(0,r.kt)("p",{parentName:"admonition"}," Since TPAVPlayer is a wrapper class of AVPlayer, you can also use the TPAVPlayer with native iOS player to play Streams Videos.")),(0,r.kt)("p",null,"For a practical implementation and usage of TPStreamsSDK, refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testpress/sample-iOS-app"},"Sample iOS App"),"."))}u.isMDXComponent=!0}}]);