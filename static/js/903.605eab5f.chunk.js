"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[903],{903:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(439),c=e(791),o=e(689),u=e(240),s=e(168),i=e(444).ZP.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  margin: 30px auto 0px auto;\n  padding: 0;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-contect: center;\n\n  li {\n\n    width: 175px;\n    margin-right: 60px;\n    margin-bottom: 30px;\n   \n    text-align: center;\n    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.65);\n    border-radius: 8px;\n  }\n  }\n  img {\n    width: 100%;\n    display: block;\n    height: 260px;\n  }\n  p {\n    font-size: 28px;\n  }\n"]))),p=e(184),l=function(){var n=(0,o.UO)().id,t=(0,c.useState)(null),e=(0,a.Z)(t,2),r=e[0],s=e[1];return(0,c.useEffect)((function(){(0,u.bR)(n).then((function(n){s(n.cast.slice(0,10)),console.log(n.cast)}))}),[n]),console.log(r),(0,p.jsx)(p.Fragment,{children:r&&(0,p.jsx)(i,{children:r.map((function(n){var t=n.actor_id,e=n.name,r=n.character,a=n.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:a?"".concat("https://image.tmdb.org/t/p/w500/").concat(a):"https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png",alt:"actor"}),(0,p.jsx)("p",{children:e}),(0,p.jsxs)("p",{children:["Character: ",r]})]},t)}))})})}},240:function(n,t,e){e.d(t,{Hg:function(){return s},Hq:function(){return x},Jh:function(){return d},bR:function(){return f},eP:function(){return p}});var r=e(861),a=e(757),c=e.n(a),o=e(243),u="3e3ad9f3df7eb6b26866aac5eb47fa16";function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/trending/movie/day?api_key=".concat(u));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=903.605eab5f.chunk.js.map