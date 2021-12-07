/**
 * skylark-domx-animates - The skylark animates library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-styler","skylark-domx-eventer","./animates"],function(a,n,e,s){return s.animate=function(t,i,r){if(a.isString(i)){let a=i;return s.animateBaseClass&&(a=s.animateBaseClass+" "+a),n.addClass(t,a),e.one(t,s.animationEnd,function(){n.removeClass(t,a)}),this}return t.animate(i,r)}});
//# sourceMappingURL=sourcemaps/animate.js.map
