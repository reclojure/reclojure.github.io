goog.provide('portal.runtime.cson');
portal.runtime.cson.primitive_QMARK_ = (function portal$runtime$cson$primitive_QMARK_(value){
return ((cljs.core.int_QMARK_(value)) || (((cljs.core.float_QMARK_(value)) || (((cljs.core.double_QMARK_(value)) || ((((value == null)) || (((typeof value === 'string') || (cljs.core.boolean_QMARK_(value)))))))))));
});

/**
 * @interface
 */
portal.runtime.cson.ToJson = function(){};

var portal$runtime$cson$ToJson$_to_json$dyn_50692 = (function (value){
var x__4521__auto__ = (((value == null))?null:value);
var m__4522__auto__ = (portal.runtime.cson._to_json[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4522__auto__.call(null,value));
} else {
var m__4519__auto__ = (portal.runtime.cson._to_json["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4519__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("ToJson.-to-json",value);
}
}
});
portal.runtime.cson._to_json = (function portal$runtime$cson$_to_json(value){
if((((!((value == null)))) && ((!((value.portal$runtime$cson$ToJson$_to_json$arity$1 == null)))))){
return value.portal$runtime$cson$ToJson$_to_json$arity$1(value);
} else {
return portal$runtime$cson$ToJson$_to_json$dyn_50692(value);
}
});

portal.runtime.cson.tag = (function portal$runtime$cson$tag(var_args){
var G__50647 = arguments.length;
switch (G__50647) {
case 2:
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2 = (function (tag,a){
return [tag,a];
}));

(portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$3 = (function (tag,a,b){
return [tag,a,b];
}));

(portal.runtime.cson.tag.cljs$lang$maxFixedArity = 3);

if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.cson !== 'undefined') && (typeof portal.runtime.cson._STAR_options_STAR_ !== 'undefined')){
} else {
portal.runtime.cson._STAR_options_STAR_ = null;
}
portal.runtime.cson.transform = (function portal$runtime$cson$transform(value){
var temp__5751__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(portal.runtime.cson._STAR_options_STAR_);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));
} else {
return value;
}
});
portal.runtime.cson.to_json = (function portal$runtime$cson$to_json(value){
var value__$1 = portal.runtime.cson.transform(value);
if(portal.runtime.cson.primitive_QMARK_(value__$1)){
return value__$1;
} else {
return portal.runtime.cson._to_json(value__$1);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {portal.runtime.cson.ToJson}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
portal.runtime.cson.Tagged = (function (_tag,value,__meta,__extmap,__hash){
this._tag = _tag;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(portal.runtime.cson.Tagged.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50653,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50658 = k50653;
var G__50658__$1 = (((G__50658 instanceof cljs.core.Keyword))?G__50658.fqn:null);
switch (G__50658__$1) {
case "-tag":
return self__._tag;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50653,else__4475__auto__);

}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50659){
var vec__50660 = p__50659;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50660,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50660,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#portal.runtime.cson.Tagged{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-tag","-tag",593200022),self__._tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50652){
var self__ = this;
var G__50652__$1 = this;
return (new cljs.core.RecordIter((0),G__50652__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-tag","-tag",593200022),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new portal.runtime.cson.Tagged(self__._tag,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1775160930 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50654,other50655){
var self__ = this;
var this50654__$1 = this;
return (((!((other50655 == null)))) && ((((this50654__$1.constructor === other50655.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50654__$1._tag,other50655._tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50654__$1.value,other50655.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50654__$1.__extmap,other50655.__extmap)))))))));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"-tag","-tag",593200022),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new portal.runtime.cson.Tagged(self__._tag,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50653){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50664 = k50653;
var G__50664__$1 = (((G__50664 instanceof cljs.core.Keyword))?G__50664.fqn:null);
switch (G__50664__$1) {
case "-tag":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50653);

}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50652){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50665 = cljs.core.keyword_identical_QMARK_;
var expr__50666 = k__4481__auto__;
if(cljs.core.truth_((pred__50665.cljs$core$IFn$_invoke$arity$2 ? pred__50665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-tag","-tag",593200022),expr__50666) : pred__50665.call(null,new cljs.core.Keyword(null,"-tag","-tag",593200022),expr__50666)))){
return (new portal.runtime.cson.Tagged(G__50652,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50665.cljs$core$IFn$_invoke$arity$2 ? pred__50665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__50666) : pred__50665.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__50666)))){
return (new portal.runtime.cson.Tagged(self__._tag,G__50652,self__.__meta,self__.__extmap,null));
} else {
return (new portal.runtime.cson.Tagged(self__._tag,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50652),null));
}
}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"-tag","-tag",593200022),self__._tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50652){
var self__ = this;
var this__4471__auto____$1 = this;
return (new portal.runtime.cson.Tagged(self__._tag,self__.value,G__50652,self__.__extmap,self__.__hash));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(portal.runtime.cson.Tagged.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(portal.runtime.cson.Tagged.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2(self__._tag,portal.runtime.cson.to_json(self__.value));
}));

(portal.runtime.cson.Tagged.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-tag","-tag",-2061235747,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(portal.runtime.cson.Tagged.cljs$lang$type = true);

(portal.runtime.cson.Tagged.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"portal.runtime.cson/Tagged",null,(1),null));
}));

(portal.runtime.cson.Tagged.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"portal.runtime.cson/Tagged");
}));

/**
 * Positional factory function for portal.runtime.cson/Tagged.
 */
portal.runtime.cson.__GT_Tagged = (function portal$runtime$cson$__GT_Tagged(_tag,value){
return (new portal.runtime.cson.Tagged(_tag,value,null,null,null));
});

/**
 * Factory function for portal.runtime.cson/Tagged, taking a map of keywords to field values.
 */
portal.runtime.cson.map__GT_Tagged = (function portal$runtime$cson$map__GT_Tagged(G__50657){
var extmap__4512__auto__ = (function (){var G__50668 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50657,new cljs.core.Keyword(null,"-tag","-tag",593200022),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__50657)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50668);
} else {
return G__50668;
}
})();
return (new portal.runtime.cson.Tagged(new cljs.core.Keyword(null,"-tag","-tag",593200022).cljs$core$IFn$_invoke$arity$1(G__50657),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__50657),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

portal.runtime.cson.meta__GT_ = (function portal$runtime$cson$meta__GT_(value){
var vec__50669 = value;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50669,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50669,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50669,(2),null);
return cljs.core.with_meta((portal.runtime.cson.json__GT_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.json__GT_.cljs$core$IFn$_invoke$arity$1(obj) : portal.runtime.cson.json__GT_.call(null,obj)),(portal.runtime.cson.json__GT_.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.json__GT_.cljs$core$IFn$_invoke$arity$1(m) : portal.runtime.cson.json__GT_.call(null,m)));
});
portal.runtime.cson.tagged_meta = (function portal$runtime$cson$tagged_meta(value,json){
var temp__5751__auto__ = cljs.core.meta(value);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$3("meta",json,portal.runtime.cson._to_json(m));
} else {
return json;
}
});
portal.runtime.cson.base64_encode = (function portal$runtime$cson$base64_encode(byte_array){
return goog.crypt.base64.encodeByteArray(byte_array);
});
portal.runtime.cson.base64_decode = (function portal$runtime$cson$base64_decode(string){
return goog.crypt.base64.decodeStringToUint8Array(string);
});
(Uint8Array.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(Uint8Array.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2("bin",portal.runtime.cson.base64_encode(value__$1));
}));
portal.runtime.cson.bin__GT_ = (function portal$runtime$cson$bin__GT_(value){
return portal.runtime.cson.base64_decode(cljs.core.second(value));
});
(BigInt.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(BigInt.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2("bigint",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1));
}));
portal.runtime.cson.bigint__GT_ = (function portal$runtime$cson$bigint__GT_(value){
return BigInt(cljs.core.second(value));
});
portal.runtime.cson.char__GT_ = (function portal$runtime$cson$char__GT_(value){
return cljs.core.char$(cljs.core.second(value));
});
(Date.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2("inst",cljs.core.inst_ms(value__$1));
}));
portal.runtime.cson.inst__GT_ = (function portal$runtime$cson$inst__GT_(value){
return (new Date(cljs.core.second(value)));
});
(cljs.core.UUID.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2("uuid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1));
}));
portal.runtime.cson.uuid__GT_ = (function portal$runtime$cson$uuid__GT_(value){
return cljs.core.uuid(cljs.core.second(value));
});
(URL.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(URL.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2("url",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1));
}));
portal.runtime.cson.url__GT_ = (function portal$runtime$cson$url__GT_(value){
return (new URL(cljs.core.second(value)));
});
(cljs.core.Keyword.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
var temp__5751__auto__ = cljs.core.namespace(value__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ns = temp__5751__auto__;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$3("kw",ns,cljs.core.name(value__$1));
} else {
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2("kw",cljs.core.name(value__$1));
}
}));
portal.runtime.cson.kw__GT_ = (function portal$runtime$cson$kw__GT_(value){
var vec__50672 = value;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50672,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50672,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50672,(2),null);
if(cljs.core.not(name)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}
});
(cljs.core.Symbol.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_meta(value__$1,(function (){var temp__5751__auto__ = cljs.core.namespace(value__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var ns = temp__5751__auto__;
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$3("sym",ns,cljs.core.name(value__$1));
} else {
return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2("sym",cljs.core.name(value__$1));
}
})());
}));
portal.runtime.cson.sym__GT_ = (function portal$runtime$cson$sym__GT_(value){
var vec__50675 = value;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50675,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50675,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50675,(2),null);
if(cljs.core.not(name)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns);
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name);
}
});
portal.runtime.cson.tagged_list = (function portal$runtime$cson$tagged_list(tag,value){
return portal.runtime.cson.tagged_meta(value,[tag].concat(Array.from(value,portal.runtime.cson.to_json)));
});
(cljs.core.Cons.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.EmptyList.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.LazySeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.IndexedSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.KeySeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.KeySeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.ValSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ValSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.IntegerRange.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IntegerRange.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.Range.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Range.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.Repeat.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Repeat.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.List.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.PersistentQueue.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentQueue.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.RSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.RSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.ChunkedCons.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.ChunkedSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.PersistentQueueSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentQueueSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.PersistentArrayMapSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMapSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.PersistentTreeMapSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMapSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.NodeSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.NodeSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
(cljs.core.ArrayNodeSeq.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ArrayNodeSeq.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("list",value__$1);
}));
portal.runtime.cson.list__GT_ = (function portal$runtime$cson$list__GT_(value){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(portal.runtime.cson.json__GT_,cljs.core.rest(value)));
});
(cljs.core.PersistentVector.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("vec",value__$1);
}));
(cljs.core.Subvec.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("vec",value__$1);
}));
(cljs.core.MapEntry.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("vec",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,value__$1));
}));
portal.runtime.cson.vec__GT_ = (function portal$runtime$cson$vec__GT_(value){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(portal.runtime.cson.json__GT_),cljs.core.rest(value));
});
(cljs.core.PersistentHashSet.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("set",value__$1);
}));
(cljs.core.PersistentTreeSet.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_list("set",value__$1);
}));
portal.runtime.cson.set__GT_ = (function portal$runtime$cson$set__GT_(value){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(portal.runtime.cson.json__GT_),cljs.core.rest(value));
});
portal.runtime.cson.tagged_map = (function portal$runtime$cson$tagged_map(value){
return portal.runtime.cson.tagged_meta(value,portal.runtime.cson.tagged_list("map",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))));
});
(cljs.core.PersistentHashMap.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_map(value__$1);
}));
(cljs.core.PersistentTreeMap.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_map(value__$1);
}));
(cljs.core.PersistentArrayMap.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_map(value__$1);
}));
(cljs.core.IRecord.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IRecord.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.cson.tagged_map(value__$1);
}));
portal.runtime.cson.map__GT_ = (function portal$runtime$cson$map__GT_(value){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.map.cljs$core$IFn$_invoke$arity$2(portal.runtime.cson.json__GT_,cljs.core.rest(value)));
});
portal.runtime.cson.dispatch_value = (function portal$runtime$cson$dispatch_value(value){
var G__50678 = cljs.core.first(value);
switch (G__50678) {
case "bigint":
return portal.runtime.cson.bigint__GT_(value);

break;
case "bin":
return portal.runtime.cson.bin__GT_(value);

break;
case "char":
return portal.runtime.cson.char__GT_(value);

break;
case "inst":
return portal.runtime.cson.inst__GT_(value);

break;
case "kw":
return portal.runtime.cson.kw__GT_(value);

break;
case "list":
return portal.runtime.cson.list__GT_(value);

break;
case "map":
return portal.runtime.cson.map__GT_(value);

break;
case "meta":
return portal.runtime.cson.meta__GT_(value);

break;
case "set":
return portal.runtime.cson.set__GT_(value);

break;
case "sym":
return portal.runtime.cson.sym__GT_(value);

break;
case "url":
return portal.runtime.cson.url__GT_(value);

break;
case "uuid":
return portal.runtime.cson.uuid__GT_(value);

break;
case "vec":
return portal.runtime.cson.vec__GT_(value);

break;
default:
var fexpr__50679 = new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207).cljs$core$IFn$_invoke$arity$1(portal.runtime.cson._STAR_options_STAR_);
return (fexpr__50679.cljs$core$IFn$_invoke$arity$1 ? fexpr__50679.cljs$core$IFn$_invoke$arity$1(value) : fexpr__50679.call(null,value));

}
});
portal.runtime.cson.json__GT_ = (function portal$runtime$cson$json__GT_(value){
return portal.runtime.cson.transform(((portal.runtime.cson.primitive_QMARK_(value))?value:portal.runtime.cson.dispatch_value(value)));
});
portal.runtime.cson.stringify = (function portal$runtime$cson$stringify(value,options){
var fexpr__50681 = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"stringify","stringify",-1563846991).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (function (p1__50680_SHARP_){
return JSON.stringify(p1__50680_SHARP_);
});
}
})();
return (fexpr__50681.cljs$core$IFn$_invoke$arity$1 ? fexpr__50681.cljs$core$IFn$_invoke$arity$1(value) : fexpr__50681.call(null,value));
});
portal.runtime.cson.write = (function portal$runtime$cson$write(var_args){
var G__50683 = arguments.length;
switch (G__50683) {
case 1:
return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2 = (function (value,options){
var _STAR_options_STAR__orig_val__50684 = portal.runtime.cson._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__50685 = options;
(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__temp_val__50685);

try{return portal.runtime.cson.stringify(portal.runtime.cson.to_json(value),options);
}finally {(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__orig_val__50684);
}}));

(portal.runtime.cson.write.cljs$lang$maxFixedArity = 2);

portal.runtime.cson.parse = (function portal$runtime$cson$parse(string,options){
var fexpr__50687 = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (function (p1__50686_SHARP_){
return JSON.parse(p1__50686_SHARP_);
});
}
})();
return (fexpr__50687.cljs$core$IFn$_invoke$arity$1 ? fexpr__50687.cljs$core$IFn$_invoke$arity$1(string) : fexpr__50687.call(null,string));
});
portal.runtime.cson.read = (function portal$runtime$cson$read(var_args){
var G__50689 = arguments.length;
switch (G__50689) {
case 1:
return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$1 = (function (string){
return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2(string,null);
}));

(portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2 = (function (string,options){
var _STAR_options_STAR__orig_val__50690 = portal.runtime.cson._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__50691 = options;
(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__temp_val__50691);

try{return portal.runtime.cson.json__GT_(portal.runtime.cson.parse(string,options));
}finally {(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__orig_val__50690);
}}));

(portal.runtime.cson.read.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=portal.runtime.cson.js.map
