goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18196 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18196(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18197 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18197(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17548 = coll;
var G__17549 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17548,G__17549) : shadow.dom.lazy_native_coll_seq.call(null,G__17548,G__17549));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17575 = arguments.length;
switch (G__17575) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17585 = arguments.length;
switch (G__17585) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17590 = arguments.length;
switch (G__17590) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17597 = arguments.length;
switch (G__17597) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17609 = arguments.length;
switch (G__17609) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17620 = arguments.length;
switch (G__17620) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17630){if((e17630 instanceof Object)){
var e = e17630;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17630;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17635 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17636 = null;
var count__17637 = (0);
var i__17638 = (0);
while(true){
if((i__17638 < count__17637)){
var el = chunk__17636.cljs$core$IIndexed$_nth$arity$2(null,i__17638);
var handler_18204__$1 = ((function (seq__17635,chunk__17636,count__17637,i__17638,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17635,chunk__17636,count__17637,i__17638,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18204__$1);


var G__18205 = seq__17635;
var G__18206 = chunk__17636;
var G__18207 = count__17637;
var G__18208 = (i__17638 + (1));
seq__17635 = G__18205;
chunk__17636 = G__18206;
count__17637 = G__18207;
i__17638 = G__18208;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17635);
if(temp__5804__auto__){
var seq__17635__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17635__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17635__$1);
var G__18209 = cljs.core.chunk_rest(seq__17635__$1);
var G__18210 = c__5568__auto__;
var G__18211 = cljs.core.count(c__5568__auto__);
var G__18212 = (0);
seq__17635 = G__18209;
chunk__17636 = G__18210;
count__17637 = G__18211;
i__17638 = G__18212;
continue;
} else {
var el = cljs.core.first(seq__17635__$1);
var handler_18213__$1 = ((function (seq__17635,chunk__17636,count__17637,i__17638,el,seq__17635__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17635,chunk__17636,count__17637,i__17638,el,seq__17635__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18213__$1);


var G__18214 = cljs.core.next(seq__17635__$1);
var G__18215 = null;
var G__18216 = (0);
var G__18217 = (0);
seq__17635 = G__18214;
chunk__17636 = G__18215;
count__17637 = G__18216;
i__17638 = G__18217;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17658 = arguments.length;
switch (G__17658) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17665 = cljs.core.seq(events);
var chunk__17666 = null;
var count__17667 = (0);
var i__17668 = (0);
while(true){
if((i__17668 < count__17667)){
var vec__17677 = chunk__17666.cljs$core$IIndexed$_nth$arity$2(null,i__17668);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17677,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17677,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18219 = seq__17665;
var G__18220 = chunk__17666;
var G__18221 = count__17667;
var G__18222 = (i__17668 + (1));
seq__17665 = G__18219;
chunk__17666 = G__18220;
count__17667 = G__18221;
i__17668 = G__18222;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17665);
if(temp__5804__auto__){
var seq__17665__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17665__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17665__$1);
var G__18223 = cljs.core.chunk_rest(seq__17665__$1);
var G__18224 = c__5568__auto__;
var G__18225 = cljs.core.count(c__5568__auto__);
var G__18226 = (0);
seq__17665 = G__18223;
chunk__17666 = G__18224;
count__17667 = G__18225;
i__17668 = G__18226;
continue;
} else {
var vec__17680 = cljs.core.first(seq__17665__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17680,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17680,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18227 = cljs.core.next(seq__17665__$1);
var G__18228 = null;
var G__18229 = (0);
var G__18230 = (0);
seq__17665 = G__18227;
chunk__17666 = G__18228;
count__17667 = G__18229;
i__17668 = G__18230;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17685 = cljs.core.seq(styles);
var chunk__17686 = null;
var count__17687 = (0);
var i__17688 = (0);
while(true){
if((i__17688 < count__17687)){
var vec__17702 = chunk__17686.cljs$core$IIndexed$_nth$arity$2(null,i__17688);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17702,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17702,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18231 = seq__17685;
var G__18232 = chunk__17686;
var G__18233 = count__17687;
var G__18234 = (i__17688 + (1));
seq__17685 = G__18231;
chunk__17686 = G__18232;
count__17687 = G__18233;
i__17688 = G__18234;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17685);
if(temp__5804__auto__){
var seq__17685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17685__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17685__$1);
var G__18235 = cljs.core.chunk_rest(seq__17685__$1);
var G__18236 = c__5568__auto__;
var G__18237 = cljs.core.count(c__5568__auto__);
var G__18238 = (0);
seq__17685 = G__18235;
chunk__17686 = G__18236;
count__17687 = G__18237;
i__17688 = G__18238;
continue;
} else {
var vec__17707 = cljs.core.first(seq__17685__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17707,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17707,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18239 = cljs.core.next(seq__17685__$1);
var G__18240 = null;
var G__18241 = (0);
var G__18242 = (0);
seq__17685 = G__18239;
chunk__17686 = G__18240;
count__17687 = G__18241;
i__17688 = G__18242;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17715_18243 = key;
var G__17715_18244__$1 = (((G__17715_18243 instanceof cljs.core.Keyword))?G__17715_18243.fqn:null);
switch (G__17715_18244__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18246 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18246,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18246,"aria-");
}
})())){
el.setAttribute(ks_18246,value);
} else {
(el[ks_18246] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17739){
var map__17741 = p__17739;
var map__17741__$1 = cljs.core.__destructure_map(map__17741);
var props = map__17741__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17741__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17743 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17743,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17743,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17743,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17756 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17756,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17756;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17758 = arguments.length;
switch (G__17758) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17765){
var vec__17766 = p__17765;
var seq__17767 = cljs.core.seq(vec__17766);
var first__17768 = cljs.core.first(seq__17767);
var seq__17767__$1 = cljs.core.next(seq__17767);
var nn = first__17768;
var first__17768__$1 = cljs.core.first(seq__17767__$1);
var seq__17767__$2 = cljs.core.next(seq__17767__$1);
var np = first__17768__$1;
var nc = seq__17767__$2;
var node = vec__17766;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17771 = nn;
var G__17772 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17771,G__17772) : create_fn.call(null,G__17771,G__17772));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17773 = nn;
var G__17774 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17773,G__17774) : create_fn.call(null,G__17773,G__17774));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17776 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17776,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17776,(1),null);
var seq__17780_18248 = cljs.core.seq(node_children);
var chunk__17781_18249 = null;
var count__17782_18250 = (0);
var i__17783_18251 = (0);
while(true){
if((i__17783_18251 < count__17782_18250)){
var child_struct_18252 = chunk__17781_18249.cljs$core$IIndexed$_nth$arity$2(null,i__17783_18251);
var children_18253 = shadow.dom.dom_node(child_struct_18252);
if(cljs.core.seq_QMARK_(children_18253)){
var seq__17808_18254 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18253));
var chunk__17810_18255 = null;
var count__17811_18256 = (0);
var i__17812_18257 = (0);
while(true){
if((i__17812_18257 < count__17811_18256)){
var child_18258 = chunk__17810_18255.cljs$core$IIndexed$_nth$arity$2(null,i__17812_18257);
if(cljs.core.truth_(child_18258)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18258);


var G__18259 = seq__17808_18254;
var G__18260 = chunk__17810_18255;
var G__18261 = count__17811_18256;
var G__18262 = (i__17812_18257 + (1));
seq__17808_18254 = G__18259;
chunk__17810_18255 = G__18260;
count__17811_18256 = G__18261;
i__17812_18257 = G__18262;
continue;
} else {
var G__18263 = seq__17808_18254;
var G__18264 = chunk__17810_18255;
var G__18265 = count__17811_18256;
var G__18266 = (i__17812_18257 + (1));
seq__17808_18254 = G__18263;
chunk__17810_18255 = G__18264;
count__17811_18256 = G__18265;
i__17812_18257 = G__18266;
continue;
}
} else {
var temp__5804__auto___18267 = cljs.core.seq(seq__17808_18254);
if(temp__5804__auto___18267){
var seq__17808_18268__$1 = temp__5804__auto___18267;
if(cljs.core.chunked_seq_QMARK_(seq__17808_18268__$1)){
var c__5568__auto___18269 = cljs.core.chunk_first(seq__17808_18268__$1);
var G__18270 = cljs.core.chunk_rest(seq__17808_18268__$1);
var G__18271 = c__5568__auto___18269;
var G__18272 = cljs.core.count(c__5568__auto___18269);
var G__18273 = (0);
seq__17808_18254 = G__18270;
chunk__17810_18255 = G__18271;
count__17811_18256 = G__18272;
i__17812_18257 = G__18273;
continue;
} else {
var child_18274 = cljs.core.first(seq__17808_18268__$1);
if(cljs.core.truth_(child_18274)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18274);


var G__18275 = cljs.core.next(seq__17808_18268__$1);
var G__18276 = null;
var G__18277 = (0);
var G__18278 = (0);
seq__17808_18254 = G__18275;
chunk__17810_18255 = G__18276;
count__17811_18256 = G__18277;
i__17812_18257 = G__18278;
continue;
} else {
var G__18279 = cljs.core.next(seq__17808_18268__$1);
var G__18280 = null;
var G__18281 = (0);
var G__18282 = (0);
seq__17808_18254 = G__18279;
chunk__17810_18255 = G__18280;
count__17811_18256 = G__18281;
i__17812_18257 = G__18282;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18253);
}


var G__18283 = seq__17780_18248;
var G__18284 = chunk__17781_18249;
var G__18285 = count__17782_18250;
var G__18286 = (i__17783_18251 + (1));
seq__17780_18248 = G__18283;
chunk__17781_18249 = G__18284;
count__17782_18250 = G__18285;
i__17783_18251 = G__18286;
continue;
} else {
var temp__5804__auto___18287 = cljs.core.seq(seq__17780_18248);
if(temp__5804__auto___18287){
var seq__17780_18288__$1 = temp__5804__auto___18287;
if(cljs.core.chunked_seq_QMARK_(seq__17780_18288__$1)){
var c__5568__auto___18289 = cljs.core.chunk_first(seq__17780_18288__$1);
var G__18290 = cljs.core.chunk_rest(seq__17780_18288__$1);
var G__18291 = c__5568__auto___18289;
var G__18292 = cljs.core.count(c__5568__auto___18289);
var G__18293 = (0);
seq__17780_18248 = G__18290;
chunk__17781_18249 = G__18291;
count__17782_18250 = G__18292;
i__17783_18251 = G__18293;
continue;
} else {
var child_struct_18294 = cljs.core.first(seq__17780_18288__$1);
var children_18295 = shadow.dom.dom_node(child_struct_18294);
if(cljs.core.seq_QMARK_(children_18295)){
var seq__17827_18296 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18295));
var chunk__17829_18297 = null;
var count__17830_18298 = (0);
var i__17831_18299 = (0);
while(true){
if((i__17831_18299 < count__17830_18298)){
var child_18300 = chunk__17829_18297.cljs$core$IIndexed$_nth$arity$2(null,i__17831_18299);
if(cljs.core.truth_(child_18300)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18300);


var G__18301 = seq__17827_18296;
var G__18302 = chunk__17829_18297;
var G__18303 = count__17830_18298;
var G__18304 = (i__17831_18299 + (1));
seq__17827_18296 = G__18301;
chunk__17829_18297 = G__18302;
count__17830_18298 = G__18303;
i__17831_18299 = G__18304;
continue;
} else {
var G__18305 = seq__17827_18296;
var G__18306 = chunk__17829_18297;
var G__18307 = count__17830_18298;
var G__18308 = (i__17831_18299 + (1));
seq__17827_18296 = G__18305;
chunk__17829_18297 = G__18306;
count__17830_18298 = G__18307;
i__17831_18299 = G__18308;
continue;
}
} else {
var temp__5804__auto___18309__$1 = cljs.core.seq(seq__17827_18296);
if(temp__5804__auto___18309__$1){
var seq__17827_18310__$1 = temp__5804__auto___18309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17827_18310__$1)){
var c__5568__auto___18311 = cljs.core.chunk_first(seq__17827_18310__$1);
var G__18312 = cljs.core.chunk_rest(seq__17827_18310__$1);
var G__18313 = c__5568__auto___18311;
var G__18314 = cljs.core.count(c__5568__auto___18311);
var G__18315 = (0);
seq__17827_18296 = G__18312;
chunk__17829_18297 = G__18313;
count__17830_18298 = G__18314;
i__17831_18299 = G__18315;
continue;
} else {
var child_18316 = cljs.core.first(seq__17827_18310__$1);
if(cljs.core.truth_(child_18316)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18316);


var G__18317 = cljs.core.next(seq__17827_18310__$1);
var G__18318 = null;
var G__18319 = (0);
var G__18320 = (0);
seq__17827_18296 = G__18317;
chunk__17829_18297 = G__18318;
count__17830_18298 = G__18319;
i__17831_18299 = G__18320;
continue;
} else {
var G__18321 = cljs.core.next(seq__17827_18310__$1);
var G__18322 = null;
var G__18323 = (0);
var G__18324 = (0);
seq__17827_18296 = G__18321;
chunk__17829_18297 = G__18322;
count__17830_18298 = G__18323;
i__17831_18299 = G__18324;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18295);
}


var G__18325 = cljs.core.next(seq__17780_18288__$1);
var G__18326 = null;
var G__18327 = (0);
var G__18328 = (0);
seq__17780_18248 = G__18325;
chunk__17781_18249 = G__18326;
count__17782_18250 = G__18327;
i__17783_18251 = G__18328;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17857 = cljs.core.seq(node);
var chunk__17858 = null;
var count__17859 = (0);
var i__17860 = (0);
while(true){
if((i__17860 < count__17859)){
var n = chunk__17858.cljs$core$IIndexed$_nth$arity$2(null,i__17860);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18331 = seq__17857;
var G__18332 = chunk__17858;
var G__18333 = count__17859;
var G__18334 = (i__17860 + (1));
seq__17857 = G__18331;
chunk__17858 = G__18332;
count__17859 = G__18333;
i__17860 = G__18334;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17857);
if(temp__5804__auto__){
var seq__17857__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17857__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17857__$1);
var G__18335 = cljs.core.chunk_rest(seq__17857__$1);
var G__18336 = c__5568__auto__;
var G__18337 = cljs.core.count(c__5568__auto__);
var G__18338 = (0);
seq__17857 = G__18335;
chunk__17858 = G__18336;
count__17859 = G__18337;
i__17860 = G__18338;
continue;
} else {
var n = cljs.core.first(seq__17857__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18339 = cljs.core.next(seq__17857__$1);
var G__18340 = null;
var G__18341 = (0);
var G__18342 = (0);
seq__17857 = G__18339;
chunk__17858 = G__18340;
count__17859 = G__18341;
i__17860 = G__18342;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17866 = arguments.length;
switch (G__17866) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17878 = arguments.length;
switch (G__17878) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17891 = arguments.length;
switch (G__17891) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18346 = arguments.length;
var i__5770__auto___18347 = (0);
while(true){
if((i__5770__auto___18347 < len__5769__auto___18346)){
args__5775__auto__.push((arguments[i__5770__auto___18347]));

var G__18348 = (i__5770__auto___18347 + (1));
i__5770__auto___18347 = G__18348;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17909_18351 = cljs.core.seq(nodes);
var chunk__17910_18352 = null;
var count__17911_18353 = (0);
var i__17912_18354 = (0);
while(true){
if((i__17912_18354 < count__17911_18353)){
var node_18355 = chunk__17910_18352.cljs$core$IIndexed$_nth$arity$2(null,i__17912_18354);
fragment.appendChild(shadow.dom._to_dom(node_18355));


var G__18356 = seq__17909_18351;
var G__18357 = chunk__17910_18352;
var G__18358 = count__17911_18353;
var G__18359 = (i__17912_18354 + (1));
seq__17909_18351 = G__18356;
chunk__17910_18352 = G__18357;
count__17911_18353 = G__18358;
i__17912_18354 = G__18359;
continue;
} else {
var temp__5804__auto___18360 = cljs.core.seq(seq__17909_18351);
if(temp__5804__auto___18360){
var seq__17909_18361__$1 = temp__5804__auto___18360;
if(cljs.core.chunked_seq_QMARK_(seq__17909_18361__$1)){
var c__5568__auto___18362 = cljs.core.chunk_first(seq__17909_18361__$1);
var G__18363 = cljs.core.chunk_rest(seq__17909_18361__$1);
var G__18364 = c__5568__auto___18362;
var G__18365 = cljs.core.count(c__5568__auto___18362);
var G__18366 = (0);
seq__17909_18351 = G__18363;
chunk__17910_18352 = G__18364;
count__17911_18353 = G__18365;
i__17912_18354 = G__18366;
continue;
} else {
var node_18367 = cljs.core.first(seq__17909_18361__$1);
fragment.appendChild(shadow.dom._to_dom(node_18367));


var G__18369 = cljs.core.next(seq__17909_18361__$1);
var G__18370 = null;
var G__18371 = (0);
var G__18372 = (0);
seq__17909_18351 = G__18369;
chunk__17910_18352 = G__18370;
count__17911_18353 = G__18371;
i__17912_18354 = G__18372;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17903){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17903));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17922_18373 = cljs.core.seq(scripts);
var chunk__17923_18374 = null;
var count__17924_18375 = (0);
var i__17925_18376 = (0);
while(true){
if((i__17925_18376 < count__17924_18375)){
var vec__17940_18377 = chunk__17923_18374.cljs$core$IIndexed$_nth$arity$2(null,i__17925_18376);
var script_tag_18378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17940_18377,(0),null);
var script_body_18379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17940_18377,(1),null);
eval(script_body_18379);


var G__18380 = seq__17922_18373;
var G__18381 = chunk__17923_18374;
var G__18382 = count__17924_18375;
var G__18383 = (i__17925_18376 + (1));
seq__17922_18373 = G__18380;
chunk__17923_18374 = G__18381;
count__17924_18375 = G__18382;
i__17925_18376 = G__18383;
continue;
} else {
var temp__5804__auto___18387 = cljs.core.seq(seq__17922_18373);
if(temp__5804__auto___18387){
var seq__17922_18388__$1 = temp__5804__auto___18387;
if(cljs.core.chunked_seq_QMARK_(seq__17922_18388__$1)){
var c__5568__auto___18390 = cljs.core.chunk_first(seq__17922_18388__$1);
var G__18391 = cljs.core.chunk_rest(seq__17922_18388__$1);
var G__18392 = c__5568__auto___18390;
var G__18393 = cljs.core.count(c__5568__auto___18390);
var G__18394 = (0);
seq__17922_18373 = G__18391;
chunk__17923_18374 = G__18392;
count__17924_18375 = G__18393;
i__17925_18376 = G__18394;
continue;
} else {
var vec__17946_18395 = cljs.core.first(seq__17922_18388__$1);
var script_tag_18396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946_18395,(0),null);
var script_body_18397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17946_18395,(1),null);
eval(script_body_18397);


var G__18398 = cljs.core.next(seq__17922_18388__$1);
var G__18399 = null;
var G__18400 = (0);
var G__18401 = (0);
seq__17922_18373 = G__18398;
chunk__17923_18374 = G__18399;
count__17924_18375 = G__18400;
i__17925_18376 = G__18401;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17951){
var vec__17952 = p__17951;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17952,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17952,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17963 = arguments.length;
switch (G__17963) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17979 = cljs.core.seq(style_keys);
var chunk__17980 = null;
var count__17981 = (0);
var i__17982 = (0);
while(true){
if((i__17982 < count__17981)){
var it = chunk__17980.cljs$core$IIndexed$_nth$arity$2(null,i__17982);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18408 = seq__17979;
var G__18409 = chunk__17980;
var G__18410 = count__17981;
var G__18411 = (i__17982 + (1));
seq__17979 = G__18408;
chunk__17980 = G__18409;
count__17981 = G__18410;
i__17982 = G__18411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17979);
if(temp__5804__auto__){
var seq__17979__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17979__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17979__$1);
var G__18412 = cljs.core.chunk_rest(seq__17979__$1);
var G__18413 = c__5568__auto__;
var G__18414 = cljs.core.count(c__5568__auto__);
var G__18415 = (0);
seq__17979 = G__18412;
chunk__17980 = G__18413;
count__17981 = G__18414;
i__17982 = G__18415;
continue;
} else {
var it = cljs.core.first(seq__17979__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18416 = cljs.core.next(seq__17979__$1);
var G__18417 = null;
var G__18418 = (0);
var G__18419 = (0);
seq__17979 = G__18416;
chunk__17980 = G__18417;
count__17981 = G__18418;
i__17982 = G__18419;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17986,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17990 = k17986;
var G__17990__$1 = (((G__17990 instanceof cljs.core.Keyword))?G__17990.fqn:null);
switch (G__17990__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17986,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17991){
var vec__17992 = p__17991;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17992,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17992,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17985){
var self__ = this;
var G__17985__$1 = this;
return (new cljs.core.RecordIter((0),G__17985__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17987,other17988){
var self__ = this;
var this17987__$1 = this;
return (((!((other17988 == null)))) && ((((this17987__$1.constructor === other17988.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17987__$1.x,other17988.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17987__$1.y,other17988.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17987__$1.__extmap,other17988.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17986){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18010 = k17986;
var G__18010__$1 = (((G__18010 instanceof cljs.core.Keyword))?G__18010.fqn:null);
switch (G__18010__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17986);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17985){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18012 = cljs.core.keyword_identical_QMARK_;
var expr__18013 = k__5352__auto__;
if(cljs.core.truth_((pred__18012.cljs$core$IFn$_invoke$arity$2 ? pred__18012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18013) : pred__18012.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18013)))){
return (new shadow.dom.Coordinate(G__17985,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18012.cljs$core$IFn$_invoke$arity$2 ? pred__18012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18013) : pred__18012.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18013)))){
return (new shadow.dom.Coordinate(self__.x,G__17985,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17985),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17985){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17985,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17989){
var extmap__5385__auto__ = (function (){var G__18025 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17989,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17989)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18025);
} else {
return G__18025;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17989),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17989),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18039,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18048 = k18039;
var G__18048__$1 = (((G__18048 instanceof cljs.core.Keyword))?G__18048.fqn:null);
switch (G__18048__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18039,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18050){
var vec__18052 = p__18050;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18052,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18052,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18038){
var self__ = this;
var G__18038__$1 = this;
return (new cljs.core.RecordIter((0),G__18038__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18040,other18041){
var self__ = this;
var this18040__$1 = this;
return (((!((other18041 == null)))) && ((((this18040__$1.constructor === other18041.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18040__$1.w,other18041.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18040__$1.h,other18041.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18040__$1.__extmap,other18041.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18039){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18074 = k18039;
var G__18074__$1 = (((G__18074 instanceof cljs.core.Keyword))?G__18074.fqn:null);
switch (G__18074__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18039);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18038){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18079 = cljs.core.keyword_identical_QMARK_;
var expr__18080 = k__5352__auto__;
if(cljs.core.truth_((pred__18079.cljs$core$IFn$_invoke$arity$2 ? pred__18079.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18080) : pred__18079.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18080)))){
return (new shadow.dom.Size(G__18038,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18079.cljs$core$IFn$_invoke$arity$2 ? pred__18079.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18080) : pred__18079.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18080)))){
return (new shadow.dom.Size(self__.w,G__18038,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18038),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18038){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18038,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18042){
var extmap__5385__auto__ = (function (){var G__18093 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18042,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18042)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18093);
} else {
return G__18093;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18042),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18042),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18438 = (i + (1));
var G__18439 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18438;
ret = G__18439;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18119){
var vec__18120 = p__18119;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18126 = arguments.length;
switch (G__18126) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18444 = ps;
var G__18445 = (i + (1));
el__$1 = G__18444;
i = G__18445;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18127 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18130_18446 = cljs.core.seq(props);
var chunk__18131_18447 = null;
var count__18132_18448 = (0);
var i__18133_18449 = (0);
while(true){
if((i__18133_18449 < count__18132_18448)){
var vec__18140_18450 = chunk__18131_18447.cljs$core$IIndexed$_nth$arity$2(null,i__18133_18449);
var k_18451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18140_18450,(0),null);
var v_18452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18140_18450,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18451);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18451),v_18452);


var G__18456 = seq__18130_18446;
var G__18457 = chunk__18131_18447;
var G__18458 = count__18132_18448;
var G__18459 = (i__18133_18449 + (1));
seq__18130_18446 = G__18456;
chunk__18131_18447 = G__18457;
count__18132_18448 = G__18458;
i__18133_18449 = G__18459;
continue;
} else {
var temp__5804__auto___18460 = cljs.core.seq(seq__18130_18446);
if(temp__5804__auto___18460){
var seq__18130_18461__$1 = temp__5804__auto___18460;
if(cljs.core.chunked_seq_QMARK_(seq__18130_18461__$1)){
var c__5568__auto___18462 = cljs.core.chunk_first(seq__18130_18461__$1);
var G__18463 = cljs.core.chunk_rest(seq__18130_18461__$1);
var G__18464 = c__5568__auto___18462;
var G__18465 = cljs.core.count(c__5568__auto___18462);
var G__18466 = (0);
seq__18130_18446 = G__18463;
chunk__18131_18447 = G__18464;
count__18132_18448 = G__18465;
i__18133_18449 = G__18466;
continue;
} else {
var vec__18143_18467 = cljs.core.first(seq__18130_18461__$1);
var k_18468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143_18467,(0),null);
var v_18469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143_18467,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18468);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18468),v_18469);


var G__18470 = cljs.core.next(seq__18130_18461__$1);
var G__18471 = null;
var G__18472 = (0);
var G__18473 = (0);
seq__18130_18446 = G__18470;
chunk__18131_18447 = G__18471;
count__18132_18448 = G__18472;
i__18133_18449 = G__18473;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18147 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(1),null);
var seq__18150_18474 = cljs.core.seq(node_children);
var chunk__18152_18475 = null;
var count__18153_18476 = (0);
var i__18154_18477 = (0);
while(true){
if((i__18154_18477 < count__18153_18476)){
var child_struct_18478 = chunk__18152_18475.cljs$core$IIndexed$_nth$arity$2(null,i__18154_18477);
if((!((child_struct_18478 == null)))){
if(typeof child_struct_18478 === 'string'){
var text_18479 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18479),child_struct_18478].join(''));
} else {
var children_18480 = shadow.dom.svg_node(child_struct_18478);
if(cljs.core.seq_QMARK_(children_18480)){
var seq__18168_18481 = cljs.core.seq(children_18480);
var chunk__18170_18482 = null;
var count__18171_18483 = (0);
var i__18172_18484 = (0);
while(true){
if((i__18172_18484 < count__18171_18483)){
var child_18485 = chunk__18170_18482.cljs$core$IIndexed$_nth$arity$2(null,i__18172_18484);
if(cljs.core.truth_(child_18485)){
node.appendChild(child_18485);


var G__18486 = seq__18168_18481;
var G__18487 = chunk__18170_18482;
var G__18488 = count__18171_18483;
var G__18489 = (i__18172_18484 + (1));
seq__18168_18481 = G__18486;
chunk__18170_18482 = G__18487;
count__18171_18483 = G__18488;
i__18172_18484 = G__18489;
continue;
} else {
var G__18490 = seq__18168_18481;
var G__18491 = chunk__18170_18482;
var G__18492 = count__18171_18483;
var G__18493 = (i__18172_18484 + (1));
seq__18168_18481 = G__18490;
chunk__18170_18482 = G__18491;
count__18171_18483 = G__18492;
i__18172_18484 = G__18493;
continue;
}
} else {
var temp__5804__auto___18494 = cljs.core.seq(seq__18168_18481);
if(temp__5804__auto___18494){
var seq__18168_18495__$1 = temp__5804__auto___18494;
if(cljs.core.chunked_seq_QMARK_(seq__18168_18495__$1)){
var c__5568__auto___18496 = cljs.core.chunk_first(seq__18168_18495__$1);
var G__18497 = cljs.core.chunk_rest(seq__18168_18495__$1);
var G__18498 = c__5568__auto___18496;
var G__18499 = cljs.core.count(c__5568__auto___18496);
var G__18500 = (0);
seq__18168_18481 = G__18497;
chunk__18170_18482 = G__18498;
count__18171_18483 = G__18499;
i__18172_18484 = G__18500;
continue;
} else {
var child_18501 = cljs.core.first(seq__18168_18495__$1);
if(cljs.core.truth_(child_18501)){
node.appendChild(child_18501);


var G__18502 = cljs.core.next(seq__18168_18495__$1);
var G__18503 = null;
var G__18504 = (0);
var G__18505 = (0);
seq__18168_18481 = G__18502;
chunk__18170_18482 = G__18503;
count__18171_18483 = G__18504;
i__18172_18484 = G__18505;
continue;
} else {
var G__18506 = cljs.core.next(seq__18168_18495__$1);
var G__18507 = null;
var G__18508 = (0);
var G__18509 = (0);
seq__18168_18481 = G__18506;
chunk__18170_18482 = G__18507;
count__18171_18483 = G__18508;
i__18172_18484 = G__18509;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18480);
}
}


var G__18510 = seq__18150_18474;
var G__18511 = chunk__18152_18475;
var G__18512 = count__18153_18476;
var G__18513 = (i__18154_18477 + (1));
seq__18150_18474 = G__18510;
chunk__18152_18475 = G__18511;
count__18153_18476 = G__18512;
i__18154_18477 = G__18513;
continue;
} else {
var G__18514 = seq__18150_18474;
var G__18515 = chunk__18152_18475;
var G__18516 = count__18153_18476;
var G__18517 = (i__18154_18477 + (1));
seq__18150_18474 = G__18514;
chunk__18152_18475 = G__18515;
count__18153_18476 = G__18516;
i__18154_18477 = G__18517;
continue;
}
} else {
var temp__5804__auto___18518 = cljs.core.seq(seq__18150_18474);
if(temp__5804__auto___18518){
var seq__18150_18519__$1 = temp__5804__auto___18518;
if(cljs.core.chunked_seq_QMARK_(seq__18150_18519__$1)){
var c__5568__auto___18520 = cljs.core.chunk_first(seq__18150_18519__$1);
var G__18521 = cljs.core.chunk_rest(seq__18150_18519__$1);
var G__18522 = c__5568__auto___18520;
var G__18523 = cljs.core.count(c__5568__auto___18520);
var G__18524 = (0);
seq__18150_18474 = G__18521;
chunk__18152_18475 = G__18522;
count__18153_18476 = G__18523;
i__18154_18477 = G__18524;
continue;
} else {
var child_struct_18525 = cljs.core.first(seq__18150_18519__$1);
if((!((child_struct_18525 == null)))){
if(typeof child_struct_18525 === 'string'){
var text_18526 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18526),child_struct_18525].join(''));
} else {
var children_18527 = shadow.dom.svg_node(child_struct_18525);
if(cljs.core.seq_QMARK_(children_18527)){
var seq__18174_18528 = cljs.core.seq(children_18527);
var chunk__18176_18529 = null;
var count__18177_18530 = (0);
var i__18178_18531 = (0);
while(true){
if((i__18178_18531 < count__18177_18530)){
var child_18532 = chunk__18176_18529.cljs$core$IIndexed$_nth$arity$2(null,i__18178_18531);
if(cljs.core.truth_(child_18532)){
node.appendChild(child_18532);


var G__18533 = seq__18174_18528;
var G__18534 = chunk__18176_18529;
var G__18535 = count__18177_18530;
var G__18536 = (i__18178_18531 + (1));
seq__18174_18528 = G__18533;
chunk__18176_18529 = G__18534;
count__18177_18530 = G__18535;
i__18178_18531 = G__18536;
continue;
} else {
var G__18537 = seq__18174_18528;
var G__18538 = chunk__18176_18529;
var G__18539 = count__18177_18530;
var G__18540 = (i__18178_18531 + (1));
seq__18174_18528 = G__18537;
chunk__18176_18529 = G__18538;
count__18177_18530 = G__18539;
i__18178_18531 = G__18540;
continue;
}
} else {
var temp__5804__auto___18541__$1 = cljs.core.seq(seq__18174_18528);
if(temp__5804__auto___18541__$1){
var seq__18174_18542__$1 = temp__5804__auto___18541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18174_18542__$1)){
var c__5568__auto___18543 = cljs.core.chunk_first(seq__18174_18542__$1);
var G__18544 = cljs.core.chunk_rest(seq__18174_18542__$1);
var G__18545 = c__5568__auto___18543;
var G__18546 = cljs.core.count(c__5568__auto___18543);
var G__18547 = (0);
seq__18174_18528 = G__18544;
chunk__18176_18529 = G__18545;
count__18177_18530 = G__18546;
i__18178_18531 = G__18547;
continue;
} else {
var child_18548 = cljs.core.first(seq__18174_18542__$1);
if(cljs.core.truth_(child_18548)){
node.appendChild(child_18548);


var G__18549 = cljs.core.next(seq__18174_18542__$1);
var G__18550 = null;
var G__18551 = (0);
var G__18552 = (0);
seq__18174_18528 = G__18549;
chunk__18176_18529 = G__18550;
count__18177_18530 = G__18551;
i__18178_18531 = G__18552;
continue;
} else {
var G__18553 = cljs.core.next(seq__18174_18542__$1);
var G__18554 = null;
var G__18555 = (0);
var G__18556 = (0);
seq__18174_18528 = G__18553;
chunk__18176_18529 = G__18554;
count__18177_18530 = G__18555;
i__18178_18531 = G__18556;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18527);
}
}


var G__18557 = cljs.core.next(seq__18150_18519__$1);
var G__18558 = null;
var G__18559 = (0);
var G__18560 = (0);
seq__18150_18474 = G__18557;
chunk__18152_18475 = G__18558;
count__18153_18476 = G__18559;
i__18154_18477 = G__18560;
continue;
} else {
var G__18561 = cljs.core.next(seq__18150_18519__$1);
var G__18562 = null;
var G__18563 = (0);
var G__18564 = (0);
seq__18150_18474 = G__18561;
chunk__18152_18475 = G__18562;
count__18153_18476 = G__18563;
i__18154_18477 = G__18564;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18567 = arguments.length;
var i__5770__auto___18568 = (0);
while(true){
if((i__5770__auto___18568 < len__5769__auto___18567)){
args__5775__auto__.push((arguments[i__5770__auto___18568]));

var G__18569 = (i__5770__auto___18568 + (1));
i__5770__auto___18568 = G__18569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18180){
var G__18181 = cljs.core.first(seq18180);
var seq18180__$1 = cljs.core.next(seq18180);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18181,seq18180__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18183 = arguments.length;
switch (G__18183) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15901__auto___18573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15902__auto__ = (function (){var switch__15869__auto__ = (function (state_18188){
var state_val_18189 = (state_18188[(1)]);
if((state_val_18189 === (1))){
var state_18188__$1 = state_18188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18188__$1,(2),once_or_cleanup);
} else {
if((state_val_18189 === (2))){
var inst_18185 = (state_18188[(2)]);
var inst_18186 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18188__$1 = (function (){var statearr_18190 = state_18188;
(statearr_18190[(7)] = inst_18185);

return statearr_18190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18188__$1,inst_18186);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15870__auto__ = null;
var shadow$dom$state_machine__15870__auto____0 = (function (){
var statearr_18191 = [null,null,null,null,null,null,null,null];
(statearr_18191[(0)] = shadow$dom$state_machine__15870__auto__);

(statearr_18191[(1)] = (1));

return statearr_18191;
});
var shadow$dom$state_machine__15870__auto____1 = (function (state_18188){
while(true){
var ret_value__15871__auto__ = (function (){try{while(true){
var result__15872__auto__ = switch__15869__auto__(state_18188);
if(cljs.core.keyword_identical_QMARK_(result__15872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15872__auto__;
}
break;
}
}catch (e18192){var ex__15873__auto__ = e18192;
var statearr_18193_18574 = state_18188;
(statearr_18193_18574[(2)] = ex__15873__auto__);


if(cljs.core.seq((state_18188[(4)]))){
var statearr_18194_18575 = state_18188;
(statearr_18194_18575[(1)] = cljs.core.first((state_18188[(4)])));

} else {
throw ex__15873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18576 = state_18188;
state_18188 = G__18576;
continue;
} else {
return ret_value__15871__auto__;
}
break;
}
});
shadow$dom$state_machine__15870__auto__ = function(state_18188){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15870__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15870__auto____1.call(this,state_18188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15870__auto____0;
shadow$dom$state_machine__15870__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15870__auto____1;
return shadow$dom$state_machine__15870__auto__;
})()
})();
var state__15903__auto__ = (function (){var statearr_18195 = f__15902__auto__();
(statearr_18195[(6)] = c__15901__auto___18573);

return statearr_18195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15903__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
