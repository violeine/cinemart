goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__21879 = arguments.length;
switch (G__21879) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__21881 = cljs.core.seq(Object.keys(localStorage));
var chunk__21882 = null;
var count__21883 = (0);
var i__21884 = (0);
while(true){
if((i__21884 < count__21883)){
var k = chunk__21882.cljs$core$IIndexed$_nth$arity$2(null,i__21884);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__21886 = seq__21881;
var G__21887 = chunk__21882;
var G__21888 = count__21883;
var G__21889 = (i__21884 + (1));
seq__21881 = G__21886;
chunk__21882 = G__21887;
count__21883 = G__21888;
i__21884 = G__21889;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21881);
if(temp__5735__auto__){
var seq__21881__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21881__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21881__$1);
var G__21890 = cljs.core.chunk_rest(seq__21881__$1);
var G__21891 = c__4556__auto__;
var G__21892 = cljs.core.count(c__4556__auto__);
var G__21893 = (0);
seq__21881 = G__21890;
chunk__21882 = G__21891;
count__21883 = G__21892;
i__21884 = G__21893;
continue;
} else {
var k = cljs.core.first(seq__21881__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__21894 = cljs.core.next(seq__21881__$1);
var G__21895 = null;
var G__21896 = (0);
var G__21897 = (0);
seq__21881 = G__21894;
chunk__21882 = G__21895;
count__21883 = G__21896;
i__21884 = G__21897;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
