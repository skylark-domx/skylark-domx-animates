/**
 * skylark-domx-animates - The skylark animates library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./animates","skylark-domx-velm","skylark-domx-query","./animation","./animate"],function(a,e,n){return e.delegate(["animate"],a),n.fn.animate=n.wraps.wrapper_every_act(a.animate,a),a});
//# sourceMappingURL=sourcemaps/main.js.map
