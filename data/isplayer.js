(function(){var g,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};k.Symbol||(k.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function ea(){ba();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});ea=function(){}}function fa(a){var b=0;return ga(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ga(a){ea();a={next:a};a[k.Symbol.iterator]=function(){return this};return a}var n=this;
function ha(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){var b=ha(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return r.apply(null,arguments)}
function t(a,b){var c=a.split("."),d=n;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]&&d[e]!==Object.prototype[e]?d[e]:d[e]={}:d[e]=b}function u(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.V=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function v(){}t("ispring.events.IEventDispatcher",v);v.prototype.B=function(){};v.prototype.addHandler=v.prototype.B;v.prototype.F=function(){};v.prototype.removeHandler=v.prototype.F;var ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function na(a,b){for(var c=0,d=ma(String(a)).split("."),e=ma(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var l=d[h]||"",m=e[h]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=oa(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||oa(0==l[2].length,0==m[2].length)||oa(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c}function oa(a,b){return a<b?-1:a>b?1:0}
function pa(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}function qa(a){var b=q(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};var ra=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},sa=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(p(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}function va(a,b,c,d){Array.prototype.splice.apply(a,wa(arguments,1))}function wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var w;a:{var xa=n.navigator;if(xa){var ya=xa.userAgent;if(ya){w=ya;break a}}w=""}function x(a){return-1!=w.indexOf(a)};function za(){return x("iPhone")&&!x("iPod")&&!x("iPad")};function Aa(a,b){var c=Ba;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var y=x("Opera"),z=x("Trident")||x("MSIE"),Ca=x("Edge"),A=x("Gecko")&&!(-1!=w.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),B=-1!=w.toLowerCase().indexOf("webkit")&&!x("Edge"),Da=x("Windows");function Ea(){var a=n.document;return a?a.documentMode:void 0}var C;
a:{var Fa="",Ga=function(){var a=w;if(A)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ca)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(B)return/WebKit\/(\S+)/.exec(a);if(y)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ga&&(Fa=Ga?Ga[1]:"");if(z){var Ha=Ea();if(null!=Ha&&Ha>parseFloat(Fa)){C=String(Ha);break a}}C=Fa}var Ba={};function D(a){return Aa(a,function(){return 0<=na(C,a)})}var Ia;var Ja=n.document;
Ia=Ja&&z?Ea()||("CSS1Compat"==Ja.compatMode?parseInt(C,10):5):void 0;z&&D("9");!B||D("528");A&&D("1.9b")||z&&D("8")||y&&D("9.5")||B&&D("528");A&&!D("8")||z&&D("9");function Ka(){};!A&&!z||z&&9<=Number(Ia)||A&&D("1.9.1");z&&D("9");function La(a){var b={width:"1px",height:"1px",border:"0"};if(q(b))(b=Ma(a,b))&&(a.style[b]=void 0);else for(var c in b){var d=a,e=b[c],f=Ma(d,c);f&&(d.style[f]=e)}}var Na={};function Ma(a,b){var c=Na[b];if(!c){var d=pa(b),c=d;void 0===a.style[d]&&(d=(B?"Webkit":A?"Moz":z?"ms":y?"O":null)+qa(d),void 0!==a.style[d]&&(c=d));Na[b]=c}return c}function Oa(a,b,c){a.style.left=E(b,!1);a.style.top=E(c,!1)}
function Pa(a,b,c){if(void 0==c)throw Error("missing height argument");a.style.width=E(b,!0);a.style.height=E(c,!0)}function E(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};function Ra(a){if("function"!=ha(a))if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");2147483647<Number(100)||n.setTimeout(a,100)};var F="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function G(){}G.prototype.next=function(){throw F;};G.prototype.i=function(){return this};function Sa(a){if(a instanceof G)return a;if("function"==typeof a.i)return a.i(!1);if(p(a)){var b=0,c=new G;c.next=function(){for(;;){if(b>=a.length)throw F;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}
function Ta(a,b){if(p(a))try{sa(a,b,void 0)}catch(c){if(c!==F)throw c;}else{a=Sa(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==F)throw c;}}}function Ua(a){if(p(a))return ta(a);a=Sa(a);var b=[];Ta(a,function(a){b.push(a)});return b};function H(a,b){this.g={};this.a=[];this.u=this.m=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}function Va(a){I(a);return a.a.concat()}g=H.prototype;g.clear=function(){this.g={};this.u=this.m=this.a.length=0};g.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.m--,this.u++,this.a.length>2*this.m&&I(this),!0):!1};
function I(a){if(a.m!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.m!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}g.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};g.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.m++,this.a.push(a),this.u++);this.g[a]=b};
g.addAll=function(a){var b;if(a instanceof H){b=Va(a);I(a);for(var c=[],d=0;d<a.a.length;d++)c.push(a.g[a.a[d]]);a=c}else{b=[];var d=0,e;for(e in a)b[d++]=e;d=[];e=0;for(c in a)d[e++]=a[c];a=d}for(c=0;c<b.length;c++)this.set(b[c],a[c])};g.forEach=function(a,b){for(var c=Va(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new H(this)};
g.i=function(a){I(this);var b=0,c=this.u,d=this,e=new G;e.next=function(){if(c!=d.u)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw F;var e=d.a[b++];return a?e:d.g[e]};return e};function Wa(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}function Xa(a){a=String(a);if(Wa(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ya(a){this.w=a}function Za(a,b){var c=[];$a(a,b,c);return c.join("")}
function $a(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==ha(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],$a(a,a.w?a.w.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),ab(d,c),c.push(":"),$a(a,a.w?a.w.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":ab(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var bb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},cb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function ab(a,b){b.push('"',a.replace(cb,function(a){var b=bb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),bb[a]=b);return b}),'"')};var db=x("Firefox"),eb=x("Safari")&&!((x("Chrome")||x("CriOS"))&&!x("Edge")||x("Coast")||x("Opera")||x("Edge")||x("Silk")||x("Android"))&&!(za()||x("iPad")||x("iPod"));var J=null,fb=A||B&&!eb||y||"function"==typeof n.btoa;function gb(a,b){this.S=a;this.N=b||[]}t("iSpring.ios.mobile.MobileAppCommand",gb);gb.prototype.id=function(){return this[ia]||(this[ia]=++ja)};function hb(a){try{var b=document.createElement("iframe");La(b);b.src=a;document.body.appendChild(b);Ra(function(){b&&b.parentNode&&b.parentNode.removeChild(b)})}catch(c){}};function K(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0}K.prototype.BYTES_PER_ELEMENT=8;K.prototype.set=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};K.prototype.toString=Array.prototype.join;if("undefined"==typeof Float64Array){try{K.BYTES_PER_ELEMENT=8}catch(a){}K.prototype.BYTES_PER_ELEMENT=K.prototype.BYTES_PER_ELEMENT;K.prototype.set=K.prototype.set;K.prototype.toString=K.prototype.toString;t("Float64Array",K)};function L(a){this.length=a.length||a;for(var b=0;b<this.length;b++)this[b]=a[b]||0}L.prototype.BYTES_PER_ELEMENT=4;L.prototype.set=function(a,b){b=b||0;for(var c=0;c<a.length&&b+c<this.length;c++)this[b+c]=a[c]};L.prototype.toString=Array.prototype.join;"undefined"==typeof Float32Array&&(L.BYTES_PER_ELEMENT=4,L.prototype.BYTES_PER_ELEMENT=L.prototype.BYTES_PER_ELEMENT,L.prototype.set=L.prototype.set,L.prototype.toString=L.prototype.toString,t("Float32Array",L));function ib(a,b,c,d){c=c||0;var e=Array.prototype.slice.call(arguments,3);setTimeout(function(){a.apply(b||null,e)},c)}function M(){var a;var b=window.location.search.substr(1);if(b){a={};for(var b=b.split("&"),c=0;c<b.length;++c){var d=b[c].split("=");if(2==d.length){try{var e=decodeURIComponent(d[0].replace(/\+/g," "))}catch(h){e=d[0]}try{var f=decodeURIComponent(d[1].replace(/\+/g," "))}catch(h){f=d[1]}e=e.toLowerCase();a[e]=f}}}else a={};return a};(function(){function a(a){try{return a.ISPlayer&&(window.ISPlayer=a.ISPlayer),a.ISPVideoPlayer&&(window.ISPVideoPlayer=a.ISPVideoPlayer),a.ISPQuizPlayer&&(window.ISPQuizPlayer=a.ISPQuizPlayer),a.ISPInteractionPlayerCore&&(window.ISPInteractionPlayerCore=a.ISPInteractionPlayerCore),a.ISPBookPlayer&&(window.ISPBookPlayer=a.ISPBookPlayer),a.ISPScenarioPlayer&&(window.ISPScenarioPlayer=a.ISPScenarioPlayer),!0}catch(e){return!1}}if(function(){var a;try{a=window.frameElement}catch(e){}return null!=a}())for(var b=
window,c=7;b&&b.parent!=b&&0!=c--&&!a(b.parent);)b=b.parent})();var N;var jb=M().user_agent;N=jb?jb:w||"";M();var kb=-1!=N.toLowerCase().indexOf("chrome"),lb=-1==N.toLowerCase().indexOf("windows phone")&&-1!=N.toLowerCase().indexOf("android")&&!kb&&!db&&!y,mb=-1!=N.indexOf("ismobile");
if(x("Windows")){var O=w,P="",Q;if(x("Windows")){Q=/Windows (?:NT|Phone) ([0-9.]+)/;var S=Q.exec(O),P=S?S[1]:"0.0"}else za()||x("iPad")||x("iPod")?(Q=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,P=(S=Q.exec(O))&&S[1].replace(/_/g,".")):x("Macintosh")?(Q=/Mac OS X ([0-9_.]+)/,P=(S=Q.exec(O))?S[1].replace(/_/g,"."):"10"):x("Android")?(Q=/Android\s+([^\);]+)(\)|;)/,P=(S=Q.exec(O))&&S[1]):x("CrOS")&&(Q=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,P=(S=Q.exec(O))&&S[1]);na(P||"","6")};function nb(){this.I=[];this.f=[]}nb.prototype.push=function(a,b){if(!(b in this.f)){this.f[b]=[];var c=this.I,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,l;l=c[h];l=b>l?1:b<l?-1:0;0<l?d=h+1:(e=h,f=!l)}d=f?d:~d;0>d&&va(c,-(d+1),0,b)}this.f[b].push(a)};nb.prototype.remove=function(a,b){if(b in this.f){var c=this.f[b],d=ra(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}};function ob(a,b){return b in a.f?a.f[b]:[]}
function pb(a){var b=[],c=a.f;a=a.I;for(var d=0;d<a.length;++d)ua(b,c[a[d]]);return b};function T(){this.l=new nb}u(T,Ka);var qb=0;T.prototype.B=function(a,b,c){this.l.push({C:a,context:b},c||0);++qb};T.prototype.addHandler=T.prototype.B;T.prototype.F=function(a,b,c){c=c||0;for(var d=ob(this.l,c),e=d.length,f=0;f<e;++f){var h=d[f];if(h.C==a&&h.context==b){a=this.l;c in a.f&&Array.prototype.splice.call(a.f[c],f,1);--qb;break}}};T.prototype.removeHandler=T.prototype.F;T.prototype.T=function(a,b,c){c=ob(this.l,c||0);for(var d=c.length,e=0;e<d;++e){var f=c[e];if(f.C==a&&f.context==b)return!0}return!1};
T.prototype.hasHandler=T.prototype.T;T.prototype.L=function(a){for(var b=pb(this.l),c=b.length,d=0;d<c;++d){var e=b[d];if(-1!=ra(pb(this.l),e))try{e.C.apply(e.context,arguments)}catch(f){1!=window._ispringDebug&&"1"!=M().isdebug||alert(f)}}};T.prototype.dispatch=T.prototype.L;function U(a,b){this.A=window.swfobject;this.A.switchOffAutoHideShow();this.O=a;this.J=b;this.H=new T}U.prototype.load=function(a,b,c,d,e,f){if(this.A.hasFlashPlayerVersion("10.1.0")){a+=window.location.search;var h=r(this.P,this,a,b,c,d,e,f);this.J?this.J(function(){if(!(arguments instanceof Array)){var a=arguments;ea();for(var b=a[Symbol.iterator],a=b?b.call(a):fa(a),c=[];!(b=a.next()).done;)c.push(b.value)}h()}):h()}else try{location.replace(this.O)}catch(l){}};U.prototype.load=U.prototype.load;
U.prototype.U=function(){return this.H};U.prototype.playerPositionChangedEvent=U.prototype.U;
U.prototype.P=function(a,b,c,d,e,f){this.j&&(this.j.innerHTML="");if("string"==typeof b)if(b=document.getElementById(b))this.j=b;else return;else this.j=b;this.j.style.position="absolute";Oa(this.j,0,0);b=1==M().fit_content;if((this.G=void 0===d||void 0===e)||b)d=rb()||720,e=sb()||540;b=document.createElement("div");b.setAttribute("id",c);this.j.appendChild(b);void 0===f&&(f="");f={id:c,resume:f};c={id:c,name:c,style:"position:absolute",wmodefixed:"true",wmode:eb&&Da?"window":""};this.A.embedSWF(a,
b.getAttribute("id"),d,e,"10.1.0",!1,f,{allowscriptaccess:"sameDomain",allowfullscreen:!0,allowFullScreenInteractive:!0,salign:"lt",wmode:"opaque"},c,r(this.R,this))};U.prototype.R=function(a){this.h=a.ref;window.onresize=r(this.K,this);this.K()};
U.prototype.K=function(){var a=rb(),b=sb();Pa(this.j,a,b);if(this.G)a&&b&&(this.h.width=a+"px",this.h.height=b+"px");else{var c=Math.max(0,Math.floor((a-this.h.width)/2)),d=Math.max(0,Math.floor((b-this.h.height)/2));Oa(this.h,c,d);this.H.L(c,d);this.j.style.overflow=a>=this.h.width&&b>=this.h.height?"hidden":"auto"}z&&9>parseInt(C,10)&&(this.h.style.border="1px solid transparent",ib(function(){this.h.style.border=""},this))};
function rb(){return window.innerWidth?window.innerWidth:"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetWidth?document.documentElement.offsetWidth:document.body.offsetWidth}function sb(){return window.innerHeight?window.innerHeight:"CSS1Compat"==document.compatMode&&document.documentElement&&document.documentElement.offsetHeight?document.documentElement.offsetHeight:document.body.offsetHeight};function V(a){this.v=a}V.prototype.set=function(a,b){void 0!==b?this.v.set(a,Za(new Ya(void 0),b)):this.v.remove(a)};V.prototype.get=function(a){var b;try{b=this.v.get(a)}catch(c){return}if(null!==b)try{return Xa(b)}catch(c){throw"Storage: Invalid value was encountered";}};V.prototype.remove=function(a){this.v.remove(a)};function tb(){};function W(){}u(W,tb);W.prototype.set=function(){};W.prototype.get=function(){return null};W.prototype.remove=function(){};function X(){}u(X,tb);X.prototype.clear=function(){var a=Ua(this.i(!0)),b=this;sa(a,function(a){b.remove(a)})};function Y(a,b){this.s=a;this.o=b+"::"}u(Y,X);Y.prototype.set=function(a,b){this.s.set(this.o+a,b)};Y.prototype.get=function(a){return this.s.get(this.o+a)};Y.prototype.remove=function(a){this.s.remove(this.o+a)};Y.prototype.i=function(a){var b=this.s.i(!0),c=this,d=new G;d.next=function(){for(var d=b.next();d.substr(0,c.o.length)!=c.o;)d=b.next();return a?d.substr(c.o.length):c.s.get(d)};return d};function ub(a){this.c=a}u(ub,X);g=ub.prototype;g.D=function(){if(!this.c)return!1;try{return this.c.setItem("__sak","1"),this.c.removeItem("__sak"),!0}catch(a){return!1}};g.set=function(a,b){try{this.c.setItem(a,b)}catch(c){if(0==this.c.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};g.get=function(a){a=this.c.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};g.remove=function(a){this.c.removeItem(a)};
g.i=function(a){var b=0,c=this.c,d=new G;d.next=function(){if(b>=c.length)throw F;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};return d};g.clear=function(){this.c.clear()};g.key=function(a){return this.c.key(a)};function vb(){var a=null;try{a=window.localStorage||null}catch(b){}this.c=a}u(vb,ub);function wb(a,b){this.M=a;this.b=null;if(z&&!(9<=Number(Ia))){Z||(Z=new H);this.b=Z.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Z.set(a,this.b));try{this.b.load(this.M)}catch(c){this.b=null}}}u(wb,X);var xb={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Z=null;
function yb(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return xb[a]})}g=wb.prototype;g.D=function(){return!!this.b};g.set=function(a,b){this.b.setAttribute(yb(a),b);zb(this)};g.get=function(a){a=this.b.getAttribute(yb(a));if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};g.remove=function(a){this.b.removeAttribute(yb(a));zb(this)};
g.i=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new G;d.next=function(){if(b>=c.length)throw F;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};return d};g.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);zb(this)};
function zb(a){try{a.b.save(a.M)}catch(b){throw"Storage mechanism: Quota exceeded";}};var Ab=null;function Bb(){if(!Ab){var a=new vb;(a=a.D()?new Y(a,"ispring"):null)||(a=new wb("ispring"),a=a.D()?a:null);Ab=new V(a||new W)}return Ab};function Cb(a){U.call(this,"data/flash-required.html",a)}u(Cb,U);t("ispring.quiz.loader.FlashQuizLoader",Cb);
t("ispring.quiz.flashapi.closeWindow",function(){if(mb){var a=new gb("closeWindow");if(mb){var b=a.S,c=a.N,a=a.id(),d=Za(new Ya(null),c);if(fb)c=n.btoa(d);else{for(var c=[],e=0,f=0;f<d.length;f++){for(var h=d.charCodeAt(f);255<h;)c[e++]=h&255,h>>=8;c[e++]=h}if(!J)for(J={},d=0;65>d;d++)J[d]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);d=J;e=[];for(f=0;f<c.length;f+=3){var l=c[f],m=(h=f+1<c.length)?c[f+1]:0,Qa=f+2<c.length,R=Qa?c[f+2]:0,Db=l>>2,l=(l&3)<<4|m>>4,m=(m&
15)<<2|R>>6,R=R&63;Qa||(R=64,h||(m=64));e.push(d[Db],d[l],d[m],d[R])}c=e.join("")}hb("isplayer://"+b+"/"+a+"/"+c)}}else try{lb||(window.open("","_self",""),window.close())}catch(Eb){}return!0});t("ispring.quiz.flashapi.loadState",function(a){a=Bb().get(a);return void 0!==a?a:null});t("ispring.quiz.flashapi.saveState",function(a,b){var c=Bb();try{c.set(a,b)}catch(d){}return!0});})();
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();