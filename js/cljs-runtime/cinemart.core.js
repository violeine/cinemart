goog.provide('cinemart.core');
cinemart.core.hello_world = (function cinemart$core$hello_world(){
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.subs","current-route","cinemart.subs/current-route",1321937234)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.justify-between.min-h-screen","div.flex.flex-col.justify-between.min-h-screen",2028593969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.components.header.header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),cinemart.router.router,new cljs.core.Keyword(null,"current-route","current-route",2067529448),current_route], null)], null),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.components.footer.footer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.notification.view.notification], null)], null);
});
cinemart.core.dev_setup = (function cinemart$core$dev_setup(){
if(cinemart.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
cinemart.core.mount_root = (function cinemart$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

cinemart.router.init_routes_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.core.hello_world], null),root_el);
});
cinemart.core.init = (function cinemart$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","init-db","cinemart.events/init-db",-1947627678)], null));

cinemart.core.dev_setup();

return cinemart.core.mount_root();
});
goog.exportSymbol('cinemart.core.init', cinemart.core.init);

//# sourceMappingURL=cinemart.core.js.map
