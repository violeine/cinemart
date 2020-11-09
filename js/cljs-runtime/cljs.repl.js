goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24312){
var map__24313 = p__24312;
var map__24313__$1 = (((((!((map__24313 == null))))?(((((map__24313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24313):map__24313);
var m = map__24313__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24315_24433 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24316_24434 = null;
var count__24317_24435 = (0);
var i__24318_24436 = (0);
while(true){
if((i__24318_24436 < count__24317_24435)){
var f_24437 = chunk__24316_24434.cljs$core$IIndexed$_nth$arity$2(null,i__24318_24436);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24437], 0));


var G__24438 = seq__24315_24433;
var G__24439 = chunk__24316_24434;
var G__24440 = count__24317_24435;
var G__24441 = (i__24318_24436 + (1));
seq__24315_24433 = G__24438;
chunk__24316_24434 = G__24439;
count__24317_24435 = G__24440;
i__24318_24436 = G__24441;
continue;
} else {
var temp__5735__auto___24442 = cljs.core.seq(seq__24315_24433);
if(temp__5735__auto___24442){
var seq__24315_24443__$1 = temp__5735__auto___24442;
if(cljs.core.chunked_seq_QMARK_(seq__24315_24443__$1)){
var c__4556__auto___24444 = cljs.core.chunk_first(seq__24315_24443__$1);
var G__24445 = cljs.core.chunk_rest(seq__24315_24443__$1);
var G__24446 = c__4556__auto___24444;
var G__24447 = cljs.core.count(c__4556__auto___24444);
var G__24448 = (0);
seq__24315_24433 = G__24445;
chunk__24316_24434 = G__24446;
count__24317_24435 = G__24447;
i__24318_24436 = G__24448;
continue;
} else {
var f_24449 = cljs.core.first(seq__24315_24443__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24449], 0));


var G__24450 = cljs.core.next(seq__24315_24443__$1);
var G__24451 = null;
var G__24452 = (0);
var G__24453 = (0);
seq__24315_24433 = G__24450;
chunk__24316_24434 = G__24451;
count__24317_24435 = G__24452;
i__24318_24436 = G__24453;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24454 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24454], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_24454)))?cljs.core.second(arglists_24454):arglists_24454)], 0));
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
var seq__24323_24455 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24324_24456 = null;
var count__24325_24457 = (0);
var i__24326_24458 = (0);
while(true){
if((i__24326_24458 < count__24325_24457)){
var vec__24338_24459 = chunk__24324_24456.cljs$core$IIndexed$_nth$arity$2(null,i__24326_24458);
var name_24460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24338_24459,(0),null);
var map__24341_24461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24338_24459,(1),null);
var map__24341_24462__$1 = (((((!((map__24341_24461 == null))))?(((((map__24341_24461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24341_24461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24341_24461):map__24341_24461);
var doc_24463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24341_24462__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24341_24462__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24460], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24464], 0));

if(cljs.core.truth_(doc_24463)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24463], 0));
} else {
}


var G__24465 = seq__24323_24455;
var G__24466 = chunk__24324_24456;
var G__24467 = count__24325_24457;
var G__24468 = (i__24326_24458 + (1));
seq__24323_24455 = G__24465;
chunk__24324_24456 = G__24466;
count__24325_24457 = G__24467;
i__24326_24458 = G__24468;
continue;
} else {
var temp__5735__auto___24469 = cljs.core.seq(seq__24323_24455);
if(temp__5735__auto___24469){
var seq__24323_24470__$1 = temp__5735__auto___24469;
if(cljs.core.chunked_seq_QMARK_(seq__24323_24470__$1)){
var c__4556__auto___24471 = cljs.core.chunk_first(seq__24323_24470__$1);
var G__24472 = cljs.core.chunk_rest(seq__24323_24470__$1);
var G__24473 = c__4556__auto___24471;
var G__24474 = cljs.core.count(c__4556__auto___24471);
var G__24475 = (0);
seq__24323_24455 = G__24472;
chunk__24324_24456 = G__24473;
count__24325_24457 = G__24474;
i__24326_24458 = G__24475;
continue;
} else {
var vec__24343_24476 = cljs.core.first(seq__24323_24470__$1);
var name_24477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24343_24476,(0),null);
var map__24346_24478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24343_24476,(1),null);
var map__24346_24479__$1 = (((((!((map__24346_24478 == null))))?(((((map__24346_24478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24346_24478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24346_24478):map__24346_24478);
var doc_24480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24346_24479__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24346_24479__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24477], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24481], 0));

if(cljs.core.truth_(doc_24480)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24480], 0));
} else {
}


var G__24483 = cljs.core.next(seq__24323_24470__$1);
var G__24484 = null;
var G__24485 = (0);
var G__24486 = (0);
seq__24323_24455 = G__24483;
chunk__24324_24456 = G__24484;
count__24325_24457 = G__24485;
i__24326_24458 = G__24486;
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

var seq__24348 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24349 = null;
var count__24350 = (0);
var i__24351 = (0);
while(true){
if((i__24351 < count__24350)){
var role = chunk__24349.cljs$core$IIndexed$_nth$arity$2(null,i__24351);
var temp__5735__auto___24487__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24487__$1)){
var spec_24488 = temp__5735__auto___24487__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24488)], 0));
} else {
}


var G__24489 = seq__24348;
var G__24490 = chunk__24349;
var G__24491 = count__24350;
var G__24492 = (i__24351 + (1));
seq__24348 = G__24489;
chunk__24349 = G__24490;
count__24350 = G__24491;
i__24351 = G__24492;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__24348);
if(temp__5735__auto____$1){
var seq__24348__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24348__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__24348__$1);
var G__24493 = cljs.core.chunk_rest(seq__24348__$1);
var G__24494 = c__4556__auto__;
var G__24495 = cljs.core.count(c__4556__auto__);
var G__24496 = (0);
seq__24348 = G__24493;
chunk__24349 = G__24494;
count__24350 = G__24495;
i__24351 = G__24496;
continue;
} else {
var role = cljs.core.first(seq__24348__$1);
var temp__5735__auto___24497__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24497__$2)){
var spec_24498 = temp__5735__auto___24497__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24498)], 0));
} else {
}


var G__24499 = cljs.core.next(seq__24348__$1);
var G__24500 = null;
var G__24501 = (0);
var G__24502 = (0);
seq__24348 = G__24499;
chunk__24349 = G__24500;
count__24350 = G__24501;
i__24351 = G__24502;
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
var G__24503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24504 = cljs.core.ex_cause(t);
via = G__24503;
t = G__24504;
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
var map__24365 = datafied_throwable;
var map__24365__$1 = (((((!((map__24365 == null))))?(((((map__24365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24365):map__24365);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24365__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24365__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24365__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24366 = cljs.core.last(via);
var map__24366__$1 = (((((!((map__24366 == null))))?(((((map__24366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24366):map__24366);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24366__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24367 = data;
var map__24367__$1 = (((((!((map__24367 == null))))?(((((map__24367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24367):map__24367);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24367__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24367__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24367__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24368 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24368__$1 = (((((!((map__24368 == null))))?(((((map__24368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24368):map__24368);
var top_data = map__24368__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24373 = phase;
var G__24373__$1 = (((G__24373 instanceof cljs.core.Keyword))?G__24373.fqn:null);
switch (G__24373__$1) {
case "read-source":
var map__24374 = data;
var map__24374__$1 = (((((!((map__24374 == null))))?(((((map__24374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24374):map__24374);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24374__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24374__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24376 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24376__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24376,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24376);
var G__24376__$2 = (cljs.core.truth_((function (){var fexpr__24377 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24377.cljs$core$IFn$_invoke$arity$1 ? fexpr__24377.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24377.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24376__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24376__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24376__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24376__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24378 = top_data;
var G__24378__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24378);
var G__24378__$2 = (cljs.core.truth_((function (){var fexpr__24379 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24379.cljs$core$IFn$_invoke$arity$1 ? fexpr__24379.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24379.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24378__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24378__$1);
var G__24378__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24378__$2);
var G__24378__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24378__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24378__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24378__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24380 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(3),null);
var G__24383 = top_data;
var G__24383__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24383);
var G__24383__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24383__$1);
var G__24383__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24383__$2);
var G__24383__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24383__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24383__$4;
}

break;
case "execution":
var vec__24384 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24384,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24384,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24384,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24384,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24364_SHARP_){
var or__4126__auto__ = (p1__24364_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__24388 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24388.cljs$core$IFn$_invoke$arity$1 ? fexpr__24388.cljs$core$IFn$_invoke$arity$1(p1__24364_SHARP_) : fexpr__24388.call(null,p1__24364_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__24389 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24389__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24389,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24389);
var G__24389__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24389__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24389__$1);
var G__24389__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24389__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24389__$2);
var G__24389__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24389__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24389__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24389__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24389__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24373__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24392){
var map__24393 = p__24392;
var map__24393__$1 = (((((!((map__24393 == null))))?(((((map__24393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24393):map__24393);
var triage_data = map__24393__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24393__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24393__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24393__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24393__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24393__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24393__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24393__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__24395 = phase;
var G__24395__$1 = (((G__24395 instanceof cljs.core.Keyword))?G__24395.fqn:null);
switch (G__24395__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24396 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24397 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24398 = loc;
var G__24399 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24400_24507 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24401_24508 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24402_24509 = true;
var _STAR_print_fn_STAR__temp_val__24403_24510 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24402_24509);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24403_24510);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24390_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24390_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24401_24508);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24400_24507);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24396,G__24397,G__24398,G__24399) : format.call(null,G__24396,G__24397,G__24398,G__24399));

break;
case "macroexpansion":
var G__24405 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24406 = cause_type;
var G__24407 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24408 = loc;
var G__24409 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24405,G__24406,G__24407,G__24408,G__24409) : format.call(null,G__24405,G__24406,G__24407,G__24408,G__24409));

break;
case "compile-syntax-check":
var G__24410 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24411 = cause_type;
var G__24412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24413 = loc;
var G__24414 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24410,G__24411,G__24412,G__24413,G__24414) : format.call(null,G__24410,G__24411,G__24412,G__24413,G__24414));

break;
case "compilation":
var G__24415 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24416 = cause_type;
var G__24417 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24418 = loc;
var G__24419 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24415,G__24416,G__24417,G__24418,G__24419) : format.call(null,G__24415,G__24416,G__24417,G__24418,G__24419));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24420 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24421 = symbol;
var G__24422 = loc;
var G__24423 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24424_24511 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24425_24512 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24426_24513 = true;
var _STAR_print_fn_STAR__temp_val__24427_24514 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24426_24513);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24427_24514);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24391_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24391_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24425_24512);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24424_24511);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24420,G__24421,G__24422,G__24423) : format.call(null,G__24420,G__24421,G__24422,G__24423));
} else {
var G__24428 = "Execution error%s at %s(%s).\n%s\n";
var G__24429 = cause_type;
var G__24430 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24431 = loc;
var G__24432 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24428,G__24429,G__24430,G__24431,G__24432) : format.call(null,G__24428,G__24429,G__24430,G__24431,G__24432));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24395__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
