"use strict";(self.webpackChunkstreams_docs=self.webpackChunkstreams_docs||[]).push([[1983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},o="Widevine Configuration",p={unversionedId:"drm-service/widevine-configuration",id:"drm-service/widevine-configuration",title:"Widevine Configuration",description:"Through Widevine Configuration , we can specify the desired Widevine license specification within the license request.",source:"@site/docs/drm-service/widevine-configuration.md",sourceDirName:"drm-service",slug:"/drm-service/widevine-configuration",permalink:"/docs/drm-service/widevine-configuration",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"drmSidebar",previous:{title:"Getting license to playback the content",permalink:"/docs/drm-service/get-license"},next:{title:"Widevine Specs",permalink:"/docs/drm-service/widevine-specs"}},l={},d=[{value:"Generate Encoded Data",id:"generate-encoded-data",level:3},{value:"Generating Content Data:",id:"generating-content-data",level:3},{value:"Generating Signature:",id:"generating-signature",level:3}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"widevine-configuration"},"Widevine Configuration"),(0,r.kt)("p",null,"Through Widevine Configuration , we can specify the desired Widevine license specification within the license request."),(0,r.kt)("p",null,"This API requires ",(0,r.kt)("a",{parentName:"p",href:"#generate-encoded-data"},"encoded_data")," in query param for authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"POST: https://app.tpstreams.com/api/v1/<org_code>/drm_license/?data=<encoded_data>/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"player_payload"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Player license key message encoded into base64 String."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widevine"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"See the Widevine table below for available fields."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"To learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/drm-service/widevine-specs"},"Widevine parameter")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widevine")),(0,r.kt)("table",null,(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colSpan:1,rowSpan:1},(0,r.kt)("p",{parentName:"td"},(0,r.kt)("strong",{parentName:"p"},"Name"))),(0,r.kt)("td",{parentName:"tr",colSpan:1,rowSpan:1},(0,r.kt)("p",{parentName:"td"},(0,r.kt)("strong",{parentName:"p"},"Description")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colSpan:1,rowSpan:1},(0,r.kt)("p",{parentName:"td"},"content_key_specs.track_type")),(0,r.kt)("td",{parentName:"tr",colSpan:1,rowSpan:1},(0,r.kt)("p",{parentName:"td"},"A track type definition, Options are"),(0,r.kt)("ul",{parentName:"td"},(0,r.kt)("li",{parentName:"ul"},"AUDIO - audio tracks"),(0,r.kt)("li",{parentName:"ul"},"SD - 576p or less"),(0,r.kt)("li",{parentName:"ul"},"HD - 720p, 1080p"),(0,r.kt)("li",{parentName:"ul"},"UHD1 - 4K"),(0,r.kt)("li",{parentName:"ul"},"UHD2 - 8K")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colSpan:1,rowSpan:1},(0,r.kt)("p",{parentName:"td"},"content_key_specs.security_level")),(0,r.kt)("td",{parentName:"tr",colSpan:1,rowSpan:1},(0,r.kt)("p",{parentName:"td"},"Security level for content key specs, Default = 1."),(0,r.kt)("ul",{parentName:"td"},(0,r.kt)("li",{parentName:"ul"},"1 - Software-based whitebox crypto is\nrequired. (SW_SECURE_CRYPTO)."),(0,r.kt)("li",{parentName:"ul"},"2 - Software crypto and an obfuscated\ndecoder is required. (SW_SECURE_DECODE)."),(0,r.kt)("li",{parentName:"ul"},"3 - Key material and crypto operations\nmust be performed within a hardware-\nbacked trusted execution environment.\n(HW_SECURE_CRYPTO)."),(0,r.kt)("li",{parentName:"ul"},"4 - Crypto and decoding of content\nmust be performed within a hardware-\nbacked trusted execution environment.\n(HW_SECURE_DECODE)."),(0,r.kt)("li",{parentName:"ul"},"5 - Crypto, decoding, and all handling\nof media (compressed and uncompressed)\nmust be handled within a hardware-\nbacked trusted execution environment.\n(HW_SECURE_ALL)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colSpan:1,rowSpan:1},(0,r.kt)("p",{parentName:"td"},"content_key_specs.required_output_protection.hdcp")),(0,r.kt)("td",{parentName:"tr",colSpan:1,rowSpan:1},(0,r.kt)("p",{parentName:"td"},"Output protection options for HDCP\nOptions:"),(0,r.kt)("ul",{parentName:"td"},(0,r.kt)("li",{parentName:"ul"},"HDCP_NONE"),(0,r.kt)("li",{parentName:"ul"},"HDCP_V1"),(0,r.kt)("li",{parentName:"ul"},"HDCP_V2"),(0,r.kt)("li",{parentName:"ul"},"HDCP_V2_1"),(0,r.kt)("li",{parentName:"ul"},"HDCP_V2_2"),(0,r.kt)("li",{parentName:"ul"},"HDCP_V2_3"),(0,r.kt)("li",{parentName:"ul"},"HDCP_NO_DIGITAL_OUTPUT")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n    \"player_payload\": keyMessageInbase64,\n    \"widevine\": {\n        \"content_key_specs\": [\n            {'track_type': 'SD', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},\n            {'track_type': 'HD', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},\n            {'track_type': 'UHD1', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},\n            {'track_type': 'UHD2', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},\n            {'track_type': 'AUDIO', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}}\n        ]\n    }\n}\n")),(0,r.kt)("p",null,"You can obtain the Encoded data by performing the following steps in Python:"),(0,r.kt)("h3",{id:"generate-encoded-data"},"Generate Encoded Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport binascii\nimport hashlib\nimport json\n\n\nfrom Cryptodome.Cipher import AES\nfrom Cryptodome.Util.Padding import pad\n\nencoded_content_data = generate_content_data(<content_id>)\nsignature = generate_signature(encoded_content_data)\ndata = {\"content_data\": encoded_content_data, \"signature\": signature}\ndata = json.dumps(data, separators=(',', ':'))\nencoded_data = base64.urlsafe_b64encode(data)\n\n\n")),(0,r.kt)("p",null,"To generate encoded data you need to fetch content data ",(0,r.kt)("a",{parentName:"p",href:"#generating-content-data"},"Generating Content Data")," and signature\n",(0,r.kt)("a",{parentName:"p",href:"#generating-signature"},"Generate Signature")," "),(0,r.kt)("h3",{id:"generating-content-data"},"Generating Content Data:"),(0,r.kt)("p",null,"You can obtain the request field by performing the following steps in Python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\nimport base64\ndef generate_content_data(content_id):\n  data = {\n    "content_id": content_id,\n    "download": true/false,\n    "drm_type": "widevine/fairplay"\n  }\n  data = json.dumps(data, separators=(\',\', \':\'))\n  return base64.urlsafe_b64encode(data.encode())\n# The result will be eyJjb250ZW50X2lkIjoiY2Y2YzMwZGQ1MGMxNDkyZTgyMzQ0ZWEzZTEzOWRhMWQifQ==\n')),(0,r.kt)("h3",{id:"generating-signature"},"Generating Signature:"),(0,r.kt)("p",null,"You can obtain the signature field by performing the following steps in Python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import base64\nimport binascii\nimport hashlib\nimport json\n\n\nfrom Cryptodome.Cipher import AES\nfrom Cryptodome.Util.Padding import pad\n\ndef generate_signature(data, key, iv):\n    hash = hashlib.sha1(data.encode()).digest()\n    cipher = AES.new(\n        binascii.unhexlify(key),\n        AES.MODE_CBC,\n        binascii.unhexlify(iv),\n    )\n    padded_hash = pad(hash, AES.block_size, style="pkcs7")\n    signature = cipher.encrypt(padded_hash)\n    return base64.b64encode(signature).decode()\n\nkey = "xxxx"  # AES Signing key\niv = "yyy"  # AES Signing iv\ndata = {\n  "content_id": "cf6c30dd50c1492e82344ea3e139da1d"\n}\ndata = json.dumps(data, separators=(\',\', \':\'))\nsignature = generate_signature(data, key, iv)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"org_code"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The organization code for API endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier for the content (Should be a random UUID generated you. This UUID will be used for getting licenses for that video.)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AES_SIGNING_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The AES key used for Widevine encryption"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AES_SIGNING_IV"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The initialization vector (IV) for Widevine encryption"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"AES_SIGNING_KEY , AES_SIGNING_IV  and org_code will be provided by us."),(0,r.kt)("p",{parentName:"admonition"},"You can retrieve the organization code and DRM keys by making a GET request to the API. ",(0,r.kt)("a",{parentName:"p",href:"/docs/server-api/organizations"},"Organization")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Security Considerations:")),(0,r.kt)("p",{parentName:"admonition"},"The recommendation is to invoke the DRM license endpoint on the server, rather than on the client. This precaution is taken because passing the License configuration and calling it from the client could expose configurations to users.")))}s.isMDXComponent=!0}}]);