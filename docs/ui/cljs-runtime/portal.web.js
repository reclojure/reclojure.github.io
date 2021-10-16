goog.provide('portal.web');
portal.web.send_BANG_ = portal.runtime.web.launcher.send_BANG_;
goog.exportSymbol('portal.web.send_BANG_', portal.web.send_BANG_);
/**
 * Tap target function.
 */
portal.web.submit = (function portal$web$submit(value){
portal.runtime.update_value(value);

return null;
});
goog.exportSymbol('portal.web.submit', portal.web.submit);
/**
 * Add portal as a tap> target.
 */
portal.web.tap = (function portal$web$tap(){
cljs.core.add_tap(new cljs.core.Var(function(){return portal.web.submit;},new cljs.core.Symbol("portal.web","submit","portal.web/submit",1322595104,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portal.web","portal.web",1079961926,null),new cljs.core.Symbol(null,"submit","submit",1591216210,null),"portal/web.cljs",22,true,1,10,10,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),"Tap target function.",(cljs.core.truth_(portal.web.submit)?portal.web.submit.cljs$lang$test:null)])));

return null;
});
goog.exportSymbol('portal.web.tap', portal.web.tap);
/**
 * Open a new inspector window.
 */
portal.web.open = (function portal$web$open(var_args){
var G__50780 = arguments.length;
switch (G__50780) {
case 0:
return portal.web.open.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return portal.web.open.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('portal.web.open', portal.web.open);

(portal.web.open.cljs$core$IFn$_invoke$arity$0 = (function (){
return portal.web.open.cljs$core$IFn$_invoke$arity$1(null);
}));

(portal.web.open.cljs$core$IFn$_invoke$arity$1 = (function (options){
portal.spec.assert_options(options);

portal.runtime.web.launcher.open(options);

return portal.runtime.web.client.make_atom(portal.runtime.web.launcher.child_window);
}));

(portal.web.open.cljs$lang$maxFixedArity = 1);

/**
 * Close all current inspector windows.
 */
portal.web.close = (function portal$web$close(){
portal.runtime.web.launcher.close();

return null;
});
goog.exportSymbol('portal.web.close', portal.web.close);
/**
 * Clear all values.
 */
portal.web.clear = (function portal$web$clear(){
portal.runtime.web.launcher.clear();

return null;
});
goog.exportSymbol('portal.web.clear', portal.web.clear);
if((typeof portal !== 'undefined') && (typeof portal.web !== 'undefined') && (typeof portal.web.init_QMARK_ !== 'undefined')){
} else {
portal.web.init_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
portal.web.init = (function portal$web$init(){
if(cljs.core.truth_(cljs.core.deref(portal.web.init_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(portal.web.init_QMARK_,true);

portal.runtime.web.launcher.init();

return portal.shortcuts.add_BANG_(new cljs.core.Keyword("portal.web","init","portal.web/init",2147026124),(function (log){
if(cljs.core.truth_(portal.shortcuts.match_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("portal.shortcuts","osx","portal.shortcuts/osx",300522451),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["shift",null,"meta",null,"o",null], null), null),new cljs.core.Keyword("portal.shortcuts","default","portal.shortcuts/default",71461651),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["shift",null,"control",null,"o",null], null), null)], null),log))){
return portal.web.open.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
}));
}
});
portal.web.init();

//# sourceMappingURL=portal.web.js.map
