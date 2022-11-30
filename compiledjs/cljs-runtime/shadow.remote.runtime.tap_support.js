goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20571,p__20572){
var map__20573 = p__20571;
var map__20573__$1 = cljs.core.__destructure_map(map__20573);
var svc = map__20573__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20573__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20573__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20573__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20574 = p__20572;
var map__20574__$1 = cljs.core.__destructure_map(map__20574);
var msg = map__20574__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20574__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20581,p__20582){
var map__20583 = p__20581;
var map__20583__$1 = cljs.core.__destructure_map(map__20583);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20583__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20584 = p__20582;
var map__20584__$1 = cljs.core.__destructure_map(map__20584);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20585,p__20586){
var map__20587 = p__20585;
var map__20587__$1 = cljs.core.__destructure_map(map__20587);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20588 = p__20586;
var map__20588__$1 = cljs.core.__destructure_map(map__20588);
var msg = map__20588__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20588__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20590,tid){
var map__20591 = p__20590;
var map__20591__$1 = cljs.core.__destructure_map(map__20591);
var svc = map__20591__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20591__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20596 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20597 = null;
var count__20598 = (0);
var i__20599 = (0);
while(true){
if((i__20599 < count__20598)){
var vec__20613 = chunk__20597.cljs$core$IIndexed$_nth$arity$2(null,i__20599);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20613,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20613,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20629 = seq__20596;
var G__20630 = chunk__20597;
var G__20631 = count__20598;
var G__20632 = (i__20599 + (1));
seq__20596 = G__20629;
chunk__20597 = G__20630;
count__20598 = G__20631;
i__20599 = G__20632;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20596);
if(temp__5804__auto__){
var seq__20596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20596__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20596__$1);
var G__20633 = cljs.core.chunk_rest(seq__20596__$1);
var G__20634 = c__5568__auto__;
var G__20635 = cljs.core.count(c__5568__auto__);
var G__20636 = (0);
seq__20596 = G__20633;
chunk__20597 = G__20634;
count__20598 = G__20635;
i__20599 = G__20636;
continue;
} else {
var vec__20616 = cljs.core.first(seq__20596__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20616,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20616,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20637 = cljs.core.next(seq__20596__$1);
var G__20638 = null;
var G__20639 = (0);
var G__20640 = (0);
seq__20596 = G__20637;
chunk__20597 = G__20638;
count__20598 = G__20639;
i__20599 = G__20640;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20592_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20592_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20593_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20593_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20594_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20594_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20595_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20595_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20622){
var map__20623 = p__20622;
var map__20623__$1 = cljs.core.__destructure_map(map__20623);
var svc = map__20623__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
