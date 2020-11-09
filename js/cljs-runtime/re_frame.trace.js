goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21073){
var map__21074 = p__21073;
var map__21074__$1 = (((((!((map__21074 == null))))?(((((map__21074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21074):map__21074);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__21076_21113 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__21077_21114 = null;
var count__21078_21115 = (0);
var i__21079_21116 = (0);
while(true){
if((i__21079_21116 < count__21078_21115)){
var vec__21090_21117 = chunk__21077_21114.cljs$core$IIndexed$_nth$arity$2(null,i__21079_21116);
var k_21118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21090_21117,(0),null);
var cb_21119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21090_21117,(1),null);
try{var G__21094_21120 = cljs.core.deref(re_frame.trace.traces);
(cb_21119.cljs$core$IFn$_invoke$arity$1 ? cb_21119.cljs$core$IFn$_invoke$arity$1(G__21094_21120) : cb_21119.call(null,G__21094_21120));
}catch (e21093){var e_21121 = e21093;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21118,"while storing",cljs.core.deref(re_frame.trace.traces),e_21121], 0));
}

var G__21122 = seq__21076_21113;
var G__21123 = chunk__21077_21114;
var G__21124 = count__21078_21115;
var G__21125 = (i__21079_21116 + (1));
seq__21076_21113 = G__21122;
chunk__21077_21114 = G__21123;
count__21078_21115 = G__21124;
i__21079_21116 = G__21125;
continue;
} else {
var temp__5735__auto___21126 = cljs.core.seq(seq__21076_21113);
if(temp__5735__auto___21126){
var seq__21076_21127__$1 = temp__5735__auto___21126;
if(cljs.core.chunked_seq_QMARK_(seq__21076_21127__$1)){
var c__4556__auto___21128 = cljs.core.chunk_first(seq__21076_21127__$1);
var G__21129 = cljs.core.chunk_rest(seq__21076_21127__$1);
var G__21130 = c__4556__auto___21128;
var G__21131 = cljs.core.count(c__4556__auto___21128);
var G__21132 = (0);
seq__21076_21113 = G__21129;
chunk__21077_21114 = G__21130;
count__21078_21115 = G__21131;
i__21079_21116 = G__21132;
continue;
} else {
var vec__21095_21133 = cljs.core.first(seq__21076_21127__$1);
var k_21134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21095_21133,(0),null);
var cb_21135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21095_21133,(1),null);
try{var G__21099_21136 = cljs.core.deref(re_frame.trace.traces);
(cb_21135.cljs$core$IFn$_invoke$arity$1 ? cb_21135.cljs$core$IFn$_invoke$arity$1(G__21099_21136) : cb_21135.call(null,G__21099_21136));
}catch (e21098){var e_21137 = e21098;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21134,"while storing",cljs.core.deref(re_frame.trace.traces),e_21137], 0));
}

var G__21138 = cljs.core.next(seq__21076_21127__$1);
var G__21139 = null;
var G__21140 = (0);
var G__21141 = (0);
seq__21076_21113 = G__21138;
chunk__21077_21114 = G__21139;
count__21078_21115 = G__21140;
i__21079_21116 = G__21141;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
