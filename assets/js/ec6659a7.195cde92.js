"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[9586],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>u});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(i),h=o,u=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return i?n.createElement(u,r(r({ref:t},m),{},{components:i})):n.createElement(u,r({ref:t},m))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},6961:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(7462),o=(i(7294),i(3905));const a={title:"\u2601\ufe0f Local Images",excerpt:"How do local images work?",sidebar_position:5},r=void 0,l={unversionedId:"development/contribution/mobile/local-images",id:"development/contribution/mobile/local-images",title:"\u2601\ufe0f Local Images",description:"Local Image Slice",source:"@site/docs/development/contribution/mobile/local-images.md",sourceDirName:"development/contribution/mobile",slug:"/development/contribution/mobile/local-images",permalink:"/docs/development/contribution/mobile/local-images",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/development/contribution/mobile/local-images.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u2601\ufe0f Local Images",excerpt:"How do local images work?",sidebar_position:5},sidebar:"userguide",previous:{title:"\ud83d\udcf1 Mobile",permalink:"/docs/development/contribution/mobile/"},next:{title:" \ud83d\udcc1 Upload",permalink:"/docs/development/contribution/mobile/upload"}},s={},c=[{value:"Local Image Slice",id:"local-image-slice",level:2},{value:"Limitations",id:"limitations",level:3},{value:"Showing local images, together with the images from the server",id:"showing-local-images-together-with-the-images-from-the-server",level:2},{value:"Deleting backed up images",id:"deleting-backed-up-images",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"local-image-slice"},"Local Image Slice"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2705 Synced: The image is synced with the server and exists on your phone"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd04 Syncing: The image is currently syncing with the server"),(0,o.kt)("li",{parentName:"ul"},"\u274c Local: The image is not synced with the server and only exists on your phone"),(0,o.kt)("li",{parentName:"ul"},"\u2601\ufe0f Remote: The image is only on the server and not on your phone")),(0,o.kt)("p",null,"On the first load of the app, it will check for new local images. We use ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-camera-roll")," to get the images from the phone. This is a async action in LocalImagesSlice called ",(0,o.kt)("inlineCode",{parentName:"p"},"loadLocalImages"),". It will get the images from the phone and save them in the store. We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-file-access")," library to get the md5 hash of the image, which we combine with ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," to get the server hash. This is used to check if the image is already on the server."),(0,o.kt)("p",null,"The slice is persisted with ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-persist")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"async-storage"),", so the images will be loaded from the store on the next start of the app."),(0,o.kt)("h3",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fromTime")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"toTime")," do not work, so we save the timestamp of the last check and compare by that with each loaded image.")),(0,o.kt)("h2",{id:"showing-local-images-together-with-the-images-from-the-server"},"Showing local images, together with the images from the server"),(0,o.kt)("p",null,"We implemented a new selector, which merges local images and albumByDate images. When we find the same hash in both, we set the ",(0,o.kt)("inlineCode",{parentName:"p"},"synced")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for the local image and remove the image from the albumByDate images."),(0,o.kt)("h2",{id:"deleting-backed-up-images"},"Deleting backed up images"),(0,o.kt)("p",null,"The business logic is in ",(0,o.kt)("inlineCode",{parentName:"p"},"removeBackedUpImages")," action to delete the backed up images. We use ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-camera-roll")," to delete images from the phone, which need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage extern storage")," permission."))}d.isMDXComponent=!0}}]);