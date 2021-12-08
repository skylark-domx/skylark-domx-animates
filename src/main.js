define([
	"./animates",
 	"skylark-domx-velm",
	"skylark-domx-query",
   "./animation",
    "./animate"
],function(animates,velm,$){
    // from ./aanimates
    velm.delegate([
        "animate"
    ], animates);

    $.fn.animate =  $.wraps.wrapper_every_act(animates.animate, animates);

	return animates;
});