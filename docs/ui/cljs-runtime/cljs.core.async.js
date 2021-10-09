goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49429 = arguments.length;
switch (G__49429) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49434 = (function (f,blockable,meta49435){
this.f = f;
this.blockable = blockable;
this.meta49435 = meta49435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49436,meta49435__$1){
var self__ = this;
var _49436__$1 = this;
return (new cljs.core.async.t_cljs$core$async49434(self__.f,self__.blockable,meta49435__$1));
}));

(cljs.core.async.t_cljs$core$async49434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49436){
var self__ = this;
var _49436__$1 = this;
return self__.meta49435;
}));

(cljs.core.async.t_cljs$core$async49434.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49434.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49435","meta49435",1414865800,null)], null);
}));

(cljs.core.async.t_cljs$core$async49434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49434");

(cljs.core.async.t_cljs$core$async49434.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49434.
 */
cljs.core.async.__GT_t_cljs$core$async49434 = (function cljs$core$async$__GT_t_cljs$core$async49434(f__$1,blockable__$1,meta49435){
return (new cljs.core.async.t_cljs$core$async49434(f__$1,blockable__$1,meta49435));
});

}

return (new cljs.core.async.t_cljs$core$async49434(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49459 = arguments.length;
switch (G__49459) {
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
var G__49474 = arguments.length;
switch (G__49474) {
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
var G__49483 = arguments.length;
switch (G__49483) {
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
var val_53252 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53252) : fn1.call(null,val_53252));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53252) : fn1.call(null,val_53252));
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
var G__49493 = arguments.length;
switch (G__49493) {
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
var n__4706__auto___53269 = n;
var x_53270 = (0);
while(true){
if((x_53270 < n__4706__auto___53269)){
(a[x_53270] = x_53270);

var G__53271 = (x_53270 + (1));
x_53270 = G__53271;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49509 = (function (flag,meta49510){
this.flag = flag;
this.meta49510 = meta49510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49511,meta49510__$1){
var self__ = this;
var _49511__$1 = this;
return (new cljs.core.async.t_cljs$core$async49509(self__.flag,meta49510__$1));
}));

(cljs.core.async.t_cljs$core$async49509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49511){
var self__ = this;
var _49511__$1 = this;
return self__.meta49510;
}));

(cljs.core.async.t_cljs$core$async49509.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49510","meta49510",-21023620,null)], null);
}));

(cljs.core.async.t_cljs$core$async49509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49509");

(cljs.core.async.t_cljs$core$async49509.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49509.
 */
cljs.core.async.__GT_t_cljs$core$async49509 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49509(flag__$1,meta49510){
return (new cljs.core.async.t_cljs$core$async49509(flag__$1,meta49510));
});

}

return (new cljs.core.async.t_cljs$core$async49509(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49566 = (function (flag,cb,meta49567){
this.flag = flag;
this.cb = cb;
this.meta49567 = meta49567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49568,meta49567__$1){
var self__ = this;
var _49568__$1 = this;
return (new cljs.core.async.t_cljs$core$async49566(self__.flag,self__.cb,meta49567__$1));
}));

(cljs.core.async.t_cljs$core$async49566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49568){
var self__ = this;
var _49568__$1 = this;
return self__.meta49567;
}));

(cljs.core.async.t_cljs$core$async49566.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49567","meta49567",1134068246,null)], null);
}));

(cljs.core.async.t_cljs$core$async49566.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49566");

(cljs.core.async.t_cljs$core$async49566.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49566");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49566.
 */
cljs.core.async.__GT_t_cljs$core$async49566 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49566(flag__$1,cb__$1,meta49567){
return (new cljs.core.async.t_cljs$core$async49566(flag__$1,cb__$1,meta49567));
});

}

return (new cljs.core.async.t_cljs$core$async49566(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49581_SHARP_){
var G__49594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49581_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49594) : fret.call(null,G__49594));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49582_SHARP_){
var G__49598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49582_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49598) : fret.call(null,G__49598));
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
var G__53318 = (i + (1));
i = G__53318;
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
var len__4829__auto___53319 = arguments.length;
var i__4830__auto___53323 = (0);
while(true){
if((i__4830__auto___53323 < len__4829__auto___53319)){
args__4835__auto__.push((arguments[i__4830__auto___53323]));

var G__53325 = (i__4830__auto___53323 + (1));
i__4830__auto___53323 = G__53325;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49617){
var map__49618 = p__49617;
var map__49618__$1 = cljs.core.__destructure_map(map__49618);
var opts = map__49618__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49607){
var G__49608 = cljs.core.first(seq49607);
var seq49607__$1 = cljs.core.next(seq49607);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49608,seq49607__$1);
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
var G__49644 = arguments.length;
switch (G__49644) {
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
var c__49319__auto___53343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_49726){
var state_val_49728 = (state_49726[(1)]);
if((state_val_49728 === (7))){
var inst_49715 = (state_49726[(2)]);
var state_49726__$1 = state_49726;
var statearr_49748_53344 = state_49726__$1;
(statearr_49748_53344[(2)] = inst_49715);

(statearr_49748_53344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (1))){
var state_49726__$1 = state_49726;
var statearr_49750_53345 = state_49726__$1;
(statearr_49750_53345[(2)] = null);

(statearr_49750_53345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (4))){
var inst_49690 = (state_49726[(7)]);
var inst_49690__$1 = (state_49726[(2)]);
var inst_49692 = (inst_49690__$1 == null);
var state_49726__$1 = (function (){var statearr_49754 = state_49726;
(statearr_49754[(7)] = inst_49690__$1);

return statearr_49754;
})();
if(cljs.core.truth_(inst_49692)){
var statearr_49759_53347 = state_49726__$1;
(statearr_49759_53347[(1)] = (5));

} else {
var statearr_49764_53348 = state_49726__$1;
(statearr_49764_53348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (13))){
var state_49726__$1 = state_49726;
var statearr_49771_53349 = state_49726__$1;
(statearr_49771_53349[(2)] = null);

(statearr_49771_53349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (6))){
var inst_49690 = (state_49726[(7)]);
var state_49726__$1 = state_49726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49726__$1,(11),to,inst_49690);
} else {
if((state_val_49728 === (3))){
var inst_49721 = (state_49726[(2)]);
var state_49726__$1 = state_49726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49726__$1,inst_49721);
} else {
if((state_val_49728 === (12))){
var state_49726__$1 = state_49726;
var statearr_49784_53352 = state_49726__$1;
(statearr_49784_53352[(2)] = null);

(statearr_49784_53352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (2))){
var state_49726__$1 = state_49726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49726__$1,(4),from);
} else {
if((state_val_49728 === (11))){
var inst_49707 = (state_49726[(2)]);
var state_49726__$1 = state_49726;
if(cljs.core.truth_(inst_49707)){
var statearr_49785_53355 = state_49726__$1;
(statearr_49785_53355[(1)] = (12));

} else {
var statearr_49788_53356 = state_49726__$1;
(statearr_49788_53356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (9))){
var state_49726__$1 = state_49726;
var statearr_49794_53357 = state_49726__$1;
(statearr_49794_53357[(2)] = null);

(statearr_49794_53357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (5))){
var state_49726__$1 = state_49726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49795_53358 = state_49726__$1;
(statearr_49795_53358[(1)] = (8));

} else {
var statearr_49796_53359 = state_49726__$1;
(statearr_49796_53359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (14))){
var inst_49713 = (state_49726[(2)]);
var state_49726__$1 = state_49726;
var statearr_49798_53360 = state_49726__$1;
(statearr_49798_53360[(2)] = inst_49713);

(statearr_49798_53360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (10))){
var inst_49703 = (state_49726[(2)]);
var state_49726__$1 = state_49726;
var statearr_49802_53361 = state_49726__$1;
(statearr_49802_53361[(2)] = inst_49703);

(statearr_49802_53361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (8))){
var inst_49696 = cljs.core.async.close_BANG_(to);
var state_49726__$1 = state_49726;
var statearr_49803_53362 = state_49726__$1;
(statearr_49803_53362[(2)] = inst_49696);

(statearr_49803_53362[(1)] = (10));


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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_49812 = [null,null,null,null,null,null,null,null];
(statearr_49812[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_49812[(1)] = (1));

return statearr_49812;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_49726){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_49726);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e49814){var ex__48981__auto__ = e49814;
var statearr_49820_53364 = state_49726;
(statearr_49820_53364[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_49726[(4)]))){
var statearr_49821_53365 = state_49726;
(statearr_49821_53365[(1)] = cljs.core.first((state_49726[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53367 = state_49726;
state_49726 = G__53367;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_49726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_49726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_49822 = f__49320__auto__();
(statearr_49822[(6)] = c__49319__auto___53343);

return statearr_49822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
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
var process = (function (p__49836){
var vec__49837 = p__49836;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49837,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49837,(1),null);
var job = vec__49837;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49319__auto___53368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_49856){
var state_val_49857 = (state_49856[(1)]);
if((state_val_49857 === (1))){
var state_49856__$1 = state_49856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49856__$1,(2),res,v);
} else {
if((state_val_49857 === (2))){
var inst_49853 = (state_49856[(2)]);
var inst_49854 = cljs.core.async.close_BANG_(res);
var state_49856__$1 = (function (){var statearr_49876 = state_49856;
(statearr_49876[(7)] = inst_49853);

return statearr_49876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49856__$1,inst_49854);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0 = (function (){
var statearr_49879 = [null,null,null,null,null,null,null,null];
(statearr_49879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__);

(statearr_49879[(1)] = (1));

return statearr_49879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1 = (function (state_49856){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_49856);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e49880){var ex__48981__auto__ = e49880;
var statearr_49881_53369 = state_49856;
(statearr_49881_53369[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_49856[(4)]))){
var statearr_49882_53370 = state_49856;
(statearr_49882_53370[(1)] = cljs.core.first((state_49856[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53371 = state_49856;
state_49856 = G__53371;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = function(state_49856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1.call(this,state_49856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_49902 = f__49320__auto__();
(statearr_49902[(6)] = c__49319__auto___53368);

return statearr_49902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49909){
var vec__49911 = p__49909;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49911,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49911,(1),null);
var job = vec__49911;
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
var n__4706__auto___53374 = n;
var __53375 = (0);
while(true){
if((__53375 < n__4706__auto___53374)){
var G__49919_53376 = type;
var G__49919_53377__$1 = (((G__49919_53376 instanceof cljs.core.Keyword))?G__49919_53376.fqn:null);
switch (G__49919_53377__$1) {
case "compute":
var c__49319__auto___53379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53375,c__49319__auto___53379,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async){
return (function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = ((function (__53375,c__49319__auto___53379,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async){
return (function (state_49938){
var state_val_49939 = (state_49938[(1)]);
if((state_val_49939 === (1))){
var state_49938__$1 = state_49938;
var statearr_49940_53380 = state_49938__$1;
(statearr_49940_53380[(2)] = null);

(statearr_49940_53380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (2))){
var state_49938__$1 = state_49938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49938__$1,(4),jobs);
} else {
if((state_val_49939 === (3))){
var inst_49936 = (state_49938[(2)]);
var state_49938__$1 = state_49938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49938__$1,inst_49936);
} else {
if((state_val_49939 === (4))){
var inst_49928 = (state_49938[(2)]);
var inst_49929 = process(inst_49928);
var state_49938__$1 = state_49938;
if(cljs.core.truth_(inst_49929)){
var statearr_49947_53381 = state_49938__$1;
(statearr_49947_53381[(1)] = (5));

} else {
var statearr_49951_53382 = state_49938__$1;
(statearr_49951_53382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (5))){
var state_49938__$1 = state_49938;
var statearr_49952_53383 = state_49938__$1;
(statearr_49952_53383[(2)] = null);

(statearr_49952_53383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (6))){
var state_49938__$1 = state_49938;
var statearr_49954_53384 = state_49938__$1;
(statearr_49954_53384[(2)] = null);

(statearr_49954_53384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49939 === (7))){
var inst_49934 = (state_49938[(2)]);
var state_49938__$1 = state_49938;
var statearr_49956_53385 = state_49938__$1;
(statearr_49956_53385[(2)] = inst_49934);

(statearr_49956_53385[(1)] = (3));


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
});})(__53375,c__49319__auto___53379,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async))
;
return ((function (__53375,switch__48977__auto__,c__49319__auto___53379,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0 = (function (){
var statearr_49957 = [null,null,null,null,null,null,null];
(statearr_49957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__);

(statearr_49957[(1)] = (1));

return statearr_49957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1 = (function (state_49938){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_49938);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e49959){var ex__48981__auto__ = e49959;
var statearr_49960_53386 = state_49938;
(statearr_49960_53386[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_49938[(4)]))){
var statearr_49964_53387 = state_49938;
(statearr_49964_53387[(1)] = cljs.core.first((state_49938[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53389 = state_49938;
state_49938 = G__53389;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = function(state_49938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1.call(this,state_49938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__;
})()
;})(__53375,switch__48977__auto__,c__49319__auto___53379,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async))
})();
var state__49321__auto__ = (function (){var statearr_49970 = f__49320__auto__();
(statearr_49970[(6)] = c__49319__auto___53379);

return statearr_49970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
});})(__53375,c__49319__auto___53379,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async))
);


break;
case "async":
var c__49319__auto___53390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53375,c__49319__auto___53390,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async){
return (function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = ((function (__53375,c__49319__auto___53390,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async){
return (function (state_49992){
var state_val_49993 = (state_49992[(1)]);
if((state_val_49993 === (1))){
var state_49992__$1 = state_49992;
var statearr_49998_53392 = state_49992__$1;
(statearr_49998_53392[(2)] = null);

(statearr_49998_53392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (2))){
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49992__$1,(4),jobs);
} else {
if((state_val_49993 === (3))){
var inst_49990 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49992__$1,inst_49990);
} else {
if((state_val_49993 === (4))){
var inst_49981 = (state_49992[(2)]);
var inst_49983 = async(inst_49981);
var state_49992__$1 = state_49992;
if(cljs.core.truth_(inst_49983)){
var statearr_50002_53393 = state_49992__$1;
(statearr_50002_53393[(1)] = (5));

} else {
var statearr_50004_53394 = state_49992__$1;
(statearr_50004_53394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (5))){
var state_49992__$1 = state_49992;
var statearr_50007_53395 = state_49992__$1;
(statearr_50007_53395[(2)] = null);

(statearr_50007_53395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (6))){
var state_49992__$1 = state_49992;
var statearr_50009_53396 = state_49992__$1;
(statearr_50009_53396[(2)] = null);

(statearr_50009_53396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (7))){
var inst_49988 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_50014_53397 = state_49992__$1;
(statearr_50014_53397[(2)] = inst_49988);

(statearr_50014_53397[(1)] = (3));


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
});})(__53375,c__49319__auto___53390,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async))
;
return ((function (__53375,switch__48977__auto__,c__49319__auto___53390,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0 = (function (){
var statearr_50019 = [null,null,null,null,null,null,null];
(statearr_50019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__);

(statearr_50019[(1)] = (1));

return statearr_50019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1 = (function (state_49992){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_49992);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e50021){var ex__48981__auto__ = e50021;
var statearr_50022_53398 = state_49992;
(statearr_50022_53398[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_49992[(4)]))){
var statearr_50027_53399 = state_49992;
(statearr_50027_53399[(1)] = cljs.core.first((state_49992[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53400 = state_49992;
state_49992 = G__53400;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = function(state_49992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1.call(this,state_49992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__;
})()
;})(__53375,switch__48977__auto__,c__49319__auto___53390,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async))
})();
var state__49321__auto__ = (function (){var statearr_50030 = f__49320__auto__();
(statearr_50030[(6)] = c__49319__auto___53390);

return statearr_50030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
});})(__53375,c__49319__auto___53390,G__49919_53376,G__49919_53377__$1,n__4706__auto___53374,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49919_53377__$1)].join('')));

}

var G__53401 = (__53375 + (1));
__53375 = G__53401;
continue;
} else {
}
break;
}

var c__49319__auto___53402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_50083){
var state_val_50084 = (state_50083[(1)]);
if((state_val_50084 === (7))){
var inst_50079 = (state_50083[(2)]);
var state_50083__$1 = state_50083;
var statearr_50091_53404 = state_50083__$1;
(statearr_50091_53404[(2)] = inst_50079);

(statearr_50091_53404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (1))){
var state_50083__$1 = state_50083;
var statearr_50101_53406 = state_50083__$1;
(statearr_50101_53406[(2)] = null);

(statearr_50101_53406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (4))){
var inst_50055 = (state_50083[(7)]);
var inst_50055__$1 = (state_50083[(2)]);
var inst_50057 = (inst_50055__$1 == null);
var state_50083__$1 = (function (){var statearr_50105 = state_50083;
(statearr_50105[(7)] = inst_50055__$1);

return statearr_50105;
})();
if(cljs.core.truth_(inst_50057)){
var statearr_50106_53408 = state_50083__$1;
(statearr_50106_53408[(1)] = (5));

} else {
var statearr_50107_53409 = state_50083__$1;
(statearr_50107_53409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (6))){
var inst_50067 = (state_50083[(8)]);
var inst_50055 = (state_50083[(7)]);
var inst_50067__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50071 = [inst_50055,inst_50067__$1];
var inst_50072 = (new cljs.core.PersistentVector(null,2,(5),inst_50070,inst_50071,null));
var state_50083__$1 = (function (){var statearr_50111 = state_50083;
(statearr_50111[(8)] = inst_50067__$1);

return statearr_50111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50083__$1,(8),jobs,inst_50072);
} else {
if((state_val_50084 === (3))){
var inst_50081 = (state_50083[(2)]);
var state_50083__$1 = state_50083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50083__$1,inst_50081);
} else {
if((state_val_50084 === (2))){
var state_50083__$1 = state_50083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50083__$1,(4),from);
} else {
if((state_val_50084 === (9))){
var inst_50076 = (state_50083[(2)]);
var state_50083__$1 = (function (){var statearr_50118 = state_50083;
(statearr_50118[(9)] = inst_50076);

return statearr_50118;
})();
var statearr_50119_53413 = state_50083__$1;
(statearr_50119_53413[(2)] = null);

(statearr_50119_53413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (5))){
var inst_50060 = cljs.core.async.close_BANG_(jobs);
var state_50083__$1 = state_50083;
var statearr_50124_53414 = state_50083__$1;
(statearr_50124_53414[(2)] = inst_50060);

(statearr_50124_53414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (8))){
var inst_50067 = (state_50083[(8)]);
var inst_50074 = (state_50083[(2)]);
var state_50083__$1 = (function (){var statearr_50127 = state_50083;
(statearr_50127[(10)] = inst_50074);

return statearr_50127;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50083__$1,(9),results,inst_50067);
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
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0 = (function (){
var statearr_50137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__);

(statearr_50137[(1)] = (1));

return statearr_50137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1 = (function (state_50083){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_50083);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e50144){var ex__48981__auto__ = e50144;
var statearr_50150_53415 = state_50083;
(statearr_50150_53415[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_50083[(4)]))){
var statearr_50152_53416 = state_50083;
(statearr_50152_53416[(1)] = cljs.core.first((state_50083[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53417 = state_50083;
state_50083 = G__53417;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = function(state_50083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1.call(this,state_50083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_50160 = f__49320__auto__();
(statearr_50160[(6)] = c__49319__auto___53402);

return statearr_50160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));


var c__49319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_50233){
var state_val_50234 = (state_50233[(1)]);
if((state_val_50234 === (7))){
var inst_50223 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
var statearr_50250_53419 = state_50233__$1;
(statearr_50250_53419[(2)] = inst_50223);

(statearr_50250_53419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (20))){
var state_50233__$1 = state_50233;
var statearr_50257_53431 = state_50233__$1;
(statearr_50257_53431[(2)] = null);

(statearr_50257_53431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (1))){
var state_50233__$1 = state_50233;
var statearr_50266_53432 = state_50233__$1;
(statearr_50266_53432[(2)] = null);

(statearr_50266_53432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (4))){
var inst_50174 = (state_50233[(7)]);
var inst_50174__$1 = (state_50233[(2)]);
var inst_50175 = (inst_50174__$1 == null);
var state_50233__$1 = (function (){var statearr_50274 = state_50233;
(statearr_50274[(7)] = inst_50174__$1);

return statearr_50274;
})();
if(cljs.core.truth_(inst_50175)){
var statearr_50279_53433 = state_50233__$1;
(statearr_50279_53433[(1)] = (5));

} else {
var statearr_50280_53434 = state_50233__$1;
(statearr_50280_53434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (15))){
var inst_50192 = (state_50233[(8)]);
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50233__$1,(18),to,inst_50192);
} else {
if((state_val_50234 === (21))){
var inst_50213 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
var statearr_50282_53436 = state_50233__$1;
(statearr_50282_53436[(2)] = inst_50213);

(statearr_50282_53436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (13))){
var inst_50215 = (state_50233[(2)]);
var state_50233__$1 = (function (){var statearr_50287 = state_50233;
(statearr_50287[(9)] = inst_50215);

return statearr_50287;
})();
var statearr_50289_53437 = state_50233__$1;
(statearr_50289_53437[(2)] = null);

(statearr_50289_53437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (6))){
var inst_50174 = (state_50233[(7)]);
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50233__$1,(11),inst_50174);
} else {
if((state_val_50234 === (17))){
var inst_50206 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
if(cljs.core.truth_(inst_50206)){
var statearr_50298_53438 = state_50233__$1;
(statearr_50298_53438[(1)] = (19));

} else {
var statearr_50300_53440 = state_50233__$1;
(statearr_50300_53440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (3))){
var inst_50225 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50233__$1,inst_50225);
} else {
if((state_val_50234 === (12))){
var inst_50185 = (state_50233[(10)]);
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50233__$1,(14),inst_50185);
} else {
if((state_val_50234 === (2))){
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50233__$1,(4),results);
} else {
if((state_val_50234 === (19))){
var state_50233__$1 = state_50233;
var statearr_50304_53445 = state_50233__$1;
(statearr_50304_53445[(2)] = null);

(statearr_50304_53445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (11))){
var inst_50185 = (state_50233[(2)]);
var state_50233__$1 = (function (){var statearr_50305 = state_50233;
(statearr_50305[(10)] = inst_50185);

return statearr_50305;
})();
var statearr_50307_53446 = state_50233__$1;
(statearr_50307_53446[(2)] = null);

(statearr_50307_53446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (9))){
var state_50233__$1 = state_50233;
var statearr_50310_53447 = state_50233__$1;
(statearr_50310_53447[(2)] = null);

(statearr_50310_53447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (5))){
var state_50233__$1 = state_50233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50314_53448 = state_50233__$1;
(statearr_50314_53448[(1)] = (8));

} else {
var statearr_50316_53449 = state_50233__$1;
(statearr_50316_53449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (14))){
var inst_50199 = (state_50233[(11)]);
var inst_50192 = (state_50233[(8)]);
var inst_50192__$1 = (state_50233[(2)]);
var inst_50198 = (inst_50192__$1 == null);
var inst_50199__$1 = cljs.core.not(inst_50198);
var state_50233__$1 = (function (){var statearr_50317 = state_50233;
(statearr_50317[(11)] = inst_50199__$1);

(statearr_50317[(8)] = inst_50192__$1);

return statearr_50317;
})();
if(inst_50199__$1){
var statearr_50319_53450 = state_50233__$1;
(statearr_50319_53450[(1)] = (15));

} else {
var statearr_50320_53451 = state_50233__$1;
(statearr_50320_53451[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (16))){
var inst_50199 = (state_50233[(11)]);
var state_50233__$1 = state_50233;
var statearr_50328_53452 = state_50233__$1;
(statearr_50328_53452[(2)] = inst_50199);

(statearr_50328_53452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (10))){
var inst_50181 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
var statearr_50331_53453 = state_50233__$1;
(statearr_50331_53453[(2)] = inst_50181);

(statearr_50331_53453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (18))){
var inst_50203 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
var statearr_50333_53454 = state_50233__$1;
(statearr_50333_53454[(2)] = inst_50203);

(statearr_50333_53454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (8))){
var inst_50178 = cljs.core.async.close_BANG_(to);
var state_50233__$1 = state_50233;
var statearr_50337_53455 = state_50233__$1;
(statearr_50337_53455[(2)] = inst_50178);

(statearr_50337_53455[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0 = (function (){
var statearr_50345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__);

(statearr_50345[(1)] = (1));

return statearr_50345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1 = (function (state_50233){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_50233);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e50353){var ex__48981__auto__ = e50353;
var statearr_50354_53456 = state_50233;
(statearr_50354_53456[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_50233[(4)]))){
var statearr_50355_53457 = state_50233;
(statearr_50355_53457[(1)] = cljs.core.first((state_50233[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53458 = state_50233;
state_50233 = G__53458;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__ = function(state_50233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1.call(this,state_50233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_50360 = f__49320__auto__();
(statearr_50360[(6)] = c__49319__auto__);

return statearr_50360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));

return c__49319__auto__;
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
var G__50365 = arguments.length;
switch (G__50365) {
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
var G__50370 = arguments.length;
switch (G__50370) {
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
var G__50390 = arguments.length;
switch (G__50390) {
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
var c__49319__auto___53466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_50436){
var state_val_50437 = (state_50436[(1)]);
if((state_val_50437 === (7))){
var inst_50432 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50450_53467 = state_50436__$1;
(statearr_50450_53467[(2)] = inst_50432);

(statearr_50450_53467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (1))){
var state_50436__$1 = state_50436;
var statearr_50458_53468 = state_50436__$1;
(statearr_50458_53468[(2)] = null);

(statearr_50458_53468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (4))){
var inst_50407 = (state_50436[(7)]);
var inst_50407__$1 = (state_50436[(2)]);
var inst_50408 = (inst_50407__$1 == null);
var state_50436__$1 = (function (){var statearr_50461 = state_50436;
(statearr_50461[(7)] = inst_50407__$1);

return statearr_50461;
})();
if(cljs.core.truth_(inst_50408)){
var statearr_50462_53469 = state_50436__$1;
(statearr_50462_53469[(1)] = (5));

} else {
var statearr_50463_53470 = state_50436__$1;
(statearr_50463_53470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (13))){
var state_50436__$1 = state_50436;
var statearr_50466_53471 = state_50436__$1;
(statearr_50466_53471[(2)] = null);

(statearr_50466_53471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (6))){
var inst_50407 = (state_50436[(7)]);
var inst_50417 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50407) : p.call(null,inst_50407));
var state_50436__$1 = state_50436;
if(cljs.core.truth_(inst_50417)){
var statearr_50467_53474 = state_50436__$1;
(statearr_50467_53474[(1)] = (9));

} else {
var statearr_50468_53475 = state_50436__$1;
(statearr_50468_53475[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (3))){
var inst_50434 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50436__$1,inst_50434);
} else {
if((state_val_50437 === (12))){
var state_50436__$1 = state_50436;
var statearr_50469_53476 = state_50436__$1;
(statearr_50469_53476[(2)] = null);

(statearr_50469_53476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (2))){
var state_50436__$1 = state_50436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50436__$1,(4),ch);
} else {
if((state_val_50437 === (11))){
var inst_50407 = (state_50436[(7)]);
var inst_50421 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50436__$1,(8),inst_50421,inst_50407);
} else {
if((state_val_50437 === (9))){
var state_50436__$1 = state_50436;
var statearr_50471_53477 = state_50436__$1;
(statearr_50471_53477[(2)] = tc);

(statearr_50471_53477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (5))){
var inst_50410 = cljs.core.async.close_BANG_(tc);
var inst_50411 = cljs.core.async.close_BANG_(fc);
var state_50436__$1 = (function (){var statearr_50473 = state_50436;
(statearr_50473[(8)] = inst_50410);

return statearr_50473;
})();
var statearr_50474_53478 = state_50436__$1;
(statearr_50474_53478[(2)] = inst_50411);

(statearr_50474_53478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (14))){
var inst_50430 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
var statearr_50476_53480 = state_50436__$1;
(statearr_50476_53480[(2)] = inst_50430);

(statearr_50476_53480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (10))){
var state_50436__$1 = state_50436;
var statearr_50487_53481 = state_50436__$1;
(statearr_50487_53481[(2)] = fc);

(statearr_50487_53481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50437 === (8))){
var inst_50423 = (state_50436[(2)]);
var state_50436__$1 = state_50436;
if(cljs.core.truth_(inst_50423)){
var statearr_50488_53486 = state_50436__$1;
(statearr_50488_53486[(1)] = (12));

} else {
var statearr_50489_53487 = state_50436__$1;
(statearr_50489_53487[(1)] = (13));

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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_50495 = [null,null,null,null,null,null,null,null,null];
(statearr_50495[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_50495[(1)] = (1));

return statearr_50495;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_50436){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_50436);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e50497){var ex__48981__auto__ = e50497;
var statearr_50498_53491 = state_50436;
(statearr_50498_53491[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_50436[(4)]))){
var statearr_50501_53492 = state_50436;
(statearr_50501_53492[(1)] = cljs.core.first((state_50436[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53493 = state_50436;
state_50436 = G__53493;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_50436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_50436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_50505 = f__49320__auto__();
(statearr_50505[(6)] = c__49319__auto___53466);

return statearr_50505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
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
var c__49319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_50533){
var state_val_50534 = (state_50533[(1)]);
if((state_val_50534 === (7))){
var inst_50527 = (state_50533[(2)]);
var state_50533__$1 = state_50533;
var statearr_50536_53498 = state_50533__$1;
(statearr_50536_53498[(2)] = inst_50527);

(statearr_50536_53498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (1))){
var inst_50509 = init;
var inst_50510 = inst_50509;
var state_50533__$1 = (function (){var statearr_50537 = state_50533;
(statearr_50537[(7)] = inst_50510);

return statearr_50537;
})();
var statearr_50539_53499 = state_50533__$1;
(statearr_50539_53499[(2)] = null);

(statearr_50539_53499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (4))){
var inst_50513 = (state_50533[(8)]);
var inst_50513__$1 = (state_50533[(2)]);
var inst_50514 = (inst_50513__$1 == null);
var state_50533__$1 = (function (){var statearr_50540 = state_50533;
(statearr_50540[(8)] = inst_50513__$1);

return statearr_50540;
})();
if(cljs.core.truth_(inst_50514)){
var statearr_50543_53513 = state_50533__$1;
(statearr_50543_53513[(1)] = (5));

} else {
var statearr_50544_53514 = state_50533__$1;
(statearr_50544_53514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (6))){
var inst_50510 = (state_50533[(7)]);
var inst_50518 = (state_50533[(9)]);
var inst_50513 = (state_50533[(8)]);
var inst_50518__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50510,inst_50513) : f.call(null,inst_50510,inst_50513));
var inst_50519 = cljs.core.reduced_QMARK_(inst_50518__$1);
var state_50533__$1 = (function (){var statearr_50547 = state_50533;
(statearr_50547[(9)] = inst_50518__$1);

return statearr_50547;
})();
if(inst_50519){
var statearr_50548_53515 = state_50533__$1;
(statearr_50548_53515[(1)] = (8));

} else {
var statearr_50549_53516 = state_50533__$1;
(statearr_50549_53516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (3))){
var inst_50529 = (state_50533[(2)]);
var state_50533__$1 = state_50533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50533__$1,inst_50529);
} else {
if((state_val_50534 === (2))){
var state_50533__$1 = state_50533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50533__$1,(4),ch);
} else {
if((state_val_50534 === (9))){
var inst_50518 = (state_50533[(9)]);
var inst_50510 = inst_50518;
var state_50533__$1 = (function (){var statearr_50550 = state_50533;
(statearr_50550[(7)] = inst_50510);

return statearr_50550;
})();
var statearr_50551_53520 = state_50533__$1;
(statearr_50551_53520[(2)] = null);

(statearr_50551_53520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (5))){
var inst_50510 = (state_50533[(7)]);
var state_50533__$1 = state_50533;
var statearr_50555_53523 = state_50533__$1;
(statearr_50555_53523[(2)] = inst_50510);

(statearr_50555_53523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (10))){
var inst_50525 = (state_50533[(2)]);
var state_50533__$1 = state_50533;
var statearr_50563_53525 = state_50533__$1;
(statearr_50563_53525[(2)] = inst_50525);

(statearr_50563_53525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (8))){
var inst_50518 = (state_50533[(9)]);
var inst_50521 = cljs.core.deref(inst_50518);
var state_50533__$1 = state_50533;
var statearr_50567_53526 = state_50533__$1;
(statearr_50567_53526[(2)] = inst_50521);

(statearr_50567_53526[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__48978__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48978__auto____0 = (function (){
var statearr_50577 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50577[(0)] = cljs$core$async$reduce_$_state_machine__48978__auto__);

(statearr_50577[(1)] = (1));

return statearr_50577;
});
var cljs$core$async$reduce_$_state_machine__48978__auto____1 = (function (state_50533){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_50533);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e50578){var ex__48981__auto__ = e50578;
var statearr_50579_53531 = state_50533;
(statearr_50579_53531[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_50533[(4)]))){
var statearr_50580_53535 = state_50533;
(statearr_50580_53535[(1)] = cljs.core.first((state_50533[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53536 = state_50533;
state_50533 = G__53536;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48978__auto__ = function(state_50533){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48978__auto____1.call(this,state_50533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48978__auto____0;
cljs$core$async$reduce_$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48978__auto____1;
return cljs$core$async$reduce_$_state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_50587 = f__49320__auto__();
(statearr_50587[(6)] = c__49319__auto__);

return statearr_50587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));

return c__49319__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_50594){
var state_val_50595 = (state_50594[(1)]);
if((state_val_50595 === (1))){
var inst_50589 = cljs.core.async.reduce(f__$1,init,ch);
var state_50594__$1 = state_50594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50594__$1,(2),inst_50589);
} else {
if((state_val_50595 === (2))){
var inst_50591 = (state_50594[(2)]);
var inst_50592 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50591) : f__$1.call(null,inst_50591));
var state_50594__$1 = state_50594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50594__$1,inst_50592);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48978__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48978__auto____0 = (function (){
var statearr_50605 = [null,null,null,null,null,null,null];
(statearr_50605[(0)] = cljs$core$async$transduce_$_state_machine__48978__auto__);

(statearr_50605[(1)] = (1));

return statearr_50605;
});
var cljs$core$async$transduce_$_state_machine__48978__auto____1 = (function (state_50594){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_50594);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e50610){var ex__48981__auto__ = e50610;
var statearr_50613_53542 = state_50594;
(statearr_50613_53542[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_50594[(4)]))){
var statearr_50615_53543 = state_50594;
(statearr_50615_53543[(1)] = cljs.core.first((state_50594[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53544 = state_50594;
state_50594 = G__53544;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48978__auto__ = function(state_50594){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48978__auto____1.call(this,state_50594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48978__auto____0;
cljs$core$async$transduce_$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48978__auto____1;
return cljs$core$async$transduce_$_state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_50617 = f__49320__auto__();
(statearr_50617[(6)] = c__49319__auto__);

return statearr_50617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));

return c__49319__auto__;
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
var G__50623 = arguments.length;
switch (G__50623) {
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
var c__49319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_50655){
var state_val_50656 = (state_50655[(1)]);
if((state_val_50656 === (7))){
var inst_50637 = (state_50655[(2)]);
var state_50655__$1 = state_50655;
var statearr_50659_53549 = state_50655__$1;
(statearr_50659_53549[(2)] = inst_50637);

(statearr_50659_53549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (1))){
var inst_50630 = cljs.core.seq(coll);
var inst_50631 = inst_50630;
var state_50655__$1 = (function (){var statearr_50665 = state_50655;
(statearr_50665[(7)] = inst_50631);

return statearr_50665;
})();
var statearr_50667_53554 = state_50655__$1;
(statearr_50667_53554[(2)] = null);

(statearr_50667_53554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (4))){
var inst_50631 = (state_50655[(7)]);
var inst_50635 = cljs.core.first(inst_50631);
var state_50655__$1 = state_50655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50655__$1,(7),ch,inst_50635);
} else {
if((state_val_50656 === (13))){
var inst_50649 = (state_50655[(2)]);
var state_50655__$1 = state_50655;
var statearr_50674_53555 = state_50655__$1;
(statearr_50674_53555[(2)] = inst_50649);

(statearr_50674_53555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (6))){
var inst_50640 = (state_50655[(2)]);
var state_50655__$1 = state_50655;
if(cljs.core.truth_(inst_50640)){
var statearr_50675_53556 = state_50655__$1;
(statearr_50675_53556[(1)] = (8));

} else {
var statearr_50677_53557 = state_50655__$1;
(statearr_50677_53557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (3))){
var inst_50653 = (state_50655[(2)]);
var state_50655__$1 = state_50655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50655__$1,inst_50653);
} else {
if((state_val_50656 === (12))){
var state_50655__$1 = state_50655;
var statearr_50678_53562 = state_50655__$1;
(statearr_50678_53562[(2)] = null);

(statearr_50678_53562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (2))){
var inst_50631 = (state_50655[(7)]);
var state_50655__$1 = state_50655;
if(cljs.core.truth_(inst_50631)){
var statearr_50680_53564 = state_50655__$1;
(statearr_50680_53564[(1)] = (4));

} else {
var statearr_50681_53565 = state_50655__$1;
(statearr_50681_53565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (11))){
var inst_50646 = cljs.core.async.close_BANG_(ch);
var state_50655__$1 = state_50655;
var statearr_50686_53566 = state_50655__$1;
(statearr_50686_53566[(2)] = inst_50646);

(statearr_50686_53566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (9))){
var state_50655__$1 = state_50655;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50687_53567 = state_50655__$1;
(statearr_50687_53567[(1)] = (11));

} else {
var statearr_50689_53568 = state_50655__$1;
(statearr_50689_53568[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (5))){
var inst_50631 = (state_50655[(7)]);
var state_50655__$1 = state_50655;
var statearr_50695_53570 = state_50655__$1;
(statearr_50695_53570[(2)] = inst_50631);

(statearr_50695_53570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (10))){
var inst_50651 = (state_50655[(2)]);
var state_50655__$1 = state_50655;
var statearr_50697_53571 = state_50655__$1;
(statearr_50697_53571[(2)] = inst_50651);

(statearr_50697_53571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50656 === (8))){
var inst_50631 = (state_50655[(7)]);
var inst_50642 = cljs.core.next(inst_50631);
var inst_50631__$1 = inst_50642;
var state_50655__$1 = (function (){var statearr_50699 = state_50655;
(statearr_50699[(7)] = inst_50631__$1);

return statearr_50699;
})();
var statearr_50700_53574 = state_50655__$1;
(statearr_50700_53574[(2)] = null);

(statearr_50700_53574[(1)] = (2));


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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_50708 = [null,null,null,null,null,null,null,null];
(statearr_50708[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_50708[(1)] = (1));

return statearr_50708;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_50655){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_50655);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e50709){var ex__48981__auto__ = e50709;
var statearr_50710_53576 = state_50655;
(statearr_50710_53576[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_50655[(4)]))){
var statearr_50714_53577 = state_50655;
(statearr_50714_53577[(1)] = cljs.core.first((state_50655[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53578 = state_50655;
state_50655 = G__53578;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_50655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_50655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_50717 = f__49320__auto__();
(statearr_50717[(6)] = c__49319__auto__);

return statearr_50717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));

return c__49319__auto__;
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
var G__50726 = arguments.length;
switch (G__50726) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_53588 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_53588(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53590 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_53590(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53596 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_53596(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53607 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_53607(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50762 = (function (ch,cs,meta50763){
this.ch = ch;
this.cs = cs;
this.meta50763 = meta50763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50764,meta50763__$1){
var self__ = this;
var _50764__$1 = this;
return (new cljs.core.async.t_cljs$core$async50762(self__.ch,self__.cs,meta50763__$1));
}));

(cljs.core.async.t_cljs$core$async50762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50764){
var self__ = this;
var _50764__$1 = this;
return self__.meta50763;
}));

(cljs.core.async.t_cljs$core$async50762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50762.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50762.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50762.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50762.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50763","meta50763",-510643865,null)], null);
}));

(cljs.core.async.t_cljs$core$async50762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50762");

(cljs.core.async.t_cljs$core$async50762.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50762.
 */
cljs.core.async.__GT_t_cljs$core$async50762 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50762(ch__$1,cs__$1,meta50763){
return (new cljs.core.async.t_cljs$core$async50762(ch__$1,cs__$1,meta50763));
});

}

return (new cljs.core.async.t_cljs$core$async50762(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__49319__auto___53636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_50940){
var state_val_50942 = (state_50940[(1)]);
if((state_val_50942 === (7))){
var inst_50935 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_50943_53637 = state_50940__$1;
(statearr_50943_53637[(2)] = inst_50935);

(statearr_50943_53637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (20))){
var inst_50823 = (state_50940[(7)]);
var inst_50840 = cljs.core.first(inst_50823);
var inst_50841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50840,(0),null);
var inst_50842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50840,(1),null);
var state_50940__$1 = (function (){var statearr_50944 = state_50940;
(statearr_50944[(8)] = inst_50841);

return statearr_50944;
})();
if(cljs.core.truth_(inst_50842)){
var statearr_50947_53641 = state_50940__$1;
(statearr_50947_53641[(1)] = (22));

} else {
var statearr_50948_53642 = state_50940__$1;
(statearr_50948_53642[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (27))){
var inst_50879 = (state_50940[(9)]);
var inst_50884 = (state_50940[(10)]);
var inst_50877 = (state_50940[(11)]);
var inst_50787 = (state_50940[(12)]);
var inst_50884__$1 = cljs.core._nth(inst_50877,inst_50879);
var inst_50885 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50884__$1,inst_50787,done);
var state_50940__$1 = (function (){var statearr_50951 = state_50940;
(statearr_50951[(10)] = inst_50884__$1);

return statearr_50951;
})();
if(cljs.core.truth_(inst_50885)){
var statearr_50954_53644 = state_50940__$1;
(statearr_50954_53644[(1)] = (30));

} else {
var statearr_50955_53645 = state_50940__$1;
(statearr_50955_53645[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (1))){
var state_50940__$1 = state_50940;
var statearr_50956_53646 = state_50940__$1;
(statearr_50956_53646[(2)] = null);

(statearr_50956_53646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (24))){
var inst_50823 = (state_50940[(7)]);
var inst_50850 = (state_50940[(2)]);
var inst_50851 = cljs.core.next(inst_50823);
var inst_50800 = inst_50851;
var inst_50801 = null;
var inst_50802 = (0);
var inst_50803 = (0);
var state_50940__$1 = (function (){var statearr_50957 = state_50940;
(statearr_50957[(13)] = inst_50800);

(statearr_50957[(14)] = inst_50802);

(statearr_50957[(15)] = inst_50801);

(statearr_50957[(16)] = inst_50850);

(statearr_50957[(17)] = inst_50803);

return statearr_50957;
})();
var statearr_50959_53648 = state_50940__$1;
(statearr_50959_53648[(2)] = null);

(statearr_50959_53648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (39))){
var state_50940__$1 = state_50940;
var statearr_50968_53652 = state_50940__$1;
(statearr_50968_53652[(2)] = null);

(statearr_50968_53652[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (4))){
var inst_50787 = (state_50940[(12)]);
var inst_50787__$1 = (state_50940[(2)]);
var inst_50788 = (inst_50787__$1 == null);
var state_50940__$1 = (function (){var statearr_50969 = state_50940;
(statearr_50969[(12)] = inst_50787__$1);

return statearr_50969;
})();
if(cljs.core.truth_(inst_50788)){
var statearr_50971_53655 = state_50940__$1;
(statearr_50971_53655[(1)] = (5));

} else {
var statearr_50974_53656 = state_50940__$1;
(statearr_50974_53656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (15))){
var inst_50800 = (state_50940[(13)]);
var inst_50802 = (state_50940[(14)]);
var inst_50801 = (state_50940[(15)]);
var inst_50803 = (state_50940[(17)]);
var inst_50818 = (state_50940[(2)]);
var inst_50820 = (inst_50803 + (1));
var tmp50963 = inst_50800;
var tmp50964 = inst_50802;
var tmp50965 = inst_50801;
var inst_50800__$1 = tmp50963;
var inst_50801__$1 = tmp50965;
var inst_50802__$1 = tmp50964;
var inst_50803__$1 = inst_50820;
var state_50940__$1 = (function (){var statearr_50975 = state_50940;
(statearr_50975[(13)] = inst_50800__$1);

(statearr_50975[(14)] = inst_50802__$1);

(statearr_50975[(15)] = inst_50801__$1);

(statearr_50975[(18)] = inst_50818);

(statearr_50975[(17)] = inst_50803__$1);

return statearr_50975;
})();
var statearr_50976_53663 = state_50940__$1;
(statearr_50976_53663[(2)] = null);

(statearr_50976_53663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (21))){
var inst_50854 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_50981_53664 = state_50940__$1;
(statearr_50981_53664[(2)] = inst_50854);

(statearr_50981_53664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (31))){
var inst_50884 = (state_50940[(10)]);
var inst_50888 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50884);
var state_50940__$1 = state_50940;
var statearr_50984_53665 = state_50940__$1;
(statearr_50984_53665[(2)] = inst_50888);

(statearr_50984_53665[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (32))){
var inst_50879 = (state_50940[(9)]);
var inst_50876 = (state_50940[(19)]);
var inst_50878 = (state_50940[(20)]);
var inst_50877 = (state_50940[(11)]);
var inst_50890 = (state_50940[(2)]);
var inst_50895 = (inst_50879 + (1));
var tmp50977 = inst_50876;
var tmp50978 = inst_50878;
var tmp50979 = inst_50877;
var inst_50876__$1 = tmp50977;
var inst_50877__$1 = tmp50979;
var inst_50878__$1 = tmp50978;
var inst_50879__$1 = inst_50895;
var state_50940__$1 = (function (){var statearr_50985 = state_50940;
(statearr_50985[(9)] = inst_50879__$1);

(statearr_50985[(19)] = inst_50876__$1);

(statearr_50985[(21)] = inst_50890);

(statearr_50985[(20)] = inst_50878__$1);

(statearr_50985[(11)] = inst_50877__$1);

return statearr_50985;
})();
var statearr_50986_53671 = state_50940__$1;
(statearr_50986_53671[(2)] = null);

(statearr_50986_53671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (40))){
var inst_50907 = (state_50940[(22)]);
var inst_50911 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50907);
var state_50940__$1 = state_50940;
var statearr_50989_53675 = state_50940__$1;
(statearr_50989_53675[(2)] = inst_50911);

(statearr_50989_53675[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (33))){
var inst_50898 = (state_50940[(23)]);
var inst_50900 = cljs.core.chunked_seq_QMARK_(inst_50898);
var state_50940__$1 = state_50940;
if(inst_50900){
var statearr_50993_53676 = state_50940__$1;
(statearr_50993_53676[(1)] = (36));

} else {
var statearr_50995_53679 = state_50940__$1;
(statearr_50995_53679[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (13))){
var inst_50812 = (state_50940[(24)]);
var inst_50815 = cljs.core.async.close_BANG_(inst_50812);
var state_50940__$1 = state_50940;
var statearr_51000_53682 = state_50940__$1;
(statearr_51000_53682[(2)] = inst_50815);

(statearr_51000_53682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (22))){
var inst_50841 = (state_50940[(8)]);
var inst_50847 = cljs.core.async.close_BANG_(inst_50841);
var state_50940__$1 = state_50940;
var statearr_51002_53688 = state_50940__$1;
(statearr_51002_53688[(2)] = inst_50847);

(statearr_51002_53688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (36))){
var inst_50898 = (state_50940[(23)]);
var inst_50902 = cljs.core.chunk_first(inst_50898);
var inst_50903 = cljs.core.chunk_rest(inst_50898);
var inst_50904 = cljs.core.count(inst_50902);
var inst_50876 = inst_50903;
var inst_50877 = inst_50902;
var inst_50878 = inst_50904;
var inst_50879 = (0);
var state_50940__$1 = (function (){var statearr_51004 = state_50940;
(statearr_51004[(9)] = inst_50879);

(statearr_51004[(19)] = inst_50876);

(statearr_51004[(20)] = inst_50878);

(statearr_51004[(11)] = inst_50877);

return statearr_51004;
})();
var statearr_51006_53691 = state_50940__$1;
(statearr_51006_53691[(2)] = null);

(statearr_51006_53691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (41))){
var inst_50898 = (state_50940[(23)]);
var inst_50913 = (state_50940[(2)]);
var inst_50914 = cljs.core.next(inst_50898);
var inst_50876 = inst_50914;
var inst_50877 = null;
var inst_50878 = (0);
var inst_50879 = (0);
var state_50940__$1 = (function (){var statearr_51008 = state_50940;
(statearr_51008[(9)] = inst_50879);

(statearr_51008[(19)] = inst_50876);

(statearr_51008[(25)] = inst_50913);

(statearr_51008[(20)] = inst_50878);

(statearr_51008[(11)] = inst_50877);

return statearr_51008;
})();
var statearr_51010_53696 = state_50940__$1;
(statearr_51010_53696[(2)] = null);

(statearr_51010_53696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (43))){
var state_50940__$1 = state_50940;
var statearr_51012_53703 = state_50940__$1;
(statearr_51012_53703[(2)] = null);

(statearr_51012_53703[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (29))){
var inst_50923 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_51014_53704 = state_50940__$1;
(statearr_51014_53704[(2)] = inst_50923);

(statearr_51014_53704[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (44))){
var inst_50932 = (state_50940[(2)]);
var state_50940__$1 = (function (){var statearr_51016 = state_50940;
(statearr_51016[(26)] = inst_50932);

return statearr_51016;
})();
var statearr_51017_53706 = state_50940__$1;
(statearr_51017_53706[(2)] = null);

(statearr_51017_53706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (6))){
var inst_50864 = (state_50940[(27)]);
var inst_50863 = cljs.core.deref(cs);
var inst_50864__$1 = cljs.core.keys(inst_50863);
var inst_50867 = cljs.core.count(inst_50864__$1);
var inst_50868 = cljs.core.reset_BANG_(dctr,inst_50867);
var inst_50873 = cljs.core.seq(inst_50864__$1);
var inst_50876 = inst_50873;
var inst_50877 = null;
var inst_50878 = (0);
var inst_50879 = (0);
var state_50940__$1 = (function (){var statearr_51018 = state_50940;
(statearr_51018[(9)] = inst_50879);

(statearr_51018[(19)] = inst_50876);

(statearr_51018[(27)] = inst_50864__$1);

(statearr_51018[(28)] = inst_50868);

(statearr_51018[(20)] = inst_50878);

(statearr_51018[(11)] = inst_50877);

return statearr_51018;
})();
var statearr_51021_53713 = state_50940__$1;
(statearr_51021_53713[(2)] = null);

(statearr_51021_53713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (28))){
var inst_50898 = (state_50940[(23)]);
var inst_50876 = (state_50940[(19)]);
var inst_50898__$1 = cljs.core.seq(inst_50876);
var state_50940__$1 = (function (){var statearr_51024 = state_50940;
(statearr_51024[(23)] = inst_50898__$1);

return statearr_51024;
})();
if(inst_50898__$1){
var statearr_51025_53715 = state_50940__$1;
(statearr_51025_53715[(1)] = (33));

} else {
var statearr_51026_53716 = state_50940__$1;
(statearr_51026_53716[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (25))){
var inst_50879 = (state_50940[(9)]);
var inst_50878 = (state_50940[(20)]);
var inst_50881 = (inst_50879 < inst_50878);
var inst_50882 = inst_50881;
var state_50940__$1 = state_50940;
if(cljs.core.truth_(inst_50882)){
var statearr_51027_53717 = state_50940__$1;
(statearr_51027_53717[(1)] = (27));

} else {
var statearr_51028_53718 = state_50940__$1;
(statearr_51028_53718[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (34))){
var state_50940__$1 = state_50940;
var statearr_51029_53719 = state_50940__$1;
(statearr_51029_53719[(2)] = null);

(statearr_51029_53719[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (17))){
var state_50940__$1 = state_50940;
var statearr_51032_53720 = state_50940__$1;
(statearr_51032_53720[(2)] = null);

(statearr_51032_53720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (3))){
var inst_50937 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50940__$1,inst_50937);
} else {
if((state_val_50942 === (12))){
var inst_50859 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_51046_53728 = state_50940__$1;
(statearr_51046_53728[(2)] = inst_50859);

(statearr_51046_53728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (2))){
var state_50940__$1 = state_50940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50940__$1,(4),ch);
} else {
if((state_val_50942 === (23))){
var state_50940__$1 = state_50940;
var statearr_51050_53729 = state_50940__$1;
(statearr_51050_53729[(2)] = null);

(statearr_51050_53729[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (35))){
var inst_50921 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_51052_53730 = state_50940__$1;
(statearr_51052_53730[(2)] = inst_50921);

(statearr_51052_53730[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (19))){
var inst_50823 = (state_50940[(7)]);
var inst_50831 = cljs.core.chunk_first(inst_50823);
var inst_50833 = cljs.core.chunk_rest(inst_50823);
var inst_50834 = cljs.core.count(inst_50831);
var inst_50800 = inst_50833;
var inst_50801 = inst_50831;
var inst_50802 = inst_50834;
var inst_50803 = (0);
var state_50940__$1 = (function (){var statearr_51055 = state_50940;
(statearr_51055[(13)] = inst_50800);

(statearr_51055[(14)] = inst_50802);

(statearr_51055[(15)] = inst_50801);

(statearr_51055[(17)] = inst_50803);

return statearr_51055;
})();
var statearr_51056_53731 = state_50940__$1;
(statearr_51056_53731[(2)] = null);

(statearr_51056_53731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (11))){
var inst_50800 = (state_50940[(13)]);
var inst_50823 = (state_50940[(7)]);
var inst_50823__$1 = cljs.core.seq(inst_50800);
var state_50940__$1 = (function (){var statearr_51057 = state_50940;
(statearr_51057[(7)] = inst_50823__$1);

return statearr_51057;
})();
if(inst_50823__$1){
var statearr_51058_53733 = state_50940__$1;
(statearr_51058_53733[(1)] = (16));

} else {
var statearr_51060_53734 = state_50940__$1;
(statearr_51060_53734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (9))){
var inst_50861 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_51064_53735 = state_50940__$1;
(statearr_51064_53735[(2)] = inst_50861);

(statearr_51064_53735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (5))){
var inst_50794 = cljs.core.deref(cs);
var inst_50795 = cljs.core.seq(inst_50794);
var inst_50800 = inst_50795;
var inst_50801 = null;
var inst_50802 = (0);
var inst_50803 = (0);
var state_50940__$1 = (function (){var statearr_51068 = state_50940;
(statearr_51068[(13)] = inst_50800);

(statearr_51068[(14)] = inst_50802);

(statearr_51068[(15)] = inst_50801);

(statearr_51068[(17)] = inst_50803);

return statearr_51068;
})();
var statearr_51070_53739 = state_50940__$1;
(statearr_51070_53739[(2)] = null);

(statearr_51070_53739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (14))){
var state_50940__$1 = state_50940;
var statearr_51073_53740 = state_50940__$1;
(statearr_51073_53740[(2)] = null);

(statearr_51073_53740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (45))){
var inst_50929 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_51077_53745 = state_50940__$1;
(statearr_51077_53745[(2)] = inst_50929);

(statearr_51077_53745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (26))){
var inst_50864 = (state_50940[(27)]);
var inst_50925 = (state_50940[(2)]);
var inst_50926 = cljs.core.seq(inst_50864);
var state_50940__$1 = (function (){var statearr_51080 = state_50940;
(statearr_51080[(29)] = inst_50925);

return statearr_51080;
})();
if(inst_50926){
var statearr_51083_53755 = state_50940__$1;
(statearr_51083_53755[(1)] = (42));

} else {
var statearr_51084_53756 = state_50940__$1;
(statearr_51084_53756[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (16))){
var inst_50823 = (state_50940[(7)]);
var inst_50829 = cljs.core.chunked_seq_QMARK_(inst_50823);
var state_50940__$1 = state_50940;
if(inst_50829){
var statearr_51085_53759 = state_50940__$1;
(statearr_51085_53759[(1)] = (19));

} else {
var statearr_51086_53760 = state_50940__$1;
(statearr_51086_53760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (38))){
var inst_50918 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_51089_53761 = state_50940__$1;
(statearr_51089_53761[(2)] = inst_50918);

(statearr_51089_53761[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (30))){
var state_50940__$1 = state_50940;
var statearr_51092_53764 = state_50940__$1;
(statearr_51092_53764[(2)] = null);

(statearr_51092_53764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (10))){
var inst_50801 = (state_50940[(15)]);
var inst_50803 = (state_50940[(17)]);
var inst_50811 = cljs.core._nth(inst_50801,inst_50803);
var inst_50812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50811,(0),null);
var inst_50813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50811,(1),null);
var state_50940__$1 = (function (){var statearr_51100 = state_50940;
(statearr_51100[(24)] = inst_50812);

return statearr_51100;
})();
if(cljs.core.truth_(inst_50813)){
var statearr_51103_53768 = state_50940__$1;
(statearr_51103_53768[(1)] = (13));

} else {
var statearr_51104_53769 = state_50940__$1;
(statearr_51104_53769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (18))){
var inst_50857 = (state_50940[(2)]);
var state_50940__$1 = state_50940;
var statearr_51105_53774 = state_50940__$1;
(statearr_51105_53774[(2)] = inst_50857);

(statearr_51105_53774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (42))){
var state_50940__$1 = state_50940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50940__$1,(45),dchan);
} else {
if((state_val_50942 === (37))){
var inst_50898 = (state_50940[(23)]);
var inst_50907 = (state_50940[(22)]);
var inst_50787 = (state_50940[(12)]);
var inst_50907__$1 = cljs.core.first(inst_50898);
var inst_50908 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50907__$1,inst_50787,done);
var state_50940__$1 = (function (){var statearr_51108 = state_50940;
(statearr_51108[(22)] = inst_50907__$1);

return statearr_51108;
})();
if(cljs.core.truth_(inst_50908)){
var statearr_51110_53783 = state_50940__$1;
(statearr_51110_53783[(1)] = (39));

} else {
var statearr_51112_53784 = state_50940__$1;
(statearr_51112_53784[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50942 === (8))){
var inst_50802 = (state_50940[(14)]);
var inst_50803 = (state_50940[(17)]);
var inst_50805 = (inst_50803 < inst_50802);
var inst_50806 = inst_50805;
var state_50940__$1 = state_50940;
if(cljs.core.truth_(inst_50806)){
var statearr_51115_53785 = state_50940__$1;
(statearr_51115_53785[(1)] = (10));

} else {
var statearr_51117_53786 = state_50940__$1;
(statearr_51117_53786[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__48978__auto__ = null;
var cljs$core$async$mult_$_state_machine__48978__auto____0 = (function (){
var statearr_51121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51121[(0)] = cljs$core$async$mult_$_state_machine__48978__auto__);

(statearr_51121[(1)] = (1));

return statearr_51121;
});
var cljs$core$async$mult_$_state_machine__48978__auto____1 = (function (state_50940){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_50940);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e51122){var ex__48981__auto__ = e51122;
var statearr_51123_53788 = state_50940;
(statearr_51123_53788[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_50940[(4)]))){
var statearr_51124_53789 = state_50940;
(statearr_51124_53789[(1)] = cljs.core.first((state_50940[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53790 = state_50940;
state_50940 = G__53790;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48978__auto__ = function(state_50940){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48978__auto____1.call(this,state_50940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48978__auto____0;
cljs$core$async$mult_$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48978__auto____1;
return cljs$core$async$mult_$_state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_51126 = f__49320__auto__();
(statearr_51126[(6)] = c__49319__auto___53636);

return statearr_51126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
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
var G__51128 = arguments.length;
switch (G__51128) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_53802 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_53802(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53803 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_53803(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53804 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53804(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53805 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_53805(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53807 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53807(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53812 = arguments.length;
var i__4830__auto___53813 = (0);
while(true){
if((i__4830__auto___53813 < len__4829__auto___53812)){
args__4835__auto__.push((arguments[i__4830__auto___53813]));

var G__53814 = (i__4830__auto___53813 + (1));
i__4830__auto___53813 = G__53814;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51205){
var map__51208 = p__51205;
var map__51208__$1 = cljs.core.__destructure_map(map__51208);
var opts = map__51208__$1;
var statearr_51209_53821 = state;
(statearr_51209_53821[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51211_53822 = state;
(statearr_51211_53822[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_51223_53823 = state;
(statearr_51223_53823[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51196){
var G__51197 = cljs.core.first(seq51196);
var seq51196__$1 = cljs.core.next(seq51196);
var G__51198 = cljs.core.first(seq51196__$1);
var seq51196__$2 = cljs.core.next(seq51196__$1);
var G__51199 = cljs.core.first(seq51196__$2);
var seq51196__$3 = cljs.core.next(seq51196__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51197,G__51198,G__51199,seq51196__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51247 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51248){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51248 = meta51248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51249,meta51248__$1){
var self__ = this;
var _51249__$1 = this;
return (new cljs.core.async.t_cljs$core$async51247(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51248__$1));
}));

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51249){
var self__ = this;
var _51249__$1 = this;
return self__.meta51248;
}));

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51247.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51248","meta51248",-2047911970,null)], null);
}));

(cljs.core.async.t_cljs$core$async51247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51247");

(cljs.core.async.t_cljs$core$async51247.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51247.
 */
cljs.core.async.__GT_t_cljs$core$async51247 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51247(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51248){
return (new cljs.core.async.t_cljs$core$async51247(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51248));
});

}

return (new cljs.core.async.t_cljs$core$async51247(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49319__auto___53854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_51382){
var state_val_51383 = (state_51382[(1)]);
if((state_val_51383 === (7))){
var inst_51328 = (state_51382[(2)]);
var state_51382__$1 = state_51382;
if(cljs.core.truth_(inst_51328)){
var statearr_51386_53855 = state_51382__$1;
(statearr_51386_53855[(1)] = (8));

} else {
var statearr_51387_53857 = state_51382__$1;
(statearr_51387_53857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (20))){
var inst_51313 = (state_51382[(7)]);
var state_51382__$1 = state_51382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51382__$1,(23),out,inst_51313);
} else {
if((state_val_51383 === (1))){
var inst_51283 = calc_state();
var inst_51284 = cljs.core.__destructure_map(inst_51283);
var inst_51285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51284,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51284,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51284,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51288 = inst_51283;
var state_51382__$1 = (function (){var statearr_51395 = state_51382;
(statearr_51395[(8)] = inst_51287);

(statearr_51395[(9)] = inst_51285);

(statearr_51395[(10)] = inst_51288);

(statearr_51395[(11)] = inst_51286);

return statearr_51395;
})();
var statearr_51397_53866 = state_51382__$1;
(statearr_51397_53866[(2)] = null);

(statearr_51397_53866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (24))){
var inst_51296 = (state_51382[(12)]);
var inst_51288 = inst_51296;
var state_51382__$1 = (function (){var statearr_51399 = state_51382;
(statearr_51399[(10)] = inst_51288);

return statearr_51399;
})();
var statearr_51400_53869 = state_51382__$1;
(statearr_51400_53869[(2)] = null);

(statearr_51400_53869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (4))){
var inst_51319 = (state_51382[(13)]);
var inst_51313 = (state_51382[(7)]);
var inst_51312 = (state_51382[(2)]);
var inst_51313__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51312,(0),null);
var inst_51318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51312,(1),null);
var inst_51319__$1 = (inst_51313__$1 == null);
var state_51382__$1 = (function (){var statearr_51412 = state_51382;
(statearr_51412[(14)] = inst_51318);

(statearr_51412[(13)] = inst_51319__$1);

(statearr_51412[(7)] = inst_51313__$1);

return statearr_51412;
})();
if(cljs.core.truth_(inst_51319__$1)){
var statearr_51416_53877 = state_51382__$1;
(statearr_51416_53877[(1)] = (5));

} else {
var statearr_51417_53878 = state_51382__$1;
(statearr_51417_53878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (15))){
var inst_51352 = (state_51382[(15)]);
var inst_51297 = (state_51382[(16)]);
var inst_51352__$1 = cljs.core.empty_QMARK_(inst_51297);
var state_51382__$1 = (function (){var statearr_51422 = state_51382;
(statearr_51422[(15)] = inst_51352__$1);

return statearr_51422;
})();
if(inst_51352__$1){
var statearr_51425_53881 = state_51382__$1;
(statearr_51425_53881[(1)] = (17));

} else {
var statearr_51426_53883 = state_51382__$1;
(statearr_51426_53883[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (21))){
var inst_51296 = (state_51382[(12)]);
var inst_51288 = inst_51296;
var state_51382__$1 = (function (){var statearr_51429 = state_51382;
(statearr_51429[(10)] = inst_51288);

return statearr_51429;
})();
var statearr_51431_53886 = state_51382__$1;
(statearr_51431_53886[(2)] = null);

(statearr_51431_53886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (13))){
var inst_51343 = (state_51382[(2)]);
var inst_51345 = calc_state();
var inst_51288 = inst_51345;
var state_51382__$1 = (function (){var statearr_51435 = state_51382;
(statearr_51435[(10)] = inst_51288);

(statearr_51435[(17)] = inst_51343);

return statearr_51435;
})();
var statearr_51437_53888 = state_51382__$1;
(statearr_51437_53888[(2)] = null);

(statearr_51437_53888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (22))){
var inst_51373 = (state_51382[(2)]);
var state_51382__$1 = state_51382;
var statearr_51446_53889 = state_51382__$1;
(statearr_51446_53889[(2)] = inst_51373);

(statearr_51446_53889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (6))){
var inst_51318 = (state_51382[(14)]);
var inst_51326 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51318,change);
var state_51382__$1 = state_51382;
var statearr_51455_53892 = state_51382__$1;
(statearr_51455_53892[(2)] = inst_51326);

(statearr_51455_53892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (25))){
var state_51382__$1 = state_51382;
var statearr_51467_53898 = state_51382__$1;
(statearr_51467_53898[(2)] = null);

(statearr_51467_53898[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (17))){
var inst_51303 = (state_51382[(18)]);
var inst_51318 = (state_51382[(14)]);
var inst_51354 = (inst_51303.cljs$core$IFn$_invoke$arity$1 ? inst_51303.cljs$core$IFn$_invoke$arity$1(inst_51318) : inst_51303.call(null,inst_51318));
var inst_51355 = cljs.core.not(inst_51354);
var state_51382__$1 = state_51382;
var statearr_51482_53900 = state_51382__$1;
(statearr_51482_53900[(2)] = inst_51355);

(statearr_51482_53900[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (3))){
var inst_51378 = (state_51382[(2)]);
var state_51382__$1 = state_51382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51382__$1,inst_51378);
} else {
if((state_val_51383 === (12))){
var state_51382__$1 = state_51382;
var statearr_51489_53904 = state_51382__$1;
(statearr_51489_53904[(2)] = null);

(statearr_51489_53904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (2))){
var inst_51296 = (state_51382[(12)]);
var inst_51288 = (state_51382[(10)]);
var inst_51296__$1 = cljs.core.__destructure_map(inst_51288);
var inst_51297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51296__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51296__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51296__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51382__$1 = (function (){var statearr_51495 = state_51382;
(statearr_51495[(18)] = inst_51303);

(statearr_51495[(12)] = inst_51296__$1);

(statearr_51495[(16)] = inst_51297);

return statearr_51495;
})();
return cljs.core.async.ioc_alts_BANG_(state_51382__$1,(4),inst_51306);
} else {
if((state_val_51383 === (23))){
var inst_51364 = (state_51382[(2)]);
var state_51382__$1 = state_51382;
if(cljs.core.truth_(inst_51364)){
var statearr_51499_53906 = state_51382__$1;
(statearr_51499_53906[(1)] = (24));

} else {
var statearr_51500_53907 = state_51382__$1;
(statearr_51500_53907[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (19))){
var inst_51359 = (state_51382[(2)]);
var state_51382__$1 = state_51382;
var statearr_51507_53908 = state_51382__$1;
(statearr_51507_53908[(2)] = inst_51359);

(statearr_51507_53908[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (11))){
var inst_51318 = (state_51382[(14)]);
var inst_51340 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51318);
var state_51382__$1 = state_51382;
var statearr_51513_53911 = state_51382__$1;
(statearr_51513_53911[(2)] = inst_51340);

(statearr_51513_53911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (9))){
var inst_51349 = (state_51382[(19)]);
var inst_51318 = (state_51382[(14)]);
var inst_51297 = (state_51382[(16)]);
var inst_51349__$1 = (inst_51297.cljs$core$IFn$_invoke$arity$1 ? inst_51297.cljs$core$IFn$_invoke$arity$1(inst_51318) : inst_51297.call(null,inst_51318));
var state_51382__$1 = (function (){var statearr_51517 = state_51382;
(statearr_51517[(19)] = inst_51349__$1);

return statearr_51517;
})();
if(cljs.core.truth_(inst_51349__$1)){
var statearr_51520_53913 = state_51382__$1;
(statearr_51520_53913[(1)] = (14));

} else {
var statearr_51521_53914 = state_51382__$1;
(statearr_51521_53914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (5))){
var inst_51319 = (state_51382[(13)]);
var state_51382__$1 = state_51382;
var statearr_51526_53920 = state_51382__$1;
(statearr_51526_53920[(2)] = inst_51319);

(statearr_51526_53920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (14))){
var inst_51349 = (state_51382[(19)]);
var state_51382__$1 = state_51382;
var statearr_51529_53921 = state_51382__$1;
(statearr_51529_53921[(2)] = inst_51349);

(statearr_51529_53921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (26))){
var inst_51369 = (state_51382[(2)]);
var state_51382__$1 = state_51382;
var statearr_51533_53922 = state_51382__$1;
(statearr_51533_53922[(2)] = inst_51369);

(statearr_51533_53922[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (16))){
var inst_51361 = (state_51382[(2)]);
var state_51382__$1 = state_51382;
if(cljs.core.truth_(inst_51361)){
var statearr_51535_53928 = state_51382__$1;
(statearr_51535_53928[(1)] = (20));

} else {
var statearr_51536_53929 = state_51382__$1;
(statearr_51536_53929[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (10))){
var inst_51376 = (state_51382[(2)]);
var state_51382__$1 = state_51382;
var statearr_51540_53930 = state_51382__$1;
(statearr_51540_53930[(2)] = inst_51376);

(statearr_51540_53930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (18))){
var inst_51352 = (state_51382[(15)]);
var state_51382__$1 = state_51382;
var statearr_51544_53932 = state_51382__$1;
(statearr_51544_53932[(2)] = inst_51352);

(statearr_51544_53932[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51383 === (8))){
var inst_51313 = (state_51382[(7)]);
var inst_51338 = (inst_51313 == null);
var state_51382__$1 = state_51382;
if(cljs.core.truth_(inst_51338)){
var statearr_51546_53934 = state_51382__$1;
(statearr_51546_53934[(1)] = (11));

} else {
var statearr_51548_53935 = state_51382__$1;
(statearr_51548_53935[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__48978__auto__ = null;
var cljs$core$async$mix_$_state_machine__48978__auto____0 = (function (){
var statearr_51552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51552[(0)] = cljs$core$async$mix_$_state_machine__48978__auto__);

(statearr_51552[(1)] = (1));

return statearr_51552;
});
var cljs$core$async$mix_$_state_machine__48978__auto____1 = (function (state_51382){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_51382);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e51555){var ex__48981__auto__ = e51555;
var statearr_51556_53939 = state_51382;
(statearr_51556_53939[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_51382[(4)]))){
var statearr_51559_53943 = state_51382;
(statearr_51559_53943[(1)] = cljs.core.first((state_51382[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53944 = state_51382;
state_51382 = G__53944;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48978__auto__ = function(state_51382){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48978__auto____1.call(this,state_51382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48978__auto____0;
cljs$core$async$mix_$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48978__auto____1;
return cljs$core$async$mix_$_state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_51564 = f__49320__auto__();
(statearr_51564[(6)] = c__49319__auto___53854);

return statearr_51564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_53951 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_53951(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53958 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_53958(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53959 = (function() {
var G__53960 = null;
var G__53960__1 = (function (p){
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
var G__53960__2 = (function (p,v){
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
G__53960 = function(p,v){
switch(arguments.length){
case 1:
return G__53960__1.call(this,p);
case 2:
return G__53960__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53960.cljs$core$IFn$_invoke$arity$1 = G__53960__1;
G__53960.cljs$core$IFn$_invoke$arity$2 = G__53960__2;
return G__53960;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51626 = arguments.length;
switch (G__51626) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53959(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53959(p,v);
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
var G__51662 = arguments.length;
switch (G__51662) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51657_SHARP_){
if(cljs.core.truth_((p1__51657_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51657_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51657_SHARP_.call(null,topic)))){
return p1__51657_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51657_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51678 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51679){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51679 = meta51679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51680,meta51679__$1){
var self__ = this;
var _51680__$1 = this;
return (new cljs.core.async.t_cljs$core$async51678(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51679__$1));
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51680){
var self__ = this;
var _51680__$1 = this;
return self__.meta51679;
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51679","meta51679",1955617560,null)], null);
}));

(cljs.core.async.t_cljs$core$async51678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51678");

(cljs.core.async.t_cljs$core$async51678.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51678.
 */
cljs.core.async.__GT_t_cljs$core$async51678 = (function cljs$core$async$__GT_t_cljs$core$async51678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51679){
return (new cljs.core.async.t_cljs$core$async51678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51679));
});

}

return (new cljs.core.async.t_cljs$core$async51678(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49319__auto___53979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_51786){
var state_val_51787 = (state_51786[(1)]);
if((state_val_51787 === (7))){
var inst_51782 = (state_51786[(2)]);
var state_51786__$1 = state_51786;
var statearr_51788_53980 = state_51786__$1;
(statearr_51788_53980[(2)] = inst_51782);

(statearr_51788_53980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (20))){
var state_51786__$1 = state_51786;
var statearr_51797_53981 = state_51786__$1;
(statearr_51797_53981[(2)] = null);

(statearr_51797_53981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (1))){
var state_51786__$1 = state_51786;
var statearr_51808_53982 = state_51786__$1;
(statearr_51808_53982[(2)] = null);

(statearr_51808_53982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (24))){
var inst_51765 = (state_51786[(7)]);
var inst_51774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51765);
var state_51786__$1 = state_51786;
var statearr_51816_53984 = state_51786__$1;
(statearr_51816_53984[(2)] = inst_51774);

(statearr_51816_53984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (4))){
var inst_51715 = (state_51786[(8)]);
var inst_51715__$1 = (state_51786[(2)]);
var inst_51716 = (inst_51715__$1 == null);
var state_51786__$1 = (function (){var statearr_51818 = state_51786;
(statearr_51818[(8)] = inst_51715__$1);

return statearr_51818;
})();
if(cljs.core.truth_(inst_51716)){
var statearr_51819_53985 = state_51786__$1;
(statearr_51819_53985[(1)] = (5));

} else {
var statearr_51820_53986 = state_51786__$1;
(statearr_51820_53986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (15))){
var inst_51759 = (state_51786[(2)]);
var state_51786__$1 = state_51786;
var statearr_51821_53990 = state_51786__$1;
(statearr_51821_53990[(2)] = inst_51759);

(statearr_51821_53990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (21))){
var inst_51779 = (state_51786[(2)]);
var state_51786__$1 = (function (){var statearr_51827 = state_51786;
(statearr_51827[(9)] = inst_51779);

return statearr_51827;
})();
var statearr_51829_53991 = state_51786__$1;
(statearr_51829_53991[(2)] = null);

(statearr_51829_53991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (13))){
var inst_51740 = (state_51786[(10)]);
var inst_51742 = cljs.core.chunked_seq_QMARK_(inst_51740);
var state_51786__$1 = state_51786;
if(inst_51742){
var statearr_51832_53992 = state_51786__$1;
(statearr_51832_53992[(1)] = (16));

} else {
var statearr_51833_53993 = state_51786__$1;
(statearr_51833_53993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (22))){
var inst_51771 = (state_51786[(2)]);
var state_51786__$1 = state_51786;
if(cljs.core.truth_(inst_51771)){
var statearr_51836_53998 = state_51786__$1;
(statearr_51836_53998[(1)] = (23));

} else {
var statearr_51841_53999 = state_51786__$1;
(statearr_51841_53999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (6))){
var inst_51767 = (state_51786[(11)]);
var inst_51715 = (state_51786[(8)]);
var inst_51765 = (state_51786[(7)]);
var inst_51765__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51715) : topic_fn.call(null,inst_51715));
var inst_51766 = cljs.core.deref(mults);
var inst_51767__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51766,inst_51765__$1);
var state_51786__$1 = (function (){var statearr_51854 = state_51786;
(statearr_51854[(11)] = inst_51767__$1);

(statearr_51854[(7)] = inst_51765__$1);

return statearr_51854;
})();
if(cljs.core.truth_(inst_51767__$1)){
var statearr_51855_54000 = state_51786__$1;
(statearr_51855_54000[(1)] = (19));

} else {
var statearr_51857_54001 = state_51786__$1;
(statearr_51857_54001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (25))){
var inst_51776 = (state_51786[(2)]);
var state_51786__$1 = state_51786;
var statearr_51862_54002 = state_51786__$1;
(statearr_51862_54002[(2)] = inst_51776);

(statearr_51862_54002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (17))){
var inst_51740 = (state_51786[(10)]);
var inst_51750 = cljs.core.first(inst_51740);
var inst_51751 = cljs.core.async.muxch_STAR_(inst_51750);
var inst_51752 = cljs.core.async.close_BANG_(inst_51751);
var inst_51753 = cljs.core.next(inst_51740);
var inst_51726 = inst_51753;
var inst_51727 = null;
var inst_51728 = (0);
var inst_51729 = (0);
var state_51786__$1 = (function (){var statearr_51866 = state_51786;
(statearr_51866[(12)] = inst_51752);

(statearr_51866[(13)] = inst_51727);

(statearr_51866[(14)] = inst_51728);

(statearr_51866[(15)] = inst_51726);

(statearr_51866[(16)] = inst_51729);

return statearr_51866;
})();
var statearr_51870_54003 = state_51786__$1;
(statearr_51870_54003[(2)] = null);

(statearr_51870_54003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (3))){
var inst_51784 = (state_51786[(2)]);
var state_51786__$1 = state_51786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51786__$1,inst_51784);
} else {
if((state_val_51787 === (12))){
var inst_51761 = (state_51786[(2)]);
var state_51786__$1 = state_51786;
var statearr_51873_54004 = state_51786__$1;
(statearr_51873_54004[(2)] = inst_51761);

(statearr_51873_54004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (2))){
var state_51786__$1 = state_51786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51786__$1,(4),ch);
} else {
if((state_val_51787 === (23))){
var state_51786__$1 = state_51786;
var statearr_51875_54005 = state_51786__$1;
(statearr_51875_54005[(2)] = null);

(statearr_51875_54005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (19))){
var inst_51767 = (state_51786[(11)]);
var inst_51715 = (state_51786[(8)]);
var inst_51769 = cljs.core.async.muxch_STAR_(inst_51767);
var state_51786__$1 = state_51786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51786__$1,(22),inst_51769,inst_51715);
} else {
if((state_val_51787 === (11))){
var inst_51740 = (state_51786[(10)]);
var inst_51726 = (state_51786[(15)]);
var inst_51740__$1 = cljs.core.seq(inst_51726);
var state_51786__$1 = (function (){var statearr_51876 = state_51786;
(statearr_51876[(10)] = inst_51740__$1);

return statearr_51876;
})();
if(inst_51740__$1){
var statearr_51877_54006 = state_51786__$1;
(statearr_51877_54006[(1)] = (13));

} else {
var statearr_51878_54007 = state_51786__$1;
(statearr_51878_54007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (9))){
var inst_51763 = (state_51786[(2)]);
var state_51786__$1 = state_51786;
var statearr_51879_54008 = state_51786__$1;
(statearr_51879_54008[(2)] = inst_51763);

(statearr_51879_54008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (5))){
var inst_51723 = cljs.core.deref(mults);
var inst_51724 = cljs.core.vals(inst_51723);
var inst_51725 = cljs.core.seq(inst_51724);
var inst_51726 = inst_51725;
var inst_51727 = null;
var inst_51728 = (0);
var inst_51729 = (0);
var state_51786__$1 = (function (){var statearr_51884 = state_51786;
(statearr_51884[(13)] = inst_51727);

(statearr_51884[(14)] = inst_51728);

(statearr_51884[(15)] = inst_51726);

(statearr_51884[(16)] = inst_51729);

return statearr_51884;
})();
var statearr_51890_54009 = state_51786__$1;
(statearr_51890_54009[(2)] = null);

(statearr_51890_54009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (14))){
var state_51786__$1 = state_51786;
var statearr_51897_54010 = state_51786__$1;
(statearr_51897_54010[(2)] = null);

(statearr_51897_54010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (16))){
var inst_51740 = (state_51786[(10)]);
var inst_51744 = cljs.core.chunk_first(inst_51740);
var inst_51745 = cljs.core.chunk_rest(inst_51740);
var inst_51746 = cljs.core.count(inst_51744);
var inst_51726 = inst_51745;
var inst_51727 = inst_51744;
var inst_51728 = inst_51746;
var inst_51729 = (0);
var state_51786__$1 = (function (){var statearr_51899 = state_51786;
(statearr_51899[(13)] = inst_51727);

(statearr_51899[(14)] = inst_51728);

(statearr_51899[(15)] = inst_51726);

(statearr_51899[(16)] = inst_51729);

return statearr_51899;
})();
var statearr_51900_54015 = state_51786__$1;
(statearr_51900_54015[(2)] = null);

(statearr_51900_54015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (10))){
var inst_51727 = (state_51786[(13)]);
var inst_51728 = (state_51786[(14)]);
var inst_51726 = (state_51786[(15)]);
var inst_51729 = (state_51786[(16)]);
var inst_51734 = cljs.core._nth(inst_51727,inst_51729);
var inst_51735 = cljs.core.async.muxch_STAR_(inst_51734);
var inst_51736 = cljs.core.async.close_BANG_(inst_51735);
var inst_51737 = (inst_51729 + (1));
var tmp51891 = inst_51727;
var tmp51892 = inst_51728;
var tmp51893 = inst_51726;
var inst_51726__$1 = tmp51893;
var inst_51727__$1 = tmp51891;
var inst_51728__$1 = tmp51892;
var inst_51729__$1 = inst_51737;
var state_51786__$1 = (function (){var statearr_51910 = state_51786;
(statearr_51910[(13)] = inst_51727__$1);

(statearr_51910[(14)] = inst_51728__$1);

(statearr_51910[(17)] = inst_51736);

(statearr_51910[(15)] = inst_51726__$1);

(statearr_51910[(16)] = inst_51729__$1);

return statearr_51910;
})();
var statearr_51916_54019 = state_51786__$1;
(statearr_51916_54019[(2)] = null);

(statearr_51916_54019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (18))){
var inst_51756 = (state_51786[(2)]);
var state_51786__$1 = state_51786;
var statearr_51919_54020 = state_51786__$1;
(statearr_51919_54020[(2)] = inst_51756);

(statearr_51919_54020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51787 === (8))){
var inst_51728 = (state_51786[(14)]);
var inst_51729 = (state_51786[(16)]);
var inst_51731 = (inst_51729 < inst_51728);
var inst_51732 = inst_51731;
var state_51786__$1 = state_51786;
if(cljs.core.truth_(inst_51732)){
var statearr_51924_54026 = state_51786__$1;
(statearr_51924_54026[(1)] = (10));

} else {
var statearr_51930_54027 = state_51786__$1;
(statearr_51930_54027[(1)] = (11));

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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_51939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51939[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_51939[(1)] = (1));

return statearr_51939;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_51786){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_51786);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e51945){var ex__48981__auto__ = e51945;
var statearr_51947_54032 = state_51786;
(statearr_51947_54032[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_51786[(4)]))){
var statearr_51954_54033 = state_51786;
(statearr_51954_54033[(1)] = cljs.core.first((state_51786[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54034 = state_51786;
state_51786 = G__54034;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_51786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_51786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_51962 = f__49320__auto__();
(statearr_51962[(6)] = c__49319__auto___53979);

return statearr_51962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
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
var G__51967 = arguments.length;
switch (G__51967) {
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
var G__51972 = arguments.length;
switch (G__51972) {
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
var G__51991 = arguments.length;
switch (G__51991) {
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
var c__49319__auto___54046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_52052){
var state_val_52053 = (state_52052[(1)]);
if((state_val_52053 === (7))){
var state_52052__$1 = state_52052;
var statearr_52060_54048 = state_52052__$1;
(statearr_52060_54048[(2)] = null);

(statearr_52060_54048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (1))){
var state_52052__$1 = state_52052;
var statearr_52061_54049 = state_52052__$1;
(statearr_52061_54049[(2)] = null);

(statearr_52061_54049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (4))){
var inst_52004 = (state_52052[(7)]);
var inst_52003 = (state_52052[(8)]);
var inst_52006 = (inst_52004 < inst_52003);
var state_52052__$1 = state_52052;
if(cljs.core.truth_(inst_52006)){
var statearr_52062_54051 = state_52052__$1;
(statearr_52062_54051[(1)] = (6));

} else {
var statearr_52064_54052 = state_52052__$1;
(statearr_52064_54052[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (15))){
var inst_52038 = (state_52052[(9)]);
var inst_52043 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52038);
var state_52052__$1 = state_52052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52052__$1,(17),out,inst_52043);
} else {
if((state_val_52053 === (13))){
var inst_52038 = (state_52052[(9)]);
var inst_52038__$1 = (state_52052[(2)]);
var inst_52039 = cljs.core.some(cljs.core.nil_QMARK_,inst_52038__$1);
var state_52052__$1 = (function (){var statearr_52071 = state_52052;
(statearr_52071[(9)] = inst_52038__$1);

return statearr_52071;
})();
if(cljs.core.truth_(inst_52039)){
var statearr_52072_54054 = state_52052__$1;
(statearr_52072_54054[(1)] = (14));

} else {
var statearr_52073_54055 = state_52052__$1;
(statearr_52073_54055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (6))){
var state_52052__$1 = state_52052;
var statearr_52074_54058 = state_52052__$1;
(statearr_52074_54058[(2)] = null);

(statearr_52074_54058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (17))){
var inst_52045 = (state_52052[(2)]);
var state_52052__$1 = (function (){var statearr_52080 = state_52052;
(statearr_52080[(10)] = inst_52045);

return statearr_52080;
})();
var statearr_52081_54063 = state_52052__$1;
(statearr_52081_54063[(2)] = null);

(statearr_52081_54063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (3))){
var inst_52050 = (state_52052[(2)]);
var state_52052__$1 = state_52052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52052__$1,inst_52050);
} else {
if((state_val_52053 === (12))){
var _ = (function (){var statearr_52082 = state_52052;
(statearr_52082[(4)] = cljs.core.rest((state_52052[(4)])));

return statearr_52082;
})();
var state_52052__$1 = state_52052;
var ex52077 = (state_52052__$1[(2)]);
var statearr_52083_54064 = state_52052__$1;
(statearr_52083_54064[(5)] = ex52077);


if((ex52077 instanceof Object)){
var statearr_52085_54065 = state_52052__$1;
(statearr_52085_54065[(1)] = (11));

(statearr_52085_54065[(5)] = null);

} else {
throw ex52077;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (2))){
var inst_52002 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52003 = cnt;
var inst_52004 = (0);
var state_52052__$1 = (function (){var statearr_52092 = state_52052;
(statearr_52092[(11)] = inst_52002);

(statearr_52092[(7)] = inst_52004);

(statearr_52092[(8)] = inst_52003);

return statearr_52092;
})();
var statearr_52095_54067 = state_52052__$1;
(statearr_52095_54067[(2)] = null);

(statearr_52095_54067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (11))){
var inst_52017 = (state_52052[(2)]);
var inst_52018 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52052__$1 = (function (){var statearr_52096 = state_52052;
(statearr_52096[(12)] = inst_52017);

return statearr_52096;
})();
var statearr_52097_54069 = state_52052__$1;
(statearr_52097_54069[(2)] = inst_52018);

(statearr_52097_54069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (9))){
var inst_52004 = (state_52052[(7)]);
var _ = (function (){var statearr_52098 = state_52052;
(statearr_52098[(4)] = cljs.core.cons((12),(state_52052[(4)])));

return statearr_52098;
})();
var inst_52024 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52004) : chs__$1.call(null,inst_52004));
var inst_52025 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52004) : done.call(null,inst_52004));
var inst_52026 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52024,inst_52025);
var ___$1 = (function (){var statearr_52100 = state_52052;
(statearr_52100[(4)] = cljs.core.rest((state_52052[(4)])));

return statearr_52100;
})();
var state_52052__$1 = state_52052;
var statearr_52101_54073 = state_52052__$1;
(statearr_52101_54073[(2)] = inst_52026);

(statearr_52101_54073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (5))){
var inst_52036 = (state_52052[(2)]);
var state_52052__$1 = (function (){var statearr_52102 = state_52052;
(statearr_52102[(13)] = inst_52036);

return statearr_52102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52052__$1,(13),dchan);
} else {
if((state_val_52053 === (14))){
var inst_52041 = cljs.core.async.close_BANG_(out);
var state_52052__$1 = state_52052;
var statearr_52103_54075 = state_52052__$1;
(statearr_52103_54075[(2)] = inst_52041);

(statearr_52103_54075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (16))){
var inst_52048 = (state_52052[(2)]);
var state_52052__$1 = state_52052;
var statearr_52104_54076 = state_52052__$1;
(statearr_52104_54076[(2)] = inst_52048);

(statearr_52104_54076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (10))){
var inst_52004 = (state_52052[(7)]);
var inst_52029 = (state_52052[(2)]);
var inst_52030 = (inst_52004 + (1));
var inst_52004__$1 = inst_52030;
var state_52052__$1 = (function (){var statearr_52105 = state_52052;
(statearr_52105[(14)] = inst_52029);

(statearr_52105[(7)] = inst_52004__$1);

return statearr_52105;
})();
var statearr_52106_54078 = state_52052__$1;
(statearr_52106_54078[(2)] = null);

(statearr_52106_54078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (8))){
var inst_52034 = (state_52052[(2)]);
var state_52052__$1 = state_52052;
var statearr_52109_54080 = state_52052__$1;
(statearr_52109_54080[(2)] = inst_52034);

(statearr_52109_54080[(1)] = (5));


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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_52112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52112[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_52112[(1)] = (1));

return statearr_52112;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_52052){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_52052);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e52115){var ex__48981__auto__ = e52115;
var statearr_52116_54081 = state_52052;
(statearr_52116_54081[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_52052[(4)]))){
var statearr_52117_54082 = state_52052;
(statearr_52117_54082[(1)] = cljs.core.first((state_52052[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54083 = state_52052;
state_52052 = G__54083;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_52052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_52052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_52118 = f__49320__auto__();
(statearr_52118[(6)] = c__49319__auto___54046);

return statearr_52118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
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
var G__52122 = arguments.length;
switch (G__52122) {
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
var c__49319__auto___54085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_52157){
var state_val_52158 = (state_52157[(1)]);
if((state_val_52158 === (7))){
var inst_52133 = (state_52157[(7)]);
var inst_52134 = (state_52157[(8)]);
var inst_52133__$1 = (state_52157[(2)]);
var inst_52134__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52133__$1,(0),null);
var inst_52135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52133__$1,(1),null);
var inst_52136 = (inst_52134__$1 == null);
var state_52157__$1 = (function (){var statearr_52159 = state_52157;
(statearr_52159[(7)] = inst_52133__$1);

(statearr_52159[(9)] = inst_52135);

(statearr_52159[(8)] = inst_52134__$1);

return statearr_52159;
})();
if(cljs.core.truth_(inst_52136)){
var statearr_52163_54089 = state_52157__$1;
(statearr_52163_54089[(1)] = (8));

} else {
var statearr_52167_54090 = state_52157__$1;
(statearr_52167_54090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (1))){
var inst_52123 = cljs.core.vec(chs);
var inst_52124 = inst_52123;
var state_52157__$1 = (function (){var statearr_52169 = state_52157;
(statearr_52169[(10)] = inst_52124);

return statearr_52169;
})();
var statearr_52170_54091 = state_52157__$1;
(statearr_52170_54091[(2)] = null);

(statearr_52170_54091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (4))){
var inst_52124 = (state_52157[(10)]);
var state_52157__$1 = state_52157;
return cljs.core.async.ioc_alts_BANG_(state_52157__$1,(7),inst_52124);
} else {
if((state_val_52158 === (6))){
var inst_52153 = (state_52157[(2)]);
var state_52157__$1 = state_52157;
var statearr_52172_54097 = state_52157__$1;
(statearr_52172_54097[(2)] = inst_52153);

(statearr_52172_54097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (3))){
var inst_52155 = (state_52157[(2)]);
var state_52157__$1 = state_52157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52157__$1,inst_52155);
} else {
if((state_val_52158 === (2))){
var inst_52124 = (state_52157[(10)]);
var inst_52126 = cljs.core.count(inst_52124);
var inst_52127 = (inst_52126 > (0));
var state_52157__$1 = state_52157;
if(cljs.core.truth_(inst_52127)){
var statearr_52174_54098 = state_52157__$1;
(statearr_52174_54098[(1)] = (4));

} else {
var statearr_52175_54099 = state_52157__$1;
(statearr_52175_54099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (11))){
var inst_52124 = (state_52157[(10)]);
var inst_52146 = (state_52157[(2)]);
var tmp52173 = inst_52124;
var inst_52124__$1 = tmp52173;
var state_52157__$1 = (function (){var statearr_52176 = state_52157;
(statearr_52176[(11)] = inst_52146);

(statearr_52176[(10)] = inst_52124__$1);

return statearr_52176;
})();
var statearr_52177_54102 = state_52157__$1;
(statearr_52177_54102[(2)] = null);

(statearr_52177_54102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (9))){
var inst_52134 = (state_52157[(8)]);
var state_52157__$1 = state_52157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52157__$1,(11),out,inst_52134);
} else {
if((state_val_52158 === (5))){
var inst_52151 = cljs.core.async.close_BANG_(out);
var state_52157__$1 = state_52157;
var statearr_52180_54103 = state_52157__$1;
(statearr_52180_54103[(2)] = inst_52151);

(statearr_52180_54103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (10))){
var inst_52149 = (state_52157[(2)]);
var state_52157__$1 = state_52157;
var statearr_52183_54105 = state_52157__$1;
(statearr_52183_54105[(2)] = inst_52149);

(statearr_52183_54105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52158 === (8))){
var inst_52133 = (state_52157[(7)]);
var inst_52124 = (state_52157[(10)]);
var inst_52135 = (state_52157[(9)]);
var inst_52134 = (state_52157[(8)]);
var inst_52140 = (function (){var cs = inst_52124;
var vec__52129 = inst_52133;
var v = inst_52134;
var c = inst_52135;
return (function (p1__52120_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52120_SHARP_);
});
})();
var inst_52141 = cljs.core.filterv(inst_52140,inst_52124);
var inst_52124__$1 = inst_52141;
var state_52157__$1 = (function (){var statearr_52192 = state_52157;
(statearr_52192[(10)] = inst_52124__$1);

return statearr_52192;
})();
var statearr_52193_54106 = state_52157__$1;
(statearr_52193_54106[(2)] = null);

(statearr_52193_54106[(1)] = (2));


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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_52194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52194[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_52194[(1)] = (1));

return statearr_52194;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_52157){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_52157);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e52195){var ex__48981__auto__ = e52195;
var statearr_52196_54110 = state_52157;
(statearr_52196_54110[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_52157[(4)]))){
var statearr_52197_54115 = state_52157;
(statearr_52197_54115[(1)] = cljs.core.first((state_52157[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54116 = state_52157;
state_52157 = G__54116;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_52157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_52157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_52198 = f__49320__auto__();
(statearr_52198[(6)] = c__49319__auto___54085);

return statearr_52198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
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
var G__52206 = arguments.length;
switch (G__52206) {
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
var c__49319__auto___54130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_52239){
var state_val_52240 = (state_52239[(1)]);
if((state_val_52240 === (7))){
var inst_52218 = (state_52239[(7)]);
var inst_52218__$1 = (state_52239[(2)]);
var inst_52222 = (inst_52218__$1 == null);
var inst_52223 = cljs.core.not(inst_52222);
var state_52239__$1 = (function (){var statearr_52247 = state_52239;
(statearr_52247[(7)] = inst_52218__$1);

return statearr_52247;
})();
if(inst_52223){
var statearr_52248_54141 = state_52239__$1;
(statearr_52248_54141[(1)] = (8));

} else {
var statearr_52249_54143 = state_52239__$1;
(statearr_52249_54143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52240 === (1))){
var inst_52212 = (0);
var state_52239__$1 = (function (){var statearr_52251 = state_52239;
(statearr_52251[(8)] = inst_52212);

return statearr_52251;
})();
var statearr_52255_54151 = state_52239__$1;
(statearr_52255_54151[(2)] = null);

(statearr_52255_54151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52240 === (4))){
var state_52239__$1 = state_52239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52239__$1,(7),ch);
} else {
if((state_val_52240 === (6))){
var inst_52234 = (state_52239[(2)]);
var state_52239__$1 = state_52239;
var statearr_52257_54161 = state_52239__$1;
(statearr_52257_54161[(2)] = inst_52234);

(statearr_52257_54161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52240 === (3))){
var inst_52236 = (state_52239[(2)]);
var inst_52237 = cljs.core.async.close_BANG_(out);
var state_52239__$1 = (function (){var statearr_52260 = state_52239;
(statearr_52260[(9)] = inst_52236);

return statearr_52260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52239__$1,inst_52237);
} else {
if((state_val_52240 === (2))){
var inst_52212 = (state_52239[(8)]);
var inst_52214 = (inst_52212 < n);
var state_52239__$1 = state_52239;
if(cljs.core.truth_(inst_52214)){
var statearr_52269_54170 = state_52239__$1;
(statearr_52269_54170[(1)] = (4));

} else {
var statearr_52270_54175 = state_52239__$1;
(statearr_52270_54175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52240 === (11))){
var inst_52212 = (state_52239[(8)]);
var inst_52226 = (state_52239[(2)]);
var inst_52227 = (inst_52212 + (1));
var inst_52212__$1 = inst_52227;
var state_52239__$1 = (function (){var statearr_52271 = state_52239;
(statearr_52271[(10)] = inst_52226);

(statearr_52271[(8)] = inst_52212__$1);

return statearr_52271;
})();
var statearr_52272_54182 = state_52239__$1;
(statearr_52272_54182[(2)] = null);

(statearr_52272_54182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52240 === (9))){
var state_52239__$1 = state_52239;
var statearr_52276_54186 = state_52239__$1;
(statearr_52276_54186[(2)] = null);

(statearr_52276_54186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52240 === (5))){
var state_52239__$1 = state_52239;
var statearr_52277_54188 = state_52239__$1;
(statearr_52277_54188[(2)] = null);

(statearr_52277_54188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52240 === (10))){
var inst_52231 = (state_52239[(2)]);
var state_52239__$1 = state_52239;
var statearr_52278_54189 = state_52239__$1;
(statearr_52278_54189[(2)] = inst_52231);

(statearr_52278_54189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52240 === (8))){
var inst_52218 = (state_52239[(7)]);
var state_52239__$1 = state_52239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52239__$1,(11),out,inst_52218);
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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_52281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52281[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_52281[(1)] = (1));

return statearr_52281;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_52239){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_52239);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e52282){var ex__48981__auto__ = e52282;
var statearr_52283_54192 = state_52239;
(statearr_52283_54192[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_52239[(4)]))){
var statearr_52284_54194 = state_52239;
(statearr_52284_54194[(1)] = cljs.core.first((state_52239[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54196 = state_52239;
state_52239 = G__54196;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_52239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_52239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_52289 = f__49320__auto__();
(statearr_52289[(6)] = c__49319__auto___54130);

return statearr_52289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52307 = (function (f,ch,meta52308){
this.f = f;
this.ch = ch;
this.meta52308 = meta52308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52309,meta52308__$1){
var self__ = this;
var _52309__$1 = this;
return (new cljs.core.async.t_cljs$core$async52307(self__.f,self__.ch,meta52308__$1));
}));

(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52309){
var self__ = this;
var _52309__$1 = this;
return self__.meta52308;
}));

(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52323 = (function (f,ch,meta52308,_,fn1,meta52324){
this.f = f;
this.ch = ch;
this.meta52308 = meta52308;
this._ = _;
this.fn1 = fn1;
this.meta52324 = meta52324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52325,meta52324__$1){
var self__ = this;
var _52325__$1 = this;
return (new cljs.core.async.t_cljs$core$async52323(self__.f,self__.ch,self__.meta52308,self__._,self__.fn1,meta52324__$1));
}));

(cljs.core.async.t_cljs$core$async52323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52325){
var self__ = this;
var _52325__$1 = this;
return self__.meta52324;
}));

(cljs.core.async.t_cljs$core$async52323.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52300_SHARP_){
var G__52330 = (((p1__52300_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52300_SHARP_) : self__.f.call(null,p1__52300_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52330) : f1.call(null,G__52330));
});
}));

(cljs.core.async.t_cljs$core$async52323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52308","meta52308",-796812678,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52307","cljs.core.async/t_cljs$core$async52307",1260680624,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52324","meta52324",-1864560914,null)], null);
}));

(cljs.core.async.t_cljs$core$async52323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52323");

(cljs.core.async.t_cljs$core$async52323.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async52323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52323.
 */
cljs.core.async.__GT_t_cljs$core$async52323 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52323(f__$1,ch__$1,meta52308__$1,___$2,fn1__$1,meta52324){
return (new cljs.core.async.t_cljs$core$async52323(f__$1,ch__$1,meta52308__$1,___$2,fn1__$1,meta52324));
});

}

return (new cljs.core.async.t_cljs$core$async52323(self__.f,self__.ch,self__.meta52308,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52344 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52344) : self__.f.call(null,G__52344));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52308","meta52308",-796812678,null)], null);
}));

(cljs.core.async.t_cljs$core$async52307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52307");

(cljs.core.async.t_cljs$core$async52307.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async52307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52307.
 */
cljs.core.async.__GT_t_cljs$core$async52307 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52307(f__$1,ch__$1,meta52308){
return (new cljs.core.async.t_cljs$core$async52307(f__$1,ch__$1,meta52308));
});

}

return (new cljs.core.async.t_cljs$core$async52307(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52373 = (function (f,ch,meta52374){
this.f = f;
this.ch = ch;
this.meta52374 = meta52374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52375,meta52374__$1){
var self__ = this;
var _52375__$1 = this;
return (new cljs.core.async.t_cljs$core$async52373(self__.f,self__.ch,meta52374__$1));
}));

(cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52375){
var self__ = this;
var _52375__$1 = this;
return self__.meta52374;
}));

(cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52374","meta52374",237737990,null)], null);
}));

(cljs.core.async.t_cljs$core$async52373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52373");

(cljs.core.async.t_cljs$core$async52373.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async52373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52373.
 */
cljs.core.async.__GT_t_cljs$core$async52373 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52373(f__$1,ch__$1,meta52374){
return (new cljs.core.async.t_cljs$core$async52373(f__$1,ch__$1,meta52374));
});

}

return (new cljs.core.async.t_cljs$core$async52373(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52393 = (function (p,ch,meta52394){
this.p = p;
this.ch = ch;
this.meta52394 = meta52394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52395,meta52394__$1){
var self__ = this;
var _52395__$1 = this;
return (new cljs.core.async.t_cljs$core$async52393(self__.p,self__.ch,meta52394__$1));
}));

(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52395){
var self__ = this;
var _52395__$1 = this;
return self__.meta52394;
}));

(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52394","meta52394",-2066692414,null)], null);
}));

(cljs.core.async.t_cljs$core$async52393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52393");

(cljs.core.async.t_cljs$core$async52393.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async52393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52393.
 */
cljs.core.async.__GT_t_cljs$core$async52393 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52393(p__$1,ch__$1,meta52394){
return (new cljs.core.async.t_cljs$core$async52393(p__$1,ch__$1,meta52394));
});

}

return (new cljs.core.async.t_cljs$core$async52393(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__52416 = arguments.length;
switch (G__52416) {
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
var c__49319__auto___54217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_52445){
var state_val_52449 = (state_52445[(1)]);
if((state_val_52449 === (7))){
var inst_52441 = (state_52445[(2)]);
var state_52445__$1 = state_52445;
var statearr_52450_54224 = state_52445__$1;
(statearr_52450_54224[(2)] = inst_52441);

(statearr_52450_54224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (1))){
var state_52445__$1 = state_52445;
var statearr_52453_54225 = state_52445__$1;
(statearr_52453_54225[(2)] = null);

(statearr_52453_54225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (4))){
var inst_52427 = (state_52445[(7)]);
var inst_52427__$1 = (state_52445[(2)]);
var inst_52428 = (inst_52427__$1 == null);
var state_52445__$1 = (function (){var statearr_52458 = state_52445;
(statearr_52458[(7)] = inst_52427__$1);

return statearr_52458;
})();
if(cljs.core.truth_(inst_52428)){
var statearr_52460_54227 = state_52445__$1;
(statearr_52460_54227[(1)] = (5));

} else {
var statearr_52461_54228 = state_52445__$1;
(statearr_52461_54228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (6))){
var inst_52427 = (state_52445[(7)]);
var inst_52432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52427) : p.call(null,inst_52427));
var state_52445__$1 = state_52445;
if(cljs.core.truth_(inst_52432)){
var statearr_52466_54229 = state_52445__$1;
(statearr_52466_54229[(1)] = (8));

} else {
var statearr_52467_54231 = state_52445__$1;
(statearr_52467_54231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (3))){
var inst_52443 = (state_52445[(2)]);
var state_52445__$1 = state_52445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52445__$1,inst_52443);
} else {
if((state_val_52449 === (2))){
var state_52445__$1 = state_52445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52445__$1,(4),ch);
} else {
if((state_val_52449 === (11))){
var inst_52435 = (state_52445[(2)]);
var state_52445__$1 = state_52445;
var statearr_52470_54235 = state_52445__$1;
(statearr_52470_54235[(2)] = inst_52435);

(statearr_52470_54235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (9))){
var state_52445__$1 = state_52445;
var statearr_52471_54237 = state_52445__$1;
(statearr_52471_54237[(2)] = null);

(statearr_52471_54237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (5))){
var inst_52430 = cljs.core.async.close_BANG_(out);
var state_52445__$1 = state_52445;
var statearr_52472_54238 = state_52445__$1;
(statearr_52472_54238[(2)] = inst_52430);

(statearr_52472_54238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (10))){
var inst_52438 = (state_52445[(2)]);
var state_52445__$1 = (function (){var statearr_52473 = state_52445;
(statearr_52473[(8)] = inst_52438);

return statearr_52473;
})();
var statearr_52474_54239 = state_52445__$1;
(statearr_52474_54239[(2)] = null);

(statearr_52474_54239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52449 === (8))){
var inst_52427 = (state_52445[(7)]);
var state_52445__$1 = state_52445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52445__$1,(11),out,inst_52427);
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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_52484 = [null,null,null,null,null,null,null,null,null];
(statearr_52484[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_52484[(1)] = (1));

return statearr_52484;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_52445){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_52445);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e52485){var ex__48981__auto__ = e52485;
var statearr_52491_54242 = state_52445;
(statearr_52491_54242[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_52445[(4)]))){
var statearr_52493_54243 = state_52445;
(statearr_52493_54243[(1)] = cljs.core.first((state_52445[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54244 = state_52445;
state_52445 = G__54244;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_52445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_52445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_52494 = f__49320__auto__();
(statearr_52494[(6)] = c__49319__auto___54217);

return statearr_52494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52497 = arguments.length;
switch (G__52497) {
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
var c__49319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_52568){
var state_val_52569 = (state_52568[(1)]);
if((state_val_52569 === (7))){
var inst_52564 = (state_52568[(2)]);
var state_52568__$1 = state_52568;
var statearr_52574_54246 = state_52568__$1;
(statearr_52574_54246[(2)] = inst_52564);

(statearr_52574_54246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (20))){
var inst_52534 = (state_52568[(7)]);
var inst_52545 = (state_52568[(2)]);
var inst_52546 = cljs.core.next(inst_52534);
var inst_52520 = inst_52546;
var inst_52521 = null;
var inst_52522 = (0);
var inst_52523 = (0);
var state_52568__$1 = (function (){var statearr_52575 = state_52568;
(statearr_52575[(8)] = inst_52545);

(statearr_52575[(9)] = inst_52523);

(statearr_52575[(10)] = inst_52522);

(statearr_52575[(11)] = inst_52520);

(statearr_52575[(12)] = inst_52521);

return statearr_52575;
})();
var statearr_52576_54247 = state_52568__$1;
(statearr_52576_54247[(2)] = null);

(statearr_52576_54247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (1))){
var state_52568__$1 = state_52568;
var statearr_52581_54248 = state_52568__$1;
(statearr_52581_54248[(2)] = null);

(statearr_52581_54248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (4))){
var inst_52509 = (state_52568[(13)]);
var inst_52509__$1 = (state_52568[(2)]);
var inst_52510 = (inst_52509__$1 == null);
var state_52568__$1 = (function (){var statearr_52586 = state_52568;
(statearr_52586[(13)] = inst_52509__$1);

return statearr_52586;
})();
if(cljs.core.truth_(inst_52510)){
var statearr_52592_54250 = state_52568__$1;
(statearr_52592_54250[(1)] = (5));

} else {
var statearr_52593_54251 = state_52568__$1;
(statearr_52593_54251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (15))){
var state_52568__$1 = state_52568;
var statearr_52597_54256 = state_52568__$1;
(statearr_52597_54256[(2)] = null);

(statearr_52597_54256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (21))){
var state_52568__$1 = state_52568;
var statearr_52598_54257 = state_52568__$1;
(statearr_52598_54257[(2)] = null);

(statearr_52598_54257[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (13))){
var inst_52523 = (state_52568[(9)]);
var inst_52522 = (state_52568[(10)]);
var inst_52520 = (state_52568[(11)]);
var inst_52521 = (state_52568[(12)]);
var inst_52530 = (state_52568[(2)]);
var inst_52531 = (inst_52523 + (1));
var tmp52594 = inst_52522;
var tmp52595 = inst_52520;
var tmp52596 = inst_52521;
var inst_52520__$1 = tmp52595;
var inst_52521__$1 = tmp52596;
var inst_52522__$1 = tmp52594;
var inst_52523__$1 = inst_52531;
var state_52568__$1 = (function (){var statearr_52605 = state_52568;
(statearr_52605[(9)] = inst_52523__$1);

(statearr_52605[(14)] = inst_52530);

(statearr_52605[(10)] = inst_52522__$1);

(statearr_52605[(11)] = inst_52520__$1);

(statearr_52605[(12)] = inst_52521__$1);

return statearr_52605;
})();
var statearr_52606_54259 = state_52568__$1;
(statearr_52606_54259[(2)] = null);

(statearr_52606_54259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (22))){
var state_52568__$1 = state_52568;
var statearr_52608_54261 = state_52568__$1;
(statearr_52608_54261[(2)] = null);

(statearr_52608_54261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (6))){
var inst_52509 = (state_52568[(13)]);
var inst_52518 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52509) : f.call(null,inst_52509));
var inst_52519 = cljs.core.seq(inst_52518);
var inst_52520 = inst_52519;
var inst_52521 = null;
var inst_52522 = (0);
var inst_52523 = (0);
var state_52568__$1 = (function (){var statearr_52609 = state_52568;
(statearr_52609[(9)] = inst_52523);

(statearr_52609[(10)] = inst_52522);

(statearr_52609[(11)] = inst_52520);

(statearr_52609[(12)] = inst_52521);

return statearr_52609;
})();
var statearr_52610_54262 = state_52568__$1;
(statearr_52610_54262[(2)] = null);

(statearr_52610_54262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (17))){
var inst_52534 = (state_52568[(7)]);
var inst_52538 = cljs.core.chunk_first(inst_52534);
var inst_52539 = cljs.core.chunk_rest(inst_52534);
var inst_52540 = cljs.core.count(inst_52538);
var inst_52520 = inst_52539;
var inst_52521 = inst_52538;
var inst_52522 = inst_52540;
var inst_52523 = (0);
var state_52568__$1 = (function (){var statearr_52611 = state_52568;
(statearr_52611[(9)] = inst_52523);

(statearr_52611[(10)] = inst_52522);

(statearr_52611[(11)] = inst_52520);

(statearr_52611[(12)] = inst_52521);

return statearr_52611;
})();
var statearr_52613_54264 = state_52568__$1;
(statearr_52613_54264[(2)] = null);

(statearr_52613_54264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (3))){
var inst_52566 = (state_52568[(2)]);
var state_52568__$1 = state_52568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52568__$1,inst_52566);
} else {
if((state_val_52569 === (12))){
var inst_52554 = (state_52568[(2)]);
var state_52568__$1 = state_52568;
var statearr_52615_54265 = state_52568__$1;
(statearr_52615_54265[(2)] = inst_52554);

(statearr_52615_54265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (2))){
var state_52568__$1 = state_52568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52568__$1,(4),in$);
} else {
if((state_val_52569 === (23))){
var inst_52562 = (state_52568[(2)]);
var state_52568__$1 = state_52568;
var statearr_52616_54268 = state_52568__$1;
(statearr_52616_54268[(2)] = inst_52562);

(statearr_52616_54268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (19))){
var inst_52549 = (state_52568[(2)]);
var state_52568__$1 = state_52568;
var statearr_52620_54269 = state_52568__$1;
(statearr_52620_54269[(2)] = inst_52549);

(statearr_52620_54269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (11))){
var inst_52534 = (state_52568[(7)]);
var inst_52520 = (state_52568[(11)]);
var inst_52534__$1 = cljs.core.seq(inst_52520);
var state_52568__$1 = (function (){var statearr_52621 = state_52568;
(statearr_52621[(7)] = inst_52534__$1);

return statearr_52621;
})();
if(inst_52534__$1){
var statearr_52622_54270 = state_52568__$1;
(statearr_52622_54270[(1)] = (14));

} else {
var statearr_52623_54271 = state_52568__$1;
(statearr_52623_54271[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (9))){
var inst_52556 = (state_52568[(2)]);
var inst_52557 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52568__$1 = (function (){var statearr_52625 = state_52568;
(statearr_52625[(15)] = inst_52556);

return statearr_52625;
})();
if(cljs.core.truth_(inst_52557)){
var statearr_52626_54273 = state_52568__$1;
(statearr_52626_54273[(1)] = (21));

} else {
var statearr_52627_54275 = state_52568__$1;
(statearr_52627_54275[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (5))){
var inst_52512 = cljs.core.async.close_BANG_(out);
var state_52568__$1 = state_52568;
var statearr_52628_54278 = state_52568__$1;
(statearr_52628_54278[(2)] = inst_52512);

(statearr_52628_54278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (14))){
var inst_52534 = (state_52568[(7)]);
var inst_52536 = cljs.core.chunked_seq_QMARK_(inst_52534);
var state_52568__$1 = state_52568;
if(inst_52536){
var statearr_52629_54282 = state_52568__$1;
(statearr_52629_54282[(1)] = (17));

} else {
var statearr_52631_54283 = state_52568__$1;
(statearr_52631_54283[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (16))){
var inst_52552 = (state_52568[(2)]);
var state_52568__$1 = state_52568;
var statearr_52633_54284 = state_52568__$1;
(statearr_52633_54284[(2)] = inst_52552);

(statearr_52633_54284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52569 === (10))){
var inst_52523 = (state_52568[(9)]);
var inst_52521 = (state_52568[(12)]);
var inst_52528 = cljs.core._nth(inst_52521,inst_52523);
var state_52568__$1 = state_52568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52568__$1,(13),out,inst_52528);
} else {
if((state_val_52569 === (18))){
var inst_52534 = (state_52568[(7)]);
var inst_52543 = cljs.core.first(inst_52534);
var state_52568__$1 = state_52568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52568__$1,(20),out,inst_52543);
} else {
if((state_val_52569 === (8))){
var inst_52523 = (state_52568[(9)]);
var inst_52522 = (state_52568[(10)]);
var inst_52525 = (inst_52523 < inst_52522);
var inst_52526 = inst_52525;
var state_52568__$1 = state_52568;
if(cljs.core.truth_(inst_52526)){
var statearr_52635_54286 = state_52568__$1;
(statearr_52635_54286[(1)] = (10));

} else {
var statearr_52636_54287 = state_52568__$1;
(statearr_52636_54287[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__48978__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48978__auto____0 = (function (){
var statearr_52640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52640[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48978__auto__);

(statearr_52640[(1)] = (1));

return statearr_52640;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48978__auto____1 = (function (state_52568){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_52568);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e52643){var ex__48981__auto__ = e52643;
var statearr_52645_54289 = state_52568;
(statearr_52645_54289[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_52568[(4)]))){
var statearr_52647_54290 = state_52568;
(statearr_52647_54290[(1)] = cljs.core.first((state_52568[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54291 = state_52568;
state_52568 = G__54291;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48978__auto__ = function(state_52568){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48978__auto____1.call(this,state_52568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48978__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48978__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_52651 = f__49320__auto__();
(statearr_52651[(6)] = c__49319__auto__);

return statearr_52651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));

return c__49319__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52653 = arguments.length;
switch (G__52653) {
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
var G__52655 = arguments.length;
switch (G__52655) {
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
var G__52658 = arguments.length;
switch (G__52658) {
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
var c__49319__auto___54298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_52683){
var state_val_52684 = (state_52683[(1)]);
if((state_val_52684 === (7))){
var inst_52678 = (state_52683[(2)]);
var state_52683__$1 = state_52683;
var statearr_52685_54299 = state_52683__$1;
(statearr_52685_54299[(2)] = inst_52678);

(statearr_52685_54299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (1))){
var inst_52659 = null;
var state_52683__$1 = (function (){var statearr_52686 = state_52683;
(statearr_52686[(7)] = inst_52659);

return statearr_52686;
})();
var statearr_52687_54300 = state_52683__$1;
(statearr_52687_54300[(2)] = null);

(statearr_52687_54300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (4))){
var inst_52662 = (state_52683[(8)]);
var inst_52662__$1 = (state_52683[(2)]);
var inst_52663 = (inst_52662__$1 == null);
var inst_52664 = cljs.core.not(inst_52663);
var state_52683__$1 = (function (){var statearr_52688 = state_52683;
(statearr_52688[(8)] = inst_52662__$1);

return statearr_52688;
})();
if(inst_52664){
var statearr_52689_54302 = state_52683__$1;
(statearr_52689_54302[(1)] = (5));

} else {
var statearr_52690_54303 = state_52683__$1;
(statearr_52690_54303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (6))){
var state_52683__$1 = state_52683;
var statearr_52691_54304 = state_52683__$1;
(statearr_52691_54304[(2)] = null);

(statearr_52691_54304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (3))){
var inst_52680 = (state_52683[(2)]);
var inst_52681 = cljs.core.async.close_BANG_(out);
var state_52683__$1 = (function (){var statearr_52695 = state_52683;
(statearr_52695[(9)] = inst_52680);

return statearr_52695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52683__$1,inst_52681);
} else {
if((state_val_52684 === (2))){
var state_52683__$1 = state_52683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52683__$1,(4),ch);
} else {
if((state_val_52684 === (11))){
var inst_52662 = (state_52683[(8)]);
var inst_52671 = (state_52683[(2)]);
var inst_52659 = inst_52662;
var state_52683__$1 = (function (){var statearr_52696 = state_52683;
(statearr_52696[(7)] = inst_52659);

(statearr_52696[(10)] = inst_52671);

return statearr_52696;
})();
var statearr_52697_54306 = state_52683__$1;
(statearr_52697_54306[(2)] = null);

(statearr_52697_54306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (9))){
var inst_52662 = (state_52683[(8)]);
var state_52683__$1 = state_52683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52683__$1,(11),out,inst_52662);
} else {
if((state_val_52684 === (5))){
var inst_52659 = (state_52683[(7)]);
var inst_52662 = (state_52683[(8)]);
var inst_52666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52662,inst_52659);
var state_52683__$1 = state_52683;
if(inst_52666){
var statearr_52711_54309 = state_52683__$1;
(statearr_52711_54309[(1)] = (8));

} else {
var statearr_52712_54310 = state_52683__$1;
(statearr_52712_54310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (10))){
var inst_52675 = (state_52683[(2)]);
var state_52683__$1 = state_52683;
var statearr_52713_54311 = state_52683__$1;
(statearr_52713_54311[(2)] = inst_52675);

(statearr_52713_54311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (8))){
var inst_52659 = (state_52683[(7)]);
var tmp52706 = inst_52659;
var inst_52659__$1 = tmp52706;
var state_52683__$1 = (function (){var statearr_52714 = state_52683;
(statearr_52714[(7)] = inst_52659__$1);

return statearr_52714;
})();
var statearr_52715_54316 = state_52683__$1;
(statearr_52715_54316[(2)] = null);

(statearr_52715_54316[(1)] = (2));


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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_52722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52722[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_52722[(1)] = (1));

return statearr_52722;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_52683){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_52683);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e52723){var ex__48981__auto__ = e52723;
var statearr_52724_54317 = state_52683;
(statearr_52724_54317[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_52683[(4)]))){
var statearr_52725_54318 = state_52683;
(statearr_52725_54318[(1)] = cljs.core.first((state_52683[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54319 = state_52683;
state_52683 = G__54319;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_52683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_52683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_52726 = f__49320__auto__();
(statearr_52726[(6)] = c__49319__auto___54298);

return statearr_52726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52729 = arguments.length;
switch (G__52729) {
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
var c__49319__auto___54324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_52770){
var state_val_52771 = (state_52770[(1)]);
if((state_val_52771 === (7))){
var inst_52766 = (state_52770[(2)]);
var state_52770__$1 = state_52770;
var statearr_52780_54326 = state_52770__$1;
(statearr_52780_54326[(2)] = inst_52766);

(statearr_52780_54326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (1))){
var inst_52732 = (new Array(n));
var inst_52733 = inst_52732;
var inst_52734 = (0);
var state_52770__$1 = (function (){var statearr_52795 = state_52770;
(statearr_52795[(7)] = inst_52733);

(statearr_52795[(8)] = inst_52734);

return statearr_52795;
})();
var statearr_52796_54327 = state_52770__$1;
(statearr_52796_54327[(2)] = null);

(statearr_52796_54327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (4))){
var inst_52737 = (state_52770[(9)]);
var inst_52737__$1 = (state_52770[(2)]);
var inst_52738 = (inst_52737__$1 == null);
var inst_52739 = cljs.core.not(inst_52738);
var state_52770__$1 = (function (){var statearr_52804 = state_52770;
(statearr_52804[(9)] = inst_52737__$1);

return statearr_52804;
})();
if(inst_52739){
var statearr_52807_54328 = state_52770__$1;
(statearr_52807_54328[(1)] = (5));

} else {
var statearr_52808_54329 = state_52770__$1;
(statearr_52808_54329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (15))){
var inst_52760 = (state_52770[(2)]);
var state_52770__$1 = state_52770;
var statearr_52811_54330 = state_52770__$1;
(statearr_52811_54330[(2)] = inst_52760);

(statearr_52811_54330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (13))){
var state_52770__$1 = state_52770;
var statearr_52812_54331 = state_52770__$1;
(statearr_52812_54331[(2)] = null);

(statearr_52812_54331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (6))){
var inst_52734 = (state_52770[(8)]);
var inst_52756 = (inst_52734 > (0));
var state_52770__$1 = state_52770;
if(cljs.core.truth_(inst_52756)){
var statearr_52816_54332 = state_52770__$1;
(statearr_52816_54332[(1)] = (12));

} else {
var statearr_52817_54333 = state_52770__$1;
(statearr_52817_54333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (3))){
var inst_52768 = (state_52770[(2)]);
var state_52770__$1 = state_52770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52770__$1,inst_52768);
} else {
if((state_val_52771 === (12))){
var inst_52733 = (state_52770[(7)]);
var inst_52758 = cljs.core.vec(inst_52733);
var state_52770__$1 = state_52770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52770__$1,(15),out,inst_52758);
} else {
if((state_val_52771 === (2))){
var state_52770__$1 = state_52770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52770__$1,(4),ch);
} else {
if((state_val_52771 === (11))){
var inst_52750 = (state_52770[(2)]);
var inst_52751 = (new Array(n));
var inst_52733 = inst_52751;
var inst_52734 = (0);
var state_52770__$1 = (function (){var statearr_52842 = state_52770;
(statearr_52842[(10)] = inst_52750);

(statearr_52842[(7)] = inst_52733);

(statearr_52842[(8)] = inst_52734);

return statearr_52842;
})();
var statearr_52843_54335 = state_52770__$1;
(statearr_52843_54335[(2)] = null);

(statearr_52843_54335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (9))){
var inst_52733 = (state_52770[(7)]);
var inst_52748 = cljs.core.vec(inst_52733);
var state_52770__$1 = state_52770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52770__$1,(11),out,inst_52748);
} else {
if((state_val_52771 === (5))){
var inst_52743 = (state_52770[(11)]);
var inst_52737 = (state_52770[(9)]);
var inst_52733 = (state_52770[(7)]);
var inst_52734 = (state_52770[(8)]);
var inst_52742 = (inst_52733[inst_52734] = inst_52737);
var inst_52743__$1 = (inst_52734 + (1));
var inst_52744 = (inst_52743__$1 < n);
var state_52770__$1 = (function (){var statearr_52849 = state_52770;
(statearr_52849[(11)] = inst_52743__$1);

(statearr_52849[(12)] = inst_52742);

return statearr_52849;
})();
if(cljs.core.truth_(inst_52744)){
var statearr_52852_54336 = state_52770__$1;
(statearr_52852_54336[(1)] = (8));

} else {
var statearr_52855_54337 = state_52770__$1;
(statearr_52855_54337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (14))){
var inst_52763 = (state_52770[(2)]);
var inst_52764 = cljs.core.async.close_BANG_(out);
var state_52770__$1 = (function (){var statearr_52858 = state_52770;
(statearr_52858[(13)] = inst_52763);

return statearr_52858;
})();
var statearr_52860_54338 = state_52770__$1;
(statearr_52860_54338[(2)] = inst_52764);

(statearr_52860_54338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (10))){
var inst_52754 = (state_52770[(2)]);
var state_52770__$1 = state_52770;
var statearr_52865_54339 = state_52770__$1;
(statearr_52865_54339[(2)] = inst_52754);

(statearr_52865_54339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52771 === (8))){
var inst_52743 = (state_52770[(11)]);
var inst_52733 = (state_52770[(7)]);
var tmp52857 = inst_52733;
var inst_52733__$1 = tmp52857;
var inst_52734 = inst_52743;
var state_52770__$1 = (function (){var statearr_52866 = state_52770;
(statearr_52866[(7)] = inst_52733__$1);

(statearr_52866[(8)] = inst_52734);

return statearr_52866;
})();
var statearr_52868_54340 = state_52770__$1;
(statearr_52868_54340[(2)] = null);

(statearr_52868_54340[(1)] = (2));


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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_52870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52870[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_52870[(1)] = (1));

return statearr_52870;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_52770){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_52770);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e52871){var ex__48981__auto__ = e52871;
var statearr_52872_54341 = state_52770;
(statearr_52872_54341[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_52770[(4)]))){
var statearr_52873_54342 = state_52770;
(statearr_52873_54342[(1)] = cljs.core.first((state_52770[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54343 = state_52770;
state_52770 = G__54343;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_52770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_52770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_52877 = f__49320__auto__();
(statearr_52877[(6)] = c__49319__auto___54324);

return statearr_52877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52887 = arguments.length;
switch (G__52887) {
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
var c__49319__auto___54345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49320__auto__ = (function (){var switch__48977__auto__ = (function (state_52955){
var state_val_52956 = (state_52955[(1)]);
if((state_val_52956 === (7))){
var inst_52947 = (state_52955[(2)]);
var state_52955__$1 = state_52955;
var statearr_52959_54346 = state_52955__$1;
(statearr_52959_54346[(2)] = inst_52947);

(statearr_52959_54346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (1))){
var inst_52900 = [];
var inst_52901 = inst_52900;
var inst_52902 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52955__$1 = (function (){var statearr_52963 = state_52955;
(statearr_52963[(7)] = inst_52902);

(statearr_52963[(8)] = inst_52901);

return statearr_52963;
})();
var statearr_52964_54347 = state_52955__$1;
(statearr_52964_54347[(2)] = null);

(statearr_52964_54347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (4))){
var inst_52905 = (state_52955[(9)]);
var inst_52905__$1 = (state_52955[(2)]);
var inst_52907 = (inst_52905__$1 == null);
var inst_52908 = cljs.core.not(inst_52907);
var state_52955__$1 = (function (){var statearr_52965 = state_52955;
(statearr_52965[(9)] = inst_52905__$1);

return statearr_52965;
})();
if(inst_52908){
var statearr_52970_54348 = state_52955__$1;
(statearr_52970_54348[(1)] = (5));

} else {
var statearr_52971_54349 = state_52955__$1;
(statearr_52971_54349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (15))){
var inst_52901 = (state_52955[(8)]);
var inst_52939 = cljs.core.vec(inst_52901);
var state_52955__$1 = state_52955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52955__$1,(18),out,inst_52939);
} else {
if((state_val_52956 === (13))){
var inst_52932 = (state_52955[(2)]);
var state_52955__$1 = state_52955;
var statearr_52975_54350 = state_52955__$1;
(statearr_52975_54350[(2)] = inst_52932);

(statearr_52975_54350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (6))){
var inst_52901 = (state_52955[(8)]);
var inst_52934 = inst_52901.length;
var inst_52935 = (inst_52934 > (0));
var state_52955__$1 = state_52955;
if(cljs.core.truth_(inst_52935)){
var statearr_52982_54351 = state_52955__$1;
(statearr_52982_54351[(1)] = (15));

} else {
var statearr_52983_54352 = state_52955__$1;
(statearr_52983_54352[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (17))){
var inst_52944 = (state_52955[(2)]);
var inst_52945 = cljs.core.async.close_BANG_(out);
var state_52955__$1 = (function (){var statearr_52984 = state_52955;
(statearr_52984[(10)] = inst_52944);

return statearr_52984;
})();
var statearr_52985_54357 = state_52955__$1;
(statearr_52985_54357[(2)] = inst_52945);

(statearr_52985_54357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (3))){
var inst_52949 = (state_52955[(2)]);
var state_52955__$1 = state_52955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52955__$1,inst_52949);
} else {
if((state_val_52956 === (12))){
var inst_52901 = (state_52955[(8)]);
var inst_52921 = cljs.core.vec(inst_52901);
var state_52955__$1 = state_52955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52955__$1,(14),out,inst_52921);
} else {
if((state_val_52956 === (2))){
var state_52955__$1 = state_52955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52955__$1,(4),ch);
} else {
if((state_val_52956 === (11))){
var inst_52910 = (state_52955[(11)]);
var inst_52905 = (state_52955[(9)]);
var inst_52901 = (state_52955[(8)]);
var inst_52918 = inst_52901.push(inst_52905);
var tmp52986 = inst_52901;
var inst_52901__$1 = tmp52986;
var inst_52902 = inst_52910;
var state_52955__$1 = (function (){var statearr_52989 = state_52955;
(statearr_52989[(12)] = inst_52918);

(statearr_52989[(7)] = inst_52902);

(statearr_52989[(8)] = inst_52901__$1);

return statearr_52989;
})();
var statearr_52994_54363 = state_52955__$1;
(statearr_52994_54363[(2)] = null);

(statearr_52994_54363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (9))){
var inst_52902 = (state_52955[(7)]);
var inst_52914 = cljs.core.keyword_identical_QMARK_(inst_52902,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52955__$1 = state_52955;
var statearr_52999_54371 = state_52955__$1;
(statearr_52999_54371[(2)] = inst_52914);

(statearr_52999_54371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (5))){
var inst_52910 = (state_52955[(11)]);
var inst_52905 = (state_52955[(9)]);
var inst_52911 = (state_52955[(13)]);
var inst_52902 = (state_52955[(7)]);
var inst_52910__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52905) : f.call(null,inst_52905));
var inst_52911__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52910__$1,inst_52902);
var state_52955__$1 = (function (){var statearr_53004 = state_52955;
(statearr_53004[(11)] = inst_52910__$1);

(statearr_53004[(13)] = inst_52911__$1);

return statearr_53004;
})();
if(inst_52911__$1){
var statearr_53008_54372 = state_52955__$1;
(statearr_53008_54372[(1)] = (8));

} else {
var statearr_53013_54373 = state_52955__$1;
(statearr_53013_54373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (14))){
var inst_52910 = (state_52955[(11)]);
var inst_52905 = (state_52955[(9)]);
var inst_52923 = (state_52955[(2)]);
var inst_52924 = [];
var inst_52929 = inst_52924.push(inst_52905);
var inst_52901 = inst_52924;
var inst_52902 = inst_52910;
var state_52955__$1 = (function (){var statearr_53022 = state_52955;
(statearr_53022[(7)] = inst_52902);

(statearr_53022[(8)] = inst_52901);

(statearr_53022[(14)] = inst_52923);

(statearr_53022[(15)] = inst_52929);

return statearr_53022;
})();
var statearr_53027_54376 = state_52955__$1;
(statearr_53027_54376[(2)] = null);

(statearr_53027_54376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (16))){
var state_52955__$1 = state_52955;
var statearr_53043_54377 = state_52955__$1;
(statearr_53043_54377[(2)] = null);

(statearr_53043_54377[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (10))){
var inst_52916 = (state_52955[(2)]);
var state_52955__$1 = state_52955;
if(cljs.core.truth_(inst_52916)){
var statearr_53044_54378 = state_52955__$1;
(statearr_53044_54378[(1)] = (11));

} else {
var statearr_53046_54379 = state_52955__$1;
(statearr_53046_54379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (18))){
var inst_52941 = (state_52955[(2)]);
var state_52955__$1 = state_52955;
var statearr_53052_54380 = state_52955__$1;
(statearr_53052_54380[(2)] = inst_52941);

(statearr_53052_54380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52956 === (8))){
var inst_52911 = (state_52955[(13)]);
var state_52955__$1 = state_52955;
var statearr_53054_54381 = state_52955__$1;
(statearr_53054_54381[(2)] = inst_52911);

(statearr_53054_54381[(1)] = (10));


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
var cljs$core$async$state_machine__48978__auto__ = null;
var cljs$core$async$state_machine__48978__auto____0 = (function (){
var statearr_53058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53058[(0)] = cljs$core$async$state_machine__48978__auto__);

(statearr_53058[(1)] = (1));

return statearr_53058;
});
var cljs$core$async$state_machine__48978__auto____1 = (function (state_52955){
while(true){
var ret_value__48979__auto__ = (function (){try{while(true){
var result__48980__auto__ = switch__48977__auto__(state_52955);
if(cljs.core.keyword_identical_QMARK_(result__48980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48980__auto__;
}
break;
}
}catch (e53061){var ex__48981__auto__ = e53061;
var statearr_53062_54382 = state_52955;
(statearr_53062_54382[(2)] = ex__48981__auto__);


if(cljs.core.seq((state_52955[(4)]))){
var statearr_53065_54383 = state_52955;
(statearr_53065_54383[(1)] = cljs.core.first((state_52955[(4)])));

} else {
throw ex__48981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54384 = state_52955;
state_52955 = G__54384;
continue;
} else {
return ret_value__48979__auto__;
}
break;
}
});
cljs$core$async$state_machine__48978__auto__ = function(state_52955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48978__auto____1.call(this,state_52955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48978__auto____0;
cljs$core$async$state_machine__48978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48978__auto____1;
return cljs$core$async$state_machine__48978__auto__;
})()
})();
var state__49321__auto__ = (function (){var statearr_53069 = f__49320__auto__();
(statearr_53069[(6)] = c__49319__auto___54345);

return statearr_53069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49321__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
