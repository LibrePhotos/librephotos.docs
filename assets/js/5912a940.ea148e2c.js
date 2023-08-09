"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[6548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,c=m["".concat(s,".").concat(p)]||m[p]||h[p]||r;return a?i.createElement(c,o(o({ref:t},u),{},{components:a})):i.createElement(c,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const r={title:"\ud83c\udf9e Thumbnails",excerpt:"How do thumbnails work in LibrePhotos?",sidebar_position:5},o=void 0,l={unversionedId:"development/contribution/backend/thumbnails",id:"development/contribution/backend/thumbnails",title:"\ud83c\udf9e Thumbnails",description:"We process media files with different libraries to convert them to a widely compatible format and to speed up previewing files.",source:"@site/docs/development/contribution/backend/thumbnails.md",sourceDirName:"development/contribution/backend",slug:"/development/contribution/backend/thumbnails",permalink:"/docs/development/contribution/backend/thumbnails",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/development/contribution/backend/thumbnails.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\ud83c\udf9e Thumbnails",excerpt:"How do thumbnails work in LibrePhotos?",sidebar_position:5},sidebar:"userguide",previous:{title:" \ud83d\uddbc Photo List",permalink:"/docs/development/contribution/backend/photo-list"},next:{title:" \ud83d\udcc1 Upload",permalink:"/docs/development/contribution/backend/upload"}},s={},d=[{value:"Thumbnail engines",id:"thumbnail-engines",level:2},{value:"libvips (images)",id:"libvips-images",level:3},{value:"ImageMagick (RAW images)",id:"imagemagick-raw-images",level:3},{value:"FFmpeg (video)",id:"ffmpeg-video",level:3},{value:"Source of truth for processing",id:"source-of-truth-for-processing",level:3},{value:"Other thumbnails",id:"other-thumbnails",level:3},{value:"Endpoints:",id:"endpoints",level:2},{value:"<code>GET /media/thumbnails_big/&lt;hash&gt;</code>",id:"get-mediathumbnails_bighash",level:3},{value:"Headers:",id:"headers",level:4},{value:"<code>GET /media/square_thumbnails/&lt;hash&gt;</code>",id:"get-mediasquare_thumbnailshash",level:3},{value:"Headers:",id:"headers-1",level:4},{value:"<code>GET /media/small_square_thumbnails/&lt;hash&gt;</code>",id:"get-mediasmall_square_thumbnailshash",level:3},{value:"Headers:",id:"headers-2",level:4},{value:"<code>GET /media/photos/&lt;hash&gt;</code>",id:"get-mediaphotoshash",level:3},{value:"Headers:",id:"headers-3",level:4},{value:"<code>GET /media/faces/&lt;hash&gt;_&lt;face_number&gt;.jpg</code>",id:"get-mediafaceshash_face_numberjpg",level:3},{value:"Headers:",id:"headers-4",level:4},{value:"<code>GET /media/avatars/&lt;first_name&gt;avatar_&lt;hash&gt;.png</code>",id:"get-mediaavatarsfirst_nameavatar_hashpng",level:3}],u={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We process media files with different libraries to convert them to a widely compatible format and to speed up previewing files."),(0,n.kt)("h2",{id:"thumbnail-engines"},"Thumbnail engines"),(0,n.kt)("h3",{id:"libvips-images"},"libvips (images)"),(0,n.kt)("p",null,"By leveraging libvips' lightning-fast image processing capabilities and memory-efficient design, the conversion process becomes remarkably fast, ensuring optimal performance even with numerous images.\nMoreover, the utilization of pyvips as a Python interface facilitates seamless integration with the project"),(0,n.kt)("h3",{id:"imagemagick-raw-images"},"ImageMagick (RAW images)"),(0,n.kt)("p",null,"ImageMagick's robust suite of tools empowers us to perform conversion of raw images on a wide array of file types. When coupled with the wand library, which provides a Pythonic interface to interact with ImageMagick, it's easy to maintain and extend."),(0,n.kt)("p",null,"Because there are some compatibility issues between ImageMagick and PyTorch, this runs on a separate microservice."),(0,n.kt)("h3",{id:"ffmpeg-video"},"FFmpeg (video)"),(0,n.kt)("p",null,"As a powerful and versatile multimedia framework, FFmpeg equips users with a comprehensive suite of tools to seamlessly convert videos in various formats. The open-source nature of FFmpeg results in continuous updates and improvements that keep pace with evolving industry standards."),(0,n.kt)("h3",{id:"source-of-truth-for-processing"},"Source of truth for processing"),(0,n.kt)("p",null,"Big thumbnails act as a source of truth for all subsequent processing like finding faces, calculating similarity, finding objects etc. The reason for that is twofold: First, we know that all files will be compatible with the machine learning pipelines, because it's only one format, second all file dimensions are limited to a certain format, which will prevent a possible explosion of resource use."),(0,n.kt)("h3",{id:"other-thumbnails"},"Other thumbnails"),(0,n.kt)("p",null,"We also create thumbnails for previewing the faces and for the avatars of users. This is done to increase the speed of displaying a lot of them."),(0,n.kt)("h2",{id:"endpoints"},"Endpoints:"),(0,n.kt)("h3",{id:"get-mediathumbnails_bighash"},(0,n.kt)("inlineCode",{parentName:"h3"},"GET /media/thumbnails_big/<hash>")),(0,n.kt)("p",null,"Gives you a large preview of the actual file. It is also an image for videos. If you want to display the video file use ",(0,n.kt)("inlineCode",{parentName:"p"},"media/photos/<hash>")," instead."),(0,n.kt)("h4",{id:"headers"},"Headers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Authorization")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"Bearer <token>"))),(0,n.kt)("h3",{id:"get-mediasquare_thumbnailshash"},(0,n.kt)("inlineCode",{parentName:"h3"},"GET /media/square_thumbnails/<hash>")),(0,n.kt)("p",null,"Gives you a normal preview of the actual file. Can be an image or a video."),(0,n.kt)("h4",{id:"headers-1"},"Headers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Authorization")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"Bearer <token>"))),(0,n.kt)("h3",{id:"get-mediasmall_square_thumbnailshash"},(0,n.kt)("inlineCode",{parentName:"h3"},"GET /media/small_square_thumbnails/<hash>")),(0,n.kt)("p",null,"Gives you a small preview. Usually only usable with a blur to indicate loading. Could be replaced by blur hash."),(0,n.kt)("h4",{id:"headers-2"},"Headers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Authorization")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"Bearer <token>"))),(0,n.kt)("h3",{id:"get-mediaphotoshash"},(0,n.kt)("inlineCode",{parentName:"h3"},"GET /media/photos/<hash>")),(0,n.kt)("p",null,"Return the actual image or video from the server."),(0,n.kt)("h4",{id:"headers-3"},"Headers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Authorization")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"Bearer <token>"))),(0,n.kt)("h3",{id:"get-mediafaceshash_face_numberjpg"},(0,n.kt)("inlineCode",{parentName:"h3"},"GET /media/faces/<hash>_<face_number>.jpg")),(0,n.kt)("p",null,"Returns the face for an image."),(0,n.kt)("h4",{id:"headers-4"},"Headers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Authorization")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"Bearer <token>"))),(0,n.kt)("h3",{id:"get-mediaavatarsfirst_nameavatar_hashpng"},(0,n.kt)("inlineCode",{parentName:"h3"},"GET /media/avatars/<first_name>avatar_<hash>.png")),(0,n.kt)("p",null,"Returns an avatar for a given user."))}h.isMDXComponent=!0}}]);