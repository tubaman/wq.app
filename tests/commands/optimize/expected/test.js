define("test1",{test:1}),define("test2",[],function(){return"two"}),define("test",["test1","test2"],function(t,e){console.log(t),console.log(e)});