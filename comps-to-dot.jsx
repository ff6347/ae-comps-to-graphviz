﻿// export ae comp flow to .dot file for usage with graphviz// remove duplicatesArray.prototype.unique = function() {  var r = new Array();  o: for (var i = 0, n = this.length; i < n; i++) {    for (var x = 0, y = r.length; x < y; x++) {      if (r[x] == this[i]) continue o;    }    r[r.length] = this[i];  }  return r;}var arr = [];// recursive walk through comps// still a bit buggy// produces duplicates :-(function getComps(comp) {  if (comp.layers !== null) {    for (var i = 1; i <= comp.numLayers; i++) {      var l = comp.layer(i);      // this sorts out only comps woohoo!\o/      if ((l.source.layers !== null)&& (l.source !== null) && (l.source instanceof CompItem)) {        arr.push("\"" + comp.name + "\" -> \"" + l.name + "\";");        getComps(l.source);      }    }  } else {    return;  }};var main = function() {  var curComp = app.project.activeItem;  if (!curComp || !(curComp instanceof CompItem)) {    alert("noComp");    return;  };  getComps(curComp);  var u_arr = arr.unique();  $.writeln("digraph {\n" + arr.join("\n") + "\n}");};main();