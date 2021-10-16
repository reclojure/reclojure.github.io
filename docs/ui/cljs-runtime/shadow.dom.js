goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48039 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_48039(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48041 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_48041(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46710 = coll;
var G__46711 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46710,G__46711) : shadow.dom.lazy_native_coll_seq.call(null,G__46710,G__46711));
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
var G__46732 = arguments.length;
switch (G__46732) {
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
var G__46741 = arguments.length;
switch (G__46741) {
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
var G__46752 = arguments.length;
switch (G__46752) {
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
var G__46780 = arguments.length;
switch (G__46780) {
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
var G__46806 = arguments.length;
switch (G__46806) {
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
var G__46857 = arguments.length;
switch (G__46857) {
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
}catch (e46909){if((e46909 instanceof Object)){
var e = e46909;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46909;

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
var seq__46939 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46940 = null;
var count__46941 = (0);
var i__46942 = (0);
while(true){
if((i__46942 < count__46941)){
var el = chunk__46940.cljs$core$IIndexed$_nth$arity$2(null,i__46942);
var handler_48075__$1 = ((function (seq__46939,chunk__46940,count__46941,i__46942,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46939,chunk__46940,count__46941,i__46942,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48075__$1);


var G__48076 = seq__46939;
var G__48077 = chunk__46940;
var G__48078 = count__46941;
var G__48079 = (i__46942 + (1));
seq__46939 = G__48076;
chunk__46940 = G__48077;
count__46941 = G__48078;
i__46942 = G__48079;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46939);
if(temp__5753__auto__){
var seq__46939__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46939__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46939__$1);
var G__48080 = cljs.core.chunk_rest(seq__46939__$1);
var G__48081 = c__4649__auto__;
var G__48082 = cljs.core.count(c__4649__auto__);
var G__48083 = (0);
seq__46939 = G__48080;
chunk__46940 = G__48081;
count__46941 = G__48082;
i__46942 = G__48083;
continue;
} else {
var el = cljs.core.first(seq__46939__$1);
var handler_48084__$1 = ((function (seq__46939,chunk__46940,count__46941,i__46942,el,seq__46939__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46939,chunk__46940,count__46941,i__46942,el,seq__46939__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48084__$1);


var G__48085 = cljs.core.next(seq__46939__$1);
var G__48086 = null;
var G__48087 = (0);
var G__48088 = (0);
seq__46939 = G__48085;
chunk__46940 = G__48086;
count__46941 = G__48087;
i__46942 = G__48088;
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
var G__46995 = arguments.length;
switch (G__46995) {
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
var seq__47036 = cljs.core.seq(events);
var chunk__47037 = null;
var count__47038 = (0);
var i__47039 = (0);
while(true){
if((i__47039 < count__47038)){
var vec__47065 = chunk__47037.cljs$core$IIndexed$_nth$arity$2(null,i__47039);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47065,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47065,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48092 = seq__47036;
var G__48093 = chunk__47037;
var G__48094 = count__47038;
var G__48095 = (i__47039 + (1));
seq__47036 = G__48092;
chunk__47037 = G__48093;
count__47038 = G__48094;
i__47039 = G__48095;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47036);
if(temp__5753__auto__){
var seq__47036__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47036__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47036__$1);
var G__48096 = cljs.core.chunk_rest(seq__47036__$1);
var G__48097 = c__4649__auto__;
var G__48098 = cljs.core.count(c__4649__auto__);
var G__48099 = (0);
seq__47036 = G__48096;
chunk__47037 = G__48097;
count__47038 = G__48098;
i__47039 = G__48099;
continue;
} else {
var vec__47080 = cljs.core.first(seq__47036__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47080,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48100 = cljs.core.next(seq__47036__$1);
var G__48101 = null;
var G__48102 = (0);
var G__48103 = (0);
seq__47036 = G__48100;
chunk__47037 = G__48101;
count__47038 = G__48102;
i__47039 = G__48103;
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
var seq__47099 = cljs.core.seq(styles);
var chunk__47100 = null;
var count__47101 = (0);
var i__47102 = (0);
while(true){
if((i__47102 < count__47101)){
var vec__47129 = chunk__47100.cljs$core$IIndexed$_nth$arity$2(null,i__47102);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47129,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48106 = seq__47099;
var G__48107 = chunk__47100;
var G__48108 = count__47101;
var G__48109 = (i__47102 + (1));
seq__47099 = G__48106;
chunk__47100 = G__48107;
count__47101 = G__48108;
i__47102 = G__48109;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47099);
if(temp__5753__auto__){
var seq__47099__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47099__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47099__$1);
var G__48110 = cljs.core.chunk_rest(seq__47099__$1);
var G__48111 = c__4649__auto__;
var G__48112 = cljs.core.count(c__4649__auto__);
var G__48113 = (0);
seq__47099 = G__48110;
chunk__47100 = G__48111;
count__47101 = G__48112;
i__47102 = G__48113;
continue;
} else {
var vec__47142 = cljs.core.first(seq__47099__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47142,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48114 = cljs.core.next(seq__47099__$1);
var G__48115 = null;
var G__48116 = (0);
var G__48117 = (0);
seq__47099 = G__48114;
chunk__47100 = G__48115;
count__47101 = G__48116;
i__47102 = G__48117;
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
var G__47161_48118 = key;
var G__47161_48119__$1 = (((G__47161_48118 instanceof cljs.core.Keyword))?G__47161_48118.fqn:null);
switch (G__47161_48119__$1) {
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
var ks_48121 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_48121,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_48121,"aria-");
}
})())){
el.setAttribute(ks_48121,value);
} else {
(el[ks_48121] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47223){
var map__47224 = p__47223;
var map__47224__$1 = cljs.core.__destructure_map(map__47224);
var props = map__47224__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47224__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47227 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47227,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47227,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47227,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47231 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47231,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47231;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47240 = arguments.length;
switch (G__47240) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47251){
var vec__47254 = p__47251;
var seq__47255 = cljs.core.seq(vec__47254);
var first__47256 = cljs.core.first(seq__47255);
var seq__47255__$1 = cljs.core.next(seq__47255);
var nn = first__47256;
var first__47256__$1 = cljs.core.first(seq__47255__$1);
var seq__47255__$2 = cljs.core.next(seq__47255__$1);
var np = first__47256__$1;
var nc = seq__47255__$2;
var node = vec__47254;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47261 = nn;
var G__47262 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47261,G__47262) : create_fn.call(null,G__47261,G__47262));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47264 = nn;
var G__47265 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47264,G__47265) : create_fn.call(null,G__47264,G__47265));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47267 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47267,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47267,(1),null);
var seq__47271_48128 = cljs.core.seq(node_children);
var chunk__47272_48129 = null;
var count__47273_48130 = (0);
var i__47274_48131 = (0);
while(true){
if((i__47274_48131 < count__47273_48130)){
var child_struct_48132 = chunk__47272_48129.cljs$core$IIndexed$_nth$arity$2(null,i__47274_48131);
var children_48133 = shadow.dom.dom_node(child_struct_48132);
if(cljs.core.seq_QMARK_(children_48133)){
var seq__47332_48134 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48133));
var chunk__47334_48135 = null;
var count__47335_48136 = (0);
var i__47336_48137 = (0);
while(true){
if((i__47336_48137 < count__47335_48136)){
var child_48138 = chunk__47334_48135.cljs$core$IIndexed$_nth$arity$2(null,i__47336_48137);
if(cljs.core.truth_(child_48138)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48138);


var G__48139 = seq__47332_48134;
var G__48140 = chunk__47334_48135;
var G__48141 = count__47335_48136;
var G__48142 = (i__47336_48137 + (1));
seq__47332_48134 = G__48139;
chunk__47334_48135 = G__48140;
count__47335_48136 = G__48141;
i__47336_48137 = G__48142;
continue;
} else {
var G__48143 = seq__47332_48134;
var G__48144 = chunk__47334_48135;
var G__48145 = count__47335_48136;
var G__48146 = (i__47336_48137 + (1));
seq__47332_48134 = G__48143;
chunk__47334_48135 = G__48144;
count__47335_48136 = G__48145;
i__47336_48137 = G__48146;
continue;
}
} else {
var temp__5753__auto___48147 = cljs.core.seq(seq__47332_48134);
if(temp__5753__auto___48147){
var seq__47332_48148__$1 = temp__5753__auto___48147;
if(cljs.core.chunked_seq_QMARK_(seq__47332_48148__$1)){
var c__4649__auto___48149 = cljs.core.chunk_first(seq__47332_48148__$1);
var G__48150 = cljs.core.chunk_rest(seq__47332_48148__$1);
var G__48151 = c__4649__auto___48149;
var G__48152 = cljs.core.count(c__4649__auto___48149);
var G__48153 = (0);
seq__47332_48134 = G__48150;
chunk__47334_48135 = G__48151;
count__47335_48136 = G__48152;
i__47336_48137 = G__48153;
continue;
} else {
var child_48154 = cljs.core.first(seq__47332_48148__$1);
if(cljs.core.truth_(child_48154)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48154);


var G__48155 = cljs.core.next(seq__47332_48148__$1);
var G__48156 = null;
var G__48157 = (0);
var G__48158 = (0);
seq__47332_48134 = G__48155;
chunk__47334_48135 = G__48156;
count__47335_48136 = G__48157;
i__47336_48137 = G__48158;
continue;
} else {
var G__48159 = cljs.core.next(seq__47332_48148__$1);
var G__48160 = null;
var G__48161 = (0);
var G__48162 = (0);
seq__47332_48134 = G__48159;
chunk__47334_48135 = G__48160;
count__47335_48136 = G__48161;
i__47336_48137 = G__48162;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48133);
}


var G__48163 = seq__47271_48128;
var G__48164 = chunk__47272_48129;
var G__48165 = count__47273_48130;
var G__48166 = (i__47274_48131 + (1));
seq__47271_48128 = G__48163;
chunk__47272_48129 = G__48164;
count__47273_48130 = G__48165;
i__47274_48131 = G__48166;
continue;
} else {
var temp__5753__auto___48167 = cljs.core.seq(seq__47271_48128);
if(temp__5753__auto___48167){
var seq__47271_48168__$1 = temp__5753__auto___48167;
if(cljs.core.chunked_seq_QMARK_(seq__47271_48168__$1)){
var c__4649__auto___48169 = cljs.core.chunk_first(seq__47271_48168__$1);
var G__48170 = cljs.core.chunk_rest(seq__47271_48168__$1);
var G__48171 = c__4649__auto___48169;
var G__48172 = cljs.core.count(c__4649__auto___48169);
var G__48173 = (0);
seq__47271_48128 = G__48170;
chunk__47272_48129 = G__48171;
count__47273_48130 = G__48172;
i__47274_48131 = G__48173;
continue;
} else {
var child_struct_48174 = cljs.core.first(seq__47271_48168__$1);
var children_48176 = shadow.dom.dom_node(child_struct_48174);
if(cljs.core.seq_QMARK_(children_48176)){
var seq__47348_48177 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48176));
var chunk__47350_48178 = null;
var count__47351_48179 = (0);
var i__47352_48180 = (0);
while(true){
if((i__47352_48180 < count__47351_48179)){
var child_48182 = chunk__47350_48178.cljs$core$IIndexed$_nth$arity$2(null,i__47352_48180);
if(cljs.core.truth_(child_48182)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48182);


var G__48184 = seq__47348_48177;
var G__48185 = chunk__47350_48178;
var G__48186 = count__47351_48179;
var G__48187 = (i__47352_48180 + (1));
seq__47348_48177 = G__48184;
chunk__47350_48178 = G__48185;
count__47351_48179 = G__48186;
i__47352_48180 = G__48187;
continue;
} else {
var G__48188 = seq__47348_48177;
var G__48189 = chunk__47350_48178;
var G__48190 = count__47351_48179;
var G__48191 = (i__47352_48180 + (1));
seq__47348_48177 = G__48188;
chunk__47350_48178 = G__48189;
count__47351_48179 = G__48190;
i__47352_48180 = G__48191;
continue;
}
} else {
var temp__5753__auto___48192__$1 = cljs.core.seq(seq__47348_48177);
if(temp__5753__auto___48192__$1){
var seq__47348_48193__$1 = temp__5753__auto___48192__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47348_48193__$1)){
var c__4649__auto___48194 = cljs.core.chunk_first(seq__47348_48193__$1);
var G__48195 = cljs.core.chunk_rest(seq__47348_48193__$1);
var G__48196 = c__4649__auto___48194;
var G__48197 = cljs.core.count(c__4649__auto___48194);
var G__48198 = (0);
seq__47348_48177 = G__48195;
chunk__47350_48178 = G__48196;
count__47351_48179 = G__48197;
i__47352_48180 = G__48198;
continue;
} else {
var child_48199 = cljs.core.first(seq__47348_48193__$1);
if(cljs.core.truth_(child_48199)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48199);


var G__48200 = cljs.core.next(seq__47348_48193__$1);
var G__48201 = null;
var G__48202 = (0);
var G__48203 = (0);
seq__47348_48177 = G__48200;
chunk__47350_48178 = G__48201;
count__47351_48179 = G__48202;
i__47352_48180 = G__48203;
continue;
} else {
var G__48204 = cljs.core.next(seq__47348_48193__$1);
var G__48205 = null;
var G__48206 = (0);
var G__48207 = (0);
seq__47348_48177 = G__48204;
chunk__47350_48178 = G__48205;
count__47351_48179 = G__48206;
i__47352_48180 = G__48207;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48176);
}


var G__48208 = cljs.core.next(seq__47271_48168__$1);
var G__48209 = null;
var G__48210 = (0);
var G__48211 = (0);
seq__47271_48128 = G__48208;
chunk__47272_48129 = G__48209;
count__47273_48130 = G__48210;
i__47274_48131 = G__48211;
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
var seq__47367 = cljs.core.seq(node);
var chunk__47368 = null;
var count__47369 = (0);
var i__47370 = (0);
while(true){
if((i__47370 < count__47369)){
var n = chunk__47368.cljs$core$IIndexed$_nth$arity$2(null,i__47370);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48216 = seq__47367;
var G__48217 = chunk__47368;
var G__48218 = count__47369;
var G__48219 = (i__47370 + (1));
seq__47367 = G__48216;
chunk__47368 = G__48217;
count__47369 = G__48218;
i__47370 = G__48219;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47367);
if(temp__5753__auto__){
var seq__47367__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47367__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47367__$1);
var G__48221 = cljs.core.chunk_rest(seq__47367__$1);
var G__48222 = c__4649__auto__;
var G__48223 = cljs.core.count(c__4649__auto__);
var G__48224 = (0);
seq__47367 = G__48221;
chunk__47368 = G__48222;
count__47369 = G__48223;
i__47370 = G__48224;
continue;
} else {
var n = cljs.core.first(seq__47367__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48225 = cljs.core.next(seq__47367__$1);
var G__48226 = null;
var G__48227 = (0);
var G__48228 = (0);
seq__47367 = G__48225;
chunk__47368 = G__48226;
count__47369 = G__48227;
i__47370 = G__48228;
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
var G__47377 = arguments.length;
switch (G__47377) {
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
var G__47386 = arguments.length;
switch (G__47386) {
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
var G__47403 = arguments.length;
switch (G__47403) {
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
var len__4829__auto___48237 = arguments.length;
var i__4830__auto___48238 = (0);
while(true){
if((i__4830__auto___48238 < len__4829__auto___48237)){
args__4835__auto__.push((arguments[i__4830__auto___48238]));

var G__48240 = (i__4830__auto___48238 + (1));
i__4830__auto___48238 = G__48240;
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
var seq__47423_48242 = cljs.core.seq(nodes);
var chunk__47424_48243 = null;
var count__47425_48244 = (0);
var i__47426_48245 = (0);
while(true){
if((i__47426_48245 < count__47425_48244)){
var node_48246 = chunk__47424_48243.cljs$core$IIndexed$_nth$arity$2(null,i__47426_48245);
fragment.appendChild(shadow.dom._to_dom(node_48246));


var G__48247 = seq__47423_48242;
var G__48248 = chunk__47424_48243;
var G__48249 = count__47425_48244;
var G__48250 = (i__47426_48245 + (1));
seq__47423_48242 = G__48247;
chunk__47424_48243 = G__48248;
count__47425_48244 = G__48249;
i__47426_48245 = G__48250;
continue;
} else {
var temp__5753__auto___48251 = cljs.core.seq(seq__47423_48242);
if(temp__5753__auto___48251){
var seq__47423_48252__$1 = temp__5753__auto___48251;
if(cljs.core.chunked_seq_QMARK_(seq__47423_48252__$1)){
var c__4649__auto___48253 = cljs.core.chunk_first(seq__47423_48252__$1);
var G__48254 = cljs.core.chunk_rest(seq__47423_48252__$1);
var G__48255 = c__4649__auto___48253;
var G__48256 = cljs.core.count(c__4649__auto___48253);
var G__48257 = (0);
seq__47423_48242 = G__48254;
chunk__47424_48243 = G__48255;
count__47425_48244 = G__48256;
i__47426_48245 = G__48257;
continue;
} else {
var node_48258 = cljs.core.first(seq__47423_48252__$1);
fragment.appendChild(shadow.dom._to_dom(node_48258));


var G__48259 = cljs.core.next(seq__47423_48252__$1);
var G__48260 = null;
var G__48261 = (0);
var G__48262 = (0);
seq__47423_48242 = G__48259;
chunk__47424_48243 = G__48260;
count__47425_48244 = G__48261;
i__47426_48245 = G__48262;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47419){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47419));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47430_48270 = cljs.core.seq(scripts);
var chunk__47431_48271 = null;
var count__47432_48272 = (0);
var i__47433_48273 = (0);
while(true){
if((i__47433_48273 < count__47432_48272)){
var vec__47449_48274 = chunk__47431_48271.cljs$core$IIndexed$_nth$arity$2(null,i__47433_48273);
var script_tag_48275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47449_48274,(0),null);
var script_body_48276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47449_48274,(1),null);
eval(script_body_48276);


var G__48277 = seq__47430_48270;
var G__48278 = chunk__47431_48271;
var G__48279 = count__47432_48272;
var G__48280 = (i__47433_48273 + (1));
seq__47430_48270 = G__48277;
chunk__47431_48271 = G__48278;
count__47432_48272 = G__48279;
i__47433_48273 = G__48280;
continue;
} else {
var temp__5753__auto___48282 = cljs.core.seq(seq__47430_48270);
if(temp__5753__auto___48282){
var seq__47430_48287__$1 = temp__5753__auto___48282;
if(cljs.core.chunked_seq_QMARK_(seq__47430_48287__$1)){
var c__4649__auto___48288 = cljs.core.chunk_first(seq__47430_48287__$1);
var G__48289 = cljs.core.chunk_rest(seq__47430_48287__$1);
var G__48290 = c__4649__auto___48288;
var G__48291 = cljs.core.count(c__4649__auto___48288);
var G__48292 = (0);
seq__47430_48270 = G__48289;
chunk__47431_48271 = G__48290;
count__47432_48272 = G__48291;
i__47433_48273 = G__48292;
continue;
} else {
var vec__47456_48293 = cljs.core.first(seq__47430_48287__$1);
var script_tag_48294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47456_48293,(0),null);
var script_body_48295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47456_48293,(1),null);
eval(script_body_48295);


var G__48297 = cljs.core.next(seq__47430_48287__$1);
var G__48298 = null;
var G__48299 = (0);
var G__48300 = (0);
seq__47430_48270 = G__48297;
chunk__47431_48271 = G__48298;
count__47432_48272 = G__48299;
i__47433_48273 = G__48300;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47461){
var vec__47463 = p__47461;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47463,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47463,(1),null);
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
var G__47474 = arguments.length;
switch (G__47474) {
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
var seq__47495 = cljs.core.seq(style_keys);
var chunk__47496 = null;
var count__47497 = (0);
var i__47498 = (0);
while(true){
if((i__47498 < count__47497)){
var it = chunk__47496.cljs$core$IIndexed$_nth$arity$2(null,i__47498);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48308 = seq__47495;
var G__48309 = chunk__47496;
var G__48310 = count__47497;
var G__48311 = (i__47498 + (1));
seq__47495 = G__48308;
chunk__47496 = G__48309;
count__47497 = G__48310;
i__47498 = G__48311;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47495);
if(temp__5753__auto__){
var seq__47495__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47495__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47495__$1);
var G__48312 = cljs.core.chunk_rest(seq__47495__$1);
var G__48313 = c__4649__auto__;
var G__48314 = cljs.core.count(c__4649__auto__);
var G__48315 = (0);
seq__47495 = G__48312;
chunk__47496 = G__48313;
count__47497 = G__48314;
i__47498 = G__48315;
continue;
} else {
var it = cljs.core.first(seq__47495__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48316 = cljs.core.next(seq__47495__$1);
var G__48317 = null;
var G__48318 = (0);
var G__48319 = (0);
seq__47495 = G__48316;
chunk__47496 = G__48317;
count__47497 = G__48318;
i__47498 = G__48319;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k47513,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__47531 = k47513;
var G__47531__$1 = (((G__47531 instanceof cljs.core.Keyword))?G__47531.fqn:null);
switch (G__47531__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47513,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__47537){
var vec__47538 = p__47537;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47538,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47538,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47512){
var self__ = this;
var G__47512__$1 = this;
return (new cljs.core.RecordIter((0),G__47512__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47514,other47515){
var self__ = this;
var this47514__$1 = this;
return (((!((other47515 == null)))) && ((((this47514__$1.constructor === other47515.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47514__$1.x,other47515.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47514__$1.y,other47515.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47514__$1.__extmap,other47515.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k47513){
var self__ = this;
var this__4479__auto____$1 = this;
var G__47583 = k47513;
var G__47583__$1 = (((G__47583 instanceof cljs.core.Keyword))?G__47583.fqn:null);
switch (G__47583__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47513);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__47512){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__47588 = cljs.core.keyword_identical_QMARK_;
var expr__47589 = k__4481__auto__;
if(cljs.core.truth_((pred__47588.cljs$core$IFn$_invoke$arity$2 ? pred__47588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47589) : pred__47588.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47589)))){
return (new shadow.dom.Coordinate(G__47512,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47588.cljs$core$IFn$_invoke$arity$2 ? pred__47588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47589) : pred__47588.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47589)))){
return (new shadow.dom.Coordinate(self__.x,G__47512,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__47512),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__47512){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47512,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47520){
var extmap__4512__auto__ = (function (){var G__47612 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47520,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47520)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47612);
} else {
return G__47612;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47520),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47520),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k47629,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__47641 = k47629;
var G__47641__$1 = (((G__47641 instanceof cljs.core.Keyword))?G__47641.fqn:null);
switch (G__47641__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47629,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__47645){
var vec__47646 = p__47645;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47646,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47646,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47628){
var self__ = this;
var G__47628__$1 = this;
return (new cljs.core.RecordIter((0),G__47628__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47630,other47631){
var self__ = this;
var this47630__$1 = this;
return (((!((other47631 == null)))) && ((((this47630__$1.constructor === other47631.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47630__$1.w,other47631.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47630__$1.h,other47631.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47630__$1.__extmap,other47631.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k47629){
var self__ = this;
var this__4479__auto____$1 = this;
var G__47683 = k47629;
var G__47683__$1 = (((G__47683 instanceof cljs.core.Keyword))?G__47683.fqn:null);
switch (G__47683__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47629);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__47628){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__47686 = cljs.core.keyword_identical_QMARK_;
var expr__47687 = k__4481__auto__;
if(cljs.core.truth_((pred__47686.cljs$core$IFn$_invoke$arity$2 ? pred__47686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47687) : pred__47686.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47687)))){
return (new shadow.dom.Size(G__47628,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47686.cljs$core$IFn$_invoke$arity$2 ? pred__47686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47687) : pred__47686.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47687)))){
return (new shadow.dom.Size(self__.w,G__47628,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__47628),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__47628){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47628,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47632){
var extmap__4512__auto__ = (function (){var G__47702 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47632,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47632)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47702);
} else {
return G__47702;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47632),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47632),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__48391 = (i + (1));
var G__48392 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48391;
ret = G__48392;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47726){
var vec__47727 = p__47726;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47727,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47735 = arguments.length;
switch (G__47735) {
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
var G__48405 = ps;
var G__48406 = (i + (1));
el__$1 = G__48405;
i = G__48406;
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
var vec__47779 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47779,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47779,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47779,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47783_48410 = cljs.core.seq(props);
var chunk__47784_48411 = null;
var count__47785_48412 = (0);
var i__47786_48413 = (0);
while(true){
if((i__47786_48413 < count__47785_48412)){
var vec__47806_48414 = chunk__47784_48411.cljs$core$IIndexed$_nth$arity$2(null,i__47786_48413);
var k_48415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47806_48414,(0),null);
var v_48416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47806_48414,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48415);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48415),v_48416);


var G__48417 = seq__47783_48410;
var G__48418 = chunk__47784_48411;
var G__48419 = count__47785_48412;
var G__48420 = (i__47786_48413 + (1));
seq__47783_48410 = G__48417;
chunk__47784_48411 = G__48418;
count__47785_48412 = G__48419;
i__47786_48413 = G__48420;
continue;
} else {
var temp__5753__auto___48421 = cljs.core.seq(seq__47783_48410);
if(temp__5753__auto___48421){
var seq__47783_48422__$1 = temp__5753__auto___48421;
if(cljs.core.chunked_seq_QMARK_(seq__47783_48422__$1)){
var c__4649__auto___48423 = cljs.core.chunk_first(seq__47783_48422__$1);
var G__48424 = cljs.core.chunk_rest(seq__47783_48422__$1);
var G__48425 = c__4649__auto___48423;
var G__48426 = cljs.core.count(c__4649__auto___48423);
var G__48427 = (0);
seq__47783_48410 = G__48424;
chunk__47784_48411 = G__48425;
count__47785_48412 = G__48426;
i__47786_48413 = G__48427;
continue;
} else {
var vec__47815_48428 = cljs.core.first(seq__47783_48422__$1);
var k_48429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47815_48428,(0),null);
var v_48430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47815_48428,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48429);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48429),v_48430);


var G__48431 = cljs.core.next(seq__47783_48422__$1);
var G__48432 = null;
var G__48433 = (0);
var G__48434 = (0);
seq__47783_48410 = G__48431;
chunk__47784_48411 = G__48432;
count__47785_48412 = G__48433;
i__47786_48413 = G__48434;
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
var vec__47830 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47830,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47830,(1),null);
var seq__47835_48438 = cljs.core.seq(node_children);
var chunk__47837_48439 = null;
var count__47838_48440 = (0);
var i__47839_48441 = (0);
while(true){
if((i__47839_48441 < count__47838_48440)){
var child_struct_48446 = chunk__47837_48439.cljs$core$IIndexed$_nth$arity$2(null,i__47839_48441);
if((!((child_struct_48446 == null)))){
if(typeof child_struct_48446 === 'string'){
var text_48447 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48447),child_struct_48446].join(''));
} else {
var children_48448 = shadow.dom.svg_node(child_struct_48446);
if(cljs.core.seq_QMARK_(children_48448)){
var seq__47899_48450 = cljs.core.seq(children_48448);
var chunk__47901_48451 = null;
var count__47902_48452 = (0);
var i__47903_48453 = (0);
while(true){
if((i__47903_48453 < count__47902_48452)){
var child_48454 = chunk__47901_48451.cljs$core$IIndexed$_nth$arity$2(null,i__47903_48453);
if(cljs.core.truth_(child_48454)){
node.appendChild(child_48454);


var G__48455 = seq__47899_48450;
var G__48456 = chunk__47901_48451;
var G__48457 = count__47902_48452;
var G__48458 = (i__47903_48453 + (1));
seq__47899_48450 = G__48455;
chunk__47901_48451 = G__48456;
count__47902_48452 = G__48457;
i__47903_48453 = G__48458;
continue;
} else {
var G__48459 = seq__47899_48450;
var G__48460 = chunk__47901_48451;
var G__48461 = count__47902_48452;
var G__48462 = (i__47903_48453 + (1));
seq__47899_48450 = G__48459;
chunk__47901_48451 = G__48460;
count__47902_48452 = G__48461;
i__47903_48453 = G__48462;
continue;
}
} else {
var temp__5753__auto___48463 = cljs.core.seq(seq__47899_48450);
if(temp__5753__auto___48463){
var seq__47899_48464__$1 = temp__5753__auto___48463;
if(cljs.core.chunked_seq_QMARK_(seq__47899_48464__$1)){
var c__4649__auto___48466 = cljs.core.chunk_first(seq__47899_48464__$1);
var G__48467 = cljs.core.chunk_rest(seq__47899_48464__$1);
var G__48468 = c__4649__auto___48466;
var G__48469 = cljs.core.count(c__4649__auto___48466);
var G__48470 = (0);
seq__47899_48450 = G__48467;
chunk__47901_48451 = G__48468;
count__47902_48452 = G__48469;
i__47903_48453 = G__48470;
continue;
} else {
var child_48472 = cljs.core.first(seq__47899_48464__$1);
if(cljs.core.truth_(child_48472)){
node.appendChild(child_48472);


var G__48473 = cljs.core.next(seq__47899_48464__$1);
var G__48474 = null;
var G__48475 = (0);
var G__48476 = (0);
seq__47899_48450 = G__48473;
chunk__47901_48451 = G__48474;
count__47902_48452 = G__48475;
i__47903_48453 = G__48476;
continue;
} else {
var G__48477 = cljs.core.next(seq__47899_48464__$1);
var G__48478 = null;
var G__48479 = (0);
var G__48480 = (0);
seq__47899_48450 = G__48477;
chunk__47901_48451 = G__48478;
count__47902_48452 = G__48479;
i__47903_48453 = G__48480;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48448);
}
}


var G__48481 = seq__47835_48438;
var G__48482 = chunk__47837_48439;
var G__48483 = count__47838_48440;
var G__48484 = (i__47839_48441 + (1));
seq__47835_48438 = G__48481;
chunk__47837_48439 = G__48482;
count__47838_48440 = G__48483;
i__47839_48441 = G__48484;
continue;
} else {
var G__48486 = seq__47835_48438;
var G__48487 = chunk__47837_48439;
var G__48488 = count__47838_48440;
var G__48489 = (i__47839_48441 + (1));
seq__47835_48438 = G__48486;
chunk__47837_48439 = G__48487;
count__47838_48440 = G__48488;
i__47839_48441 = G__48489;
continue;
}
} else {
var temp__5753__auto___48490 = cljs.core.seq(seq__47835_48438);
if(temp__5753__auto___48490){
var seq__47835_48494__$1 = temp__5753__auto___48490;
if(cljs.core.chunked_seq_QMARK_(seq__47835_48494__$1)){
var c__4649__auto___48495 = cljs.core.chunk_first(seq__47835_48494__$1);
var G__48496 = cljs.core.chunk_rest(seq__47835_48494__$1);
var G__48497 = c__4649__auto___48495;
var G__48498 = cljs.core.count(c__4649__auto___48495);
var G__48499 = (0);
seq__47835_48438 = G__48496;
chunk__47837_48439 = G__48497;
count__47838_48440 = G__48498;
i__47839_48441 = G__48499;
continue;
} else {
var child_struct_48500 = cljs.core.first(seq__47835_48494__$1);
if((!((child_struct_48500 == null)))){
if(typeof child_struct_48500 === 'string'){
var text_48501 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48501),child_struct_48500].join(''));
} else {
var children_48502 = shadow.dom.svg_node(child_struct_48500);
if(cljs.core.seq_QMARK_(children_48502)){
var seq__47926_48503 = cljs.core.seq(children_48502);
var chunk__47928_48504 = null;
var count__47929_48505 = (0);
var i__47930_48506 = (0);
while(true){
if((i__47930_48506 < count__47929_48505)){
var child_48508 = chunk__47928_48504.cljs$core$IIndexed$_nth$arity$2(null,i__47930_48506);
if(cljs.core.truth_(child_48508)){
node.appendChild(child_48508);


var G__48509 = seq__47926_48503;
var G__48510 = chunk__47928_48504;
var G__48511 = count__47929_48505;
var G__48512 = (i__47930_48506 + (1));
seq__47926_48503 = G__48509;
chunk__47928_48504 = G__48510;
count__47929_48505 = G__48511;
i__47930_48506 = G__48512;
continue;
} else {
var G__48513 = seq__47926_48503;
var G__48514 = chunk__47928_48504;
var G__48515 = count__47929_48505;
var G__48516 = (i__47930_48506 + (1));
seq__47926_48503 = G__48513;
chunk__47928_48504 = G__48514;
count__47929_48505 = G__48515;
i__47930_48506 = G__48516;
continue;
}
} else {
var temp__5753__auto___48518__$1 = cljs.core.seq(seq__47926_48503);
if(temp__5753__auto___48518__$1){
var seq__47926_48519__$1 = temp__5753__auto___48518__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47926_48519__$1)){
var c__4649__auto___48520 = cljs.core.chunk_first(seq__47926_48519__$1);
var G__48521 = cljs.core.chunk_rest(seq__47926_48519__$1);
var G__48522 = c__4649__auto___48520;
var G__48523 = cljs.core.count(c__4649__auto___48520);
var G__48524 = (0);
seq__47926_48503 = G__48521;
chunk__47928_48504 = G__48522;
count__47929_48505 = G__48523;
i__47930_48506 = G__48524;
continue;
} else {
var child_48525 = cljs.core.first(seq__47926_48519__$1);
if(cljs.core.truth_(child_48525)){
node.appendChild(child_48525);


var G__48529 = cljs.core.next(seq__47926_48519__$1);
var G__48530 = null;
var G__48531 = (0);
var G__48532 = (0);
seq__47926_48503 = G__48529;
chunk__47928_48504 = G__48530;
count__47929_48505 = G__48531;
i__47930_48506 = G__48532;
continue;
} else {
var G__48533 = cljs.core.next(seq__47926_48519__$1);
var G__48534 = null;
var G__48535 = (0);
var G__48536 = (0);
seq__47926_48503 = G__48533;
chunk__47928_48504 = G__48534;
count__47929_48505 = G__48535;
i__47930_48506 = G__48536;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48502);
}
}


var G__48537 = cljs.core.next(seq__47835_48494__$1);
var G__48538 = null;
var G__48539 = (0);
var G__48540 = (0);
seq__47835_48438 = G__48537;
chunk__47837_48439 = G__48538;
count__47838_48440 = G__48539;
i__47839_48441 = G__48540;
continue;
} else {
var G__48541 = cljs.core.next(seq__47835_48494__$1);
var G__48542 = null;
var G__48543 = (0);
var G__48544 = (0);
seq__47835_48438 = G__48541;
chunk__47837_48439 = G__48542;
count__47838_48440 = G__48543;
i__47839_48441 = G__48544;
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
var len__4829__auto___48545 = arguments.length;
var i__4830__auto___48546 = (0);
while(true){
if((i__4830__auto___48546 < len__4829__auto___48545)){
args__4835__auto__.push((arguments[i__4830__auto___48546]));

var G__48547 = (i__4830__auto___48546 + (1));
i__4830__auto___48546 = G__48547;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47957){
var G__47958 = cljs.core.first(seq47957);
var seq47957__$1 = cljs.core.next(seq47957);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47958,seq47957__$1);
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
var G__47972 = arguments.length;
switch (G__47972) {
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
var c__43611__auto___48550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_47988){
var state_val_47989 = (state_47988[(1)]);
if((state_val_47989 === (1))){
var state_47988__$1 = state_47988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47988__$1,(2),once_or_cleanup);
} else {
if((state_val_47989 === (2))){
var inst_47985 = (state_47988[(2)]);
var inst_47986 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47988__$1 = (function (){var statearr_47993 = state_47988;
(statearr_47993[(7)] = inst_47985);

return statearr_47993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47988__$1,inst_47986);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43329__auto__ = null;
var shadow$dom$state_machine__43329__auto____0 = (function (){
var statearr_47995 = [null,null,null,null,null,null,null,null];
(statearr_47995[(0)] = shadow$dom$state_machine__43329__auto__);

(statearr_47995[(1)] = (1));

return statearr_47995;
});
var shadow$dom$state_machine__43329__auto____1 = (function (state_47988){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_47988);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e47997){var ex__43332__auto__ = e47997;
var statearr_47998_48554 = state_47988;
(statearr_47998_48554[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_47988[(4)]))){
var statearr_48003_48555 = state_47988;
(statearr_48003_48555[(1)] = cljs.core.first((state_47988[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48557 = state_47988;
state_47988 = G__48557;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
shadow$dom$state_machine__43329__auto__ = function(state_47988){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43329__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43329__auto____1.call(this,state_47988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43329__auto____0;
shadow$dom$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43329__auto____1;
return shadow$dom$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_48008 = f__43612__auto__();
(statearr_48008[(6)] = c__43611__auto___48550);

return statearr_48008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
