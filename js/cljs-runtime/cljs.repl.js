goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24272){
var map__24273 = p__24272;
var map__24273__$1 = (((((!((map__24273 == null))))?(((((map__24273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24273):map__24273);
var m = map__24273__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24273__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24289_24431 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24290_24432 = null;
var count__24291_24433 = (0);
var i__24292_24434 = (0);
while(true){
if((i__24292_24434 < count__24291_24433)){
var f_24435 = chunk__24290_24432.cljs$core$IIndexed$_nth$arity$2(null,i__24292_24434);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24435], 0));


var G__24436 = seq__24289_24431;
var G__24437 = chunk__24290_24432;
var G__24438 = count__24291_24433;
var G__24439 = (i__24292_24434 + (1));
seq__24289_24431 = G__24436;
chunk__24290_24432 = G__24437;
count__24291_24433 = G__24438;
i__24292_24434 = G__24439;
continue;
} else {
var temp__5735__auto___24440 = cljs.core.seq(seq__24289_24431);
if(temp__5735__auto___24440){
var seq__24289_24441__$1 = temp__5735__auto___24440;
if(cljs.core.chunked_seq_QMARK_(seq__24289_24441__$1)){
var c__4556__auto___24442 = cljs.core.chunk_first(seq__24289_24441__$1);
var G__24443 = cljs.core.chunk_rest(seq__24289_24441__$1);
var G__24444 = c__4556__auto___24442;
var G__24445 = cljs.core.count(c__4556__auto___24442);
var G__24446 = (0);
seq__24289_24431 = G__24443;
chunk__24290_24432 = G__24444;
count__24291_24433 = G__24445;
i__24292_24434 = G__24446;
continue;
} else {
var f_24447 = cljs.core.first(seq__24289_24441__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24447], 0));


var G__24449 = cljs.core.next(seq__24289_24441__$1);
var G__24450 = null;
var G__24451 = (0);
var G__24452 = (0);
seq__24289_24431 = G__24449;
chunk__24290_24432 = G__24450;
count__24291_24433 = G__24451;
i__24292_24434 = G__24452;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24453 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24453], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_24453)))?cljs.core.second(arglists_24453):arglists_24453)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24293_24454 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24294_24455 = null;
var count__24295_24456 = (0);
var i__24296_24457 = (0);
while(true){
if((i__24296_24457 < count__24295_24456)){
var vec__24329_24458 = chunk__24294_24455.cljs$core$IIndexed$_nth$arity$2(null,i__24296_24457);
var name_24459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24329_24458,(0),null);
var map__24332_24460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24329_24458,(1),null);
var map__24332_24461__$1 = (((((!((map__24332_24460 == null))))?(((((map__24332_24460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24332_24460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24332_24460):map__24332_24460);
var doc_24462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24332_24461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24332_24461__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24459], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24463], 0));

if(cljs.core.truth_(doc_24462)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24462], 0));
} else {
}


var G__24464 = seq__24293_24454;
var G__24465 = chunk__24294_24455;
var G__24466 = count__24295_24456;
var G__24467 = (i__24296_24457 + (1));
seq__24293_24454 = G__24464;
chunk__24294_24455 = G__24465;
count__24295_24456 = G__24466;
i__24296_24457 = G__24467;
continue;
} else {
var temp__5735__auto___24468 = cljs.core.seq(seq__24293_24454);
if(temp__5735__auto___24468){
var seq__24293_24469__$1 = temp__5735__auto___24468;
if(cljs.core.chunked_seq_QMARK_(seq__24293_24469__$1)){
var c__4556__auto___24470 = cljs.core.chunk_first(seq__24293_24469__$1);
var G__24471 = cljs.core.chunk_rest(seq__24293_24469__$1);
var G__24472 = c__4556__auto___24470;
var G__24473 = cljs.core.count(c__4556__auto___24470);
var G__24474 = (0);
seq__24293_24454 = G__24471;
chunk__24294_24455 = G__24472;
count__24295_24456 = G__24473;
i__24296_24457 = G__24474;
continue;
} else {
var vec__24336_24475 = cljs.core.first(seq__24293_24469__$1);
var name_24476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24336_24475,(0),null);
var map__24339_24477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24336_24475,(1),null);
var map__24339_24478__$1 = (((((!((map__24339_24477 == null))))?(((((map__24339_24477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24339_24477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24339_24477):map__24339_24477);
var doc_24479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24339_24478__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24339_24478__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24476], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24480], 0));

if(cljs.core.truth_(doc_24479)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24479], 0));
} else {
}


var G__24481 = cljs.core.next(seq__24293_24469__$1);
var G__24482 = null;
var G__24483 = (0);
var G__24484 = (0);
seq__24293_24454 = G__24481;
chunk__24294_24455 = G__24482;
count__24295_24456 = G__24483;
i__24296_24457 = G__24484;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__24341 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24342 = null;
var count__24343 = (0);
var i__24344 = (0);
while(true){
if((i__24344 < count__24343)){
var role = chunk__24342.cljs$core$IIndexed$_nth$arity$2(null,i__24344);
var temp__5735__auto___24485__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24485__$1)){
var spec_24486 = temp__5735__auto___24485__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24486)], 0));
} else {
}


var G__24487 = seq__24341;
var G__24488 = chunk__24342;
var G__24489 = count__24343;
var G__24490 = (i__24344 + (1));
seq__24341 = G__24487;
chunk__24342 = G__24488;
count__24343 = G__24489;
i__24344 = G__24490;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__24341);
if(temp__5735__auto____$1){
var seq__24341__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24341__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24341__$1);
var G__24491 = cljs.core.chunk_rest(seq__24341__$1);
var G__24492 = c__4556__auto__;
var G__24493 = cljs.core.count(c__4556__auto__);
var G__24494 = (0);
seq__24341 = G__24491;
chunk__24342 = G__24492;
count__24343 = G__24493;
i__24344 = G__24494;
continue;
} else {
var role = cljs.core.first(seq__24341__$1);
var temp__5735__auto___24495__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24495__$2)){
var spec_24496 = temp__5735__auto___24495__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24496)], 0));
} else {
}


var G__24497 = cljs.core.next(seq__24341__$1);
var G__24498 = null;
var G__24499 = (0);
var G__24500 = (0);
seq__24341 = G__24497;
chunk__24342 = G__24498;
count__24343 = G__24499;
i__24344 = G__24500;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24502 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24503 = cljs.core.ex_cause(t);
via = G__24502;
t = G__24503;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24352 = datafied_throwable;
var map__24352__$1 = (((((!((map__24352 == null))))?(((((map__24352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24352):map__24352);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24352__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24352__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24352__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24353 = cljs.core.last(via);
var map__24353__$1 = (((((!((map__24353 == null))))?(((((map__24353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24353):map__24353);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24354 = data;
var map__24354__$1 = (((((!((map__24354 == null))))?(((((map__24354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24354):map__24354);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24354__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24354__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24354__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24355 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24355__$1 = (((((!((map__24355 == null))))?(((((map__24355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24355):map__24355);
var top_data = map__24355__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24355__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24361 = phase;
var G__24361__$1 = (((G__24361 instanceof cljs.core.Keyword))?G__24361.fqn:null);
switch (G__24361__$1) {
case "read-source":
var map__24362 = data;
var map__24362__$1 = (((((!((map__24362 == null))))?(((((map__24362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24362):map__24362);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24362__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24362__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24364 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24364__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24364,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24364);
var G__24364__$2 = (cljs.core.truth_((function (){var fexpr__24365 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24365.cljs$core$IFn$_invoke$arity$1 ? fexpr__24365.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24365.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24364__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24364__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24364__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24366 = top_data;
var G__24366__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24366,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24366);
var G__24366__$2 = (cljs.core.truth_((function (){var fexpr__24367 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24367.cljs$core$IFn$_invoke$arity$1 ? fexpr__24367.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24367.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24366__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24366__$1);
var G__24366__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24366__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24366__$2);
var G__24366__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24366__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24366__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24366__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24366__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24368 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24368,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24368,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24368,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24368,(3),null);
var G__24371 = top_data;
var G__24371__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24371,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24371);
var G__24371__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24371__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24371__$1);
var G__24371__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24371__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24371__$2);
var G__24371__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24371__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24371__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24371__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24371__$4;
}

break;
case "execution":
var vec__24373 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24373,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24373,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24373,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24373,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24351_SHARP_){
var or__4126__auto__ = (p1__24351_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__24377 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24377.cljs$core$IFn$_invoke$arity$1 ? fexpr__24377.cljs$core$IFn$_invoke$arity$1(p1__24351_SHARP_) : fexpr__24377.call(null,p1__24351_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__24378 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24378__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24378);
var G__24378__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24378__$1);
var G__24378__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24378__$2);
var G__24378__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24378__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24378__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24361__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24381){
var map__24382 = p__24381;
var map__24382__$1 = (((((!((map__24382 == null))))?(((((map__24382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24382):map__24382);
var triage_data = map__24382__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24382__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24384 = phase;
var G__24384__$1 = (((G__24384 instanceof cljs.core.Keyword))?G__24384.fqn:null);
switch (G__24384__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24385 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24386 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24387 = loc;
var G__24388 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24389_24507 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24390_24508 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24391_24509 = true;
var _STAR_print_fn_STAR__temp_val__24392_24510 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24391_24509);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24392_24510);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24379_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24379_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24390_24508);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24389_24507);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24385,G__24386,G__24387,G__24388) : format.call(null,G__24385,G__24386,G__24387,G__24388));

break;
case "macroexpansion":
var G__24401 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24402 = cause_type;
var G__24403 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24404 = loc;
var G__24405 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24401,G__24402,G__24403,G__24404,G__24405) : format.call(null,G__24401,G__24402,G__24403,G__24404,G__24405));

break;
case "compile-syntax-check":
var G__24406 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24407 = cause_type;
var G__24408 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24409 = loc;
var G__24410 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24406,G__24407,G__24408,G__24409,G__24410) : format.call(null,G__24406,G__24407,G__24408,G__24409,G__24410));

break;
case "compilation":
var G__24411 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24412 = cause_type;
var G__24413 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24414 = loc;
var G__24415 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24411,G__24412,G__24413,G__24414,G__24415) : format.call(null,G__24411,G__24412,G__24413,G__24414,G__24415));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24416 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24417 = symbol;
var G__24418 = loc;
var G__24419 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24420_24511 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24421_24512 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24422_24513 = true;
var _STAR_print_fn_STAR__temp_val__24423_24514 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24422_24513);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24423_24514);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24380_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24380_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24421_24512);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24420_24511);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24416,G__24417,G__24418,G__24419) : format.call(null,G__24416,G__24417,G__24418,G__24419));
} else {
var G__24426 = "Execution error%s at %s(%s).\n%s\n";
var G__24427 = cause_type;
var G__24428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24429 = loc;
var G__24430 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24426,G__24427,G__24428,G__24429,G__24430) : format.call(null,G__24426,G__24427,G__24428,G__24429,G__24430));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24384__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
