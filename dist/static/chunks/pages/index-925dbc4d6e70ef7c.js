(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2308)}])},6292:function(e,r,t){"use strict";var n=t(5893);r.Z=function(e){return(0,n.jsx)("div",{style:{textAlign:e.textAlign||"center",paddingTop:"80px"},children:e.children})}},5581:function(e,r,t){"use strict";var n=t(5893),o=t(1664);r.Z=function(){return(0,n.jsxs)("ul",{style:{margin:0,height:"60px",fontSize:"17px",display:"flex",alignItems:"center",gap:"20px"},children:[(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:"\u5173\u4e8e"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/task",children:(0,n.jsx)("a",{children:"\u5de5\u4f5c\u6e05\u5355"})})})]})}},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},l=t(1003),u=t(880),c=t(9246);var s={};function f(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=u.useRouter(),i=a.default.useMemo((function(){var r=o(l.resolveHref(n,e.href,!0),2),t=r[0],i=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):i||t}}),[n,e.href,e.as]),d=i.href,p=i.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var _=(r=a.default.Children.only(h))&&"object"===typeof r&&r.ref,b=o(c.useIntersection({rootMargin:"200px"}),2),x=b[0],j=b[1],w=a.default.useCallback((function(e){x(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,x]);a.default.useEffect((function(){var e=j&&t&&l.isLocalURL(d),r="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,j,g,t,n]);var E={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,i,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:i,locale:u,scroll:a}))}(e,n,d,p,v,y,m,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var A="undefined"!==typeof g?g:n&&n.locale,I=n&&n.isLocaleDomain&&l.getDomainLocale(p,A,n&&n.locales,n&&n.domainLocales);E.href=I||l.addBasePath(l.addLocale(p,A,n&&n.defaultLocale))}return a.default.cloneElement(r,E)};r.default=d},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],h=o(i.useState(r?r.current:null),2),v=h[0],y=h[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=u.get(n):(r=u.get(t),c.push(t));if(r)return r;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return u.set(t,r={id:t,observer:i,elements:o}),r}(t),o=n.id,i=n.observer,a=n.elements;return a.set(e,r),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),u.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){r&&y(r.current)}),[r]),[m,d]};var i=t(7294),a=t(4686),l="undefined"!==typeof IntersectionObserver;var u=new Map,c=[]},2308:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(5893),o=t(7160),i=t.n(o),a=t(5581),l=t(6292),u=function(e){var r=e.size||100;return(0,n.jsx)("div",{style:{height:r,width:r,borderRadius:r/2,display:"inline-flex",alignItems:"center",justifyContent:"space-around",overflow:"hidden"},children:(0,n.jsx)("img",{width:r,src:"/avatar.jpeg",alt:"avatar"})})},c=function(){return(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsx)(a.Z,{}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(u,{size:150}),(0,n.jsx)("p",{children:"\ud83e\uddd1\u200d\ud83d\udcbb Andy Hao"}),(0,n.jsx)("p",{children:"\ud83c\udfa9 \u5168\u6808\u5de5\u7a0b\u5e08\u3001\u81ea\u7531\u804c\u4e1a\u8005"}),(0,n.jsx)("p",{children:"\u270d\ufe0f \u64b8\u64b8\u4ee3\u7801\u3001\u7814\u7a76\u4e0b\u6280\u672f\u3001\u5199\u5199\u6587\u7ae0\uff0c\u770b\u770b\u6050\u6016\u7535\u5f71"}),(0,n.jsxs)("p",{children:["\ud83e\uddb6 \u6d3b\u8dc3\u4e8e",(0,n.jsx)("a",{href:"https://juejin.cn/user/2576910984952679",children:"\u6398\u91d1"}),"\u3001",(0,n.jsx)("a",{href:"https://github.com/anderlaw",children:"github"})]}),(0,n.jsxs)("p",{style:{marginTop:"40px"},children:["\ud83c\udf89 ",(0,n.jsx)("strong",{children:"\u5982\u679c\u60a8\u559c\u6b22\u6211\u7684\u5de5\u4f5c\uff0c\u53ef\u4ee5\u8054\u7cfb\u6211\u6765\u4e3a\u60a8\u5de5\u4f5c\u3002"})]})]})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},1664:function(e,r,t){e.exports=t(1551)}},function(e){e.O(0,[774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);