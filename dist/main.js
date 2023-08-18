(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>C});var o=t(81),r=t.n(o),a=t(645),c=t.n(a),i=t(667),s=t.n(i),l=new URL(t(133),t.b),d=new URL(t(447),t.b),p=new URL(t(88),t.b),u=new URL(t(564),t.b),m=new URL(t(223),t.b),f=c()(r()),h=s()(l),g=s()(d),v=s()(p),b=s()(u),x=s()(m);f.push([e.id,`@font-face {\n    font-family: 'DancingScript';\n    src: url(${h}) format('truetype');\n}\n\n@font-face {\n    font-family: 'Montserrat';\n    src: url(${g}) format('truetype');\n}\n\n@keyframes raise {\n    from {\n        transform: translateY(0);\n    }\n\n    to {\n        transform: translateY(-5px);\n    }\n}\n\n:root {\n    --color-bg: #000000a4;\n    --color-bg-dark: #000000c2;\n    --color-bg-light: rgba(255, 255, 255, 0.233);\n\n    --color-border-black: #1b1b1b;\n\n    --color-white: white;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100%;\n}\n\nbody * {\n    text-align: center;\n    color: var(--color-white);\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n\n    background: url(${v});\n    background-size: cover;\n}\n\nheader,\nmain>.card,\nfooter {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border-black);\n}\n\nheader {\n    height: 205px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    background: var(--color-bg-dark);\n}\n\nheader>h1 {\n    margin-top: 20px;\n    ;\n    font-size: 5rem;\n    font-family: 'DancingScript', cursive;\n    font-weight: 200;\n}\n\nnav>ul {\n    list-style: none;\n    display: flex;\n}\n\nnav>ul>li {\n    font-size: 1.2rem;\n    padding: 20px 25px;\n    position: relative;\n    transition: 0.3s;\n    cursor: grab;\n}\n\nnav>ul>li.selected {\n    border-bottom: 2px solid var(--color-white);\n}\n\nnav>ul>li:hover {\n    padding-bottom: 25px;\n    padding-top: 15px;\n}\n\n\nmain {\n    flex: 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.card {\n    width: 700px;\n    padding: 50px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.card p {\n    font-size: 1.35rem;\n}\n\n.section.pizza {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.section.pizza>h2 {\n    font-size: 2.2rem;\n    margin-bottom: 30px;\n}\n\n.menu-item {\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background: var(--color-bg);\n    padding: 20px;\n    transition: 0.3s;\n}\n\n.menu-item:hover {\n    background: var(--color-bg-light);\n}\n\n.menu-item>h3 {\n    font-size: 1.4rem;\n}\n\n.menu-item>p {\n    text-align: start;\n    font-size: 1.2rem;\n}\n\n.card.contact {\n    padding: 35px 20px;\n}\n\n.card.contact>div {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.phone-icon,\n.map-icon {\n    background: var(--color-white);\n    width: 2rem;\n    height: 2rem;\n}\n\n.phone-icon {\n    -webkit-mask: url(${b}) no-repeat center;\n    mask: url(${b}) no-repeat center;\n}\n\n.map-icon {\n    -webkit-mask: url(${x}) no-repeat center;\n    mask: url(${x}) no-repeat center;\n}\n\n.card>img {\n    height: 350px;\n    margin: 16px 0;\n    border: 1px solid var(--color-border-black);\n}\n\nfooter {\n    padding: 13px;\n}\n\nfooter>p {\n    font-size: 1.1rem;\n}`,""]);const C=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},133:(e,n,t)=>{e.exports=t.p+"3e7e73f4e34e4945f363.ttf"},447:(e,n,t)=>{e.exports=t.p+"3faa3eef13649db02044.ttf"},88:(e,n,t)=>{e.exports=t.p+"80f7a45b2ffc3bc10166.jpg"},223:(e,n,t)=>{e.exports=t.p+"8ed820373498e050ba48.svg"},564:(e,n,t)=>{e.exports=t.p+"3625cedc243e179107a0.svg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),i=t(565),s=t.n(i),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"2b7e5c482b08fcdbf6fe.jpg",g=t.p+"acae6499c3c9c4e7b21d.png";(function(){const e=document.querySelector("#content");return{render:function(){!function(){const n=document.createElement("header"),t=document.createElement("h1");t.textContent="Cecchinni's",n.appendChild(t);const o=document.createElement("nav");n.appendChild(o);const r=document.createElement("ul");o.appendChild(r);const a=document.createElement("li"),c=document.createElement("li"),i=document.createElement("li");r.appendChild(a),r.appendChild(c),r.appendChild(i),a.textContent="Home",c.textContent="Menu",i.textContent="Contact",a.classList.add("home-button"),c.classList.add("menu-button"),i.classList.add("contact-button"),a.classList.add("selected"),e.appendChild(n)}(),function(){const n=document.createElement("main");e.appendChild(n)}(),function(){const n=document.createElement("footer"),t=document.createElement("p");t.textContent="Elliot Akande © 2023",n.appendChild(t),e.appendChild(n)}()}}})().render();const v=function(){const e=document.querySelector("main");return{render:function(){e.textContent="",function(){const n=document.createElement("div");n.classList.add("card"),e.appendChild(n);const t=document.createElement("p");t.textContent="Bringing authentic, Italian pizza to Scotland",n.appendChild(t);const o=document.createElement("p");o.textContent="Made with passion since 1903",n.appendChild(o);const r=document.createElement("img");r.src=h,n.appendChild(r);const a=document.createElement("p");a.textContent="Order online or come visit us!",n.appendChild(a)}()}}}(),b=function(){const e=document.querySelector("main");return{render:function(){e.textContent="",function(){const n=document.createElement("div");n.classList.add("card","menu"),e.appendChild(n);const t=document.createElement("div");t.classList.add("section","pizza"),n.appendChild(t);const o=document.createElement("h2");o.textContent="Pizza",t.appendChild(o),[["Salsiccia","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"],["Gamberi","Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"],["Pepe","Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"],["Disgustoso","Tomato sauce, Bacon, Pineapple, Olives, Basil"],["Colorato","Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"],["Pomodoro","Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"],["Crema","White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"],["Carne","Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"]].forEach((e=>t.appendChild(function(e,n){const t=document.createElement("div");t.classList.add("menu-item");const o=document.createElement("h3");o.textContent=e,t.appendChild(o);const r=document.createElement("p");return r.textContent=n,t.appendChild(r),t}(e[0],e[1]))))}()}}}(),x=function(){const e=document.querySelector("main");return{render:function(){e.textContent="",function(){const n=document.createElement("div");n.classList.add("card","contact"),e.appendChild(n);const t=document.createElement("div");n.appendChild(t);const o=document.createElement("div");o.classList.add("phone-icon"),t.appendChild(o);const r=document.createElement("p");r.textContent="07572 893017",t.appendChild(r);const a=document.createElement("div");n.appendChild(a);const c=document.createElement("div");c.classList.add("map-icon"),a.appendChild(c);const i=document.createElement("p");i.textContent="123 Sesame Street, Ardrossan, Scotland",a.appendChild(i);const s=document.createElement("img");s.src=g,n.appendChild(s)}()}}}();v.render();const C=document.querySelector(".home-button"),y=document.querySelector(".menu-button"),E=document.querySelector(".contact-button");C.addEventListener("click",(()=>{document.querySelector("li.selected").classList.toggle("selected"),C.classList.toggle("selected"),v.render()})),y.addEventListener("click",(()=>{document.querySelector("li.selected").classList.toggle("selected"),y.classList.toggle("selected"),b.render()})),E.addEventListener("click",(()=>{document.querySelector("li.selected").classList.toggle("selected"),E.classList.toggle("selected"),x.render()}))})()})();