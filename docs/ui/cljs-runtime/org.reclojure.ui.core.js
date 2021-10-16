goog.provide('org.reclojure.ui.core');
org.reclojure.ui.core.mount_BANG_ = (function org$reclojure$ui$core$mount_BANG_(){
return console.log("JS is loaded!");
});
org.reclojure.ui.core.start = (function org$reclojure$ui$core$start(){
return org.reclojure.ui.core.mount_BANG_();
});
org.reclojure.ui.core.init = (function org$reclojure$ui$core$init(){
lambdaisland.glogi.console.install_BANG_();

lambdaisland.glogi.set_levels(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("glogi","root","glogi/root",-77414841),new cljs.core.Keyword(null,"all","all",892129742)], null));

return org.reclojure.ui.core.start();
});

//# sourceMappingURL=org.reclojure.ui.core.js.map
