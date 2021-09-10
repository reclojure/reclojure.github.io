goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__63103 = arguments.length;
switch (G__63103) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63110 = (function (f,blockable,meta63111){
this.f = f;
this.blockable = blockable;
this.meta63111 = meta63111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63112,meta63111__$1){
var self__ = this;
var _63112__$1 = this;
return (new cljs.core.async.t_cljs$core$async63110(self__.f,self__.blockable,meta63111__$1));
}));

(cljs.core.async.t_cljs$core$async63110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63112){
var self__ = this;
var _63112__$1 = this;
return self__.meta63111;
}));

(cljs.core.async.t_cljs$core$async63110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async63110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async63110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta63111","meta63111",-1584171092,null)], null);
}));

(cljs.core.async.t_cljs$core$async63110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63110");

(cljs.core.async.t_cljs$core$async63110.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async63110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63110.
 */
cljs.core.async.__GT_t_cljs$core$async63110 = (function cljs$core$async$__GT_t_cljs$core$async63110(f__$1,blockable__$1,meta63111){
return (new cljs.core.async.t_cljs$core$async63110(f__$1,blockable__$1,meta63111));
});

}

return (new cljs.core.async.t_cljs$core$async63110(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__63201 = arguments.length;
switch (G__63201) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__63227 = arguments.length;
switch (G__63227) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__63238 = arguments.length;
switch (G__63238) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_66697 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_66697) : fn1.call(null,val_66697));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_66697) : fn1.call(null,val_66697));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__63310 = arguments.length;
switch (G__63310) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___66699 = n;
var x_66700 = (0);
while(true){
if((x_66700 < n__4706__auto___66699)){
(a[x_66700] = x_66700);

var G__66701 = (x_66700 + (1));
x_66700 = G__66701;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63344 = (function (flag,meta63345){
this.flag = flag;
this.meta63345 = meta63345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63346,meta63345__$1){
var self__ = this;
var _63346__$1 = this;
return (new cljs.core.async.t_cljs$core$async63344(self__.flag,meta63345__$1));
}));

(cljs.core.async.t_cljs$core$async63344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63346){
var self__ = this;
var _63346__$1 = this;
return self__.meta63345;
}));

(cljs.core.async.t_cljs$core$async63344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async63344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async63344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta63345","meta63345",1769281445,null)], null);
}));

(cljs.core.async.t_cljs$core$async63344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63344");

(cljs.core.async.t_cljs$core$async63344.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async63344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63344.
 */
cljs.core.async.__GT_t_cljs$core$async63344 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async63344(flag__$1,meta63345){
return (new cljs.core.async.t_cljs$core$async63344(flag__$1,meta63345));
});

}

return (new cljs.core.async.t_cljs$core$async63344(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63360 = (function (flag,cb,meta63361){
this.flag = flag;
this.cb = cb;
this.meta63361 = meta63361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63362,meta63361__$1){
var self__ = this;
var _63362__$1 = this;
return (new cljs.core.async.t_cljs$core$async63360(self__.flag,self__.cb,meta63361__$1));
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63362){
var self__ = this;
var _63362__$1 = this;
return self__.meta63361;
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async63360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta63361","meta63361",-590911024,null)], null);
}));

(cljs.core.async.t_cljs$core$async63360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63360");

(cljs.core.async.t_cljs$core$async63360.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async63360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63360.
 */
cljs.core.async.__GT_t_cljs$core$async63360 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async63360(flag__$1,cb__$1,meta63361){
return (new cljs.core.async.t_cljs$core$async63360(flag__$1,cb__$1,meta63361));
});

}

return (new cljs.core.async.t_cljs$core$async63360(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63381_SHARP_){
var G__63392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63381_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__63392) : fret.call(null,G__63392));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63382_SHARP_){
var G__63399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63382_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__63399) : fret.call(null,G__63399));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__66708 = (i + (1));
i = G__66708;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___66709 = arguments.length;
var i__4830__auto___66710 = (0);
while(true){
if((i__4830__auto___66710 < len__4829__auto___66709)){
args__4835__auto__.push((arguments[i__4830__auto___66710]));

var G__66711 = (i__4830__auto___66710 + (1));
i__4830__auto___66710 = G__66711;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__63432){
var map__63433 = p__63432;
var map__63433__$1 = cljs.core.__destructure_map(map__63433);
var opts = map__63433__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq63416){
var G__63417 = cljs.core.first(seq63416);
var seq63416__$1 = cljs.core.next(seq63416);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63417,seq63416__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__63449 = arguments.length;
switch (G__63449) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__62989__auto___66723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_63595){
var state_val_63596 = (state_63595[(1)]);
if((state_val_63596 === (7))){
var inst_63586 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
var statearr_63617_66727 = state_63595__$1;
(statearr_63617_66727[(2)] = inst_63586);

(statearr_63617_66727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (1))){
var state_63595__$1 = state_63595;
var statearr_63623_66728 = state_63595__$1;
(statearr_63623_66728[(2)] = null);

(statearr_63623_66728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (4))){
var inst_63542 = (state_63595[(7)]);
var inst_63542__$1 = (state_63595[(2)]);
var inst_63562 = (inst_63542__$1 == null);
var state_63595__$1 = (function (){var statearr_63631 = state_63595;
(statearr_63631[(7)] = inst_63542__$1);

return statearr_63631;
})();
if(cljs.core.truth_(inst_63562)){
var statearr_63632_66729 = state_63595__$1;
(statearr_63632_66729[(1)] = (5));

} else {
var statearr_63633_66730 = state_63595__$1;
(statearr_63633_66730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (13))){
var state_63595__$1 = state_63595;
var statearr_63635_66731 = state_63595__$1;
(statearr_63635_66731[(2)] = null);

(statearr_63635_66731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (6))){
var inst_63542 = (state_63595[(7)]);
var state_63595__$1 = state_63595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63595__$1,(11),to,inst_63542);
} else {
if((state_val_63596 === (3))){
var inst_63590 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63595__$1,inst_63590);
} else {
if((state_val_63596 === (12))){
var state_63595__$1 = state_63595;
var statearr_63639_66732 = state_63595__$1;
(statearr_63639_66732[(2)] = null);

(statearr_63639_66732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (2))){
var state_63595__$1 = state_63595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63595__$1,(4),from);
} else {
if((state_val_63596 === (11))){
var inst_63577 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
if(cljs.core.truth_(inst_63577)){
var statearr_63643_66740 = state_63595__$1;
(statearr_63643_66740[(1)] = (12));

} else {
var statearr_63644_66741 = state_63595__$1;
(statearr_63644_66741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (9))){
var state_63595__$1 = state_63595;
var statearr_63645_66742 = state_63595__$1;
(statearr_63645_66742[(2)] = null);

(statearr_63645_66742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (5))){
var state_63595__$1 = state_63595;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63646_66746 = state_63595__$1;
(statearr_63646_66746[(1)] = (8));

} else {
var statearr_63647_66748 = state_63595__$1;
(statearr_63647_66748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (14))){
var inst_63584 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
var statearr_63648_66749 = state_63595__$1;
(statearr_63648_66749[(2)] = inst_63584);

(statearr_63648_66749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (10))){
var inst_63574 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
var statearr_63649_66750 = state_63595__$1;
(statearr_63649_66750[(2)] = inst_63574);

(statearr_63649_66750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (8))){
var inst_63571 = cljs.core.async.close_BANG_(to);
var state_63595__$1 = state_63595;
var statearr_63650_66751 = state_63595__$1;
(statearr_63650_66751[(2)] = inst_63571);

(statearr_63650_66751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_63651 = [null,null,null,null,null,null,null,null];
(statearr_63651[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_63651[(1)] = (1));

return statearr_63651;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_63595){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_63595);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e63658){var ex__62376__auto__ = e63658;
var statearr_63659_66755 = state_63595;
(statearr_63659_66755[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_63595[(4)]))){
var statearr_63660_66756 = state_63595;
(statearr_63660_66756[(1)] = cljs.core.first((state_63595[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66758 = state_63595;
state_63595 = G__66758;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_63595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_63595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_63662 = f__62990__auto__();
(statearr_63662[(6)] = c__62989__auto___66723);

return statearr_63662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__63680){
var vec__63682 = p__63680;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63682,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63682,(1),null);
var job = vec__63682;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__62989__auto___66764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_63691){
var state_val_63692 = (state_63691[(1)]);
if((state_val_63692 === (1))){
var state_63691__$1 = state_63691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63691__$1,(2),res,v);
} else {
if((state_val_63692 === (2))){
var inst_63687 = (state_63691[(2)]);
var inst_63688 = cljs.core.async.close_BANG_(res);
var state_63691__$1 = (function (){var statearr_63707 = state_63691;
(statearr_63707[(7)] = inst_63687);

return statearr_63707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63691__$1,inst_63688);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0 = (function (){
var statearr_63709 = [null,null,null,null,null,null,null,null];
(statearr_63709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__);

(statearr_63709[(1)] = (1));

return statearr_63709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1 = (function (state_63691){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_63691);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e63712){var ex__62376__auto__ = e63712;
var statearr_63713_66772 = state_63691;
(statearr_63713_66772[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_63691[(4)]))){
var statearr_63715_66773 = state_63691;
(statearr_63715_66773[(1)] = cljs.core.first((state_63691[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66777 = state_63691;
state_63691 = G__66777;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = function(state_63691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1.call(this,state_63691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_63718 = f__62990__auto__();
(statearr_63718[(6)] = c__62989__auto___66764);

return statearr_63718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__63719){
var vec__63720 = p__63719;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63720,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63720,(1),null);
var job = vec__63720;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___66784 = n;
var __66786 = (0);
while(true){
if((__66786 < n__4706__auto___66784)){
var G__63723_66787 = type;
var G__63723_66788__$1 = (((G__63723_66787 instanceof cljs.core.Keyword))?G__63723_66787.fqn:null);
switch (G__63723_66788__$1) {
case "compute":
var c__62989__auto___66790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__66786,c__62989__auto___66790,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async){
return (function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = ((function (__66786,c__62989__auto___66790,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async){
return (function (state_63736){
var state_val_63737 = (state_63736[(1)]);
if((state_val_63737 === (1))){
var state_63736__$1 = state_63736;
var statearr_63738_66792 = state_63736__$1;
(statearr_63738_66792[(2)] = null);

(statearr_63738_66792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63737 === (2))){
var state_63736__$1 = state_63736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63736__$1,(4),jobs);
} else {
if((state_val_63737 === (3))){
var inst_63734 = (state_63736[(2)]);
var state_63736__$1 = state_63736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63736__$1,inst_63734);
} else {
if((state_val_63737 === (4))){
var inst_63726 = (state_63736[(2)]);
var inst_63727 = process(inst_63726);
var state_63736__$1 = state_63736;
if(cljs.core.truth_(inst_63727)){
var statearr_63741_66793 = state_63736__$1;
(statearr_63741_66793[(1)] = (5));

} else {
var statearr_63742_66794 = state_63736__$1;
(statearr_63742_66794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63737 === (5))){
var state_63736__$1 = state_63736;
var statearr_63746_66797 = state_63736__$1;
(statearr_63746_66797[(2)] = null);

(statearr_63746_66797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63737 === (6))){
var state_63736__$1 = state_63736;
var statearr_63747_66798 = state_63736__$1;
(statearr_63747_66798[(2)] = null);

(statearr_63747_66798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63737 === (7))){
var inst_63732 = (state_63736[(2)]);
var state_63736__$1 = state_63736;
var statearr_63748_66801 = state_63736__$1;
(statearr_63748_66801[(2)] = inst_63732);

(statearr_63748_66801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__66786,c__62989__auto___66790,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async))
;
return ((function (__66786,switch__62372__auto__,c__62989__auto___66790,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0 = (function (){
var statearr_63749 = [null,null,null,null,null,null,null];
(statearr_63749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__);

(statearr_63749[(1)] = (1));

return statearr_63749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1 = (function (state_63736){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_63736);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e63750){var ex__62376__auto__ = e63750;
var statearr_63751_66805 = state_63736;
(statearr_63751_66805[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_63736[(4)]))){
var statearr_63754_66806 = state_63736;
(statearr_63754_66806[(1)] = cljs.core.first((state_63736[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66807 = state_63736;
state_63736 = G__66807;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = function(state_63736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1.call(this,state_63736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__;
})()
;})(__66786,switch__62372__auto__,c__62989__auto___66790,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async))
})();
var state__62991__auto__ = (function (){var statearr_63758 = f__62990__auto__();
(statearr_63758[(6)] = c__62989__auto___66790);

return statearr_63758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
});})(__66786,c__62989__auto___66790,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async))
);


break;
case "async":
var c__62989__auto___66808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__66786,c__62989__auto___66808,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async){
return (function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = ((function (__66786,c__62989__auto___66808,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async){
return (function (state_63772){
var state_val_63773 = (state_63772[(1)]);
if((state_val_63773 === (1))){
var state_63772__$1 = state_63772;
var statearr_63774_66809 = state_63772__$1;
(statearr_63774_66809[(2)] = null);

(statearr_63774_66809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (2))){
var state_63772__$1 = state_63772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63772__$1,(4),jobs);
} else {
if((state_val_63773 === (3))){
var inst_63770 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63772__$1,inst_63770);
} else {
if((state_val_63773 === (4))){
var inst_63762 = (state_63772[(2)]);
var inst_63763 = async(inst_63762);
var state_63772__$1 = state_63772;
if(cljs.core.truth_(inst_63763)){
var statearr_63779_66810 = state_63772__$1;
(statearr_63779_66810[(1)] = (5));

} else {
var statearr_63781_66812 = state_63772__$1;
(statearr_63781_66812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (5))){
var state_63772__$1 = state_63772;
var statearr_63791_66814 = state_63772__$1;
(statearr_63791_66814[(2)] = null);

(statearr_63791_66814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (6))){
var state_63772__$1 = state_63772;
var statearr_63792_66820 = state_63772__$1;
(statearr_63792_66820[(2)] = null);

(statearr_63792_66820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (7))){
var inst_63768 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
var statearr_63793_66822 = state_63772__$1;
(statearr_63793_66822[(2)] = inst_63768);

(statearr_63793_66822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__66786,c__62989__auto___66808,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async))
;
return ((function (__66786,switch__62372__auto__,c__62989__auto___66808,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0 = (function (){
var statearr_63794 = [null,null,null,null,null,null,null];
(statearr_63794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__);

(statearr_63794[(1)] = (1));

return statearr_63794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1 = (function (state_63772){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_63772);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e63795){var ex__62376__auto__ = e63795;
var statearr_63796_66825 = state_63772;
(statearr_63796_66825[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_63772[(4)]))){
var statearr_63798_66829 = state_63772;
(statearr_63798_66829[(1)] = cljs.core.first((state_63772[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66830 = state_63772;
state_63772 = G__66830;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = function(state_63772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1.call(this,state_63772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__;
})()
;})(__66786,switch__62372__auto__,c__62989__auto___66808,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async))
})();
var state__62991__auto__ = (function (){var statearr_63800 = f__62990__auto__();
(statearr_63800[(6)] = c__62989__auto___66808);

return statearr_63800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
});})(__66786,c__62989__auto___66808,G__63723_66787,G__63723_66788__$1,n__4706__auto___66784,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63723_66788__$1)].join('')));

}

var G__66831 = (__66786 + (1));
__66786 = G__66831;
continue;
} else {
}
break;
}

var c__62989__auto___66832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_63828){
var state_val_63829 = (state_63828[(1)]);
if((state_val_63829 === (7))){
var inst_63824 = (state_63828[(2)]);
var state_63828__$1 = state_63828;
var statearr_63840_66838 = state_63828__$1;
(statearr_63840_66838[(2)] = inst_63824);

(statearr_63840_66838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63829 === (1))){
var state_63828__$1 = state_63828;
var statearr_63842_66840 = state_63828__$1;
(statearr_63842_66840[(2)] = null);

(statearr_63842_66840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63829 === (4))){
var inst_63808 = (state_63828[(7)]);
var inst_63808__$1 = (state_63828[(2)]);
var inst_63809 = (inst_63808__$1 == null);
var state_63828__$1 = (function (){var statearr_63844 = state_63828;
(statearr_63844[(7)] = inst_63808__$1);

return statearr_63844;
})();
if(cljs.core.truth_(inst_63809)){
var statearr_63845_66843 = state_63828__$1;
(statearr_63845_66843[(1)] = (5));

} else {
var statearr_63846_66844 = state_63828__$1;
(statearr_63846_66844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63829 === (6))){
var inst_63813 = (state_63828[(8)]);
var inst_63808 = (state_63828[(7)]);
var inst_63813__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_63815 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63816 = [inst_63808,inst_63813__$1];
var inst_63817 = (new cljs.core.PersistentVector(null,2,(5),inst_63815,inst_63816,null));
var state_63828__$1 = (function (){var statearr_63847 = state_63828;
(statearr_63847[(8)] = inst_63813__$1);

return statearr_63847;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63828__$1,(8),jobs,inst_63817);
} else {
if((state_val_63829 === (3))){
var inst_63826 = (state_63828[(2)]);
var state_63828__$1 = state_63828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63828__$1,inst_63826);
} else {
if((state_val_63829 === (2))){
var state_63828__$1 = state_63828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63828__$1,(4),from);
} else {
if((state_val_63829 === (9))){
var inst_63821 = (state_63828[(2)]);
var state_63828__$1 = (function (){var statearr_63848 = state_63828;
(statearr_63848[(9)] = inst_63821);

return statearr_63848;
})();
var statearr_63849_66850 = state_63828__$1;
(statearr_63849_66850[(2)] = null);

(statearr_63849_66850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63829 === (5))){
var inst_63811 = cljs.core.async.close_BANG_(jobs);
var state_63828__$1 = state_63828;
var statearr_63852_66853 = state_63828__$1;
(statearr_63852_66853[(2)] = inst_63811);

(statearr_63852_66853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63829 === (8))){
var inst_63813 = (state_63828[(8)]);
var inst_63819 = (state_63828[(2)]);
var state_63828__$1 = (function (){var statearr_63855 = state_63828;
(statearr_63855[(10)] = inst_63819);

return statearr_63855;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63828__$1,(9),results,inst_63813);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0 = (function (){
var statearr_63857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__);

(statearr_63857[(1)] = (1));

return statearr_63857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1 = (function (state_63828){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_63828);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e63859){var ex__62376__auto__ = e63859;
var statearr_63860_66857 = state_63828;
(statearr_63860_66857[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_63828[(4)]))){
var statearr_63861_66858 = state_63828;
(statearr_63861_66858[(1)] = cljs.core.first((state_63828[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66859 = state_63828;
state_63828 = G__66859;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = function(state_63828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1.call(this,state_63828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_63863 = f__62990__auto__();
(statearr_63863[(6)] = c__62989__auto___66832);

return statearr_63863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


var c__62989__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_63907){
var state_val_63908 = (state_63907[(1)]);
if((state_val_63908 === (7))){
var inst_63903 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
var statearr_63915_66865 = state_63907__$1;
(statearr_63915_66865[(2)] = inst_63903);

(statearr_63915_66865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (20))){
var state_63907__$1 = state_63907;
var statearr_63916_66868 = state_63907__$1;
(statearr_63916_66868[(2)] = null);

(statearr_63916_66868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (1))){
var state_63907__$1 = state_63907;
var statearr_63918_66869 = state_63907__$1;
(statearr_63918_66869[(2)] = null);

(statearr_63918_66869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (4))){
var inst_63869 = (state_63907[(7)]);
var inst_63869__$1 = (state_63907[(2)]);
var inst_63870 = (inst_63869__$1 == null);
var state_63907__$1 = (function (){var statearr_63921 = state_63907;
(statearr_63921[(7)] = inst_63869__$1);

return statearr_63921;
})();
if(cljs.core.truth_(inst_63870)){
var statearr_63922_66875 = state_63907__$1;
(statearr_63922_66875[(1)] = (5));

} else {
var statearr_63923_66876 = state_63907__$1;
(statearr_63923_66876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (15))){
var inst_63885 = (state_63907[(8)]);
var state_63907__$1 = state_63907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63907__$1,(18),to,inst_63885);
} else {
if((state_val_63908 === (21))){
var inst_63898 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
var statearr_63924_66877 = state_63907__$1;
(statearr_63924_66877[(2)] = inst_63898);

(statearr_63924_66877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (13))){
var inst_63900 = (state_63907[(2)]);
var state_63907__$1 = (function (){var statearr_63925 = state_63907;
(statearr_63925[(9)] = inst_63900);

return statearr_63925;
})();
var statearr_63927_66879 = state_63907__$1;
(statearr_63927_66879[(2)] = null);

(statearr_63927_66879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (6))){
var inst_63869 = (state_63907[(7)]);
var state_63907__$1 = state_63907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63907__$1,(11),inst_63869);
} else {
if((state_val_63908 === (17))){
var inst_63893 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
if(cljs.core.truth_(inst_63893)){
var statearr_63931_66883 = state_63907__$1;
(statearr_63931_66883[(1)] = (19));

} else {
var statearr_63933_66884 = state_63907__$1;
(statearr_63933_66884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (3))){
var inst_63905 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63907__$1,inst_63905);
} else {
if((state_val_63908 === (12))){
var inst_63880 = (state_63907[(10)]);
var state_63907__$1 = state_63907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63907__$1,(14),inst_63880);
} else {
if((state_val_63908 === (2))){
var state_63907__$1 = state_63907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63907__$1,(4),results);
} else {
if((state_val_63908 === (19))){
var state_63907__$1 = state_63907;
var statearr_63934_66887 = state_63907__$1;
(statearr_63934_66887[(2)] = null);

(statearr_63934_66887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (11))){
var inst_63880 = (state_63907[(2)]);
var state_63907__$1 = (function (){var statearr_63935 = state_63907;
(statearr_63935[(10)] = inst_63880);

return statearr_63935;
})();
var statearr_63943_66892 = state_63907__$1;
(statearr_63943_66892[(2)] = null);

(statearr_63943_66892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (9))){
var state_63907__$1 = state_63907;
var statearr_63945_66896 = state_63907__$1;
(statearr_63945_66896[(2)] = null);

(statearr_63945_66896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (5))){
var state_63907__$1 = state_63907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63949_66897 = state_63907__$1;
(statearr_63949_66897[(1)] = (8));

} else {
var statearr_63950_66898 = state_63907__$1;
(statearr_63950_66898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (14))){
var inst_63885 = (state_63907[(8)]);
var inst_63887 = (state_63907[(11)]);
var inst_63885__$1 = (state_63907[(2)]);
var inst_63886 = (inst_63885__$1 == null);
var inst_63887__$1 = cljs.core.not(inst_63886);
var state_63907__$1 = (function (){var statearr_63951 = state_63907;
(statearr_63951[(8)] = inst_63885__$1);

(statearr_63951[(11)] = inst_63887__$1);

return statearr_63951;
})();
if(inst_63887__$1){
var statearr_63954_66899 = state_63907__$1;
(statearr_63954_66899[(1)] = (15));

} else {
var statearr_63955_66900 = state_63907__$1;
(statearr_63955_66900[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (16))){
var inst_63887 = (state_63907[(11)]);
var state_63907__$1 = state_63907;
var statearr_63957_66901 = state_63907__$1;
(statearr_63957_66901[(2)] = inst_63887);

(statearr_63957_66901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (10))){
var inst_63877 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
var statearr_63958_66906 = state_63907__$1;
(statearr_63958_66906[(2)] = inst_63877);

(statearr_63958_66906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (18))){
var inst_63890 = (state_63907[(2)]);
var state_63907__$1 = state_63907;
var statearr_63959_66911 = state_63907__$1;
(statearr_63959_66911[(2)] = inst_63890);

(statearr_63959_66911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63908 === (8))){
var inst_63874 = cljs.core.async.close_BANG_(to);
var state_63907__$1 = state_63907;
var statearr_63960_66916 = state_63907__$1;
(statearr_63960_66916[(2)] = inst_63874);

(statearr_63960_66916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0 = (function (){
var statearr_63963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__);

(statearr_63963[(1)] = (1));

return statearr_63963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1 = (function (state_63907){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_63907);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e63964){var ex__62376__auto__ = e63964;
var statearr_63969_66934 = state_63907;
(statearr_63969_66934[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_63907[(4)]))){
var statearr_63970_66940 = state_63907;
(statearr_63970_66940[(1)] = cljs.core.first((state_63907[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66945 = state_63907;
state_63907 = G__66945;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__ = function(state_63907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1.call(this,state_63907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_63974 = f__62990__auto__();
(statearr_63974[(6)] = c__62989__auto__);

return statearr_63974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));

return c__62989__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__63978 = arguments.length;
switch (G__63978) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__63988 = arguments.length;
switch (G__63988) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__63997 = arguments.length;
switch (G__63997) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__62989__auto___66987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_64033){
var state_val_64034 = (state_64033[(1)]);
if((state_val_64034 === (7))){
var inst_64025 = (state_64033[(2)]);
var state_64033__$1 = state_64033;
var statearr_64037_66988 = state_64033__$1;
(statearr_64037_66988[(2)] = inst_64025);

(statearr_64037_66988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (1))){
var state_64033__$1 = state_64033;
var statearr_64038_66989 = state_64033__$1;
(statearr_64038_66989[(2)] = null);

(statearr_64038_66989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (4))){
var inst_64005 = (state_64033[(7)]);
var inst_64005__$1 = (state_64033[(2)]);
var inst_64006 = (inst_64005__$1 == null);
var state_64033__$1 = (function (){var statearr_64041 = state_64033;
(statearr_64041[(7)] = inst_64005__$1);

return statearr_64041;
})();
if(cljs.core.truth_(inst_64006)){
var statearr_64043_66994 = state_64033__$1;
(statearr_64043_66994[(1)] = (5));

} else {
var statearr_64044_66995 = state_64033__$1;
(statearr_64044_66995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (13))){
var state_64033__$1 = state_64033;
var statearr_64045_66996 = state_64033__$1;
(statearr_64045_66996[(2)] = null);

(statearr_64045_66996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (6))){
var inst_64005 = (state_64033[(7)]);
var inst_64011 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_64005) : p.call(null,inst_64005));
var state_64033__$1 = state_64033;
if(cljs.core.truth_(inst_64011)){
var statearr_64048_66997 = state_64033__$1;
(statearr_64048_66997[(1)] = (9));

} else {
var statearr_64049_66999 = state_64033__$1;
(statearr_64049_66999[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (3))){
var inst_64027 = (state_64033[(2)]);
var state_64033__$1 = state_64033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64033__$1,inst_64027);
} else {
if((state_val_64034 === (12))){
var state_64033__$1 = state_64033;
var statearr_64051_67002 = state_64033__$1;
(statearr_64051_67002[(2)] = null);

(statearr_64051_67002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (2))){
var state_64033__$1 = state_64033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64033__$1,(4),ch);
} else {
if((state_val_64034 === (11))){
var inst_64005 = (state_64033[(7)]);
var inst_64016 = (state_64033[(2)]);
var state_64033__$1 = state_64033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64033__$1,(8),inst_64016,inst_64005);
} else {
if((state_val_64034 === (9))){
var state_64033__$1 = state_64033;
var statearr_64054_67005 = state_64033__$1;
(statearr_64054_67005[(2)] = tc);

(statearr_64054_67005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (5))){
var inst_64008 = cljs.core.async.close_BANG_(tc);
var inst_64009 = cljs.core.async.close_BANG_(fc);
var state_64033__$1 = (function (){var statearr_64055 = state_64033;
(statearr_64055[(8)] = inst_64008);

return statearr_64055;
})();
var statearr_64058_67009 = state_64033__$1;
(statearr_64058_67009[(2)] = inst_64009);

(statearr_64058_67009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (14))){
var inst_64023 = (state_64033[(2)]);
var state_64033__$1 = state_64033;
var statearr_64061_67017 = state_64033__$1;
(statearr_64061_67017[(2)] = inst_64023);

(statearr_64061_67017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (10))){
var state_64033__$1 = state_64033;
var statearr_64062_67020 = state_64033__$1;
(statearr_64062_67020[(2)] = fc);

(statearr_64062_67020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64034 === (8))){
var inst_64018 = (state_64033[(2)]);
var state_64033__$1 = state_64033;
if(cljs.core.truth_(inst_64018)){
var statearr_64067_67026 = state_64033__$1;
(statearr_64067_67026[(1)] = (12));

} else {
var statearr_64068_67027 = state_64033__$1;
(statearr_64068_67027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_64070 = [null,null,null,null,null,null,null,null,null];
(statearr_64070[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_64070[(1)] = (1));

return statearr_64070;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_64033){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_64033);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e64072){var ex__62376__auto__ = e64072;
var statearr_64073_67033 = state_64033;
(statearr_64073_67033[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_64033[(4)]))){
var statearr_64074_67034 = state_64033;
(statearr_64074_67034[(1)] = cljs.core.first((state_64033[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67036 = state_64033;
state_64033 = G__67036;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_64033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_64033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_64079 = f__62990__auto__();
(statearr_64079[(6)] = c__62989__auto___66987);

return statearr_64079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__62989__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_64104){
var state_val_64105 = (state_64104[(1)]);
if((state_val_64105 === (7))){
var inst_64100 = (state_64104[(2)]);
var state_64104__$1 = state_64104;
var statearr_64106_67040 = state_64104__$1;
(statearr_64106_67040[(2)] = inst_64100);

(statearr_64106_67040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64105 === (1))){
var inst_64081 = init;
var inst_64082 = inst_64081;
var state_64104__$1 = (function (){var statearr_64107 = state_64104;
(statearr_64107[(7)] = inst_64082);

return statearr_64107;
})();
var statearr_64108_67041 = state_64104__$1;
(statearr_64108_67041[(2)] = null);

(statearr_64108_67041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64105 === (4))){
var inst_64085 = (state_64104[(8)]);
var inst_64085__$1 = (state_64104[(2)]);
var inst_64086 = (inst_64085__$1 == null);
var state_64104__$1 = (function (){var statearr_64110 = state_64104;
(statearr_64110[(8)] = inst_64085__$1);

return statearr_64110;
})();
if(cljs.core.truth_(inst_64086)){
var statearr_64113_67042 = state_64104__$1;
(statearr_64113_67042[(1)] = (5));

} else {
var statearr_64117_67044 = state_64104__$1;
(statearr_64117_67044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64105 === (6))){
var inst_64085 = (state_64104[(8)]);
var inst_64082 = (state_64104[(7)]);
var inst_64091 = (state_64104[(9)]);
var inst_64091__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_64082,inst_64085) : f.call(null,inst_64082,inst_64085));
var inst_64092 = cljs.core.reduced_QMARK_(inst_64091__$1);
var state_64104__$1 = (function (){var statearr_64119 = state_64104;
(statearr_64119[(9)] = inst_64091__$1);

return statearr_64119;
})();
if(inst_64092){
var statearr_64120_67049 = state_64104__$1;
(statearr_64120_67049[(1)] = (8));

} else {
var statearr_64121_67050 = state_64104__$1;
(statearr_64121_67050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64105 === (3))){
var inst_64102 = (state_64104[(2)]);
var state_64104__$1 = state_64104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64104__$1,inst_64102);
} else {
if((state_val_64105 === (2))){
var state_64104__$1 = state_64104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64104__$1,(4),ch);
} else {
if((state_val_64105 === (9))){
var inst_64091 = (state_64104[(9)]);
var inst_64082 = inst_64091;
var state_64104__$1 = (function (){var statearr_64130 = state_64104;
(statearr_64130[(7)] = inst_64082);

return statearr_64130;
})();
var statearr_64131_67056 = state_64104__$1;
(statearr_64131_67056[(2)] = null);

(statearr_64131_67056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64105 === (5))){
var inst_64082 = (state_64104[(7)]);
var state_64104__$1 = state_64104;
var statearr_64132_67060 = state_64104__$1;
(statearr_64132_67060[(2)] = inst_64082);

(statearr_64132_67060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64105 === (10))){
var inst_64098 = (state_64104[(2)]);
var state_64104__$1 = state_64104;
var statearr_64141_67061 = state_64104__$1;
(statearr_64141_67061[(2)] = inst_64098);

(statearr_64141_67061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64105 === (8))){
var inst_64091 = (state_64104[(9)]);
var inst_64094 = cljs.core.deref(inst_64091);
var state_64104__$1 = state_64104;
var statearr_64144_67063 = state_64104__$1;
(statearr_64144_67063[(2)] = inst_64094);

(statearr_64144_67063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__62373__auto__ = null;
var cljs$core$async$reduce_$_state_machine__62373__auto____0 = (function (){
var statearr_64149 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64149[(0)] = cljs$core$async$reduce_$_state_machine__62373__auto__);

(statearr_64149[(1)] = (1));

return statearr_64149;
});
var cljs$core$async$reduce_$_state_machine__62373__auto____1 = (function (state_64104){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_64104);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e64150){var ex__62376__auto__ = e64150;
var statearr_64151_67067 = state_64104;
(statearr_64151_67067[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_64104[(4)]))){
var statearr_64152_67068 = state_64104;
(statearr_64152_67068[(1)] = cljs.core.first((state_64104[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67069 = state_64104;
state_64104 = G__67069;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__62373__auto__ = function(state_64104){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__62373__auto____1.call(this,state_64104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__62373__auto____0;
cljs$core$async$reduce_$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__62373__auto____1;
return cljs$core$async$reduce_$_state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_64153 = f__62990__auto__();
(statearr_64153[(6)] = c__62989__auto__);

return statearr_64153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));

return c__62989__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__62989__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_64167){
var state_val_64168 = (state_64167[(1)]);
if((state_val_64168 === (1))){
var inst_64162 = cljs.core.async.reduce(f__$1,init,ch);
var state_64167__$1 = state_64167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64167__$1,(2),inst_64162);
} else {
if((state_val_64168 === (2))){
var inst_64164 = (state_64167[(2)]);
var inst_64165 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_64164) : f__$1.call(null,inst_64164));
var state_64167__$1 = state_64167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64167__$1,inst_64165);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__62373__auto__ = null;
var cljs$core$async$transduce_$_state_machine__62373__auto____0 = (function (){
var statearr_64172 = [null,null,null,null,null,null,null];
(statearr_64172[(0)] = cljs$core$async$transduce_$_state_machine__62373__auto__);

(statearr_64172[(1)] = (1));

return statearr_64172;
});
var cljs$core$async$transduce_$_state_machine__62373__auto____1 = (function (state_64167){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_64167);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e64174){var ex__62376__auto__ = e64174;
var statearr_64175_67079 = state_64167;
(statearr_64175_67079[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_64167[(4)]))){
var statearr_64176_67080 = state_64167;
(statearr_64176_67080[(1)] = cljs.core.first((state_64167[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67085 = state_64167;
state_64167 = G__67085;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__62373__auto__ = function(state_64167){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__62373__auto____1.call(this,state_64167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__62373__auto____0;
cljs$core$async$transduce_$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__62373__auto____1;
return cljs$core$async$transduce_$_state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_64177 = f__62990__auto__();
(statearr_64177[(6)] = c__62989__auto__);

return statearr_64177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));

return c__62989__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__64180 = arguments.length;
switch (G__64180) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__62989__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_64206){
var state_val_64207 = (state_64206[(1)]);
if((state_val_64207 === (7))){
var inst_64188 = (state_64206[(2)]);
var state_64206__$1 = state_64206;
var statearr_64219_67106 = state_64206__$1;
(statearr_64219_67106[(2)] = inst_64188);

(statearr_64219_67106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (1))){
var inst_64182 = cljs.core.seq(coll);
var inst_64183 = inst_64182;
var state_64206__$1 = (function (){var statearr_64221 = state_64206;
(statearr_64221[(7)] = inst_64183);

return statearr_64221;
})();
var statearr_64222_67109 = state_64206__$1;
(statearr_64222_67109[(2)] = null);

(statearr_64222_67109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (4))){
var inst_64183 = (state_64206[(7)]);
var inst_64186 = cljs.core.first(inst_64183);
var state_64206__$1 = state_64206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64206__$1,(7),ch,inst_64186);
} else {
if((state_val_64207 === (13))){
var inst_64200 = (state_64206[(2)]);
var state_64206__$1 = state_64206;
var statearr_64234_67114 = state_64206__$1;
(statearr_64234_67114[(2)] = inst_64200);

(statearr_64234_67114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (6))){
var inst_64191 = (state_64206[(2)]);
var state_64206__$1 = state_64206;
if(cljs.core.truth_(inst_64191)){
var statearr_64235_67117 = state_64206__$1;
(statearr_64235_67117[(1)] = (8));

} else {
var statearr_64236_67118 = state_64206__$1;
(statearr_64236_67118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (3))){
var inst_64204 = (state_64206[(2)]);
var state_64206__$1 = state_64206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64206__$1,inst_64204);
} else {
if((state_val_64207 === (12))){
var state_64206__$1 = state_64206;
var statearr_64237_67119 = state_64206__$1;
(statearr_64237_67119[(2)] = null);

(statearr_64237_67119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (2))){
var inst_64183 = (state_64206[(7)]);
var state_64206__$1 = state_64206;
if(cljs.core.truth_(inst_64183)){
var statearr_64238_67124 = state_64206__$1;
(statearr_64238_67124[(1)] = (4));

} else {
var statearr_64239_67126 = state_64206__$1;
(statearr_64239_67126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (11))){
var inst_64197 = cljs.core.async.close_BANG_(ch);
var state_64206__$1 = state_64206;
var statearr_64241_67129 = state_64206__$1;
(statearr_64241_67129[(2)] = inst_64197);

(statearr_64241_67129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (9))){
var state_64206__$1 = state_64206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64242_67131 = state_64206__$1;
(statearr_64242_67131[(1)] = (11));

} else {
var statearr_64243_67132 = state_64206__$1;
(statearr_64243_67132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (5))){
var inst_64183 = (state_64206[(7)]);
var state_64206__$1 = state_64206;
var statearr_64244_67135 = state_64206__$1;
(statearr_64244_67135[(2)] = inst_64183);

(statearr_64244_67135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (10))){
var inst_64202 = (state_64206[(2)]);
var state_64206__$1 = state_64206;
var statearr_64245_67137 = state_64206__$1;
(statearr_64245_67137[(2)] = inst_64202);

(statearr_64245_67137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64207 === (8))){
var inst_64183 = (state_64206[(7)]);
var inst_64193 = cljs.core.next(inst_64183);
var inst_64183__$1 = inst_64193;
var state_64206__$1 = (function (){var statearr_64248 = state_64206;
(statearr_64248[(7)] = inst_64183__$1);

return statearr_64248;
})();
var statearr_64249_67142 = state_64206__$1;
(statearr_64249_67142[(2)] = null);

(statearr_64249_67142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_64250 = [null,null,null,null,null,null,null,null];
(statearr_64250[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_64250[(1)] = (1));

return statearr_64250;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_64206){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_64206);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e64252){var ex__62376__auto__ = e64252;
var statearr_64253_67146 = state_64206;
(statearr_64253_67146[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_64206[(4)]))){
var statearr_64254_67147 = state_64206;
(statearr_64254_67147[(1)] = cljs.core.first((state_64206[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67149 = state_64206;
state_64206 = G__67149;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_64206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_64206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_64255 = f__62990__auto__();
(statearr_64255[(6)] = c__62989__auto__);

return statearr_64255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));

return c__62989__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__64260 = arguments.length;
switch (G__64260) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_67166 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_67166(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_67171 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_67171(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_67176 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_67176(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_67184 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_67184(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64299 = (function (ch,cs,meta64300){
this.ch = ch;
this.cs = cs;
this.meta64300 = meta64300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64301,meta64300__$1){
var self__ = this;
var _64301__$1 = this;
return (new cljs.core.async.t_cljs$core$async64299(self__.ch,self__.cs,meta64300__$1));
}));

(cljs.core.async.t_cljs$core$async64299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64301){
var self__ = this;
var _64301__$1 = this;
return self__.meta64300;
}));

(cljs.core.async.t_cljs$core$async64299.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async64299.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64299.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async64299.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async64299.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async64299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta64300","meta64300",-425500705,null)], null);
}));

(cljs.core.async.t_cljs$core$async64299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64299");

(cljs.core.async.t_cljs$core$async64299.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async64299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64299.
 */
cljs.core.async.__GT_t_cljs$core$async64299 = (function cljs$core$async$mult_$___GT_t_cljs$core$async64299(ch__$1,cs__$1,meta64300){
return (new cljs.core.async.t_cljs$core$async64299(ch__$1,cs__$1,meta64300));
});

}

return (new cljs.core.async.t_cljs$core$async64299(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__62989__auto___67205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_64447){
var state_val_64448 = (state_64447[(1)]);
if((state_val_64448 === (7))){
var inst_64443 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64452_67209 = state_64447__$1;
(statearr_64452_67209[(2)] = inst_64443);

(statearr_64452_67209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (20))){
var inst_64346 = (state_64447[(7)]);
var inst_64358 = cljs.core.first(inst_64346);
var inst_64359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64358,(0),null);
var inst_64360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64358,(1),null);
var state_64447__$1 = (function (){var statearr_64457 = state_64447;
(statearr_64457[(8)] = inst_64359);

return statearr_64457;
})();
if(cljs.core.truth_(inst_64360)){
var statearr_64458_67215 = state_64447__$1;
(statearr_64458_67215[(1)] = (22));

} else {
var statearr_64459_67216 = state_64447__$1;
(statearr_64459_67216[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (27))){
var inst_64391 = (state_64447[(9)]);
var inst_64389 = (state_64447[(10)]);
var inst_64311 = (state_64447[(11)]);
var inst_64397 = (state_64447[(12)]);
var inst_64397__$1 = cljs.core._nth(inst_64389,inst_64391);
var inst_64398 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_64397__$1,inst_64311,done);
var state_64447__$1 = (function (){var statearr_64462 = state_64447;
(statearr_64462[(12)] = inst_64397__$1);

return statearr_64462;
})();
if(cljs.core.truth_(inst_64398)){
var statearr_64463_67217 = state_64447__$1;
(statearr_64463_67217[(1)] = (30));

} else {
var statearr_64464_67218 = state_64447__$1;
(statearr_64464_67218[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (1))){
var state_64447__$1 = state_64447;
var statearr_64465_67219 = state_64447__$1;
(statearr_64465_67219[(2)] = null);

(statearr_64465_67219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (24))){
var inst_64346 = (state_64447[(7)]);
var inst_64365 = (state_64447[(2)]);
var inst_64366 = cljs.core.next(inst_64346);
var inst_64320 = inst_64366;
var inst_64321 = null;
var inst_64322 = (0);
var inst_64323 = (0);
var state_64447__$1 = (function (){var statearr_64466 = state_64447;
(statearr_64466[(13)] = inst_64320);

(statearr_64466[(14)] = inst_64322);

(statearr_64466[(15)] = inst_64323);

(statearr_64466[(16)] = inst_64365);

(statearr_64466[(17)] = inst_64321);

return statearr_64466;
})();
var statearr_64468_67224 = state_64447__$1;
(statearr_64468_67224[(2)] = null);

(statearr_64468_67224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (39))){
var state_64447__$1 = state_64447;
var statearr_64476_67225 = state_64447__$1;
(statearr_64476_67225[(2)] = null);

(statearr_64476_67225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (4))){
var inst_64311 = (state_64447[(11)]);
var inst_64311__$1 = (state_64447[(2)]);
var inst_64312 = (inst_64311__$1 == null);
var state_64447__$1 = (function (){var statearr_64479 = state_64447;
(statearr_64479[(11)] = inst_64311__$1);

return statearr_64479;
})();
if(cljs.core.truth_(inst_64312)){
var statearr_64480_67232 = state_64447__$1;
(statearr_64480_67232[(1)] = (5));

} else {
var statearr_64481_67233 = state_64447__$1;
(statearr_64481_67233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (15))){
var inst_64320 = (state_64447[(13)]);
var inst_64322 = (state_64447[(14)]);
var inst_64323 = (state_64447[(15)]);
var inst_64321 = (state_64447[(17)]);
var inst_64341 = (state_64447[(2)]);
var inst_64343 = (inst_64323 + (1));
var tmp64470 = inst_64320;
var tmp64471 = inst_64322;
var tmp64472 = inst_64321;
var inst_64320__$1 = tmp64470;
var inst_64321__$1 = tmp64472;
var inst_64322__$1 = tmp64471;
var inst_64323__$1 = inst_64343;
var state_64447__$1 = (function (){var statearr_64482 = state_64447;
(statearr_64482[(13)] = inst_64320__$1);

(statearr_64482[(14)] = inst_64322__$1);

(statearr_64482[(18)] = inst_64341);

(statearr_64482[(15)] = inst_64323__$1);

(statearr_64482[(17)] = inst_64321__$1);

return statearr_64482;
})();
var statearr_64484_67238 = state_64447__$1;
(statearr_64484_67238[(2)] = null);

(statearr_64484_67238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (21))){
var inst_64369 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64490_67240 = state_64447__$1;
(statearr_64490_67240[(2)] = inst_64369);

(statearr_64490_67240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (31))){
var inst_64397 = (state_64447[(12)]);
var inst_64401 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_64397);
var state_64447__$1 = state_64447;
var statearr_64491_67242 = state_64447__$1;
(statearr_64491_67242[(2)] = inst_64401);

(statearr_64491_67242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (32))){
var inst_64391 = (state_64447[(9)]);
var inst_64389 = (state_64447[(10)]);
var inst_64388 = (state_64447[(19)]);
var inst_64390 = (state_64447[(20)]);
var inst_64403 = (state_64447[(2)]);
var inst_64404 = (inst_64391 + (1));
var tmp64485 = inst_64389;
var tmp64486 = inst_64388;
var tmp64487 = inst_64390;
var inst_64388__$1 = tmp64486;
var inst_64389__$1 = tmp64485;
var inst_64390__$1 = tmp64487;
var inst_64391__$1 = inst_64404;
var state_64447__$1 = (function (){var statearr_64492 = state_64447;
(statearr_64492[(9)] = inst_64391__$1);

(statearr_64492[(21)] = inst_64403);

(statearr_64492[(10)] = inst_64389__$1);

(statearr_64492[(19)] = inst_64388__$1);

(statearr_64492[(20)] = inst_64390__$1);

return statearr_64492;
})();
var statearr_64493_67247 = state_64447__$1;
(statearr_64493_67247[(2)] = null);

(statearr_64493_67247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (40))){
var inst_64416 = (state_64447[(22)]);
var inst_64420 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_64416);
var state_64447__$1 = state_64447;
var statearr_64494_67250 = state_64447__$1;
(statearr_64494_67250[(2)] = inst_64420);

(statearr_64494_67250[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (33))){
var inst_64407 = (state_64447[(23)]);
var inst_64409 = cljs.core.chunked_seq_QMARK_(inst_64407);
var state_64447__$1 = state_64447;
if(inst_64409){
var statearr_64495_67255 = state_64447__$1;
(statearr_64495_67255[(1)] = (36));

} else {
var statearr_64496_67256 = state_64447__$1;
(statearr_64496_67256[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (13))){
var inst_64335 = (state_64447[(24)]);
var inst_64338 = cljs.core.async.close_BANG_(inst_64335);
var state_64447__$1 = state_64447;
var statearr_64498_67258 = state_64447__$1;
(statearr_64498_67258[(2)] = inst_64338);

(statearr_64498_67258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (22))){
var inst_64359 = (state_64447[(8)]);
var inst_64362 = cljs.core.async.close_BANG_(inst_64359);
var state_64447__$1 = state_64447;
var statearr_64500_67261 = state_64447__$1;
(statearr_64500_67261[(2)] = inst_64362);

(statearr_64500_67261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (36))){
var inst_64407 = (state_64447[(23)]);
var inst_64411 = cljs.core.chunk_first(inst_64407);
var inst_64412 = cljs.core.chunk_rest(inst_64407);
var inst_64413 = cljs.core.count(inst_64411);
var inst_64388 = inst_64412;
var inst_64389 = inst_64411;
var inst_64390 = inst_64413;
var inst_64391 = (0);
var state_64447__$1 = (function (){var statearr_64506 = state_64447;
(statearr_64506[(9)] = inst_64391);

(statearr_64506[(10)] = inst_64389);

(statearr_64506[(19)] = inst_64388);

(statearr_64506[(20)] = inst_64390);

return statearr_64506;
})();
var statearr_64507_67266 = state_64447__$1;
(statearr_64507_67266[(2)] = null);

(statearr_64507_67266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (41))){
var inst_64407 = (state_64447[(23)]);
var inst_64422 = (state_64447[(2)]);
var inst_64423 = cljs.core.next(inst_64407);
var inst_64388 = inst_64423;
var inst_64389 = null;
var inst_64390 = (0);
var inst_64391 = (0);
var state_64447__$1 = (function (){var statearr_64511 = state_64447;
(statearr_64511[(25)] = inst_64422);

(statearr_64511[(9)] = inst_64391);

(statearr_64511[(10)] = inst_64389);

(statearr_64511[(19)] = inst_64388);

(statearr_64511[(20)] = inst_64390);

return statearr_64511;
})();
var statearr_64516_67268 = state_64447__$1;
(statearr_64516_67268[(2)] = null);

(statearr_64516_67268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (43))){
var state_64447__$1 = state_64447;
var statearr_64518_67269 = state_64447__$1;
(statearr_64518_67269[(2)] = null);

(statearr_64518_67269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (29))){
var inst_64431 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64521_67272 = state_64447__$1;
(statearr_64521_67272[(2)] = inst_64431);

(statearr_64521_67272[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (44))){
var inst_64440 = (state_64447[(2)]);
var state_64447__$1 = (function (){var statearr_64524 = state_64447;
(statearr_64524[(26)] = inst_64440);

return statearr_64524;
})();
var statearr_64529_67280 = state_64447__$1;
(statearr_64529_67280[(2)] = null);

(statearr_64529_67280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (6))){
var inst_64379 = (state_64447[(27)]);
var inst_64378 = cljs.core.deref(cs);
var inst_64379__$1 = cljs.core.keys(inst_64378);
var inst_64380 = cljs.core.count(inst_64379__$1);
var inst_64381 = cljs.core.reset_BANG_(dctr,inst_64380);
var inst_64387 = cljs.core.seq(inst_64379__$1);
var inst_64388 = inst_64387;
var inst_64389 = null;
var inst_64390 = (0);
var inst_64391 = (0);
var state_64447__$1 = (function (){var statearr_64532 = state_64447;
(statearr_64532[(27)] = inst_64379__$1);

(statearr_64532[(9)] = inst_64391);

(statearr_64532[(10)] = inst_64389);

(statearr_64532[(28)] = inst_64381);

(statearr_64532[(19)] = inst_64388);

(statearr_64532[(20)] = inst_64390);

return statearr_64532;
})();
var statearr_64536_67285 = state_64447__$1;
(statearr_64536_67285[(2)] = null);

(statearr_64536_67285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (28))){
var inst_64407 = (state_64447[(23)]);
var inst_64388 = (state_64447[(19)]);
var inst_64407__$1 = cljs.core.seq(inst_64388);
var state_64447__$1 = (function (){var statearr_64538 = state_64447;
(statearr_64538[(23)] = inst_64407__$1);

return statearr_64538;
})();
if(inst_64407__$1){
var statearr_64540_67290 = state_64447__$1;
(statearr_64540_67290[(1)] = (33));

} else {
var statearr_64541_67291 = state_64447__$1;
(statearr_64541_67291[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (25))){
var inst_64391 = (state_64447[(9)]);
var inst_64390 = (state_64447[(20)]);
var inst_64393 = (inst_64391 < inst_64390);
var inst_64394 = inst_64393;
var state_64447__$1 = state_64447;
if(cljs.core.truth_(inst_64394)){
var statearr_64542_67294 = state_64447__$1;
(statearr_64542_67294[(1)] = (27));

} else {
var statearr_64543_67295 = state_64447__$1;
(statearr_64543_67295[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (34))){
var state_64447__$1 = state_64447;
var statearr_64546_67300 = state_64447__$1;
(statearr_64546_67300[(2)] = null);

(statearr_64546_67300[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (17))){
var state_64447__$1 = state_64447;
var statearr_64547_67302 = state_64447__$1;
(statearr_64547_67302[(2)] = null);

(statearr_64547_67302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (3))){
var inst_64445 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64447__$1,inst_64445);
} else {
if((state_val_64448 === (12))){
var inst_64374 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64550_67304 = state_64447__$1;
(statearr_64550_67304[(2)] = inst_64374);

(statearr_64550_67304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (2))){
var state_64447__$1 = state_64447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64447__$1,(4),ch);
} else {
if((state_val_64448 === (23))){
var state_64447__$1 = state_64447;
var statearr_64551_67308 = state_64447__$1;
(statearr_64551_67308[(2)] = null);

(statearr_64551_67308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (35))){
var inst_64429 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64553_67320 = state_64447__$1;
(statearr_64553_67320[(2)] = inst_64429);

(statearr_64553_67320[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (19))){
var inst_64346 = (state_64447[(7)]);
var inst_64350 = cljs.core.chunk_first(inst_64346);
var inst_64351 = cljs.core.chunk_rest(inst_64346);
var inst_64352 = cljs.core.count(inst_64350);
var inst_64320 = inst_64351;
var inst_64321 = inst_64350;
var inst_64322 = inst_64352;
var inst_64323 = (0);
var state_64447__$1 = (function (){var statearr_64554 = state_64447;
(statearr_64554[(13)] = inst_64320);

(statearr_64554[(14)] = inst_64322);

(statearr_64554[(15)] = inst_64323);

(statearr_64554[(17)] = inst_64321);

return statearr_64554;
})();
var statearr_64555_67322 = state_64447__$1;
(statearr_64555_67322[(2)] = null);

(statearr_64555_67322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (11))){
var inst_64320 = (state_64447[(13)]);
var inst_64346 = (state_64447[(7)]);
var inst_64346__$1 = cljs.core.seq(inst_64320);
var state_64447__$1 = (function (){var statearr_64560 = state_64447;
(statearr_64560[(7)] = inst_64346__$1);

return statearr_64560;
})();
if(inst_64346__$1){
var statearr_64561_67323 = state_64447__$1;
(statearr_64561_67323[(1)] = (16));

} else {
var statearr_64564_67324 = state_64447__$1;
(statearr_64564_67324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (9))){
var inst_64376 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64568_67325 = state_64447__$1;
(statearr_64568_67325[(2)] = inst_64376);

(statearr_64568_67325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (5))){
var inst_64318 = cljs.core.deref(cs);
var inst_64319 = cljs.core.seq(inst_64318);
var inst_64320 = inst_64319;
var inst_64321 = null;
var inst_64322 = (0);
var inst_64323 = (0);
var state_64447__$1 = (function (){var statearr_64569 = state_64447;
(statearr_64569[(13)] = inst_64320);

(statearr_64569[(14)] = inst_64322);

(statearr_64569[(15)] = inst_64323);

(statearr_64569[(17)] = inst_64321);

return statearr_64569;
})();
var statearr_64570_67331 = state_64447__$1;
(statearr_64570_67331[(2)] = null);

(statearr_64570_67331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (14))){
var state_64447__$1 = state_64447;
var statearr_64571_67336 = state_64447__$1;
(statearr_64571_67336[(2)] = null);

(statearr_64571_67336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (45))){
var inst_64437 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64576_67337 = state_64447__$1;
(statearr_64576_67337[(2)] = inst_64437);

(statearr_64576_67337[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (26))){
var inst_64379 = (state_64447[(27)]);
var inst_64433 = (state_64447[(2)]);
var inst_64434 = cljs.core.seq(inst_64379);
var state_64447__$1 = (function (){var statearr_64577 = state_64447;
(statearr_64577[(29)] = inst_64433);

return statearr_64577;
})();
if(inst_64434){
var statearr_64578_67342 = state_64447__$1;
(statearr_64578_67342[(1)] = (42));

} else {
var statearr_64579_67343 = state_64447__$1;
(statearr_64579_67343[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (16))){
var inst_64346 = (state_64447[(7)]);
var inst_64348 = cljs.core.chunked_seq_QMARK_(inst_64346);
var state_64447__$1 = state_64447;
if(inst_64348){
var statearr_64580_67346 = state_64447__$1;
(statearr_64580_67346[(1)] = (19));

} else {
var statearr_64581_67347 = state_64447__$1;
(statearr_64581_67347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (38))){
var inst_64426 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64582_67355 = state_64447__$1;
(statearr_64582_67355[(2)] = inst_64426);

(statearr_64582_67355[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (30))){
var state_64447__$1 = state_64447;
var statearr_64584_67358 = state_64447__$1;
(statearr_64584_67358[(2)] = null);

(statearr_64584_67358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (10))){
var inst_64323 = (state_64447[(15)]);
var inst_64321 = (state_64447[(17)]);
var inst_64334 = cljs.core._nth(inst_64321,inst_64323);
var inst_64335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64334,(0),null);
var inst_64336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64334,(1),null);
var state_64447__$1 = (function (){var statearr_64585 = state_64447;
(statearr_64585[(24)] = inst_64335);

return statearr_64585;
})();
if(cljs.core.truth_(inst_64336)){
var statearr_64589_67359 = state_64447__$1;
(statearr_64589_67359[(1)] = (13));

} else {
var statearr_64594_67360 = state_64447__$1;
(statearr_64594_67360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (18))){
var inst_64372 = (state_64447[(2)]);
var state_64447__$1 = state_64447;
var statearr_64601_67361 = state_64447__$1;
(statearr_64601_67361[(2)] = inst_64372);

(statearr_64601_67361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (42))){
var state_64447__$1 = state_64447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64447__$1,(45),dchan);
} else {
if((state_val_64448 === (37))){
var inst_64416 = (state_64447[(22)]);
var inst_64407 = (state_64447[(23)]);
var inst_64311 = (state_64447[(11)]);
var inst_64416__$1 = cljs.core.first(inst_64407);
var inst_64417 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_64416__$1,inst_64311,done);
var state_64447__$1 = (function (){var statearr_64607 = state_64447;
(statearr_64607[(22)] = inst_64416__$1);

return statearr_64607;
})();
if(cljs.core.truth_(inst_64417)){
var statearr_64612_67364 = state_64447__$1;
(statearr_64612_67364[(1)] = (39));

} else {
var statearr_64614_67365 = state_64447__$1;
(statearr_64614_67365[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64448 === (8))){
var inst_64322 = (state_64447[(14)]);
var inst_64323 = (state_64447[(15)]);
var inst_64325 = (inst_64323 < inst_64322);
var inst_64326 = inst_64325;
var state_64447__$1 = state_64447;
if(cljs.core.truth_(inst_64326)){
var statearr_64618_67367 = state_64447__$1;
(statearr_64618_67367[(1)] = (10));

} else {
var statearr_64619_67368 = state_64447__$1;
(statearr_64619_67368[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__62373__auto__ = null;
var cljs$core$async$mult_$_state_machine__62373__auto____0 = (function (){
var statearr_64621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64621[(0)] = cljs$core$async$mult_$_state_machine__62373__auto__);

(statearr_64621[(1)] = (1));

return statearr_64621;
});
var cljs$core$async$mult_$_state_machine__62373__auto____1 = (function (state_64447){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_64447);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e64624){var ex__62376__auto__ = e64624;
var statearr_64625_67372 = state_64447;
(statearr_64625_67372[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_64447[(4)]))){
var statearr_64629_67373 = state_64447;
(statearr_64629_67373[(1)] = cljs.core.first((state_64447[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67374 = state_64447;
state_64447 = G__67374;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__62373__auto__ = function(state_64447){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__62373__auto____1.call(this,state_64447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__62373__auto____0;
cljs$core$async$mult_$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__62373__auto____1;
return cljs$core$async$mult_$_state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_64634 = f__62990__auto__();
(statearr_64634[(6)] = c__62989__auto___67205);

return statearr_64634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__64642 = arguments.length;
switch (G__64642) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_67382 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_67382(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_67389 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_67389(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_67396 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_67396(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_67403 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_67403(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_67404 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_67404(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___67407 = arguments.length;
var i__4830__auto___67408 = (0);
while(true){
if((i__4830__auto___67408 < len__4829__auto___67407)){
args__4835__auto__.push((arguments[i__4830__auto___67408]));

var G__67409 = (i__4830__auto___67408 + (1));
i__4830__auto___67408 = G__67409;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__64755){
var map__64757 = p__64755;
var map__64757__$1 = cljs.core.__destructure_map(map__64757);
var opts = map__64757__$1;
var statearr_64758_67413 = state;
(statearr_64758_67413[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_64762_67414 = state;
(statearr_64762_67414[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_64764_67415 = state;
(statearr_64764_67415[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq64747){
var G__64748 = cljs.core.first(seq64747);
var seq64747__$1 = cljs.core.next(seq64747);
var G__64749 = cljs.core.first(seq64747__$1);
var seq64747__$2 = cljs.core.next(seq64747__$1);
var G__64750 = cljs.core.first(seq64747__$2);
var seq64747__$3 = cljs.core.next(seq64747__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64748,G__64749,G__64750,seq64747__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64794 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta64795){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta64795 = meta64795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64796,meta64795__$1){
var self__ = this;
var _64796__$1 = this;
return (new cljs.core.async.t_cljs$core$async64794(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta64795__$1));
}));

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64796){
var self__ = this;
var _64796__$1 = this;
return self__.meta64795;
}));

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64794.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta64795","meta64795",-1703491967,null)], null);
}));

(cljs.core.async.t_cljs$core$async64794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64794");

(cljs.core.async.t_cljs$core$async64794.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async64794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64794.
 */
cljs.core.async.__GT_t_cljs$core$async64794 = (function cljs$core$async$mix_$___GT_t_cljs$core$async64794(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64795){
return (new cljs.core.async.t_cljs$core$async64794(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64795));
});

}

return (new cljs.core.async.t_cljs$core$async64794(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62989__auto___67437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_64929){
var state_val_64930 = (state_64929[(1)]);
if((state_val_64930 === (7))){
var inst_64882 = (state_64929[(2)]);
var state_64929__$1 = state_64929;
if(cljs.core.truth_(inst_64882)){
var statearr_64934_67439 = state_64929__$1;
(statearr_64934_67439[(1)] = (8));

} else {
var statearr_64935_67443 = state_64929__$1;
(statearr_64935_67443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (20))){
var inst_64869 = (state_64929[(7)]);
var state_64929__$1 = state_64929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64929__$1,(23),out,inst_64869);
} else {
if((state_val_64930 === (1))){
var inst_64838 = calc_state();
var inst_64839 = cljs.core.__destructure_map(inst_64838);
var inst_64841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64839,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64839,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64839,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_64845 = inst_64838;
var state_64929__$1 = (function (){var statearr_64947 = state_64929;
(statearr_64947[(8)] = inst_64845);

(statearr_64947[(9)] = inst_64844);

(statearr_64947[(10)] = inst_64842);

(statearr_64947[(11)] = inst_64841);

return statearr_64947;
})();
var statearr_64951_67447 = state_64929__$1;
(statearr_64951_67447[(2)] = null);

(statearr_64951_67447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (24))){
var inst_64857 = (state_64929[(12)]);
var inst_64845 = inst_64857;
var state_64929__$1 = (function (){var statearr_64954 = state_64929;
(statearr_64954[(8)] = inst_64845);

return statearr_64954;
})();
var statearr_64957_67448 = state_64929__$1;
(statearr_64957_67448[(2)] = null);

(statearr_64957_67448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (4))){
var inst_64877 = (state_64929[(13)]);
var inst_64869 = (state_64929[(7)]);
var inst_64868 = (state_64929[(2)]);
var inst_64869__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64868,(0),null);
var inst_64870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64868,(1),null);
var inst_64877__$1 = (inst_64869__$1 == null);
var state_64929__$1 = (function (){var statearr_64963 = state_64929;
(statearr_64963[(13)] = inst_64877__$1);

(statearr_64963[(7)] = inst_64869__$1);

(statearr_64963[(14)] = inst_64870);

return statearr_64963;
})();
if(cljs.core.truth_(inst_64877__$1)){
var statearr_64966_67455 = state_64929__$1;
(statearr_64966_67455[(1)] = (5));

} else {
var statearr_64969_67457 = state_64929__$1;
(statearr_64969_67457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (15))){
var inst_64858 = (state_64929[(15)]);
var inst_64897 = (state_64929[(16)]);
var inst_64897__$1 = cljs.core.empty_QMARK_(inst_64858);
var state_64929__$1 = (function (){var statearr_64974 = state_64929;
(statearr_64974[(16)] = inst_64897__$1);

return statearr_64974;
})();
if(inst_64897__$1){
var statearr_64975_67458 = state_64929__$1;
(statearr_64975_67458[(1)] = (17));

} else {
var statearr_64976_67459 = state_64929__$1;
(statearr_64976_67459[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (21))){
var inst_64857 = (state_64929[(12)]);
var inst_64845 = inst_64857;
var state_64929__$1 = (function (){var statearr_64985 = state_64929;
(statearr_64985[(8)] = inst_64845);

return statearr_64985;
})();
var statearr_64986_67460 = state_64929__$1;
(statearr_64986_67460[(2)] = null);

(statearr_64986_67460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (13))){
var inst_64889 = (state_64929[(2)]);
var inst_64890 = calc_state();
var inst_64845 = inst_64890;
var state_64929__$1 = (function (){var statearr_64994 = state_64929;
(statearr_64994[(8)] = inst_64845);

(statearr_64994[(17)] = inst_64889);

return statearr_64994;
})();
var statearr_64997_67461 = state_64929__$1;
(statearr_64997_67461[(2)] = null);

(statearr_64997_67461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (22))){
var inst_64921 = (state_64929[(2)]);
var state_64929__$1 = state_64929;
var statearr_65003_67462 = state_64929__$1;
(statearr_65003_67462[(2)] = inst_64921);

(statearr_65003_67462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (6))){
var inst_64870 = (state_64929[(14)]);
var inst_64880 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64870,change);
var state_64929__$1 = state_64929;
var statearr_65008_67463 = state_64929__$1;
(statearr_65008_67463[(2)] = inst_64880);

(statearr_65008_67463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (25))){
var state_64929__$1 = state_64929;
var statearr_65015_67464 = state_64929__$1;
(statearr_65015_67464[(2)] = null);

(statearr_65015_67464[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (17))){
var inst_64859 = (state_64929[(18)]);
var inst_64870 = (state_64929[(14)]);
var inst_64900 = (inst_64859.cljs$core$IFn$_invoke$arity$1 ? inst_64859.cljs$core$IFn$_invoke$arity$1(inst_64870) : inst_64859.call(null,inst_64870));
var inst_64901 = cljs.core.not(inst_64900);
var state_64929__$1 = state_64929;
var statearr_65020_67465 = state_64929__$1;
(statearr_65020_67465[(2)] = inst_64901);

(statearr_65020_67465[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (3))){
var inst_64925 = (state_64929[(2)]);
var state_64929__$1 = state_64929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64929__$1,inst_64925);
} else {
if((state_val_64930 === (12))){
var state_64929__$1 = state_64929;
var statearr_65024_67466 = state_64929__$1;
(statearr_65024_67466[(2)] = null);

(statearr_65024_67466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (2))){
var inst_64845 = (state_64929[(8)]);
var inst_64857 = (state_64929[(12)]);
var inst_64857__$1 = cljs.core.__destructure_map(inst_64845);
var inst_64858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64857__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64857__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64857__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_64929__$1 = (function (){var statearr_65029 = state_64929;
(statearr_65029[(18)] = inst_64859);

(statearr_65029[(15)] = inst_64858);

(statearr_65029[(12)] = inst_64857__$1);

return statearr_65029;
})();
return cljs.core.async.ioc_alts_BANG_(state_64929__$1,(4),inst_64860);
} else {
if((state_val_64930 === (23))){
var inst_64911 = (state_64929[(2)]);
var state_64929__$1 = state_64929;
if(cljs.core.truth_(inst_64911)){
var statearr_65032_67469 = state_64929__$1;
(statearr_65032_67469[(1)] = (24));

} else {
var statearr_65033_67470 = state_64929__$1;
(statearr_65033_67470[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (19))){
var inst_64905 = (state_64929[(2)]);
var state_64929__$1 = state_64929;
var statearr_65041_67471 = state_64929__$1;
(statearr_65041_67471[(2)] = inst_64905);

(statearr_65041_67471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (11))){
var inst_64870 = (state_64929[(14)]);
var inst_64886 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_64870);
var state_64929__$1 = state_64929;
var statearr_65044_67478 = state_64929__$1;
(statearr_65044_67478[(2)] = inst_64886);

(statearr_65044_67478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (9))){
var inst_64858 = (state_64929[(15)]);
var inst_64870 = (state_64929[(14)]);
var inst_64894 = (state_64929[(19)]);
var inst_64894__$1 = (inst_64858.cljs$core$IFn$_invoke$arity$1 ? inst_64858.cljs$core$IFn$_invoke$arity$1(inst_64870) : inst_64858.call(null,inst_64870));
var state_64929__$1 = (function (){var statearr_65050 = state_64929;
(statearr_65050[(19)] = inst_64894__$1);

return statearr_65050;
})();
if(cljs.core.truth_(inst_64894__$1)){
var statearr_65053_67481 = state_64929__$1;
(statearr_65053_67481[(1)] = (14));

} else {
var statearr_65054_67482 = state_64929__$1;
(statearr_65054_67482[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (5))){
var inst_64877 = (state_64929[(13)]);
var state_64929__$1 = state_64929;
var statearr_65056_67483 = state_64929__$1;
(statearr_65056_67483[(2)] = inst_64877);

(statearr_65056_67483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (14))){
var inst_64894 = (state_64929[(19)]);
var state_64929__$1 = state_64929;
var statearr_65066_67484 = state_64929__$1;
(statearr_65066_67484[(2)] = inst_64894);

(statearr_65066_67484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (26))){
var inst_64917 = (state_64929[(2)]);
var state_64929__$1 = state_64929;
var statearr_65072_67485 = state_64929__$1;
(statearr_65072_67485[(2)] = inst_64917);

(statearr_65072_67485[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (16))){
var inst_64907 = (state_64929[(2)]);
var state_64929__$1 = state_64929;
if(cljs.core.truth_(inst_64907)){
var statearr_65086_67486 = state_64929__$1;
(statearr_65086_67486[(1)] = (20));

} else {
var statearr_65088_67487 = state_64929__$1;
(statearr_65088_67487[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (10))){
var inst_64923 = (state_64929[(2)]);
var state_64929__$1 = state_64929;
var statearr_65094_67488 = state_64929__$1;
(statearr_65094_67488[(2)] = inst_64923);

(statearr_65094_67488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (18))){
var inst_64897 = (state_64929[(16)]);
var state_64929__$1 = state_64929;
var statearr_65096_67489 = state_64929__$1;
(statearr_65096_67489[(2)] = inst_64897);

(statearr_65096_67489[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64930 === (8))){
var inst_64869 = (state_64929[(7)]);
var inst_64884 = (inst_64869 == null);
var state_64929__$1 = state_64929;
if(cljs.core.truth_(inst_64884)){
var statearr_65099_67490 = state_64929__$1;
(statearr_65099_67490[(1)] = (11));

} else {
var statearr_65101_67491 = state_64929__$1;
(statearr_65101_67491[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__62373__auto__ = null;
var cljs$core$async$mix_$_state_machine__62373__auto____0 = (function (){
var statearr_65112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65112[(0)] = cljs$core$async$mix_$_state_machine__62373__auto__);

(statearr_65112[(1)] = (1));

return statearr_65112;
});
var cljs$core$async$mix_$_state_machine__62373__auto____1 = (function (state_64929){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_64929);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e65117){var ex__62376__auto__ = e65117;
var statearr_65122_67493 = state_64929;
(statearr_65122_67493[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_64929[(4)]))){
var statearr_65125_67494 = state_64929;
(statearr_65125_67494[(1)] = cljs.core.first((state_64929[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67495 = state_64929;
state_64929 = G__67495;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__62373__auto__ = function(state_64929){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__62373__auto____1.call(this,state_64929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__62373__auto____0;
cljs$core$async$mix_$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__62373__auto____1;
return cljs$core$async$mix_$_state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_65131 = f__62990__auto__();
(statearr_65131[(6)] = c__62989__auto___67437);

return statearr_65131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_67497 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_67497(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_67498 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_67498(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_67500 = (function() {
var G__67501 = null;
var G__67501__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__67501__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__67501 = function(p,v){
switch(arguments.length){
case 1:
return G__67501__1.call(this,p);
case 2:
return G__67501__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67501.cljs$core$IFn$_invoke$arity$1 = G__67501__1;
G__67501.cljs$core$IFn$_invoke$arity$2 = G__67501__2;
return G__67501;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__65189 = arguments.length;
switch (G__65189) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_67500(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_67500(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__65209 = arguments.length;
switch (G__65209) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__65204_SHARP_){
if(cljs.core.truth_((p1__65204_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__65204_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__65204_SHARP_.call(null,topic)))){
return p1__65204_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__65204_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65232 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta65233){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta65233 = meta65233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65234,meta65233__$1){
var self__ = this;
var _65234__$1 = this;
return (new cljs.core.async.t_cljs$core$async65232(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta65233__$1));
}));

(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65234){
var self__ = this;
var _65234__$1 = this;
return self__.meta65233;
}));

(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async65232.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async65232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta65233","meta65233",2105293396,null)], null);
}));

(cljs.core.async.t_cljs$core$async65232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65232");

(cljs.core.async.t_cljs$core$async65232.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async65232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65232.
 */
cljs.core.async.__GT_t_cljs$core$async65232 = (function cljs$core$async$__GT_t_cljs$core$async65232(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta65233){
return (new cljs.core.async.t_cljs$core$async65232(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta65233));
});

}

return (new cljs.core.async.t_cljs$core$async65232(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62989__auto___67521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_65375){
var state_val_65376 = (state_65375[(1)]);
if((state_val_65376 === (7))){
var inst_65367 = (state_65375[(2)]);
var state_65375__$1 = state_65375;
var statearr_65378_67524 = state_65375__$1;
(statearr_65378_67524[(2)] = inst_65367);

(statearr_65378_67524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (20))){
var state_65375__$1 = state_65375;
var statearr_65379_67525 = state_65375__$1;
(statearr_65379_67525[(2)] = null);

(statearr_65379_67525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (1))){
var state_65375__$1 = state_65375;
var statearr_65390_67526 = state_65375__$1;
(statearr_65390_67526[(2)] = null);

(statearr_65390_67526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (24))){
var inst_65350 = (state_65375[(7)]);
var inst_65359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_65350);
var state_65375__$1 = state_65375;
var statearr_65402_67529 = state_65375__$1;
(statearr_65402_67529[(2)] = inst_65359);

(statearr_65402_67529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (4))){
var inst_65294 = (state_65375[(8)]);
var inst_65294__$1 = (state_65375[(2)]);
var inst_65295 = (inst_65294__$1 == null);
var state_65375__$1 = (function (){var statearr_65413 = state_65375;
(statearr_65413[(8)] = inst_65294__$1);

return statearr_65413;
})();
if(cljs.core.truth_(inst_65295)){
var statearr_65414_67530 = state_65375__$1;
(statearr_65414_67530[(1)] = (5));

} else {
var statearr_65415_67531 = state_65375__$1;
(statearr_65415_67531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (15))){
var inst_65342 = (state_65375[(2)]);
var state_65375__$1 = state_65375;
var statearr_65416_67532 = state_65375__$1;
(statearr_65416_67532[(2)] = inst_65342);

(statearr_65416_67532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (21))){
var inst_65364 = (state_65375[(2)]);
var state_65375__$1 = (function (){var statearr_65420 = state_65375;
(statearr_65420[(9)] = inst_65364);

return statearr_65420;
})();
var statearr_65421_67535 = state_65375__$1;
(statearr_65421_67535[(2)] = null);

(statearr_65421_67535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (13))){
var inst_65320 = (state_65375[(10)]);
var inst_65325 = cljs.core.chunked_seq_QMARK_(inst_65320);
var state_65375__$1 = state_65375;
if(inst_65325){
var statearr_65423_67536 = state_65375__$1;
(statearr_65423_67536[(1)] = (16));

} else {
var statearr_65424_67537 = state_65375__$1;
(statearr_65424_67537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (22))){
var inst_65356 = (state_65375[(2)]);
var state_65375__$1 = state_65375;
if(cljs.core.truth_(inst_65356)){
var statearr_65428_67544 = state_65375__$1;
(statearr_65428_67544[(1)] = (23));

} else {
var statearr_65429_67550 = state_65375__$1;
(statearr_65429_67550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (6))){
var inst_65294 = (state_65375[(8)]);
var inst_65350 = (state_65375[(7)]);
var inst_65352 = (state_65375[(11)]);
var inst_65350__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_65294) : topic_fn.call(null,inst_65294));
var inst_65351 = cljs.core.deref(mults);
var inst_65352__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65351,inst_65350__$1);
var state_65375__$1 = (function (){var statearr_65432 = state_65375;
(statearr_65432[(7)] = inst_65350__$1);

(statearr_65432[(11)] = inst_65352__$1);

return statearr_65432;
})();
if(cljs.core.truth_(inst_65352__$1)){
var statearr_65433_67560 = state_65375__$1;
(statearr_65433_67560[(1)] = (19));

} else {
var statearr_65434_67561 = state_65375__$1;
(statearr_65434_67561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (25))){
var inst_65361 = (state_65375[(2)]);
var state_65375__$1 = state_65375;
var statearr_65439_67562 = state_65375__$1;
(statearr_65439_67562[(2)] = inst_65361);

(statearr_65439_67562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (17))){
var inst_65320 = (state_65375[(10)]);
var inst_65333 = cljs.core.first(inst_65320);
var inst_65334 = cljs.core.async.muxch_STAR_(inst_65333);
var inst_65335 = cljs.core.async.close_BANG_(inst_65334);
var inst_65336 = cljs.core.next(inst_65320);
var inst_65305 = inst_65336;
var inst_65306 = null;
var inst_65307 = (0);
var inst_65308 = (0);
var state_65375__$1 = (function (){var statearr_65443 = state_65375;
(statearr_65443[(12)] = inst_65305);

(statearr_65443[(13)] = inst_65306);

(statearr_65443[(14)] = inst_65308);

(statearr_65443[(15)] = inst_65307);

(statearr_65443[(16)] = inst_65335);

return statearr_65443;
})();
var statearr_65445_67566 = state_65375__$1;
(statearr_65445_67566[(2)] = null);

(statearr_65445_67566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (3))){
var inst_65371 = (state_65375[(2)]);
var state_65375__$1 = state_65375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65375__$1,inst_65371);
} else {
if((state_val_65376 === (12))){
var inst_65344 = (state_65375[(2)]);
var state_65375__$1 = state_65375;
var statearr_65450_67567 = state_65375__$1;
(statearr_65450_67567[(2)] = inst_65344);

(statearr_65450_67567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (2))){
var state_65375__$1 = state_65375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65375__$1,(4),ch);
} else {
if((state_val_65376 === (23))){
var state_65375__$1 = state_65375;
var statearr_65451_67569 = state_65375__$1;
(statearr_65451_67569[(2)] = null);

(statearr_65451_67569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (19))){
var inst_65294 = (state_65375[(8)]);
var inst_65352 = (state_65375[(11)]);
var inst_65354 = cljs.core.async.muxch_STAR_(inst_65352);
var state_65375__$1 = state_65375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65375__$1,(22),inst_65354,inst_65294);
} else {
if((state_val_65376 === (11))){
var inst_65305 = (state_65375[(12)]);
var inst_65320 = (state_65375[(10)]);
var inst_65320__$1 = cljs.core.seq(inst_65305);
var state_65375__$1 = (function (){var statearr_65452 = state_65375;
(statearr_65452[(10)] = inst_65320__$1);

return statearr_65452;
})();
if(inst_65320__$1){
var statearr_65453_67577 = state_65375__$1;
(statearr_65453_67577[(1)] = (13));

} else {
var statearr_65454_67579 = state_65375__$1;
(statearr_65454_67579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (9))){
var inst_65346 = (state_65375[(2)]);
var state_65375__$1 = state_65375;
var statearr_65455_67580 = state_65375__$1;
(statearr_65455_67580[(2)] = inst_65346);

(statearr_65455_67580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (5))){
var inst_65302 = cljs.core.deref(mults);
var inst_65303 = cljs.core.vals(inst_65302);
var inst_65304 = cljs.core.seq(inst_65303);
var inst_65305 = inst_65304;
var inst_65306 = null;
var inst_65307 = (0);
var inst_65308 = (0);
var state_65375__$1 = (function (){var statearr_65461 = state_65375;
(statearr_65461[(12)] = inst_65305);

(statearr_65461[(13)] = inst_65306);

(statearr_65461[(14)] = inst_65308);

(statearr_65461[(15)] = inst_65307);

return statearr_65461;
})();
var statearr_65462_67581 = state_65375__$1;
(statearr_65462_67581[(2)] = null);

(statearr_65462_67581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (14))){
var state_65375__$1 = state_65375;
var statearr_65467_67582 = state_65375__$1;
(statearr_65467_67582[(2)] = null);

(statearr_65467_67582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (16))){
var inst_65320 = (state_65375[(10)]);
var inst_65328 = cljs.core.chunk_first(inst_65320);
var inst_65329 = cljs.core.chunk_rest(inst_65320);
var inst_65330 = cljs.core.count(inst_65328);
var inst_65305 = inst_65329;
var inst_65306 = inst_65328;
var inst_65307 = inst_65330;
var inst_65308 = (0);
var state_65375__$1 = (function (){var statearr_65469 = state_65375;
(statearr_65469[(12)] = inst_65305);

(statearr_65469[(13)] = inst_65306);

(statearr_65469[(14)] = inst_65308);

(statearr_65469[(15)] = inst_65307);

return statearr_65469;
})();
var statearr_65470_67583 = state_65375__$1;
(statearr_65470_67583[(2)] = null);

(statearr_65470_67583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (10))){
var inst_65305 = (state_65375[(12)]);
var inst_65306 = (state_65375[(13)]);
var inst_65308 = (state_65375[(14)]);
var inst_65307 = (state_65375[(15)]);
var inst_65313 = cljs.core._nth(inst_65306,inst_65308);
var inst_65314 = cljs.core.async.muxch_STAR_(inst_65313);
var inst_65315 = cljs.core.async.close_BANG_(inst_65314);
var inst_65316 = (inst_65308 + (1));
var tmp65464 = inst_65305;
var tmp65465 = inst_65306;
var tmp65466 = inst_65307;
var inst_65305__$1 = tmp65464;
var inst_65306__$1 = tmp65465;
var inst_65307__$1 = tmp65466;
var inst_65308__$1 = inst_65316;
var state_65375__$1 = (function (){var statearr_65471 = state_65375;
(statearr_65471[(12)] = inst_65305__$1);

(statearr_65471[(17)] = inst_65315);

(statearr_65471[(13)] = inst_65306__$1);

(statearr_65471[(14)] = inst_65308__$1);

(statearr_65471[(15)] = inst_65307__$1);

return statearr_65471;
})();
var statearr_65476_67591 = state_65375__$1;
(statearr_65476_67591[(2)] = null);

(statearr_65476_67591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (18))){
var inst_65339 = (state_65375[(2)]);
var state_65375__$1 = state_65375;
var statearr_65486_67592 = state_65375__$1;
(statearr_65486_67592[(2)] = inst_65339);

(statearr_65486_67592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65376 === (8))){
var inst_65308 = (state_65375[(14)]);
var inst_65307 = (state_65375[(15)]);
var inst_65310 = (inst_65308 < inst_65307);
var inst_65311 = inst_65310;
var state_65375__$1 = state_65375;
if(cljs.core.truth_(inst_65311)){
var statearr_65487_67593 = state_65375__$1;
(statearr_65487_67593[(1)] = (10));

} else {
var statearr_65488_67594 = state_65375__$1;
(statearr_65488_67594[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_65490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65490[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_65490[(1)] = (1));

return statearr_65490;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_65375){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_65375);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e65492){var ex__62376__auto__ = e65492;
var statearr_65493_67601 = state_65375;
(statearr_65493_67601[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_65375[(4)]))){
var statearr_65494_67602 = state_65375;
(statearr_65494_67602[(1)] = cljs.core.first((state_65375[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67603 = state_65375;
state_65375 = G__67603;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_65375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_65375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_65495 = f__62990__auto__();
(statearr_65495[(6)] = c__62989__auto___67521);

return statearr_65495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__65507 = arguments.length;
switch (G__65507) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__65509 = arguments.length;
switch (G__65509) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__65512 = arguments.length;
switch (G__65512) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__62989__auto___67614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_65562){
var state_val_65563 = (state_65562[(1)]);
if((state_val_65563 === (7))){
var state_65562__$1 = state_65562;
var statearr_65565_67615 = state_65562__$1;
(statearr_65565_67615[(2)] = null);

(statearr_65565_67615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (1))){
var state_65562__$1 = state_65562;
var statearr_65566_67616 = state_65562__$1;
(statearr_65566_67616[(2)] = null);

(statearr_65566_67616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (4))){
var inst_65521 = (state_65562[(7)]);
var inst_65520 = (state_65562[(8)]);
var inst_65523 = (inst_65521 < inst_65520);
var state_65562__$1 = state_65562;
if(cljs.core.truth_(inst_65523)){
var statearr_65567_67617 = state_65562__$1;
(statearr_65567_67617[(1)] = (6));

} else {
var statearr_65568_67618 = state_65562__$1;
(statearr_65568_67618[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (15))){
var inst_65548 = (state_65562[(9)]);
var inst_65553 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_65548);
var state_65562__$1 = state_65562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65562__$1,(17),out,inst_65553);
} else {
if((state_val_65563 === (13))){
var inst_65548 = (state_65562[(9)]);
var inst_65548__$1 = (state_65562[(2)]);
var inst_65549 = cljs.core.some(cljs.core.nil_QMARK_,inst_65548__$1);
var state_65562__$1 = (function (){var statearr_65572 = state_65562;
(statearr_65572[(9)] = inst_65548__$1);

return statearr_65572;
})();
if(cljs.core.truth_(inst_65549)){
var statearr_65573_67619 = state_65562__$1;
(statearr_65573_67619[(1)] = (14));

} else {
var statearr_65574_67620 = state_65562__$1;
(statearr_65574_67620[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (6))){
var state_65562__$1 = state_65562;
var statearr_65575_67621 = state_65562__$1;
(statearr_65575_67621[(2)] = null);

(statearr_65575_67621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (17))){
var inst_65555 = (state_65562[(2)]);
var state_65562__$1 = (function (){var statearr_65577 = state_65562;
(statearr_65577[(10)] = inst_65555);

return statearr_65577;
})();
var statearr_65578_67622 = state_65562__$1;
(statearr_65578_67622[(2)] = null);

(statearr_65578_67622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (3))){
var inst_65560 = (state_65562[(2)]);
var state_65562__$1 = state_65562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65562__$1,inst_65560);
} else {
if((state_val_65563 === (12))){
var _ = (function (){var statearr_65580 = state_65562;
(statearr_65580[(4)] = cljs.core.rest((state_65562[(4)])));

return statearr_65580;
})();
var state_65562__$1 = state_65562;
var ex65576 = (state_65562__$1[(2)]);
var statearr_65583_67623 = state_65562__$1;
(statearr_65583_67623[(5)] = ex65576);


if((ex65576 instanceof Object)){
var statearr_65587_67624 = state_65562__$1;
(statearr_65587_67624[(1)] = (11));

(statearr_65587_67624[(5)] = null);

} else {
throw ex65576;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (2))){
var inst_65519 = cljs.core.reset_BANG_(dctr,cnt);
var inst_65520 = cnt;
var inst_65521 = (0);
var state_65562__$1 = (function (){var statearr_65590 = state_65562;
(statearr_65590[(11)] = inst_65519);

(statearr_65590[(7)] = inst_65521);

(statearr_65590[(8)] = inst_65520);

return statearr_65590;
})();
var statearr_65591_67629 = state_65562__$1;
(statearr_65591_67629[(2)] = null);

(statearr_65591_67629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (11))){
var inst_65525 = (state_65562[(2)]);
var inst_65526 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_65562__$1 = (function (){var statearr_65592 = state_65562;
(statearr_65592[(12)] = inst_65525);

return statearr_65592;
})();
var statearr_65593_67638 = state_65562__$1;
(statearr_65593_67638[(2)] = inst_65526);

(statearr_65593_67638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (9))){
var inst_65521 = (state_65562[(7)]);
var _ = (function (){var statearr_65594 = state_65562;
(statearr_65594[(4)] = cljs.core.cons((12),(state_65562[(4)])));

return statearr_65594;
})();
var inst_65533 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_65521) : chs__$1.call(null,inst_65521));
var inst_65534 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_65521) : done.call(null,inst_65521));
var inst_65535 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_65533,inst_65534);
var ___$1 = (function (){var statearr_65595 = state_65562;
(statearr_65595[(4)] = cljs.core.rest((state_65562[(4)])));

return statearr_65595;
})();
var state_65562__$1 = state_65562;
var statearr_65596_67644 = state_65562__$1;
(statearr_65596_67644[(2)] = inst_65535);

(statearr_65596_67644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (5))){
var inst_65546 = (state_65562[(2)]);
var state_65562__$1 = (function (){var statearr_65603 = state_65562;
(statearr_65603[(13)] = inst_65546);

return statearr_65603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65562__$1,(13),dchan);
} else {
if((state_val_65563 === (14))){
var inst_65551 = cljs.core.async.close_BANG_(out);
var state_65562__$1 = state_65562;
var statearr_65608_67648 = state_65562__$1;
(statearr_65608_67648[(2)] = inst_65551);

(statearr_65608_67648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (16))){
var inst_65558 = (state_65562[(2)]);
var state_65562__$1 = state_65562;
var statearr_65614_67649 = state_65562__$1;
(statearr_65614_67649[(2)] = inst_65558);

(statearr_65614_67649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (10))){
var inst_65521 = (state_65562[(7)]);
var inst_65538 = (state_65562[(2)]);
var inst_65540 = (inst_65521 + (1));
var inst_65521__$1 = inst_65540;
var state_65562__$1 = (function (){var statearr_65616 = state_65562;
(statearr_65616[(7)] = inst_65521__$1);

(statearr_65616[(14)] = inst_65538);

return statearr_65616;
})();
var statearr_65618_67650 = state_65562__$1;
(statearr_65618_67650[(2)] = null);

(statearr_65618_67650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65563 === (8))){
var inst_65544 = (state_65562[(2)]);
var state_65562__$1 = state_65562;
var statearr_65619_67654 = state_65562__$1;
(statearr_65619_67654[(2)] = inst_65544);

(statearr_65619_67654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_65630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65630[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_65630[(1)] = (1));

return statearr_65630;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_65562){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_65562);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e65632){var ex__62376__auto__ = e65632;
var statearr_65634_67655 = state_65562;
(statearr_65634_67655[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_65562[(4)]))){
var statearr_65635_67656 = state_65562;
(statearr_65635_67656[(1)] = cljs.core.first((state_65562[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67657 = state_65562;
state_65562 = G__67657;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_65562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_65562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_65637 = f__62990__auto__();
(statearr_65637[(6)] = c__62989__auto___67614);

return statearr_65637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__65646 = arguments.length;
switch (G__65646) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62989__auto___67662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_65685){
var state_val_65686 = (state_65685[(1)]);
if((state_val_65686 === (7))){
var inst_65660 = (state_65685[(7)]);
var inst_65659 = (state_65685[(8)]);
var inst_65659__$1 = (state_65685[(2)]);
var inst_65660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65659__$1,(0),null);
var inst_65661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65659__$1,(1),null);
var inst_65662 = (inst_65660__$1 == null);
var state_65685__$1 = (function (){var statearr_65694 = state_65685;
(statearr_65694[(7)] = inst_65660__$1);

(statearr_65694[(9)] = inst_65661);

(statearr_65694[(8)] = inst_65659__$1);

return statearr_65694;
})();
if(cljs.core.truth_(inst_65662)){
var statearr_65697_67668 = state_65685__$1;
(statearr_65697_67668[(1)] = (8));

} else {
var statearr_65698_67669 = state_65685__$1;
(statearr_65698_67669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (1))){
var inst_65647 = cljs.core.vec(chs);
var inst_65648 = inst_65647;
var state_65685__$1 = (function (){var statearr_65701 = state_65685;
(statearr_65701[(10)] = inst_65648);

return statearr_65701;
})();
var statearr_65702_67670 = state_65685__$1;
(statearr_65702_67670[(2)] = null);

(statearr_65702_67670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (4))){
var inst_65648 = (state_65685[(10)]);
var state_65685__$1 = state_65685;
return cljs.core.async.ioc_alts_BANG_(state_65685__$1,(7),inst_65648);
} else {
if((state_val_65686 === (6))){
var inst_65681 = (state_65685[(2)]);
var state_65685__$1 = state_65685;
var statearr_65705_67671 = state_65685__$1;
(statearr_65705_67671[(2)] = inst_65681);

(statearr_65705_67671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (3))){
var inst_65683 = (state_65685[(2)]);
var state_65685__$1 = state_65685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65685__$1,inst_65683);
} else {
if((state_val_65686 === (2))){
var inst_65648 = (state_65685[(10)]);
var inst_65650 = cljs.core.count(inst_65648);
var inst_65651 = (inst_65650 > (0));
var state_65685__$1 = state_65685;
if(cljs.core.truth_(inst_65651)){
var statearr_65714_67673 = state_65685__$1;
(statearr_65714_67673[(1)] = (4));

} else {
var statearr_65715_67674 = state_65685__$1;
(statearr_65715_67674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (11))){
var inst_65648 = (state_65685[(10)]);
var inst_65674 = (state_65685[(2)]);
var tmp65709 = inst_65648;
var inst_65648__$1 = tmp65709;
var state_65685__$1 = (function (){var statearr_65716 = state_65685;
(statearr_65716[(11)] = inst_65674);

(statearr_65716[(10)] = inst_65648__$1);

return statearr_65716;
})();
var statearr_65718_67675 = state_65685__$1;
(statearr_65718_67675[(2)] = null);

(statearr_65718_67675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (9))){
var inst_65660 = (state_65685[(7)]);
var state_65685__$1 = state_65685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65685__$1,(11),out,inst_65660);
} else {
if((state_val_65686 === (5))){
var inst_65679 = cljs.core.async.close_BANG_(out);
var state_65685__$1 = state_65685;
var statearr_65727_67676 = state_65685__$1;
(statearr_65727_67676[(2)] = inst_65679);

(statearr_65727_67676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (10))){
var inst_65677 = (state_65685[(2)]);
var state_65685__$1 = state_65685;
var statearr_65729_67678 = state_65685__$1;
(statearr_65729_67678[(2)] = inst_65677);

(statearr_65729_67678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65686 === (8))){
var inst_65660 = (state_65685[(7)]);
var inst_65661 = (state_65685[(9)]);
var inst_65659 = (state_65685[(8)]);
var inst_65648 = (state_65685[(10)]);
var inst_65669 = (function (){var cs = inst_65648;
var vec__65655 = inst_65659;
var v = inst_65660;
var c = inst_65661;
return (function (p1__65643_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__65643_SHARP_);
});
})();
var inst_65670 = cljs.core.filterv(inst_65669,inst_65648);
var inst_65648__$1 = inst_65670;
var state_65685__$1 = (function (){var statearr_65736 = state_65685;
(statearr_65736[(10)] = inst_65648__$1);

return statearr_65736;
})();
var statearr_65737_67680 = state_65685__$1;
(statearr_65737_67680[(2)] = null);

(statearr_65737_67680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_65745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65745[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_65745[(1)] = (1));

return statearr_65745;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_65685){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_65685);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e65760){var ex__62376__auto__ = e65760;
var statearr_65761_67681 = state_65685;
(statearr_65761_67681[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_65685[(4)]))){
var statearr_65763_67682 = state_65685;
(statearr_65763_67682[(1)] = cljs.core.first((state_65685[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67683 = state_65685;
state_65685 = G__67683;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_65685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_65685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_65776 = f__62990__auto__();
(statearr_65776[(6)] = c__62989__auto___67662);

return statearr_65776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__65793 = arguments.length;
switch (G__65793) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62989__auto___67690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_65824){
var state_val_65825 = (state_65824[(1)]);
if((state_val_65825 === (7))){
var inst_65803 = (state_65824[(7)]);
var inst_65803__$1 = (state_65824[(2)]);
var inst_65804 = (inst_65803__$1 == null);
var inst_65805 = cljs.core.not(inst_65804);
var state_65824__$1 = (function (){var statearr_65831 = state_65824;
(statearr_65831[(7)] = inst_65803__$1);

return statearr_65831;
})();
if(inst_65805){
var statearr_65832_67691 = state_65824__$1;
(statearr_65832_67691[(1)] = (8));

} else {
var statearr_65836_67692 = state_65824__$1;
(statearr_65836_67692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65825 === (1))){
var inst_65794 = (0);
var state_65824__$1 = (function (){var statearr_65837 = state_65824;
(statearr_65837[(8)] = inst_65794);

return statearr_65837;
})();
var statearr_65838_67693 = state_65824__$1;
(statearr_65838_67693[(2)] = null);

(statearr_65838_67693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65825 === (4))){
var state_65824__$1 = state_65824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65824__$1,(7),ch);
} else {
if((state_val_65825 === (6))){
var inst_65819 = (state_65824[(2)]);
var state_65824__$1 = state_65824;
var statearr_65841_67694 = state_65824__$1;
(statearr_65841_67694[(2)] = inst_65819);

(statearr_65841_67694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65825 === (3))){
var inst_65821 = (state_65824[(2)]);
var inst_65822 = cljs.core.async.close_BANG_(out);
var state_65824__$1 = (function (){var statearr_65846 = state_65824;
(statearr_65846[(9)] = inst_65821);

return statearr_65846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65824__$1,inst_65822);
} else {
if((state_val_65825 === (2))){
var inst_65794 = (state_65824[(8)]);
var inst_65796 = (inst_65794 < n);
var state_65824__$1 = state_65824;
if(cljs.core.truth_(inst_65796)){
var statearr_65847_67695 = state_65824__$1;
(statearr_65847_67695[(1)] = (4));

} else {
var statearr_65848_67696 = state_65824__$1;
(statearr_65848_67696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65825 === (11))){
var inst_65794 = (state_65824[(8)]);
var inst_65811 = (state_65824[(2)]);
var inst_65812 = (inst_65794 + (1));
var inst_65794__$1 = inst_65812;
var state_65824__$1 = (function (){var statearr_65849 = state_65824;
(statearr_65849[(8)] = inst_65794__$1);

(statearr_65849[(10)] = inst_65811);

return statearr_65849;
})();
var statearr_65850_67697 = state_65824__$1;
(statearr_65850_67697[(2)] = null);

(statearr_65850_67697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65825 === (9))){
var state_65824__$1 = state_65824;
var statearr_65851_67698 = state_65824__$1;
(statearr_65851_67698[(2)] = null);

(statearr_65851_67698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65825 === (5))){
var state_65824__$1 = state_65824;
var statearr_65852_67699 = state_65824__$1;
(statearr_65852_67699[(2)] = null);

(statearr_65852_67699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65825 === (10))){
var inst_65816 = (state_65824[(2)]);
var state_65824__$1 = state_65824;
var statearr_65853_67700 = state_65824__$1;
(statearr_65853_67700[(2)] = inst_65816);

(statearr_65853_67700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65825 === (8))){
var inst_65803 = (state_65824[(7)]);
var state_65824__$1 = state_65824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65824__$1,(11),out,inst_65803);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_65858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65858[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_65858[(1)] = (1));

return statearr_65858;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_65824){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_65824);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e65859){var ex__62376__auto__ = e65859;
var statearr_65860_67701 = state_65824;
(statearr_65860_67701[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_65824[(4)]))){
var statearr_65861_67702 = state_65824;
(statearr_65861_67702[(1)] = cljs.core.first((state_65824[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67703 = state_65824;
state_65824 = G__67703;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_65824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_65824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_65867 = f__62990__auto__();
(statearr_65867[(6)] = c__62989__auto___67690);

return statearr_65867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65873 = (function (f,ch,meta65874){
this.f = f;
this.ch = ch;
this.meta65874 = meta65874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65875,meta65874__$1){
var self__ = this;
var _65875__$1 = this;
return (new cljs.core.async.t_cljs$core$async65873(self__.f,self__.ch,meta65874__$1));
}));

(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65875){
var self__ = this;
var _65875__$1 = this;
return self__.meta65874;
}));

(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65888 = (function (f,ch,meta65874,_,fn1,meta65889){
this.f = f;
this.ch = ch;
this.meta65874 = meta65874;
this._ = _;
this.fn1 = fn1;
this.meta65889 = meta65889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65890,meta65889__$1){
var self__ = this;
var _65890__$1 = this;
return (new cljs.core.async.t_cljs$core$async65888(self__.f,self__.ch,self__.meta65874,self__._,self__.fn1,meta65889__$1));
}));

(cljs.core.async.t_cljs$core$async65888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65890){
var self__ = this;
var _65890__$1 = this;
return self__.meta65889;
}));

(cljs.core.async.t_cljs$core$async65888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async65888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async65888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__65869_SHARP_){
var G__65906 = (((p1__65869_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__65869_SHARP_) : self__.f.call(null,p1__65869_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__65906) : f1.call(null,G__65906));
});
}));

(cljs.core.async.t_cljs$core$async65888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65874","meta65874",1660768481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async65873","cljs.core.async/t_cljs$core$async65873",1342227637,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta65889","meta65889",-1911056046,null)], null);
}));

(cljs.core.async.t_cljs$core$async65888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65888");

(cljs.core.async.t_cljs$core$async65888.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async65888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65888.
 */
cljs.core.async.__GT_t_cljs$core$async65888 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async65888(f__$1,ch__$1,meta65874__$1,___$2,fn1__$1,meta65889){
return (new cljs.core.async.t_cljs$core$async65888(f__$1,ch__$1,meta65874__$1,___$2,fn1__$1,meta65889));
});

}

return (new cljs.core.async.t_cljs$core$async65888(self__.f,self__.ch,self__.meta65874,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__65914 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__65914) : self__.f.call(null,G__65914));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async65873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65874","meta65874",1660768481,null)], null);
}));

(cljs.core.async.t_cljs$core$async65873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65873");

(cljs.core.async.t_cljs$core$async65873.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async65873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65873.
 */
cljs.core.async.__GT_t_cljs$core$async65873 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async65873(f__$1,ch__$1,meta65874){
return (new cljs.core.async.t_cljs$core$async65873(f__$1,ch__$1,meta65874));
});

}

return (new cljs.core.async.t_cljs$core$async65873(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65917 = (function (f,ch,meta65918){
this.f = f;
this.ch = ch;
this.meta65918 = meta65918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65919,meta65918__$1){
var self__ = this;
var _65919__$1 = this;
return (new cljs.core.async.t_cljs$core$async65917(self__.f,self__.ch,meta65918__$1));
}));

(cljs.core.async.t_cljs$core$async65917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65919){
var self__ = this;
var _65919__$1 = this;
return self__.meta65918;
}));

(cljs.core.async.t_cljs$core$async65917.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65917.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async65917.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async65917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65918","meta65918",1095911643,null)], null);
}));

(cljs.core.async.t_cljs$core$async65917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65917");

(cljs.core.async.t_cljs$core$async65917.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async65917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65917.
 */
cljs.core.async.__GT_t_cljs$core$async65917 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async65917(f__$1,ch__$1,meta65918){
return (new cljs.core.async.t_cljs$core$async65917(f__$1,ch__$1,meta65918));
});

}

return (new cljs.core.async.t_cljs$core$async65917(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65939 = (function (p,ch,meta65940){
this.p = p;
this.ch = ch;
this.meta65940 = meta65940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65941,meta65940__$1){
var self__ = this;
var _65941__$1 = this;
return (new cljs.core.async.t_cljs$core$async65939(self__.p,self__.ch,meta65940__$1));
}));

(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65941){
var self__ = this;
var _65941__$1 = this;
return self__.meta65940;
}));

(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async65939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta65940","meta65940",-1497588528,null)], null);
}));

(cljs.core.async.t_cljs$core$async65939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65939");

(cljs.core.async.t_cljs$core$async65939.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async65939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65939.
 */
cljs.core.async.__GT_t_cljs$core$async65939 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async65939(p__$1,ch__$1,meta65940){
return (new cljs.core.async.t_cljs$core$async65939(p__$1,ch__$1,meta65940));
});

}

return (new cljs.core.async.t_cljs$core$async65939(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__65956 = arguments.length;
switch (G__65956) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62989__auto___67733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_65984){
var state_val_65985 = (state_65984[(1)]);
if((state_val_65985 === (7))){
var inst_65980 = (state_65984[(2)]);
var state_65984__$1 = state_65984;
var statearr_65990_67734 = state_65984__$1;
(statearr_65990_67734[(2)] = inst_65980);

(statearr_65990_67734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65985 === (1))){
var state_65984__$1 = state_65984;
var statearr_65991_67735 = state_65984__$1;
(statearr_65991_67735[(2)] = null);

(statearr_65991_67735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65985 === (4))){
var inst_65965 = (state_65984[(7)]);
var inst_65965__$1 = (state_65984[(2)]);
var inst_65967 = (inst_65965__$1 == null);
var state_65984__$1 = (function (){var statearr_65994 = state_65984;
(statearr_65994[(7)] = inst_65965__$1);

return statearr_65994;
})();
if(cljs.core.truth_(inst_65967)){
var statearr_65996_67736 = state_65984__$1;
(statearr_65996_67736[(1)] = (5));

} else {
var statearr_65999_67737 = state_65984__$1;
(statearr_65999_67737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65985 === (6))){
var inst_65965 = (state_65984[(7)]);
var inst_65971 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_65965) : p.call(null,inst_65965));
var state_65984__$1 = state_65984;
if(cljs.core.truth_(inst_65971)){
var statearr_66001_67738 = state_65984__$1;
(statearr_66001_67738[(1)] = (8));

} else {
var statearr_66002_67739 = state_65984__$1;
(statearr_66002_67739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65985 === (3))){
var inst_65982 = (state_65984[(2)]);
var state_65984__$1 = state_65984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65984__$1,inst_65982);
} else {
if((state_val_65985 === (2))){
var state_65984__$1 = state_65984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65984__$1,(4),ch);
} else {
if((state_val_65985 === (11))){
var inst_65974 = (state_65984[(2)]);
var state_65984__$1 = state_65984;
var statearr_66007_67740 = state_65984__$1;
(statearr_66007_67740[(2)] = inst_65974);

(statearr_66007_67740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65985 === (9))){
var state_65984__$1 = state_65984;
var statearr_66012_67741 = state_65984__$1;
(statearr_66012_67741[(2)] = null);

(statearr_66012_67741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65985 === (5))){
var inst_65969 = cljs.core.async.close_BANG_(out);
var state_65984__$1 = state_65984;
var statearr_66016_67742 = state_65984__$1;
(statearr_66016_67742[(2)] = inst_65969);

(statearr_66016_67742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65985 === (10))){
var inst_65977 = (state_65984[(2)]);
var state_65984__$1 = (function (){var statearr_66018 = state_65984;
(statearr_66018[(8)] = inst_65977);

return statearr_66018;
})();
var statearr_66019_67743 = state_65984__$1;
(statearr_66019_67743[(2)] = null);

(statearr_66019_67743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65985 === (8))){
var inst_65965 = (state_65984[(7)]);
var state_65984__$1 = state_65984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65984__$1,(11),out,inst_65965);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_66020 = [null,null,null,null,null,null,null,null,null];
(statearr_66020[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_66020[(1)] = (1));

return statearr_66020;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_65984){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_65984);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e66021){var ex__62376__auto__ = e66021;
var statearr_66023_67747 = state_65984;
(statearr_66023_67747[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_65984[(4)]))){
var statearr_66024_67748 = state_65984;
(statearr_66024_67748[(1)] = cljs.core.first((state_65984[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67749 = state_65984;
state_65984 = G__67749;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_65984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_65984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_66032 = f__62990__auto__();
(statearr_66032[(6)] = c__62989__auto___67733);

return statearr_66032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__66038 = arguments.length;
switch (G__66038) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__62989__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_66127){
var state_val_66128 = (state_66127[(1)]);
if((state_val_66128 === (7))){
var inst_66123 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
var statearr_66135_67751 = state_66127__$1;
(statearr_66135_67751[(2)] = inst_66123);

(statearr_66135_67751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (20))){
var inst_66087 = (state_66127[(7)]);
var inst_66104 = (state_66127[(2)]);
var inst_66105 = cljs.core.next(inst_66087);
var inst_66067 = inst_66105;
var inst_66068 = null;
var inst_66069 = (0);
var inst_66070 = (0);
var state_66127__$1 = (function (){var statearr_66137 = state_66127;
(statearr_66137[(8)] = inst_66070);

(statearr_66137[(9)] = inst_66068);

(statearr_66137[(10)] = inst_66067);

(statearr_66137[(11)] = inst_66069);

(statearr_66137[(12)] = inst_66104);

return statearr_66137;
})();
var statearr_66141_67752 = state_66127__$1;
(statearr_66141_67752[(2)] = null);

(statearr_66141_67752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (1))){
var state_66127__$1 = state_66127;
var statearr_66142_67754 = state_66127__$1;
(statearr_66142_67754[(2)] = null);

(statearr_66142_67754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (4))){
var inst_66052 = (state_66127[(13)]);
var inst_66052__$1 = (state_66127[(2)]);
var inst_66053 = (inst_66052__$1 == null);
var state_66127__$1 = (function (){var statearr_66144 = state_66127;
(statearr_66144[(13)] = inst_66052__$1);

return statearr_66144;
})();
if(cljs.core.truth_(inst_66053)){
var statearr_66146_67755 = state_66127__$1;
(statearr_66146_67755[(1)] = (5));

} else {
var statearr_66151_67756 = state_66127__$1;
(statearr_66151_67756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (15))){
var state_66127__$1 = state_66127;
var statearr_66160_67757 = state_66127__$1;
(statearr_66160_67757[(2)] = null);

(statearr_66160_67757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (21))){
var state_66127__$1 = state_66127;
var statearr_66162_67761 = state_66127__$1;
(statearr_66162_67761[(2)] = null);

(statearr_66162_67761[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (13))){
var inst_66070 = (state_66127[(8)]);
var inst_66068 = (state_66127[(9)]);
var inst_66067 = (state_66127[(10)]);
var inst_66069 = (state_66127[(11)]);
var inst_66078 = (state_66127[(2)]);
var inst_66083 = (inst_66070 + (1));
var tmp66154 = inst_66068;
var tmp66155 = inst_66067;
var tmp66156 = inst_66069;
var inst_66067__$1 = tmp66155;
var inst_66068__$1 = tmp66154;
var inst_66069__$1 = tmp66156;
var inst_66070__$1 = inst_66083;
var state_66127__$1 = (function (){var statearr_66163 = state_66127;
(statearr_66163[(8)] = inst_66070__$1);

(statearr_66163[(9)] = inst_66068__$1);

(statearr_66163[(14)] = inst_66078);

(statearr_66163[(10)] = inst_66067__$1);

(statearr_66163[(11)] = inst_66069__$1);

return statearr_66163;
})();
var statearr_66164_67762 = state_66127__$1;
(statearr_66164_67762[(2)] = null);

(statearr_66164_67762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (22))){
var state_66127__$1 = state_66127;
var statearr_66166_67763 = state_66127__$1;
(statearr_66166_67763[(2)] = null);

(statearr_66166_67763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (6))){
var inst_66052 = (state_66127[(13)]);
var inst_66061 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_66052) : f.call(null,inst_66052));
var inst_66062 = cljs.core.seq(inst_66061);
var inst_66067 = inst_66062;
var inst_66068 = null;
var inst_66069 = (0);
var inst_66070 = (0);
var state_66127__$1 = (function (){var statearr_66172 = state_66127;
(statearr_66172[(8)] = inst_66070);

(statearr_66172[(9)] = inst_66068);

(statearr_66172[(10)] = inst_66067);

(statearr_66172[(11)] = inst_66069);

return statearr_66172;
})();
var statearr_66173_67764 = state_66127__$1;
(statearr_66173_67764[(2)] = null);

(statearr_66173_67764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (17))){
var inst_66087 = (state_66127[(7)]);
var inst_66097 = cljs.core.chunk_first(inst_66087);
var inst_66098 = cljs.core.chunk_rest(inst_66087);
var inst_66099 = cljs.core.count(inst_66097);
var inst_66067 = inst_66098;
var inst_66068 = inst_66097;
var inst_66069 = inst_66099;
var inst_66070 = (0);
var state_66127__$1 = (function (){var statearr_66175 = state_66127;
(statearr_66175[(8)] = inst_66070);

(statearr_66175[(9)] = inst_66068);

(statearr_66175[(10)] = inst_66067);

(statearr_66175[(11)] = inst_66069);

return statearr_66175;
})();
var statearr_66176_67765 = state_66127__$1;
(statearr_66176_67765[(2)] = null);

(statearr_66176_67765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (3))){
var inst_66125 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66127__$1,inst_66125);
} else {
if((state_val_66128 === (12))){
var inst_66113 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
var statearr_66177_67766 = state_66127__$1;
(statearr_66177_67766[(2)] = inst_66113);

(statearr_66177_67766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (2))){
var state_66127__$1 = state_66127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66127__$1,(4),in$);
} else {
if((state_val_66128 === (23))){
var inst_66121 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
var statearr_66178_67767 = state_66127__$1;
(statearr_66178_67767[(2)] = inst_66121);

(statearr_66178_67767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (19))){
var inst_66108 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
var statearr_66180_67768 = state_66127__$1;
(statearr_66180_67768[(2)] = inst_66108);

(statearr_66180_67768[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (11))){
var inst_66087 = (state_66127[(7)]);
var inst_66067 = (state_66127[(10)]);
var inst_66087__$1 = cljs.core.seq(inst_66067);
var state_66127__$1 = (function (){var statearr_66181 = state_66127;
(statearr_66181[(7)] = inst_66087__$1);

return statearr_66181;
})();
if(inst_66087__$1){
var statearr_66182_67769 = state_66127__$1;
(statearr_66182_67769[(1)] = (14));

} else {
var statearr_66183_67770 = state_66127__$1;
(statearr_66183_67770[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (9))){
var inst_66115 = (state_66127[(2)]);
var inst_66116 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_66127__$1 = (function (){var statearr_66184 = state_66127;
(statearr_66184[(15)] = inst_66115);

return statearr_66184;
})();
if(cljs.core.truth_(inst_66116)){
var statearr_66185_67771 = state_66127__$1;
(statearr_66185_67771[(1)] = (21));

} else {
var statearr_66186_67772 = state_66127__$1;
(statearr_66186_67772[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (5))){
var inst_66055 = cljs.core.async.close_BANG_(out);
var state_66127__$1 = state_66127;
var statearr_66188_67773 = state_66127__$1;
(statearr_66188_67773[(2)] = inst_66055);

(statearr_66188_67773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (14))){
var inst_66087 = (state_66127[(7)]);
var inst_66091 = cljs.core.chunked_seq_QMARK_(inst_66087);
var state_66127__$1 = state_66127;
if(inst_66091){
var statearr_66190_67774 = state_66127__$1;
(statearr_66190_67774[(1)] = (17));

} else {
var statearr_66191_67776 = state_66127__$1;
(statearr_66191_67776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (16))){
var inst_66111 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
var statearr_66192_67777 = state_66127__$1;
(statearr_66192_67777[(2)] = inst_66111);

(statearr_66192_67777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (10))){
var inst_66070 = (state_66127[(8)]);
var inst_66068 = (state_66127[(9)]);
var inst_66076 = cljs.core._nth(inst_66068,inst_66070);
var state_66127__$1 = state_66127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66127__$1,(13),out,inst_66076);
} else {
if((state_val_66128 === (18))){
var inst_66087 = (state_66127[(7)]);
var inst_66102 = cljs.core.first(inst_66087);
var state_66127__$1 = state_66127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66127__$1,(20),out,inst_66102);
} else {
if((state_val_66128 === (8))){
var inst_66070 = (state_66127[(8)]);
var inst_66069 = (state_66127[(11)]);
var inst_66072 = (inst_66070 < inst_66069);
var inst_66073 = inst_66072;
var state_66127__$1 = state_66127;
if(cljs.core.truth_(inst_66073)){
var statearr_66193_67778 = state_66127__$1;
(statearr_66193_67778[(1)] = (10));

} else {
var statearr_66194_67779 = state_66127__$1;
(statearr_66194_67779[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__62373__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__62373__auto____0 = (function (){
var statearr_66195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66195[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__62373__auto__);

(statearr_66195[(1)] = (1));

return statearr_66195;
});
var cljs$core$async$mapcat_STAR__$_state_machine__62373__auto____1 = (function (state_66127){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_66127);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e66196){var ex__62376__auto__ = e66196;
var statearr_66197_67780 = state_66127;
(statearr_66197_67780[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_66127[(4)]))){
var statearr_66203_67781 = state_66127;
(statearr_66203_67781[(1)] = cljs.core.first((state_66127[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67782 = state_66127;
state_66127 = G__67782;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__62373__auto__ = function(state_66127){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__62373__auto____1.call(this,state_66127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__62373__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__62373__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_66206 = f__62990__auto__();
(statearr_66206[(6)] = c__62989__auto__);

return statearr_66206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));

return c__62989__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__66236 = arguments.length;
switch (G__66236) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__66245 = arguments.length;
switch (G__66245) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__66250 = arguments.length;
switch (G__66250) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62989__auto___67791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_66277){
var state_val_66278 = (state_66277[(1)]);
if((state_val_66278 === (7))){
var inst_66272 = (state_66277[(2)]);
var state_66277__$1 = state_66277;
var statearr_66283_67792 = state_66277__$1;
(statearr_66283_67792[(2)] = inst_66272);

(statearr_66283_67792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66278 === (1))){
var inst_66254 = null;
var state_66277__$1 = (function (){var statearr_66284 = state_66277;
(statearr_66284[(7)] = inst_66254);

return statearr_66284;
})();
var statearr_66286_67794 = state_66277__$1;
(statearr_66286_67794[(2)] = null);

(statearr_66286_67794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66278 === (4))){
var inst_66257 = (state_66277[(8)]);
var inst_66257__$1 = (state_66277[(2)]);
var inst_66258 = (inst_66257__$1 == null);
var inst_66259 = cljs.core.not(inst_66258);
var state_66277__$1 = (function (){var statearr_66291 = state_66277;
(statearr_66291[(8)] = inst_66257__$1);

return statearr_66291;
})();
if(inst_66259){
var statearr_66292_67796 = state_66277__$1;
(statearr_66292_67796[(1)] = (5));

} else {
var statearr_66293_67797 = state_66277__$1;
(statearr_66293_67797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66278 === (6))){
var state_66277__$1 = state_66277;
var statearr_66294_67798 = state_66277__$1;
(statearr_66294_67798[(2)] = null);

(statearr_66294_67798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66278 === (3))){
var inst_66274 = (state_66277[(2)]);
var inst_66275 = cljs.core.async.close_BANG_(out);
var state_66277__$1 = (function (){var statearr_66296 = state_66277;
(statearr_66296[(9)] = inst_66274);

return statearr_66296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66277__$1,inst_66275);
} else {
if((state_val_66278 === (2))){
var state_66277__$1 = state_66277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66277__$1,(4),ch);
} else {
if((state_val_66278 === (11))){
var inst_66257 = (state_66277[(8)]);
var inst_66266 = (state_66277[(2)]);
var inst_66254 = inst_66257;
var state_66277__$1 = (function (){var statearr_66300 = state_66277;
(statearr_66300[(10)] = inst_66266);

(statearr_66300[(7)] = inst_66254);

return statearr_66300;
})();
var statearr_66301_67803 = state_66277__$1;
(statearr_66301_67803[(2)] = null);

(statearr_66301_67803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66278 === (9))){
var inst_66257 = (state_66277[(8)]);
var state_66277__$1 = state_66277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66277__$1,(11),out,inst_66257);
} else {
if((state_val_66278 === (5))){
var inst_66254 = (state_66277[(7)]);
var inst_66257 = (state_66277[(8)]);
var inst_66261 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66257,inst_66254);
var state_66277__$1 = state_66277;
if(inst_66261){
var statearr_66306_67807 = state_66277__$1;
(statearr_66306_67807[(1)] = (8));

} else {
var statearr_66308_67808 = state_66277__$1;
(statearr_66308_67808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66278 === (10))){
var inst_66269 = (state_66277[(2)]);
var state_66277__$1 = state_66277;
var statearr_66312_67809 = state_66277__$1;
(statearr_66312_67809[(2)] = inst_66269);

(statearr_66312_67809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66278 === (8))){
var inst_66254 = (state_66277[(7)]);
var tmp66305 = inst_66254;
var inst_66254__$1 = tmp66305;
var state_66277__$1 = (function (){var statearr_66313 = state_66277;
(statearr_66313[(7)] = inst_66254__$1);

return statearr_66313;
})();
var statearr_66316_67810 = state_66277__$1;
(statearr_66316_67810[(2)] = null);

(statearr_66316_67810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_66317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66317[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_66317[(1)] = (1));

return statearr_66317;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_66277){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_66277);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e66319){var ex__62376__auto__ = e66319;
var statearr_66320_67811 = state_66277;
(statearr_66320_67811[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_66277[(4)]))){
var statearr_66324_67812 = state_66277;
(statearr_66324_67812[(1)] = cljs.core.first((state_66277[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67816 = state_66277;
state_66277 = G__67816;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_66277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_66277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_66325 = f__62990__auto__();
(statearr_66325[(6)] = c__62989__auto___67791);

return statearr_66325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__66331 = arguments.length;
switch (G__66331) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62989__auto___67818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_66384){
var state_val_66385 = (state_66384[(1)]);
if((state_val_66385 === (7))){
var inst_66380 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66387_67819 = state_66384__$1;
(statearr_66387_67819[(2)] = inst_66380);

(statearr_66387_67819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (1))){
var inst_66338 = (new Array(n));
var inst_66339 = inst_66338;
var inst_66340 = (0);
var state_66384__$1 = (function (){var statearr_66404 = state_66384;
(statearr_66404[(7)] = inst_66340);

(statearr_66404[(8)] = inst_66339);

return statearr_66404;
})();
var statearr_66407_67820 = state_66384__$1;
(statearr_66407_67820[(2)] = null);

(statearr_66407_67820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (4))){
var inst_66344 = (state_66384[(9)]);
var inst_66344__$1 = (state_66384[(2)]);
var inst_66346 = (inst_66344__$1 == null);
var inst_66347 = cljs.core.not(inst_66346);
var state_66384__$1 = (function (){var statearr_66409 = state_66384;
(statearr_66409[(9)] = inst_66344__$1);

return statearr_66409;
})();
if(inst_66347){
var statearr_66416_67821 = state_66384__$1;
(statearr_66416_67821[(1)] = (5));

} else {
var statearr_66417_67822 = state_66384__$1;
(statearr_66417_67822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (15))){
var inst_66374 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66418_67823 = state_66384__$1;
(statearr_66418_67823[(2)] = inst_66374);

(statearr_66418_67823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (13))){
var state_66384__$1 = state_66384;
var statearr_66419_67824 = state_66384__$1;
(statearr_66419_67824[(2)] = null);

(statearr_66419_67824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (6))){
var inst_66340 = (state_66384[(7)]);
var inst_66370 = (inst_66340 > (0));
var state_66384__$1 = state_66384;
if(cljs.core.truth_(inst_66370)){
var statearr_66421_67825 = state_66384__$1;
(statearr_66421_67825[(1)] = (12));

} else {
var statearr_66422_67826 = state_66384__$1;
(statearr_66422_67826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (3))){
var inst_66382 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66384__$1,inst_66382);
} else {
if((state_val_66385 === (12))){
var inst_66339 = (state_66384[(8)]);
var inst_66372 = cljs.core.vec(inst_66339);
var state_66384__$1 = state_66384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66384__$1,(15),out,inst_66372);
} else {
if((state_val_66385 === (2))){
var state_66384__$1 = state_66384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66384__$1,(4),ch);
} else {
if((state_val_66385 === (11))){
var inst_66363 = (state_66384[(2)]);
var inst_66364 = (new Array(n));
var inst_66339 = inst_66364;
var inst_66340 = (0);
var state_66384__$1 = (function (){var statearr_66428 = state_66384;
(statearr_66428[(7)] = inst_66340);

(statearr_66428[(8)] = inst_66339);

(statearr_66428[(10)] = inst_66363);

return statearr_66428;
})();
var statearr_66437_67827 = state_66384__$1;
(statearr_66437_67827[(2)] = null);

(statearr_66437_67827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (9))){
var inst_66339 = (state_66384[(8)]);
var inst_66361 = cljs.core.vec(inst_66339);
var state_66384__$1 = state_66384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66384__$1,(11),out,inst_66361);
} else {
if((state_val_66385 === (5))){
var inst_66344 = (state_66384[(9)]);
var inst_66340 = (state_66384[(7)]);
var inst_66339 = (state_66384[(8)]);
var inst_66354 = (state_66384[(11)]);
var inst_66353 = (inst_66339[inst_66340] = inst_66344);
var inst_66354__$1 = (inst_66340 + (1));
var inst_66355 = (inst_66354__$1 < n);
var state_66384__$1 = (function (){var statearr_66447 = state_66384;
(statearr_66447[(12)] = inst_66353);

(statearr_66447[(11)] = inst_66354__$1);

return statearr_66447;
})();
if(cljs.core.truth_(inst_66355)){
var statearr_66456_67828 = state_66384__$1;
(statearr_66456_67828[(1)] = (8));

} else {
var statearr_66457_67829 = state_66384__$1;
(statearr_66457_67829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (14))){
var inst_66377 = (state_66384[(2)]);
var inst_66378 = cljs.core.async.close_BANG_(out);
var state_66384__$1 = (function (){var statearr_66459 = state_66384;
(statearr_66459[(13)] = inst_66377);

return statearr_66459;
})();
var statearr_66461_67831 = state_66384__$1;
(statearr_66461_67831[(2)] = inst_66378);

(statearr_66461_67831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (10))){
var inst_66367 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66462_67832 = state_66384__$1;
(statearr_66462_67832[(2)] = inst_66367);

(statearr_66462_67832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (8))){
var inst_66339 = (state_66384[(8)]);
var inst_66354 = (state_66384[(11)]);
var tmp66458 = inst_66339;
var inst_66339__$1 = tmp66458;
var inst_66340 = inst_66354;
var state_66384__$1 = (function (){var statearr_66466 = state_66384;
(statearr_66466[(7)] = inst_66340);

(statearr_66466[(8)] = inst_66339__$1);

return statearr_66466;
})();
var statearr_66467_67834 = state_66384__$1;
(statearr_66467_67834[(2)] = null);

(statearr_66467_67834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_66469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66469[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_66469[(1)] = (1));

return statearr_66469;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_66384){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_66384);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e66470){var ex__62376__auto__ = e66470;
var statearr_66471_67838 = state_66384;
(statearr_66471_67838[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_66384[(4)]))){
var statearr_66472_67839 = state_66384;
(statearr_66472_67839[(1)] = cljs.core.first((state_66384[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67840 = state_66384;
state_66384 = G__67840;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_66384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_66384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_66475 = f__62990__auto__();
(statearr_66475[(6)] = c__62989__auto___67818);

return statearr_66475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__66482 = arguments.length;
switch (G__66482) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__62989__auto___67842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62990__auto__ = (function (){var switch__62372__auto__ = (function (state_66564){
var state_val_66565 = (state_66564[(1)]);
if((state_val_66565 === (7))){
var inst_66560 = (state_66564[(2)]);
var state_66564__$1 = state_66564;
var statearr_66566_67843 = state_66564__$1;
(statearr_66566_67843[(2)] = inst_66560);

(statearr_66566_67843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (1))){
var inst_66504 = [];
var inst_66505 = inst_66504;
var inst_66506 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_66564__$1 = (function (){var statearr_66570 = state_66564;
(statearr_66570[(7)] = inst_66505);

(statearr_66570[(8)] = inst_66506);

return statearr_66570;
})();
var statearr_66571_67846 = state_66564__$1;
(statearr_66571_67846[(2)] = null);

(statearr_66571_67846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (4))){
var inst_66517 = (state_66564[(9)]);
var inst_66517__$1 = (state_66564[(2)]);
var inst_66518 = (inst_66517__$1 == null);
var inst_66519 = cljs.core.not(inst_66518);
var state_66564__$1 = (function (){var statearr_66572 = state_66564;
(statearr_66572[(9)] = inst_66517__$1);

return statearr_66572;
})();
if(inst_66519){
var statearr_66573_67849 = state_66564__$1;
(statearr_66573_67849[(1)] = (5));

} else {
var statearr_66574_67850 = state_66564__$1;
(statearr_66574_67850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (15))){
var inst_66505 = (state_66564[(7)]);
var inst_66552 = cljs.core.vec(inst_66505);
var state_66564__$1 = state_66564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66564__$1,(18),out,inst_66552);
} else {
if((state_val_66565 === (13))){
var inst_66547 = (state_66564[(2)]);
var state_66564__$1 = state_66564;
var statearr_66575_67852 = state_66564__$1;
(statearr_66575_67852[(2)] = inst_66547);

(statearr_66575_67852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (6))){
var inst_66505 = (state_66564[(7)]);
var inst_66549 = inst_66505.length;
var inst_66550 = (inst_66549 > (0));
var state_66564__$1 = state_66564;
if(cljs.core.truth_(inst_66550)){
var statearr_66576_67857 = state_66564__$1;
(statearr_66576_67857[(1)] = (15));

} else {
var statearr_66577_67858 = state_66564__$1;
(statearr_66577_67858[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (17))){
var inst_66557 = (state_66564[(2)]);
var inst_66558 = cljs.core.async.close_BANG_(out);
var state_66564__$1 = (function (){var statearr_66578 = state_66564;
(statearr_66578[(10)] = inst_66557);

return statearr_66578;
})();
var statearr_66579_67859 = state_66564__$1;
(statearr_66579_67859[(2)] = inst_66558);

(statearr_66579_67859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (3))){
var inst_66562 = (state_66564[(2)]);
var state_66564__$1 = state_66564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66564__$1,inst_66562);
} else {
if((state_val_66565 === (12))){
var inst_66505 = (state_66564[(7)]);
var inst_66540 = cljs.core.vec(inst_66505);
var state_66564__$1 = state_66564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66564__$1,(14),out,inst_66540);
} else {
if((state_val_66565 === (2))){
var state_66564__$1 = state_66564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66564__$1,(4),ch);
} else {
if((state_val_66565 === (11))){
var inst_66505 = (state_66564[(7)]);
var inst_66521 = (state_66564[(11)]);
var inst_66517 = (state_66564[(9)]);
var inst_66533 = inst_66505.push(inst_66517);
var tmp66581 = inst_66505;
var inst_66505__$1 = tmp66581;
var inst_66506 = inst_66521;
var state_66564__$1 = (function (){var statearr_66582 = state_66564;
(statearr_66582[(12)] = inst_66533);

(statearr_66582[(7)] = inst_66505__$1);

(statearr_66582[(8)] = inst_66506);

return statearr_66582;
})();
var statearr_66583_67860 = state_66564__$1;
(statearr_66583_67860[(2)] = null);

(statearr_66583_67860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (9))){
var inst_66506 = (state_66564[(8)]);
var inst_66529 = cljs.core.keyword_identical_QMARK_(inst_66506,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_66564__$1 = state_66564;
var statearr_66584_67861 = state_66564__$1;
(statearr_66584_67861[(2)] = inst_66529);

(statearr_66584_67861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (5))){
var inst_66521 = (state_66564[(11)]);
var inst_66517 = (state_66564[(9)]);
var inst_66526 = (state_66564[(13)]);
var inst_66506 = (state_66564[(8)]);
var inst_66521__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_66517) : f.call(null,inst_66517));
var inst_66526__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66521__$1,inst_66506);
var state_66564__$1 = (function (){var statearr_66589 = state_66564;
(statearr_66589[(11)] = inst_66521__$1);

(statearr_66589[(13)] = inst_66526__$1);

return statearr_66589;
})();
if(inst_66526__$1){
var statearr_66590_67862 = state_66564__$1;
(statearr_66590_67862[(1)] = (8));

} else {
var statearr_66595_67863 = state_66564__$1;
(statearr_66595_67863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (14))){
var inst_66521 = (state_66564[(11)]);
var inst_66517 = (state_66564[(9)]);
var inst_66542 = (state_66564[(2)]);
var inst_66543 = [];
var inst_66544 = inst_66543.push(inst_66517);
var inst_66505 = inst_66543;
var inst_66506 = inst_66521;
var state_66564__$1 = (function (){var statearr_66600 = state_66564;
(statearr_66600[(14)] = inst_66542);

(statearr_66600[(15)] = inst_66544);

(statearr_66600[(7)] = inst_66505);

(statearr_66600[(8)] = inst_66506);

return statearr_66600;
})();
var statearr_66601_67864 = state_66564__$1;
(statearr_66601_67864[(2)] = null);

(statearr_66601_67864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (16))){
var state_66564__$1 = state_66564;
var statearr_66602_67865 = state_66564__$1;
(statearr_66602_67865[(2)] = null);

(statearr_66602_67865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (10))){
var inst_66531 = (state_66564[(2)]);
var state_66564__$1 = state_66564;
if(cljs.core.truth_(inst_66531)){
var statearr_66607_67866 = state_66564__$1;
(statearr_66607_67866[(1)] = (11));

} else {
var statearr_66608_67867 = state_66564__$1;
(statearr_66608_67867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (18))){
var inst_66554 = (state_66564[(2)]);
var state_66564__$1 = state_66564;
var statearr_66613_67868 = state_66564__$1;
(statearr_66613_67868[(2)] = inst_66554);

(statearr_66613_67868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66565 === (8))){
var inst_66526 = (state_66564[(13)]);
var state_66564__$1 = state_66564;
var statearr_66617_67869 = state_66564__$1;
(statearr_66617_67869[(2)] = inst_66526);

(statearr_66617_67869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__62373__auto__ = null;
var cljs$core$async$state_machine__62373__auto____0 = (function (){
var statearr_66624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66624[(0)] = cljs$core$async$state_machine__62373__auto__);

(statearr_66624[(1)] = (1));

return statearr_66624;
});
var cljs$core$async$state_machine__62373__auto____1 = (function (state_66564){
while(true){
var ret_value__62374__auto__ = (function (){try{while(true){
var result__62375__auto__ = switch__62372__auto__(state_66564);
if(cljs.core.keyword_identical_QMARK_(result__62375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62375__auto__;
}
break;
}
}catch (e66625){var ex__62376__auto__ = e66625;
var statearr_66626_67872 = state_66564;
(statearr_66626_67872[(2)] = ex__62376__auto__);


if(cljs.core.seq((state_66564[(4)]))){
var statearr_66627_67873 = state_66564;
(statearr_66627_67873[(1)] = cljs.core.first((state_66564[(4)])));

} else {
throw ex__62376__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67874 = state_66564;
state_66564 = G__67874;
continue;
} else {
return ret_value__62374__auto__;
}
break;
}
});
cljs$core$async$state_machine__62373__auto__ = function(state_66564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62373__auto____1.call(this,state_66564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62373__auto____0;
cljs$core$async$state_machine__62373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62373__auto____1;
return cljs$core$async$state_machine__62373__auto__;
})()
})();
var state__62991__auto__ = (function (){var statearr_66631 = f__62990__auto__();
(statearr_66631[(6)] = c__62989__auto___67842);

return statearr_66631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62991__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
