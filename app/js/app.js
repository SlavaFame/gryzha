/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
  })(this, (function (exports) { 'use strict';
  
    /** Checks if value is string */
    function isString(str) {
      return typeof str === 'string' || str instanceof String;
    }
  
    /** Checks if value is object */
    function isObject(obj) {
      return typeof obj === 'object' && obj != null && obj?.constructor?.name === 'Object';
    }
    function pick(obj, keys) {
      if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
      return Object.entries(obj).reduce((acc, _ref) => {
        let [k, v] = _ref;
        if (keys(v, k)) acc[k] = v;
        return acc;
      }, {});
    }
  
    /** Direction */
    const DIRECTION = {
      NONE: 'NONE',
      LEFT: 'LEFT',
      FORCE_LEFT: 'FORCE_LEFT',
      RIGHT: 'RIGHT',
      FORCE_RIGHT: 'FORCE_RIGHT'
    };
  
    /** Direction */
  
    function forceDirection(direction) {
      switch (direction) {
        case DIRECTION.LEFT:
          return DIRECTION.FORCE_LEFT;
        case DIRECTION.RIGHT:
          return DIRECTION.FORCE_RIGHT;
        default:
          return direction;
      }
    }
  
    /** Escapes regular expression control chars */
    function escapeRegExp(str) {
      return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
    }
  
    // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
    function objectIncludes(b, a) {
      if (a === b) return true;
      const arrA = Array.isArray(a),
        arrB = Array.isArray(b);
      let i;
      if (arrA && arrB) {
        if (a.length != b.length) return false;
        for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      if (a && b && typeof a === 'object' && typeof b === 'object') {
        const dateA = a instanceof Date,
          dateB = b instanceof Date;
        if (dateA && dateB) return a.getTime() == b.getTime();
        if (dateA != dateB) return false;
        const regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
        if (regexpA && regexpB) return a.toString() == b.toString();
        if (regexpA != regexpB) return false;
        const keys = Object.keys(a);
        // if (keys.length !== Object.keys(b).length) return false;
  
        for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
        return true;
      } else if (a && b && typeof a === 'function' && typeof b === 'function') {
        return a.toString() === b.toString();
      }
      return false;
    }
  
    /** Selection range */
  
    /** Provides details of changing input */
    class ActionDetails {
      /** Current input value */
  
      /** Current cursor position */
  
      /** Old input value */
  
      /** Old selection */
  
      constructor(opts) {
        Object.assign(this, opts);
  
        // double check if left part was changed (autofilling, other non-standard input triggers)
        while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
          --this.oldSelection.start;
        }
  
        // double check right part
        while (this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end)) {
          if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end;else ++this.cursorPos;
        }
      }
  
      /** Start changing position */
      get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
  
      /** Inserted symbols count */
      get insertedCount() {
        return this.cursorPos - this.startChangePos;
      }
  
      /** Inserted symbols */
      get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
  
      /** Removed symbols count */
      get removedCount() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos ||
        // for Delete
        this.oldValue.length - this.value.length, 0);
      }
  
      /** Removed symbols */
      get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
  
      /** Unchanged head symbols */
      get head() {
        return this.value.substring(0, this.startChangePos);
      }
  
      /** Unchanged tail symbols */
      get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
  
      /** Remove direction */
      get removeDirection() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;
  
        // align right if delete at right
        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
        // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }
  
    /** Applies mask on element */
    function IMask(el, opts) {
      // currently available only for input-like elements
      return new IMask.InputMask(el, opts);
    }
  
    // TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
    // export function maskedClass(mask: string): typeof MaskedPattern;
    // export function maskedClass(mask: DateConstructor): typeof MaskedDate;
    // export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
    // export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
    // export function maskedClass(mask: MaskedDate): typeof MaskedDate;
    // export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
    // export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
    // export function maskedClass(mask: MaskedRange): typeof MaskedRange;
    // export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
    // export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
    // export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
    // export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
    // export function maskedClass(mask: Masked): typeof Masked;
    // export function maskedClass(mask: typeof Masked): typeof Masked;
    // export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
    // export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
    // export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
    // export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
    // export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
    // export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
    // export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
    // export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
    // export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
    // export function maskedClass(mask: RegExp): typeof MaskedRegExp;
    // export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;
  
    /** Get Masked class by mask type */
    function maskedClass(mask) /* TODO */{
      if (mask == null) throw new Error('mask property should be defined');
      if (mask instanceof RegExp) return IMask.MaskedRegExp;
      if (isString(mask)) return IMask.MaskedPattern;
      if (mask === Date) return IMask.MaskedDate;
      if (mask === Number) return IMask.MaskedNumber;
      if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
      if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
      if (IMask.Masked && mask instanceof IMask.Masked) return mask.constructor;
      if (mask instanceof Function) return IMask.MaskedFunction;
      console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
      return IMask.Masked;
    }
    function normalizeOpts(opts) {
      if (!opts) throw new Error('Options in not defined');
      if (IMask.Masked) {
        if (opts.prototype instanceof IMask.Masked) return {
          mask: opts
        };
  
        /*
          handle cases like:
          1) opts = Masked
          2) opts = { mask: Masked, ...instanceOpts }
        */
        const {
          mask = undefined,
          ...instanceOpts
        } = opts instanceof IMask.Masked ? {
          mask: opts
        } : isObject(opts) && opts.mask instanceof IMask.Masked ? opts : {};
        if (mask) {
          const _mask = mask.mask;
          return {
            ...pick(mask, (_, k) => !k.startsWith('_')),
            mask: mask.constructor,
            _mask,
            ...instanceOpts
          };
        }
      }
      if (!isObject(opts)) return {
        mask: opts
      };
      return {
        ...opts
      };
    }
  
    // TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
  
    // From masked
    // export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
    // // From masked class
    // export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
    // // From mask opts
    // export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
  
    /** Creates new {@link Masked} depending on mask type */
    function createMask(opts) {
      if (IMask.Masked && opts instanceof IMask.Masked) return opts;
      const nOpts = normalizeOpts(opts);
      const MaskedClass = maskedClass(nOpts.mask);
      if (!MaskedClass) throw new Error(`Masked class is not found for provided mask ${nOpts.mask}, appropriate module needs to be imported manually before creating mask.`);
      if (nOpts.mask === MaskedClass) delete nOpts.mask;
      if (nOpts._mask) {
        nOpts.mask = nOpts._mask;
        delete nOpts._mask;
      }
      return new MaskedClass(nOpts);
    }
    IMask.createMask = createMask;
  
    /**  Generic element API to use with mask */
    class MaskElement {
      /** */
  
      /** */
  
      /** */
  
      /** Safely returns selection start */
      get selectionStart() {
        let start;
        try {
          start = this._unsafeSelectionStart;
        } catch {}
        return start != null ? start : this.value.length;
      }
  
      /** Safely returns selection end */
      get selectionEnd() {
        let end;
        try {
          end = this._unsafeSelectionEnd;
        } catch {}
        return end != null ? end : this.value.length;
      }
  
      /** Safely sets element selection */
      select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
        try {
          this._unsafeSelect(start, end);
        } catch {}
      }
  
      /** */
      get isActive() {
        return false;
      }
      /** */
  
      /** */
  
      /** */
    }
    IMask.MaskElement = MaskElement;
  
    const KEY_Z = 90;
    const KEY_Y = 89;
  
    /** Bridge between HTMLElement and {@link Masked} */
    class HTMLMaskElement extends MaskElement {
      /** HTMLElement to use mask on */
  
      constructor(input) {
        super();
        this.input = input;
        this._onKeydown = this._onKeydown.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onBeforeinput = this._onBeforeinput.bind(this);
        this._onCompositionEnd = this._onCompositionEnd.bind(this);
      }
      get rootElement() {
        return this.input.getRootNode?.() ?? document;
      }
  
      /** Is element in focus */
      get isActive() {
        return this.input === this.rootElement.activeElement;
      }
  
      /** Binds HTMLElement events to mask internal events */
      bindEvents(handlers) {
        this.input.addEventListener('keydown', this._onKeydown);
        this.input.addEventListener('input', this._onInput);
        this.input.addEventListener('beforeinput', this._onBeforeinput);
        this.input.addEventListener('compositionend', this._onCompositionEnd);
        this.input.addEventListener('drop', handlers.drop);
        this.input.addEventListener('click', handlers.click);
        this.input.addEventListener('focus', handlers.focus);
        this.input.addEventListener('blur', handlers.commit);
        this._handlers = handlers;
      }
      _onKeydown(e) {
        if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
          e.preventDefault();
          return this._handlers.redo(e);
        }
        if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          return this._handlers.undo(e);
        }
        if (!e.isComposing) this._handlers.selectionChange(e);
      }
      _onBeforeinput(e) {
        if (e.inputType === 'historyUndo' && this._handlers.undo) {
          e.preventDefault();
          return this._handlers.undo(e);
        }
        if (e.inputType === 'historyRedo' && this._handlers.redo) {
          e.preventDefault();
          return this._handlers.redo(e);
        }
      }
      _onCompositionEnd(e) {
        this._handlers.input(e);
      }
      _onInput(e) {
        if (!e.isComposing) this._handlers.input(e);
      }
  
      /** Unbinds HTMLElement events to mask internal events */
      unbindEvents() {
        this.input.removeEventListener('keydown', this._onKeydown);
        this.input.removeEventListener('input', this._onInput);
        this.input.removeEventListener('beforeinput', this._onBeforeinput);
        this.input.removeEventListener('compositionend', this._onCompositionEnd);
        this.input.removeEventListener('drop', this._handlers.drop);
        this.input.removeEventListener('click', this._handlers.click);
        this.input.removeEventListener('focus', this._handlers.focus);
        this.input.removeEventListener('blur', this._handlers.commit);
        this._handlers = {};
      }
    }
    IMask.HTMLMaskElement = HTMLMaskElement;
  
    /** Bridge between InputElement and {@link Masked} */
    class HTMLInputMaskElement extends HTMLMaskElement {
      /** InputElement to use mask on */
  
      constructor(input) {
        super(input);
        this.input = input;
      }
  
      /** Returns InputElement selection start */
      get _unsafeSelectionStart() {
        return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
      }
  
      /** Returns InputElement selection end */
      get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
      }
  
      /** Sets InputElement selection */
      _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
      get value() {
        return this.input.value;
      }
      set value(value) {
        this.input.value = value;
      }
    }
    IMask.HTMLMaskElement = HTMLMaskElement;
  
    class HTMLContenteditableMaskElement extends HTMLMaskElement {
      /** Returns HTMLElement selection start */
      get _unsafeSelectionStart() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }
  
      /** Returns HTMLElement selection end */
      get _unsafeSelectionEnd() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }
  
      /** Sets HTMLElement selection */
      _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        const range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
  
      /** HTMLElement value */
      get value() {
        return this.input.textContent || '';
      }
      set value(value) {
        this.input.textContent = value;
      }
    }
    IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  
    class InputHistory {
      static MAX_LENGTH = 100;
      states = [];
      currentIndex = 0;
      get currentState() {
        return this.states[this.currentIndex];
      }
      get isEmpty() {
        return this.states.length === 0;
      }
      push(state) {
        // if current index points before the last element then remove the future
        if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
        this.states.push(state);
        if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
        this.currentIndex = this.states.length - 1;
      }
      go(steps) {
        this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
        return this.currentState;
      }
      undo() {
        return this.go(-1);
      }
      redo() {
        return this.go(+1);
      }
      clear() {
        this.states.length = 0;
        this.currentIndex = 0;
      }
    }
  
    /** Listens to element events and controls changes between element and {@link Masked} */
    class InputMask {
      /**
        View element
      */
  
      /** Internal {@link Masked} model */
  
      constructor(el, opts) {
        this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLInputMaskElement(el);
        this.masked = createMask(opts);
        this._listeners = {};
        this._value = '';
        this._unmaskedValue = '';
        this._rawInputValue = '';
        this.history = new InputHistory();
        this._saveSelection = this._saveSelection.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onDrop = this._onDrop.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onUndo = this._onUndo.bind(this);
        this._onRedo = this._onRedo.bind(this);
        this.alignCursor = this.alignCursor.bind(this);
        this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
        this._bindEvents();
  
        // refresh
        this.updateValue();
        this._onChange();
      }
      maskEquals(mask) {
        return mask == null || this.masked?.maskEquals(mask);
      }
  
      /** Masked */
      get mask() {
        return this.masked.mask;
      }
      set mask(mask) {
        if (this.maskEquals(mask)) return;
        if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
          // TODO "any" no idea
          this.masked.updateOptions({
            mask
          });
          return;
        }
        const masked = mask instanceof IMask.Masked ? mask : createMask({
          mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
  
      /** Raw value */
      get value() {
        return this._value;
      }
      set value(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl('auto');
      }
  
      /** Unmasked value */
      get unmaskedValue() {
        return this._unmaskedValue;
      }
      set unmaskedValue(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl('auto');
      }
  
      /** Raw input value */
      get rawInputValue() {
        return this._rawInputValue;
      }
      set rawInputValue(str) {
        if (this.rawInputValue === str) return;
        this.masked.rawInputValue = str;
        this.updateControl();
        this.alignCursor();
      }
  
      /** Typed unmasked value */
      get typedValue() {
        return this.masked.typedValue;
      }
      set typedValue(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl('auto');
      }
  
      /** Display value */
      get displayValue() {
        return this.masked.displayValue;
      }
  
      /** Starts listening to element events */
      _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange,
          undo: this._onUndo,
          redo: this._onRedo
        });
      }
  
      /** Stops listening to element events */
      _unbindEvents() {
        if (this.el) this.el.unbindEvents();
      }
  
      /** Fires custom event */
      _fireEvent(ev, e) {
        const listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(l => l(e));
      }
  
      /** Current selection start */
      get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
  
      /** Current cursor position */
      get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      }
      set cursorPos(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);
        this._saveSelection();
      }
  
      /** Stores current selection */
      _saveSelection( /* ev */
      ) {
        if (this.displayValue !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }
        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
  
      /** Syncronizes model value from view */
      updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
  
      /** Syncronizes view from model value, fires change events */
      updateControl(cursorPos) {
        const newUnmaskedValue = this.masked.unmaskedValue;
        const newValue = this.masked.value;
        const newRawInputValue = this.masked.rawInputValue;
        const newDisplayValue = this.displayValue;
        const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        this._rawInputValue = newRawInputValue;
        if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
        if (cursorPos === 'auto') this.alignCursor();else if (cursorPos != null) this.cursorPos = cursorPos;
        if (isChanged) this._fireChangeEvents();
        if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
          unmaskedValue: newUnmaskedValue,
          selection: {
            start: this.selectionStart,
            end: this.cursorPos
          }
        });
      }
  
      /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
      updateOptions(opts) {
        const {
          mask,
          ...restOpts
        } = opts; // TODO types, yes, mask is optional
  
        const updateMask = !this.maskEquals(mask);
        const updateOpts = this.masked.optionsIsChanged(restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts); // TODO
  
        if (updateMask || updateOpts) this.updateControl();
      }
  
      /** Updates cursor */
      updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos;
  
        // also queue change cursor for mobile browsers
        this._delayUpdateCursor(cursorPos);
      }
  
      /** Delays cursor update to support mobile browsers */
      _delayUpdateCursor(cursorPos) {
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(() => {
          if (!this.el) return; // if was destroyed
          this.cursorPos = this._changingCursorPos;
          this._abortUpdateCursor();
        }, 10);
      }
  
      /** Fires custom events */
      _fireChangeEvents() {
        this._fireEvent('accept', this._inputEvent);
        if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
      }
  
      /** Aborts delayed cursor update */
      _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
  
      /** Aligns cursor to nearest available position */
      alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
      }
  
      /** Aligns cursor only if selection is empty */
      alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
        this.alignCursor();
      }
  
      /** Adds listener on custom event */
      on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
      }
  
      /** Removes custom event listener */
      off(ev, handler) {
        if (!this._listeners[ev]) return this;
        if (!handler) {
          delete this._listeners[ev];
          return this;
        }
        const hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }
  
      /** Handles view input event */
      _onInput(e) {
        this._inputEvent = e;
        this._abortUpdateCursor();
        const details = new ActionDetails({
          // new state
          value: this.el.value,
          cursorPos: this.cursorPos,
          // old state
          oldValue: this.displayValue,
          oldSelection: this._selection
        });
        const oldRawValue = this.masked.rawInputValue;
        const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
          input: true,
          raw: true
        }).offset;
  
        // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
        const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
        this.updateControl(cursorPos);
        delete this._inputEvent;
      }
  
      /** Handles view change event and commits model value */
      _onChange() {
        if (this.displayValue !== this.el.value) {
          this.updateValue();
        }
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
      }
  
      /** Handles view drop event, prevents by default */
      _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
  
      /** Restore last selection on focus */
      _onFocus(ev) {
        this.alignCursorFriendly();
      }
  
      /** Restore last selection on focus */
      _onClick(ev) {
        this.alignCursorFriendly();
      }
      _onUndo() {
        this._applyHistoryState(this.history.undo());
      }
      _onRedo() {
        this._applyHistoryState(this.history.redo());
      }
      _applyHistoryState(state) {
        if (!state) return;
        this._historyChanging = true;
        this.unmaskedValue = state.unmaskedValue;
        this.el.select(state.selection.start, state.selection.end);
        this._saveSelection();
        this._historyChanging = false;
      }
  
      /** Unbind view events and removes element reference */
      destroy() {
        this._unbindEvents();
        this._listeners.length = 0;
        delete this.el;
      }
    }
    IMask.InputMask = InputMask;
  
    /** Provides details of changing model value */
    class ChangeDetails {
      /** Inserted symbols */
  
      /** Can skip chars */
  
      /** Additional offset if any changes occurred before tail */
  
      /** Raw inserted is used by dynamic mask */
  
      static normalize(prep) {
        return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
      }
      constructor(details) {
        Object.assign(this, {
          inserted: '',
          rawInserted: '',
          skip: false,
          tailShift: 0
        }, details);
      }
  
      /** Aggregate changes */
      aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
  
      /** Total offset considering all changes */
      get offset() {
        return this.tailShift + this.inserted.length;
      }
    }
    IMask.ChangeDetails = ChangeDetails;
  
    /** Provides details of continuous extracted tail */
    class ContinuousTailDetails {
      /** Tail value as string */
  
      /** Tail start position */
  
      /** Start position */
  
      constructor(value, from, stop) {
        if (value === void 0) {
          value = '';
        }
        if (from === void 0) {
          from = 0;
        }
        this.value = value;
        this.from = from;
        this.stop = stop;
      }
      toString() {
        return this.value;
      }
      extend(tail) {
        this.value += String(tail);
      }
      appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        }).aggregate(masked._appendPlaceholder());
      }
      get state() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      }
      set state(state) {
        Object.assign(this, state);
      }
      unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
        const shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
      shift() {
        if (!this.value.length) return '';
        const shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
      }
    }
  
    /** Append flags */
  
    /** Extract flags */
  
    // see https://github.com/microsoft/TypeScript/issues/6223
  
    /** Provides common masking stuff */
    class Masked {
      static DEFAULTS = {
        skipInvalid: true
      };
      static EMPTY_VALUES = [undefined, null, ''];
  
      /** */
  
      /** */
  
      /** Transforms value before mask processing */
  
      /** Transforms each char before mask processing */
  
      /** Validates if value is acceptable */
  
      /** Does additional processing at the end of editing */
  
      /** Format typed value to string */
  
      /** Parse string to get typed value */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      /** */
  
      constructor(opts) {
        this._value = '';
        this._update({
          ...Masked.DEFAULTS,
          ...opts
        });
        this._initialized = true;
      }
  
      /** Sets and applies new options */
      updateOptions(opts) {
        if (!this.optionsIsChanged(opts)) return;
        this.withValueRefresh(this._update.bind(this, opts));
      }
  
      /** Sets new options */
      _update(opts) {
        Object.assign(this, opts);
      }
  
      /** Mask state */
      get state() {
        return {
          _value: this.value,
          _rawInputValue: this.rawInputValue
        };
      }
      set state(state) {
        this._value = state._value;
      }
  
      /** Resets value */
      reset() {
        this._value = '';
      }
      get value() {
        return this._value;
      }
      set value(value) {
        this.resolve(value, {
          input: true
        });
      }
  
      /** Resolve new value */
      resolve(value, flags) {
        if (flags === void 0) {
          flags = {
            input: true
          };
        }
        this.reset();
        this.append(value, flags, '');
        this.doCommit();
      }
      get unmaskedValue() {
        return this.value;
      }
      set unmaskedValue(value) {
        this.resolve(value, {});
      }
      get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
      }
      set typedValue(value) {
        if (this.format) {
          this.value = this.format(value, this);
        } else {
          this.unmaskedValue = String(value);
        }
      }
  
      /** Value that includes raw user input */
      get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, {
          raw: true
        });
      }
      set rawInputValue(value) {
        this.resolve(value, {
          raw: true
        });
      }
      get displayValue() {
        return this.value;
      }
      get isComplete() {
        return true;
      }
      get isFilled() {
        return this.isComplete;
      }
  
      /** Finds nearest input position in direction */
      nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        return Math.min(this.displayValue.length, toPos - fromPos);
      }
  
      /** Extracts value in range considering flags */
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        return this.displayValue.slice(fromPos, toPos);
      }
  
      /** Extracts tail in range */
      extractTail(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }
  
      /** Appends tail */
      appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
  
      /** Appends char */
      _appendCharRaw(ch, flags) {
        if (!ch) return new ChangeDetails();
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
  
      /** Appends char */
      _appendChar(ch, flags, checkTail) {
        if (flags === void 0) {
          flags = {};
        }
        const consistentState = this.state;
        let details;
        [ch, details] = this.doPrepareChar(ch, flags);
        if (ch) details = details.aggregate(this._appendCharRaw(ch, flags));
        if (details.inserted) {
          let consistentTail;
          let appended = this.doValidate(flags) !== false;
          if (appended && checkTail != null) {
            // validation ok, check tail
            const beforeTailState = this.state;
            if (this.overwrite === true) {
              consistentTail = checkTail.state;
              for (let i = 0; i < details.rawInserted.length; ++i) {
                checkTail.unshift(this.displayValue.length - details.tailShift);
              }
            }
            let tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted.length === checkTail.toString().length;
  
            // not ok, try shift
            if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
              this.state = beforeTailState;
              consistentTail = checkTail.state;
              for (let i = 0; i < details.rawInserted.length; ++i) {
                checkTail.shift();
              }
              tailDetails = this.appendTail(checkTail);
              appended = tailDetails.rawInserted.length === checkTail.toString().length;
            }
  
            // if ok, rollback state after tail
            if (appended && tailDetails.inserted) this.state = beforeTailState;
          }
  
          // revert all if something went wrong
          if (!appended) {
            details = new ChangeDetails();
            this.state = consistentState;
            if (checkTail && consistentTail) checkTail.state = consistentTail;
          }
        }
        return details;
      }
  
      /** Appends optional placeholder at the end */
      _appendPlaceholder() {
        return new ChangeDetails();
      }
  
      /** Appends optional eager placeholder at the end */
      _appendEager() {
        return new ChangeDetails();
      }
  
      /** Appends symbols considering flags */
      append(str, flags, tail) {
        if (!isString(str)) throw new Error('value should be string');
        const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
        if (flags?.tail) flags._beforeTailState = this.state;
        let details;
        [str, details] = this.doPrepare(str, flags);
        for (let ci = 0; ci < str.length; ++ci) {
          const d = this._appendChar(str[ci], flags, checkTail);
          if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
          details.aggregate(d);
        }
        if ((this.eager === true || this.eager === 'append') && flags?.input && str) {
          details.aggregate(this._appendEager());
        }
  
        // append tail but aggregate only tailShift
        if (checkTail != null) {
          details.tailShift += this.appendTail(checkTail).tailShift;
          // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }
        return details;
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
        return new ChangeDetails();
      }
  
      /** Calls function and reapplies current value */
      withValueRefresh(fn) {
        if (this._refreshing || !this._initialized) return fn();
        this._refreshing = true;
        const rawInput = this.rawInputValue;
        const value = this.value;
        const ret = fn();
        this.rawInputValue = rawInput;
        // append lost trailing chars at the end
        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
          this.append(value.slice(this.displayValue.length), {}, '');
          this.doCommit();
        }
        delete this._refreshing;
        return ret;
      }
      runIsolated(fn) {
        if (this._isolated || !this._initialized) return fn(this);
        this._isolated = true;
        const state = this.state;
        const ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
      }
      doSkipInvalid(ch, flags, checkTail) {
        return Boolean(this.skipInvalid);
      }
  
      /** Prepares string before mask processing */
      doPrepare(str, flags) {
        if (flags === void 0) {
          flags = {};
        }
        return ChangeDetails.normalize(this.prepare ? this.prepare(str, this, flags) : str);
      }
  
      /** Prepares each char before mask processing */
      doPrepareChar(str, flags) {
        if (flags === void 0) {
          flags = {};
        }
        return ChangeDetails.normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
      }
  
      /** Validates if value is acceptable */
      doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
  
      /** Does additional processing at the end of editing */
      doCommit() {
        if (this.commit) this.commit(this.value, this);
      }
      splice(start, deleteCount, inserted, removeDirection, flags) {
        if (removeDirection === void 0) {
          removeDirection = DIRECTION.NONE;
        }
        if (flags === void 0) {
          flags = {
            input: true
          };
        }
        const tailPos = start + deleteCount;
        const tail = this.extractTail(tailPos);
        const eagerRemove = this.eager === true || this.eager === 'remove';
        let oldRawValue;
        if (eagerRemove) {
          removeDirection = forceDirection(removeDirection);
          oldRawValue = this.extractInput(0, tailPos, {
            raw: true
          });
        }
        let startChangePos = start;
        const details = new ChangeDetails();
  
        // if it is just deletion without insertion
        if (removeDirection !== DIRECTION.NONE) {
          startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);
  
          // adjust tailShift if start was aligned
          details.tailShift = startChangePos - start;
        }
        details.aggregate(this.remove(startChangePos));
        if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
          if (removeDirection === DIRECTION.FORCE_LEFT) {
            let valLength;
            while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
              details.aggregate(new ChangeDetails({
                tailShift: -1
              })).aggregate(this.remove(valLength - 1));
            }
          } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
            tail.unshift();
          }
        }
        return details.aggregate(this.append(inserted, flags, tail));
      }
      maskEquals(mask) {
        return this.mask === mask;
      }
      optionsIsChanged(opts) {
        return !objectIncludes(this, opts);
      }
      typedValueEquals(value) {
        const tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
      }
    }
    IMask.Masked = Masked;
  
    class ChunksTailDetails {
      /** */
  
      constructor(chunks, from) {
        if (chunks === void 0) {
          chunks = [];
        }
        if (from === void 0) {
          from = 0;
        }
        this.chunks = chunks;
        this.from = from;
      }
      toString() {
        return this.chunks.map(String).join('');
      }
      extend(tailChunk) {
        if (!String(tailChunk)) return;
        tailChunk = isString(tailChunk) ? new ContinuousTailDetails(String(tailChunk)) : tailChunk;
        const lastChunk = this.chunks[this.chunks.length - 1];
        const extendLast = lastChunk && (
        // if stops are same or tail has no stop
        lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
        // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof ContinuousTailDetails) {
          // check the ability to extend previous chunk
          if (extendLast) {
            // extend previous chunk
            lastChunk.extend(tailChunk.toString());
          } else {
            // append new chunk
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails) {
          if (tailChunk.stop == null) {
            // unwrap floating chunks to parent, keeping `from` pos
            let firstTailChunk;
            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          }
  
          // if tail chunk still has value
          if (tailChunk.toString()) {
            // if chunks contains stops, then popup stop to container
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
      appendTo(masked) {
        if (!(masked instanceof IMask.MaskedPattern)) {
          const tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }
        const details = new ChangeDetails();
        for (let ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          const chunk = this.chunks[ci];
          const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
          const stop = chunk.stop;
          let chunkBlock;
          if (stop != null && (
          // if block not found or stop is behind lastBlock
          !lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails ||
            // for continuous block also check if stop is exist
            masked._stops.indexOf(stop) >= 0) {
              const phDetails = masked._appendPlaceholder(stop);
              details.aggregate(phDetails);
            }
            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
          }
          if (chunkBlock) {
            const tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last
            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted;
  
            // get not inserted chars
            const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(masked.append(remainChars, {
              tail: true
            }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }
        return details;
      }
      get state() {
        return {
          chunks: this.chunks.map(c => c.state),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      }
      set state(state) {
        const {
          chunks,
          ...props
        } = state;
        Object.assign(this, props);
        this.chunks = chunks.map(cstate => {
          const chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails();
          chunk.state = cstate;
          return chunk;
        });
      }
      unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
        const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        let ci = 0;
        while (ci < this.chunks.length) {
          const chunk = this.chunks[ci];
          const shiftChar = chunk.unshift(chunkShiftPos);
          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            ++ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }
          if (shiftChar) return shiftChar;
        }
        return '';
      }
      shift() {
        if (!this.chunks.length) return '';
        let ci = this.chunks.length - 1;
        while (0 <= ci) {
          const chunk = this.chunks[ci];
          const shiftChar = chunk.shift();
          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            --ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }
          if (shiftChar) return shiftChar;
        }
        return '';
      }
    }
  
    class PatternCursor {
      constructor(masked, pos) {
        this.masked = masked;
        this._log = [];
        const {
          offset,
          index
        } = masked._mapPosToBlock(pos) || (pos < 0 ?
        // first
        {
          index: 0,
          offset: 0
        } :
        // last
        {
          index: this.masked._blocks.length,
          offset: 0
        });
        this.offset = offset;
        this.index = index;
        this.ok = false;
      }
      get block() {
        return this.masked._blocks[this.index];
      }
      get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
      get state() {
        return {
          index: this.index,
          offset: this.offset,
          ok: this.ok
        };
      }
      set state(s) {
        Object.assign(this, s);
      }
      pushState() {
        this._log.push(this.state);
      }
      popState() {
        const s = this._log.pop();
        if (s) this.state = s;
        return s;
      }
      bindBlock() {
        if (this.block) return;
        if (this.index < 0) {
          this.index = 0;
          this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
          this.index = this.masked._blocks.length - 1;
          this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
        }
      }
      _pushLeft(fn) {
        this.pushState();
        for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = this.block?.displayValue.length || 0) {
          if (fn()) return this.ok = true;
        }
        return this.ok = false;
      }
      _pushRight(fn) {
        this.pushState();
        for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
          if (fn()) return this.ok = true;
        }
        return this.ok = false;
      }
      pushLeftBeforeFilled() {
        return this._pushLeft(() => {
          if (this.block.isFixed || !this.block.value) return;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_LEFT);
          if (this.offset !== 0) return true;
        });
      }
      pushLeftBeforeInput() {
        // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|
        return this._pushLeft(() => {
          if (this.block.isFixed) return;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
          return true;
        });
      }
      pushLeftBeforeRequired() {
        return this._pushLeft(() => {
          if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
          return true;
        });
      }
      pushRightBeforeFilled() {
        return this._pushRight(() => {
          if (this.block.isFixed || !this.block.value) return;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_RIGHT);
          if (this.offset !== this.block.value.length) return true;
        });
      }
      pushRightBeforeInput() {
        return this._pushRight(() => {
          if (this.block.isFixed) return;
  
          // const o = this.offset;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
          // HACK cases like (STILL DOES NOT WORK FOR NESTED)
          // aa|X
          // aa<X|[]>X_    - this will not work
          // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
          return true;
        });
      }
      pushRightBeforeRequired() {
        return this._pushRight(() => {
          if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
  
          // TODO check |[*]XX_
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
          return true;
        });
      }
    }
  
    class PatternFixedDefinition {
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      constructor(opts) {
        Object.assign(this, opts);
        this._value = '';
        this.isFixed = true;
      }
      get value() {
        return this._value;
      }
      get unmaskedValue() {
        return this.isUnmasking ? this.value : '';
      }
      get rawInputValue() {
        return this._isRawInput ? this.value : '';
      }
      get displayValue() {
        return this.value;
      }
      reset() {
        this._isRawInput = false;
        this._value = '';
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this._value.length;
        }
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
      nearestInputPos(cursorPos, direction) {
        if (direction === void 0) {
          direction = DIRECTION.NONE;
        }
        const minPos = 0;
        const maxPos = this._value.length;
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;
          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this._value.length;
        }
        return this._isRawInput ? toPos - fromPos : 0;
      }
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this._value.length;
        }
        if (flags === void 0) {
          flags = {};
        }
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
      get isComplete() {
        return true;
      }
      get isFilled() {
        return Boolean(this._value);
      }
      _appendChar(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const details = new ChangeDetails();
        if (this.isFilled) return details;
        const appendEager = this.eager === true || this.eager === 'append';
        const appended = this.char === ch;
        const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
        if (isResolved) details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
      _appendEager() {
        return this._appendChar(this.char, {
          tail: true
        });
      }
      _appendPlaceholder() {
        const details = new ChangeDetails();
        if (this.isFilled) return details;
        this._value = details.inserted = this.char;
        return details;
      }
      extractTail() {
        return new ContinuousTailDetails('');
      }
      appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
      append(str, flags, tail) {
        const details = this._appendChar(str[0], flags);
        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }
        return details;
      }
      doCommit() {}
      get state() {
        return {
          _value: this._value,
          _rawInputValue: this.rawInputValue
        };
      }
      set state(state) {
        this._value = state._value;
        this._isRawInput = Boolean(state._rawInputValue);
      }
    }
  
    class PatternInputDefinition {
      static DEFAULT_DEFINITIONS = {
        '0': /\d/,
        'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // http://stackoverflow.com/a/22075070
        '*': /./
      };
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      constructor(opts) {
        const {
          parent,
          isOptional,
          placeholderChar,
          displayChar,
          lazy,
          eager,
          ...maskOpts
        } = opts;
        this.masked = createMask(maskOpts);
        Object.assign(this, {
          parent,
          isOptional,
          placeholderChar,
          displayChar,
          lazy,
          eager
        });
      }
      reset() {
        this.isFilled = false;
        this.masked.reset();
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.value.length;
        }
        if (fromPos === 0 && toPos >= 1) {
          this.isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }
        return new ChangeDetails();
      }
      get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
      }
      get unmaskedValue() {
        return this.masked.unmaskedValue;
      }
      get rawInputValue() {
        return this.masked.rawInputValue;
      }
      get displayValue() {
        return this.masked.value && this.displayChar || this.value;
      }
      get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
      }
      _appendChar(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        if (this.isFilled) return new ChangeDetails();
        const state = this.masked.state;
        // simulate input
        const details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
      }
      append(str, flags, tail) {
        // TODO probably should be done via _appendChar
        return this.masked.append(str, this.currentMaskFlags(flags), tail);
      }
      _appendPlaceholder() {
        const details = new ChangeDetails();
        if (this.isFilled || this.isOptional) return details;
        this.isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
      _appendEager() {
        return new ChangeDetails();
      }
      extractTail(fromPos, toPos) {
        return this.masked.extractTail(fromPos, toPos);
      }
      appendTail(tail) {
        return this.masked.appendTail(tail);
      }
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.value.length;
        }
        return this.masked.extractInput(fromPos, toPos, flags);
      }
      nearestInputPos(cursorPos, direction) {
        if (direction === void 0) {
          direction = DIRECTION.NONE;
        }
        const minPos = 0;
        const maxPos = this.value.length;
        const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;
          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.value.length;
        }
        return this.value.slice(fromPos, toPos).length;
      }
      doValidate(flags) {
        return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
      }
      doCommit() {
        this.masked.doCommit();
      }
      get state() {
        return {
          _value: this.value,
          _rawInputValue: this.rawInputValue,
          masked: this.masked.state,
          isFilled: this.isFilled
        };
      }
      set state(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
      }
      currentMaskFlags(flags) {
        return {
          ...flags,
          _beforeTailState: flags?._beforeTailState?.masked || flags?._beforeTailState
        };
      }
    }
  
    /** Masking by RegExp */
    class MaskedRegExp extends Masked {
      /** */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const mask = opts.mask;
        if (mask) opts.validate = value => value.search(mask) >= 0;
        super._update(opts);
      }
    }
    IMask.MaskedRegExp = MaskedRegExp;
  
    /** Pattern mask */
    class MaskedPattern extends Masked {
      static DEFAULTS = {
        lazy: true,
        placeholderChar: '_'
      };
      static STOP_CHAR = '`';
      static ESCAPE_CHAR = '\\';
      static InputDefinition = PatternInputDefinition;
      static FixedDefinition = PatternFixedDefinition;
  
      /** */
  
      /** */
  
      /** Single char for empty input */
  
      /** Single char for filled input */
  
      /** Show placeholder only when needed */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      constructor(opts) {
        super({
          ...MaskedPattern.DEFAULTS,
          ...opts,
          definitions: Object.assign({}, PatternInputDefinition.DEFAULT_DEFINITIONS, opts?.definitions)
        });
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        super._update(opts);
        this._rebuildMask();
      }
      _rebuildMask() {
        const defs = this.definitions;
        this._blocks = [];
        this.exposeBlock = undefined;
        this._stops = [];
        this._maskedBlocks = {};
        const pattern = this.mask;
        if (!pattern || !defs) return;
        let unmaskingBlock = false;
        let optionalBlock = false;
        for (let i = 0; i < pattern.length; ++i) {
          if (this.blocks) {
            const p = pattern.slice(i);
            const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
            // order by key length
            bNames.sort((a, b) => b.length - a.length);
            // use block name with max length
            const bName = bNames[0];
            if (bName) {
              const {
                expose,
                repeat,
                ...bOpts
              } = normalizeOpts(this.blocks[bName]); // TODO type Opts<Arg & Extra>
              const blockOpts = {
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar,
                overwrite: this.overwrite,
                ...bOpts,
                repeat,
                parent: this
              };
              const maskedBlock = repeat != null ? new IMask.RepeatBlock(blockOpts /* TODO */) : createMask(blockOpts);
              if (maskedBlock) {
                this._blocks.push(maskedBlock);
                if (expose) this.exposeBlock = maskedBlock;
  
                // store block index
                if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
                this._maskedBlocks[bName].push(this._blocks.length - 1);
              }
              i += bName.length - 1;
              continue;
            }
          }
          let char = pattern[i];
          let isInput = (char in defs);
          if (char === MaskedPattern.STOP_CHAR) {
            this._stops.push(this._blocks.length);
            continue;
          }
          if (char === '{' || char === '}') {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }
          if (char === '[' || char === ']') {
            optionalBlock = !optionalBlock;
            continue;
          }
          if (char === MaskedPattern.ESCAPE_CHAR) {
            ++i;
            char = pattern[i];
            if (!char) break;
            isInput = false;
          }
          const def = isInput ? new PatternInputDefinition({
            isOptional: optionalBlock,
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            ...normalizeOpts(defs[char]),
            parent: this
          }) : new PatternFixedDefinition({
            char,
            eager: this.eager,
            isUnmasking: unmaskingBlock
          });
          this._blocks.push(def);
        }
      }
      get state() {
        return {
          ...super.state,
          _blocks: this._blocks.map(b => b.state)
        };
      }
      set state(state) {
        if (!state) {
          this.reset();
          return;
        }
        const {
          _blocks,
          ...maskedState
        } = state;
        this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
        super.state = maskedState;
      }
      reset() {
        super.reset();
        this._blocks.forEach(b => b.reset());
      }
      get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
      }
      get isFilled() {
        return this._blocks.every(b => b.isFilled);
      }
      get isFixed() {
        return this._blocks.every(b => b.isFixed);
      }
      get isOptional() {
        return this._blocks.every(b => b.isOptional);
      }
      doCommit() {
        this._blocks.forEach(b => b.doCommit());
        super.doCommit();
      }
      get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
      }
      set unmaskedValue(unmaskedValue) {
        if (this.exposeBlock) {
          const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          this.exposeBlock.unmaskedValue = unmaskedValue;
          this.appendTail(tail);
          this.doCommit();
        } else super.unmaskedValue = unmaskedValue;
      }
      get value() {
        return this.exposeBlock ? this.exposeBlock.value :
        // TODO return _value when not in change?
        this._blocks.reduce((str, b) => str += b.value, '');
      }
      set value(value) {
        if (this.exposeBlock) {
          const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          this.exposeBlock.value = value;
          this.appendTail(tail);
          this.doCommit();
        } else super.value = value;
      }
      get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
      }
      set typedValue(value) {
        if (this.exposeBlock) {
          const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          this.exposeBlock.typedValue = value;
          this.appendTail(tail);
          this.doCommit();
        } else super.typedValue = value;
      }
      get displayValue() {
        return this._blocks.reduce((str, b) => str += b.displayValue, '');
      }
      appendTail(tail) {
        return super.appendTail(tail).aggregate(this._appendPlaceholder());
      }
      _appendEager() {
        const details = new ChangeDetails();
        let startBlockIndex = this._mapPosToBlock(this.displayValue.length)?.index;
        if (startBlockIndex == null) return details;
  
        // TODO test if it works for nested pattern masks
        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
        for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
          const d = this._blocks[bi]._appendEager();
          if (!d.inserted) break;
          details.aggregate(d);
        }
        return details;
      }
      _appendCharRaw(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const blockIter = this._mapPosToBlock(this.displayValue.length);
        const details = new ChangeDetails();
        if (!blockIter) return details;
        for (let bi = blockIter.index, block; block = this._blocks[bi]; ++bi) {
          const blockDetails = block._appendChar(ch, {
            ...flags,
            _beforeTailState: flags._beforeTailState?._blocks?.[bi]
          });
          details.aggregate(blockDetails);
          if (blockDetails.skip || blockDetails.rawInserted) break; // go next char
        }
        return details;
      }
      extractTail(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        const chunkTail = new ChunksTailDetails();
        if (fromPos === toPos) return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
          const blockChunk = b.extractTail(bFromPos, bToPos);
          blockChunk.stop = this._findStopBefore(bi);
          blockChunk.from = this._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });
        return chunkTail;
      }
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        if (flags === void 0) {
          flags = {};
        }
        if (fromPos === toPos) return '';
        let input = '';
        this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
          input += b.extractInput(fromPos, toPos, flags);
        });
        return input;
      }
      _findStopBefore(blockIndex) {
        let stopBefore;
        for (let si = 0; si < this._stops.length; ++si) {
          const stop = this._stops[si];
          if (stop <= blockIndex) stopBefore = stop;else break;
        }
        return stopBefore;
      }
  
      /** Appends placeholder depending on laziness */
      _appendPlaceholder(toBlockIndex) {
        const details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;
        const startBlockIter = this._mapPosToBlock(this.displayValue.length);
        if (!startBlockIter) return details;
        const startBlockIndex = startBlockIter.index;
        const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
          if (!b.lazy || toBlockIndex != null) {
            const bDetails = b._appendPlaceholder(b._blocks?.length);
            this._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });
        return details;
      }
  
      /** Finds block in pos */
      _mapPosToBlock(pos) {
        let accVal = '';
        for (let bi = 0; bi < this._blocks.length; ++bi) {
          const block = this._blocks[bi];
          const blockStartPos = accVal.length;
          accVal += block.displayValue;
          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
      _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
      }
      _forEachBlocksInRange(fromPos, toPos, fn) {
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        const fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
          const toBlockIter = this._mapPosToBlock(toPos);
          // process first block
          const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          const fromBlockStartPos = fromBlockIter.offset;
          const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
          if (toBlockIter && !isSameBlock) {
            // process intermediate blocks
            for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
            }
  
            // process last block
            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        const removeDetails = super.remove(fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });
        return removeDetails;
      }
      nearestInputPos(cursorPos, direction) {
        if (direction === void 0) {
          direction = DIRECTION.NONE;
        }
        if (!this._blocks.length) return 0;
        const cursor = new PatternCursor(this, cursorPos);
        if (direction === DIRECTION.NONE) {
          // -------------------------------------------------
          // NONE should only go out from fixed to the right!
          // -------------------------------------------------
          if (cursor.pushRightBeforeInput()) return cursor.pos;
          cursor.popState();
          if (cursor.pushLeftBeforeInput()) return cursor.pos;
          return this.displayValue.length;
        }
  
        // FORCE is only about a|* otherwise is 0
        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // try to break fast when *|a
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeFilled();
            if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
            cursor.popState();
          }
  
          // forward flow
          cursor.pushLeftBeforeInput();
          cursor.pushLeftBeforeRequired();
          cursor.pushLeftBeforeFilled();
  
          // backward flow
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
          }
          if (cursor.ok) return cursor.pos;
          if (direction === DIRECTION.FORCE_LEFT) return 0;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          return 0;
        }
        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // forward flow
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.pushRightBeforeFilled()) return cursor.pos;
          if (direction === DIRECTION.FORCE_RIGHT) return this.displayValue.length;
  
          // backward flow
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
        }
        return cursorPos;
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        let total = 0;
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
          total += b.totalInputPositions(bFromPos, bToPos);
        });
        return total;
      }
  
      /** Get block by name */
      maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
  
      /** Get all blocks by name */
      maskedBlocks(name) {
        const indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(gi => this._blocks[gi]);
      }
    }
    IMask.MaskedPattern = MaskedPattern;
  
    /** Pattern which accepts ranges */
    class MaskedRange extends MaskedPattern {
      /**
        Optionally sets max length of pattern.
        Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
      */
  
      /** Min bound */
  
      /** Max bound */
  
      /** */
  
      get _matchFrom() {
        return this.maxLength - String(this.from).length;
      }
      constructor(opts) {
        super(opts); // mask will be created in _update
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const {
          to = this.to || 0,
          from = this.from || 0,
          maxLength = this.maxLength || 0,
          autofix = this.autofix,
          ...patternOpts
        } = opts;
        this.to = to;
        this.from = from;
        this.maxLength = Math.max(String(to).length, maxLength);
        this.autofix = autofix;
        const fromStr = String(this.from).padStart(this.maxLength, '0');
        const toStr = String(this.to).padStart(this.maxLength, '0');
        let sameCharsCount = 0;
        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
        patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
        super._update(patternOpts);
      }
      get isComplete() {
        return super.isComplete && Boolean(this.value);
      }
      boundaries(str) {
        let minstr = '';
        let maxstr = '';
        const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');
        return [minstr, maxstr];
      }
      doPrepareChar(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        let details;
        [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
        if (!this.autofix || !ch) {
          details.skip = !this.isComplete;
          return [ch, details];
        }
        const fromStr = String(this.from).padStart(this.maxLength, '0');
        const toStr = String(this.to).padStart(this.maxLength, '0');
        const nextVal = this.value + ch;
        if (nextVal.length > this.maxLength) return ['', details];
        const [minstr, maxstr] = this.boundaries(nextVal);
        if (Number(maxstr) < this.from) return [fromStr[nextVal.length - 1], details];
        if (Number(minstr) > this.to) {
          if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
            return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
          }
          return [toStr[nextVal.length - 1], details];
        }
        return [ch, details];
      }
      doValidate(flags) {
        const str = this.value;
        const firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        const [minstr, maxstr] = this.boundaries(str);
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
      }
    }
    IMask.MaskedRange = MaskedRange;
  
    /** Date mask */
    class MaskedDate extends MaskedPattern {
      static GET_DEFAULT_BLOCKS = () => ({
        d: {
          mask: MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2
        },
        m: {
          mask: MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        },
        Y: {
          mask: MaskedRange,
          from: 1900,
          to: 9999
        }
      });
      static DEFAULTS = {
        mask: Date,
        pattern: 'd{.}`m{.}`Y',
        format: (date, masked) => {
          if (!date) return '';
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          return [day, month, year].join('.');
        },
        parse: (str, masked) => {
          const [day, month, year] = str.split('.').map(Number);
          return new Date(year, month - 1, day);
        }
      };
      static extractPatternOptions(opts) {
        const {
          mask,
          pattern,
          ...patternOpts
        } = opts;
        return {
          ...patternOpts,
          mask: isString(mask) ? mask : pattern
        };
      }
  
      /** Pattern mask for date according to {@link MaskedDate#format} */
  
      /** Start date */
  
      /** End date */
  
      /** */
  
      /** Format typed value to string */
  
      /** Parse string to get typed value */
  
      constructor(opts) {
        super(MaskedDate.extractPatternOptions({
          ...MaskedDate.DEFAULTS,
          ...opts
        }));
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const {
          mask,
          pattern,
          blocks,
          ...patternOpts
        } = {
          ...MaskedDate.DEFAULTS,
          ...opts
        };
        const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
        // adjust year block
        if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
        if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
          patternBlocks.m.from = opts.min.getMonth() + 1;
          patternBlocks.m.to = opts.max.getMonth() + 1;
          if (patternBlocks.m.from === patternBlocks.m.to) {
            patternBlocks.d.from = opts.min.getDate();
            patternBlocks.d.to = opts.max.getDate();
          }
        }
        Object.assign(patternBlocks, this.blocks, blocks);
  
        // add autofix
        Object.keys(patternBlocks).forEach(bk => {
          const b = patternBlocks[bk];
          if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
        });
        super._update({
          ...patternOpts,
          mask: isString(mask) ? mask : pattern,
          blocks: patternBlocks
        });
      }
      doValidate(flags) {
        const date = this.date;
        return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
  
      /** Checks if date is exists */
      isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
      }
  
      /** Parsed Date */
      get date() {
        return this.typedValue;
      }
      set date(date) {
        this.typedValue = date;
      }
      get typedValue() {
        return this.isComplete ? super.typedValue : null;
      }
      set typedValue(value) {
        super.typedValue = value;
      }
      maskEquals(mask) {
        return mask === Date || super.maskEquals(mask);
      }
      optionsIsChanged(opts) {
        return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
      }
    }
    IMask.MaskedDate = MaskedDate;
  
    /** Dynamic mask for choosing appropriate mask in run-time */
    class MaskedDynamic extends Masked {
      static DEFAULTS;
  
      /** Currently chosen mask */
  
      /** Currently chosen mask */
  
      /** Compliled {@link Masked} options */
  
      /** Chooses {@link Masked} depending on input value */
  
      constructor(opts) {
        super({
          ...MaskedDynamic.DEFAULTS,
          ...opts
        });
        this.currentMask = undefined;
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        super._update(opts);
        if ('mask' in opts) {
          this.exposeMask = undefined;
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
            const {
              expose,
              ...maskOpts
            } = normalizeOpts(m);
            const masked = createMask({
              overwrite: this._overwrite,
              eager: this._eager,
              skipInvalid: this._skipInvalid,
              ...maskOpts
            });
            if (expose) this.exposeMask = masked;
            return masked;
          }) : [];
  
          // this.currentMask = this.doDispatch(''); // probably not needed but lets see
        }
      }
      _appendCharRaw(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const details = this._applyDispatch(ch, flags);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        }
        return details;
      }
      _applyDispatch(appended, flags, tail) {
        if (appended === void 0) {
          appended = '';
        }
        if (flags === void 0) {
          flags = {};
        }
        if (tail === void 0) {
          tail = '';
        }
        const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        const inputValue = this.rawInputValue;
        const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
        const tailValue = inputValue.slice(insertValue.length);
        const prevMask = this.currentMask;
        const details = new ChangeDetails();
        const prevMaskState = prevMask?.state;
  
        // clone flags to prevent overwriting `_beforeTailState`
        this.currentMask = this.doDispatch(appended, {
          ...flags
        }, tail);
  
        // restore state after dispatch
        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset();
            if (insertValue) {
              const d = this.currentMask.append(insertValue, {
                raw: true
              });
              details.tailShift = d.inserted.length - prevValueBeforeTail.length;
            }
            if (tailValue) {
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else if (prevMaskState) {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
          }
        }
        return details;
      }
      _appendPlaceholder() {
        const details = this._applyDispatch();
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendPlaceholder());
        }
        return details;
      }
      _appendEager() {
        const details = this._applyDispatch();
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendEager());
        }
        return details;
      }
      appendTail(tail) {
        const details = new ChangeDetails();
        if (tail) details.aggregate(this._applyDispatch('', {}, tail));
        return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
      }
      currentMaskFlags(flags) {
        return {
          ...flags,
          _beforeTailState: flags._beforeTailState?.currentMaskRef === this.currentMask && flags._beforeTailState?.currentMask || flags._beforeTailState
        };
      }
      doDispatch(appended, flags, tail) {
        if (flags === void 0) {
          flags = {};
        }
        if (tail === void 0) {
          tail = '';
        }
        return this.dispatch(appended, this, flags, tail);
      }
      doValidate(flags) {
        return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
      }
      doPrepare(str, flags) {
        if (flags === void 0) {
          flags = {};
        }
        let [s, details] = super.doPrepare(str, flags);
        if (this.currentMask) {
          let currentDetails;
          [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
          details = details.aggregate(currentDetails);
        }
        return [s, details];
      }
      doPrepareChar(str, flags) {
        if (flags === void 0) {
          flags = {};
        }
        let [s, details] = super.doPrepareChar(str, flags);
        if (this.currentMask) {
          let currentDetails;
          [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
          details = details.aggregate(currentDetails);
        }
        return [s, details];
      }
      reset() {
        this.currentMask?.reset();
        this.compiledMasks.forEach(m => m.reset());
      }
      get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
      }
      set value(value) {
        if (this.exposeMask) {
          this.exposeMask.value = value;
          this.currentMask = this.exposeMask;
          this._applyDispatch();
        } else super.value = value;
      }
      get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
      }
      set unmaskedValue(unmaskedValue) {
        if (this.exposeMask) {
          this.exposeMask.unmaskedValue = unmaskedValue;
          this.currentMask = this.exposeMask;
          this._applyDispatch();
        } else super.unmaskedValue = unmaskedValue;
      }
      get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
      }
      set typedValue(typedValue) {
        if (this.exposeMask) {
          this.exposeMask.typedValue = typedValue;
          this.currentMask = this.exposeMask;
          this._applyDispatch();
          return;
        }
        let unmaskedValue = String(typedValue);
  
        // double check it
        if (this.currentMask) {
          this.currentMask.typedValue = typedValue;
          unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
      }
      get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : '';
      }
      get isComplete() {
        return Boolean(this.currentMask?.isComplete);
      }
      get isFilled() {
        return Boolean(this.currentMask?.isFilled);
      }
      remove(fromPos, toPos) {
        const details = new ChangeDetails();
        if (this.currentMask) {
          details.aggregate(this.currentMask.remove(fromPos, toPos))
          // update with dispatch
          .aggregate(this._applyDispatch());
        }
        return details;
      }
      get state() {
        return {
          ...super.state,
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(m => m.state),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask?.state
        };
      }
      set state(state) {
        const {
          compiledMasks,
          currentMaskRef,
          currentMask,
          ...maskedState
        } = state;
        if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }
        super.state = maskedState;
      }
      extractInput(fromPos, toPos, flags) {
        return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
      }
      extractTail(fromPos, toPos) {
        return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
      }
      doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        super.doCommit();
      }
      nearestInputPos(cursorPos, direction) {
        return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
      }
      get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite;
      }
      set overwrite(overwrite) {
        this._overwrite = overwrite;
      }
      get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager;
      }
      set eager(eager) {
        this._eager = eager;
      }
      get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
      }
      set skipInvalid(skipInvalid) {
        this._skipInvalid = skipInvalid;
      }
      maskEquals(mask) {
        return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
          if (!mask[mi]) return;
          const {
            mask: oldMask,
            ...restOpts
          } = mask[mi];
          return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
        }) : super.maskEquals(mask);
      }
      typedValueEquals(value) {
        return Boolean(this.currentMask?.typedValueEquals(value));
      }
    }
    MaskedDynamic.DEFAULTS = {
      dispatch: (appended, masked, flags, tail) => {
        if (!masked.compiledMasks.length) return;
        const inputValue = masked.rawInputValue;
  
        // simulate input
        const inputs = masked.compiledMasks.map((m, index) => {
          const isCurrent = masked.currentMask === m;
          const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT);
          if (m.rawInputValue !== inputValue) {
            m.reset();
            m.append(inputValue, {
              raw: true
            });
          } else if (!isCurrent) {
            m.remove(startInputPos);
          }
          m.append(appended, masked.currentMaskFlags(flags));
          m.appendTail(tail);
          return {
            index,
            weight: m.rawInputValue.length,
            totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT)))
          };
        });
  
        // pop masks with longer values first
        inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
        return masked.compiledMasks[inputs[0].index];
      }
    };
    IMask.MaskedDynamic = MaskedDynamic;
  
    /** Pattern which validates enum values */
    class MaskedEnum extends MaskedPattern {
      constructor(opts) {
        super(opts); // mask will be created in _update
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const {
          enum: _enum,
          ...eopts
        } = opts;
        if (_enum) {
          const lengths = _enum.map(e => e.length);
          const requiredLength = Math.min(...lengths);
          const optionalLength = Math.max(...lengths) - requiredLength;
          eopts.mask = '*'.repeat(requiredLength);
          if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
          this.enum = _enum;
        }
        super._update(eopts);
      }
      doValidate(flags) {
        return this.enum.some(e => e.indexOf(this.unmaskedValue) === 0) && super.doValidate(flags);
      }
    }
    IMask.MaskedEnum = MaskedEnum;
  
    /** Masking by custom Function */
    class MaskedFunction extends Masked {
      /** */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        super._update({
          ...opts,
          validate: opts.mask
        });
      }
    }
    IMask.MaskedFunction = MaskedFunction;
  
    /** Number mask */
    class MaskedNumber extends Masked {
      static UNMASKED_RADIX = '.';
      static EMPTY_VALUES = [...Masked.EMPTY_VALUES, 0];
      static DEFAULTS = {
        mask: Number,
        radix: ',',
        thousandsSeparator: '',
        mapToRadix: [MaskedNumber.UNMASKED_RADIX],
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        scale: 2,
        normalizeZeros: true,
        padFractionalZeros: false,
        parse: Number,
        format: n => n.toLocaleString('en-US', {
          useGrouping: false,
          maximumFractionDigits: 20
        })
      };
  
      /** Single char */
  
      /** Single char */
  
      /** Array of single chars */
  
      /** */
  
      /** */
  
      /** Digits after point */
  
      /** Flag to remove leading and trailing zeros in the end of editing */
  
      /** Flag to pad trailing zeros after point in the end of editing */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      /** Format typed value to string */
  
      /** Parse string to get typed value */
  
      constructor(opts) {
        super({
          ...MaskedNumber.DEFAULTS,
          ...opts
        });
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        super._update(opts);
        this._updateRegExps();
      }
      _updateRegExps() {
        const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
        const mid = '\\d*';
        const end = (this.scale ? `(${escapeRegExp(this.radix)}\\d{0,${this.scale}})?` : '') + '$';
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp(`[${this.mapToRadix.map(escapeRegExp).join('')}]`, 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }
      _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }
      _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        const parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
      doPrepareChar(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
        /*
          radix should be mapped when
          1) input is done from keyboard = flags.input && flags.raw
          2) unmasked value is set = !flags.input && !flags.raw
          and should not be mapped when
          1) value is set = flags.input && !flags.raw
          2) raw value is set = !flags.input && flags.raw
        */
        flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
        if (ch && !prepCh) details.skip = true;
        if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
        return [prepCh, details];
      }
      _separatorsCount(to, extendOnSeparators) {
        if (extendOnSeparators === void 0) {
          extendOnSeparators = false;
        }
        let count = 0;
        for (let pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
          }
        }
        return count;
      }
      _separatorsCountFromSlice(slice) {
        if (slice === void 0) {
          slice = this._value;
        }
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
      }
      _appendCharRaw(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        if (!this.thousandsSeparator) return super._appendCharRaw(ch, flags);
        const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        const appendDetails = super._appendCharRaw(ch, flags);
        this._value = this._insertThousandsSeparators(this._value);
        const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
      }
      _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          const searchFrom = pos - this.thousandsSeparator.length + 1;
          const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos) return separatorPos;
        }
        return -1;
      }
      _adjustRangeWithSeparators(from, to) {
        const separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
        const separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        const valueBeforePos = this.value.slice(0, fromPos);
        const valueAfterPos = this.value.slice(toPos);
        const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }
      nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;
        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            {
              const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
              if (separatorAtLeftPos >= 0) {
                const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                  return separatorAtLeftPos;
                }
              }
              break;
            }
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            {
              const separatorAtRightPos = this._findSeparatorAround(cursorPos);
              if (separatorAtRightPos >= 0) {
                return separatorAtRightPos + this.thousandsSeparator.length;
              }
            }
        }
        return cursorPos;
      }
      doValidate(flags) {
        // validate as string
        let valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (valid) {
          // validate as number
          const number = this.number;
          valid = valid && !isNaN(number) && (
          // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && (
          // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }
        return valid && super.doValidate(flags);
      }
      doCommit() {
        if (this.value) {
          const number = this.number;
          let validnum = number;
  
          // check bounds
          if (this.min != null) validnum = Math.max(validnum, this.min);
          if (this.max != null) validnum = Math.min(validnum, this.max);
          if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
          let formatted = this.value;
          if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }
        super.doCommit();
      }
      _normalizeZeros(value) {
        const parts = this._removeThousandsSeparators(value).split(this.radix);
  
        // remove leading zeros
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
        // add leading zero
        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
          if (!parts[1].length) parts.length = 1; // remove fractional
        }
        return this._insertThousandsSeparators(parts.join(this.radix));
      }
      _padFractionalZeros(value) {
        if (!value) return value;
        const parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }
      doSkipInvalid(ch, flags, checkTail) {
        if (flags === void 0) {
          flags = {};
        }
        const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
        return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
      }
      get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
      }
      set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
      }
      get typedValue() {
        return this.parse(this.unmaskedValue, this);
      }
      set typedValue(n) {
        this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
      }
  
      /** Parsed Number */
      get number() {
        return this.typedValue;
      }
      set number(number) {
        this.typedValue = number;
      }
      get allowNegative() {
        return this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
      get allowPositive() {
        return this.min != null && this.min > 0 || this.max != null && this.max > 0;
      }
      typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
      }
    }
    IMask.MaskedNumber = MaskedNumber;
  
    /** Mask pipe source and destination types */
    const PIPE_TYPE = {
      MASKED: 'value',
      UNMASKED: 'unmaskedValue',
      TYPED: 'typedValue'
    };
    /** Creates new pipe function depending on mask type, source and destination options */
    function createPipe(arg, from, to) {
      if (from === void 0) {
        from = PIPE_TYPE.MASKED;
      }
      if (to === void 0) {
        to = PIPE_TYPE.MASKED;
      }
      const masked = createMask(arg);
      return value => masked.runIsolated(m => {
        m[from] = value;
        return m[to];
      });
    }
  
    /** Pipes value through mask depending on mask type, source and destination options */
    function pipe(value, mask, from, to) {
      return createPipe(mask, from, to)(value);
    }
    IMask.PIPE_TYPE = PIPE_TYPE;
    IMask.createPipe = createPipe;
    IMask.pipe = pipe;
  
    /** Pattern mask */
    class RepeatBlock extends MaskedPattern {
      get repeatFrom() {
        return (Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) ?? 0;
      }
      get repeatTo() {
        return (Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) ?? Infinity;
      }
      constructor(opts) {
        super(opts);
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const {
          repeat,
          ...blockOpts
        } = normalizeOpts(opts); // TODO type
        this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
        const block = createMask(this._blockOpts);
        this.repeat = repeat ?? block.repeat ?? this.repeat ?? Infinity; // TODO type
  
        super._update({
          mask: 'm'.repeat(Math.max(this.repeatTo === Infinity && this._blocks?.length || 0, this.repeatFrom)),
          blocks: {
            m: block
          },
          eager: block.eager,
          overwrite: block.overwrite,
          skipInvalid: block.skipInvalid,
          lazy: block.lazy,
          placeholderChar: block.placeholderChar,
          displayChar: block.displayChar
        });
      }
      _allocateBlock(bi) {
        if (bi < this._blocks.length) return this._blocks[bi];
        if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
          this._blocks.push(createMask(this._blockOpts));
          this.mask += 'm';
          return this._blocks[this._blocks.length - 1];
        }
      }
      _appendCharRaw(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const details = new ChangeDetails();
        for (let bi = this._mapPosToBlock(this.displayValue.length)?.index ?? Math.max(this._blocks.length - 1, 0), block, allocated;
        // try to get a block or
        // try to allocate a new block if not allocated already
        block = this._blocks[bi] ?? (allocated = !allocated && this._allocateBlock(bi)); ++bi) {
          const blockDetails = block._appendChar(ch, {
            ...flags,
            _beforeTailState: flags._beforeTailState?._blocks?.[bi]
          });
          if (blockDetails.skip && allocated) {
            // remove the last allocated block and break
            this._blocks.pop();
            this.mask = this.mask.slice(1);
            break;
          }
          details.aggregate(blockDetails);
          if (blockDetails.skip || blockDetails.rawInserted) break; // go next char
        }
        return details;
      }
      _trimEmptyTail(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        const firstBlockIndex = Math.max(this._mapPosToBlock(fromPos)?.index || 0, this.repeatFrom, 0);
        let lastBlockIndex;
        if (toPos != null) lastBlockIndex = this._mapPosToBlock(toPos)?.index;
        if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
        let removeCount = 0;
        for (let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount) {
          if (this._blocks[blockIndex].unmaskedValue) break;
        }
        if (removeCount) {
          this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
          this.mask = this.mask.slice(removeCount);
        }
      }
      reset() {
        super.reset();
        this._trimEmptyTail();
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        const removeDetails = super.remove(fromPos, toPos);
        this._trimEmptyTail(fromPos, toPos);
        return removeDetails;
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos == null && this.repeatTo === Infinity) return Infinity;
        return super.totalInputPositions(fromPos, toPos);
      }
      get state() {
        return super.state;
      }
      set state(state) {
        this._blocks.length = state._blocks.length;
        this.mask = this.mask.slice(0, this._blocks.length);
        super.state = state;
      }
    }
    IMask.RepeatBlock = RepeatBlock;
  
    try {
      globalThis.IMask = IMask;
    } catch {}
  
    exports.ChangeDetails = ChangeDetails;
    exports.ChunksTailDetails = ChunksTailDetails;
    exports.DIRECTION = DIRECTION;
    exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
    exports.HTMLInputMaskElement = HTMLInputMaskElement;
    exports.HTMLMaskElement = HTMLMaskElement;
    exports.InputMask = InputMask;
    exports.MaskElement = MaskElement;
    exports.Masked = Masked;
    exports.MaskedDate = MaskedDate;
    exports.MaskedDynamic = MaskedDynamic;
    exports.MaskedEnum = MaskedEnum;
    exports.MaskedFunction = MaskedFunction;
    exports.MaskedNumber = MaskedNumber;
    exports.MaskedPattern = MaskedPattern;
    exports.MaskedRange = MaskedRange;
    exports.MaskedRegExp = MaskedRegExp;
    exports.PIPE_TYPE = PIPE_TYPE;
    exports.PatternFixedDefinition = PatternFixedDefinition;
    exports.PatternInputDefinition = PatternInputDefinition;
    exports.RepeatBlock = RepeatBlock;
    exports.createMask = createMask;
    exports.createPipe = createPipe;
    exports.default = IMask;
    exports.forceDirection = forceDirection;
    exports.normalizeOpts = normalizeOpts;
    exports.pipe = pipe;
  
    Object.defineProperty(exports, '__esModule', { value: true });
  
  }));
  //# sourceMappingURL=imask.js.map