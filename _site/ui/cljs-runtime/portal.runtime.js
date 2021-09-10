goog.provide('portal.runtime');
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime._STAR_options_STAR_ !== 'undefined')){
} else {
portal.runtime._STAR_options_STAR_ = null;
}
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.id !== 'undefined')){
} else {
portal.runtime.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
portal.runtime.next_id = (function portal$runtime$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portal.runtime.id,cljs.core.inc);
});
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.request !== 'undefined')){
} else {
portal.runtime.request = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.selected !== 'undefined')){
} else {
portal.runtime.selected = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
portal.runtime.set_timeout = (function portal$runtime$set_timeout(f,timeout){
return setTimeout(f,timeout);
});
portal.runtime.broadcast_change = (function portal$runtime$broadcast_change(_watch_key,a,old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return null;
} else {
return portal.runtime.set_timeout((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),new$)){
var temp__5753__auto__ = cljs.core.deref(portal.runtime.request);
if(cljs.core.truth_(temp__5753__auto__)){
var request = temp__5753__auto__;
var G__70113 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("portal.rpc","update-versions","portal.rpc/update-versions",-369309079),new cljs.core.Keyword(null,"body","body",-2049205669),new$], null);
return (request.cljs$core$IFn$_invoke$arity$1 ? request.cljs$core$IFn$_invoke$arity$1(G__70113) : request.call(null,G__70113));
} else {
return null;
}
} else {
return null;
}
}),(100));
}
});
portal.runtime.atom_QMARK_ = (function portal$runtime$atom_QMARK_(o){
if((!((o == null)))){
if((((o.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IAtom$)))){
return true;
} else {
if((!o.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,o);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,o);
}
});
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.watch_registry !== 'undefined')){
} else {
portal.runtime.watch_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.core.add_watch(portal.runtime.watch_registry,new cljs.core.Keyword("portal.runtime","watch-key","portal.runtime/watch-key",393909598),new cljs.core.Var(function(){return portal.runtime.broadcast_change;},new cljs.core.Symbol("portal.runtime","broadcast-change","portal.runtime/broadcast-change",842741396,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.Symbol(null,"broadcast-change","broadcast-change",1986722542,null),"portal/runtime.cljc",23,1,21,21,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_watch-key","_watch-key",-277003207,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"old","old",-184691163,null),new cljs.core.Symbol(null,"new","new",-444906321,null)], null)),null,(cljs.core.truth_(portal.runtime.broadcast_change)?portal.runtime.broadcast_change.cljs$lang$test:null)])));
portal.runtime.watch_atom = (function portal$runtime$watch_atom(a){
if(cljs.core.contains_QMARK_(cljs.core.deref(portal.runtime.watch_registry),a)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portal.runtime.watch_registry,(function (atoms){
if(cljs.core.contains_QMARK_(atoms,a)){
return atoms;
} else {
cljs.core.add_watch(a,new cljs.core.Keyword("portal.runtime","watch-key","portal.runtime/watch-key",393909598),(function (_watch_key,a__$1,_old,_new){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portal.runtime.watch_registry,cljs.core.update,a__$1,cljs.core.inc);
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(atoms,a,(0));
}
}));
}
});
portal.runtime.value__GT_id = (function portal$runtime$value__GT_id(value){
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value-cache","value-cache",-844944621).cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_options_STAR_),(function (cache){
if(cljs.core.contains_QMARK_(cache,k)){
return cache;
} else {
var id = portal.runtime.next_id();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cache,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,id], 0));
}
})),k);
});
portal.runtime.value__GT_id_QMARK_ = (function portal$runtime$value__GT_id_QMARK_(value){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"value-cache","value-cache",-844944621).cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_options_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
portal.runtime.id__GT_value = (function portal$runtime$id__GT_value(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"value-cache","value-cache",-844944621).cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_options_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
portal.runtime.to_object = (function portal$runtime$to_object(value,tag,rep){
if(portal.runtime.atom_QMARK_(value)){
portal.runtime.watch_atom(value);
} else {
}

return portal.runtime.cson.tag.cljs$core$IFn$_invoke$arity$2("object",portal.runtime.cson.to_json(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),portal.runtime.value__GT_id(value),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(value)], 0)),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"rep","rep",-1226820564),rep,new cljs.core.Keyword(null,"pr-str","pr-str",587523624),(function (){var _STAR_print_length_STAR__orig_val__70115 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__70116 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__70117 = (10);
var _STAR_print_level_STAR__temp_val__70118 = (2);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__70117);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__70118);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__70116);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__70115);
}})()], null)));
});
goog.object.set(portal.runtime.cson.ToJson,"_",true);

goog.object.set(portal.runtime.cson._to_json,"_",(function (value){
return portal.runtime.to_object(value,new cljs.core.Keyword(null,"object","object",1474613949),null);
}));
portal.runtime.var__GT_symbol = (function portal$runtime$var__GT_symbol(v){
var m = cljs.core.meta(v);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
});
(cljs.core.Var.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.portal$runtime$cson$ToJson$_to_json$arity$1 = (function (value){
var value__$1 = this;
return portal.runtime.to_object(value__$1,new cljs.core.Keyword(null,"var","var",-769682797),portal.runtime.var__GT_symbol(value__$1));
}));
portal.runtime.limit_seq = (function portal$runtime$limit_seq(value){
if((!(cljs.core.seq_QMARK_(value)))){
return value;
} else {
var m = cljs.core.meta(value);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("portal.runtime","more-limit","portal.runtime/more-limit",-900895823),(100));
var vec__70119 = cljs.core.split_at(limit,value);
var realized = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70119,(0),null);
var remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70119,(1),null);
return cljs.core.with_meta(realized,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,((cljs.core.seq(remaining))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.runtime","more","portal.runtime/more",-101113814),(function (){
var G__70122 = cljs.core.with_meta(remaining,m);
return (portal.runtime.limit_seq.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.limit_seq.cljs$core$IFn$_invoke$arity$1(G__70122) : portal.runtime.limit_seq.call(null,G__70122));
})], null):null)], 0)));
}
});
portal.runtime.can_meta_QMARK_ = (function portal$runtime$can_meta_QMARK_(value){
if((!((value == null)))){
if((((value.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
portal.runtime.id_coll = (function portal$runtime$id_coll(value){
if((!(((cljs.core.coll_QMARK_(value)) && (portal.runtime.can_meta_QMARK_(value)))))){
return value;
} else {
var temp__5751__auto__ = portal.runtime.value__GT_id_QMARK_(value);
if(cljs.core.truth_(temp__5751__auto__)){
var id = temp__5751__auto__;
return portal.runtime.cson.__GT_Tagged("ref",id);
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(value,cljs.core.merge,(function (){var G__70126 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.runtime","id","portal.runtime/id",1768418782),portal.runtime.value__GT_id(value)], null);
if(cljs.core.record_QMARK_(value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70126,new cljs.core.Keyword("portal.runtime","type","portal.runtime/type",36635890),cljs.core.type(value));
} else {
return G__70126;
}
})());
}
}
});
portal.runtime.write = (function portal$runtime$write(value,options){
var _STAR_options_STAR__orig_val__70128 = portal.runtime._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__70129 = options;
(portal.runtime._STAR_options_STAR_ = _STAR_options_STAR__temp_val__70129);

try{return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(portal.runtime.limit_seq,portal.runtime.id_coll)], null));
}finally {(portal.runtime._STAR_options_STAR_ = _STAR_options_STAR__orig_val__70128);
}});
portal.runtime.ref__GT_ = (function portal$runtime$ref__GT_(value){
return portal.runtime.id__GT_value(cljs.core.second(value));
});
portal.runtime.read = (function portal$runtime$read(string,options){
var _STAR_options_STAR__orig_val__70130 = portal.runtime._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__70131 = options;
(portal.runtime._STAR_options_STAR_ = _STAR_options_STAR__temp_val__70131);

try{return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2(string,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),(function (value){
var G__70132 = cljs.core.first(value);
switch (G__70132) {
case "ref":
return portal.runtime.ref__GT_(value);

break;
default:
return portal.runtime.cson.__GT_Tagged(cljs.core.first(value),portal.runtime.cson.json__GT_(cljs.core.second(value)));

}
})], null));
}finally {(portal.runtime._STAR_options_STAR_ = _STAR_options_STAR__orig_val__70130);
}});
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.state !== 'undefined')){
} else {
portal.runtime.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.launcher","window-title","portal.launcher/window-title",-1073598873),"portal"], null));
}
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.tap_list !== 'undefined')){
} else {
portal.runtime.tap_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
}
portal.runtime.update_value = (function portal$runtime$update_value(new_value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(portal.runtime.tap_list,cljs.core.conj,new_value);
});
portal.runtime.clear_values = (function portal$runtime$clear_values(var_args){
var G__70134 = arguments.length;
switch (G__70134) {
case 0:
return portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$0 = (function (){
return portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$2(null,cljs.core.identity);
}));

(portal.runtime.clear_values.cljs$core$IFn$_invoke$arity$2 = (function (_request,done){
cljs.core.reset_BANG_(portal.runtime.id,(0));

cljs.core.reset_BANG_(portal.runtime.tap_list,cljs.core.List.EMPTY);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"value-cache","value-cache",-844944621).cljs$core$IFn$_invoke$arity$1(portal.runtime._STAR_options_STAR_),cljs.core.PersistentArrayMap.EMPTY);

var seq__70135_70168 = cljs.core.seq(cljs.core.deref(portal.runtime.watch_registry));
var chunk__70136_70169 = null;
var count__70137_70170 = (0);
var i__70138_70171 = (0);
while(true){
if((i__70138_70171 < count__70137_70170)){
var vec__70145_70173 = chunk__70136_70169.cljs$core$IIndexed$_nth$arity$2(null,i__70138_70171);
var a_70174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70145_70173,(0),null);
cljs.core.remove_watch(a_70174,new cljs.core.Keyword("portal.runtime","watch-key","portal.runtime/watch-key",393909598));


var G__70175 = seq__70135_70168;
var G__70176 = chunk__70136_70169;
var G__70177 = count__70137_70170;
var G__70178 = (i__70138_70171 + (1));
seq__70135_70168 = G__70175;
chunk__70136_70169 = G__70176;
count__70137_70170 = G__70177;
i__70138_70171 = G__70178;
continue;
} else {
var temp__5753__auto___70179 = cljs.core.seq(seq__70135_70168);
if(temp__5753__auto___70179){
var seq__70135_70180__$1 = temp__5753__auto___70179;
if(cljs.core.chunked_seq_QMARK_(seq__70135_70180__$1)){
var c__4649__auto___70181 = cljs.core.chunk_first(seq__70135_70180__$1);
var G__70184 = cljs.core.chunk_rest(seq__70135_70180__$1);
var G__70185 = c__4649__auto___70181;
var G__70186 = cljs.core.count(c__4649__auto___70181);
var G__70187 = (0);
seq__70135_70168 = G__70184;
chunk__70136_70169 = G__70185;
count__70137_70170 = G__70186;
i__70138_70171 = G__70187;
continue;
} else {
var vec__70148_70188 = cljs.core.first(seq__70135_70180__$1);
var a_70189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70148_70188,(0),null);
cljs.core.remove_watch(a_70189,new cljs.core.Keyword("portal.runtime","watch-key","portal.runtime/watch-key",393909598));


var G__70190 = cljs.core.next(seq__70135_70180__$1);
var G__70191 = null;
var G__70192 = (0);
var G__70193 = (0);
seq__70135_70168 = G__70190;
chunk__70136_70169 = G__70191;
count__70137_70170 = G__70192;
i__70138_70171 = G__70193;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(portal.runtime.watch_registry,cljs.core.PersistentArrayMap.EMPTY);

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(null) : done.call(null,null));
}));

(portal.runtime.clear_values.cljs$lang$maxFixedArity = 2);

portal.runtime.update_selected = (function portal$runtime$update_selected(value){
return cljs.core.reset_BANG_(portal.runtime.selected,value);
});
portal.runtime.predicates = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),(function (p1__70152_SHARP_){
if((!((p1__70152_SHARP_ == null)))){
if((((p1__70152_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === p1__70152_SHARP_.cljs$core$IDeref$)))){
return true;
} else {
if((!p1__70152_SHARP_.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__70152_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__70152_SHARP_);
}
})], null)], 0));
portal.runtime.public_fns = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("clojure.core","pr-str","clojure.core/pr-str",-718141196,null),new cljs.core.Var(function(){return cljs.core.pr_str;},new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),"cljs/core.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"objs","objs",-170194107,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"objs","objs",-170194107,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,10385,10385,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"objs","objs",-170194107,null)], null)),"pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.",(cljs.core.truth_(cljs.core.pr_str)?cljs.core.pr_str.cljs$lang$test:null)])),new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Var(function(){return cljs.core.deref;},new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),"cljs/core.cljs",12,1,1471,1471,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null)),"Also reader macro: @var/@atom/@delay. Returns the\n   most-recently-committed value of ref. When applied to a var\n   or atom, returns its current state. When applied to a delay, forces\n   it if not already forced. See also - realized?.",(cljs.core.truth_(cljs.core.deref)?cljs.core.deref.cljs$lang$test:null)])),new cljs.core.Symbol("clojure.core","type","clojure.core/type",-249228468,null),new cljs.core.Var(function(){return cljs.core.type;},new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),"cljs/core.cljs",11,1,313,313,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return x's constructor.",(cljs.core.truth_(cljs.core.type)?cljs.core.type.cljs$lang$test:null)])),new cljs.core.Symbol("clojure.datafy","datafy","clojure.datafy/datafy",-459340080,null),new cljs.core.Var(function(){return clojure.datafy.datafy;},new cljs.core.Symbol("clojure.datafy","datafy","clojure.datafy/datafy",-459340080,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.datafy","clojure.datafy",-1781078910,null),new cljs.core.Symbol(null,"datafy","datafy",-1790598647,null),"clojure/datafy.cljs",13,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Attempts to return x as data.\n  datafy will return the value of clojure.protocols/datafy. If\n  the value has been transformed and the result supports\n  metadata, :clojure.datafy/obj will be set on the metadata to the\n  original value of x.",(cljs.core.truth_(clojure.datafy.datafy)?clojure.datafy.datafy.cljs$lang$test:null)]))], null)], 0));
portal.runtime.get_functions = (function portal$runtime$get_functions(v){
return cljs.core.keys(cljs.core.reduce_kv((function (fns,s,predicate){
if(cljs.core.truth_((predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(v) : predicate.call(null,v)))){
return fns;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fns,s);
}
}),portal.runtime.public_fns,portal.runtime.predicates));
});
portal.runtime.get_tap_atom = (function portal$runtime$get_tap_atom(){
return portal.runtime.tap_list;
});
portal.runtime.ping = (function portal$runtime$ping(){
return new cljs.core.Keyword("portal.runtime","pong","portal.runtime/pong",-1979114888);
});
portal.runtime.fns = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([portal.runtime.public_fns,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("clojure.datafy","nav","clojure.datafy/nav",1600156429,null),new cljs.core.Var(function(){return clojure.datafy.nav;},new cljs.core.Symbol("clojure.datafy","nav","clojure.datafy/nav",1600156429,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.datafy","clojure.datafy",-1781078910,null),new cljs.core.Symbol(null,"nav","nav",-1934895292,null),"clojure/datafy.cljs",10,1,31,31,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Returns (possibly transformed) v in the context of coll and k (a\n  key/index or nil). Callers should attempt to provide the key/index\n  context k for Indexed/Associative/ILookup colls if possible, but not\n  to fabricate one e.g. for sequences (pass nil). nav will return the\n  value of clojure.core.protocols/nav.",(cljs.core.truth_(clojure.datafy.nav)?clojure.datafy.nav.cljs$lang$test:null)])),new cljs.core.Symbol("portal.runtime","ping","portal.runtime/ping",-1301457895,null),new cljs.core.Var(function(){return portal.runtime.ping;},new cljs.core.Symbol("portal.runtime","ping","portal.runtime/ping",-1301457895,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.Symbol(null,"ping","ping",-29583257,null),"portal/runtime.cljc",12,1,209,209,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(portal.runtime.ping)?portal.runtime.ping.cljs$lang$test:null)])),new cljs.core.Symbol("portal.runtime","get-tap-atom","portal.runtime/get-tap-atom",-97764540,null),new cljs.core.Var(function(){return portal.runtime.get_tap_atom;},new cljs.core.Symbol("portal.runtime","get-tap-atom","portal.runtime/get-tap-atom",-97764540,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.Symbol(null,"get-tap-atom","get-tap-atom",-1105201478,null),"portal/runtime.cljc",20,1,207,207,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(portal.runtime.get_tap_atom)?portal.runtime.get_tap_atom.cljs$lang$test:null)])),new cljs.core.Symbol("portal.runtime","clear-values","portal.runtime/clear-values",1961286450,null),new cljs.core.Var(function(){return portal.runtime.clear_values;},new cljs.core.Symbol("portal.runtime","clear-values","portal.runtime/clear-values",1961286450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.Symbol(null,"clear-values","clear-values",-1328446232,null),"portal/runtime.cljc",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,161,161,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_request","_request",682265813,null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),null,(cljs.core.truth_(portal.runtime.clear_values)?portal.runtime.clear_values.cljs$lang$test:null)])),new cljs.core.Symbol("portal.runtime","update-selected","portal.runtime/update-selected",713792101,null),new cljs.core.Var(function(){return portal.runtime.update_selected;},new cljs.core.Symbol("portal.runtime","update-selected","portal.runtime/update-selected",713792101,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.Symbol(null,"update-selected","update-selected",-161784109,null),"portal/runtime.cljc",23,1,172,172,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(portal.runtime.update_selected)?portal.runtime.update_selected.cljs$lang$test:null)])),new cljs.core.Symbol("portal.runtime","get-functions","portal.runtime/get-functions",-62603721,null),new cljs.core.Var(function(){return portal.runtime.get_functions;},new cljs.core.Symbol("portal.runtime","get-functions","portal.runtime/get-functions",-62603721,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.Symbol(null,"get-functions","get-functions",940964841,null),"portal/runtime.cljc",21,1,197,197,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),null,(cljs.core.truth_(portal.runtime.get_functions)?portal.runtime.get_functions.cljs$lang$test:null)]))], null)], 0));
portal.runtime.invoke = (function portal$runtime$invoke(p__70155,done){
var map__70156 = p__70155;
var map__70156__$1 = cljs.core.__destructure_map(map__70156);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70156__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70156__$1,new cljs.core.Keyword(null,"args","args",1315556576));
try{var f__$1 = (((f instanceof cljs.core.Symbol))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(portal.runtime.fns,f):f);
return Promise.resolve(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args)).then((function (return$){
return Promise.resolve(null).then((function (){
return Promise.resolve((function (){var G__70159 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),return$], null);
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__70159) : done.call(null,G__70159));
})());
}));
}));
}catch (e70157){if((e70157 instanceof Error)){
var e = e70157;
var G__70158 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),e], null);
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__70158) : done.call(null,G__70158));
} else {
throw e70157;

}
}});
portal.runtime.ops = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.rpc","invoke","portal.rpc/invoke",1414499084),new cljs.core.Var(function(){return portal.runtime.invoke;},new cljs.core.Symbol("portal.runtime","invoke","portal.runtime/invoke",-498714524,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portal.runtime","portal.runtime",1572197736,null),new cljs.core.Symbol(null,"invoke","invoke",-1508508610,null),"portal/runtime.cljc",13,1,221,221,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)], null),new cljs.core.Symbol(null,"done","done",750687339,null)], null)),null,(cljs.core.truth_(portal.runtime.invoke)?portal.runtime.invoke.cljs$lang$test:null)]))], null);

//# sourceMappingURL=portal.runtime.js.map
