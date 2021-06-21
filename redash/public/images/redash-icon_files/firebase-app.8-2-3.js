!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).firebase=n()}(this,function(){"use strict";var i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},o=function(){return(o=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++)for(var e in n=arguments[i])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)};function v(t){var n="function"==typeof Symbol&&Symbol.iterator,i=n&&t[n],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,n){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,e,o=i.call(t),s=[];try{for(;(void 0===n||0<n--)&&!(r=o.next()).done;)s.push(r.value)}catch(t){e={error:t}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}return s}function p(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(var i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=p(t[i],n[i]));return t}var e=(t.prototype.wrapCallback=function(i){var r=this;return function(t,n){t?r.reject(t):r.resolve(n),"function"==typeof i&&(r.promise.catch(function(){}),1===i.length?i(t):i(t,n))}},t);function t(){var i=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(t,n){i.resolve=t,i.reject=n})}var r,n,s,a="FirebaseError",u=(r=Error,i(n=h,s=r),n.prototype=null===s?Object.create(s):(f.prototype=s.prototype,new f),h);function f(){this.constructor=n}function h(t,n,i){return(n=r.call(this,n)||this).code=t,n.customData=i,n.name=a,Object.setPrototypeOf(n,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,l.prototype.create),n}var l=(d.prototype.create=function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var r,e=n[0]||{},o=this.service+"/"+t;t=(t=this.errors[t])?(r=e,t.replace(b,function(t,n){var i=r[n];return null!=i?String(i):"<"+n+"?>"})):"Error",t=this.serviceName+": "+t+" ("+o+").";return new u(o,t,e)},d);function d(t,n,i){this.service=t,this.serviceName=n,this.errors=i}var b=/\{\$([^}]+)}/g;function y(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function m(t,n){return(n=new g(t,n)).subscribe.bind(n)}var g=(w.prototype.next=function(n){this.forEachObserver(function(t){t.next(n)})},w.prototype.error=function(n){this.forEachObserver(function(t){t.error(n)}),this.close(n)},w.prototype.complete=function(){this.forEachObserver(function(t){t.complete()}),this.close()},w.prototype.subscribe=function(t,n,i){var r,e=this;if(void 0===t&&void 0===n&&void 0===i)throw new Error("Missing Observer.");return void 0===(r=function(t,n){if("object"!=typeof t||null===t)return!1;for(var i=0,r=["next","error","complete"];i<r.length;i++){var e=r[i];if(e in t&&"function"==typeof t[e])return!0}return!1}(t)?t:{next:t,error:n,complete:i}).next&&(r.next=E),void 0===r.error&&(r.error=E),void 0===r.complete&&(r.complete=E),i=this.unsubscribeOne.bind(this,this.observers.length),this.finalized&&this.task.then(function(){try{e.finalError?r.error(e.finalError):r.complete()}catch(t){}}),this.observers.push(r),i},w.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},w.prototype.forEachObserver=function(t){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,t)},w.prototype.sendOne=function(t,n){var i=this;this.task.then(function(){if(void 0!==i.observers&&void 0!==i.observers[t])try{n(i.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})},w.prototype.close=function(t){var n=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},w);function w(t,n){var i=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){t(i)}).catch(function(t){i.error(t)})}function E(){}var j=(N.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},N.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},N.prototype.setServiceProps=function(t){return this.serviceProps=t,this},N);function N(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var O="[DEFAULT]",A=(F.prototype.get=function(t){void 0===t&&(t=O);var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var i=new e;this.instancesDeferred.set(n,i);try{var r=this.getOrInitializeService(n);r&&i.resolve(r)}catch(t){}}return this.instancesDeferred.get(n).promise},F.prototype.getImmediate=function(t){var n=o({identifier:O,optional:!1},t),i=(t=n.identifier,n.optional),r=this.normalizeInstanceIdentifier(t);try{var e=this.getOrInitializeService(r);if(e)return e;if(i)return null;throw Error("Service "+this.name+" is not available")}catch(t){if(i)return null;throw t}},F.prototype.getComponent=function(){return this.component},F.prototype.setComponent=function(t){var n,i;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if("EAGER"===(this.component=t).instantiationMode)try{this.getOrInitializeService(O)}catch(t){}try{for(var r=v(this.instancesDeferred.entries()),e=r.next();!e.done;e=r.next()){var o=c(e.value,2),s=o[0],a=o[1],u=this.normalizeInstanceIdentifier(s);try{var f=this.getOrInitializeService(u);a.resolve(f)}catch(t){}}}catch(t){n={error:t}}finally{try{e&&!e.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},F.prototype.clearInstance=function(t){void 0===t&&(t=O),this.instancesDeferred.delete(t),this.instances.delete(t)},F.prototype.delete=function(){return t=this,u=function(){var n;return function(i,r){var e,o,s,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},t={next:n(0),throw:n(1),return:n(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function n(n){return function(t){return function(n){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(s=2&n[0]?o.return:n[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,o=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=r.call(i,a)}catch(t){n=[6,t],o=0}finally{e=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,t])}}}(this,function(t){switch(t.label){case 0:return n=Array.from(this.instances.values()),[4,Promise.all(function(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(c(arguments[n]));return t}(n.filter(function(t){return"INTERNAL"in t}).map(function(t){return t.INTERNAL.delete()}),n.filter(function(t){return"_delete"in t}).map(function(t){return t._delete()})))];case 1:return t.sent(),[2]}})},new(a=(a=s=void 0)||Promise)(function(i,n){function r(t){try{o(u.next(t))}catch(t){n(t)}}function e(t){try{o(u.throw(t))}catch(t){n(t)}}function o(t){var n;t.done?i(t.value):((n=t.value)instanceof a?n:new a(function(t){t(n)})).then(r,e)}o((u=u.apply(t,s||[])).next())});var t,s,a,u},F.prototype.isComponentSet=function(){return null!=this.component},F.prototype.getOrInitializeService=function(t){var n,i=this.instances.get(t);return!i&&this.component&&(i=this.component.instanceFactory(this.container,(n=t)===O?void 0:n),this.instances.set(t,i)),i||null},F.prototype.normalizeInstanceIdentifier=function(t){return!this.component||this.component.multipleInstances?t:O},F);function F(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}var S=(I.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},I.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},I.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new A(t,this);return this.providers.set(t,n),n},I.prototype.getProviders=function(){return Array.from(this.providers.values())},I);function I(t){this.name=t,this.providers=new Map}function L(){for(var t=0,n=0,i=arguments.length;n<i;n++)t+=arguments[n].length;var r=Array(t),e=0;for(n=0;n<i;n++)for(var o=arguments[n],s=0,a=o.length;s<a;s++,e++)r[e]=o[s];return r}var T,P=[];function R(t,n){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];if(!(n<t.logLevel)){var e=(new Date).toISOString(),o=C[n];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+n+")");console[o].apply(console,L(["["+e+"]  "+t.name+":"],i))}}(x=T=T||{})[x.DEBUG=0]="DEBUG",x[x.VERBOSE=1]="VERBOSE",x[x.INFO=2]="INFO",x[x.WARN=3]="WARN",x[x.ERROR=4]="ERROR",x[x.SILENT=5]="SILENT";var k={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},_=T.INFO,C=((M={})[T.DEBUG]="log",M[T.VERBOSE]="log",M[T.INFO]="info",M[T.WARN]="warn",M[T.ERROR]="error",M),x=(Object.defineProperty(D.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in T))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),D.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?k[t]:t},Object.defineProperty(D.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),D.prototype.debug=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,L([this,T.DEBUG],t)),this._logHandler.apply(this,L([this,T.DEBUG],t))},D.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,L([this,T.VERBOSE],t)),this._logHandler.apply(this,L([this,T.VERBOSE],t))},D.prototype.info=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,L([this,T.INFO],t)),this._logHandler.apply(this,L([this,T.INFO],t))},D.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,L([this,T.WARN],t)),this._logHandler.apply(this,L([this,T.WARN],t))},D.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,L([this,T.ERROR],t)),this._logHandler.apply(this,L([this,T.ERROR],t))},D);function D(t){this.name=t,this._logLevel=_,this._logHandler=R,this._userLogHandler=null,P.push(this)}function U(n){P.forEach(function(t){t.setLogLevel(n)})}var M=((M={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",M["bad-app-name"]="Illegal App name: '{$appName}",M["duplicate-app"]="Firebase App named '{$appName}' already exists",M["app-deleted"]="Firebase App named '{$appName}' already deleted",M["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",M["invalid-log-argument"]="First argument to `onLog` must be null or a function.",M),V=new l("app","Firebase",M),B="@firebase/app",$="[DEFAULT]",W=((M={})[B]="fire-core",M["@firebase/analytics"]="fire-analytics",M["@firebase/auth"]="fire-auth",M["@firebase/database"]="fire-rtdb",M["@firebase/functions"]="fire-fn",M["@firebase/installations"]="fire-iid",M["@firebase/messaging"]="fire-fcm",M["@firebase/performance"]="fire-perf",M["@firebase/remote-config"]="fire-rc",M["@firebase/storage"]="fire-gcs",M["@firebase/firestore"]="fire-fst",M["fire-js"]="fire-js",M["firebase-wrapper"]="fire-js-all",M),G=new x("@firebase/app"),H=(Object.defineProperty(Y.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(t){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=t},enumerable:!1,configurable:!0}),Object.defineProperty(Y.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(Y.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),Y.prototype.delete=function(){var n=this;return new Promise(function(t){n.checkDestroyed_(),t()}).then(function(){return n.firebase_.INTERNAL.removeApp(n.name_),Promise.all(n.container.getProviders().map(function(t){return t.delete()}))}).then(function(){n.isDeleted_=!0})},Y.prototype._getService=function(t,n){return void 0===n&&(n=$),this.checkDestroyed_(),this.container.getProvider(t).getImmediate({identifier:n})},Y.prototype._removeServiceInstance=function(t,n){void 0===n&&(n=$),this.container.getProvider(t).clearInstance(n)},Y.prototype._addComponent=function(n){try{this.container.addComponent(n)}catch(t){G.debug("Component "+n.name+" failed to register with FirebaseApp "+this.name,t)}},Y.prototype._addOrOverwriteComponent=function(t){this.container.addOrOverwriteComponent(t)},Y.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw V.create("app-deleted",{appName:this.name_})},Y);function Y(t,n,i){var r,e,o=this;this.firebase_=i,this.isDeleted_=!1,this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=p(void 0,t),this.container=new S(n.name),this._addComponent(new j("app",function(){return o},"PUBLIC"));try{for(var s=v(this.firebase_.INTERNAL.components.values()),a=s.next();!a.done;a=s.next()){var u=a.value;this._addComponent(u)}}catch(t){r={error:t}}finally{try{a&&!a.done&&(e=s.return)&&e.call(s)}finally{if(r)throw r.error}}}H.prototype.name&&H.prototype.options||H.prototype.delete||console.log("dc");M=function t(){var n=function(u){var f={},c=new Map,h={t:!0,initializeApp:function(t,n){void 0===n&&(n={}),"object"==typeof n&&null!==n||(n={name:n});var i=n;if(void 0===i.name&&(i.name=$),"string"!=typeof(n=i.name)||!n)throw V.create("bad-app-name",{appName:String(n)});if(y(f,n))throw V.create("duplicate-app",{appName:n});return i=new u(t,i,h),f[n]=i},app:l,registerVersion:function(t,n,i){var r=null!==(e=W[t])&&void 0!==e?e:t;i&&(r+="-"+i);var e=r.match(/\s|\//);if(t=n.match(/\s|\//),e||t)return i=['Unable to register library "'+r+'" with version "'+n+'":'],e&&i.push('library name "'+r+'" contains illegal characters (whitespace or "/")'),e&&t&&i.push("and"),t&&i.push('version name "'+n+'" contains illegal characters (whitespace or "/")'),void G.warn(i.join(" "));o(new j(r+"-version",function(){return{library:r,version:n}},"VERSION"))},setLogLevel:U,onLog:function(t,n){if(null!==t&&"function"!=typeof t)throw V.create("invalid-log-argument",{appName:name});!function(s,n){for(var t=0,i=P;t<i.length;t++)!function(t){var o=null;n&&n.level&&(o=k[n.level]),t.userLogHandler=null===s?null:function(t,n){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];var e=i.map(function(t){if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(function(t){return t}).join(" ");n>=(null!=o?o:t.logLevel)&&s({level:T[n].toLowerCase(),message:e,args:i,type:t.name})}}(i[t])}(t,n)},apps:null,SDK_VERSION:"8.2.3",INTERNAL:{registerComponent:o,removeApp:function(t){delete f[t]},components:c,useAsService:function(t,n){return"serverAuth"===n?null:n}}};function l(t){if(!y(f,t=t||$))throw V.create("no-app",{appName:t});return f[t]}function o(i){var t,n,r,e=i.name;if(c.has(e))return G.debug("There were multiple attempts to register component "+e+"."),"PUBLIC"===i.type?h[e]:null;c.set(e,i),"PUBLIC"===i.type&&(r=function(t){if(void 0===t&&(t=l()),"function"!=typeof t[e])throw V.create("invalid-app-argument",{appName:e});return t[e]()},void 0!==i.serviceProps&&p(r,i.serviceProps),h[e]=r,u.prototype[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this._getService.bind(this,e).apply(this,i.multipleInstances?t:[])});try{for(var o=v(Object.keys(f)),s=o.next();!s.done;s=o.next()){var a=s.value;f[a]._addComponent(i)}}catch(n){t={error:n}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return"PUBLIC"===i.type?h[e]:null}return h.default=h,Object.defineProperty(h,"apps",{get:function(){return Object.keys(f).map(function(t){return f[t]})}}),l.App=u,h}(H);return n.INTERNAL=o(o({},n.INTERNAL),{createFirebaseNamespace:t,extendNamespace:function(t){p(n,t)},createSubscribe:m,ErrorFactory:l,deepExtend:p}),n}();var z=(J.prototype.getPlatformInfoString=function(){return this.container.getProviders().map(function(t){return"VERSION"===(null==(n=(n=t).getComponent())?void 0:n.type)?(t=t.getImmediate()).library+"/"+t.version:null;var n}).filter(function(t){return t}).join(" ")},J);function J(t){this.container=t}"object"==typeof self&&self.self===self&&void 0!==self.firebase&&(G.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "),(x=self.firebase.SDK_VERSION)&&0<=x.indexOf("LITE")&&G.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "));var K=M.initializeApp;M.initializeApp=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return}}()&&G.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),K.apply(void 0,t)};var Z,q=M;return(Z=q).INTERNAL.registerComponent(new j("platform-logger",function(t){return new z(t)},"PRIVATE")),Z.registerVersion(B,"0.6.13",void 0),Z.registerVersion("fire-js",""),q.registerVersion("firebase","8.2.3","app"),q});