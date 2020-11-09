goog.provide('cinemart.about.view');
cinemart.about.view.about_page = (function cinemart$about$view$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cinemart.components.container.container,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This app is written in Clojurescript with reframe\n       and written by me & homies"], null),(function (){var iter__4529__auto__ = (function cinemart$about$view$about_page_$_iter__29171(s__29172){
return (new cljs.core.LazySeq(null,(function (){
var s__29172__$1 = s__29172;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29172__$1);
if(temp__5735__auto__){
var s__29172__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29172__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29172__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29174 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29173 = (0);
while(true){
if((i__29173 < size__4528__auto__)){
var noti = cljs.core._nth(c__4527__auto__,i__29173);
var css = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cinemart.notification.view.noti_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [noti,new cljs.core.Keyword(null,"css","css",1135045163)], null));
var icon = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cinemart.notification.view.noti_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [noti,new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
cljs.core.chunk_append(b__29174,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mt-3.py-2.px-3.rounded.mx-2.w-64.flex.text-white","a.mt-3.py-2.px-3.rounded.mx-2.w-64.flex.text-white",-1576484870),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),css,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29173,css,icon,noti,c__4527__auto__,size__4528__auto__,b__29174,s__29172__$2,temp__5735__auto__){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.notification.events","notify","cinemart.notification.events/notify",-147662311),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),["this is an ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(noti)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),noti], null)], null));
});})(i__29173,css,icon,noti,c__4527__auto__,size__4528__auto__,b__29174,s__29172__$2,temp__5735__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w-8","mr-5"], null)], null)], null),["this is an ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(noti)].join('')], null));

var G__29176 = (i__29173 + (1));
i__29173 = G__29176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29174),cinemart$about$view$about_page_$_iter__29171(cljs.core.chunk_rest(s__29172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29174),null);
}
} else {
var noti = cljs.core.first(s__29172__$2);
var css = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cinemart.notification.view.noti_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [noti,new cljs.core.Keyword(null,"css","css",1135045163)], null));
var icon = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cinemart.notification.view.noti_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [noti,new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mt-3.py-2.px-3.rounded.mx-2.w-64.flex.text-white","a.mt-3.py-2.px-3.rounded.mx-2.w-64.flex.text-white",-1576484870),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),css,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (css,icon,noti,s__29172__$2,temp__5735__auto__){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.notification.events","notify","cinemart.notification.events/notify",-147662311),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),["this is an ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(noti)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),noti], null)], null));
});})(css,icon,noti,s__29172__$2,temp__5735__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w-8","mr-5"], null)], null)], null),["this is an ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(noti)].join('')], null),cinemart$about$view$about_page_$_iter__29171(cljs.core.rest(s__29172__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(cinemart.notification.view.noti_type));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mt-3.py-2.px-3.bg-blue-300.rounded","button.mt-3.py-2.px-3.bg-blue-300.rounded",1018222010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cinemart.events","test-fetch","cinemart.events/test-fetch",413592878)], null));
})], null),"Fetch something"], null)], null)], null);
});

//# sourceMappingURL=cinemart.about.view.js.map
