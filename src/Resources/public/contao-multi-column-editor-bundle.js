!function(t){function e(e){for(var n,o,i=e[0],a=e[1],l=0,c=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(u&&u(e);c.length;)c.shift()()}var n={},r={"contao-multi-column-editor-bundle":0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/bundles/heimrichhannotcontaomulticolumneditor/",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=a;o(o.s="3K4J")}({"3K4J":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var formdata_polyfill__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("hRLk"),formdata_polyfill__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(formdata_polyfill__WEBPACK_IMPORTED_MODULE_0__);function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}var MultiColumnEditorBundle=function(){function MultiColumnEditorBundle(){_classCallCheck(this,MultiColumnEditorBundle)}return _createClass(MultiColumnEditorBundle,null,[{key:"init",value:function(){var t=document.querySelectorAll(".multi-column-editor");if(!(t.length<1)){var e="backend"===t[0].dataset.env;utilsBundle.event.addDynamicEventListener("click",".multi-column-editor .add",(function(t,n){n.preventDefault(),MultiColumnEditorBundle.triggerAction(e,t,"addRow",t.href)})),utilsBundle.event.addDynamicEventListener("click",".multi-column-editor .delete",(function(t,n){n.preventDefault(),MultiColumnEditorBundle.triggerAction(e,t,"deleteRow",t.href)})),utilsBundle.event.addDynamicEventListener("click",".multi-column-editor .drag-handle",(function(t,e){e.preventDefault()})),utilsBundle.event.addDynamicEventListener("click","[data-mce-click]",(function(t,n){MultiColumnEditorBundle.triggerAction(e,t,"updateRows",t.getAttribute("data-mce-click"))})),utilsBundle.event.addDynamicEventListener("change","[data-mce-change]",(function(t,n){MultiColumnEditorBundle.triggerAction(e,t,"updateRows",t.getAttribute("data-mce-change"))})),MultiColumnEditorBundle.initSortable(e)}}},{key:"initSortable",value:function(t){t?new Sortables(".multi-column-editor-wrapper .sortable",{constrain:!0,opacity:.6,handle:".drag-handle",onComplete:function(e){for(var n=[],r=!1,o=e.closest(".rows").querySelectorAll(".mce-row"),i=0;i<o.length;i++)n.push(o[i].dataset.index),o[i].dataset.index!==[].slice.call(o).indexOf(this)+1&&(r=!0);var a=[{name:"newIndices",value:n.join(",")}];r&&MultiColumnEditorBundle.triggerAction(t,e.querySelector(".drag-handle"),"sortRows",null,a)}}):Promise.resolve().then(__webpack_require__.t.bind(null,"o1Lx",7)).then((function(e){var n=document.querySelectorAll(".multi-column-editor-wrapper .sortable");n.forEach((function(r){e.create(r,{handle:".drag-handle",onEnd:function(e){for(var o=[],i=!1,a=e.item.closest(".rows").querySelectorAll(".mce-row"),l=0;l<a.length;l++)o.push(a[l].dataset.index),a[l].dataset.index!==Array.prototype.indexOf.call(n,r)+1&&(i=!0);var u=[{name:"newIndices",value:o.join(",")}];i&&MultiColumnEditorBundle.triggerAction(t,e.item.querySelector(".drag-handle"),"sortRows",null,u)}})}))}))}},{key:"triggerAction",value:function triggerAction(isBackend,link,action,url,additionalFormData,callback){var form=link.closest("form"),formData=new FormData,editor=link.closest(".multi-column-editor");null===url&&(url=form.action),form.querySelectorAll("input[name]:not([disabled]), textarea[name]:not([disabled]), select[name]:not([disabled]), button[name]:not([disabled])").forEach((function(t){if("FORM_SUBMIT"!==t.name)switch(t.type){case"checkbox":case"radio":formData.append(t.name,t.checked?t.value:"");break;default:formData.append(t.name,t.value)}}));var row=link.closest(".mce-row");formData.set("row",null!=row?row.dataset.index:0),formData.set("field",editor.dataset.field),formData.set("table",editor.dataset.table),formData.set("action",action),void 0!==additionalFormData&&additionalFormData.forEach((function(t){if("FORM_SUBMIT"!==t.name)switch(t.type){case"checkbox":case"radio":formData.append(t.name,t.checked?t.value:"");break;default:formData.append(t.name,t.value)}}));var xhr=new XMLHttpRequest;xhr.onreadystatechange=function(){if(4===xhr.readyState){var customEvent=document.createEvent("CustomEvent");if(customEvent.initEvent("ajaxSuccess",!0,!0),document.dispatchEvent(customEvent),200===xhr.status)if(isBackend){var response=document.createElement("div");response.innerHTML=xhr.responseText;var scriptElements=response.childNodes[0].getElementsByTagName("script");link.closest(".multi-column-editor-wrapper").replaceWith(response.childNodes[0]),MultiColumnEditorBundle.initChosen(),MultiColumnEditorBundle.initSortable(isBackend);for(var n=0;n<scriptElements.length;n++)eval(scriptElements[n].innerHTML);"function"==typeof callback&&callback.apply(this,Array.prototype.slice.call(arguments,1));var e=document.createEvent("CustomEvent");e.initEvent("ajaxComplete",!0,!0),document.dispatchEvent(e)}else{var data=JSON.parse(xhr.responseText),_response=document.createElement("div");_response.innerHTML=data.result.html,link.closest(".multi-column-editor-wrapper").replaceWith(_response.childNodes[0]),MultiColumnEditorBundle.initSortable(isBackend),"function"==typeof callback&&callback.apply(this,Array.prototype.slice.call(arguments,1)),customEvent=document.createEvent("CustomEvent"),customEvent.initEvent("ajaxComplete",!0,!0),document.dispatchEvent(customEvent)}}},xhr.open("POST",url),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.send(formData)}}]),MultiColumnEditorBundle}();document.addEventListener("DOMContentLoaded",MultiColumnEditorBundle.init),"function"==typeof window.addEvent&&window.addEvent("domready",(function(){MultiColumnEditorBundle.initChosen=function(){$$(".multi-column-editor select.tl_chosen").each((function(t){void 0===t.initialized&&(t.initialized=$$("#"+t.getAttribute("id")).chosen())}))}}))},hRLk:function(t,e,n){(function(t){!function(){var e;function n(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var o,i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof t&&t];for(var n=0;n<e.length;++n){var r=e[n];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);function a(t,e){if(e){for(var n=i,o=t.split("."),a=0;a<o.length-1;a++){var l=o[a];l in n||(n[l]={}),n=n[l]}(l=e(a=n[o=o[o.length-1]]))!=a&&null!=l&&r(n,o,{configurable:!0,writable:!0,value:l})}}function l(t){return(t={next:t})[Symbol.iterator]=function(){return this},t}function u(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):{next:n(t)}}if(a("Symbol",(function(t){function e(t,e){this.o=t,r(this,"description",{configurable:!0,writable:!0,value:e})}if(t)return t;e.prototype.toString=function(){return this.o};var n=0;return function t(r){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new e("jscomp_symbol_"+(r||"")+"_"+n++,r)}})),a("Symbol.iterator",(function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var e="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),o=0;o<e.length;o++){var a=i[e[o]];"function"==typeof a&&"function"!=typeof a.prototype[t]&&r(a.prototype,t,{configurable:!0,writable:!0,value:function(){return l(n(this))}})}return t})),"function"==typeof Object.setPrototypeOf)o=Object.setPrototypeOf;else{var c;t:{var s={};try{s.__proto__={u:!0},c=s.u;break t}catch(t){}c=!1}o=c?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var d=o;function f(){this.h=!1,this.f=null,this.m=void 0,this.b=1,this.l=this.v=0,this.g=null}function p(t){if(t.h)throw new TypeError("Generator is already running");t.h=!0}function h(t,e){return t.b=3,{value:e}}function m(t){this.a=new f,this.B=t}function v(t,e,n,r){try{var o=e.call(t.a.f,n);if(!(o instanceof Object))throw new TypeError("Iterator result "+o+" is not an object");if(!o.done)return t.a.h=!1,o;var i=o.value}catch(e){return t.a.f=null,t.a.j(e),y(t)}return t.a.f=null,r.call(t.a,i),y(t)}function y(t){for(;t.a.b;)try{var e=t.B(t.a);if(e)return t.a.h=!1,{value:e.value,done:!1}}catch(e){t.a.m=void 0,t.a.j(e)}if(t.a.h=!1,t.a.g){if(e=t.a.g,t.a.g=null,e.A)throw e.w;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function b(t){this.next=function(e){return t.i(e)},this.throw=function(e){return t.j(e)},this.return=function(e){return function(t,e){p(t.a);var n=t.a.f;return n?v(t,"return"in n?n.return:function(t){return{value:t,done:!0}},e,t.a.return):(t.a.return(e),y(t))}(t,e)},this[Symbol.iterator]=function(){return this}}function _(t,e){var n=new b(new m(e));return d&&d(n,t.prototype),n}if(f.prototype.i=function(t){this.m=t},f.prototype.j=function(t){this.g={w:t,A:!0},this.b=this.v||this.l},f.prototype.return=function(t){this.g={return:t},this.b=this.l},m.prototype.i=function(t){return p(this.a),this.a.f?v(this,this.a.f.next,t,this.a.i):(this.a.i(t),y(this))},m.prototype.j=function(t){return p(this.a),this.a.f?v(this,this.a.f.throw,t,this.a.i):(this.a.j(t),y(this))},"undefined"!=typeof Blob&&("undefined"==typeof FormData||!FormData.prototype.keys)){var g=function(t,e){for(var n=0;n<t.length;n++)e(t[n])},w=function(t,e,n){return e instanceof Blob?[String(t),e,void 0!==n?n+"":"string"==typeof e.name?e.name:"blob"]:[String(t),String(e)]},E=function(t,e){if(t.length<e)throw new TypeError(e+" argument required, but only "+t.length+" present.")},x=function(t){var e=u(t);t=e.next().value;var n=e.next().value;return e=e.next().value,n instanceof Blob&&(n=new File([n],e,{type:n.type,lastModified:n.lastModified})),[t,n]},M="object"==typeof globalThis?globalThis:"object"==typeof window?window:"object"==typeof self?self:this,S=M.FormData,k=M.XMLHttpRequest&&M.XMLHttpRequest.prototype.send,B=M.Request&&M.fetch,j=M.navigator&&M.navigator.sendBeacon,C=M.Element&&M.Element.prototype,D=M.Symbol&&Symbol.toStringTag;D&&(Blob.prototype[D]||(Blob.prototype[D]="Blob"),"File"in M&&!File.prototype[D]&&(File.prototype[D]="File"));try{new File([],"")}catch(t){M.File=function(t,e,n){return t=new Blob(t,n),n=n&&void 0!==n.lastModified?new Date(n.lastModified):new Date,Object.defineProperties(t,{name:{value:e},lastModifiedDate:{value:n},lastModified:{value:+n},toString:{value:function(){return"[object File]"}}}),D&&Object.defineProperty(t,D,{value:"File"}),t}}var A=function(t){this.c=[];var e=this;t&&g(t.elements,(function(t){if(t.name&&!t.disabled&&"submit"!==t.type&&"button"!==t.type&&!t.matches("form fieldset[disabled] *"))if("file"===t.type){var n=t.files&&t.files.length?t.files:[new File([],"",{type:"application/octet-stream"})];g(n,(function(n){e.append(t.name,n)}))}else"select-multiple"===t.type||"select-one"===t.type?g(t.options,(function(n){!n.disabled&&n.selected&&e.append(t.name,n.value)})):"checkbox"===t.type||"radio"===t.type?t.checked&&e.append(t.name,t.value):(n="textarea"===t.type?t.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):t.value,e.append(t.name,n))}))};if((e=A.prototype).append=function(t,e,n){E(arguments,2),this.c.push(w(t,e,n))},e.delete=function(t){E(arguments,1);var e=[];t=String(t),g(this.c,(function(n){n[0]!==t&&e.push(n)})),this.c=e},e.entries=function t(){var e,n=this;return _(t,(function(t){if(1==t.b&&(e=0),3!=t.b)return e<n.c.length?t=h(t,x(n.c[e])):(t.b=0,t=void 0),t;e++,t.b=2}))},e.forEach=function(t,e){E(arguments,1);for(var n=u(this),r=n.next();!r.done;r=n.next()){var o=u(r.value);r=o.next().value,o=o.next().value,t.call(e,o,r,this)}},e.get=function(t){E(arguments,1);var e=this.c;t=String(t);for(var n=0;n<e.length;n++)if(e[n][0]===t)return x(e[n])[1];return null},e.getAll=function(t){E(arguments,1);var e=[];return t=String(t),g(this.c,(function(n){n[0]===t&&e.push(x(n)[1])})),e},e.has=function(t){E(arguments,1),t=String(t);for(var e=0;e<this.c.length;e++)if(this.c[e][0]===t)return!0;return!1},e.keys=function t(){var e,n,r,o,i=this;return _(t,(function(t){if(1==t.b&&(e=u(i),n=e.next()),3!=t.b)return n.done?void(t.b=0):(r=n.value,o=u(r),h(t,o.next().value));n=e.next(),t.b=2}))},e.set=function(t,e,n){E(arguments,2),t=String(t);var r=[],o=w(t,e,n),i=!0;g(this.c,(function(e){e[0]===t?i&&(i=!r.push(o)):r.push(e)})),i&&r.push(o),this.c=r},e.values=function t(){var e,n,r,o,i=this;return _(t,(function(t){if(1==t.b&&(e=u(i),n=e.next()),3!=t.b)return n.done?void(t.b=0):(r=n.value,(o=u(r)).next(),h(t,o.next().value));n=e.next(),t.b=2}))},A.prototype._asNative=function(){for(var t=new S,e=u(this),n=e.next();!n.done;n=e.next()){var r=u(n.value);n=r.next().value,r=r.next().value,t.append(n,r)}return t},A.prototype._blob=function(){for(var t="----formdata-polyfill-"+Math.random(),e=[],n=u(this),r=n.next();!r.done;r=n.next()){var o=u(r.value);r=o.next().value,o=o.next().value,e.push("--"+t+"\r\n"),o instanceof Blob?e.push('Content-Disposition: form-data; name="'+r+'"; filename="'+o.name+'"\r\nContent-Type: '+(o.type||"application/octet-stream")+"\r\n\r\n",o,"\r\n"):e.push('Content-Disposition: form-data; name="'+r+'"\r\n\r\n'+o+"\r\n")}return e.push("--"+t+"--"),new Blob(e,{type:"multipart/form-data; boundary="+t})},A.prototype[Symbol.iterator]=function(){return this.entries()},A.prototype.toString=function(){return"[object FormData]"},C&&!C.matches&&(C.matches=C.matchesSelector||C.mozMatchesSelector||C.msMatchesSelector||C.oMatchesSelector||C.webkitMatchesSelector||function(t){for(var e=(t=(this.document||this.ownerDocument).querySelectorAll(t)).length;0<=--e&&t.item(e)!==this;);return-1<e}),D&&(A.prototype[D]="FormData"),k){var O=M.XMLHttpRequest.prototype.setRequestHeader;M.XMLHttpRequest.prototype.setRequestHeader=function(t,e){O.call(this,t,e),"content-type"===t.toLowerCase()&&(this.s=!0)},M.XMLHttpRequest.prototype.send=function(t){t instanceof A?(t=t._blob(),this.s||this.setRequestHeader("Content-Type",t.type),k.call(this,t)):k.call(this,t)}}B&&(M.fetch=function(t,e){return e&&e.body&&e.body instanceof A&&(e.body=e.body._blob()),B.call(this,t,e)}),j&&(M.navigator.sendBeacon=function(t,e){return e instanceof A&&(e=e._asNative()),j.call(this,t,e)}),M.FormData=A}}()}).call(this,n("yLpj"))},o1Lx:function(t,e){t.exports=Sortable},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}});