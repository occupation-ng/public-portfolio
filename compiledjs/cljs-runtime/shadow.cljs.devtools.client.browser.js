goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21466 = arguments.length;
var i__5770__auto___21467 = (0);
while(true){
if((i__5770__auto___21467 < len__5769__auto___21466)){
args__5775__auto__.push((arguments[i__5770__auto___21467]));

var G__21468 = (i__5770__auto___21467 + (1));
i__5770__auto___21467 = G__21468;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20817){
var G__20818 = cljs.core.first(seq20817);
var seq20817__$1 = cljs.core.next(seq20817);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20818,seq20817__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20840 = cljs.core.seq(sources);
var chunk__20841 = null;
var count__20842 = (0);
var i__20843 = (0);
while(true){
if((i__20843 < count__20842)){
var map__20848 = chunk__20841.cljs$core$IIndexed$_nth$arity$2(null,i__20843);
var map__20848__$1 = cljs.core.__destructure_map(map__20848);
var src = map__20848__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20849){var e_21516 = e20849;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21516);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21516.message)].join('')));
}

var G__21518 = seq__20840;
var G__21519 = chunk__20841;
var G__21520 = count__20842;
var G__21521 = (i__20843 + (1));
seq__20840 = G__21518;
chunk__20841 = G__21519;
count__20842 = G__21520;
i__20843 = G__21521;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20840);
if(temp__5804__auto__){
var seq__20840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20840__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20840__$1);
var G__21526 = cljs.core.chunk_rest(seq__20840__$1);
var G__21527 = c__5568__auto__;
var G__21528 = cljs.core.count(c__5568__auto__);
var G__21529 = (0);
seq__20840 = G__21526;
chunk__20841 = G__21527;
count__20842 = G__21528;
i__20843 = G__21529;
continue;
} else {
var map__20850 = cljs.core.first(seq__20840__$1);
var map__20850__$1 = cljs.core.__destructure_map(map__20850);
var src = map__20850__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20851){var e_21560 = e20851;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21560);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21560.message)].join('')));
}

var G__21561 = cljs.core.next(seq__20840__$1);
var G__21562 = null;
var G__21563 = (0);
var G__21564 = (0);
seq__20840 = G__21561;
chunk__20841 = G__21562;
count__20842 = G__21563;
i__20843 = G__21564;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20852 = cljs.core.seq(js_requires);
var chunk__20853 = null;
var count__20854 = (0);
var i__20855 = (0);
while(true){
if((i__20855 < count__20854)){
var js_ns = chunk__20853.cljs$core$IIndexed$_nth$arity$2(null,i__20855);
var require_str_21570 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21570);


var G__21571 = seq__20852;
var G__21572 = chunk__20853;
var G__21573 = count__20854;
var G__21574 = (i__20855 + (1));
seq__20852 = G__21571;
chunk__20853 = G__21572;
count__20854 = G__21573;
i__20855 = G__21574;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20852);
if(temp__5804__auto__){
var seq__20852__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20852__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20852__$1);
var G__21575 = cljs.core.chunk_rest(seq__20852__$1);
var G__21576 = c__5568__auto__;
var G__21577 = cljs.core.count(c__5568__auto__);
var G__21578 = (0);
seq__20852 = G__21575;
chunk__20853 = G__21576;
count__20854 = G__21577;
i__20855 = G__21578;
continue;
} else {
var js_ns = cljs.core.first(seq__20852__$1);
var require_str_21579 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21579);


var G__21580 = cljs.core.next(seq__20852__$1);
var G__21581 = null;
var G__21582 = (0);
var G__21583 = (0);
seq__20852 = G__21580;
chunk__20853 = G__21581;
count__20854 = G__21582;
i__20855 = G__21583;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20859){
var map__20860 = p__20859;
var map__20860__$1 = cljs.core.__destructure_map(map__20860);
var msg = map__20860__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20860__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20860__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20861(s__20862){
return (new cljs.core.LazySeq(null,(function (){
var s__20862__$1 = s__20862;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20862__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20867 = cljs.core.first(xs__6360__auto__);
var map__20867__$1 = cljs.core.__destructure_map(map__20867);
var src = map__20867__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20867__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20867__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20862__$1,map__20867,map__20867__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20860,map__20860__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20861_$_iter__20863(s__20864){
return (new cljs.core.LazySeq(null,((function (s__20862__$1,map__20867,map__20867__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20860,map__20860__$1,msg,info,reload_info){
return (function (){
var s__20864__$1 = s__20864;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20864__$1);
if(temp__5804__auto____$1){
var s__20864__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20864__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20864__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20866 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20865 = (0);
while(true){
if((i__20865 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20865);
cljs.core.chunk_append(b__20866,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21591 = (i__20865 + (1));
i__20865 = G__21591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20866),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20861_$_iter__20863(cljs.core.chunk_rest(s__20864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20866),null);
}
} else {
var warning = cljs.core.first(s__20864__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20861_$_iter__20863(cljs.core.rest(s__20864__$2)));
}
} else {
return null;
}
break;
}
});})(s__20862__$1,map__20867,map__20867__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20860,map__20860__$1,msg,info,reload_info))
,null,null));
});})(s__20862__$1,map__20867,map__20867__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20860,map__20860__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20861(cljs.core.rest(s__20862__$1)));
} else {
var G__21592 = cljs.core.rest(s__20862__$1);
s__20862__$1 = G__21592;
continue;
}
} else {
var G__21593 = cljs.core.rest(s__20862__$1);
s__20862__$1 = G__21593;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20868_21594 = cljs.core.seq(warnings);
var chunk__20869_21595 = null;
var count__20870_21596 = (0);
var i__20871_21597 = (0);
while(true){
if((i__20871_21597 < count__20870_21596)){
var map__20874_21598 = chunk__20869_21595.cljs$core$IIndexed$_nth$arity$2(null,i__20871_21597);
var map__20874_21599__$1 = cljs.core.__destructure_map(map__20874_21598);
var w_21600 = map__20874_21599__$1;
var msg_21601__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874_21599__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874_21599__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874_21599__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874_21599__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21604)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21602),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21603),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21601__$1)].join(''));


var G__21605 = seq__20868_21594;
var G__21606 = chunk__20869_21595;
var G__21607 = count__20870_21596;
var G__21608 = (i__20871_21597 + (1));
seq__20868_21594 = G__21605;
chunk__20869_21595 = G__21606;
count__20870_21596 = G__21607;
i__20871_21597 = G__21608;
continue;
} else {
var temp__5804__auto___21609 = cljs.core.seq(seq__20868_21594);
if(temp__5804__auto___21609){
var seq__20868_21610__$1 = temp__5804__auto___21609;
if(cljs.core.chunked_seq_QMARK_(seq__20868_21610__$1)){
var c__5568__auto___21611 = cljs.core.chunk_first(seq__20868_21610__$1);
var G__21612 = cljs.core.chunk_rest(seq__20868_21610__$1);
var G__21613 = c__5568__auto___21611;
var G__21614 = cljs.core.count(c__5568__auto___21611);
var G__21615 = (0);
seq__20868_21594 = G__21612;
chunk__20869_21595 = G__21613;
count__20870_21596 = G__21614;
i__20871_21597 = G__21615;
continue;
} else {
var map__20875_21616 = cljs.core.first(seq__20868_21610__$1);
var map__20875_21617__$1 = cljs.core.__destructure_map(map__20875_21616);
var w_21618 = map__20875_21617__$1;
var msg_21619__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20875_21617__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20875_21617__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20875_21617__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20875_21617__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21622)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21620),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21621),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21619__$1)].join(''));


var G__21623 = cljs.core.next(seq__20868_21610__$1);
var G__21624 = null;
var G__21625 = (0);
var G__21626 = (0);
seq__20868_21594 = G__21623;
chunk__20869_21595 = G__21624;
count__20870_21596 = G__21625;
i__20871_21597 = G__21626;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20858_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20858_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20877){
var map__20878 = p__20877;
var map__20878__$1 = cljs.core.__destructure_map(map__20878);
var msg = map__20878__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20879 = cljs.core.seq(updates);
var chunk__20881 = null;
var count__20882 = (0);
var i__20883 = (0);
while(true){
if((i__20883 < count__20882)){
var path = chunk__20881.cljs$core$IIndexed$_nth$arity$2(null,i__20883);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21098_21627 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21102_21628 = null;
var count__21103_21629 = (0);
var i__21104_21630 = (0);
while(true){
if((i__21104_21630 < count__21103_21629)){
var node_21631 = chunk__21102_21628.cljs$core$IIndexed$_nth$arity$2(null,i__21104_21630);
if(cljs.core.not(node_21631.shadow$old)){
var path_match_21632 = shadow.cljs.devtools.client.browser.match_paths(node_21631.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21632)){
var new_link_21633 = (function (){var G__21167 = node_21631.cloneNode(true);
G__21167.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21632),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21167;
})();
(node_21631.shadow$old = true);

(new_link_21633.onload = ((function (seq__21098_21627,chunk__21102_21628,count__21103_21629,i__21104_21630,seq__20879,chunk__20881,count__20882,i__20883,new_link_21633,path_match_21632,node_21631,path,map__20878,map__20878__$1,msg,updates,reload_info){
return (function (e){
var seq__21171_21634 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21173_21635 = null;
var count__21174_21636 = (0);
var i__21175_21637 = (0);
while(true){
if((i__21175_21637 < count__21174_21636)){
var map__21181_21638 = chunk__21173_21635.cljs$core$IIndexed$_nth$arity$2(null,i__21175_21637);
var map__21181_21639__$1 = cljs.core.__destructure_map(map__21181_21638);
var task_21640 = map__21181_21639__$1;
var fn_str_21641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181_21639__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181_21639__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21643 = goog.getObjectByName(fn_str_21641,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21642)].join(''));

(fn_obj_21643.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21643.cljs$core$IFn$_invoke$arity$2(path,new_link_21633) : fn_obj_21643.call(null,path,new_link_21633));


var G__21644 = seq__21171_21634;
var G__21645 = chunk__21173_21635;
var G__21646 = count__21174_21636;
var G__21647 = (i__21175_21637 + (1));
seq__21171_21634 = G__21644;
chunk__21173_21635 = G__21645;
count__21174_21636 = G__21646;
i__21175_21637 = G__21647;
continue;
} else {
var temp__5804__auto___21648 = cljs.core.seq(seq__21171_21634);
if(temp__5804__auto___21648){
var seq__21171_21649__$1 = temp__5804__auto___21648;
if(cljs.core.chunked_seq_QMARK_(seq__21171_21649__$1)){
var c__5568__auto___21650 = cljs.core.chunk_first(seq__21171_21649__$1);
var G__21651 = cljs.core.chunk_rest(seq__21171_21649__$1);
var G__21652 = c__5568__auto___21650;
var G__21653 = cljs.core.count(c__5568__auto___21650);
var G__21654 = (0);
seq__21171_21634 = G__21651;
chunk__21173_21635 = G__21652;
count__21174_21636 = G__21653;
i__21175_21637 = G__21654;
continue;
} else {
var map__21182_21655 = cljs.core.first(seq__21171_21649__$1);
var map__21182_21656__$1 = cljs.core.__destructure_map(map__21182_21655);
var task_21657 = map__21182_21656__$1;
var fn_str_21658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21182_21656__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21182_21656__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21660 = goog.getObjectByName(fn_str_21658,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21659)].join(''));

(fn_obj_21660.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21660.cljs$core$IFn$_invoke$arity$2(path,new_link_21633) : fn_obj_21660.call(null,path,new_link_21633));


var G__21661 = cljs.core.next(seq__21171_21649__$1);
var G__21662 = null;
var G__21663 = (0);
var G__21664 = (0);
seq__21171_21634 = G__21661;
chunk__21173_21635 = G__21662;
count__21174_21636 = G__21663;
i__21175_21637 = G__21664;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21631);
});})(seq__21098_21627,chunk__21102_21628,count__21103_21629,i__21104_21630,seq__20879,chunk__20881,count__20882,i__20883,new_link_21633,path_match_21632,node_21631,path,map__20878,map__20878__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21632], 0));

goog.dom.insertSiblingAfter(new_link_21633,node_21631);


var G__21665 = seq__21098_21627;
var G__21666 = chunk__21102_21628;
var G__21667 = count__21103_21629;
var G__21668 = (i__21104_21630 + (1));
seq__21098_21627 = G__21665;
chunk__21102_21628 = G__21666;
count__21103_21629 = G__21667;
i__21104_21630 = G__21668;
continue;
} else {
var G__21669 = seq__21098_21627;
var G__21670 = chunk__21102_21628;
var G__21671 = count__21103_21629;
var G__21672 = (i__21104_21630 + (1));
seq__21098_21627 = G__21669;
chunk__21102_21628 = G__21670;
count__21103_21629 = G__21671;
i__21104_21630 = G__21672;
continue;
}
} else {
var G__21673 = seq__21098_21627;
var G__21674 = chunk__21102_21628;
var G__21675 = count__21103_21629;
var G__21676 = (i__21104_21630 + (1));
seq__21098_21627 = G__21673;
chunk__21102_21628 = G__21674;
count__21103_21629 = G__21675;
i__21104_21630 = G__21676;
continue;
}
} else {
var temp__5804__auto___21677 = cljs.core.seq(seq__21098_21627);
if(temp__5804__auto___21677){
var seq__21098_21678__$1 = temp__5804__auto___21677;
if(cljs.core.chunked_seq_QMARK_(seq__21098_21678__$1)){
var c__5568__auto___21679 = cljs.core.chunk_first(seq__21098_21678__$1);
var G__21680 = cljs.core.chunk_rest(seq__21098_21678__$1);
var G__21681 = c__5568__auto___21679;
var G__21682 = cljs.core.count(c__5568__auto___21679);
var G__21683 = (0);
seq__21098_21627 = G__21680;
chunk__21102_21628 = G__21681;
count__21103_21629 = G__21682;
i__21104_21630 = G__21683;
continue;
} else {
var node_21684 = cljs.core.first(seq__21098_21678__$1);
if(cljs.core.not(node_21684.shadow$old)){
var path_match_21719 = shadow.cljs.devtools.client.browser.match_paths(node_21684.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21719)){
var new_link_21720 = (function (){var G__21183 = node_21684.cloneNode(true);
G__21183.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21719),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21183;
})();
(node_21684.shadow$old = true);

(new_link_21720.onload = ((function (seq__21098_21627,chunk__21102_21628,count__21103_21629,i__21104_21630,seq__20879,chunk__20881,count__20882,i__20883,new_link_21720,path_match_21719,node_21684,seq__21098_21678__$1,temp__5804__auto___21677,path,map__20878,map__20878__$1,msg,updates,reload_info){
return (function (e){
var seq__21184_21721 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21186_21722 = null;
var count__21187_21723 = (0);
var i__21188_21724 = (0);
while(true){
if((i__21188_21724 < count__21187_21723)){
var map__21192_21725 = chunk__21186_21722.cljs$core$IIndexed$_nth$arity$2(null,i__21188_21724);
var map__21192_21726__$1 = cljs.core.__destructure_map(map__21192_21725);
var task_21727 = map__21192_21726__$1;
var fn_str_21728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192_21726__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192_21726__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21730 = goog.getObjectByName(fn_str_21728,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21729)].join(''));

(fn_obj_21730.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21730.cljs$core$IFn$_invoke$arity$2(path,new_link_21720) : fn_obj_21730.call(null,path,new_link_21720));


var G__21731 = seq__21184_21721;
var G__21732 = chunk__21186_21722;
var G__21733 = count__21187_21723;
var G__21734 = (i__21188_21724 + (1));
seq__21184_21721 = G__21731;
chunk__21186_21722 = G__21732;
count__21187_21723 = G__21733;
i__21188_21724 = G__21734;
continue;
} else {
var temp__5804__auto___21735__$1 = cljs.core.seq(seq__21184_21721);
if(temp__5804__auto___21735__$1){
var seq__21184_21736__$1 = temp__5804__auto___21735__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21184_21736__$1)){
var c__5568__auto___21737 = cljs.core.chunk_first(seq__21184_21736__$1);
var G__21738 = cljs.core.chunk_rest(seq__21184_21736__$1);
var G__21739 = c__5568__auto___21737;
var G__21740 = cljs.core.count(c__5568__auto___21737);
var G__21741 = (0);
seq__21184_21721 = G__21738;
chunk__21186_21722 = G__21739;
count__21187_21723 = G__21740;
i__21188_21724 = G__21741;
continue;
} else {
var map__21193_21742 = cljs.core.first(seq__21184_21736__$1);
var map__21193_21743__$1 = cljs.core.__destructure_map(map__21193_21742);
var task_21744 = map__21193_21743__$1;
var fn_str_21746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193_21743__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193_21743__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21753 = goog.getObjectByName(fn_str_21746,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21747)].join(''));

(fn_obj_21753.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21753.cljs$core$IFn$_invoke$arity$2(path,new_link_21720) : fn_obj_21753.call(null,path,new_link_21720));


var G__21754 = cljs.core.next(seq__21184_21736__$1);
var G__21755 = null;
var G__21756 = (0);
var G__21757 = (0);
seq__21184_21721 = G__21754;
chunk__21186_21722 = G__21755;
count__21187_21723 = G__21756;
i__21188_21724 = G__21757;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21684);
});})(seq__21098_21627,chunk__21102_21628,count__21103_21629,i__21104_21630,seq__20879,chunk__20881,count__20882,i__20883,new_link_21720,path_match_21719,node_21684,seq__21098_21678__$1,temp__5804__auto___21677,path,map__20878,map__20878__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21719], 0));

goog.dom.insertSiblingAfter(new_link_21720,node_21684);


var G__21759 = cljs.core.next(seq__21098_21678__$1);
var G__21760 = null;
var G__21761 = (0);
var G__21762 = (0);
seq__21098_21627 = G__21759;
chunk__21102_21628 = G__21760;
count__21103_21629 = G__21761;
i__21104_21630 = G__21762;
continue;
} else {
var G__21766 = cljs.core.next(seq__21098_21678__$1);
var G__21767 = null;
var G__21768 = (0);
var G__21769 = (0);
seq__21098_21627 = G__21766;
chunk__21102_21628 = G__21767;
count__21103_21629 = G__21768;
i__21104_21630 = G__21769;
continue;
}
} else {
var G__21770 = cljs.core.next(seq__21098_21678__$1);
var G__21771 = null;
var G__21772 = (0);
var G__21773 = (0);
seq__21098_21627 = G__21770;
chunk__21102_21628 = G__21771;
count__21103_21629 = G__21772;
i__21104_21630 = G__21773;
continue;
}
}
} else {
}
}
break;
}


var G__21774 = seq__20879;
var G__21775 = chunk__20881;
var G__21776 = count__20882;
var G__21777 = (i__20883 + (1));
seq__20879 = G__21774;
chunk__20881 = G__21775;
count__20882 = G__21776;
i__20883 = G__21777;
continue;
} else {
var G__21779 = seq__20879;
var G__21780 = chunk__20881;
var G__21781 = count__20882;
var G__21782 = (i__20883 + (1));
seq__20879 = G__21779;
chunk__20881 = G__21780;
count__20882 = G__21781;
i__20883 = G__21782;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20879);
if(temp__5804__auto__){
var seq__20879__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20879__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20879__$1);
var G__21783 = cljs.core.chunk_rest(seq__20879__$1);
var G__21784 = c__5568__auto__;
var G__21785 = cljs.core.count(c__5568__auto__);
var G__21786 = (0);
seq__20879 = G__21783;
chunk__20881 = G__21784;
count__20882 = G__21785;
i__20883 = G__21786;
continue;
} else {
var path = cljs.core.first(seq__20879__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21196_21787 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21200_21788 = null;
var count__21201_21789 = (0);
var i__21202_21790 = (0);
while(true){
if((i__21202_21790 < count__21201_21789)){
var node_21795 = chunk__21200_21788.cljs$core$IIndexed$_nth$arity$2(null,i__21202_21790);
if(cljs.core.not(node_21795.shadow$old)){
var path_match_21799 = shadow.cljs.devtools.client.browser.match_paths(node_21795.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21799)){
var new_link_21800 = (function (){var G__21234 = node_21795.cloneNode(true);
G__21234.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21799),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21234;
})();
(node_21795.shadow$old = true);

(new_link_21800.onload = ((function (seq__21196_21787,chunk__21200_21788,count__21201_21789,i__21202_21790,seq__20879,chunk__20881,count__20882,i__20883,new_link_21800,path_match_21799,node_21795,path,seq__20879__$1,temp__5804__auto__,map__20878,map__20878__$1,msg,updates,reload_info){
return (function (e){
var seq__21235_21802 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21237_21803 = null;
var count__21238_21804 = (0);
var i__21239_21805 = (0);
while(true){
if((i__21239_21805 < count__21238_21804)){
var map__21249_21806 = chunk__21237_21803.cljs$core$IIndexed$_nth$arity$2(null,i__21239_21805);
var map__21249_21807__$1 = cljs.core.__destructure_map(map__21249_21806);
var task_21808 = map__21249_21807__$1;
var fn_str_21809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21249_21807__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21249_21807__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21811 = goog.getObjectByName(fn_str_21809,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21810)].join(''));

(fn_obj_21811.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21811.cljs$core$IFn$_invoke$arity$2(path,new_link_21800) : fn_obj_21811.call(null,path,new_link_21800));


var G__21814 = seq__21235_21802;
var G__21815 = chunk__21237_21803;
var G__21816 = count__21238_21804;
var G__21817 = (i__21239_21805 + (1));
seq__21235_21802 = G__21814;
chunk__21237_21803 = G__21815;
count__21238_21804 = G__21816;
i__21239_21805 = G__21817;
continue;
} else {
var temp__5804__auto___21820__$1 = cljs.core.seq(seq__21235_21802);
if(temp__5804__auto___21820__$1){
var seq__21235_21821__$1 = temp__5804__auto___21820__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21235_21821__$1)){
var c__5568__auto___21822 = cljs.core.chunk_first(seq__21235_21821__$1);
var G__21823 = cljs.core.chunk_rest(seq__21235_21821__$1);
var G__21824 = c__5568__auto___21822;
var G__21825 = cljs.core.count(c__5568__auto___21822);
var G__21826 = (0);
seq__21235_21802 = G__21823;
chunk__21237_21803 = G__21824;
count__21238_21804 = G__21825;
i__21239_21805 = G__21826;
continue;
} else {
var map__21250_21830 = cljs.core.first(seq__21235_21821__$1);
var map__21250_21831__$1 = cljs.core.__destructure_map(map__21250_21830);
var task_21832 = map__21250_21831__$1;
var fn_str_21833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21250_21831__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21250_21831__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21837 = goog.getObjectByName(fn_str_21833,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21834)].join(''));

(fn_obj_21837.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21837.cljs$core$IFn$_invoke$arity$2(path,new_link_21800) : fn_obj_21837.call(null,path,new_link_21800));


var G__21838 = cljs.core.next(seq__21235_21821__$1);
var G__21839 = null;
var G__21840 = (0);
var G__21841 = (0);
seq__21235_21802 = G__21838;
chunk__21237_21803 = G__21839;
count__21238_21804 = G__21840;
i__21239_21805 = G__21841;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21795);
});})(seq__21196_21787,chunk__21200_21788,count__21201_21789,i__21202_21790,seq__20879,chunk__20881,count__20882,i__20883,new_link_21800,path_match_21799,node_21795,path,seq__20879__$1,temp__5804__auto__,map__20878,map__20878__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21799], 0));

goog.dom.insertSiblingAfter(new_link_21800,node_21795);


var G__21842 = seq__21196_21787;
var G__21843 = chunk__21200_21788;
var G__21844 = count__21201_21789;
var G__21845 = (i__21202_21790 + (1));
seq__21196_21787 = G__21842;
chunk__21200_21788 = G__21843;
count__21201_21789 = G__21844;
i__21202_21790 = G__21845;
continue;
} else {
var G__21846 = seq__21196_21787;
var G__21847 = chunk__21200_21788;
var G__21848 = count__21201_21789;
var G__21849 = (i__21202_21790 + (1));
seq__21196_21787 = G__21846;
chunk__21200_21788 = G__21847;
count__21201_21789 = G__21848;
i__21202_21790 = G__21849;
continue;
}
} else {
var G__21850 = seq__21196_21787;
var G__21851 = chunk__21200_21788;
var G__21852 = count__21201_21789;
var G__21853 = (i__21202_21790 + (1));
seq__21196_21787 = G__21850;
chunk__21200_21788 = G__21851;
count__21201_21789 = G__21852;
i__21202_21790 = G__21853;
continue;
}
} else {
var temp__5804__auto___21854__$1 = cljs.core.seq(seq__21196_21787);
if(temp__5804__auto___21854__$1){
var seq__21196_21855__$1 = temp__5804__auto___21854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21196_21855__$1)){
var c__5568__auto___21856 = cljs.core.chunk_first(seq__21196_21855__$1);
var G__21857 = cljs.core.chunk_rest(seq__21196_21855__$1);
var G__21858 = c__5568__auto___21856;
var G__21859 = cljs.core.count(c__5568__auto___21856);
var G__21860 = (0);
seq__21196_21787 = G__21857;
chunk__21200_21788 = G__21858;
count__21201_21789 = G__21859;
i__21202_21790 = G__21860;
continue;
} else {
var node_21861 = cljs.core.first(seq__21196_21855__$1);
if(cljs.core.not(node_21861.shadow$old)){
var path_match_21862 = shadow.cljs.devtools.client.browser.match_paths(node_21861.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21862)){
var new_link_21863 = (function (){var G__21269 = node_21861.cloneNode(true);
G__21269.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21862),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21269;
})();
(node_21861.shadow$old = true);

(new_link_21863.onload = ((function (seq__21196_21787,chunk__21200_21788,count__21201_21789,i__21202_21790,seq__20879,chunk__20881,count__20882,i__20883,new_link_21863,path_match_21862,node_21861,seq__21196_21855__$1,temp__5804__auto___21854__$1,path,seq__20879__$1,temp__5804__auto__,map__20878,map__20878__$1,msg,updates,reload_info){
return (function (e){
var seq__21271_21864 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21273_21865 = null;
var count__21274_21866 = (0);
var i__21275_21867 = (0);
while(true){
if((i__21275_21867 < count__21274_21866)){
var map__21293_21868 = chunk__21273_21865.cljs$core$IIndexed$_nth$arity$2(null,i__21275_21867);
var map__21293_21869__$1 = cljs.core.__destructure_map(map__21293_21868);
var task_21870 = map__21293_21869__$1;
var fn_str_21871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21293_21869__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21293_21869__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21873 = goog.getObjectByName(fn_str_21871,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21872)].join(''));

(fn_obj_21873.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21873.cljs$core$IFn$_invoke$arity$2(path,new_link_21863) : fn_obj_21873.call(null,path,new_link_21863));


var G__21874 = seq__21271_21864;
var G__21875 = chunk__21273_21865;
var G__21876 = count__21274_21866;
var G__21877 = (i__21275_21867 + (1));
seq__21271_21864 = G__21874;
chunk__21273_21865 = G__21875;
count__21274_21866 = G__21876;
i__21275_21867 = G__21877;
continue;
} else {
var temp__5804__auto___21878__$2 = cljs.core.seq(seq__21271_21864);
if(temp__5804__auto___21878__$2){
var seq__21271_21879__$1 = temp__5804__auto___21878__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21271_21879__$1)){
var c__5568__auto___21880 = cljs.core.chunk_first(seq__21271_21879__$1);
var G__21881 = cljs.core.chunk_rest(seq__21271_21879__$1);
var G__21882 = c__5568__auto___21880;
var G__21883 = cljs.core.count(c__5568__auto___21880);
var G__21884 = (0);
seq__21271_21864 = G__21881;
chunk__21273_21865 = G__21882;
count__21274_21866 = G__21883;
i__21275_21867 = G__21884;
continue;
} else {
var map__21295_21885 = cljs.core.first(seq__21271_21879__$1);
var map__21295_21886__$1 = cljs.core.__destructure_map(map__21295_21885);
var task_21887 = map__21295_21886__$1;
var fn_str_21888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295_21886__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295_21886__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21890 = goog.getObjectByName(fn_str_21888,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21889)].join(''));

(fn_obj_21890.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21890.cljs$core$IFn$_invoke$arity$2(path,new_link_21863) : fn_obj_21890.call(null,path,new_link_21863));


var G__21891 = cljs.core.next(seq__21271_21879__$1);
var G__21892 = null;
var G__21893 = (0);
var G__21894 = (0);
seq__21271_21864 = G__21891;
chunk__21273_21865 = G__21892;
count__21274_21866 = G__21893;
i__21275_21867 = G__21894;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21861);
});})(seq__21196_21787,chunk__21200_21788,count__21201_21789,i__21202_21790,seq__20879,chunk__20881,count__20882,i__20883,new_link_21863,path_match_21862,node_21861,seq__21196_21855__$1,temp__5804__auto___21854__$1,path,seq__20879__$1,temp__5804__auto__,map__20878,map__20878__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21862], 0));

goog.dom.insertSiblingAfter(new_link_21863,node_21861);


var G__21895 = cljs.core.next(seq__21196_21855__$1);
var G__21896 = null;
var G__21897 = (0);
var G__21898 = (0);
seq__21196_21787 = G__21895;
chunk__21200_21788 = G__21896;
count__21201_21789 = G__21897;
i__21202_21790 = G__21898;
continue;
} else {
var G__21899 = cljs.core.next(seq__21196_21855__$1);
var G__21900 = null;
var G__21901 = (0);
var G__21902 = (0);
seq__21196_21787 = G__21899;
chunk__21200_21788 = G__21900;
count__21201_21789 = G__21901;
i__21202_21790 = G__21902;
continue;
}
} else {
var G__21903 = cljs.core.next(seq__21196_21855__$1);
var G__21904 = null;
var G__21905 = (0);
var G__21906 = (0);
seq__21196_21787 = G__21903;
chunk__21200_21788 = G__21904;
count__21201_21789 = G__21905;
i__21202_21790 = G__21906;
continue;
}
}
} else {
}
}
break;
}


var G__21907 = cljs.core.next(seq__20879__$1);
var G__21908 = null;
var G__21909 = (0);
var G__21910 = (0);
seq__20879 = G__21907;
chunk__20881 = G__21908;
count__20882 = G__21909;
i__20883 = G__21910;
continue;
} else {
var G__21911 = cljs.core.next(seq__20879__$1);
var G__21912 = null;
var G__21913 = (0);
var G__21914 = (0);
seq__20879 = G__21911;
chunk__20881 = G__21912;
count__20882 = G__21913;
i__20883 = G__21914;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21305){
var map__21307 = p__21305;
var map__21307__$1 = cljs.core.__destructure_map(map__21307);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21307__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21331){
var map__21332 = p__21331;
var map__21332__$1 = cljs.core.__destructure_map(map__21332);
var _ = map__21332__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21332__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21336,done,error){
var map__21337 = p__21336;
var map__21337__$1 = cljs.core.__destructure_map(map__21337);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21337__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21338,done,error){
var map__21340 = p__21338;
var map__21340__$1 = cljs.core.__destructure_map(map__21340);
var msg = map__21340__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21342){
var map__21343 = p__21342;
var map__21343__$1 = cljs.core.__destructure_map(map__21343);
var src = map__21343__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21345 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21345) : done.call(null,G__21345));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21353){
var map__21355 = p__21353;
var map__21355__$1 = cljs.core.__destructure_map(map__21355);
var msg__$1 = map__21355__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21358){var ex = e21358;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21372){
var map__21373 = p__21372;
var map__21373__$1 = cljs.core.__destructure_map(map__21373);
var env = map__21373__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21373__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21417){
var map__21418 = p__21417;
var map__21418__$1 = cljs.core.__destructure_map(map__21418);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21418__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21418__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21427){
var map__21429 = p__21427;
var map__21429__$1 = cljs.core.__destructure_map(map__21429);
var svc = map__21429__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21429__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
