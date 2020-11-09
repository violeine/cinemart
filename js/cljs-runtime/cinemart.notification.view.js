goog.provide('cinemart.notification.view');
var module$node_modules$react_transition_group$cjs$index=shadow.js.require("module$node_modules$react_transition_group$cjs$index", {});
cinemart.notification.view.noti_type = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-red-500"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),cinemart.components.icons.i_shield_exclaimation], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-yellow-500"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),cinemart.components.icons.i_exclaimation], null),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-green-500"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),cinemart.components.icons.i_check_circle], null),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-blue-500"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),cinemart.components.icons.i_info_circle], null)], null);
cinemart.notification.view.notification = (function cinemart$notification$view$notification(){
var notis = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.notification.subs","get-noti","cinemart.notification.subs/get-noti",-163358174)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_transition_group$cjs$index.TransitionGroup,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fixed","bottom-0","right-0","mb-32"], null)))], null),(function (){var iter__4529__auto__ = (function cinemart$notification$view$notification_$_iter__29155(s__29156){
return (new cljs.core.LazySeq(null,(function (){
var s__29156__$1 = s__29156;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29156__$1);
if(temp__5735__auto__){
var s__29156__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29156__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29156__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29158 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29157 = (0);
while(true){
if((i__29157 < size__4528__auto__)){
var map__29159 = cljs.core._nth(c__4527__auto__,i__29157);
var map__29159__$1 = (((((!((map__29159 == null))))?(((((map__29159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29159):map__29159);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29159__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29159__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29159__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29159__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__29161 = cinemart.notification.view.noti_type;
var map__29161__$1 = (((((!((map__29161 == null))))?(((((map__29161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29161):map__29161);
var map__29162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29161__$1,type);
var map__29162__$1 = (((((!((map__29162 == null))))?(((((map__29162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29162):map__29162);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29162__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29162__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__29158,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_transition_group$cjs$index.CSSTransition,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"classNames","classNames",263696622),"slide",new cljs.core.Keyword(null,"in","in",-1531184865),true,new cljs.core.Keyword(null,"appear","appear",440543877),true,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2.w-64.rounded.shadow-md.mr-5","div.mb-2.w-64.rounded.shadow-md.mr-5",1137908842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-white.px-3.py-2.min-w-full.flex.justify-between.rounded.shadow-md","p.text-white.px-3.py-2.min-w-full.flex.justify-between.rounded.shadow-md",1554892603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),css], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w-8","mr-5"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-5.flex-grow","span.mr-5.flex-grow",1394309411),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29157,map__29161,map__29161__$1,map__29162,map__29162__$1,css,icon,map__29159,map__29159__$1,uuid,text,class$,type,c__4527__auto__,size__4528__auto__,b__29158,s__29156__$2,temp__5735__auto__,notis){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.notification.events","kill-noti","cinemart.notification.events/kill-noti",607531915),uuid], null));
});})(i__29157,map__29161,map__29161__$1,map__29162,map__29162__$1,css,icon,map__29159,map__29159__$1,uuid,text,class$,type,c__4527__auto__,size__4528__auto__,b__29158,s__29156__$2,temp__5735__auto__,notis))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.components.icons.i_x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w-4"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uuid], null)));

var G__29171 = (i__29157 + (1));
i__29157 = G__29171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29158),cinemart$notification$view$notification_$_iter__29155(cljs.core.chunk_rest(s__29156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29158),null);
}
} else {
var map__29165 = cljs.core.first(s__29156__$2);
var map__29165__$1 = (((((!((map__29165 == null))))?(((((map__29165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29165):map__29165);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29165__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29165__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29165__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__29167 = cinemart.notification.view.noti_type;
var map__29167__$1 = (((((!((map__29167 == null))))?(((((map__29167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29167):map__29167);
var map__29168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29167__$1,type);
var map__29168__$1 = (((((!((map__29168 == null))))?(((((map__29168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29168):map__29168);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29168__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29168__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_transition_group$cjs$index.CSSTransition,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"classNames","classNames",263696622),"slide",new cljs.core.Keyword(null,"in","in",-1531184865),true,new cljs.core.Keyword(null,"appear","appear",440543877),true,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2.w-64.rounded.shadow-md.mr-5","div.mb-2.w-64.rounded.shadow-md.mr-5",1137908842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-white.px-3.py-2.min-w-full.flex.justify-between.rounded.shadow-md","p.text-white.px-3.py-2.min-w-full.flex.justify-between.rounded.shadow-md",1554892603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),css], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w-8","mr-5"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-5.flex-grow","span.mr-5.flex-grow",1394309411),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__29167,map__29167__$1,map__29168,map__29168__$1,css,icon,map__29165,map__29165__$1,uuid,text,class$,type,s__29156__$2,temp__5735__auto__,notis){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.notification.events","kill-noti","cinemart.notification.events/kill-noti",607531915),uuid], null));
});})(map__29167,map__29167__$1,map__29168,map__29168__$1,css,icon,map__29165,map__29165__$1,uuid,text,class$,type,s__29156__$2,temp__5735__auto__,notis))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.components.icons.i_x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w-4"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uuid], null)),cinemart$notification$view$notification_$_iter__29155(cljs.core.rest(s__29156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(notis);
})()], null);
});

//# sourceMappingURL=cinemart.notification.view.js.map
