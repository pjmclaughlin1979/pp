(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/data/QueryEngineCapabilities":1545,"esri/layers/graphics/sources/support/clientSideDefaults":1632,"esri/layers/graphics/sources/support/MemorySourceWorker":2227})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1545:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.queryCapabilities={supportsStatistics:!0,supportsCentroid:!0,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0}}.apply(null,r))||(e.exports=n)},1632:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(11),i(19),i(7)],void 0===(n=function(e,t,i,r,n){Object.defineProperty(t,"__esModule",{value:!0});var s={type:"esriSMS",style:"esriSMSCircle",size:6,color:[252,146,31,255],outline:{width:.75,color:[153,153,153,255]}},a={type:"esriSLS",style:"esriSLSSolid",width:1,color:[252,146,31,255]},u={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}};t.createDrawingInfo=function(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s:"esriGeometryPolyline"===e?a:u}}},t.createDefaultAttributesFunction=function(e,t){if(r("csp-restrictions"))return function(){var r;return i(((r={})[t]=null,r),e)};try{var n="this."+t+" = null;";for(var s in e)n+="this."+s+" = "+JSON.stringify(e[s])+";";var a=new Function(n);return function(){return new a}}catch(r){return function(){var r;return i(((r={})[t]=null,r),e)}}},t.createDefaultTemplate=function(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:n.clone(e)}}]}}.apply(null,r))||(e.exports=n)},2227:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(22),i(11),i(13),i(9),i(69),i(96),i(547),i(1544),i(1518),i(1553),i(1632),i(396),i(127)],void 0===(n=function(e,t,i,r,n,s,a,u,o,l,d,p,c,f,y){function h(e){return a.isPoint(e)?null!=e.z:!!e.hasZ}function m(e){return a.isPoint(e)?null!=e.m:!!e.hasM}Object.defineProperty(t,"__esModule",{value:!0});var g=u.WGS84,b={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:u.WGS84},v={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},F=function(){return function(){this.code=null,this.description=null}}(),I=function(){return function(e){this.error=new F,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}(),_=function(){return function(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}(),j=function(){function e(){this._queryEngine=null,this._nextObjectId=null,this._fieldsMap=new Map}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFieldNames=this._fieldsMap=this._createDefaultAttributes=null},e.prototype.load=function(e){var t=this,i=[],a=e.features,u=this._inferLayerProperties(a,e.fields),o=e.fields||[],h=null!=e.hasM?e.hasM:u.hasM,m=null!=e.hasZ?e.hasZ:u.hasZ,F=!e.spatialReference&&!u.spatialReference,I=F?g:e.spatialReference||u.spatialReference,_=F?b:null,j=e.geometryType||u.geometryType,w=e.objectIdField||u.objectIdField,E=e.timeInfo;if(F&&i.push({type:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!j)return s.reject(new n("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features"));if(!w)return s.reject(new n("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields"));if(u.objectIdField&&w!==u.objectIdField&&(i.push({type:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'+w+'" doesn\'t match the field name "'+u.objectIdField+'", found in the provided fields'}),w=u.objectIdField),w&&!u.objectIdField){var T=null;o.some(function(e){return e.name===w&&(T=e,!0)})?(T.type="esriFieldTypeOID",T.editable=!1,T.nullable=!1):o.unshift({alias:w,name:w,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(var S=0,M=o;S<M.length;S++){if(null==(R=M[S]).name&&(R.name=R.alias),null==R.alias&&(R.alias=R.name),!R.name)return s.reject(new n("feature-layer:invalid-field-name","field name is missing",{field:R}));if(R.name===w&&(R.type="esriFieldTypeOID"),-1===f.kebabDict.jsonValues.indexOf(R.type))return s.reject(new n("feature-layer:invalid-field-type",'invalid type for field "'+R.name+'"',{field:R}))}var x={};this._requiredFieldNames=[];for(var q=0,D=o;q<D.length;q++){var R;if("esriFieldTypeOID"!==(R=D[q]).type&&"esriFieldTypeGlobalID"!==R.type){R.editable=null==R.editable||!!R.editable,R.nullable=null==R.nullable||!!R.nullable;var O=y.getFieldDefaultValue(R);R.nullable||void 0!==O?x[R.name]=O:this._requiredFieldNames.push(R.name)}this._fieldsMap.set(R.name.trim(),R),this._fieldsMap.set(R.name.trim().toLowerCase(),R)}if(this._createDefaultAttributes=c.createDefaultAttributesFunction(x,w),E){if(E.startTimeField){var C=this._fieldsMap.get(E.startTimeField.toLowerCase());C?(E.startTimeField=C.name,C.type="esriFieldTypeDate"):E.startTimeField=null}if(E.endTimeField){var P=this._fieldsMap.get(E.endTimeField.toLowerCase());P?(E.endTimeField=P.name,P.type="esriFieldTypeDate"):E.endTimeField=null}if(E.trackIdField){var Q=this._fieldsMap.get(E.trackIdField.toLowerCase());Q?E.trackIdField=Q.name:(E.trackIdField=null,i.push({type:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:E}}))}E.startTimeField||E.endTimeField||(i.push({type:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:E}}),E=null)}var k={warnings:i,featureErrors:[],layerDefinition:r({},v,{drawingInfo:c.createDrawingInfo(j),templates:c.createDefaultTemplate(x),extent:_,geometryType:j,objectIdField:w,fields:o,hasZ:!!m,hasM:!!h,timeInfo:E}),assignedObjectIds:{}};if(this._queryEngine=new p.default({fields:o,geometryType:j,hasM:h,hasZ:m,objectIdField:w,spatialReference:I,featureStore:new l.default({geometryType:j,hasM:h,hasZ:m}),timeInfo:E}),!a||!a.length)return this._nextObjectId=1,s.resolve(k);var A=a.reduce(function(e,t){var i=t.attributes&&t.attributes[w];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)},0);return this._nextObjectId=1+A,d.checkProjectionSupport(a,I).then(function(){return t._loadInitialFeatures(k,a)})},e.prototype.applyEdits=function(e){var t=this,i=this._queryEngine.spatialReference;return d.checkProjectionSupport(e.adds,i).then(function(){return d.checkProjectionSupport(e.updates,i)}).then(function(){return t._applyEdits(e)})},e.prototype.queryFeatures=function(e){return this._queryEngine.executeQuery(e)},e.prototype.queryFeatureCount=function(e){return this._queryEngine.executeQueryForCount(e)},e.prototype.queryObjectIds=function(e){return this._queryEngine.executeQueryForIds(e)},e.prototype.queryExtent=function(e){return this._queryEngine.executeQueryForExtent(e)},e.prototype._inferLayerProperties=function(e,t){for(var i=void 0,r=void 0,n=null,s=null,u=null,o=0,l=e;o<l.length;o++){var d=l[o].geometry;if(d&&(n||(n=a.getJsonType(d)),s||(s=d.spatialReference),null==i&&(i=h(d)),null==r&&(r=m(d)),n&&s&&null!=i&&null!=r))break}if(t&&t.length){var p=null;t.some(function(e){var t="esriFieldTypeOID"===e.type,i=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return p=e,t||i})&&(u=p.name)}return{geometryType:n,spatialReference:s,objectIdField:u,hasM:r,hasZ:i}},e.prototype._loadInitialFeatures=function(e,t){for(var i=this._queryEngine,r=i.geometryType,n=i.hasM,s=i.hasZ,u=i.objectIdField,l=i.spatialReference,p=i.featureStore,c=[],f=0,y=t;f<y.length;f++){var h=y[f];if(null!=h.uid&&(e.assignedObjectIds[h.uid]=-1),h.geometry&&r!==a.getJsonType(h.geometry))e.featureErrors.push(new I("Incorrect geometry type."));else{var m=this._createDefaultAttributes(),g=this._mixAttributes(m,h.attributes,!0);g?e.featureErrors.push(g):(this._assignObjectId(m,h.attributes,!0),h.attributes=m,null!=h.uid&&(e.assignedObjectIds[h.uid]=h.attributes[u]),h.geometry&&(h.geometry=d.project(h.geometry,h.geometry.spatialReference,l)),c.push(h))}}if(p.addMany(o.convertFromFeatures([],c,r,s,n,u)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var b=this._queryEngine.timeExtent,v=b.start,F=b.end;e.layerDefinition.timeInfo.timeExtent=[v,F]}return e},e.prototype._applyEdits=function(e){var t=e.adds,i=e.updates,r=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),r&&r.length){for(var s=0,a=r;s<a.length;s++){var u=a[s];n.deleteResults.push(new _(u))}this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}},e.prototype._applyAddEdits=function(e,t){for(var i=e.addResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,u=r.hasZ,l=r.objectIdField,p=r.spatialReference,c=r.featureStore,f=[],y=0,h=t;y<h.length;y++){var m=h[y];if(m.geometry&&n!==a.getJsonType(m.geometry))i.push(new I("Incorrect geometry type."));else{var g=this._createDefaultAttributes(),b=this._mixAttributes(g,m.attributes);if(b)i.push(b);else{if(this._assignObjectId(g,m.attributes),m.attributes=g,null!=m.uid){var v=m.attributes[l];e.uidToObjectId[m.uid]=v}m.geometry&&(m.geometry=d.project(m.geometry,m.geometry.spatialReference,p)),f.push(m),i.push(new _(m.attributes[l]))}}}c.addMany(o.convertFromFeatures([],f,n,u,s,l))},e.prototype._applyUpdateEdits=function(e,t){for(var i=e.updateResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,u=r.hasZ,l=r.objectIdField,p=r.spatialReference,c=r.featureStore,f=0,y=t;f<y.length;f++){var h=y[f],m=h.attributes,g=h.geometry,b=m&&m[l];if(null!=b)if(c.has(b)){var v=o.convertToFeature(c.getFeature(b),n,u,s);if(g){if(n!==a.getJsonType(g)){i.push(new I("Incorrect geometry type."));continue}v.geometry=d.project(g,g.spatialReference,p)}if(m){var F=this._mixAttributes(v.attributes,m);if(F){i.push(F);continue}}c.add(o.convertFromFeature(v,n,u,s,l)),i.push(new _(b))}else i.push(new I("Feature with object id "+b+" missing"));else i.push(new I("Identifier field "+l+" missing"))}},e.prototype._assignObjectId=function(e,t,i){void 0===i&&(i=!1);var r=this._queryEngine.objectIdField;i&&t&&isFinite(t[r])?e[r]=t[r]:e[r]=this._nextObjectId++},e.prototype._mixAttributes=function(e,t,i){for(var r in void 0===i&&(i=!1),t){var n=y.sanitizeNullFieldValue(t[r]),s=this._fieldsMap.get(r)||this._fieldsMap.get(r.toLowerCase());if(s&&(i||s.editable)){var a=y.validateFieldValue(s,n);if(a)return new I(y.validationErrorToString(a,s,n));e[s.name]=n}}for(var u=0,o=this._requiredFieldNames;u<o.length;u++){var l=o[u];if(void 0===e[l])return new I('missing required field "'+l+'"')}return null},e}();t.default=j}.apply(null,r))||(e.exports=n)}}]);