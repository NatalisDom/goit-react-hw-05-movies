"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{396:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,i,o,s,p=t(439),u=t(689),l=t(791),d=t(240),x=t(168),h=t(444),f=t(87),v=(0,h.ZP)(f.rU)(r||(r=(0,x.Z)(["\n  font-size: 28px;\n  font-weight: 700;\n  text-decoration: none;\n  color: #d54c0c;\n"]))),g=h.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n\n  img {\n    margin-top: 30px;\n    margin-right: 30px;\n    box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.65);\n  }\n\n  div {\n    h1 {\n      font-size: 36px;\n      margin-top: 30px;\n    }\n\n    h2 {\n      font-size: 28px;\n      margin-top: 30px;\n      font-weight: 700;\n    }\n  }\n  p {\n    font-size: 24px;\n    margin-top: 30px;\n  }\n"]))),m=h.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  span {\n    margin-top: 30px;\n    font-size: 24px;\n  }\n"]))),b=h.ZP.div(i||(i=(0,x.Z)(["\n \n  h3 {\n    margin-top: 30px;\n    font-size: 28px;\n  }\n"]))),w=(0,h.ZP)(f.OL)(o||(o=(0,x.Z)(["\n  border-radius: 10px;\n  border: 1px solid blue;\n\n  color: blue;\n  padding: 4px 12px;\n\n  text-decoration: none;\n  font-size: 22px;\n\n  box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.65);\n  &.active {\n    color: yellow;\n    background-color: blue;\n  }\n"]))),j=h.ZP.ul(s||(s=(0,x.Z)(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  li {\n    margin-right: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),Z=t(184),y=function(){var n,e,t=(0,u.UO)().id,r=(0,l.useState)(null),a=(0,p.Z)(r,2),c=a[0],i=a[1];(0,l.useEffect)((function(){(0,d.eP)(t).then((function(n){i(n)}))}),[t]);var o=null!==(n=null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(v,{to:o,children:" \u2190 Go back"}),c&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(g,{children:[(0,Z.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(c.poster_path),alt:c.title}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h1",{children:c.title}),(0,Z.jsxs)("p",{children:["User Score: ",Math.round(10*c.vote_average),"%"]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:c.overview}),(0,Z.jsx)("h2",{children:"Genres"}),c&&(0,Z.jsx)(m,{children:c.genres.map((function(n){return(0,Z.jsx)("span",{children:n.name},n.id)}))})]})]}),(0,Z.jsx)("hr",{}),(0,Z.jsxs)(b,{children:[(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsxs)(j,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(w,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(w,{to:"reviews",children:"Reviews"})})]})]}),(0,Z.jsx)(u.j3,{})]})]})}},240:function(n,e,t){t.d(e,{Hg:function(){return s},Hq:function(){return v},Jh:function(){return h},bR:function(){return d},eP:function(){return u}});var r=t(861),a=t(757),c=t.n(a),i=t(243),o="3e3ad9f3df7eb6b26866aac5eb47fa16";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/trending/movie/day?api_key=".concat(o));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function u(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=396.de194bde.chunk.js.map