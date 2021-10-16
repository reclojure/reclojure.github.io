goog.provide('portal.runtime.index');
portal.runtime.index.testing_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
portal.runtime.index.html = (function portal$runtime$index$html(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50589 = arguments.length;
var i__4830__auto___50590 = (0);
while(true){
if((i__4830__auto___50590 < len__4829__auto___50589)){
args__4835__auto__.push((arguments[i__4830__auto___50590]));

var G__50591 = (i__4830__auto___50590 + (1));
i__4830__auto___50590 = G__50591;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return portal.runtime.index.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(portal.runtime.index.html.cljs$core$IFn$_invoke$arity$variadic = (function (p__50580){
var map__50581 = p__50580;
var map__50581__$1 = cljs.core.__destructure_map(map__50581);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50581__$1,new cljs.core.Keyword(null,"name","name",1843675177),"portal");
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50581__$1,new cljs.core.Keyword(null,"version","version",425292698),"0.15.1");
var code_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50581__$1,new cljs.core.Keyword(null,"code-url","code-url",532390406),"main.js");
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50581__$1,new cljs.core.Keyword(null,"platform","platform",-1086422114),"node");
return ["<!DOCTYPE html>","<html lang=\"en\">","<head>","<title>",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(platform)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join(''),"</title>","<meta charset='UTF-8' />","<meta name='viewport' content='width=device-width, initial-scale=1' />","</head>","<body style=\"margin: 0; overflow: hidden\">","<div id=\"root\"></div>","<script src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_url),"\"></script>",(cljs.core.truth_(cljs.core.deref(portal.runtime.index.testing_QMARK_))?"<script src=\"wait.js\"></script>":null),"</body>","</html>"].join('');
}));

(portal.runtime.index.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portal.runtime.index.html.cljs$lang$applyTo = (function (seq50573){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50573));
}));


//# sourceMappingURL=portal.runtime.index.js.map
