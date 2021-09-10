goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68837,p__68838){
var map__68839 = p__68837;
var map__68839__$1 = cljs.core.__destructure_map(map__68839);
var svc = map__68839__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68839__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68839__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68839__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68840 = p__68838;
var map__68840__$1 = cljs.core.__destructure_map(map__68840);
var msg = map__68840__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68840__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68840__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68840__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68840__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68849,p__68850){
var map__68851 = p__68849;
var map__68851__$1 = cljs.core.__destructure_map(map__68851);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68851__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68852 = p__68850;
var map__68852__$1 = cljs.core.__destructure_map(map__68852);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68852__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68860,p__68861){
var map__68862 = p__68860;
var map__68862__$1 = cljs.core.__destructure_map(map__68862);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68862__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68862__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68863 = p__68861;
var map__68863__$1 = cljs.core.__destructure_map(map__68863);
var msg = map__68863__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68863__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68866,tid){
var map__68867 = p__68866;
var map__68867__$1 = cljs.core.__destructure_map(map__68867);
var svc = map__68867__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68867__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68875 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68876 = null;
var count__68877 = (0);
var i__68878 = (0);
while(true){
if((i__68878 < count__68877)){
var vec__68891 = chunk__68876.cljs$core$IIndexed$_nth$arity$2(null,i__68878);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68891,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68891,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68911 = seq__68875;
var G__68912 = chunk__68876;
var G__68913 = count__68877;
var G__68914 = (i__68878 + (1));
seq__68875 = G__68911;
chunk__68876 = G__68912;
count__68877 = G__68913;
i__68878 = G__68914;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68875);
if(temp__5753__auto__){
var seq__68875__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68875__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68875__$1);
var G__68915 = cljs.core.chunk_rest(seq__68875__$1);
var G__68916 = c__4649__auto__;
var G__68917 = cljs.core.count(c__4649__auto__);
var G__68918 = (0);
seq__68875 = G__68915;
chunk__68876 = G__68916;
count__68877 = G__68917;
i__68878 = G__68918;
continue;
} else {
var vec__68895 = cljs.core.first(seq__68875__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68895,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68895,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68919 = cljs.core.next(seq__68875__$1);
var G__68920 = null;
var G__68921 = (0);
var G__68922 = (0);
seq__68875 = G__68919;
chunk__68876 = G__68920;
count__68877 = G__68921;
i__68878 = G__68922;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68869_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68869_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68870_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68870_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68872_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68872_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68873_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68873_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68902){
var map__68903 = p__68902;
var map__68903__$1 = cljs.core.__destructure_map(map__68903);
var svc = map__68903__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68903__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68903__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
