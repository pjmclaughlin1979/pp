(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/UnknownLayer":1495})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1495:function(e,n,o){var r,t;r=[o.dj.c(e.i),n,o(2),o(1),o(13),o(214),o(9),o(57),o(0),o(126),o(260)],void 0===(t=function(e,n,o,r,t,i,p,s,a,u,y){return function(e){function n(n){var o=e.call(this)||this;return o.resourceInfo=null,o.type="unknown",o}return o(n,e),n.prototype.initialize=function(){var e=this;this.addResolvingPromise(p.create(function(n,o){s.schedule(function(){var n=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),r="Unknown layer type";n&&(r+=" "+n),o(new t("layer:unknown-layer-type",r,{layerType:n}))})}))},n.prototype.read=function(e,n){this.inherited(arguments,[{resourceInfo:e},n])},n.prototype.write=function(e,n){return null},r([a.shared("esri.layers.UnknownLayer")],n.prototype,"declaredClass",void 0),r([a.property({readOnly:!0})],n.prototype,"resourceInfo",void 0),r([a.property({type:["show","hide"]})],n.prototype,"listMode",void 0),r([a.property({json:{read:!1},readOnly:!0,value:"unknown"})],n.prototype,"type",void 0),r([a.subclass()],n)}(a.declared(u,i,y))}.apply(null,r))||(e.exports=t)}}]);