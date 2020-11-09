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

var G__27308 = (i__27290 + (1));
i__27290 = G__27308;
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
var seq__27299_27314 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__27300_27315 = null;
var count__27301_27316 = (0);
var i__27302_27317 = (0);
while(true){
if((i__27302_27317 < count__27301_27316)){
var controller_27318 = chunk__27300_27315.cljs$core$IIndexed$_nth$arity$2(null,i__27302_27317);
reitit.frontend.controllers.apply_controller(controller_27318,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__27319 = seq__27299_27314;
var G__27320 = chunk__27300_27315;
var G__27321 = count__27301_27316;
var G__27322 = (i__27302_27317 + (1));
seq__27299_27314 = G__27319;
chunk__27300_27315 = G__27320;
count__27301_27316 = G__27321;
i__27302_27317 = G__27322;
continue;
} else {
var temp__5735__auto___27323 = cljs.core.seq(seq__27299_27314);
if(temp__5735__auto___27323){
var seq__27299_27324__$1 = temp__5735__auto___27323;
if(cljs.core.chunked_seq_QMARK_(seq__27299_27324__$1)){
var c__4556__auto___27326 = cljs.core.chunk_first(seq__27299_27324__$1);
var G__27327 = cljs.core.chunk_rest(seq__27299_27324__$1);
var G__27328 = c__4556__auto___27326;
var G__27329 = cljs.core.count(c__4556__auto___27326);
var G__27330 = (0);
seq__27299_27314 = G__27327;
chunk__27300_27315 = G__27328;
count__27301_27316 = G__27329;
i__27302_27317 = G__27330;
continue;
} else {
var controller_27334 = cljs.core.first(seq__27299_27324__$1);
reitit.frontend.controllers.apply_controller(controller_27334,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__27335 = cljs.core.next(seq__27299_27324__$1);
var G__27336 = null;
var G__27337 = (0);
var G__27338 = (0);
seq__27299_27314 = G__27335;
chunk__27300_27315 = G__27336;
count__27301_27316 = G__27337;
i__27302_27317 = G__27338;
continue;
}
} else {
}
}
break;
}

var seq__27303_27339 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__27304_27340 = null;
var count__27305_27341 = (0);
var i__27306_27342 = (0);
while(true){
if((i__27306_27342 < count__27305_27341)){
var controller_27343 = chunk__27304_27340.cljs$core$IIndexed$_nth$arity$2(null,i__27306_27342);
reitit.frontend.controllers.apply_controller(controller_27343,new cljs.core.Keyword(null,"start","start",-355208981));


var G__27344 = seq__27303_27339;
var G__27345 = chunk__27304_27340;
var G__27346 = count__27305_27341;
var G__27347 = (i__27306_27342 + (1));
seq__27303_27339 = G__27344;
chunk__27304_27340 = G__27345;
count__27305_27341 = G__27346;
i__27306_27342 = G__27347;
continue;
} else {
var temp__5735__auto___27349 = cljs.core.seq(seq__27303_27339);
if(temp__5735__auto___27349){
var seq__27303_27353__$1 = temp__5735__auto___27349;
if(cljs.core.chunked_seq_QMARK_(seq__27303_27353__$1)){
var c__4556__auto___27354 = cljs.core.chunk_first(seq__27303_27353__$1);
var G__27355 = cljs.core.chunk_rest(seq__27303_27353__$1);
var G__27356 = c__4556__auto___27354;
var G__27357 = cljs.core.count(c__4556__auto___27354);
var G__27358 = (0);
seq__27303_27339 = G__27355;
chunk__27304_27340 = G__27356;
count__27305_27341 = G__27357;
i__27306_27342 = G__27358;
continue;
} else {
var controller_27359 = cljs.core.first(seq__27303_27353__$1);
reitit.frontend.controllers.apply_controller(controller_27359,new cljs.core.Keyword(null,"start","start",-355208981));


var G__27361 = cljs.core.next(seq__27303_27353__$1);
var G__27362 = null;
var G__27363 = (0);
var G__27364 = (0);
seq__27303_27339 = G__27361;
chunk__27304_27340 = G__27362;
count__27305_27341 = G__27363;
i__27306_27342 = G__27364;
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
