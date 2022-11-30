goog.provide('piflow.ui');
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.Okabe_ito_colors !== 'undefined')){
} else {
piflow.ui.Okabe_ito_colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#efc565","#99d1f1","#65c4aa","#f5ee8d","#65aad0","#e59e65","#e0aeca","#656565"], null);
}
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.Tol_bright_colors !== 'undefined')){
} else {
piflow.ui.Tol_bright_colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f4a2ad","#7ab784","#8eadcb","#e0d68e","#a2e0f4","#cb84ad","#d6d6d6"], null);
}
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.Tol_muted_colors !== 'undefined')){
} else {
piflow.ui.Tol_muted_colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#b7e0f4","#8ecbc1","#6fad84","#847ab7","#eae0ad","#c1c184","#e0a2ad","#b77a98","#cb8ec1","#eaeaea"], null);
}
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.Tol_light_colors !== 'undefined')){
} else {
piflow.ui.Tol_light_colors = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d6e084","#cbcb65","#adcbea","#f4b7a2","#f4eab7","#ffcbd6","#c1eaff","#8ed6c1","#eaeaea"], null);
}
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.grey_scale_colors !== 'undefined')){
} else {
piflow.ui.grey_scale_colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#b3b3b3","#999999","#7f7f7f","#666666","#4d4d4d","#333333","#1a1a1a","#000000"], null);
}
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.rainbow_colors !== 'undefined')){
} else {
piflow.ui.rainbow_colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#df2422","#e47332","#f4cd37","#a1df4a","#48d797","#32b7e0","#4153d5","#cb39df"], null);
}
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.pride_colors !== 'undefined')){
} else {
piflow.ui.pride_colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fdafc5","#75d4ea","#603814","#ff1d26","#ffff00","#06bd01","#750087","#010101","#fe931f","#011898"], null);
}
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.ae_ignores !== 'undefined')){
} else {
piflow.ui.ae_ignores = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#aaa","#eee"], null);
}
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.ae_colors !== 'undefined')){
} else {
piflow.ui.ae_colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#aaa","#aae","#aea","#aee","#eaa","#eae","#eea","#eee"], null);
}
piflow.ui.color_pallete = (function piflow$ui$color_pallete(){
return piflow.ui.Okabe_ito_colors;
});
piflow.ui.color_ignores = (function piflow$ui$color_ignores(){
return piflow.ui.ae_ignores;
});
piflow.ui.random_color_w_ignore_list = (function piflow$ui$random_color_w_ignore_list(){
var pallete = piflow.ui.color_pallete();
var ignore_list = piflow.ui.color_ignores();
var filtered_pallete = (function (){var f = pallete;
var i = (0);
while(true){
if((i < cljs.core.count(ignore_list))){
var G__41758 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (f,i,pallete,ignore_list){
return (function (p1__41645_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ignore_list,i),p1__41645_SHARP_);
});})(f,i,pallete,ignore_list))
,f);
var G__41759 = (i + (1));
f = G__41758;
i = G__41759;
continue;
} else {
return f;
}
break;
}
})();
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(filtered_pallete,cljs.core.rand_int(cljs.core.count(filtered_pallete)));
});
piflow.ui.a_e_random_color_w_o_aaa_eee = (function piflow$ui$a_e_random_color_w_o_aaa_eee(){

var col = ["#",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rand_int((2))))?"a":"e"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rand_int((2))))?"a":"e"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rand_int((2))))?"a":"e")].join('');
var rand_i = cljs.core.rand_int((3));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#eee",col)){
return ["#",cljs.core.subs.cljs$core$IFn$_invoke$arity$3("eee",(0),rand_i),"a",cljs.core.subs.cljs$core$IFn$_invoke$arity$2("eee",rand_i)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#aaa",col)){
return ["#",cljs.core.subs.cljs$core$IFn$_invoke$arity$3("aaa",(0),rand_i),"e",cljs.core.subs.cljs$core$IFn$_invoke$arity$2("aaa",rand_i)].join('');
} else {
return col;

}
}
});
piflow.ui.a_e_random_color = (function piflow$ui$a_e_random_color(){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(piflow.ui.color_pallete(),cljs.core.rand_int(cljs.core.count(piflow.ui.color_pallete())));
});
piflow.ui.random_color = (function piflow$ui$random_color(){
return piflow.ui.a_e_random_color();
});
piflow.ui.O_a_e_random_color = (function piflow$ui$O_a_e_random_color(){
return ["#",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rand_int((2))))?"a":"e"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rand_int((2))))?"a":"e"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rand_int((2))))?"a":"e")].join('');
});
piflow.ui.H3opac = (function piflow$ui$H3opac(hex_color,opacity){
var rgb = piflow.util.color_unhex(hex_color);
return ["rgb(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",rgb),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity),")"].join('');
});
piflow.ui.opacH3 = (function piflow$ui$opacH3(opacity,hex_color){
var rgb = piflow.util.color_unhex(hex_color);
return ["rgb(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",rgb),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity),")"].join('');
});
piflow.ui.pane_top_left = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"20em",new cljs.core.Keyword(null,"height","height",1025178622),"20em",new cljs.core.Keyword(null,"left","left",-399115937),"-2em",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"-2"], null);
piflow.ui.title = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),"3em",new cljs.core.Keyword(null,"top","top",-1856271961),"3em",new cljs.core.Keyword(null,"width","width",-384071477),"27em",new cljs.core.Keyword(null,"height","height",1025178622),"1.2em"], null);
piflow.ui.title_box = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),"3em",new cljs.core.Keyword(null,"left","left",-399115937),"3em",new cljs.core.Keyword(null,"height","height",1025178622),"2em",new cljs.core.Keyword(null,"width","width",-384071477),"50em",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#FFF"], null);
piflow.ui.link_home = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"top","top",-1856271961),"1.5em",new cljs.core.Keyword(null,"left","left",-399115937),"1.4em",new cljs.core.Keyword(null,"height","height",1025178622),"1.3em",new cljs.core.Keyword(null,"width","width",-384071477),"50em",new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null);
piflow.ui.form_email = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"4em",new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"height","height",1025178622),"1.4em",new cljs.core.Keyword(null,"width","width",-384071477),"14em"], null);
piflow.ui.form_password = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"6.2em",new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"height","height",1025178622),"1.4em",new cljs.core.Keyword(null,"width","width",-384071477),"14em"], null);
piflow.ui.form_selType = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"5em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"9em"], null);
piflow.ui.form_tos = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"7.4em",new cljs.core.Keyword(null,"left","left",-399115937),"-5em",new cljs.core.Keyword(null,"height","height",1025178622),"1.2em",new cljs.core.Keyword(null,"width","width",-384071477),"25em"], null);
piflow.ui.tos_chk = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"1.2em",new cljs.core.Keyword(null,"width","width",-384071477),"2em"], null);
piflow.ui.tos_agree = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"height","height",1025178622),"1.2em",new cljs.core.Keyword(null,"width","width",-384071477),"25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10pt"], null);
piflow.ui.a_tos = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative!important",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10pt",new cljs.core.Keyword(null,"width","width",-384071477),"25em"], null);
piflow.ui.form_submit_button = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"9em",new cljs.core.Keyword(null,"left","left",-399115937),"6em",new cljs.core.Keyword(null,"height","height",1025178622),"2em",new cljs.core.Keyword(null,"width","width",-384071477),"6em"], null);
piflow.ui.form_signup_button = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),"11em",new cljs.core.Keyword(null,"height","height",1025178622),"2em",new cljs.core.Keyword(null,"width","width",-384071477),"18em",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid black"], null);
piflow.ui.cont = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"8em",new cljs.core.Keyword(null,"left","left",-399115937),"11em",new cljs.core.Keyword(null,"height","height",1025178622),"17em",new cljs.core.Keyword(null,"width","width",-384071477),"17em"], null);
piflow.ui.selectType = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),"3em",new cljs.core.Keyword(null,"top","top",-1856271961),"3em"], null);
piflow.ui.footer_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"34em",new cljs.core.Keyword(null,"width","width",-384071477),"20em"], null);
piflow.ui.r_STAR_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null);
piflow.ui.s_STAR_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null);
piflow.ui.f_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"left","left",-399115937)], null);
piflow.ui.hsty = (function piflow$ui$hsty(i){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.s_STAR_,i)], null);
});
piflow.ui.sty = (function piflow$ui$sty(i){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$ui$sty_$_iter__41646(s__41647){
return (new cljs.core.LazySeq(null,(function (){
var s__41647__$1 = s__41647;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41647__$1);
if(temp__5804__auto__){
var s__41647__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41647__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41647__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41649 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41648 = (0);
while(true){
if((i__41648 < size__5522__auto__)){
var vec__41650 = cljs.core._nth(c__5521__auto__,i__41648);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41650,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41650,(1),null);
cljs.core.chunk_append(b__41649,[cljs.core.name(k),":",cljs.core.name(v),";"].join(''));

var G__41767 = (i__41648 + (1));
i__41648 = G__41767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41649),piflow$ui$sty_$_iter__41646(cljs.core.chunk_rest(s__41647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41649),null);
}
} else {
var vec__41653 = cljs.core.first(s__41647__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41653,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41653,(1),null);
return cljs.core.cons([cljs.core.name(k),":",cljs.core.name(v),";"].join(''),piflow$ui$sty_$_iter__41646(cljs.core.rest(s__41647__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(i);
})())], null);
});
piflow.ui.rsty = (function piflow$ui$rsty(i){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$ui$rsty_$_iter__41656(s__41657){
return (new cljs.core.LazySeq(null,(function (){
var s__41657__$1 = s__41657;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41657__$1);
if(temp__5804__auto__){
var s__41657__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41657__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41657__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41659 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41658 = (0);
while(true){
if((i__41658 < size__5522__auto__)){
var vec__41660 = cljs.core._nth(c__5521__auto__,i__41658);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41660,(1),null);
cljs.core.chunk_append(b__41659,[cljs.core.name(k),":",cljs.core.name(v),";"].join(''));

var G__41771 = (i__41658 + (1));
i__41658 = G__41771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41659),piflow$ui$rsty_$_iter__41656(cljs.core.chunk_rest(s__41657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41659),null);
}
} else {
var vec__41663 = cljs.core.first(s__41657__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41663,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41663,(1),null);
return cljs.core.cons([cljs.core.name(k),":",cljs.core.name(v),";"].join(''),piflow$ui$rsty_$_iter__41656(cljs.core.rest(s__41657__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.r_STAR_,i));
})())], null);
});
piflow.ui.osty = (function piflow$ui$osty(i){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$ui$osty_$_iter__41666(s__41667){
return (new cljs.core.LazySeq(null,(function (){
var s__41667__$1 = s__41667;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41667__$1);
if(temp__5804__auto__){
var s__41667__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41667__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41667__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41669 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41668 = (0);
while(true){
if((i__41668 < size__5522__auto__)){
var vec__41670 = cljs.core._nth(c__5521__auto__,i__41668);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41670,(1),null);
cljs.core.chunk_append(b__41669,[cljs.core.name(k),":",cljs.core.name(v),";"].join(''));

var G__41775 = (i__41668 + (1));
i__41668 = G__41775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41669),piflow$ui$osty_$_iter__41666(cljs.core.chunk_rest(s__41667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41669),null);
}
} else {
var vec__41673 = cljs.core.first(s__41667__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41673,(1),null);
return cljs.core.cons([cljs.core.name(k),":",cljs.core.name(v),";"].join(''),piflow$ui$osty_$_iter__41666(cljs.core.rest(s__41667__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.s_STAR_,i));
})())], null);
});
piflow.ui.fsty = (function piflow$ui$fsty(var_args){
var G__41677 = arguments.length;
switch (G__41677) {
case 0:
return piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"float:left;"], null);
}));

(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1 = (function (i){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$ui$iter__41678(s__41679){
return (new cljs.core.LazySeq(null,(function (){
var s__41679__$1 = s__41679;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41679__$1);
if(temp__5804__auto__){
var s__41679__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41679__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41679__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41681 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41680 = (0);
while(true){
if((i__41680 < size__5522__auto__)){
var vec__41682 = cljs.core._nth(c__5521__auto__,i__41680);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41682,(1),null);
cljs.core.chunk_append(b__41681,[cljs.core.name(k),":",cljs.core.name(v),";"].join(''));

var G__41780 = (i__41680 + (1));
i__41680 = G__41780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41681),piflow$ui$iter__41678(cljs.core.chunk_rest(s__41679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41681),null);
}
} else {
var vec__41685 = cljs.core.first(s__41679__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41685,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41685,(1),null);
return cljs.core.cons([cljs.core.name(k),":",cljs.core.name(v),";"].join(''),piflow$ui$iter__41678(cljs.core.rest(s__41679__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.f_STAR_,i));
})())], null);
}));

(piflow.ui.fsty.cljs$lang$maxFixedArity = 1);

piflow.ui.spacern = (function piflow$ui$spacern(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$ui$spacern_$_iter__41688(s__41689){
return (new cljs.core.LazySeq(null,(function (){
var s__41689__$1 = s__41689;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41689__$1);
if(temp__5804__auto__){
var s__41689__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41689__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41689__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41691 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41690 = (0);
while(true){
if((i__41690 < size__5522__auto__)){
var spacer = cljs.core._nth(c__5521__auto__,i__41690);
cljs.core.chunk_append(b__41691,piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.dom/set-el-style-attr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spacer,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], 0)));

var G__41784 = (i__41690 + (1));
i__41690 = G__41784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41691),piflow$ui$spacern_$_iter__41688(cljs.core.chunk_rest(s__41689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41691),null);
}
} else {
var spacer = cljs.core.first(s__41689__$2);
return cljs.core.cons(piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.dom/set-el-style-attr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spacer,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], 0)),piflow$ui$spacern_$_iter__41688(cljs.core.rest(s__41689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(document.getElementsByClassName("spacer"));
})());
});
piflow.ui.spacerm = (function piflow$ui$spacerm(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$ui$spacerm_$_iter__41692(s__41693){
return (new cljs.core.LazySeq(null,(function (){
var s__41693__$1 = s__41693;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41693__$1);
if(temp__5804__auto__){
var s__41693__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41693__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41693__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41695 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41694 = (0);
while(true){
if((i__41694 < size__5522__auto__)){
var spacer = cljs.core._nth(c__5521__auto__,i__41694);
cljs.core.chunk_append(b__41695,piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.dom/set-el-style-attr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spacer,new cljs.core.Keyword(null,"background-color","background-color",570434026),piflow.ui.random_color_w_ignore_list()], 0)));

var G__41785 = (i__41694 + (1));
i__41694 = G__41785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41695),piflow$ui$spacerm_$_iter__41692(cljs.core.chunk_rest(s__41693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41695),null);
}
} else {
var spacer = cljs.core.first(s__41693__$2);
return cljs.core.cons(piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.dom/set-el-style-attr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spacer,new cljs.core.Keyword(null,"background-color","background-color",570434026),piflow.ui.random_color_w_ignore_list()], 0)),piflow$ui$spacerm_$_iter__41692(cljs.core.rest(s__41693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(document.getElementsByClassName("spacer"));
})());
});
piflow.ui.spacer_dev = (function piflow$ui$spacer_dev(color,w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null))], null);
});
piflow.ui.spacer = (function piflow$ui$spacer(w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer.spacer","div#spacer.spacer",-2102633588),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null))], null);
});
piflow.ui.spacer_fr = (function piflow$ui$spacer_fr(w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer.spacer","div#spacer.spacer",-2102633588),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833)], null))], null);
});
piflow.ui.change_bc = (function piflow$ui$change_bc(e){
var el = e.target;
var el_style = piflow.dom.get_el_attr(el,"style");
return piflow.dom.set_el_attr(el,"style",piflow.dom.sty_map_GT_str(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piflow.dom.sty_str_GT_map(el_style),new cljs.core.Keyword(null,"background-color","background-color",570434026),piflow.ui.random_color())));
});
piflow.dom.set_el_attr(document.body,"style",["background-color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piflow.ui.random_color()),";margin:0;text-transform:lowercase;"].join(''));
piflow.ui.body_bc = (function piflow$ui$body_bc(hex_color){
var pane = document.body;
var pane_style = piflow.dom.get_el_attr(pane,"style");
if(cljs.core.truth_(pane_style)){
return piflow.dom.set_el_attr(pane,"style",piflow.dom.sty_map_GT_str(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piflow.dom.sty_str_GT_map(pane_style),new cljs.core.Keyword(null,"background-color","background-color",570434026),hex_color)));
} else {
return piflow.dom.set_el_attr(pane,"style",piflow.dom.sty_map_GT_str(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),hex_color,new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)));
}
});
piflow.ui.rotate_el = (function piflow$ui$rotate_el(rotation_degrees,style_map){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(style_map,new cljs.core.Keyword(null,"-webkit-transform","-webkit-transform",-624763371),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotation_degrees),"deg);"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-moz-transform","-moz-transform",1304730193),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotation_degrees),"deg);"].join(''),new cljs.core.Keyword(null,"-o-transform","-o-transform",619248940),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotation_degrees),"deg);"].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotation_degrees),"deg);"].join('')], 0));
});
piflow.ui.stripes = (function piflow$ui$stripes(){
var cols = piflow.ui.color_pallete();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.osty(piflow.ui.pane_top_left),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"-16em",new cljs.core.Keyword(null,"top","top",-1856271961),"0em",new cljs.core.Keyword(null,"width","width",-384071477),"31em",new cljs.core.Keyword(null,"height","height",1025178622),"17em",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#FFF"], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#FFF"], 0));
})], null))], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.osty(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),"-19em"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"0em",new cljs.core.Keyword(null,"top","top",-1856271961),"16em",new cljs.core.Keyword(null,"width","width",-384071477),"41em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(0))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(0))], 0));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"1em",new cljs.core.Keyword(null,"top","top",-1856271961),"16em",new cljs.core.Keyword(null,"width","width",-384071477),"41em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(1))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(1))], 0));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"top","top",-1856271961),"16em",new cljs.core.Keyword(null,"width","width",-384071477),"41em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(2))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(2))], 0));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"3em",new cljs.core.Keyword(null,"top","top",-1856271961),"16em",new cljs.core.Keyword(null,"width","width",-384071477),"41em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(3))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(3))], 0));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"4em",new cljs.core.Keyword(null,"top","top",-1856271961),"16em",new cljs.core.Keyword(null,"width","width",-384071477),"41em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(4))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(4))], 0));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"5em",new cljs.core.Keyword(null,"top","top",-1856271961),"16em",new cljs.core.Keyword(null,"width","width",-384071477),"41em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(5))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(5))], 0));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"6em",new cljs.core.Keyword(null,"top","top",-1856271961),"16em",new cljs.core.Keyword(null,"width","width",-384071477),"41em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(6))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(6))], 0));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.rotate_el("-60",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),"7em",new cljs.core.Keyword(null,"top","top",-1856271961),"16em",new cljs.core.Keyword(null,"width","width",-384071477),"41em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(7))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cols,(7))], 0));
})], null))], null)], null)], null);
});
piflow.ui.choose_utf8 = (function piflow$ui$choose_utf8(purpose){
var close_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","\u2297"], null);
var move_list = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2608","\u219D","\u21AB","\u21AC","\u21AF"], null);
var resize_list = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u21F1","\u21F2","\u2798"], null);
var rescale_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u21C5","\u21C4"], null);
var texture_list = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2591","\u2592","\u2593"], null);
var misc_list = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u262E","\u2686","\u2687","\u262F","\u2609","\u263A","\u2764","\u221E","\u2234","\u223F"], null);
var config_list = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2699","\u2609","\u2692","\u2695","\u2702"], null);
var help_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?","\u00BF"], null);
var char_list = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(purpose,"close"))?close_list:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(purpose,"move"))?move_list:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(purpose,"resize"))?resize_list:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(purpose,"rescale"))?rescale_list:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(purpose,"help"))?help_list:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(purpose,"config"))?config_list:cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(move_list,resize_list,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rescale_list,close_list,misc_list,texture_list,config_list,help_list], 0))
))))));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(char_list,cljs.core.rand_int(cljs.core.count(char_list)));
});
piflow.ui.list_col = (function piflow$ui$list_col(i){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(i,(2)))){
return "#eee";
} else {
return new cljs.core.Keyword(null,"white","white",-483998618);
}
});
piflow.ui.div_inp = (function piflow$ui$div_inp(w,h,s){
var str_em = "0.17em";
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),str_em,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"200"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(5)),"_display_title"].join('')], null),piflow.ui.sty(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null))),s], null)], null),piflow.ui.spacer(".2em","1em")], null);
});
piflow.ui.div_inp_a = (function piflow$ui$div_inp_a(w,h,s,href){
var str_em = "0.17em";
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),str_em,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"200"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.sty(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),href], null)),s], null)], null),piflow.ui.spacer(".2em","1em")], null);
});
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.click_animation_transition !== 'undefined')){
} else {
piflow.ui.click_animation_transition = "transform 0.628s ease-out";
}
piflow.ui.pane_div_inp_omd = (function piflow$ui$pane_div_inp_omd(s,title,on_mouse_down){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.sty(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),piflow.ui.click_animation_transition,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),on_mouse_down,new cljs.core.Keyword(null,"onmouseup","onmouseup",168100736),(function (e){
if((!((window.piflow.core.global_close_fn == null)))){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.core/global-mouseup-fn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
return null;
}
}),new cljs.core.Keyword(null,"title","title",636505583),title], null)),s], null)], null),piflow.ui.spacer("1em","1em")], null);
});
piflow.ui.pane_div_inp_o = (function piflow$ui$pane_div_inp_o(s,title,on_click){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0.1em",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.sty(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),piflow.ui.click_animation_transition,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),(function (e){
return window.press_down(e);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"title","title",636505583),title], null)),s], null)], null),piflow.ui.spacer("1em","1em")], null);
});
piflow.ui.div_inp_o = (function piflow$ui$div_inp_o(w,h,s,title,on_click){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0.17em",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"200"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.sty(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),piflow.ui.click_animation_transition,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),(function (e){
return window.press_down(e);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"title","title",636505583),title], null)),s], null)], null),piflow.ui.spacer("0.2em","1em")], null);
});
piflow.ui.cont_admin = (function piflow$ui$cont_admin(){
var font_size = "1.5em";
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#admin","div#admin",68359215),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size], null)),piflow.ui.spacer("0.5em",font_size),piflow.ui.div_inp_o(font_size,font_size,piflow.ui.choose_utf8("close"),"Log Out",(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([piflow.ui.random_color()], 0));
})),piflow.ui.div_inp_o(font_size,font_size,piflow.ui.choose_utf8("config"),"Config",(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([piflow.ui.random_color()], 0));
})),piflow.ui.div_inp_o(font_size,font_size,piflow.ui.choose_utf8("help"),"Help",(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/body-bc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([piflow.ui.random_color()], 0));
}))], null);
});
if((typeof piflow !== 'undefined') && (typeof piflow.ui !== 'undefined') && (typeof piflow.ui.nav_title_list !== 'undefined')){
} else {
piflow.ui.nav_title_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
piflow.ui.cont_nav_title = (function piflow$ui$cont_nav_title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100"], null)),piflow.ui.spacer("100%","4em"),piflow.ui.spacer("1.5em","3em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0px 10px 10px 0px",new cljs.core.Keyword(null,"background-color","background-color",570434026),((((1) < cljs.core.count(cljs.core.deref(piflow.ui.nav_title_list))))?new cljs.core.Keyword(null,"white","white",-483998618):new cljs.core.Keyword(null,"transparent","transparent",-2073609949)),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0.3em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0.3em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)),(function (){var iter__5523__auto__ = (function piflow$ui$cont_nav_title_$_iter__41696(s__41697){
return (new cljs.core.LazySeq(null,(function (){
var s__41697__$1 = s__41697;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41697__$1);
if(temp__5804__auto__){
var s__41697__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41697__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41697__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41699 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41698 = (0);
while(true){
if((i__41698 < size__5522__auto__)){
var title_map = cljs.core._nth(c__5521__auto__,i__41698);
cljs.core.chunk_append(b__41699,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"17pt",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0.3em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0.3em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["nav-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piflow.util.index_of(title_map,cljs.core.deref(piflow.ui.nav_title_list)))].join('')], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41698,title_map,c__5521__auto__,size__5522__auto__,b__41699,s__41697__$2,temp__5804__auto__){
return (function (e){
return piflow.dom.update_flux(piflow.util.invoke(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(title_map)));
});})(i__41698,title_map,c__5521__auto__,size__5522__auto__,b__41699,s__41697__$2,temp__5804__auto__))
], null)], 0)),((((1) < cljs.core.count(cljs.core.deref(piflow.ui.nav_title_list))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(title_map)),"/"].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(title_map)))], null));

var G__41786 = (i__41698 + (1));
i__41698 = G__41786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41699),piflow$ui$cont_nav_title_$_iter__41696(cljs.core.chunk_rest(s__41697__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41699),null);
}
} else {
var title_map = cljs.core.first(s__41697__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"17pt",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0.3em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0.3em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["nav-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piflow.util.index_of(title_map,cljs.core.deref(piflow.ui.nav_title_list)))].join('')], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (title_map,s__41697__$2,temp__5804__auto__){
return (function (e){
return piflow.dom.update_flux(piflow.util.invoke(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(title_map)));
});})(title_map,s__41697__$2,temp__5804__auto__))
], null)], 0)),((((1) < cljs.core.count(cljs.core.deref(piflow.ui.nav_title_list))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(title_map)),"/"].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(title_map)))], null),piflow$ui$cont_nav_title_$_iter__41696(cljs.core.rest(s__41697__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(piflow.ui.nav_title_list));
})()], null)], null);
});
piflow.ui.cont_title = (function piflow$ui$cont_title(title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),title], null)], null);
});
piflow.ui.footer = (function piflow$ui$footer(msg){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),piflow.ui.osty(piflow.ui.footer_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),piflow.ui.osty(piflow.ui.s_STAR_),msg], null)], null);
});
piflow.ui.draw_em_ruler = (function piflow$ui$draw_em_ruler(tag,n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.osty(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"-2em"], null))], null),(function (){var iter__5523__auto__ = (function piflow$ui$draw_em_ruler_$_iter__41700(s__41701){
return (new cljs.core.LazySeq(null,(function (){
var s__41701__$1 = s__41701;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41701__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var i = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__41701__$1,i,xs__6360__auto__,temp__5804__auto__){
return (function piflow$ui$draw_em_ruler_$_iter__41700_$_iter__41702(s__41703){
return (new cljs.core.LazySeq(null,((function (s__41701__$1,i,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__41703__$1 = s__41703;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__41703__$1);
if(temp__5804__auto____$1){
var s__41703__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41703__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41703__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41705 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41704 = (0);
while(true){
if((i__41704 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__41704);
cljs.core.chunk_append(b__41705,(((j === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"em"].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((j + (i * (10)))),"em"].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)], null)));

var G__41791 = (i__41704 + (1));
i__41704 = G__41791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41705),piflow$ui$draw_em_ruler_$_iter__41700_$_iter__41702(cljs.core.chunk_rest(s__41703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41705),null);
}
} else {
var j = cljs.core.first(s__41703__$2);
return cljs.core.cons((((j === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"em"].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((j + (i * (10)))),"em"].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)], null)),piflow$ui$draw_em_ruler_$_iter__41700_$_iter__41702(cljs.core.rest(s__41703__$2)));
}
} else {
return null;
}
break;
}
});})(s__41701__$1,i,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__41701__$1,i,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,piflow$ui$draw_em_ruler_$_iter__41700(cljs.core.rest(s__41701__$1)));
} else {
var G__41792 = cljs.core.rest(s__41701__$1);
s__41701__$1 = G__41792;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
});
piflow.ui.remove_pane = (function piflow$ui$remove_pane(click_event){
return piflow.dom.remove_element("pane");
});
piflow.ui.assumptions = (function piflow$ui$assumptions(vio_map){
var assumptions = new cljs.core.Keyword(null,"assumptions","assumptions",580402220).cljs$core$IFn$_invoke$arity$1(vio_map);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-stroke","text-stroke",-610691607),"1px solid black",new cljs.core.Keyword(null,"text-size","text-size",-945618309),"13pt"], null)),piflow.ui.spacer("100%","0.2em"),piflow.ui.spacer("2em","8em"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"38em",new cljs.core.Keyword(null,"height","height",1025178622),"8em",new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)),"These calculations are based on the following assumptions:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__5523__auto__ = (function piflow$ui$assumptions_$_iter__41706(s__41707){
return (new cljs.core.LazySeq(null,(function (){
var s__41707__$1 = s__41707;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41707__$1);
if(temp__5804__auto__){
var s__41707__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41707__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41707__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41709 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41708 = (0);
while(true){
if((i__41708 < size__5522__auto__)){
var assumption = cljs.core._nth(c__5521__auto__,i__41708);
cljs.core.chunk_append(b__41709,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),assumption], null));

var G__41793 = (i__41708 + (1));
i__41708 = G__41793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41709),piflow$ui$assumptions_$_iter__41706(cljs.core.chunk_rest(s__41707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41709),null);
}
} else {
var assumption = cljs.core.first(s__41707__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),assumption], null),piflow$ui$assumptions_$_iter__41706(cljs.core.rest(s__41707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(assumptions);
})())], null)], null),piflow.ui.spacer("100%","0.314em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14pt",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bolder"], null)),"Click here to remove assumptions"], null),piflow.ui.spacer("100%","0.2em")], null);
});
piflow.ui.local_pane = (function piflow$ui$local_pane(pane_id,local_pane_overlay,local_pane_underlay){

var pane_height = (12);
var pane_width = (42);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_height),"em"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_width),"em"].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),pane_id], null),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["0px 8px 13px #aaa","1.7em","rgb(255,0,0,0.628)",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_width),"em"].join(''),"100",new cljs.core.Keyword(null,"relative","relative",22796862),"1px solid white","10px 10px 10px 10px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_height),"em"].join(''),"2.3em"]))),piflow.ui.spacer("100%","0.314em"),piflow.ui.spacer("0.314em","1.2em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"1.3em",new cljs.core.Keyword(null,"height","height",1025178622),"1.3em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.dom/remove-element",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_id], 0));
})], null)),"X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"27em",new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14pt",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bolder"], null)),"Assumptions"], null),piflow.ui.spacer("100%","0em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),local_pane_overlay], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#localladom","div#localladom",-715003286),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"top","top",-1856271961),["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_height),"em"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)),local_pane_underlay], null)], null);
});
piflow.ui.get_pane_id = (function piflow$ui$get_pane_id(e){
var curr = e.target;
while(true){
if((curr == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pane_",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(curr.id,(0),(5)))){
return curr.id;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr,document)){
return null;
} else {
var G__41794 = curr.parentNode;
curr = G__41794;
continue;

}
}
}
break;
}
});
piflow.ui.move_element = (function piflow$ui$move_element(click_event){
return window.addMyMoveEvent(click_event);
});
piflow.ui.rescale_element = (function piflow$ui$rescale_element(click_event){
return window.addMyRescaleEvent(click_event);
});
piflow.ui.resize_element = (function piflow$ui$resize_element(click_event){
return window.addMyResizeEvent(click_event);
});
piflow.ui.new_pane_id = (function piflow$ui$new_pane_id(s){
var panes = window.GLOB_flow_graph;
var max_panes = (1717);
var random_pane_id = (function (){var cnt = (0);
var loop_id = ["pane_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int(max_panes))].join('');
while(true){
if((cnt < max_panes)){
if(cljs.core.contains_QMARK_(panes,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(loop_id))){
var G__41795 = (cnt + (1));
var G__41796 = ["pane_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int(max_panes))].join('');
cnt = G__41795;
loop_id = G__41796;
continue;
} else {
return loop_id;
}
} else {
return ["pane_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"_MAX_PANES_REACHED"].join('');
}
break;
}
})();
return random_pane_id;
});
piflow.ui.update_map = (function piflow$ui$update_map(pane_id,m){
if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"id","id",-1388402092))){
if(clojure.string.includes_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),"flux")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m)),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_id)].join(''));
} else {
return m;
}
} else {
return m;
}
});
piflow.ui.flux_pane_id = (function piflow$ui$flux_pane_id(pane_id,parent){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function piflow$ui$flux_pane_id_$_iter__41710(s__41711){
return (new cljs.core.LazySeq(null,(function (){
var s__41711__$1 = s__41711;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41711__$1);
if(temp__5804__auto__){
var s__41711__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41711__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41711__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41713 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41712 = (0);
while(true){
if((i__41712 < size__5522__auto__)){
var child = cljs.core._nth(c__5521__auto__,i__41712);
cljs.core.chunk_append(b__41713,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(cljs.core.PersistentVector.EMPTY),cljs.core.type(child)))?(piflow.ui.flux_pane_id.cljs$core$IFn$_invoke$arity$2 ? piflow.ui.flux_pane_id.cljs$core$IFn$_invoke$arity$2(pane_id,child) : piflow.ui.flux_pane_id.call(null,pane_id,child)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(cljs.core.PersistentArrayMap.EMPTY),cljs.core.type(child)))?piflow.ui.update_map(pane_id,child):child
)));

var G__41799 = (i__41712 + (1));
i__41712 = G__41799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41713),piflow$ui$flux_pane_id_$_iter__41710(cljs.core.chunk_rest(s__41711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41713),null);
}
} else {
var child = cljs.core.first(s__41711__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(cljs.core.PersistentVector.EMPTY),cljs.core.type(child)))?(piflow.ui.flux_pane_id.cljs$core$IFn$_invoke$arity$2 ? piflow.ui.flux_pane_id.cljs$core$IFn$_invoke$arity$2(pane_id,child) : piflow.ui.flux_pane_id.call(null,pane_id,child)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(cljs.core.PersistentArrayMap.EMPTY),cljs.core.type(child)))?piflow.ui.update_map(pane_id,child):child
)),piflow$ui$flux_pane_id_$_iter__41710(cljs.core.rest(s__41711__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parent);
})());
});
piflow.ui.update_flux = (function piflow$ui$update_flux(click_event,el_id,new_cont){
var match = window.get_match_id(click_event,"pane");
var flux_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document,match))?["flux_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(el_id,/ /)))].join(''):["flux_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(el_id,/ /))),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
return piflow.dom.reset_div(flux_id,new_cont);
});
piflow.ui.ngpane_we = (function piflow$ui$ngpane_we(event,pane_id,pane_contents,parent){
var font_size = "2em";
var vec__41714 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.pageX,event.pageY,(207)], null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41714,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41714,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41714,(2),null);
parent.appendChild((function (){var v41717 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"height","height",1025178622),"15em",new cljs.core.Keyword(null,"width","width",-384071477),"30em",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0px 8px 13px #aaa",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"207",new cljs.core.Keyword(null,"background-color","background-color",570434026),piflow.util.invoke("piflow.ui/random-color"),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('')], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),(function (e){
return window.into_view(window.get_match_id(e,"pane"));
})], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),(function (e){
return window.to_top(window.get_match_id(e,"pane"));
}),new cljs.core.Keyword(null,"id","id",-1388402092),pane_id], null)], 0)),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"-ms-user-select","-ms-user-select",953709445),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"none","none",1333468478)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.subs.cljs$core$IFn$_invoke$arity$2(pane_id,(5)),"_title_bar"].join('')], null)),piflow.ui.spacer("1em","1em"),piflow.ui.pane_div_inp_o(piflow.ui.choose_utf8("close"),"Close",(function (e){
if((!((window.piflow.core.global_close_fn == null)))){
piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.core/global-close-fn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
}

piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("window.press_down",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

(window["GLOB_flow_graph"] = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(window.GLOB_flow_graph,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pane_id)));

return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.dom/remove-element",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_id], 0));
})),piflow.ui.pane_div_inp_omd(piflow.ui.choose_utf8("move"),"Move",(function (e){
if((!((window.piflow.core.global_move_fn == null)))){
piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.core/global-move-fn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
}

window.press_down(e);

return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/move-element",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
})),piflow.ui.pane_div_inp_omd(piflow.ui.choose_utf8("resize"),"Resize",(function (e){
if((!((window.piflow.core.global_resize_fn == null)))){
piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.core/global-move-fn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
}

piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("window.press_down",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/resize-element",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
})),piflow.ui.pane_div_inp_omd(piflow.ui.choose_utf8("rescale"),"Rescale",(function (e){
if((!((window.piflow.core.global_rescale_fn == null)))){
piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.core/global-move-fn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
} else {
}

piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("window.press_down",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/rescale-element",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
})),piflow.ui.div_inp("",font_size,pane_id),piflow.ui.spacer("4em","1em"),piflow.ui.div_inp("",font_size,cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pane_id,"_")))], null),piflow.ui.spacer("0.5em","2em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0px 8px 13px #aaa",new cljs.core.Keyword(null,"height","height",1025178622),"95%",new cljs.core.Keyword(null,"width","width",-384071477),"98%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492)], null))),piflow.ui.flux_pane_id(pane_id,pane_contents)], null)], null);
var el__11611__auto__ = hipo.interpreter.create(v41717,null);
hipo.core.set_hiccup_BANG_(el__11611__auto__,v41717);

return el__11611__auto__;
})());

return window.to_top(pane_id);
});
piflow.ui.ngpane_w = (function piflow$ui$ngpane_w(pane_id,pane_contents,parent){
return piflow.ui.ngpane_we(null,pane_id,pane_contents,parent);
});
piflow.ui.ngpane = (function piflow$ui$ngpane(partial_pane_id,pane_contents){
var pane_id = piflow.ui.new_pane_id(partial_pane_id);
return piflow.ui.ngpane_w(pane_id,pane_contents,document.body);
});
piflow.ui.pane = (function piflow$ui$pane(pane_contents){
var pane_id = piflow.ui.new_pane_id("");
return piflow.ui.ngpane(pane_id,pane_contents);
});
piflow.ui.pane_eat_event = (function piflow$ui$pane_eat_event(click_event,pane_id,pane_contents){
return piflow.ui.ngpane(pane_id,pane_contents);
});
piflow.ui.scont_pane = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.innerWidth),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.innerHeight),"px"].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"298"], null);
piflow.ui.spane_close = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(128, 128, 128, 0.628)",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__5130__auto__ = (function (){var x__5130__auto__ = document.clientWidth;
var y__5131__auto__ = window.innerWidth;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = window.outerWidth;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.outerHeight),"px"].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"299"], null);
piflow.ui.spane = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"300",new cljs.core.Keyword(null,"width","width",-384071477),"60em",new cljs.core.Keyword(null,"height","height",1025178622),"20em",new cljs.core.Keyword(null,"top","top",-1856271961),"10em",new cljs.core.Keyword(null,"left","left",-399115937),"10em",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492)], null);
piflow.ui.pane_click_close_backdrop = (function piflow$ui$pane_click_close_backdrop(pane_contents){
return document.body.appendChild((function (){var v41718 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pane.pane","div#pane.pane",2073357538),piflow.ui.osty(piflow.ui.scont_pane),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(piflow.ui.osty(piflow.ui.spane_close),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/remove-pane",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
})], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.osty(piflow.ui.spane),pane_contents], null)], null);
var el__11611__auto__ = hipo.interpreter.create(v41718,null);
hipo.core.set_hiccup_BANG_(el__11611__auto__,v41718);

return el__11611__auto__;
})());
});
piflow.ui.uniq_colors = (function piflow$ui$uniq_colors(n){
var arbitrary_default = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#aaa","#aae","#aea","#aee","#eaa","#eae","#eea","#eee"], null);
var colors = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function piflow$ui$uniq_colors_$_iter__41719(s__41720){
return (new cljs.core.LazySeq(null,(function (){
var s__41720__$1 = s__41720;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41720__$1);
if(temp__5804__auto__){
var s__41720__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41720__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41720__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41722 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41721 = (0);
while(true){
if((i__41721 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__41721);
cljs.core.chunk_append(b__41722,piflow.ui.random_color());

var G__41805 = (i__41721 + (1));
i__41721 = G__41805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41722),piflow$ui$uniq_colors_$_iter__41719(cljs.core.chunk_rest(s__41720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41722),null);
}
} else {
var i = cljs.core.first(s__41720__$2);
return cljs.core.cons(piflow.ui.random_color(),piflow$ui$uniq_colors_$_iter__41719(cljs.core.rest(s__41720__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(((3) * n)));
})())));
if((n > cljs.core.count(colors))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arbitrary_default,(0),n);
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(colors,(0),n);
}
});
piflow.ui.button_attributes_id = (function piflow$ui$button_attributes_id(other_style,click_fn,el_id,new_cont){
var col_list = piflow.ui.uniq_colors((3));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"button",new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),(function (e){
return window.press_down(e);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(e.ctrlKey)){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/ngpane",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el_id,new_cont], 0));
} else {
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic(click_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el_id,new_cont], 0));

}
}),new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic("piflow.ui/ngpane",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el_id,new_cont], 0));
})], null),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"transition","transition",765692007),piflow.ui.click_animation_transition,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.3em",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0  4px 0 -1px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(col_list)),",0  8px 0 -2px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(col_list)),",0 16px 0 -3px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_list,(2)))].join('')], null),other_style)));
});
piflow.ui.button_attributes = (function piflow$ui$button_attributes(other_style,click_fn,new_cont){
var col_list = piflow.ui.uniq_colors((3));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),(function (e){
return window.press_down(e);
}),new cljs.core.Keyword(null,"id","id",-1388402092),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic(click_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_cont], 0));
})], null),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"transition","transition",765692007),piflow.ui.click_animation_transition,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.3em",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0  4px 0 -1px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(col_list)),",0  8px 0 -2px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(col_list)),",0 16px 0 -3px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_list,(2)))].join('')], null),other_style)));
});
piflow.ui.ring_chart = (function piflow$ui$ring_chart(slices,orientation,ring_ends){
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,slices);
var uniq_cols = piflow.ui.uniq_colors(cljs.core.count(slices));
var degrees = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function piflow$ui$ring_chart_$_iter__41723(s__41724){
return (new cljs.core.LazySeq(null,(function (){
var s__41724__$1 = s__41724;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41724__$1);
if(temp__5804__auto__){
var s__41724__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41724__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41724__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41726 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41725 = (0);
while(true){
if((i__41725 < size__5522__auto__)){
var slice = cljs.core._nth(c__5521__auto__,i__41725);
cljs.core.chunk_append(b__41726,parseInt((((360) - ring_ends) * (slice / total))));

var G__41812 = (i__41725 + (1));
i__41725 = G__41812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41726),piflow$ui$ring_chart_$_iter__41723(cljs.core.chunk_rest(s__41724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41726),null);
}
} else {
var slice = cljs.core.first(s__41724__$2);
return cljs.core.cons(parseInt((((360) - ring_ends) * (slice / total))),piflow$ui$ring_chart_$_iter__41723(cljs.core.rest(s__41724__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(slices);
})());
var gradients = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white",parseInt(cljs.core.mod((orientation - (ring_ends / (2))),(360))),parseInt(cljs.core.mod((orientation + (ring_ends / (2))),(360)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(uniq_cols),parseInt(cljs.core.mod((orientation + (ring_ends / (2))),(360))),parseInt(cljs.core.mod((cljs.core.first(degrees) + (orientation + (ring_ends / (2)))),(360)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(uniq_cols),parseInt(cljs.core.mod((cljs.core.first(degrees) + (orientation + (ring_ends / (2)))),(360))),parseInt(cljs.core.mod((cljs.core.second(degrees) + (cljs.core.first(degrees) + (orientation + (ring_ends / (2))))),(360)))], null)], null);
var smallest = (function (){var i = (0);
var smallest = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(361),(0)], null);
while(true){
if((i < cljs.core.count(gradients))){
if((cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(gradients,i)) < cljs.core.second(smallest))){
var G__41814 = (i + (1));
var G__41815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(gradients,i);
i = G__41814;
smallest = G__41815;
continue;
} else {
var G__41816 = (i + (1));
var G__41817 = smallest;
i = G__41816;
smallest = G__41817;
continue;
}
} else {
return smallest;
}
break;
}
})();
var split_0 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5523__auto__ = (function piflow$ui$ring_chart_$_iter__41727(s__41728){
return (new cljs.core.LazySeq(null,(function (){
var s__41728__$1 = s__41728;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41728__$1);
if(temp__5804__auto__){
var s__41728__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41728__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41728__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41730 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41729 = (0);
while(true){
if((i__41729 < size__5522__auto__)){
var grad = cljs.core._nth(c__5521__auto__,i__41729);
cljs.core.chunk_append(b__41730,(((1.5 > Math.abs((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grad,(2)) - cljs.core.second(smallest)))))?grad:null));

var G__41818 = (i__41729 + (1));
i__41729 = G__41818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41730),piflow$ui$ring_chart_$_iter__41727(cljs.core.chunk_rest(s__41728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41730),null);
}
} else {
var grad = cljs.core.first(s__41728__$2);
return cljs.core.cons((((1.5 > Math.abs((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grad,(2)) - cljs.core.second(smallest)))))?grad:null),piflow$ui$ring_chart_$_iter__41727(cljs.core.rest(s__41728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(gradients);
})()));
var gradient = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(split_0))," ","0deg ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(split_0,(2))),"deg,",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5523__auto__ = (function piflow$ui$ring_chart_$_iter__41735(s__41736){
return (new cljs.core.LazySeq(null,(function (){
var s__41736__$1 = s__41736;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41736__$1);
if(temp__5804__auto__){
var s__41736__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41736__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41736__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41738 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41737 = (0);
while(true){
if((i__41737 < size__5522__auto__)){
var grad = cljs.core._nth(c__5521__auto__,i__41737);
cljs.core.chunk_append(b__41738,(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grad,split_0))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(grad))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(grad)),"deg ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grad,(2))),"deg,"].join(''):null));

var G__41819 = (i__41737 + (1));
i__41737 = G__41819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41738),piflow$ui$ring_chart_$_iter__41735(cljs.core.chunk_rest(s__41736__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41738),null);
}
} else {
var grad = cljs.core.first(s__41736__$2);
return cljs.core.cons((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grad,split_0))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(grad))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(grad)),"deg ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grad,(2))),"deg,"].join(''):null),piflow$ui$ring_chart_$_iter__41735(cljs.core.rest(s__41736__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,gradients));
})())),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(split_0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(split_0)),"deg ","360deg"].join('')].join('');
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"14em",new cljs.core.Keyword(null,"height","height",1025178622),"14em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["conic-gradient(",gradient,")"].join('')], null))], null),piflow.ui.spacer("3.14em","13em"),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0()], null),(function (){var iter__5523__auto__ = (function piflow$ui$ring_chart_$_iter__41739(s__41740){
return (new cljs.core.LazySeq(null,(function (){
var s__41740__$1 = s__41740;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41740__$1);
if(temp__5804__auto__){
var s__41740__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41740__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41740__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41742 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41741 = (0);
while(true){
if((i__41741 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__41741);
cljs.core.chunk_append(b__41742,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"70%"], null)),piflow.ui.spacer("100%","1em"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uniq_cols,i)], null))], null),piflow.ui.spacer("0.7em","1em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(slices,i))], null)], null));

var G__41821 = (i__41741 + (1));
i__41741 = G__41821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41742),piflow$ui$ring_chart_$_iter__41739(cljs.core.chunk_rest(s__41740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41742),null);
}
} else {
var i = cljs.core.first(s__41740__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"70%"], null)),piflow.ui.spacer("100%","1em"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uniq_cols,i)], null))], null),piflow.ui.spacer("0.7em","1em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(slices,i))], null)], null),piflow$ui$ring_chart_$_iter__41739(cljs.core.rest(s__41740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(slices)));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.sty(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"200",new cljs.core.Keyword(null,"top","top",-1856271961),"2em",new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"width","width",-384071477),"10em",new cljs.core.Keyword(null,"height","height",1025178622),"10em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null))], null)], null);
});
piflow.ui.pie_chart = (function piflow$ui$pie_chart(slices){
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,slices);
var degrees = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function piflow$ui$pie_chart_$_iter__41743(s__41744){
return (new cljs.core.LazySeq(null,(function (){
var s__41744__$1 = s__41744;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41744__$1);
if(temp__5804__auto__){
var s__41744__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41744__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41744__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41746 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41745 = (0);
while(true){
if((i__41745 < size__5522__auto__)){
var slice = cljs.core._nth(c__5521__auto__,i__41745);
cljs.core.chunk_append(b__41746,parseInt(((360) * (slice / total))));

var G__41825 = (i__41745 + (1));
i__41745 = G__41825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41746),piflow$ui$pie_chart_$_iter__41743(cljs.core.chunk_rest(s__41744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41746),null);
}
} else {
var slice = cljs.core.first(s__41744__$2);
return cljs.core.cons(parseInt(((360) * (slice / total))),piflow$ui$pie_chart_$_iter__41743(cljs.core.rest(s__41744__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(slices);
})());
var str_degrees = (function (){var str_degrees = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i < cljs.core.count(degrees))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),i)){
var G__41826 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(str_degrees,["0deg ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(degrees,i)),"deg"].join(''));
var G__41827 = (i + (1));
str_degrees = G__41826;
i = G__41827;
continue;
} else {
var pre_sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(degrees,(0),i));
var G__41828 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(str_degrees,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_sum),"deg ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((pre_sum + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(degrees,i))),"deg"].join(''));
var G__41829 = (i + (1));
str_degrees = G__41828;
i = G__41829;
continue;
}
} else {
return str_degrees;
}
break;
}
})();
var uniq_cols = piflow.ui.uniq_colors(cljs.core.count(slices));
var gradient = clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",(function (){var iter__5523__auto__ = (function piflow$ui$pie_chart_$_iter__41747(s__41748){
return (new cljs.core.LazySeq(null,(function (){
var s__41748__$1 = s__41748;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41748__$1);
if(temp__5804__auto__){
var s__41748__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41748__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41748__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41750 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41749 = (0);
while(true){
if((i__41749 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__41749);
cljs.core.chunk_append(b__41750,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uniq_cols,i))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(str_degrees,i))].join(''));

var G__41830 = (i__41749 + (1));
i__41749 = G__41830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41750),piflow$ui$pie_chart_$_iter__41747(cljs.core.chunk_rest(s__41748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41750),null);
}
} else {
var i = cljs.core.first(s__41748__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uniq_cols,i))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(str_degrees,i))].join(''),piflow$ui$pie_chart_$_iter__41747(cljs.core.rest(s__41748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(str_degrees)));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"13em",new cljs.core.Keyword(null,"height","height",1025178622),"13em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["conic-gradient(",gradient,")"].join('')], null))], null),piflow.ui.spacer("3.14em","13em"),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0()], null),(function (){var iter__5523__auto__ = (function piflow$ui$pie_chart_$_iter__41751(s__41752){
return (new cljs.core.LazySeq(null,(function (){
var s__41752__$1 = s__41752;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41752__$1);
if(temp__5804__auto__){
var s__41752__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41752__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41752__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41754 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41753 = (0);
while(true){
if((i__41753 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__41753);
cljs.core.chunk_append(b__41754,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"70%"], null)),piflow.ui.spacer("100%","1em"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uniq_cols,i)], null))], null),piflow.ui.spacer("0.7em","1em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(degrees,i))], null)], null));

var G__41831 = (i__41753 + (1));
i__41753 = G__41831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41754),piflow$ui$pie_chart_$_iter__41751(cljs.core.chunk_rest(s__41752__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41754),null);
}
} else {
var i = cljs.core.first(s__41752__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"70%"], null)),piflow.ui.spacer("100%","1em"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uniq_cols,i)], null))], null),piflow.ui.spacer("0.7em","1em"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),piflow.ui.fsty.cljs$core$IFn$_invoke$arity$0(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(degrees,i))], null)], null),piflow$ui$pie_chart_$_iter__41751(cljs.core.rest(s__41752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(degrees)));
})())], null);
});

//# sourceMappingURL=piflow.ui.js.map
