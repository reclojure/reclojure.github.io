goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50404 = arguments.length;
var i__4830__auto___50405 = (0);
while(true){
if((i__4830__auto___50405 < len__4829__auto___50404)){
args__4835__auto__.push((arguments[i__4830__auto___50405]));

var G__50406 = (i__4830__auto___50405 + (1));
i__4830__auto___50405 = G__50406;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50275){
var G__50276 = cljs.core.first(seq50275);
var seq50275__$1 = cljs.core.next(seq50275);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50276,seq50275__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50277 = cljs.core.seq(sources);
var chunk__50278 = null;
var count__50279 = (0);
var i__50280 = (0);
while(true){
if((i__50280 < count__50279)){
var map__50290 = chunk__50278.cljs$core$IIndexed$_nth$arity$2(null,i__50280);
var map__50290__$1 = cljs.core.__destructure_map(map__50290);
var src = map__50290__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50291){var e_50407 = e50291;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50407);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50407.message)].join('')));
}

var G__50408 = seq__50277;
var G__50409 = chunk__50278;
var G__50410 = count__50279;
var G__50411 = (i__50280 + (1));
seq__50277 = G__50408;
chunk__50278 = G__50409;
count__50279 = G__50410;
i__50280 = G__50411;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50277);
if(temp__5753__auto__){
var seq__50277__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50277__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50277__$1);
var G__50412 = cljs.core.chunk_rest(seq__50277__$1);
var G__50413 = c__4649__auto__;
var G__50414 = cljs.core.count(c__4649__auto__);
var G__50415 = (0);
seq__50277 = G__50412;
chunk__50278 = G__50413;
count__50279 = G__50414;
i__50280 = G__50415;
continue;
} else {
var map__50292 = cljs.core.first(seq__50277__$1);
var map__50292__$1 = cljs.core.__destructure_map(map__50292);
var src = map__50292__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50292__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50292__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50292__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50292__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50293){var e_50416 = e50293;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50416);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50416.message)].join('')));
}

var G__50417 = cljs.core.next(seq__50277__$1);
var G__50418 = null;
var G__50419 = (0);
var G__50420 = (0);
seq__50277 = G__50417;
chunk__50278 = G__50418;
count__50279 = G__50419;
i__50280 = G__50420;
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
var seq__50294 = cljs.core.seq(js_requires);
var chunk__50295 = null;
var count__50296 = (0);
var i__50297 = (0);
while(true){
if((i__50297 < count__50296)){
var js_ns = chunk__50295.cljs$core$IIndexed$_nth$arity$2(null,i__50297);
var require_str_50421 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50421);


var G__50422 = seq__50294;
var G__50423 = chunk__50295;
var G__50424 = count__50296;
var G__50425 = (i__50297 + (1));
seq__50294 = G__50422;
chunk__50295 = G__50423;
count__50296 = G__50424;
i__50297 = G__50425;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50294);
if(temp__5753__auto__){
var seq__50294__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50294__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50294__$1);
var G__50426 = cljs.core.chunk_rest(seq__50294__$1);
var G__50427 = c__4649__auto__;
var G__50428 = cljs.core.count(c__4649__auto__);
var G__50429 = (0);
seq__50294 = G__50426;
chunk__50295 = G__50427;
count__50296 = G__50428;
i__50297 = G__50429;
continue;
} else {
var js_ns = cljs.core.first(seq__50294__$1);
var require_str_50430 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50430);


var G__50431 = cljs.core.next(seq__50294__$1);
var G__50432 = null;
var G__50433 = (0);
var G__50434 = (0);
seq__50294 = G__50431;
chunk__50295 = G__50432;
count__50296 = G__50433;
i__50297 = G__50434;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50300){
var map__50301 = p__50300;
var map__50301__$1 = cljs.core.__destructure_map(map__50301);
var msg = map__50301__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50301__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50301__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50303(s__50304){
return (new cljs.core.LazySeq(null,(function (){
var s__50304__$1 = s__50304;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50304__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50309 = cljs.core.first(xs__6308__auto__);
var map__50309__$1 = cljs.core.__destructure_map(map__50309);
var src = map__50309__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50309__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50309__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__50304__$1,map__50309,map__50309__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50301,map__50301__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50303_$_iter__50305(s__50306){
return (new cljs.core.LazySeq(null,((function (s__50304__$1,map__50309,map__50309__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50301,map__50301__$1,msg,info,reload_info){
return (function (){
var s__50306__$1 = s__50306;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50306__$1);
if(temp__5753__auto____$1){
var s__50306__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50306__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50306__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50308 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50307 = (0);
while(true){
if((i__50307 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__50307);
cljs.core.chunk_append(b__50308,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50435 = (i__50307 + (1));
i__50307 = G__50435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50308),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50303_$_iter__50305(cljs.core.chunk_rest(s__50306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50308),null);
}
} else {
var warning = cljs.core.first(s__50306__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50303_$_iter__50305(cljs.core.rest(s__50306__$2)));
}
} else {
return null;
}
break;
}
});})(s__50304__$1,map__50309,map__50309__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50301,map__50301__$1,msg,info,reload_info))
,null,null));
});})(s__50304__$1,map__50309,map__50309__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50301,map__50301__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50303(cljs.core.rest(s__50304__$1)));
} else {
var G__50436 = cljs.core.rest(s__50304__$1);
s__50304__$1 = G__50436;
continue;
}
} else {
var G__50437 = cljs.core.rest(s__50304__$1);
s__50304__$1 = G__50437;
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
var seq__50310_50438 = cljs.core.seq(warnings);
var chunk__50311_50439 = null;
var count__50312_50440 = (0);
var i__50313_50441 = (0);
while(true){
if((i__50313_50441 < count__50312_50440)){
var map__50316_50442 = chunk__50311_50439.cljs$core$IIndexed$_nth$arity$2(null,i__50313_50441);
var map__50316_50443__$1 = cljs.core.__destructure_map(map__50316_50442);
var w_50444 = map__50316_50443__$1;
var msg_50445__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316_50443__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316_50443__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316_50443__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50316_50443__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50448)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50446),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50447),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50445__$1)].join(''));


var G__50449 = seq__50310_50438;
var G__50450 = chunk__50311_50439;
var G__50451 = count__50312_50440;
var G__50452 = (i__50313_50441 + (1));
seq__50310_50438 = G__50449;
chunk__50311_50439 = G__50450;
count__50312_50440 = G__50451;
i__50313_50441 = G__50452;
continue;
} else {
var temp__5753__auto___50453 = cljs.core.seq(seq__50310_50438);
if(temp__5753__auto___50453){
var seq__50310_50454__$1 = temp__5753__auto___50453;
if(cljs.core.chunked_seq_QMARK_(seq__50310_50454__$1)){
var c__4649__auto___50455 = cljs.core.chunk_first(seq__50310_50454__$1);
var G__50456 = cljs.core.chunk_rest(seq__50310_50454__$1);
var G__50457 = c__4649__auto___50455;
var G__50458 = cljs.core.count(c__4649__auto___50455);
var G__50459 = (0);
seq__50310_50438 = G__50456;
chunk__50311_50439 = G__50457;
count__50312_50440 = G__50458;
i__50313_50441 = G__50459;
continue;
} else {
var map__50317_50460 = cljs.core.first(seq__50310_50454__$1);
var map__50317_50461__$1 = cljs.core.__destructure_map(map__50317_50460);
var w_50462 = map__50317_50461__$1;
var msg_50463__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50317_50461__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50317_50461__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50317_50461__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50317_50461__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50466)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50464),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50465),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50463__$1)].join(''));


var G__50467 = cljs.core.next(seq__50310_50454__$1);
var G__50468 = null;
var G__50469 = (0);
var G__50470 = (0);
seq__50310_50438 = G__50467;
chunk__50311_50439 = G__50468;
count__50312_50440 = G__50469;
i__50313_50441 = G__50470;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50298_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50298_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50318){
var map__50319 = p__50318;
var map__50319__$1 = cljs.core.__destructure_map(map__50319);
var msg = map__50319__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50319__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50320 = cljs.core.seq(updates);
var chunk__50322 = null;
var count__50323 = (0);
var i__50324 = (0);
while(true){
if((i__50324 < count__50323)){
var path = chunk__50322.cljs$core$IIndexed$_nth$arity$2(null,i__50324);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50354_50471 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50358_50472 = null;
var count__50359_50473 = (0);
var i__50360_50474 = (0);
while(true){
if((i__50360_50474 < count__50359_50473)){
var node_50475 = chunk__50358_50472.cljs$core$IIndexed$_nth$arity$2(null,i__50360_50474);
if(cljs.core.not(node_50475.shadow$old)){
var path_match_50476 = shadow.cljs.devtools.client.browser.match_paths(node_50475.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50476)){
var new_link_50477 = (function (){var G__50366 = node_50475.cloneNode(true);
G__50366.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50476),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50366;
})();
(node_50475.shadow$old = true);

(new_link_50477.onload = ((function (seq__50354_50471,chunk__50358_50472,count__50359_50473,i__50360_50474,seq__50320,chunk__50322,count__50323,i__50324,new_link_50477,path_match_50476,node_50475,path,map__50319,map__50319__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50475);
});})(seq__50354_50471,chunk__50358_50472,count__50359_50473,i__50360_50474,seq__50320,chunk__50322,count__50323,i__50324,new_link_50477,path_match_50476,node_50475,path,map__50319,map__50319__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50476], 0));

goog.dom.insertSiblingAfter(new_link_50477,node_50475);


var G__50478 = seq__50354_50471;
var G__50479 = chunk__50358_50472;
var G__50480 = count__50359_50473;
var G__50481 = (i__50360_50474 + (1));
seq__50354_50471 = G__50478;
chunk__50358_50472 = G__50479;
count__50359_50473 = G__50480;
i__50360_50474 = G__50481;
continue;
} else {
var G__50482 = seq__50354_50471;
var G__50483 = chunk__50358_50472;
var G__50484 = count__50359_50473;
var G__50485 = (i__50360_50474 + (1));
seq__50354_50471 = G__50482;
chunk__50358_50472 = G__50483;
count__50359_50473 = G__50484;
i__50360_50474 = G__50485;
continue;
}
} else {
var G__50486 = seq__50354_50471;
var G__50487 = chunk__50358_50472;
var G__50488 = count__50359_50473;
var G__50489 = (i__50360_50474 + (1));
seq__50354_50471 = G__50486;
chunk__50358_50472 = G__50487;
count__50359_50473 = G__50488;
i__50360_50474 = G__50489;
continue;
}
} else {
var temp__5753__auto___50490 = cljs.core.seq(seq__50354_50471);
if(temp__5753__auto___50490){
var seq__50354_50491__$1 = temp__5753__auto___50490;
if(cljs.core.chunked_seq_QMARK_(seq__50354_50491__$1)){
var c__4649__auto___50492 = cljs.core.chunk_first(seq__50354_50491__$1);
var G__50493 = cljs.core.chunk_rest(seq__50354_50491__$1);
var G__50494 = c__4649__auto___50492;
var G__50495 = cljs.core.count(c__4649__auto___50492);
var G__50496 = (0);
seq__50354_50471 = G__50493;
chunk__50358_50472 = G__50494;
count__50359_50473 = G__50495;
i__50360_50474 = G__50496;
continue;
} else {
var node_50497 = cljs.core.first(seq__50354_50491__$1);
if(cljs.core.not(node_50497.shadow$old)){
var path_match_50498 = shadow.cljs.devtools.client.browser.match_paths(node_50497.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50498)){
var new_link_50499 = (function (){var G__50367 = node_50497.cloneNode(true);
G__50367.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50498),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50367;
})();
(node_50497.shadow$old = true);

(new_link_50499.onload = ((function (seq__50354_50471,chunk__50358_50472,count__50359_50473,i__50360_50474,seq__50320,chunk__50322,count__50323,i__50324,new_link_50499,path_match_50498,node_50497,seq__50354_50491__$1,temp__5753__auto___50490,path,map__50319,map__50319__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50497);
});})(seq__50354_50471,chunk__50358_50472,count__50359_50473,i__50360_50474,seq__50320,chunk__50322,count__50323,i__50324,new_link_50499,path_match_50498,node_50497,seq__50354_50491__$1,temp__5753__auto___50490,path,map__50319,map__50319__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50498], 0));

goog.dom.insertSiblingAfter(new_link_50499,node_50497);


var G__50500 = cljs.core.next(seq__50354_50491__$1);
var G__50501 = null;
var G__50502 = (0);
var G__50503 = (0);
seq__50354_50471 = G__50500;
chunk__50358_50472 = G__50501;
count__50359_50473 = G__50502;
i__50360_50474 = G__50503;
continue;
} else {
var G__50504 = cljs.core.next(seq__50354_50491__$1);
var G__50505 = null;
var G__50506 = (0);
var G__50507 = (0);
seq__50354_50471 = G__50504;
chunk__50358_50472 = G__50505;
count__50359_50473 = G__50506;
i__50360_50474 = G__50507;
continue;
}
} else {
var G__50508 = cljs.core.next(seq__50354_50491__$1);
var G__50509 = null;
var G__50510 = (0);
var G__50511 = (0);
seq__50354_50471 = G__50508;
chunk__50358_50472 = G__50509;
count__50359_50473 = G__50510;
i__50360_50474 = G__50511;
continue;
}
}
} else {
}
}
break;
}


var G__50512 = seq__50320;
var G__50513 = chunk__50322;
var G__50514 = count__50323;
var G__50515 = (i__50324 + (1));
seq__50320 = G__50512;
chunk__50322 = G__50513;
count__50323 = G__50514;
i__50324 = G__50515;
continue;
} else {
var G__50516 = seq__50320;
var G__50517 = chunk__50322;
var G__50518 = count__50323;
var G__50519 = (i__50324 + (1));
seq__50320 = G__50516;
chunk__50322 = G__50517;
count__50323 = G__50518;
i__50324 = G__50519;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50320);
if(temp__5753__auto__){
var seq__50320__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50320__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50320__$1);
var G__50520 = cljs.core.chunk_rest(seq__50320__$1);
var G__50521 = c__4649__auto__;
var G__50522 = cljs.core.count(c__4649__auto__);
var G__50523 = (0);
seq__50320 = G__50520;
chunk__50322 = G__50521;
count__50323 = G__50522;
i__50324 = G__50523;
continue;
} else {
var path = cljs.core.first(seq__50320__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50368_50524 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50372_50525 = null;
var count__50373_50526 = (0);
var i__50374_50527 = (0);
while(true){
if((i__50374_50527 < count__50373_50526)){
var node_50528 = chunk__50372_50525.cljs$core$IIndexed$_nth$arity$2(null,i__50374_50527);
if(cljs.core.not(node_50528.shadow$old)){
var path_match_50529 = shadow.cljs.devtools.client.browser.match_paths(node_50528.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50529)){
var new_link_50530 = (function (){var G__50380 = node_50528.cloneNode(true);
G__50380.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50529),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50380;
})();
(node_50528.shadow$old = true);

(new_link_50530.onload = ((function (seq__50368_50524,chunk__50372_50525,count__50373_50526,i__50374_50527,seq__50320,chunk__50322,count__50323,i__50324,new_link_50530,path_match_50529,node_50528,path,seq__50320__$1,temp__5753__auto__,map__50319,map__50319__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50528);
});})(seq__50368_50524,chunk__50372_50525,count__50373_50526,i__50374_50527,seq__50320,chunk__50322,count__50323,i__50324,new_link_50530,path_match_50529,node_50528,path,seq__50320__$1,temp__5753__auto__,map__50319,map__50319__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50529], 0));

goog.dom.insertSiblingAfter(new_link_50530,node_50528);


var G__50531 = seq__50368_50524;
var G__50532 = chunk__50372_50525;
var G__50533 = count__50373_50526;
var G__50534 = (i__50374_50527 + (1));
seq__50368_50524 = G__50531;
chunk__50372_50525 = G__50532;
count__50373_50526 = G__50533;
i__50374_50527 = G__50534;
continue;
} else {
var G__50535 = seq__50368_50524;
var G__50536 = chunk__50372_50525;
var G__50537 = count__50373_50526;
var G__50538 = (i__50374_50527 + (1));
seq__50368_50524 = G__50535;
chunk__50372_50525 = G__50536;
count__50373_50526 = G__50537;
i__50374_50527 = G__50538;
continue;
}
} else {
var G__50539 = seq__50368_50524;
var G__50540 = chunk__50372_50525;
var G__50541 = count__50373_50526;
var G__50542 = (i__50374_50527 + (1));
seq__50368_50524 = G__50539;
chunk__50372_50525 = G__50540;
count__50373_50526 = G__50541;
i__50374_50527 = G__50542;
continue;
}
} else {
var temp__5753__auto___50543__$1 = cljs.core.seq(seq__50368_50524);
if(temp__5753__auto___50543__$1){
var seq__50368_50544__$1 = temp__5753__auto___50543__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50368_50544__$1)){
var c__4649__auto___50545 = cljs.core.chunk_first(seq__50368_50544__$1);
var G__50546 = cljs.core.chunk_rest(seq__50368_50544__$1);
var G__50547 = c__4649__auto___50545;
var G__50548 = cljs.core.count(c__4649__auto___50545);
var G__50549 = (0);
seq__50368_50524 = G__50546;
chunk__50372_50525 = G__50547;
count__50373_50526 = G__50548;
i__50374_50527 = G__50549;
continue;
} else {
var node_50550 = cljs.core.first(seq__50368_50544__$1);
if(cljs.core.not(node_50550.shadow$old)){
var path_match_50551 = shadow.cljs.devtools.client.browser.match_paths(node_50550.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50551)){
var new_link_50552 = (function (){var G__50381 = node_50550.cloneNode(true);
G__50381.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50551),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50381;
})();
(node_50550.shadow$old = true);

(new_link_50552.onload = ((function (seq__50368_50524,chunk__50372_50525,count__50373_50526,i__50374_50527,seq__50320,chunk__50322,count__50323,i__50324,new_link_50552,path_match_50551,node_50550,seq__50368_50544__$1,temp__5753__auto___50543__$1,path,seq__50320__$1,temp__5753__auto__,map__50319,map__50319__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50550);
});})(seq__50368_50524,chunk__50372_50525,count__50373_50526,i__50374_50527,seq__50320,chunk__50322,count__50323,i__50324,new_link_50552,path_match_50551,node_50550,seq__50368_50544__$1,temp__5753__auto___50543__$1,path,seq__50320__$1,temp__5753__auto__,map__50319,map__50319__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50551], 0));

goog.dom.insertSiblingAfter(new_link_50552,node_50550);


var G__50553 = cljs.core.next(seq__50368_50544__$1);
var G__50554 = null;
var G__50555 = (0);
var G__50556 = (0);
seq__50368_50524 = G__50553;
chunk__50372_50525 = G__50554;
count__50373_50526 = G__50555;
i__50374_50527 = G__50556;
continue;
} else {
var G__50557 = cljs.core.next(seq__50368_50544__$1);
var G__50558 = null;
var G__50559 = (0);
var G__50560 = (0);
seq__50368_50524 = G__50557;
chunk__50372_50525 = G__50558;
count__50373_50526 = G__50559;
i__50374_50527 = G__50560;
continue;
}
} else {
var G__50561 = cljs.core.next(seq__50368_50544__$1);
var G__50562 = null;
var G__50563 = (0);
var G__50564 = (0);
seq__50368_50524 = G__50561;
chunk__50372_50525 = G__50562;
count__50373_50526 = G__50563;
i__50374_50527 = G__50564;
continue;
}
}
} else {
}
}
break;
}


var G__50565 = cljs.core.next(seq__50320__$1);
var G__50566 = null;
var G__50567 = (0);
var G__50568 = (0);
seq__50320 = G__50565;
chunk__50322 = G__50566;
count__50323 = G__50567;
i__50324 = G__50568;
continue;
} else {
var G__50569 = cljs.core.next(seq__50320__$1);
var G__50570 = null;
var G__50571 = (0);
var G__50572 = (0);
seq__50320 = G__50569;
chunk__50322 = G__50570;
count__50323 = G__50571;
i__50324 = G__50572;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50382){
var map__50383 = p__50382;
var map__50383__$1 = cljs.core.__destructure_map(map__50383);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50383__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50384){
var map__50385 = p__50384;
var map__50385__$1 = cljs.core.__destructure_map(map__50385);
var _ = map__50385__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50385__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50386,done,error){
var map__50387 = p__50386;
var map__50387__$1 = cljs.core.__destructure_map(map__50387);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50387__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50388,done,error){
var map__50389 = p__50388;
var map__50389__$1 = cljs.core.__destructure_map(map__50389);
var msg = map__50389__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50390){
var map__50391 = p__50390;
var map__50391__$1 = cljs.core.__destructure_map(map__50391);
var src = map__50391__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50391__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50392 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50392) : done.call(null,G__50392));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50393){
var map__50394 = p__50393;
var map__50394__$1 = cljs.core.__destructure_map(map__50394);
var msg__$1 = map__50394__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50395){var ex = e50395;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50396){
var map__50397 = p__50396;
var map__50397__$1 = cljs.core.__destructure_map(map__50397);
var env = map__50397__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50397__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__50398){
var map__50399 = p__50398;
var map__50399__$1 = cljs.core.__destructure_map(map__50399);
var msg = map__50399__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50400){
var map__50401 = p__50400;
var map__50401__$1 = cljs.core.__destructure_map(map__50401);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__50402){
var map__50403 = p__50402;
var map__50403__$1 = cljs.core.__destructure_map(map__50403);
var svc = map__50403__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
