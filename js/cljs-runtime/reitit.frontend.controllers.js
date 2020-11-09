goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__27285,match){
var map__27286 = p__27285;
var map__27286__$1 = (((((!((map__27286 == null))))?(((((map__27286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27286):map__27286);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27286__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27286__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27286__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__27288(s__27289){
return (new cljs.core.LazySeq(null,(function (){
var s__27289__$1 = s__27289;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27289__$1);
if(temp__5735__auto__){
var s__27289__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27289__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27289__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27291 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27290 = (0);
while(true){
if((i__27290 < size__4528__auto__)){
var vec__27292 = cljs.core._nth(c__4527__auto__,i__27290);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27292,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27292,(1),null);
cljs.core.chunk_append(b__27291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__27307 = (i__27290 + (1));
i__27290 = G__27307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27291),reitit$frontend$controllers$get_identity_$_iter__27288(cljs.core.chunk_rest(s__27289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27291),null);
}
} else {
var vec__27295 = cljs.core.first(s__27289__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27295,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27295,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__27288(cljs.core.rest(s__27289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__27298 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27298) : f.call(null,G__27298));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__27299_27308 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__27300_27309 = null;
var count__27301_27310 = (0);
var i__27302_27311 = (0);
while(true){
if((i__27302_27311 < count__27301_27310)){
var controller_27312 = chunk__27300_27309.cljs$core$IIndexed$_nth$arity$2(null,i__27302_27311);
reitit.frontend.controllers.apply_controller(controller_27312,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__27313 = seq__27299_27308;
var G__27314 = chunk__27300_27309;
var G__27315 = count__27301_27310;
var G__27316 = (i__27302_27311 + (1));
seq__27299_27308 = G__27313;
chunk__27300_27309 = G__27314;
count__27301_27310 = G__27315;
i__27302_27311 = G__27316;
continue;
} else {
var temp__5735__auto___27317 = cljs.core.seq(seq__27299_27308);
if(temp__5735__auto___27317){
var seq__27299_27318__$1 = temp__5735__auto___27317;
if(cljs.core.chunked_seq_QMARK_(seq__27299_27318__$1)){
var c__4556__auto___27319 = cljs.core.chunk_first(seq__27299_27318__$1);
var G__27320 = cljs.core.chunk_rest(seq__27299_27318__$1);
var G__27321 = c__4556__auto___27319;
var G__27322 = cljs.core.count(c__4556__auto___27319);
var G__27323 = (0);
seq__27299_27308 = G__27320;
chunk__27300_27309 = G__27321;
count__27301_27310 = G__27322;
i__27302_27311 = G__27323;
continue;
} else {
var controller_27324 = cljs.core.first(seq__27299_27318__$1);
reitit.frontend.controllers.apply_controller(controller_27324,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__27325 = cljs.core.next(seq__27299_27318__$1);
var G__27326 = null;
var G__27327 = (0);
var G__27328 = (0);
seq__27299_27308 = G__27325;
chunk__27300_27309 = G__27326;
count__27301_27310 = G__27327;
i__27302_27311 = G__27328;
continue;
}
} else {
}
}
break;
}

var seq__27303_27329 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__27304_27330 = null;
var count__27305_27331 = (0);
var i__27306_27332 = (0);
while(true){
if((i__27306_27332 < count__27305_27331)){
var controller_27333 = chunk__27304_27330.cljs$core$IIndexed$_nth$arity$2(null,i__27306_27332);
reitit.frontend.controllers.apply_controller(controller_27333,new cljs.core.Keyword(null,"start","start",-355208981));


var G__27334 = seq__27303_27329;
var G__27335 = chunk__27304_27330;
var G__27336 = count__27305_27331;
var G__27337 = (i__27306_27332 + (1));
seq__27303_27329 = G__27334;
chunk__27304_27330 = G__27335;
count__27305_27331 = G__27336;
i__27306_27332 = G__27337;
continue;
} else {
var temp__5735__auto___27338 = cljs.core.seq(seq__27303_27329);
if(temp__5735__auto___27338){
var seq__27303_27339__$1 = temp__5735__auto___27338;
if(cljs.core.chunked_seq_QMARK_(seq__27303_27339__$1)){
var c__4556__auto___27340 = cljs.core.chunk_first(seq__27303_27339__$1);
var G__27341 = cljs.core.chunk_rest(seq__27303_27339__$1);
var G__27342 = c__4556__auto___27340;
var G__27343 = cljs.core.count(c__4556__auto___27340);
var G__27344 = (0);
seq__27303_27329 = G__27341;
chunk__27304_27330 = G__27342;
count__27305_27331 = G__27343;
i__27306_27332 = G__27344;
continue;
} else {
var controller_27345 = cljs.core.first(seq__27303_27339__$1);
reitit.frontend.controllers.apply_controller(controller_27345,new cljs.core.Keyword(null,"start","start",-355208981));


var G__27347 = cljs.core.next(seq__27303_27339__$1);
var G__27348 = null;
var G__27349 = (0);
var G__27350 = (0);
seq__27303_27329 = G__27347;
chunk__27304_27330 = G__27348;
count__27305_27331 = G__27349;
i__27306_27332 = G__27350;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
