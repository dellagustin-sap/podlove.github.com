"use strict";(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[2739],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64594:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Image Cache"},c=void 0,s={unversionedId:"faq/image-cache",id:"faq/image-cache",title:"Image Cache",description:"Podlove Publisher uses an Image Cache that fetches images to keep them locally. When delivered they are then resized to the ideal dimensions, for example for retina screen resolutions.",source:"@site/publisher/faq/image-cache.mdx",sourceDirName:"faq",slug:"/faq/image-cache",permalink:"/podlove-publisher/faq/image-cache",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/faq/image-cache.mdx",tags:[],version:"current",frontMatter:{title:"Image Cache"},sidebar:"0",previous:{title:"Background Jobs",permalink:"/podlove-publisher/developer/background-jobs"},next:{title:"Chapter Marks",permalink:"/podlove-publisher/faq/chapter-marks"}},p=[{value:"Image URLs",id:"image-urls",children:[],level:2},{value:"Troubleshooting &amp; Workarounds",id:"troubleshooting--workarounds",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podlove Publisher uses an Image Cache that fetches images to keep them locally. When delivered they are then resized to the ideal dimensions, for example for retina screen resolutions."),(0,o.kt)("h2",{id:"image-urls"},"Image URLs"),(0,o.kt)("p",null,"If you look into it, you will find two types of URLs used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Dynamic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://example.com/podlove/image/187474703a2f2f63646e2e706f64736565642e6f72671f6569/500/0/0/an-image\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Static")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://example.com/wp-content/cache/podlove/6e/7262f37a8018efafa4764ea97a4c26/an-image_500x500.png\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"dynamic")," URL is used when Podlove Publisher does not have an image cache yet. It fetches, caches and displays the image dynamically. If the cache exists at the time of rendering the page, the ",(0,o.kt)("em",{parentName:"p"},"static")," version is used, which is much faster because the image can be served directly by the web server without going through a PHP script."),(0,o.kt)("h2",{id:"troubleshooting--workarounds"},"Troubleshooting & Workarounds"),(0,o.kt)("p",null,"It appears that a minority of systems have trouble with this setup but it is not clear why. If your images are not displaying, please report the issue in ",(0,o.kt)("a",{parentName:"p",href:"https://community.podlove.org/"},"the forum"),", maybe we can get to the bottom of it together."),(0,o.kt)("p",null,"If the dynamic URLs work but the static ones don't, put this in your ",(0,o.kt)("inlineCode",{parentName:"p"},"wp-config.php"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"define('PODLOVE_IMAGE_CACHE_FORCE_DYNAMIC_URL', true);\n")),(0,o.kt)("p",null,"If that fails you can try to disable image cache completely, but that should only be the last resort because you are then delivering all images unoptimized and fullsize:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"define('PODLOVE_DISABLE_IMAGE_CACHE', true);\n")))}m.isMDXComponent=!0}}]);