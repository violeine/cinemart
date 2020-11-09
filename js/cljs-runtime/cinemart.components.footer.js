goog.provide('cinemart.components.footer');
cinemart.components.footer.footer = (function cinemart$components$footer$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.bg-gray-300.py-8.px-2","footer.bg-gray-300.py-8.px-2",-1595859997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.xl:container.mx-auto","div.xl:container.mx-auto",129055881),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xl","p.text-xl",-9059021),"Powered by",(function (){var iter__4529__auto__ = (function cinemart$components$footer$footer_$_iter__29274(s__29275){
return (new cljs.core.LazySeq(null,(function (){
var s__29275__$1 = s__29275;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29275__$1);
if(temp__5735__auto__){
var s__29275__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29275__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29275__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29277 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29276 = (0);
while(true){
if((i__29276 < size__4528__auto__)){
var map__29278 = cljs.core._nth(c__4527__auto__,i__29276);
var map__29278__$1 = (((((!((map__29278 == null))))?(((((map__29278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29278):map__29278);
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29278__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29278__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29278__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append(b__29277,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.w-32.h-16.ml-4.inline","img.w-32.h-16.ml-4.inline",1484473328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),alt], null)));

var G__29282 = (i__29276 + (1));
i__29276 = G__29282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29277),cinemart$components$footer$footer_$_iter__29274(cljs.core.chunk_rest(s__29275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29277),null);
}
} else {
var map__29280 = cljs.core.first(s__29275__$2);
var map__29280__$1 = (((((!((map__29280 == null))))?(((((map__29280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29280):map__29280);
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29280__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29280__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29280__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.w-32.h-16.ml-4.inline","img.w-32.h-16.ml-4.inline",1484473328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),alt], null)),cinemart$components$footer$footer_$_iter__29274(cljs.core.rest(s__29275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cinemart.config.powered_by);
})()], null)], null)], null);
});

//# sourceMappingURL=cinemart.components.footer.js.map
