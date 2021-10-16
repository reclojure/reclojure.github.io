goog.provide('cljs.user');
cljs.user.portal_instance = null;
/**
 * Open a Portal window and register a tap handler for it. The result can be
 *   treated like an atom.
 */
cljs.user.portal = (function cljs$user$portal(){
var p = portal.web.open.cljs$core$IFn$_invoke$arity$1(cljs.user.portal_instance);
(cljs.user.portal_instance = p);

cljs.core.add_tap(new cljs.core.Var(function(){return portal.web.submit;},new cljs.core.Symbol("portal.web","submit","portal.web/submit",1322595104,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portal.web","portal.web",1079961926,null),new cljs.core.Symbol(null,"submit","submit",1591216210,null),"portal/web.cljs",22,true,1,10,10,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),"Tap target function.",(cljs.core.truth_(portal.web.submit)?portal.web.submit.cljs$lang$test:null)])));

return p;
});

//# sourceMappingURL=cljs.user.js.map
