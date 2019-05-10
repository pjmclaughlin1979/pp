(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/engine/webgl/enums":1505,"esri/views/2d/tiling/TileSpan":1513,"esri/views/2d/tiling/TileInfoView":1521,"esri/views/2d/tiling/LODInfo":1539,"esri/views/2d/tiling/TileCoverage":1540,"esri/views/2d/tiling/TileQueue":1541,"esri/views/support/QueueProcessor":1546,"esri/views/2d/engine/BitmapContainer":1555,"esri/core/Queue":1556,"esri/views/2d/engine/Bitmap":1595,"esri/views/2d/engine/Tiled":1687})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1505:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=function(e,t){var r,i,o,n,s,u,h,l,a,c;Object.defineProperty(t,"__esModule",{value:!0}),(r=t.WGLGeometryType||(t.WGLGeometryType={}))[r.FILL=0]="FILL",r[r.LINE=1]="LINE",r[r.MARKER=2]="MARKER",r[r.TEXT=3]="TEXT",r[r.LABEL=4]="LABEL",(i=t.WGLGeometryTransactionStatus||(t.WGLGeometryTransactionStatus={}))[i.SUCCEEDED=0]="SUCCEEDED",i[i.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(o=t.WGLDrawPhase||(t.WGLDrawPhase={}))[o.NONE=0]="NONE",o[o.MAP=1]="MAP",o[o.LABEL=2]="LABEL",o[o.LABEL_ALPHA=4]="LABEL_ALPHA",o[o.HITTEST=8]="HITTEST",o[o.HIGHLIGHT=16]="HIGHLIGHT",o[o.CLIP=32]="CLIP",o[o.DEBUG=64]="DEBUG",o[o.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(n=t.VVType||(t.VVType={}))[n.SIZE=0]="SIZE",n[n.COLOR=1]="COLOR",n[n.OPACITY=2]="OPACITY",n[n.ROTATION=3]="ROTATION",(s=t.WGLVVFlag||(t.WGLVVFlag={}))[s.NONE=0]="NONE",s[s.OPACITY=1]="OPACITY",s[s.COLOR=2]="COLOR",s[s.ROTATION=4]="ROTATION",s[s.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",s[s.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",s[s.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",s[s.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(u=t.WGLVVTarget||(t.WGLVVTarget={}))[u.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",u[u.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",u[u.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",u[u.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(h=t.CapType||(t.CapType={}))[h.UNKNOWN=0]="UNKNOWN",h[h.BUTT=1]="BUTT",h[h.ROUND=2]="ROUND",h[h.SQUARE=3]="SQUARE",(l=t.JoinType||(t.JoinType={}))[l.UNKNOWN=0]="UNKNOWN",l[l.MITER=1]="MITER",l[l.BEVEL=2]="BEVEL",l[l.ROUND=3]="ROUND",(a=t.Alignment||(t.Alignment={}))[a.SCREEN=0]="SCREEN",a[a.MAP=1]="MAP",(c=t.MosaicType||(t.MosaicType={}))[c.SPRITE=0]="SPRITE",c[c.GLYPH=1]="GLYPH"}.apply(null,i))||(e.exports=o)},1513:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(80)],void 0===(o=function(e,t,r){return function(){function e(e,t,r){this.row=e,this.colFrom=t,this.colTo=r}return e.pool=new r(e,!0),e}()}.apply(null,i))||(e.exports=o)},1521:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(96),r(1539),r(1540),r(352),r(1513)],void 0===(o=function(e,t,r,i,o,n,s){var u=new n("0/0/0/0"),h=function(){function e(e,t,r,i,o,n,s,u){this.x=e,this.ymin=t,this.ymax=r,this.invM=i,this.leftAdjust=o,this.rightAdjust=n,this.leftBound=s,this.rightBound=u}return e.create=function(t,r){var i;t[1]>r[1]&&(t=(i=[r,t])[0],r=i[1]);var o=t[0],n=t[1],s=r[0],u=r[1],h=s-o,l=u-n,a=0!==l?h/l:0,c=(Math.ceil(n)-n)*a,p=(Math.floor(n)-n)*a;return new e(o,Math.floor(n),Math.ceil(u),a,h<0?c:p,h<0?p:c,h<0?s:o,h<0?o:s)},e.prototype.incrRow=function(){this.x+=this.invM},e.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},e.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},e}(),l=[[0,0],[0,0],[0,0],[0,0]];return function(){function e(e,t){var r=this;this.tileInfo=e,this.fullExtent=t,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};var o=e.lods.slice();o.sort(function(e,t){return t.scale-e.scale});var n=this._lodInfos=o.map(function(r){return i.create(e,r,t)});o.forEach(function(e,t){r._infoByLevel[e.level]=n[t],r._infoByScale[e.scale]=n[t],r.scales[t]=e.scale},this),this._wrap=e.isWrappable}return Object.defineProperty(e.prototype,"spatialReference",{get:function(){return this.tileInfo.spatialReference},enumerable:!0,configurable:!0}),e.prototype.getLODInfoAt=function(e){return this._infoByLevel["number"==typeof e?e:e.level]},e.prototype.getTileBounds=function(e,t,r){void 0===r&&(r=!1),u.set(t);var i=this._infoByLevel[u.level];return i?i.getTileBounds(e,u,r):e},e.prototype.getTileCoords=function(e,t,r){void 0===r&&(r=!1),u.set(t);var i=this._infoByLevel[u.level];return i?i.getTileCoords(e,u,r):e},e.prototype.getTileCoverage=function(e,t,r){void 0===t&&(t=192),void 0===r&&(r="closest");var i,n,u,a="closest"===r?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),c=o.pool.acquire(a),p=this._wrap,f=1/0,d=-1/0,_=c.spans;l[0][0]=l[0][1]=l[1][1]=l[3][0]=-t,l[1][0]=l[2][0]=e.size[0]+t,l[2][1]=l[3][1]=e.size[1]+t;for(var g=0,y=l;g<y.length;g++){var v=y[g];e.toMap(v,v),v[0]=a.getColumnForX(v[0]),v[1]=a.getRowForY(v[1])}for(var m=[],T=3,w=0;w<4;w++)if(l[w][1]!==l[T][1]){var I=h.create(l[w],l[T]);f=Math.min(I.ymin,f),d=Math.max(I.ymax,d),void 0===m[I.ymin]&&(m[I.ymin]=[]),m[I.ymin].push(I),T=w}else T=w;if(null==f||null==d||d-f>100)return null;var E=[];for(i=f;i<d;){null!=m[i]&&(E=E.concat(m[i])),n=1/0,u=-1/0;for(w=E.length-1;w>=0;w--){I=E[w];n=Math.min(n,I.getLeftCol()),u=Math.max(u,I.getRightCol())}if(n=Math.floor(n),u=Math.floor(u),i>=a.first[1]&&i<=a.last[1])if(p)if(a.size[0]<a.worldSize[0]){var S=Math.floor(u/a.worldSize[0]);for(w=Math.floor(n/a.worldSize[0]);w<=S;w++)_.push(new s(i,Math.max(a.getFirstColumnForWorld(w),n),Math.min(a.getLastColumnForWorld(w),u)))}else _.push(new s(i,n,u));else n>a.last[0]||u<a.first[0]||(n=Math.max(n,a.first[0]),u=Math.min(u,a.last[0]),_.push(new s(i,n,u)));i+=1;for(w=E.length-1;w>=0;w--){(I=E[w]).ymax>=i?I.incrRow():E.splice(w,1)}}return c},e.prototype.getTileParentId=function(e){u.set(e);var t=this._infoByLevel[u.level],r=this._lodInfos.indexOf(t)-1;return r<0?null:(this._getTileIdAtLOD(u,this._lodInfos[r],u),u.id)},e.prototype.getTileResolution=function(e){var t=this._infoByLevel["object"==typeof e?e.level:e];return t?t.resolution:-1},e.prototype.getTileScale=function(e){var t=this._infoByLevel[e.level];return t?t.scale:-1},e.prototype.intersects=function(e,t){u.set(t);var r=this._infoByLevel[u.level],i=e.lodInfo;if(i.resolution>r.resolution){this._getTileIdAtLOD(u,i,u);for(var o=i.denormalizeCol(u.col,u.world),n=0,s=e.spans;n<s.length;n++){var h=s[n];if(h.row===u.row&&h.colFrom<=o&&h.colTo>=o)return!0}}if(i.resolution<r.resolution){var l=e.spans.reduce(function(e,t){return e[0]=Math.min(e[0],t.row),e[1]=Math.max(e[1],t.row),e[2]=Math.min(e[2],t.colFrom),e[3]=Math.max(e[3],t.colTo),e},[1/0,-1/0,1/0,-1/0]),a=l[0],c=l[1],p=l[2],f=l[3],d=r.denormalizeCol(u.col,u.world),_=i.getColumnForX(r.getXForColumn(d)),g=i.getRowForY(r.getYForRow(u.row)),y=i.getColumnForX(r.getXForColumn(d+1))-1,v=i.getRowForY(r.getYForRow(u.row+1))-1;return!(_>f||y<p||g>c||v<a)}var m=i.denormalizeCol(u.col,u.world);return e.spans.some(function(e){return e.row===u.row&&e.colFrom<=m&&e.colTo>=m})},e.prototype.normalizeBounds=function(e,t,i){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){var o=r.getInfo(this.tileInfo.spatialReference),n=-i*(o.valid[1]-o.valid[0]);e[0]+=n,e[2]+=n}return e},e.prototype.getSmallestInfoForScale=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(var r=1;r<t.length-1;r++)if(e>t[r])return this._infoByScale[t[r-1]];return this._infoByScale[t[t.length-1]]},e.prototype.getClosestInfoForScale=function(e){var t=this.scales;return this._infoByScale[e]?this._infoByScale[e]:(e=t.reduce(function(t,r,i,o){return Math.abs(r-e)<Math.abs(t-e)?r:t},t[0]),this._infoByScale[e])},e.prototype.scaleToLevel=function(e){var t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(var r=t.length-1;r>=0;r--)if(e<t[r]){return r===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[r]].level+(t[r]-e)/(t[r]-t[r+1])}return this._infoByScale[t[0]].level},e.prototype.scaleToZoom=function(e){return this.tileInfo.scaleToZoom(e)},e.prototype._getTileIdAtLOD=function(e,t,r){var i=this._infoByLevel[r.level];return e.set(r),t.resolution<i.resolution?null:t.resolution===i.resolution?e:(e.level=t.level,e.col=Math.floor(r.col*i.resolution/t.resolution+.01),e.row=Math.floor(r.row*i.resolution/t.resolution+.01),e)},e}()}.apply(null,i))||(e.exports=o)},1539:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(96),r(352)],void 0===(o=function(e,t,r,i){function o(e,t){return[e,t]}function n(e,t,r){return e[0]=t,e[1]=r,e}var s=new i("0/0/0/0");return function(){function e(e,t,r,i,o,n,s,u,h,l,a,c){this.level=e,this.resolution=t,this.scale=r,this.origin=i,this.first=o,this.last=n,this.size=s,this.norm=u,this.worldStart=h,this.worldEnd=l,this.worldSize=a,this.wrap=c}return e.create=function(t,i,s){var u,h,l,a,c=r.getInfo(t.spatialReference),p=o(t.origin.x,t.origin.y),f=o(t.size[0]*i.resolution,t.size[1]*i.resolution),d=o(-1/0,-1/0),_=o(1/0,1/0),g=o(1/0,1/0);return s&&(n(d,Math.max(0,Math.floor((s.xmin-p[0])/f[0])),Math.max(0,Math.floor((p[1]-s.ymax)/f[1]))),n(_,Math.max(0,Math.floor((s.xmax-p[0])/f[0])),Math.max(0,Math.floor((p[1]-s.ymin)/f[1]))),n(g,_[0]-d[0]+1,_[1]-d[1]+1)),t.isWrappable?(u=o(Math.ceil(Math.round(2*c.origin[1]/i.resolution)/t.size[0]),g[1]),h=o(Math.floor((c.origin[0]-p[0])/f[0]),d[1]),l=o(u[0]+h[0]-1,_[1]),a=!0):(h=d,l=_,u=g,a=!1),new e(i.level,i.resolution,i.scale,p,d,_,g,f,h,l,u,a)},e.prototype.normalizeCol=function(e){if(!this.wrap)return e;var t=this.worldSize[0];return e<0?t-1-Math.abs((e+1)%t):e%t},e.prototype.denormalizeCol=function(e,t){return this.wrap?this.worldSize[0]*t+e:e},e.prototype.getWorldForColumn=function(e){return this.wrap?Math.floor(e/this.worldSize[0]):0},e.prototype.getFirstColumnForWorld=function(e){return e*this.worldSize[0]+this.first[0]},e.prototype.getLastColumnForWorld=function(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1},e.prototype.getColumnForX=function(e){return(e-this.origin[0])/this.norm[0]},e.prototype.getXForColumn=function(e){return this.origin[0]+e*this.norm[0]},e.prototype.getRowForY=function(e){return(this.origin[1]-e)/this.norm[1]},e.prototype.getYForRow=function(e){return this.origin[1]-e*this.norm[1]},e.prototype.getTileBounds=function(e,t,r){void 0===r&&(r=!1),s.set(t);var i=r?s.col:this.denormalizeCol(s.col,s.world),o=s.row;return function(e,t,r,i,o){e[0]=t,e[1]=r,e[2]=i,e[3]=o}(e,this.getXForColumn(i),this.getYForRow(o+1),this.getXForColumn(i+1),this.getYForRow(o)),e},e.prototype.getTileCoords=function(e,t,r){void 0===r&&(r=!1),s.set(t);var i=r?s.col:this.denormalizeCol(s.col,s.world);return Array.isArray(e)?n(e,this.getXForColumn(i),this.getYForRow(s.row)):(e.x=this.getXForColumn(i),e.y=this.getYForRow(s.row)),e},e}()}.apply(null,i))||(e.exports=o)},1540:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(213),r(80),r(1513)],void 0===(o=function(e,t,r,i,o){return function(){function e(e){this.lodInfo=e,this.spans=r.acquire()}return e.prototype.release=function(){for(var e=0,t=this.spans;e<t.length;e++){var i=t[e];o.pool.release(i)}r.release(this.spans)},e.prototype.forEach=function(e,t){var r=this.spans,i=this.lodInfo,o=i.level;if(0!==r.length)for(var n=0,s=r;n<s.length;n++)for(var u=s[n],h=u.row,l=u.colFrom,a=u.colTo,c=l;c<=a;c++)e.call(t,o,h,i.normalizeCol(c),i.getWorldForColumn(c))},e.pool=new i(e,!0),e}()}.apply(null,i))||(e.exports=o)},1541:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(2),r(1),r(6),r(0),r(40),r(1546)],void 0===(o=function(e,t,r,i,o,n,s,u){var h=new Set,l=[],a=new Map,c=[0,0];return function(e){function t(t){var r=e.call(this,t)||this;return r._keysToRequests=new Map,r.concurrency=6,r.process=null,r.strategy="scale-first",r.tileInfoView=null,r.tileServers=null,r}return r(t,e),t.prototype.initialize=function(){var e=this,t="scale-first"===this.strategy?this._peekByScaleFirst.bind(this):this._peekByCenterFirst.bind(this),r=this,i=r.tileServers,o=r.concurrency,n=r.process;i&&i.length>0?this._queues=i.map(function(r){return new u({concurrency:o,process:function(t){var i=e._keysToRequests.get(t);return n(i,r)},peeker:t})}):this._queues=[new u({concurrency:o,process:function(t){var r=e._keysToRequests.get(t);return n(r)},peeker:t})]},t.prototype.destroy=function(){this.clear();for(var e=0,t=this._queues;e<t.length;e++)t[e].destroy();this._queues=null},Object.defineProperty(t.prototype,"length",{get:function(){return this._queues.reduce(function(e,t){return e+t.length},0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onGoingCount",{get:function(){return this._keysToRequests.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this.length>0||this.onGoingCount>0},enumerable:!0,configurable:!0}),t.prototype.clear=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].clear();this._keysToRequests.clear(),this.notifyChange("updating")},t.prototype.find=function(e,t){for(var r=this,i=0,o=this._queues;i<o.length;i++){var n=o[i].find(function(t){return e(r._keysToRequests.get(t).key)});if(n)return n}},t.prototype.getPromise=function(e){for(var t="string"==typeof e?e:e.id,r=0,i=this._queues;r<i.length;r++){var o=i[r].get(t);if(o)return o}},t.prototype.getRequest=function(e){var t="string"==typeof e?e:e.id;return this._keysToRequests.get(t)},t.prototype.has=function(e){return"string"==typeof e?this._keysToRequests.has(e):this._keysToRequests.has(e.id)},t.prototype.isOngoing=function(e){var t="string"==typeof e?e:e.id;return this.has(t)&&this._queues.some(function(e){return e.isOngoing(t)})},t.prototype.pause=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].pause()},t.prototype.push=function(e){var t=this,r=e.key.id;if(this.has(r))return this.getPromise(r);var i=this._queues[e.key.row%this._queues.length].push(r),o=function(){t._keysToRequests.delete(r),t.notifyChange("updating")};return this._keysToRequests.set(r,e),i.then(o,o),this.notifyChange("updating"),i},t.prototype.reset=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].reset();this.notifyChange("updating")},t.prototype.resume=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].resume()},t.prototype._peekByScaleFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,r=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,o=0,n=e;o<n.length;o++){var s=n[o],u=this._keysToRequests.get(s),c=this.tileInfoView.getTileScale(u.key);a.has(c)||(a.set(c,[]),r=Math.max(c,r),i=Math.min(c,i)),a.get(c).push(u.key),h.add(c)}var p=this.state.scale;a.has(p)||(function(e,t){e.length=0,t.forEach(function(t){return e.push(t)})}(l,h),l.sort(),p=l.reduce(function(e,t,r,i){return Math.abs(t-p)<Math.abs(e-p)?t:e},l[0])),p=Math.min(p,r),p=Math.max(p,i);var f=a.get(p),d=t.getClosestInfoForScale(p),_=d.getColumnForX(this.state.center[0]),g=d.getRowForY(this.state.center[1]);return f.sort(function(e,t){var r=d.denormalizeCol(e.col,e.world),i=d.denormalizeCol(t.col,t.world);return Math.sqrt((_-r)*(_-r)+(g-e.row)*(g-e.row))-Math.sqrt((_-i)*(_-i)+(g-t.row)*(g-t.row))}),h.clear(),a.clear(),f[0].id},t.prototype._peekByCenterFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,r=this.state.center,i=Number.POSITIVE_INFINITY,o=null,n=0,u=e;n<u.length;n++){var h=u[n],l=this._keysToRequests.get(h);t.getTileCoords(c,l.key);var a=s.vec2.distance(c,r);a<i&&(i=a,o=l.key)}return o.id},i([n.property({constructOnly:!0})],t.prototype,"concurrency",void 0),i([n.property({constructOnly:!0})],t.prototype,"process",void 0),i([n.property()],t.prototype,"state",void 0),i([n.property({constructOnly:!0})],t.prototype,"strategy",void 0),i([n.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),i([n.property({constructOnly:!0})],t.prototype,"tileServers",void 0),i([n.property({readOnly:!0})],t.prototype,"updating",null),i([n.subclass()],t)}(n.declared(o))}.apply(null,i))||(e.exports=o)},1546:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(32),r(9),r(1556),r(57)],void 0===(o=function(e,t,r,i,o,n){return function(){function e(e){var t=this;this._apiPromises=new Map,this._processingItems=new Map,this._isPaused=!1,this._schedule=null,this._task=null,this._pendingProcessing=0,this.concurrency=1,this.ordered=!1,e.concurrency&&(this.concurrency=e.concurrency),e.ordered&&(this.ordered=!0,this._itemsToProcess=[]),this._queue=new o({peeker:e.peeker}),this.process=e.process;var r=e.scheduler;e.priority&&r&&(this._task=r.registerTask(e.priority,function(e){return t.update(e)},function(){return t.needsUpdate()}))}return e.prototype.destroy=function(){this.clear(),this._schedule&&(this._schedule.remove(),this._schedule=null),this._task&&(this._task.remove(),this._task=null)},Object.defineProperty(e.prototype,"length",{get:function(){return this._processingItems.size+this._queue.length+this._pendingProcessing},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear();var e=[];this._processingItems.forEach(function(t){return e.push(t.resultPromise)}),this._processingItems.clear(),e.forEach(function(e){return e.cancel()}),e.length=0,this._apiPromises.forEach(function(t){return e.push(t)}),this._apiPromises.clear(),e.forEach(function(e){return e.cancel()}),this._cancelNext()},e.prototype.find=function(e,t){var r=this,i=void 0;return this._apiPromises.forEach(function(o,n){e.call(t,n)&&(i=r._apiPromises.get(n).promise)}),i},e.prototype.get=function(e){var t=this._apiPromises.get(e);return t&&t.promise||void 0},e.prototype.isOngoing=function(e){return this._processingItems.has(e)},e.prototype.has=function(e){return this._apiPromises.has(e)},e.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},e.prototype.push=function(e){var t=this;if(this._apiPromises.has(e))return this._apiPromises.get(e).promise;var r=i.createDeferred(function(r){var i=t._processingItems.get(e);i?i.resultPromise.cancel(r):(t._remove(e),t._scheduleNext())});return this._add(e,r),this._scheduleNext(),r.promise},e.prototype.reset=function(){var e=[];this._processingItems.forEach(function(t){return e.push(t)}),this._processingItems.clear();for(var t=0,r=e;t<r.length;t++){var i=r[t];i.resultPromise.isFulfilled()?this._processReset(i):(i.isReset=!0,i.resultPromise.cancel())}},e.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())},e.prototype.needsUpdate=function(){return!this._isPaused&&this._queue.length>0&&this._processingItems.size<this.concurrency},e.prototype.update=function(e){for(;!e.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),e.madeProgress()},e.prototype._scheduleNext=function(){var e=this;this._task||this._isPaused||this._schedule||(this._schedule=n.schedule(function(){e._schedule=null,e._next()}))},e.prototype._next=function(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())},e.prototype._cancelNext=function(){this._schedule&&(this._schedule.remove(),this._schedule=null)},e.prototype._processResult=function(e,t){this._remove(e.item),this._scheduleNext(),e.dfd.resolve(t)},e.prototype._processError=function(e,t){e.isReset?this._processReset(e):(this._remove(e.item),this._scheduleNext(),e.dfd.reject(t))},e.prototype._processReset=function(e){this._remove(e.item),this._add(e.item,e.dfd),this._scheduleNext()},e.prototype._processOrdered=function(e,t){var r=this;if(e.isReset)this._processReset(e);else{e.result=t;var i=!1;this._processingItems.forEach(function(e){i||(e.result?r._itemsToProcess.push(e):i=!0)});for(var o=0,n=this._itemsToProcess;o<n.length;o++){var s=n[o];!1===s.result.ok?this._processError(s,s.result.error):this._processResult(s,s.result.value)}this._itemsToProcess.length=0}},e.prototype._process=function(e){var t=this;if(!r.isNone(e)){var i=this._apiPromises.get(e);this._pendingProcessing++;var o=this.process(e);if(this._pendingProcessing--,function(e){return e&&"function"==typeof e.then}(o)){var n={item:e,resultPromise:o,result:null,dfd:i,isReset:!1};this._processingItems.set(e,n),this.ordered?o.then(function(e){return t._processOrdered(n,{ok:!0,value:e})},function(e){return t._processOrdered(n,{ok:!1,error:e})}):o.then(function(e){return t._processResult(n,e)},function(e){return t._processError(n,e)})}else i.resolve(o),this._remove(e)}},e.prototype._add=function(e,t){this._apiPromises.set(e,t),this._queue.push(e)},e.prototype._remove=function(e){this._queue.remove(e),this._apiPromises.delete(e),this._processingItems.delete(e)},Object.defineProperty(e.prototype,"test",{get:function(){var e=this;return{update:function(t){return e.update(t)}}},enumerable:!0,configurable:!0}),e}()}.apply(null,i))||(e.exports=o)},1555:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(5),r(1),r(1510),r(1505)],void 0===(o=function(e,t,r,i,o,n){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.doRender=function(t){this.visible&&t.drawPhase===n.WGLDrawPhase.MAP&&e.prototype.doRender.call(this,t)},t.prototype.renderChildren=function(e){var t=this.stage.painter,r=this.children,i=e.drawPhase;this.sortChildren(function(e,t){return t.resolution-e.resolution}),e.drawPhase=n.WGLDrawPhase.CLIP,t.startStencilBurn();for(var o=0,s=r.length;o<s;o++){(u=r[o]).attached&&u.visible&&(t.stencilRef=o,u.processRender(e))}e.drawPhase=i,t.startStencilDraw();for(o=0,s=r.length;o<s;o++){var u;(u=r[o]).attached&&u.visible&&(t.stencilRef=o,u.processRender(e))}t.endStencilDraw()},t}(o.Container);t.BitmapContainer=s}.apply(null,i))||(e.exports=o)},1556:function(e,t,r){var i,o;i=[r.dj.c(e.i),t],void 0===(o=function(e,t){return function(){function e(e){this._items=[],this._itemSet=new Set,this._peeker=function(e){return e[0]},this._length=0,e&&e.peeker&&(this._peeker=e.peeker)}return Object.defineProperty(e.prototype,"length",{get:function(){return this._length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._itemSet.clear(),this._items.length=0,this._length=0},e.prototype.peek=function(){if(0!==this._length)return this._peeker(this._items)},e.prototype.push=function(e){this.contains(e)||this._add(e)},e.prototype.contains=function(e){return this._length>0&&this._itemSet.has(e)},e.prototype.pop=function(){if(0!==this._length){var e=this.peek();return this._remove(e),e}},e.prototype.remove=function(e){this.contains(e)&&this._remove(e)},e.prototype._add=function(e){this._items.push(e),this._itemSet.add(e),this._length++},e.prototype._remove=function(e){this._itemSet.delete(e),this._items.splice(this._items.indexOf(e),1),this._length--},e}()}.apply(null,i))||(e.exports=o)},1595:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(5),r(170),r(548),r(53)],void 0===(o=function(e,t,r,i,o,n){function s(e,t,r){var i={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0};return t&&r&&(i.width=t,i.height=r),new n(e,i)}function u(e){return e.updateTexture()}function h(e){a.has(e)&&(l.splice(l.indexOf(e),1),a.delete(e))}Object.defineProperty(t,"__esModule",{value:!0});var l=[],a=new i.default,c=function(e){function t(t){void 0===t&&(t=null);var r=e.call(this)||this;return r._height=void 0,r.pixelRatio=1,r.resolution=0,r.rotation=0,r._source=null,r._width=void 0,r.x=0,r.y=0,r.source=t,r.requestRender=r.requestRender.bind(r),r}return r(t,e),Object.defineProperty(t.prototype,"height",{get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"source",{get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sourceHeight",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sourceWidth",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e},enumerable:!0,configurable:!0}),t.prototype.attach=function(){return u(this),e.prototype.attach.call(this),!0},t.prototype.detach=function(){this._texture.dispose(),this._texture=null,h(this)},t.prototype.invalidateTexture=function(){this.attached?u(this):h(this)},t.prototype.updateTexture=function(){this._texture||(this.source?this._texture=s(this.stage.context,this.sourceWidth,this.sourceHeight):this._texture=s(this.stage.context));var e=this.source;e?(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(e)?this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(e)):function(e){return e&&!("render"in e)}(e)&&this._texture.setData(e),this.sourceWidth===this.width&&this.sourceHeight===this.height||this._texture.generateMipmap(),this.ready(),this.requestRender()):this._texture.setData(null)},t.prototype.setSamplingMode=function(e){if(this._texture){if(!this._texture.descriptor.hasMipmap)return void this._texture.setSamplingMode(e);var t;t=9728===e?9985:9729===e?9987:e,this._texture.setSamplingMode(t)}},t.prototype.bind=function(e){this._texture&&this.stage.context.bindTexture(this._texture,e)},t.prototype.doRender=function(e){if(this.source&&this.width>0&&this.isReady){var t=this.stage.painter,r=e.state.resolution,i=this.resolution/this.pixelRatio/r;i<.05||t.drawBitmap(e,this,i)}},t}(o.DisplayObject);t.Bitmap=c}.apply(null,i))||(e.exports=o)},1687:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(5)],void 0===(o=function(e,t,r){return function(e){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.call(this)||this}return r(t,e),t}(e)}}.apply(null,i))||(e.exports=o)}}]);