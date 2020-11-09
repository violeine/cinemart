goog.provide('cinemart.movie.view');
cinemart.movie.view.movie = (function cinemart$movie$view$movie(){
var map__29178 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.subs","movie","cinemart.movie.subs/movie",318552960)], null)));
var map__29178__$1 = (((((!((map__29178 == null))))?(((((map__29178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29178):map__29178);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword(null,"title","title",636505583));
var overview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword(null,"overview","overview",-435037267));
var homepage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword(null,"homepage","homepage",-1646828249));
var genres = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword(null,"genres","genres",-834112023));
var release_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword(null,"release-date","release-date",1550766598));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.components.container.container,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),overview], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),homepage], null),"homepage"], null)], null)], null);
});

//# sourceMappingURL=cinemart.movie.view.js.map
