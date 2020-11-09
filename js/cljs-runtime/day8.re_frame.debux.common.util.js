goog.provide('day8.re_frame.debux.common.util');
day8.re_frame.debux.common.util.map__GT_seq = (function day8$re_frame$debux$common$util$map__GT_seq(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__24515){
var vec__24516 = p__24515;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24516,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}),cljs.core.PersistentVector.EMPTY,m);
});
day8.re_frame.debux.common.util.sequential_zip = (function day8$re_frame$debux$common$util$sequential_zip(root){
return clojure.zip.zipper((function (p1__24519_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__24519_SHARP_)) || (cljs.core.map_QMARK_(p1__24519_SHARP_)));
}),(function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.with_meta(day8.re_frame.debux.common.util.map__GT_seq(x),cljs.core.meta(x));
} else {
return x;

}
}),(function (x,children){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(x));
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.with_meta(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__24528){
var vec__24529 = p__24528;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24529,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24529,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),children)),cljs.core.meta(x));
} else {
return children;

}
}
}),root);
});
day8.re_frame.debux.common.util.right_or_next = (function day8$re_frame$debux$common$util$right_or_next(loc){
while(true){
var temp__5733__auto__ = clojure.zip.right(loc);
if(cljs.core.truth_(temp__5733__auto__)){
var right = temp__5733__auto__;
return right;
} else {
if(cljs.core.sequential_QMARK_(clojure.zip.node(loc))){
var rightmost = clojure.zip.rightmost(clojure.zip.down(loc));
if(cljs.core.sequential_QMARK_(clojure.zip.node(rightmost))){
var G__24581 = rightmost;
loc = G__24581;
continue;
} else {
return clojure.zip.next(rightmost);
}
} else {
return clojure.zip.next(loc);
}
}
break;
}
});
day8.re_frame.debux.common.util.auto_gensym_pattern = /(.*)__\d+__auto__/;
day8.re_frame.debux.common.util.anon_gensym_pattern = /G__\d+/;
day8.re_frame.debux.common.util.named_gensym_pattern = /(.*?)\d{2,}/;
day8.re_frame.debux.common.util.anon_param_pattern = /p(\d+)__\d+#/;
day8.re_frame.debux.common.util.form_tree_seq = (function day8$re_frame$debux$common$util$form_tree_seq(form){
return cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,form);
});
/**
 * Reverse gensym'd names to their original source form to make them easier to read.
 */
day8.re_frame.debux.common.util.with_gensyms_names = (function day8$re_frame$debux$common$util$with_gensyms_names(form,mapping){
var gen_name = (function (result,name){
if((!(cljs.core.contains_QMARK_(result,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join(''))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join('');
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24534_SHARP_){
return (!(cljs.core.contains_QMARK_(result,p1__24534_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24532_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24532_SHARP_),"#"].join('');
}),cljs.core.iterate(cljs.core.inc,(2)))));
}
});
var name_for = (function (result,sym_name){
var temp__5733__auto__ = cljs.core.re_matches(day8.re_frame.debux.common.util.auto_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__5733__auto__)){
var groups = temp__5733__auto__;
return gen_name(result,cljs.core.second(groups));
} else {
if(cljs.core.truth_(cljs.core.re_matches(day8.re_frame.debux.common.util.anon_gensym_pattern,sym_name))){
return gen_name(result,"gensym");
} else {
var temp__5733__auto____$1 = cljs.core.re_matches(day8.re_frame.debux.common.util.named_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var groups = temp__5733__auto____$1;
return gen_name(result,cljs.core.second(groups));
} else {
var temp__5733__auto____$2 = cljs.core.re_matches(day8.re_frame.debux.common.util.anon_param_pattern,sym_name);
if(cljs.core.truth_(temp__5733__auto____$2)){
var groups = temp__5733__auto____$2;
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(groups))].join('');
} else {
return null;
}
}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,sym_name){
if(cljs.core.contains_QMARK_(result,sym_name)){
return result;
} else {
var temp__5733__auto__ = name_for(result,sym_name);
if(cljs.core.truth_(temp__5733__auto__)){
var new_name = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,sym_name,new_name);
} else {
return result;
}
}
}),mapping,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24535_SHARP_){
return (((p1__24535_SHARP_ instanceof cljs.core.Symbol)) && ((cljs.core.namespace(p1__24535_SHARP_) == null)));
}),day8.re_frame.debux.common.util.form_tree_seq(form))));
});
/**
 * Tidy up fully qualified names that have aliases in the existing namespace.
 */
day8.re_frame.debux.common.util.with_symbols_names = (function day8$re_frame$debux$common$util$with_symbols_names(form,p__24539,mapping){
var map__24540 = p__24539;
var map__24540__$1 = (((((!((map__24540 == null))))?(((((map__24540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24540):map__24540);
var state = map__24540__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24540__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var refers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24540__$1,new cljs.core.Keyword(null,"refers","refers",158076809));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24540__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,sym){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.namespace(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)),cljs.core.name(sym));
} else {
return result;
}
}),mapping,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24538_SHARP_){
if((p1__24538_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.namespace(p1__24538_SHARP_);
} else {
return false;
}
}),day8.re_frame.debux.common.util.form_tree_seq(form)));
});
/**
 * Takes a macroexpanded form and tidies it up to be more readable by
 *   unmapping gensyms and replacing fully qualified namespaces with aliases
 *   or nothing if the function is referred.
 */
day8.re_frame.debux.common.util.tidy_macroexpanded_form = (function day8$re_frame$debux$common$util$tidy_macroexpanded_form(form,state){
var mapping = day8.re_frame.debux.common.util.with_symbols_names(form,state,day8.re_frame.debux.common.util.with_gensyms_names(form,cljs.core.PersistentArrayMap.EMPTY));
var loc = day8.re_frame.debux.common.util.sequential_zip(form);
while(true){
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.root(loc);
} else {
if((clojure.zip.node(loc) instanceof cljs.core.Symbol)){
var G__24582 = clojure.zip.next(clojure.zip.edit(loc,((function (loc,mapping){
return (function (sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(mapping,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)),sym));
});})(loc,mapping))
));
loc = G__24582;
continue;
} else {
var G__24583 = clojure.zip.next(loc);
loc = G__24583;
continue;
}
}
break;
}
});
day8.re_frame.debux.common.util.send_form_BANG_ = (function day8$re_frame$debux$common$util$send_form_BANG_(form){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21055__auto___24584 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__21055__auto___24584);

return null;
} else {
return null;
}
});
day8.re_frame.debux.common.util.send_trace_BANG_ = (function day8$re_frame$debux$common$util$send_trace_BANG_(code_trace){
var code = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core.PersistentVector.EMPTY);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21055__auto___24585 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form","form",-1624062471),day8.re_frame.debux.common.util.tidy_macroexpanded_form(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431).cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form","form",-1624062471),day8.re_frame.debux.common.util.tidy_macroexpanded_form(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431).cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__21055__auto___24585);

return null;
} else {
return null;
}
});
day8.re_frame.debux.common.util.indent_level_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
day8.re_frame.debux.common.util.reset_indent_level_BANG_ = (function day8$re_frame$debux$common$util$reset_indent_level_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame.debux.common.util.indent_level_STAR_,(1));
});
day8.re_frame.debux.common.util.print_seq_length_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((100));
day8.re_frame.debux.common.util.set_print_seq_length_BANG_ = (function day8$re_frame$debux$common$util$set_print_seq_length_BANG_(num){
return cljs.core.reset_BANG_(day8.re_frame.debux.common.util.print_seq_length_STAR_,num);
});
day8.re_frame.debux.common.util.cljs_env_QMARK_ = (function day8$re_frame$debux$common$util$cljs_env_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Transsub-forms a vector into an array-map with key/value pairs.
 *   (def a 10)
 *   (def b 20)
 *   (vec-map [a b :c [30 40]])
 *   => {:a 10 :b 20 ::c :c :[30 40] [30 40]}
 */
day8.re_frame.debux.common.util.vec__GT_map = (function day8$re_frame$debux$common$util$vec__GT_map(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (elm){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(elm)),null,(1),null)),(new cljs.core.List(null,elm,null,(1),null))))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
});
day8.re_frame.debux.common.util.replace__AMPERSAND_ = (function day8$re_frame$debux$common$util$replace__AMPERSAND_(v){
return clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"&","&",-2144855648,null))], null),v);
});
day8.re_frame.debux.common.util.take_n_if_seq = (function day8$re_frame$debux$common$util$take_n_if_seq(n,result){
if(cljs.core.seq_QMARK_(result)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = n;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(day8.re_frame.debux.common.util.print_seq_length_STAR_);
}
})(),result);
} else {
return result;
}
});
day8.re_frame.debux.common.util.truncate = (function day8$re_frame$debux$common$util$truncate(s){
if((cljs.core.count(s) > (70))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.substring((0),(70)))," ..."].join('');
} else {
return s;
}
});
day8.re_frame.debux.common.util.make_bars_ = (function day8$re_frame$debux$common$util$make_bars_(times){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(times,"|"));
});
day8.re_frame.debux.common.util.make_bars = cljs.core.memoize(day8.re_frame.debux.common.util.make_bars_);
day8.re_frame.debux.common.util.prepend_bars = (function day8$re_frame$debux$common$util$prepend_bars(line,indent_level){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.debux.common.util.make_bars(indent_level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
day8.re_frame.debux.common.util.print_form_with_indent = (function day8$re_frame$debux$common$util$print_form_with_indent(form,indent_level){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.debux.common.util.prepend_bars(form,indent_level)], 0));

return cljs.core.flush();
});
day8.re_frame.debux.common.util.form_header = (function day8$re_frame$debux$common$util$form_header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24586 = arguments.length;
var i__4737__auto___24587 = (0);
while(true){
if((i__4737__auto___24587 < len__4736__auto___24586)){
args__4742__auto__.push((arguments[i__4737__auto___24587]));

var G__24588 = (i__4737__auto___24587 + (1));
i__4737__auto___24587 = G__24588;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame.debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame.debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__24554){
var vec__24555 = p__24554;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24555,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.debux.common.util.truncate(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__4115__auto__ = msg;
if(cljs.core.truth_(and__4115__auto__)){
return ["   <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),">"].join('');
} else {
return and__4115__auto__;
}
})())," =>"].join('');
}));

(day8.re_frame.debux.common.util.form_header.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame.debux.common.util.form_header.cljs$lang$applyTo = (function (seq24552){
var G__24553 = cljs.core.first(seq24552);
var seq24552__$1 = cljs.core.next(seq24552);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24553,seq24552__$1);
}));

day8.re_frame.debux.common.util.prepend_blanks = (function day8$re_frame$debux$common$util$prepend_blanks(lines){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24558_SHARP_){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24558_SHARP_)].join('');
}),lines);
});
day8.re_frame.debux.common.util.pprint_result_with_indent = (function day8$re_frame$debux$common$util$pprint_result_with_indent(result,indent_level){
var res = result;
var result__$1 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24560_24589 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24561_24590 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24562_24591 = true;
var _STAR_print_fn_STAR__temp_val__24563_24592 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24562_24591);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24563_24592);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(res);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24561_24590);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24560_24589);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
var pprint = clojure.string.trim(result__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24559_SHARP_){
return day8.re_frame.debux.common.util.prepend_bars(p1__24559_SHARP_,indent_level);
}),day8.re_frame.debux.common.util.prepend_blanks(clojure.string.split.cljs$core$IFn$_invoke$arity$2(pprint,/\n/))))], 0));

return cljs.core.flush();
});
day8.re_frame.debux.common.util.insert_blank_line = (function day8$re_frame$debux$common$util$insert_blank_line(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));

return cljs.core.flush();
});
day8.re_frame.debux.common.util.parse_opts = (function day8$re_frame$debux$common$util$parse_opts(opts){
var opts__$1 = opts;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var f = cljs.core.first(opts__$1);
var s = cljs.core.second(opts__$1);
if(cljs.core.empty_QMARK_(opts__$1)){
return acc;
} else {
if(typeof f === 'number'){
var G__24593 = cljs.core.next(opts__$1);
var G__24594 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"n","n",562130025),f);
opts__$1 = G__24593;
acc = G__24594;
continue;
} else {
if(typeof f === 'string'){
var G__24595 = cljs.core.next(opts__$1);
var G__24596 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"msg","msg",-1386103444),f);
opts__$1 = G__24595;
acc = G__24596;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"if","if",-458814265))){
var G__24597 = cljs.core.nnext(opts__$1);
var G__24598 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"condition","condition",1668437652),s);
opts__$1 = G__24597;
acc = G__24598;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"js","js",1768080579))){
var G__24599 = cljs.core.next(opts__$1);
var G__24600 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"js","js",1768080579),true);
opts__$1 = G__24599;
acc = G__24600;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__24566 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"once","once",-262568523),null], null), null);
return (fexpr__24566.cljs$core$IFn$_invoke$arity$1 ? fexpr__24566.cljs$core$IFn$_invoke$arity$1(f) : fexpr__24566.call(null,f));
})())){
var G__24601 = cljs.core.next(opts__$1);
var G__24602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"once","once",-262568523),true);
opts__$1 = G__24601;
acc = G__24602;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__24567 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null), null);
return (fexpr__24567.cljs$core$IFn$_invoke$arity$1 ? fexpr__24567.cljs$core$IFn$_invoke$arity$1(f) : fexpr__24567.call(null,f));
})())){
var G__24603 = cljs.core.nnext(opts__$1);
var G__24604 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"style","style",-496642736),s);
opts__$1 = G__24603;
acc = G__24604;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"clog","clog",954273629))){
var G__24605 = cljs.core.next(opts__$1);
var G__24606 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"clog","clog",954273629),true);
opts__$1 = G__24605;
acc = G__24606;
continue;
} else {
return null;
}
}
}
}
}
}
}
}
break;
}
});
day8.re_frame.debux.common.util.quote_val = (function day8$re_frame$debux$common$util$quote_val(p__24568){
var vec__24569 = p__24568;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24569,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))))));
});
day8.re_frame.debux.common.util.quote_vals = (function day8$re_frame$debux$common$util$quote_vals(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.debux.common.util.quote_val,m));
});
day8.re_frame.debux.common.util.include_recur_QMARK_ = (function day8$re_frame$debux$common$util$include_recur_QMARK_(form){
var G__24573 = new cljs.core.Symbol(null,"recur","recur",1202958259,null);
var fexpr__24572 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.flatten)(form);
return (fexpr__24572.cljs$core$IFn$_invoke$arity$1 ? fexpr__24572.cljs$core$IFn$_invoke$arity$1(G__24573) : fexpr__24572.call(null,G__24573));
});
day8.re_frame.debux.common.util.o_skip_QMARK_ = (function day8$re_frame$debux$common$util$o_skip_QMARK_(sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("debux.common.macro-specs","o-skip","debux.common.macro-specs/o-skip",-1957530336,null),sym);
});
day8.re_frame.debux.common.util.spy_first = (function day8$re_frame$debux$common$util$spy_first(result,quoted_form,indent){
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),(function (){var G__24575 = quoted_form;
var G__24576 = new cljs.core.Symbol(null,"dummy","dummy",-594669915,null);
return (day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__24575,G__24576) : day8.re_frame.debux.common.util.remove_d.call(null,G__24575,G__24576));
})(),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
});
day8.re_frame.debux.common.util.spy_last = (function day8$re_frame$debux$common$util$spy_last(quoted_form,indent,result){
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),(function (){var G__24577 = quoted_form;
var G__24578 = new cljs.core.Symbol(null,"dummy","dummy",-594669915,null);
return (day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__24577,G__24578) : day8.re_frame.debux.common.util.remove_d.call(null,G__24577,G__24578));
})(),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
});
day8.re_frame.debux.common.util.spy_comp = (function day8$re_frame$debux$common$util$spy_comp(quoted_form,indent,form){
return (function() { 
var G__24607__delegate = function (arg){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(form,arg);
if(cljs.core.integer_QMARK_(indent)){
} else {
throw (new Error(["Assert failed: ",["indent was not correctly replaced for form ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quoted_form], 0)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join(''),"\n","(integer? indent)"].join('')));
}

day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),(function (){var G__24579 = quoted_form;
var G__24580 = new cljs.core.Symbol(null,"dummy","dummy",-594669915,null);
return (day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.debux.common.util.remove_d.cljs$core$IFn$_invoke$arity$2(G__24579,G__24580) : day8.re_frame.debux.common.util.remove_d.call(null,G__24579,G__24580));
})(),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
};
var G__24607 = function (var_args){
var arg = null;
if (arguments.length > 0) {
var G__24608__i = 0, G__24608__a = new Array(arguments.length -  0);
while (G__24608__i < G__24608__a.length) {G__24608__a[G__24608__i] = arguments[G__24608__i + 0]; ++G__24608__i;}
  arg = new cljs.core.IndexedSeq(G__24608__a,0,null);
} 
return G__24607__delegate.call(this,arg);};
G__24607.cljs$lang$maxFixedArity = 0;
G__24607.cljs$lang$applyTo = (function (arglist__24609){
var arg = cljs.core.seq(arglist__24609);
return G__24607__delegate(arg);
});
G__24607.cljs$core$IFn$_invoke$arity$variadic = G__24607__delegate;
return G__24607;
})()
;
});
day8.re_frame.debux.common.util.debux_skip_symbol_QMARK_ = (function day8$re_frame$debux$common$util$debux_skip_symbol_QMARK_(sym){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("day8.re-frame.debux.common.macro-specs","skip","day8.re-frame.debux.common.macro-specs/skip",155781441,null),null,new cljs.core.Symbol("day8.re-frame.debux.common.macro-specs","o-skip","day8.re-frame.debux.common.macro-specs/o-skip",1764322383,null),null,new cljs.core.Symbol("day8.re-frame.debux.common.macro-specs","skip-outer","day8.re-frame.debux.common.macro-specs/skip-outer",1719173285,null),null,new cljs.core.Keyword("day8.re-frame.debux.common.macro-specs","skip-place","day8.re-frame.debux.common.macro-specs/skip-place",-1613962318),null], null), null),sym);
});
day8.re_frame.debux.common.util.spy_first_QMARK_ = (function day8$re_frame$debux$common$util$spy_first_QMARK_(sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("day8.re-frame.debux.common.util","spy-first","day8.re-frame.debux.common.util/spy-first",-45028370,null),sym);
});
day8.re_frame.debux.common.util.remove_d = (function day8$re_frame$debux$common$util$remove_d(form,d_sym){
var loc = day8.re_frame.debux.common.util.sequential_zip(form);
while(true){
var node = clojure.zip.node(loc);
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.root(loc);
} else {
if(((cljs.core.seq_QMARK_(node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d_sym,cljs.core.first(node))) || (day8.re_frame.debux.common.util.debux_skip_symbol_QMARK_(cljs.core.first(node))) || (day8.re_frame.debux.common.util.spy_first_QMARK_(cljs.core.first(node))))))){
var G__24610 = clojure.zip.replace(loc,cljs.core.last(node));
loc = G__24610;
continue;
} else {
if(((cljs.core.seq_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("day8.re-frame.debux.common.util","spy-last","day8.re-frame.debux.common.util/spy-last",-1681078777,null),cljs.core.first(node))))){
var G__24611 = clojure.zip.replace(loc,cljs.core.last(node));
loc = G__24611;
continue;
} else {
var G__24612 = clojure.zip.next(loc);
loc = G__24612;
continue;

}
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame.debux.common.util.js.map
