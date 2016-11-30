
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        "with(obj){p.push('" +
          str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
    return data ? fn( data ) : fn;
  };
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0bXBsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4oZnVuY3Rpb24oKXtcclxuICB2YXIgY2FjaGUgPSB7fTtcclxuXHJcbiAgdGhpcy50bXBsID0gZnVuY3Rpb24gdG1wbChzdHIsIGRhdGEpe1xyXG4gICAgdmFyIGZuID0gIS9cXFcvLnRlc3Qoc3RyKSA/XHJcbiAgICAgIGNhY2hlW3N0cl0gPSBjYWNoZVtzdHJdIHx8XHJcbiAgICAgICAgdG1wbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHIpLmlubmVySFRNTCkgOlxyXG5cclxuICAgICAgbmV3IEZ1bmN0aW9uKFwib2JqXCIsXHJcbiAgICAgICAgXCJ2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTtcIiArXHJcbiAgICAgICAgXCJ3aXRoKG9iail7cC5wdXNoKCdcIiArXHJcbiAgICAgICAgICBzdHJcclxuICAgICAgICAgIC5yZXBsYWNlKC9bXFxyXFx0XFxuXS9nLCBcIiBcIilcclxuICAgICAgICAgIC5zcGxpdChcIjwlXCIpLmpvaW4oXCJcXHRcIilcclxuICAgICAgICAgIC5yZXBsYWNlKC8oKF58JT4pW15cXHRdKiknL2csIFwiJDFcXHJcIilcclxuICAgICAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCBcIicsJDEsJ1wiKVxyXG4gICAgICAgICAgLnNwbGl0KFwiXFx0XCIpLmpvaW4oXCInKTtcIilcclxuICAgICAgICAgIC5zcGxpdChcIiU+XCIpLmpvaW4oXCJwLnB1c2goJ1wiKVxyXG4gICAgICAgICAgLnNwbGl0KFwiXFxyXCIpLmpvaW4oXCJcXFxcJ1wiKVxyXG4gICAgICArIFwiJyk7fXJldHVybiBwLmpvaW4oJycpO1wiKTtcclxuICAgIHJldHVybiBkYXRhID8gZm4oIGRhdGEgKSA6IGZuO1xyXG4gIH07XHJcbn0pKCk7XHJcbiJdLCJmaWxlIjoidG1wbC5qcyJ9
