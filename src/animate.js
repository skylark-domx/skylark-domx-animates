define([
    "skylark-langx/langx",
    "skylark-domx-styler",
    "skylark-domx-eventer",
    "./animates"
], function(langx, styler, eventer,animates) {


    function animate(elm,keyframes/*className*/,options) {
        if (langx.isString(keyframes)) {
            let className = keyframes;
            if (animates.animateBaseClass) {
              className = animates.animateBaseClass + " " + className;
            }
            styler.addClass(elm,className);
            eventer.one(elm,animates.animationEnd, function() {
                styler.removeClass(elm,className);
            });
            return this;
        } else {
            return elm.animate(keyframes,options);
        }

    }
    
    return animates.animate = animate;
 