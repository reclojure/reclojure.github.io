goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49372){
var map__49373 = p__49372;
var map__49373__$1 = cljs.core.__destructure_map(map__49373);
var m = map__49373__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49373__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49373__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49375_49597 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49376_49598 = null;
var count__49377_49599 = (0);
var i__49378_49600 = (0);
while(true){
if((i__49378_49600 < count__49377_49599)){
var f_49601 = chunk__49376_49598.cljs$core$IIndexed$_nth$arity$2(null,i__49378_49600);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49601], 0));


var G__49602 = seq__49375_49597;
var G__49603 = chunk__49376_49598;
var G__49604 = count__49377_49599;
var G__49605 = (i__49378_49600 + (1));
seq__49375_49597 = G__49602;
chunk__49376_49598 = G__49603;
count__49377_49599 = G__49604;
i__49378_49600 = G__49605;
continue;
} else {
var temp__5753__auto___49606 = cljs.core.seq(seq__49375_49597);
if(temp__5753__auto___49606){
var seq__49375_49607__$1 = temp__5753__auto___49606;
if(cljs.core.chunked_seq_QMARK_(seq__49375_49607__$1)){
var c__4649__auto___49608 = cljs.core.chunk_first(seq__49375_49607__$1);
var G__49609 = cljs.core.chunk_rest(seq__49375_49607__$1);
var G__49610 = c__4649__auto___49608;
var G__49611 = cljs.core.count(c__4649__auto___49608);
var G__49612 = (0);
seq__49375_49597 = G__49609;
chunk__49376_49598 = G__49610;
count__49377_49599 = G__49611;
i__49378_49600 = G__49612;
continue;
} else {
var f_49613 = cljs.core.first(seq__49375_49607__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49613], 0));


var G__49614 = cljs.core.next(seq__49375_49607__$1);
var G__49615 = null;
var G__49616 = (0);
var G__49617 = (0);
seq__49375_49597 = G__49614;
chunk__49376_49598 = G__49615;
count__49377_49599 = G__49616;
i__49378_49600 = G__49617;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49618 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49618], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49618)))?cljs.core.second(arglists_49618):arglists_49618)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49379_49619 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49380_49620 = null;
var count__49381_49621 = (0);
var i__49382_49622 = (0);
while(true){
if((i__49382_49622 < count__49381_49621)){
var vec__49396_49625 = chunk__49380_49620.cljs$core$IIndexed$_nth$arity$2(null,i__49382_49622);
var name_49626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396_49625,(0),null);
var map__49399_49627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396_49625,(1),null);
var map__49399_49628__$1 = cljs.core.__destructure_map(map__49399_49627);
var doc_49629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49399_49628__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49399_49628__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49626], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49630], 0));

if(cljs.core.truth_(doc_49629)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49629], 0));
} else {
}


var G__49633 = seq__49379_49619;
var G__49634 = chunk__49380_49620;
var G__49635 = count__49381_49621;
var G__49636 = (i__49382_49622 + (1));
seq__49379_49619 = G__49633;
chunk__49380_49620 = G__49634;
count__49381_49621 = G__49635;
i__49382_49622 = G__49636;
continue;
} else {
var temp__5753__auto___49641 = cljs.core.seq(seq__49379_49619);
if(temp__5753__auto___49641){
var seq__49379_49642__$1 = temp__5753__auto___49641;
if(cljs.core.chunked_seq_QMARK_(seq__49379_49642__$1)){
var c__4649__auto___49643 = cljs.core.chunk_first(seq__49379_49642__$1);
var G__49644 = cljs.core.chunk_rest(seq__49379_49642__$1);
var G__49645 = c__4649__auto___49643;
var G__49646 = cljs.core.count(c__4649__auto___49643);
var G__49647 = (0);
seq__49379_49619 = G__49644;
chunk__49380_49620 = G__49645;
count__49381_49621 = G__49646;
i__49382_49622 = G__49647;
continue;
} else {
var vec__49405_49650 = cljs.core.first(seq__49379_49642__$1);
var name_49651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49405_49650,(0),null);
var map__49408_49652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49405_49650,(1),null);
var map__49408_49653__$1 = cljs.core.__destructure_map(map__49408_49652);
var doc_49654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49408_49653__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49408_49653__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49651], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49655], 0));

if(cljs.core.truth_(doc_49654)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49654], 0));
} else {
}


var G__49659 = cljs.core.next(seq__49379_49642__$1);
var G__49660 = null;
var G__49661 = (0);
var G__49662 = (0);
seq__49379_49619 = G__49659;
chunk__49380_49620 = G__49660;
count__49381_49621 = G__49661;
i__49382_49622 = G__49662;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49411 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49412 = null;
var count__49413 = (0);
var i__49414 = (0);
while(true){
if((i__49414 < count__49413)){
var role = chunk__49412.cljs$core$IIndexed$_nth$arity$2(null,i__49414);
var temp__5753__auto___49663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49663__$1)){
var spec_49664 = temp__5753__auto___49663__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49664)], 0));
} else {
}


var G__49665 = seq__49411;
var G__49666 = chunk__49412;
var G__49667 = count__49413;
var G__49668 = (i__49414 + (1));
seq__49411 = G__49665;
chunk__49412 = G__49666;
count__49413 = G__49667;
i__49414 = G__49668;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49411);
if(temp__5753__auto____$1){
var seq__49411__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49411__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49411__$1);
var G__49669 = cljs.core.chunk_rest(seq__49411__$1);
var G__49670 = c__4649__auto__;
var G__49671 = cljs.core.count(c__4649__auto__);
var G__49672 = (0);
seq__49411 = G__49669;
chunk__49412 = G__49670;
count__49413 = G__49671;
i__49414 = G__49672;
continue;
} else {
var role = cljs.core.first(seq__49411__$1);
var temp__5753__auto___49673__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49673__$2)){
var spec_49674 = temp__5753__auto___49673__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49674)], 0));
} else {
}


var G__49675 = cljs.core.next(seq__49411__$1);
var G__49676 = null;
var G__49677 = (0);
var G__49678 = (0);
seq__49411 = G__49675;
chunk__49412 = G__49676;
count__49413 = G__49677;
i__49414 = G__49678;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__49680 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49681 = cljs.core.ex_cause(t);
via = G__49680;
t = G__49681;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49433 = datafied_throwable;
var map__49433__$1 = cljs.core.__destructure_map(map__49433);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49433__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49433__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49433__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49434 = cljs.core.last(via);
var map__49434__$1 = cljs.core.__destructure_map(map__49434);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49434__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49434__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49434__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49435 = data;
var map__49435__$1 = cljs.core.__destructure_map(map__49435);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49435__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49435__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49435__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49436 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49436__$1 = cljs.core.__destructure_map(map__49436);
var top_data = map__49436__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49436__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49443 = phase;
var G__49443__$1 = (((G__49443 instanceof cljs.core.Keyword))?G__49443.fqn:null);
switch (G__49443__$1) {
case "read-source":
var map__49457 = data;
var map__49457__$1 = cljs.core.__destructure_map(map__49457);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49457__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49457__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49458 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49458__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49458,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49458);
var G__49458__$2 = (cljs.core.truth_((function (){var fexpr__49459 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49459.cljs$core$IFn$_invoke$arity$1 ? fexpr__49459.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49459.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49458__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49458__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49458__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49458__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49467 = top_data;
var G__49467__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49467,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49467);
var G__49467__$2 = (cljs.core.truth_((function (){var fexpr__49468 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49468.cljs$core$IFn$_invoke$arity$1 ? fexpr__49468.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49468.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49467__$1);
var G__49467__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49467__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49467__$2);
var G__49467__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49467__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49467__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49467__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49467__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49473 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(3),null);
var G__49484 = top_data;
var G__49484__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49484,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49484);
var G__49484__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49484__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49484__$1);
var G__49484__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49484__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49484__$2);
var G__49484__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49484__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49484__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49484__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49484__$4;
}

break;
case "execution":
var vec__49512 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49431_SHARP_){
var or__4223__auto__ = (p1__49431_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__49515 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49515.cljs$core$IFn$_invoke$arity$1 ? fexpr__49515.cljs$core$IFn$_invoke$arity$1(p1__49431_SHARP_) : fexpr__49515.call(null,p1__49431_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__49520 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49520__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49520);
var G__49520__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49520__$1);
var G__49520__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49520__$2);
var G__49520__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49520__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49520__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49520__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49443__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49552){
var map__49553 = p__49552;
var map__49553__$1 = cljs.core.__destructure_map(map__49553);
var triage_data = map__49553__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49553__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49555 = phase;
var G__49555__$1 = (((G__49555 instanceof cljs.core.Keyword))?G__49555.fqn:null);
switch (G__49555__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49557 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49559 = loc;
var G__49560 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49561_49691 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49562_49692 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49563_49693 = true;
var _STAR_print_fn_STAR__temp_val__49564_49694 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49563_49693);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49564_49694);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49546_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49546_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49562_49692);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49561_49691);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49557,G__49558,G__49559,G__49560) : format.call(null,G__49557,G__49558,G__49559,G__49560));

break;
case "macroexpansion":
var G__49565 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49566 = cause_type;
var G__49567 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49568 = loc;
var G__49569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49565,G__49566,G__49567,G__49568,G__49569) : format.call(null,G__49565,G__49566,G__49567,G__49568,G__49569));

break;
case "compile-syntax-check":
var G__49570 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49571 = cause_type;
var G__49572 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49573 = loc;
var G__49574 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49570,G__49571,G__49572,G__49573,G__49574) : format.call(null,G__49570,G__49571,G__49572,G__49573,G__49574));

break;
case "compilation":
var G__49576 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49577 = cause_type;
var G__49578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49579 = loc;
var G__49580 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49576,G__49577,G__49578,G__49579,G__49580) : format.call(null,G__49576,G__49577,G__49578,G__49579,G__49580));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49581 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49582 = symbol;
var G__49583 = loc;
var G__49584 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49585_49698 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49586_49699 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49587_49700 = true;
var _STAR_print_fn_STAR__temp_val__49588_49701 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49587_49700);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49588_49701);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49547_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49547_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49586_49699);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49585_49698);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49581,G__49582,G__49583,G__49584) : format.call(null,G__49581,G__49582,G__49583,G__49584));
} else {
var G__49591 = "Execution error%s at %s(%s).\n%s\n";
var G__49592 = cause_type;
var G__49593 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49594 = loc;
var G__49595 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49591,G__49592,G__49593,G__49594,G__49595) : format.call(null,G__49591,G__49592,G__49593,G__49594,G__49595));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49555__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
