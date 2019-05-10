(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/BuildingSceneLayer":623,"esri/layers/mixins/SceneService":1593,"esri/support/popupUtils":1606,"esri/layers/support/BuildingFilterMode":1683,"esri/layers/buildingSublayers/BuildingSublayer":1776,"esri/layers/buildingSublayers/BuildingGroupSublayer":2164,"esri/layers/buildingSublayers/BuildingComponentSublayer":2165,"esri/layers/support/BuildingFilter":2166,"esri/core/uuid":2167,"esri/layers/support/BuildingFilterBlock":2168,"esri/layers/support/BuildingFilterModeSolid":2169,"esri/layers/support/BuildingFilterModeWireframe":2170})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1593:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(2),t(1),t(50),t(13),t(10),t(214),t(9),t(33),t(0),t(35),t(180),t(34),t(126),t(369),t(261),t(260),t(172),t(211)],void 0===(i=function(e,r,t,o,i,n,l,a,p,s,u,y,d,c,f,v,h,b,g,m){var S=l.getLogger("esri.layers.mixins.SceneService");return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.blendMode=null,r.spatialReference=null,r.fullExtent=null,r.heightModelInfo=null,r.version={major:Number.NaN,minor:Number.NaN,versionString:""},r.copyright=null,r.sublayerTitleMode="item-title",r.title=null,r.layerId=null,r}return t(r,e),r.prototype.readSpatialReference=function(e,r){return this._readSpatialReference(r)},r.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return c.fromJSON(e.spatialReference);var r=e.store,t=r.indexCRS||r.geographicCRS,o=t&&parseInt(t.substring(t.lastIndexOf("/")+1,t.length),10);return null!=o?new c(o):null},r.prototype.readFullExtent=function(e,r){var t=r.store,o=this._readSpatialReference(r);return null==o||null==t||null==t.extent||!Array.isArray(t.extent)||t.extent.some(function(e){return e<-1e38})?null:new y({xmin:t.extent[0],ymin:t.extent[1],xmax:t.extent[2],ymax:t.extent[3],spatialReference:o})},r.prototype.readVersion=function(e,r){var t=r.store,o=null!=t.version?t.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:o},n=o.split(".");return n.length>=2&&(i.major=parseInt(n[0],10),i.minor=parseInt(n[1],10)),i},r.prototype.readTitlePortalItem=function(e,r){return"item-title"!==this.sublayerTitleMode?void 0:e},r.prototype.readTitleService=function(e,r){var t=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return g.titleFromUrlAndName(this.url,r.name);var o=r.name||g.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&t&&(o=t+" - "+o),g.cleanTitle(o)},r.prototype.readLayerId=function(e,r){return r.id},Object.defineProperty(r.prototype,"url",{set:function(e){var r=g.sanitizeUrlWithLayerId(this,e,S);this._set("url",r.url),null!=r.layerId&&this._set("layerId",r.layerId)},enumerable:!0,configurable:!0}),r.prototype.writeUrl=function(e,r,t,o){g.writeUrlWithLayerId(this,e,"layers",r,o)},Object.defineProperty(r.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var r=s.urlToObject(e);return null!=this.layerId&&g.match.test(r.path)&&(r.path=r.path+"/layers/"+this.layerId),r},enumerable:!0,configurable:!0}),r.prototype.readRootNode=function(e,r){return r.store.rootNode},r.prototype._verifyRootNodeAndUpdateExtent=function(){var e=this;return this._fetchRootNode().then(function(r){return e._updateExtentFromRootNode(r)})},r.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var r=e.mbs[2],t=e.mbs[3];this.fullExtent.zmin=r-t,this.fullExtent.zmax=r+t}},r.prototype._fetchRootNode=function(){if(!this.rootNode)return p.resolve();var e=s.join(this.parsedUrl.path,this.rootNode);return i(e,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data}).catch(function(r){throw new n("sceneservice:root-node-missing","Root node missing.",{error:r,url:e})})},r.prototype._fetchService=function(){var e=this;return(null==this.layerId&&/SceneServer\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(r){null!=r&&(e.layerId=r)}):p.resolve()).then(function(){return e._fetchServiceLayer()})},r.prototype._fetchFirstLayerId=function(){return i(this.url,{query:{f:"json"},responseType:"json"}).then(function(e){if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id})},r.prototype._fetchServiceLayer=function(){var e=this;return i(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:"));var t=r.data;e.read(t,{origin:"service",url:e.parsedUrl}),e._validateLayer(t)})},r.prototype._validateLayer=function(e){},o([u.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],r.prototype,"properties",void 0),o([u.property({type:c})],r.prototype,"spatialReference",void 0),o([u.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readSpatialReference",null),o([u.property({type:y})],r.prototype,"fullExtent",void 0),o([u.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readFullExtent",null),o([u.property({readOnly:!0,type:d})],r.prototype,"heightModelInfo",void 0),o([u.property({readOnly:!0})],r.prototype,"version",void 0),o([u.reader("version",["store.version"])],r.prototype,"readVersion",null),o([u.property({type:String,json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),o([u.property({type:String,json:{read:!1}})],r.prototype,"sublayerTitleMode",void 0),o([u.property({type:String})],r.prototype,"title",void 0),o([u.reader("portal-item","title")],r.prototype,"readTitlePortalItem",null),o([u.reader("service","title",["name"])],r.prototype,"readTitleService",null),o([u.property({type:Number})],r.prototype,"layerId",void 0),o([u.reader("service","layerId",["id"])],r.prototype,"readLayerId",null),o([u.property(m.url)],r.prototype,"url",null),o([u.writer("url")],r.prototype,"writeUrl",null),o([u.property({dependsOn:["layerId"]})],r.prototype,"parsedUrl",null),o([u.property()],r.prototype,"store",void 0),o([u.property({type:String})],r.prototype,"rootNode",void 0),o([u.reader("rootNode",["store.rootNode"])],r.prototype,"readRootNode",null),o([u.subclass("esri.layers.mixins.SceneService")],r)}(u.declared(f,v,a,h,b))}.apply(null,o))||(e.exports=i)},1606:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(11),t(377),t(358),t(575),t(376),t(568)],void 0===(i=function(e,r,t,o,i,n,l,a){function p(e,r){var t=e;if(r.ignoreFieldTypes&&(e=e.filter(function(e){return-1===r.ignoreFieldTypes.indexOf(e.type)})),0===e.length)return null;var o=r.maximumFields&&e.length>r.maximumFields;return o&&(e=e.slice(0,r.maximumFields)),e===t&&(e=e.slice()),e.sort(s),{fields:e,limitExceeded:o}}function s(e,r){return"oid"===e.type?-1:"oid"===r.type?1:d(e)?-1:d(r)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((r.alias||r.name).toLocaleLowerCase())}function u(e){return e.map(function(e){return new l({fieldName:e.name,label:e.alias,format:function(e){switch(e.type){case"small-integer":case"integer":case"single":return new a({digitSeparator:!0,places:0});case"double":return new a({digitSeparator:!0,places:2});case"date":return new a({dateFormat:"long-month-day-year"});default:return null}}(e),visible:!0})})}function y(e){var r=[new n.FieldsContent,new n.AttachmentsContent];return e&&r.push(new n.TextContent({text:"<small>"+o.tooManyFields+"</small>"})),r}function d(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}Object.defineProperty(r,"__esModule",{value:!0}),r.createPopupTemplate=function(e,r){var o=e.fields,n=e.title;if(!o)return null;var l=p(o,t({},c,r));if(!l)return null;var a=function(e,r){for(var t=0,o=r;t<o.length;t++){var i=o[t];if(d(i))return e+": {"+i.name+"}"}return e}(n,l.fields),s=y(l.limitExceeded),f=u(l.fields);return new i({title:a,content:s,fieldInfos:f})};var c={ignoreFieldTypes:["geometry","blob","raster","guid","xml"],maximumFields:75}}.apply(null,o))||(e.exports=i)},1683:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(2),t(1),t(8),t(0)],void 0===(i=function(e,r,t,o,i,n){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),o([n.property({readOnly:!0})],r.prototype,"type",void 0),o([n.subclass("esri.layers.buildingSublayers.BuildingFilterMode")],r)}(n.declared(i))}.apply(null,o))||(e.exports=i)},1776:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(210),t(214),t(0),t(211)],void 0===(i=function(e,r,t,o,i,n,l,a,p){return function(e){function r(r){var t=e.call(this)||this;return t.title="",t.id=-1,t.modelName=null,t.visible=!0,t.opacity=1,t}return o(r,e),r.prototype.readTitle=function(e,r,t){return"string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""},r.prototype.readIdOnlyOnce=function(e,r,t){return-1!==this.id?this.id:"number"==typeof e?e:void 0},i([a.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],r.prototype,"title",void 0),i([a.reader("service","title",["alias","name"])],r.prototype,"readTitle",null),i([a.property()],r.prototype,"layer",void 0),i([a.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"id",void 0),i([a.reader("service","id")],r.prototype,"readIdOnlyOnce",null),i([a.property(p.readOnlyService(String))],r.prototype,"modelName",void 0),i([a.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],r.prototype,"visible",void 0),i([a.property({type:Number,json:{write:!0}})],r.prototype,"opacity",void 0),i([a.subclass("esri.layers.buildingSublayers.BuildingSublayer")],r)}(a.declared(l,n.Identifiable))}.apply(null,o))||(e.exports=i)},2164:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(97),t(26),t(272),t(131),t(0),t(2165),t(1776)],void 0===(i=function(e,r,t,o,i,n,l,a,p,s,u,y){function d(e,r,t){if(e&&Array.isArray(e))return new l(e.map(function(e){var r=function(e){return"group"===e.layerType?f:u}(e);if(r){var o=new r;return o.read(e,t),o}t&&t.messages&&e&&t.messages.push(new p("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))}))}var c={type:l,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}},f=function(e){function r(r){var t=e.call(this)||this;return t.type="building-group",t.listMode="show",t.sublayers=null,t}var t;return o(r,e),t=r,r.prototype.loadAll=function(){var e=this;return n.safeCast(a.loadAllChildren(this,function(r){return t.forEachSublayer(e.sublayers,function(e){"building-group"!==e.type&&r(e)})}))},i([s.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),i([s.property(c)],r.prototype,"sublayers",void 0),t=i([s.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(s.declared(y));return function(e){e.sublayersProperty=c,e.readSublayers=d,e.forEachSublayer=function e(r,t){r.forEach(function(r){t(r),"building-group"===r.type&&e(r.sublayers,t)})}}(f||(f={})),f}.apply(null,o))||(e.exports=i)},2165:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(358),t(359),t(50),t(134),t(0),t(35),t(34),t(1776),t(211),t(354),t(365),t(1606),t(279)],void 0===(i=function(e,r,t,o,i,n,l,a,p,s,u,y,d,c,f,v,h,b){return function(e){function r(r){var t=e.call(this)||this;return t.type="building-component",t.fields=[],t.listMode="show",t.renderer=null,t.definitionExpression=null,t.popupEnabled=!0,t.popupTemplate=null,t.geometryType="mesh",t.profile="mesh-pyramids",t}return o(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,r=this.fields;e<r.length;e++){var t=r[e];if("oid"===t.type)return t.name}return null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),r.prototype.load=function(){return this.addResolvingPromise(this._fetchService()),this.when()},r.prototype.createPopupTemplate=function(e){return h.createPopupTemplate(this,e)},r.prototype._fetchService=function(){var e=this;return a(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(r){var t=r.data;e.read(t,{origin:"service",url:e.parsedUrl})})},i([s.property({readOnly:!0,dependsOn:["layer","id"]})],r.prototype,"parsedUrl",null),i([s.property({readOnly:!0})],r.prototype,"store",void 0),i([s.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),i([s.property({readOnly:!0,type:[f]})],r.prototype,"fields",void 0),i([s.property({type:String,dependsOn:["fields"],readOnly:!0})],r.prototype,"objectIdField",null),i([s.property({readOnly:!0,type:u,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),i([s.property({readOnly:!0,type:y,aliasOf:"layer.spatialReference"})],r.prototype,"spatialReference",void 0),i([s.property({readOnly:!0,aliasOf:"layer.version"})],r.prototype,"version",void 0),i([s.property({readOnly:!0,type:b,aliasOf:"layer.elevationInfo"})],r.prototype,"elevationInfo",void 0),i([s.property({type:["hide","show"],json:{write:!0}})],r.prototype,"listMode",void 0),i([s.property({types:l.rendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:v.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:v.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],r.prototype,"renderer",void 0),i([s.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),i([s.property(c.popupEnabled)],r.prototype,"popupEnabled",void 0),i([s.property({type:n,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),i([s.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),i([s.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),i([s.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],r)}(s.declared(d,p))}.apply(null,o))||(e.exports=i)},2166:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(2),t(1),t(26),t(8),t(2167),t(0),t(2168)],void 0===(i=function(e,r,t,o,i,n,l,a,p){var s=i.ofType(p);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.id=l.generateUUID(),r.visible=!0,r.name=null,r}return t(r,e),o([a.property({type:String})],r.prototype,"description",void 0),o([a.property({type:s})],r.prototype,"filterBlocks",void 0),o([a.property({type:String})],r.prototype,"id",void 0),o([a.property({json:{read:{source:"isVisible"}},type:Boolean})],r.prototype,"visible",void 0),o([a.property({type:String})],r.prototype,"name",void 0),o([a.subclass("esri.layers.buildingSublayers.BuildingFilter")],r)}(a.declared(n))}.apply(null,o))||(e.exports=i)},2167:function(e,r,t){var o,i;o=[t.dj.c(e.i),r],void 0===(i=function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.generateUUID=function(){var e=t.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(r){return e[r].toString(16)};return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)};var t=window.crypto||window.msCrypto}.apply(null,o))||(e.exports=i)},2168:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(2),t(1),t(8),t(0),t(1683),t(2169),t(2170)],void 0===(i=function(e,r,t,o,i,n,l,a,p){var s={types:{key:"type",base:l,typeMap:{solid:a,wireframe:p}}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterExpression=null,r.filterMode=null,r.title=null,r}return t(r,e),o([n.property({type:String})],r.prototype,"filterExpression",void 0),o([n.property(s)],r.prototype,"filterMode",void 0),o([n.property({type:String})],r.prototype,"title",void 0),o([n.subclass("esri.layers.buildingSublayers.BuildingFilterBlock")],r)}(n.declared(i))}.apply(null,o))||(e.exports=i)},2169:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(2),t(1),t(0),t(1683)],void 0===(i=function(e,r,t,o,i,n){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="solid",r}return t(r,e),o([i.property()],r.prototype,"type",void 0),o([i.subclass("esri.layers.support.BuildingFilterModeSolid")],r)}(i.declared(n))}.apply(null,o))||(e.exports=i)},2170:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(2),t(1),t(0),t(1683),t(392)],void 0===(i=function(e,r,t,o,i,n,l){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="wireframe",r.edges=null,r}return t(r,e),o([i.property()],r.prototype,"type",void 0),o([i.property(l.symbol3dEdgesProperty)],r.prototype,"edges",void 0),o([i.subclass("esri.layers.buildingSublayers.BuildingFilterModeWireframe")],r)}(i.declared(n))}.apply(null,o))||(e.exports=i)},623:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(11),t(2),t(1),t(97),t(26),t(219),t(13),t(7),t(272),t(10),t(9),t(0),t(35),t(34),t(126),t(2164),t(1593),t(2166),t(211)],void 0===(i=function(e,r,o,i,n,l,a,p,s,u,y,d,c,f,v,h,b,g,m,S,w){var x=d.getLogger("esri.layers.BuildingSceneLayer"),O=a.ofType(S);return function(e){function r(r){var t=e.call(this)||this;return t.operationalLayerType="BuildingSceneLayer",t.allSublayers=new p({root:t,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),t.sublayers=null,t.sublayerOverrides=null,t.filters=new O,t.activeFilterId=null,t.type="building-scene",t}return i(r,e),r.prototype.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},r.prototype.readSublayers=function(e,r,t){var o=this,i=g.readSublayers(e,r,t);return g.forEachSublayer(i,function(e){return e.layer=o}),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i},r.prototype.applySublayerOverrides=function(e,r){var t=r.overrides,o=r.context;g.forEachSublayer(e,function(e){return e.read(t.get(e.id),o)})},r.prototype.readSublayerOverrides=function(e,r){for(var t=new Map,o=0,i=e;o<i.length;o++){var n=i[o];null!=n&&"object"==typeof n&&"number"==typeof n.id?t.set(n.id,n):r.messages.push(new s("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}))}return{overrides:t,context:r}},r.prototype.writeSublayerOverrides=function(e,r,t){var o=[];g.forEachSublayer(this.sublayers,function(e){var r=e.write({},t);Object.keys(r).length>1&&o.push(r)}),o.length>0&&(r.sublayers=o)},r.prototype.writeUnappliedOverrides=function(e,r){r.sublayers=[],e.overrides.forEach(function(e){r.sublayers.push(u.clone(e))})},r.prototype.write=function(e,r){return e=this.inherited(arguments),r&&"web-scene"===r.origin&&(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e},r.prototype.read=function(e,r){if(this.inherited(arguments),r&&"web-scene"===r.origin&&null!=e&&Array.isArray(e.sublayers)){var t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()});return this.addResolvingPromise(r),this.when()},r.prototype.loadAll=function(){var e=this;return l.safeCast(y.loadAll(this,function(r){return g.forEachSublayer(e.sublayers,function(e){"building-group"!==e.type&&r(e)})}))},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return c.reject(new s("building-scene-layer:view-not-supported","BuildingSceneLayer is only supported in 3D"));case"3d":return c.create(function(e){return Promise.all([t.e(0),t.e(3),t.e(10),t.e(12),t.e(54)]).then(function(){var r=[t(2257)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new s("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&x.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&x.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},n([f.property({type:["BuildingSceneLayer"]})],r.prototype,"operationalLayerType",void 0),n([f.property({readOnly:!0})],r.prototype,"allSublayers",void 0),n([f.property(g.sublayersProperty)],r.prototype,"sublayers",void 0),n([f.reader("service","sublayers")],r.prototype,"readSublayers",null),n([f.property({type:O,nonNullable:!0})],r.prototype,"filters",void 0),n([f.property({type:String})],r.prototype,"activeFilterId",void 0),n([f.property(w.readOnlyService(v))],r.prototype,"fullExtent",void 0),n([f.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),n([f.property(w.readOnlyService(h))],r.prototype,"spatialReference",void 0),n([f.property(w.elevationInfo)],r.prototype,"elevationInfo",null),n([f.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),n([f.subclass("esri.layers.BuildingSceneLayer")],r)}(f.declared(b,m))}.apply(null,o))||(e.exports=i)}}]);