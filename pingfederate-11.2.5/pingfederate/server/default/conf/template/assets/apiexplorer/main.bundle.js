!function(e){function t(t){for(var r,l,i=t[0],s=t[1],c=t[2],p=0,f=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={0:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;o.push([346,1]),n()}({346:function(e,t,n){n(347),e.exports=n(877)},877:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(34),l=n.n(o),i=n(4),s=n.n(i),c=(n(537),n(334)),u=n.n(c);function p(e,t,n,r,a,o,l){try{var i=e[o](l),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){p(o,r,a,l,i,"next",e)}function i(e){p(o,r,a,l,i,"throw",e)}l(void 0)}))}}var d="/pf-ws/authn/description",m="/pf-ws/authn/flows";function y(){var e=window.location.href.indexOf("/pf-ws/authn");return-1!==e?window.location.href.substr(0,e):"".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":".concat(window.location.port):"")}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u()(t,{headers:{Accept:"application/json","X-XSRF-Header":"PingFederate"}});return fetch(e,n)}function h(e){return g.apply(this,arguments)}function g(){return(g=f(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,e.abrupt("return",{body:n,status:t.status,statusText:t.statusText});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return w=f(regeneratorRuntime.mark((function e(t){var n,r,a,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"".concat(y()+m,"/").concat(t),r={credentials:"include"},e.next=4,v(n,r).catch((function(e){}));case 4:return a=e.sent,e.abrupt("return",h(a));case 6:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function E(){return x.apply(this,arguments)}function x(){return x=f(regeneratorRuntime.mark((function e(){var t,n,r,a,o,l,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"".concat(y()+m),n=i.length>1?i[1]:void 0,r=i.length>2?i[2]:void 0,a=i.length>3?i[3]:void 0,o={credentials:"include",headers:{"Content-Type":"application/json"},method:"POST",body:n},e.next=7,v("".concat(t,"/").concat(r,"?action=").concat(a),o).catch((function(e){}));case 7:return l=e.sent,e.abrupt("return",h(l));case 9:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function O(){return S.apply(this,arguments)}function S(){return S=f(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:y()+d,e.next=3,v(t);case 3:return n=e.sent,e.abrupt("return",h(n));case 5:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}var A=n(238),I=n.n(A),T=n(75),j=n.n(T),U=n(87),P=n.n(U),N=n(119),R=n.n(N);function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=function(e){var t=e.models,n=e.title,r=e.type;if(void 0!==t&&t.length>0){var o=t.map((function(n,o){var l=n.name,i=n.schema.properties,s=i?Object.entries(i).map((function(r,o){var l=_(r,2),i=l[0],s=l[1];return a.a.createElement("div",{className:"model-view__entry",key:"".concat(i,"-").concat(s.description,"-").concat(o)},a.a.createElement("span",{className:"model-view__key"},i),C(i,e,n)," (",D(s),"):"," ",M(s,t))})):[],c="";return o>0&&(c=a.a.createElement("div",{className:"model-name"},l)),s.length>0?a.a.createElement("div",null,c,a.a.createElement("div",{className:"model-view"},s)):a.a.createElement("p",null,"There is no model for this ",r,".")}));return a.a.createElement(P.a,{key:name,title:n,flags:["p-stateful"],condensed:!0,contentMargin:!1},o.length>0?o:a.a.createElement("p",null,"There is no model for this ",r,"."))}return a.a.createElement("p",null,"There is no model for this ",r,".")},C=function(e,t,n){if(void 0!==t)return void 0!==n.schema.required&&n.schema.required.includes(e)?"*":""},D=function(e){if("array"===e.type&&e&&e.items&&e.items.$ref){var t=e.items.$ref.slice(e.items.$ref.lastIndexOf("schemas/")+"schemas/".length);return"array[".concat(t,"]")}return!e.type&&e.$ref?L(e.$ref):e.type},M=function(e,t){if(e.type&&e.description)return e.description;var n,r=e.$ref;if(r){var a=L(r);n=t.find((function(e){if(e.name&&e.name===a)return e.schema&&e.schema.description}))}return n?n.schema.description:""},L=function(e){return e.slice(e.lastIndexOf("schemas/")+"schemas/".length)};F.propTypes={models:s.a.array};var B=F,J=n(335),X=n.n(J),G=n(139),$=n.n(G),V=n(88),Y=n.n(V),z=n(48),H=n.n(z),W=n(178),q=n.n(W),K=n(336),Q=n.n(K),Z=n(28),ee=n.n(Z);function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}var ne=function(e){var t=e.flowResult,n=e.status,r=e.statusText,o=e.nextAction,l=e.nextActionUrl,i=e.pluginTypeId;if(void 0===n)return null;var s="string"==typeof l?"Resume URL:":void 0!==l?"Current State:":void 0,c=void 0!==l?a.a.createElement($.a,te({title:o,className:"transition-result__next-action",type:"block"},"string"==typeof l?{target:"_blank",url:l}:{onClick:function(){return l(o,i)}})):null;return a.a.createElement("div",{className:"transition-result"},a.a.createElement("div",{className:"transition-result__title"},"Result"),a.a.createElement("div",{className:"transition-result__container"},a.a.createElement("div",{className:"transition-result__response"},a.a.createElement(Q.a,{value:t,language:"JSON"})),a.a.createElement(H.a,{alignment:z.alignments.CENTER,className:"transition-result__response-code",spacing:z.spacingOptions.MD},a.a.createElement(H.a,{spacing:z.spacingOptions.XS,justify:z.justifyOptions.SPACEBETWEEN},a.a.createElement(ee.a,{type:Z.textTypes.ERROR,overflow:Z.overflowTypes.NOWRAP},n),a.a.createElement(ee.a,{type:Z.textTypes.BODY},r),c&&a.a.createElement(ee.a,{type:Z.textTypes.BODY},"|"),a.a.createElement(ee.a,{type:Z.textTypes.BODY},a.a.createElement("span",{className:"nowrap"},s)),a.a.createElement(ee.a,{type:Z.textTypes.BODY},c),a.a.createElement(ee.a,{type:Z.textTypes.BODY})))))};ne.propTypes={flowResult:s.a.object,status:s.a.number,statusText:s.a.string,nextAction:s.a.string,nextActionUrl:s.a.oneOfType([s.a.string,s.a.func]),pluginTypeId:s.a.string};var re=ne,ae=(n(842),n(120)),oe=n.n(ae);function le(e,t,n,r,a,o,l){try{var i=e[o](l),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ce=!1,ue=function(e){var t=e.models,n=e.flowId,o=e.transitionId,l=e.flowUrl,i=e.scrollFn,s=e.pluginOrStateExists,c=ie(Object(r.useState)(""),2),u=c[0],p=c[1],f=ie(Object(r.useState)(!1),2),d=f[0],m=f[1],y=ie(Object(r.useState)(""),2),v=y[0],h=y[1],g=ie(Object(r.useState)({}),2),b=g[0],w=g[1],x=function(){ce&&m(!0)},O=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,r,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,oe()(x,200),ce=!0,e.next=5,E(l,u,n,o);case 5:t=e.sent,ce=!1,t&&t.body&&void 0!==t.body.status&&(c=t.body.pluginTypeId,"RESUME"===t.body.status?(r=t.body.resumeUrl,a=t.body.resumeUrl):"FAILED"!==t.body.status&&(r=t.body.status,s(c,t.body.status)&&(a=i))),m(!1),w({nextAction:r,nextActionUrl:a,pluginTypeId:c,status:t.status,statusText:t.statusText}),h(JSON.stringify(t.body,null,2)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0);case 16:return e.prev=16,m(!1),ce=!1,e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[0,13,16,20]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){le(o,r,a,l,i,"next",e)}function i(e){le(o,r,a,l,i,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}(),S=void 0!==t&&t.length>0;return a.a.createElement("div",null,a.a.createElement(Y.a,null,S&&a.a.createElement(X.a,{labelText:"Value Editor",className:"textarea-height--short",monospaced:!0,width:j.a.XL,value:u,onValueChange:p}),S&&a.a.createElement(Y.a,null,a.a.createElement($.a,{title:"Paste Model Template",icon:"clipboard",type:"block",onClick:function(){var e=t[0];if(void 0!==e){var n={};Object.entries(e.schema.properties).forEach((function(e){var t=ie(e,2),r=t[0],a=t[1];return n[r]=a.type})),p(JSON.stringify(n,null,2))}}}))),a.a.createElement(Y.a,null,a.a.createElement(H.a,{alignment:z.alignments.CENTER},a.a.createElement(q.a,{text:"Post",className:"inline",loading:d,onClick:O,inline:!0}))),v&&a.a.createElement(Y.a,null,a.a.createElement(re,{flowResult:v,status:b.status,statusText:b.statusText,nextAction:b.nextAction,nextActionUrl:b.nextActionUrl,pluginTypeId:b.pluginTypeId})))};ue.propTypes={models:s.a.array,flowId:s.a.string,flowUrl:s.a.string,transitionId:s.a.string,scrollFn:s.a.func,pluginOrStateExists:s.a.func};var pe=ue,fe=function(e){var t=e.errorGroup.errorGroup,n=t.error.code,r=t.error.httpStatus,o=t.error.message,l=t.errorDetails.filter((function(e){return n===e.parentCode})).map((function(e,t){return a.a.createElement(H.a,{className:"error-view__error",spacing:z.spacingOptions.XS,key:e.code+t},a.a.createElement(ee.a,{type:Z.textTypes.ERROR},e.code)," - ",e.message)}));return a.a.createElement("div",{className:"error-view"},a.a.createElement("span",{className:"error-view__code"},n)," (",r,") - ",o,a.a.createElement(R.a,{border:!1},l))},de=fe;fe.propTypes={errorGroup:s.a.object};var me=function(e){var t=e.errorGroups;return t.length>0?t.map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement(P.a,{contentMargin:!1,title:"Errors",flags:["p-stateful"]},a.a.createElement(de,{errorGroup:{errorGroup:e}})))})):null},ye=function(e){var t=e.transitions,n=e.flowId,r=e.flowUrl,o=e.scrollFn,l=e.pluginOrStateExists;return void 0!==t?0===t.length?a.a.createElement("p",null,"This state has no actions."):t.map((function(e){return a.a.createElement(P.a,{key:e.id,flags:["p-stateful"],title:e.id,titleValue:e.description},a.a.createElement(R.a,{title:"Action",colors:!0,className:"authn-indent"},a.a.createElement(pe,{models:e.models,flowId:n,transitionId:e.id,flowUrl:r,scrollFn:o,pluginOrStateExists:l}),a.a.createElement(B,{models:e.models,title:"Action Model",type:"action"}),a.a.createElement(me,{errorGroups:e.errorGroups})))})):null};ye.propTypes={flowUrl:s.a.string,flowId:s.a.string,transitions:s.a.array,scrollFn:s.a.func,pluginOrStateExists:s.a.func};var ve=ye,he=function(e){var t=e.stateDetails,n=e.flowId,r=e.flowUrl,o=e.scrollFn,l=e.pluginOrStateExists,i=e.stateExpanded,s=e.updateStatesExpanded;if(void 0===t)return null;var c={title:t.status,titleValue:t.description},u=t.models,p=t.actions;return a.a.createElement(P.a,{arrowCircle:!0,className:"model-view__section",condensed:!0,"data-id":c.title,key:c.title,flags:["p-stateless"],title:c.title,titleValue:c.titleValue,underlined:!1,expanded:i,onToggle:function(){s(t.status)}},a.a.createElement(R.a,{title:"STATE",colors:!0,className:"authn-indent"},a.a.createElement(B,{models:u,title:"State Model",type:"state"}),a.a.createElement(ve,{transitions:p,flowId:n,flowUrl:r,scrollFn:o,pluginOrStateExists:l})))};he.propTypes={stateDetails:s.a.object,flowId:s.a.string,flowUrl:s.a.string,scrollFn:s.a.func,pluginOrStateExists:s.a.func,stateExpanded:s.a.boolean,updateStatesExpanded:s.a.func};var ge=he,be=function(e){var t=e.stateDetails,n=e.flowId,r=e.flowUrl,o=e.scrollFn,l=e.pluginOrStateExists,i=e.stateExpanded,s=e.updateStatesExpanded;return t.states&&0!==t.states.length?t.states.map((function(e){return a.a.createElement("div",{key:e.status,id:e.status,className:"authn-api-state"},a.a.createElement(ge,{stateDetails:e,flowId:n,flowUrl:r,scrollFn:o,stateExpanded:i[e.status],updateStatesExpanded:s,pluginOrStateExists:l}))})):null};be.propTypes={stateDetails:s.a.object,flowId:s.a.string,flowUrl:s.a.string,scrollFn:s.a.func,pluginOrStateExists:s.a.func,stateExpanded:s.a.array,updateStatesExpanded:s.a.func};var we=be,Ee=n(337),xe=n.n(Ee);function Oe(e,t,n,r,a,o,l){try{var i=e[o](l),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function Se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ie=!1,Te=function(e){var t=e.flowId,n=e.setFlowId,o=e.flowUrl,l=e.scrollFn,i=e.pluginOrStateExists,s=Se(Object(r.useState)(!1),2),c=s[0],u=s[1],p=Se(Object(r.useState)(""),2),f=p[0],d=p[1],m=Se(Object(r.useState)({}),2),y=m[0],v=m[1],h=function(){Ie&&u(!0)},g=function(){var e,n=(e=regeneratorRuntime.mark((function e(){var n,r,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,oe()(h,200),Ie=!0,e.next=5,b(t,o);case 5:n=e.sent,Ie=!1,n&&n.body&&void 0!==n.body.status&&(s=n.body.pluginTypeId,"RESUME"===n.body.status?(r=n.body.resumeUrl,a=n.body.resumeUrl):"FAILED"!==n.body.status&&(r=n.body.status,i(s,n.body.status)&&(a=l))),u(!1),v({nextAction:r,nextActionUrl:a,pluginTypeId:s,status:n.status,statusText:n.statusText}),d(JSON.stringify(n.body,null,2)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0);case 16:return e.prev=16,u(!1),Ie=!1,e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[0,13,16,20]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){Oe(o,r,a,l,i,"next",e)}function i(e){Oe(o,r,a,l,i,"throw",e)}l(void 0)}))});return function(){return n.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(Y.a,null,a.a.createElement(xe.a,{flags:["p-stateful"],"data-id":"flowId",labelHelpText:"Enter the flow ID after starting an SSO flow",labelText:"Flow ID",width:j.a.MD,value:t,onValueChange:n}),a.a.createElement(q.a,{text:"Get",className:"primary",loading:c,onClick:g})),f&&a.a.createElement(Y.a,null,a.a.createElement(re,{flowResult:f,status:y.status,statusText:y.statusText,nextAction:y.nextAction,nextActionUrl:y.nextActionUrl,pluginTypeId:y.pluginTypeId})))};Te.propTypes={flowId:s.a.string,setFlowId:s.a.func,flowUrl:s.a.string,scrollFn:s.a.func,pluginOrStateExists:s.a.func};var je,Ue=Te,Pe=n(45),Ne=n.n(Pe),Re=n(338);function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(je=window).URLSearchParams=je.URLSearchParams||function(e){var t=this;t.searchString=e,t.get=function(e){var n=new RegExp("[?&]".concat(e,"=([^&#]*)")).exec(t.searchString);return null==n?null:decodeURI(n[1])||0}};var De=function(e){var t=e.values,n=e.flowUrl,o=Fe(Object(r.useState)(""),2),l=o[0],i=o[1],s=Fe(Object(r.useState)(new URLSearchParams(window.location.search).get("flowId")||""),2),c=s[0],u=s[1],p=Fe(Object(r.useState)(""),2),f=p[0],d=p[1],m=Fe(Object(r.useState)({}),2),y=m[0],v=m[1];Object(r.useEffect)((function(){var e=t.map((function(e){return{value:e.id,label:e.displayName}}))||{};i(e[0])}),[t,t.apiAdapters,t.apiSelectors]),Object(r.useEffect)((function(){f&&(Re.scroller.scrollTo("".concat(f),{duration:80,delay:0,smooth:"linear"}),d(""))}));var h=function(e,t){v((function(n){return n[e]=void 0===t?!n[e]:t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach((function(t){ke(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n)}))},g=function(e,n){if(n){if(l.value!==n){var r=t.find((function(e){return e.id===n}));i({value:r.id,label:r.displayName})}h(e,!0),d(e)}},b=function(e,n){if(void 0!==t.find((function(t){return t.id===e}))&&void 0!==t.filter((function(e){return void 0!==e.states&&void 0!==e.states.find((function(e){return e.status===n}))})))return!0;return!1},w=t.map((function(e){return{value:e.id,label:e.displayName}})).sort((function(e,t){return e.label<t.label?-1:e.label>t.label?1:0}))||[],E=l&&t.find((function(e){return e.id===l.value}));return a.a.createElement("div",null,a.a.createElement(Ne.a,{left:Pe.sizes.XL},a.a.createElement(Ue,{flowId:c,setFlowId:u,scrollFn:g,pluginOrStateExists:b})),a.a.createElement(Ne.a,{className:"authn-descriptions__container",top:Pe.sizes.XL},a.a.createElement(Ne.a,{left:Pe.sizes.XL},a.a.createElement(I.a,{className:"authn-descriptions__dropdown",selectClassName:"authn-descriptions__dropdown-select",width:j.a.MD,options:w,selectedOption:l,label:"Authentication Adapter/Selector",onValueChange:i})),E&&a.a.createElement(we,{stateDetails:E,flowId:c,flowUrl:n,scrollFn:g,pluginOrStateExists:b,stateExpanded:y,updateStatesExpanded:h})))};De.propTypes={values:s.a.array,flowUrl:s.a.string},De.defaultProps={values:[]};var Me=De,Le=n(239),Be=n.n(Le),Je=n(339),Xe=n.n(Je),Ge=n(340),$e=n.n(Ge),Ve=n(177),Ye=n.n(Ve),ze=n(341),He=n.n(ze),We=n(138),qe=n.n(We),Ke=n(342),Qe=n.n(Ke);function Ze(e){return function(e){if(Array.isArray(e))return rt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||nt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function et(e,t,n,r,a,o,l){try{var i=e[o](l),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function tt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||nt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(e,t){if(e){if("string"==typeof e)return rt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rt(e,t):void 0}}function rt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var at=!1,ot=function(e){var t=e.flowUrl,n=e.descriptionUrl,o=e.postmanUrl,l="".concat(y(),"/pf-ws/authn/explorer"),i=tt(Object(r.useState)([]),2),s=i[0],c=i[1],u=tt(Object(r.useState)(!1),2),p=u[0],f=u[1],d=tt(Object(r.useState)(!1),2),m=d[0],v=d[1],h=tt(Object(r.useState)(!1),2),g=h[0],b=h[1],w=function(){at&&f(!0)};Object(r.useEffect)((function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,oe()(w,200),at=!0,e.next=5,O(n);case 5:t=e.sent,at=!1,(r=t.body).apiAdapters&&(a=Object.values(r.apiAdapters)),r.apiSelectors&&(a=[].concat(Ze(a),Ze(Object.values(r.apiSelectors)))),c(a),f(!1),v(!1),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),f(!1),v(!0);case 20:return e.prev=20,f(!1),at=!1,e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[0,15,20,24]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){et(o,r,a,l,i,"next",e)}function i(e){et(o,r,a,l,i,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();try{e()}catch(e){v(!0)}}),[]);return a.a.createElement("div",null,a.a.createElement(Ne.a,{left:Pe.sizes.XL},a.a.createElement(Ye.a,{title:"What is the PingFederate Authentication API?",onToggle:function(){return b(!g)},expanded:g}),a.a.createElement(He.a,{test:g},a.a.createElement(Ne.a,{className:"authn-about__container",bottom:Pe.sizes.XL},a.a.createElement(Xe.a,null,a.a.createElement(ee.a,null,"The PingFederate Authentication API is a JSON-based API that provides access to the current state of the flow as an end user steps through a PingFederate authentication policy. This API allows end-user interactions, such as credential prompts, to be handled by an external web application."),a.a.createElement(ee.a,null,"Select an API-capable authentication source below to see the states, actions, and models that are available for the adapter or selector. When an authentication application is configured and enabled for an authentication policy, an authentication flow can be initiated when PingFederate handles a request. Enter the resulting flow ID here to retrieve its current state. You can then navigate to the section describing this state and initiate the action with the API."),a.a.createElement("br",null),a.a.createElement(ee.a,null,"THIS API EXPLORER CAN BE CONFIGURED AS AN AUTHENTICATION APPLICATION BY SETTING THE APPLICATION URL TO:"),a.a.createElement(Qe.a,{className:"input-width-large",text:l}),a.a.createElement(ee.a,null,"In addition, you can download a Postman collection file for the Authentication API Explorer."),a.a.createElement(qe.a,{label:"Postman Collection",iconName:"download",onClick:function(){try{window.location.href=o}catch(e){}},inline:!0}))))),p&&a.a.createElement($e.a,{"data-id":"main-loading",show:!0}),!p&&a.a.createElement(Me,{values:s,flowUrl:t}),m&&a.a.createElement(Ne.a,{left:Pe.sizes.XL},a.a.createElement(Be.a,{type:Be.a.MessageTypes.ERROR},"Failed to fetch the JSON for the API Descriptions.")))};ot.propTypes={flowUrl:s.a.string,descriptionUrl:s.a.string,postmanUrl:s.a.string};var lt=ot,it=n(343),st=n.n(it);function ct(e){var t=e.flowUrl,n=e.descriptionUrl,r=e.postmanUrl,o=e.helpUrl;return a.a.createElement("div",{className:"App",id:"appcontent"},a.a.createElement(st.a,{siteLogo:"pingfed",siteTitle:"Authentication API Explorer",tree:[{id:"help",title:"Help",url:o}]}),a.a.createElement(lt,{flowUrl:t,descriptionUrl:n,postmanUrl:r}))}ct.propTypes={flowUrl:s.a.string,descriptionUrl:s.a.string,postmanUrl:s.a.string,helpUrl:s.a.string};var ut,pt=ct,ft=(n(883),document.getElementById("flowUrl"));null!==ft&&(ut=JSON.parse(ft.text));var dt,mt=document.getElementById("descriptionUrl");null!==mt&&(dt=JSON.parse(mt.text));var yt,vt=document.getElementById("postmanUrl");null!==vt&&(yt=JSON.parse(vt.text));var ht,gt=document.getElementById("helpUrl");null!==gt&&(ht=JSON.parse(gt.text)),l.a.render(a.a.createElement(pt,{flowUrl:ut,descriptionUrl:dt,postmanUrl:yt,helpUrl:ht}),document.getElementById("root"))},883:function(e,t){}});