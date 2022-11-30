goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15963 = arguments.length;
switch (G__15963) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15964 = (function (f,blockable,meta15965){
this.f = f;
this.blockable = blockable;
this.meta15965 = meta15965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15966,meta15965__$1){
var self__ = this;
var _15966__$1 = this;
return (new cljs.core.async.t_cljs$core$async15964(self__.f,self__.blockable,meta15965__$1));
}));

(cljs.core.async.t_cljs$core$async15964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15966){
var self__ = this;
var _15966__$1 = this;
return self__.meta15965;
}));

(cljs.core.async.t_cljs$core$async15964.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15964.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15965","meta15965",142596459,null)], null);
}));

(cljs.core.async.t_cljs$core$async15964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15964");

(cljs.core.async.t_cljs$core$async15964.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15964.
 */
cljs.core.async.__GT_t_cljs$core$async15964 = (function cljs$core$async$__GT_t_cljs$core$async15964(f__$1,blockable__$1,meta15965){
return (new cljs.core.async.t_cljs$core$async15964(f__$1,blockable__$1,meta15965));
});

}

return (new cljs.core.async.t_cljs$core$async15964(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15969 = arguments.length;
switch (G__15969) {
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
var G__15971 = arguments.length;
switch (G__15971) {
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
var G__15973 = arguments.length;
switch (G__15973) {
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
var val_17475 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17475) : fn1.call(null,val_17475));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17475) : fn1.call(null,val_17475));
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
var G__15975 = arguments.length;
switch (G__15975) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___17477 = n;
var x_17478 = (0);
while(true){
if((x_17478 < n__5636__auto___17477)){
(a[x_17478] = x_17478);

var G__17479 = (x_17478 + (1));
x_17478 = G__17479;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15976 = (function (flag,meta15977){
this.flag = flag;
this.meta15977 = meta15977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15978,meta15977__$1){
var self__ = this;
var _15978__$1 = this;
return (new cljs.core.async.t_cljs$core$async15976(self__.flag,meta15977__$1));
}));

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15978){
var self__ = this;
var _15978__$1 = this;
return self__.meta15977;
}));

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15977","meta15977",-1131326221,null)], null);
}));

(cljs.core.async.t_cljs$core$async15976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15976");

(cljs.core.async.t_cljs$core$async15976.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15976.
 */
cljs.core.async.__GT_t_cljs$core$async15976 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15976(flag__$1,meta15977){
return (new cljs.core.async.t_cljs$core$async15976(flag__$1,meta15977));
});

}

return (new cljs.core.async.t_cljs$core$async15976(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15979 = (function (flag,cb,meta15980){
this.flag = flag;
this.cb = cb;
this.meta15980 = meta15980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15981,meta15980__$1){
var self__ = this;
var _15981__$1 = this;
return (new cljs.core.async.t_cljs$core$async15979(self__.flag,self__.cb,meta15980__$1));
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15981){
var self__ = this;
var _15981__$1 = this;
return self__.meta15980;
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15980","meta15980",1309795538,null)], null);
}));

(cljs.core.async.t_cljs$core$async15979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15979");

(cljs.core.async.t_cljs$core$async15979.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15979.
 */
cljs.core.async.__GT_t_cljs$core$async15979 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15979(flag__$1,cb__$1,meta15980){
return (new cljs.core.async.t_cljs$core$async15979(flag__$1,cb__$1,meta15980));
});

}

return (new cljs.core.async.t_cljs$core$async15979(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15986_SHARP_){
var G__15991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15986_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15991) : fret.call(null,G__15991));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15987_SHARP_){
var G__15992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15987_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15992) : fret.call(null,G__15992));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17490 = (i + (1));
i = G__17490;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___17491 = arguments.length;
var i__5770__auto___17492 = (0);
while(true){
if((i__5770__auto___17492 < len__5769__auto___17491)){
args__5775__auto__.push((arguments[i__5770__auto___17492]));

var G__17493 = (i__5770__auto___17492 + (1));
i__5770__auto___17492 = G__17493;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15997){
var map__15998 = p__15997;
var map__15998__$1 = cljs.core.__destructure_map(map__15998);
var opts = map__15998__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15993){
var G__15994 = cljs.core.first(seq15993);
var seq15993__$1 = cljs.core.next(seq15993);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15994,seq15993__$1);
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
var G__16000 = arguments.length;
switch (G__16000) {
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
var c__15901__auto___17495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16025){
var state_val_16026 = (state_16025[(1)]);
if((state_val_16026 === (7))){
var inst_16020 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16029_17496 = state_16025__$1;
(statearr_16029_17496[(2)] = inst_16020);

(statearr_16029_17496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (1))){
var state_16025__$1 = state_16025;
var statearr_16030_17497 = state_16025__$1;
(statearr_16030_17497[(2)] = null);

(statearr_16030_17497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (4))){
var inst_16003 = (state_16025[(7)]);
var inst_16003__$1 = (state_16025[(2)]);
var inst_16004 = (inst_16003__$1 == null);
var state_16025__$1 = (function (){var statearr_16032 = state_16025;
(statearr_16032[(7)] = inst_16003__$1);

return statearr_16032;
})();
if(cljs.core.truth_(inst_16004)){
var statearr_16033_17498 = state_16025__$1;
(statearr_16033_17498[(1)] = (5));

} else {
var statearr_16034_17499 = state_16025__$1;
(statearr_16034_17499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (13))){
var state_16025__$1 = state_16025;
var statearr_16037_17503 = state_16025__$1;
(statearr_16037_17503[(2)] = null);

(statearr_16037_17503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (6))){
var inst_16003 = (state_16025[(7)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16025__$1,(11),to,inst_16003);
} else {
if((state_val_16026 === (3))){
var inst_16022 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16025__$1,inst_16022);
} else {
if((state_val_16026 === (12))){
var state_16025__$1 = state_16025;
var statearr_16038_17504 = state_16025__$1;
(statearr_16038_17504[(2)] = null);

(statearr_16038_17504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (2))){
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16025__$1,(4),from);
} else {
if((state_val_16026 === (11))){
var inst_16013 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
if(cljs.core.truth_(inst_16013)){
var statearr_16039_17505 = state_16025__$1;
(statearr_16039_17505[(1)] = (12));

} else {
var statearr_16040_17506 = state_16025__$1;
(statearr_16040_17506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (9))){
var state_16025__$1 = state_16025;
var statearr_16041_17507 = state_16025__$1;
(statearr_16041_17507[(2)] = null);

(statearr_16041_17507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (5))){
var state_16025__$1 = state_16025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16043_17508 = state_16025__$1;
(statearr_16043_17508[(1)] = (8));

} else {
var statearr_16044_17509 = state_16025__$1;
(statearr_16044_17509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (14))){
var inst_16018 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16045_17510 = state_16025__$1;
(statearr_16045_17510[(2)] = inst_16018);

(statearr_16045_17510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (10))){
var inst_16010 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16047_17511 = state_16025__$1;
(statearr_16047_17511[(2)] = inst_16010);

(statearr_16047_17511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16026 === (8))){
var inst_16007 = cljs.core.async.close_BANG_(to);
var state_16025__$1 = state_16025;
var statearr_16049_17512 = state_16025__$1;
(statearr_16049_17512[(2)] = inst_16007);

(statearr_16049_17512[(1)] = (10));


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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_16050 = [null,null,null,null,null,null,null,null];
(statearr_16050[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_16050[(1)] = (1));

return statearr_16050;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_16025){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16025);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16051){var ex__15873__auto__ = e16051;
var statearr_16052_17515 = state_16025;
(statearr_16052_17515[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16025[(4)]))){
var statearr_16053_17518 = state_16025;
(statearr_16053_17518[(1)] = cljs.core.first((state_16025[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17519 = state_16025;
state_16025 = G__17519;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_16025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_16025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16054 = f__15902__auto__();
(statearr_16054[(6)] = c__15901__auto___17495);

return statearr_16054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
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
var process__$1 = (function (p__16056){
var vec__16057 = p__16056;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16057,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16057,(1),null);
var job = vec__16057;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15901__auto___17522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16064){
var state_val_16065 = (state_16064[(1)]);
if((state_val_16065 === (1))){
var state_16064__$1 = state_16064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16064__$1,(2),res,v);
} else {
if((state_val_16065 === (2))){
var inst_16061 = (state_16064[(2)]);
var inst_16062 = cljs.core.async.close_BANG_(res);
var state_16064__$1 = (function (){var statearr_16066 = state_16064;
(statearr_16066[(7)] = inst_16061);

return statearr_16066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16064__$1,inst_16062);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0 = (function (){
var statearr_16067 = [null,null,null,null,null,null,null,null];
(statearr_16067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__);

(statearr_16067[(1)] = (1));

return statearr_16067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1 = (function (state_16064){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16064);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16068){var ex__15873__auto__ = e16068;
var statearr_16069_17523 = state_16064;
(statearr_16069_17523[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16064[(4)]))){
var statearr_16070_17524 = state_16064;
(statearr_16070_17524[(1)] = cljs.core.first((state_16064[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17525 = state_16064;
state_16064 = G__17525;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = function(state_16064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1.call(this,state_16064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16071 = f__15902__auto__();
(statearr_16071[(6)] = c__15901__auto___17522);

return statearr_16071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16072){
var vec__16073 = p__16072;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16073,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16073,(1),null);
var job = vec__16073;
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
var n__5636__auto___17526 = n;
var __17527 = (0);
while(true){
if((__17527 < n__5636__auto___17526)){
var G__16076_17528 = type;
var G__16076_17529__$1 = (((G__16076_17528 instanceof cljs.core.Keyword))?G__16076_17528.fqn:null);
switch (G__16076_17529__$1) {
case "compute":
var c__15901__auto___17531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17527,c__15901__auto___17531,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = ((function (__17527,c__15901__auto___17531,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function (state_16089){
var state_val_16090 = (state_16089[(1)]);
if((state_val_16090 === (1))){
var state_16089__$1 = state_16089;
var statearr_16091_17532 = state_16089__$1;
(statearr_16091_17532[(2)] = null);

(statearr_16091_17532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16090 === (2))){
var state_16089__$1 = state_16089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16089__$1,(4),jobs);
} else {
if((state_val_16090 === (3))){
var inst_16087 = (state_16089[(2)]);
var state_16089__$1 = state_16089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16089__$1,inst_16087);
} else {
if((state_val_16090 === (4))){
var inst_16079 = (state_16089[(2)]);
var inst_16080 = process__$1(inst_16079);
var state_16089__$1 = state_16089;
if(cljs.core.truth_(inst_16080)){
var statearr_16092_17533 = state_16089__$1;
(statearr_16092_17533[(1)] = (5));

} else {
var statearr_16093_17534 = state_16089__$1;
(statearr_16093_17534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16090 === (5))){
var state_16089__$1 = state_16089;
var statearr_16094_17535 = state_16089__$1;
(statearr_16094_17535[(2)] = null);

(statearr_16094_17535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16090 === (6))){
var state_16089__$1 = state_16089;
var statearr_16095_17536 = state_16089__$1;
(statearr_16095_17536[(2)] = null);

(statearr_16095_17536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16090 === (7))){
var inst_16085 = (state_16089[(2)]);
var state_16089__$1 = state_16089;
var statearr_16096_17537 = state_16089__$1;
(statearr_16096_17537[(2)] = inst_16085);

(statearr_16096_17537[(1)] = (3));


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
});})(__17527,c__15901__auto___17531,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
;
return ((function (__17527,switch__15869__auto__,c__15901__auto___17531,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0 = (function (){
var statearr_16097 = [null,null,null,null,null,null,null];
(statearr_16097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__);

(statearr_16097[(1)] = (1));

return statearr_16097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1 = (function (state_16089){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16089);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16098){var ex__15873__auto__ = e16098;
var statearr_16099_17538 = state_16089;
(statearr_16099_17538[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16089[(4)]))){
var statearr_16100_17539 = state_16089;
(statearr_16100_17539[(1)] = cljs.core.first((state_16089[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17540 = state_16089;
state_16089 = G__17540;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = function(state_16089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1.call(this,state_16089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__;
})()
;})(__17527,switch__15869__auto__,c__15901__auto___17531,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
})();
var state__15903__auto__ = (function (){var statearr_16101 = f__15902__auto__();
(statearr_16101[(6)] = c__15901__auto___17531);

return statearr_16101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
});})(__17527,c__15901__auto___17531,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
);


break;
case "async":
var c__15901__auto___17541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17527,c__15901__auto___17541,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = ((function (__17527,c__15901__auto___17541,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function (state_16114){
var state_val_16115 = (state_16114[(1)]);
if((state_val_16115 === (1))){
var state_16114__$1 = state_16114;
var statearr_16116_17542 = state_16114__$1;
(statearr_16116_17542[(2)] = null);

(statearr_16116_17542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (2))){
var state_16114__$1 = state_16114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16114__$1,(4),jobs);
} else {
if((state_val_16115 === (3))){
var inst_16112 = (state_16114[(2)]);
var state_16114__$1 = state_16114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16114__$1,inst_16112);
} else {
if((state_val_16115 === (4))){
var inst_16104 = (state_16114[(2)]);
var inst_16105 = async(inst_16104);
var state_16114__$1 = state_16114;
if(cljs.core.truth_(inst_16105)){
var statearr_16117_17543 = state_16114__$1;
(statearr_16117_17543[(1)] = (5));

} else {
var statearr_16118_17544 = state_16114__$1;
(statearr_16118_17544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (5))){
var state_16114__$1 = state_16114;
var statearr_16119_17545 = state_16114__$1;
(statearr_16119_17545[(2)] = null);

(statearr_16119_17545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (6))){
var state_16114__$1 = state_16114;
var statearr_16120_17546 = state_16114__$1;
(statearr_16120_17546[(2)] = null);

(statearr_16120_17546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (7))){
var inst_16110 = (state_16114[(2)]);
var state_16114__$1 = state_16114;
var statearr_16121_17547 = state_16114__$1;
(statearr_16121_17547[(2)] = inst_16110);

(statearr_16121_17547[(1)] = (3));


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
});})(__17527,c__15901__auto___17541,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
;
return ((function (__17527,switch__15869__auto__,c__15901__auto___17541,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0 = (function (){
var statearr_16122 = [null,null,null,null,null,null,null];
(statearr_16122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__);

(statearr_16122[(1)] = (1));

return statearr_16122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1 = (function (state_16114){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16114);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16123){var ex__15873__auto__ = e16123;
var statearr_16124_17550 = state_16114;
(statearr_16124_17550[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16114[(4)]))){
var statearr_16125_17551 = state_16114;
(statearr_16125_17551[(1)] = cljs.core.first((state_16114[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17552 = state_16114;
state_16114 = G__17552;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = function(state_16114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1.call(this,state_16114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__;
})()
;})(__17527,switch__15869__auto__,c__15901__auto___17541,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
})();
var state__15903__auto__ = (function (){var statearr_16126 = f__15902__auto__();
(statearr_16126[(6)] = c__15901__auto___17541);

return statearr_16126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
});})(__17527,c__15901__auto___17541,G__16076_17528,G__16076_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16076_17529__$1)].join('')));

}

var G__17553 = (__17527 + (1));
__17527 = G__17553;
continue;
} else {
}
break;
}

var c__15901__auto___17554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16148){
var state_val_16149 = (state_16148[(1)]);
if((state_val_16149 === (7))){
var inst_16144 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16150_17555 = state_16148__$1;
(statearr_16150_17555[(2)] = inst_16144);

(statearr_16150_17555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (1))){
var state_16148__$1 = state_16148;
var statearr_16151_17556 = state_16148__$1;
(statearr_16151_17556[(2)] = null);

(statearr_16151_17556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (4))){
var inst_16129 = (state_16148[(7)]);
var inst_16129__$1 = (state_16148[(2)]);
var inst_16130 = (inst_16129__$1 == null);
var state_16148__$1 = (function (){var statearr_16152 = state_16148;
(statearr_16152[(7)] = inst_16129__$1);

return statearr_16152;
})();
if(cljs.core.truth_(inst_16130)){
var statearr_16153_17557 = state_16148__$1;
(statearr_16153_17557[(1)] = (5));

} else {
var statearr_16154_17558 = state_16148__$1;
(statearr_16154_17558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (6))){
var inst_16134 = (state_16148[(8)]);
var inst_16129 = (state_16148[(7)]);
var inst_16134__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16136 = [inst_16129,inst_16134__$1];
var inst_16137 = (new cljs.core.PersistentVector(null,2,(5),inst_16135,inst_16136,null));
var state_16148__$1 = (function (){var statearr_16155 = state_16148;
(statearr_16155[(8)] = inst_16134__$1);

return statearr_16155;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16148__$1,(8),jobs,inst_16137);
} else {
if((state_val_16149 === (3))){
var inst_16146 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16148__$1,inst_16146);
} else {
if((state_val_16149 === (2))){
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16148__$1,(4),from);
} else {
if((state_val_16149 === (9))){
var inst_16141 = (state_16148[(2)]);
var state_16148__$1 = (function (){var statearr_16156 = state_16148;
(statearr_16156[(9)] = inst_16141);

return statearr_16156;
})();
var statearr_16157_17559 = state_16148__$1;
(statearr_16157_17559[(2)] = null);

(statearr_16157_17559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (5))){
var inst_16132 = cljs.core.async.close_BANG_(jobs);
var state_16148__$1 = state_16148;
var statearr_16158_17560 = state_16148__$1;
(statearr_16158_17560[(2)] = inst_16132);

(statearr_16158_17560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (8))){
var inst_16134 = (state_16148[(8)]);
var inst_16139 = (state_16148[(2)]);
var state_16148__$1 = (function (){var statearr_16159 = state_16148;
(statearr_16159[(10)] = inst_16139);

return statearr_16159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16148__$1,(9),results,inst_16134);
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
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0 = (function (){
var statearr_16160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__);

(statearr_16160[(1)] = (1));

return statearr_16160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1 = (function (state_16148){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16148);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16161){var ex__15873__auto__ = e16161;
var statearr_16162_17561 = state_16148;
(statearr_16162_17561[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16148[(4)]))){
var statearr_16163_17562 = state_16148;
(statearr_16163_17562[(1)] = cljs.core.first((state_16148[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17563 = state_16148;
state_16148 = G__17563;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = function(state_16148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1.call(this,state_16148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16164 = f__15902__auto__();
(statearr_16164[(6)] = c__15901__auto___17554);

return statearr_16164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));


var c__15901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16208){
var state_val_16209 = (state_16208[(1)]);
if((state_val_16209 === (7))){
var inst_16204 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16214_17564 = state_16208__$1;
(statearr_16214_17564[(2)] = inst_16204);

(statearr_16214_17564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (20))){
var state_16208__$1 = state_16208;
var statearr_16215_17565 = state_16208__$1;
(statearr_16215_17565[(2)] = null);

(statearr_16215_17565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (1))){
var state_16208__$1 = state_16208;
var statearr_16221_17566 = state_16208__$1;
(statearr_16221_17566[(2)] = null);

(statearr_16221_17566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (4))){
var inst_16167 = (state_16208[(7)]);
var inst_16167__$1 = (state_16208[(2)]);
var inst_16168 = (inst_16167__$1 == null);
var state_16208__$1 = (function (){var statearr_16222 = state_16208;
(statearr_16222[(7)] = inst_16167__$1);

return statearr_16222;
})();
if(cljs.core.truth_(inst_16168)){
var statearr_16223_17568 = state_16208__$1;
(statearr_16223_17568[(1)] = (5));

} else {
var statearr_16224_17569 = state_16208__$1;
(statearr_16224_17569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (15))){
var inst_16185 = (state_16208[(8)]);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16208__$1,(18),to,inst_16185);
} else {
if((state_val_16209 === (21))){
var inst_16199 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16225_17570 = state_16208__$1;
(statearr_16225_17570[(2)] = inst_16199);

(statearr_16225_17570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (13))){
var inst_16201 = (state_16208[(2)]);
var state_16208__$1 = (function (){var statearr_16226 = state_16208;
(statearr_16226[(9)] = inst_16201);

return statearr_16226;
})();
var statearr_16227_17571 = state_16208__$1;
(statearr_16227_17571[(2)] = null);

(statearr_16227_17571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (6))){
var inst_16167 = (state_16208[(7)]);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16208__$1,(11),inst_16167);
} else {
if((state_val_16209 === (17))){
var inst_16194 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
if(cljs.core.truth_(inst_16194)){
var statearr_16230_17573 = state_16208__$1;
(statearr_16230_17573[(1)] = (19));

} else {
var statearr_16232_17574 = state_16208__$1;
(statearr_16232_17574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (3))){
var inst_16206 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16208__$1,inst_16206);
} else {
if((state_val_16209 === (12))){
var inst_16181 = (state_16208[(10)]);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16208__$1,(14),inst_16181);
} else {
if((state_val_16209 === (2))){
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16208__$1,(4),results);
} else {
if((state_val_16209 === (19))){
var state_16208__$1 = state_16208;
var statearr_16235_17576 = state_16208__$1;
(statearr_16235_17576[(2)] = null);

(statearr_16235_17576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (11))){
var inst_16181 = (state_16208[(2)]);
var state_16208__$1 = (function (){var statearr_16240 = state_16208;
(statearr_16240[(10)] = inst_16181);

return statearr_16240;
})();
var statearr_16243_17577 = state_16208__$1;
(statearr_16243_17577[(2)] = null);

(statearr_16243_17577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (9))){
var state_16208__$1 = state_16208;
var statearr_16246_17578 = state_16208__$1;
(statearr_16246_17578[(2)] = null);

(statearr_16246_17578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (5))){
var state_16208__$1 = state_16208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16249_17579 = state_16208__$1;
(statearr_16249_17579[(1)] = (8));

} else {
var statearr_16252_17580 = state_16208__$1;
(statearr_16252_17580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (14))){
var inst_16188 = (state_16208[(11)]);
var inst_16185 = (state_16208[(8)]);
var inst_16185__$1 = (state_16208[(2)]);
var inst_16187 = (inst_16185__$1 == null);
var inst_16188__$1 = cljs.core.not(inst_16187);
var state_16208__$1 = (function (){var statearr_16254 = state_16208;
(statearr_16254[(11)] = inst_16188__$1);

(statearr_16254[(8)] = inst_16185__$1);

return statearr_16254;
})();
if(inst_16188__$1){
var statearr_16255_17582 = state_16208__$1;
(statearr_16255_17582[(1)] = (15));

} else {
var statearr_16256_17583 = state_16208__$1;
(statearr_16256_17583[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (16))){
var inst_16188 = (state_16208[(11)]);
var state_16208__$1 = state_16208;
var statearr_16257_17584 = state_16208__$1;
(statearr_16257_17584[(2)] = inst_16188);

(statearr_16257_17584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (10))){
var inst_16178 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16258_17586 = state_16208__$1;
(statearr_16258_17586[(2)] = inst_16178);

(statearr_16258_17586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (18))){
var inst_16191 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16259_17587 = state_16208__$1;
(statearr_16259_17587[(2)] = inst_16191);

(statearr_16259_17587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (8))){
var inst_16171 = cljs.core.async.close_BANG_(to);
var state_16208__$1 = state_16208;
var statearr_16260_17588 = state_16208__$1;
(statearr_16260_17588[(2)] = inst_16171);

(statearr_16260_17588[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0 = (function (){
var statearr_16265 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__);

(statearr_16265[(1)] = (1));

return statearr_16265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1 = (function (state_16208){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16208);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16266){var ex__15873__auto__ = e16266;
var statearr_16267_17591 = state_16208;
(statearr_16267_17591[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16208[(4)]))){
var statearr_16268_17592 = state_16208;
(statearr_16268_17592[(1)] = cljs.core.first((state_16208[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17593 = state_16208;
state_16208 = G__17593;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__ = function(state_16208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1.call(this,state_16208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16279 = f__15902__auto__();
(statearr_16279[(6)] = c__15901__auto__);

return statearr_16279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));

return c__15901__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16282 = arguments.length;
switch (G__16282) {
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
var G__16293 = arguments.length;
switch (G__16293) {
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
var G__16295 = arguments.length;
switch (G__16295) {
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
var c__15901__auto___17599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16325){
var state_val_16326 = (state_16325[(1)]);
if((state_val_16326 === (7))){
var inst_16318 = (state_16325[(2)]);
var state_16325__$1 = state_16325;
var statearr_16327_17600 = state_16325__$1;
(statearr_16327_17600[(2)] = inst_16318);

(statearr_16327_17600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (1))){
var state_16325__$1 = state_16325;
var statearr_16329_17601 = state_16325__$1;
(statearr_16329_17601[(2)] = null);

(statearr_16329_17601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (4))){
var inst_16298 = (state_16325[(7)]);
var inst_16298__$1 = (state_16325[(2)]);
var inst_16299 = (inst_16298__$1 == null);
var state_16325__$1 = (function (){var statearr_16330 = state_16325;
(statearr_16330[(7)] = inst_16298__$1);

return statearr_16330;
})();
if(cljs.core.truth_(inst_16299)){
var statearr_16331_17602 = state_16325__$1;
(statearr_16331_17602[(1)] = (5));

} else {
var statearr_16333_17603 = state_16325__$1;
(statearr_16333_17603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (13))){
var state_16325__$1 = state_16325;
var statearr_16334_17604 = state_16325__$1;
(statearr_16334_17604[(2)] = null);

(statearr_16334_17604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (6))){
var inst_16298 = (state_16325[(7)]);
var inst_16304 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16298) : p.call(null,inst_16298));
var state_16325__$1 = state_16325;
if(cljs.core.truth_(inst_16304)){
var statearr_16336_17605 = state_16325__$1;
(statearr_16336_17605[(1)] = (9));

} else {
var statearr_16337_17606 = state_16325__$1;
(statearr_16337_17606[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (3))){
var inst_16320 = (state_16325[(2)]);
var state_16325__$1 = state_16325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16325__$1,inst_16320);
} else {
if((state_val_16326 === (12))){
var state_16325__$1 = state_16325;
var statearr_16338_17607 = state_16325__$1;
(statearr_16338_17607[(2)] = null);

(statearr_16338_17607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (2))){
var state_16325__$1 = state_16325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16325__$1,(4),ch);
} else {
if((state_val_16326 === (11))){
var inst_16298 = (state_16325[(7)]);
var inst_16308 = (state_16325[(2)]);
var state_16325__$1 = state_16325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16325__$1,(8),inst_16308,inst_16298);
} else {
if((state_val_16326 === (9))){
var state_16325__$1 = state_16325;
var statearr_16340_17610 = state_16325__$1;
(statearr_16340_17610[(2)] = tc);

(statearr_16340_17610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (5))){
var inst_16301 = cljs.core.async.close_BANG_(tc);
var inst_16302 = cljs.core.async.close_BANG_(fc);
var state_16325__$1 = (function (){var statearr_16344 = state_16325;
(statearr_16344[(8)] = inst_16301);

return statearr_16344;
})();
var statearr_16345_17611 = state_16325__$1;
(statearr_16345_17611[(2)] = inst_16302);

(statearr_16345_17611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (14))){
var inst_16316 = (state_16325[(2)]);
var state_16325__$1 = state_16325;
var statearr_16346_17612 = state_16325__$1;
(statearr_16346_17612[(2)] = inst_16316);

(statearr_16346_17612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (10))){
var state_16325__$1 = state_16325;
var statearr_16347_17613 = state_16325__$1;
(statearr_16347_17613[(2)] = fc);

(statearr_16347_17613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16326 === (8))){
var inst_16310 = (state_16325[(2)]);
var state_16325__$1 = state_16325;
if(cljs.core.truth_(inst_16310)){
var statearr_16348_17614 = state_16325__$1;
(statearr_16348_17614[(1)] = (12));

} else {
var statearr_16349_17615 = state_16325__$1;
(statearr_16349_17615[(1)] = (13));

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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_16350 = [null,null,null,null,null,null,null,null,null];
(statearr_16350[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_16350[(1)] = (1));

return statearr_16350;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_16325){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16325);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16351){var ex__15873__auto__ = e16351;
var statearr_16352_17616 = state_16325;
(statearr_16352_17616[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16325[(4)]))){
var statearr_16353_17617 = state_16325;
(statearr_16353_17617[(1)] = cljs.core.first((state_16325[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17618 = state_16325;
state_16325 = G__17618;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_16325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_16325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16354 = f__15902__auto__();
(statearr_16354[(6)] = c__15901__auto___17599);

return statearr_16354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
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
var c__15901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16376){
var state_val_16377 = (state_16376[(1)]);
if((state_val_16377 === (7))){
var inst_16372 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
var statearr_16378_17621 = state_16376__$1;
(statearr_16378_17621[(2)] = inst_16372);

(statearr_16378_17621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (1))){
var inst_16355 = init;
var inst_16356 = inst_16355;
var state_16376__$1 = (function (){var statearr_16379 = state_16376;
(statearr_16379[(7)] = inst_16356);

return statearr_16379;
})();
var statearr_16380_17622 = state_16376__$1;
(statearr_16380_17622[(2)] = null);

(statearr_16380_17622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (4))){
var inst_16359 = (state_16376[(8)]);
var inst_16359__$1 = (state_16376[(2)]);
var inst_16360 = (inst_16359__$1 == null);
var state_16376__$1 = (function (){var statearr_16381 = state_16376;
(statearr_16381[(8)] = inst_16359__$1);

return statearr_16381;
})();
if(cljs.core.truth_(inst_16360)){
var statearr_16382_17623 = state_16376__$1;
(statearr_16382_17623[(1)] = (5));

} else {
var statearr_16383_17624 = state_16376__$1;
(statearr_16383_17624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (6))){
var inst_16359 = (state_16376[(8)]);
var inst_16356 = (state_16376[(7)]);
var inst_16363 = (state_16376[(9)]);
var inst_16363__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16356,inst_16359) : f.call(null,inst_16356,inst_16359));
var inst_16364 = cljs.core.reduced_QMARK_(inst_16363__$1);
var state_16376__$1 = (function (){var statearr_16384 = state_16376;
(statearr_16384[(9)] = inst_16363__$1);

return statearr_16384;
})();
if(inst_16364){
var statearr_16385_17625 = state_16376__$1;
(statearr_16385_17625[(1)] = (8));

} else {
var statearr_16386_17626 = state_16376__$1;
(statearr_16386_17626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (3))){
var inst_16374 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16376__$1,inst_16374);
} else {
if((state_val_16377 === (2))){
var state_16376__$1 = state_16376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16376__$1,(4),ch);
} else {
if((state_val_16377 === (9))){
var inst_16363 = (state_16376[(9)]);
var inst_16356 = inst_16363;
var state_16376__$1 = (function (){var statearr_16387 = state_16376;
(statearr_16387[(7)] = inst_16356);

return statearr_16387;
})();
var statearr_16388_17627 = state_16376__$1;
(statearr_16388_17627[(2)] = null);

(statearr_16388_17627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (5))){
var inst_16356 = (state_16376[(7)]);
var state_16376__$1 = state_16376;
var statearr_16389_17628 = state_16376__$1;
(statearr_16389_17628[(2)] = inst_16356);

(statearr_16389_17628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (10))){
var inst_16370 = (state_16376[(2)]);
var state_16376__$1 = state_16376;
var statearr_16390_17629 = state_16376__$1;
(statearr_16390_17629[(2)] = inst_16370);

(statearr_16390_17629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16377 === (8))){
var inst_16363 = (state_16376[(9)]);
var inst_16366 = cljs.core.deref(inst_16363);
var state_16376__$1 = state_16376;
var statearr_16391_17631 = state_16376__$1;
(statearr_16391_17631[(2)] = inst_16366);

(statearr_16391_17631[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__15870__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15870__auto____0 = (function (){
var statearr_16392 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16392[(0)] = cljs$core$async$reduce_$_state_machine__15870__auto__);

(statearr_16392[(1)] = (1));

return statearr_16392;
});
var cljs$core$async$reduce_$_state_machine__15870__auto____1 = (function (state_16376){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16376);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16393){var ex__15873__auto__ = e16393;
var statearr_16394_17632 = state_16376;
(statearr_16394_17632[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16376[(4)]))){
var statearr_16395_17633 = state_16376;
(statearr_16395_17633[(1)] = cljs.core.first((state_16376[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17634 = state_16376;
state_16376 = G__17634;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15870__auto__ = function(state_16376){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15870__auto____1.call(this,state_16376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15870__auto____0;
cljs$core$async$reduce_$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15870__auto____1;
return cljs$core$async$reduce_$_state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16396 = f__15902__auto__();
(statearr_16396[(6)] = c__15901__auto__);

return statearr_16396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));

return c__15901__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16402){
var state_val_16403 = (state_16402[(1)]);
if((state_val_16403 === (1))){
var inst_16397 = cljs.core.async.reduce(f__$1,init,ch);
var state_16402__$1 = state_16402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16402__$1,(2),inst_16397);
} else {
if((state_val_16403 === (2))){
var inst_16399 = (state_16402[(2)]);
var inst_16400 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16399) : f__$1.call(null,inst_16399));
var state_16402__$1 = state_16402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16402__$1,inst_16400);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15870__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15870__auto____0 = (function (){
var statearr_16404 = [null,null,null,null,null,null,null];
(statearr_16404[(0)] = cljs$core$async$transduce_$_state_machine__15870__auto__);

(statearr_16404[(1)] = (1));

return statearr_16404;
});
var cljs$core$async$transduce_$_state_machine__15870__auto____1 = (function (state_16402){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16402);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16405){var ex__15873__auto__ = e16405;
var statearr_16406_17639 = state_16402;
(statearr_16406_17639[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16402[(4)]))){
var statearr_16407_17640 = state_16402;
(statearr_16407_17640[(1)] = cljs.core.first((state_16402[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17641 = state_16402;
state_16402 = G__17641;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15870__auto__ = function(state_16402){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15870__auto____1.call(this,state_16402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15870__auto____0;
cljs$core$async$transduce_$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15870__auto____1;
return cljs$core$async$transduce_$_state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16408 = f__15902__auto__();
(statearr_16408[(6)] = c__15901__auto__);

return statearr_16408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));

return c__15901__auto__;
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
var G__16410 = arguments.length;
switch (G__16410) {
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
var c__15901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16435){
var state_val_16436 = (state_16435[(1)]);
if((state_val_16436 === (7))){
var inst_16417 = (state_16435[(2)]);
var state_16435__$1 = state_16435;
var statearr_16437_17643 = state_16435__$1;
(statearr_16437_17643[(2)] = inst_16417);

(statearr_16437_17643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (1))){
var inst_16411 = cljs.core.seq(coll);
var inst_16412 = inst_16411;
var state_16435__$1 = (function (){var statearr_16438 = state_16435;
(statearr_16438[(7)] = inst_16412);

return statearr_16438;
})();
var statearr_16439_17644 = state_16435__$1;
(statearr_16439_17644[(2)] = null);

(statearr_16439_17644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (4))){
var inst_16412 = (state_16435[(7)]);
var inst_16415 = cljs.core.first(inst_16412);
var state_16435__$1 = state_16435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16435__$1,(7),ch,inst_16415);
} else {
if((state_val_16436 === (13))){
var inst_16429 = (state_16435[(2)]);
var state_16435__$1 = state_16435;
var statearr_16440_17645 = state_16435__$1;
(statearr_16440_17645[(2)] = inst_16429);

(statearr_16440_17645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (6))){
var inst_16420 = (state_16435[(2)]);
var state_16435__$1 = state_16435;
if(cljs.core.truth_(inst_16420)){
var statearr_16441_17646 = state_16435__$1;
(statearr_16441_17646[(1)] = (8));

} else {
var statearr_16442_17647 = state_16435__$1;
(statearr_16442_17647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (3))){
var inst_16433 = (state_16435[(2)]);
var state_16435__$1 = state_16435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16435__$1,inst_16433);
} else {
if((state_val_16436 === (12))){
var state_16435__$1 = state_16435;
var statearr_16443_17648 = state_16435__$1;
(statearr_16443_17648[(2)] = null);

(statearr_16443_17648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (2))){
var inst_16412 = (state_16435[(7)]);
var state_16435__$1 = state_16435;
if(cljs.core.truth_(inst_16412)){
var statearr_16444_17649 = state_16435__$1;
(statearr_16444_17649[(1)] = (4));

} else {
var statearr_16445_17650 = state_16435__$1;
(statearr_16445_17650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (11))){
var inst_16426 = cljs.core.async.close_BANG_(ch);
var state_16435__$1 = state_16435;
var statearr_16446_17651 = state_16435__$1;
(statearr_16446_17651[(2)] = inst_16426);

(statearr_16446_17651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (9))){
var state_16435__$1 = state_16435;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16447_17652 = state_16435__$1;
(statearr_16447_17652[(1)] = (11));

} else {
var statearr_16448_17653 = state_16435__$1;
(statearr_16448_17653[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (5))){
var inst_16412 = (state_16435[(7)]);
var state_16435__$1 = state_16435;
var statearr_16449_17654 = state_16435__$1;
(statearr_16449_17654[(2)] = inst_16412);

(statearr_16449_17654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (10))){
var inst_16431 = (state_16435[(2)]);
var state_16435__$1 = state_16435;
var statearr_16450_17655 = state_16435__$1;
(statearr_16450_17655[(2)] = inst_16431);

(statearr_16450_17655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (8))){
var inst_16412 = (state_16435[(7)]);
var inst_16422 = cljs.core.next(inst_16412);
var inst_16412__$1 = inst_16422;
var state_16435__$1 = (function (){var statearr_16451 = state_16435;
(statearr_16451[(7)] = inst_16412__$1);

return statearr_16451;
})();
var statearr_16452_17657 = state_16435__$1;
(statearr_16452_17657[(2)] = null);

(statearr_16452_17657[(1)] = (2));


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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_16453 = [null,null,null,null,null,null,null,null];
(statearr_16453[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_16453[(1)] = (1));

return statearr_16453;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_16435){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16435);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16454){var ex__15873__auto__ = e16454;
var statearr_16455_17659 = state_16435;
(statearr_16455_17659[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16435[(4)]))){
var statearr_16456_17660 = state_16435;
(statearr_16456_17660[(1)] = cljs.core.first((state_16435[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17661 = state_16435;
state_16435 = G__17661;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_16435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_16435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16457 = f__15902__auto__();
(statearr_16457[(6)] = c__15901__auto__);

return statearr_16457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));

return c__15901__auto__;
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
var G__16459 = arguments.length;
switch (G__16459) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17663 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17663(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17664 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17664(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17672 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17672(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17673 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17673(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16460 = (function (ch,cs,meta16461){
this.ch = ch;
this.cs = cs;
this.meta16461 = meta16461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16462,meta16461__$1){
var self__ = this;
var _16462__$1 = this;
return (new cljs.core.async.t_cljs$core$async16460(self__.ch,self__.cs,meta16461__$1));
}));

(cljs.core.async.t_cljs$core$async16460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16462){
var self__ = this;
var _16462__$1 = this;
return self__.meta16461;
}));

(cljs.core.async.t_cljs$core$async16460.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16460.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16460.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16460.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16460.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16461","meta16461",-1545576991,null)], null);
}));

(cljs.core.async.t_cljs$core$async16460.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16460");

(cljs.core.async.t_cljs$core$async16460.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16460");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16460.
 */
cljs.core.async.__GT_t_cljs$core$async16460 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16460(ch__$1,cs__$1,meta16461){
return (new cljs.core.async.t_cljs$core$async16460(ch__$1,cs__$1,meta16461));
});

}

return (new cljs.core.async.t_cljs$core$async16460(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15901__auto___17683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16595){
var state_val_16596 = (state_16595[(1)]);
if((state_val_16596 === (7))){
var inst_16591 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16597_17684 = state_16595__$1;
(statearr_16597_17684[(2)] = inst_16591);

(statearr_16597_17684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (20))){
var inst_16496 = (state_16595[(7)]);
var inst_16508 = cljs.core.first(inst_16496);
var inst_16509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16508,(0),null);
var inst_16510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16508,(1),null);
var state_16595__$1 = (function (){var statearr_16598 = state_16595;
(statearr_16598[(8)] = inst_16509);

return statearr_16598;
})();
if(cljs.core.truth_(inst_16510)){
var statearr_16599_17692 = state_16595__$1;
(statearr_16599_17692[(1)] = (22));

} else {
var statearr_16600_17693 = state_16595__$1;
(statearr_16600_17693[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (27))){
var inst_16538 = (state_16595[(9)]);
var inst_16545 = (state_16595[(10)]);
var inst_16540 = (state_16595[(11)]);
var inst_16465 = (state_16595[(12)]);
var inst_16545__$1 = cljs.core._nth(inst_16538,inst_16540);
var inst_16546 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16545__$1,inst_16465,done);
var state_16595__$1 = (function (){var statearr_16601 = state_16595;
(statearr_16601[(10)] = inst_16545__$1);

return statearr_16601;
})();
if(cljs.core.truth_(inst_16546)){
var statearr_16602_17694 = state_16595__$1;
(statearr_16602_17694[(1)] = (30));

} else {
var statearr_16603_17695 = state_16595__$1;
(statearr_16603_17695[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (1))){
var state_16595__$1 = state_16595;
var statearr_16604_17696 = state_16595__$1;
(statearr_16604_17696[(2)] = null);

(statearr_16604_17696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (24))){
var inst_16496 = (state_16595[(7)]);
var inst_16515 = (state_16595[(2)]);
var inst_16516 = cljs.core.next(inst_16496);
var inst_16474 = inst_16516;
var inst_16475 = null;
var inst_16476 = (0);
var inst_16477 = (0);
var state_16595__$1 = (function (){var statearr_16605 = state_16595;
(statearr_16605[(13)] = inst_16515);

(statearr_16605[(14)] = inst_16476);

(statearr_16605[(15)] = inst_16475);

(statearr_16605[(16)] = inst_16474);

(statearr_16605[(17)] = inst_16477);

return statearr_16605;
})();
var statearr_16606_17700 = state_16595__$1;
(statearr_16606_17700[(2)] = null);

(statearr_16606_17700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (39))){
var state_16595__$1 = state_16595;
var statearr_16610_17701 = state_16595__$1;
(statearr_16610_17701[(2)] = null);

(statearr_16610_17701[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (4))){
var inst_16465 = (state_16595[(12)]);
var inst_16465__$1 = (state_16595[(2)]);
var inst_16466 = (inst_16465__$1 == null);
var state_16595__$1 = (function (){var statearr_16611 = state_16595;
(statearr_16611[(12)] = inst_16465__$1);

return statearr_16611;
})();
if(cljs.core.truth_(inst_16466)){
var statearr_16612_17705 = state_16595__$1;
(statearr_16612_17705[(1)] = (5));

} else {
var statearr_16613_17706 = state_16595__$1;
(statearr_16613_17706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (15))){
var inst_16476 = (state_16595[(14)]);
var inst_16475 = (state_16595[(15)]);
var inst_16474 = (state_16595[(16)]);
var inst_16477 = (state_16595[(17)]);
var inst_16492 = (state_16595[(2)]);
var inst_16493 = (inst_16477 + (1));
var tmp16607 = inst_16476;
var tmp16608 = inst_16475;
var tmp16609 = inst_16474;
var inst_16474__$1 = tmp16609;
var inst_16475__$1 = tmp16608;
var inst_16476__$1 = tmp16607;
var inst_16477__$1 = inst_16493;
var state_16595__$1 = (function (){var statearr_16614 = state_16595;
(statearr_16614[(18)] = inst_16492);

(statearr_16614[(14)] = inst_16476__$1);

(statearr_16614[(15)] = inst_16475__$1);

(statearr_16614[(16)] = inst_16474__$1);

(statearr_16614[(17)] = inst_16477__$1);

return statearr_16614;
})();
var statearr_16615_17710 = state_16595__$1;
(statearr_16615_17710[(2)] = null);

(statearr_16615_17710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (21))){
var inst_16519 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16619_17711 = state_16595__$1;
(statearr_16619_17711[(2)] = inst_16519);

(statearr_16619_17711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (31))){
var inst_16545 = (state_16595[(10)]);
var inst_16549 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16545);
var state_16595__$1 = state_16595;
var statearr_16620_17712 = state_16595__$1;
(statearr_16620_17712[(2)] = inst_16549);

(statearr_16620_17712[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (32))){
var inst_16538 = (state_16595[(9)]);
var inst_16540 = (state_16595[(11)]);
var inst_16539 = (state_16595[(19)]);
var inst_16537 = (state_16595[(20)]);
var inst_16551 = (state_16595[(2)]);
var inst_16552 = (inst_16540 + (1));
var tmp16616 = inst_16538;
var tmp16617 = inst_16539;
var tmp16618 = inst_16537;
var inst_16537__$1 = tmp16618;
var inst_16538__$1 = tmp16616;
var inst_16539__$1 = tmp16617;
var inst_16540__$1 = inst_16552;
var state_16595__$1 = (function (){var statearr_16621 = state_16595;
(statearr_16621[(9)] = inst_16538__$1);

(statearr_16621[(11)] = inst_16540__$1);

(statearr_16621[(21)] = inst_16551);

(statearr_16621[(19)] = inst_16539__$1);

(statearr_16621[(20)] = inst_16537__$1);

return statearr_16621;
})();
var statearr_16622_17713 = state_16595__$1;
(statearr_16622_17713[(2)] = null);

(statearr_16622_17713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (40))){
var inst_16564 = (state_16595[(22)]);
var inst_16568 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16564);
var state_16595__$1 = state_16595;
var statearr_16623_17714 = state_16595__$1;
(statearr_16623_17714[(2)] = inst_16568);

(statearr_16623_17714[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (33))){
var inst_16555 = (state_16595[(23)]);
var inst_16557 = cljs.core.chunked_seq_QMARK_(inst_16555);
var state_16595__$1 = state_16595;
if(inst_16557){
var statearr_16624_17716 = state_16595__$1;
(statearr_16624_17716[(1)] = (36));

} else {
var statearr_16625_17717 = state_16595__$1;
(statearr_16625_17717[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (13))){
var inst_16486 = (state_16595[(24)]);
var inst_16489 = cljs.core.async.close_BANG_(inst_16486);
var state_16595__$1 = state_16595;
var statearr_16626_17718 = state_16595__$1;
(statearr_16626_17718[(2)] = inst_16489);

(statearr_16626_17718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (22))){
var inst_16509 = (state_16595[(8)]);
var inst_16512 = cljs.core.async.close_BANG_(inst_16509);
var state_16595__$1 = state_16595;
var statearr_16627_17719 = state_16595__$1;
(statearr_16627_17719[(2)] = inst_16512);

(statearr_16627_17719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (36))){
var inst_16555 = (state_16595[(23)]);
var inst_16559 = cljs.core.chunk_first(inst_16555);
var inst_16560 = cljs.core.chunk_rest(inst_16555);
var inst_16561 = cljs.core.count(inst_16559);
var inst_16537 = inst_16560;
var inst_16538 = inst_16559;
var inst_16539 = inst_16561;
var inst_16540 = (0);
var state_16595__$1 = (function (){var statearr_16628 = state_16595;
(statearr_16628[(9)] = inst_16538);

(statearr_16628[(11)] = inst_16540);

(statearr_16628[(19)] = inst_16539);

(statearr_16628[(20)] = inst_16537);

return statearr_16628;
})();
var statearr_16629_17720 = state_16595__$1;
(statearr_16629_17720[(2)] = null);

(statearr_16629_17720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (41))){
var inst_16555 = (state_16595[(23)]);
var inst_16570 = (state_16595[(2)]);
var inst_16571 = cljs.core.next(inst_16555);
var inst_16537 = inst_16571;
var inst_16538 = null;
var inst_16539 = (0);
var inst_16540 = (0);
var state_16595__$1 = (function (){var statearr_16630 = state_16595;
(statearr_16630[(25)] = inst_16570);

(statearr_16630[(9)] = inst_16538);

(statearr_16630[(11)] = inst_16540);

(statearr_16630[(19)] = inst_16539);

(statearr_16630[(20)] = inst_16537);

return statearr_16630;
})();
var statearr_16631_17721 = state_16595__$1;
(statearr_16631_17721[(2)] = null);

(statearr_16631_17721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (43))){
var state_16595__$1 = state_16595;
var statearr_16632_17722 = state_16595__$1;
(statearr_16632_17722[(2)] = null);

(statearr_16632_17722[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (29))){
var inst_16579 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16633_17723 = state_16595__$1;
(statearr_16633_17723[(2)] = inst_16579);

(statearr_16633_17723[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (44))){
var inst_16588 = (state_16595[(2)]);
var state_16595__$1 = (function (){var statearr_16634 = state_16595;
(statearr_16634[(26)] = inst_16588);

return statearr_16634;
})();
var statearr_16635_17724 = state_16595__$1;
(statearr_16635_17724[(2)] = null);

(statearr_16635_17724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (6))){
var inst_16529 = (state_16595[(27)]);
var inst_16528 = cljs.core.deref(cs);
var inst_16529__$1 = cljs.core.keys(inst_16528);
var inst_16530 = cljs.core.count(inst_16529__$1);
var inst_16531 = cljs.core.reset_BANG_(dctr,inst_16530);
var inst_16536 = cljs.core.seq(inst_16529__$1);
var inst_16537 = inst_16536;
var inst_16538 = null;
var inst_16539 = (0);
var inst_16540 = (0);
var state_16595__$1 = (function (){var statearr_16636 = state_16595;
(statearr_16636[(27)] = inst_16529__$1);

(statearr_16636[(9)] = inst_16538);

(statearr_16636[(11)] = inst_16540);

(statearr_16636[(28)] = inst_16531);

(statearr_16636[(19)] = inst_16539);

(statearr_16636[(20)] = inst_16537);

return statearr_16636;
})();
var statearr_16637_17725 = state_16595__$1;
(statearr_16637_17725[(2)] = null);

(statearr_16637_17725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (28))){
var inst_16555 = (state_16595[(23)]);
var inst_16537 = (state_16595[(20)]);
var inst_16555__$1 = cljs.core.seq(inst_16537);
var state_16595__$1 = (function (){var statearr_16638 = state_16595;
(statearr_16638[(23)] = inst_16555__$1);

return statearr_16638;
})();
if(inst_16555__$1){
var statearr_16639_17726 = state_16595__$1;
(statearr_16639_17726[(1)] = (33));

} else {
var statearr_16640_17727 = state_16595__$1;
(statearr_16640_17727[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (25))){
var inst_16540 = (state_16595[(11)]);
var inst_16539 = (state_16595[(19)]);
var inst_16542 = (inst_16540 < inst_16539);
var inst_16543 = inst_16542;
var state_16595__$1 = state_16595;
if(cljs.core.truth_(inst_16543)){
var statearr_16641_17728 = state_16595__$1;
(statearr_16641_17728[(1)] = (27));

} else {
var statearr_16642_17729 = state_16595__$1;
(statearr_16642_17729[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (34))){
var state_16595__$1 = state_16595;
var statearr_16643_17730 = state_16595__$1;
(statearr_16643_17730[(2)] = null);

(statearr_16643_17730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (17))){
var state_16595__$1 = state_16595;
var statearr_16644_17731 = state_16595__$1;
(statearr_16644_17731[(2)] = null);

(statearr_16644_17731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (3))){
var inst_16593 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16595__$1,inst_16593);
} else {
if((state_val_16596 === (12))){
var inst_16524 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16645_17732 = state_16595__$1;
(statearr_16645_17732[(2)] = inst_16524);

(statearr_16645_17732[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (2))){
var state_16595__$1 = state_16595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16595__$1,(4),ch);
} else {
if((state_val_16596 === (23))){
var state_16595__$1 = state_16595;
var statearr_16646_17733 = state_16595__$1;
(statearr_16646_17733[(2)] = null);

(statearr_16646_17733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (35))){
var inst_16577 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16647_17734 = state_16595__$1;
(statearr_16647_17734[(2)] = inst_16577);

(statearr_16647_17734[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (19))){
var inst_16496 = (state_16595[(7)]);
var inst_16500 = cljs.core.chunk_first(inst_16496);
var inst_16501 = cljs.core.chunk_rest(inst_16496);
var inst_16502 = cljs.core.count(inst_16500);
var inst_16474 = inst_16501;
var inst_16475 = inst_16500;
var inst_16476 = inst_16502;
var inst_16477 = (0);
var state_16595__$1 = (function (){var statearr_16648 = state_16595;
(statearr_16648[(14)] = inst_16476);

(statearr_16648[(15)] = inst_16475);

(statearr_16648[(16)] = inst_16474);

(statearr_16648[(17)] = inst_16477);

return statearr_16648;
})();
var statearr_16649_17735 = state_16595__$1;
(statearr_16649_17735[(2)] = null);

(statearr_16649_17735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (11))){
var inst_16474 = (state_16595[(16)]);
var inst_16496 = (state_16595[(7)]);
var inst_16496__$1 = cljs.core.seq(inst_16474);
var state_16595__$1 = (function (){var statearr_16650 = state_16595;
(statearr_16650[(7)] = inst_16496__$1);

return statearr_16650;
})();
if(inst_16496__$1){
var statearr_16651_17736 = state_16595__$1;
(statearr_16651_17736[(1)] = (16));

} else {
var statearr_16652_17737 = state_16595__$1;
(statearr_16652_17737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (9))){
var inst_16526 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16653_17738 = state_16595__$1;
(statearr_16653_17738[(2)] = inst_16526);

(statearr_16653_17738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (5))){
var inst_16472 = cljs.core.deref(cs);
var inst_16473 = cljs.core.seq(inst_16472);
var inst_16474 = inst_16473;
var inst_16475 = null;
var inst_16476 = (0);
var inst_16477 = (0);
var state_16595__$1 = (function (){var statearr_16654 = state_16595;
(statearr_16654[(14)] = inst_16476);

(statearr_16654[(15)] = inst_16475);

(statearr_16654[(16)] = inst_16474);

(statearr_16654[(17)] = inst_16477);

return statearr_16654;
})();
var statearr_16655_17740 = state_16595__$1;
(statearr_16655_17740[(2)] = null);

(statearr_16655_17740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (14))){
var state_16595__$1 = state_16595;
var statearr_16656_17742 = state_16595__$1;
(statearr_16656_17742[(2)] = null);

(statearr_16656_17742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (45))){
var inst_16585 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16657_17746 = state_16595__$1;
(statearr_16657_17746[(2)] = inst_16585);

(statearr_16657_17746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (26))){
var inst_16529 = (state_16595[(27)]);
var inst_16581 = (state_16595[(2)]);
var inst_16582 = cljs.core.seq(inst_16529);
var state_16595__$1 = (function (){var statearr_16658 = state_16595;
(statearr_16658[(29)] = inst_16581);

return statearr_16658;
})();
if(inst_16582){
var statearr_16659_17747 = state_16595__$1;
(statearr_16659_17747[(1)] = (42));

} else {
var statearr_16660_17748 = state_16595__$1;
(statearr_16660_17748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (16))){
var inst_16496 = (state_16595[(7)]);
var inst_16498 = cljs.core.chunked_seq_QMARK_(inst_16496);
var state_16595__$1 = state_16595;
if(inst_16498){
var statearr_16661_17749 = state_16595__$1;
(statearr_16661_17749[(1)] = (19));

} else {
var statearr_16662_17750 = state_16595__$1;
(statearr_16662_17750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (38))){
var inst_16574 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16663_17751 = state_16595__$1;
(statearr_16663_17751[(2)] = inst_16574);

(statearr_16663_17751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (30))){
var state_16595__$1 = state_16595;
var statearr_16664_17752 = state_16595__$1;
(statearr_16664_17752[(2)] = null);

(statearr_16664_17752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (10))){
var inst_16475 = (state_16595[(15)]);
var inst_16477 = (state_16595[(17)]);
var inst_16485 = cljs.core._nth(inst_16475,inst_16477);
var inst_16486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16485,(0),null);
var inst_16487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16485,(1),null);
var state_16595__$1 = (function (){var statearr_16665 = state_16595;
(statearr_16665[(24)] = inst_16486);

return statearr_16665;
})();
if(cljs.core.truth_(inst_16487)){
var statearr_16666_17753 = state_16595__$1;
(statearr_16666_17753[(1)] = (13));

} else {
var statearr_16667_17754 = state_16595__$1;
(statearr_16667_17754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (18))){
var inst_16522 = (state_16595[(2)]);
var state_16595__$1 = state_16595;
var statearr_16668_17755 = state_16595__$1;
(statearr_16668_17755[(2)] = inst_16522);

(statearr_16668_17755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (42))){
var state_16595__$1 = state_16595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16595__$1,(45),dchan);
} else {
if((state_val_16596 === (37))){
var inst_16564 = (state_16595[(22)]);
var inst_16555 = (state_16595[(23)]);
var inst_16465 = (state_16595[(12)]);
var inst_16564__$1 = cljs.core.first(inst_16555);
var inst_16565 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16564__$1,inst_16465,done);
var state_16595__$1 = (function (){var statearr_16669 = state_16595;
(statearr_16669[(22)] = inst_16564__$1);

return statearr_16669;
})();
if(cljs.core.truth_(inst_16565)){
var statearr_16670_17759 = state_16595__$1;
(statearr_16670_17759[(1)] = (39));

} else {
var statearr_16671_17760 = state_16595__$1;
(statearr_16671_17760[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16596 === (8))){
var inst_16476 = (state_16595[(14)]);
var inst_16477 = (state_16595[(17)]);
var inst_16479 = (inst_16477 < inst_16476);
var inst_16480 = inst_16479;
var state_16595__$1 = state_16595;
if(cljs.core.truth_(inst_16480)){
var statearr_16672_17761 = state_16595__$1;
(statearr_16672_17761[(1)] = (10));

} else {
var statearr_16673_17762 = state_16595__$1;
(statearr_16673_17762[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__15870__auto__ = null;
var cljs$core$async$mult_$_state_machine__15870__auto____0 = (function (){
var statearr_16674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16674[(0)] = cljs$core$async$mult_$_state_machine__15870__auto__);

(statearr_16674[(1)] = (1));

return statearr_16674;
});
var cljs$core$async$mult_$_state_machine__15870__auto____1 = (function (state_16595){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16595);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16675){var ex__15873__auto__ = e16675;
var statearr_16676_17763 = state_16595;
(statearr_16676_17763[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16595[(4)]))){
var statearr_16677_17764 = state_16595;
(statearr_16677_17764[(1)] = cljs.core.first((state_16595[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17769 = state_16595;
state_16595 = G__17769;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15870__auto__ = function(state_16595){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15870__auto____1.call(this,state_16595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15870__auto____0;
cljs$core$async$mult_$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15870__auto____1;
return cljs$core$async$mult_$_state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16678 = f__15902__auto__();
(statearr_16678[(6)] = c__15901__auto___17683);

return statearr_16678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
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
var G__16680 = arguments.length;
switch (G__16680) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_17775 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17775(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17779 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17779(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17784 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17784(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17791 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17791(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17792 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17792(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17793 = arguments.length;
var i__5770__auto___17794 = (0);
while(true){
if((i__5770__auto___17794 < len__5769__auto___17793)){
args__5775__auto__.push((arguments[i__5770__auto___17794]));

var G__17795 = (i__5770__auto___17794 + (1));
i__5770__auto___17794 = G__17795;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16685){
var map__16686 = p__16685;
var map__16686__$1 = cljs.core.__destructure_map(map__16686);
var opts = map__16686__$1;
var statearr_16687_17796 = state;
(statearr_16687_17796[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16688_17797 = state;
(statearr_16688_17797[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16689_17798 = state;
(statearr_16689_17798[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16681){
var G__16682 = cljs.core.first(seq16681);
var seq16681__$1 = cljs.core.next(seq16681);
var G__16683 = cljs.core.first(seq16681__$1);
var seq16681__$2 = cljs.core.next(seq16681__$1);
var G__16684 = cljs.core.first(seq16681__$2);
var seq16681__$3 = cljs.core.next(seq16681__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16682,G__16683,G__16684,seq16681__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16690 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16691){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16691 = meta16691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16692,meta16691__$1){
var self__ = this;
var _16692__$1 = this;
return (new cljs.core.async.t_cljs$core$async16690(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16691__$1));
}));

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16692){
var self__ = this;
var _16692__$1 = this;
return self__.meta16691;
}));

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16690.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16691","meta16691",1514389306,null)], null);
}));

(cljs.core.async.t_cljs$core$async16690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16690");

(cljs.core.async.t_cljs$core$async16690.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16690.
 */
cljs.core.async.__GT_t_cljs$core$async16690 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16690(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16691){
return (new cljs.core.async.t_cljs$core$async16690(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16691));
});

}

return (new cljs.core.async.t_cljs$core$async16690(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15901__auto___17805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16760){
var state_val_16761 = (state_16760[(1)]);
if((state_val_16761 === (7))){
var inst_16720 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16720)){
var statearr_16762_17806 = state_16760__$1;
(statearr_16762_17806[(1)] = (8));

} else {
var statearr_16763_17807 = state_16760__$1;
(statearr_16763_17807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (20))){
var inst_16713 = (state_16760[(7)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16760__$1,(23),out,inst_16713);
} else {
if((state_val_16761 === (1))){
var inst_16696 = calc_state();
var inst_16697 = cljs.core.__destructure_map(inst_16696);
var inst_16698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16697,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16697,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16697,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16701 = inst_16696;
var state_16760__$1 = (function (){var statearr_16764 = state_16760;
(statearr_16764[(8)] = inst_16701);

(statearr_16764[(9)] = inst_16700);

(statearr_16764[(10)] = inst_16698);

(statearr_16764[(11)] = inst_16699);

return statearr_16764;
})();
var statearr_16765_17814 = state_16760__$1;
(statearr_16765_17814[(2)] = null);

(statearr_16765_17814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (24))){
var inst_16704 = (state_16760[(12)]);
var inst_16701 = inst_16704;
var state_16760__$1 = (function (){var statearr_16766 = state_16760;
(statearr_16766[(8)] = inst_16701);

return statearr_16766;
})();
var statearr_16767_17815 = state_16760__$1;
(statearr_16767_17815[(2)] = null);

(statearr_16767_17815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (4))){
var inst_16713 = (state_16760[(7)]);
var inst_16715 = (state_16760[(13)]);
var inst_16712 = (state_16760[(2)]);
var inst_16713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16712,(0),null);
var inst_16714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16712,(1),null);
var inst_16715__$1 = (inst_16713__$1 == null);
var state_16760__$1 = (function (){var statearr_16768 = state_16760;
(statearr_16768[(7)] = inst_16713__$1);

(statearr_16768[(14)] = inst_16714);

(statearr_16768[(13)] = inst_16715__$1);

return statearr_16768;
})();
if(cljs.core.truth_(inst_16715__$1)){
var statearr_16769_17816 = state_16760__$1;
(statearr_16769_17816[(1)] = (5));

} else {
var statearr_16770_17817 = state_16760__$1;
(statearr_16770_17817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (15))){
var inst_16705 = (state_16760[(15)]);
var inst_16734 = (state_16760[(16)]);
var inst_16734__$1 = cljs.core.empty_QMARK_(inst_16705);
var state_16760__$1 = (function (){var statearr_16771 = state_16760;
(statearr_16771[(16)] = inst_16734__$1);

return statearr_16771;
})();
if(inst_16734__$1){
var statearr_16772_17818 = state_16760__$1;
(statearr_16772_17818[(1)] = (17));

} else {
var statearr_16773_17819 = state_16760__$1;
(statearr_16773_17819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (21))){
var inst_16704 = (state_16760[(12)]);
var inst_16701 = inst_16704;
var state_16760__$1 = (function (){var statearr_16774 = state_16760;
(statearr_16774[(8)] = inst_16701);

return statearr_16774;
})();
var statearr_16775_17820 = state_16760__$1;
(statearr_16775_17820[(2)] = null);

(statearr_16775_17820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (13))){
var inst_16727 = (state_16760[(2)]);
var inst_16728 = calc_state();
var inst_16701 = inst_16728;
var state_16760__$1 = (function (){var statearr_16776 = state_16760;
(statearr_16776[(8)] = inst_16701);

(statearr_16776[(17)] = inst_16727);

return statearr_16776;
})();
var statearr_16777_17821 = state_16760__$1;
(statearr_16777_17821[(2)] = null);

(statearr_16777_17821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (22))){
var inst_16754 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16778_17822 = state_16760__$1;
(statearr_16778_17822[(2)] = inst_16754);

(statearr_16778_17822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (6))){
var inst_16714 = (state_16760[(14)]);
var inst_16718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16714,change);
var state_16760__$1 = state_16760;
var statearr_16779_17823 = state_16760__$1;
(statearr_16779_17823[(2)] = inst_16718);

(statearr_16779_17823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (25))){
var state_16760__$1 = state_16760;
var statearr_16780_17824 = state_16760__$1;
(statearr_16780_17824[(2)] = null);

(statearr_16780_17824[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (17))){
var inst_16714 = (state_16760[(14)]);
var inst_16706 = (state_16760[(18)]);
var inst_16736 = (inst_16706.cljs$core$IFn$_invoke$arity$1 ? inst_16706.cljs$core$IFn$_invoke$arity$1(inst_16714) : inst_16706.call(null,inst_16714));
var inst_16737 = cljs.core.not(inst_16736);
var state_16760__$1 = state_16760;
var statearr_16781_17825 = state_16760__$1;
(statearr_16781_17825[(2)] = inst_16737);

(statearr_16781_17825[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (3))){
var inst_16758 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16760__$1,inst_16758);
} else {
if((state_val_16761 === (12))){
var state_16760__$1 = state_16760;
var statearr_16782_17826 = state_16760__$1;
(statearr_16782_17826[(2)] = null);

(statearr_16782_17826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (2))){
var inst_16701 = (state_16760[(8)]);
var inst_16704 = (state_16760[(12)]);
var inst_16704__$1 = cljs.core.__destructure_map(inst_16701);
var inst_16705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16704__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16704__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16704__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16760__$1 = (function (){var statearr_16783 = state_16760;
(statearr_16783[(15)] = inst_16705);

(statearr_16783[(12)] = inst_16704__$1);

(statearr_16783[(18)] = inst_16706);

return statearr_16783;
})();
return cljs.core.async.ioc_alts_BANG_(state_16760__$1,(4),inst_16707);
} else {
if((state_val_16761 === (23))){
var inst_16745 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16745)){
var statearr_16784_17833 = state_16760__$1;
(statearr_16784_17833[(1)] = (24));

} else {
var statearr_16785_17834 = state_16760__$1;
(statearr_16785_17834[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (19))){
var inst_16740 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16786_17835 = state_16760__$1;
(statearr_16786_17835[(2)] = inst_16740);

(statearr_16786_17835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (11))){
var inst_16714 = (state_16760[(14)]);
var inst_16724 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16714);
var state_16760__$1 = state_16760;
var statearr_16787_17836 = state_16760__$1;
(statearr_16787_17836[(2)] = inst_16724);

(statearr_16787_17836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (9))){
var inst_16705 = (state_16760[(15)]);
var inst_16714 = (state_16760[(14)]);
var inst_16731 = (state_16760[(19)]);
var inst_16731__$1 = (inst_16705.cljs$core$IFn$_invoke$arity$1 ? inst_16705.cljs$core$IFn$_invoke$arity$1(inst_16714) : inst_16705.call(null,inst_16714));
var state_16760__$1 = (function (){var statearr_16788 = state_16760;
(statearr_16788[(19)] = inst_16731__$1);

return statearr_16788;
})();
if(cljs.core.truth_(inst_16731__$1)){
var statearr_16789_17837 = state_16760__$1;
(statearr_16789_17837[(1)] = (14));

} else {
var statearr_16790_17838 = state_16760__$1;
(statearr_16790_17838[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (5))){
var inst_16715 = (state_16760[(13)]);
var state_16760__$1 = state_16760;
var statearr_16791_17839 = state_16760__$1;
(statearr_16791_17839[(2)] = inst_16715);

(statearr_16791_17839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (14))){
var inst_16731 = (state_16760[(19)]);
var state_16760__$1 = state_16760;
var statearr_16792_17840 = state_16760__$1;
(statearr_16792_17840[(2)] = inst_16731);

(statearr_16792_17840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (26))){
var inst_16750 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16793_17841 = state_16760__$1;
(statearr_16793_17841[(2)] = inst_16750);

(statearr_16793_17841[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (16))){
var inst_16742 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16742)){
var statearr_16794_17842 = state_16760__$1;
(statearr_16794_17842[(1)] = (20));

} else {
var statearr_16795_17843 = state_16760__$1;
(statearr_16795_17843[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (10))){
var inst_16756 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16796_17844 = state_16760__$1;
(statearr_16796_17844[(2)] = inst_16756);

(statearr_16796_17844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (18))){
var inst_16734 = (state_16760[(16)]);
var state_16760__$1 = state_16760;
var statearr_16797_17845 = state_16760__$1;
(statearr_16797_17845[(2)] = inst_16734);

(statearr_16797_17845[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (8))){
var inst_16713 = (state_16760[(7)]);
var inst_16722 = (inst_16713 == null);
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16722)){
var statearr_16798_17846 = state_16760__$1;
(statearr_16798_17846[(1)] = (11));

} else {
var statearr_16799_17847 = state_16760__$1;
(statearr_16799_17847[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__15870__auto__ = null;
var cljs$core$async$mix_$_state_machine__15870__auto____0 = (function (){
var statearr_16800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16800[(0)] = cljs$core$async$mix_$_state_machine__15870__auto__);

(statearr_16800[(1)] = (1));

return statearr_16800;
});
var cljs$core$async$mix_$_state_machine__15870__auto____1 = (function (state_16760){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16760);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16801){var ex__15873__auto__ = e16801;
var statearr_16802_17848 = state_16760;
(statearr_16802_17848[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16760[(4)]))){
var statearr_16803_17849 = state_16760;
(statearr_16803_17849[(1)] = cljs.core.first((state_16760[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17850 = state_16760;
state_16760 = G__17850;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15870__auto__ = function(state_16760){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15870__auto____1.call(this,state_16760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15870__auto____0;
cljs$core$async$mix_$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15870__auto____1;
return cljs$core$async$mix_$_state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16804 = f__15902__auto__();
(statearr_16804[(6)] = c__15901__auto___17805);

return statearr_16804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_17851 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17851(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17852 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17852(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17853 = (function() {
var G__17854 = null;
var G__17854__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17854__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17854 = function(p,v){
switch(arguments.length){
case 1:
return G__17854__1.call(this,p);
case 2:
return G__17854__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17854.cljs$core$IFn$_invoke$arity$1 = G__17854__1;
G__17854.cljs$core$IFn$_invoke$arity$2 = G__17854__2;
return G__17854;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16806 = arguments.length;
switch (G__16806) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17853(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17853(p,v);
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
var G__16809 = arguments.length;
switch (G__16809) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16807_SHARP_){
if(cljs.core.truth_((p1__16807_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16807_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16807_SHARP_.call(null,topic)))){
return p1__16807_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16807_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16810 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16811){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16811 = meta16811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16812,meta16811__$1){
var self__ = this;
var _16812__$1 = this;
return (new cljs.core.async.t_cljs$core$async16810(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16811__$1));
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16812){
var self__ = this;
var _16812__$1 = this;
return self__.meta16811;
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16811","meta16811",539107572,null)], null);
}));

(cljs.core.async.t_cljs$core$async16810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16810");

(cljs.core.async.t_cljs$core$async16810.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16810.
 */
cljs.core.async.__GT_t_cljs$core$async16810 = (function cljs$core$async$__GT_t_cljs$core$async16810(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16811){
return (new cljs.core.async.t_cljs$core$async16810(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16811));
});

}

return (new cljs.core.async.t_cljs$core$async16810(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15901__auto___17862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16884){
var state_val_16885 = (state_16884[(1)]);
if((state_val_16885 === (7))){
var inst_16880 = (state_16884[(2)]);
var state_16884__$1 = state_16884;
var statearr_16886_17864 = state_16884__$1;
(statearr_16886_17864[(2)] = inst_16880);

(statearr_16886_17864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (20))){
var state_16884__$1 = state_16884;
var statearr_16887_17865 = state_16884__$1;
(statearr_16887_17865[(2)] = null);

(statearr_16887_17865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (1))){
var state_16884__$1 = state_16884;
var statearr_16888_17867 = state_16884__$1;
(statearr_16888_17867[(2)] = null);

(statearr_16888_17867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (24))){
var inst_16863 = (state_16884[(7)]);
var inst_16872 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16863);
var state_16884__$1 = state_16884;
var statearr_16889_17868 = state_16884__$1;
(statearr_16889_17868[(2)] = inst_16872);

(statearr_16889_17868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (4))){
var inst_16815 = (state_16884[(8)]);
var inst_16815__$1 = (state_16884[(2)]);
var inst_16816 = (inst_16815__$1 == null);
var state_16884__$1 = (function (){var statearr_16890 = state_16884;
(statearr_16890[(8)] = inst_16815__$1);

return statearr_16890;
})();
if(cljs.core.truth_(inst_16816)){
var statearr_16891_17869 = state_16884__$1;
(statearr_16891_17869[(1)] = (5));

} else {
var statearr_16892_17870 = state_16884__$1;
(statearr_16892_17870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (15))){
var inst_16857 = (state_16884[(2)]);
var state_16884__$1 = state_16884;
var statearr_16893_17871 = state_16884__$1;
(statearr_16893_17871[(2)] = inst_16857);

(statearr_16893_17871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (21))){
var inst_16877 = (state_16884[(2)]);
var state_16884__$1 = (function (){var statearr_16894 = state_16884;
(statearr_16894[(9)] = inst_16877);

return statearr_16894;
})();
var statearr_16895_17872 = state_16884__$1;
(statearr_16895_17872[(2)] = null);

(statearr_16895_17872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (13))){
var inst_16839 = (state_16884[(10)]);
var inst_16841 = cljs.core.chunked_seq_QMARK_(inst_16839);
var state_16884__$1 = state_16884;
if(inst_16841){
var statearr_16896_17874 = state_16884__$1;
(statearr_16896_17874[(1)] = (16));

} else {
var statearr_16897_17875 = state_16884__$1;
(statearr_16897_17875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (22))){
var inst_16869 = (state_16884[(2)]);
var state_16884__$1 = state_16884;
if(cljs.core.truth_(inst_16869)){
var statearr_16898_17876 = state_16884__$1;
(statearr_16898_17876[(1)] = (23));

} else {
var statearr_16899_17877 = state_16884__$1;
(statearr_16899_17877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (6))){
var inst_16865 = (state_16884[(11)]);
var inst_16863 = (state_16884[(7)]);
var inst_16815 = (state_16884[(8)]);
var inst_16863__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16815) : topic_fn.call(null,inst_16815));
var inst_16864 = cljs.core.deref(mults);
var inst_16865__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16864,inst_16863__$1);
var state_16884__$1 = (function (){var statearr_16900 = state_16884;
(statearr_16900[(11)] = inst_16865__$1);

(statearr_16900[(7)] = inst_16863__$1);

return statearr_16900;
})();
if(cljs.core.truth_(inst_16865__$1)){
var statearr_16901_17879 = state_16884__$1;
(statearr_16901_17879[(1)] = (19));

} else {
var statearr_16902_17880 = state_16884__$1;
(statearr_16902_17880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (25))){
var inst_16874 = (state_16884[(2)]);
var state_16884__$1 = state_16884;
var statearr_16903_17881 = state_16884__$1;
(statearr_16903_17881[(2)] = inst_16874);

(statearr_16903_17881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (17))){
var inst_16839 = (state_16884[(10)]);
var inst_16848 = cljs.core.first(inst_16839);
var inst_16849 = cljs.core.async.muxch_STAR_(inst_16848);
var inst_16850 = cljs.core.async.close_BANG_(inst_16849);
var inst_16851 = cljs.core.next(inst_16839);
var inst_16825 = inst_16851;
var inst_16826 = null;
var inst_16827 = (0);
var inst_16828 = (0);
var state_16884__$1 = (function (){var statearr_16904 = state_16884;
(statearr_16904[(12)] = inst_16828);

(statearr_16904[(13)] = inst_16850);

(statearr_16904[(14)] = inst_16825);

(statearr_16904[(15)] = inst_16826);

(statearr_16904[(16)] = inst_16827);

return statearr_16904;
})();
var statearr_16905_17882 = state_16884__$1;
(statearr_16905_17882[(2)] = null);

(statearr_16905_17882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (3))){
var inst_16882 = (state_16884[(2)]);
var state_16884__$1 = state_16884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16884__$1,inst_16882);
} else {
if((state_val_16885 === (12))){
var inst_16859 = (state_16884[(2)]);
var state_16884__$1 = state_16884;
var statearr_16906_17883 = state_16884__$1;
(statearr_16906_17883[(2)] = inst_16859);

(statearr_16906_17883[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (2))){
var state_16884__$1 = state_16884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16884__$1,(4),ch);
} else {
if((state_val_16885 === (23))){
var state_16884__$1 = state_16884;
var statearr_16907_17884 = state_16884__$1;
(statearr_16907_17884[(2)] = null);

(statearr_16907_17884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (19))){
var inst_16865 = (state_16884[(11)]);
var inst_16815 = (state_16884[(8)]);
var inst_16867 = cljs.core.async.muxch_STAR_(inst_16865);
var state_16884__$1 = state_16884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16884__$1,(22),inst_16867,inst_16815);
} else {
if((state_val_16885 === (11))){
var inst_16839 = (state_16884[(10)]);
var inst_16825 = (state_16884[(14)]);
var inst_16839__$1 = cljs.core.seq(inst_16825);
var state_16884__$1 = (function (){var statearr_16908 = state_16884;
(statearr_16908[(10)] = inst_16839__$1);

return statearr_16908;
})();
if(inst_16839__$1){
var statearr_16909_17885 = state_16884__$1;
(statearr_16909_17885[(1)] = (13));

} else {
var statearr_16910_17886 = state_16884__$1;
(statearr_16910_17886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (9))){
var inst_16861 = (state_16884[(2)]);
var state_16884__$1 = state_16884;
var statearr_16911_17887 = state_16884__$1;
(statearr_16911_17887[(2)] = inst_16861);

(statearr_16911_17887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (5))){
var inst_16822 = cljs.core.deref(mults);
var inst_16823 = cljs.core.vals(inst_16822);
var inst_16824 = cljs.core.seq(inst_16823);
var inst_16825 = inst_16824;
var inst_16826 = null;
var inst_16827 = (0);
var inst_16828 = (0);
var state_16884__$1 = (function (){var statearr_16912 = state_16884;
(statearr_16912[(12)] = inst_16828);

(statearr_16912[(14)] = inst_16825);

(statearr_16912[(15)] = inst_16826);

(statearr_16912[(16)] = inst_16827);

return statearr_16912;
})();
var statearr_16913_17888 = state_16884__$1;
(statearr_16913_17888[(2)] = null);

(statearr_16913_17888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (14))){
var state_16884__$1 = state_16884;
var statearr_16917_17890 = state_16884__$1;
(statearr_16917_17890[(2)] = null);

(statearr_16917_17890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (16))){
var inst_16839 = (state_16884[(10)]);
var inst_16843 = cljs.core.chunk_first(inst_16839);
var inst_16844 = cljs.core.chunk_rest(inst_16839);
var inst_16845 = cljs.core.count(inst_16843);
var inst_16825 = inst_16844;
var inst_16826 = inst_16843;
var inst_16827 = inst_16845;
var inst_16828 = (0);
var state_16884__$1 = (function (){var statearr_16918 = state_16884;
(statearr_16918[(12)] = inst_16828);

(statearr_16918[(14)] = inst_16825);

(statearr_16918[(15)] = inst_16826);

(statearr_16918[(16)] = inst_16827);

return statearr_16918;
})();
var statearr_16919_17892 = state_16884__$1;
(statearr_16919_17892[(2)] = null);

(statearr_16919_17892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (10))){
var inst_16828 = (state_16884[(12)]);
var inst_16825 = (state_16884[(14)]);
var inst_16826 = (state_16884[(15)]);
var inst_16827 = (state_16884[(16)]);
var inst_16833 = cljs.core._nth(inst_16826,inst_16828);
var inst_16834 = cljs.core.async.muxch_STAR_(inst_16833);
var inst_16835 = cljs.core.async.close_BANG_(inst_16834);
var inst_16836 = (inst_16828 + (1));
var tmp16914 = inst_16825;
var tmp16915 = inst_16826;
var tmp16916 = inst_16827;
var inst_16825__$1 = tmp16914;
var inst_16826__$1 = tmp16915;
var inst_16827__$1 = tmp16916;
var inst_16828__$1 = inst_16836;
var state_16884__$1 = (function (){var statearr_16920 = state_16884;
(statearr_16920[(12)] = inst_16828__$1);

(statearr_16920[(17)] = inst_16835);

(statearr_16920[(14)] = inst_16825__$1);

(statearr_16920[(15)] = inst_16826__$1);

(statearr_16920[(16)] = inst_16827__$1);

return statearr_16920;
})();
var statearr_16921_17893 = state_16884__$1;
(statearr_16921_17893[(2)] = null);

(statearr_16921_17893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (18))){
var inst_16854 = (state_16884[(2)]);
var state_16884__$1 = state_16884;
var statearr_16922_17894 = state_16884__$1;
(statearr_16922_17894[(2)] = inst_16854);

(statearr_16922_17894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16885 === (8))){
var inst_16828 = (state_16884[(12)]);
var inst_16827 = (state_16884[(16)]);
var inst_16830 = (inst_16828 < inst_16827);
var inst_16831 = inst_16830;
var state_16884__$1 = state_16884;
if(cljs.core.truth_(inst_16831)){
var statearr_16923_17895 = state_16884__$1;
(statearr_16923_17895[(1)] = (10));

} else {
var statearr_16924_17896 = state_16884__$1;
(statearr_16924_17896[(1)] = (11));

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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_16925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16925[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_16925[(1)] = (1));

return statearr_16925;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_16884){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16884);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e16926){var ex__15873__auto__ = e16926;
var statearr_16927_17897 = state_16884;
(statearr_16927_17897[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16884[(4)]))){
var statearr_16928_17898 = state_16884;
(statearr_16928_17898[(1)] = cljs.core.first((state_16884[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17899 = state_16884;
state_16884 = G__17899;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_16884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_16884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_16929 = f__15902__auto__();
(statearr_16929[(6)] = c__15901__auto___17862);

return statearr_16929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
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
var G__16931 = arguments.length;
switch (G__16931) {
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
var G__16933 = arguments.length;
switch (G__16933) {
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
var G__16935 = arguments.length;
switch (G__16935) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15901__auto___17904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_16978){
var state_val_16979 = (state_16978[(1)]);
if((state_val_16979 === (7))){
var state_16978__$1 = state_16978;
var statearr_16980_17905 = state_16978__$1;
(statearr_16980_17905[(2)] = null);

(statearr_16980_17905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (1))){
var state_16978__$1 = state_16978;
var statearr_16981_17906 = state_16978__$1;
(statearr_16981_17906[(2)] = null);

(statearr_16981_17906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (4))){
var inst_16938 = (state_16978[(7)]);
var inst_16939 = (state_16978[(8)]);
var inst_16941 = (inst_16939 < inst_16938);
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16941)){
var statearr_16982_17907 = state_16978__$1;
(statearr_16982_17907[(1)] = (6));

} else {
var statearr_16983_17908 = state_16978__$1;
(statearr_16983_17908[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (15))){
var inst_16964 = (state_16978[(9)]);
var inst_16969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16964);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16978__$1,(17),out,inst_16969);
} else {
if((state_val_16979 === (13))){
var inst_16964 = (state_16978[(9)]);
var inst_16964__$1 = (state_16978[(2)]);
var inst_16965 = cljs.core.some(cljs.core.nil_QMARK_,inst_16964__$1);
var state_16978__$1 = (function (){var statearr_16984 = state_16978;
(statearr_16984[(9)] = inst_16964__$1);

return statearr_16984;
})();
if(cljs.core.truth_(inst_16965)){
var statearr_16985_17913 = state_16978__$1;
(statearr_16985_17913[(1)] = (14));

} else {
var statearr_16986_17914 = state_16978__$1;
(statearr_16986_17914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (6))){
var state_16978__$1 = state_16978;
var statearr_16987_17915 = state_16978__$1;
(statearr_16987_17915[(2)] = null);

(statearr_16987_17915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (17))){
var inst_16971 = (state_16978[(2)]);
var state_16978__$1 = (function (){var statearr_16989 = state_16978;
(statearr_16989[(10)] = inst_16971);

return statearr_16989;
})();
var statearr_16990_17916 = state_16978__$1;
(statearr_16990_17916[(2)] = null);

(statearr_16990_17916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (3))){
var inst_16976 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16978__$1,inst_16976);
} else {
if((state_val_16979 === (12))){
var _ = (function (){var statearr_16991 = state_16978;
(statearr_16991[(4)] = cljs.core.rest((state_16978[(4)])));

return statearr_16991;
})();
var state_16978__$1 = state_16978;
var ex16988 = (state_16978__$1[(2)]);
var statearr_16992_17917 = state_16978__$1;
(statearr_16992_17917[(5)] = ex16988);


if((ex16988 instanceof Object)){
var statearr_16993_17918 = state_16978__$1;
(statearr_16993_17918[(1)] = (11));

(statearr_16993_17918[(5)] = null);

} else {
throw ex16988;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (2))){
var inst_16937 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16938 = cnt;
var inst_16939 = (0);
var state_16978__$1 = (function (){var statearr_16994 = state_16978;
(statearr_16994[(7)] = inst_16938);

(statearr_16994[(11)] = inst_16937);

(statearr_16994[(8)] = inst_16939);

return statearr_16994;
})();
var statearr_16995_17919 = state_16978__$1;
(statearr_16995_17919[(2)] = null);

(statearr_16995_17919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (11))){
var inst_16943 = (state_16978[(2)]);
var inst_16944 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16978__$1 = (function (){var statearr_16996 = state_16978;
(statearr_16996[(12)] = inst_16943);

return statearr_16996;
})();
var statearr_16997_17920 = state_16978__$1;
(statearr_16997_17920[(2)] = inst_16944);

(statearr_16997_17920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (9))){
var inst_16939 = (state_16978[(8)]);
var _ = (function (){var statearr_16998 = state_16978;
(statearr_16998[(4)] = cljs.core.cons((12),(state_16978[(4)])));

return statearr_16998;
})();
var inst_16950 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16939) : chs__$1.call(null,inst_16939));
var inst_16951 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16939) : done.call(null,inst_16939));
var inst_16952 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16950,inst_16951);
var ___$1 = (function (){var statearr_16999 = state_16978;
(statearr_16999[(4)] = cljs.core.rest((state_16978[(4)])));

return statearr_16999;
})();
var state_16978__$1 = state_16978;
var statearr_17000_17921 = state_16978__$1;
(statearr_17000_17921[(2)] = inst_16952);

(statearr_17000_17921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (5))){
var inst_16962 = (state_16978[(2)]);
var state_16978__$1 = (function (){var statearr_17001 = state_16978;
(statearr_17001[(13)] = inst_16962);

return statearr_17001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16978__$1,(13),dchan);
} else {
if((state_val_16979 === (14))){
var inst_16967 = cljs.core.async.close_BANG_(out);
var state_16978__$1 = state_16978;
var statearr_17002_17926 = state_16978__$1;
(statearr_17002_17926[(2)] = inst_16967);

(statearr_17002_17926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (16))){
var inst_16974 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17003_17930 = state_16978__$1;
(statearr_17003_17930[(2)] = inst_16974);

(statearr_17003_17930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (10))){
var inst_16939 = (state_16978[(8)]);
var inst_16955 = (state_16978[(2)]);
var inst_16956 = (inst_16939 + (1));
var inst_16939__$1 = inst_16956;
var state_16978__$1 = (function (){var statearr_17004 = state_16978;
(statearr_17004[(14)] = inst_16955);

(statearr_17004[(8)] = inst_16939__$1);

return statearr_17004;
})();
var statearr_17005_17931 = state_16978__$1;
(statearr_17005_17931[(2)] = null);

(statearr_17005_17931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (8))){
var inst_16960 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17006_17932 = state_16978__$1;
(statearr_17006_17932[(2)] = inst_16960);

(statearr_17006_17932[(1)] = (5));


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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_17007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17007[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_17007[(1)] = (1));

return statearr_17007;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_16978){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_16978);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e17008){var ex__15873__auto__ = e17008;
var statearr_17009_17933 = state_16978;
(statearr_17009_17933[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_16978[(4)]))){
var statearr_17010_17934 = state_16978;
(statearr_17010_17934[(1)] = cljs.core.first((state_16978[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17938 = state_16978;
state_16978 = G__17938;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_16978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_16978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_17011 = f__15902__auto__();
(statearr_17011[(6)] = c__15901__auto___17904);

return statearr_17011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));

}

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
var G__17014 = arguments.length;
switch (G__17014) {
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
var c__15901__auto___17943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_17046){
var state_val_17047 = (state_17046[(1)]);
if((state_val_17047 === (7))){
var inst_17026 = (state_17046[(7)]);
var inst_17025 = (state_17046[(8)]);
var inst_17025__$1 = (state_17046[(2)]);
var inst_17026__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17025__$1,(0),null);
var inst_17027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17025__$1,(1),null);
var inst_17028 = (inst_17026__$1 == null);
var state_17046__$1 = (function (){var statearr_17048 = state_17046;
(statearr_17048[(7)] = inst_17026__$1);

(statearr_17048[(9)] = inst_17027);

(statearr_17048[(8)] = inst_17025__$1);

return statearr_17048;
})();
if(cljs.core.truth_(inst_17028)){
var statearr_17049_17944 = state_17046__$1;
(statearr_17049_17944[(1)] = (8));

} else {
var statearr_17050_17945 = state_17046__$1;
(statearr_17050_17945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (1))){
var inst_17015 = cljs.core.vec(chs);
var inst_17016 = inst_17015;
var state_17046__$1 = (function (){var statearr_17051 = state_17046;
(statearr_17051[(10)] = inst_17016);

return statearr_17051;
})();
var statearr_17052_17949 = state_17046__$1;
(statearr_17052_17949[(2)] = null);

(statearr_17052_17949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (4))){
var inst_17016 = (state_17046[(10)]);
var state_17046__$1 = state_17046;
return cljs.core.async.ioc_alts_BANG_(state_17046__$1,(7),inst_17016);
} else {
if((state_val_17047 === (6))){
var inst_17042 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
var statearr_17053_17950 = state_17046__$1;
(statearr_17053_17950[(2)] = inst_17042);

(statearr_17053_17950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (3))){
var inst_17044 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17046__$1,inst_17044);
} else {
if((state_val_17047 === (2))){
var inst_17016 = (state_17046[(10)]);
var inst_17018 = cljs.core.count(inst_17016);
var inst_17019 = (inst_17018 > (0));
var state_17046__$1 = state_17046;
if(cljs.core.truth_(inst_17019)){
var statearr_17055_17955 = state_17046__$1;
(statearr_17055_17955[(1)] = (4));

} else {
var statearr_17056_17956 = state_17046__$1;
(statearr_17056_17956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (11))){
var inst_17016 = (state_17046[(10)]);
var inst_17035 = (state_17046[(2)]);
var tmp17054 = inst_17016;
var inst_17016__$1 = tmp17054;
var state_17046__$1 = (function (){var statearr_17057 = state_17046;
(statearr_17057[(10)] = inst_17016__$1);

(statearr_17057[(11)] = inst_17035);

return statearr_17057;
})();
var statearr_17058_17957 = state_17046__$1;
(statearr_17058_17957[(2)] = null);

(statearr_17058_17957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (9))){
var inst_17026 = (state_17046[(7)]);
var state_17046__$1 = state_17046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17046__$1,(11),out,inst_17026);
} else {
if((state_val_17047 === (5))){
var inst_17040 = cljs.core.async.close_BANG_(out);
var state_17046__$1 = state_17046;
var statearr_17059_17958 = state_17046__$1;
(statearr_17059_17958[(2)] = inst_17040);

(statearr_17059_17958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (10))){
var inst_17038 = (state_17046[(2)]);
var state_17046__$1 = state_17046;
var statearr_17060_17959 = state_17046__$1;
(statearr_17060_17959[(2)] = inst_17038);

(statearr_17060_17959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17047 === (8))){
var inst_17026 = (state_17046[(7)]);
var inst_17016 = (state_17046[(10)]);
var inst_17027 = (state_17046[(9)]);
var inst_17025 = (state_17046[(8)]);
var inst_17030 = (function (){var cs = inst_17016;
var vec__17021 = inst_17025;
var v = inst_17026;
var c = inst_17027;
return (function (p1__17012_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17012_SHARP_);
});
})();
var inst_17031 = cljs.core.filterv(inst_17030,inst_17016);
var inst_17016__$1 = inst_17031;
var state_17046__$1 = (function (){var statearr_17061 = state_17046;
(statearr_17061[(10)] = inst_17016__$1);

return statearr_17061;
})();
var statearr_17062_17960 = state_17046__$1;
(statearr_17062_17960[(2)] = null);

(statearr_17062_17960[(1)] = (2));


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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_17063 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17063[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_17063[(1)] = (1));

return statearr_17063;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_17046){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_17046);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e17064){var ex__15873__auto__ = e17064;
var statearr_17065_17962 = state_17046;
(statearr_17065_17962[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_17046[(4)]))){
var statearr_17066_17964 = state_17046;
(statearr_17066_17964[(1)] = cljs.core.first((state_17046[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17965 = state_17046;
state_17046 = G__17965;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_17046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_17046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_17067 = f__15902__auto__();
(statearr_17067[(6)] = c__15901__auto___17943);

return statearr_17067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
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
var G__17069 = arguments.length;
switch (G__17069) {
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
var c__15901__auto___17967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_17093){
var state_val_17094 = (state_17093[(1)]);
if((state_val_17094 === (7))){
var inst_17075 = (state_17093[(7)]);
var inst_17075__$1 = (state_17093[(2)]);
var inst_17076 = (inst_17075__$1 == null);
var inst_17077 = cljs.core.not(inst_17076);
var state_17093__$1 = (function (){var statearr_17095 = state_17093;
(statearr_17095[(7)] = inst_17075__$1);

return statearr_17095;
})();
if(inst_17077){
var statearr_17096_17968 = state_17093__$1;
(statearr_17096_17968[(1)] = (8));

} else {
var statearr_17097_17969 = state_17093__$1;
(statearr_17097_17969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (1))){
var inst_17070 = (0);
var state_17093__$1 = (function (){var statearr_17098 = state_17093;
(statearr_17098[(8)] = inst_17070);

return statearr_17098;
})();
var statearr_17099_17970 = state_17093__$1;
(statearr_17099_17970[(2)] = null);

(statearr_17099_17970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (4))){
var state_17093__$1 = state_17093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17093__$1,(7),ch);
} else {
if((state_val_17094 === (6))){
var inst_17088 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
var statearr_17100_17971 = state_17093__$1;
(statearr_17100_17971[(2)] = inst_17088);

(statearr_17100_17971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (3))){
var inst_17090 = (state_17093[(2)]);
var inst_17091 = cljs.core.async.close_BANG_(out);
var state_17093__$1 = (function (){var statearr_17101 = state_17093;
(statearr_17101[(9)] = inst_17090);

return statearr_17101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17093__$1,inst_17091);
} else {
if((state_val_17094 === (2))){
var inst_17070 = (state_17093[(8)]);
var inst_17072 = (inst_17070 < n);
var state_17093__$1 = state_17093;
if(cljs.core.truth_(inst_17072)){
var statearr_17102_17972 = state_17093__$1;
(statearr_17102_17972[(1)] = (4));

} else {
var statearr_17103_17973 = state_17093__$1;
(statearr_17103_17973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (11))){
var inst_17070 = (state_17093[(8)]);
var inst_17080 = (state_17093[(2)]);
var inst_17081 = (inst_17070 + (1));
var inst_17070__$1 = inst_17081;
var state_17093__$1 = (function (){var statearr_17104 = state_17093;
(statearr_17104[(10)] = inst_17080);

(statearr_17104[(8)] = inst_17070__$1);

return statearr_17104;
})();
var statearr_17105_17974 = state_17093__$1;
(statearr_17105_17974[(2)] = null);

(statearr_17105_17974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (9))){
var state_17093__$1 = state_17093;
var statearr_17106_17975 = state_17093__$1;
(statearr_17106_17975[(2)] = null);

(statearr_17106_17975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (5))){
var state_17093__$1 = state_17093;
var statearr_17107_17976 = state_17093__$1;
(statearr_17107_17976[(2)] = null);

(statearr_17107_17976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (10))){
var inst_17085 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
var statearr_17108_17977 = state_17093__$1;
(statearr_17108_17977[(2)] = inst_17085);

(statearr_17108_17977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (8))){
var inst_17075 = (state_17093[(7)]);
var state_17093__$1 = state_17093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17093__$1,(11),out,inst_17075);
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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_17109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17109[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_17109[(1)] = (1));

return statearr_17109;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_17093){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_17093);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e17110){var ex__15873__auto__ = e17110;
var statearr_17111_17978 = state_17093;
(statearr_17111_17978[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_17093[(4)]))){
var statearr_17112_17983 = state_17093;
(statearr_17112_17983[(1)] = cljs.core.first((state_17093[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17984 = state_17093;
state_17093 = G__17984;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_17093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_17093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_17113 = f__15902__auto__();
(statearr_17113[(6)] = c__15901__auto___17967);

return statearr_17113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17115 = (function (f,ch,meta17116){
this.f = f;
this.ch = ch;
this.meta17116 = meta17116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17117,meta17116__$1){
var self__ = this;
var _17117__$1 = this;
return (new cljs.core.async.t_cljs$core$async17115(self__.f,self__.ch,meta17116__$1));
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17117){
var self__ = this;
var _17117__$1 = this;
return self__.meta17116;
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17118 = (function (f,ch,meta17116,_,fn1,meta17119){
this.f = f;
this.ch = ch;
this.meta17116 = meta17116;
this._ = _;
this.fn1 = fn1;
this.meta17119 = meta17119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17120,meta17119__$1){
var self__ = this;
var _17120__$1 = this;
return (new cljs.core.async.t_cljs$core$async17118(self__.f,self__.ch,self__.meta17116,self__._,self__.fn1,meta17119__$1));
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17120){
var self__ = this;
var _17120__$1 = this;
return self__.meta17119;
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17114_SHARP_){
var G__17121 = (((p1__17114_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17114_SHARP_) : self__.f.call(null,p1__17114_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17121) : f1.call(null,G__17121));
});
}));

(cljs.core.async.t_cljs$core$async17118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17116","meta17116",53331489,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17115","cljs.core.async/t_cljs$core$async17115",513939489,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17119","meta17119",-954644996,null)], null);
}));

(cljs.core.async.t_cljs$core$async17118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17118");

(cljs.core.async.t_cljs$core$async17118.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17118.
 */
cljs.core.async.__GT_t_cljs$core$async17118 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17118(f__$1,ch__$1,meta17116__$1,___$2,fn1__$1,meta17119){
return (new cljs.core.async.t_cljs$core$async17118(f__$1,ch__$1,meta17116__$1,___$2,fn1__$1,meta17119));
});

}

return (new cljs.core.async.t_cljs$core$async17118(self__.f,self__.ch,self__.meta17116,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17122 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17122) : self__.f.call(null,G__17122));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17116","meta17116",53331489,null)], null);
}));

(cljs.core.async.t_cljs$core$async17115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17115");

(cljs.core.async.t_cljs$core$async17115.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17115.
 */
cljs.core.async.__GT_t_cljs$core$async17115 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17115(f__$1,ch__$1,meta17116){
return (new cljs.core.async.t_cljs$core$async17115(f__$1,ch__$1,meta17116));
});

}

return (new cljs.core.async.t_cljs$core$async17115(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17123 = (function (f,ch,meta17124){
this.f = f;
this.ch = ch;
this.meta17124 = meta17124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17125,meta17124__$1){
var self__ = this;
var _17125__$1 = this;
return (new cljs.core.async.t_cljs$core$async17123(self__.f,self__.ch,meta17124__$1));
}));

(cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17125){
var self__ = this;
var _17125__$1 = this;
return self__.meta17124;
}));

(cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17124","meta17124",-1486207638,null)], null);
}));

(cljs.core.async.t_cljs$core$async17123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17123");

(cljs.core.async.t_cljs$core$async17123.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17123.
 */
cljs.core.async.__GT_t_cljs$core$async17123 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17123(f__$1,ch__$1,meta17124){
return (new cljs.core.async.t_cljs$core$async17123(f__$1,ch__$1,meta17124));
});

}

return (new cljs.core.async.t_cljs$core$async17123(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17126 = (function (p,ch,meta17127){
this.p = p;
this.ch = ch;
this.meta17127 = meta17127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17128,meta17127__$1){
var self__ = this;
var _17128__$1 = this;
return (new cljs.core.async.t_cljs$core$async17126(self__.p,self__.ch,meta17127__$1));
}));

(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17128){
var self__ = this;
var _17128__$1 = this;
return self__.meta17127;
}));

(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17127","meta17127",1727240236,null)], null);
}));

(cljs.core.async.t_cljs$core$async17126.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17126");

(cljs.core.async.t_cljs$core$async17126.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17126");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17126.
 */
cljs.core.async.__GT_t_cljs$core$async17126 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17126(p__$1,ch__$1,meta17127){
return (new cljs.core.async.t_cljs$core$async17126(p__$1,ch__$1,meta17127));
});

}

return (new cljs.core.async.t_cljs$core$async17126(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17130 = arguments.length;
switch (G__17130) {
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
var c__15901__auto___17996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_17151){
var state_val_17152 = (state_17151[(1)]);
if((state_val_17152 === (7))){
var inst_17147 = (state_17151[(2)]);
var state_17151__$1 = state_17151;
var statearr_17153_17997 = state_17151__$1;
(statearr_17153_17997[(2)] = inst_17147);

(statearr_17153_17997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (1))){
var state_17151__$1 = state_17151;
var statearr_17154_17998 = state_17151__$1;
(statearr_17154_17998[(2)] = null);

(statearr_17154_17998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (4))){
var inst_17133 = (state_17151[(7)]);
var inst_17133__$1 = (state_17151[(2)]);
var inst_17134 = (inst_17133__$1 == null);
var state_17151__$1 = (function (){var statearr_17155 = state_17151;
(statearr_17155[(7)] = inst_17133__$1);

return statearr_17155;
})();
if(cljs.core.truth_(inst_17134)){
var statearr_17156_17999 = state_17151__$1;
(statearr_17156_17999[(1)] = (5));

} else {
var statearr_17157_18000 = state_17151__$1;
(statearr_17157_18000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (6))){
var inst_17133 = (state_17151[(7)]);
var inst_17138 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17133) : p.call(null,inst_17133));
var state_17151__$1 = state_17151;
if(cljs.core.truth_(inst_17138)){
var statearr_17158_18001 = state_17151__$1;
(statearr_17158_18001[(1)] = (8));

} else {
var statearr_17159_18002 = state_17151__$1;
(statearr_17159_18002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (3))){
var inst_17149 = (state_17151[(2)]);
var state_17151__$1 = state_17151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17151__$1,inst_17149);
} else {
if((state_val_17152 === (2))){
var state_17151__$1 = state_17151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17151__$1,(4),ch);
} else {
if((state_val_17152 === (11))){
var inst_17141 = (state_17151[(2)]);
var state_17151__$1 = state_17151;
var statearr_17160_18003 = state_17151__$1;
(statearr_17160_18003[(2)] = inst_17141);

(statearr_17160_18003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (9))){
var state_17151__$1 = state_17151;
var statearr_17161_18004 = state_17151__$1;
(statearr_17161_18004[(2)] = null);

(statearr_17161_18004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (5))){
var inst_17136 = cljs.core.async.close_BANG_(out);
var state_17151__$1 = state_17151;
var statearr_17162_18005 = state_17151__$1;
(statearr_17162_18005[(2)] = inst_17136);

(statearr_17162_18005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (10))){
var inst_17144 = (state_17151[(2)]);
var state_17151__$1 = (function (){var statearr_17163 = state_17151;
(statearr_17163[(8)] = inst_17144);

return statearr_17163;
})();
var statearr_17164_18006 = state_17151__$1;
(statearr_17164_18006[(2)] = null);

(statearr_17164_18006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17152 === (8))){
var inst_17133 = (state_17151[(7)]);
var state_17151__$1 = state_17151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17151__$1,(11),out,inst_17133);
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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_17165 = [null,null,null,null,null,null,null,null,null];
(statearr_17165[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_17165[(1)] = (1));

return statearr_17165;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_17151){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_17151);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e17166){var ex__15873__auto__ = e17166;
var statearr_17167_18007 = state_17151;
(statearr_17167_18007[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_17151[(4)]))){
var statearr_17168_18008 = state_17151;
(statearr_17168_18008[(1)] = cljs.core.first((state_17151[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18009 = state_17151;
state_17151 = G__18009;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_17151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_17151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_17169 = f__15902__auto__();
(statearr_17169[(6)] = c__15901__auto___17996);

return statearr_17169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17171 = arguments.length;
switch (G__17171) {
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
var c__15901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_17233){
var state_val_17234 = (state_17233[(1)]);
if((state_val_17234 === (7))){
var inst_17229 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17235_18015 = state_17233__$1;
(statearr_17235_18015[(2)] = inst_17229);

(statearr_17235_18015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (20))){
var inst_17199 = (state_17233[(7)]);
var inst_17210 = (state_17233[(2)]);
var inst_17211 = cljs.core.next(inst_17199);
var inst_17185 = inst_17211;
var inst_17186 = null;
var inst_17187 = (0);
var inst_17188 = (0);
var state_17233__$1 = (function (){var statearr_17236 = state_17233;
(statearr_17236[(8)] = inst_17187);

(statearr_17236[(9)] = inst_17185);

(statearr_17236[(10)] = inst_17186);

(statearr_17236[(11)] = inst_17210);

(statearr_17236[(12)] = inst_17188);

return statearr_17236;
})();
var statearr_17237_18016 = state_17233__$1;
(statearr_17237_18016[(2)] = null);

(statearr_17237_18016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (1))){
var state_17233__$1 = state_17233;
var statearr_17238_18017 = state_17233__$1;
(statearr_17238_18017[(2)] = null);

(statearr_17238_18017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (4))){
var inst_17174 = (state_17233[(13)]);
var inst_17174__$1 = (state_17233[(2)]);
var inst_17175 = (inst_17174__$1 == null);
var state_17233__$1 = (function (){var statearr_17239 = state_17233;
(statearr_17239[(13)] = inst_17174__$1);

return statearr_17239;
})();
if(cljs.core.truth_(inst_17175)){
var statearr_17240_18018 = state_17233__$1;
(statearr_17240_18018[(1)] = (5));

} else {
var statearr_17241_18019 = state_17233__$1;
(statearr_17241_18019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (15))){
var state_17233__$1 = state_17233;
var statearr_17245_18020 = state_17233__$1;
(statearr_17245_18020[(2)] = null);

(statearr_17245_18020[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (21))){
var state_17233__$1 = state_17233;
var statearr_17246_18021 = state_17233__$1;
(statearr_17246_18021[(2)] = null);

(statearr_17246_18021[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (13))){
var inst_17187 = (state_17233[(8)]);
var inst_17185 = (state_17233[(9)]);
var inst_17186 = (state_17233[(10)]);
var inst_17188 = (state_17233[(12)]);
var inst_17195 = (state_17233[(2)]);
var inst_17196 = (inst_17188 + (1));
var tmp17242 = inst_17187;
var tmp17243 = inst_17185;
var tmp17244 = inst_17186;
var inst_17185__$1 = tmp17243;
var inst_17186__$1 = tmp17244;
var inst_17187__$1 = tmp17242;
var inst_17188__$1 = inst_17196;
var state_17233__$1 = (function (){var statearr_17247 = state_17233;
(statearr_17247[(8)] = inst_17187__$1);

(statearr_17247[(9)] = inst_17185__$1);

(statearr_17247[(14)] = inst_17195);

(statearr_17247[(10)] = inst_17186__$1);

(statearr_17247[(12)] = inst_17188__$1);

return statearr_17247;
})();
var statearr_17248_18022 = state_17233__$1;
(statearr_17248_18022[(2)] = null);

(statearr_17248_18022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (22))){
var state_17233__$1 = state_17233;
var statearr_17249_18023 = state_17233__$1;
(statearr_17249_18023[(2)] = null);

(statearr_17249_18023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (6))){
var inst_17174 = (state_17233[(13)]);
var inst_17183 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17174) : f.call(null,inst_17174));
var inst_17184 = cljs.core.seq(inst_17183);
var inst_17185 = inst_17184;
var inst_17186 = null;
var inst_17187 = (0);
var inst_17188 = (0);
var state_17233__$1 = (function (){var statearr_17250 = state_17233;
(statearr_17250[(8)] = inst_17187);

(statearr_17250[(9)] = inst_17185);

(statearr_17250[(10)] = inst_17186);

(statearr_17250[(12)] = inst_17188);

return statearr_17250;
})();
var statearr_17251_18024 = state_17233__$1;
(statearr_17251_18024[(2)] = null);

(statearr_17251_18024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (17))){
var inst_17199 = (state_17233[(7)]);
var inst_17203 = cljs.core.chunk_first(inst_17199);
var inst_17204 = cljs.core.chunk_rest(inst_17199);
var inst_17205 = cljs.core.count(inst_17203);
var inst_17185 = inst_17204;
var inst_17186 = inst_17203;
var inst_17187 = inst_17205;
var inst_17188 = (0);
var state_17233__$1 = (function (){var statearr_17252 = state_17233;
(statearr_17252[(8)] = inst_17187);

(statearr_17252[(9)] = inst_17185);

(statearr_17252[(10)] = inst_17186);

(statearr_17252[(12)] = inst_17188);

return statearr_17252;
})();
var statearr_17253_18026 = state_17233__$1;
(statearr_17253_18026[(2)] = null);

(statearr_17253_18026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (3))){
var inst_17231 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17233__$1,inst_17231);
} else {
if((state_val_17234 === (12))){
var inst_17219 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17254_18027 = state_17233__$1;
(statearr_17254_18027[(2)] = inst_17219);

(statearr_17254_18027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (2))){
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17233__$1,(4),in$);
} else {
if((state_val_17234 === (23))){
var inst_17227 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17255_18028 = state_17233__$1;
(statearr_17255_18028[(2)] = inst_17227);

(statearr_17255_18028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (19))){
var inst_17214 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17256_18029 = state_17233__$1;
(statearr_17256_18029[(2)] = inst_17214);

(statearr_17256_18029[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (11))){
var inst_17185 = (state_17233[(9)]);
var inst_17199 = (state_17233[(7)]);
var inst_17199__$1 = cljs.core.seq(inst_17185);
var state_17233__$1 = (function (){var statearr_17257 = state_17233;
(statearr_17257[(7)] = inst_17199__$1);

return statearr_17257;
})();
if(inst_17199__$1){
var statearr_17258_18030 = state_17233__$1;
(statearr_17258_18030[(1)] = (14));

} else {
var statearr_17259_18031 = state_17233__$1;
(statearr_17259_18031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (9))){
var inst_17221 = (state_17233[(2)]);
var inst_17222 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17233__$1 = (function (){var statearr_17260 = state_17233;
(statearr_17260[(15)] = inst_17221);

return statearr_17260;
})();
if(cljs.core.truth_(inst_17222)){
var statearr_17261_18032 = state_17233__$1;
(statearr_17261_18032[(1)] = (21));

} else {
var statearr_17262_18033 = state_17233__$1;
(statearr_17262_18033[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (5))){
var inst_17177 = cljs.core.async.close_BANG_(out);
var state_17233__$1 = state_17233;
var statearr_17263_18034 = state_17233__$1;
(statearr_17263_18034[(2)] = inst_17177);

(statearr_17263_18034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (14))){
var inst_17199 = (state_17233[(7)]);
var inst_17201 = cljs.core.chunked_seq_QMARK_(inst_17199);
var state_17233__$1 = state_17233;
if(inst_17201){
var statearr_17264_18035 = state_17233__$1;
(statearr_17264_18035[(1)] = (17));

} else {
var statearr_17265_18036 = state_17233__$1;
(statearr_17265_18036[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (16))){
var inst_17217 = (state_17233[(2)]);
var state_17233__$1 = state_17233;
var statearr_17266_18037 = state_17233__$1;
(statearr_17266_18037[(2)] = inst_17217);

(statearr_17266_18037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17234 === (10))){
var inst_17186 = (state_17233[(10)]);
var inst_17188 = (state_17233[(12)]);
var inst_17193 = cljs.core._nth(inst_17186,inst_17188);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17233__$1,(13),out,inst_17193);
} else {
if((state_val_17234 === (18))){
var inst_17199 = (state_17233[(7)]);
var inst_17208 = cljs.core.first(inst_17199);
var state_17233__$1 = state_17233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17233__$1,(20),out,inst_17208);
} else {
if((state_val_17234 === (8))){
var inst_17187 = (state_17233[(8)]);
var inst_17188 = (state_17233[(12)]);
var inst_17190 = (inst_17188 < inst_17187);
var inst_17191 = inst_17190;
var state_17233__$1 = state_17233;
if(cljs.core.truth_(inst_17191)){
var statearr_17267_18043 = state_17233__$1;
(statearr_17267_18043[(1)] = (10));

} else {
var statearr_17268_18044 = state_17233__$1;
(statearr_17268_18044[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__15870__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15870__auto____0 = (function (){
var statearr_17269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17269[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15870__auto__);

(statearr_17269[(1)] = (1));

return statearr_17269;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15870__auto____1 = (function (state_17233){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_17233);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e17270){var ex__15873__auto__ = e17270;
var statearr_17271_18045 = state_17233;
(statearr_17271_18045[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_17233[(4)]))){
var statearr_17272_18046 = state_17233;
(statearr_17272_18046[(1)] = cljs.core.first((state_17233[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18047 = state_17233;
state_17233 = G__18047;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15870__auto__ = function(state_17233){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15870__auto____1.call(this,state_17233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15870__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15870__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_17273 = f__15902__auto__();
(statearr_17273[(6)] = c__15901__auto__);

return statearr_17273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));

return c__15901__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17275 = arguments.length;
switch (G__17275) {
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
var G__17277 = arguments.length;
switch (G__17277) {
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
var G__17279 = arguments.length;
switch (G__17279) {
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
var c__15901__auto___18056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_17303){
var state_val_17304 = (state_17303[(1)]);
if((state_val_17304 === (7))){
var inst_17298 = (state_17303[(2)]);
var state_17303__$1 = state_17303;
var statearr_17305_18057 = state_17303__$1;
(statearr_17305_18057[(2)] = inst_17298);

(statearr_17305_18057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17304 === (1))){
var inst_17280 = null;
var state_17303__$1 = (function (){var statearr_17306 = state_17303;
(statearr_17306[(7)] = inst_17280);

return statearr_17306;
})();
var statearr_17307_18058 = state_17303__$1;
(statearr_17307_18058[(2)] = null);

(statearr_17307_18058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17304 === (4))){
var inst_17283 = (state_17303[(8)]);
var inst_17283__$1 = (state_17303[(2)]);
var inst_17284 = (inst_17283__$1 == null);
var inst_17285 = cljs.core.not(inst_17284);
var state_17303__$1 = (function (){var statearr_17308 = state_17303;
(statearr_17308[(8)] = inst_17283__$1);

return statearr_17308;
})();
if(inst_17285){
var statearr_17309_18059 = state_17303__$1;
(statearr_17309_18059[(1)] = (5));

} else {
var statearr_17310_18060 = state_17303__$1;
(statearr_17310_18060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17304 === (6))){
var state_17303__$1 = state_17303;
var statearr_17311_18061 = state_17303__$1;
(statearr_17311_18061[(2)] = null);

(statearr_17311_18061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17304 === (3))){
var inst_17300 = (state_17303[(2)]);
var inst_17301 = cljs.core.async.close_BANG_(out);
var state_17303__$1 = (function (){var statearr_17312 = state_17303;
(statearr_17312[(9)] = inst_17300);

return statearr_17312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17303__$1,inst_17301);
} else {
if((state_val_17304 === (2))){
var state_17303__$1 = state_17303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17303__$1,(4),ch);
} else {
if((state_val_17304 === (11))){
var inst_17283 = (state_17303[(8)]);
var inst_17292 = (state_17303[(2)]);
var inst_17280 = inst_17283;
var state_17303__$1 = (function (){var statearr_17313 = state_17303;
(statearr_17313[(7)] = inst_17280);

(statearr_17313[(10)] = inst_17292);

return statearr_17313;
})();
var statearr_17314_18062 = state_17303__$1;
(statearr_17314_18062[(2)] = null);

(statearr_17314_18062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17304 === (9))){
var inst_17283 = (state_17303[(8)]);
var state_17303__$1 = state_17303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17303__$1,(11),out,inst_17283);
} else {
if((state_val_17304 === (5))){
var inst_17280 = (state_17303[(7)]);
var inst_17283 = (state_17303[(8)]);
var inst_17287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17283,inst_17280);
var state_17303__$1 = state_17303;
if(inst_17287){
var statearr_17316_18063 = state_17303__$1;
(statearr_17316_18063[(1)] = (8));

} else {
var statearr_17317_18064 = state_17303__$1;
(statearr_17317_18064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17304 === (10))){
var inst_17295 = (state_17303[(2)]);
var state_17303__$1 = state_17303;
var statearr_17318_18065 = state_17303__$1;
(statearr_17318_18065[(2)] = inst_17295);

(statearr_17318_18065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17304 === (8))){
var inst_17280 = (state_17303[(7)]);
var tmp17315 = inst_17280;
var inst_17280__$1 = tmp17315;
var state_17303__$1 = (function (){var statearr_17319 = state_17303;
(statearr_17319[(7)] = inst_17280__$1);

return statearr_17319;
})();
var statearr_17320_18066 = state_17303__$1;
(statearr_17320_18066[(2)] = null);

(statearr_17320_18066[(1)] = (2));


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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_17321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17321[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_17321[(1)] = (1));

return statearr_17321;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_17303){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_17303);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e17322){var ex__15873__auto__ = e17322;
var statearr_17323_18067 = state_17303;
(statearr_17323_18067[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_17303[(4)]))){
var statearr_17324_18068 = state_17303;
(statearr_17324_18068[(1)] = cljs.core.first((state_17303[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18069 = state_17303;
state_17303 = G__18069;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_17303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_17303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_17325 = f__15902__auto__();
(statearr_17325[(6)] = c__15901__auto___18056);

return statearr_17325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17327 = arguments.length;
switch (G__17327) {
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
var c__15901__auto___18071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_17365){
var state_val_17366 = (state_17365[(1)]);
if((state_val_17366 === (7))){
var inst_17361 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
var statearr_17367_18072 = state_17365__$1;
(statearr_17367_18072[(2)] = inst_17361);

(statearr_17367_18072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (1))){
var inst_17328 = (new Array(n));
var inst_17329 = inst_17328;
var inst_17330 = (0);
var state_17365__$1 = (function (){var statearr_17368 = state_17365;
(statearr_17368[(7)] = inst_17329);

(statearr_17368[(8)] = inst_17330);

return statearr_17368;
})();
var statearr_17369_18073 = state_17365__$1;
(statearr_17369_18073[(2)] = null);

(statearr_17369_18073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (4))){
var inst_17333 = (state_17365[(9)]);
var inst_17333__$1 = (state_17365[(2)]);
var inst_17334 = (inst_17333__$1 == null);
var inst_17335 = cljs.core.not(inst_17334);
var state_17365__$1 = (function (){var statearr_17370 = state_17365;
(statearr_17370[(9)] = inst_17333__$1);

return statearr_17370;
})();
if(inst_17335){
var statearr_17371_18075 = state_17365__$1;
(statearr_17371_18075[(1)] = (5));

} else {
var statearr_17372_18076 = state_17365__$1;
(statearr_17372_18076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (15))){
var inst_17355 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
var statearr_17373_18077 = state_17365__$1;
(statearr_17373_18077[(2)] = inst_17355);

(statearr_17373_18077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (13))){
var state_17365__$1 = state_17365;
var statearr_17374_18078 = state_17365__$1;
(statearr_17374_18078[(2)] = null);

(statearr_17374_18078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (6))){
var inst_17330 = (state_17365[(8)]);
var inst_17351 = (inst_17330 > (0));
var state_17365__$1 = state_17365;
if(cljs.core.truth_(inst_17351)){
var statearr_17375_18082 = state_17365__$1;
(statearr_17375_18082[(1)] = (12));

} else {
var statearr_17376_18083 = state_17365__$1;
(statearr_17376_18083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (3))){
var inst_17363 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17365__$1,inst_17363);
} else {
if((state_val_17366 === (12))){
var inst_17329 = (state_17365[(7)]);
var inst_17353 = cljs.core.vec(inst_17329);
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17365__$1,(15),out,inst_17353);
} else {
if((state_val_17366 === (2))){
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17365__$1,(4),ch);
} else {
if((state_val_17366 === (11))){
var inst_17345 = (state_17365[(2)]);
var inst_17346 = (new Array(n));
var inst_17329 = inst_17346;
var inst_17330 = (0);
var state_17365__$1 = (function (){var statearr_17377 = state_17365;
(statearr_17377[(7)] = inst_17329);

(statearr_17377[(10)] = inst_17345);

(statearr_17377[(8)] = inst_17330);

return statearr_17377;
})();
var statearr_17378_18084 = state_17365__$1;
(statearr_17378_18084[(2)] = null);

(statearr_17378_18084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (9))){
var inst_17329 = (state_17365[(7)]);
var inst_17343 = cljs.core.vec(inst_17329);
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17365__$1,(11),out,inst_17343);
} else {
if((state_val_17366 === (5))){
var inst_17329 = (state_17365[(7)]);
var inst_17338 = (state_17365[(11)]);
var inst_17333 = (state_17365[(9)]);
var inst_17330 = (state_17365[(8)]);
var inst_17337 = (inst_17329[inst_17330] = inst_17333);
var inst_17338__$1 = (inst_17330 + (1));
var inst_17339 = (inst_17338__$1 < n);
var state_17365__$1 = (function (){var statearr_17379 = state_17365;
(statearr_17379[(11)] = inst_17338__$1);

(statearr_17379[(12)] = inst_17337);

return statearr_17379;
})();
if(cljs.core.truth_(inst_17339)){
var statearr_17380_18085 = state_17365__$1;
(statearr_17380_18085[(1)] = (8));

} else {
var statearr_17381_18086 = state_17365__$1;
(statearr_17381_18086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (14))){
var inst_17358 = (state_17365[(2)]);
var inst_17359 = cljs.core.async.close_BANG_(out);
var state_17365__$1 = (function (){var statearr_17383 = state_17365;
(statearr_17383[(13)] = inst_17358);

return statearr_17383;
})();
var statearr_17384_18087 = state_17365__$1;
(statearr_17384_18087[(2)] = inst_17359);

(statearr_17384_18087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (10))){
var inst_17349 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
var statearr_17385_18088 = state_17365__$1;
(statearr_17385_18088[(2)] = inst_17349);

(statearr_17385_18088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (8))){
var inst_17329 = (state_17365[(7)]);
var inst_17338 = (state_17365[(11)]);
var tmp17382 = inst_17329;
var inst_17329__$1 = tmp17382;
var inst_17330 = inst_17338;
var state_17365__$1 = (function (){var statearr_17386 = state_17365;
(statearr_17386[(7)] = inst_17329__$1);

(statearr_17386[(8)] = inst_17330);

return statearr_17386;
})();
var statearr_17387_18089 = state_17365__$1;
(statearr_17387_18089[(2)] = null);

(statearr_17387_18089[(1)] = (2));


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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_17388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17388[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_17388[(1)] = (1));

return statearr_17388;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_17365){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_17365);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e17389){var ex__15873__auto__ = e17389;
var statearr_17390_18090 = state_17365;
(statearr_17390_18090[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_17365[(4)]))){
var statearr_17391_18091 = state_17365;
(statearr_17391_18091[(1)] = cljs.core.first((state_17365[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18092 = state_17365;
state_17365 = G__18092;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_17365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_17365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_17392 = f__15902__auto__();
(statearr_17392[(6)] = c__15901__auto___18071);

return statearr_17392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17394 = arguments.length;
switch (G__17394) {
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
var c__15901__auto___18095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_17439){
var state_val_17440 = (state_17439[(1)]);
if((state_val_17440 === (7))){
var inst_17435 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
var statearr_17441_18096 = state_17439__$1;
(statearr_17441_18096[(2)] = inst_17435);

(statearr_17441_18096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (1))){
var inst_17395 = [];
var inst_17396 = inst_17395;
var inst_17397 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17439__$1 = (function (){var statearr_17442 = state_17439;
(statearr_17442[(7)] = inst_17397);

(statearr_17442[(8)] = inst_17396);

return statearr_17442;
})();
var statearr_17443_18097 = state_17439__$1;
(statearr_17443_18097[(2)] = null);

(statearr_17443_18097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (4))){
var inst_17400 = (state_17439[(9)]);
var inst_17400__$1 = (state_17439[(2)]);
var inst_17401 = (inst_17400__$1 == null);
var inst_17402 = cljs.core.not(inst_17401);
var state_17439__$1 = (function (){var statearr_17444 = state_17439;
(statearr_17444[(9)] = inst_17400__$1);

return statearr_17444;
})();
if(inst_17402){
var statearr_17445_18098 = state_17439__$1;
(statearr_17445_18098[(1)] = (5));

} else {
var statearr_17446_18099 = state_17439__$1;
(statearr_17446_18099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (15))){
var inst_17396 = (state_17439[(8)]);
var inst_17427 = cljs.core.vec(inst_17396);
var state_17439__$1 = state_17439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17439__$1,(18),out,inst_17427);
} else {
if((state_val_17440 === (13))){
var inst_17422 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
var statearr_17447_18100 = state_17439__$1;
(statearr_17447_18100[(2)] = inst_17422);

(statearr_17447_18100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (6))){
var inst_17396 = (state_17439[(8)]);
var inst_17424 = inst_17396.length;
var inst_17425 = (inst_17424 > (0));
var state_17439__$1 = state_17439;
if(cljs.core.truth_(inst_17425)){
var statearr_17448_18101 = state_17439__$1;
(statearr_17448_18101[(1)] = (15));

} else {
var statearr_17449_18102 = state_17439__$1;
(statearr_17449_18102[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (17))){
var inst_17432 = (state_17439[(2)]);
var inst_17433 = cljs.core.async.close_BANG_(out);
var state_17439__$1 = (function (){var statearr_17450 = state_17439;
(statearr_17450[(10)] = inst_17432);

return statearr_17450;
})();
var statearr_17451_18103 = state_17439__$1;
(statearr_17451_18103[(2)] = inst_17433);

(statearr_17451_18103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (3))){
var inst_17437 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17439__$1,inst_17437);
} else {
if((state_val_17440 === (12))){
var inst_17396 = (state_17439[(8)]);
var inst_17415 = cljs.core.vec(inst_17396);
var state_17439__$1 = state_17439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17439__$1,(14),out,inst_17415);
} else {
if((state_val_17440 === (2))){
var state_17439__$1 = state_17439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17439__$1,(4),ch);
} else {
if((state_val_17440 === (11))){
var inst_17404 = (state_17439[(11)]);
var inst_17400 = (state_17439[(9)]);
var inst_17396 = (state_17439[(8)]);
var inst_17412 = inst_17396.push(inst_17400);
var tmp17452 = inst_17396;
var inst_17396__$1 = tmp17452;
var inst_17397 = inst_17404;
var state_17439__$1 = (function (){var statearr_17453 = state_17439;
(statearr_17453[(7)] = inst_17397);

(statearr_17453[(12)] = inst_17412);

(statearr_17453[(8)] = inst_17396__$1);

return statearr_17453;
})();
var statearr_17454_18104 = state_17439__$1;
(statearr_17454_18104[(2)] = null);

(statearr_17454_18104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (9))){
var inst_17397 = (state_17439[(7)]);
var inst_17408 = cljs.core.keyword_identical_QMARK_(inst_17397,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17439__$1 = state_17439;
var statearr_17455_18105 = state_17439__$1;
(statearr_17455_18105[(2)] = inst_17408);

(statearr_17455_18105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (5))){
var inst_17397 = (state_17439[(7)]);
var inst_17404 = (state_17439[(11)]);
var inst_17400 = (state_17439[(9)]);
var inst_17405 = (state_17439[(13)]);
var inst_17404__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17400) : f.call(null,inst_17400));
var inst_17405__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17404__$1,inst_17397);
var state_17439__$1 = (function (){var statearr_17456 = state_17439;
(statearr_17456[(11)] = inst_17404__$1);

(statearr_17456[(13)] = inst_17405__$1);

return statearr_17456;
})();
if(inst_17405__$1){
var statearr_17457_18106 = state_17439__$1;
(statearr_17457_18106[(1)] = (8));

} else {
var statearr_17458_18107 = state_17439__$1;
(statearr_17458_18107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (14))){
var inst_17404 = (state_17439[(11)]);
var inst_17400 = (state_17439[(9)]);
var inst_17417 = (state_17439[(2)]);
var inst_17418 = [];
var inst_17419 = inst_17418.push(inst_17400);
var inst_17396 = inst_17418;
var inst_17397 = inst_17404;
var state_17439__$1 = (function (){var statearr_17459 = state_17439;
(statearr_17459[(7)] = inst_17397);

(statearr_17459[(14)] = inst_17417);

(statearr_17459[(15)] = inst_17419);

(statearr_17459[(8)] = inst_17396);

return statearr_17459;
})();
var statearr_17460_18108 = state_17439__$1;
(statearr_17460_18108[(2)] = null);

(statearr_17460_18108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (16))){
var state_17439__$1 = state_17439;
var statearr_17461_18109 = state_17439__$1;
(statearr_17461_18109[(2)] = null);

(statearr_17461_18109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (10))){
var inst_17410 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
if(cljs.core.truth_(inst_17410)){
var statearr_17462_18110 = state_17439__$1;
(statearr_17462_18110[(1)] = (11));

} else {
var statearr_17463_18111 = state_17439__$1;
(statearr_17463_18111[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (18))){
var inst_17429 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
var statearr_17464_18113 = state_17439__$1;
(statearr_17464_18113[(2)] = inst_17429);

(statearr_17464_18113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (8))){
var inst_17405 = (state_17439[(13)]);
var state_17439__$1 = state_17439;
var statearr_17465_18117 = state_17439__$1;
(statearr_17465_18117[(2)] = inst_17405);

(statearr_17465_18117[(1)] = (10));


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
var cljs$core$async$state_machine__15870__auto__ = null;
var cljs$core$async$state_machine__15870__auto____0 = (function (){
var statearr_17466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17466[(0)] = cljs$core$async$state_machine__15870__auto__);

(statearr_17466[(1)] = (1));

return statearr_17466;
});
var cljs$core$async$state_machine__15870__auto____1 = (function (state_17439){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_17439);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e17467){var ex__15873__auto__ = e17467;
var statearr_17468_18118 = state_17439;
(statearr_17468_18118[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_17439[(4)]))){
var statearr_17469_18123 = state_17439;
(statearr_17469_18123[(1)] = cljs.core.first((state_17439[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18124 = state_17439;
state_17439 = G__18124;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
cljs$core$async$state_machine__15870__auto__ = function(state_17439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15870__auto____1.call(this,state_17439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15870__auto____0;
cljs$core$async$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15870__auto____1;
return cljs$core$async$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_17470 = f__15902__auto__();
(statearr_17470[(6)] = c__15901__auto___18095);

return statearr_17470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
