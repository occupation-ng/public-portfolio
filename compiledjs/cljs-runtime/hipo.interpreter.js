goog.provide('hipo.interpreter');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__21016){
var map__21017 = p__21016;
var map__21017__$1 = cljs.core.__destructure_map(map__21017);
var m = map__21017__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21017__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if((!((ov === nv)))){
var temp__5802__auto__ = hipo.hiccup.listener_name__GT_event_name(cljs.core.name(sok));
if(cljs.core.truth_(temp__5802__auto__)){
var en = temp__5802__auto__;
if((!(((cljs.core.map_QMARK_(ov)) && (((cljs.core.map_QMARK_(nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))))))){
var b__20832__auto__ = (function (){
var hn = ["hipo_listener_",en].join('');
var temp__5802__auto___21232__$1 = (el[hn]);
if(cljs.core.truth_(temp__5802__auto___21232__$1)){
var l_21233 = temp__5802__auto___21232__$1;
el.removeEventListener(en,l_21233);
} else {
}

var temp__5804__auto__ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var nv__$1 = temp__5804__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});
var v__20833__auto__ = interceptors;
if(((cljs.core.not(v__20833__auto__)) || (cljs.core.empty_QMARK_(v__20833__auto__)))){
return b__20832__auto__();
} else {
return hipo.interceptor.call(b__20832__auto__,v__20833__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)], 0)));
}
} else {
return null;
}
} else {
var b__20832__auto__ = (function (){
return hipo.attribute.set_value_BANG_(el,m,ns,tag,sok,ov,nv);
});
var v__20833__auto__ = interceptors;
if(((cljs.core.not(v__20833__auto__)) || (cljs.core.empty_QMARK_(v__20833__auto__)))){
return b__20832__auto__();
} else {
return hipo.interceptor.call(b__20832__auto__,v__20833__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)], 0)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children(v);
while(true){
if(cljs.core.empty_QMARK_(v__$1)){
return null;
} else {
var temp__5802__auto___21251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
if(cljs.core.truth_(temp__5802__auto___21251)){
var h_21252 = temp__5802__auto___21251;
el.appendChild((hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2 ? hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2(h_21252,m) : hipo.interpreter.create_child.call(null,h_21252,m)));
} else {
}

var G__21253 = cljs.core.rest(v__$1);
v__$1 = G__21253;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element(ns,tag);
var seq__21028_21254 = cljs.core.seq(attrs);
var chunk__21029_21255 = null;
var count__21030_21256 = (0);
var i__21031_21257 = (0);
while(true){
if((i__21031_21257 < count__21030_21256)){
var vec__21040_21258 = chunk__21029_21255.cljs$core$IIndexed$_nth$arity$2(null,i__21031_21257);
var sok_21259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21040_21258,(0),null);
var v_21260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21040_21258,(1),null);
if(cljs.core.truth_(v_21260)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_21259,null,v_21260,m);
} else {
}


var G__21261 = seq__21028_21254;
var G__21262 = chunk__21029_21255;
var G__21263 = count__21030_21256;
var G__21264 = (i__21031_21257 + (1));
seq__21028_21254 = G__21261;
chunk__21029_21255 = G__21262;
count__21030_21256 = G__21263;
i__21031_21257 = G__21264;
continue;
} else {
var temp__5804__auto___21265 = cljs.core.seq(seq__21028_21254);
if(temp__5804__auto___21265){
var seq__21028_21266__$1 = temp__5804__auto___21265;
if(cljs.core.chunked_seq_QMARK_(seq__21028_21266__$1)){
var c__5568__auto___21280 = cljs.core.chunk_first(seq__21028_21266__$1);
var G__21281 = cljs.core.chunk_rest(seq__21028_21266__$1);
var G__21282 = c__5568__auto___21280;
var G__21283 = cljs.core.count(c__5568__auto___21280);
var G__21284 = (0);
seq__21028_21254 = G__21281;
chunk__21029_21255 = G__21282;
count__21030_21256 = G__21283;
i__21031_21257 = G__21284;
continue;
} else {
var vec__21044_21285 = cljs.core.first(seq__21028_21266__$1);
var sok_21286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21044_21285,(0),null);
var v_21287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21044_21285,(1),null);
if(cljs.core.truth_(v_21287)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_21286,null,v_21287,m);
} else {
}


var G__21288 = cljs.core.next(seq__21028_21266__$1);
var G__21289 = null;
var G__21290 = (0);
var G__21291 = (0);
seq__21028_21254 = G__21288;
chunk__21029_21255 = G__21289;
count__21030_21256 = G__21290;
i__21031_21257 = G__21291;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__5802__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(ns,tag,attrs,m) : f.call(null,ns,tag,attrs,m));
} else {
return hipo.interpreter.default_create_element(ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_(h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns(h);
var tag = hipo.hiccup.tag(h);
var attrs = hipo.hiccup.attributes(h);
var children = hipo.hiccup.children(h);
var el = hipo.interpreter.create_element(hipo.hiccup.key__GT_namespace(key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_(el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(((hipo.hiccup.literal_QMARK_(o)) || (cljs.core.vector_QMARK_(o)))){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(hipo.hiccup.literal_QMARK_(o)){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector(o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_(o)){
return hipo.interpreter.append_children_BANG_(el,cljs.core.vec(o),m);
} else {
if((!((o == null)))){
return el.appendChild(hipo.interpreter.create_child(o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_(o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_(f,cljs.core.vec(o),m);

return f;
} else {
if((!((o == null)))){
return hipo.interpreter.create_child(o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__21058_21378 = cljs.core.seq(nm);
var chunk__21060_21379 = null;
var count__21061_21380 = (0);
var i__21062_21381 = (0);
while(true){
if((i__21062_21381 < count__21061_21380)){
var vec__21071_21382 = chunk__21060_21379.cljs$core$IIndexed$_nth$arity$2(null,i__21062_21381);
var sok_21383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21071_21382,(0),null);
var nv_21384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21071_21382,(1),null);
var ov_21385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_21383);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_21383,ov_21385,nv_21384,m);


var G__21386 = seq__21058_21378;
var G__21387 = chunk__21060_21379;
var G__21388 = count__21061_21380;
var G__21389 = (i__21062_21381 + (1));
seq__21058_21378 = G__21386;
chunk__21060_21379 = G__21387;
count__21061_21380 = G__21388;
i__21062_21381 = G__21389;
continue;
} else {
var temp__5804__auto___21390 = cljs.core.seq(seq__21058_21378);
if(temp__5804__auto___21390){
var seq__21058_21391__$1 = temp__5804__auto___21390;
if(cljs.core.chunked_seq_QMARK_(seq__21058_21391__$1)){
var c__5568__auto___21392 = cljs.core.chunk_first(seq__21058_21391__$1);
var G__21393 = cljs.core.chunk_rest(seq__21058_21391__$1);
var G__21394 = c__5568__auto___21392;
var G__21395 = cljs.core.count(c__5568__auto___21392);
var G__21396 = (0);
seq__21058_21378 = G__21393;
chunk__21060_21379 = G__21394;
count__21061_21380 = G__21395;
i__21062_21381 = G__21396;
continue;
} else {
var vec__21081_21397 = cljs.core.first(seq__21058_21391__$1);
var sok_21398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21081_21397,(0),null);
var nv_21399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21081_21397,(1),null);
var ov_21400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_21398);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_21398,ov_21400,nv_21399,m);


var G__21401 = cljs.core.next(seq__21058_21391__$1);
var G__21402 = null;
var G__21403 = (0);
var G__21404 = (0);
seq__21058_21378 = G__21401;
chunk__21060_21379 = G__21402;
count__21061_21380 = G__21403;
i__21062_21381 = G__21404;
continue;
}
} else {
}
}
break;
}

var seq__21084 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
var chunk__21085 = null;
var count__21086 = (0);
var i__21087 = (0);
while(true){
if((i__21087 < count__21086)){
var sok = chunk__21085.cljs$core$IIndexed$_nth$arity$2(null,i__21087);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);


var G__21405 = seq__21084;
var G__21406 = chunk__21085;
var G__21407 = count__21086;
var G__21408 = (i__21087 + (1));
seq__21084 = G__21405;
chunk__21085 = G__21406;
count__21086 = G__21407;
i__21087 = G__21408;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21084);
if(temp__5804__auto__){
var seq__21084__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21084__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21084__$1);
var G__21409 = cljs.core.chunk_rest(seq__21084__$1);
var G__21410 = c__5568__auto__;
var G__21411 = cljs.core.count(c__5568__auto__);
var G__21412 = (0);
seq__21084 = G__21409;
chunk__21085 = G__21410;
count__21086 = G__21411;
i__21087 = G__21412;
continue;
} else {
var sok = cljs.core.first(seq__21084__$1);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);


var G__21413 = cljs.core.next(seq__21084__$1);
var G__21414 = null;
var G__21415 = (0);
var G__21416 = (0);
seq__21084 = G__21413;
chunk__21085 = G__21414;
count__21086 = G__21415;
i__21087 = G__21416;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__21091(s__21092){
return (new cljs.core.LazySeq(null,(function (){
var s__21092__$1 = s__21092;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21092__$1);
if(temp__5804__auto__){
var s__21092__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21092__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21092__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21094 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21093 = (0);
while(true){
if((i__21093 < size__5522__auto__)){
var ih = cljs.core._nth(c__5521__auto__,i__21093);
cljs.core.chunk_append(b__21094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null));

var G__21433 = (i__21093 + (1));
i__21093 = G__21433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21094),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__21091(cljs.core.chunk_rest(s__21092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21094),null);
}
} else {
var ih = cljs.core.first(s__21092__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__21091(cljs.core.rest(s__21092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
}),v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__21096){
var map__21097 = p__21096;
var map__21097__$1 = cljs.core.__destructure_map(map__21097);
var m = map__21097__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map(och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map(nch);
var cs = hipo.dom.children.cljs$core$IFn$_invoke$arity$2(el,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(nm)),cljs.core.set(cljs.core.keys(om)))));
var seq__21108_21443 = cljs.core.seq(nm);
var chunk__21109_21444 = null;
var count__21110_21445 = (0);
var i__21111_21446 = (0);
while(true){
if((i__21111_21446 < count__21110_21445)){
var vec__21149_21452 = chunk__21109_21444.cljs$core$IIndexed$_nth$arity$2(null,i__21111_21446);
var i_21453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149_21452,(0),null);
var vec__21152_21454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149_21452,(1),null);
var ii_21455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152_21454,(0),null);
var h_21456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152_21454,(1),null);
var temp__5802__auto___21457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_21453);
if(cljs.core.truth_(temp__5802__auto___21457)){
var vec__21157_21458 = temp__5802__auto___21457;
var iii_21459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21157_21458,(0),null);
var oh_21460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21157_21458,(1),null);
var cel_21461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_21459);
if((ii_21455 === iii_21459)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_21461,oh_21460,h_21456,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_21461,oh_21460,h_21456,m));
} else {
var b__20832__auto___21463 = ((function (seq__21108_21443,chunk__21109_21444,count__21110_21445,i__21111_21446,cel_21461,vec__21157_21458,iii_21459,oh_21460,temp__5802__auto___21457,vec__21149_21452,i_21453,vec__21152_21454,ii_21455,h_21456,om,nm,cs,map__21097,map__21097__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_21461);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_21460,h_21456,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_21460,h_21456,m));

return hipo.dom.insert_child_BANG_(el,ii_21455,ncel);
});})(seq__21108_21443,chunk__21109_21444,count__21110_21445,i__21111_21446,cel_21461,vec__21157_21458,iii_21459,oh_21460,temp__5802__auto___21457,vec__21149_21452,i_21453,vec__21152_21454,ii_21455,h_21456,om,nm,cs,map__21097,map__21097__$1,m,interceptors))
;
var v__20833__auto___21464 = interceptors;
if(((cljs.core.not(v__20833__auto___21464)) || (cljs.core.empty_QMARK_(v__20833__auto___21464)))){
b__20832__auto___21463();
} else {
hipo.interceptor.call(b__20832__auto___21463,v__20833__auto___21464,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_21456,new cljs.core.Keyword(null,"index","index",-1531685915),ii_21455], null));
}
}
} else {
var b__20832__auto___21470 = ((function (seq__21108_21443,chunk__21109_21444,count__21110_21445,i__21111_21446,temp__5802__auto___21457,vec__21149_21452,i_21453,vec__21152_21454,ii_21455,h_21456,om,nm,cs,map__21097,map__21097__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_21455,hipo.interpreter.create_child(h_21456,m));
});})(seq__21108_21443,chunk__21109_21444,count__21110_21445,i__21111_21446,temp__5802__auto___21457,vec__21149_21452,i_21453,vec__21152_21454,ii_21455,h_21456,om,nm,cs,map__21097,map__21097__$1,m,interceptors))
;
var v__20833__auto___21471 = interceptors;
if(((cljs.core.not(v__20833__auto___21471)) || (cljs.core.empty_QMARK_(v__20833__auto___21471)))){
b__20832__auto___21470();
} else {
hipo.interceptor.call(b__20832__auto___21470,v__20833__auto___21471,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_21456,new cljs.core.Keyword(null,"index","index",-1531685915),ii_21455], null));
}
}


var G__21477 = seq__21108_21443;
var G__21478 = chunk__21109_21444;
var G__21479 = count__21110_21445;
var G__21480 = (i__21111_21446 + (1));
seq__21108_21443 = G__21477;
chunk__21109_21444 = G__21478;
count__21110_21445 = G__21479;
i__21111_21446 = G__21480;
continue;
} else {
var temp__5804__auto___21481 = cljs.core.seq(seq__21108_21443);
if(temp__5804__auto___21481){
var seq__21108_21483__$1 = temp__5804__auto___21481;
if(cljs.core.chunked_seq_QMARK_(seq__21108_21483__$1)){
var c__5568__auto___21484 = cljs.core.chunk_first(seq__21108_21483__$1);
var G__21485 = cljs.core.chunk_rest(seq__21108_21483__$1);
var G__21486 = c__5568__auto___21484;
var G__21487 = cljs.core.count(c__5568__auto___21484);
var G__21488 = (0);
seq__21108_21443 = G__21485;
chunk__21109_21444 = G__21486;
count__21110_21445 = G__21487;
i__21111_21446 = G__21488;
continue;
} else {
var vec__21161_21490 = cljs.core.first(seq__21108_21483__$1);
var i_21491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161_21490,(0),null);
var vec__21164_21492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161_21490,(1),null);
var ii_21493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164_21492,(0),null);
var h_21494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164_21492,(1),null);
var temp__5802__auto___21495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_21491);
if(cljs.core.truth_(temp__5802__auto___21495)){
var vec__21168_21496 = temp__5802__auto___21495;
var iii_21497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21168_21496,(0),null);
var oh_21498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21168_21496,(1),null);
var cel_21499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_21497);
if((ii_21493 === iii_21497)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_21499,oh_21498,h_21494,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_21499,oh_21498,h_21494,m));
} else {
var b__20832__auto___21501 = ((function (seq__21108_21443,chunk__21109_21444,count__21110_21445,i__21111_21446,cel_21499,vec__21168_21496,iii_21497,oh_21498,temp__5802__auto___21495,vec__21161_21490,i_21491,vec__21164_21492,ii_21493,h_21494,seq__21108_21483__$1,temp__5804__auto___21481,om,nm,cs,map__21097,map__21097__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_21499);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_21498,h_21494,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_21498,h_21494,m));

return hipo.dom.insert_child_BANG_(el,ii_21493,ncel);
});})(seq__21108_21443,chunk__21109_21444,count__21110_21445,i__21111_21446,cel_21499,vec__21168_21496,iii_21497,oh_21498,temp__5802__auto___21495,vec__21161_21490,i_21491,vec__21164_21492,ii_21493,h_21494,seq__21108_21483__$1,temp__5804__auto___21481,om,nm,cs,map__21097,map__21097__$1,m,interceptors))
;
var v__20833__auto___21502 = interceptors;
if(((cljs.core.not(v__20833__auto___21502)) || (cljs.core.empty_QMARK_(v__20833__auto___21502)))){
b__20832__auto___21501();
} else {
hipo.interceptor.call(b__20832__auto___21501,v__20833__auto___21502,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_21494,new cljs.core.Keyword(null,"index","index",-1531685915),ii_21493], null));
}
}
} else {
var b__20832__auto___21512 = ((function (seq__21108_21443,chunk__21109_21444,count__21110_21445,i__21111_21446,temp__5802__auto___21495,vec__21161_21490,i_21491,vec__21164_21492,ii_21493,h_21494,seq__21108_21483__$1,temp__5804__auto___21481,om,nm,cs,map__21097,map__21097__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_21493,hipo.interpreter.create_child(h_21494,m));
});})(seq__21108_21443,chunk__21109_21444,count__21110_21445,i__21111_21446,temp__5802__auto___21495,vec__21161_21490,i_21491,vec__21164_21492,ii_21493,h_21494,seq__21108_21483__$1,temp__5804__auto___21481,om,nm,cs,map__21097,map__21097__$1,m,interceptors))
;
var v__20833__auto___21514 = interceptors;
if(((cljs.core.not(v__20833__auto___21514)) || (cljs.core.empty_QMARK_(v__20833__auto___21514)))){
b__20832__auto___21512();
} else {
hipo.interceptor.call(b__20832__auto___21512,v__20833__auto___21514,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_21494,new cljs.core.Keyword(null,"index","index",-1531685915),ii_21493], null));
}
}


var G__21522 = cljs.core.next(seq__21108_21483__$1);
var G__21523 = null;
var G__21524 = (0);
var G__21525 = (0);
seq__21108_21443 = G__21522;
chunk__21109_21444 = G__21523;
count__21110_21445 = G__21524;
i__21111_21446 = G__21525;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
if((d > (0))){
var b__20832__auto__ = (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});
var v__20833__auto__ = interceptors;
if(((cljs.core.not(v__20833__auto__)) || (cljs.core.empty_QMARK_(v__20833__auto__)))){
return b__20832__auto__();
} else {
return hipo.interceptor.call(b__20832__auto__,v__20833__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__21179){
var map__21180 = p__21179;
var map__21180__$1 = cljs.core.__destructure_map(map__21180);
var m = map__21180__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count(och);
var nc = cljs.core.count(nch);
var d = (oc - nc);
if((d > (0))){
var b__20832__auto___21537 = (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});
var v__20833__auto___21538 = interceptors;
if(((cljs.core.not(v__20833__auto___21538)) || (cljs.core.empty_QMARK_(v__20833__auto___21538)))){
b__20832__auto___21537();
} else {
hipo.interceptor.call(b__20832__auto___21537,v__20833__auto___21538,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__5636__auto___21542 = (function (){var x__5133__auto__ = oc;
var y__5134__auto__ = nc;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var i_21543 = (0);
while(true){
if((i_21543 < n__5636__auto___21542)){
var ov_21544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(och,i_21543);
var nv_21545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,i_21543);
if((!((((ov_21544 == null)) && ((nv_21545 == null)))))){
if((ov_21544 == null)){
var b__20832__auto___21547 = ((function (i_21543,ov_21544,nv_21545,n__5636__auto___21542,oc,nc,d,map__21180,map__21180__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,i_21543,hipo.interpreter.create_child(nv_21545,m));
});})(i_21543,ov_21544,nv_21545,n__5636__auto___21542,oc,nc,d,map__21180,map__21180__$1,m,interceptors))
;
var v__20833__auto___21548 = interceptors;
if(((cljs.core.not(v__20833__auto___21548)) || (cljs.core.empty_QMARK_(v__20833__auto___21548)))){
b__20832__auto___21547();
} else {
hipo.interceptor.call(b__20832__auto___21547,v__20833__auto___21548,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_21545,new cljs.core.Keyword(null,"index","index",-1531685915),i_21543], null));
}
} else {
if((nv_21545 == null)){
var b__20832__auto___21551 = ((function (i_21543,ov_21544,nv_21545,n__5636__auto___21542,oc,nc,d,map__21180,map__21180__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_(el,i_21543);
});})(i_21543,ov_21544,nv_21545,n__5636__auto___21542,oc,nc,d,map__21180,map__21180__$1,m,interceptors))
;
var v__20833__auto___21552 = interceptors;
if(((cljs.core.not(v__20833__auto___21552)) || (cljs.core.empty_QMARK_(v__20833__auto___21552)))){
b__20832__auto___21551();
} else {
hipo.interceptor.call(b__20832__auto___21551,v__20833__auto___21552,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_21543], null));
}
} else {
var temp__5802__auto___21553 = hipo.dom.child(el,i_21543);
if(cljs.core.truth_(temp__5802__auto___21553)){
var cel_21554 = temp__5802__auto___21553;
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_21554,ov_21544,nv_21545,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_21554,ov_21544,nv_21545,m));
} else {
}

}
}
} else {
}

var G__21555 = (i_21543 + (1));
i_21543 = G__21555;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__5802__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,oc);
if(cljs.core.truth_(temp__5802__auto__)){
var h = temp__5802__auto__;
var b__20832__auto__ = (function (){
return el.appendChild(hipo.interpreter.create_child(h,m));
});
var v__20833__auto__ = interceptors;
if(((cljs.core.not(v__20833__auto__)) || (cljs.core.empty_QMARK_(v__20833__auto__)))){
return b__20832__auto__();
} else {
return hipo.interceptor.call(b__20832__auto__,v__20833__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(nch,oc));
var b__20832__auto___21565 = (function (){
return hipo.interpreter.append_children_BANG_(f,cs,m);
});
var v__20833__auto___21566 = interceptors;
if(((cljs.core.not(v__20833__auto___21566)) || (cljs.core.empty_QMARK_(v__20833__auto___21566)))){
b__20832__auto___21565();
} else {
hipo.interceptor.call(b__20832__auto___21565,v__20833__auto___21566,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return (!((hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0))) == null)));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__21194){
var map__21195 = p__21194;
var map__21195__$1 = cljs.core.__destructure_map(map__21195);
var m = map__21195__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21195__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_(nch)){
if((!(cljs.core.empty_QMARK_(och)))){
var b__20832__auto__ = (function (){
return hipo.dom.clear_BANG_(el);
});
var v__20833__auto__ = interceptors;
if(((cljs.core.not(v__20833__auto__)) || (cljs.core.empty_QMARK_(v__20833__auto__)))){
return b__20832__auto__();
} else {
return hipo.interceptor.call(b__20832__auto__,v__20833__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(hipo.interpreter.keyed_children_QMARK_(nch)){
return hipo.interpreter.reconciliate_keyed_children_BANG_(el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_(el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__21213){
var map__21215 = p__21213;
var map__21215__$1 = cljs.core.__destructure_map(map__21215);
var m = map__21215__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_(nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(((hipo.hiccup.literal_QMARK_(oh)) || ((!((hipo.hiccup.tag(nh) === hipo.hiccup.tag(oh))))))){
var nel = hipo.interpreter.create_child(nh,m);
var b__20832__auto__ = (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_(el,nel);
});
var v__20833__auto__ = interceptors;
if(((cljs.core.not(v__20833__auto__)) || (cljs.core.empty_QMARK_(v__20833__auto__)))){
return b__20832__auto__();
} else {
return hipo.interceptor.call(b__20832__auto__,v__20833__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes(oh);
var nm = hipo.hiccup.attributes(nh);
var och = hipo.hiccup.children(oh);
var nch = hipo.hiccup.children(nh);
var b__20832__auto___21589 = (function (){
return hipo.interpreter.reconciliate_children_BANG_(el,hipo.hiccup.flatten_children(och),hipo.hiccup.flatten_children(nch),m);
});
var v__20833__auto___21590 = interceptors;
if(((cljs.core.not(v__20833__auto___21590)) || (cljs.core.empty_QMARK_(v__20833__auto___21590)))){
b__20832__auto___21589();
} else {
hipo.interceptor.call(b__20832__auto___21589,v__20833__auto___21590,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_(el,hipo.hiccup.keyns(nh),hipo.hiccup.tag(nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__21219){
var map__21220 = p__21219;
var map__21220__$1 = cljs.core.__destructure_map(map__21220);
var m = map__21220__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21220__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(((cljs.core.vector_QMARK_(nh)) || (hipo.hiccup.literal_QMARK_(nh)))){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if((((m == null)) || (cljs.core.map_QMARK_(m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__20832__auto__ = (function (){
if(hipo.hiccup.literal_QMARK_(nh)){
if((!((oh === nh)))){
var b__20832__auto__ = (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_(el,cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh));
});
var v__20833__auto__ = interceptors;
if(((cljs.core.not(v__20833__auto__)) || (cljs.core.empty_QMARK_(v__20833__auto__)))){
return b__20832__auto__();
} else {
return hipo.interceptor.call(b__20832__auto__,v__20833__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_(el,oh,nh,m);
}
});
var v__20833__auto__ = interceptors;
if(((cljs.core.not(v__20833__auto__)) || (cljs.core.empty_QMARK_(v__20833__auto__)))){
return b__20832__auto__();
} else {
return hipo.interceptor.call(b__20832__auto__,v__20833__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=hipo.interpreter.js.map
