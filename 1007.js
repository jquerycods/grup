﻿SpilGames({waiton:"spilgames.loaded"},"SWPUtils SWP SWPEvent DOMSelect DOMEvent Placeholder".split(" "),function(f,b,q,l,c,k){b.init("popup_login");l.get("#popup-login-username")&&(k.init("popup-login-username"),k.init("popup-login-password"));var m=!1,g=0,r=document.createElement("div"),a=function(a){return document.getElementById(a)||r},h=function(e,b){var d=a("popup-login-error-generic"),c=a("popup-login-error-banned");e?"banned"==b?f.addClass(c,"visible"):f.addClass(d,"visible"):(f.removeClass(d,
"visible"),f.removeClass(c,"visible"))},d=function(e,t){g!==e&&2!==g&&(l.get("#popup-login-close")?(g=e,h(!1),a("popup-login-username").value="",a("popup-login-password").value="",a("popup-login-remember").checked=!0,1===e?(b.System.emit("gi.game.hide"),b.System.emit("popup.header.open"),f.removeClass(a("wdg_popup_login"),"hidden"),u(),/Trident/g.test(window.navigator.userAgent)||(document.getElementById("popup-login-username_ph")?c.trigger("#popup-login-username_ph","keydown"):a("popup-login-username").focus())):
(t||(b.System.emit("gi.game.show"),b.System.emit("popup.header.close")),b.System.emit("popup.closed",{type:"login"}),f.addClass(a("wdg_popup_login"),"hidden"))):(g=2,b.Widget.refresh({show_popup_contents:!0},{callback:function(){setTimeout(function(){k.init("popup-login-username");k.init("popup-login-password");g=0;d(1)},0)}})))},u=function(){!0!==m&&(m=!0,c.add(a("popup-login-form"),"submit",function(a){c.preventDefault(a);v()}),c.add(a("popup-login-close"),"click",function(){d(0)}),c.add(a("popup-login-facebook"),
"click",function(){n("facebook")}),c.add(a("popup-login-google"),"click",function(){n("google")}),c.add(a("popup-login-register"),"click",function(){d(0);b.System.emit("popup.register.open",{})}))},p=function(e){a("popup-login-button").enabled=e;f[e?"removeClass":"addClass"](a("popup-login-button"),"processing")},v=function(){if("undefined"===typeof a("popup-login-button").enabled||a("popup-login-button").enabled)h(!1),""===a("popup-login-password").value||""===a("popup-login-username").value?h(!0):
(b.System.emit("auth.login.request",{rememberMe:a("popup-login-remember").checked,username:a("popup-login-username").value,password:a("popup-login-password").value,callback:function(a){a.isError&&(a.scope&&a.scope.data&&"banned"==a.scope.data.string?h(!0,"banned"):h(!0),p(!0))}}),p(!1))},n=function(e){var c=a("popup-login-remember").checked;b.System.emit("auth.login.remember",{rememberMe:c});d(0);b.System.emit("popup.oauth.open",{provider:e})};"onload"===b.getProperty("requires_auth")&&q.listen("onDisplayGame",
function(){d(1)});b.System.init(function(a){switch(a.name){case "popup.login.open":0===g?d(1):d(0);break;case "popup.register.open":d(0,!0)}},!0)});