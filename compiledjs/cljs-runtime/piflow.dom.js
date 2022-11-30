goog.provide('piflow.dom');
piflow.dom.sty_map_GT_str = (function piflow$dom$sty_map_GT_str(style_map){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$dom$sty_map_GT_str_$_iter__32678(s__32679){
return (new cljs.core.LazySeq(null,(function (){
var s__32679__$1 = s__32679;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32679__$1);
if(temp__5804__auto__){
var s__32679__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32679__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32679__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32681 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32680 = (0);
while(true){
if((i__32680 < size__5522__auto__)){
var vec__32682 = cljs.core._nth(c__5521__auto__,i__32680);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32682,(1),null);
cljs.core.chunk_append(b__32681,[cljs.core.name(k),":",cljs.core.name(v),";"].join(''));

var G__32698 = (i__32680 + (1));
i__32680 = G__32698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32681),piflow$dom$sty_map_GT_str_$_iter__32678(cljs.core.chunk_rest(s__32679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32681),null);
}
} else {
var vec__32685 = cljs.core.first(s__32679__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32685,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32685,(1),null);
return cljs.core.cons([cljs.core.name(k),":",cljs.core.name(v),";"].join(''),piflow$dom$sty_map_GT_str_$_iter__32678(cljs.core.rest(s__32679__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(style_map);
})());
});
piflow.dom.sty_str_GT_map = (function piflow$dom$sty_str_GT_map(style_str){
var style_attrs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(style_str,";");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,(function (){var iter__5523__auto__ = (function piflow$dom$sty_str_GT_map_$_iter__32688(s__32689){
return (new cljs.core.LazySeq(null,(function (){
var s__32689__$1 = s__32689;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32689__$1);
if(temp__5804__auto__){
var s__32689__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32689__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32689__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32691 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32690 = (0);
while(true){
if((i__32690 < size__5522__auto__)){
var attr = cljs.core._nth(c__5521__auto__,i__32690);
cljs.core.chunk_append(b__32691,(function (){var spl = clojure.string.split.cljs$core$IFn$_invoke$arity$2(attr,":");
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(spl)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(spl))]);
})());

var G__32699 = (i__32690 + (1));
i__32690 = G__32699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32691),piflow$dom$sty_str_GT_map_$_iter__32688(cljs.core.chunk_rest(s__32689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32691),null);
}
} else {
var attr = cljs.core.first(s__32689__$2);
return cljs.core.cons((function (){var spl = clojure.string.split.cljs$core$IFn$_invoke$arity$2(attr,":");
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(spl)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(spl))]);
})(),piflow$dom$sty_str_GT_map_$_iter__32688(cljs.core.rest(s__32689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(style_attrs);
})());
});
piflow.dom.docall = (function piflow$dom$docall(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32700 = arguments.length;
var i__5770__auto___32701 = (0);
while(true){
if((i__5770__auto___32701 < len__5769__auto___32700)){
args__5775__auto__.push((arguments[i__5770__auto___32701]));

var G__32702 = (i__5770__auto___32701 + (1));
i__5770__auto___32701 = G__32702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return piflow.dom.docall.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(piflow.dom.docall.cljs$core$IFn$_invoke$arity$variadic = (function (fn,args){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY)], 0));

var temp__5808__auto__ = (function (){var G__32695 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fn);
var fexpr__32694 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
return (fexpr__32694.cljs$core$IFn$_invoke$arity$1 ? fexpr__32694.cljs$core$IFn$_invoke$arity$1(G__32695) : fexpr__32694.call(null,G__32695));
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var fn_var = temp__5808__auto__;
return (fn_var.cljs$core$IFn$_invoke$arity$1 ? fn_var.cljs$core$IFn$_invoke$arity$1(args) : fn_var.call(null,args));
}
}));

(piflow.dom.docall.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(piflow.dom.docall.cljs$lang$applyTo = (function (seq32692){
var G__32693 = cljs.core.first(seq32692);
var seq32692__$1 = cljs.core.next(seq32692);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32693,seq32692__$1);
}));

piflow.dom.get_el_attr = (function piflow$dom$get_el_attr(element,attr_name){
return element.getAttribute(attr_name);
});
piflow.dom.set_el_attr = (function piflow$dom$set_el_attr(element,attr_name,attr_value){
return element.setAttribute(attr_name,attr_value);
});
piflow.dom.set_el_style_attr = (function piflow$dom$set_el_style_attr(el,k,v){
var el_stylem = piflow.dom.sty_str_GT_map(piflow.dom.get_el_attr(el,"style"));
return piflow.dom.set_el_attr(el,"style",piflow.dom.sty_map_GT_str(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(el_stylem,k,v)));
});
piflow.dom.get_id_attr = (function piflow$dom$get_id_attr(DOMid,attr_name){
return document.getElementById(DOMid).getAttribute(attr_name);
});
piflow.dom.set_id_attr = (function piflow$dom$set_id_attr(DOMid,attr_name,attr_value){
return document.getElementById(DOMid).setAttribute(attr_name,attr_value);
});
piflow.dom.remove_element_from_body = (function piflow$dom$remove_element_from_body(element_id){
return document.body.removeChild(document.getElementById(element_id));
});
piflow.dom.remove_element = (function piflow$dom$remove_element(element_id){
return document.getElementById(element_id).parentElement.removeChild(document.getElementById(element_id));
});
piflow.dom.reset_div = (function piflow$dom$reset_div(DOMid,new_div){
var node_div = document.getElementById(DOMid);
var node_parent = node_div.parentNode;
var node_style = piflow.dom.get_el_attr(node_div,"style");
var new_node = (function (){var v32696 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),node_style], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(DOMid)], null)),new_div], null);
var el__11611__auto__ = hipo.interpreter.create(v32696,null);
hipo.core.set_hiccup_BANG_(el__11611__auto__,v32696);

return el__11611__auto__;
})();
node_parent.removeChild(node_div);

return node_parent.appendChild(new_node);
});
piflow.dom.reset_flux_div = (function piflow$dom$reset_flux_div(new_flux){
document.body.removeChild(document.getElementById("flux"));

return document.body.appendChild((function (){var v32697 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#flux.pane","div#flux.pane",-74175043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"min-height:100vw;"], null),new_flux], null);
var el__11611__auto__ = hipo.interpreter.create(v32697,null);
hipo.core.set_hiccup_BANG_(el__11611__auto__,v32697);

return el__11611__auto__;
})());
});
piflow.dom.update_flux = (function piflow$dom$update_flux(new_flux){
return piflow.dom.reset_flux_div(new_flux);
});

//# sourceMappingURL=piflow.dom.js.map
