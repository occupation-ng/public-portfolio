goog.provide('piflow.home');
piflow.home.get_all_panes = (function piflow$home$get_all_panes(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43530_SHARP_){
return p1__43530_SHARP_.id;
}),document.querySelectorAll("[id^=\"pane_\"]")));
});
/**
 *          (js/isNaN (last 'hazzah')) => true ;; h is NaN
 *       (js/isNaN (last 'hazzah3')) => false ;; 3 is a number as a string literal
 */
piflow.home.get_all_els = (function piflow$home$get_all_els(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43531_SHARP_){
return cljs.core.not(isNaN(cljs.core.last(p1__43531_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43532_SHARP_){
return p1__43532_SHARP_.id;
}),document.querySelectorAll("[id^=\"pane_\"]"))));
});
piflow.home.get_all_els_n_lines = (function piflow$home$get_all_els_n_lines(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43533_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(p1__43533_SHARP_)], null),new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__43533_SHARP_)));
}),cljs.core.seq(window.GLOB_flow_graph)))));
});
piflow.home.get_all_lines = (function piflow$home$get_all_lines(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43534_SHARP_){
return new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__43534_SHARP_));
}),cljs.core.seq(window.GLOB_flow_graph))));
});
/**
 * 
 *   id-numb : INT : integer value from the pane id
 *   
 */
piflow.home.remove_lines = (function piflow$home$remove_lines(id_numb){
var lines = piflow.home.get_all_lines();
var to_remove = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id_numb]),line))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["pane_flow_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(line))].join(''),["pane_flow_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(line))].join('')], null);
} else {
return null;
}
}),lines));
var ti = (0);
while(true){
if((ti < cljs.core.count(to_remove))){
var to_connect = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(to_remove,ti);
var vec__43535 = to_connect;
var d1_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43535,(0),null);
var d2_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43535,(1),null);
var linc_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d1_id),"_connect_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d2_id)].join('');
var linc = document.getElementById(linc_id);
if(cljs.core.truth_(linc)){
linc.parentNode.removeChild(linc);
} else {
}

var G__43586 = (ti + (1));
ti = G__43586;
continue;
} else {
return null;
}
break;
}
});
/**
 * id-numb : INT : integer value from the pane id
 */
piflow.home.draw_lines = (function piflow$home$draw_lines(id_numb){
var lines = piflow.home.get_all_lines();
var to_draw = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id_numb]),line))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["pane_flow_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(line))].join(''),["pane_flow_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(line))].join('')], null);
} else {
return null;
}
}),lines));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$home$draw_lines_$_iter__43538(s__43539){
return (new cljs.core.LazySeq(null,(function (){
var s__43539__$1 = s__43539;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43539__$1);
if(temp__5804__auto__){
var s__43539__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43539__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43539__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43541 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43540 = (0);
while(true){
if((i__43540 < size__5522__auto__)){
var to_connect = cljs.core._nth(c__5521__auto__,i__43540);
var vec__43542 = to_connect;
var d1_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43542,(0),null);
var d2_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43542,(1),null);
var connector_color = "#aaa";
var connector_width = (5);
var d1 = document.getElementById(d1_id);
var d2 = document.getElementById(d2_id);
cljs.core.chunk_append(b__43541,(cljs.core.truth_((function (){var and__5043__auto__ = d1;
if(cljs.core.truth_(and__5043__auto__)){
return d2;
} else {
return and__5043__auto__;
}
})())?window.connect(d1,d2,connector_color,connector_width):null));

var G__43587 = (i__43540 + (1));
i__43540 = G__43587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43541),piflow$home$draw_lines_$_iter__43538(cljs.core.chunk_rest(s__43539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43541),null);
}
} else {
var to_connect = cljs.core.first(s__43539__$2);
var vec__43545 = to_connect;
var d1_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43545,(0),null);
var d2_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43545,(1),null);
var connector_color = "#aaa";
var connector_width = (5);
var d1 = document.getElementById(d1_id);
var d2 = document.getElementById(d2_id);
return cljs.core.cons((cljs.core.truth_((function (){var and__5043__auto__ = d1;
if(cljs.core.truth_(and__5043__auto__)){
return d2;
} else {
return and__5043__auto__;
}
})())?window.connect(d1,d2,connector_color,connector_width):null),piflow$home$draw_lines_$_iter__43538(cljs.core.rest(s__43539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(to_draw);
})());
});
piflow.home.remove_all_lines = (function piflow$home$remove_all_lines(){
var flow_graph = window.GLOB_flow_graph;
var si = (0);
while(true){
if((si < cljs.core.count(cljs.core.seq(flow_graph)))){
var vec__43548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(flow_graph),si);
var pane_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43548,(0),null);
var pane_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43548,(1),null);
var pane_id = cljs.core.name(pane_kw);
var id_numb = parseInt(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,"_")));
piflow.home.remove_lines(id_numb);

var G__43588 = (si + (1));
si = G__43588;
continue;
} else {
return null;
}
break;
}
});
piflow.home.draw_all_lines = (function piflow$home$draw_all_lines(){
var flow_graph = window.GLOB_flow_graph;
var si = (0);
while(true){
if((si < cljs.core.count(cljs.core.seq(flow_graph)))){
var vec__43551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(flow_graph),si);
var pane_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43551,(0),null);
var pane_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43551,(1),null);
var pane_id = cljs.core.name(pane_kw);
var id_numb = parseInt(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,"_")));
piflow.home.draw_lines(id_numb);

var G__43592 = (si + (1));
si = G__43592;
continue;
} else {
return null;
}
break;
}
});
piflow.home.update_pos = (function piflow$home$update_pos(pane_id,pane_graph){
(document.getElementById(pane_id).style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pane_graph))),"px"].join(''));

(document.getElementById(pane_id).style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pane_graph))),"px"].join(''));

return (document.getElementById(pane_id).style.zIndex = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pane_graph),(2)));
});
piflow.home.update_dims = (function piflow$home$update_dims(pane_id,pane_graph){
(document.getElementById(pane_id).style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(pane_graph))),"px"].join(''));

return (document.getElementById(pane_id).style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(pane_graph))),"px"].join(''));
});
piflow.home.character_notes = (function piflow$home$character_notes(pane_id,character){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var id_numb = parseInt(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43554_SHARP_){
return cljs.core.not(isNaN(p1__43554_SHARP_));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,/_/))));
var txt_id = ["txt_",cljs.core.name(cljs.core.first(character)),"_character",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join('');
var txt_el = document.getElementById(txt_id);
var txt = txt_el.value;
var flow_graph = window.GLOB_flow_graph;
var pane_graph = (function (){var fexpr__43555 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
return (fexpr__43555.cljs$core$IFn$_invoke$arity$1 ? fexpr__43555.cljs$core$IFn$_invoke$arity$1(flow_graph) : fexpr__43555.call(null,flow_graph));
})();
var nu_char_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(pane_graph),cljs.core.first(character),txt);
var nu_pane_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pane_graph,new cljs.core.Keyword(null,"char","char",-641587586),nu_char_graph);
piflow.home.remove_lines(id_numb);

(window.GLOB_flow_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id),nu_pane_graph));

piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.home/pane-update",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_id], 0));

piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.home/pane-update-edit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_id], 0));

piflow.util.invoke("piflow.home/update-pane-flow-graph");

return piflow.home.draw_lines(id_numb);
})], null)),"save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"inherit","inherit",-1840815422)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["txt_",cljs.core.name(cljs.core.first(character)),"_character",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join('')], null)),cljs.core.second(character)], null)], null);
});
piflow.home.character_div = (function piflow$home$character_div(pane_id,character){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid black"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["CHAR_",cljs.core.name(cljs.core.first(character)),"_BUTTON_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("window.press_down",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/ngpane-we",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id),"_NOTES_",cljs.core.name(cljs.core.first(character))].join(''),piflow.home.character_notes(pane_id,character),document.getElementById("flux")], 0));
})], null)),cljs.core.name(cljs.core.first(character))], null);
});
piflow.home.edit_button = (function piflow$home$edit_button(pane_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"3em",new cljs.core.Keyword(null,"height","height",1025178622),"3em",new cljs.core.Keyword(null,"color","color",1011675173),"#eae",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bolder",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"1px 1px black",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["EDIT_BUTTON_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var pane_id__$1 = piflow.ui.get_pane_id(e);
piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("window.press_down",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/ngpane-we",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id__$1),"_EDIT"].join(''),piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.home/pane-edit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_id__$1], 0)),document.getElementById("flux")], 0));

return window.to_top([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id__$1),"_EDIT"].join(''));
})], null)),"edit"], null);
});
piflow.home.update_notes = (function piflow$home$update_notes(pane_id,pane_graph){
return null;
});
piflow.home.update_characters = (function piflow$home$update_characters(pane_id,pane_graph){
var el = document.getElementById(["CONT_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join(''));
var characters = cljs.core.seq(new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(pane_graph));
var char_cont = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5523__auto__ = (function piflow$home$update_characters_$_iter__43556(s__43557){
return (new cljs.core.LazySeq(null,(function (){
var s__43557__$1 = s__43557;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43557__$1);
if(temp__5804__auto__){
var s__43557__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43557__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43557__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43559 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43558 = (0);
while(true){
if((i__43558 < size__5522__auto__)){
var character = cljs.core._nth(c__5521__auto__,i__43558);
cljs.core.chunk_append(b__43559,piflow.home.character_div(pane_id,character));

var G__43595 = (i__43558 + (1));
i__43558 = G__43595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43559),piflow$home$update_characters_$_iter__43556(cljs.core.chunk_rest(s__43557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43559),null);
}
} else {
var character = cljs.core.first(s__43557__$2);
return cljs.core.cons(piflow.home.character_div(pane_id,character),piflow$home$update_characters_$_iter__43556(cljs.core.rest(s__43557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(characters);
})());
var cont = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),piflow.home.edit_button(pane_id),char_cont], null);
return piflow.dom.reset_div(["CONT_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join(''),cont);
});
piflow.home.pane_update_edit = (function piflow$home$pane_update_edit(pane_id){
var edit_id = pane_id;
var edit_txt_id = ["txt_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(edit_id)].join('');
return (document.getElementById(edit_txt_id).value = clojure.string.replace((function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43560_43599 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43561_43600 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43562_43601 = true;
var _STAR_print_fn_STAR__temp_val__43563_43602 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43562_43601);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43563_43602);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((function (){var G__43565 = window.GLOB_flow_graph;
var fexpr__43564 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
return (fexpr__43564.cljs$core$IFn$_invoke$arity$1 ? fexpr__43564.cljs$core$IFn$_invoke$arity$1(G__43565) : fexpr__43564.call(null,G__43565));
})());
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43561_43600);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43560_43599);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})(),"\\n","\n"));
});
piflow.home.pane_update = (function piflow$home$pane_update(pane_id){
var pane = document.getElementById(pane_id);
if(cljs.core.truth_(pane)){
var pane_graph = (function (){var G__43567 = window.GLOB_flow_graph;
var fexpr__43566 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
return (fexpr__43566.cljs$core$IFn$_invoke$arity$1 ? fexpr__43566.cljs$core$IFn$_invoke$arity$1(G__43567) : fexpr__43566.call(null,G__43567));
})();
var sty = pane.style;
piflow.home.update_characters(pane_id,pane_graph);

if(cljs.core.truth_(new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(pane_graph))){
piflow.home.update_notes(pane_id,pane_graph);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pane_graph))){
piflow.home.update_pos(pane_id,pane_graph);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(pane_graph))){
piflow.home.update_dims(pane_id,pane_graph);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(pane_graph))){
(document.getElementById(pane_id).style.fontSize = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(pane_graph)),"em"].join(''));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"fgc","fgc",172532549).cljs$core$IFn$_invoke$arity$1(pane_graph))){
(document.getElementById([cljs.core.subs.cljs$core$IFn$_invoke$arity$2(pane_id,(5)),"_title_bar"].join('')).style.color = new cljs.core.Keyword(null,"fgc","fgc",172532549).cljs$core$IFn$_invoke$arity$1(pane_graph));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"bgc","bgc",1938164440).cljs$core$IFn$_invoke$arity$1(pane_graph))){
(document.getElementById(pane_id).style.backgroundColor = new cljs.core.Keyword(null,"bgc","bgc",1938164440).cljs$core$IFn$_invoke$arity$1(pane_graph));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pane_graph))){
return (document.innerHTML = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pane_graph));
} else {
return null;
}
} else {
return null;
}
});
piflow.home.pane_update_all = (function piflow$home$pane_update_all(){
var flow_graph = window.GLOB_flow_graph;
var si = (0);
while(true){
if((si < cljs.core.count(cljs.core.seq(flow_graph)))){
var vec__43568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(flow_graph),si);
var pane_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43568,(0),null);
var pane_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43568,(1),null);
var pane_id = cljs.core.name(pane_kw);
piflow.home.pane_update(pane_id);

var G__43603 = (si + (1));
si = G__43603;
continue;
} else {
return null;
}
break;
}
});
piflow.home.update_pane_flow_graph_scale = (function piflow$home$update_pane_flow_graph_scale(pane_id,scale){
var flow_graph = window.GLOB_flow_graph;
var pane_graph = (function (){var fexpr__43571 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
return (fexpr__43571.cljs$core$IFn$_invoke$arity$1 ? fexpr__43571.cljs$core$IFn$_invoke$arity$1(flow_graph) : fexpr__43571.call(null,flow_graph));
})();
var nu_pane_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pane_graph,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
return (window.GLOB_flow_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id),nu_pane_graph));
});
piflow.home.update_pane_flow_graph_dims = (function piflow$home$update_pane_flow_graph_dims(pane_id,x,y,wid,hei){
var flow_graph = window.GLOB_flow_graph;
var pane_graph = (function (){var fexpr__43572 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
return (fexpr__43572.cljs$core$IFn$_invoke$arity$1 ? fexpr__43572.cljs$core$IFn$_invoke$arity$1(flow_graph) : fexpr__43572.call(null,flow_graph));
})();
var nu_pane_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pane_graph,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(200)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wid,hei], null)], 0));
return (window.GLOB_flow_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id),nu_pane_graph));
});
piflow.home.update_pane_flow_graph_pos = (function piflow$home$update_pane_flow_graph_pos(pane_id,x,y){
var flow_graph = window.GLOB_flow_graph;
var pane_graph = (function (){var fexpr__43573 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
return (fexpr__43573.cljs$core$IFn$_invoke$arity$1 ? fexpr__43573.cljs$core$IFn$_invoke$arity$1(flow_graph) : fexpr__43573.call(null,flow_graph));
})();
var nu_pane_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pane_graph,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(200)], null));
return (window.GLOB_flow_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id),nu_pane_graph));
});
piflow.home.update_pane_flow_graph = (function piflow$home$update_pane_flow_graph(){
var pane = document.getElementById("pane_flow_graph");
if(cljs.core.truth_(pane)){
return (document.getElementById("txt_flow_graph").value = clojure.string.replace((function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43574_43604 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43575_43605 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43576_43606 = true;
var _STAR_print_fn_STAR__temp_val__43577_43607 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43576_43606);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43577_43607);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(window.GLOB_flow_graph);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43575_43605);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43574_43604);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})(),"\\n","\n"));
} else {
return null;
}
});
/**
 * 
 *   ex.
 *  (numb-from-id 'CONT_pane_flow_17_EDIT_oth_11_e3')) => 17
 *   
 */
piflow.home.numb_from_id = (function piflow$home$numb_from_id(pane_id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43578_SHARP_){
return cljs.core.not(isNaN(p1__43578_SHARP_));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,/_/)));
});
piflow.home.pane_edit = (function piflow$home$pane_edit(pane_id){
var flow_graph = window.GLOB_flow_graph;
var pane_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
var pane_graph = (pane_kw.cljs$core$IFn$_invoke$arity$1 ? pane_kw.cljs$core$IFn$_invoke$arity$1(flow_graph) : pane_kw.call(null,flow_graph));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["CONT_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id),"_EDIT"].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var id_numb = parseInt(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43579_SHARP_){
return cljs.core.not(isNaN(p1__43579_SHARP_));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,/_/))));
var txt_id = ["txt_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join('');
var txt_el = document.getElementById(txt_id);
var txt = txt_el.value;
var txt_edn = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(txt);
piflow.home.remove_lines(id_numb);

(window.GLOB_flow_graph = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id),txt_edn));

piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.home/pane-update",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_id], 0));

piflow.home.update_pane_flow_graph();

return piflow.home.draw_lines(id_numb);
})], null)),"save"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),pane_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"inherit","inherit",-1840815422)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["txt_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["edit-onclick",e], 0));
})], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_graph)], null)], null);
});
piflow.home.new_flow_el = (function piflow$home$new_flow_el(pane_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["CONT_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join('')], null)),piflow.home.edit_button(pane_id)], null);
});
piflow.home.create_new_pane = (function piflow$home$create_new_pane(pane_id,e){
var flow_graph = window.GLOB_flow_graph;
if(cljs.core.not((function (){var fexpr__43580 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id);
return (fexpr__43580.cljs$core$IFn$_invoke$arity$1 ? fexpr__43580.cljs$core$IFn$_invoke$arity$1(flow_graph) : fexpr__43580.call(null,flow_graph));
})())){
(window["GLOB_flow_graph"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(window.GLOB_flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id),cljs.core.PersistentArrayMap.EMPTY));
} else {
}

piflow.home.update_pane_flow_graph();

return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/ngpane-we",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,pane_id,piflow.home.new_flow_el(pane_id),document.getElementById("flux")], 0));
});
piflow.home.graph_load = (function piflow$home$graph_load(graph,e){
var pi = (0);
while(true){
if((pi < cljs.core.count(cljs.core.seq(graph)))){
var pane_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(graph),pi);
var vec__43581 = pane_seq;
var pane_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43581,(0),null);
var pane_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43581,(1),null);
var pane_id = cljs.core.name(pane_kw);
var pane = document.getElementById(pane_id);
if(cljs.core.not(pane)){
piflow.home.create_new_pane(cljs.core.name(pane_id),e);
} else {
}

piflow.home.update_pane_flow_graph();

piflow.home.pane_update(pane_id);

var G__43608 = (pi + (1));
pi = G__43608;
continue;
} else {
return null;
}
break;
}
});
piflow.home.graph_edit = (function piflow$home$graph_edit(pane_id){
var flow_graph = window.GLOB_flow_graph;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var id_numb = parseInt(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,/_/)));
var txt_id = "txt_flow_graph";
var txt_el = document.getElementById(txt_id);
var txt = txt_el.value;
var txt_edn = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(txt);
piflow.home.remove_all_lines();

(window.GLOB_flow_graph = txt_edn);

piflow.home.graph_load(txt_edn,e);

piflow.home.update_pane_flow_graph();

return piflow.home.draw_all_lines();
})], null)),"save"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"flow graph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"inherit","inherit",-1840815422)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"txt_flow_graph",new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["edit-onclick",e], 0));
})], null)),""], null)], null);
});
/**
 * 
 *   pane-id : STR : pane id
 *   dt : INT : delta of the pixel ratio
 *   
 */
piflow.home.zoom_size = (function piflow$home$zoom_size(pane_id,dt){
var win_wid = window.innerWidth;
var el = document.getElementById(pane_id);
var nu_wid = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((dt * ((1) / window.devicePixelRatio))),"em"].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(nu_wid,el.style.fontSize)){
return (el.style.fontSize = nu_wid);
} else {
return null;
}
});
piflow.home.page_home = (function piflow$home$page_home(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.stripes(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"-ms-user-select","-ms-user-select",953709445),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"none","none",1333468478)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"flow_graph_add",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var graph_pane = document.getElementById("pane_flow_graph");
if(cljs.core.not(graph_pane)){
piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/ngpane-we",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,"pane_flow_graph",piflow.home.graph_edit("pane_flow-graph"),document.getElementById("flux")], 0));

piflow.home.update_pane_flow_graph();

return piflow.home.zoom_size("pane_flow_graph",1.3);
} else {
return null;
}
})], null)),"\u22B6"], null),piflow.ui.footer("flow")], null);
});
(window["GLOB_flow_graph"] = cljs.core.PersistentArrayMap.EMPTY);
document.addEventListener("dblclick",(function (e){
var pane_id = piflow.ui.new_pane_id("flow");
return piflow.home.create_new_pane(pane_id,e);
}));
window.addEventListener("resize",(function (e){
return piflow.home.zoom_size("flow_graph_add",(2));
}));
document.addEventListener("click",(function (e){
var target_id = e.target.id;
if((!(clojure.string.includes_QMARK_(target_id,"BUTTON")))){
window.to_top(window.get_match_id(e,"pane"));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("flux",target_id)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SNGL",e.target.id], 0));
} else {
return null;
}
}));

//# sourceMappingURL=piflow.home.js.map
