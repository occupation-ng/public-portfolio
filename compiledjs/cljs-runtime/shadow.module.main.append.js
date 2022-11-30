
shadow.cljs.devtools.client.env.module_loaded('main');

try { piflow.main._main(); } catch (e) { console.error("An error occurred when calling (piflow.main/-main)"); throw(e); }