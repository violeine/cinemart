goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$start_trace(p__16296){
var map__16297 = p__16296;
var map__16297__$1 = (((((!((map__16297 == null))))?(((((map__16297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16297):map__16297);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$tracing_cb_debounced(){
var seq__16299_16330 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs));
var chunk__16300_16331 = null;
var count__16301_16332 = (0);
var i__16302_16333 = (0);
while(true){
if((i__16302_16333 < count__16301_16332)){
var vec__16313_16334 = chunk__16300_16331.cljs$core$IIndexed$_nth$arity$2(null,i__16302_16333);
var k_16335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16313_16334,(0),null);
var cb_16336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16313_16334,(1),null);
try{var G__16317_16337 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces);
(cb_16336.cljs$core$IFn$_invoke$arity$1 ? cb_16336.cljs$core$IFn$_invoke$arity$1(G__16317_16337) : cb_16336.call(null,G__16317_16337));
}catch (e16316){var e_16338 = e16316;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16335,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces),e_16338], 0));
}

var G__16345 = seq__16299_16330;
var G__16346 = chunk__16300_16331;
var G__16347 = count__16301_16332;
var G__16348 = (i__16302_16333 + (1));
seq__16299_16330 = G__16345;
chunk__16300_16331 = G__16346;
count__16301_16332 = G__16347;
i__16302_16333 = G__16348;
continue;
} else {
var temp__5735__auto___16349 = cljs.core.seq(seq__16299_16330);
if(temp__5735__auto___16349){
var seq__16299_16350__$1 = temp__5735__auto___16349;
if(cljs.core.chunked_seq_QMARK_(seq__16299_16350__$1)){
var c__4556__auto___16351 = cljs.core.chunk_first(seq__16299_16350__$1);
var G__16352 = cljs.core.chunk_rest(seq__16299_16350__$1);
var G__16353 = c__4556__auto___16351;
var G__16354 = cljs.core.count(c__4556__auto___16351);
var G__16355 = (0);
seq__16299_16330 = G__16352;
chunk__16300_16331 = G__16353;
count__16301_16332 = G__16354;
i__16302_16333 = G__16355;
continue;
} else {
var vec__16318_16356 = cljs.core.first(seq__16299_16350__$1);
var k_16357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16318_16356,(0),null);
var cb_16358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16318_16356,(1),null);
try{var G__16322_16359 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces);
(cb_16358.cljs$core$IFn$_invoke$arity$1 ? cb_16358.cljs$core$IFn$_invoke$arity$1(G__16322_16359) : cb_16358.call(null,G__16322_16359));
}catch (e16321){var e_16360 = e16321;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16357,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces),e_16360], 0));
}

var G__16361 = cljs.core.next(seq__16299_16350__$1);
var G__16362 = null;
var G__16363 = (0);
var G__16364 = (0);
seq__16299_16330 = G__16361;
chunk__16300_16331 = G__16362;
count__16301_16332 = G__16363;
i__16302_16333 = G__16364;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.js.map
