goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21347 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21348 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21348);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___21417 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___21417)){
var new_db_21418 = temp__5735__auto___21417;
var fexpr__21349_21419 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21349_21419.cljs$core$IFn$_invoke$arity$1 ? fexpr__21349_21419.cljs$core$IFn$_invoke$arity$1(new_db_21418) : fexpr__21349_21419.call(null,new_db_21418));
} else {
}

var seq__21350 = cljs.core.seq(effects_without_db);
var chunk__21351 = null;
var count__21352 = (0);
var i__21353 = (0);
while(true){
if((i__21353 < count__21352)){
var vec__21360 = chunk__21351.cljs$core$IIndexed$_nth$arity$2(null,i__21353);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21360,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21360,(1),null);
var temp__5733__auto___21420 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___21420)){
var effect_fn_21421 = temp__5733__auto___21420;
(effect_fn_21421.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21421.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21421.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21422 = seq__21350;
var G__21423 = chunk__21351;
var G__21424 = count__21352;
var G__21425 = (i__21353 + (1));
seq__21350 = G__21422;
chunk__21351 = G__21423;
count__21352 = G__21424;
i__21353 = G__21425;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21350);
if(temp__5735__auto__){
var seq__21350__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21350__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21350__$1);
var G__21430 = cljs.core.chunk_rest(seq__21350__$1);
var G__21431 = c__4556__auto__;
var G__21432 = cljs.core.count(c__4556__auto__);
var G__21433 = (0);
seq__21350 = G__21430;
chunk__21351 = G__21431;
count__21352 = G__21432;
i__21353 = G__21433;
continue;
} else {
var vec__21363 = cljs.core.first(seq__21350__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21363,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21363,(1),null);
var temp__5733__auto___21434 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___21434)){
var effect_fn_21435 = temp__5733__auto___21434;
(effect_fn_21435.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21435.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21435.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21439 = cljs.core.next(seq__21350__$1);
var G__21440 = null;
var G__21441 = (0);
var G__21442 = (0);
seq__21350 = G__21439;
chunk__21351 = G__21440;
count__21352 = G__21441;
i__21353 = G__21442;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21053__auto___21443 = re_frame.interop.now();
var duration__21054__auto___21444 = (end__21053__auto___21443 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21054__auto___21444,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21053__auto___21443);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21347);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___21445 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___21445)){
var new_db_21449 = temp__5735__auto___21445;
var fexpr__21368_21450 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21368_21450.cljs$core$IFn$_invoke$arity$1 ? fexpr__21368_21450.cljs$core$IFn$_invoke$arity$1(new_db_21449) : fexpr__21368_21450.call(null,new_db_21449));
} else {
}

var seq__21369 = cljs.core.seq(effects_without_db);
var chunk__21370 = null;
var count__21371 = (0);
var i__21372 = (0);
while(true){
if((i__21372 < count__21371)){
var vec__21380 = chunk__21370.cljs$core$IIndexed$_nth$arity$2(null,i__21372);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21380,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21380,(1),null);
var temp__5733__auto___21451 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___21451)){
var effect_fn_21452 = temp__5733__auto___21451;
(effect_fn_21452.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21452.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21452.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21453 = seq__21369;
var G__21454 = chunk__21370;
var G__21455 = count__21371;
var G__21456 = (i__21372 + (1));
seq__21369 = G__21453;
chunk__21370 = G__21454;
count__21371 = G__21455;
i__21372 = G__21456;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21369);
if(temp__5735__auto__){
var seq__21369__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21369__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21369__$1);
var G__21461 = cljs.core.chunk_rest(seq__21369__$1);
var G__21462 = c__4556__auto__;
var G__21463 = cljs.core.count(c__4556__auto__);
var G__21464 = (0);
seq__21369 = G__21461;
chunk__21370 = G__21462;
count__21371 = G__21463;
i__21372 = G__21464;
continue;
} else {
var vec__21383 = cljs.core.first(seq__21369__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21383,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21383,(1),null);
var temp__5733__auto___21465 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___21465)){
var effect_fn_21466 = temp__5733__auto___21465;
(effect_fn_21466.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21466.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21466.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21467 = cljs.core.next(seq__21369__$1);
var G__21468 = null;
var G__21469 = (0);
var G__21470 = (0);
seq__21369 = G__21467;
chunk__21370 = G__21468;
count__21371 = G__21469;
i__21372 = G__21470;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21386){
var map__21387 = p__21386;
var map__21387__$1 = (((((!((map__21387 == null))))?(((((map__21387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21387):map__21387);
var effect = map__21387__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21387__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__21389 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21390 = null;
var count__21391 = (0);
var i__21392 = (0);
while(true){
if((i__21392 < count__21391)){
var effect = chunk__21390.cljs$core$IIndexed$_nth$arity$2(null,i__21392);
re_frame.fx.dispatch_later(effect);


var G__21477 = seq__21389;
var G__21478 = chunk__21390;
var G__21479 = count__21391;
var G__21480 = (i__21392 + (1));
seq__21389 = G__21477;
chunk__21390 = G__21478;
count__21391 = G__21479;
i__21392 = G__21480;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21389);
if(temp__5735__auto__){
var seq__21389__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21389__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21389__$1);
var G__21481 = cljs.core.chunk_rest(seq__21389__$1);
var G__21482 = c__4556__auto__;
var G__21483 = cljs.core.count(c__4556__auto__);
var G__21484 = (0);
seq__21389 = G__21481;
chunk__21390 = G__21482;
count__21391 = G__21483;
i__21392 = G__21484;
continue;
} else {
var effect = cljs.core.first(seq__21389__$1);
re_frame.fx.dispatch_later(effect);


var G__21485 = cljs.core.next(seq__21389__$1);
var G__21486 = null;
var G__21487 = (0);
var G__21488 = (0);
seq__21389 = G__21485;
chunk__21390 = G__21486;
count__21391 = G__21487;
i__21392 = G__21488;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__21393 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21394 = null;
var count__21395 = (0);
var i__21396 = (0);
while(true){
if((i__21396 < count__21395)){
var vec__21403 = chunk__21394.cljs$core$IIndexed$_nth$arity$2(null,i__21396);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21403,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21403,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___21489 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___21489)){
var effect_fn_21490 = temp__5733__auto___21489;
(effect_fn_21490.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21490.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21490.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21491 = seq__21393;
var G__21492 = chunk__21394;
var G__21493 = count__21395;
var G__21494 = (i__21396 + (1));
seq__21393 = G__21491;
chunk__21394 = G__21492;
count__21395 = G__21493;
i__21396 = G__21494;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21393);
if(temp__5735__auto__){
var seq__21393__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21393__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21393__$1);
var G__21495 = cljs.core.chunk_rest(seq__21393__$1);
var G__21496 = c__4556__auto__;
var G__21497 = cljs.core.count(c__4556__auto__);
var G__21498 = (0);
seq__21393 = G__21495;
chunk__21394 = G__21496;
count__21395 = G__21497;
i__21396 = G__21498;
continue;
} else {
var vec__21406 = cljs.core.first(seq__21393__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21406,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21406,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___21499 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___21499)){
var effect_fn_21500 = temp__5733__auto___21499;
(effect_fn_21500.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21500.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21500.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21502 = cljs.core.next(seq__21393__$1);
var G__21503 = null;
var G__21504 = (0);
var G__21505 = (0);
seq__21393 = G__21502;
chunk__21394 = G__21503;
count__21395 = G__21504;
i__21396 = G__21505;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__21409 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21410 = null;
var count__21411 = (0);
var i__21412 = (0);
while(true){
if((i__21412 < count__21411)){
var event = chunk__21410.cljs$core$IIndexed$_nth$arity$2(null,i__21412);
re_frame.router.dispatch(event);


var G__21506 = seq__21409;
var G__21507 = chunk__21410;
var G__21508 = count__21411;
var G__21509 = (i__21412 + (1));
seq__21409 = G__21506;
chunk__21410 = G__21507;
count__21411 = G__21508;
i__21412 = G__21509;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21409);
if(temp__5735__auto__){
var seq__21409__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21409__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21409__$1);
var G__21510 = cljs.core.chunk_rest(seq__21409__$1);
var G__21511 = c__4556__auto__;
var G__21512 = cljs.core.count(c__4556__auto__);
var G__21513 = (0);
seq__21409 = G__21510;
chunk__21410 = G__21511;
count__21411 = G__21512;
i__21412 = G__21513;
continue;
} else {
var event = cljs.core.first(seq__21409__$1);
re_frame.router.dispatch(event);


var G__21514 = cljs.core.next(seq__21409__$1);
var G__21515 = null;
var G__21516 = (0);
var G__21517 = (0);
seq__21409 = G__21514;
chunk__21410 = G__21515;
count__21411 = G__21516;
i__21412 = G__21517;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__21413 = cljs.core.seq(value);
var chunk__21414 = null;
var count__21415 = (0);
var i__21416 = (0);
while(true){
if((i__21416 < count__21415)){
var event = chunk__21414.cljs$core$IIndexed$_nth$arity$2(null,i__21416);
clear_event(event);


var G__21519 = seq__21413;
var G__21520 = chunk__21414;
var G__21521 = count__21415;
var G__21522 = (i__21416 + (1));
seq__21413 = G__21519;
chunk__21414 = G__21520;
count__21415 = G__21521;
i__21416 = G__21522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21413);
if(temp__5735__auto__){
var seq__21413__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21413__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21413__$1);
var G__21523 = cljs.core.chunk_rest(seq__21413__$1);
var G__21524 = c__4556__auto__;
var G__21525 = cljs.core.count(c__4556__auto__);
var G__21526 = (0);
seq__21413 = G__21523;
chunk__21414 = G__21524;
count__21415 = G__21525;
i__21416 = G__21526;
continue;
} else {
var event = cljs.core.first(seq__21413__$1);
clear_event(event);


var G__21527 = cljs.core.next(seq__21413__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__21413 = G__21527;
chunk__21414 = G__21528;
count__21415 = G__21529;
i__21416 = G__21530;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
