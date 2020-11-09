goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16570 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16571 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16571);

try{try{var seq__16572 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__16573 = null;
var count__16574 = (0);
var i__16575 = (0);
while(true){
if((i__16575 < count__16574)){
var vec__16582 = chunk__16573.cljs$core$IIndexed$_nth$arity$2(null,i__16575);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(1),null);
var temp__5733__auto___16630 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16630)){
var effect_fn_16631 = temp__5733__auto___16630;
(effect_fn_16631.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16631.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16631.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16632 = seq__16572;
var G__16633 = chunk__16573;
var G__16634 = count__16574;
var G__16635 = (i__16575 + (1));
seq__16572 = G__16632;
chunk__16573 = G__16633;
count__16574 = G__16634;
i__16575 = G__16635;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16572);
if(temp__5735__auto__){
var seq__16572__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16572__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16572__$1);
var G__16636 = cljs.core.chunk_rest(seq__16572__$1);
var G__16637 = c__4556__auto__;
var G__16638 = cljs.core.count(c__4556__auto__);
var G__16639 = (0);
seq__16572 = G__16636;
chunk__16573 = G__16637;
count__16574 = G__16638;
i__16575 = G__16639;
continue;
} else {
var vec__16585 = cljs.core.first(seq__16572__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(1),null);
var temp__5733__auto___16640 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16640)){
var effect_fn_16641 = temp__5733__auto___16640;
(effect_fn_16641.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16641.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16641.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16642 = cljs.core.next(seq__16572__$1);
var G__16643 = null;
var G__16644 = (0);
var G__16645 = (0);
seq__16572 = G__16642;
chunk__16573 = G__16643;
count__16574 = G__16644;
i__16575 = G__16645;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__16276__auto___16646 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__16277__auto___16647 = (end__16276__auto___16646 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16277__auto___16647,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__16276__auto___16646);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16570);
}} else {
var seq__16588 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__16589 = null;
var count__16590 = (0);
var i__16591 = (0);
while(true){
if((i__16591 < count__16590)){
var vec__16598 = chunk__16589.cljs$core$IIndexed$_nth$arity$2(null,i__16591);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16598,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16598,(1),null);
var temp__5733__auto___16654 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16654)){
var effect_fn_16661 = temp__5733__auto___16654;
(effect_fn_16661.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16661.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16661.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16662 = seq__16588;
var G__16663 = chunk__16589;
var G__16664 = count__16590;
var G__16665 = (i__16591 + (1));
seq__16588 = G__16662;
chunk__16589 = G__16663;
count__16590 = G__16664;
i__16591 = G__16665;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16588);
if(temp__5735__auto__){
var seq__16588__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16588__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16588__$1);
var G__16666 = cljs.core.chunk_rest(seq__16588__$1);
var G__16667 = c__4556__auto__;
var G__16668 = cljs.core.count(c__4556__auto__);
var G__16669 = (0);
seq__16588 = G__16666;
chunk__16589 = G__16667;
count__16590 = G__16668;
i__16591 = G__16669;
continue;
} else {
var vec__16601 = cljs.core.first(seq__16588__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16601,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16601,(1),null);
var temp__5733__auto___16670 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___16670)){
var effect_fn_16673 = temp__5733__auto___16670;
(effect_fn_16673.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16673.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16673.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16674 = cljs.core.next(seq__16588__$1);
var G__16675 = null;
var G__16676 = (0);
var G__16677 = (0);
seq__16588 = G__16674;
chunk__16589 = G__16675;
count__16590 = G__16676;
i__16591 = G__16677;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__16604 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16605 = null;
var count__16606 = (0);
var i__16607 = (0);
while(true){
if((i__16607 < count__16606)){
var map__16615 = chunk__16605.cljs$core$IIndexed$_nth$arity$2(null,i__16607);
var map__16615__$1 = (((((!((map__16615 == null))))?(((((map__16615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16615):map__16615);
var effect = map__16615__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16615__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16615__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__16604,chunk__16605,count__16606,i__16607,map__16615,map__16615__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__16604,chunk__16605,count__16606,i__16607,map__16615,map__16615__$1,effect,ms,dispatch))
,ms);
}


var G__16681 = seq__16604;
var G__16682 = chunk__16605;
var G__16683 = count__16606;
var G__16684 = (i__16607 + (1));
seq__16604 = G__16681;
chunk__16605 = G__16682;
count__16606 = G__16683;
i__16607 = G__16684;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16604);
if(temp__5735__auto__){
var seq__16604__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16604__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16604__$1);
var G__16688 = cljs.core.chunk_rest(seq__16604__$1);
var G__16689 = c__4556__auto__;
var G__16690 = cljs.core.count(c__4556__auto__);
var G__16691 = (0);
seq__16604 = G__16688;
chunk__16605 = G__16689;
count__16606 = G__16690;
i__16607 = G__16691;
continue;
} else {
var map__16617 = cljs.core.first(seq__16604__$1);
var map__16617__$1 = (((((!((map__16617 == null))))?(((((map__16617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16617):map__16617);
var effect = map__16617__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16617__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16617__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__16604,chunk__16605,count__16606,i__16607,map__16617,map__16617__$1,effect,ms,dispatch,seq__16604__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__16604,chunk__16605,count__16606,i__16607,map__16617,map__16617__$1,effect,ms,dispatch,seq__16604__$1,temp__5735__auto__))
,ms);
}


var G__16692 = cljs.core.next(seq__16604__$1);
var G__16693 = null;
var G__16694 = (0);
var G__16695 = (0);
seq__16604 = G__16692;
chunk__16605 = G__16693;
count__16606 = G__16694;
i__16607 = G__16695;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16619 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16620 = null;
var count__16621 = (0);
var i__16622 = (0);
while(true){
if((i__16622 < count__16621)){
var event = chunk__16620.cljs$core$IIndexed$_nth$arity$2(null,i__16622);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__16696 = seq__16619;
var G__16697 = chunk__16620;
var G__16698 = count__16621;
var G__16699 = (i__16622 + (1));
seq__16619 = G__16696;
chunk__16620 = G__16697;
count__16621 = G__16698;
i__16622 = G__16699;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16619);
if(temp__5735__auto__){
var seq__16619__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16619__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16619__$1);
var G__16700 = cljs.core.chunk_rest(seq__16619__$1);
var G__16701 = c__4556__auto__;
var G__16702 = cljs.core.count(c__4556__auto__);
var G__16703 = (0);
seq__16619 = G__16700;
chunk__16620 = G__16701;
count__16621 = G__16702;
i__16622 = G__16703;
continue;
} else {
var event = cljs.core.first(seq__16619__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__16704 = cljs.core.next(seq__16619__$1);
var G__16705 = null;
var G__16706 = (0);
var G__16707 = (0);
seq__16619 = G__16704;
chunk__16620 = G__16705;
count__16621 = G__16706;
i__16622 = G__16707;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16626 = cljs.core.seq(value);
var chunk__16627 = null;
var count__16628 = (0);
var i__16629 = (0);
while(true){
if((i__16629 < count__16628)){
var event = chunk__16627.cljs$core$IIndexed$_nth$arity$2(null,i__16629);
clear_event(event);


var G__16708 = seq__16626;
var G__16709 = chunk__16627;
var G__16710 = count__16628;
var G__16711 = (i__16629 + (1));
seq__16626 = G__16708;
chunk__16627 = G__16709;
count__16628 = G__16710;
i__16629 = G__16711;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16626);
if(temp__5735__auto__){
var seq__16626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16626__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16626__$1);
var G__16712 = cljs.core.chunk_rest(seq__16626__$1);
var G__16713 = c__4556__auto__;
var G__16714 = cljs.core.count(c__4556__auto__);
var G__16715 = (0);
seq__16626 = G__16712;
chunk__16627 = G__16713;
count__16628 = G__16714;
i__16629 = G__16715;
continue;
} else {
var event = cljs.core.first(seq__16626__$1);
clear_event(event);


var G__16716 = cljs.core.next(seq__16626__$1);
var G__16717 = null;
var G__16718 = (0);
var G__16719 = (0);
seq__16626 = G__16716;
chunk__16627 = G__16717;
count__16628 = G__16718;
i__16629 = G__16719;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
