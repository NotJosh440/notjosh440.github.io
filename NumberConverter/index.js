function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function convert() {
    var xelem = document.getElementById("x");
    var yelem = document.getElementById("y");
    var y2elem = document.getElementById("y2");
    var y3elem = document.getElementById("y3");

    var bin = document.calcform.x.value;
    try {
        var x = new BigNumber(bin, 2);
        xelem.style.backgroundColor = "white";
    }
    catch (err) {
        xelem.style.backgroundColor = "#fff0f0";
        return;
    }
    var xx = x.toString(10);
    yelem.value = xx;
    y3elem.value = x.toString(16).toUpperCase();
    var t1 = new BigNumber("8000000000000000", 16);
    var t2 = new BigNumber("10000000000000000", 16);
    if (x.isInt() && x.gte(0)) {
        if (bin.length == 8 && x.gte("80", 16)) x = x.minus("100", 16);
        if (bin.length == 16 && x.gte("8000", 16)) x = x.minus("10000", 16);
        if (bin.length == 32 && x.gte("80000000", 16)) x = x.minus("100000000", 16);
        if (bin.length == 64 && x.gte(t1)) { x = x.minus(t2); }
        if (bin.length == 8 || bin.length == 16 || bin.length == 32 || bin.length == 64)
            y2elem.value = x.toString(10);
        else
            y2elem.value = "N/A";
    }
    else
        y2elem.value = "N/A";
    var yd = yelem.value.match(/\d/g);
    var y2d = y2elem.value.match(/\d/g);
    var y3d = y3elem.value.match(/[\da-fA-F]/g);
    var ylabel = "Decimal number";
    var y2label = "Decimal from signed 2's complement";
    var y3label = "Hex number";
    if (yd != null) ylabel += " (" + yd.length + ((yd.length == 1) ? " digit)" : " digits)");
    if (y2d != null) y2label += " (" + y2d.length + ((y2d.length == 1) ? " digit)" : " digits)");
    if (y3d != null && y3elem.value != "N/A") y3label += " (" + y3d.length + ((y3d.length == 1) ? " digit)" : " digits)");
    document.getElementById("ylabel").innerHTML = ylabel;
    document.getElementById("y2label").innerHTML = y2label;
    document.getElementById("y3label").innerHTML = y3label;
    var txt = "(" + bin + ")\u2082 = ";
    var d, e, minus = false;
    var len = bin.length;
    if (bin[0] == "-") { txt += "-["; bin = bin.substr(1); len--; minus = true; }
    var idot = bin.indexOf(".");
    if (idot >= 0) { bin = bin.substring(0, idot) + bin.substring(idot + 1, len); len--; }
    else idot = len;
    etbl = ["\u2070", "\u00B9", "\u00B2", "\u00B3", "\u2074", "\u2075", "\u2076", "\u2077", "\u2078", "\u2079"];
    for (var i = 0; i < len; i++) {
        d = bin.charCodeAt(i);
        if (d < 58) d -= 48;
        else if (d > 64) d -= 55;
        //e = len-i-1;
        e = idot - i - 1;
        e = e.toString();
        txt += "(" + d + " \u00D7 2";
        for (var k = 0; k < e.length; k++)
            if (e[k] == "-")
                txt += "\u207B";
            else
                txt += etbl[e[k]];
        txt += ")";
        if (i < len - 1) txt += " + ";
    }
    if (minus) txt += "]";
    txt += " = (" + xx + ")\u2081\u2080";
    document.getElementById("final").value = txt;
    //SetLinks(bin);
}