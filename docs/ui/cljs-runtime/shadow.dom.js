goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_54773 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_54773(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_54775 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_54775(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__53267 = coll;
var G__53268 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__53267,G__53268) : shadow.dom.lazy_native_coll_seq.call(null,G__53267,G__53268));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__53334 = arguments.length;
switch (G__53334) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__53351 = arguments.length;
switch (G__53351) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__53366 = arguments.length;
switch (G__53366) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__53373 = arguments.length;
switch (G__53373) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__53391 = arguments.length;
switch (G__53391) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__53407 = arguments.length;
switch (G__53407) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e53430){if((e53430 instanceof Object)){
var e = e53430;
return console.log("didnt support attachEvent",el,e);
} else {
throw e53430;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__53441 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__53442 = null;
var count__53443 = (0);
var i__53444 = (0);
while(true){
if((i__53444 < count__53443)){
var el = chunk__53442.cljs$core$IIndexed$_nth$arity$2(null,i__53444);
var handler_54796__$1 = ((function (seq__53441,chunk__53442,count__53443,i__53444,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53441,chunk__53442,count__53443,i__53444,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_54796__$1);


var G__54801 = seq__53441;
var G__54802 = chunk__53442;
var G__54803 = count__53443;
var G__54804 = (i__53444 + (1));
seq__53441 = G__54801;
chunk__53442 = G__54802;
count__53443 = G__54803;
i__53444 = G__54804;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53441);
if(temp__5753__auto__){
var seq__53441__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53441__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53441__$1);
var G__54805 = cljs.core.chunk_rest(seq__53441__$1);
var G__54806 = c__4649__auto__;
var G__54807 = cljs.core.count(c__4649__auto__);
var G__54808 = (0);
seq__53441 = G__54805;
chunk__53442 = G__54806;
count__53443 = G__54807;
i__53444 = G__54808;
continue;
} else {
var el = cljs.core.first(seq__53441__$1);
var handler_54809__$1 = ((function (seq__53441,chunk__53442,count__53443,i__53444,el,seq__53441__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53441,chunk__53442,count__53443,i__53444,el,seq__53441__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_54809__$1);


var G__54810 = cljs.core.next(seq__53441__$1);
var G__54811 = null;
var G__54812 = (0);
var G__54813 = (0);
seq__53441 = G__54810;
chunk__53442 = G__54811;
count__53443 = G__54812;
i__53444 = G__54813;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__53464 = arguments.length;
switch (G__53464) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__53482 = cljs.core.seq(events);
var chunk__53483 = null;
var count__53484 = (0);
var i__53485 = (0);
while(true){
if((i__53485 < count__53484)){
var vec__53501 = chunk__53483.cljs$core$IIndexed$_nth$arity$2(null,i__53485);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53501,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53501,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54818 = seq__53482;
var G__54819 = chunk__53483;
var G__54820 = count__53484;
var G__54821 = (i__53485 + (1));
seq__53482 = G__54818;
chunk__53483 = G__54819;
count__53484 = G__54820;
i__53485 = G__54821;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53482);
if(temp__5753__auto__){
var seq__53482__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53482__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53482__$1);
var G__54822 = cljs.core.chunk_rest(seq__53482__$1);
var G__54823 = c__4649__auto__;
var G__54824 = cljs.core.count(c__4649__auto__);
var G__54825 = (0);
seq__53482 = G__54822;
chunk__53483 = G__54823;
count__53484 = G__54824;
i__53485 = G__54825;
continue;
} else {
var vec__53517 = cljs.core.first(seq__53482__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53517,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54827 = cljs.core.next(seq__53482__$1);
var G__54828 = null;
var G__54829 = (0);
var G__54830 = (0);
seq__53482 = G__54827;
chunk__53483 = G__54828;
count__53484 = G__54829;
i__53485 = G__54830;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__53527 = cljs.core.seq(styles);
var chunk__53528 = null;
var count__53529 = (0);
var i__53530 = (0);
while(true){
if((i__53530 < count__53529)){
var vec__53545 = chunk__53528.cljs$core$IIndexed$_nth$arity$2(null,i__53530);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53545,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__54833 = seq__53527;
var G__54834 = chunk__53528;
var G__54835 = count__53529;
var G__54836 = (i__53530 + (1));
seq__53527 = G__54833;
chunk__53528 = G__54834;
count__53529 = G__54835;
i__53530 = G__54836;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53527);
if(temp__5753__auto__){
var seq__53527__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53527__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53527__$1);
var G__54838 = cljs.core.chunk_rest(seq__53527__$1);
var G__54839 = c__4649__auto__;
var G__54840 = cljs.core.count(c__4649__auto__);
var G__54841 = (0);
seq__53527 = G__54838;
chunk__53528 = G__54839;
count__53529 = G__54840;
i__53530 = G__54841;
continue;
} else {
var vec__53551 = cljs.core.first(seq__53527__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53551,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__54844 = cljs.core.next(seq__53527__$1);
var G__54845 = null;
var G__54846 = (0);
var G__54847 = (0);
seq__53527 = G__54844;
chunk__53528 = G__54845;
count__53529 = G__54846;
i__53530 = G__54847;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__53560_54849 = key;
var G__53560_54850__$1 = (((G__53560_54849 instanceof cljs.core.Keyword))?G__53560_54849.fqn:null);
switch (G__53560_54850__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_54854 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_54854,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_54854,"aria-");
}
})())){
el.setAttribute(ks_54854,value);
} else {
(el[ks_54854] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__53615){
var map__53618 = p__53615;
var map__53618__$1 = cljs.core.__destructure_map(map__53618);
var props = map__53618__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53618__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__53620 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53620,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53620,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53620,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__53635 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__53635,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__53635;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__53640 = arguments.length;
switch (G__53640) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__53666){
var vec__53667 = p__53666;
var seq__53668 = cljs.core.seq(vec__53667);
var first__53669 = cljs.core.first(seq__53668);
var seq__53668__$1 = cljs.core.next(seq__53668);
var nn = first__53669;
var first__53669__$1 = cljs.core.first(seq__53668__$1);
var seq__53668__$2 = cljs.core.next(seq__53668__$1);
var np = first__53669__$1;
var nc = seq__53668__$2;
var node = vec__53667;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53677 = nn;
var G__53678 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53677,G__53678) : create_fn.call(null,G__53677,G__53678));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53683 = nn;
var G__53686 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53683,G__53686) : create_fn.call(null,G__53683,G__53686));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__53692 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53692,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53692,(1),null);
var seq__53697_54865 = cljs.core.seq(node_children);
var chunk__53698_54866 = null;
var count__53699_54867 = (0);
var i__53700_54868 = (0);
while(true){
if((i__53700_54868 < count__53699_54867)){
var child_struct_54869 = chunk__53698_54866.cljs$core$IIndexed$_nth$arity$2(null,i__53700_54868);
var children_54870 = shadow.dom.dom_node(child_struct_54869);
if(cljs.core.seq_QMARK_(children_54870)){
var seq__53793_54871 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54870));
var chunk__53795_54872 = null;
var count__53796_54873 = (0);
var i__53797_54874 = (0);
while(true){
if((i__53797_54874 < count__53796_54873)){
var child_54876 = chunk__53795_54872.cljs$core$IIndexed$_nth$arity$2(null,i__53797_54874);
if(cljs.core.truth_(child_54876)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54876);


var G__54880 = seq__53793_54871;
var G__54881 = chunk__53795_54872;
var G__54882 = count__53796_54873;
var G__54883 = (i__53797_54874 + (1));
seq__53793_54871 = G__54880;
chunk__53795_54872 = G__54881;
count__53796_54873 = G__54882;
i__53797_54874 = G__54883;
continue;
} else {
var G__54884 = seq__53793_54871;
var G__54885 = chunk__53795_54872;
var G__54886 = count__53796_54873;
var G__54887 = (i__53797_54874 + (1));
seq__53793_54871 = G__54884;
chunk__53795_54872 = G__54885;
count__53796_54873 = G__54886;
i__53797_54874 = G__54887;
continue;
}
} else {
var temp__5753__auto___54888 = cljs.core.seq(seq__53793_54871);
if(temp__5753__auto___54888){
var seq__53793_54889__$1 = temp__5753__auto___54888;
if(cljs.core.chunked_seq_QMARK_(seq__53793_54889__$1)){
var c__4649__auto___54890 = cljs.core.chunk_first(seq__53793_54889__$1);
var G__54891 = cljs.core.chunk_rest(seq__53793_54889__$1);
var G__54892 = c__4649__auto___54890;
var G__54893 = cljs.core.count(c__4649__auto___54890);
var G__54894 = (0);
seq__53793_54871 = G__54891;
chunk__53795_54872 = G__54892;
count__53796_54873 = G__54893;
i__53797_54874 = G__54894;
continue;
} else {
var child_54895 = cljs.core.first(seq__53793_54889__$1);
if(cljs.core.truth_(child_54895)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54895);


var G__54896 = cljs.core.next(seq__53793_54889__$1);
var G__54897 = null;
var G__54898 = (0);
var G__54899 = (0);
seq__53793_54871 = G__54896;
chunk__53795_54872 = G__54897;
count__53796_54873 = G__54898;
i__53797_54874 = G__54899;
continue;
} else {
var G__54902 = cljs.core.next(seq__53793_54889__$1);
var G__54903 = null;
var G__54904 = (0);
var G__54905 = (0);
seq__53793_54871 = G__54902;
chunk__53795_54872 = G__54903;
count__53796_54873 = G__54904;
i__53797_54874 = G__54905;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54870);
}


var G__54906 = seq__53697_54865;
var G__54907 = chunk__53698_54866;
var G__54908 = count__53699_54867;
var G__54909 = (i__53700_54868 + (1));
seq__53697_54865 = G__54906;
chunk__53698_54866 = G__54907;
count__53699_54867 = G__54908;
i__53700_54868 = G__54909;
continue;
} else {
var temp__5753__auto___54910 = cljs.core.seq(seq__53697_54865);
if(temp__5753__auto___54910){
var seq__53697_54911__$1 = temp__5753__auto___54910;
if(cljs.core.chunked_seq_QMARK_(seq__53697_54911__$1)){
var c__4649__auto___54912 = cljs.core.chunk_first(seq__53697_54911__$1);
var G__54913 = cljs.core.chunk_rest(seq__53697_54911__$1);
var G__54914 = c__4649__auto___54912;
var G__54915 = cljs.core.count(c__4649__auto___54912);
var G__54916 = (0);
seq__53697_54865 = G__54913;
chunk__53698_54866 = G__54914;
count__53699_54867 = G__54915;
i__53700_54868 = G__54916;
continue;
} else {
var child_struct_54917 = cljs.core.first(seq__53697_54911__$1);
var children_54919 = shadow.dom.dom_node(child_struct_54917);
if(cljs.core.seq_QMARK_(children_54919)){
var seq__53815_54920 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54919));
var chunk__53817_54921 = null;
var count__53818_54922 = (0);
var i__53819_54923 = (0);
while(true){
if((i__53819_54923 < count__53818_54922)){
var child_54925 = chunk__53817_54921.cljs$core$IIndexed$_nth$arity$2(null,i__53819_54923);
if(cljs.core.truth_(child_54925)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54925);


var G__54926 = seq__53815_54920;
var G__54927 = chunk__53817_54921;
var G__54928 = count__53818_54922;
var G__54929 = (i__53819_54923 + (1));
seq__53815_54920 = G__54926;
chunk__53817_54921 = G__54927;
count__53818_54922 = G__54928;
i__53819_54923 = G__54929;
continue;
} else {
var G__54930 = seq__53815_54920;
var G__54931 = chunk__53817_54921;
var G__54932 = count__53818_54922;
var G__54933 = (i__53819_54923 + (1));
seq__53815_54920 = G__54930;
chunk__53817_54921 = G__54931;
count__53818_54922 = G__54932;
i__53819_54923 = G__54933;
continue;
}
} else {
var temp__5753__auto___54934__$1 = cljs.core.seq(seq__53815_54920);
if(temp__5753__auto___54934__$1){
var seq__53815_54935__$1 = temp__5753__auto___54934__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53815_54935__$1)){
var c__4649__auto___54936 = cljs.core.chunk_first(seq__53815_54935__$1);
var G__54937 = cljs.core.chunk_rest(seq__53815_54935__$1);
var G__54938 = c__4649__auto___54936;
var G__54939 = cljs.core.count(c__4649__auto___54936);
var G__54940 = (0);
seq__53815_54920 = G__54937;
chunk__53817_54921 = G__54938;
count__53818_54922 = G__54939;
i__53819_54923 = G__54940;
continue;
} else {
var child_54941 = cljs.core.first(seq__53815_54935__$1);
if(cljs.core.truth_(child_54941)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54941);


var G__54942 = cljs.core.next(seq__53815_54935__$1);
var G__54943 = null;
var G__54944 = (0);
var G__54945 = (0);
seq__53815_54920 = G__54942;
chunk__53817_54921 = G__54943;
count__53818_54922 = G__54944;
i__53819_54923 = G__54945;
continue;
} else {
var G__54946 = cljs.core.next(seq__53815_54935__$1);
var G__54947 = null;
var G__54948 = (0);
var G__54949 = (0);
seq__53815_54920 = G__54946;
chunk__53817_54921 = G__54947;
count__53818_54922 = G__54948;
i__53819_54923 = G__54949;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54919);
}


var G__54950 = cljs.core.next(seq__53697_54911__$1);
var G__54951 = null;
var G__54952 = (0);
var G__54953 = (0);
seq__53697_54865 = G__54950;
chunk__53698_54866 = G__54951;
count__53699_54867 = G__54952;
i__53700_54868 = G__54953;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__53894 = cljs.core.seq(node);
var chunk__53895 = null;
var count__53896 = (0);
var i__53897 = (0);
while(true){
if((i__53897 < count__53896)){
var n = chunk__53895.cljs$core$IIndexed$_nth$arity$2(null,i__53897);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54962 = seq__53894;
var G__54963 = chunk__53895;
var G__54964 = count__53896;
var G__54965 = (i__53897 + (1));
seq__53894 = G__54962;
chunk__53895 = G__54963;
count__53896 = G__54964;
i__53897 = G__54965;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53894);
if(temp__5753__auto__){
var seq__53894__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53894__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53894__$1);
var G__54967 = cljs.core.chunk_rest(seq__53894__$1);
var G__54968 = c__4649__auto__;
var G__54969 = cljs.core.count(c__4649__auto__);
var G__54970 = (0);
seq__53894 = G__54967;
chunk__53895 = G__54968;
count__53896 = G__54969;
i__53897 = G__54970;
continue;
} else {
var n = cljs.core.first(seq__53894__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54972 = cljs.core.next(seq__53894__$1);
var G__54973 = null;
var G__54974 = (0);
var G__54975 = (0);
seq__53894 = G__54972;
chunk__53895 = G__54973;
count__53896 = G__54974;
i__53897 = G__54975;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__53933 = arguments.length;
switch (G__53933) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__53950 = arguments.length;
switch (G__53950) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__53964 = arguments.length;
switch (G__53964) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___54990 = arguments.length;
var i__4830__auto___54991 = (0);
while(true){
if((i__4830__auto___54991 < len__4829__auto___54990)){
args__4835__auto__.push((arguments[i__4830__auto___54991]));

var G__54993 = (i__4830__auto___54991 + (1));
i__4830__auto___54991 = G__54993;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__53994_54995 = cljs.core.seq(nodes);
var chunk__53995_54996 = null;
var count__53996_54997 = (0);
var i__53997_54998 = (0);
while(true){
if((i__53997_54998 < count__53996_54997)){
var node_54999 = chunk__53995_54996.cljs$core$IIndexed$_nth$arity$2(null,i__53997_54998);
fragment.appendChild(shadow.dom._to_dom(node_54999));


var G__55000 = seq__53994_54995;
var G__55001 = chunk__53995_54996;
var G__55002 = count__53996_54997;
var G__55003 = (i__53997_54998 + (1));
seq__53994_54995 = G__55000;
chunk__53995_54996 = G__55001;
count__53996_54997 = G__55002;
i__53997_54998 = G__55003;
continue;
} else {
var temp__5753__auto___55004 = cljs.core.seq(seq__53994_54995);
if(temp__5753__auto___55004){
var seq__53994_55005__$1 = temp__5753__auto___55004;
if(cljs.core.chunked_seq_QMARK_(seq__53994_55005__$1)){
var c__4649__auto___55006 = cljs.core.chunk_first(seq__53994_55005__$1);
var G__55007 = cljs.core.chunk_rest(seq__53994_55005__$1);
var G__55008 = c__4649__auto___55006;
var G__55009 = cljs.core.count(c__4649__auto___55006);
var G__55010 = (0);
seq__53994_54995 = G__55007;
chunk__53995_54996 = G__55008;
count__53996_54997 = G__55009;
i__53997_54998 = G__55010;
continue;
} else {
var node_55011 = cljs.core.first(seq__53994_55005__$1);
fragment.appendChild(shadow.dom._to_dom(node_55011));


var G__55017 = cljs.core.next(seq__53994_55005__$1);
var G__55018 = null;
var G__55019 = (0);
var G__55020 = (0);
seq__53994_54995 = G__55017;
chunk__53995_54996 = G__55018;
count__53996_54997 = G__55019;
i__53997_54998 = G__55020;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq53983){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53983));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54011_55021 = cljs.core.seq(scripts);
var chunk__54012_55022 = null;
var count__54013_55023 = (0);
var i__54014_55024 = (0);
while(true){
if((i__54014_55024 < count__54013_55023)){
var vec__54029_55027 = chunk__54012_55022.cljs$core$IIndexed$_nth$arity$2(null,i__54014_55024);
var script_tag_55028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54029_55027,(0),null);
var script_body_55029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54029_55027,(1),null);
eval(script_body_55029);


var G__55034 = seq__54011_55021;
var G__55035 = chunk__54012_55022;
var G__55036 = count__54013_55023;
var G__55037 = (i__54014_55024 + (1));
seq__54011_55021 = G__55034;
chunk__54012_55022 = G__55035;
count__54013_55023 = G__55036;
i__54014_55024 = G__55037;
continue;
} else {
var temp__5753__auto___55038 = cljs.core.seq(seq__54011_55021);
if(temp__5753__auto___55038){
var seq__54011_55039__$1 = temp__5753__auto___55038;
if(cljs.core.chunked_seq_QMARK_(seq__54011_55039__$1)){
var c__4649__auto___55040 = cljs.core.chunk_first(seq__54011_55039__$1);
var G__55041 = cljs.core.chunk_rest(seq__54011_55039__$1);
var G__55042 = c__4649__auto___55040;
var G__55043 = cljs.core.count(c__4649__auto___55040);
var G__55044 = (0);
seq__54011_55021 = G__55041;
chunk__54012_55022 = G__55042;
count__54013_55023 = G__55043;
i__54014_55024 = G__55044;
continue;
} else {
var vec__54036_55050 = cljs.core.first(seq__54011_55039__$1);
var script_tag_55051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54036_55050,(0),null);
var script_body_55052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54036_55050,(1),null);
eval(script_body_55052);


var G__55053 = cljs.core.next(seq__54011_55039__$1);
var G__55054 = null;
var G__55055 = (0);
var G__55056 = (0);
seq__54011_55021 = G__55053;
chunk__54012_55022 = G__55054;
count__54013_55023 = G__55055;
i__54014_55024 = G__55056;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__54040){
var vec__54041 = p__54040;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54041,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54041,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__54062 = arguments.length;
switch (G__54062) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__54092 = cljs.core.seq(style_keys);
var chunk__54093 = null;
var count__54094 = (0);
var i__54095 = (0);
while(true){
if((i__54095 < count__54094)){
var it = chunk__54093.cljs$core$IIndexed$_nth$arity$2(null,i__54095);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55068 = seq__54092;
var G__55069 = chunk__54093;
var G__55070 = count__54094;
var G__55071 = (i__54095 + (1));
seq__54092 = G__55068;
chunk__54093 = G__55069;
count__54094 = G__55070;
i__54095 = G__55071;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54092);
if(temp__5753__auto__){
var seq__54092__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54092__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__54092__$1);
var G__55072 = cljs.core.chunk_rest(seq__54092__$1);
var G__55073 = c__4649__auto__;
var G__55074 = cljs.core.count(c__4649__auto__);
var G__55075 = (0);
seq__54092 = G__55072;
chunk__54093 = G__55073;
count__54094 = G__55074;
i__54095 = G__55075;
continue;
} else {
var it = cljs.core.first(seq__54092__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55076 = cljs.core.next(seq__54092__$1);
var G__55077 = null;
var G__55078 = (0);
var G__55079 = (0);
seq__54092 = G__55076;
chunk__54093 = G__55077;
count__54094 = G__55078;
i__54095 = G__55079;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k54112,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__54156 = k54112;
var G__54156__$1 = (((G__54156 instanceof cljs.core.Keyword))?G__54156.fqn:null);
switch (G__54156__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54112,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__54181){
var vec__54183 = p__54181;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54183,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54183,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54111){
var self__ = this;
var G__54111__$1 = this;
return (new cljs.core.RecordIter((0),G__54111__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54113,other54114){
var self__ = this;
var this54113__$1 = this;
return (((!((other54114 == null)))) && ((((this54113__$1.constructor === other54114.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54113__$1.x,other54114.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54113__$1.y,other54114.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54113__$1.__extmap,other54114.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k54112){
var self__ = this;
var this__4479__auto____$1 = this;
var G__54208 = k54112;
var G__54208__$1 = (((G__54208 instanceof cljs.core.Keyword))?G__54208.fqn:null);
switch (G__54208__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54112);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__54111){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__54212 = cljs.core.keyword_identical_QMARK_;
var expr__54213 = k__4481__auto__;
if(cljs.core.truth_((pred__54212.cljs$core$IFn$_invoke$arity$2 ? pred__54212.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__54213) : pred__54212.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__54213)))){
return (new shadow.dom.Coordinate(G__54111,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54212.cljs$core$IFn$_invoke$arity$2 ? pred__54212.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__54213) : pred__54212.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__54213)))){
return (new shadow.dom.Coordinate(self__.x,G__54111,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__54111),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__54111){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54111,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54121){
var extmap__4512__auto__ = (function (){var G__54241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54121,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54121)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54241);
} else {
return G__54241;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54121),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54121),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k54253,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__54267 = k54253;
var G__54267__$1 = (((G__54267 instanceof cljs.core.Keyword))?G__54267.fqn:null);
switch (G__54267__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54253,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__54272){
var vec__54274 = p__54272;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54274,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54274,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54252){
var self__ = this;
var G__54252__$1 = this;
return (new cljs.core.RecordIter((0),G__54252__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54254,other54255){
var self__ = this;
var this54254__$1 = this;
return (((!((other54255 == null)))) && ((((this54254__$1.constructor === other54255.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54254__$1.w,other54255.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54254__$1.h,other54255.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54254__$1.__extmap,other54255.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k54253){
var self__ = this;
var this__4479__auto____$1 = this;
var G__54308 = k54253;
var G__54308__$1 = (((G__54308 instanceof cljs.core.Keyword))?G__54308.fqn:null);
switch (G__54308__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54253);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__54252){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__54313 = cljs.core.keyword_identical_QMARK_;
var expr__54314 = k__4481__auto__;
if(cljs.core.truth_((pred__54313.cljs$core$IFn$_invoke$arity$2 ? pred__54313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__54314) : pred__54313.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__54314)))){
return (new shadow.dom.Size(G__54252,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54313.cljs$core$IFn$_invoke$arity$2 ? pred__54313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__54314) : pred__54313.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__54314)))){
return (new shadow.dom.Size(self__.w,G__54252,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__54252),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__54252){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54252,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54260){
var extmap__4512__auto__ = (function (){var G__54334 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54260,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54260)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54334);
} else {
return G__54334;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54260),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54260),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__55128 = (i + (1));
var G__55129 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55128;
ret = G__55129;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54362){
var vec__54364 = p__54362;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54364,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54364,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54375 = arguments.length;
switch (G__54375) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__55142 = ps;
var G__55143 = (i + (1));
el__$1 = G__55142;
i = G__55143;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54402 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54402,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54402,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54402,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54409_55156 = cljs.core.seq(props);
var chunk__54410_55157 = null;
var count__54411_55158 = (0);
var i__54412_55159 = (0);
while(true){
if((i__54412_55159 < count__54411_55158)){
var vec__54430_55163 = chunk__54410_55157.cljs$core$IIndexed$_nth$arity$2(null,i__54412_55159);
var k_55164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54430_55163,(0),null);
var v_55165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54430_55163,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_55164);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55164),v_55165);


var G__55166 = seq__54409_55156;
var G__55167 = chunk__54410_55157;
var G__55168 = count__54411_55158;
var G__55169 = (i__54412_55159 + (1));
seq__54409_55156 = G__55166;
chunk__54410_55157 = G__55167;
count__54411_55158 = G__55168;
i__54412_55159 = G__55169;
continue;
} else {
var temp__5753__auto___55170 = cljs.core.seq(seq__54409_55156);
if(temp__5753__auto___55170){
var seq__54409_55171__$1 = temp__5753__auto___55170;
if(cljs.core.chunked_seq_QMARK_(seq__54409_55171__$1)){
var c__4649__auto___55172 = cljs.core.chunk_first(seq__54409_55171__$1);
var G__55174 = cljs.core.chunk_rest(seq__54409_55171__$1);
var G__55175 = c__4649__auto___55172;
var G__55176 = cljs.core.count(c__4649__auto___55172);
var G__55177 = (0);
seq__54409_55156 = G__55174;
chunk__54410_55157 = G__55175;
count__54411_55158 = G__55176;
i__54412_55159 = G__55177;
continue;
} else {
var vec__54438_55178 = cljs.core.first(seq__54409_55171__$1);
var k_55179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54438_55178,(0),null);
var v_55180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54438_55178,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_55179);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55179),v_55180);


var G__55181 = cljs.core.next(seq__54409_55171__$1);
var G__55182 = null;
var G__55183 = (0);
var G__55184 = (0);
seq__54409_55156 = G__55181;
chunk__54410_55157 = G__55182;
count__54411_55158 = G__55183;
i__54412_55159 = G__55184;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__54442 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54442,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54442,(1),null);
var seq__54445_55192 = cljs.core.seq(node_children);
var chunk__54447_55193 = null;
var count__54448_55194 = (0);
var i__54449_55195 = (0);
while(true){
if((i__54449_55195 < count__54448_55194)){
var child_struct_55196 = chunk__54447_55193.cljs$core$IIndexed$_nth$arity$2(null,i__54449_55195);
if((!((child_struct_55196 == null)))){
if(typeof child_struct_55196 === 'string'){
var text_55197 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55197),child_struct_55196].join(''));
} else {
var children_55198 = shadow.dom.svg_node(child_struct_55196);
if(cljs.core.seq_QMARK_(children_55198)){
var seq__54490_55199 = cljs.core.seq(children_55198);
var chunk__54492_55200 = null;
var count__54493_55201 = (0);
var i__54494_55202 = (0);
while(true){
if((i__54494_55202 < count__54493_55201)){
var child_55206 = chunk__54492_55200.cljs$core$IIndexed$_nth$arity$2(null,i__54494_55202);
if(cljs.core.truth_(child_55206)){
node.appendChild(child_55206);


var G__55209 = seq__54490_55199;
var G__55210 = chunk__54492_55200;
var G__55211 = count__54493_55201;
var G__55212 = (i__54494_55202 + (1));
seq__54490_55199 = G__55209;
chunk__54492_55200 = G__55210;
count__54493_55201 = G__55211;
i__54494_55202 = G__55212;
continue;
} else {
var G__55213 = seq__54490_55199;
var G__55214 = chunk__54492_55200;
var G__55215 = count__54493_55201;
var G__55216 = (i__54494_55202 + (1));
seq__54490_55199 = G__55213;
chunk__54492_55200 = G__55214;
count__54493_55201 = G__55215;
i__54494_55202 = G__55216;
continue;
}
} else {
var temp__5753__auto___55217 = cljs.core.seq(seq__54490_55199);
if(temp__5753__auto___55217){
var seq__54490_55218__$1 = temp__5753__auto___55217;
if(cljs.core.chunked_seq_QMARK_(seq__54490_55218__$1)){
var c__4649__auto___55219 = cljs.core.chunk_first(seq__54490_55218__$1);
var G__55220 = cljs.core.chunk_rest(seq__54490_55218__$1);
var G__55221 = c__4649__auto___55219;
var G__55222 = cljs.core.count(c__4649__auto___55219);
var G__55223 = (0);
seq__54490_55199 = G__55220;
chunk__54492_55200 = G__55221;
count__54493_55201 = G__55222;
i__54494_55202 = G__55223;
continue;
} else {
var child_55224 = cljs.core.first(seq__54490_55218__$1);
if(cljs.core.truth_(child_55224)){
node.appendChild(child_55224);


var G__55228 = cljs.core.next(seq__54490_55218__$1);
var G__55229 = null;
var G__55230 = (0);
var G__55231 = (0);
seq__54490_55199 = G__55228;
chunk__54492_55200 = G__55229;
count__54493_55201 = G__55230;
i__54494_55202 = G__55231;
continue;
} else {
var G__55232 = cljs.core.next(seq__54490_55218__$1);
var G__55233 = null;
var G__55234 = (0);
var G__55235 = (0);
seq__54490_55199 = G__55232;
chunk__54492_55200 = G__55233;
count__54493_55201 = G__55234;
i__54494_55202 = G__55235;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55198);
}
}


var G__55236 = seq__54445_55192;
var G__55237 = chunk__54447_55193;
var G__55238 = count__54448_55194;
var G__55239 = (i__54449_55195 + (1));
seq__54445_55192 = G__55236;
chunk__54447_55193 = G__55237;
count__54448_55194 = G__55238;
i__54449_55195 = G__55239;
continue;
} else {
var G__55240 = seq__54445_55192;
var G__55241 = chunk__54447_55193;
var G__55242 = count__54448_55194;
var G__55243 = (i__54449_55195 + (1));
seq__54445_55192 = G__55240;
chunk__54447_55193 = G__55241;
count__54448_55194 = G__55242;
i__54449_55195 = G__55243;
continue;
}
} else {
var temp__5753__auto___55244 = cljs.core.seq(seq__54445_55192);
if(temp__5753__auto___55244){
var seq__54445_55245__$1 = temp__5753__auto___55244;
if(cljs.core.chunked_seq_QMARK_(seq__54445_55245__$1)){
var c__4649__auto___55246 = cljs.core.chunk_first(seq__54445_55245__$1);
var G__55247 = cljs.core.chunk_rest(seq__54445_55245__$1);
var G__55248 = c__4649__auto___55246;
var G__55249 = cljs.core.count(c__4649__auto___55246);
var G__55250 = (0);
seq__54445_55192 = G__55247;
chunk__54447_55193 = G__55248;
count__54448_55194 = G__55249;
i__54449_55195 = G__55250;
continue;
} else {
var child_struct_55254 = cljs.core.first(seq__54445_55245__$1);
if((!((child_struct_55254 == null)))){
if(typeof child_struct_55254 === 'string'){
var text_55256 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55256),child_struct_55254].join(''));
} else {
var children_55257 = shadow.dom.svg_node(child_struct_55254);
if(cljs.core.seq_QMARK_(children_55257)){
var seq__54557_55258 = cljs.core.seq(children_55257);
var chunk__54559_55259 = null;
var count__54560_55260 = (0);
var i__54561_55261 = (0);
while(true){
if((i__54561_55261 < count__54560_55260)){
var child_55262 = chunk__54559_55259.cljs$core$IIndexed$_nth$arity$2(null,i__54561_55261);
if(cljs.core.truth_(child_55262)){
node.appendChild(child_55262);


var G__55263 = seq__54557_55258;
var G__55264 = chunk__54559_55259;
var G__55265 = count__54560_55260;
var G__55266 = (i__54561_55261 + (1));
seq__54557_55258 = G__55263;
chunk__54559_55259 = G__55264;
count__54560_55260 = G__55265;
i__54561_55261 = G__55266;
continue;
} else {
var G__55267 = seq__54557_55258;
var G__55268 = chunk__54559_55259;
var G__55269 = count__54560_55260;
var G__55270 = (i__54561_55261 + (1));
seq__54557_55258 = G__55267;
chunk__54559_55259 = G__55268;
count__54560_55260 = G__55269;
i__54561_55261 = G__55270;
continue;
}
} else {
var temp__5753__auto___55271__$1 = cljs.core.seq(seq__54557_55258);
if(temp__5753__auto___55271__$1){
var seq__54557_55272__$1 = temp__5753__auto___55271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54557_55272__$1)){
var c__4649__auto___55273 = cljs.core.chunk_first(seq__54557_55272__$1);
var G__55274 = cljs.core.chunk_rest(seq__54557_55272__$1);
var G__55275 = c__4649__auto___55273;
var G__55276 = cljs.core.count(c__4649__auto___55273);
var G__55277 = (0);
seq__54557_55258 = G__55274;
chunk__54559_55259 = G__55275;
count__54560_55260 = G__55276;
i__54561_55261 = G__55277;
continue;
} else {
var child_55281 = cljs.core.first(seq__54557_55272__$1);
if(cljs.core.truth_(child_55281)){
node.appendChild(child_55281);


var G__55282 = cljs.core.next(seq__54557_55272__$1);
var G__55283 = null;
var G__55284 = (0);
var G__55285 = (0);
seq__54557_55258 = G__55282;
chunk__54559_55259 = G__55283;
count__54560_55260 = G__55284;
i__54561_55261 = G__55285;
continue;
} else {
var G__55286 = cljs.core.next(seq__54557_55272__$1);
var G__55287 = null;
var G__55288 = (0);
var G__55289 = (0);
seq__54557_55258 = G__55286;
chunk__54559_55259 = G__55287;
count__54560_55260 = G__55288;
i__54561_55261 = G__55289;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55257);
}
}


var G__55290 = cljs.core.next(seq__54445_55245__$1);
var G__55291 = null;
var G__55292 = (0);
var G__55293 = (0);
seq__54445_55192 = G__55290;
chunk__54447_55193 = G__55291;
count__54448_55194 = G__55292;
i__54449_55195 = G__55293;
continue;
} else {
var G__55295 = cljs.core.next(seq__54445_55245__$1);
var G__55296 = null;
var G__55297 = (0);
var G__55298 = (0);
seq__54445_55192 = G__55295;
chunk__54447_55193 = G__55296;
count__54448_55194 = G__55297;
i__54449_55195 = G__55298;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___55300 = arguments.length;
var i__4830__auto___55301 = (0);
while(true){
if((i__4830__auto___55301 < len__4829__auto___55300)){
args__4835__auto__.push((arguments[i__4830__auto___55301]));

var G__55302 = (i__4830__auto___55301 + (1));
i__4830__auto___55301 = G__55302;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq54647){
var G__54648 = cljs.core.first(seq54647);
var seq54647__$1 = cljs.core.next(seq54647);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54648,seq54647__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__54670 = arguments.length;
switch (G__54670) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__49319__auto___55312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_54702){
var state_val_54703 = (state_54702[(1)]);
if((state_val_54703 === (1))){
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54702__$1,(2),once_or_cleanup);
} else {
if((state_val_54703 === (2))){
var inst_54699 = (state_54702[(2)]);
var inst_54700 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54702__$1 = (function (){var statearr_54711 = state_54702;
(statearr_54711[(7)] = inst_54699);

return statearr_54711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54702__$1,inst_54700);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48978__auto__ = null;
var shadow$dom$state_machine__48978__auto____0 = (function (){
var statearr_54723 = [null,null,null,null,null,null,null,null];
(statearr_54723[(0)] = shadow$dom$state_machine__48978__auto__);

(statearr_54723[(1)] = (1));

return statearr_54723;
});
var shadow$dom$state_machine__48978__auto____1 = (function (state_54702){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_54702);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e54731){var ex__48981__auto__ = e54731;
var statearr_54738_55313 = state_54702;
(statearr_54738_55313[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_54702[(4)]))){
var statearr_54739_55314 = state_54702;
(statearr_54739_55314[(1)] = cljs.core.first((state_54702[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55315 = state_54702;
state_54702 = G__55315;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
shadow$dom$state_machine__48978__auto__ = function(state_54702){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48978__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48978__auto____1.call(this,state_54702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48978__auto____0;
shadow$dom$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48978__auto____1;
return shadow$dom$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_54748 = f__49320__auto__();
(statearr_54748[(6)] = c__49319__auto___55312);

return statearr_54748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
