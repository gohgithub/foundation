(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7139789e"],{"03b9":function(t,e,r){"use strict";r("1f29")},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?a(t):o(n(t))}},"0b42":function(t,e,r){var n=r("861d"),o=r("e8b5"),c=r("b622"),i=c("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?n(e)&&(e=e[i],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),c=r("785a"),i=r("17c2"),a=r("9112"),s=function(t){if(t&&t.forEach!==i)try{a(t,"forEach",i)}catch(e){t.forEach=i}};for(var f in o)s(n[f]&&n[f].prototype);s(c)},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),c=o("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),c=r("2d00"),i=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f29":function(t,e,r){},2521:function(t,e,r){"use strict";r.r(e);var n=r("7a23");Object(n["pushScopeId"])("data-v-58120496");var o={class:"chatOnline"},c=Object(n["createElementVNode"])("h2",null,"線上聊聊",-1),i=Object(n["createElementVNode"])("div",{class:"chatOnline-box"},[Object(n["createElementVNode"])("iframe",{src:"https://webchat.botframework.com/embed/cmuhtgoh-chatbot-bot20221108/gemini?b=cmuhtgoh-chatbot-bot20221108&s=Qfqlik4yVn0.hAUQEnhRilTXhW2nZK3-MUfhMshssDXZpRBkNOqc_R4&username=You",title:""})],-1),a=[c,i];function s(t,e,r,c,i,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",o,a)}Object(n["popScopeId"])();var f=r("5530"),u=r("c1df"),l=r("5502");u["locale"]("zh-tw");var b={computed:Object(f["a"])({},Object(l["b"])(["user","userData"])),data:function(){return{newMessage:"",messages:[],newData:[],firstData:{message:{textA:"我需要有人一起討論",textB:"我不想要生下來",textC:"我想要生下來",textD:"如何安排與男方關係",textE:"如何得到社會協助",textF:"我未滿16歲",textG:"疑似懷孕"},user:{select:""},time:u().format("YYYY/MM/DD HH:mm:ss"),isClose:!1,stage:0},secondData:{message:{textA:"自行撫養",textB:"其他因素無法自行撫養"},user:{select:""},time:"",isClose:!1,stage:0},thirdData:{message:{textA:"結束諮詢",textB:"轉接專人服務"},user:{select:""},time:"",isClose:!1,stage:0}}},methods:{firstSelect:function(t){var e=this,r=e.firstData;!1===r.isClose&&(r.user.select=t,r.stage=1,r.isClose=!0,e.secondData.time=u(new Date).format("YYYY/MM/DD HH:mm:ss"))},secondSelect:function(t){var e=this,r=e.secondData;!1===r.isClose&&(r.user.select=t,r.stage=1,r.isClose=!0,e.thirdData.time=u(new Date).format("YYYY/MM/DD HH:mm:ss"))},thirdSelect:function(t){var e=this,r=e.thirdData;!1===r.isClose&&(r.user.select=t,r.stage=1,r.isClose=!0)},addMessage:function(){var t=this;if(""===t.newMessage)return!1;t.axios.post("https://iecosystem-api.tomyue.cc/api/messages",{body:t.newMessage}).then((function(e){t.isAddMessage=!0,t.newData.push({body:t.newMessage,created_at:u(new Date).format("YYYY/MM/DD HH:mm:ss")}),t.newMessage=""}))},getMessage:function(){var t=this;t.axios.get("https://iecosystem-api.tomyue.cc/api/messages?page=1&perPage=100").then((function(e){console.log(e),t.messages=e.data.data}))}},created:function(){this.getMessage()}},d=(r("03b9"),r("d959")),p=r.n(d);const h=p()(b,[["render",s],["__scopeId","data-v-58120496"]]);e["default"]=h},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,c=r("1dde"),i=c("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),c=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},8418:function(t,e,r){"use strict";var n=r("a04b"),o=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,c(0,r)):t[i]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d066"),i=r("c430"),a=r("83ab"),s=r("4930"),f=r("d039"),u=r("5135"),l=r("e8b5"),b=r("861d"),d=r("d9b5"),p=r("825a"),h=r("7b0b"),g=r("fc6a"),v=r("a04b"),m=r("577e"),y=r("5c6c"),w=r("7c73"),O=r("df75"),j=r("241c"),D=r("057f"),x=r("7418"),S=r("06cf"),P=r("9bf2"),E=r("d1e7"),M=r("9112"),Y=r("6eeb"),k=r("5692"),A=r("f772"),C=r("d012"),N=r("90e3"),H=r("b622"),B=r("e538"),I=r("746f"),J=r("d44e"),R=r("69f3"),V=r("b727").forEach,_=A("hidden"),F="Symbol",Q="prototype",T=H("toPrimitive"),q=R.set,U=R.getterFor(F),W=Object[Q],X=o.Symbol,Z=c("JSON","stringify"),z=S.f,G=P.f,K=D.f,L=E.f,$=k("symbols"),tt=k("op-symbols"),et=k("string-to-symbol-registry"),rt=k("symbol-to-string-registry"),nt=k("wks"),ot=o.QObject,ct=!ot||!ot[Q]||!ot[Q].findChild,it=a&&f((function(){return 7!=w(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(W,e);n&&delete W[e],G(t,e,r),n&&t!==W&&G(W,e,n)}:G,at=function(t,e){var r=$[t]=w(X[Q]);return q(r,{type:F,tag:t,description:e}),a||(r.description=e),r},st=function(t,e,r){t===W&&st(tt,e,r),p(t);var n=v(e);return p(r),u($,n)?(r.enumerable?(u(t,_)&&t[_][n]&&(t[_][n]=!1),r=w(r,{enumerable:y(0,!1)})):(u(t,_)||G(t,_,y(1,{})),t[_][n]=!0),it(t,n,r)):G(t,n,r)},ft=function(t,e){p(t);var r=g(e),n=O(r).concat(pt(r));return V(n,(function(e){a&&!lt.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?w(t):ft(w(t),e)},lt=function(t){var e=v(t),r=L.call(this,e);return!(this===W&&u($,e)&&!u(tt,e))&&(!(r||!u(this,e)||!u($,e)||u(this,_)&&this[_][e])||r)},bt=function(t,e){var r=g(t),n=v(e);if(r!==W||!u($,n)||u(tt,n)){var o=z(r,n);return!o||!u($,n)||u(r,_)&&r[_][n]||(o.enumerable=!0),o}},dt=function(t){var e=K(g(t)),r=[];return V(e,(function(t){u($,t)||u(C,t)||r.push(t)})),r},pt=function(t){var e=t===W,r=K(e?tt:g(t)),n=[];return V(r,(function(t){!u($,t)||e&&!u(W,t)||n.push($[t])})),n};if(s||(X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,e=N(t),r=function(t){this===W&&r.call(tt,t),u(this,_)&&u(this[_],e)&&(this[_][e]=!1),it(this,e,y(1,t))};return a&&ct&&it(W,e,{configurable:!0,set:r}),at(e,t)},Y(X[Q],"toString",(function(){return U(this).tag})),Y(X,"withoutSetter",(function(t){return at(N(t),t)})),E.f=lt,P.f=st,S.f=bt,j.f=D.f=dt,x.f=pt,B.f=function(t){return at(H(t),t)},a&&(G(X[Q],"description",{configurable:!0,get:function(){return U(this).description}}),i||Y(W,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:X}),V(O(nt),(function(t){I(t)})),n({target:F,stat:!0,forced:!s},{for:function(t){var e=m(t);if(u(et,e))return et[e];var r=X(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!d(t))throw TypeError(t+" is not a symbol");if(u(rt,t))return rt[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:ut,defineProperty:st,defineProperties:ft,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(h(t))}}),Z){var ht=!s||f((function(){var t=X();return"[null]"!=Z([t])||"{}"!=Z({a:t})||"{}"!=Z(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(n=e,(b(e)||void 0!==t)&&!d(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!d(e))return e}),o[1]=e,Z.apply(null,o)}})}X[Q][T]||M(X[Q],T,X[Q].valueOf),J(X,F),C[_]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),c=r("df75"),i=r("d039"),a=i((function(){c(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return c(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),c=r("7b0b"),i=r("50c4"),a=r("65f0"),s=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,u=4==t,l=6==t,b=7==t,d=5==t||l;return function(p,h,g,v){for(var m,y,w=c(p),O=o(w),j=n(h,g,3),D=i(O.length),x=0,S=v||a,P=e?S(p,D):r||b?S(p,0):void 0;D>x;x++)if((d||x in O)&&(m=O[x],y=j(m,x,w),t))if(e)P[x]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:s.call(P,m)}else switch(t){case 4:return!1;case 7:s.call(P,m)}return l?-1:f||u?u:P}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),c=r("56ef"),i=r("fc6a"),a=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),o=a.f,f=c(n),u={},l=0;while(f.length>l)r=o(n,e=f[l++]),void 0!==r&&s(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),c=r("fc6a"),i=r("06cf").f,a=r("83ab"),s=o((function(){i(1)})),f=!a||s;n({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-7139789e.1c161724.js.map