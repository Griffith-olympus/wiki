"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[61794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||g[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));n(91601),n(62149);const l={title:"Changelog - 16/10/2022",slug:"2022-10-16-changelog",authors:[{name:"Protect",title:"Wiki Maintainer",image_url:"https://avatars.githubusercontent.com/u/75447510?s=400&u=6611d243cb33099270ad8c0cb66a5e659009bd08&v=4"}],tags:["changelog","changes","fixes","features"],hide_table_of_contents:!1},o=void 0,i={permalink:"/changelogs/2022-10-16-changelog",source:"@site/changelogs/2022-10-16-changelog.md",title:"Changelog - 16/10/2022",description:"16/10/2022 - 1545 ST)",date:"2022-10-16T00:00:00.000Z",formattedDate:"October 16, 2022",tags:[{label:"changelog",permalink:"/changelogs/tags/changelog"},{label:"changes",permalink:"/changelogs/tags/changes"},{label:"fixes",permalink:"/changelogs/tags/fixes"},{label:"features",permalink:"/changelogs/tags/features"}],readingTime:.3,hasTruncateMarker:!1,authors:[{name:"Protect",title:"Wiki Maintainer",image_url:"https://avatars.githubusercontent.com/u/75447510?s=400&u=6611d243cb33099270ad8c0cb66a5e659009bd08&v=4",imageURL:"https://avatars.githubusercontent.com/u/75447510?s=400&u=6611d243cb33099270ad8c0cb66a5e659009bd08&v=4"}],frontMatter:{title:"Changelog - 16/10/2022",slug:"2022-10-16-changelog",authors:[{name:"Protect",title:"Wiki Maintainer",image_url:"https://avatars.githubusercontent.com/u/75447510?s=400&u=6611d243cb33099270ad8c0cb66a5e659009bd08&v=4",imageURL:"https://avatars.githubusercontent.com/u/75447510?s=400&u=6611d243cb33099270ad8c0cb66a5e659009bd08&v=4"}],tags:["changelog","changes","fixes","features"],hide_table_of_contents:!1},nextItem:{title:"Changelog - 09/10/2022",permalink:"/changelogs/2022-10-09-changelog"}},c={authorsImageUrls:[void 0]},s=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2}],u={toc:s};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"16/10/2022 - 15:45 (13:45 ST) ",(0,a.kt)("br",null),"\nServer Version: 2.27.0 ",(0,a.kt)("br",null),"\nClient Version: 1.174.0 ",(0,a.kt)("br",null))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New Option Window is now available on the server!")),(0,a.kt)("h2",{id:"fixes"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed some partners/pets skill cooldown issues"),(0,a.kt)("li",{parentName:"ul"},"Fixed some achievements (daily/weekly) not refreshing properly")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/kaWOfIg.png",alt:null})," ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/dYTi1Ws.png",alt:null})," ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/qezVsFW.png",alt:null})," ",(0,a.kt)("br",null)))}g.isMDXComponent=!0},91601:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=e=>{let{children:t}=e;return r.createElement("span",{style:{color:"#ff862c"}},t)}},62149:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=e=>{let{iconId:t,height:n=null,width:a=null}=e;return r.createElement("img",{src:"https://cdn.olympusgg.com/images/"+t+".png",height:n,width:a})}}}]);