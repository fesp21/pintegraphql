webpackJsonp([2,0],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.router=t.app=void 0;var a=r(24),u=n(a),i=r(138),o=n(i),s=r(67),d=n(s),l=r(30),c=n(l),f=r(148),p=r(146),m=n(p);r(108);var _=r(65),h=n(_),v=r(135),g=n(v);u.default.use(m.default),u.default.use(g.default,{apolloClient:h.default}),u.default.material.theme.register("default",{primary:{color:"light-blue",hue:"700"},accent:"blue"}),(0,f.sync)(c.default,d.default);var y=new u.default({router:d.default,store:c.default,render:function(e){return e(o.default)}}).$mount("#app");t.app=y,t.router=d.default,t.store=c.default},19:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.INCREASE_COUNTER="INCREASE_COUNTER",t.DECREASE_COUNTER="DECREASE_COUNTER"},30:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(24),u=n(a),i=r(149),o=n(i),s=r(69),d=n(s),l=r(68),c=n(l),f=r(70),p=n(f);u.default.use(o.default),u.default.config.debug=!0;var m=!1;t.default=new o.default.Store({modules:{root:p.default,home:d.default,detail:c.default},strict:m})},51:function(e,t,r){var n,a;r(107),n=r(71);var u=r(145);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=u.render,a.staticRenderFns=u.staticRenderFns,a._scopeId="data-v-f022137a",e.exports=n},65:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(57),u=n(a),i=new u.default({networkInterface:(0,a.createNetworkInterface)({uri:"http://localhost:8000/graphql",transportBatching:!0}),queryTransformer:a.addTypename,dataIdFromObject:function(e){return e.id}});t.default=i},66:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={users:[{username:"marcosfederic",profilePicture:"profile picture url",photos:[{imageUrl:"url1",imageDescription:"url1 description"},{imageUrl:"url2",imageDescription:"url2 description"},{imageUrl:"url3",imageDescription:"url3 description"}]},{username:"matias",profilePicture:"profile picture url",photos:[{imageUrl:"url4",imageDescription:"url4 description"},{imageUrl:"url5",imageDescription:"url5 description"},{imageUrl:"url6",imageDescription:"url6 description"}]}]}},67:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(140),u=n(a),i=r(139),o=n(i),s=r(24),d=n(s),l=r(147),c=n(l);d.default.use(c.default);var f=[{path:"/",name:"home",component:u.default},{path:"/detail/:username",name:"detail",component:o.default}],p=new c.default({routes:f,mode:"history"});t.default=p},68:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(19);var n={},a={};t.default={state:n,mutations:a}},69:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(19);var n={},a={};t.default={state:n,mutations:a}},70:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(19);var n={},a={};t.default={state:n,mutations:a}},71:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"UserCard",props:{imageUrl:{type:String,required:!0},username:{type:String,required:!0},profilePicture:String,imageDescription:String}}},72:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:String,githubLink:String}}},73:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(30),u=n(a),i=r(137),o=n(i);t.default={store:u.default,components:{Topbar:o.default},name:"App"}},74:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(51),u=n(a),i=r(66),o=n(i);t.default={name:"Detail",components:{ImageCard:u.default},data:function(){return{userData:[]}},created:function(){var e=this;this.userData=o.default.users.filter(function(t){return t.username===e.$route.params.username})}}},75:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(78),u=n(a),i=(0,u.default)(["\n  query {\n    allImages {\n      edges {\n        node {\n          url\n          description\n        }\n      }\n    }\n  }\n"],["\n  query {\n    allImages {\n      edges {\n        node {\n          url\n          description\n        }\n      }\n    }\n  }\n"]),o=r(51),s=n(o),d=r(114),l=n(d),c=(0,l.default)(i);t.default={name:"Home",components:{ImageCard:s.default},data:function(){return{userData:[],loading:0}},apollo:{userData:{query:c,loadingKey:"loading"}}}},104:function(e,t){},105:function(e,t){},106:function(e,t){},107:function(e,t){},108:function(e,t){},137:function(e,t,r){var n,a;n=r(72);var u=r(142);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=u.render,a.staticRenderFns=u.staticRenderFns,e.exports=n},138:function(e,t,r){var n,a;r(104),n=r(73);var u=r(141);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=u.render,a.staticRenderFns=u.staticRenderFns,e.exports=n},139:function(e,t,r){var n,a;r(105),n=r(74);var u=r(143);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=u.render,a.staticRenderFns=u.staticRenderFns,e.exports=n},140:function(e,t,r){var n,a;r(106),n=r(75);var u=r(144);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=u.render,a.staticRenderFns=u.staticRenderFns,e.exports=n},141:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{directives:[{name:"md-theme",rawName:"v-md-theme",value:"default",expression:"'default'"}],staticClass:"app"},[e._h("topbar",{attrs:{title:"PinteGraphQL",githubLink:"https://github.com/marcosfede/pintegraphql"}})," ",e._h("div",{staticClass:"page"},[e._h("router-view")])])},staticRenderFns:[]}},142:function(e,t){e.exports={render:function(){var e=this;return e._h("md-toolbar",[e._h("md-button",{staticClass:"md-icon-button"},[e._h("md-icon",["menu"])])," ",e._h("h2",{staticClass:"md-title",attrs:{style:"flex: 1"}},[e._s(e.title)])," ",e._h("md-button",{staticClass:"md-icon-button",attrs:{href:e.githubLink}},[e._h("md-icon",["done"])])])},staticRenderFns:[]}},143:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"detail"}},[e._l(e.userData,function(t){return[e._h("image-card",{attrs:{username:t.username,imageUrl:t.imageUrl}})]})," ",e._h("router-link",{attrs:{to:"/"}},[e._h("md-button",{staticClass:"md-raised"},["Home View"])])])},staticRenderFns:[]}},144:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"home"}},[e._h("div",{staticClass:"md-display-3",attrs:{id:"card-block"}},[e._l(e.userData,function(t){return[e._h("image-card",{attrs:{username:t.username,imageUrl:t.imageUrl}})]})])])},staticRenderFns:[]}},145:function(e,t){e.exports={render:function(){var e=this;return e._h("md-card",{attrs:{"md-with-hover":""}},[e._h("md-card-header",[e._h("router-link",{attrs:{to:"/detail/"+e.username}},[e._h("md-avatar",[e._m(0)])])," ",e._h("div",{staticClass:"md-title"},[e._s(e.imageDescription)])," ",e._h("div",{staticClass:"md-subhead"},[e._s(e.username)])])," ",e._h("md-card-media",[e._m(1)])," ",e._h("md-card-actions",[e._h("md-button",["Action"])," ",e._h("md-button",["Action"])])])},staticRenderFns:[function(){var e=this;return e._h("img",{attrs:{src:"http://placehold.it/50x50",alt:"thumbnail"}})},function(){var e=this;return e._h("img",{attrs:{src:"http://placehold.it/192x108",alt:"Image"}})}]}}});
//# sourceMappingURL=app.b0b3b93373abc644fa2a.js.map