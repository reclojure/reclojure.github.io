goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__49826,p__49827){
var map__49828 = p__49826;
var map__49828__$1 = cljs.core.__destructure_map(map__49828);
var svc = map__49828__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49828__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49828__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49828__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49829 = p__49827;
var map__49829__$1 = cljs.core.__destructure_map(map__49829);
var msg = map__49829__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49829__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49829__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49829__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49829__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__49839,p__49840){
var map__49841 = p__49839;
var map__49841__$1 = cljs.core.__destructure_map(map__49841);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49841__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__49842 = p__49840;
var map__49842__$1 = cljs.core.__destructure_map(map__49842);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49842__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__49846,p__49847){
var map__49848 = p__49846;
var map__49848__$1 = cljs.core.__destructure_map(map__49848);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49849 = p__49847;
var map__49849__$1 = cljs.core.__destructure_map(map__49849);
var msg = map__49849__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49849__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__49854,tid){
var map__49855 = p__49854;
var map__49855__$1 = cljs.core.__destructure_map(map__49855);
var svc = map__49855__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49855__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__49865 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__49866 = null;
var count__49867 = (0);
var i__49868 = (0);
while(true){
if((i__49868 < count__49867)){
var vec__49876 = chunk__49866.cljs$core$IIndexed$_nth$arity$2(null,i__49868);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49876,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49876,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49892 = seq__49865;
var G__49893 = chunk__49866;
var G__49894 = count__49867;
var G__49895 = (i__49868 + (1));
seq__49865 = G__49892;
chunk__49866 = G__49893;
count__49867 = G__49894;
i__49868 = G__49895;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49865);
if(temp__5753__auto__){
var seq__49865__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49865__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49865__$1);
var G__49896 = cljs.core.chunk_rest(seq__49865__$1);
var G__49897 = c__4649__auto__;
var G__49898 = cljs.core.count(c__4649__auto__);
var G__49899 = (0);
seq__49865 = G__49896;
chunk__49866 = G__49897;
count__49867 = G__49898;
i__49868 = G__49899;
continue;
} else {
var vec__49879 = cljs.core.first(seq__49865__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49879,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49879,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49900 = cljs.core.next(seq__49865__$1);
var G__49901 = null;
var G__49902 = (0);
var G__49903 = (0);
seq__49865 = G__49900;
chunk__49866 = G__49901;
count__49867 = G__49902;
i__49868 = G__49903;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__49857_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__49857_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__49858_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__49858_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__49859_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__49859_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__49860_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__49860_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__49887){
var map__49888 = p__49887;
var map__49888__$1 = cljs.core.__destructure_map(map__49888);
var svc = map__49888__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49888__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49888__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
