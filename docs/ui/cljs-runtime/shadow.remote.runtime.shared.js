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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45875,res){
var map__45880 = p__45875;
var map__45880__$1 = cljs.core.__destructure_map(map__45880);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45880__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45880__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45882 = res;
var G__45882__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45882,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45882);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45882__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45882__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45907 = arguments.length;
switch (G__45907) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45915,msg,handlers,timeout_after_ms){
var map__45917 = p__45915;
var map__45917__$1 = cljs.core.__destructure_map(map__45917);
var runtime = map__45917__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45917__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46172 = arguments.length;
var i__4830__auto___46173 = (0);
while(true){
if((i__4830__auto___46173 < len__4829__auto___46172)){
args__4835__auto__.push((arguments[i__4830__auto___46173]));

var G__46174 = (i__4830__auto___46173 + (1));
i__4830__auto___46173 = G__46174;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45927,ev,args){
var map__45928 = p__45927;
var map__45928__$1 = cljs.core.__destructure_map(map__45928);
var runtime = map__45928__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45928__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45930 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45933 = null;
var count__45934 = (0);
var i__45935 = (0);
while(true){
if((i__45935 < count__45934)){
var ext = chunk__45933.cljs$core$IIndexed$_nth$arity$2(null,i__45935);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46179 = seq__45930;
var G__46180 = chunk__45933;
var G__46181 = count__45934;
var G__46182 = (i__45935 + (1));
seq__45930 = G__46179;
chunk__45933 = G__46180;
count__45934 = G__46181;
i__45935 = G__46182;
continue;
} else {
var G__46184 = seq__45930;
var G__46185 = chunk__45933;
var G__46186 = count__45934;
var G__46187 = (i__45935 + (1));
seq__45930 = G__46184;
chunk__45933 = G__46185;
count__45934 = G__46186;
i__45935 = G__46187;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45930);
if(temp__5753__auto__){
var seq__45930__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45930__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45930__$1);
var G__46188 = cljs.core.chunk_rest(seq__45930__$1);
var G__46189 = c__4649__auto__;
var G__46190 = cljs.core.count(c__4649__auto__);
var G__46191 = (0);
seq__45930 = G__46188;
chunk__45933 = G__46189;
count__45934 = G__46190;
i__45935 = G__46191;
continue;
} else {
var ext = cljs.core.first(seq__45930__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46193 = cljs.core.next(seq__45930__$1);
var G__46194 = null;
var G__46195 = (0);
var G__46196 = (0);
seq__45930 = G__46193;
chunk__45933 = G__46194;
count__45934 = G__46195;
i__45935 = G__46196;
continue;
} else {
var G__46197 = cljs.core.next(seq__45930__$1);
var G__46198 = null;
var G__46199 = (0);
var G__46200 = (0);
seq__45930 = G__46197;
chunk__45933 = G__46198;
count__45934 = G__46199;
i__45935 = G__46200;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45919){
var G__45920 = cljs.core.first(seq45919);
var seq45919__$1 = cljs.core.next(seq45919);
var G__45921 = cljs.core.first(seq45919__$1);
var seq45919__$2 = cljs.core.next(seq45919__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45920,G__45921,seq45919__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45961,p__45962){
var map__45963 = p__45961;
var map__45963__$1 = cljs.core.__destructure_map(map__45963);
var runtime = map__45963__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45963__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45964 = p__45962;
var map__45964__$1 = cljs.core.__destructure_map(map__45964);
var msg = map__45964__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45964__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45965 = cljs.core.deref(state_ref);
var map__45965__$1 = cljs.core.__destructure_map(map__45965);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45965__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45965__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45972){
var map__45973 = p__45972;
var map__45973__$1 = cljs.core.__destructure_map(map__45973);
var runtime = map__45973__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45973__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45980,msg){
var map__45981 = p__45980;
var map__45981__$1 = cljs.core.__destructure_map(map__45981);
var runtime = map__45981__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45981__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45997,key,p__45998){
var map__46008 = p__45997;
var map__46008__$1 = cljs.core.__destructure_map(map__46008);
var state = map__46008__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46008__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46010 = p__45998;
var map__46010__$1 = cljs.core.__destructure_map(map__46010);
var spec = map__46010__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46010__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46022,key,spec){
var map__46023 = p__46022;
var map__46023__$1 = cljs.core.__destructure_map(map__46023);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46023__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46027_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46027_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46028_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46028_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46029_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46029_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46030_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46030_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46031_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46031_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46042,key){
var map__46043 = p__46042;
var map__46043__$1 = cljs.core.__destructure_map(map__46043);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46043__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46049,msg){
var map__46050 = p__46049;
var map__46050__$1 = cljs.core.__destructure_map(map__46050);
var runtime = map__46050__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46050__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46056,p__46057){
var map__46058 = p__46056;
var map__46058__$1 = cljs.core.__destructure_map(map__46058);
var runtime = map__46058__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46058__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46059 = p__46057;
var map__46059__$1 = cljs.core.__destructure_map(map__46059);
var msg = map__46059__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46059__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46059__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__46063 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46065 = null;
var count__46066 = (0);
var i__46067 = (0);
while(true){
if((i__46067 < count__46066)){
var map__46140 = chunk__46065.cljs$core$IIndexed$_nth$arity$2(null,i__46067);
var map__46140__$1 = cljs.core.__destructure_map(map__46140);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46140__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46258 = seq__46063;
var G__46259 = chunk__46065;
var G__46260 = count__46066;
var G__46261 = (i__46067 + (1));
seq__46063 = G__46258;
chunk__46065 = G__46259;
count__46066 = G__46260;
i__46067 = G__46261;
continue;
} else {
var G__46263 = seq__46063;
var G__46264 = chunk__46065;
var G__46265 = count__46066;
var G__46266 = (i__46067 + (1));
seq__46063 = G__46263;
chunk__46065 = G__46264;
count__46066 = G__46265;
i__46067 = G__46266;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46063);
if(temp__5753__auto__){
var seq__46063__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46063__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46063__$1);
var G__46269 = cljs.core.chunk_rest(seq__46063__$1);
var G__46270 = c__4649__auto__;
var G__46271 = cljs.core.count(c__4649__auto__);
var G__46272 = (0);
seq__46063 = G__46269;
chunk__46065 = G__46270;
count__46066 = G__46271;
i__46067 = G__46272;
continue;
} else {
var map__46144 = cljs.core.first(seq__46063__$1);
var map__46144__$1 = cljs.core.__destructure_map(map__46144);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46144__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46283 = cljs.core.next(seq__46063__$1);
var G__46284 = null;
var G__46285 = (0);
var G__46286 = (0);
seq__46063 = G__46283;
chunk__46065 = G__46284;
count__46066 = G__46285;
i__46067 = G__46286;
continue;
} else {
var G__46289 = cljs.core.next(seq__46063__$1);
var G__46290 = null;
var G__46291 = (0);
var G__46292 = (0);
seq__46063 = G__46289;
chunk__46065 = G__46290;
count__46066 = G__46291;
i__46067 = G__46292;
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
