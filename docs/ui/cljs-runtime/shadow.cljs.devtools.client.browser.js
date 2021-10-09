goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56409 = arguments.length;
var i__4830__auto___56410 = (0);
while(true){
if((i__4830__auto___56410 < len__4829__auto___56409)){
args__4835__auto__.push((arguments[i__4830__auto___56410]));

var G__56411 = (i__4830__auto___56410 + (1));
i__4830__auto___56410 = G__56411;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56280){
var G__56281 = cljs.core.first(seq56280);
var seq56280__$1 = cljs.core.next(seq56280);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56281,seq56280__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56287 = cljs.core.seq(sources);
var chunk__56288 = null;
var count__56289 = (0);
var i__56290 = (0);
while(true){
if((i__56290 < count__56289)){
var map__56297 = chunk__56288.cljs$core$IIndexed$_nth$arity$2(null,i__56290);
var map__56297__$1 = cljs.core.__destructure_map(map__56297);
var src = map__56297__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56298){var e_56412 = e56298;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56412);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56412.message)].join('')));
}

var G__56413 = seq__56287;
var G__56414 = chunk__56288;
var G__56415 = count__56289;
var G__56416 = (i__56290 + (1));
seq__56287 = G__56413;
chunk__56288 = G__56414;
count__56289 = G__56415;
i__56290 = G__56416;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56287);
if(temp__5753__auto__){
var seq__56287__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56287__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__56287__$1);
var G__56417 = cljs.core.chunk_rest(seq__56287__$1);
var G__56418 = c__4649__auto__;
var G__56419 = cljs.core.count(c__4649__auto__);
var G__56420 = (0);
seq__56287 = G__56417;
chunk__56288 = G__56418;
count__56289 = G__56419;
i__56290 = G__56420;
continue;
} else {
var map__56299 = cljs.core.first(seq__56287__$1);
var map__56299__$1 = cljs.core.__destructure_map(map__56299);
var src = map__56299__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56300){var e_56421 = e56300;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56421);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56421.message)].join('')));
}

var G__56422 = cljs.core.next(seq__56287__$1);
var G__56423 = null;
var G__56424 = (0);
var G__56425 = (0);
seq__56287 = G__56422;
chunk__56288 = G__56423;
count__56289 = G__56424;
i__56290 = G__56425;
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
var seq__56301 = cljs.core.seq(js_requires);
var chunk__56302 = null;
var count__56303 = (0);
var i__56304 = (0);
while(true){
if((i__56304 < count__56303)){
var js_ns = chunk__56302.cljs$core$IIndexed$_nth$arity$2(null,i__56304);
var require_str_56426 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56426);


var G__56427 = seq__56301;
var G__56428 = chunk__56302;
var G__56429 = count__56303;
var G__56430 = (i__56304 + (1));
seq__56301 = G__56427;
chunk__56302 = G__56428;
count__56303 = G__56429;
i__56304 = G__56430;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56301);
if(temp__5753__auto__){
var seq__56301__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56301__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__56301__$1);
var G__56431 = cljs.core.chunk_rest(seq__56301__$1);
var G__56432 = c__4649__auto__;
var G__56433 = cljs.core.count(c__4649__auto__);
var G__56434 = (0);
seq__56301 = G__56431;
chunk__56302 = G__56432;
count__56303 = G__56433;
i__56304 = G__56434;
continue;
} else {
var js_ns = cljs.core.first(seq__56301__$1);
var require_str_56435 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56435);


var G__56436 = cljs.core.next(seq__56301__$1);
var G__56437 = null;
var G__56438 = (0);
var G__56439 = (0);
seq__56301 = G__56436;
chunk__56302 = G__56437;
count__56303 = G__56438;
i__56304 = G__56439;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__56306){
var map__56307 = p__56306;
var map__56307__$1 = cljs.core.__destructure_map(map__56307);
var msg = map__56307__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56307__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56307__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56308(s__56309){
return (new cljs.core.LazySeq(null,(function (){
var s__56309__$1 = s__56309;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56309__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__56314 = cljs.core.first(xs__6308__auto__);
var map__56314__$1 = cljs.core.__destructure_map(map__56314);
var src = map__56314__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56314__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56314__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__56309__$1,map__56314,map__56314__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56307,map__56307__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56308_$_iter__56310(s__56311){
return (new cljs.core.LazySeq(null,((function (s__56309__$1,map__56314,map__56314__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56307,map__56307__$1,msg,info,reload_info){
return (function (){
var s__56311__$1 = s__56311;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__56311__$1);
if(temp__5753__auto____$1){
var s__56311__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56311__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__56311__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__56313 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__56312 = (0);
while(true){
if((i__56312 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__56312);
cljs.core.chunk_append(b__56313,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__56440 = (i__56312 + (1));
i__56312 = G__56440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56313),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56308_$_iter__56310(cljs.core.chunk_rest(s__56311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56313),null);
}
} else {
var warning = cljs.core.first(s__56311__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56308_$_iter__56310(cljs.core.rest(s__56311__$2)));
}
} else {
return null;
}
break;
}
});})(s__56309__$1,map__56314,map__56314__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56307,map__56307__$1,msg,info,reload_info))
,null,null));
});})(s__56309__$1,map__56314,map__56314__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56307,map__56307__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56308(cljs.core.rest(s__56309__$1)));
} else {
var G__56441 = cljs.core.rest(s__56309__$1);
s__56309__$1 = G__56441;
continue;
}
} else {
var G__56442 = cljs.core.rest(s__56309__$1);
s__56309__$1 = G__56442;
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
var seq__56315_56443 = cljs.core.seq(warnings);
var chunk__56316_56444 = null;
var count__56317_56445 = (0);
var i__56318_56446 = (0);
while(true){
if((i__56318_56446 < count__56317_56445)){
var map__56321_56447 = chunk__56316_56444.cljs$core$IIndexed$_nth$arity$2(null,i__56318_56446);
var map__56321_56448__$1 = cljs.core.__destructure_map(map__56321_56447);
var w_56449 = map__56321_56448__$1;
var msg_56450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56321_56448__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56321_56448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56321_56448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56321_56448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56453)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56451),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56452),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56450__$1)].join(''));


var G__56454 = seq__56315_56443;
var G__56455 = chunk__56316_56444;
var G__56456 = count__56317_56445;
var G__56457 = (i__56318_56446 + (1));
seq__56315_56443 = G__56454;
chunk__56316_56444 = G__56455;
count__56317_56445 = G__56456;
i__56318_56446 = G__56457;
continue;
} else {
var temp__5753__auto___56458 = cljs.core.seq(seq__56315_56443);
if(temp__5753__auto___56458){
var seq__56315_56459__$1 = temp__5753__auto___56458;
if(cljs.core.chunked_seq_QMARK_(seq__56315_56459__$1)){
var c__4649__auto___56460 = cljs.core.chunk_first(seq__56315_56459__$1);
var G__56461 = cljs.core.chunk_rest(seq__56315_56459__$1);
var G__56462 = c__4649__auto___56460;
var G__56463 = cljs.core.count(c__4649__auto___56460);
var G__56464 = (0);
seq__56315_56443 = G__56461;
chunk__56316_56444 = G__56462;
count__56317_56445 = G__56463;
i__56318_56446 = G__56464;
continue;
} else {
var map__56322_56465 = cljs.core.first(seq__56315_56459__$1);
var map__56322_56466__$1 = cljs.core.__destructure_map(map__56322_56465);
var w_56467 = map__56322_56466__$1;
var msg_56468__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56322_56466__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56322_56466__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56322_56466__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56322_56466__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56471)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56469),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56470),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56468__$1)].join(''));


var G__56472 = cljs.core.next(seq__56315_56459__$1);
var G__56473 = null;
var G__56474 = (0);
var G__56475 = (0);
seq__56315_56443 = G__56472;
chunk__56316_56444 = G__56473;
count__56317_56445 = G__56474;
i__56318_56446 = G__56475;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__56305_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56305_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__56323){
var map__56324 = p__56323;
var map__56324__$1 = cljs.core.__destructure_map(map__56324);
var msg = map__56324__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56324__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56325 = cljs.core.seq(updates);
var chunk__56327 = null;
var count__56328 = (0);
var i__56329 = (0);
while(true){
if((i__56329 < count__56328)){
var path = chunk__56327.cljs$core$IIndexed$_nth$arity$2(null,i__56329);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56359_56476 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56363_56477 = null;
var count__56364_56478 = (0);
var i__56365_56479 = (0);
while(true){
if((i__56365_56479 < count__56364_56478)){
var node_56480 = chunk__56363_56477.cljs$core$IIndexed$_nth$arity$2(null,i__56365_56479);
if(cljs.core.not(node_56480.shadow$old)){
var path_match_56481 = shadow.cljs.devtools.client.browser.match_paths(node_56480.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56481)){
var new_link_56482 = (function (){var G__56371 = node_56480.cloneNode(true);
G__56371.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56481),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56371;
})();
(node_56480.shadow$old = true);

(new_link_56482.onload = ((function (seq__56359_56476,chunk__56363_56477,count__56364_56478,i__56365_56479,seq__56325,chunk__56327,count__56328,i__56329,new_link_56482,path_match_56481,node_56480,path,map__56324,map__56324__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56480);
});})(seq__56359_56476,chunk__56363_56477,count__56364_56478,i__56365_56479,seq__56325,chunk__56327,count__56328,i__56329,new_link_56482,path_match_56481,node_56480,path,map__56324,map__56324__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56481], 0));

goog.dom.insertSiblingAfter(new_link_56482,node_56480);


var G__56483 = seq__56359_56476;
var G__56484 = chunk__56363_56477;
var G__56485 = count__56364_56478;
var G__56486 = (i__56365_56479 + (1));
seq__56359_56476 = G__56483;
chunk__56363_56477 = G__56484;
count__56364_56478 = G__56485;
i__56365_56479 = G__56486;
continue;
} else {
var G__56487 = seq__56359_56476;
var G__56488 = chunk__56363_56477;
var G__56489 = count__56364_56478;
var G__56490 = (i__56365_56479 + (1));
seq__56359_56476 = G__56487;
chunk__56363_56477 = G__56488;
count__56364_56478 = G__56489;
i__56365_56479 = G__56490;
continue;
}
} else {
var G__56491 = seq__56359_56476;
var G__56492 = chunk__56363_56477;
var G__56493 = count__56364_56478;
var G__56494 = (i__56365_56479 + (1));
seq__56359_56476 = G__56491;
chunk__56363_56477 = G__56492;
count__56364_56478 = G__56493;
i__56365_56479 = G__56494;
continue;
}
} else {
var temp__5753__auto___56495 = cljs.core.seq(seq__56359_56476);
if(temp__5753__auto___56495){
var seq__56359_56496__$1 = temp__5753__auto___56495;
if(cljs.core.chunked_seq_QMARK_(seq__56359_56496__$1)){
var c__4649__auto___56497 = cljs.core.chunk_first(seq__56359_56496__$1);
var G__56498 = cljs.core.chunk_rest(seq__56359_56496__$1);
var G__56499 = c__4649__auto___56497;
var G__56500 = cljs.core.count(c__4649__auto___56497);
var G__56501 = (0);
seq__56359_56476 = G__56498;
chunk__56363_56477 = G__56499;
count__56364_56478 = G__56500;
i__56365_56479 = G__56501;
continue;
} else {
var node_56502 = cljs.core.first(seq__56359_56496__$1);
if(cljs.core.not(node_56502.shadow$old)){
var path_match_56503 = shadow.cljs.devtools.client.browser.match_paths(node_56502.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56503)){
var new_link_56504 = (function (){var G__56372 = node_56502.cloneNode(true);
G__56372.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56503),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56372;
})();
(node_56502.shadow$old = true);

(new_link_56504.onload = ((function (seq__56359_56476,chunk__56363_56477,count__56364_56478,i__56365_56479,seq__56325,chunk__56327,count__56328,i__56329,new_link_56504,path_match_56503,node_56502,seq__56359_56496__$1,temp__5753__auto___56495,path,map__56324,map__56324__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56502);
});})(seq__56359_56476,chunk__56363_56477,count__56364_56478,i__56365_56479,seq__56325,chunk__56327,count__56328,i__56329,new_link_56504,path_match_56503,node_56502,seq__56359_56496__$1,temp__5753__auto___56495,path,map__56324,map__56324__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56503], 0));

goog.dom.insertSiblingAfter(new_link_56504,node_56502);


var G__56505 = cljs.core.next(seq__56359_56496__$1);
var G__56506 = null;
var G__56507 = (0);
var G__56508 = (0);
seq__56359_56476 = G__56505;
chunk__56363_56477 = G__56506;
count__56364_56478 = G__56507;
i__56365_56479 = G__56508;
continue;
} else {
var G__56509 = cljs.core.next(seq__56359_56496__$1);
var G__56510 = null;
var G__56511 = (0);
var G__56512 = (0);
seq__56359_56476 = G__56509;
chunk__56363_56477 = G__56510;
count__56364_56478 = G__56511;
i__56365_56479 = G__56512;
continue;
}
} else {
var G__56513 = cljs.core.next(seq__56359_56496__$1);
var G__56514 = null;
var G__56515 = (0);
var G__56516 = (0);
seq__56359_56476 = G__56513;
chunk__56363_56477 = G__56514;
count__56364_56478 = G__56515;
i__56365_56479 = G__56516;
continue;
}
}
} else {
}
}
break;
}


var G__56517 = seq__56325;
var G__56518 = chunk__56327;
var G__56519 = count__56328;
var G__56520 = (i__56329 + (1));
seq__56325 = G__56517;
chunk__56327 = G__56518;
count__56328 = G__56519;
i__56329 = G__56520;
continue;
} else {
var G__56521 = seq__56325;
var G__56522 = chunk__56327;
var G__56523 = count__56328;
var G__56524 = (i__56329 + (1));
seq__56325 = G__56521;
chunk__56327 = G__56522;
count__56328 = G__56523;
i__56329 = G__56524;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56325);
if(temp__5753__auto__){
var seq__56325__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56325__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__56325__$1);
var G__56525 = cljs.core.chunk_rest(seq__56325__$1);
var G__56526 = c__4649__auto__;
var G__56527 = cljs.core.count(c__4649__auto__);
var G__56528 = (0);
seq__56325 = G__56525;
chunk__56327 = G__56526;
count__56328 = G__56527;
i__56329 = G__56528;
continue;
} else {
var path = cljs.core.first(seq__56325__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56373_56529 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56377_56530 = null;
var count__56378_56531 = (0);
var i__56379_56532 = (0);
while(true){
if((i__56379_56532 < count__56378_56531)){
var node_56533 = chunk__56377_56530.cljs$core$IIndexed$_nth$arity$2(null,i__56379_56532);
if(cljs.core.not(node_56533.shadow$old)){
var path_match_56534 = shadow.cljs.devtools.client.browser.match_paths(node_56533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56534)){
var new_link_56535 = (function (){var G__56385 = node_56533.cloneNode(true);
G__56385.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56385;
})();
(node_56533.shadow$old = true);

(new_link_56535.onload = ((function (seq__56373_56529,chunk__56377_56530,count__56378_56531,i__56379_56532,seq__56325,chunk__56327,count__56328,i__56329,new_link_56535,path_match_56534,node_56533,path,seq__56325__$1,temp__5753__auto__,map__56324,map__56324__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56533);
});})(seq__56373_56529,chunk__56377_56530,count__56378_56531,i__56379_56532,seq__56325,chunk__56327,count__56328,i__56329,new_link_56535,path_match_56534,node_56533,path,seq__56325__$1,temp__5753__auto__,map__56324,map__56324__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56534], 0));

goog.dom.insertSiblingAfter(new_link_56535,node_56533);


var G__56536 = seq__56373_56529;
var G__56537 = chunk__56377_56530;
var G__56538 = count__56378_56531;
var G__56539 = (i__56379_56532 + (1));
seq__56373_56529 = G__56536;
chunk__56377_56530 = G__56537;
count__56378_56531 = G__56538;
i__56379_56532 = G__56539;
continue;
} else {
var G__56540 = seq__56373_56529;
var G__56541 = chunk__56377_56530;
var G__56542 = count__56378_56531;
var G__56543 = (i__56379_56532 + (1));
seq__56373_56529 = G__56540;
chunk__56377_56530 = G__56541;
count__56378_56531 = G__56542;
i__56379_56532 = G__56543;
continue;
}
} else {
var G__56544 = seq__56373_56529;
var G__56545 = chunk__56377_56530;
var G__56546 = count__56378_56531;
var G__56547 = (i__56379_56532 + (1));
seq__56373_56529 = G__56544;
chunk__56377_56530 = G__56545;
count__56378_56531 = G__56546;
i__56379_56532 = G__56547;
continue;
}
} else {
var temp__5753__auto___56548__$1 = cljs.core.seq(seq__56373_56529);
if(temp__5753__auto___56548__$1){
var seq__56373_56549__$1 = temp__5753__auto___56548__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56373_56549__$1)){
var c__4649__auto___56550 = cljs.core.chunk_first(seq__56373_56549__$1);
var G__56551 = cljs.core.chunk_rest(seq__56373_56549__$1);
var G__56552 = c__4649__auto___56550;
var G__56553 = cljs.core.count(c__4649__auto___56550);
var G__56554 = (0);
seq__56373_56529 = G__56551;
chunk__56377_56530 = G__56552;
count__56378_56531 = G__56553;
i__56379_56532 = G__56554;
continue;
} else {
var node_56555 = cljs.core.first(seq__56373_56549__$1);
if(cljs.core.not(node_56555.shadow$old)){
var path_match_56556 = shadow.cljs.devtools.client.browser.match_paths(node_56555.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56556)){
var new_link_56557 = (function (){var G__56386 = node_56555.cloneNode(true);
G__56386.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56556),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56386;
})();
(node_56555.shadow$old = true);

(new_link_56557.onload = ((function (seq__56373_56529,chunk__56377_56530,count__56378_56531,i__56379_56532,seq__56325,chunk__56327,count__56328,i__56329,new_link_56557,path_match_56556,node_56555,seq__56373_56549__$1,temp__5753__auto___56548__$1,path,seq__56325__$1,temp__5753__auto__,map__56324,map__56324__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56555);
});})(seq__56373_56529,chunk__56377_56530,count__56378_56531,i__56379_56532,seq__56325,chunk__56327,count__56328,i__56329,new_link_56557,path_match_56556,node_56555,seq__56373_56549__$1,temp__5753__auto___56548__$1,path,seq__56325__$1,temp__5753__auto__,map__56324,map__56324__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56556], 0));

goog.dom.insertSiblingAfter(new_link_56557,node_56555);


var G__56558 = cljs.core.next(seq__56373_56549__$1);
var G__56559 = null;
var G__56560 = (0);
var G__56561 = (0);
seq__56373_56529 = G__56558;
chunk__56377_56530 = G__56559;
count__56378_56531 = G__56560;
i__56379_56532 = G__56561;
continue;
} else {
var G__56562 = cljs.core.next(seq__56373_56549__$1);
var G__56563 = null;
var G__56564 = (0);
var G__56565 = (0);
seq__56373_56529 = G__56562;
chunk__56377_56530 = G__56563;
count__56378_56531 = G__56564;
i__56379_56532 = G__56565;
continue;
}
} else {
var G__56566 = cljs.core.next(seq__56373_56549__$1);
var G__56567 = null;
var G__56568 = (0);
var G__56569 = (0);
seq__56373_56529 = G__56566;
chunk__56377_56530 = G__56567;
count__56378_56531 = G__56568;
i__56379_56532 = G__56569;
continue;
}
}
} else {
}
}
break;
}


var G__56570 = cljs.core.next(seq__56325__$1);
var G__56571 = null;
var G__56572 = (0);
var G__56573 = (0);
seq__56325 = G__56570;
chunk__56327 = G__56571;
count__56328 = G__56572;
i__56329 = G__56573;
continue;
} else {
var G__56574 = cljs.core.next(seq__56325__$1);
var G__56575 = null;
var G__56576 = (0);
var G__56577 = (0);
seq__56325 = G__56574;
chunk__56327 = G__56575;
count__56328 = G__56576;
i__56329 = G__56577;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__56387){
var map__56388 = p__56387;
var map__56388__$1 = cljs.core.__destructure_map(map__56388);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56388__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__56389){
var map__56390 = p__56389;
var map__56390__$1 = cljs.core.__destructure_map(map__56390);
var _ = map__56390__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56390__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__56391,done,error){
var map__56392 = p__56391;
var map__56392__$1 = cljs.core.__destructure_map(map__56392);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56392__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__56393,done,error){
var map__56394 = p__56393;
var map__56394__$1 = cljs.core.__destructure_map(map__56394);
var msg = map__56394__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56394__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56394__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56394__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__56395){
var map__56396 = p__56395;
var map__56396__$1 = cljs.core.__destructure_map(map__56396);
var src = map__56396__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56396__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__56397 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__56397) : done.call(null,G__56397));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__56398){
var map__56399 = p__56398;
var map__56399__$1 = cljs.core.__destructure_map(map__56399);
var msg__$1 = map__56399__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56399__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e56400){var ex = e56400;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__56401){
var map__56402 = p__56401;
var map__56402__$1 = cljs.core.__destructure_map(map__56402);
var env = map__56402__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__56403){
var map__56404 = p__56403;
var map__56404__$1 = cljs.core.__destructure_map(map__56404);
var msg = map__56404__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56404__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__56405){
var map__56406 = p__56405;
var map__56406__$1 = cljs.core.__destructure_map(map__56406);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__56407){
var map__56408 = p__56407;
var map__56408__$1 = cljs.core.__destructure_map(map__56408);
var svc = map__56408__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56408__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
