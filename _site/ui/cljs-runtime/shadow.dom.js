goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_68016 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_68016(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_68018 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_68018(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__66703 = coll;
var G__66704 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__66703,G__66704) : shadow.dom.lazy_native_coll_seq.call(null,G__66703,G__66704));
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
var G__66759 = arguments.length;
switch (G__66759) {
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
var G__66779 = arguments.length;
switch (G__66779) {
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
var G__66802 = arguments.length;
switch (G__66802) {
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
var G__66819 = arguments.length;
switch (G__66819) {
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
var G__66852 = arguments.length;
switch (G__66852) {
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
var G__66885 = arguments.length;
switch (G__66885) {
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
}catch (e66939){if((e66939 instanceof Object)){
var e = e66939;
return console.log("didnt support attachEvent",el,e);
} else {
throw e66939;

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
var seq__66982 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__66983 = null;
var count__66984 = (0);
var i__66985 = (0);
while(true){
if((i__66985 < count__66984)){
var el = chunk__66983.cljs$core$IIndexed$_nth$arity$2(null,i__66985);
var handler_68073__$1 = ((function (seq__66982,chunk__66983,count__66984,i__66985,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__66982,chunk__66983,count__66984,i__66985,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68073__$1);


var G__68081 = seq__66982;
var G__68082 = chunk__66983;
var G__68083 = count__66984;
var G__68084 = (i__66985 + (1));
seq__66982 = G__68081;
chunk__66983 = G__68082;
count__66984 = G__68083;
i__66985 = G__68084;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__66982);
if(temp__5753__auto__){
var seq__66982__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66982__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__66982__$1);
var G__68088 = cljs.core.chunk_rest(seq__66982__$1);
var G__68089 = c__4649__auto__;
var G__68090 = cljs.core.count(c__4649__auto__);
var G__68091 = (0);
seq__66982 = G__68088;
chunk__66983 = G__68089;
count__66984 = G__68090;
i__66985 = G__68091;
continue;
} else {
var el = cljs.core.first(seq__66982__$1);
var handler_68092__$1 = ((function (seq__66982,chunk__66983,count__66984,i__66985,el,seq__66982__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__66982,chunk__66983,count__66984,i__66985,el,seq__66982__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68092__$1);


var G__68103 = cljs.core.next(seq__66982__$1);
var G__68104 = null;
var G__68105 = (0);
var G__68106 = (0);
seq__66982 = G__68103;
chunk__66983 = G__68104;
count__66984 = G__68105;
i__66985 = G__68106;
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
var G__67048 = arguments.length;
switch (G__67048) {
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
var seq__67081 = cljs.core.seq(events);
var chunk__67082 = null;
var count__67083 = (0);
var i__67084 = (0);
while(true){
if((i__67084 < count__67083)){
var vec__67120 = chunk__67082.cljs$core$IIndexed$_nth$arity$2(null,i__67084);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67120,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68131 = seq__67081;
var G__68132 = chunk__67082;
var G__68133 = count__67083;
var G__68134 = (i__67084 + (1));
seq__67081 = G__68131;
chunk__67082 = G__68132;
count__67083 = G__68133;
i__67084 = G__68134;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67081);
if(temp__5753__auto__){
var seq__67081__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67081__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__67081__$1);
var G__68136 = cljs.core.chunk_rest(seq__67081__$1);
var G__68137 = c__4649__auto__;
var G__68138 = cljs.core.count(c__4649__auto__);
var G__68139 = (0);
seq__67081 = G__68136;
chunk__67082 = G__68137;
count__67083 = G__68138;
i__67084 = G__68139;
continue;
} else {
var vec__67138 = cljs.core.first(seq__67081__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67138,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68146 = cljs.core.next(seq__67081__$1);
var G__68147 = null;
var G__68148 = (0);
var G__68149 = (0);
seq__67081 = G__68146;
chunk__67082 = G__68147;
count__67083 = G__68148;
i__67084 = G__68149;
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
var seq__67153 = cljs.core.seq(styles);
var chunk__67154 = null;
var count__67155 = (0);
var i__67156 = (0);
while(true){
if((i__67156 < count__67155)){
var vec__67181 = chunk__67154.cljs$core$IIndexed$_nth$arity$2(null,i__67156);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67181,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68161 = seq__67153;
var G__68162 = chunk__67154;
var G__68163 = count__67155;
var G__68164 = (i__67156 + (1));
seq__67153 = G__68161;
chunk__67154 = G__68162;
count__67155 = G__68163;
i__67156 = G__68164;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67153);
if(temp__5753__auto__){
var seq__67153__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67153__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__67153__$1);
var G__68165 = cljs.core.chunk_rest(seq__67153__$1);
var G__68166 = c__4649__auto__;
var G__68167 = cljs.core.count(c__4649__auto__);
var G__68168 = (0);
seq__67153 = G__68165;
chunk__67154 = G__68166;
count__67155 = G__68167;
i__67156 = G__68168;
continue;
} else {
var vec__67191 = cljs.core.first(seq__67153__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67191,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68177 = cljs.core.next(seq__67153__$1);
var G__68178 = null;
var G__68179 = (0);
var G__68180 = (0);
seq__67153 = G__68177;
chunk__67154 = G__68178;
count__67155 = G__68179;
i__67156 = G__68180;
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
var G__67206_68182 = key;
var G__67206_68183__$1 = (((G__67206_68182 instanceof cljs.core.Keyword))?G__67206_68182.fqn:null);
switch (G__67206_68183__$1) {
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
var ks_68199 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_68199,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_68199,"aria-");
}
})())){
el.setAttribute(ks_68199,value);
} else {
(el[ks_68199] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__67301){
var map__67303 = p__67301;
var map__67303__$1 = cljs.core.__destructure_map(map__67303);
var props = map__67303__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67303__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__67305 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67305,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67305,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67305,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__67321 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__67321,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__67321;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__67330 = arguments.length;
switch (G__67330) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__67366){
var vec__67369 = p__67366;
var seq__67370 = cljs.core.seq(vec__67369);
var first__67371 = cljs.core.first(seq__67370);
var seq__67370__$1 = cljs.core.next(seq__67370);
var nn = first__67371;
var first__67371__$1 = cljs.core.first(seq__67370__$1);
var seq__67370__$2 = cljs.core.next(seq__67370__$1);
var np = first__67371__$1;
var nc = seq__67370__$2;
var node = vec__67369;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67375 = nn;
var G__67376 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67375,G__67376) : create_fn.call(null,G__67375,G__67376));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67378 = nn;
var G__67379 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67378,G__67379) : create_fn.call(null,G__67378,G__67379));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__67383 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67383,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67383,(1),null);
var seq__67390_68261 = cljs.core.seq(node_children);
var chunk__67391_68262 = null;
var count__67392_68263 = (0);
var i__67393_68264 = (0);
while(true){
if((i__67393_68264 < count__67392_68263)){
var child_struct_68265 = chunk__67391_68262.cljs$core$IIndexed$_nth$arity$2(null,i__67393_68264);
var children_68266 = shadow.dom.dom_node(child_struct_68265);
if(cljs.core.seq_QMARK_(children_68266)){
var seq__67449_68267 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68266));
var chunk__67451_68268 = null;
var count__67452_68269 = (0);
var i__67453_68270 = (0);
while(true){
if((i__67453_68270 < count__67452_68269)){
var child_68271 = chunk__67451_68268.cljs$core$IIndexed$_nth$arity$2(null,i__67453_68270);
if(cljs.core.truth_(child_68271)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68271);


var G__68274 = seq__67449_68267;
var G__68275 = chunk__67451_68268;
var G__68276 = count__67452_68269;
var G__68277 = (i__67453_68270 + (1));
seq__67449_68267 = G__68274;
chunk__67451_68268 = G__68275;
count__67452_68269 = G__68276;
i__67453_68270 = G__68277;
continue;
} else {
var G__68282 = seq__67449_68267;
var G__68283 = chunk__67451_68268;
var G__68284 = count__67452_68269;
var G__68285 = (i__67453_68270 + (1));
seq__67449_68267 = G__68282;
chunk__67451_68268 = G__68283;
count__67452_68269 = G__68284;
i__67453_68270 = G__68285;
continue;
}
} else {
var temp__5753__auto___68292 = cljs.core.seq(seq__67449_68267);
if(temp__5753__auto___68292){
var seq__67449_68293__$1 = temp__5753__auto___68292;
if(cljs.core.chunked_seq_QMARK_(seq__67449_68293__$1)){
var c__4649__auto___68294 = cljs.core.chunk_first(seq__67449_68293__$1);
var G__68295 = cljs.core.chunk_rest(seq__67449_68293__$1);
var G__68296 = c__4649__auto___68294;
var G__68297 = cljs.core.count(c__4649__auto___68294);
var G__68298 = (0);
seq__67449_68267 = G__68295;
chunk__67451_68268 = G__68296;
count__67452_68269 = G__68297;
i__67453_68270 = G__68298;
continue;
} else {
var child_68299 = cljs.core.first(seq__67449_68293__$1);
if(cljs.core.truth_(child_68299)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68299);


var G__68304 = cljs.core.next(seq__67449_68293__$1);
var G__68305 = null;
var G__68306 = (0);
var G__68307 = (0);
seq__67449_68267 = G__68304;
chunk__67451_68268 = G__68305;
count__67452_68269 = G__68306;
i__67453_68270 = G__68307;
continue;
} else {
var G__68310 = cljs.core.next(seq__67449_68293__$1);
var G__68311 = null;
var G__68312 = (0);
var G__68313 = (0);
seq__67449_68267 = G__68310;
chunk__67451_68268 = G__68311;
count__67452_68269 = G__68312;
i__67453_68270 = G__68313;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68266);
}


var G__68320 = seq__67390_68261;
var G__68321 = chunk__67391_68262;
var G__68322 = count__67392_68263;
var G__68323 = (i__67393_68264 + (1));
seq__67390_68261 = G__68320;
chunk__67391_68262 = G__68321;
count__67392_68263 = G__68322;
i__67393_68264 = G__68323;
continue;
} else {
var temp__5753__auto___68330 = cljs.core.seq(seq__67390_68261);
if(temp__5753__auto___68330){
var seq__67390_68331__$1 = temp__5753__auto___68330;
if(cljs.core.chunked_seq_QMARK_(seq__67390_68331__$1)){
var c__4649__auto___68332 = cljs.core.chunk_first(seq__67390_68331__$1);
var G__68333 = cljs.core.chunk_rest(seq__67390_68331__$1);
var G__68334 = c__4649__auto___68332;
var G__68335 = cljs.core.count(c__4649__auto___68332);
var G__68336 = (0);
seq__67390_68261 = G__68333;
chunk__67391_68262 = G__68334;
count__67392_68263 = G__68335;
i__67393_68264 = G__68336;
continue;
} else {
var child_struct_68341 = cljs.core.first(seq__67390_68331__$1);
var children_68342 = shadow.dom.dom_node(child_struct_68341);
if(cljs.core.seq_QMARK_(children_68342)){
var seq__67472_68343 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68342));
var chunk__67474_68344 = null;
var count__67475_68345 = (0);
var i__67476_68346 = (0);
while(true){
if((i__67476_68346 < count__67475_68345)){
var child_68348 = chunk__67474_68344.cljs$core$IIndexed$_nth$arity$2(null,i__67476_68346);
if(cljs.core.truth_(child_68348)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68348);


var G__68350 = seq__67472_68343;
var G__68351 = chunk__67474_68344;
var G__68352 = count__67475_68345;
var G__68353 = (i__67476_68346 + (1));
seq__67472_68343 = G__68350;
chunk__67474_68344 = G__68351;
count__67475_68345 = G__68352;
i__67476_68346 = G__68353;
continue;
} else {
var G__68355 = seq__67472_68343;
var G__68356 = chunk__67474_68344;
var G__68357 = count__67475_68345;
var G__68358 = (i__67476_68346 + (1));
seq__67472_68343 = G__68355;
chunk__67474_68344 = G__68356;
count__67475_68345 = G__68357;
i__67476_68346 = G__68358;
continue;
}
} else {
var temp__5753__auto___68363__$1 = cljs.core.seq(seq__67472_68343);
if(temp__5753__auto___68363__$1){
var seq__67472_68364__$1 = temp__5753__auto___68363__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67472_68364__$1)){
var c__4649__auto___68365 = cljs.core.chunk_first(seq__67472_68364__$1);
var G__68367 = cljs.core.chunk_rest(seq__67472_68364__$1);
var G__68368 = c__4649__auto___68365;
var G__68369 = cljs.core.count(c__4649__auto___68365);
var G__68370 = (0);
seq__67472_68343 = G__68367;
chunk__67474_68344 = G__68368;
count__67475_68345 = G__68369;
i__67476_68346 = G__68370;
continue;
} else {
var child_68375 = cljs.core.first(seq__67472_68364__$1);
if(cljs.core.truth_(child_68375)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68375);


var G__68378 = cljs.core.next(seq__67472_68364__$1);
var G__68379 = null;
var G__68380 = (0);
var G__68381 = (0);
seq__67472_68343 = G__68378;
chunk__67474_68344 = G__68379;
count__67475_68345 = G__68380;
i__67476_68346 = G__68381;
continue;
} else {
var G__68387 = cljs.core.next(seq__67472_68364__$1);
var G__68388 = null;
var G__68389 = (0);
var G__68390 = (0);
seq__67472_68343 = G__68387;
chunk__67474_68344 = G__68388;
count__67475_68345 = G__68389;
i__67476_68346 = G__68390;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68342);
}


var G__68394 = cljs.core.next(seq__67390_68331__$1);
var G__68395 = null;
var G__68396 = (0);
var G__68397 = (0);
seq__67390_68261 = G__68394;
chunk__67391_68262 = G__68395;
count__67392_68263 = G__68396;
i__67393_68264 = G__68397;
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
var seq__67504 = cljs.core.seq(node);
var chunk__67505 = null;
var count__67506 = (0);
var i__67507 = (0);
while(true){
if((i__67507 < count__67506)){
var n = chunk__67505.cljs$core$IIndexed$_nth$arity$2(null,i__67507);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68401 = seq__67504;
var G__68402 = chunk__67505;
var G__68403 = count__67506;
var G__68404 = (i__67507 + (1));
seq__67504 = G__68401;
chunk__67505 = G__68402;
count__67506 = G__68403;
i__67507 = G__68404;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67504);
if(temp__5753__auto__){
var seq__67504__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67504__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__67504__$1);
var G__68405 = cljs.core.chunk_rest(seq__67504__$1);
var G__68406 = c__4649__auto__;
var G__68407 = cljs.core.count(c__4649__auto__);
var G__68408 = (0);
seq__67504 = G__68405;
chunk__67505 = G__68406;
count__67506 = G__68407;
i__67507 = G__68408;
continue;
} else {
var n = cljs.core.first(seq__67504__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68410 = cljs.core.next(seq__67504__$1);
var G__68411 = null;
var G__68412 = (0);
var G__68413 = (0);
seq__67504 = G__68410;
chunk__67505 = G__68411;
count__67506 = G__68412;
i__67507 = G__68413;
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
var G__67523 = arguments.length;
switch (G__67523) {
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
var G__67534 = arguments.length;
switch (G__67534) {
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
var G__67576 = arguments.length;
switch (G__67576) {
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
var len__4829__auto___68435 = arguments.length;
var i__4830__auto___68436 = (0);
while(true){
if((i__4830__auto___68436 < len__4829__auto___68435)){
args__4835__auto__.push((arguments[i__4830__auto___68436]));

var G__68438 = (i__4830__auto___68436 + (1));
i__4830__auto___68436 = G__68438;
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
var seq__67609_68440 = cljs.core.seq(nodes);
var chunk__67610_68441 = null;
var count__67611_68442 = (0);
var i__67612_68443 = (0);
while(true){
if((i__67612_68443 < count__67611_68442)){
var node_68444 = chunk__67610_68441.cljs$core$IIndexed$_nth$arity$2(null,i__67612_68443);
fragment.appendChild(shadow.dom._to_dom(node_68444));


var G__68445 = seq__67609_68440;
var G__68446 = chunk__67610_68441;
var G__68447 = count__67611_68442;
var G__68448 = (i__67612_68443 + (1));
seq__67609_68440 = G__68445;
chunk__67610_68441 = G__68446;
count__67611_68442 = G__68447;
i__67612_68443 = G__68448;
continue;
} else {
var temp__5753__auto___68449 = cljs.core.seq(seq__67609_68440);
if(temp__5753__auto___68449){
var seq__67609_68450__$1 = temp__5753__auto___68449;
if(cljs.core.chunked_seq_QMARK_(seq__67609_68450__$1)){
var c__4649__auto___68451 = cljs.core.chunk_first(seq__67609_68450__$1);
var G__68452 = cljs.core.chunk_rest(seq__67609_68450__$1);
var G__68453 = c__4649__auto___68451;
var G__68454 = cljs.core.count(c__4649__auto___68451);
var G__68455 = (0);
seq__67609_68440 = G__68452;
chunk__67610_68441 = G__68453;
count__67611_68442 = G__68454;
i__67612_68443 = G__68455;
continue;
} else {
var node_68456 = cljs.core.first(seq__67609_68450__$1);
fragment.appendChild(shadow.dom._to_dom(node_68456));


var G__68457 = cljs.core.next(seq__67609_68450__$1);
var G__68458 = null;
var G__68459 = (0);
var G__68460 = (0);
seq__67609_68440 = G__68457;
chunk__67610_68441 = G__68458;
count__67611_68442 = G__68459;
i__67612_68443 = G__68460;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq67605){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67605));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__67625_68461 = cljs.core.seq(scripts);
var chunk__67626_68462 = null;
var count__67627_68463 = (0);
var i__67628_68464 = (0);
while(true){
if((i__67628_68464 < count__67627_68463)){
var vec__67651_68466 = chunk__67626_68462.cljs$core$IIndexed$_nth$arity$2(null,i__67628_68464);
var script_tag_68467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67651_68466,(0),null);
var script_body_68468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67651_68466,(1),null);
eval(script_body_68468);


var G__68473 = seq__67625_68461;
var G__68474 = chunk__67626_68462;
var G__68475 = count__67627_68463;
var G__68476 = (i__67628_68464 + (1));
seq__67625_68461 = G__68473;
chunk__67626_68462 = G__68474;
count__67627_68463 = G__68475;
i__67628_68464 = G__68476;
continue;
} else {
var temp__5753__auto___68477 = cljs.core.seq(seq__67625_68461);
if(temp__5753__auto___68477){
var seq__67625_68478__$1 = temp__5753__auto___68477;
if(cljs.core.chunked_seq_QMARK_(seq__67625_68478__$1)){
var c__4649__auto___68479 = cljs.core.chunk_first(seq__67625_68478__$1);
var G__68480 = cljs.core.chunk_rest(seq__67625_68478__$1);
var G__68481 = c__4649__auto___68479;
var G__68482 = cljs.core.count(c__4649__auto___68479);
var G__68483 = (0);
seq__67625_68461 = G__68480;
chunk__67626_68462 = G__68481;
count__67627_68463 = G__68482;
i__67628_68464 = G__68483;
continue;
} else {
var vec__67658_68484 = cljs.core.first(seq__67625_68478__$1);
var script_tag_68485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67658_68484,(0),null);
var script_body_68486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67658_68484,(1),null);
eval(script_body_68486);


var G__68487 = cljs.core.next(seq__67625_68478__$1);
var G__68488 = null;
var G__68489 = (0);
var G__68490 = (0);
seq__67625_68461 = G__68487;
chunk__67626_68462 = G__68488;
count__67627_68463 = G__68489;
i__67628_68464 = G__68490;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__67663){
var vec__67664 = p__67663;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67664,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67664,(1),null);
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
var G__67679 = arguments.length;
switch (G__67679) {
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
var seq__67704 = cljs.core.seq(style_keys);
var chunk__67705 = null;
var count__67706 = (0);
var i__67707 = (0);
while(true){
if((i__67707 < count__67706)){
var it = chunk__67705.cljs$core$IIndexed$_nth$arity$2(null,i__67707);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68504 = seq__67704;
var G__68505 = chunk__67705;
var G__68506 = count__67706;
var G__68507 = (i__67707 + (1));
seq__67704 = G__68504;
chunk__67705 = G__68505;
count__67706 = G__68506;
i__67707 = G__68507;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67704);
if(temp__5753__auto__){
var seq__67704__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67704__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__67704__$1);
var G__68508 = cljs.core.chunk_rest(seq__67704__$1);
var G__68509 = c__4649__auto__;
var G__68510 = cljs.core.count(c__4649__auto__);
var G__68511 = (0);
seq__67704 = G__68508;
chunk__67705 = G__68509;
count__67706 = G__68510;
i__67707 = G__68511;
continue;
} else {
var it = cljs.core.first(seq__67704__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68512 = cljs.core.next(seq__67704__$1);
var G__68513 = null;
var G__68514 = (0);
var G__68515 = (0);
seq__67704 = G__68512;
chunk__67705 = G__68513;
count__67706 = G__68514;
i__67707 = G__68515;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k67713,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__67727 = k67713;
var G__67727__$1 = (((G__67727 instanceof cljs.core.Keyword))?G__67727.fqn:null);
switch (G__67727__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67713,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__67728){
var vec__67729 = p__67728;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67729,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67729,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67712){
var self__ = this;
var G__67712__$1 = this;
return (new cljs.core.RecordIter((0),G__67712__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67714,other67715){
var self__ = this;
var this67714__$1 = this;
return (((!((other67715 == null)))) && ((((this67714__$1.constructor === other67715.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67714__$1.x,other67715.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67714__$1.y,other67715.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67714__$1.__extmap,other67715.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k67713){
var self__ = this;
var this__4479__auto____$1 = this;
var G__67753 = k67713;
var G__67753__$1 = (((G__67753 instanceof cljs.core.Keyword))?G__67753.fqn:null);
switch (G__67753__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67713);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__67712){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__67758 = cljs.core.keyword_identical_QMARK_;
var expr__67759 = k__4481__auto__;
if(cljs.core.truth_((pred__67758.cljs$core$IFn$_invoke$arity$2 ? pred__67758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__67759) : pred__67758.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__67759)))){
return (new shadow.dom.Coordinate(G__67712,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67758.cljs$core$IFn$_invoke$arity$2 ? pred__67758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__67759) : pred__67758.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__67759)))){
return (new shadow.dom.Coordinate(self__.x,G__67712,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__67712),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__67712){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__67712,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__67716){
var extmap__4512__auto__ = (function (){var G__67775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67716,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__67716)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67775);
} else {
return G__67775;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__67716),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__67716),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k67785,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__67795 = k67785;
var G__67795__$1 = (((G__67795 instanceof cljs.core.Keyword))?G__67795.fqn:null);
switch (G__67795__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67785,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__67799){
var vec__67800 = p__67799;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67800,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67800,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67784){
var self__ = this;
var G__67784__$1 = this;
return (new cljs.core.RecordIter((0),G__67784__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67786,other67787){
var self__ = this;
var this67786__$1 = this;
return (((!((other67787 == null)))) && ((((this67786__$1.constructor === other67787.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67786__$1.w,other67787.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67786__$1.h,other67787.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67786__$1.__extmap,other67787.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k67785){
var self__ = this;
var this__4479__auto____$1 = this;
var G__67830 = k67785;
var G__67830__$1 = (((G__67830 instanceof cljs.core.Keyword))?G__67830.fqn:null);
switch (G__67830__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67785);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__67784){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__67835 = cljs.core.keyword_identical_QMARK_;
var expr__67836 = k__4481__auto__;
if(cljs.core.truth_((pred__67835.cljs$core$IFn$_invoke$arity$2 ? pred__67835.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__67836) : pred__67835.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__67836)))){
return (new shadow.dom.Size(G__67784,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67835.cljs$core$IFn$_invoke$arity$2 ? pred__67835.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__67836) : pred__67835.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__67836)))){
return (new shadow.dom.Size(self__.w,G__67784,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__67784),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__67784){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__67784,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__67789){
var extmap__4512__auto__ = (function (){var G__67851 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67789,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__67789)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67851);
} else {
return G__67851;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__67789),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__67789),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__68552 = (i + (1));
var G__68553 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__68552;
ret = G__68553;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67879){
var vec__67880 = p__67879;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67880,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__67884 = arguments.length;
switch (G__67884) {
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
var G__68561 = ps;
var G__68562 = (i + (1));
el__$1 = G__68561;
i = G__68562;
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
var vec__67896 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67896,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67896,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67896,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__67899_68573 = cljs.core.seq(props);
var chunk__67900_68574 = null;
var count__67901_68575 = (0);
var i__67902_68576 = (0);
while(true){
if((i__67902_68576 < count__67901_68575)){
var vec__67911_68577 = chunk__67900_68574.cljs$core$IIndexed$_nth$arity$2(null,i__67902_68576);
var k_68578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67911_68577,(0),null);
var v_68579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67911_68577,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_68578);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68578),v_68579);


var G__68580 = seq__67899_68573;
var G__68581 = chunk__67900_68574;
var G__68582 = count__67901_68575;
var G__68583 = (i__67902_68576 + (1));
seq__67899_68573 = G__68580;
chunk__67900_68574 = G__68581;
count__67901_68575 = G__68582;
i__67902_68576 = G__68583;
continue;
} else {
var temp__5753__auto___68584 = cljs.core.seq(seq__67899_68573);
if(temp__5753__auto___68584){
var seq__67899_68585__$1 = temp__5753__auto___68584;
if(cljs.core.chunked_seq_QMARK_(seq__67899_68585__$1)){
var c__4649__auto___68586 = cljs.core.chunk_first(seq__67899_68585__$1);
var G__68587 = cljs.core.chunk_rest(seq__67899_68585__$1);
var G__68588 = c__4649__auto___68586;
var G__68589 = cljs.core.count(c__4649__auto___68586);
var G__68590 = (0);
seq__67899_68573 = G__68587;
chunk__67900_68574 = G__68588;
count__67901_68575 = G__68589;
i__67902_68576 = G__68590;
continue;
} else {
var vec__67915_68591 = cljs.core.first(seq__67899_68585__$1);
var k_68592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67915_68591,(0),null);
var v_68593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67915_68591,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_68592);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68592),v_68593);


var G__68594 = cljs.core.next(seq__67899_68585__$1);
var G__68595 = null;
var G__68596 = (0);
var G__68597 = (0);
seq__67899_68573 = G__68594;
chunk__67900_68574 = G__68595;
count__67901_68575 = G__68596;
i__67902_68576 = G__68597;
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
var vec__67919 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67919,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67919,(1),null);
var seq__67922_68602 = cljs.core.seq(node_children);
var chunk__67924_68603 = null;
var count__67925_68604 = (0);
var i__67926_68605 = (0);
while(true){
if((i__67926_68605 < count__67925_68604)){
var child_struct_68607 = chunk__67924_68603.cljs$core$IIndexed$_nth$arity$2(null,i__67926_68605);
if((!((child_struct_68607 == null)))){
if(typeof child_struct_68607 === 'string'){
var text_68613 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68613),child_struct_68607].join(''));
} else {
var children_68614 = shadow.dom.svg_node(child_struct_68607);
if(cljs.core.seq_QMARK_(children_68614)){
var seq__67948_68615 = cljs.core.seq(children_68614);
var chunk__67950_68616 = null;
var count__67951_68617 = (0);
var i__67952_68618 = (0);
while(true){
if((i__67952_68618 < count__67951_68617)){
var child_68619 = chunk__67950_68616.cljs$core$IIndexed$_nth$arity$2(null,i__67952_68618);
if(cljs.core.truth_(child_68619)){
node.appendChild(child_68619);


var G__68621 = seq__67948_68615;
var G__68622 = chunk__67950_68616;
var G__68623 = count__67951_68617;
var G__68624 = (i__67952_68618 + (1));
seq__67948_68615 = G__68621;
chunk__67950_68616 = G__68622;
count__67951_68617 = G__68623;
i__67952_68618 = G__68624;
continue;
} else {
var G__68626 = seq__67948_68615;
var G__68627 = chunk__67950_68616;
var G__68628 = count__67951_68617;
var G__68629 = (i__67952_68618 + (1));
seq__67948_68615 = G__68626;
chunk__67950_68616 = G__68627;
count__67951_68617 = G__68628;
i__67952_68618 = G__68629;
continue;
}
} else {
var temp__5753__auto___68630 = cljs.core.seq(seq__67948_68615);
if(temp__5753__auto___68630){
var seq__67948_68631__$1 = temp__5753__auto___68630;
if(cljs.core.chunked_seq_QMARK_(seq__67948_68631__$1)){
var c__4649__auto___68632 = cljs.core.chunk_first(seq__67948_68631__$1);
var G__68633 = cljs.core.chunk_rest(seq__67948_68631__$1);
var G__68634 = c__4649__auto___68632;
var G__68635 = cljs.core.count(c__4649__auto___68632);
var G__68636 = (0);
seq__67948_68615 = G__68633;
chunk__67950_68616 = G__68634;
count__67951_68617 = G__68635;
i__67952_68618 = G__68636;
continue;
} else {
var child_68637 = cljs.core.first(seq__67948_68631__$1);
if(cljs.core.truth_(child_68637)){
node.appendChild(child_68637);


var G__68638 = cljs.core.next(seq__67948_68631__$1);
var G__68639 = null;
var G__68640 = (0);
var G__68641 = (0);
seq__67948_68615 = G__68638;
chunk__67950_68616 = G__68639;
count__67951_68617 = G__68640;
i__67952_68618 = G__68641;
continue;
} else {
var G__68643 = cljs.core.next(seq__67948_68631__$1);
var G__68644 = null;
var G__68645 = (0);
var G__68646 = (0);
seq__67948_68615 = G__68643;
chunk__67950_68616 = G__68644;
count__67951_68617 = G__68645;
i__67952_68618 = G__68646;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68614);
}
}


var G__68648 = seq__67922_68602;
var G__68649 = chunk__67924_68603;
var G__68650 = count__67925_68604;
var G__68651 = (i__67926_68605 + (1));
seq__67922_68602 = G__68648;
chunk__67924_68603 = G__68649;
count__67925_68604 = G__68650;
i__67926_68605 = G__68651;
continue;
} else {
var G__68652 = seq__67922_68602;
var G__68653 = chunk__67924_68603;
var G__68654 = count__67925_68604;
var G__68655 = (i__67926_68605 + (1));
seq__67922_68602 = G__68652;
chunk__67924_68603 = G__68653;
count__67925_68604 = G__68654;
i__67926_68605 = G__68655;
continue;
}
} else {
var temp__5753__auto___68656 = cljs.core.seq(seq__67922_68602);
if(temp__5753__auto___68656){
var seq__67922_68657__$1 = temp__5753__auto___68656;
if(cljs.core.chunked_seq_QMARK_(seq__67922_68657__$1)){
var c__4649__auto___68658 = cljs.core.chunk_first(seq__67922_68657__$1);
var G__68659 = cljs.core.chunk_rest(seq__67922_68657__$1);
var G__68660 = c__4649__auto___68658;
var G__68661 = cljs.core.count(c__4649__auto___68658);
var G__68662 = (0);
seq__67922_68602 = G__68659;
chunk__67924_68603 = G__68660;
count__67925_68604 = G__68661;
i__67926_68605 = G__68662;
continue;
} else {
var child_struct_68663 = cljs.core.first(seq__67922_68657__$1);
if((!((child_struct_68663 == null)))){
if(typeof child_struct_68663 === 'string'){
var text_68667 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68667),child_struct_68663].join(''));
} else {
var children_68668 = shadow.dom.svg_node(child_struct_68663);
if(cljs.core.seq_QMARK_(children_68668)){
var seq__67954_68670 = cljs.core.seq(children_68668);
var chunk__67956_68671 = null;
var count__67957_68672 = (0);
var i__67958_68673 = (0);
while(true){
if((i__67958_68673 < count__67957_68672)){
var child_68674 = chunk__67956_68671.cljs$core$IIndexed$_nth$arity$2(null,i__67958_68673);
if(cljs.core.truth_(child_68674)){
node.appendChild(child_68674);


var G__68675 = seq__67954_68670;
var G__68676 = chunk__67956_68671;
var G__68677 = count__67957_68672;
var G__68678 = (i__67958_68673 + (1));
seq__67954_68670 = G__68675;
chunk__67956_68671 = G__68676;
count__67957_68672 = G__68677;
i__67958_68673 = G__68678;
continue;
} else {
var G__68679 = seq__67954_68670;
var G__68680 = chunk__67956_68671;
var G__68681 = count__67957_68672;
var G__68682 = (i__67958_68673 + (1));
seq__67954_68670 = G__68679;
chunk__67956_68671 = G__68680;
count__67957_68672 = G__68681;
i__67958_68673 = G__68682;
continue;
}
} else {
var temp__5753__auto___68683__$1 = cljs.core.seq(seq__67954_68670);
if(temp__5753__auto___68683__$1){
var seq__67954_68684__$1 = temp__5753__auto___68683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67954_68684__$1)){
var c__4649__auto___68685 = cljs.core.chunk_first(seq__67954_68684__$1);
var G__68686 = cljs.core.chunk_rest(seq__67954_68684__$1);
var G__68687 = c__4649__auto___68685;
var G__68688 = cljs.core.count(c__4649__auto___68685);
var G__68689 = (0);
seq__67954_68670 = G__68686;
chunk__67956_68671 = G__68687;
count__67957_68672 = G__68688;
i__67958_68673 = G__68689;
continue;
} else {
var child_68690 = cljs.core.first(seq__67954_68684__$1);
if(cljs.core.truth_(child_68690)){
node.appendChild(child_68690);


var G__68691 = cljs.core.next(seq__67954_68684__$1);
var G__68692 = null;
var G__68693 = (0);
var G__68694 = (0);
seq__67954_68670 = G__68691;
chunk__67956_68671 = G__68692;
count__67957_68672 = G__68693;
i__67958_68673 = G__68694;
continue;
} else {
var G__68695 = cljs.core.next(seq__67954_68684__$1);
var G__68696 = null;
var G__68697 = (0);
var G__68698 = (0);
seq__67954_68670 = G__68695;
chunk__67956_68671 = G__68696;
count__67957_68672 = G__68697;
i__67958_68673 = G__68698;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68668);
}
}


var G__68699 = cljs.core.next(seq__67922_68657__$1);
var G__68700 = null;
var G__68701 = (0);
var G__68702 = (0);
seq__67922_68602 = G__68699;
chunk__67924_68603 = G__68700;
count__67925_68604 = G__68701;
i__67926_68605 = G__68702;
continue;
} else {
var G__68703 = cljs.core.next(seq__67922_68657__$1);
var G__68704 = null;
var G__68705 = (0);
var G__68706 = (0);
seq__67922_68602 = G__68703;
chunk__67924_68603 = G__68704;
count__67925_68604 = G__68705;
i__67926_68605 = G__68706;
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
var len__4829__auto___68712 = arguments.length;
var i__4830__auto___68713 = (0);
while(true){
if((i__4830__auto___68713 < len__4829__auto___68712)){
args__4835__auto__.push((arguments[i__4830__auto___68713]));

var G__68714 = (i__4830__auto___68713 + (1));
i__4830__auto___68713 = G__68714;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq67962){
var G__67963 = cljs.core.first(seq67962);
var seq67962__$1 = cljs.core.next(seq67962);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67963,seq67962__$1);
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
var G__67973 = arguments.length;
switch (G__67973) {
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
var c__62989__auto___68727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_67985){
var state_val_67986 = (state_67985[(1)]);
if((state_val_67986 === (1))){
var state_67985__$1 = state_67985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67985__$1,(2),once_or_cleanup);
} else {
if((state_val_67986 === (2))){
var inst_67982 = (state_67985[(2)]);
var inst_67983 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_67985__$1 = (function (){var statearr_67991 = state_67985;
(statearr_67991[(7)] = inst_67982);

return statearr_67991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67985__$1,inst_67983);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__62373__auto__ = null;
var shadow$dom$state_machine__62373__auto____0 = (function (){
var statearr_67996 = [null,null,null,null,null,null,null,null];
(statearr_67996[(0)] = shadow$dom$state_machine__62373__auto__);

(statearr_67996[(1)] = (1));

return statearr_67996;
});
var shadow$dom$state_machine__62373__auto____1 = (function (state_67985){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_67985);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e67997){var ex__62376__auto__ = e67997;
var statearr_67998_68728 = state_67985;
(statearr_67998_68728[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_67985[(4)]))){
var statearr_68003_68729 = state_67985;
(statearr_68003_68729[(1)] = cljs.core.first((state_67985[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68730 = state_67985;
state_67985 = G__68730;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
shadow$dom$state_machine__62373__auto__ = function(state_67985){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__62373__auto____0.call(this);
case 1:
return shadow$dom$state_machine__62373__auto____1.call(this,state_67985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__62373__auto____0;
shadow$dom$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__62373__auto____1;
return shadow$dom$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_68004 = f__62990__auto__();
(statearr_68004[(6)] = c__62989__auto___68727);

return statearr_68004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
