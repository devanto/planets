(this.webpackJsonpplanets=this.webpackJsonpplanets||[]).push([[0],{16:function(e,t,a){e.exports=a(24)},24:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(14),s=a.n(i),l=a(7),c=a(8),o=a(12),u=a(11),m=a(26),v=a(27),p=a(28),f=a(29),h=a(30),d=a(31),g=a(32),E=a(33),b=a(34),k=a(35),y=a(3),F=a.n(y),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(l.a)(this,a),(r=t.call(this,e,n)).toggle=function(e){r.state.activeTab!==e&&r.setState({activeTab:e})},r.state={planets:[],activeTab:"1"},r}return Object(c.a)(a,[{key:"toggleFav",value:function(e){this.setState({planets:this.state.planets.map((function(t){return t.id===e?{id:t.id,isFavourite:!t.isFavourite,name:t.name}:t}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container",style:{padding:"20px 15px"}},r.a.createElement(m.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement(p.a,{className:F()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")},style:{cursor:"pointer"}},"Planets")),r.a.createElement(v.a,null,r.a.createElement(p.a,{className:F()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")},style:{cursor:"pointer"}},"Favourites"))),r.a.createElement(f.a,{activeTab:this.state.activeTab},r.a.createElement(h.a,{tabId:"1"},r.a.createElement(d.a,null,r.a.createElement(g.a,{sm:"12"},r.a.createElement(E.a,null,this.state.planets.map((function(t){var a=t.name,n="Mark as favourite";return t.isFavourite&&(n="Remove from favourites"),r.a.createElement(b.a,{className:"justify-content-between",key:t.id},a," ",t.isFavourite,r.a.createElement(k.a,{size:"sm",onClick:function(){return e.toggleFav(t.id)}},n))})))))),r.a.createElement(h.a,{tabId:"2"},r.a.createElement(d.a,null,r.a.createElement(g.a,{sm:"12"},this.state.planets.filter((function(e){return e.isFavourite})).length>0&&r.a.createElement(E.a,null,this.state.planets.map((function(e){return e.isFavourite?r.a.createElement(b.a,{key:e.id},e.name):null}))),this.state.planets.filter((function(e){return e.isFavourite})).length<1&&r.a.createElement("div",null,"No favourites added"))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0===t.planets.length?{planets:e.planets}:null}}]),a}(r.a.Component),O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={planets:[],isLoading:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.planets&&fetch(" https://assignment-machstatz.herokuapp.com/planet").then((function(e){return e.json()})).then((function(t){return e.setState({planets:t,isLoading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return e=this.state.isLoading?r.a.createElement("div",null,"Page is Loading..."):r.a.createElement(j,{planets:this.state.planets}),r.a.createElement("div",null,e)}}]),a}(r.a.Component);a(23);s.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cc944ef0.chunk.js.map