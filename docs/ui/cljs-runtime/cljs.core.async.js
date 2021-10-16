goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43725 = arguments.length;
switch (G__43725) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43730 = (function (f,blockable,meta43731){
this.f = f;
this.blockable = blockable;
this.meta43731 = meta43731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43732,meta43731__$1){
var self__ = this;
var _43732__$1 = this;
return (new cljs.core.async.t_cljs$core$async43730(self__.f,self__.blockable,meta43731__$1));
}));

(cljs.core.async.t_cljs$core$async43730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43732){
var self__ = this;
var _43732__$1 = this;
return self__.meta43731;
}));

(cljs.core.async.t_cljs$core$async43730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43731","meta43731",-1394264990,null)], null);
}));

(cljs.core.async.t_cljs$core$async43730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43730");

(cljs.core.async.t_cljs$core$async43730.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43730.
 */
cljs.core.async.__GT_t_cljs$core$async43730 = (function cljs$core$async$__GT_t_cljs$core$async43730(f__$1,blockable__$1,meta43731){
return (new cljs.core.async.t_cljs$core$async43730(f__$1,blockable__$1,meta43731));
});

}

return (new cljs.core.async.t_cljs$core$async43730(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43760 = arguments.length;
switch (G__43760) {
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
var G__43767 = arguments.length;
switch (G__43767) {
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
var G__43774 = arguments.length;
switch (G__43774) {
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
var val_46708 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46708) : fn1.call(null,val_46708));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46708) : fn1.call(null,val_46708));
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
var G__43790 = arguments.length;
switch (G__43790) {
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
var n__4706__auto___46715 = n;
var x_46716 = (0);
while(true){
if((x_46716 < n__4706__auto___46715)){
(a[x_46716] = x_46716);

var G__46717 = (x_46716 + (1));
x_46716 = G__46717;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43802 = (function (flag,meta43803){
this.flag = flag;
this.meta43803 = meta43803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43804,meta43803__$1){
var self__ = this;
var _43804__$1 = this;
return (new cljs.core.async.t_cljs$core$async43802(self__.flag,meta43803__$1));
}));

(cljs.core.async.t_cljs$core$async43802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43804){
var self__ = this;
var _43804__$1 = this;
return self__.meta43803;
}));

(cljs.core.async.t_cljs$core$async43802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43803","meta43803",2138490958,null)], null);
}));

(cljs.core.async.t_cljs$core$async43802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43802");

(cljs.core.async.t_cljs$core$async43802.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43802.
 */
cljs.core.async.__GT_t_cljs$core$async43802 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43802(flag__$1,meta43803){
return (new cljs.core.async.t_cljs$core$async43802(flag__$1,meta43803));
});

}

return (new cljs.core.async.t_cljs$core$async43802(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43817 = (function (flag,cb,meta43818){
this.flag = flag;
this.cb = cb;
this.meta43818 = meta43818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43819,meta43818__$1){
var self__ = this;
var _43819__$1 = this;
return (new cljs.core.async.t_cljs$core$async43817(self__.flag,self__.cb,meta43818__$1));
}));

(cljs.core.async.t_cljs$core$async43817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43819){
var self__ = this;
var _43819__$1 = this;
return self__.meta43818;
}));

(cljs.core.async.t_cljs$core$async43817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43818","meta43818",-1340288441,null)], null);
}));

(cljs.core.async.t_cljs$core$async43817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43817");

(cljs.core.async.t_cljs$core$async43817.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43817.
 */
cljs.core.async.__GT_t_cljs$core$async43817 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43817(flag__$1,cb__$1,meta43818){
return (new cljs.core.async.t_cljs$core$async43817(flag__$1,cb__$1,meta43818));
});

}

return (new cljs.core.async.t_cljs$core$async43817(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43831_SHARP_){
var G__43837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43831_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43837) : fret.call(null,G__43837));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43832_SHARP_){
var G__43838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43832_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43838) : fret.call(null,G__43838));
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
var G__46724 = (i + (1));
i = G__46724;
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
var len__4829__auto___46726 = arguments.length;
var i__4830__auto___46727 = (0);
while(true){
if((i__4830__auto___46727 < len__4829__auto___46726)){
args__4835__auto__.push((arguments[i__4830__auto___46727]));

var G__46728 = (i__4830__auto___46727 + (1));
i__4830__auto___46727 = G__46728;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43849){
var map__43850 = p__43849;
var map__43850__$1 = cljs.core.__destructure_map(map__43850);
var opts = map__43850__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43844){
var G__43845 = cljs.core.first(seq43844);
var seq43844__$1 = cljs.core.next(seq43844);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43845,seq43844__$1);
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
var G__43862 = arguments.length;
switch (G__43862) {
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
var c__43611__auto___46736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_43944){
var state_val_43945 = (state_43944[(1)]);
if((state_val_43945 === (7))){
var inst_43940 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43948_46737 = state_43944__$1;
(statearr_43948_46737[(2)] = inst_43940);

(statearr_43948_46737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (1))){
var state_43944__$1 = state_43944;
var statearr_43949_46740 = state_43944__$1;
(statearr_43949_46740[(2)] = null);

(statearr_43949_46740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (4))){
var inst_43916 = (state_43944[(7)]);
var inst_43916__$1 = (state_43944[(2)]);
var inst_43920 = (inst_43916__$1 == null);
var state_43944__$1 = (function (){var statearr_43951 = state_43944;
(statearr_43951[(7)] = inst_43916__$1);

return statearr_43951;
})();
if(cljs.core.truth_(inst_43920)){
var statearr_43952_46745 = state_43944__$1;
(statearr_43952_46745[(1)] = (5));

} else {
var statearr_43953_46746 = state_43944__$1;
(statearr_43953_46746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (13))){
var state_43944__$1 = state_43944;
var statearr_43955_46747 = state_43944__$1;
(statearr_43955_46747[(2)] = null);

(statearr_43955_46747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (6))){
var inst_43916 = (state_43944[(7)]);
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43944__$1,(11),to,inst_43916);
} else {
if((state_val_43945 === (3))){
var inst_43942 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43944__$1,inst_43942);
} else {
if((state_val_43945 === (12))){
var state_43944__$1 = state_43944;
var statearr_43958_46748 = state_43944__$1;
(statearr_43958_46748[(2)] = null);

(statearr_43958_46748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (2))){
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43944__$1,(4),from);
} else {
if((state_val_43945 === (11))){
var inst_43933 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43933)){
var statearr_43960_46750 = state_43944__$1;
(statearr_43960_46750[(1)] = (12));

} else {
var statearr_43961_46751 = state_43944__$1;
(statearr_43961_46751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (9))){
var state_43944__$1 = state_43944;
var statearr_43962_46753 = state_43944__$1;
(statearr_43962_46753[(2)] = null);

(statearr_43962_46753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (5))){
var state_43944__$1 = state_43944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43965_46755 = state_43944__$1;
(statearr_43965_46755[(1)] = (8));

} else {
var statearr_43966_46756 = state_43944__$1;
(statearr_43966_46756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (14))){
var inst_43938 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43968_46757 = state_43944__$1;
(statearr_43968_46757[(2)] = inst_43938);

(statearr_43968_46757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (10))){
var inst_43930 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43970_46760 = state_43944__$1;
(statearr_43970_46760[(2)] = inst_43930);

(statearr_43970_46760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (8))){
var inst_43927 = cljs.core.async.close_BANG_(to);
var state_43944__$1 = state_43944;
var statearr_43971_46762 = state_43944__$1;
(statearr_43971_46762[(2)] = inst_43927);

(statearr_43971_46762[(1)] = (10));


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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_43972 = [null,null,null,null,null,null,null,null];
(statearr_43972[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_43972[(1)] = (1));

return statearr_43972;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_43944){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_43944);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e43976){var ex__43332__auto__ = e43976;
var statearr_43979_46771 = state_43944;
(statearr_43979_46771[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_43944[(4)]))){
var statearr_43980_46772 = state_43944;
(statearr_43980_46772[(1)] = cljs.core.first((state_43944[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46775 = state_43944;
state_43944 = G__46775;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_43944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_43944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_43982 = f__43612__auto__();
(statearr_43982[(6)] = c__43611__auto___46736);

return statearr_43982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
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
var process = (function (p__43989){
var vec__43990 = p__43989;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43990,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43990,(1),null);
var job = vec__43990;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43611__auto___46790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_43998){
var state_val_43999 = (state_43998[(1)]);
if((state_val_43999 === (1))){
var state_43998__$1 = state_43998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43998__$1,(2),res,v);
} else {
if((state_val_43999 === (2))){
var inst_43995 = (state_43998[(2)]);
var inst_43996 = cljs.core.async.close_BANG_(res);
var state_43998__$1 = (function (){var statearr_44000 = state_43998;
(statearr_44000[(7)] = inst_43995);

return statearr_44000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43998__$1,inst_43996);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0 = (function (){
var statearr_44001 = [null,null,null,null,null,null,null,null];
(statearr_44001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__);

(statearr_44001[(1)] = (1));

return statearr_44001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1 = (function (state_43998){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_43998);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44002){var ex__43332__auto__ = e44002;
var statearr_44003_46796 = state_43998;
(statearr_44003_46796[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_43998[(4)]))){
var statearr_44004_46799 = state_43998;
(statearr_44004_46799[(1)] = cljs.core.first((state_43998[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46804 = state_43998;
state_43998 = G__46804;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = function(state_43998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1.call(this,state_43998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_44006 = f__43612__auto__();
(statearr_44006[(6)] = c__43611__auto___46790);

return statearr_44006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44008){
var vec__44009 = p__44008;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44009,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44009,(1),null);
var job = vec__44009;
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
var n__4706__auto___46813 = n;
var __46814 = (0);
while(true){
if((__46814 < n__4706__auto___46813)){
var G__44012_46816 = type;
var G__44012_46817__$1 = (((G__44012_46816 instanceof cljs.core.Keyword))?G__44012_46816.fqn:null);
switch (G__44012_46817__$1) {
case "compute":
var c__43611__auto___46821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46814,c__43611__auto___46821,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async){
return (function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = ((function (__46814,c__43611__auto___46821,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async){
return (function (state_44025){
var state_val_44026 = (state_44025[(1)]);
if((state_val_44026 === (1))){
var state_44025__$1 = state_44025;
var statearr_44030_46822 = state_44025__$1;
(statearr_44030_46822[(2)] = null);

(statearr_44030_46822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (2))){
var state_44025__$1 = state_44025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44025__$1,(4),jobs);
} else {
if((state_val_44026 === (3))){
var inst_44023 = (state_44025[(2)]);
var state_44025__$1 = state_44025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44025__$1,inst_44023);
} else {
if((state_val_44026 === (4))){
var inst_44015 = (state_44025[(2)]);
var inst_44016 = process(inst_44015);
var state_44025__$1 = state_44025;
if(cljs.core.truth_(inst_44016)){
var statearr_44034_46831 = state_44025__$1;
(statearr_44034_46831[(1)] = (5));

} else {
var statearr_44035_46835 = state_44025__$1;
(statearr_44035_46835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (5))){
var state_44025__$1 = state_44025;
var statearr_44036_46836 = state_44025__$1;
(statearr_44036_46836[(2)] = null);

(statearr_44036_46836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (6))){
var state_44025__$1 = state_44025;
var statearr_44037_46841 = state_44025__$1;
(statearr_44037_46841[(2)] = null);

(statearr_44037_46841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (7))){
var inst_44021 = (state_44025[(2)]);
var state_44025__$1 = state_44025;
var statearr_44038_46847 = state_44025__$1;
(statearr_44038_46847[(2)] = inst_44021);

(statearr_44038_46847[(1)] = (3));


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
});})(__46814,c__43611__auto___46821,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async))
;
return ((function (__46814,switch__43328__auto__,c__43611__auto___46821,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0 = (function (){
var statearr_44043 = [null,null,null,null,null,null,null];
(statearr_44043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__);

(statearr_44043[(1)] = (1));

return statearr_44043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1 = (function (state_44025){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44025);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44044){var ex__43332__auto__ = e44044;
var statearr_44051_46867 = state_44025;
(statearr_44051_46867[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44025[(4)]))){
var statearr_44053_46868 = state_44025;
(statearr_44053_46868[(1)] = cljs.core.first((state_44025[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46874 = state_44025;
state_44025 = G__46874;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = function(state_44025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1.call(this,state_44025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__;
})()
;})(__46814,switch__43328__auto__,c__43611__auto___46821,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async))
})();
var state__43613__auto__ = (function (){var statearr_44054 = f__43612__auto__();
(statearr_44054[(6)] = c__43611__auto___46821);

return statearr_44054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
});})(__46814,c__43611__auto___46821,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async))
);


break;
case "async":
var c__43611__auto___46882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46814,c__43611__auto___46882,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async){
return (function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = ((function (__46814,c__43611__auto___46882,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async){
return (function (state_44067){
var state_val_44068 = (state_44067[(1)]);
if((state_val_44068 === (1))){
var state_44067__$1 = state_44067;
var statearr_44073_46888 = state_44067__$1;
(statearr_44073_46888[(2)] = null);

(statearr_44073_46888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44068 === (2))){
var state_44067__$1 = state_44067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44067__$1,(4),jobs);
} else {
if((state_val_44068 === (3))){
var inst_44065 = (state_44067[(2)]);
var state_44067__$1 = state_44067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44067__$1,inst_44065);
} else {
if((state_val_44068 === (4))){
var inst_44057 = (state_44067[(2)]);
var inst_44058 = async(inst_44057);
var state_44067__$1 = state_44067;
if(cljs.core.truth_(inst_44058)){
var statearr_44074_46898 = state_44067__$1;
(statearr_44074_46898[(1)] = (5));

} else {
var statearr_44075_46899 = state_44067__$1;
(statearr_44075_46899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44068 === (5))){
var state_44067__$1 = state_44067;
var statearr_44076_46901 = state_44067__$1;
(statearr_44076_46901[(2)] = null);

(statearr_44076_46901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44068 === (6))){
var state_44067__$1 = state_44067;
var statearr_44081_46905 = state_44067__$1;
(statearr_44081_46905[(2)] = null);

(statearr_44081_46905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44068 === (7))){
var inst_44063 = (state_44067[(2)]);
var state_44067__$1 = state_44067;
var statearr_44085_46914 = state_44067__$1;
(statearr_44085_46914[(2)] = inst_44063);

(statearr_44085_46914[(1)] = (3));


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
});})(__46814,c__43611__auto___46882,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async))
;
return ((function (__46814,switch__43328__auto__,c__43611__auto___46882,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0 = (function (){
var statearr_44087 = [null,null,null,null,null,null,null];
(statearr_44087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__);

(statearr_44087[(1)] = (1));

return statearr_44087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1 = (function (state_44067){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44067);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44088){var ex__43332__auto__ = e44088;
var statearr_44089_46925 = state_44067;
(statearr_44089_46925[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44067[(4)]))){
var statearr_44090_46928 = state_44067;
(statearr_44090_46928[(1)] = cljs.core.first((state_44067[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46929 = state_44067;
state_44067 = G__46929;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = function(state_44067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1.call(this,state_44067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__;
})()
;})(__46814,switch__43328__auto__,c__43611__auto___46882,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async))
})();
var state__43613__auto__ = (function (){var statearr_44091 = f__43612__auto__();
(statearr_44091[(6)] = c__43611__auto___46882);

return statearr_44091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
});})(__46814,c__43611__auto___46882,G__44012_46816,G__44012_46817__$1,n__4706__auto___46813,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44012_46817__$1)].join('')));

}

var G__46932 = (__46814 + (1));
__46814 = G__46932;
continue;
} else {
}
break;
}

var c__43611__auto___46934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_44118){
var state_val_44119 = (state_44118[(1)]);
if((state_val_44119 === (7))){
var inst_44114 = (state_44118[(2)]);
var state_44118__$1 = state_44118;
var statearr_44127_46935 = state_44118__$1;
(statearr_44127_46935[(2)] = inst_44114);

(statearr_44127_46935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (1))){
var state_44118__$1 = state_44118;
var statearr_44129_46936 = state_44118__$1;
(statearr_44129_46936[(2)] = null);

(statearr_44129_46936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (4))){
var inst_44096 = (state_44118[(7)]);
var inst_44096__$1 = (state_44118[(2)]);
var inst_44097 = (inst_44096__$1 == null);
var state_44118__$1 = (function (){var statearr_44131 = state_44118;
(statearr_44131[(7)] = inst_44096__$1);

return statearr_44131;
})();
if(cljs.core.truth_(inst_44097)){
var statearr_44132_46944 = state_44118__$1;
(statearr_44132_46944[(1)] = (5));

} else {
var statearr_44133_46945 = state_44118__$1;
(statearr_44133_46945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (6))){
var inst_44096 = (state_44118[(7)]);
var inst_44101 = (state_44118[(8)]);
var inst_44101__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44103 = [inst_44096,inst_44101__$1];
var inst_44104 = (new cljs.core.PersistentVector(null,2,(5),inst_44102,inst_44103,null));
var state_44118__$1 = (function (){var statearr_44140 = state_44118;
(statearr_44140[(8)] = inst_44101__$1);

return statearr_44140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44118__$1,(8),jobs,inst_44104);
} else {
if((state_val_44119 === (3))){
var inst_44116 = (state_44118[(2)]);
var state_44118__$1 = state_44118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44118__$1,inst_44116);
} else {
if((state_val_44119 === (2))){
var state_44118__$1 = state_44118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44118__$1,(4),from);
} else {
if((state_val_44119 === (9))){
var inst_44111 = (state_44118[(2)]);
var state_44118__$1 = (function (){var statearr_44143 = state_44118;
(statearr_44143[(9)] = inst_44111);

return statearr_44143;
})();
var statearr_44144_46949 = state_44118__$1;
(statearr_44144_46949[(2)] = null);

(statearr_44144_46949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (5))){
var inst_44099 = cljs.core.async.close_BANG_(jobs);
var state_44118__$1 = state_44118;
var statearr_44145_46952 = state_44118__$1;
(statearr_44145_46952[(2)] = inst_44099);

(statearr_44145_46952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (8))){
var inst_44101 = (state_44118[(8)]);
var inst_44106 = (state_44118[(2)]);
var state_44118__$1 = (function (){var statearr_44146 = state_44118;
(statearr_44146[(10)] = inst_44106);

return statearr_44146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44118__$1,(9),results,inst_44101);
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
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0 = (function (){
var statearr_44147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__);

(statearr_44147[(1)] = (1));

return statearr_44147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1 = (function (state_44118){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44118);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44153){var ex__43332__auto__ = e44153;
var statearr_44155_46959 = state_44118;
(statearr_44155_46959[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44118[(4)]))){
var statearr_44159_46963 = state_44118;
(statearr_44159_46963[(1)] = cljs.core.first((state_44118[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46964 = state_44118;
state_44118 = G__46964;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = function(state_44118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1.call(this,state_44118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_44160 = f__43612__auto__();
(statearr_44160[(6)] = c__43611__auto___46934);

return statearr_44160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));


var c__43611__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_44202){
var state_val_44203 = (state_44202[(1)]);
if((state_val_44203 === (7))){
var inst_44198 = (state_44202[(2)]);
var state_44202__$1 = state_44202;
var statearr_44208_46966 = state_44202__$1;
(statearr_44208_46966[(2)] = inst_44198);

(statearr_44208_46966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (20))){
var state_44202__$1 = state_44202;
var statearr_44209_46968 = state_44202__$1;
(statearr_44209_46968[(2)] = null);

(statearr_44209_46968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (1))){
var state_44202__$1 = state_44202;
var statearr_44211_46969 = state_44202__$1;
(statearr_44211_46969[(2)] = null);

(statearr_44211_46969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (4))){
var inst_44163 = (state_44202[(7)]);
var inst_44163__$1 = (state_44202[(2)]);
var inst_44164 = (inst_44163__$1 == null);
var state_44202__$1 = (function (){var statearr_44212 = state_44202;
(statearr_44212[(7)] = inst_44163__$1);

return statearr_44212;
})();
if(cljs.core.truth_(inst_44164)){
var statearr_44213_46970 = state_44202__$1;
(statearr_44213_46970[(1)] = (5));

} else {
var statearr_44214_46972 = state_44202__$1;
(statearr_44214_46972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (15))){
var inst_44177 = (state_44202[(8)]);
var state_44202__$1 = state_44202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44202__$1,(18),to,inst_44177);
} else {
if((state_val_44203 === (21))){
var inst_44193 = (state_44202[(2)]);
var state_44202__$1 = state_44202;
var statearr_44215_46977 = state_44202__$1;
(statearr_44215_46977[(2)] = inst_44193);

(statearr_44215_46977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (13))){
var inst_44195 = (state_44202[(2)]);
var state_44202__$1 = (function (){var statearr_44217 = state_44202;
(statearr_44217[(9)] = inst_44195);

return statearr_44217;
})();
var statearr_44218_46979 = state_44202__$1;
(statearr_44218_46979[(2)] = null);

(statearr_44218_46979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (6))){
var inst_44163 = (state_44202[(7)]);
var state_44202__$1 = state_44202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44202__$1,(11),inst_44163);
} else {
if((state_val_44203 === (17))){
var inst_44188 = (state_44202[(2)]);
var state_44202__$1 = state_44202;
if(cljs.core.truth_(inst_44188)){
var statearr_44226_46983 = state_44202__$1;
(statearr_44226_46983[(1)] = (19));

} else {
var statearr_44227_46984 = state_44202__$1;
(statearr_44227_46984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (3))){
var inst_44200 = (state_44202[(2)]);
var state_44202__$1 = state_44202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44202__$1,inst_44200);
} else {
if((state_val_44203 === (12))){
var inst_44174 = (state_44202[(10)]);
var state_44202__$1 = state_44202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44202__$1,(14),inst_44174);
} else {
if((state_val_44203 === (2))){
var state_44202__$1 = state_44202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44202__$1,(4),results);
} else {
if((state_val_44203 === (19))){
var state_44202__$1 = state_44202;
var statearr_44234_46987 = state_44202__$1;
(statearr_44234_46987[(2)] = null);

(statearr_44234_46987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (11))){
var inst_44174 = (state_44202[(2)]);
var state_44202__$1 = (function (){var statearr_44235 = state_44202;
(statearr_44235[(10)] = inst_44174);

return statearr_44235;
})();
var statearr_44238_46989 = state_44202__$1;
(statearr_44238_46989[(2)] = null);

(statearr_44238_46989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (9))){
var state_44202__$1 = state_44202;
var statearr_44240_46991 = state_44202__$1;
(statearr_44240_46991[(2)] = null);

(statearr_44240_46991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (5))){
var state_44202__$1 = state_44202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44241_46993 = state_44202__$1;
(statearr_44241_46993[(1)] = (8));

} else {
var statearr_44242_46994 = state_44202__$1;
(statearr_44242_46994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (14))){
var inst_44181 = (state_44202[(11)]);
var inst_44177 = (state_44202[(8)]);
var inst_44177__$1 = (state_44202[(2)]);
var inst_44180 = (inst_44177__$1 == null);
var inst_44181__$1 = cljs.core.not(inst_44180);
var state_44202__$1 = (function (){var statearr_44243 = state_44202;
(statearr_44243[(11)] = inst_44181__$1);

(statearr_44243[(8)] = inst_44177__$1);

return statearr_44243;
})();
if(inst_44181__$1){
var statearr_44244_47001 = state_44202__$1;
(statearr_44244_47001[(1)] = (15));

} else {
var statearr_44245_47003 = state_44202__$1;
(statearr_44245_47003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (16))){
var inst_44181 = (state_44202[(11)]);
var state_44202__$1 = state_44202;
var statearr_44250_47007 = state_44202__$1;
(statearr_44250_47007[(2)] = inst_44181);

(statearr_44250_47007[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (10))){
var inst_44171 = (state_44202[(2)]);
var state_44202__$1 = state_44202;
var statearr_44251_47008 = state_44202__$1;
(statearr_44251_47008[(2)] = inst_44171);

(statearr_44251_47008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (18))){
var inst_44185 = (state_44202[(2)]);
var state_44202__$1 = state_44202;
var statearr_44252_47009 = state_44202__$1;
(statearr_44252_47009[(2)] = inst_44185);

(statearr_44252_47009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (8))){
var inst_44168 = cljs.core.async.close_BANG_(to);
var state_44202__$1 = state_44202;
var statearr_44259_47013 = state_44202__$1;
(statearr_44259_47013[(2)] = inst_44168);

(statearr_44259_47013[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0 = (function (){
var statearr_44266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__);

(statearr_44266[(1)] = (1));

return statearr_44266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1 = (function (state_44202){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44202);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44267){var ex__43332__auto__ = e44267;
var statearr_44268_47017 = state_44202;
(statearr_44268_47017[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44202[(4)]))){
var statearr_44270_47019 = state_44202;
(statearr_44270_47019[(1)] = cljs.core.first((state_44202[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47021 = state_44202;
state_44202 = G__47021;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__ = function(state_44202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1.call(this,state_44202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_44274 = f__43612__auto__();
(statearr_44274[(6)] = c__43611__auto__);

return statearr_44274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));

return c__43611__auto__;
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
var G__44288 = arguments.length;
switch (G__44288) {
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
var G__44291 = arguments.length;
switch (G__44291) {
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
var G__44299 = arguments.length;
switch (G__44299) {
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
var c__43611__auto___47046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_44328){
var state_val_44329 = (state_44328[(1)]);
if((state_val_44329 === (7))){
var inst_44324 = (state_44328[(2)]);
var state_44328__$1 = state_44328;
var statearr_44333_47047 = state_44328__$1;
(statearr_44333_47047[(2)] = inst_44324);

(statearr_44333_47047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (1))){
var state_44328__$1 = state_44328;
var statearr_44334_47052 = state_44328__$1;
(statearr_44334_47052[(2)] = null);

(statearr_44334_47052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (4))){
var inst_44305 = (state_44328[(7)]);
var inst_44305__$1 = (state_44328[(2)]);
var inst_44306 = (inst_44305__$1 == null);
var state_44328__$1 = (function (){var statearr_44338 = state_44328;
(statearr_44338[(7)] = inst_44305__$1);

return statearr_44338;
})();
if(cljs.core.truth_(inst_44306)){
var statearr_44339_47056 = state_44328__$1;
(statearr_44339_47056[(1)] = (5));

} else {
var statearr_44341_47058 = state_44328__$1;
(statearr_44341_47058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (13))){
var state_44328__$1 = state_44328;
var statearr_44345_47060 = state_44328__$1;
(statearr_44345_47060[(2)] = null);

(statearr_44345_47060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (6))){
var inst_44305 = (state_44328[(7)]);
var inst_44311 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44305) : p.call(null,inst_44305));
var state_44328__$1 = state_44328;
if(cljs.core.truth_(inst_44311)){
var statearr_44353_47063 = state_44328__$1;
(statearr_44353_47063[(1)] = (9));

} else {
var statearr_44355_47064 = state_44328__$1;
(statearr_44355_47064[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (3))){
var inst_44326 = (state_44328[(2)]);
var state_44328__$1 = state_44328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44328__$1,inst_44326);
} else {
if((state_val_44329 === (12))){
var state_44328__$1 = state_44328;
var statearr_44356_47069 = state_44328__$1;
(statearr_44356_47069[(2)] = null);

(statearr_44356_47069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (2))){
var state_44328__$1 = state_44328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44328__$1,(4),ch);
} else {
if((state_val_44329 === (11))){
var inst_44305 = (state_44328[(7)]);
var inst_44315 = (state_44328[(2)]);
var state_44328__$1 = state_44328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44328__$1,(8),inst_44315,inst_44305);
} else {
if((state_val_44329 === (9))){
var state_44328__$1 = state_44328;
var statearr_44359_47074 = state_44328__$1;
(statearr_44359_47074[(2)] = tc);

(statearr_44359_47074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (5))){
var inst_44308 = cljs.core.async.close_BANG_(tc);
var inst_44309 = cljs.core.async.close_BANG_(fc);
var state_44328__$1 = (function (){var statearr_44362 = state_44328;
(statearr_44362[(8)] = inst_44308);

return statearr_44362;
})();
var statearr_44363_47077 = state_44328__$1;
(statearr_44363_47077[(2)] = inst_44309);

(statearr_44363_47077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (14))){
var inst_44322 = (state_44328[(2)]);
var state_44328__$1 = state_44328;
var statearr_44364_47079 = state_44328__$1;
(statearr_44364_47079[(2)] = inst_44322);

(statearr_44364_47079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (10))){
var state_44328__$1 = state_44328;
var statearr_44366_47083 = state_44328__$1;
(statearr_44366_47083[(2)] = fc);

(statearr_44366_47083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44329 === (8))){
var inst_44317 = (state_44328[(2)]);
var state_44328__$1 = state_44328;
if(cljs.core.truth_(inst_44317)){
var statearr_44367_47084 = state_44328__$1;
(statearr_44367_47084[(1)] = (12));

} else {
var statearr_44369_47085 = state_44328__$1;
(statearr_44369_47085[(1)] = (13));

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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_44370 = [null,null,null,null,null,null,null,null,null];
(statearr_44370[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_44370[(1)] = (1));

return statearr_44370;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_44328){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44328);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44375){var ex__43332__auto__ = e44375;
var statearr_44376_47092 = state_44328;
(statearr_44376_47092[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44328[(4)]))){
var statearr_44379_47093 = state_44328;
(statearr_44379_47093[(1)] = cljs.core.first((state_44328[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47095 = state_44328;
state_44328 = G__47095;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_44328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_44328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_44384 = f__43612__auto__();
(statearr_44384[(6)] = c__43611__auto___47046);

return statearr_44384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
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
var c__43611__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_44419){
var state_val_44420 = (state_44419[(1)]);
if((state_val_44420 === (7))){
var inst_44415 = (state_44419[(2)]);
var state_44419__$1 = state_44419;
var statearr_44423_47106 = state_44419__$1;
(statearr_44423_47106[(2)] = inst_44415);

(statearr_44423_47106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (1))){
var inst_44391 = init;
var inst_44392 = inst_44391;
var state_44419__$1 = (function (){var statearr_44428 = state_44419;
(statearr_44428[(7)] = inst_44392);

return statearr_44428;
})();
var statearr_44430_47107 = state_44419__$1;
(statearr_44430_47107[(2)] = null);

(statearr_44430_47107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (4))){
var inst_44395 = (state_44419[(8)]);
var inst_44395__$1 = (state_44419[(2)]);
var inst_44398 = (inst_44395__$1 == null);
var state_44419__$1 = (function (){var statearr_44432 = state_44419;
(statearr_44432[(8)] = inst_44395__$1);

return statearr_44432;
})();
if(cljs.core.truth_(inst_44398)){
var statearr_44434_47110 = state_44419__$1;
(statearr_44434_47110[(1)] = (5));

} else {
var statearr_44435_47111 = state_44419__$1;
(statearr_44435_47111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (6))){
var inst_44392 = (state_44419[(7)]);
var inst_44395 = (state_44419[(8)]);
var inst_44406 = (state_44419[(9)]);
var inst_44406__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44392,inst_44395) : f.call(null,inst_44392,inst_44395));
var inst_44407 = cljs.core.reduced_QMARK_(inst_44406__$1);
var state_44419__$1 = (function (){var statearr_44436 = state_44419;
(statearr_44436[(9)] = inst_44406__$1);

return statearr_44436;
})();
if(inst_44407){
var statearr_44437_47117 = state_44419__$1;
(statearr_44437_47117[(1)] = (8));

} else {
var statearr_44440_47118 = state_44419__$1;
(statearr_44440_47118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (3))){
var inst_44417 = (state_44419[(2)]);
var state_44419__$1 = state_44419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44419__$1,inst_44417);
} else {
if((state_val_44420 === (2))){
var state_44419__$1 = state_44419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44419__$1,(4),ch);
} else {
if((state_val_44420 === (9))){
var inst_44406 = (state_44419[(9)]);
var inst_44392 = inst_44406;
var state_44419__$1 = (function (){var statearr_44443 = state_44419;
(statearr_44443[(7)] = inst_44392);

return statearr_44443;
})();
var statearr_44444_47123 = state_44419__$1;
(statearr_44444_47123[(2)] = null);

(statearr_44444_47123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (5))){
var inst_44392 = (state_44419[(7)]);
var state_44419__$1 = state_44419;
var statearr_44452_47125 = state_44419__$1;
(statearr_44452_47125[(2)] = inst_44392);

(statearr_44452_47125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (10))){
var inst_44413 = (state_44419[(2)]);
var state_44419__$1 = state_44419;
var statearr_44457_47128 = state_44419__$1;
(statearr_44457_47128[(2)] = inst_44413);

(statearr_44457_47128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (8))){
var inst_44406 = (state_44419[(9)]);
var inst_44409 = cljs.core.deref(inst_44406);
var state_44419__$1 = state_44419;
var statearr_44458_47132 = state_44419__$1;
(statearr_44458_47132[(2)] = inst_44409);

(statearr_44458_47132[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__43329__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43329__auto____0 = (function (){
var statearr_44460 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44460[(0)] = cljs$core$async$reduce_$_state_machine__43329__auto__);

(statearr_44460[(1)] = (1));

return statearr_44460;
});
var cljs$core$async$reduce_$_state_machine__43329__auto____1 = (function (state_44419){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44419);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44462){var ex__43332__auto__ = e44462;
var statearr_44463_47136 = state_44419;
(statearr_44463_47136[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44419[(4)]))){
var statearr_44464_47137 = state_44419;
(statearr_44464_47137[(1)] = cljs.core.first((state_44419[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47138 = state_44419;
state_44419 = G__47138;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43329__auto__ = function(state_44419){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43329__auto____1.call(this,state_44419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43329__auto____0;
cljs$core$async$reduce_$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43329__auto____1;
return cljs$core$async$reduce_$_state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_44466 = f__43612__auto__();
(statearr_44466[(6)] = c__43611__auto__);

return statearr_44466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));

return c__43611__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43611__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_44475){
var state_val_44476 = (state_44475[(1)]);
if((state_val_44476 === (1))){
var inst_44470 = cljs.core.async.reduce(f__$1,init,ch);
var state_44475__$1 = state_44475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44475__$1,(2),inst_44470);
} else {
if((state_val_44476 === (2))){
var inst_44472 = (state_44475[(2)]);
var inst_44473 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44472) : f__$1.call(null,inst_44472));
var state_44475__$1 = state_44475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44475__$1,inst_44473);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43329__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43329__auto____0 = (function (){
var statearr_44482 = [null,null,null,null,null,null,null];
(statearr_44482[(0)] = cljs$core$async$transduce_$_state_machine__43329__auto__);

(statearr_44482[(1)] = (1));

return statearr_44482;
});
var cljs$core$async$transduce_$_state_machine__43329__auto____1 = (function (state_44475){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44475);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44483){var ex__43332__auto__ = e44483;
var statearr_44484_47152 = state_44475;
(statearr_44484_47152[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44475[(4)]))){
var statearr_44485_47153 = state_44475;
(statearr_44485_47153[(1)] = cljs.core.first((state_44475[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47154 = state_44475;
state_44475 = G__47154;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43329__auto__ = function(state_44475){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43329__auto____1.call(this,state_44475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43329__auto____0;
cljs$core$async$transduce_$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43329__auto____1;
return cljs$core$async$transduce_$_state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_44487 = f__43612__auto__();
(statearr_44487[(6)] = c__43611__auto__);

return statearr_44487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));

return c__43611__auto__;
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
var G__44494 = arguments.length;
switch (G__44494) {
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
var c__43611__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_44524){
var state_val_44525 = (state_44524[(1)]);
if((state_val_44525 === (7))){
var inst_44503 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
var statearr_44529_47163 = state_44524__$1;
(statearr_44529_47163[(2)] = inst_44503);

(statearr_44529_47163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (1))){
var inst_44497 = cljs.core.seq(coll);
var inst_44498 = inst_44497;
var state_44524__$1 = (function (){var statearr_44530 = state_44524;
(statearr_44530[(7)] = inst_44498);

return statearr_44530;
})();
var statearr_44531_47166 = state_44524__$1;
(statearr_44531_47166[(2)] = null);

(statearr_44531_47166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (4))){
var inst_44498 = (state_44524[(7)]);
var inst_44501 = cljs.core.first(inst_44498);
var state_44524__$1 = state_44524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44524__$1,(7),ch,inst_44501);
} else {
if((state_val_44525 === (13))){
var inst_44518 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
var statearr_44533_47171 = state_44524__$1;
(statearr_44533_47171[(2)] = inst_44518);

(statearr_44533_47171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (6))){
var inst_44506 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
if(cljs.core.truth_(inst_44506)){
var statearr_44534_47172 = state_44524__$1;
(statearr_44534_47172[(1)] = (8));

} else {
var statearr_44535_47173 = state_44524__$1;
(statearr_44535_47173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (3))){
var inst_44522 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44524__$1,inst_44522);
} else {
if((state_val_44525 === (12))){
var state_44524__$1 = state_44524;
var statearr_44540_47176 = state_44524__$1;
(statearr_44540_47176[(2)] = null);

(statearr_44540_47176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (2))){
var inst_44498 = (state_44524[(7)]);
var state_44524__$1 = state_44524;
if(cljs.core.truth_(inst_44498)){
var statearr_44542_47181 = state_44524__$1;
(statearr_44542_47181[(1)] = (4));

} else {
var statearr_44543_47182 = state_44524__$1;
(statearr_44543_47182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (11))){
var inst_44515 = cljs.core.async.close_BANG_(ch);
var state_44524__$1 = state_44524;
var statearr_44544_47183 = state_44524__$1;
(statearr_44544_47183[(2)] = inst_44515);

(statearr_44544_47183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (9))){
var state_44524__$1 = state_44524;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44545_47188 = state_44524__$1;
(statearr_44545_47188[(1)] = (11));

} else {
var statearr_44546_47189 = state_44524__$1;
(statearr_44546_47189[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (5))){
var inst_44498 = (state_44524[(7)]);
var state_44524__$1 = state_44524;
var statearr_44551_47190 = state_44524__$1;
(statearr_44551_47190[(2)] = inst_44498);

(statearr_44551_47190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (10))){
var inst_44520 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
var statearr_44552_47191 = state_44524__$1;
(statearr_44552_47191[(2)] = inst_44520);

(statearr_44552_47191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (8))){
var inst_44498 = (state_44524[(7)]);
var inst_44511 = cljs.core.next(inst_44498);
var inst_44498__$1 = inst_44511;
var state_44524__$1 = (function (){var statearr_44553 = state_44524;
(statearr_44553[(7)] = inst_44498__$1);

return statearr_44553;
})();
var statearr_44555_47192 = state_44524__$1;
(statearr_44555_47192[(2)] = null);

(statearr_44555_47192[(1)] = (2));


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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_44556 = [null,null,null,null,null,null,null,null];
(statearr_44556[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_44556[(1)] = (1));

return statearr_44556;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_44524){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44524);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e44557){var ex__43332__auto__ = e44557;
var statearr_44558_47196 = state_44524;
(statearr_44558_47196[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44524[(4)]))){
var statearr_44559_47197 = state_44524;
(statearr_44559_47197[(1)] = cljs.core.first((state_44524[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47198 = state_44524;
state_44524 = G__47198;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_44524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_44524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_44565 = f__43612__auto__();
(statearr_44565[(6)] = c__43611__auto__);

return statearr_44565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));

return c__43611__auto__;
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
var G__44568 = arguments.length;
switch (G__44568) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_47205 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_47205(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47213 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_47213(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47217 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_47217(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47218 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_47218(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44590 = (function (ch,cs,meta44591){
this.ch = ch;
this.cs = cs;
this.meta44591 = meta44591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44592,meta44591__$1){
var self__ = this;
var _44592__$1 = this;
return (new cljs.core.async.t_cljs$core$async44590(self__.ch,self__.cs,meta44591__$1));
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44592){
var self__ = this;
var _44592__$1 = this;
return self__.meta44591;
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44591","meta44591",-2006289438,null)], null);
}));

(cljs.core.async.t_cljs$core$async44590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44590");

(cljs.core.async.t_cljs$core$async44590.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44590.
 */
cljs.core.async.__GT_t_cljs$core$async44590 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44590(ch__$1,cs__$1,meta44591){
return (new cljs.core.async.t_cljs$core$async44590(ch__$1,cs__$1,meta44591));
});

}

return (new cljs.core.async.t_cljs$core$async44590(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43611__auto___47226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_44804){
var state_val_44806 = (state_44804[(1)]);
if((state_val_44806 === (7))){
var inst_44796 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_44816_47230 = state_44804__$1;
(statearr_44816_47230[(2)] = inst_44796);

(statearr_44816_47230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (20))){
var inst_44666 = (state_44804[(7)]);
var inst_44678 = cljs.core.first(inst_44666);
var inst_44679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44678,(0),null);
var inst_44680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44678,(1),null);
var state_44804__$1 = (function (){var statearr_44826 = state_44804;
(statearr_44826[(8)] = inst_44679);

return statearr_44826;
})();
if(cljs.core.truth_(inst_44680)){
var statearr_44828_47232 = state_44804__$1;
(statearr_44828_47232[(1)] = (22));

} else {
var statearr_44833_47233 = state_44804__$1;
(statearr_44833_47233[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (27))){
var inst_44719 = (state_44804[(9)]);
var inst_44717 = (state_44804[(10)]);
var inst_44633 = (state_44804[(11)]);
var inst_44724 = (state_44804[(12)]);
var inst_44724__$1 = cljs.core._nth(inst_44717,inst_44719);
var inst_44725 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44724__$1,inst_44633,done);
var state_44804__$1 = (function (){var statearr_44834 = state_44804;
(statearr_44834[(12)] = inst_44724__$1);

return statearr_44834;
})();
if(cljs.core.truth_(inst_44725)){
var statearr_44835_47236 = state_44804__$1;
(statearr_44835_47236[(1)] = (30));

} else {
var statearr_44836_47237 = state_44804__$1;
(statearr_44836_47237[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (1))){
var state_44804__$1 = state_44804;
var statearr_44841_47238 = state_44804__$1;
(statearr_44841_47238[(2)] = null);

(statearr_44841_47238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (24))){
var inst_44666 = (state_44804[(7)]);
var inst_44685 = (state_44804[(2)]);
var inst_44686 = cljs.core.next(inst_44666);
var inst_44642 = inst_44686;
var inst_44643 = null;
var inst_44644 = (0);
var inst_44645 = (0);
var state_44804__$1 = (function (){var statearr_44848 = state_44804;
(statearr_44848[(13)] = inst_44642);

(statearr_44848[(14)] = inst_44645);

(statearr_44848[(15)] = inst_44685);

(statearr_44848[(16)] = inst_44643);

(statearr_44848[(17)] = inst_44644);

return statearr_44848;
})();
var statearr_44855_47241 = state_44804__$1;
(statearr_44855_47241[(2)] = null);

(statearr_44855_47241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (39))){
var state_44804__$1 = state_44804;
var statearr_44865_47243 = state_44804__$1;
(statearr_44865_47243[(2)] = null);

(statearr_44865_47243[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (4))){
var inst_44633 = (state_44804[(11)]);
var inst_44633__$1 = (state_44804[(2)]);
var inst_44634 = (inst_44633__$1 == null);
var state_44804__$1 = (function (){var statearr_44866 = state_44804;
(statearr_44866[(11)] = inst_44633__$1);

return statearr_44866;
})();
if(cljs.core.truth_(inst_44634)){
var statearr_44867_47244 = state_44804__$1;
(statearr_44867_47244[(1)] = (5));

} else {
var statearr_44868_47245 = state_44804__$1;
(statearr_44868_47245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (15))){
var inst_44642 = (state_44804[(13)]);
var inst_44645 = (state_44804[(14)]);
var inst_44643 = (state_44804[(16)]);
var inst_44644 = (state_44804[(17)]);
var inst_44662 = (state_44804[(2)]);
var inst_44663 = (inst_44645 + (1));
var tmp44861 = inst_44642;
var tmp44862 = inst_44643;
var tmp44863 = inst_44644;
var inst_44642__$1 = tmp44861;
var inst_44643__$1 = tmp44862;
var inst_44644__$1 = tmp44863;
var inst_44645__$1 = inst_44663;
var state_44804__$1 = (function (){var statearr_44878 = state_44804;
(statearr_44878[(18)] = inst_44662);

(statearr_44878[(13)] = inst_44642__$1);

(statearr_44878[(14)] = inst_44645__$1);

(statearr_44878[(16)] = inst_44643__$1);

(statearr_44878[(17)] = inst_44644__$1);

return statearr_44878;
})();
var statearr_44879_47246 = state_44804__$1;
(statearr_44879_47246[(2)] = null);

(statearr_44879_47246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (21))){
var inst_44689 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_44883_47247 = state_44804__$1;
(statearr_44883_47247[(2)] = inst_44689);

(statearr_44883_47247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (31))){
var inst_44724 = (state_44804[(12)]);
var inst_44728 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44724);
var state_44804__$1 = state_44804;
var statearr_44888_47249 = state_44804__$1;
(statearr_44888_47249[(2)] = inst_44728);

(statearr_44888_47249[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (32))){
var inst_44719 = (state_44804[(9)]);
var inst_44717 = (state_44804[(10)]);
var inst_44718 = (state_44804[(19)]);
var inst_44716 = (state_44804[(20)]);
var inst_44730 = (state_44804[(2)]);
var inst_44733 = (inst_44719 + (1));
var tmp44880 = inst_44717;
var tmp44881 = inst_44718;
var tmp44882 = inst_44716;
var inst_44716__$1 = tmp44882;
var inst_44717__$1 = tmp44880;
var inst_44718__$1 = tmp44881;
var inst_44719__$1 = inst_44733;
var state_44804__$1 = (function (){var statearr_44890 = state_44804;
(statearr_44890[(9)] = inst_44719__$1);

(statearr_44890[(10)] = inst_44717__$1);

(statearr_44890[(21)] = inst_44730);

(statearr_44890[(19)] = inst_44718__$1);

(statearr_44890[(20)] = inst_44716__$1);

return statearr_44890;
})();
var statearr_44891_47252 = state_44804__$1;
(statearr_44891_47252[(2)] = null);

(statearr_44891_47252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (40))){
var inst_44764 = (state_44804[(22)]);
var inst_44772 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44764);
var state_44804__$1 = state_44804;
var statearr_44892_47257 = state_44804__$1;
(statearr_44892_47257[(2)] = inst_44772);

(statearr_44892_47257[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (33))){
var inst_44743 = (state_44804[(23)]);
var inst_44750 = cljs.core.chunked_seq_QMARK_(inst_44743);
var state_44804__$1 = state_44804;
if(inst_44750){
var statearr_44894_47258 = state_44804__$1;
(statearr_44894_47258[(1)] = (36));

} else {
var statearr_44895_47259 = state_44804__$1;
(statearr_44895_47259[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (13))){
var inst_44654 = (state_44804[(24)]);
var inst_44659 = cljs.core.async.close_BANG_(inst_44654);
var state_44804__$1 = state_44804;
var statearr_44897_47260 = state_44804__$1;
(statearr_44897_47260[(2)] = inst_44659);

(statearr_44897_47260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (22))){
var inst_44679 = (state_44804[(8)]);
var inst_44682 = cljs.core.async.close_BANG_(inst_44679);
var state_44804__$1 = state_44804;
var statearr_44904_47263 = state_44804__$1;
(statearr_44904_47263[(2)] = inst_44682);

(statearr_44904_47263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (36))){
var inst_44743 = (state_44804[(23)]);
var inst_44754 = cljs.core.chunk_first(inst_44743);
var inst_44759 = cljs.core.chunk_rest(inst_44743);
var inst_44760 = cljs.core.count(inst_44754);
var inst_44716 = inst_44759;
var inst_44717 = inst_44754;
var inst_44718 = inst_44760;
var inst_44719 = (0);
var state_44804__$1 = (function (){var statearr_44911 = state_44804;
(statearr_44911[(9)] = inst_44719);

(statearr_44911[(10)] = inst_44717);

(statearr_44911[(19)] = inst_44718);

(statearr_44911[(20)] = inst_44716);

return statearr_44911;
})();
var statearr_44913_47266 = state_44804__$1;
(statearr_44913_47266[(2)] = null);

(statearr_44913_47266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (41))){
var inst_44743 = (state_44804[(23)]);
var inst_44775 = (state_44804[(2)]);
var inst_44776 = cljs.core.next(inst_44743);
var inst_44716 = inst_44776;
var inst_44717 = null;
var inst_44718 = (0);
var inst_44719 = (0);
var state_44804__$1 = (function (){var statearr_44924 = state_44804;
(statearr_44924[(25)] = inst_44775);

(statearr_44924[(9)] = inst_44719);

(statearr_44924[(10)] = inst_44717);

(statearr_44924[(19)] = inst_44718);

(statearr_44924[(20)] = inst_44716);

return statearr_44924;
})();
var statearr_44926_47270 = state_44804__$1;
(statearr_44926_47270[(2)] = null);

(statearr_44926_47270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (43))){
var state_44804__$1 = state_44804;
var statearr_44932_47276 = state_44804__$1;
(statearr_44932_47276[(2)] = null);

(statearr_44932_47276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (29))){
var inst_44784 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_44933_47277 = state_44804__$1;
(statearr_44933_47277[(2)] = inst_44784);

(statearr_44933_47277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (44))){
var inst_44793 = (state_44804[(2)]);
var state_44804__$1 = (function (){var statearr_44938 = state_44804;
(statearr_44938[(26)] = inst_44793);

return statearr_44938;
})();
var statearr_44940_47284 = state_44804__$1;
(statearr_44940_47284[(2)] = null);

(statearr_44940_47284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (6))){
var inst_44699 = (state_44804[(27)]);
var inst_44698 = cljs.core.deref(cs);
var inst_44699__$1 = cljs.core.keys(inst_44698);
var inst_44709 = cljs.core.count(inst_44699__$1);
var inst_44710 = cljs.core.reset_BANG_(dctr,inst_44709);
var inst_44715 = cljs.core.seq(inst_44699__$1);
var inst_44716 = inst_44715;
var inst_44717 = null;
var inst_44718 = (0);
var inst_44719 = (0);
var state_44804__$1 = (function (){var statearr_44941 = state_44804;
(statearr_44941[(27)] = inst_44699__$1);

(statearr_44941[(9)] = inst_44719);

(statearr_44941[(10)] = inst_44717);

(statearr_44941[(19)] = inst_44718);

(statearr_44941[(20)] = inst_44716);

(statearr_44941[(28)] = inst_44710);

return statearr_44941;
})();
var statearr_44942_47286 = state_44804__$1;
(statearr_44942_47286[(2)] = null);

(statearr_44942_47286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (28))){
var inst_44743 = (state_44804[(23)]);
var inst_44716 = (state_44804[(20)]);
var inst_44743__$1 = cljs.core.seq(inst_44716);
var state_44804__$1 = (function (){var statearr_44943 = state_44804;
(statearr_44943[(23)] = inst_44743__$1);

return statearr_44943;
})();
if(inst_44743__$1){
var statearr_44944_47287 = state_44804__$1;
(statearr_44944_47287[(1)] = (33));

} else {
var statearr_44945_47288 = state_44804__$1;
(statearr_44945_47288[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (25))){
var inst_44719 = (state_44804[(9)]);
var inst_44718 = (state_44804[(19)]);
var inst_44721 = (inst_44719 < inst_44718);
var inst_44722 = inst_44721;
var state_44804__$1 = state_44804;
if(cljs.core.truth_(inst_44722)){
var statearr_44946_47293 = state_44804__$1;
(statearr_44946_47293[(1)] = (27));

} else {
var statearr_44947_47294 = state_44804__$1;
(statearr_44947_47294[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (34))){
var state_44804__$1 = state_44804;
var statearr_44949_47295 = state_44804__$1;
(statearr_44949_47295[(2)] = null);

(statearr_44949_47295[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (17))){
var state_44804__$1 = state_44804;
var statearr_44950_47300 = state_44804__$1;
(statearr_44950_47300[(2)] = null);

(statearr_44950_47300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (3))){
var inst_44798 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44804__$1,inst_44798);
} else {
if((state_val_44806 === (12))){
var inst_44694 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_44955_47305 = state_44804__$1;
(statearr_44955_47305[(2)] = inst_44694);

(statearr_44955_47305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (2))){
var state_44804__$1 = state_44804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44804__$1,(4),ch);
} else {
if((state_val_44806 === (23))){
var state_44804__$1 = state_44804;
var statearr_44963_47306 = state_44804__$1;
(statearr_44963_47306[(2)] = null);

(statearr_44963_47306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (35))){
var inst_44782 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_44964_47307 = state_44804__$1;
(statearr_44964_47307[(2)] = inst_44782);

(statearr_44964_47307[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (19))){
var inst_44666 = (state_44804[(7)]);
var inst_44670 = cljs.core.chunk_first(inst_44666);
var inst_44671 = cljs.core.chunk_rest(inst_44666);
var inst_44672 = cljs.core.count(inst_44670);
var inst_44642 = inst_44671;
var inst_44643 = inst_44670;
var inst_44644 = inst_44672;
var inst_44645 = (0);
var state_44804__$1 = (function (){var statearr_44965 = state_44804;
(statearr_44965[(13)] = inst_44642);

(statearr_44965[(14)] = inst_44645);

(statearr_44965[(16)] = inst_44643);

(statearr_44965[(17)] = inst_44644);

return statearr_44965;
})();
var statearr_44966_47308 = state_44804__$1;
(statearr_44966_47308[(2)] = null);

(statearr_44966_47308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (11))){
var inst_44642 = (state_44804[(13)]);
var inst_44666 = (state_44804[(7)]);
var inst_44666__$1 = cljs.core.seq(inst_44642);
var state_44804__$1 = (function (){var statearr_44971 = state_44804;
(statearr_44971[(7)] = inst_44666__$1);

return statearr_44971;
})();
if(inst_44666__$1){
var statearr_44972_47316 = state_44804__$1;
(statearr_44972_47316[(1)] = (16));

} else {
var statearr_44973_47317 = state_44804__$1;
(statearr_44973_47317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (9))){
var inst_44696 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_44979_47318 = state_44804__$1;
(statearr_44979_47318[(2)] = inst_44696);

(statearr_44979_47318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (5))){
var inst_44640 = cljs.core.deref(cs);
var inst_44641 = cljs.core.seq(inst_44640);
var inst_44642 = inst_44641;
var inst_44643 = null;
var inst_44644 = (0);
var inst_44645 = (0);
var state_44804__$1 = (function (){var statearr_44980 = state_44804;
(statearr_44980[(13)] = inst_44642);

(statearr_44980[(14)] = inst_44645);

(statearr_44980[(16)] = inst_44643);

(statearr_44980[(17)] = inst_44644);

return statearr_44980;
})();
var statearr_44981_47319 = state_44804__$1;
(statearr_44981_47319[(2)] = null);

(statearr_44981_47319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (14))){
var state_44804__$1 = state_44804;
var statearr_44982_47320 = state_44804__$1;
(statearr_44982_47320[(2)] = null);

(statearr_44982_47320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (45))){
var inst_44790 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_44985_47321 = state_44804__$1;
(statearr_44985_47321[(2)] = inst_44790);

(statearr_44985_47321[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (26))){
var inst_44699 = (state_44804[(27)]);
var inst_44786 = (state_44804[(2)]);
var inst_44787 = cljs.core.seq(inst_44699);
var state_44804__$1 = (function (){var statearr_44994 = state_44804;
(statearr_44994[(29)] = inst_44786);

return statearr_44994;
})();
if(inst_44787){
var statearr_45001_47322 = state_44804__$1;
(statearr_45001_47322[(1)] = (42));

} else {
var statearr_45002_47323 = state_44804__$1;
(statearr_45002_47323[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (16))){
var inst_44666 = (state_44804[(7)]);
var inst_44668 = cljs.core.chunked_seq_QMARK_(inst_44666);
var state_44804__$1 = state_44804;
if(inst_44668){
var statearr_45003_47324 = state_44804__$1;
(statearr_45003_47324[(1)] = (19));

} else {
var statearr_45004_47325 = state_44804__$1;
(statearr_45004_47325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (38))){
var inst_44779 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_45005_47326 = state_44804__$1;
(statearr_45005_47326[(2)] = inst_44779);

(statearr_45005_47326[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (30))){
var state_44804__$1 = state_44804;
var statearr_45008_47327 = state_44804__$1;
(statearr_45008_47327[(2)] = null);

(statearr_45008_47327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (10))){
var inst_44645 = (state_44804[(14)]);
var inst_44643 = (state_44804[(16)]);
var inst_44653 = cljs.core._nth(inst_44643,inst_44645);
var inst_44654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44653,(0),null);
var inst_44655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44653,(1),null);
var state_44804__$1 = (function (){var statearr_45009 = state_44804;
(statearr_45009[(24)] = inst_44654);

return statearr_45009;
})();
if(cljs.core.truth_(inst_44655)){
var statearr_45010_47328 = state_44804__$1;
(statearr_45010_47328[(1)] = (13));

} else {
var statearr_45011_47329 = state_44804__$1;
(statearr_45011_47329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (18))){
var inst_44692 = (state_44804[(2)]);
var state_44804__$1 = state_44804;
var statearr_45017_47330 = state_44804__$1;
(statearr_45017_47330[(2)] = inst_44692);

(statearr_45017_47330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (42))){
var state_44804__$1 = state_44804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44804__$1,(45),dchan);
} else {
if((state_val_44806 === (37))){
var inst_44743 = (state_44804[(23)]);
var inst_44633 = (state_44804[(11)]);
var inst_44764 = (state_44804[(22)]);
var inst_44764__$1 = cljs.core.first(inst_44743);
var inst_44769 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44764__$1,inst_44633,done);
var state_44804__$1 = (function (){var statearr_45019 = state_44804;
(statearr_45019[(22)] = inst_44764__$1);

return statearr_45019;
})();
if(cljs.core.truth_(inst_44769)){
var statearr_45020_47338 = state_44804__$1;
(statearr_45020_47338[(1)] = (39));

} else {
var statearr_45021_47339 = state_44804__$1;
(statearr_45021_47339[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (8))){
var inst_44645 = (state_44804[(14)]);
var inst_44644 = (state_44804[(17)]);
var inst_44647 = (inst_44645 < inst_44644);
var inst_44648 = inst_44647;
var state_44804__$1 = state_44804;
if(cljs.core.truth_(inst_44648)){
var statearr_45024_47340 = state_44804__$1;
(statearr_45024_47340[(1)] = (10));

} else {
var statearr_45027_47341 = state_44804__$1;
(statearr_45027_47341[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__43329__auto__ = null;
var cljs$core$async$mult_$_state_machine__43329__auto____0 = (function (){
var statearr_45032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45032[(0)] = cljs$core$async$mult_$_state_machine__43329__auto__);

(statearr_45032[(1)] = (1));

return statearr_45032;
});
var cljs$core$async$mult_$_state_machine__43329__auto____1 = (function (state_44804){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_44804);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e45033){var ex__43332__auto__ = e45033;
var statearr_45034_47342 = state_44804;
(statearr_45034_47342[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_44804[(4)]))){
var statearr_45035_47343 = state_44804;
(statearr_45035_47343[(1)] = cljs.core.first((state_44804[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47344 = state_44804;
state_44804 = G__47344;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43329__auto__ = function(state_44804){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43329__auto____1.call(this,state_44804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43329__auto____0;
cljs$core$async$mult_$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43329__auto____1;
return cljs$core$async$mult_$_state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_45039 = f__43612__auto__();
(statearr_45039[(6)] = c__43611__auto___47226);

return statearr_45039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
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
var G__45042 = arguments.length;
switch (G__45042) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_47347 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_47347(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47354 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_47354(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47355 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47355(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47356 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_47356(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47357 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47357(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47359 = arguments.length;
var i__4830__auto___47360 = (0);
while(true){
if((i__4830__auto___47360 < len__4829__auto___47359)){
args__4835__auto__.push((arguments[i__4830__auto___47360]));

var G__47361 = (i__4830__auto___47360 + (1));
i__4830__auto___47360 = G__47361;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45103){
var map__45104 = p__45103;
var map__45104__$1 = cljs.core.__destructure_map(map__45104);
var opts = map__45104__$1;
var statearr_45105_47362 = state;
(statearr_45105_47362[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45110_47363 = state;
(statearr_45110_47363[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45113_47364 = state;
(statearr_45113_47364[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45093){
var G__45094 = cljs.core.first(seq45093);
var seq45093__$1 = cljs.core.next(seq45093);
var G__45095 = cljs.core.first(seq45093__$1);
var seq45093__$2 = cljs.core.next(seq45093__$1);
var G__45096 = cljs.core.first(seq45093__$2);
var seq45093__$3 = cljs.core.next(seq45093__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45094,G__45095,G__45096,seq45093__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45124 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45125){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45125 = meta45125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45126,meta45125__$1){
var self__ = this;
var _45126__$1 = this;
return (new cljs.core.async.t_cljs$core$async45124(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45125__$1));
}));

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45126){
var self__ = this;
var _45126__$1 = this;
return self__.meta45125;
}));

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45124.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45125","meta45125",-1178627759,null)], null);
}));

(cljs.core.async.t_cljs$core$async45124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45124");

(cljs.core.async.t_cljs$core$async45124.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45124.
 */
cljs.core.async.__GT_t_cljs$core$async45124 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45124(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45125){
return (new cljs.core.async.t_cljs$core$async45124(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45125));
});

}

return (new cljs.core.async.t_cljs$core$async45124(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43611__auto___47372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_45205){
var state_val_45206 = (state_45205[(1)]);
if((state_val_45206 === (7))){
var inst_45164 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
if(cljs.core.truth_(inst_45164)){
var statearr_45207_47373 = state_45205__$1;
(statearr_45207_47373[(1)] = (8));

} else {
var statearr_45208_47374 = state_45205__$1;
(statearr_45208_47374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (20))){
var inst_45157 = (state_45205[(7)]);
var state_45205__$1 = state_45205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45205__$1,(23),out,inst_45157);
} else {
if((state_val_45206 === (1))){
var inst_45140 = calc_state();
var inst_45141 = cljs.core.__destructure_map(inst_45140);
var inst_45142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45141,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45141,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45141,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45145 = inst_45140;
var state_45205__$1 = (function (){var statearr_45209 = state_45205;
(statearr_45209[(8)] = inst_45142);

(statearr_45209[(9)] = inst_45144);

(statearr_45209[(10)] = inst_45143);

(statearr_45209[(11)] = inst_45145);

return statearr_45209;
})();
var statearr_45210_47376 = state_45205__$1;
(statearr_45210_47376[(2)] = null);

(statearr_45210_47376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (24))){
var inst_45148 = (state_45205[(12)]);
var inst_45145 = inst_45148;
var state_45205__$1 = (function (){var statearr_45211 = state_45205;
(statearr_45211[(11)] = inst_45145);

return statearr_45211;
})();
var statearr_45212_47378 = state_45205__$1;
(statearr_45212_47378[(2)] = null);

(statearr_45212_47378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (4))){
var inst_45157 = (state_45205[(7)]);
var inst_45159 = (state_45205[(13)]);
var inst_45156 = (state_45205[(2)]);
var inst_45157__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45156,(0),null);
var inst_45158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45156,(1),null);
var inst_45159__$1 = (inst_45157__$1 == null);
var state_45205__$1 = (function (){var statearr_45213 = state_45205;
(statearr_45213[(14)] = inst_45158);

(statearr_45213[(7)] = inst_45157__$1);

(statearr_45213[(13)] = inst_45159__$1);

return statearr_45213;
})();
if(cljs.core.truth_(inst_45159__$1)){
var statearr_45214_47379 = state_45205__$1;
(statearr_45214_47379[(1)] = (5));

} else {
var statearr_45215_47380 = state_45205__$1;
(statearr_45215_47380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (15))){
var inst_45149 = (state_45205[(15)]);
var inst_45178 = (state_45205[(16)]);
var inst_45178__$1 = cljs.core.empty_QMARK_(inst_45149);
var state_45205__$1 = (function (){var statearr_45216 = state_45205;
(statearr_45216[(16)] = inst_45178__$1);

return statearr_45216;
})();
if(inst_45178__$1){
var statearr_45217_47381 = state_45205__$1;
(statearr_45217_47381[(1)] = (17));

} else {
var statearr_45218_47382 = state_45205__$1;
(statearr_45218_47382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (21))){
var inst_45148 = (state_45205[(12)]);
var inst_45145 = inst_45148;
var state_45205__$1 = (function (){var statearr_45219 = state_45205;
(statearr_45219[(11)] = inst_45145);

return statearr_45219;
})();
var statearr_45220_47385 = state_45205__$1;
(statearr_45220_47385[(2)] = null);

(statearr_45220_47385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (13))){
var inst_45171 = (state_45205[(2)]);
var inst_45172 = calc_state();
var inst_45145 = inst_45172;
var state_45205__$1 = (function (){var statearr_45221 = state_45205;
(statearr_45221[(17)] = inst_45171);

(statearr_45221[(11)] = inst_45145);

return statearr_45221;
})();
var statearr_45223_47387 = state_45205__$1;
(statearr_45223_47387[(2)] = null);

(statearr_45223_47387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (22))){
var inst_45198 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
var statearr_45225_47388 = state_45205__$1;
(statearr_45225_47388[(2)] = inst_45198);

(statearr_45225_47388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (6))){
var inst_45158 = (state_45205[(14)]);
var inst_45162 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45158,change);
var state_45205__$1 = state_45205;
var statearr_45233_47389 = state_45205__$1;
(statearr_45233_47389[(2)] = inst_45162);

(statearr_45233_47389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (25))){
var state_45205__$1 = state_45205;
var statearr_45234_47390 = state_45205__$1;
(statearr_45234_47390[(2)] = null);

(statearr_45234_47390[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (17))){
var inst_45158 = (state_45205[(14)]);
var inst_45150 = (state_45205[(18)]);
var inst_45180 = (inst_45150.cljs$core$IFn$_invoke$arity$1 ? inst_45150.cljs$core$IFn$_invoke$arity$1(inst_45158) : inst_45150.call(null,inst_45158));
var inst_45181 = cljs.core.not(inst_45180);
var state_45205__$1 = state_45205;
var statearr_45236_47391 = state_45205__$1;
(statearr_45236_47391[(2)] = inst_45181);

(statearr_45236_47391[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (3))){
var inst_45202 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45205__$1,inst_45202);
} else {
if((state_val_45206 === (12))){
var state_45205__$1 = state_45205;
var statearr_45240_47392 = state_45205__$1;
(statearr_45240_47392[(2)] = null);

(statearr_45240_47392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (2))){
var inst_45148 = (state_45205[(12)]);
var inst_45145 = (state_45205[(11)]);
var inst_45148__$1 = cljs.core.__destructure_map(inst_45145);
var inst_45149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45148__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45148__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45148__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45205__$1 = (function (){var statearr_45243 = state_45205;
(statearr_45243[(15)] = inst_45149);

(statearr_45243[(12)] = inst_45148__$1);

(statearr_45243[(18)] = inst_45150);

return statearr_45243;
})();
return cljs.core.async.ioc_alts_BANG_(state_45205__$1,(4),inst_45151);
} else {
if((state_val_45206 === (23))){
var inst_45189 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
if(cljs.core.truth_(inst_45189)){
var statearr_45247_47394 = state_45205__$1;
(statearr_45247_47394[(1)] = (24));

} else {
var statearr_45248_47395 = state_45205__$1;
(statearr_45248_47395[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (19))){
var inst_45184 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
var statearr_45249_47397 = state_45205__$1;
(statearr_45249_47397[(2)] = inst_45184);

(statearr_45249_47397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (11))){
var inst_45158 = (state_45205[(14)]);
var inst_45168 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45158);
var state_45205__$1 = state_45205;
var statearr_45250_47398 = state_45205__$1;
(statearr_45250_47398[(2)] = inst_45168);

(statearr_45250_47398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (9))){
var inst_45149 = (state_45205[(15)]);
var inst_45158 = (state_45205[(14)]);
var inst_45175 = (state_45205[(19)]);
var inst_45175__$1 = (inst_45149.cljs$core$IFn$_invoke$arity$1 ? inst_45149.cljs$core$IFn$_invoke$arity$1(inst_45158) : inst_45149.call(null,inst_45158));
var state_45205__$1 = (function (){var statearr_45251 = state_45205;
(statearr_45251[(19)] = inst_45175__$1);

return statearr_45251;
})();
if(cljs.core.truth_(inst_45175__$1)){
var statearr_45252_47399 = state_45205__$1;
(statearr_45252_47399[(1)] = (14));

} else {
var statearr_45253_47400 = state_45205__$1;
(statearr_45253_47400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (5))){
var inst_45159 = (state_45205[(13)]);
var state_45205__$1 = state_45205;
var statearr_45254_47402 = state_45205__$1;
(statearr_45254_47402[(2)] = inst_45159);

(statearr_45254_47402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (14))){
var inst_45175 = (state_45205[(19)]);
var state_45205__$1 = state_45205;
var statearr_45255_47404 = state_45205__$1;
(statearr_45255_47404[(2)] = inst_45175);

(statearr_45255_47404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (26))){
var inst_45194 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
var statearr_45259_47405 = state_45205__$1;
(statearr_45259_47405[(2)] = inst_45194);

(statearr_45259_47405[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (16))){
var inst_45186 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
if(cljs.core.truth_(inst_45186)){
var statearr_45260_47406 = state_45205__$1;
(statearr_45260_47406[(1)] = (20));

} else {
var statearr_45261_47407 = state_45205__$1;
(statearr_45261_47407[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (10))){
var inst_45200 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
var statearr_45263_47408 = state_45205__$1;
(statearr_45263_47408[(2)] = inst_45200);

(statearr_45263_47408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (18))){
var inst_45178 = (state_45205[(16)]);
var state_45205__$1 = state_45205;
var statearr_45266_47409 = state_45205__$1;
(statearr_45266_47409[(2)] = inst_45178);

(statearr_45266_47409[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (8))){
var inst_45157 = (state_45205[(7)]);
var inst_45166 = (inst_45157 == null);
var state_45205__$1 = state_45205;
if(cljs.core.truth_(inst_45166)){
var statearr_45269_47410 = state_45205__$1;
(statearr_45269_47410[(1)] = (11));

} else {
var statearr_45270_47411 = state_45205__$1;
(statearr_45270_47411[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__43329__auto__ = null;
var cljs$core$async$mix_$_state_machine__43329__auto____0 = (function (){
var statearr_45273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45273[(0)] = cljs$core$async$mix_$_state_machine__43329__auto__);

(statearr_45273[(1)] = (1));

return statearr_45273;
});
var cljs$core$async$mix_$_state_machine__43329__auto____1 = (function (state_45205){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_45205);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e45276){var ex__43332__auto__ = e45276;
var statearr_45280_47412 = state_45205;
(statearr_45280_47412[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_45205[(4)]))){
var statearr_45281_47413 = state_45205;
(statearr_45281_47413[(1)] = cljs.core.first((state_45205[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47414 = state_45205;
state_45205 = G__47414;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43329__auto__ = function(state_45205){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43329__auto____1.call(this,state_45205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43329__auto____0;
cljs$core$async$mix_$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43329__auto____1;
return cljs$core$async$mix_$_state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_45286 = f__43612__auto__();
(statearr_45286[(6)] = c__43611__auto___47372);

return statearr_45286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_47417 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_47417(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47418 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_47418(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47420 = (function() {
var G__47421 = null;
var G__47421__1 = (function (p){
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
var G__47421__2 = (function (p,v){
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
G__47421 = function(p,v){
switch(arguments.length){
case 1:
return G__47421__1.call(this,p);
case 2:
return G__47421__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47421.cljs$core$IFn$_invoke$arity$1 = G__47421__1;
G__47421.cljs$core$IFn$_invoke$arity$2 = G__47421__2;
return G__47421;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45333 = arguments.length;
switch (G__45333) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47420(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47420(p,v);
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
var G__45345 = arguments.length;
switch (G__45345) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45342_SHARP_){
if(cljs.core.truth_((p1__45342_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45342_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45342_SHARP_.call(null,topic)))){
return p1__45342_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45342_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45349 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45350){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45350 = meta45350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45351,meta45350__$1){
var self__ = this;
var _45351__$1 = this;
return (new cljs.core.async.t_cljs$core$async45349(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45350__$1));
}));

(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45351){
var self__ = this;
var _45351__$1 = this;
return self__.meta45350;
}));

(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45349.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45350","meta45350",-675989570,null)], null);
}));

(cljs.core.async.t_cljs$core$async45349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45349");

(cljs.core.async.t_cljs$core$async45349.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45349.
 */
cljs.core.async.__GT_t_cljs$core$async45349 = (function cljs$core$async$__GT_t_cljs$core$async45349(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45350){
return (new cljs.core.async.t_cljs$core$async45349(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45350));
});

}

return (new cljs.core.async.t_cljs$core$async45349(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43611__auto___47428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_45443){
var state_val_45444 = (state_45443[(1)]);
if((state_val_45444 === (7))){
var inst_45439 = (state_45443[(2)]);
var state_45443__$1 = state_45443;
var statearr_45447_47435 = state_45443__$1;
(statearr_45447_47435[(2)] = inst_45439);

(statearr_45447_47435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (20))){
var state_45443__$1 = state_45443;
var statearr_45448_47436 = state_45443__$1;
(statearr_45448_47436[(2)] = null);

(statearr_45448_47436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (1))){
var state_45443__$1 = state_45443;
var statearr_45450_47440 = state_45443__$1;
(statearr_45450_47440[(2)] = null);

(statearr_45450_47440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (24))){
var inst_45422 = (state_45443[(7)]);
var inst_45431 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45422);
var state_45443__$1 = state_45443;
var statearr_45454_47441 = state_45443__$1;
(statearr_45454_47441[(2)] = inst_45431);

(statearr_45454_47441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (4))){
var inst_45369 = (state_45443[(8)]);
var inst_45369__$1 = (state_45443[(2)]);
var inst_45370 = (inst_45369__$1 == null);
var state_45443__$1 = (function (){var statearr_45462 = state_45443;
(statearr_45462[(8)] = inst_45369__$1);

return statearr_45462;
})();
if(cljs.core.truth_(inst_45370)){
var statearr_45463_47442 = state_45443__$1;
(statearr_45463_47442[(1)] = (5));

} else {
var statearr_45465_47443 = state_45443__$1;
(statearr_45465_47443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (15))){
var inst_45414 = (state_45443[(2)]);
var state_45443__$1 = state_45443;
var statearr_45469_47447 = state_45443__$1;
(statearr_45469_47447[(2)] = inst_45414);

(statearr_45469_47447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (21))){
var inst_45436 = (state_45443[(2)]);
var state_45443__$1 = (function (){var statearr_45470 = state_45443;
(statearr_45470[(9)] = inst_45436);

return statearr_45470;
})();
var statearr_45472_47448 = state_45443__$1;
(statearr_45472_47448[(2)] = null);

(statearr_45472_47448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (13))){
var inst_45394 = (state_45443[(10)]);
var inst_45397 = cljs.core.chunked_seq_QMARK_(inst_45394);
var state_45443__$1 = state_45443;
if(inst_45397){
var statearr_45473_47452 = state_45443__$1;
(statearr_45473_47452[(1)] = (16));

} else {
var statearr_45474_47453 = state_45443__$1;
(statearr_45474_47453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (22))){
var inst_45428 = (state_45443[(2)]);
var state_45443__$1 = state_45443;
if(cljs.core.truth_(inst_45428)){
var statearr_45475_47454 = state_45443__$1;
(statearr_45475_47454[(1)] = (23));

} else {
var statearr_45476_47455 = state_45443__$1;
(statearr_45476_47455[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (6))){
var inst_45369 = (state_45443[(8)]);
var inst_45424 = (state_45443[(11)]);
var inst_45422 = (state_45443[(7)]);
var inst_45422__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45369) : topic_fn.call(null,inst_45369));
var inst_45423 = cljs.core.deref(mults);
var inst_45424__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45423,inst_45422__$1);
var state_45443__$1 = (function (){var statearr_45477 = state_45443;
(statearr_45477[(11)] = inst_45424__$1);

(statearr_45477[(7)] = inst_45422__$1);

return statearr_45477;
})();
if(cljs.core.truth_(inst_45424__$1)){
var statearr_45481_47459 = state_45443__$1;
(statearr_45481_47459[(1)] = (19));

} else {
var statearr_45482_47460 = state_45443__$1;
(statearr_45482_47460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (25))){
var inst_45433 = (state_45443[(2)]);
var state_45443__$1 = state_45443;
var statearr_45484_47462 = state_45443__$1;
(statearr_45484_47462[(2)] = inst_45433);

(statearr_45484_47462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (17))){
var inst_45394 = (state_45443[(10)]);
var inst_45405 = cljs.core.first(inst_45394);
var inst_45406 = cljs.core.async.muxch_STAR_(inst_45405);
var inst_45407 = cljs.core.async.close_BANG_(inst_45406);
var inst_45408 = cljs.core.next(inst_45394);
var inst_45379 = inst_45408;
var inst_45380 = null;
var inst_45381 = (0);
var inst_45382 = (0);
var state_45443__$1 = (function (){var statearr_45485 = state_45443;
(statearr_45485[(12)] = inst_45380);

(statearr_45485[(13)] = inst_45407);

(statearr_45485[(14)] = inst_45381);

(statearr_45485[(15)] = inst_45382);

(statearr_45485[(16)] = inst_45379);

return statearr_45485;
})();
var statearr_45486_47466 = state_45443__$1;
(statearr_45486_47466[(2)] = null);

(statearr_45486_47466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (3))){
var inst_45441 = (state_45443[(2)]);
var state_45443__$1 = state_45443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45443__$1,inst_45441);
} else {
if((state_val_45444 === (12))){
var inst_45417 = (state_45443[(2)]);
var state_45443__$1 = state_45443;
var statearr_45487_47467 = state_45443__$1;
(statearr_45487_47467[(2)] = inst_45417);

(statearr_45487_47467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (2))){
var state_45443__$1 = state_45443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45443__$1,(4),ch);
} else {
if((state_val_45444 === (23))){
var state_45443__$1 = state_45443;
var statearr_45488_47468 = state_45443__$1;
(statearr_45488_47468[(2)] = null);

(statearr_45488_47468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (19))){
var inst_45369 = (state_45443[(8)]);
var inst_45424 = (state_45443[(11)]);
var inst_45426 = cljs.core.async.muxch_STAR_(inst_45424);
var state_45443__$1 = state_45443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45443__$1,(22),inst_45426,inst_45369);
} else {
if((state_val_45444 === (11))){
var inst_45379 = (state_45443[(16)]);
var inst_45394 = (state_45443[(10)]);
var inst_45394__$1 = cljs.core.seq(inst_45379);
var state_45443__$1 = (function (){var statearr_45490 = state_45443;
(statearr_45490[(10)] = inst_45394__$1);

return statearr_45490;
})();
if(inst_45394__$1){
var statearr_45492_47469 = state_45443__$1;
(statearr_45492_47469[(1)] = (13));

} else {
var statearr_45493_47470 = state_45443__$1;
(statearr_45493_47470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (9))){
var inst_45419 = (state_45443[(2)]);
var state_45443__$1 = state_45443;
var statearr_45495_47471 = state_45443__$1;
(statearr_45495_47471[(2)] = inst_45419);

(statearr_45495_47471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (5))){
var inst_45376 = cljs.core.deref(mults);
var inst_45377 = cljs.core.vals(inst_45376);
var inst_45378 = cljs.core.seq(inst_45377);
var inst_45379 = inst_45378;
var inst_45380 = null;
var inst_45381 = (0);
var inst_45382 = (0);
var state_45443__$1 = (function (){var statearr_45496 = state_45443;
(statearr_45496[(12)] = inst_45380);

(statearr_45496[(14)] = inst_45381);

(statearr_45496[(15)] = inst_45382);

(statearr_45496[(16)] = inst_45379);

return statearr_45496;
})();
var statearr_45497_47475 = state_45443__$1;
(statearr_45497_47475[(2)] = null);

(statearr_45497_47475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (14))){
var state_45443__$1 = state_45443;
var statearr_45502_47477 = state_45443__$1;
(statearr_45502_47477[(2)] = null);

(statearr_45502_47477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (16))){
var inst_45394 = (state_45443[(10)]);
var inst_45399 = cljs.core.chunk_first(inst_45394);
var inst_45401 = cljs.core.chunk_rest(inst_45394);
var inst_45402 = cljs.core.count(inst_45399);
var inst_45379 = inst_45401;
var inst_45380 = inst_45399;
var inst_45381 = inst_45402;
var inst_45382 = (0);
var state_45443__$1 = (function (){var statearr_45503 = state_45443;
(statearr_45503[(12)] = inst_45380);

(statearr_45503[(14)] = inst_45381);

(statearr_45503[(15)] = inst_45382);

(statearr_45503[(16)] = inst_45379);

return statearr_45503;
})();
var statearr_45504_47480 = state_45443__$1;
(statearr_45504_47480[(2)] = null);

(statearr_45504_47480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (10))){
var inst_45380 = (state_45443[(12)]);
var inst_45381 = (state_45443[(14)]);
var inst_45382 = (state_45443[(15)]);
var inst_45379 = (state_45443[(16)]);
var inst_45387 = cljs.core._nth(inst_45380,inst_45382);
var inst_45388 = cljs.core.async.muxch_STAR_(inst_45387);
var inst_45389 = cljs.core.async.close_BANG_(inst_45388);
var inst_45390 = (inst_45382 + (1));
var tmp45498 = inst_45380;
var tmp45499 = inst_45381;
var tmp45500 = inst_45379;
var inst_45379__$1 = tmp45500;
var inst_45380__$1 = tmp45498;
var inst_45381__$1 = tmp45499;
var inst_45382__$1 = inst_45390;
var state_45443__$1 = (function (){var statearr_45506 = state_45443;
(statearr_45506[(12)] = inst_45380__$1);

(statearr_45506[(14)] = inst_45381__$1);

(statearr_45506[(15)] = inst_45382__$1);

(statearr_45506[(16)] = inst_45379__$1);

(statearr_45506[(17)] = inst_45389);

return statearr_45506;
})();
var statearr_45507_47484 = state_45443__$1;
(statearr_45507_47484[(2)] = null);

(statearr_45507_47484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (18))){
var inst_45411 = (state_45443[(2)]);
var state_45443__$1 = state_45443;
var statearr_45508_47488 = state_45443__$1;
(statearr_45508_47488[(2)] = inst_45411);

(statearr_45508_47488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45444 === (8))){
var inst_45381 = (state_45443[(14)]);
var inst_45382 = (state_45443[(15)]);
var inst_45384 = (inst_45382 < inst_45381);
var inst_45385 = inst_45384;
var state_45443__$1 = state_45443;
if(cljs.core.truth_(inst_45385)){
var statearr_45509_47489 = state_45443__$1;
(statearr_45509_47489[(1)] = (10));

} else {
var statearr_45510_47490 = state_45443__$1;
(statearr_45510_47490[(1)] = (11));

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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_45511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45511[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_45511[(1)] = (1));

return statearr_45511;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_45443){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_45443);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e45513){var ex__43332__auto__ = e45513;
var statearr_45514_47492 = state_45443;
(statearr_45514_47492[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_45443[(4)]))){
var statearr_45515_47493 = state_45443;
(statearr_45515_47493[(1)] = cljs.core.first((state_45443[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47494 = state_45443;
state_45443 = G__47494;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_45443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_45443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_45516 = f__43612__auto__();
(statearr_45516[(6)] = c__43611__auto___47428);

return statearr_45516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
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
var G__45522 = arguments.length;
switch (G__45522) {
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
var G__45529 = arguments.length;
switch (G__45529) {
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
var G__45532 = arguments.length;
switch (G__45532) {
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
var c__43611__auto___47524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_45590){
var state_val_45591 = (state_45590[(1)]);
if((state_val_45591 === (7))){
var state_45590__$1 = state_45590;
var statearr_45592_47526 = state_45590__$1;
(statearr_45592_47526[(2)] = null);

(statearr_45592_47526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (1))){
var state_45590__$1 = state_45590;
var statearr_45593_47527 = state_45590__$1;
(statearr_45593_47527[(2)] = null);

(statearr_45593_47527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (4))){
var inst_45538 = (state_45590[(7)]);
var inst_45537 = (state_45590[(8)]);
var inst_45540 = (inst_45538 < inst_45537);
var state_45590__$1 = state_45590;
if(cljs.core.truth_(inst_45540)){
var statearr_45594_47532 = state_45590__$1;
(statearr_45594_47532[(1)] = (6));

} else {
var statearr_45595_47533 = state_45590__$1;
(statearr_45595_47533[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (15))){
var inst_45576 = (state_45590[(9)]);
var inst_45581 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45576);
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45590__$1,(17),out,inst_45581);
} else {
if((state_val_45591 === (13))){
var inst_45576 = (state_45590[(9)]);
var inst_45576__$1 = (state_45590[(2)]);
var inst_45577 = cljs.core.some(cljs.core.nil_QMARK_,inst_45576__$1);
var state_45590__$1 = (function (){var statearr_45596 = state_45590;
(statearr_45596[(9)] = inst_45576__$1);

return statearr_45596;
})();
if(cljs.core.truth_(inst_45577)){
var statearr_45597_47541 = state_45590__$1;
(statearr_45597_47541[(1)] = (14));

} else {
var statearr_45598_47542 = state_45590__$1;
(statearr_45598_47542[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (6))){
var state_45590__$1 = state_45590;
var statearr_45599_47544 = state_45590__$1;
(statearr_45599_47544[(2)] = null);

(statearr_45599_47544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (17))){
var inst_45583 = (state_45590[(2)]);
var state_45590__$1 = (function (){var statearr_45620 = state_45590;
(statearr_45620[(10)] = inst_45583);

return statearr_45620;
})();
var statearr_45621_47546 = state_45590__$1;
(statearr_45621_47546[(2)] = null);

(statearr_45621_47546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (3))){
var inst_45588 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45590__$1,inst_45588);
} else {
if((state_val_45591 === (12))){
var _ = (function (){var statearr_45622 = state_45590;
(statearr_45622[(4)] = cljs.core.rest((state_45590[(4)])));

return statearr_45622;
})();
var state_45590__$1 = state_45590;
var ex45612 = (state_45590__$1[(2)]);
var statearr_45625_47554 = state_45590__$1;
(statearr_45625_47554[(5)] = ex45612);


if((ex45612 instanceof Object)){
var statearr_45626_47557 = state_45590__$1;
(statearr_45626_47557[(1)] = (11));

(statearr_45626_47557[(5)] = null);

} else {
throw ex45612;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (2))){
var inst_45536 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45537 = cnt;
var inst_45538 = (0);
var state_45590__$1 = (function (){var statearr_45627 = state_45590;
(statearr_45627[(7)] = inst_45538);

(statearr_45627[(11)] = inst_45536);

(statearr_45627[(8)] = inst_45537);

return statearr_45627;
})();
var statearr_45629_47568 = state_45590__$1;
(statearr_45629_47568[(2)] = null);

(statearr_45629_47568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (11))){
var inst_45546 = (state_45590[(2)]);
var inst_45547 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45590__$1 = (function (){var statearr_45630 = state_45590;
(statearr_45630[(12)] = inst_45546);

return statearr_45630;
})();
var statearr_45631_47570 = state_45590__$1;
(statearr_45631_47570[(2)] = inst_45547);

(statearr_45631_47570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (9))){
var inst_45538 = (state_45590[(7)]);
var _ = (function (){var statearr_45635 = state_45590;
(statearr_45635[(4)] = cljs.core.cons((12),(state_45590[(4)])));

return statearr_45635;
})();
var inst_45558 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45538) : chs__$1.call(null,inst_45538));
var inst_45559 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45538) : done.call(null,inst_45538));
var inst_45560 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45558,inst_45559);
var ___$1 = (function (){var statearr_45636 = state_45590;
(statearr_45636[(4)] = cljs.core.rest((state_45590[(4)])));

return statearr_45636;
})();
var state_45590__$1 = state_45590;
var statearr_45637_47573 = state_45590__$1;
(statearr_45637_47573[(2)] = inst_45560);

(statearr_45637_47573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (5))){
var inst_45570 = (state_45590[(2)]);
var state_45590__$1 = (function (){var statearr_45638 = state_45590;
(statearr_45638[(13)] = inst_45570);

return statearr_45638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45590__$1,(13),dchan);
} else {
if((state_val_45591 === (14))){
var inst_45579 = cljs.core.async.close_BANG_(out);
var state_45590__$1 = state_45590;
var statearr_45643_47576 = state_45590__$1;
(statearr_45643_47576[(2)] = inst_45579);

(statearr_45643_47576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (16))){
var inst_45586 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
var statearr_45648_47578 = state_45590__$1;
(statearr_45648_47578[(2)] = inst_45586);

(statearr_45648_47578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (10))){
var inst_45538 = (state_45590[(7)]);
var inst_45563 = (state_45590[(2)]);
var inst_45564 = (inst_45538 + (1));
var inst_45538__$1 = inst_45564;
var state_45590__$1 = (function (){var statearr_45649 = state_45590;
(statearr_45649[(7)] = inst_45538__$1);

(statearr_45649[(14)] = inst_45563);

return statearr_45649;
})();
var statearr_45650_47581 = state_45590__$1;
(statearr_45650_47581[(2)] = null);

(statearr_45650_47581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (8))){
var inst_45568 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
var statearr_45651_47584 = state_45590__$1;
(statearr_45651_47584[(2)] = inst_45568);

(statearr_45651_47584[(1)] = (5));


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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_45655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45655[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_45655[(1)] = (1));

return statearr_45655;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_45590){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_45590);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e45659){var ex__43332__auto__ = e45659;
var statearr_45661_47592 = state_45590;
(statearr_45661_47592[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_45590[(4)]))){
var statearr_45663_47594 = state_45590;
(statearr_45663_47594[(1)] = cljs.core.first((state_45590[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47597 = state_45590;
state_45590 = G__47597;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_45590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_45590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_45666 = f__43612__auto__();
(statearr_45666[(6)] = c__43611__auto___47524);

return statearr_45666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
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
var G__45673 = arguments.length;
switch (G__45673) {
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
var c__43611__auto___47602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_45718){
var state_val_45719 = (state_45718[(1)]);
if((state_val_45719 === (7))){
var inst_45695 = (state_45718[(7)]);
var inst_45694 = (state_45718[(8)]);
var inst_45694__$1 = (state_45718[(2)]);
var inst_45695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45694__$1,(0),null);
var inst_45696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45694__$1,(1),null);
var inst_45697 = (inst_45695__$1 == null);
var state_45718__$1 = (function (){var statearr_45720 = state_45718;
(statearr_45720[(7)] = inst_45695__$1);

(statearr_45720[(8)] = inst_45694__$1);

(statearr_45720[(9)] = inst_45696);

return statearr_45720;
})();
if(cljs.core.truth_(inst_45697)){
var statearr_45721_47606 = state_45718__$1;
(statearr_45721_47606[(1)] = (8));

} else {
var statearr_45722_47607 = state_45718__$1;
(statearr_45722_47607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (1))){
var inst_45682 = cljs.core.vec(chs);
var inst_45685 = inst_45682;
var state_45718__$1 = (function (){var statearr_45723 = state_45718;
(statearr_45723[(10)] = inst_45685);

return statearr_45723;
})();
var statearr_45724_47610 = state_45718__$1;
(statearr_45724_47610[(2)] = null);

(statearr_45724_47610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (4))){
var inst_45685 = (state_45718[(10)]);
var state_45718__$1 = state_45718;
return cljs.core.async.ioc_alts_BANG_(state_45718__$1,(7),inst_45685);
} else {
if((state_val_45719 === (6))){
var inst_45714 = (state_45718[(2)]);
var state_45718__$1 = state_45718;
var statearr_45725_47613 = state_45718__$1;
(statearr_45725_47613[(2)] = inst_45714);

(statearr_45725_47613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (3))){
var inst_45716 = (state_45718[(2)]);
var state_45718__$1 = state_45718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45718__$1,inst_45716);
} else {
if((state_val_45719 === (2))){
var inst_45685 = (state_45718[(10)]);
var inst_45687 = cljs.core.count(inst_45685);
var inst_45688 = (inst_45687 > (0));
var state_45718__$1 = state_45718;
if(cljs.core.truth_(inst_45688)){
var statearr_45729_47615 = state_45718__$1;
(statearr_45729_47615[(1)] = (4));

} else {
var statearr_45731_47616 = state_45718__$1;
(statearr_45731_47616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (11))){
var inst_45685 = (state_45718[(10)]);
var inst_45707 = (state_45718[(2)]);
var tmp45727 = inst_45685;
var inst_45685__$1 = tmp45727;
var state_45718__$1 = (function (){var statearr_45732 = state_45718;
(statearr_45732[(10)] = inst_45685__$1);

(statearr_45732[(11)] = inst_45707);

return statearr_45732;
})();
var statearr_45733_47620 = state_45718__$1;
(statearr_45733_47620[(2)] = null);

(statearr_45733_47620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (9))){
var inst_45695 = (state_45718[(7)]);
var state_45718__$1 = state_45718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45718__$1,(11),out,inst_45695);
} else {
if((state_val_45719 === (5))){
var inst_45712 = cljs.core.async.close_BANG_(out);
var state_45718__$1 = state_45718;
var statearr_45734_47623 = state_45718__$1;
(statearr_45734_47623[(2)] = inst_45712);

(statearr_45734_47623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (10))){
var inst_45710 = (state_45718[(2)]);
var state_45718__$1 = state_45718;
var statearr_45735_47624 = state_45718__$1;
(statearr_45735_47624[(2)] = inst_45710);

(statearr_45735_47624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (8))){
var inst_45685 = (state_45718[(10)]);
var inst_45695 = (state_45718[(7)]);
var inst_45694 = (state_45718[(8)]);
var inst_45696 = (state_45718[(9)]);
var inst_45701 = (function (){var cs = inst_45685;
var vec__45690 = inst_45694;
var v = inst_45695;
var c = inst_45696;
return (function (p1__45670_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45670_SHARP_);
});
})();
var inst_45702 = cljs.core.filterv(inst_45701,inst_45685);
var inst_45685__$1 = inst_45702;
var state_45718__$1 = (function (){var statearr_45739 = state_45718;
(statearr_45739[(10)] = inst_45685__$1);

return statearr_45739;
})();
var statearr_45740_47633 = state_45718__$1;
(statearr_45740_47633[(2)] = null);

(statearr_45740_47633[(1)] = (2));


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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_45745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45745[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_45745[(1)] = (1));

return statearr_45745;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_45718){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_45718);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e45746){var ex__43332__auto__ = e45746;
var statearr_45747_47635 = state_45718;
(statearr_45747_47635[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_45718[(4)]))){
var statearr_45748_47637 = state_45718;
(statearr_45748_47637[(1)] = cljs.core.first((state_45718[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47638 = state_45718;
state_45718 = G__47638;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_45718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_45718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_45751 = f__43612__auto__();
(statearr_45751[(6)] = c__43611__auto___47602);

return statearr_45751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
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
var G__45753 = arguments.length;
switch (G__45753) {
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
var c__43611__auto___47652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_45795){
var state_val_45796 = (state_45795[(1)]);
if((state_val_45796 === (7))){
var inst_45776 = (state_45795[(7)]);
var inst_45776__$1 = (state_45795[(2)]);
var inst_45778 = (inst_45776__$1 == null);
var inst_45779 = cljs.core.not(inst_45778);
var state_45795__$1 = (function (){var statearr_45797 = state_45795;
(statearr_45797[(7)] = inst_45776__$1);

return statearr_45797;
})();
if(inst_45779){
var statearr_45798_47654 = state_45795__$1;
(statearr_45798_47654[(1)] = (8));

} else {
var statearr_45800_47656 = state_45795__$1;
(statearr_45800_47656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45796 === (1))){
var inst_45770 = (0);
var state_45795__$1 = (function (){var statearr_45802 = state_45795;
(statearr_45802[(8)] = inst_45770);

return statearr_45802;
})();
var statearr_45804_47657 = state_45795__$1;
(statearr_45804_47657[(2)] = null);

(statearr_45804_47657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45796 === (4))){
var state_45795__$1 = state_45795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45795__$1,(7),ch);
} else {
if((state_val_45796 === (6))){
var inst_45790 = (state_45795[(2)]);
var state_45795__$1 = state_45795;
var statearr_45807_47661 = state_45795__$1;
(statearr_45807_47661[(2)] = inst_45790);

(statearr_45807_47661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45796 === (3))){
var inst_45792 = (state_45795[(2)]);
var inst_45793 = cljs.core.async.close_BANG_(out);
var state_45795__$1 = (function (){var statearr_45817 = state_45795;
(statearr_45817[(9)] = inst_45792);

return statearr_45817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45795__$1,inst_45793);
} else {
if((state_val_45796 === (2))){
var inst_45770 = (state_45795[(8)]);
var inst_45772 = (inst_45770 < n);
var state_45795__$1 = state_45795;
if(cljs.core.truth_(inst_45772)){
var statearr_45825_47663 = state_45795__$1;
(statearr_45825_47663[(1)] = (4));

} else {
var statearr_45828_47664 = state_45795__$1;
(statearr_45828_47664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45796 === (11))){
var inst_45770 = (state_45795[(8)]);
var inst_45782 = (state_45795[(2)]);
var inst_45783 = (inst_45770 + (1));
var inst_45770__$1 = inst_45783;
var state_45795__$1 = (function (){var statearr_45833 = state_45795;
(statearr_45833[(10)] = inst_45782);

(statearr_45833[(8)] = inst_45770__$1);

return statearr_45833;
})();
var statearr_45838_47668 = state_45795__$1;
(statearr_45838_47668[(2)] = null);

(statearr_45838_47668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45796 === (9))){
var state_45795__$1 = state_45795;
var statearr_45839_47669 = state_45795__$1;
(statearr_45839_47669[(2)] = null);

(statearr_45839_47669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45796 === (5))){
var state_45795__$1 = state_45795;
var statearr_45840_47670 = state_45795__$1;
(statearr_45840_47670[(2)] = null);

(statearr_45840_47670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45796 === (10))){
var inst_45787 = (state_45795[(2)]);
var state_45795__$1 = state_45795;
var statearr_45842_47672 = state_45795__$1;
(statearr_45842_47672[(2)] = inst_45787);

(statearr_45842_47672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45796 === (8))){
var inst_45776 = (state_45795[(7)]);
var state_45795__$1 = state_45795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45795__$1,(11),out,inst_45776);
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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_45844 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45844[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_45844[(1)] = (1));

return statearr_45844;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_45795){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_45795);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e45845){var ex__43332__auto__ = e45845;
var statearr_45846_47676 = state_45795;
(statearr_45846_47676[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_45795[(4)]))){
var statearr_45847_47679 = state_45795;
(statearr_45847_47679[(1)] = cljs.core.first((state_45795[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47680 = state_45795;
state_45795 = G__47680;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_45795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_45795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_45848 = f__43612__auto__();
(statearr_45848[(6)] = c__43611__auto___47652);

return statearr_45848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45850 = (function (f,ch,meta45851){
this.f = f;
this.ch = ch;
this.meta45851 = meta45851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45852,meta45851__$1){
var self__ = this;
var _45852__$1 = this;
return (new cljs.core.async.t_cljs$core$async45850(self__.f,self__.ch,meta45851__$1));
}));

(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45852){
var self__ = this;
var _45852__$1 = this;
return self__.meta45851;
}));

(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45867 = (function (f,ch,meta45851,_,fn1,meta45868){
this.f = f;
this.ch = ch;
this.meta45851 = meta45851;
this._ = _;
this.fn1 = fn1;
this.meta45868 = meta45868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45869,meta45868__$1){
var self__ = this;
var _45869__$1 = this;
return (new cljs.core.async.t_cljs$core$async45867(self__.f,self__.ch,self__.meta45851,self__._,self__.fn1,meta45868__$1));
}));

(cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45869){
var self__ = this;
var _45869__$1 = this;
return self__.meta45868;
}));

(cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45849_SHARP_){
var G__45874 = (((p1__45849_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45849_SHARP_) : self__.f.call(null,p1__45849_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45874) : f1.call(null,G__45874));
});
}));

(cljs.core.async.t_cljs$core$async45867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45851","meta45851",-1663008149,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45850","cljs.core.async/t_cljs$core$async45850",1807113629,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45868","meta45868",780263372,null)], null);
}));

(cljs.core.async.t_cljs$core$async45867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45867");

(cljs.core.async.t_cljs$core$async45867.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45867.
 */
cljs.core.async.__GT_t_cljs$core$async45867 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45867(f__$1,ch__$1,meta45851__$1,___$2,fn1__$1,meta45868){
return (new cljs.core.async.t_cljs$core$async45867(f__$1,ch__$1,meta45851__$1,___$2,fn1__$1,meta45868));
});

}

return (new cljs.core.async.t_cljs$core$async45867(self__.f,self__.ch,self__.meta45851,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45909 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45909) : self__.f.call(null,G__45909));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45851","meta45851",-1663008149,null)], null);
}));

(cljs.core.async.t_cljs$core$async45850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45850");

(cljs.core.async.t_cljs$core$async45850.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45850.
 */
cljs.core.async.__GT_t_cljs$core$async45850 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45850(f__$1,ch__$1,meta45851){
return (new cljs.core.async.t_cljs$core$async45850(f__$1,ch__$1,meta45851));
});

}

return (new cljs.core.async.t_cljs$core$async45850(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45922 = (function (f,ch,meta45923){
this.f = f;
this.ch = ch;
this.meta45923 = meta45923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45924,meta45923__$1){
var self__ = this;
var _45924__$1 = this;
return (new cljs.core.async.t_cljs$core$async45922(self__.f,self__.ch,meta45923__$1));
}));

(cljs.core.async.t_cljs$core$async45922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45924){
var self__ = this;
var _45924__$1 = this;
return self__.meta45923;
}));

(cljs.core.async.t_cljs$core$async45922.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45922.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45922.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45923","meta45923",1810942147,null)], null);
}));

(cljs.core.async.t_cljs$core$async45922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45922");

(cljs.core.async.t_cljs$core$async45922.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45922.
 */
cljs.core.async.__GT_t_cljs$core$async45922 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45922(f__$1,ch__$1,meta45923){
return (new cljs.core.async.t_cljs$core$async45922(f__$1,ch__$1,meta45923));
});

}

return (new cljs.core.async.t_cljs$core$async45922(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45954 = (function (p,ch,meta45955){
this.p = p;
this.ch = ch;
this.meta45955 = meta45955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45956,meta45955__$1){
var self__ = this;
var _45956__$1 = this;
return (new cljs.core.async.t_cljs$core$async45954(self__.p,self__.ch,meta45955__$1));
}));

(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45956){
var self__ = this;
var _45956__$1 = this;
return self__.meta45955;
}));

(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45955","meta45955",608991097,null)], null);
}));

(cljs.core.async.t_cljs$core$async45954.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45954");

(cljs.core.async.t_cljs$core$async45954.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45954");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45954.
 */
cljs.core.async.__GT_t_cljs$core$async45954 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45954(p__$1,ch__$1,meta45955){
return (new cljs.core.async.t_cljs$core$async45954(p__$1,ch__$1,meta45955));
});

}

return (new cljs.core.async.t_cljs$core$async45954(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45985 = arguments.length;
switch (G__45985) {
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
var c__43611__auto___47738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_46015){
var state_val_46016 = (state_46015[(1)]);
if((state_val_46016 === (7))){
var inst_46009 = (state_46015[(2)]);
var state_46015__$1 = state_46015;
var statearr_46017_47742 = state_46015__$1;
(statearr_46017_47742[(2)] = inst_46009);

(statearr_46017_47742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46016 === (1))){
var state_46015__$1 = state_46015;
var statearr_46021_47743 = state_46015__$1;
(statearr_46021_47743[(2)] = null);

(statearr_46021_47743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46016 === (4))){
var inst_45992 = (state_46015[(7)]);
var inst_45992__$1 = (state_46015[(2)]);
var inst_45993 = (inst_45992__$1 == null);
var state_46015__$1 = (function (){var statearr_46024 = state_46015;
(statearr_46024[(7)] = inst_45992__$1);

return statearr_46024;
})();
if(cljs.core.truth_(inst_45993)){
var statearr_46025_47745 = state_46015__$1;
(statearr_46025_47745[(1)] = (5));

} else {
var statearr_46026_47747 = state_46015__$1;
(statearr_46026_47747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46016 === (6))){
var inst_45992 = (state_46015[(7)]);
var inst_45999 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45992) : p.call(null,inst_45992));
var state_46015__$1 = state_46015;
if(cljs.core.truth_(inst_45999)){
var statearr_46032_47750 = state_46015__$1;
(statearr_46032_47750[(1)] = (8));

} else {
var statearr_46033_47751 = state_46015__$1;
(statearr_46033_47751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46016 === (3))){
var inst_46012 = (state_46015[(2)]);
var state_46015__$1 = state_46015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46015__$1,inst_46012);
} else {
if((state_val_46016 === (2))){
var state_46015__$1 = state_46015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46015__$1,(4),ch);
} else {
if((state_val_46016 === (11))){
var inst_46002 = (state_46015[(2)]);
var state_46015__$1 = state_46015;
var statearr_46035_47755 = state_46015__$1;
(statearr_46035_47755[(2)] = inst_46002);

(statearr_46035_47755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46016 === (9))){
var state_46015__$1 = state_46015;
var statearr_46037_47758 = state_46015__$1;
(statearr_46037_47758[(2)] = null);

(statearr_46037_47758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46016 === (5))){
var inst_45995 = cljs.core.async.close_BANG_(out);
var state_46015__$1 = state_46015;
var statearr_46039_47760 = state_46015__$1;
(statearr_46039_47760[(2)] = inst_45995);

(statearr_46039_47760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46016 === (10))){
var inst_46005 = (state_46015[(2)]);
var state_46015__$1 = (function (){var statearr_46040 = state_46015;
(statearr_46040[(8)] = inst_46005);

return statearr_46040;
})();
var statearr_46041_47762 = state_46015__$1;
(statearr_46041_47762[(2)] = null);

(statearr_46041_47762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46016 === (8))){
var inst_45992 = (state_46015[(7)]);
var state_46015__$1 = state_46015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46015__$1,(11),out,inst_45992);
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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_46044 = [null,null,null,null,null,null,null,null,null];
(statearr_46044[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_46044[(1)] = (1));

return statearr_46044;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_46015){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_46015);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e46045){var ex__43332__auto__ = e46045;
var statearr_46046_47766 = state_46015;
(statearr_46046_47766[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_46015[(4)]))){
var statearr_46047_47767 = state_46015;
(statearr_46047_47767[(1)] = cljs.core.first((state_46015[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47769 = state_46015;
state_46015 = G__47769;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_46015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_46015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_46051 = f__43612__auto__();
(statearr_46051[(6)] = c__43611__auto___47738);

return statearr_46051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46055 = arguments.length;
switch (G__46055) {
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
var c__43611__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_46141){
var state_val_46142 = (state_46141[(1)]);
if((state_val_46142 === (7))){
var inst_46136 = (state_46141[(2)]);
var state_46141__$1 = state_46141;
var statearr_46145_47778 = state_46141__$1;
(statearr_46145_47778[(2)] = inst_46136);

(statearr_46145_47778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (20))){
var inst_46101 = (state_46141[(7)]);
var inst_46116 = (state_46141[(2)]);
var inst_46117 = cljs.core.next(inst_46101);
var inst_46082 = inst_46117;
var inst_46083 = null;
var inst_46084 = (0);
var inst_46085 = (0);
var state_46141__$1 = (function (){var statearr_46148 = state_46141;
(statearr_46148[(8)] = inst_46085);

(statearr_46148[(9)] = inst_46082);

(statearr_46148[(10)] = inst_46084);

(statearr_46148[(11)] = inst_46083);

(statearr_46148[(12)] = inst_46116);

return statearr_46148;
})();
var statearr_46149_47787 = state_46141__$1;
(statearr_46149_47787[(2)] = null);

(statearr_46149_47787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (1))){
var state_46141__$1 = state_46141;
var statearr_46151_47793 = state_46141__$1;
(statearr_46151_47793[(2)] = null);

(statearr_46151_47793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (4))){
var inst_46070 = (state_46141[(13)]);
var inst_46070__$1 = (state_46141[(2)]);
var inst_46071 = (inst_46070__$1 == null);
var state_46141__$1 = (function (){var statearr_46152 = state_46141;
(statearr_46152[(13)] = inst_46070__$1);

return statearr_46152;
})();
if(cljs.core.truth_(inst_46071)){
var statearr_46153_47795 = state_46141__$1;
(statearr_46153_47795[(1)] = (5));

} else {
var statearr_46155_47796 = state_46141__$1;
(statearr_46155_47796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (15))){
var state_46141__$1 = state_46141;
var statearr_46162_47798 = state_46141__$1;
(statearr_46162_47798[(2)] = null);

(statearr_46162_47798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (21))){
var state_46141__$1 = state_46141;
var statearr_46164_47802 = state_46141__$1;
(statearr_46164_47802[(2)] = null);

(statearr_46164_47802[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (13))){
var inst_46085 = (state_46141[(8)]);
var inst_46082 = (state_46141[(9)]);
var inst_46084 = (state_46141[(10)]);
var inst_46083 = (state_46141[(11)]);
var inst_46094 = (state_46141[(2)]);
var inst_46097 = (inst_46085 + (1));
var tmp46159 = inst_46082;
var tmp46160 = inst_46084;
var tmp46161 = inst_46083;
var inst_46082__$1 = tmp46159;
var inst_46083__$1 = tmp46161;
var inst_46084__$1 = tmp46160;
var inst_46085__$1 = inst_46097;
var state_46141__$1 = (function (){var statearr_46166 = state_46141;
(statearr_46166[(8)] = inst_46085__$1);

(statearr_46166[(9)] = inst_46082__$1);

(statearr_46166[(10)] = inst_46084__$1);

(statearr_46166[(11)] = inst_46083__$1);

(statearr_46166[(14)] = inst_46094);

return statearr_46166;
})();
var statearr_46168_47810 = state_46141__$1;
(statearr_46168_47810[(2)] = null);

(statearr_46168_47810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (22))){
var state_46141__$1 = state_46141;
var statearr_46175_47811 = state_46141__$1;
(statearr_46175_47811[(2)] = null);

(statearr_46175_47811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (6))){
var inst_46070 = (state_46141[(13)]);
var inst_46079 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46070) : f.call(null,inst_46070));
var inst_46080 = cljs.core.seq(inst_46079);
var inst_46082 = inst_46080;
var inst_46083 = null;
var inst_46084 = (0);
var inst_46085 = (0);
var state_46141__$1 = (function (){var statearr_46177 = state_46141;
(statearr_46177[(8)] = inst_46085);

(statearr_46177[(9)] = inst_46082);

(statearr_46177[(10)] = inst_46084);

(statearr_46177[(11)] = inst_46083);

return statearr_46177;
})();
var statearr_46178_47819 = state_46141__$1;
(statearr_46178_47819[(2)] = null);

(statearr_46178_47819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (17))){
var inst_46101 = (state_46141[(7)]);
var inst_46108 = cljs.core.chunk_first(inst_46101);
var inst_46109 = cljs.core.chunk_rest(inst_46101);
var inst_46110 = cljs.core.count(inst_46108);
var inst_46082 = inst_46109;
var inst_46083 = inst_46108;
var inst_46084 = inst_46110;
var inst_46085 = (0);
var state_46141__$1 = (function (){var statearr_46192 = state_46141;
(statearr_46192[(8)] = inst_46085);

(statearr_46192[(9)] = inst_46082);

(statearr_46192[(10)] = inst_46084);

(statearr_46192[(11)] = inst_46083);

return statearr_46192;
})();
var statearr_46201_47823 = state_46141__$1;
(statearr_46201_47823[(2)] = null);

(statearr_46201_47823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (3))){
var inst_46138 = (state_46141[(2)]);
var state_46141__$1 = state_46141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46141__$1,inst_46138);
} else {
if((state_val_46142 === (12))){
var inst_46125 = (state_46141[(2)]);
var state_46141__$1 = state_46141;
var statearr_46203_47826 = state_46141__$1;
(statearr_46203_47826[(2)] = inst_46125);

(statearr_46203_47826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (2))){
var state_46141__$1 = state_46141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46141__$1,(4),in$);
} else {
if((state_val_46142 === (23))){
var inst_46134 = (state_46141[(2)]);
var state_46141__$1 = state_46141;
var statearr_46205_47827 = state_46141__$1;
(statearr_46205_47827[(2)] = inst_46134);

(statearr_46205_47827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (19))){
var inst_46120 = (state_46141[(2)]);
var state_46141__$1 = state_46141;
var statearr_46212_47834 = state_46141__$1;
(statearr_46212_47834[(2)] = inst_46120);

(statearr_46212_47834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (11))){
var inst_46082 = (state_46141[(9)]);
var inst_46101 = (state_46141[(7)]);
var inst_46101__$1 = cljs.core.seq(inst_46082);
var state_46141__$1 = (function (){var statearr_46213 = state_46141;
(statearr_46213[(7)] = inst_46101__$1);

return statearr_46213;
})();
if(inst_46101__$1){
var statearr_46214_47843 = state_46141__$1;
(statearr_46214_47843[(1)] = (14));

} else {
var statearr_46215_47845 = state_46141__$1;
(statearr_46215_47845[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (9))){
var inst_46127 = (state_46141[(2)]);
var inst_46128 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46141__$1 = (function (){var statearr_46216 = state_46141;
(statearr_46216[(15)] = inst_46127);

return statearr_46216;
})();
if(cljs.core.truth_(inst_46128)){
var statearr_46217_47853 = state_46141__$1;
(statearr_46217_47853[(1)] = (21));

} else {
var statearr_46218_47855 = state_46141__$1;
(statearr_46218_47855[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (5))){
var inst_46073 = cljs.core.async.close_BANG_(out);
var state_46141__$1 = state_46141;
var statearr_46220_47857 = state_46141__$1;
(statearr_46220_47857[(2)] = inst_46073);

(statearr_46220_47857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (14))){
var inst_46101 = (state_46141[(7)]);
var inst_46105 = cljs.core.chunked_seq_QMARK_(inst_46101);
var state_46141__$1 = state_46141;
if(inst_46105){
var statearr_46221_47859 = state_46141__$1;
(statearr_46221_47859[(1)] = (17));

} else {
var statearr_46222_47860 = state_46141__$1;
(statearr_46222_47860[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (16))){
var inst_46123 = (state_46141[(2)]);
var state_46141__$1 = state_46141;
var statearr_46223_47861 = state_46141__$1;
(statearr_46223_47861[(2)] = inst_46123);

(statearr_46223_47861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46142 === (10))){
var inst_46085 = (state_46141[(8)]);
var inst_46083 = (state_46141[(11)]);
var inst_46092 = cljs.core._nth(inst_46083,inst_46085);
var state_46141__$1 = state_46141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46141__$1,(13),out,inst_46092);
} else {
if((state_val_46142 === (18))){
var inst_46101 = (state_46141[(7)]);
var inst_46114 = cljs.core.first(inst_46101);
var state_46141__$1 = state_46141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46141__$1,(20),out,inst_46114);
} else {
if((state_val_46142 === (8))){
var inst_46085 = (state_46141[(8)]);
var inst_46084 = (state_46141[(10)]);
var inst_46088 = (inst_46085 < inst_46084);
var inst_46089 = inst_46088;
var state_46141__$1 = state_46141;
if(cljs.core.truth_(inst_46089)){
var statearr_46236_47870 = state_46141__$1;
(statearr_46236_47870[(1)] = (10));

} else {
var statearr_46237_47871 = state_46141__$1;
(statearr_46237_47871[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__43329__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43329__auto____0 = (function (){
var statearr_46239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46239[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43329__auto__);

(statearr_46239[(1)] = (1));

return statearr_46239;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43329__auto____1 = (function (state_46141){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_46141);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e46244){var ex__43332__auto__ = e46244;
var statearr_46246_47876 = state_46141;
(statearr_46246_47876[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_46141[(4)]))){
var statearr_46250_47883 = state_46141;
(statearr_46250_47883[(1)] = cljs.core.first((state_46141[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47886 = state_46141;
state_46141 = G__47886;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43329__auto__ = function(state_46141){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43329__auto____1.call(this,state_46141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43329__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43329__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_46257 = f__43612__auto__();
(statearr_46257[(6)] = c__43611__auto__);

return statearr_46257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));

return c__43611__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46278 = arguments.length;
switch (G__46278) {
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
var G__46298 = arguments.length;
switch (G__46298) {
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
var G__46308 = arguments.length;
switch (G__46308) {
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
var c__43611__auto___47905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_46340){
var state_val_46341 = (state_46340[(1)]);
if((state_val_46341 === (7))){
var inst_46335 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
var statearr_46342_47909 = state_46340__$1;
(statearr_46342_47909[(2)] = inst_46335);

(statearr_46342_47909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (1))){
var inst_46314 = null;
var state_46340__$1 = (function (){var statearr_46343 = state_46340;
(statearr_46343[(7)] = inst_46314);

return statearr_46343;
})();
var statearr_46344_47911 = state_46340__$1;
(statearr_46344_47911[(2)] = null);

(statearr_46344_47911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (4))){
var inst_46319 = (state_46340[(8)]);
var inst_46319__$1 = (state_46340[(2)]);
var inst_46320 = (inst_46319__$1 == null);
var inst_46321 = cljs.core.not(inst_46320);
var state_46340__$1 = (function (){var statearr_46345 = state_46340;
(statearr_46345[(8)] = inst_46319__$1);

return statearr_46345;
})();
if(inst_46321){
var statearr_46346_47912 = state_46340__$1;
(statearr_46346_47912[(1)] = (5));

} else {
var statearr_46347_47913 = state_46340__$1;
(statearr_46347_47913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (6))){
var state_46340__$1 = state_46340;
var statearr_46348_47917 = state_46340__$1;
(statearr_46348_47917[(2)] = null);

(statearr_46348_47917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (3))){
var inst_46337 = (state_46340[(2)]);
var inst_46338 = cljs.core.async.close_BANG_(out);
var state_46340__$1 = (function (){var statearr_46354 = state_46340;
(statearr_46354[(9)] = inst_46337);

return statearr_46354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46340__$1,inst_46338);
} else {
if((state_val_46341 === (2))){
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46340__$1,(4),ch);
} else {
if((state_val_46341 === (11))){
var inst_46319 = (state_46340[(8)]);
var inst_46329 = (state_46340[(2)]);
var inst_46314 = inst_46319;
var state_46340__$1 = (function (){var statearr_46355 = state_46340;
(statearr_46355[(7)] = inst_46314);

(statearr_46355[(10)] = inst_46329);

return statearr_46355;
})();
var statearr_46360_47919 = state_46340__$1;
(statearr_46360_47919[(2)] = null);

(statearr_46360_47919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (9))){
var inst_46319 = (state_46340[(8)]);
var state_46340__$1 = state_46340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46340__$1,(11),out,inst_46319);
} else {
if((state_val_46341 === (5))){
var inst_46314 = (state_46340[(7)]);
var inst_46319 = (state_46340[(8)]);
var inst_46324 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46319,inst_46314);
var state_46340__$1 = state_46340;
if(inst_46324){
var statearr_46394_47924 = state_46340__$1;
(statearr_46394_47924[(1)] = (8));

} else {
var statearr_46397_47925 = state_46340__$1;
(statearr_46397_47925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (10))){
var inst_46332 = (state_46340[(2)]);
var state_46340__$1 = state_46340;
var statearr_46398_47932 = state_46340__$1;
(statearr_46398_47932[(2)] = inst_46332);

(statearr_46398_47932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46341 === (8))){
var inst_46314 = (state_46340[(7)]);
var tmp46390 = inst_46314;
var inst_46314__$1 = tmp46390;
var state_46340__$1 = (function (){var statearr_46401 = state_46340;
(statearr_46401[(7)] = inst_46314__$1);

return statearr_46401;
})();
var statearr_46403_47933 = state_46340__$1;
(statearr_46403_47933[(2)] = null);

(statearr_46403_47933[(1)] = (2));


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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_46409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46409[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_46409[(1)] = (1));

return statearr_46409;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_46340){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_46340);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e46414){var ex__43332__auto__ = e46414;
var statearr_46419_47938 = state_46340;
(statearr_46419_47938[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_46340[(4)]))){
var statearr_46425_47939 = state_46340;
(statearr_46425_47939[(1)] = cljs.core.first((state_46340[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47940 = state_46340;
state_46340 = G__47940;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_46340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_46340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_46427 = f__43612__auto__();
(statearr_46427[(6)] = c__43611__auto___47905);

return statearr_46427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46432 = arguments.length;
switch (G__46432) {
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
var c__43611__auto___47943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_46471){
var state_val_46472 = (state_46471[(1)]);
if((state_val_46472 === (7))){
var inst_46467 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
var statearr_46474_47944 = state_46471__$1;
(statearr_46474_47944[(2)] = inst_46467);

(statearr_46474_47944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (1))){
var inst_46434 = (new Array(n));
var inst_46435 = inst_46434;
var inst_46436 = (0);
var state_46471__$1 = (function (){var statearr_46478 = state_46471;
(statearr_46478[(7)] = inst_46435);

(statearr_46478[(8)] = inst_46436);

return statearr_46478;
})();
var statearr_46479_47945 = state_46471__$1;
(statearr_46479_47945[(2)] = null);

(statearr_46479_47945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (4))){
var inst_46439 = (state_46471[(9)]);
var inst_46439__$1 = (state_46471[(2)]);
var inst_46440 = (inst_46439__$1 == null);
var inst_46441 = cljs.core.not(inst_46440);
var state_46471__$1 = (function (){var statearr_46480 = state_46471;
(statearr_46480[(9)] = inst_46439__$1);

return statearr_46480;
})();
if(inst_46441){
var statearr_46481_47946 = state_46471__$1;
(statearr_46481_47946[(1)] = (5));

} else {
var statearr_46484_47947 = state_46471__$1;
(statearr_46484_47947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (15))){
var inst_46461 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
var statearr_46485_47952 = state_46471__$1;
(statearr_46485_47952[(2)] = inst_46461);

(statearr_46485_47952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (13))){
var state_46471__$1 = state_46471;
var statearr_46487_47953 = state_46471__$1;
(statearr_46487_47953[(2)] = null);

(statearr_46487_47953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (6))){
var inst_46436 = (state_46471[(8)]);
var inst_46457 = (inst_46436 > (0));
var state_46471__$1 = state_46471;
if(cljs.core.truth_(inst_46457)){
var statearr_46499_47960 = state_46471__$1;
(statearr_46499_47960[(1)] = (12));

} else {
var statearr_46501_47961 = state_46471__$1;
(statearr_46501_47961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (3))){
var inst_46469 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46471__$1,inst_46469);
} else {
if((state_val_46472 === (12))){
var inst_46435 = (state_46471[(7)]);
var inst_46459 = cljs.core.vec(inst_46435);
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46471__$1,(15),out,inst_46459);
} else {
if((state_val_46472 === (2))){
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46471__$1,(4),ch);
} else {
if((state_val_46472 === (11))){
var inst_46451 = (state_46471[(2)]);
var inst_46452 = (new Array(n));
var inst_46435 = inst_46452;
var inst_46436 = (0);
var state_46471__$1 = (function (){var statearr_46509 = state_46471;
(statearr_46509[(7)] = inst_46435);

(statearr_46509[(8)] = inst_46436);

(statearr_46509[(10)] = inst_46451);

return statearr_46509;
})();
var statearr_46512_47965 = state_46471__$1;
(statearr_46512_47965[(2)] = null);

(statearr_46512_47965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (9))){
var inst_46435 = (state_46471[(7)]);
var inst_46449 = cljs.core.vec(inst_46435);
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46471__$1,(11),out,inst_46449);
} else {
if((state_val_46472 === (5))){
var inst_46435 = (state_46471[(7)]);
var inst_46436 = (state_46471[(8)]);
var inst_46444 = (state_46471[(11)]);
var inst_46439 = (state_46471[(9)]);
var inst_46443 = (inst_46435[inst_46436] = inst_46439);
var inst_46444__$1 = (inst_46436 + (1));
var inst_46445 = (inst_46444__$1 < n);
var state_46471__$1 = (function (){var statearr_46519 = state_46471;
(statearr_46519[(11)] = inst_46444__$1);

(statearr_46519[(12)] = inst_46443);

return statearr_46519;
})();
if(cljs.core.truth_(inst_46445)){
var statearr_46520_47968 = state_46471__$1;
(statearr_46520_47968[(1)] = (8));

} else {
var statearr_46521_47973 = state_46471__$1;
(statearr_46521_47973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (14))){
var inst_46464 = (state_46471[(2)]);
var inst_46465 = cljs.core.async.close_BANG_(out);
var state_46471__$1 = (function (){var statearr_46523 = state_46471;
(statearr_46523[(13)] = inst_46464);

return statearr_46523;
})();
var statearr_46524_47975 = state_46471__$1;
(statearr_46524_47975[(2)] = inst_46465);

(statearr_46524_47975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (10))){
var inst_46455 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
var statearr_46529_47976 = state_46471__$1;
(statearr_46529_47976[(2)] = inst_46455);

(statearr_46529_47976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (8))){
var inst_46435 = (state_46471[(7)]);
var inst_46444 = (state_46471[(11)]);
var tmp46522 = inst_46435;
var inst_46435__$1 = tmp46522;
var inst_46436 = inst_46444;
var state_46471__$1 = (function (){var statearr_46530 = state_46471;
(statearr_46530[(7)] = inst_46435__$1);

(statearr_46530[(8)] = inst_46436);

return statearr_46530;
})();
var statearr_46531_47977 = state_46471__$1;
(statearr_46531_47977[(2)] = null);

(statearr_46531_47977[(1)] = (2));


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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_46539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46539[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_46539[(1)] = (1));

return statearr_46539;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_46471){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_46471);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e46540){var ex__43332__auto__ = e46540;
var statearr_46541_47982 = state_46471;
(statearr_46541_47982[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_46471[(4)]))){
var statearr_46542_47983 = state_46471;
(statearr_46542_47983[(1)] = cljs.core.first((state_46471[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47990 = state_46471;
state_46471 = G__47990;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_46471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_46471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_46549 = f__43612__auto__();
(statearr_46549[(6)] = c__43611__auto___47943);

return statearr_46549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46555 = arguments.length;
switch (G__46555) {
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
var c__43611__auto___47994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43612__auto__ = (function (){var switch__43328__auto__ = (function (state_46606){
var state_val_46608 = (state_46606[(1)]);
if((state_val_46608 === (7))){
var inst_46602 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46612_47996 = state_46606__$1;
(statearr_46612_47996[(2)] = inst_46602);

(statearr_46612_47996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (1))){
var inst_46559 = [];
var inst_46560 = inst_46559;
var inst_46561 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46606__$1 = (function (){var statearr_46613 = state_46606;
(statearr_46613[(7)] = inst_46561);

(statearr_46613[(8)] = inst_46560);

return statearr_46613;
})();
var statearr_46614_48004 = state_46606__$1;
(statearr_46614_48004[(2)] = null);

(statearr_46614_48004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (4))){
var inst_46566 = (state_46606[(9)]);
var inst_46566__$1 = (state_46606[(2)]);
var inst_46567 = (inst_46566__$1 == null);
var inst_46568 = cljs.core.not(inst_46567);
var state_46606__$1 = (function (){var statearr_46615 = state_46606;
(statearr_46615[(9)] = inst_46566__$1);

return statearr_46615;
})();
if(inst_46568){
var statearr_46616_48009 = state_46606__$1;
(statearr_46616_48009[(1)] = (5));

} else {
var statearr_46617_48011 = state_46606__$1;
(statearr_46617_48011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (15))){
var inst_46560 = (state_46606[(8)]);
var inst_46594 = cljs.core.vec(inst_46560);
var state_46606__$1 = state_46606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46606__$1,(18),out,inst_46594);
} else {
if((state_val_46608 === (13))){
var inst_46589 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46618_48012 = state_46606__$1;
(statearr_46618_48012[(2)] = inst_46589);

(statearr_46618_48012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (6))){
var inst_46560 = (state_46606[(8)]);
var inst_46591 = inst_46560.length;
var inst_46592 = (inst_46591 > (0));
var state_46606__$1 = state_46606;
if(cljs.core.truth_(inst_46592)){
var statearr_46622_48013 = state_46606__$1;
(statearr_46622_48013[(1)] = (15));

} else {
var statearr_46626_48014 = state_46606__$1;
(statearr_46626_48014[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (17))){
var inst_46599 = (state_46606[(2)]);
var inst_46600 = cljs.core.async.close_BANG_(out);
var state_46606__$1 = (function (){var statearr_46627 = state_46606;
(statearr_46627[(10)] = inst_46599);

return statearr_46627;
})();
var statearr_46632_48019 = state_46606__$1;
(statearr_46632_48019[(2)] = inst_46600);

(statearr_46632_48019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (3))){
var inst_46604 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46606__$1,inst_46604);
} else {
if((state_val_46608 === (12))){
var inst_46560 = (state_46606[(8)]);
var inst_46582 = cljs.core.vec(inst_46560);
var state_46606__$1 = state_46606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46606__$1,(14),out,inst_46582);
} else {
if((state_val_46608 === (2))){
var state_46606__$1 = state_46606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46606__$1,(4),ch);
} else {
if((state_val_46608 === (11))){
var inst_46560 = (state_46606[(8)]);
var inst_46571 = (state_46606[(11)]);
var inst_46566 = (state_46606[(9)]);
var inst_46579 = inst_46560.push(inst_46566);
var tmp46633 = inst_46560;
var inst_46560__$1 = tmp46633;
var inst_46561 = inst_46571;
var state_46606__$1 = (function (){var statearr_46634 = state_46606;
(statearr_46634[(7)] = inst_46561);

(statearr_46634[(8)] = inst_46560__$1);

(statearr_46634[(12)] = inst_46579);

return statearr_46634;
})();
var statearr_46635_48024 = state_46606__$1;
(statearr_46635_48024[(2)] = null);

(statearr_46635_48024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (9))){
var inst_46561 = (state_46606[(7)]);
var inst_46575 = cljs.core.keyword_identical_QMARK_(inst_46561,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46606__$1 = state_46606;
var statearr_46640_48025 = state_46606__$1;
(statearr_46640_48025[(2)] = inst_46575);

(statearr_46640_48025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (5))){
var inst_46561 = (state_46606[(7)]);
var inst_46571 = (state_46606[(11)]);
var inst_46566 = (state_46606[(9)]);
var inst_46572 = (state_46606[(13)]);
var inst_46571__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46566) : f.call(null,inst_46566));
var inst_46572__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46571__$1,inst_46561);
var state_46606__$1 = (function (){var statearr_46646 = state_46606;
(statearr_46646[(11)] = inst_46571__$1);

(statearr_46646[(13)] = inst_46572__$1);

return statearr_46646;
})();
if(inst_46572__$1){
var statearr_46647_48029 = state_46606__$1;
(statearr_46647_48029[(1)] = (8));

} else {
var statearr_46648_48031 = state_46606__$1;
(statearr_46648_48031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (14))){
var inst_46571 = (state_46606[(11)]);
var inst_46566 = (state_46606[(9)]);
var inst_46584 = (state_46606[(2)]);
var inst_46585 = [];
var inst_46586 = inst_46585.push(inst_46566);
var inst_46560 = inst_46585;
var inst_46561 = inst_46571;
var state_46606__$1 = (function (){var statearr_46649 = state_46606;
(statearr_46649[(14)] = inst_46586);

(statearr_46649[(7)] = inst_46561);

(statearr_46649[(8)] = inst_46560);

(statearr_46649[(15)] = inst_46584);

return statearr_46649;
})();
var statearr_46655_48032 = state_46606__$1;
(statearr_46655_48032[(2)] = null);

(statearr_46655_48032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (16))){
var state_46606__$1 = state_46606;
var statearr_46656_48033 = state_46606__$1;
(statearr_46656_48033[(2)] = null);

(statearr_46656_48033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (10))){
var inst_46577 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
if(cljs.core.truth_(inst_46577)){
var statearr_46657_48035 = state_46606__$1;
(statearr_46657_48035[(1)] = (11));

} else {
var statearr_46658_48036 = state_46606__$1;
(statearr_46658_48036[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (18))){
var inst_46596 = (state_46606[(2)]);
var state_46606__$1 = state_46606;
var statearr_46659_48037 = state_46606__$1;
(statearr_46659_48037[(2)] = inst_46596);

(statearr_46659_48037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (8))){
var inst_46572 = (state_46606[(13)]);
var state_46606__$1 = state_46606;
var statearr_46660_48038 = state_46606__$1;
(statearr_46660_48038[(2)] = inst_46572);

(statearr_46660_48038[(1)] = (10));


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
var cljs$core$async$state_machine__43329__auto__ = null;
var cljs$core$async$state_machine__43329__auto____0 = (function (){
var statearr_46661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46661[(0)] = cljs$core$async$state_machine__43329__auto__);

(statearr_46661[(1)] = (1));

return statearr_46661;
});
var cljs$core$async$state_machine__43329__auto____1 = (function (state_46606){
while(true){
var ret_value__43330__auto__ = (function (){try{while(true){
var result__43331__auto__ = switch__43328__auto__(state_46606);
if(cljs.core.keyword_identical_QMARK_(result__43331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43331__auto__;
}
break;
}
}catch (e46662){var ex__43332__auto__ = e46662;
var statearr_46663_48040 = state_46606;
(statearr_46663_48040[(2)] = ex__43332__auto__);


if(cljs.core.seq((state_46606[(4)]))){
var statearr_46664_48042 = state_46606;
(statearr_46664_48042[(1)] = cljs.core.first((state_46606[(4)])));

} else {
throw ex__43332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48047 = state_46606;
state_46606 = G__48047;
continue;
} else {
return ret_value__43330__auto__;
}
break;
}
});
cljs$core$async$state_machine__43329__auto__ = function(state_46606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43329__auto____1.call(this,state_46606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43329__auto____0;
cljs$core$async$state_machine__43329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43329__auto____1;
return cljs$core$async$state_machine__43329__auto__;
})()
})();
var state__43613__auto__ = (function (){var statearr_46666 = f__43612__auto__();
(statearr_46666[(6)] = c__43611__auto___47994);

return statearr_46666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43613__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
