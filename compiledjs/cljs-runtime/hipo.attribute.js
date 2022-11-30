goog.provide('hipo.attribute');
hipo.attribute.style_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),"style"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20924_SHARP_,p2__20925_SHARP_,p3__20926_SHARP_,p4__20923_SHARP_){
var seq__20927 = cljs.core.seq(p4__20923_SHARP_);
var chunk__20928 = null;
var count__20929 = (0);
var i__20930 = (0);
while(true){
if((i__20930 < count__20929)){
var vec__20937 = chunk__20928.cljs$core$IIndexed$_nth$arity$2(null,i__20930);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20937,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20937,(1),null);
(p1__20924_SHARP_["style"][cljs.core.name(k)] = v);


var G__20971 = seq__20927;
var G__20972 = chunk__20928;
var G__20973 = count__20929;
var G__20974 = (i__20930 + (1));
seq__20927 = G__20971;
chunk__20928 = G__20972;
count__20929 = G__20973;
i__20930 = G__20974;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20927);
if(temp__5804__auto__){
var seq__20927__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20927__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20927__$1);
var G__20975 = cljs.core.chunk_rest(seq__20927__$1);
var G__20976 = c__5568__auto__;
var G__20977 = cljs.core.count(c__5568__auto__);
var G__20978 = (0);
seq__20927 = G__20975;
chunk__20928 = G__20976;
count__20929 = G__20977;
i__20930 = G__20978;
continue;
} else {
var vec__20940 = cljs.core.first(seq__20927__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20940,(1),null);
(p1__20924_SHARP_["style"][cljs.core.name(k)] = v);


var G__20980 = cljs.core.next(seq__20927__$1);
var G__20981 = null;
var G__20982 = (0);
var G__20983 = (0);
seq__20927 = G__20980;
chunk__20928 = G__20981;
count__20929 = G__20982;
i__20930 = G__20983;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
hipo.attribute.property_name__GT_js_property_name = (function hipo$attribute$property_name__GT_js_property_name(n){
return n.replace("-","_");
});
hipo.attribute.set_property_value = (function hipo$attribute$set_property_value(el,k,v){
return (el[hipo.attribute.property_name__GT_js_property_name(cljs.core.name(k))] = v);
});
hipo.attribute.set_attribute_BANG_ = (function hipo$attribute$set_attribute_BANG_(el,k,v,m){
var temp__5802__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace(cljs.core.namespace(k),m):null);
if(cljs.core.truth_(temp__5802__auto__)){
var nns = temp__5802__auto__;
return el.setAttributeNS(nns,cljs.core.name(k),v);
} else {
return el.setAttribute(cljs.core.name(k),v);
}
});
hipo.attribute.remove_attribute_BANG_ = (function hipo$attribute$remove_attribute_BANG_(el,k,m){
var temp__5802__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace(cljs.core.namespace(k),m):null);
if(cljs.core.truth_(temp__5802__auto__)){
var nns = temp__5802__auto__;
return el.removeAttributeNS(nns,cljs.core.name(k));
} else {
return el.removeAttribute(cljs.core.name(k));
}
});
hipo.attribute.default_handler_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20952_SHARP_,p2__20953_SHARP_,p3__20955_SHARP_,p4__20954_SHARP_){
return hipo.attribute.set_property_value(p1__20952_SHARP_,p2__20953_SHARP_,p4__20954_SHARP_);
})], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20957_SHARP_,p2__20958_SHARP_,p3__20960_SHARP_,p4__20956_SHARP_,p5__20959_SHARP_){
if(cljs.core.truth_(p4__20956_SHARP_)){
return hipo.attribute.set_attribute_BANG_(p1__20957_SHARP_,p2__20958_SHARP_,p4__20956_SHARP_,p5__20959_SHARP_);
} else {
return hipo.attribute.remove_attribute_BANG_(p1__20957_SHARP_,p2__20958_SHARP_,p5__20959_SHARP_);
}
})], null)], null);
hipo.attribute.default_handlers = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),"svg",new cljs.core.Keyword(null,"attr","attr",-604132353),"class"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"checked",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"attr","attr",-604132353),"autofocus"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20963_SHARP_,p2__20964_SHARP_,p3__20965_SHARP_,p4__20962_SHARP_){
if(cljs.core.truth_(p4__20962_SHARP_)){
p1__20963_SHARP_.focus();

return p1__20963_SHARP_.setAttribute(p2__20964_SHARP_,p4__20962_SHARP_);
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"option",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["selected",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"select",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"selectIndex",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"textarea",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["value",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null)], null);
hipo.attribute.matches_QMARK_ = (function hipo$attribute$matches_QMARK_(expr,s){
if(cljs.core.truth_(expr)){
if(cljs.core.set_QMARK_(expr)){
return cljs.core.contains_QMARK_(expr,s);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,expr);

}
} else {
return true;
}
});
hipo.attribute.target_matches_QMARK_ = (function hipo$attribute$target_matches_QMARK_(m,ns,tag,attr){
return ((hipo.attribute.matches_QMARK_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m),ns)) && (((hipo.attribute.matches_QMARK_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m),tag)) && (hipo.attribute.matches_QMARK_(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(m),attr)))));
});
hipo.attribute.handler = (function hipo$attribute$handler(m,ns,tag,attr){
var v = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribute-handlers","attribute-handlers",855454691).cljs$core$IFn$_invoke$arity$1(m),hipo.attribute.default_handlers);
var h = cljs.core.some((function (p1__20968_SHARP_){
var t = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__20968_SHARP_);
if(hipo.attribute.target_matches_QMARK_(t,ns,tag,cljs.core.name(attr))){
return p1__20968_SHARP_;
} else {
return null;
}
}),v);
if(cljs.core.contains_QMARK_(h,new cljs.core.Keyword(null,"type","type",1174270348))){
var fexpr__20969 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(h);
return (fexpr__20969.cljs$core$IFn$_invoke$arity$1 ? fexpr__20969.cljs$core$IFn$_invoke$arity$1(hipo.attribute.default_handler_fns) : fexpr__20969.call(null,hipo.attribute.default_handler_fns));
} else {
return h;
}
});
hipo.attribute.default_set_value_BANG_ = (function hipo$attribute$default_set_value_BANG_(el,attr,ov,nv,m){
if(((hipo.hiccup.literal_QMARK_(ov)) || (hipo.hiccup.literal_QMARK_(nv)))){
if(cljs.core.truth_(nv)){
return hipo.attribute.set_attribute_BANG_(el,attr,nv,m);
} else {
return hipo.attribute.remove_attribute_BANG_(el,attr,m);
}
} else {
return (el[attr] = hipo.attribute.set_property_value(el,attr,nv));
}
});
hipo.attribute.set_value_BANG_ = (function hipo$attribute$set_value_BANG_(el,m,ns,tag,attr,ov,nv){
var h = hipo.attribute.handler(m,ns,tag,attr);
var f = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hipo.attribute.default_set_value_BANG_;
}
})();
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(el,attr,ov,nv,m) : f.call(null,el,attr,ov,nv,m));
});

//# sourceMappingURL=hipo.attribute.js.map
