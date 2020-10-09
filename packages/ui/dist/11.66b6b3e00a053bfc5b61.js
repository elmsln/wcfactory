(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{398:function(n,t,e){"use strict";e.r(t);var r=e(273),i=e.n(r),o=e(261),a=e.n(o),c=e(262),u=e.n(c),s=e(264),l=e.n(s),f=e(263),d=e.n(f),p=e(267),h=e.n(p),y=e(265),m=e.n(y),v=e(278),b=e(351),g=e(287),k=e.n(g),w=e(383),x=e(384),O=e(386),E=e(353),S=e(280),j=e(354),C=e(269),L=e(385),I=e(380),_=new O.a({uri:"http://localhost:4000"}),q=new j.a({uri:"ws://localhost:4000/graphql",options:{reconnect:!0}}),P=Object(S.e)(function(n){var t=n.query,e=Object(C.getMainDefinition)(t),r=e.kind,i=e.operation;return"OperationDefinition"===r&&"subscription"===i},q,_),F=new x.a,T=Object(L.a)({cache:F}),U=new w.a({link:S.a.from([Object(E.a)(function(n){var t=n.graphQLErrors,e=n.networkError;t&&t.map(function(n){var t=n.message,e=n.locations,r=n.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(e,", Path: ").concat(r))}),e&&console.log("[Network error]: ".concat(e))}),new I.a,T,P]),cache:F,connectToDevTools:!1});e(377);function A(){var n=i()(['<a id="list-item" href="/factories/','"><h2 id="item-title">🏭','</h2><div id="item-desc">',"</div></a>"]);return A=function(){return n},n}function H(){var n=i()(['<style>:host {\n          display: block;\n\n        }\n        #list {\n          display: flex;\n          flex-direction: column;\n        }\n        #list-item {\n          display: flex;\n          padding: 10px;\n          color: inherit;\n          text-decoration: none;\n        }\n        #list-item:hover, #list-item:focus {\n          background: --list-item-hover-background;\n        }\n        #item-title {\n          flex: 1 1 auto;\n          margin: 0;\n          font-size: 18px;\n        }\n        #item-desc {\n          opacity: 0.7;\n        }</style><div id="list">',"</div>"]);return H=function(){return n},n}function R(){var n=i()(["\n  query {\n    factories {\n      name\n      location\n    }\n  }\n"]);return R=function(){return n},n}var $=k()(R()),B=function(n){function t(){var n;a()(this,t),(n=l()(this,d()(t).call(this))).factories=[];try{U.watchQuery({query:$}).subscribe(function(t){var e=t.data.factories;n.factories=e})}catch(n){}return n}return m()(t,n),u()(t,null,[{key:"properties",get:function(){return{factories:{type:Array}}}}]),u()(t,[{key:"render",value:function(){return Object(v.b)(H(),this.factories.map(function(n){return Object(v.b)(A(),n.name,n.name,n.location)}))}}]),t}(v.a);customElements.define("wcfactory-ui-factories",B);var Q=e(372),D=e(276),N=e.n(D);function M(){var n=i()(["\n          mutation($script: String!, $location: String!) {\n            runScript(script: $script, location: $location)\n          }\n        "]);return M=function(){return n},n}function z(){var n=i()(['<button class="script" @click="','">🚀',"</button>"]);return z=function(){return n},n}function J(){var n=i()(['<span class="script" active="','">🔄',"</span>"]);return J=function(){return n},n}function W(){var n=i()(['<style>button {\n          font-family: inherit;\n          border: none;\n          margin: 0;\n          padding: 0;\n          background: none;\n          color: inherit;\n          cursor: pointer\n        }\n        .script {\n          margin-right: 10px;\n          padding: 5px;\n        }\n\n        .script[active="true"] {\n          background: black;\n        }\n\n        #output {\n          background: black;\n          height: 100px;\n        }</style>'," "," ",'<div id="output"></div>']);return W=function(){return n},n}function G(){var n=i()(["\n  subscription {\n    operationsChildProcess\n  }\n"]);return G=function(){return n},n}function K(){var n=i()(["\n  subscription {\n    operationsUpdate\n  }\n"]);return K=function(){return n},n}function V(){var n=i()(["\n  query {\n    operations {\n      script\n      location\n    }\n  }\n"]);return V=function(){return n},n}var X=k()(V()),Y=k()(K()),Z=k()(G()),nn=function(n){function t(){var n;return a()(this,t),(n=l()(this,d()(t).call(this))).scripts={},n.operations=[],n.activeScript="",n}return m()(t,n),u()(t,null,[{key:"properties",get:function(){return{scripts:{type:Array},operations:{type:Array},location:{type:Array},activeScript:{type:String}}}}]),u()(t,[{key:"firstUpdated",value:function(){this.subscribeToOperations(),this.subscribeToOperationsChildProcess(),this.fetchOperations()}},{key:"render",value:function(){var n=this;return Object(v.b)(W(),this.activeScript,this.script,this.scripts.map(function(t){return n.operations.find(function(e){return e.script===t&&e.location===n.location})?Object(v.b)(J(),n.activeScript===t,t):Object(v.b)(z(),function(e){return n.runScript(t,n.location)},t)}))}},{key:"runScript",value:function(n,t){return new Promise(function(e,r){var i=function(){try{return e()}catch(n){return r(n)}},o=function(n){try{return i()}catch(n){return r(n)}};try{return Promise.resolve(U.mutate({mutation:k()(M()),variables:{script:n,location:t}})).then(function(n){try{return i()}catch(n){return o()}},o)}catch(n){o()}})}},{key:"fetchOperations",value:function(){var n=this;try{U.watchQuery({query:X}).subscribe(function(t){var e=t.data.operations;n.operations=e})}catch(n){}}},{key:"subscribeToOperations",value:function(){window.WCFactoryUI=Object.assign({},{SUBSCRIBE_OPERATIONS_UPDATE:"subscribed"}),U.subscribe({query:Y}).subscribe(function(n){var t=n.data.operationsUpdate,e=U.readQuery({query:X}),r=JSON.parse(t);e.operations=[].concat(N()(e.operations),[r]),U.writeQuery({query:X,data:e})})}},{key:"subscribeToOperationsChildProcess",value:function(){var n=this;window.WCFactoryUI=Object.assign({},{SUBSCRIBE_OPERATIONS_CHILD_PROCESS:"subscribed"}),U.subscribe({query:Z}).subscribe(function(t){var e=t.data.operationsChildProcess;n.shadowRoot.getElementById("output").innerHTML=e})}}]),t}(v.a);function tn(){var n=i()(["\n        mutation($location: String!) {\n          openLocation(location: $location)\n        }\n      "]);return tn=function(){return n},n}function en(){var n=i()(['<style>:host {\n          display: flex;\n          background: var(--wcfactory-ui-secondary-color);\n          padding: 10px;\n          min-height: 100px;\n          flex-direction: column;\n        }\n        button {\n          font-family: inherit;\n          border: none;\n          margin: 0;\n          padding: 0;\n          background: none;\n          color: inherit;\n          cursor: pointer\n        }\n        button:hover, button:focus {\n          color: white;\n        }\n        #header {\n          display: flex;\n        }\n        #title {\n          flex: 1 1 auto;\n        }\n        #middle {\n          flex: 1 1 auto;\n          font-size: 14px;\n          opacity: 0.7;\n          font-family: inherit;\n          border: none;\n          margin: 0;\n          padding: 0;\n          background: none;\n          color: inherit;\n          margin: 10px 0;\n        }\n        #location {\n          font-size: 14px;\n          opacity: 0.7;\n          font-family: inherit;\n          border: none;\n          margin: 0;\n          padding: 0;\n          background: none;\n          color: inherit;\n          cursor: pointer;\n        }</style><div id="header"><div id="title">','</div><div id="version">📦','</div></div><div id="middle"><wcfactory-ui-scripts .scripts="','" .location="','"></wcfactory-ui-scripts></div><div id="footer"><button id="location" @click="','">📁',"</button></div>"]);return en=function(){return n},n}customElements.define("wcfactory-ui-scripts",nn);var rn=function(n){function t(){var n;return a()(this,t),(n=l()(this,d()(t).call(this))).element={},n}return m()(t,n),u()(t,null,[{key:"properties",get:function(){return{element:{type:Object},operations:{type:Array}}}}]),u()(t,[{key:"render",value:function(){return Object(v.b)(en(),this.element.name,this.element.version,this.element.scripts,this.element.location,this._locationClicked,this.element.location)}},{key:"_locationClicked",value:function(n){this.openLocation(this.element.location)}},{key:"openLocation",value:function(n){U.mutate({mutation:k()(tn()),variables:{location:n}})}}]),t}(v.a);function on(){var n=i()(['<style>input {\n        }</style><label><slot name="label"></slot></label> <input type="text" placeholder="','">']);return on=function(){return n},n}customElements.define("wcfactory-ui-element",rn);var an=function(n){function t(){var n;return a()(this,t),(n=l()(this,d()(t).call(this))).placeholder="",n}return m()(t,n),u()(t,null,[{key:"properties",get:function(){return{placeholder:{type:String}}}}]),u()(t,[{key:"render",value:function(){return Object(v.b)(on(),this.placeholder)}}]),t}(v.a);function cn(){var n=i()(["\n        query($name: ID!) {\n          factory(name: $name) {\n            name\n            location\n            elements {\n              name\n              location\n              version\n              scripts\n            }\n          }\n        }\n      "]);return cn=function(){return n},n}function un(){var n=i()(['<div id="element-container" active="','"><div id="element" @click="','" @keypress="','" data-name="','" aria-role="button" aria-haspopup="true" aria-pressed="','" tabindex="1">📦 ','</div><div id="element-item-container" tabindex="','"><wcfactory-ui-element .element="','" tabindex="','"></wcfactory-ui-element></div></div>']);return un=function(){return n},n}function sn(){var n=i()(['<style>:host {\n            display: block;\n          }\n          *[aria-role="button"] {\n            cursor: pointer;\n          }\n          #element-container {\n            display: block;\n            font-family: inherit;\n            border: none;\n            padding: 0;\n            margin: 0;\n            color: inherit;\n          }\n          #element {\n            display: flex;\n            flex-direction: column;\n            padding: 10px;\n          }\n          #element:hover, #element:focus {\n            background-color: var(--list-item-hover-background);\n          }\n          #element-item-container {\n            max-height: 0;\n            display: block;\n            overflow: hidden;\n          }\n          #element-container[active="true"] {\n            margin: 20px;\n          }\n          #element-container[active="true"] #element-item-container {\n            max-height: 400px;\n            transform: scale(1.1);\n            transition: all 0.4s ease-in-out;\n            margin-top: -50px;\n            box-shadow: 1px 1px 1px rgba(0,0,0, 0.2)\n          }</style>Name: ',"<br>Location: ","<br>Elements: (",')<div id="filter"><wcfactory-ui-search placeholder="element name" @input="','"><span slot="label">Filter elements:</span></wcfactory-ui-search></div><div id="elements">',"</div>"]);return sn=function(){return n},n}function ln(){var n=i()(["loading..."]);return ln=function(){return n},n}customElements.define("wcfactory-ui-search",an);var fn=function(n){function t(){var n;return a()(this,t),(n=l()(this,d()(t).call(this))).factory=null,n.loading=!0,n.activeElement=null,n.elementFilter="",n}return m()(t,n),u()(t,null,[{key:"properties",get:function(){return{location:{type:Object},loading:{type:Boolean},factory:{type:Object},activeElement:{type:String},elementFilter:{type:String}}}}]),u()(t,[{key:"render",value:function(){var n=this,t=this.location.params.factory;if(this.fetchFactory(t),this.loading)return Object(v.b)(ln());if(this.factory){var e=new Q.default(this.factory.elements,{keys:["name"],minMatchCharLength:2}),r=""!==this.elementFilter?e.search(this.elementFilter):this.factory.elements;return Object(v.b)(sn(),this.factory.name,this.factory.location,this.factory.elements.length,function(t){return n.elementFilter=t.composedPath()[0].value},r.map(function(t){return Object(v.b)(un(),t.name===n.activeElement,n._activateItemHander,n._activateItemHander,t.name,t.name===n.activeElement,t.name,t.name===n.activeElement?"1":null,t,t.name===n.activeElement?"1":null)}))}}},{key:"fetchFactory",value:function(n){var t=this;try{U.watchQuery({query:k()(cn()),variables:{name:n}}).subscribe(function(n){var e=n.data.factory;t.loading=!1,t.factory=e})}catch(n){}}},{key:"_activateItemHander",value:function(n){var t=!1;"click"===n.type?t=!0:void 0!==n.keyCode&&(13!==n.keyCode&&32!==n.keyCode||(t=!0)),t&&(this.activeElement=n.target.dataset.name,n.target.nextSibling.focus())}}]),t}(v.a);function dn(){var n=i()(["that path does not exist 😔"]);return dn=function(){return n},n}customElements.define("wcfactory-ui-factory",fn);var pn=function(n){function t(){return a()(this,t),l()(this,d()(t).apply(this,arguments))}return m()(t,n),u()(t,[{key:"render",value:function(){return Object(v.b)(dn())}}]),t}(v.a);function hn(){var n=i()(['<style>:host {\n          --list-item-hover-background: rgba(255,255,255, 0.1);\n        }</style><style>:host {\n          display: block;\n          max-width: 900px;\n          margin: auto;\n        }\n        h1 {\n          text-align: center;\n          margin-bottom: 5vw\n        }</style><h1>WCFactory</h1><div id="router-outlet"></div>']);return hn=function(){return n},n}customElements.define("wcfactory-ui-404",pn);var yn=function(n){function t(){return a()(this,t),l()(this,d()(t).apply(this,arguments))}return m()(t,n),u()(t,[{key:"firstUpdated",value:function(){this.addEventListener("wcfactory-ui-open-location",this._openLocationHandler.bind(this)),this.routerSetup()}},{key:"disconnectedCallback",value:function(){h()(d()(t.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("wcfactory-ui-open-location",this._openLocationHandler.bind(this))}},{key:"render",value:function(){return Object(v.b)(hn())}},{key:"routerSetup",value:function(){var n=this.shadowRoot.getElementById("router-outlet");new b.a(n).setRoutes([{path:"/",component:"wcfactory-ui-factories"},{path:"/factories",component:"wcfactory-ui-factory"},{path:"/factories/:factory",component:"wcfactory-ui-factory"},{path:"(.*)",component:"wcfactory-ui-404"}])}},{key:"_openLocationHandler",value:function(n){console.log("e:",n)}}]),t}(v.a);customElements.define("wcfactory-ui",yn)}}]);