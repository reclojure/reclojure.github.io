goog.provide('portal.runtime.web.client');
if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.web !== 'undefined') && (typeof portal.runtime.web.client !== 'undefined') && (typeof portal.runtime.web.client.session !== 'undefined')){
} else {
portal.runtime.web.client.session = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword("portal.runtime.web.client","id","portal.runtime.web.client/id",964542999),new cljs.core.Keyword(null,"value-cache","value-cache",-844944621),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null);
}
portal.runtime.web.client.request = (function portal$runtime$web$client$request(session_handle,message){
var temp__5751__auto__ = cljs.core.deref(session_handle);
if(cljs.core.truth_(temp__5751__auto__)){
var child_window = temp__5751__auto__;
return portal.runtime.read(child_window.portal.ui.rpc.handler(portal.runtime.write(message,portal.runtime.web.client.session)),portal.runtime.web.client.session);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Portal not open",message);
}
});
portal.runtime.web.client.push_state = (function portal$runtime$web$client$push_state(session,new_value){
portal.runtime.web.client.request(session,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("portal.rpc","push-state","portal.rpc/push-state",-1138005881),new cljs.core.Keyword(null,"state","state",-1988618099),new_value], null));

portal.runtime.update_selected.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portal.runtime.web.client","id","portal.runtime.web.client/id",964542999),new_value);

return new_value;
});

/**
* @constructor
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
portal.runtime.web.client.Portal = (function (session){
this.session = session;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(portal.runtime.web.client.Portal.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(portal.runtime.sessions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.runtime.web.client","id","portal.runtime.web.client/id",964542999),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_this,new_value){
var self__ = this;
var _this__$1 = this;
return portal.runtime.web.client.push_state(self__.session,new_value);
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__56746 = cljs.core.deref(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56746) : f.call(null,G__56746));
})());
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__56749 = cljs.core.deref(this$__$1);
var G__56752 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__56749,G__56752) : f.call(null,G__56749,G__56752));
})());
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__56763 = cljs.core.deref(this$__$1);
var G__56764 = a;
var G__56765 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__56763,G__56764,G__56765) : f.call(null,G__56763,G__56764,G__56765));
})());
}));

(portal.runtime.web.client.Portal.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.deref(this$__$1),a,b,xs));
}));

(portal.runtime.web.client.Portal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session","session",-1646156666,null)], null);
}));

(portal.runtime.web.client.Portal.cljs$lang$type = true);

(portal.runtime.web.client.Portal.cljs$lang$ctorStr = "portal.runtime.web.client/Portal");

(portal.runtime.web.client.Portal.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"portal.runtime.web.client/Portal");
}));

/**
 * Positional factory function for portal.runtime.web.client/Portal.
 */
portal.runtime.web.client.__GT_Portal = (function portal$runtime$web$client$__GT_Portal(session){
return (new portal.runtime.web.client.Portal(session));
});

portal.runtime.web.client.make_atom = (function portal$runtime$web$client$make_atom(session){
return (new portal.runtime.web.client.Portal(session));
});

//# sourceMappingURL=portal.runtime.web.client.js.map
