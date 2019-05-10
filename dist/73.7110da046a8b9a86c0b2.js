(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/draw/support/GraphicMover":1469,"esri/views/draw/support/Box":1501,"esri/views/draw/support/drawUtils":1547,"esri/views/draw/support/input/GraphicMoverEvents":1635})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[73,80],{1469:function(t,e,i){var r,a;r=[i.dj.c(t.i),e,i(2),i(1),i(6),i(48),i(17),i(14),i(21),i(0),i(1547),i(1635)],void 0===(a=function(t,e,i,r,a,n,o,h,s,c,p,l){return function(t){function e(e){var i=t.call(this,e)||this;return i._activeGraphic=null,i._dragEvent=null,i._handles=new o,i._hoverGraphic=null,i._initialDragGeometry=null,i._pointerDownEvent=null,i._viewHandles=new o,i.type="graphic-mover",i.callbacks={onGraphicClick:function(t){},onGraphicDoubleClick:function(t){},onGraphicMoveStart:function(t){},onGraphicMove:function(t){},onGraphicMoveStop:function(t){},onGraphicPointerOver:function(t){},onGraphicPointerOut:function(t){},onGraphicPointerDown:function(t){},onGraphicPointerUp:function(t){}},i.enableMoveAllGraphics=!1,i.graphics=[],i.view=null,i}return i(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([s.whenOnce(this,"view.ready",function(){t._viewHandles.add([t.view.on("click",function(e){return t._clickHandler(e)}),t.view.on("double-click",function(e){return t._doubleClickHandler(e)}),t.view.on("pointer-down",function(e){return t._pointerDownHandler(e)}),t.view.on("pointer-move",function(e){return t._pointerMoveHandler(e)}),t.view.on("pointer-up",function(e){return t._pointerUpHandler(e)}),t.view.on("drag",function(e){return t._dragHandler(e)}),t.view.on("key-down",function(e){return t._keyDownHandler(e)})])})])},e.prototype.destroy=function(){this.reset(),this._viewHandles.removeAll(),this._handles.removeAll()},Object.defineProperty(e.prototype,"state",{get:function(){var t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null},e.prototype.updateGeometry=function(t,e){var i=this.graphics[t];i&&i.set("geometry",e)},e.prototype._clickHandler=function(t){var e=this;this.view.hitTest(h.createScreenPointFromEvent(t)).then(function(i){var r=i.results;if(r.length&&r[0].graphic){var a=r[0].graphic;if(e.graphics.indexOf(a)>-1){var n=new l.GraphicClickEvent(a,e.graphics.indexOf(a),t.x,t.y,t);e.emit("graphic-click",n),e.callbacks.onGraphicClick&&e.callbacks.onGraphicClick(n)}}})},e.prototype._doubleClickHandler=function(t){var e=this;this.view.hitTest(h.createScreenPointFromEvent(t)).then(function(i){var r=i.results;if(r.length&&r[0].graphic){var a=r[0].graphic;if(e.graphics.indexOf(a)>-1){var n=new l.GraphicDoubleClickEvent(a,e.graphics.indexOf(a),t.x,t.y,t);e.emit("graphic-double-click",n),e.callbacks.onGraphicDoubleClick&&e.callbacks.onGraphicDoubleClick(n)}}})},e.prototype._pointerDownHandler=function(t){var e=this;this._pointerDownEvent=t,this.view.hitTest(h.createScreenPointFromEvent(t)).then(function(i){var r=i.results;if(r.length&&r[0].graphic){var a=r[0].graphic;if(e.graphics.indexOf(a)>-1){e._activeGraphic=a;var n=t.x,o=t.y,h=new l.GraphicPointerDownEvent(a,e.graphics.indexOf(a),n,o,t);e.emit("graphic-pointer-down",h),e.callbacks.onGraphicPointerDown&&e.callbacks.onGraphicPointerDown(h)}else a!==e._activeGraphic&&(e._pointerDownEvent=null,e._activeGraphic=null)}else e._pointerDownEvent=null,e._activeGraphic=null})},e.prototype._pointerUpHandler=function(t){if(this._pointerDownEvent=null,this._activeGraphic){var e=t.x,i=t.y,r=this.graphics.indexOf(this._activeGraphic),a=new l.GraphicPointerUpEvent(this._activeGraphic,r,e,i,t);this._activeGraphic=null,this.emit("graphic-pointer-up",a),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(a)}},e.prototype._pointerMoveHandler=function(t){var e=this;this._dragEvent||this.view.hitTest(h.createScreenPointFromEvent(t)).then(function(i){var r=i.results;if(r.length&&r[0].graphic){var a=r[0].graphic;if(a===e._hoverGraphic)return;if(e.graphics.indexOf(a)>-1){var n=t.x,o=t.y;if(e._hoverGraphic){var h=e.graphics.indexOf(e._hoverGraphic),s=new l.GraphicPointerOutEvent(e.graphics[h],h,n,o,t);e._hoverGraphic=null,e.emit("graphic-pointer-out",s),e.callbacks.onGraphicPointerOut&&e.callbacks.onGraphicPointerOut(s)}var c=e.graphics.indexOf(a),p=new l.GraphicPointerOverEvent(a,c,n,o,t);return e._hoverGraphic=a,e.emit("graphic-pointer-over",p),void(e.callbacks.onGraphicPointerOver&&e.callbacks.onGraphicPointerOver(p))}}if(e._hoverGraphic){n=t.x,o=t.y,h=e.graphics.indexOf(e._hoverGraphic),p=new l.GraphicPointerOutEvent(e.graphics[h],h,n,o,t);e._hoverGraphic=null,e.emit("graphic-pointer-out",p),e.callbacks.onGraphicPointerOut&&e.callbacks.onGraphicPointerOut(p)}})},e.prototype._dragHandler=function(t){var e=this;if(this._pointerDownEvent){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;t.stopPropagation();var i=t.x,r=t.y,a=this.graphics.indexOf(this._activeGraphic),n=this._activeGraphic.geometry,o=this._dragEvent?i-this._dragEvent.x:0,h=this._dragEvent?r-this._dragEvent.y:0,s=i-t.origin.x,c=r-t.origin.y;if(this._activeGraphic.geometry=p.cloneMove(n,o,h,this.view),this.enableMoveAllGraphics&&this.graphics.forEach(function(t){t!==e._activeGraphic&&(t.geometry=p.cloneMove(t.geometry,o,h,e.view))}),this._dragEvent=t,"start"===t.action){this._initialDragGeometry=n.clone();var v=new l.GraphicMoveStartEvent(this._activeGraphic,this.graphics,a,i,r,o,h,s,c,t);this.emit("graphic-move-start",v),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(v),v.defaultPrevented&&this._activeGraphic.set("geometry",n)}else if("update"===t.action){v=new l.GraphicMoveEvent(this._activeGraphic,this.graphics,a,i,r,o,h,s,c,t);this.emit("graphic-move",v),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(v),v.defaultPrevented&&this._activeGraphic.set("geometry",n)}else{this._dragEvent=null;v=new l.GraphicMoveStopEvent(this._activeGraphic,this.graphics,a,i,r,o,h,s,c,t);this.emit("graphic-move-stop",v),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(v),v.defaultPrevented&&this.graphics[a].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}},e.prototype._keyDownHandler=function(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()},r([c.property()],e.prototype,"_activeGraphic",void 0),r([c.property({readOnly:!0})],e.prototype,"type",void 0),r([c.property()],e.prototype,"callbacks",void 0),r([c.property()],e.prototype,"enableMoveAllGraphics",void 0),r([c.property()],e.prototype,"graphics",void 0),r([c.property({dependsOn:["view.ready","graphics.length","_activeGraphic"],readOnly:!0})],e.prototype,"state",null),r([c.property()],e.prototype,"view",void 0),r([c.subclass("esri.views.draw.support.GraphicMover")],e)}(c.declared(a,n))}.apply(null,r))||(t.exports=a)},1501:function(t,e,i){var r,a;r=[i.dj.c(t.i),e,i(2),i(1),i(43),i(79),i(6),i(48),i(17),i(21),i(0),i(176),i(37),i(549),i(104),i(183),i(119),i(221),i(1547),i(1469)],void 0===(a=function(t,e,i,r,a,n,o,h,s,c,p,l,v,u,y,d,f,g,G,_){var m=function(){return function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move-start"}}(),w=function(){return function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move"}}(),b=function(){return function(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move-stop"}}(),x=function(){return function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"}}(),S=function(){return function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"}}(),k=function(){return function(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"}}(),E=function(){return function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale-start"}}(),M=function(){return function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale"}}(),P=function(){return function(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale-stop"}}();return function(t){function e(e){var i=t.call(this,e)||this;return i._activeHandleGraphic=null,i._centerGraphicSymbol=new g({style:"circle",size:4,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),i._defaultFillSymbol=new d({color:[12,207,255,.075],outline:{join:"round",color:[0,12,207],width:2}}),i._dashedFillSymbol=new d({color:[0,0,0,0],outline:{style:"dash",color:[150,150,150,.5],width:2}}),i._defaultGraphicSymbol=new g({style:"square",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),i._handles=new s,i._mover=null,i._rotateGraphicOffset=20,i._rotateGraphicHoverSymbol=new g({style:"circle",size:10,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),i._rotateGraphicSymbol=new g({style:"circle",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}}),i._rotationAngle=0,i._rotateLineGraphic=null,i._rotateLineGraphicSymbol=new f({color:[0,12,207],width:2}),i._startInfo=null,i._totalDx=0,i._totalDy=0,i._xScale=1,i._yScale=1,i.type="box",i.callbacks={onMoveStart:function(t){},onMove:function(t){},onMoveStop:function(t){},onScaleStart:function(t){},onScale:function(t){},onScaleStop:function(t){},onRotateStart:function(t){},onRotate:function(t){},onRotateStop:function(t){}},i.centerGraphic=null,i.backgroundGraphic=null,i.enableMovement=!0,i.enableRotation=!0,i.enableScaling=!0,i.graphics=[],i.handleGraphics=[],i.layer=null,i.preserveAspectRatio=!1,i.rotateGraphic=null,i.showCenterGraphic=!0,i.view=null,i._getBounds=function(){var t=v.create();return function(e,i){var r,a,n;e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(var o=0,h=i;o<h.length;o++){var s=h[o];if(s){var c=void 0,p=void 0,l=void 0,v=void 0;if("point"===s.type)c=l=s.x,p=v=s.y;else if("multipoint"===s.type){var d=y.geometryToCoordinates(s);c=(r=u.getRingsOrPathsBounds(t,[d]))[0],p=r[1],l=r[2],v=r[3]}else if("extent"===s.type)c=(a=[s.xmin,s.ymin,s.xmax,s.ymax])[0],p=a[1],l=a[2],v=a[3];else{d=y.geometryToCoordinates(s);c=(n=u.getRingsOrPathsBounds(t,d))[0],p=n[1],l=n[2],v=n[3]}e[0]=Math.min(c,e[0]),e[1]=Math.min(p,e[1]),e[2]=Math.max(l,e[2]),e[3]=Math.max(v,e[3])}}return e}}(),i}return i(e,t),e.prototype.initialize=function(){var t=this;this._setup(),this._handles.add([c.whenOnce(this,"view.ready",function(){t.view&&t.view.map&&t.view.map.add(t.layer)}),c.pausable(this,"preserveAspectRatio",function(){t._activeHandleGraphic&&(t._scaleGraphic(t._activeHandleGraphic),t._updateGraphics())}),c.pausable(this,"view.scale",function(){t._updateRotateGraphic(),t._updateRotateLineGraphic()}),c.pausable(this,"graphics",function(){return t.refresh()}),c.pausable(this,"layer",function(e,i){i&&t._resetGraphics(i),t.refresh()})])},e.prototype.destroy=function(){this._reset(),this._handles.removeAll(),this._handles=null},Object.defineProperty(e.prototype,"state",{get:function(){var t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.isUIGraphic=function(t){var e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.indexOf(t)>-1},e.prototype.move=function(t,e){if(this._mover&&this.graphics.length){for(var i=0,r=this.graphics;i<r.length;i++){var a=r[i],n=a.geometry,o=G.cloneMove(n,t,e,this.view);a.geometry=o}this.refresh(),this._emitMoveStopEvent(t,e,null)}},e.prototype.scale=function(t,e){if(this._mover&&this.graphics.length){for(var i=0,r=this.graphics;i<r.length;i++){var a=r[i],n=a.geometry,o=G.scale(n,t,e,this.view);a.geometry=o}this.refresh(),this._emitScaleStopEvent(t,e,null)}},e.prototype.rotate=function(t,e){if(this._mover&&this.graphics.length){if(!e){var i=this.handleGraphics[1].geometry.x,r=this.handleGraphics[3].geometry.y;e=new a.Point(i,r,this.view.spatialReference)}for(var n=0,o=this.graphics;n<o.length;n++){var h=o[n],s=h.geometry,c=l.rotate(s,t,e);h.geometry=c}this.refresh(),this._emitRotateStopEvent(t,null)}},e.prototype.refresh=function(){this._reset(),this._setup()},e.prototype.reset=function(){this.graphics=[]},e.prototype._setup=function(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())},e.prototype._reset=function(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"},e.prototype._resetGraphicStateVars=function(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._rotationAngle=0},e.prototype._resetGraphics=function(t){var e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(var i=0,r=this.handleGraphics;i<r.length;i++)r[i].destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)},e.prototype._setupMover=function(){var t=this,e=[].concat(this.handleGraphics);this.enableMovement&&(e=e.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&e.push(this.rotateGraphic),this.showCenterGraphic&&e.push(this.centerGraphic),this._mover=new _({enableMoveAllGraphics:!1,view:this.view,graphics:e,callbacks:{onGraphicClick:function(e){return t._onGraphicClickCallback(e)},onGraphicMoveStart:function(e){return t._onGraphicMoveStartCallback(e)},onGraphicMove:function(e){return t._onGraphicMoveCallback(e)},onGraphicMoveStop:function(e){return t._onGraphicMoveStopCallback(e)},onGraphicPointerOver:function(e){return t._onGraphicPointerOverCallback(e)},onGraphicPointerOut:function(e){return t._onGraphicPointerOutCallback(e)}}})},e.prototype._getStartInfo=function(t){var e=this._getBoxBounds(v.create()),i=e[0],r=e[1],a=e[2],n=e[3],o=Math.abs(a-i),h=Math.abs(n-r),s=(a+i)/2,c=(n+r)/2,p=t.geometry;return{width:o,height:h,centerX:s,centerY:c,startX:p.x,startY:p.y,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}},e.prototype._getGraphicInfos=function(){var t=this;return this.graphics.map(function(e){return t._getGraphicInfo(e)})},e.prototype._getGraphicInfo=function(t){var e=t.geometry,i=this._getBounds(v.create(),[e]),r=i[0],a=i[1],n=i[2],o=i[3];return{width:Math.abs(n-r),height:Math.abs(o-a),centerX:(n+r)/2,centerY:(o+a)/2,geometry:e}},e.prototype._onGraphicClickCallback=function(t){var e=t.graphic;(e===this.rotateGraphic||this.handleGraphics.indexOf(e)>-1)&&t.viewEvent.stopPropagation()},e.prototype._onGraphicMoveStartCallback=function(t){var e=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),this.backgroundGraphic.symbol=this._dashedFillSymbol,this._startInfo=this._getStartInfo(e),e===this.rotateGraphic?this._emitRotateStartEvent(this._rotationAngle,e):this.handleGraphics.indexOf(e)>-1?(this._activeHandleGraphic=e,this._emitScaleStartEvent(this._xScale,this._yScale,e)):this._emitMoveStartEvent(t.dx,t.dy,e)},e.prototype._onGraphicMoveCallback=function(t){var e=t.graphic;if(this._startInfo)if(this.handleGraphics.indexOf(e)>-1)this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._rotationAngle,e);else{var i=t.dx,r=t.dy;this._totalDx+=i,this._totalDy+=r,this._moveGraphic(e,i,r),this._emitMoveEvent(i,r,e)}},e.prototype._onGraphicMoveStopCallback=function(t){var e=t.graphic;this._startInfo?(this._updateGraphics(),this._showGraphicsAfterUpdate(),this.backgroundGraphic.symbol=this._defaultFillSymbol,e===this.rotateGraphic?this._emitRotateStopEvent(this._rotationAngle,e):this.handleGraphics.indexOf(e)>-1?this._emitScaleStopEvent(this._xScale,this._yScale,e):this._emitMoveStopEvent(this._totalDx,this._totalDy,e),this._resetGraphicStateVars()):this.refresh()},e.prototype._onGraphicPointerOverCallback=function(t){var e,i=this.view.rotation,r=t.index;switch(t.graphic===this.rotateGraphic&&(this.rotateGraphic.symbol=this._rotateGraphicHoverSymbol),r<8&&(i>=0&&i<45?r%=8:r=i>=45&&i<90?(r+1)%8:i>=90&&i<135?(r+2)%8:i>=135&&i<180?(r+3)%8:i>=180&&i<225?(r+4)%8:i>=225&&i<270?(r+5)%8:i>=270&&i<315?(r+6)%8:(r+7)%8),r){case 0:e="nwse-resize";break;case 1:e="ns-resize";break;case 2:e="nesw-resize";break;case 3:e="ew-resize";break;case 4:e="nwse-resize";break;case 5:e="ns-resize";break;case 6:e="nesw-resize";break;case 7:e="ew-resize";break;default:e="pointer"}this.view.cursor=e},e.prototype._onGraphicPointerOutCallback=function(t){t.graphic===this.rotateGraphic&&(this.rotateGraphic.symbol=this._rotateGraphicSymbol),this.view.cursor="default"},e.prototype._scaleGraphic=function(t){var e=this,i=e._startInfo,r=e.handleGraphics,n=e.preserveAspectRatio,o=e.view,h=i.centerX,s=i.centerY,c=i.startX,p=i.startY,l=o.state,v=l.resolution,u=l.transform,y=r.indexOf(t);1!==y&&5!==y||this._updateX(t,h),3!==y&&7!==y||this._updateY(t,s);var d=t.geometry,f=d.x,g=d.y,_=u[0]*f+u[2]*g+u[4],m=u[1]*f+u[3]*g+u[5],w=i.graphicInfos.map(function(t){return t.geometry});if(n){var b=u[0]*h+u[2]*s+u[4],x=u[1]*h+u[3]*s+u[5],S=u[0]*c+u[2]*p+u[4],k=u[1]*c+u[3]*p+u[5];this._xScale=this._yScale=G.getScaleRatio(b,x,S,k,_,m);for(var E=0,M=w;E<M.length;E++){var P=M[E],O=w.indexOf(P);this.graphics[O].geometry=G.scale(P,this._xScale,this._yScale,o,[h,s])}this._updateBackgroundGraphic()}else{var R=i.width,C=i.height,D=c>h,I=p<s,A=f-c,H=p-g;if(1===y||5===y?A=0:3!==y&&7!==y||(H=0),0===A&&0===H)return;var B=R+(D?A:-1*A),T=C+(I?H:-1*H),L=h+A/2,Y=s+H/2;this._xScale=B/R||1,this._yScale=T/C||1,1===y||5===y?this._xScale=1:3!==y&&7!==y||(this._yScale=1);var z=(L-h)/v,N=(Y-s)/v,F=G.scale(i.box,this._xScale,this._yScale,o);this.backgroundGraphic.geometry=G.cloneMove(F,z,N,o,!0);for(var U=this._getGraphicInfo(this.backgroundGraphic),X=U.centerX,j=U.centerY,V=(X-h)/v,q=-1*(j-s)/v,J=0,K=w;J<K.length;J++){P=K[J];var Q=w.indexOf(P),W=G.scale(P,this._xScale,this._yScale,o,[h,s]);this.graphics[Q].geometry=G.cloneMove(W,V,q,o,!0)}this.centerGraphic.geometry=new a.Point(X,j,o.spatialReference)}},e.prototype._rotateGraphic=function(t){var e=this._startInfo,i=e.centerX,r=e.centerY,n=e.startX,o=e.startY,h=e.box,s=e.rotate,c=t.geometry,p=c.x,v=c.y,u=new a.Point(i,r,this.view.spatialReference);this._rotationAngle=G.getRotationAngle(i,r,n,o,p,v);for(var y=this._startInfo.graphicInfos.map(function(t){return t.geometry}),d=0,f=y;d<f.length;d++){var g=f[d],_=y.indexOf(g),m=l.rotate(g,this._rotationAngle,u);this.graphics[_].geometry=m}this.backgroundGraphic.geometry=l.rotate(h,this._rotationAngle,u),this.rotateGraphic.geometry=l.rotate(s,this._rotationAngle,u)},e.prototype._moveGraphic=function(t,e,i){if(this.graphics.indexOf(t)>-1){var r=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=G.cloneMove(r,e,i,this.view);for(var a=0,n=this.graphics;a<n.length;a++){(s=n[a])!==t&&(s.geometry=G.cloneMove(s.geometry,e,i,this.view))}}else if(t===this.centerGraphic){r=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=G.cloneMove(r,e,i,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic)for(var o=0,h=this.graphics;o<h.length;o++){var s;(s=h[o]).geometry=G.cloneMove(s.geometry,e,i,this.view)}},e.prototype._setupGraphics=function(){this._set("centerGraphic",new n(null,this._centerGraphicSymbol)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new n(null,this._defaultFillSymbol)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new n(null,this._rotateLineGraphicSymbol),this._set("rotateGraphic",new n(null,this._rotateGraphicSymbol)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(var t=0;t<8;t++)this.handleGraphics.push(new n(null,this._defaultGraphicSymbol));this.enableScaling&&this.layer.addMany(this.handleGraphics)},e.prototype._updateGraphics=function(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()},e.prototype._hideGraphicsBeforeUpdate=function(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach(function(t){return t.visible=!1})},e.prototype._showGraphicsAfterUpdate=function(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0),this.showCenterGraphic&&(this.centerGraphic.visible=!0),this.enableScaling&&this.handleGraphics.forEach(function(t){return t.visible=!0})},e.prototype._updateHandleGraphics=function(){var t=this,e=this._getCoordinates(!0);this.handleGraphics.forEach(function(i,r){var a=e[r],n=a[0],o=a[1];t._updateXY(i,n,o)})},e.prototype._updateBackgroundGraphic=function(){var t=this._getCoordinates();this.backgroundGraphic.geometry=new a.Polygon({rings:t,spatialReference:this.view.spatialReference})},e.prototype._updateCenterGraphic=function(){var t=this._getBoxBounds(v.create()),e=t[0],i=t[1],r=(t[2]+e)/2,n=(t[3]+i)/2;this.centerGraphic.geometry=new a.Point(r,n,this.view.spatialReference)},e.prototype._updateRotateGraphic=function(){if(this.handleGraphics.length){var t=this.handleGraphics[1].geometry,e=t.x,i=t.y+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new a.Point(e,i,this.view.spatialReference)}},e.prototype._updateRotateLineGraphic=function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new a.Polyline({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}},e.prototype._updateXY=function(t,e,i){t.geometry=new a.Point(e,i,this.view.spatialReference)},e.prototype._updateX=function(t,e){var i=t.geometry.y;t.geometry=new a.Point(e,i,this.view.spatialReference)},e.prototype._updateY=function(t,e){var i=t.geometry.x;t.geometry=new a.Point(i,e,this.view.spatialReference)},e.prototype._hasExtentGraphic=function(){return this.graphics.some(function(t){return t&&t.geometry&&"extent"===t.geometry.type})},e.prototype._getBoxBounds=function(t){var e=this.graphics.map(function(t){return t.geometry});return this._getBounds(t,e)},e.prototype._getCoordinates=function(t){var e=this._getBoxBounds(v.create()),i=e[0],r=e[1],a=e[2],n=e[3];if(t){var o=(i+a)/2,h=(n+r)/2;return[[i,n],[o,n],[a,n],[a,h],[a,r],[o,r],[i,r],[i,h]]}return[[i,n],[a,n],[a,r],[i,r]]},e.prototype._emitMoveStartEvent=function(t,e,i){var r=new m(this.graphics,i,t,e);this.emit("move-start",r),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(r)},e.prototype._emitMoveEvent=function(t,e,i){var r=new w(this.graphics,i,t,e);this.emit("move",r),this.callbacks.onMove&&this.callbacks.onMove(r)},e.prototype._emitMoveStopEvent=function(t,e,i){var r=new b(this.graphics,i,t,e);this.emit("move-stop",r),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(r)},e.prototype._emitRotateStartEvent=function(t,e){var i=new x(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)},e.prototype._emitRotateEvent=function(t,e){var i=new S(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)},e.prototype._emitRotateStopEvent=function(t,e){var i=new k(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)},e.prototype._emitScaleStartEvent=function(t,e,i){var r=new E(this.graphics,i,t,e);this.emit("scale-start",r),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(r)},e.prototype._emitScaleEvent=function(t,e,i){var r=new M(this.graphics,i,t,e);this.emit("scale",r),this.callbacks.onScale&&this.callbacks.onScale(r)},e.prototype._emitScaleStopEvent=function(t,e,i){var r=new P(this.graphics,i,t,e);this.emit("scale-stop",r),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(r)},r([p.property()],e.prototype,"_rotateLineGraphic",void 0),r([p.property({readOnly:!0})],e.prototype,"type",void 0),r([p.property()],e.prototype,"callbacks",void 0),r([p.property({readOnly:!0})],e.prototype,"centerGraphic",void 0),r([p.property({readOnly:!0})],e.prototype,"backgroundGraphic",void 0),r([p.property()],e.prototype,"enableMovement",void 0),r([p.property()],e.prototype,"enableRotation",void 0),r([p.property()],e.prototype,"enableScaling",void 0),r([p.property()],e.prototype,"graphics",void 0),r([p.property({readOnly:!0})],e.prototype,"handleGraphics",void 0),r([p.property()],e.prototype,"layer",void 0),r([p.property()],e.prototype,"preserveAspectRatio",void 0),r([p.property({readOnly:!0})],e.prototype,"rotateGraphic",void 0),r([p.property()],e.prototype,"showCenterGraphic",void 0),r([p.property({dependsOn:["view.ready","graphics.length","layer"],readOnly:!0})],e.prototype,"state",null),r([p.property()],e.prototype,"view",void 0),r([p.subclass("esri.views.draw.support.Box")],e)}(p.declared(o,h))}.apply(null,r))||(t.exports=a)},1547:function(t,e,i){var r,a;r=[i.dj.c(t.i),e,i(37),i(549),i(104)],void 0===(a=function(t,e,i,r,a){function n(t,e,i){if("point"===t.type)return t.x=t.x+e,t.y=t.y+i,t;if("multipoint"===t.type){var r=t.points;for(var n in r){var o=r[n],h=o[0],s=o[1];r[n]=[h+e,s+i]}return t}if("extent"===t.type)return t.xmin=t.xmin+e,t.xmax=t.xmax+e,t.ymin=t.ymin+i,t.ymax=t.ymax+i,t;var c=a.geometryToCoordinates(t),p="polyline"===t.type?t.paths:t.rings;for(var l in c){var v=c[l];for(var n in v){var u=v[n];h=u[0],s=u[1];p[l][n]=[h+e,s+i]}}return"paths"in t?t.paths=p:t.rings=p,t}Object.defineProperty(e,"__esModule",{value:!0}),e.move=n,e.cloneMove=function(t,e,i,r,o){var h=t.clone(),s=r.resolution;if("point"===h.type){if(o)n(h,e*s,-i*s);else{var c=r.state.transform,p=r.state.inverseTransform,l=c[0]*h.x+c[2]*h.y+c[4],v=c[1]*h.x+c[3]*h.y+c[5];h.x=p[0]*(l+e)+p[2]*(v+i)+p[4],h.y=p[1]*(l+e)+p[3]*(v+i)+p[5]}return h}if("multipoint"===h.type){if(o)n(h,e*s,-i*s);else{var u=h.points;for(var y in c=r.state.transform,p=r.state.inverseTransform,u){var d=u[y],f=c[0]*d[0]+c[2]*d[1]+c[4],g=c[1]*d[0]+c[3]*d[1]+c[5];l=p[0]*(f+e)+p[2]*(g+i)+p[4],v=p[1]*(f+e)+p[3]*(g+i)+p[5],u[y]=[l,v]}}return h}if("extent"===h.type){if(o)n(h,e*s,-i*s);else{c=r.state.transform,p=r.state.inverseTransform;var G=c[0]*h.xmin+c[2]*h.ymin+c[4],_=c[1]*h.xmin+c[3]*h.ymin+c[5],m=c[0]*h.xmax+c[2]*h.ymax+c[4],w=c[1]*h.xmax+c[3]*h.ymax+c[5];h.xmin=p[0]*(G+e)+p[2]*(_+i)+p[4],h.ymin=p[1]*(G+e)+p[3]*(_+i)+p[5],h.xmax=p[0]*(m+e)+p[2]*(w+i)+p[4],h.ymax=p[1]*(m+e)+p[3]*(w+i)+p[5]}return h}if(o)n(h,e*s,-i*s);else{var b=a.geometryToCoordinates(h);for(var x in u="polyline"===h.type?h.paths:h.rings,c=r.state.transform,p=r.state.inverseTransform,b){var S=b[x];for(var y in S)d=S[y],f=c[0]*d[0]+c[2]*d[1]+c[4],g=c[1]*d[0]+c[3]*d[1]+c[5],l=p[0]*(f+e)+p[2]*(g+i)+p[4],v=p[1]*(f+e)+p[3]*(g+i)+p[5],u[x][y]=[l,v]}"paths"in h?h.paths=u:h.rings=u}return h},e.scale=function(t,e,n,o,h){if("point"===t.type){var s=t.x,c=t.y,p=h?h[0]:s,l=h?h[1]:c,v=t.clone(),u=(s-p)*e+p,y=(c-l)*n+l;return v.x=u,v.y=y,v}if("multipoint"===t.type){var d=a.geometryToCoordinates(t),f=i.create(),g=r.getRingsOrPathsBounds(f,[d]),G=g[0],_=g[1],m=g[2],w=g[3],b=h?h[0]:(G+m)/2,x=h?h[1]:(w+_)/2,S=t.clone(),k=S.points;for(var E in k){var M=k[E];u=((s=M[0])-b)*e+b,y=((c=M[1])-x)*n+x,k[E]=[u,y]}return S}if("extent"===t.type){var P=t.xmin,O=t.xmax,R=t.ymin,C=t.ymax,D=h?h[0]:(P+O)/2,I=h?h[1]:(C+R)/2,A=t.clone();if(A.xmin=(P-D)*e+D,A.ymax=(C-I)*n+I,A.xmax=(O-D)*e+D,A.ymin=(R-I)*n+I,A.xmin>A.xmax){var H=A.xmin,B=A.xmax;A.xmin=B,A.xmax=H}if(A.ymin>A.ymax){var T=A.ymin,L=A.ymax;A.ymin=L,A.ymax=T}return A}var Y=a.geometryToCoordinates(t),z=i.create(),N=r.getRingsOrPathsBounds(z,Y),F=N[0],U=N[1],X=N[2],j=N[3],V=h?h[0]:(F+X)/2,q=h?h[1]:(j+U)/2,J=t.clone(),K="polyline"===J.type?J.paths:J.rings;for(var Q in Y){var W=Y[Q];for(var E in W){var Z=W[E];u=((s=Z[0])-V)*e+V,y=((c=Z[1])-q)*n+q,K[Q][E]=[u,y]}}return"paths"in J?J.paths=K:J.rings=K,J},e.getScaleRatio=function(t,e,i,r,a,n){var o=Math.sqrt((i-t)*(i-t)+(r-e)*(r-e));return Math.sqrt((a-t)*(a-t)+(n-e)*(n-e))/o},e.getRotationAngle=function(t,e,i,r,a,n){var o=180*Math.atan2(e-r,t-i)/Math.PI;return 180*Math.atan2(e-n,t-a)/Math.PI-o}}.apply(null,r))||(t.exports=a)},1635:function(t,e,i){var r,a;r=[i.dj.c(t.i),e],void 0===(a=function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e,i,r,a){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=a,this.type="graphic-click"}}();e.GraphicClickEvent=i;var r=function(){return function(t,e,i,r,a){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=a,this.type="graphic-double-click"}}();e.GraphicDoubleClickEvent=r;var a=function(){function t(t,e,i,r,a,n,o,h,s,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=r,this.y=a,this.dx=n,this.dy=o,this.totalDx=h,this.totalDy=s,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-start"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveStartEvent=a;var n=function(){function t(t,e,i,r,a,n,o,h,s,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=r,this.y=a,this.dx=n,this.dy=o,this.totalDx=h,this.totalDy=s,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveEvent=n;var o=function(){function t(t,e,i,r,a,n,o,h,s,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=r,this.y=a,this.dx=n,this.dy=o,this.totalDx=h,this.totalDy=s,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-stop"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveStopEvent=o;var h=function(){return function(t,e,i,r,a){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=a,this.type="graphic-pointer-over"}}();e.GraphicPointerOverEvent=h;var s=function(){return function(t,e,i,r,a){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=a,this.type="graphic-pointer-out"}}();e.GraphicPointerOutEvent=s;var c=function(){return function(t,e,i,r,a){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=a,this.type="graphic-pointer-down"}}();e.GraphicPointerDownEvent=c;var p=function(){return function(t,e,i,r,a){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=a,this.type="graphic-pointer-up"}}();e.GraphicPointerUpEvent=p}.apply(null,r))||(t.exports=a)}}]);