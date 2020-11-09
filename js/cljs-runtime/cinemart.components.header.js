goog.provide('cinemart.components.header');
cinemart.components.header.header = (function cinemart$components$header$header(p__29283){
var map__29284 = p__29283;
var map__29284__$1 = (((((!((map__29284 == null))))?(((((map__29284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29284):map__29284);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29284__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29284__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
var auth_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth?","auth?",-1680451378)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.bg-gray-800","header.bg-gray-800",821917930),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.xl:container.mx-auto.flex.py-2.px-3","nav.xl:container.mx-auto.flex.py-2.px-3",-560417229),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-auto.text-3xl.text-gray-400.font-bold.flex","a.mr-auto.text-3xl.text-gray-400.font-bold.flex",-1738860180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.components.icons.i_film,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w-8","mr-3"], null)], null)], null),"cinemart"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-auto","div.my-auto",-2123739474),(function (){var iter__4529__auto__ = (function cinemart$components$header$header_$_iter__29286(s__29287){
return (new cljs.core.LazySeq(null,(function (){
var s__29287__$1 = s__29287;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29287__$1);
if(temp__5735__auto__){
var s__29287__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29287__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29287__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29289 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29288 = (0);
while(true){
if((i__29288 < size__4528__auto__)){
var route_name = cljs.core._nth(c__4527__auto__,i__29288);
var route = reitit.core.match_by_name(routes,route_name);
var text = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
var auth_route = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"auth?","auth?",-1680451378)], null),new cljs.core.Keyword(null,"always","always",-1772028770));
var hidden = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null));
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auth_route,auth_QMARK_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auth_route,new cljs.core.Keyword(null,"always","always",-1772028770))))) && (cljs.core.not(hidden)))){
cljs.core.chunk_append(b__29289,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword("cinemart.router","signup","cinemart.router/signup",108890703)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-xl.rounded.border-solid.border-gray-500.text-gray-500.border-2.p-2","a.mr-2.text-xl.rounded.border-solid.border-gray-500.text-gray-500.border-2.p-2",-1242723588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),cinemart.router.href.cljs$core$IFn$_invoke$arity$1(route_name),new cljs.core.Keyword(null,"key","key",-1516042587),route_name,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-purple-500","border-purple-500"], null):null)], null),text], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-xl.text-gray-500","a.mr-2.text-xl.text-gray-500",-1452176490),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-purple-500"], null):null),new cljs.core.Keyword(null,"href","href",-793805698),cinemart.router.href.cljs$core$IFn$_invoke$arity$1(route_name),new cljs.core.Keyword(null,"key","key",-1516042587),route_name], null),text], null)
));

var G__29290 = (i__29288 + (1));
i__29288 = G__29290;
continue;
} else {
var G__29291 = (i__29288 + (1));
i__29288 = G__29291;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29289),cinemart$components$header$header_$_iter__29286(cljs.core.chunk_rest(s__29287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29289),null);
}
} else {
var route_name = cljs.core.first(s__29287__$2);
var route = reitit.core.match_by_name(routes,route_name);
var text = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
var auth_route = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"auth?","auth?",-1680451378)], null),new cljs.core.Keyword(null,"always","always",-1772028770));
var hidden = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null));
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auth_route,auth_QMARK_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auth_route,new cljs.core.Keyword(null,"always","always",-1772028770))))) && (cljs.core.not(hidden)))){
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword("cinemart.router","signup","cinemart.router/signup",108890703)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-xl.rounded.border-solid.border-gray-500.text-gray-500.border-2.p-2","a.mr-2.text-xl.rounded.border-solid.border-gray-500.text-gray-500.border-2.p-2",-1242723588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),cinemart.router.href.cljs$core$IFn$_invoke$arity$1(route_name),new cljs.core.Keyword(null,"key","key",-1516042587),route_name,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-purple-500","border-purple-500"], null):null)], null),text], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-xl.text-gray-500","a.mr-2.text-xl.text-gray-500",-1452176490),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-purple-500"], null):null),new cljs.core.Keyword(null,"href","href",-793805698),cinemart.router.href.cljs$core$IFn$_invoke$arity$1(route_name),new cljs.core.Keyword(null,"key","key",-1516042587),route_name], null),text], null)
),cinemart$components$header$header_$_iter__29286(cljs.core.rest(s__29287__$2)));
} else {
var G__29292 = cljs.core.rest(s__29287__$2);
s__29287__$1 = G__29292;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(reitit.core.route_names(routes));
})(),(cljs.core.truth_(auth_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-xl.rounded.border-solid.border-gray-500.text-gray-500.border-2.p-2","a.mr-2.text-xl.rounded.border-solid.border-gray-500.text-gray-500.border-2.p-2",-1242723588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-500",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.login.events","logout","cinemart.login.events/logout",-871155886)], null));
})], null),"Log out"], null):null)], null)], null)], null);
});

//# sourceMappingURL=cinemart.components.header.js.map
