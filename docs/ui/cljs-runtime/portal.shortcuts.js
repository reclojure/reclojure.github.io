goog.provide('portal.shortcuts');
portal.shortcuts.get_platform = (function portal$shortcuts$get_platform(){
var platform = window.navigator.platform;
if(cljs.core.truth_((function (){var fexpr__50639 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Mac68K",null,"Macintosh",null,"MacPPC",null,"MacIntel",null], null), null);
return (fexpr__50639.cljs$core$IFn$_invoke$arity$1 ? fexpr__50639.cljs$core$IFn$_invoke$arity$1(platform) : fexpr__50639.call(null,platform));
})())){
return new cljs.core.Keyword("portal.shortcuts","osx","portal.shortcuts/osx",300522451);
} else {
if(cljs.core.truth_((function (){var fexpr__50640 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["WinCE",null,"Windows",null,"Win32",null,"Win64",null], null), null);
return (fexpr__50640.cljs$core$IFn$_invoke$arity$1 ? fexpr__50640.cljs$core$IFn$_invoke$arity$1(platform) : fexpr__50640.call(null,platform));
})())){
return new cljs.core.Keyword("portal.shortcuts","windows","portal.shortcuts/windows",-450991854);
} else {
if(clojure.string.includes_QMARK_(platform,"Linux")){
return new cljs.core.Keyword("portal.shortcuts","linux","portal.shortcuts/linux",-2066098221);
} else {
return null;
}
}
}
});
portal.shortcuts.get_shortcut = (function portal$shortcuts$get_shortcut(definition){
if(typeof definition === 'string'){
return cljs.core.PersistentHashSet.createAsIfByAssoc([definition]);
} else {
if(cljs.core.map_QMARK_(definition)){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(definition,portal.shortcuts.get_platform());
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(definition,new cljs.core.Keyword("portal.shortcuts","default","portal.shortcuts/default",71461651));
}
} else {
return definition;

}
}
});
portal.shortcuts.event__GT_key = (function portal$shortcuts$event__GT_key(e){
var temp__5753__auto__ = e.key;
if(cljs.core.truth_(temp__5753__auto__)){
var k = temp__5753__auto__;
return k.toLowerCase();
} else {
return null;
}
});
/**
 * Returns all key sequences in the event log.
 */
portal.shortcuts.log__GT_seq = (function portal$shortcuts$log__GT_seq(log){
var log__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(portal.shortcuts.event__GT_key,log);
var iter__4622__auto__ = (function portal$shortcuts$log__GT_seq_$_iter__50641(s__50642){
return (new cljs.core.LazySeq(null,(function (){
var s__50642__$1 = s__50642;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50642__$1);
if(temp__5753__auto__){
var s__50642__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50642__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50642__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50644 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50643 = (0);
while(true){
if((i__50643 < size__4621__auto__)){
var n = cljs.core._nth(c__4620__auto__,i__50643);
cljs.core.chunk_append(b__50644,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,log__$1))));

var G__50663 = (i__50643 + (1));
i__50643 = G__50663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50644),portal$shortcuts$log__GT_seq_$_iter__50641(cljs.core.chunk_rest(s__50642__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50644),null);
}
} else {
var n = cljs.core.first(s__50642__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,log__$1))),portal$shortcuts$log__GT_seq_$_iter__50641(cljs.core.rest(s__50642__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(log__$1)))));
});
/**
 * Return the last key combo from the event log.
 */
portal.shortcuts.log__GT_combo = (function portal$shortcuts$log__GT_combo(log){
var temp__5753__auto__ = cljs.core.first(log);
if(cljs.core.truth_(temp__5753__auto__)){
var e = temp__5753__auto__;
var G__50648 = cljs.core.PersistentHashSet.createAsIfByAssoc([portal.shortcuts.event__GT_key(e)]);
var G__50648__$1 = (cljs.core.truth_(e.ctrlKey)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50648,"control"):G__50648);
var G__50648__$2 = (cljs.core.truth_(e.metaKey)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50648__$1,"meta"):G__50648__$1);
var G__50648__$3 = (cljs.core.truth_(e.shiftKey)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50648__$2,"shift"):G__50648__$2);
if(cljs.core.truth_(e.altKey)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50648__$3,"alt");
} else {
return G__50648__$3;
}
} else {
return null;
}
});
if((typeof portal !== 'undefined') && (typeof portal.shortcuts !== 'undefined') && (typeof portal.shortcuts.log !== 'undefined')){
} else {
portal.shortcuts.log = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
portal.shortcuts.clear_BANG_ = (function portal$shortcuts$clear_BANG_(){
return cljs.core.reset_BANG_(portal.shortcuts.log,cljs.core.List.EMPTY);
});
portal.shortcuts.match_QMARK_ = (function portal$shortcuts$match_QMARK_(definition,log){
return cljs.core.some((function (combo){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(combo,portal.shortcuts.get_shortcut(definition));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal.shortcuts.log__GT_combo(log)], null),portal.shortcuts.log__GT_seq(log)));
});
portal.shortcuts.input_QMARK_ = (function portal$shortcuts$input_QMARK_(log){
var temp__5753__auto__ = cljs.core.first(log);
if(cljs.core.truth_(temp__5753__auto__)){
var e = temp__5753__auto__;
var G__50650 = e.target.tagName;
var fexpr__50649 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"BUTTON",null], null), null);
return (fexpr__50649.cljs$core$IFn$_invoke$arity$1 ? fexpr__50649.cljs$core$IFn$_invoke$arity$1(G__50650) : fexpr__50649.call(null,G__50650));
} else {
return null;
}
});
portal.shortcuts.keydown = (function portal$shortcuts$keydown(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portal.shortcuts.log,(function (p1__50651_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__50651_SHARP_,e));
}));
});
portal.shortcuts.init = (function portal$shortcuts$init(){
if((cljs.core.deref(portal.shortcuts.log) == null)){
portal.shortcuts.clear_BANG_();

window.addEventListener("blur",(function (){
return portal.shortcuts.clear_BANG_();
}));

return window.addEventListener("keydown",(function (p1__50656_SHARP_){
return portal.shortcuts.keydown(p1__50656_SHARP_);
}));
} else {
return null;
}
});
portal.shortcuts.matched_BANG_ = (function portal$shortcuts$matched_BANG_(log){
portal.shortcuts.clear_BANG_();

var temp__5753__auto__ = cljs.core.first(log);
if(cljs.core.truth_(temp__5753__auto__)){
var e = temp__5753__auto__;
return e.preventDefault();
} else {
return null;
}
});
portal.shortcuts.add_BANG_ = (function portal$shortcuts$add_BANG_(k,f){
portal.shortcuts.init();

return cljs.core.add_watch(portal.shortcuts.log,k,(function (_,___$1,___$2,log){
if(cljs.core.empty_QMARK_(log)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(log) : f.call(null,log));
}
}));
});
portal.shortcuts.remove_BANG_ = (function portal$shortcuts$remove_BANG_(k){
return cljs.core.remove_watch(portal.shortcuts.log,k);
});

//# sourceMappingURL=portal.shortcuts.js.map
