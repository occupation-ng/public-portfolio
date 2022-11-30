goog.provide('piflow.util');
piflow.util.__GT_js = (function piflow$util$__GT_js(var_name){
return clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name),/\//,"."),/-/,"_");
});
piflow.util.invoke = (function piflow$util$invoke(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22214 = arguments.length;
var i__5770__auto___22215 = (0);
while(true){
if((i__5770__auto___22215 < len__5769__auto___22214)){
args__5775__auto__.push((arguments[i__5770__auto___22215]));

var G__22216 = (i__5770__auto___22215 + (1));
i__5770__auto___22215 = G__22216;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(piflow.util.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (function_name,args){
var fun = eval(piflow.util.__GT_js(function_name));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,args);
}));

(piflow.util.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(piflow.util.invoke.cljs$lang$applyTo = (function (seq22090){
var G__22091 = cljs.core.first(seq22090);
var seq22090__$1 = cljs.core.next(seq22090);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22091,seq22090__$1);
}));

piflow.util.index_of = (function piflow$util$index_of(el,l){
var i = (0);
var found = (-1);
while(true){
if((i < cljs.core.count(l))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l,i))){
var G__22217 = cljs.core.count(l);
var G__22218 = i;
i = G__22217;
found = G__22218;
continue;
} else {
var G__22219 = (i + (1));
var G__22220 = found;
i = G__22219;
found = G__22220;
continue;
}
} else {
return found;
}
break;
}
});
piflow.util.m__GT_ppJSONt = (function piflow$util$m__GT_ppJSONt(m){

return console.dir(cljs.core.clj__GT_js(m));
});
piflow.util.m__GT_ppJSONts = (function piflow$util$m__GT_ppJSONts(m,s){

console.log(s);

return console.dir(cljs.core.clj__GT_js(m));
});
piflow.util.m__GT_ppJSONs = (function piflow$util$m__GT_ppJSONs(m){

return console.log(JSON.stringify(cljs.core.clj__GT_js(m),null,(2)));
});
piflow.util.dotDate__GT_str = (function piflow$util$dotDate__GT_str(dot_date){
var dt_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yr","yr",-777168829),new cljs.core.Keyword(null,"mo","mo",1438056008),new cljs.core.Keyword(null,"da","da",-742035943),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"mn","mn",-1529340333)], null);
var dt_vals = clojure.string.split.cljs$core$IFn$_invoke$arity$2(dot_date,/\./);
var dt_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,(function (){var iter__5523__auto__ = (function piflow$util$dotDate__GT_str_$_iter__22093(s__22094){
return (new cljs.core.LazySeq(null,(function (){
var s__22094__$1 = s__22094;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22094__$1);
if(temp__5804__auto__){
var s__22094__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22094__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22094__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22096 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22095 = (0);
while(true){
if((i__22095 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__22095);
cljs.core.chunk_append(b__22096,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dt_keys,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dt_vals,i)]));

var G__22221 = (i__22095 + (1));
i__22095 = G__22221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22096),piflow$util$dotDate__GT_str_$_iter__22093(cljs.core.chunk_rest(s__22094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22096),null);
}
} else {
var i = cljs.core.first(s__22094__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dt_keys,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dt_vals,i)]),piflow$util$dotDate__GT_str_$_iter__22093(cljs.core.rest(s__22094__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(dt_keys)));
})());
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yr","yr",-777168829).cljs$core$IFn$_invoke$arity$1(dt_map)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mo","mo",1438056008).cljs$core$IFn$_invoke$arity$1(dt_map)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"da","da",-742035943).cljs$core$IFn$_invoke$arity$1(dt_map)),"   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hr","hr",1377740067).cljs$core$IFn$_invoke$arity$1(dt_map)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mn","mn",-1529340333).cljs$core$IFn$_invoke$arity$1(dt_map))].join('');
});
piflow.util.commify = (function piflow$util$commify(n){
var n_int = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),/\./));
var n_dec = cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),/\./));
var n_int_commified = clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",(function (){var iter__5523__auto__ = (function piflow$util$commify_$_iter__22136(s__22144){
return (new cljs.core.LazySeq(null,(function (){
var s__22144__$1 = s__22144;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22144__$1);
if(temp__5804__auto__){
var s__22144__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22144__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22144__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22146 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22145 = (0);
while(true){
if((i__22145 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__22145);
cljs.core.chunk_append(b__22146,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,p)));

var G__22222 = (i__22145 + (1));
i__22145 = G__22222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22146),piflow$util$commify_$_iter__22136(cljs.core.chunk_rest(s__22144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22146),null);
}
} else {
var p = cljs.core.first(s__22144__$2);
return cljs.core.cons(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,p)),piflow$util$commify_$_iter__22136(cljs.core.rest(s__22144__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.reverse(cljs.core.vec(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_int)))));
})()));
if(((4) > cljs.core.count(n_int))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
} else {
if(cljs.core.truth_(n_dec)){
return [n_int_commified,".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_dec)].join('');
} else {
return n_int_commified;
}
}
});
piflow.util.color_unhex = (function piflow$util$color_unhex(hex_str){
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex_str,(1));
var hex6 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),((s).length)))?clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function piflow$util$color_unhex_$_iter__22150(s__22151){
return (new cljs.core.LazySeq(null,(function (){
var s__22151__$1 = s__22151;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22151__$1);
if(temp__5804__auto__){
var s__22151__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22151__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22151__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22153 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22152 = (0);
while(true){
if((i__22152 < size__5522__auto__)){
var ch = cljs.core._nth(c__5521__auto__,i__22152);
cljs.core.chunk_append(b__22153,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''));

var G__22223 = (i__22152 + (1));
i__22152 = G__22223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22153),piflow$util$color_unhex_$_iter__22150(cljs.core.chunk_rest(s__22151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22153),null);
}
} else {
var ch = cljs.core.first(s__22151__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''),piflow$util$color_unhex_$_iter__22150(cljs.core.rest(s__22151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(s);
})()):s);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22149_SHARP_){
return parseInt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__22149_SHARP_),(16));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),hex6));
});
piflow.util.naive_crop_float = (function piflow$util$naive_crop_float(crop_after,_float){

if(clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_float),".")){
var spl = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_float),".");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(spl)),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(spl),(0),crop_after)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(_float);
}
});
piflow.util.naive_float_crop = (function piflow$util$naive_float_crop(_float,crop_after){

if(clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_float),".")){
var spl = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_float),".");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(spl)),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(spl),(0),crop_after)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(_float);
}
});
piflow.util.fmt_$ = (function piflow$util$fmt_$(n){
return ["$",piflow.util.commify(piflow.util.naive_crop_float((2),n))].join('');
});
piflow.util.get_statutory_penalty_keys = (function piflow$util$get_statutory_penalty_keys(vio_map){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5523__auto__ = (function piflow$util$get_statutory_penalty_keys_$_iter__22154(s__22155){
return (new cljs.core.LazySeq(null,(function (){
var s__22155__$1 = s__22155;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22155__$1);
if(temp__5804__auto__){
var s__22155__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22155__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22155__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22157 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22156 = (0);
while(true){
if((i__22156 < size__5522__auto__)){
var vec__22158 = cljs.core._nth(c__5521__auto__,i__22156);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22158,(1),null);
cljs.core.chunk_append(b__22157,((clojure.string.includes_QMARK_(cljs.core.name(k),"statutoryPenalty"))?k:null));

var G__22224 = (i__22156 + (1));
i__22156 = G__22224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22157),piflow$util$get_statutory_penalty_keys_$_iter__22154(cljs.core.chunk_rest(s__22155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22157),null);
}
} else {
var vec__22161 = cljs.core.first(s__22155__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22161,(1),null);
return cljs.core.cons(((clojure.string.includes_QMARK_(cljs.core.name(k),"statutoryPenalty"))?k:null),piflow$util$get_statutory_penalty_keys_$_iter__22154(cljs.core.rest(s__22155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vio_map);
})());
});
piflow.util.get_civil_penalty_keys = (function piflow$util$get_civil_penalty_keys(vio_map){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5523__auto__ = (function piflow$util$get_civil_penalty_keys_$_iter__22164(s__22165){
return (new cljs.core.LazySeq(null,(function (){
var s__22165__$1 = s__22165;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22165__$1);
if(temp__5804__auto__){
var s__22165__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22165__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22165__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22167 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22166 = (0);
while(true){
if((i__22166 < size__5522__auto__)){
var vec__22168 = cljs.core._nth(c__5521__auto__,i__22166);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22168,(1),null);
cljs.core.chunk_append(b__22167,((clojure.string.includes_QMARK_(cljs.core.name(k),"civilPenalty"))?k:null));

var G__22225 = (i__22166 + (1));
i__22166 = G__22225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22167),piflow$util$get_civil_penalty_keys_$_iter__22164(cljs.core.chunk_rest(s__22165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22167),null);
}
} else {
var vec__22171 = cljs.core.first(s__22165__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,(1),null);
return cljs.core.cons(((clojure.string.includes_QMARK_(cljs.core.name(k),"civilPenalty"))?k:null),piflow$util$get_civil_penalty_keys_$_iter__22164(cljs.core.rest(s__22165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vio_map);
})());
});
piflow.util.sum_specific_civil_penalty = (function piflow$util$sum_specific_civil_penalty(vio_map,match_str){
return piflow.util.naive_crop_float((2),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5523__auto__ = (function piflow$util$sum_specific_civil_penalty_$_iter__22174(s__22175){
return (new cljs.core.LazySeq(null,(function (){
var s__22175__$1 = s__22175;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22175__$1);
if(temp__5804__auto__){
var s__22175__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22175__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22175__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22177 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22176 = (0);
while(true){
if((i__22176 < size__5522__auto__)){
var vec__22178 = cljs.core._nth(c__5521__auto__,i__22176);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,(1),null);
cljs.core.chunk_append(b__22177,((((clojure.string.includes_QMARK_(cljs.core.name(k),match_str)) && (clojure.string.includes_QMARK_(cljs.core.name(k),"civilPenalty"))))?v:null));

var G__22227 = (i__22176 + (1));
i__22176 = G__22227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22177),piflow$util$sum_specific_civil_penalty_$_iter__22174(cljs.core.chunk_rest(s__22175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22177),null);
}
} else {
var vec__22181 = cljs.core.first(s__22175__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,(1),null);
return cljs.core.cons(((((clojure.string.includes_QMARK_(cljs.core.name(k),match_str)) && (clojure.string.includes_QMARK_(cljs.core.name(k),"civilPenalty"))))?v:null),piflow$util$sum_specific_civil_penalty_$_iter__22174(cljs.core.rest(s__22175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vio_map);
})())));
});
piflow.util.sum_specific_statutory_penalty = (function piflow$util$sum_specific_statutory_penalty(vio_map,match_str){
return piflow.util.naive_crop_float((2),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5523__auto__ = (function piflow$util$sum_specific_statutory_penalty_$_iter__22184(s__22185){
return (new cljs.core.LazySeq(null,(function (){
var s__22185__$1 = s__22185;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22185__$1);
if(temp__5804__auto__){
var s__22185__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22185__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22185__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22187 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22186 = (0);
while(true){
if((i__22186 < size__5522__auto__)){
var vec__22188 = cljs.core._nth(c__5521__auto__,i__22186);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22188,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22188,(1),null);
cljs.core.chunk_append(b__22187,((((clojure.string.includes_QMARK_(cljs.core.name(k),match_str)) && (clojure.string.includes_QMARK_(cljs.core.name(k),"statutoryPenalty"))))?v:null));

var G__22228 = (i__22186 + (1));
i__22186 = G__22228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22187),piflow$util$sum_specific_statutory_penalty_$_iter__22184(cljs.core.chunk_rest(s__22185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22187),null);
}
} else {
var vec__22191 = cljs.core.first(s__22185__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22191,(1),null);
return cljs.core.cons(((((clojure.string.includes_QMARK_(cljs.core.name(k),match_str)) && (clojure.string.includes_QMARK_(cljs.core.name(k),"statutoryPenalty"))))?v:null),piflow$util$sum_specific_statutory_penalty_$_iter__22184(cljs.core.rest(s__22185__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vio_map);
})())));
});
piflow.util.sum_statutory_penalty = (function piflow$util$sum_statutory_penalty(vio_map){
return piflow.util.naive_crop_float((2),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5523__auto__ = (function piflow$util$sum_statutory_penalty_$_iter__22194(s__22195){
return (new cljs.core.LazySeq(null,(function (){
var s__22195__$1 = s__22195;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22195__$1);
if(temp__5804__auto__){
var s__22195__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22195__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22195__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22197 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22196 = (0);
while(true){
if((i__22196 < size__5522__auto__)){
var vec__22198 = cljs.core._nth(c__5521__auto__,i__22196);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22198,(1),null);
cljs.core.chunk_append(b__22197,((clojure.string.includes_QMARK_(cljs.core.name(k),"statutoryPenalty"))?v:null));

var G__22229 = (i__22196 + (1));
i__22196 = G__22229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22197),piflow$util$sum_statutory_penalty_$_iter__22194(cljs.core.chunk_rest(s__22195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22197),null);
}
} else {
var vec__22201 = cljs.core.first(s__22195__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22201,(1),null);
return cljs.core.cons(((clojure.string.includes_QMARK_(cljs.core.name(k),"statutoryPenalty"))?v:null),piflow$util$sum_statutory_penalty_$_iter__22194(cljs.core.rest(s__22195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vio_map);
})())));
});
piflow.util.sum_civil_penalty = (function piflow$util$sum_civil_penalty(vio_map){
return piflow.util.naive_crop_float((2),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5523__auto__ = (function piflow$util$sum_civil_penalty_$_iter__22204(s__22205){
return (new cljs.core.LazySeq(null,(function (){
var s__22205__$1 = s__22205;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22205__$1);
if(temp__5804__auto__){
var s__22205__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22205__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22205__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22207 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22206 = (0);
while(true){
if((i__22206 < size__5522__auto__)){
var vec__22208 = cljs.core._nth(c__5521__auto__,i__22206);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22208,(1),null);
cljs.core.chunk_append(b__22207,((clojure.string.includes_QMARK_(cljs.core.name(k),"civilPenalty"))?v:null));

var G__22230 = (i__22206 + (1));
i__22206 = G__22230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22207),piflow$util$sum_civil_penalty_$_iter__22204(cljs.core.chunk_rest(s__22205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22207),null);
}
} else {
var vec__22211 = cljs.core.first(s__22205__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22211,(1),null);
return cljs.core.cons(((clojure.string.includes_QMARK_(cljs.core.name(k),"civilPenalty"))?v:null),piflow$util$sum_civil_penalty_$_iter__22204(cljs.core.rest(s__22205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vio_map);
})())));
});

//# sourceMappingURL=piflow.util.js.map
