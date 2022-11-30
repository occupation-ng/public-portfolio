goog.provide('piflow.main');
if((typeof piflow !== 'undefined') && (typeof piflow.main !== 'undefined') && (typeof piflow.main.dada !== 'undefined')){
} else {
piflow.main.dada = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
piflow.main.onit = (function piflow$main$onit(){
return piflow.core.draw();
});
piflow.main._main = (function piflow$main$_main(){
return piflow.main.onit();
});
piflow.main._reload = (function piflow$main$_reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["..reloaded"], 0));

return piflow.main.onit();
});

//# sourceMappingURL=piflow.main.js.map
