goog.provide('cinemart.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.events","init-db","cinemart.events/init-db",-1947627678),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__24991__auto__ = cinemart.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24991__auto__;
}catch (e27307){var e = e27307;
throw e;
}}):(function (_,___$1){
return cinemart.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.events","navigate","cinemart.events/navigate",37816177),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27309){
var vec__27310 = p__27309;
var seq__27311 = cljs.core.seq(vec__27310);
var first__27312 = cljs.core.first(seq__27311);
var seq__27311__$1 = cljs.core.next(seq__27311);
var _ = first__27312;
var route = seq__27311__$1;
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cinemart.effects","navigate!","cinemart.effects/navigate!",-1619616109),new cljs.core.Symbol(null,"route","route",1970422836,null)], null)));

var result__24991__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cinemart.effects","navigate!","cinemart.effects/navigate!",-1619616109),(function (){var result__24991__auto__ = route;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cinemart.effects","navigate!","cinemart.effects/navigate!",-1619616109),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24991__auto__;
}catch (e27313){var e = e27313;
throw e;
}}):(function (db,p__27325){
var vec__27331 = p__27325;
var seq__27332 = cljs.core.seq(vec__27331);
var first__27333 = cljs.core.first(seq__27332);
var seq__27332__$1 = cljs.core.next(seq__27332);
var _ = first__27333;
var route = seq__27332__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cinemart.effects","navigate!","cinemart.effects/navigate!",-1619616109),route], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.events","navigated","cinemart.events/navigated",1278101576),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27348){
var vec__27350 = p__27348;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27350,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27350,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-match","old-match",707907207,null),cljs.core.list(new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"controllers","controllers",520120903,null),cljs.core.list(new cljs.core.Symbol("rfc","apply-controllers","rfc/apply-controllers",-842196151,null),cljs.core.list(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"old-match","old-match",707907207,null)),new cljs.core.Symbol(null,"new-match","new-match",29574199,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"controllers","controllers",520120903,null))))));

var result__24991__auto__ = (function (){var old_match = (function (){var result__24991__auto__ = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1((function (){var result__24991__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})();
var controllers = (function (){var result__24991__auto__ = reitit.frontend.controllers.apply_controllers((function (){var result__24991__auto__ = new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1((function (){var result__24991__auto__ = old_match;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-match","old-match",707907207,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"old-match","old-match",707907207,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})(),(function (){var result__24991__auto__ = new_match;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rfc","apply-controllers","rfc/apply-controllers",-842196151,null),cljs.core.list(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"old-match","old-match",707907207,null)),new cljs.core.Symbol(null,"new-match","new-match",29574199,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})();
var result__24991__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24991__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"current-route","current-route",2067529448),(function (){var result__24991__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24991__auto__ = new_match;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),(function (){var result__24991__auto__ = controllers;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"controllers","controllers",520120903,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"controllers","controllers",520120903,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"controllers","controllers",520120903,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-match","old-match",707907207,null),cljs.core.list(new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"controllers","controllers",520120903,null),cljs.core.list(new cljs.core.Symbol("rfc","apply-controllers","rfc/apply-controllers",-842196151,null),cljs.core.list(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"old-match","old-match",707907207,null)),new cljs.core.Symbol(null,"new-match","new-match",29574199,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"controllers","controllers",520120903,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24991__auto__;
}catch (e27360){var e = e27360;
throw e;
}}):(function (db,p__27365){
var vec__27366 = p__27365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27366,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27366,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.events","test-fetch","cinemart.events/test-fetch",413592878),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/movie/76341",new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","good-http-result","cinemart.events/good-http-result",2003856308)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","bad-http-result","cinemart.events/bad-http-result",-2128593888)], null)], null)], null)));

var result__24991__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function (){var result__24991__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/movie/76341",new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var result__24991__auto__ = ajax.core.json_response_format((function (){var result__24991__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),(function (){var result__24991__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__24991__auto__ = cinemart.config.api_interceptor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){var result__24991__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","good-http-result","cinemart.events/good-http-result",2003856308)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","good-http-result","cinemart.events/good-http-result",2003856308)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var result__24991__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","bad-http-result","cinemart.events/bad-http-result",-2128593888)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","bad-http-result","cinemart.events/bad-http-result",-2128593888)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/movie/76341",new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","good-http-result","cinemart.events/good-http-result",2003856308)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","bad-http-result","cinemart.events/bad-http-result",-2128593888)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/movie/76341",new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","good-http-result","cinemart.events/good-http-result",2003856308)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","bad-http-result","cinemart.events/bad-http-result",-2128593888)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24991__auto__;
}catch (e27369){var e = e27369;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/movie/76341",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.config.api_interceptor], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","good-http-result","cinemart.events/good-http-result",2003856308)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","bad-http-result","cinemart.events/bad-http-result",-2128593888)], null)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.events","good-http-result","cinemart.events/good-http-result",2003856308),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27370){
var vec__27371 = p__27370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27371,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27371,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"http-result","http-result",-1011983391),new cljs.core.Symbol(null,"result","result",-1239343558,null))));

var result__24991__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24991__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"http-result","http-result",-1011983391),(function (){var result__24991__auto__ = result;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"http-result","http-result",-1011983391),new cljs.core.Symbol(null,"result","result",-1239343558,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24991__auto__;
}catch (e27374){var e = e27374;
throw e;
}}):(function (db,p__27375){
var vec__27376 = p__27375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"http-result","http-result",-1011983391),result);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.events","bad-http-result","cinemart.events/bad-http-result",-2128593888),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__27379){
var vec__27380 = p__27379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27380,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27380,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"http-failure","http-failure",-1564481518),new cljs.core.Symbol(null,"result","result",-1239343558,null))));

var result__24991__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24991__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"http-failure","http-failure",-1564481518),(function (){var result__24991__auto__ = result;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"http-failure","http-failure",-1564481518),new cljs.core.Symbol(null,"result","result",-1239343558,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24991__auto__;
}catch (e27383){var e = e27383;
throw e;
}}):(function (db,p__27384){
var vec__27385 = p__27384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27385,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27385,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"http-failure","http-failure",-1564481518),result);
})));

//# sourceMappingURL=cinemart.events.js.map
