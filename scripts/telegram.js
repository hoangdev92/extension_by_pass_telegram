
(function() {

/*
 * arrive.js
 * v2.5.2
 * https://github.com/uzairfarooq/arrive
 * MIT licensed
 *
 * Copyright (c) 2014-2024 Uzair Farooq
 */

var Arrive=function(e,t,n){"use strict";if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var r,i,o=0,l=(r=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,{matchesSelector:function(e,t){return e instanceof HTMLElement&&r.call(e,t)},addMethod:function(e,t,n){var r=e[t];e[t]=function(){return n.length==arguments.length?n.apply(this,arguments):"function"==typeof r?r.apply(this,arguments):void 0}},callCallbacks:function(e,t,n){if(e.length){t&&t.options.onceOnly&&(e=[e[0]],t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback));for(var r,i=0;r=e[i];i++)r&&r.callback&&r.callback.call(r.elem,r.elem);t&&t.callback&&n&&n.addTimeoutHandler(t.target,t.selector,t.callback,t.options,t.data)}},checkChildNodesRecursively:function(e,t,n,r){for(var i,o=0;i=e[o];o++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&l.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return void 0!==t&&("number"!=typeof t.length||t===e)&&(t=[t]),t}}),a=((i=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null}).prototype.addEvent=function(e,t,n,r,i){var o={target:e,selector:t,options:n,callback:r,data:i,firedElems:[]};return this._beforeAdding&&this._beforeAdding(o),this._eventsBucket.push(o),o},i.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t),t.data&&t.data.timeoutId&&clearTimeout(t.data.timeoutId);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},i.prototype.beforeAdding=function(e){this._beforeAdding=e},i.prototype.beforeRemoving=function(e){this._beforeRemoving=e},i),c=function(t,r){var i=new a,o=this,c={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,l=n.target;(l===e.document||l===e)&&(l=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n)});var a=t(n.options);i.observe(l,a),n.observer=i,n.me=o}),i.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=l.mergeArrays(c,t);for(var r=l.toElementsArray(this),a=0;a<r.length;a++){let u={};o.addTimeoutHandler(r[a],e,n,t,u),i.addEvent(r[a],e,t,n,u)}},this.unbindEvent=function(){var e=l.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(e){var t,r=l.toElementsArray(this),o=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===o)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=l.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1})},this.addTimeoutHandler=function(e,t,n,r,i){r.timeout&&!(r.timeout<=0)&&(i.timeoutId&&clearTimeout(i.timeoutId),i.timeoutId=setTimeout(()=>{o.unbindEventWithSelectorAndCallback.call(e,t,n),n.call(null,null)},r.timeout))},this},u=function(){var e={onceOnly:!1,timeout:0};function t(e,t){return l.matchesSelector(e,t.selector)}var r=(d=new c(function e(){return{childList:!0,subtree:!0}},function e(n,r){n.forEach(function(e){var n=e.removedNodes,i=[];null!==n&&n.length>0&&l.checkChildNodesRecursively(n,r,t,i),l.callCallbacks(i,r,d)})})).bindEvent;return d.bindEvent=function(t,i,o){var a="object"==typeof i?l.mergeArrays(e,i):{...e},c="function"==typeof o?o:"function"==typeof i?i:n;if(c)r.call(this,t,a,c);else{a.onceOnly=!0;var u=this;return new Promise(e=>r.call(u,t,a,e))}},d},s=new function(){var e={fireOnAttributesModification:!1,onceOnly:!1,existing:!1,timeout:0};function t(e,t,r){return!!l.matchesSelector(e,t.selector)&&(n===e._id&&(e._id=o++),-1==t.firedElems.indexOf(e._id))&&(t.firedElems.push(e._id),!0)}var r=(s=new c(function e(t){var n={attributes:!1,childList:!0,subtree:!0};return t.fireOnAttributesModification&&(n.attributes=!0),n},function e(n,r){n.forEach(function(e){var n=e.addedNodes,i=e.target,o=[];null!==n&&n.length>0?l.checkChildNodesRecursively(n,r,t,o):"attributes"===e.type&&t(i,r,o)&&o.push({callback:r.callback,elem:i}),l.callCallbacks(o,r,s)})})).bindEvent;return s.bindEvent=function(t,i,o){var a="object"==typeof i?l.mergeArrays(e,i):{...e},c="function"==typeof o?o:"function"==typeof i?i:n,u=l.toElementsArray(this);if(c||(a.onceOnly=!0),a.existing){for(var s=[],d=0;d<u.length;d++)for(var f=u[d].querySelectorAll(t),h=0;h<f.length;h++)s.push({callback:c,elem:f[h]});if(a.onceOnly&&s.length)return c?c.call(s[0].elem,s[0].elem):Promise.resolve(s[0].elem);setTimeout(l.callCallbacks,1,s)}if(c)r.call(this,t,a,c);else{var v=this;return new Promise(e=>r.call(v,t,a,e))}},s},d=new u;t&&v(t.fn),v(HTMLElement.prototype),v(NodeList.prototype),v(HTMLCollection.prototype),v(HTMLDocument.prototype),v(Window.prototype);var f={};return h(s,f,"unbindAllArrive"),h(d,f,"unbindAllLeave"),f}function h(e,t,n){l.addMethod(t,n,e.unbindEvent),l.addMethod(t,n,e.unbindEventWithSelectorOrCallback),l.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function v(e){e.arrive=s.bindEvent,h(s,e,"unbindArrive"),e.leave=d.bindEvent,h(d,e,"unbindLeave")}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);

  document.arrive("iframe", function(newElem) {
    modifyIframe();
  });

  // Hàm để thay đổi src của iframe và thiết lập user agent
  function modifyIframe() {
    // Tìm tất cả các thẻ iframe
    document.querySelectorAll('iframe').forEach(iframe => {
      let src = iframe.getAttribute('src');

      // Kiểm tra nếu src của iframe chứa 'tgWebAppPlatform=web'
      if (src) {
        if (src.includes('tgWebAppPlatform=web')) {
          // Thay thế 'tgWebAppPlatform=web' thành 'tgWebAppPlatform=android' hoặc 'tgWebAppPlatform=ios'
          src = replaceWebAppPlatform(src);
          iframe.setAttribute('src', src);
        }

        changeTitleTemporarily();
      }
    });
  }

  function replaceWebAppPlatform(src) {
    src = src.replace('tgWebAppPlatform=weba', 'tgWebAppPlatform=ios');
    src = src.replace('tgWebAppPlatform=webk', 'tgWebAppPlatform=ios');
    src = src.replace('tgWebAppPlatform=webz', 'tgWebAppPlatform=ios');
    src = src.replace('tgWebAppPlatform=web', 'tgWebAppPlatform=ios');
    return src;
  }

  // Chạy lần đầu để thay đổi các iframe tồn tại
  modifyIframe();

  // Hàm để tạm thời thay đổi title
  function changeTitleTemporarily() {
      let originalTitle = document.title;
      document.title = "Telegram đã được bypass";
      setTimeout(() => {
          document.title = originalTitle;
      }, 10000);
  }

  // Gọi hàm để thay đổi title tạm thời
  changeTitleTemporarily();

})();
