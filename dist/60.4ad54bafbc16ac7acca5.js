(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/HandleOwner":1503,"esri/views/layers/LayerView":1504,"esri/views/layers/RefreshableLayerView":1508,"esri/views/2d/engine/Container":1510,"esri/views/2d/layers/LayerView2D":1512,"esri/views/2d/tiling/TileStrategy":1524,"esri/views/2d/layers/WMTSLayerView2D":2272,"esri/views/2d/layers/support/BitmapTile":2273})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1503:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(17),i(0)],void 0===(n=function(e,t,i,r,n,s,o){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.call(this)||this;return r.handles=new s,r}return i(t,e),t.prototype.destroy=function(){this.handles.destroy()},r([o.property({readOnly:!0})],t.prototype,"handles",void 0),r([o.subclass("esri.core.HandleOwner")],t)}(o.declared(n))}.apply(null,r))||(e.exports=n)},1504:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(48),i(1503),i(210),i(10),i(209),i(9),i(0)],void 0===(n=function(e,t,i,r,n,s,o,a,l,h,u){return function(e){function t(t){var i=e.call(this)||this;return i.layer=null,i.parent=null,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),h.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([u.property()],t.prototype,"layer",void 0),r([u.property()],t.prototype,"parent",void 0),r([u.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([u.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([u.property()],t.prototype,"view",void 0),r([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([u.subclass("esri.views.layers.LayerView")],t)}(u.declared(s,n,o.Identifiable,l))}.apply(null,r))||(e.exports=n)},1508:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(0)],void 0===(n=function(e,t,i,r,n,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return i(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},r([s.property()],t.prototype,"layer",void 0),r([s.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),r([s.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),r([s.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1510:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(548)],void 0===(n=function(e,t,i,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenSet=new Set,t._childrenToAttach=[],t._childrenToDetach=[],t._renderPhase=3,t.children=[],t}return i(t,e),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t.prototype.detach=function(){for(var e=0,t=this.children.concat(this._childrenToDetach);e<t.length;e++){var i=t[e];i.attached&&(this.detachChild(i),i.attached=!1,i.parent=null)}},t.prototype.doRender=function(e){var t=e.globalOpacity;e.globalOpacity*=this.opacity,this._renderPhase=0,this.attachChildren(),this._renderPhase=1;for(var i=this._childrenToDetach;i.length>0;){var r=i.shift();this.detachChild(r),r.attached=!1,r.parent=null,r.stage=null}this._renderPhase=2,this.renderChildren(e),this._renderPhase=3,e.globalOpacity=t},t.prototype.addChild=function(e){return this.addChildAt(e,this.children.length)},t.prototype.addChildAt=function(e,t){if(void 0===t&&(t=this.numChildren),!e)return e;if(this.contains(e))return e;var i=e.parent;i&&i!==this&&i.removeChild(e),t>=this.numChildren?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e);var r=this._childrenToDetach.indexOf(e);return r>-1&&this._childrenToDetach.splice(r,1),this._childrenToAttach.push(e),this._renderPhase>=2&&this.requestRender(),e},t.prototype.contains=function(e){return this._childrenSet.has(e)},t.prototype.getChildIndex=function(e){return this.children.indexOf(e)},t.prototype.getChildAt=function(e){return e<0||e>this.children.length?null:this.children[e]},t.prototype.removeAllChildren=function(){for(var e=this.numChildren;e--;)this.removeChildAt(0)},t.prototype.removeChild=function(e){return this.contains(e)?this.removeChildAt(this.getChildIndex(e)):e},t.prototype.removeChildAt=function(e){var t;if(e<0||e>=this.children.length)return null;if(t=this.children.splice(e,1)[0],function(e,t){e.delete(t)}(this._childrenSet,t),t.attached)this._childrenToDetach.push(t),this._renderPhase>=2&&this.requestRender();else{var i=this._childrenToAttach.indexOf(t);i>-1&&this._childrenToAttach.splice(i,1)}return t},t.prototype.requestChildRender=function(e){e&&e.parent===this&&this._renderPhase>=2&&this.requestRender()},t.prototype.setChildIndex=function(e,t){var i=this.getChildIndex(e);i>-1&&(this.children.splice(i,1),this.children.splice(t,0,e),this._renderPhase>=2&&this.requestRender())},t.prototype.sortChildren=function(e){return this._renderPhase>2&&this.requestRender(),this.children.sort(e)},t.prototype.attachChildren=function(){var e=this._childrenToAttach;if(0!==e.length)for(var t=0,i=!1;!i;){var r=e[t];r.parent=this,r.stage=this.stage,this.attachChild(r)?(r.attached=!0,e.splice(t,1)):++t,i=e.length===t}},t.prototype.renderChildren=function(e){for(var t=this.children,i=t.length,r=0;r<i;r++)t[r].processRender(e)},t.prototype.attachChild=function(e){return e.attach()},t.prototype.detachChild=function(e){e.detach()},t}(r.DisplayObject);t.Container=n}.apply(null,r))||(e.exports=n)},1512:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(21),i(0),i(1504)],void 0===(n=function(e,t,i,r,n,s,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.lastUpdateId=-1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()});var t=function(){return e.notifyChange("rendering")};this.handles.add([n.init(this,"suspended",function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),n.init(this,"fullOpacity",function(t){e.container&&(e.container.opacity=t)},!0),n.on(this,"container","post-render",t),n.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var s=!r,o=!n;!s&&e<=r&&(s=!0),!o&&e>=n&&(o=!0),t=s&&o}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([s.property()],t.prototype,"attached",void 0),r([s.property()],t.prototype,"container",void 0),r([s.property()],t.prototype,"moving",void 0),r([s.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([s.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([s.property()],t.prototype,"updateRequested",void 0),r([s.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([s.property()],t.prototype,"view",void 0),r([s.subclass("esri.views.2d.layers.LayerView2D")],t)}(s.declared(o))}.apply(null,r))||(e.exports=n)},1524:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(352)],void 0===(n=function(e,t,i,r){function n(e,t){e.delete(t)}var s=new r(0,0,0,0),o=new Map,a=[],l=[];return function(){function e(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.resampling,r=this.tileIndex,h=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(l.length=0,a.length=0,o.clear(),h){var u=this.tileInfoView.tileInfo,p=u.minScale,d=u.maxScale,c=h.spans,f=h.lodInfo,y=f.level,v=e.state.scale,g=!e.stationary&&v>this._previousScale;if(this._previousScale=v,this.tiles.length=0,!i&&(v>p||v<d))return this.tiles.length=0,o.clear(),r.forEach(function(e){t.releaseTile(e)}),r.clear(),l.length=0,a.length=0,o.clear(),!0;r.forEach(function(e){return e.visible=!0});var w=0,_=0;if(c.length>0)for(var b=0,m=c;b<m.length;b++)for(var R=m[b],T=R.row,I=R.colFrom,q=R.colTo,C=I;C<=q;C++){w++;var O=s.set(y,T,f.normalizeCol(C),f.getWorldForColumn(C)).id;if(r.has(O)){(x=r.get(O)).isReady?(o.set(O,x),_++):g||this._addParentTile(O,o)}else{var x=this.acquireTile(s);this.tileIndex.set(O,x),g||this._addParentTile(O,o)}}var S=_===w;r.forEach(function(e,i){if(s.set(i),!o.has(i)){var r=t.tileInfoView.intersects(h,s);if(!r||!g&&S)if("purge"===t.cachePolicy){!(s.level!==y)&&r||a.push(i)}else(s.level>y||!r)&&a.push(i);else e.isReady?l.push(i):s.level>y&&a.push(i)}});for(var P=0,V=l;P<V.length;P++){O=V[P];(x=r.get(O))&&x.isReady&&o.set(O,x)}for(var M=0,j=a;M<j.length;M++){O=j[M],x=r.get(O);this.releaseTile(x),n(r,O)}return o.forEach(function(e){return t.tiles.push(e)}),r.forEach(function(e){o.has(e.key.id)||(e.visible=!1)}),S}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;i=this.tileInfoView.getTileParentId(i);)if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i))&&r.isReady){t.has(r.key.id)||t.set(r.key.id,r);break}},e}()}.apply(null,r))||(e.exports=n)},2272:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(17),i(0),i(44),i(1555),i(1512),i(2273),i(1521),i(1541),i(1524),i(1508)],void 0===(n=function(e,t,i,r,n,s,o,a,l,h,u,p,d,c){var f=[102113,102100,3857,3785,900913];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t._tileStrategy=null,t._tileInfoView=null,t._fetchQueue=null,t._tileRequests=new Map,t.container=new a.BitmapContainer,t.layer=null,t}return i(t,e),Object.defineProperty(t.prototype,"tileMatrixSet",{get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer.activeLayer,i=this.tileMatrixSet;if(i){var r=i.tileInfo.spatialReference,n=t.fullExtent&&t.fullExtent.clone();r.isWebMercator?n=o.geographicToWebMercator(n):r.isWGS84||(n=i.fullExtent),this._tileInfoView=new u(i.tileInfo,n),this._fetchQueue=new p({tileInfoView:this._tileInfoView,process:function(t){return e.fetchTile(t)}}),this._tileStrategy=new d({cachePolicy:"keep",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",function(){return e._refresh()}))}},t.prototype.detach=function(){this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.updateRequested||this.suspended||this._refresh()},t.prototype.isUpdating=function(){var e=!0;return this._tileRequests.forEach(function(t){e=e&&t.isFulfilled()}),!e},t.prototype.acquireTile=function(e){var t,i=this,r=h.default.pool.acquire();r.key.set(e),r.resolution=this._tileInfoView.getTileResolution(r.key),t=this._tileInfoView.tileInfo.size,r.width=t[0],r.height=t[1],this._tileInfoView.getTileCoords(r,r.key);var n=this._fetchQueue.push(r.key).then(function(e){r.source=e,r.once("attach",function(){return i.requestUpdate()}),i.container.addChild(r)});return this._tileRequests.set(r,n),this.requestUpdate(),r},t.prototype.releaseTile=function(e){var t=this._tileRequests.get(e);t.isFulfilled()||t.cancel(),this._tileRequests.delete(e),this.container.removeChild(e),this.requestUpdate()},t.prototype.fetchTile=function(e){return this.layer.fetchTile(e.level,e.row,e.col)},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?null!==this.tileMatrixSet:e},t.prototype._refresh=function(){var e=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(t){if(t.source){t.source=null;var i=e._fetchQueue.push(t.key).then(function(i){t.source=i,t.requestRender(),e.notifyChange("updating")});e._tileRequests.set(t,i)}}),this.notifyChange("updating")},t.prototype._getTileMatrixSetBySpatialReference=function(e){var t=this.view.spatialReference,i=e.tileMatrixSets.find(function(e){return e.tileInfo.spatialReference.wkid===t.wkid});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(function(e){return f.indexOf(e.tileInfo.spatialReference.wkid)>-1})),i},r([s.property({dependsOn:["tileMatrixSet"]})],t.prototype,"suspended",void 0),r([s.property({readOnly:!0,dependsOn:["view.spatialReference","layer.activeLayer"]})],t.prototype,"tileMatrixSet",null),r([s.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",void 0),r([s.subclass("esri.views.2d.layers.WMTSLayerView2D")],t)}(s.declared(l,c))}.apply(null,r))||(e.exports=n)},2273:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(80),i(1595),i(1687),i(352)],void 0===(n=function(e,t,i,r,n,s,o){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var i=e.call(this,t)||this;return i.key=new o(0,0,0,0),i}return i(t,e),t.prototype.acquire=function(e){},t.prototype.release=function(){this.key.set(0,0,0,0)},t.pool=new r(t,!0),t}(s(n.Bitmap));t.BitmapTile=a,t.default=a}.apply(null,r))||(e.exports=n)}}]);