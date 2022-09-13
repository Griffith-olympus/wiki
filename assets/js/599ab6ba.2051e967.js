"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[58062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Changelog - 17/04/2022",slug:"2022-04-17-changelog",authors:[{name:"Jundi",title:"Moderator",image_url:"https://avatars.githubusercontent.com/u/102407130?s=400"}],tags:["changelog","qol","fixes"],hide_table_of_contents:!1},l=void 0,i={permalink:"/changelogs/2022-04-17-changelog",source:"@site/changelogs/2022-04-17-changelog.md",title:"Changelog - 17/04/2022",description:"17/04/2022 - 2200 ST)",date:"2022-04-17T00:00:00.000Z",formattedDate:"April 17, 2022",tags:[{label:"changelog",permalink:"/changelogs/tags/changelog"},{label:"qol",permalink:"/changelogs/tags/qol"},{label:"fixes",permalink:"/changelogs/tags/fixes"}],readingTime:.5,hasTruncateMarker:!1,authors:[{name:"Jundi",title:"Moderator",image_url:"https://avatars.githubusercontent.com/u/102407130?s=400",imageURL:"https://avatars.githubusercontent.com/u/102407130?s=400"}],frontMatter:{title:"Changelog - 17/04/2022",slug:"2022-04-17-changelog",authors:[{name:"Jundi",title:"Moderator",image_url:"https://avatars.githubusercontent.com/u/102407130?s=400",imageURL:"https://avatars.githubusercontent.com/u/102407130?s=400"}],tags:["changelog","qol","fixes"],hide_table_of_contents:!1},prevItem:{title:"Changelog - 24/04/2022",permalink:"/changelogs/2022-04-24-changelog"},nextItem:{title:"Latest changelogs recap - 10/04/2022",permalink:"/changelogs/2022-04-10-changelog"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"17/04/2022 - 22:00 (20:00 ST)",(0,a.kt)("br",{parentName:"p"}),"\n","Server Version: 1.186.0",(0,a.kt)("br",{parentName:"p"}),"\n","Client Version: 1.73.0    ")),(0,a.kt)("h1",{id:"changes"},"Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Restricted cross-map warps to avoid abuses (you now have a cooldown)"),(0,a.kt)("li",{parentName:"ul"},"Saved the timer for Pocket Dimensions on disconnect (people started abusing it due to the changes in aggro limit, it was not really abuseable before)")),(0,a.kt)("h1",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added checks on blacklist for notes due to recent abuses"),(0,a.kt)("li",{parentName:"ul"},"Fixed IC monsters being out of map in certain tricky scenario")),(0,a.kt)("h1",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed #act4-dungeons spam"),(0,a.kt)("li",{parentName:"ul"},"Improved the look and functionality of the Wiki ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.olympusgg.com/"},"https://wiki.olympusgg.com/")," (Special thanks to AguitaDeCoCo)")))}g.isMDXComponent=!0}}]);