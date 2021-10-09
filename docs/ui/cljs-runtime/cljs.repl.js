goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54385){
var map__54386 = p__54385;
var map__54386__$1 = cljs.core.__destructure_map(map__54386);
var m = map__54386__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54386__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__54387_54672 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54388_54673 = null;
var count__54389_54674 = (0);
var i__54390_54675 = (0);
while(true){
if((i__54390_54675 < count__54389_54674)){
var f_54676 = chunk__54388_54673.cljs$core$IIndexed$_nth$arity$2(null,i__54390_54675);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54676], 0));


var G__54677 = seq__54387_54672;
var G__54678 = chunk__54388_54673;
var G__54679 = count__54389_54674;
var G__54680 = (i__54390_54675 + (1));
seq__54387_54672 = G__54677;
chunk__54388_54673 = G__54678;
count__54389_54674 = G__54679;
i__54390_54675 = G__54680;
continue;
} else {
var temp__5753__auto___54681 = cljs.core.seq(seq__54387_54672);
if(temp__5753__auto___54681){
var seq__54387_54682__$1 = temp__5753__auto___54681;
if(cljs.core.chunked_seq_QMARK_(seq__54387_54682__$1)){
var c__4649__auto___54683 = cljs.core.chunk_first(seq__54387_54682__$1);
var G__54684 = cljs.core.chunk_rest(seq__54387_54682__$1);
var G__54685 = c__4649__auto___54683;
var G__54686 = cljs.core.count(c__4649__auto___54683);
var G__54687 = (0);
seq__54387_54672 = G__54684;
chunk__54388_54673 = G__54685;
count__54389_54674 = G__54686;
i__54390_54675 = G__54687;
continue;
} else {
var f_54690 = cljs.core.first(seq__54387_54682__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54690], 0));


var G__54693 = cljs.core.next(seq__54387_54682__$1);
var G__54694 = null;
var G__54695 = (0);
var G__54696 = (0);
seq__54387_54672 = G__54693;
chunk__54388_54673 = G__54694;
count__54389_54674 = G__54695;
i__54390_54675 = G__54696;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54698 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54698], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54698)))?cljs.core.second(arglists_54698):arglists_54698)], 0));
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
var seq__54392_54707 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54393_54708 = null;
var count__54394_54709 = (0);
var i__54395_54710 = (0);
while(true){
if((i__54395_54710 < count__54394_54709)){
var vec__54417_54712 = chunk__54393_54708.cljs$core$IIndexed$_nth$arity$2(null,i__54395_54710);
var name_54713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54417_54712,(0),null);
var map__54420_54714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54417_54712,(1),null);
var map__54420_54715__$1 = cljs.core.__destructure_map(map__54420_54714);
var doc_54716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54420_54715__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54420_54715__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54713], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54717], 0));

if(cljs.core.truth_(doc_54716)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54716], 0));
} else {
}


var G__54719 = seq__54392_54707;
var G__54720 = chunk__54393_54708;
var G__54721 = count__54394_54709;
var G__54722 = (i__54395_54710 + (1));
seq__54392_54707 = G__54719;
chunk__54393_54708 = G__54720;
count__54394_54709 = G__54721;
i__54395_54710 = G__54722;
continue;
} else {
var temp__5753__auto___54724 = cljs.core.seq(seq__54392_54707);
if(temp__5753__auto___54724){
var seq__54392_54725__$1 = temp__5753__auto___54724;
if(cljs.core.chunked_seq_QMARK_(seq__54392_54725__$1)){
var c__4649__auto___54726 = cljs.core.chunk_first(seq__54392_54725__$1);
var G__54727 = cljs.core.chunk_rest(seq__54392_54725__$1);
var G__54728 = c__4649__auto___54726;
var G__54729 = cljs.core.count(c__4649__auto___54726);
var G__54730 = (0);
seq__54392_54707 = G__54727;
chunk__54393_54708 = G__54728;
count__54394_54709 = G__54729;
i__54395_54710 = G__54730;
continue;
} else {
var vec__54425_54732 = cljs.core.first(seq__54392_54725__$1);
var name_54733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54425_54732,(0),null);
var map__54428_54734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54425_54732,(1),null);
var map__54428_54735__$1 = cljs.core.__destructure_map(map__54428_54734);
var doc_54736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428_54735__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428_54735__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54733], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54737], 0));

if(cljs.core.truth_(doc_54736)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54736], 0));
} else {
}


var G__54741 = cljs.core.next(seq__54392_54725__$1);
var G__54742 = null;
var G__54743 = (0);
var G__54744 = (0);
seq__54392_54707 = G__54741;
chunk__54393_54708 = G__54742;
count__54394_54709 = G__54743;
i__54395_54710 = G__54744;
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

var seq__54434 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54435 = null;
var count__54436 = (0);
var i__54437 = (0);
while(true){
if((i__54437 < count__54436)){
var role = chunk__54435.cljs$core$IIndexed$_nth$arity$2(null,i__54437);
var temp__5753__auto___54750__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___54750__$1)){
var spec_54751 = temp__5753__auto___54750__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54751)], 0));
} else {
}


var G__54752 = seq__54434;
var G__54753 = chunk__54435;
var G__54754 = count__54436;
var G__54755 = (i__54437 + (1));
seq__54434 = G__54752;
chunk__54435 = G__54753;
count__54436 = G__54754;
i__54437 = G__54755;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__54434);
if(temp__5753__auto____$1){
var seq__54434__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54434__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__54434__$1);
var G__54756 = cljs.core.chunk_rest(seq__54434__$1);
var G__54757 = c__4649__auto__;
var G__54758 = cljs.core.count(c__4649__auto__);
var G__54759 = (0);
seq__54434 = G__54756;
chunk__54435 = G__54757;
count__54436 = G__54758;
i__54437 = G__54759;
continue;
} else {
var role = cljs.core.first(seq__54434__$1);
var temp__5753__auto___54760__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___54760__$2)){
var spec_54761 = temp__5753__auto___54760__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54761)], 0));
} else {
}


var G__54762 = cljs.core.next(seq__54434__$1);
var G__54763 = null;
var G__54764 = (0);
var G__54765 = (0);
seq__54434 = G__54762;
chunk__54435 = G__54763;
count__54436 = G__54764;
i__54437 = G__54765;
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
var G__54766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54767 = cljs.core.ex_cause(t);
via = G__54766;
t = G__54767;
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
var map__54472 = datafied_throwable;
var map__54472__$1 = cljs.core.__destructure_map(map__54472);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54472__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54472__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54472__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54473 = cljs.core.last(via);
var map__54473__$1 = cljs.core.__destructure_map(map__54473);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54473__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54473__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54473__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54474 = data;
var map__54474__$1 = cljs.core.__destructure_map(map__54474);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54474__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54474__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54474__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54475 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54475__$1 = cljs.core.__destructure_map(map__54475);
var top_data = map__54475__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54476 = phase;
var G__54476__$1 = (((G__54476 instanceof cljs.core.Keyword))?G__54476.fqn:null);
switch (G__54476__$1) {
case "read-source":
var map__54477 = data;
var map__54477__$1 = cljs.core.__destructure_map(map__54477);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54477__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54477__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54480 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54480__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54480,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54480);
var G__54480__$2 = (cljs.core.truth_((function (){var fexpr__54484 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54484.cljs$core$IFn$_invoke$arity$1 ? fexpr__54484.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54484.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54480__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54480__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54480__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54480__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54486 = top_data;
var G__54486__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54486,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54486);
var G__54486__$2 = (cljs.core.truth_((function (){var fexpr__54487 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54487.cljs$core$IFn$_invoke$arity$1 ? fexpr__54487.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54487.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54486__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54486__$1);
var G__54486__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54486__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54486__$2);
var G__54486__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54486__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54486__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54486__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54486__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54496 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496,(3),null);
var G__54503 = top_data;
var G__54503__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54503,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54503);
var G__54503__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54503__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54503__$1);
var G__54503__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54503__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54503__$2);
var G__54503__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54503__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54503__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54503__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54503__$4;
}

break;
case "execution":
var vec__54522 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54522,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54522,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54522,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54522,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54464_SHARP_){
var or__4223__auto__ = (p1__54464_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__54538 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54538.cljs$core$IFn$_invoke$arity$1 ? fexpr__54538.cljs$core$IFn$_invoke$arity$1(p1__54464_SHARP_) : fexpr__54538.call(null,p1__54464_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__54542 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54542__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54542);
var G__54542__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54542__$1);
var G__54542__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54542__$2);
var G__54542__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54542__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54542__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54542__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54476__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54592){
var map__54593 = p__54592;
var map__54593__$1 = cljs.core.__destructure_map(map__54593);
var triage_data = map__54593__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__54606 = phase;
var G__54606__$1 = (((G__54606 instanceof cljs.core.Keyword))?G__54606.fqn:null);
switch (G__54606__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54614 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54615 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54616 = loc;
var G__54617 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54621_54790 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54622_54791 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54623_54792 = true;
var _STAR_print_fn_STAR__temp_val__54624_54793 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54623_54792);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54624_54793);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54573_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54573_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54622_54791);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54621_54790);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54614,G__54615,G__54616,G__54617) : format.call(null,G__54614,G__54615,G__54616,G__54617));

break;
case "macroexpansion":
var G__54633 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54634 = cause_type;
var G__54635 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54636 = loc;
var G__54637 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54633,G__54634,G__54635,G__54636,G__54637) : format.call(null,G__54633,G__54634,G__54635,G__54636,G__54637));

break;
case "compile-syntax-check":
var G__54642 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54643 = cause_type;
var G__54644 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54645 = loc;
var G__54646 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54642,G__54643,G__54644,G__54645,G__54646) : format.call(null,G__54642,G__54643,G__54644,G__54645,G__54646));

break;
case "compilation":
var G__54649 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54650 = cause_type;
var G__54651 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54652 = loc;
var G__54653 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54649,G__54650,G__54651,G__54652,G__54653) : format.call(null,G__54649,G__54650,G__54651,G__54652,G__54653));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54654 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54655 = symbol;
var G__54656 = loc;
var G__54657 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54658_54797 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54659_54798 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54660_54799 = true;
var _STAR_print_fn_STAR__temp_val__54661_54800 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54660_54799);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54661_54800);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54578_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54578_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54659_54798);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54658_54797);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54654,G__54655,G__54656,G__54657) : format.call(null,G__54654,G__54655,G__54656,G__54657));
} else {
var G__54663 = "Execution error%s at %s(%s).\n%s\n";
var G__54664 = cause_type;
var G__54665 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54666 = loc;
var G__54667 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54663,G__54664,G__54665,G__54666,G__54667) : format.call(null,G__54663,G__54664,G__54665,G__54666,G__54667));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54606__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
