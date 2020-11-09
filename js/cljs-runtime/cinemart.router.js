goog.provide('cinemart.router');
/**
 * Return relative url for given route, url can be html links
 */
cinemart.router.href = (function cinemart$router$href(var_args){
var G__29226 = arguments.length;
switch (G__29226) {
case 1:
return cinemart.router.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cinemart.router.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cinemart.router.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cinemart.router.href.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cinemart.router.href.cljs$core$IFn$_invoke$arity$3(k,null,null);
}));

(cinemart.router.href.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return cinemart.router.href.cljs$core$IFn$_invoke$arity$3(k,params,null);
}));

(cinemart.router.href.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));

(cinemart.router.href.cljs$lang$maxFixedArity = 3);

cinemart.router.routes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cinemart.router","home","cinemart.router/home",1039467815),new cljs.core.Keyword(null,"link-text","link-text",224432076),"home",new cljs.core.Keyword(null,"view","view",1247994814),cinemart.home.view.home_page,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__29228__delegate = function (params){
return console.log("Entering home page");
};
var G__29228 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29229__i = 0, G__29229__a = new Array(arguments.length -  0);
while (G__29229__i < G__29229__a.length) {G__29229__a[G__29229__i] = arguments[G__29229__i + 0]; ++G__29229__i;}
  params = new cljs.core.IndexedSeq(G__29229__a,0,null);
} 
return G__29228__delegate.call(this,params);};
G__29228.cljs$lang$maxFixedArity = 0;
G__29228.cljs$lang$applyTo = (function (arglist__29230){
var params = cljs.core.seq(arglist__29230);
return G__29228__delegate(params);
});
G__29228.cljs$core$IFn$_invoke$arity$variadic = G__29228__delegate;
return G__29228;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__29231__delegate = function (params){
return console.log("Leaving home page");
};
var G__29231 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29232__i = 0, G__29232__a = new Array(arguments.length -  0);
while (G__29232__i < G__29232__a.length) {G__29232__a[G__29232__i] = arguments[G__29232__i + 0]; ++G__29232__i;}
  params = new cljs.core.IndexedSeq(G__29232__a,0,null);
} 
return G__29231__delegate.call(this,params);};
G__29231.cljs$lang$maxFixedArity = 0;
G__29231.cljs$lang$applyTo = (function (arglist__29233){
var params = cljs.core.seq(arglist__29233);
return G__29231__delegate(params);
});
G__29231.cljs$core$IFn$_invoke$arity$variadic = G__29231__delegate;
return G__29231;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cinemart.router","about","cinemart.router/about",360958883),new cljs.core.Keyword(null,"link-text","link-text",224432076),"about",new cljs.core.Keyword(null,"view","view",1247994814),cinemart.about.view.about_page,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (params){
return console.log(params);
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (params){
return console.log("Leaving sub-page 1");
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie/:id",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cinemart.router","movie","cinemart.router/movie",1774584952),new cljs.core.Keyword(null,"link-text","link-text",224432076),"movie",new cljs.core.Keyword(null,"view","view",1247994814),cinemart.movie.view.movie,new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),new cljs.core.Keyword(null,"start","start",-355208981),(function (params){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","fetch-movie","cinemart.movie.events/fetch-movie",206579885),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(params))], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["login",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cinemart.router","login","cinemart.router/login",1174387147),new cljs.core.Keyword(null,"link-text","link-text",224432076),"log in",new cljs.core.Keyword(null,"view","view",1247994814),cinemart.login.view.login,new cljs.core.Keyword(null,"auth?","auth?",-1680451378),false,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identity","identity",1647396035),(function (match){
console.log(match);

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"auth?","auth?",-1680451378)], null));
}),new cljs.core.Keyword(null,"start","start",-355208981),(function (auth_QMARK_){
return console.log(auth_QMARK_);
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__29234__delegate = function (params){
return console.log("Leaving sub-page login");
};
var G__29234 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29235__i = 0, G__29235__a = new Array(arguments.length -  0);
while (G__29235__i < G__29235__a.length) {G__29235__a[G__29235__i] = arguments[G__29235__i + 0]; ++G__29235__i;}
  params = new cljs.core.IndexedSeq(G__29235__a,0,null);
} 
return G__29234__delegate.call(this,params);};
G__29234.cljs$lang$maxFixedArity = 0;
G__29234.cljs$lang$applyTo = (function (arglist__29236){
var params = cljs.core.seq(arglist__29236);
return G__29234__delegate(params);
});
G__29234.cljs$core$IFn$_invoke$arity$variadic = G__29234__delegate;
return G__29234;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["signup",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cinemart.router","signup","cinemart.router/signup",108890703),new cljs.core.Keyword(null,"link-text","link-text",224432076),"sign up",new cljs.core.Keyword(null,"view","view",1247994814),cinemart.signup.view.signup,new cljs.core.Keyword(null,"auth?","auth?",-1680451378),false,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["profile",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cinemart.router","profile","cinemart.router/profile",-1605914886),new cljs.core.Keyword(null,"link-text","link-text",224432076),"profile",new cljs.core.Keyword(null,"view","view",1247994814),cinemart.about.view.about_page,new cljs.core.Keyword(null,"auth?","auth?",-1680451378),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__29237__delegate = function (params){
return console.log("Entering sub-page 1");
};
var G__29237 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29238__i = 0, G__29238__a = new Array(arguments.length -  0);
while (G__29238__i < G__29238__a.length) {G__29238__a[G__29238__i] = arguments[G__29238__i + 0]; ++G__29238__i;}
  params = new cljs.core.IndexedSeq(G__29238__a,0,null);
} 
return G__29237__delegate.call(this,params);};
G__29237.cljs$lang$maxFixedArity = 0;
G__29237.cljs$lang$applyTo = (function (arglist__29239){
var params = cljs.core.seq(arglist__29239);
return G__29237__delegate(params);
});
G__29237.cljs$core$IFn$_invoke$arity$variadic = G__29237__delegate;
return G__29237;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__29240__delegate = function (params){
return console.log("Leaving sub-page 1");
};
var G__29240 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__29241__i = 0, G__29241__a = new Array(arguments.length -  0);
while (G__29241__i < G__29241__a.length) {G__29241__a[G__29241__i] = arguments[G__29241__i + 0]; ++G__29241__i;}
  params = new cljs.core.IndexedSeq(G__29241__a,0,null);
} 
return G__29240__delegate.call(this,params);};
G__29240.cljs$lang$maxFixedArity = 0;
G__29240.cljs$lang$applyTo = (function (arglist__29242){
var params = cljs.core.seq(arglist__29242);
return G__29240__delegate(params);
});
G__29240.cljs$core$IFn$_invoke$arity$variadic = G__29240__delegate;
return G__29240;
})()
], null)], null)], null)], null)], null);
cinemart.router.on_navigate = (function cinemart$router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","navigated","cinemart.events/navigated",1278101576),new_match], null));
} else {
return null;
}
});
cinemart.router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(cinemart.router.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
cinemart.router.init_routes_BANG_ = (function cinemart$router$init_routes_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init routes"], 0));

return reitit.frontend.easy.start_BANG_(cinemart.router.router,cinemart.router.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});

//# sourceMappingURL=cinemart.router.js.map
