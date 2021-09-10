goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___69832 = arguments.length;
var i__4830__auto___69833 = (0);
while(true){
if((i__4830__auto___69833 < len__4829__auto___69832)){
args__4835__auto__.push((arguments[i__4830__auto___69833]));

var G__69834 = (i__4830__auto___69833 + (1));
i__4830__auto___69833 = G__69834;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq69703){
var G__69704 = cljs.core.first(seq69703);
var seq69703__$1 = cljs.core.next(seq69703);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69704,seq69703__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__69705 = cljs.core.seq(sources);
var chunk__69706 = null;
var count__69707 = (0);
var i__69708 = (0);
while(true){
if((i__69708 < count__69707)){
var map__69718 = chunk__69706.cljs$core$IIndexed$_nth$arity$2(null,i__69708);
var map__69718__$1 = cljs.core.__destructure_map(map__69718);
var src = map__69718__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69718__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69718__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69718__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69718__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e69719){var e_69835 = e69719;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_69835);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_69835.message)].join('')));
}

var G__69836 = seq__69705;
var G__69837 = chunk__69706;
var G__69838 = count__69707;
var G__69839 = (i__69708 + (1));
seq__69705 = G__69836;
chunk__69706 = G__69837;
count__69707 = G__69838;
i__69708 = G__69839;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69705);
if(temp__5753__auto__){
var seq__69705__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69705__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69705__$1);
var G__69840 = cljs.core.chunk_rest(seq__69705__$1);
var G__69841 = c__4649__auto__;
var G__69842 = cljs.core.count(c__4649__auto__);
var G__69843 = (0);
seq__69705 = G__69840;
chunk__69706 = G__69841;
count__69707 = G__69842;
i__69708 = G__69843;
continue;
} else {
var map__69720 = cljs.core.first(seq__69705__$1);
var map__69720__$1 = cljs.core.__destructure_map(map__69720);
var src = map__69720__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69720__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69720__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69720__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69720__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e69721){var e_69844 = e69721;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_69844);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_69844.message)].join('')));
}

var G__69845 = cljs.core.next(seq__69705__$1);
var G__69846 = null;
var G__69847 = (0);
var G__69848 = (0);
seq__69705 = G__69845;
chunk__69706 = G__69846;
count__69707 = G__69847;
i__69708 = G__69848;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__69722 = cljs.core.seq(js_requires);
var chunk__69723 = null;
var count__69724 = (0);
var i__69725 = (0);
while(true){
if((i__69725 < count__69724)){
var js_ns = chunk__69723.cljs$core$IIndexed$_nth$arity$2(null,i__69725);
var require_str_69849 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_69849);


var G__69850 = seq__69722;
var G__69851 = chunk__69723;
var G__69852 = count__69724;
var G__69853 = (i__69725 + (1));
seq__69722 = G__69850;
chunk__69723 = G__69851;
count__69724 = G__69852;
i__69725 = G__69853;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69722);
if(temp__5753__auto__){
var seq__69722__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69722__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69722__$1);
var G__69854 = cljs.core.chunk_rest(seq__69722__$1);
var G__69855 = c__4649__auto__;
var G__69856 = cljs.core.count(c__4649__auto__);
var G__69857 = (0);
seq__69722 = G__69854;
chunk__69723 = G__69855;
count__69724 = G__69856;
i__69725 = G__69857;
continue;
} else {
var js_ns = cljs.core.first(seq__69722__$1);
var require_str_69858 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_69858);


var G__69859 = cljs.core.next(seq__69722__$1);
var G__69860 = null;
var G__69861 = (0);
var G__69862 = (0);
seq__69722 = G__69859;
chunk__69723 = G__69860;
count__69724 = G__69861;
i__69725 = G__69862;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__69729){
var map__69730 = p__69729;
var map__69730__$1 = cljs.core.__destructure_map(map__69730);
var msg = map__69730__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69730__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69730__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69731(s__69732){
return (new cljs.core.LazySeq(null,(function (){
var s__69732__$1 = s__69732;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__69732__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__69737 = cljs.core.first(xs__6308__auto__);
var map__69737__$1 = cljs.core.__destructure_map(map__69737);
var src = map__69737__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69737__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69737__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__69732__$1,map__69737,map__69737__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__69730,map__69730__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69731_$_iter__69733(s__69734){
return (new cljs.core.LazySeq(null,((function (s__69732__$1,map__69737,map__69737__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__69730,map__69730__$1,msg,info,reload_info){
return (function (){
var s__69734__$1 = s__69734;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__69734__$1);
if(temp__5753__auto____$1){
var s__69734__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69734__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__69734__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__69736 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__69735 = (0);
while(true){
if((i__69735 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__69735);
cljs.core.chunk_append(b__69736,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__69863 = (i__69735 + (1));
i__69735 = G__69863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69736),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69731_$_iter__69733(cljs.core.chunk_rest(s__69734__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69736),null);
}
} else {
var warning = cljs.core.first(s__69734__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69731_$_iter__69733(cljs.core.rest(s__69734__$2)));
}
} else {
return null;
}
break;
}
});})(s__69732__$1,map__69737,map__69737__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__69730,map__69730__$1,msg,info,reload_info))
,null,null));
});})(s__69732__$1,map__69737,map__69737__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__69730,map__69730__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69731(cljs.core.rest(s__69732__$1)));
} else {
var G__69864 = cljs.core.rest(s__69732__$1);
s__69732__$1 = G__69864;
continue;
}
} else {
var G__69865 = cljs.core.rest(s__69732__$1);
s__69732__$1 = G__69865;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__69738_69866 = cljs.core.seq(warnings);
var chunk__69739_69867 = null;
var count__69740_69868 = (0);
var i__69741_69869 = (0);
while(true){
if((i__69741_69869 < count__69740_69868)){
var map__69744_69870 = chunk__69739_69867.cljs$core$IIndexed$_nth$arity$2(null,i__69741_69869);
var map__69744_69871__$1 = cljs.core.__destructure_map(map__69744_69870);
var w_69872 = map__69744_69871__$1;
var msg_69873__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69744_69871__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_69874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69744_69871__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_69875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69744_69871__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_69876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69744_69871__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_69876)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_69874),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_69875),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_69873__$1)].join(''));


var G__69877 = seq__69738_69866;
var G__69878 = chunk__69739_69867;
var G__69879 = count__69740_69868;
var G__69880 = (i__69741_69869 + (1));
seq__69738_69866 = G__69877;
chunk__69739_69867 = G__69878;
count__69740_69868 = G__69879;
i__69741_69869 = G__69880;
continue;
} else {
var temp__5753__auto___69881 = cljs.core.seq(seq__69738_69866);
if(temp__5753__auto___69881){
var seq__69738_69882__$1 = temp__5753__auto___69881;
if(cljs.core.chunked_seq_QMARK_(seq__69738_69882__$1)){
var c__4649__auto___69883 = cljs.core.chunk_first(seq__69738_69882__$1);
var G__69884 = cljs.core.chunk_rest(seq__69738_69882__$1);
var G__69885 = c__4649__auto___69883;
var G__69886 = cljs.core.count(c__4649__auto___69883);
var G__69887 = (0);
seq__69738_69866 = G__69884;
chunk__69739_69867 = G__69885;
count__69740_69868 = G__69886;
i__69741_69869 = G__69887;
continue;
} else {
var map__69745_69888 = cljs.core.first(seq__69738_69882__$1);
var map__69745_69889__$1 = cljs.core.__destructure_map(map__69745_69888);
var w_69890 = map__69745_69889__$1;
var msg_69891__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69745_69889__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_69892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69745_69889__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_69893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69745_69889__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_69894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69745_69889__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_69894)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_69892),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_69893),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_69891__$1)].join(''));


var G__69895 = cljs.core.next(seq__69738_69882__$1);
var G__69896 = null;
var G__69897 = (0);
var G__69898 = (0);
seq__69738_69866 = G__69895;
chunk__69739_69867 = G__69896;
count__69740_69868 = G__69897;
i__69741_69869 = G__69898;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__69728_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__69728_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__69746){
var map__69747 = p__69746;
var map__69747__$1 = cljs.core.__destructure_map(map__69747);
var msg = map__69747__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69747__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__69748 = cljs.core.seq(updates);
var chunk__69750 = null;
var count__69751 = (0);
var i__69752 = (0);
while(true){
if((i__69752 < count__69751)){
var path = chunk__69750.cljs$core$IIndexed$_nth$arity$2(null,i__69752);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__69782_69899 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__69786_69900 = null;
var count__69787_69901 = (0);
var i__69788_69902 = (0);
while(true){
if((i__69788_69902 < count__69787_69901)){
var node_69903 = chunk__69786_69900.cljs$core$IIndexed$_nth$arity$2(null,i__69788_69902);
if(cljs.core.not(node_69903.shadow$old)){
var path_match_69904 = shadow.cljs.devtools.client.browser.match_paths(node_69903.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69904)){
var new_link_69905 = (function (){var G__69794 = node_69903.cloneNode(true);
G__69794.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69904),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69794;
})();
(node_69903.shadow$old = true);

(new_link_69905.onload = ((function (seq__69782_69899,chunk__69786_69900,count__69787_69901,i__69788_69902,seq__69748,chunk__69750,count__69751,i__69752,new_link_69905,path_match_69904,node_69903,path,map__69747,map__69747__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_69903);
});})(seq__69782_69899,chunk__69786_69900,count__69787_69901,i__69788_69902,seq__69748,chunk__69750,count__69751,i__69752,new_link_69905,path_match_69904,node_69903,path,map__69747,map__69747__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69904], 0));

goog.dom.insertSiblingAfter(new_link_69905,node_69903);


var G__69906 = seq__69782_69899;
var G__69907 = chunk__69786_69900;
var G__69908 = count__69787_69901;
var G__69909 = (i__69788_69902 + (1));
seq__69782_69899 = G__69906;
chunk__69786_69900 = G__69907;
count__69787_69901 = G__69908;
i__69788_69902 = G__69909;
continue;
} else {
var G__69910 = seq__69782_69899;
var G__69911 = chunk__69786_69900;
var G__69912 = count__69787_69901;
var G__69913 = (i__69788_69902 + (1));
seq__69782_69899 = G__69910;
chunk__69786_69900 = G__69911;
count__69787_69901 = G__69912;
i__69788_69902 = G__69913;
continue;
}
} else {
var G__69914 = seq__69782_69899;
var G__69915 = chunk__69786_69900;
var G__69916 = count__69787_69901;
var G__69917 = (i__69788_69902 + (1));
seq__69782_69899 = G__69914;
chunk__69786_69900 = G__69915;
count__69787_69901 = G__69916;
i__69788_69902 = G__69917;
continue;
}
} else {
var temp__5753__auto___69918 = cljs.core.seq(seq__69782_69899);
if(temp__5753__auto___69918){
var seq__69782_69919__$1 = temp__5753__auto___69918;
if(cljs.core.chunked_seq_QMARK_(seq__69782_69919__$1)){
var c__4649__auto___69920 = cljs.core.chunk_first(seq__69782_69919__$1);
var G__69921 = cljs.core.chunk_rest(seq__69782_69919__$1);
var G__69922 = c__4649__auto___69920;
var G__69923 = cljs.core.count(c__4649__auto___69920);
var G__69924 = (0);
seq__69782_69899 = G__69921;
chunk__69786_69900 = G__69922;
count__69787_69901 = G__69923;
i__69788_69902 = G__69924;
continue;
} else {
var node_69925 = cljs.core.first(seq__69782_69919__$1);
if(cljs.core.not(node_69925.shadow$old)){
var path_match_69926 = shadow.cljs.devtools.client.browser.match_paths(node_69925.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69926)){
var new_link_69927 = (function (){var G__69795 = node_69925.cloneNode(true);
G__69795.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69926),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69795;
})();
(node_69925.shadow$old = true);

(new_link_69927.onload = ((function (seq__69782_69899,chunk__69786_69900,count__69787_69901,i__69788_69902,seq__69748,chunk__69750,count__69751,i__69752,new_link_69927,path_match_69926,node_69925,seq__69782_69919__$1,temp__5753__auto___69918,path,map__69747,map__69747__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_69925);
});})(seq__69782_69899,chunk__69786_69900,count__69787_69901,i__69788_69902,seq__69748,chunk__69750,count__69751,i__69752,new_link_69927,path_match_69926,node_69925,seq__69782_69919__$1,temp__5753__auto___69918,path,map__69747,map__69747__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69926], 0));

goog.dom.insertSiblingAfter(new_link_69927,node_69925);


var G__69928 = cljs.core.next(seq__69782_69919__$1);
var G__69929 = null;
var G__69930 = (0);
var G__69931 = (0);
seq__69782_69899 = G__69928;
chunk__69786_69900 = G__69929;
count__69787_69901 = G__69930;
i__69788_69902 = G__69931;
continue;
} else {
var G__69932 = cljs.core.next(seq__69782_69919__$1);
var G__69933 = null;
var G__69934 = (0);
var G__69935 = (0);
seq__69782_69899 = G__69932;
chunk__69786_69900 = G__69933;
count__69787_69901 = G__69934;
i__69788_69902 = G__69935;
continue;
}
} else {
var G__69936 = cljs.core.next(seq__69782_69919__$1);
var G__69937 = null;
var G__69938 = (0);
var G__69939 = (0);
seq__69782_69899 = G__69936;
chunk__69786_69900 = G__69937;
count__69787_69901 = G__69938;
i__69788_69902 = G__69939;
continue;
}
}
} else {
}
}
break;
}


var G__69940 = seq__69748;
var G__69941 = chunk__69750;
var G__69942 = count__69751;
var G__69943 = (i__69752 + (1));
seq__69748 = G__69940;
chunk__69750 = G__69941;
count__69751 = G__69942;
i__69752 = G__69943;
continue;
} else {
var G__69944 = seq__69748;
var G__69945 = chunk__69750;
var G__69946 = count__69751;
var G__69947 = (i__69752 + (1));
seq__69748 = G__69944;
chunk__69750 = G__69945;
count__69751 = G__69946;
i__69752 = G__69947;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69748);
if(temp__5753__auto__){
var seq__69748__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69748__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69748__$1);
var G__69948 = cljs.core.chunk_rest(seq__69748__$1);
var G__69949 = c__4649__auto__;
var G__69950 = cljs.core.count(c__4649__auto__);
var G__69951 = (0);
seq__69748 = G__69948;
chunk__69750 = G__69949;
count__69751 = G__69950;
i__69752 = G__69951;
continue;
} else {
var path = cljs.core.first(seq__69748__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__69796_69952 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__69800_69953 = null;
var count__69801_69954 = (0);
var i__69802_69955 = (0);
while(true){
if((i__69802_69955 < count__69801_69954)){
var node_69956 = chunk__69800_69953.cljs$core$IIndexed$_nth$arity$2(null,i__69802_69955);
if(cljs.core.not(node_69956.shadow$old)){
var path_match_69957 = shadow.cljs.devtools.client.browser.match_paths(node_69956.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69957)){
var new_link_69958 = (function (){var G__69808 = node_69956.cloneNode(true);
G__69808.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69957),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69808;
})();
(node_69956.shadow$old = true);

(new_link_69958.onload = ((function (seq__69796_69952,chunk__69800_69953,count__69801_69954,i__69802_69955,seq__69748,chunk__69750,count__69751,i__69752,new_link_69958,path_match_69957,node_69956,path,seq__69748__$1,temp__5753__auto__,map__69747,map__69747__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_69956);
});})(seq__69796_69952,chunk__69800_69953,count__69801_69954,i__69802_69955,seq__69748,chunk__69750,count__69751,i__69752,new_link_69958,path_match_69957,node_69956,path,seq__69748__$1,temp__5753__auto__,map__69747,map__69747__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69957], 0));

goog.dom.insertSiblingAfter(new_link_69958,node_69956);


var G__69959 = seq__69796_69952;
var G__69960 = chunk__69800_69953;
var G__69961 = count__69801_69954;
var G__69962 = (i__69802_69955 + (1));
seq__69796_69952 = G__69959;
chunk__69800_69953 = G__69960;
count__69801_69954 = G__69961;
i__69802_69955 = G__69962;
continue;
} else {
var G__69963 = seq__69796_69952;
var G__69964 = chunk__69800_69953;
var G__69965 = count__69801_69954;
var G__69966 = (i__69802_69955 + (1));
seq__69796_69952 = G__69963;
chunk__69800_69953 = G__69964;
count__69801_69954 = G__69965;
i__69802_69955 = G__69966;
continue;
}
} else {
var G__69967 = seq__69796_69952;
var G__69968 = chunk__69800_69953;
var G__69969 = count__69801_69954;
var G__69970 = (i__69802_69955 + (1));
seq__69796_69952 = G__69967;
chunk__69800_69953 = G__69968;
count__69801_69954 = G__69969;
i__69802_69955 = G__69970;
continue;
}
} else {
var temp__5753__auto___69971__$1 = cljs.core.seq(seq__69796_69952);
if(temp__5753__auto___69971__$1){
var seq__69796_69972__$1 = temp__5753__auto___69971__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69796_69972__$1)){
var c__4649__auto___69973 = cljs.core.chunk_first(seq__69796_69972__$1);
var G__69974 = cljs.core.chunk_rest(seq__69796_69972__$1);
var G__69975 = c__4649__auto___69973;
var G__69976 = cljs.core.count(c__4649__auto___69973);
var G__69977 = (0);
seq__69796_69952 = G__69974;
chunk__69800_69953 = G__69975;
count__69801_69954 = G__69976;
i__69802_69955 = G__69977;
continue;
} else {
var node_69978 = cljs.core.first(seq__69796_69972__$1);
if(cljs.core.not(node_69978.shadow$old)){
var path_match_69979 = shadow.cljs.devtools.client.browser.match_paths(node_69978.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69979)){
var new_link_69980 = (function (){var G__69809 = node_69978.cloneNode(true);
G__69809.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69979),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69809;
})();
(node_69978.shadow$old = true);

(new_link_69980.onload = ((function (seq__69796_69952,chunk__69800_69953,count__69801_69954,i__69802_69955,seq__69748,chunk__69750,count__69751,i__69752,new_link_69980,path_match_69979,node_69978,seq__69796_69972__$1,temp__5753__auto___69971__$1,path,seq__69748__$1,temp__5753__auto__,map__69747,map__69747__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_69978);
});})(seq__69796_69952,chunk__69800_69953,count__69801_69954,i__69802_69955,seq__69748,chunk__69750,count__69751,i__69752,new_link_69980,path_match_69979,node_69978,seq__69796_69972__$1,temp__5753__auto___69971__$1,path,seq__69748__$1,temp__5753__auto__,map__69747,map__69747__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69979], 0));

goog.dom.insertSiblingAfter(new_link_69980,node_69978);


var G__69981 = cljs.core.next(seq__69796_69972__$1);
var G__69982 = null;
var G__69983 = (0);
var G__69984 = (0);
seq__69796_69952 = G__69981;
chunk__69800_69953 = G__69982;
count__69801_69954 = G__69983;
i__69802_69955 = G__69984;
continue;
} else {
var G__69985 = cljs.core.next(seq__69796_69972__$1);
var G__69986 = null;
var G__69987 = (0);
var G__69988 = (0);
seq__69796_69952 = G__69985;
chunk__69800_69953 = G__69986;
count__69801_69954 = G__69987;
i__69802_69955 = G__69988;
continue;
}
} else {
var G__69989 = cljs.core.next(seq__69796_69972__$1);
var G__69990 = null;
var G__69991 = (0);
var G__69992 = (0);
seq__69796_69952 = G__69989;
chunk__69800_69953 = G__69990;
count__69801_69954 = G__69991;
i__69802_69955 = G__69992;
continue;
}
}
} else {
}
}
break;
}


var G__69993 = cljs.core.next(seq__69748__$1);
var G__69994 = null;
var G__69995 = (0);
var G__69996 = (0);
seq__69748 = G__69993;
chunk__69750 = G__69994;
count__69751 = G__69995;
i__69752 = G__69996;
continue;
} else {
var G__69997 = cljs.core.next(seq__69748__$1);
var G__69998 = null;
var G__69999 = (0);
var G__70000 = (0);
seq__69748 = G__69997;
chunk__69750 = G__69998;
count__69751 = G__69999;
i__69752 = G__70000;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__69810){
var map__69811 = p__69810;
var map__69811__$1 = cljs.core.__destructure_map(map__69811);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69811__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__69812){
var map__69813 = p__69812;
var map__69813__$1 = cljs.core.__destructure_map(map__69813);
var _ = map__69813__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69813__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__69814,done,error){
var map__69815 = p__69814;
var map__69815__$1 = cljs.core.__destructure_map(map__69815);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69815__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__69816,done,error){
var map__69817 = p__69816;
var map__69817__$1 = cljs.core.__destructure_map(map__69817);
var msg = map__69817__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69817__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69817__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69817__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__69818){
var map__69819 = p__69818;
var map__69819__$1 = cljs.core.__destructure_map(map__69819);
var src = map__69819__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69819__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__69820 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__69820) : done.call(null,G__69820));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__69821){
var map__69822 = p__69821;
var map__69822__$1 = cljs.core.__destructure_map(map__69822);
var msg__$1 = map__69822__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69822__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e69823){var ex = e69823;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__69824){
var map__69825 = p__69824;
var map__69825__$1 = cljs.core.__destructure_map(map__69825);
var env = map__69825__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69825__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__69826){
var map__69827 = p__69826;
var map__69827__$1 = cljs.core.__destructure_map(map__69827);
var msg = map__69827__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69827__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__69828){
var map__69829 = p__69828;
var map__69829__$1 = cljs.core.__destructure_map(map__69829);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69829__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69829__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__69830){
var map__69831 = p__69830;
var map__69831__$1 = cljs.core.__destructure_map(map__69831);
var svc = map__69831__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69831__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
