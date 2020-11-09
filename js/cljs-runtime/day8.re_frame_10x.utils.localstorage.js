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
var G__22252 = arguments.length;
switch (G__22252) {
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
var seq__22262 = cljs.core.seq(Object.keys(localStorage));
var chunk__22263 = null;
var count__22264 = (0);
var i__22265 = (0);
while(true){
if((i__22265 < count__22264)){
var k = chunk__22263.cljs$core$IIndexed$_nth$arity$2(null,i__22265);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__22267 = seq__22262;
var G__22268 = chunk__22263;
var G__22269 = count__22264;
var G__22270 = (i__22265 + (1));
seq__22262 = G__22267;
chunk__22263 = G__22268;
count__22264 = G__22269;
i__22265 = G__22270;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__22262);
if(temp__5735__auto__){
var seq__22262__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22262__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22262__$1);
var G__22271 = cljs.core.chunk_rest(seq__22262__$1);
var G__22272 = c__4556__auto__;
var G__22273 = cljs.core.count(c__4556__auto__);
var G__22274 = (0);
seq__22262 = G__22271;
chunk__22263 = G__22272;
count__22264 = G__22273;
i__22265 = G__22274;
continue;
} else {
var k = cljs.core.first(seq__22262__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__22275 = cljs.core.next(seq__22262__$1);
var G__22276 = null;
var G__22277 = (0);
var G__22278 = (0);
seq__22262 = G__22275;
chunk__22263 = G__22276;
count__22264 = G__22277;
i__22265 = G__22278;
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
