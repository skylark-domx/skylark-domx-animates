/**
 * skylark-domx-animates - The skylark animates library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(n,a){var i=a.define,require=a.require,e="function"==typeof i&&i.amd,t=!e&&"undefined"!=typeof exports;if(!e&&!i){var r={};i=a.define=function(n,a,i){"function"==typeof i?(r[n]={factory:i,deps:a.map(function(a){return function(n,a){if("."!==n[0])return n;var i=a.split("/"),e=n.split("/");i.pop();for(var t=0;t<e.length;t++)"."!=e[t]&&(".."==e[t]?i.pop():i.push(e[t]));return i.join("/")}(a,n)}),resolved:!1,exports:null},require(n)):r[n]={factory:null,resolved:!0,exports:i}},require=a.require=function(n){if(!r.hasOwnProperty(n))throw new Error("Module "+n+" has not been defined");var module=r[n];if(!module.resolved){var i=[];module.deps.forEach(function(n){i.push(require(n))}),module.exports=module.factory.apply(a,i)||null,module.resolved=!0}return module.exports}}if(!i)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(n,require){n("skylark-domx-animates/animates",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser"],function(n,a,i){function e(){return e}return a.mixin(e,{off:!1,speeds:{normal:400,fast:200,slow:600},animationName:i.normalizeCssProperty("animation-name"),animationDuration:i.normalizeCssProperty("animation-duration"),animationDelay:i.normalizeCssProperty("animation-delay"),animationTiming:i.normalizeCssProperty("animation-timing-function"),animationEnd:i.normalizeCssEvent("AnimationEnd"),animateBaseClass:"animated"}),n.attach("domx.animates",e)}),n("skylark-domx-animates/animation",["skylark-langx/langx","skylark-domx-browser","skylark-domx-noder","skylark-domx-geom","skylark-domx-styler","skylark-domx-eventer","./animates"],function(n,a,i,e,t,r,o){var s=o.animationName,m=o.animationDuration,l=o.animationTiming,u=o.animationDelay,d=o.animationEnd,k={};return k[s]=k[m]=k[u]=k[l]="",o.animation=function(a,i,e,u,k,f){var y={};n.isPlainObject(e)&&(u=e.easing,k=e.complete,f=e.delay,e=e.duration);n.isString(e)&&(e=o.speeds[e]);void 0===e&&(e=o.speeds.normal);e/=1e3,n.isFunction(u)?(k=u,eace="swing"):u=u||"swing";f?f/=1e3:f=0;y[s]=i,y[m]=e+"s",y[l]=u,e>0&&r.on(a,d,k);return a.clientLeft,t.css(a,y),this}}),n("skylark-domx-animates/animate",["skylark-langx/langx","skylark-domx-styler","skylark-domx-eventer","./animates"],function(n,a,i,e){return e.animate=function(t,r,o){if(n.isString(r)){let n=r;return e.animateBaseClass&&(n=e.animateBaseClass+" "+n),a.addClass(t,n),i.one(t,e.animationEnd,function(){a.removeClass(t,n)}),this}return t.animate(r,o)}}),n("skylark-domx-animates/main",["./animates","./animation","./animate"],function(n){return n}),n("skylark-domx-animates",["skylark-domx-animates/main"],function(n){return n})}(i),!e){var o=require("skylark-langx-ns");t?module.exports=o:a.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-animates.js.map