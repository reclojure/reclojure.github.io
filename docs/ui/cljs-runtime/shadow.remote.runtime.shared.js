goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__50990,res){
var map__50992 = p__50990;
var map__50992__$1 = cljs.core.__destructure_map(map__50992);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50992__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50992__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__50996 = res;
var G__50996__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50996,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__50996);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50996__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__50996__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__51005 = arguments.length;
switch (G__51005) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__51013,msg,handlers,timeout_after_ms){
var map__51015 = p__51013;
var map__51015__$1 = cljs.core.__destructure_map(map__51015);
var runtime = map__51015__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51015__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51274 = arguments.length;
var i__4830__auto___51275 = (0);
while(true){
if((i__4830__auto___51275 < len__4829__auto___51274)){
args__4835__auto__.push((arguments[i__4830__auto___51275]));

var G__51276 = (i__4830__auto___51275 + (1));
i__4830__auto___51275 = G__51276;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__51030,ev,args){
var map__51031 = p__51030;
var map__51031__$1 = cljs.core.__destructure_map(map__51031);
var runtime = map__51031__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51031__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__51033 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51037 = null;
var count__51038 = (0);
var i__51039 = (0);
while(true){
if((i__51039 < count__51038)){
var ext = chunk__51037.cljs$core$IIndexed$_nth$arity$2(null,i__51039);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__51291 = seq__51033;
var G__51292 = chunk__51037;
var G__51293 = count__51038;
var G__51294 = (i__51039 + (1));
seq__51033 = G__51291;
chunk__51037 = G__51292;
count__51038 = G__51293;
i__51039 = G__51294;
continue;
} else {
var G__51298 = seq__51033;
var G__51300 = chunk__51037;
var G__51301 = count__51038;
var G__51302 = (i__51039 + (1));
seq__51033 = G__51298;
chunk__51037 = G__51300;
count__51038 = G__51301;
i__51039 = G__51302;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51033);
if(temp__5753__auto__){
var seq__51033__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51033__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51033__$1);
var G__51314 = cljs.core.chunk_rest(seq__51033__$1);
var G__51315 = c__4649__auto__;
var G__51316 = cljs.core.count(c__4649__auto__);
var G__51317 = (0);
seq__51033 = G__51314;
chunk__51037 = G__51315;
count__51038 = G__51316;
i__51039 = G__51317;
continue;
} else {
var ext = cljs.core.first(seq__51033__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__51329 = cljs.core.next(seq__51033__$1);
var G__51330 = null;
var G__51331 = (0);
var G__51332 = (0);
seq__51033 = G__51329;
chunk__51037 = G__51330;
count__51038 = G__51331;
i__51039 = G__51332;
continue;
} else {
var G__51334 = cljs.core.next(seq__51033__$1);
var G__51335 = null;
var G__51336 = (0);
var G__51337 = (0);
seq__51033 = G__51334;
chunk__51037 = G__51335;
count__51038 = G__51336;
i__51039 = G__51337;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq51019){
var G__51020 = cljs.core.first(seq51019);
var seq51019__$1 = cljs.core.next(seq51019);
var G__51022 = cljs.core.first(seq51019__$1);
var seq51019__$2 = cljs.core.next(seq51019__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51020,G__51022,seq51019__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__51087,p__51088){
var map__51090 = p__51087;
var map__51090__$1 = cljs.core.__destructure_map(map__51090);
var runtime = map__51090__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51090__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51091 = p__51088;
var map__51091__$1 = cljs.core.__destructure_map(map__51091);
var msg = map__51091__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51091__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__51099 = cljs.core.deref(state_ref);
var map__51099__$1 = cljs.core.__destructure_map(map__51099);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51099__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51099__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__51109){
var map__51111 = p__51109;
var map__51111__$1 = cljs.core.__destructure_map(map__51111);
var runtime = map__51111__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51111__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__51119,msg){
var map__51120 = p__51119;
var map__51120__$1 = cljs.core.__destructure_map(map__51120);
var runtime = map__51120__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51120__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__51129,key,p__51130){
var map__51132 = p__51129;
var map__51132__$1 = cljs.core.__destructure_map(map__51132);
var state = map__51132__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__51133 = p__51130;
var map__51133__$1 = cljs.core.__destructure_map(map__51133);
var spec = map__51133__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51133__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__51138,key,spec){
var map__51140 = p__51138;
var map__51140__$1 = cljs.core.__destructure_map(map__51140);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51140__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__51143_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__51143_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__51144_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__51144_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__51147_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__51147_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__51148_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__51148_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__51150_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__51150_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__51180,key){
var map__51181 = p__51180;
var map__51181__$1 = cljs.core.__destructure_map(map__51181);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51181__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__51183,msg){
var map__51184 = p__51183;
var map__51184__$1 = cljs.core.__destructure_map(map__51184);
var runtime = map__51184__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__51189,p__51190){
var map__51193 = p__51189;
var map__51193__$1 = cljs.core.__destructure_map(map__51193);
var runtime = map__51193__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51194 = p__51190;
var map__51194__$1 = cljs.core.__destructure_map(map__51194);
var msg = map__51194__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51194__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51194__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__51217 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51219 = null;
var count__51220 = (0);
var i__51221 = (0);
while(true){
if((i__51221 < count__51220)){
var map__51235 = chunk__51219.cljs$core$IIndexed$_nth$arity$2(null,i__51221);
var map__51235__$1 = cljs.core.__destructure_map(map__51235);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__51438 = seq__51217;
var G__51439 = chunk__51219;
var G__51440 = count__51220;
var G__51441 = (i__51221 + (1));
seq__51217 = G__51438;
chunk__51219 = G__51439;
count__51220 = G__51440;
i__51221 = G__51441;
continue;
} else {
var G__51442 = seq__51217;
var G__51443 = chunk__51219;
var G__51444 = count__51220;
var G__51445 = (i__51221 + (1));
seq__51217 = G__51442;
chunk__51219 = G__51443;
count__51220 = G__51444;
i__51221 = G__51445;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51217);
if(temp__5753__auto__){
var seq__51217__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51217__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51217__$1);
var G__51449 = cljs.core.chunk_rest(seq__51217__$1);
var G__51450 = c__4649__auto__;
var G__51451 = cljs.core.count(c__4649__auto__);
var G__51452 = (0);
seq__51217 = G__51449;
chunk__51219 = G__51450;
count__51220 = G__51451;
i__51221 = G__51452;
continue;
} else {
var map__51245 = cljs.core.first(seq__51217__$1);
var map__51245__$1 = cljs.core.__destructure_map(map__51245);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51245__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__51456 = cljs.core.next(seq__51217__$1);
var G__51457 = null;
var G__51458 = (0);
var G__51459 = (0);
seq__51217 = G__51456;
chunk__51219 = G__51457;
count__51220 = G__51458;
i__51221 = G__51459;
continue;
} else {
var G__51461 = cljs.core.next(seq__51217__$1);
var G__51462 = null;
var G__51463 = (0);
var G__51464 = (0);
seq__51217 = G__51461;
chunk__51219 = G__51462;
count__51220 = G__51463;
i__51221 = G__51464;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
