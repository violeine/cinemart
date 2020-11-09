goog.provide('cinemart.movie.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.movie.events","fetch-movie","cinemart.movie.events/fetch-movie",206579885),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__29079){
var vec__29080 = p__29079;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/movie/",new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","success","cinemart.movie.events/success",-1279521596)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","failure","cinemart.movie.events/failure",-451472951)], null)], null)], null)));

var result__24991__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function (){var result__24991__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),(function (){var result__24991__auto__ = ["/movie/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var result__24991__auto__ = id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})())].join('');
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/movie/",new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var result__24991__auto__ = ajax.core.json_response_format((function (){var result__24991__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),(function (){var result__24991__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__24991__auto__ = cinemart.config.api_interceptor;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__24991__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){var result__24991__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","success","cinemart.movie.events/success",-1279521596)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","success","cinemart.movie.events/success",-1279521596)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var result__24991__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","failure","cinemart.movie.events/failure",-451472951)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(22),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","failure","cinemart.movie.events/failure",-451472951)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__24991__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/movie/",new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","success","cinemart.movie.events/success",-1279521596)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","failure","cinemart.movie.events/failure",-451472951)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/movie/",new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.list(new cljs.core.Symbol("ajax","json-response-format","ajax/json-response-format",689960115,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-interceptor","api-interceptor",-1239579453,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","success","cinemart.movie.events/success",-1279521596)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","failure","cinemart.movie.events/failure",-451472951)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24991__auto__;
}catch (e29083){var e = e29083;
throw e;
}}):(function (_,p__29086){
var vec__29087 = p__29086;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29087,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29087,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["/movie/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.config.api_interceptor], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","success","cinemart.movie.events/success",-1279521596)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.movie.events","failure","cinemart.movie.events/failure",-451472951)], null)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.movie.events","success","cinemart.movie.events/success",-1279521596),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__29090){
var vec__29091 = p__29090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"movie","movie",-1492569716),new cljs.core.Symbol(null,"result","result",-1239343558,null))));

var result__24991__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__24991__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})(),new cljs.core.Keyword(null,"movie","movie",-1492569716),(function (){var result__24991__auto__ = result;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__24991__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__24991__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"movie","movie",-1492569716),new cljs.core.Symbol(null,"result","result",-1239343558,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24991__auto__;
}catch (e29094){var e = e29094;
throw e;
}}):(function (db,p__29095){
var vec__29096 = p__29095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29096,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29096,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"movie","movie",-1492569716),result);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cinemart.movie.events","failure","cinemart.movie.events/failure",-451472951),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__29099){
var vec__29100 = p__29099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29100,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29100,(1),null);
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
}catch (e29103){var e = e29103;
throw e;
}}):(function (db,p__29105){
var vec__29106 = p__29105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"http-failure","http-failure",-1564481518),result);
})));

//# sourceMappingURL=cinemart.movie.events.js.map
