goog.provide('piflow.core');
piflow.core.animate = (function piflow$core$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44463 = arguments.length;
var i__5770__auto___44464 = (0);
while(true){
if((i__5770__auto___44464 < len__5769__auto___44463)){
args__5775__auto__.push((arguments[i__5770__auto___44464]));

var G__44465 = (i__5770__auto___44464 + (1));
i__5770__auto___44464 = G__44465;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return piflow.core.animate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(piflow.core.animate.cljs$core$IFn$_invoke$arity$variadic = (function (page_name,args){
return piflow.dom.update_flux(piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic(page_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)));
}));

(piflow.core.animate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(piflow.core.animate.cljs$lang$applyTo = (function (seq44453){
var G__44454 = cljs.core.first(seq44453);
var seq44453__$1 = cljs.core.next(seq44453);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44454,seq44453__$1);
}));

piflow.core.global_close_fn = (function piflow$core$global_close_fn(e){
var pane_id = piflow.ui.get_pane_id(e);
var id_numb = parseInt(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,"_")));
if((!(clojure.string.includes_QMARK_(pane_id,"EDIT")))){
piflow.home.remove_lines(parseInt(id_numb));
} else {
}

(window["GLOB_flow_graph"] = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(window.GLOB_flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id)));

return piflow.home.update_pane_flow_graph();
});
piflow.core.global_mouseup_fn = (function piflow$core$global_mouseup_fn(e){
var pane_id = window.get_match_id(e,"pane");
var id_numb = parseInt(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,/_/)));
piflow.home.remove_lines(parseInt(id_numb));

return piflow.home.draw_lines(id_numb);
});
piflow.core.update_graph = (function piflow$core$update_graph(event,pane_id,pane_graph){
var vec__44456 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.pageX,event.pageY,(200)], null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44456,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44456,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44456,(2),null);
var flow_graph = window.GLOB_flow_graph;
return (window["GLOB_flow_graph"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pane_graph,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null))));
});
piflow.core.global_move_fn = (function piflow$core$global_move_fn(e){
var pane_id = window.get_match_id(e,"pane");
var pane_graph = (function (){var G__44461 = window.GLOB_flow_graph;
var fexpr__44460 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
return (fexpr__44460.cljs$core$IFn$_invoke$arity$1 ? fexpr__44460.cljs$core$IFn$_invoke$arity$1(G__44461) : fexpr__44460.call(null,G__44461));
})();
var id_numb = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,"_"));
if(cljs.core.not(isNaN(cljs.core.last(pane_id)))){
piflow.core.update_graph(e,pane_id,pane_graph);

piflow.home.update_pane_flow_graph();
} else {
}

piflow.home.remove_lines(parseInt(id_numb));

return piflow.home.draw_lines(id_numb);
});
piflow.core.draw = (function piflow$core$draw(){
return piflow.core.animate.cljs$core$IFn$_invoke$arity$variadic("piflow.home/page-home",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY], 0));
});
piflow.core.start_animation = (function piflow$core$start_animation(fn){
return setInterval(fn,(1000));
});

//# sourceMappingURL=piflow.core.js.map
