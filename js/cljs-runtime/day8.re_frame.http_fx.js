goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__29243){
var vec__29244 = p__29243;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29244,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29244,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__29249){
var map__29250 = p__29249;
var map__29250__$1 = (((((!((map__29250 == null))))?(((((map__29250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29250):map__29250);
var request = map__29250__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29250__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29250__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__29247_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__29247_SHARP_));
}),(function (p1__29248_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__29248_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5733__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var on_request = temp__5733__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__29252 = cljs.core.seq(seq_request_maps);
var chunk__29253 = null;
var count__29254 = (0);
var i__29255 = (0);
while(true){
if((i__29255 < count__29254)){
var request__$1 = chunk__29253.cljs$core$IIndexed$_nth$arity$2(null,i__29255);
var xhrio_29260 = (function (){var G__29258 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__29258) : ajax.core.ajax_request.call(null,G__29258));
})();
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_29260);


var G__29261 = seq__29252;
var G__29262 = chunk__29253;
var G__29263 = count__29254;
var G__29264 = (i__29255 + (1));
seq__29252 = G__29261;
chunk__29253 = G__29262;
count__29254 = G__29263;
i__29255 = G__29264;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29252);
if(temp__5735__auto__){
var seq__29252__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29252__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29252__$1);
var G__29265 = cljs.core.chunk_rest(seq__29252__$1);
var G__29266 = c__4556__auto__;
var G__29267 = cljs.core.count(c__4556__auto__);
var G__29268 = (0);
seq__29252 = G__29265;
chunk__29253 = G__29266;
count__29254 = G__29267;
i__29255 = G__29268;
continue;
} else {
var request__$1 = cljs.core.first(seq__29252__$1);
var xhrio_29269 = (function (){var G__29259 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__29259) : ajax.core.ajax_request.call(null,G__29259));
})();
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_29269);


var G__29270 = cljs.core.next(seq__29252__$1);
var G__29271 = null;
var G__29272 = (0);
var G__29273 = (0);
seq__29252 = G__29270;
chunk__29253 = G__29271;
count__29254 = G__29272;
i__29255 = G__29273;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
