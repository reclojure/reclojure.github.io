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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__64787,res){
var map__64788 = p__64787;
var map__64788__$1 = cljs.core.__destructure_map(map__64788);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64788__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64788__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__64798 = res;
var G__64798__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64798,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__64798);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64798__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__64798__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__64810 = arguments.length;
switch (G__64810) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__64818,msg,handlers,timeout_after_ms){
var map__64819 = p__64818;
var map__64819__$1 = cljs.core.__destructure_map(map__64819);
var runtime = map__64819__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64819__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___65216 = arguments.length;
var i__4830__auto___65221 = (0);
while(true){
if((i__4830__auto___65221 < len__4829__auto___65216)){
args__4835__auto__.push((arguments[i__4830__auto___65221]));

var G__65222 = (i__4830__auto___65221 + (1));
i__4830__auto___65221 = G__65222;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__64840,ev,args){
var map__64843 = p__64840;
var map__64843__$1 = cljs.core.__destructure_map(map__64843);
var runtime = map__64843__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64843__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__64848 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__64851 = null;
var count__64852 = (0);
var i__64853 = (0);
while(true){
if((i__64853 < count__64852)){
var ext = chunk__64851.cljs$core$IIndexed$_nth$arity$2(null,i__64853);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65235 = seq__64848;
var G__65236 = chunk__64851;
var G__65237 = count__64852;
var G__65238 = (i__64853 + (1));
seq__64848 = G__65235;
chunk__64851 = G__65236;
count__64852 = G__65237;
i__64853 = G__65238;
continue;
} else {
var G__65239 = seq__64848;
var G__65240 = chunk__64851;
var G__65241 = count__64852;
var G__65242 = (i__64853 + (1));
seq__64848 = G__65239;
chunk__64851 = G__65240;
count__64852 = G__65241;
i__64853 = G__65242;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64848);
if(temp__5753__auto__){
var seq__64848__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64848__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__64848__$1);
var G__65245 = cljs.core.chunk_rest(seq__64848__$1);
var G__65246 = c__4649__auto__;
var G__65247 = cljs.core.count(c__4649__auto__);
var G__65248 = (0);
seq__64848 = G__65245;
chunk__64851 = G__65246;
count__64852 = G__65247;
i__64853 = G__65248;
continue;
} else {
var ext = cljs.core.first(seq__64848__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65253 = cljs.core.next(seq__64848__$1);
var G__65254 = null;
var G__65255 = (0);
var G__65256 = (0);
seq__64848 = G__65253;
chunk__64851 = G__65254;
count__64852 = G__65255;
i__64853 = G__65256;
continue;
} else {
var G__65257 = cljs.core.next(seq__64848__$1);
var G__65258 = null;
var G__65259 = (0);
var G__65260 = (0);
seq__64848 = G__65257;
chunk__64851 = G__65258;
count__64852 = G__65259;
i__64853 = G__65260;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq64824){
var G__64825 = cljs.core.first(seq64824);
var seq64824__$1 = cljs.core.next(seq64824);
var G__64826 = cljs.core.first(seq64824__$1);
var seq64824__$2 = cljs.core.next(seq64824__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64825,G__64826,seq64824__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__64958,p__64959){
var map__64960 = p__64958;
var map__64960__$1 = cljs.core.__destructure_map(map__64960);
var runtime = map__64960__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64960__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__64961 = p__64959;
var map__64961__$1 = cljs.core.__destructure_map(map__64961);
var msg = map__64961__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64961__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__64967 = cljs.core.deref(state_ref);
var map__64967__$1 = cljs.core.__destructure_map(map__64967);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64967__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64967__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__64999){
var map__65001 = p__64999;
var map__65001__$1 = cljs.core.__destructure_map(map__65001);
var runtime = map__65001__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__65014,msg){
var map__65016 = p__65014;
var map__65016__$1 = cljs.core.__destructure_map(map__65016);
var runtime = map__65016__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65016__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__65035,key,p__65036){
var map__65039 = p__65035;
var map__65039__$1 = cljs.core.__destructure_map(map__65039);
var state = map__65039__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65039__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__65040 = p__65036;
var map__65040__$1 = cljs.core.__destructure_map(map__65040);
var spec = map__65040__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65040__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__65061,key,spec){
var map__65065 = p__65061;
var map__65065__$1 = cljs.core.__destructure_map(map__65065);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65065__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__65073_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__65073_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__65075_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__65075_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__65076_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__65076_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__65077_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__65077_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__65078_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__65078_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__65113,key){
var map__65115 = p__65113;
var map__65115__$1 = cljs.core.__destructure_map(map__65115);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65115__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__65133,msg){
var map__65134 = p__65133;
var map__65134__$1 = cljs.core.__destructure_map(map__65134);
var runtime = map__65134__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65134__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__65144,p__65145){
var map__65146 = p__65144;
var map__65146__$1 = cljs.core.__destructure_map(map__65146);
var runtime = map__65146__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65148 = p__65145;
var map__65148__$1 = cljs.core.__destructure_map(map__65148);
var msg = map__65148__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__65163 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65165 = null;
var count__65166 = (0);
var i__65167 = (0);
while(true){
if((i__65167 < count__65166)){
var map__65174 = chunk__65165.cljs$core$IIndexed$_nth$arity$2(null,i__65167);
var map__65174__$1 = cljs.core.__destructure_map(map__65174);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65174__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65382 = seq__65163;
var G__65383 = chunk__65165;
var G__65384 = count__65166;
var G__65385 = (i__65167 + (1));
seq__65163 = G__65382;
chunk__65165 = G__65383;
count__65166 = G__65384;
i__65167 = G__65385;
continue;
} else {
var G__65386 = seq__65163;
var G__65387 = chunk__65165;
var G__65388 = count__65166;
var G__65389 = (i__65167 + (1));
seq__65163 = G__65386;
chunk__65165 = G__65387;
count__65166 = G__65388;
i__65167 = G__65389;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65163);
if(temp__5753__auto__){
var seq__65163__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65163__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__65163__$1);
var G__65395 = cljs.core.chunk_rest(seq__65163__$1);
var G__65396 = c__4649__auto__;
var G__65397 = cljs.core.count(c__4649__auto__);
var G__65398 = (0);
seq__65163 = G__65395;
chunk__65165 = G__65396;
count__65166 = G__65397;
i__65167 = G__65398;
continue;
} else {
var map__65183 = cljs.core.first(seq__65163__$1);
var map__65183__$1 = cljs.core.__destructure_map(map__65183);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65183__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65403 = cljs.core.next(seq__65163__$1);
var G__65404 = null;
var G__65405 = (0);
var G__65406 = (0);
seq__65163 = G__65403;
chunk__65165 = G__65404;
count__65166 = G__65405;
i__65167 = G__65406;
continue;
} else {
var G__65407 = cljs.core.next(seq__65163__$1);
var G__65408 = null;
var G__65409 = (0);
var G__65410 = (0);
seq__65163 = G__65407;
chunk__65165 = G__65408;
count__65166 = G__65409;
i__65167 = G__65410;
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
