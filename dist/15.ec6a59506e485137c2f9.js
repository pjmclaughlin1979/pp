(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/TileLayerView2D":1467,"esri/core/HandleOwner":1503,"esri/views/layers/LayerView":1504,"esri/views/layers/RefreshableLayerView":1508,"esri/views/2d/engine/Container":1510,"esri/views/2d/layers/LayerView2D":1512,"esri/views/2d/tiling/TileStrategy":1524,"esri/renderers/support/clickToleranceUtils":1525,"esri/views/2d/tiling":1594,"esri/views/2d/layers/support/popupUtils2D":1633,"esri/views/2d/engine/BitmapTile":1686,"esri/views/layers/TileLayerView":1688})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1467:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(13),i(9),i(0),i(1555),i(1686),i(1512),i(1633),i(1521),i(352),i(1541),i(1524),i(1688)],void 0===(n=function(e,t,i,r,n,o,s,l,a,u,h,p,c,d,f,y){var v=[0,0];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileStrategy=null,t._tileInfoView=null,t._fetchQueue=null,t._tileRequests=new Map,t.container=new l.BitmapContainer,t.layer=null,t}return i(t,e),t.prototype.initialize=function(){var e,t=this,i=this.layer.tileInfo,r=i&&i.spatialReference;r||(e=new n("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),r.equals(this.view.spatialReference)||(e=new n("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",function(e){t.refresh()}),e&&this.addResolvingPromise(o.reject(e))},Object.defineProperty(t.prototype,"resampling",{get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this._tileInfoView=new p(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new d({tileInfoView:this._tileInfoView,tileServers:"tileServers"in this.layer?this.layer.tileServers:null,concurrency:this.layer.url&&-1!==this.layer.url.indexOf("tiles.arcgis.com")?12:6,process:function(t,i){return e.fetchTile(t,i)}}),this._tileStrategy=new f({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView})},t.prototype.detach=function(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return h.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){var e=this;this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(t){return e._enqueueTileFetch(t)}),this.notifyChange("updating"))},t.prototype.isUpdating=function(){var e=!0;return this._tileRequests.forEach(function(t){e=e&&t.isFulfilled()}),!e},t.prototype.getTileBounds=function(e,t){return this._tileInfoView.getTileBounds(e,t)},t.prototype.getTileCoords=function(e,t){return this._tileInfoView.getTileCoords(e,t)},t.prototype.getTileResolution=function(e){return this._tileInfoView.getTileResolution(e)},t.prototype.acquireTile=function(e){var t,i,r=a.BitmapTile.pool.acquire();return r.key.set(e),t=this._tileInfoView.getTileCoords(v,r.key),r.x=t[0],r.y=t[1],r.resolution=this._tileInfoView.getTileResolution(r.key),i=this._tileInfoView.tileInfo.size,r.width=i[0],r.height=i[1],this._enqueueTileFetch(r),this.requestUpdate(),r},t.prototype.releaseTile=function(e){var t=this,i=this._tileRequests.get(e);i&&!i.isFulfilled()&&i.cancel(),this._tileRequests.delete(e),this.container.removeChild(e),e.once("detach",function(){a.BitmapTile.pool.release(e),t.requestUpdate()}),this.requestUpdate()},t.prototype.fetchTile=function(e,t){var i=this,r="tilemapCache"in this.layer?this.layer.tilemapCache:null;if(!r)return this._fetchImage(e).catch(function(e){if(!i.resampling)return i._createBlankImage();throw e});var n=c.pool.acquire();return r.fetchAvailabilityUpsample(e.level,e.row,e.col,n).then(function(){return n.level===e.level||i.resampling?i._fetchImage(n):i._createBlankImage()}).catch(function(t){if("AbortError"===t.name)throw t;return i._fetchImage(e)}).then(function(t){return i.resampling&&n.level!==e.level?i._resampleImage(t,n.level,n.row,n.col,e.level,e.row,e.col):t})},t.prototype._enqueueTileFetch=function(e){var t=this;if(!this._fetchQueue.has(e.key)){var i=this._fetchQueue.push(e.key).then(function(i){e.source=i,e.width=t._tileInfoView.tileInfo.size[0],e.height=t._tileInfoView.tileInfo.size[1],e.once("attach",function(){return t.requestUpdate()}),t.container.addChild(e),t.requestUpdate()});this._tileRequests.set(e,i)}},t.prototype._fetchImage=function(e){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp})},t.prototype._resampleImage=function(e,t,i,r,n,o,s){var l=this._tileInfoView.tileInfo.size,a=this._tileInfoView.getTileResolution(t),u=this._tileInfoView.getTileResolution(n),h=this._tileInfoView.getLODInfoAt(n),p=h.getXForColumn(s),c=h.getYForRow(o),d=(h=this._tileInfoView.getLODInfoAt(t)).getXForColumn(r),f=h.getYForRow(i),y=Math.round((p-d)/a),v=Math.round(-(c-f)/a),g=Math.round(l[0]*(u/a)),m=Math.round(l[1]*(u/a)),w=this._createBlankImage();return w.getContext("2d").drawImage(e,y,v,g,m,0,0,l[0],l[1]),w},t.prototype._createBlankImage=function(){var e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return t.width=e[0],t.height=e[1],t},r([s.property({dependsOn:["layer.resampling?"]})],t.prototype,"resampling",null),r([s.subclass("esri.views.2d.layers.TileLayerView2D")],t)}(s.declared(u,y))}.apply(null,r))||(e.exports=n)},1503:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(17),i(0)],void 0===(n=function(e,t,i,r,n,o,s){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.call(this)||this;return r.handles=new o,r}return i(t,e),t.prototype.destroy=function(){this.handles.destroy()},r([s.property({readOnly:!0})],t.prototype,"handles",void 0),r([s.subclass("esri.core.HandleOwner")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1504:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(48),i(1503),i(210),i(10),i(209),i(9),i(0)],void 0===(n=function(e,t,i,r,n,o,s,l,a,u,h){return function(e){function t(t){var i=e.call(this)||this;return i.layer=null,i.parent=null,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return l.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),u.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([h.property()],t.prototype,"layer",void 0),r([h.property()],t.prototype,"parent",void 0),r([h.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([h.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([h.property()],t.prototype,"view",void 0),r([h.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([h.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([h.subclass("esri.views.layers.LayerView")],t)}(h.declared(o,n,s.Identifiable,a))}.apply(null,r))||(e.exports=n)},1508:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(6),i(0)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return i(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},r([o.property()],t.prototype,"layer",void 0),r([o.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),r([o.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),r([o.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(o.declared(n))}.apply(null,r))||(e.exports=n)},1510:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(548)],void 0===(n=function(e,t,i,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenSet=new Set,t._childrenToAttach=[],t._childrenToDetach=[],t._renderPhase=3,t.children=[],t}return i(t,e),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t.prototype.detach=function(){for(var e=0,t=this.children.concat(this._childrenToDetach);e<t.length;e++){var i=t[e];i.attached&&(this.detachChild(i),i.attached=!1,i.parent=null)}},t.prototype.doRender=function(e){var t=e.globalOpacity;e.globalOpacity*=this.opacity,this._renderPhase=0,this.attachChildren(),this._renderPhase=1;for(var i=this._childrenToDetach;i.length>0;){var r=i.shift();this.detachChild(r),r.attached=!1,r.parent=null,r.stage=null}this._renderPhase=2,this.renderChildren(e),this._renderPhase=3,e.globalOpacity=t},t.prototype.addChild=function(e){return this.addChildAt(e,this.children.length)},t.prototype.addChildAt=function(e,t){if(void 0===t&&(t=this.numChildren),!e)return e;if(this.contains(e))return e;var i=e.parent;i&&i!==this&&i.removeChild(e),t>=this.numChildren?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e);var r=this._childrenToDetach.indexOf(e);return r>-1&&this._childrenToDetach.splice(r,1),this._childrenToAttach.push(e),this._renderPhase>=2&&this.requestRender(),e},t.prototype.contains=function(e){return this._childrenSet.has(e)},t.prototype.getChildIndex=function(e){return this.children.indexOf(e)},t.prototype.getChildAt=function(e){return e<0||e>this.children.length?null:this.children[e]},t.prototype.removeAllChildren=function(){for(var e=this.numChildren;e--;)this.removeChildAt(0)},t.prototype.removeChild=function(e){return this.contains(e)?this.removeChildAt(this.getChildIndex(e)):e},t.prototype.removeChildAt=function(e){var t;if(e<0||e>=this.children.length)return null;if(t=this.children.splice(e,1)[0],function(e,t){e.delete(t)}(this._childrenSet,t),t.attached)this._childrenToDetach.push(t),this._renderPhase>=2&&this.requestRender();else{var i=this._childrenToAttach.indexOf(t);i>-1&&this._childrenToAttach.splice(i,1)}return t},t.prototype.requestChildRender=function(e){e&&e.parent===this&&this._renderPhase>=2&&this.requestRender()},t.prototype.setChildIndex=function(e,t){var i=this.getChildIndex(e);i>-1&&(this.children.splice(i,1),this.children.splice(t,0,e),this._renderPhase>=2&&this.requestRender())},t.prototype.sortChildren=function(e){return this._renderPhase>2&&this.requestRender(),this.children.sort(e)},t.prototype.attachChildren=function(){var e=this._childrenToAttach;if(0!==e.length)for(var t=0,i=!1;!i;){var r=e[t];r.parent=this,r.stage=this.stage,this.attachChild(r)?(r.attached=!0,e.splice(t,1)):++t,i=e.length===t}},t.prototype.renderChildren=function(e){for(var t=this.children,i=t.length,r=0;r<i;r++)t[r].processRender(e)},t.prototype.attachChild=function(e){return e.attach()},t.prototype.detachChild=function(e){e.detach()},t}(r.DisplayObject);t.Container=n}.apply(null,r))||(e.exports=n)},1512:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(21),i(0),i(1504)],void 0===(n=function(e,t,i,r,n,o,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.lastUpdateId=-1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()});var t=function(){return e.notifyChange("rendering")};this.handles.add([n.init(this,"suspended",function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),n.init(this,"fullOpacity",function(t){e.container&&(e.container.opacity=t)},!0),n.on(this,"container","post-render",t),n.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var o=!r,s=!n;!o&&e<=r&&(o=!0),!s&&e>=n&&(s=!0),t=o&&s}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([o.property()],t.prototype,"attached",void 0),r([o.property()],t.prototype,"container",void 0),r([o.property()],t.prototype,"moving",void 0),r([o.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([o.property()],t.prototype,"updateRequested",void 0),r([o.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([o.property()],t.prototype,"view",void 0),r([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(o.declared(s))}.apply(null,r))||(e.exports=n)},1524:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(352)],void 0===(n=function(e,t,i,r){function n(e,t){e.delete(t)}var o=new r(0,0,0,0),s=new Map,l=[],a=[];return function(){function e(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.resampling,r=this.tileIndex,u=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(a.length=0,l.length=0,s.clear(),u){var h=this.tileInfoView.tileInfo,p=h.minScale,c=h.maxScale,d=u.spans,f=u.lodInfo,y=f.level,v=e.state.scale,g=!e.stationary&&v>this._previousScale;if(this._previousScale=v,this.tiles.length=0,!i&&(v>p||v<c))return this.tiles.length=0,s.clear(),r.forEach(function(e){t.releaseTile(e)}),r.clear(),a.length=0,l.length=0,s.clear(),!0;r.forEach(function(e){return e.visible=!0});var m=0,w=0;if(d.length>0)for(var _=0,b=d;_<b.length;_++)for(var T=b[_],I=T.row,R=T.colFrom,q=T.colTo,C=R;C<=q;C++){m++;var x=o.set(y,I,f.normalizeCol(C),f.getWorldForColumn(C)).id;if(r.has(x)){(P=r.get(x)).isReady?(s.set(x,P),w++):g||this._addParentTile(x,s)}else{var P=this.acquireTile(o);this.tileIndex.set(x,P),g||this._addParentTile(x,s)}}var O=w===m;r.forEach(function(e,i){if(o.set(i),!s.has(i)){var r=t.tileInfoView.intersects(u,o);if(!r||!g&&O)if("purge"===t.cachePolicy){!(o.level!==y)&&r||l.push(i)}else(o.level>y||!r)&&l.push(i);else e.isReady?a.push(i):o.level>y&&l.push(i)}});for(var V=0,S=a;V<S.length;V++){x=S[V];(P=r.get(x))&&P.isReady&&s.set(x,P)}for(var j=0,F=l;j<F.length;j++){x=F[j],P=r.get(x);this.releaseTile(P),n(r,x)}return s.forEach(function(e){return t.tiles.push(e)}),r.forEach(function(e){s.has(e.key.id)||(e.visible=!1)}),O}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;i=this.tileInfoView.getTileParentId(i);)if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i))&&r.isReady){t.has(r.key.id)||t.set(r.key.id,r);break}},e}()}.apply(null,r))||(e.exports=n)},1525:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){function i(e,t){return t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):t&&t.yoffset?Math.max(e,Math.abs(t.yoffset)):e}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){if(!e)return 6;if("simple"===e.type)return i(6,e.symbol);if("unique-value"===e.type){var t=6;return e.uniqueValueInfos.forEach(function(e){t=i(t,e.symbol)}),t}if("class-breaks"===e.type){var r=6;return e.classBreakInfos.forEach(function(e){r=i(r,e.symbol)}),r}return e.type,6}}.apply(null,r))||(e.exports=n)},1594:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1521),i(352),i(1541),i(1524)],void 0===(n=function(e,t,i,r,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.TileInfoView=i,t.TileKey=r,t.TileQueue=n,t.TileStrategy=o}.apply(null,r))||(e.exports=n)},1633:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(1),i(35)],void 0===(n=function(e,t,i,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=function(e,t,i){var r=i.get("state.resolution"),o=t*("number"==typeof r?r:1),s=e.clone().offset(-o,-o),l=e.clone().offset(o,o),a=i.spatialReference;return new n({xmin:Math.min(s.x,l.x),ymin:Math.min(s.y,l.y),xmax:Math.max(s.x,l.x),ymax:Math.max(s.y,l.y),spatialReference:a})}}.apply(null,r))||(e.exports=n)},1686:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(5),i(1),i(80),i(1594),i(1595),i(1687)],void 0===(n=function(e,t,i,r,n,o,s,l){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var i=e.call(this,t)||this;return i.key=new o.TileKey(0,0,0,0),i}return i(t,e),t.prototype.acquire=function(e){},t.prototype.release=function(){this.key.set(0,0,0,0),this.source=null},t.pool=new n(t,!0),t}(l(s.Bitmap));t.BitmapTile=a}.apply(null,r))||(e.exports=n)},1688:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(22),i(25),i(13),i(9),i(0),i(1525),i(1508)],void 0===(n=function(e,t,i,r,n,o,s,l,a,u,h){return function(e){function t(t){return e.call(this,t)||this}return i(t,e),t.prototype.fetchPopupFeatures=function(e){return o(this,void 0,void 0,function(){var t,i,r,a=this;return n(this,function(h){return t=this.layer,e?"tile"!==t.type?[2,l.reject(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:t.type}))]:(i=this.get("view.scale"),r=t.allSublayers.toArray().filter(function(e){var t=0===e.minScale||i<=e.minScale,r=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r}),[2,l.eachAlways(r.map(function(t){return o(a,void 0,void 0,function(){var i,r,o;return n(this,function(n){switch(n.label){case 0:return i=t.createQuery(),r=u.calculateTolerance(t.renderer),i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,r),o=i,[4,t.popupTemplate.getRequiredFields()];case 1:return o.outFields=n.sent(),[4,t.queryFeatures(i)];case 2:return[2,n.sent().features]}})})})).then(function(e){return[].concat.apply([],e.map(function(e){return e.value}).filter(Boolean))})]):[2,l.reject(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))]})})},r([a.property()],t.prototype,"layer",void 0),r([a.subclass("esri.views.layers.TileLayerView")],t)}(a.declared(h))}.apply(null,r))||(e.exports=n)}}]);