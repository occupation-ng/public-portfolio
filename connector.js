// https://www.javascripttutorial.net/web-apis/javascript-draw-line/

const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight
    };
}

function connect(div1, div2, color, thickness) {
    // div1 : JS_OBJ : DOM element
    // div2 : JS_OBJ : DOM element
    // color : STR : string for coloring the line, ex. 'green', '#aea'
    // thickness : INT : thickness of line in pixels, ex. 5
    const off1 = getOffset(div1);
    const off2 = getOffset(div2);

    //const x1 = off1.left + off1.width;
    //const y1 = off1.top + off1.height;

    const x1 = off1.left + off1.width / 2;
    const y1 = off1.top + off1.height;

    // up left corner
    //const x1 = off1.left
    //const y1 = off1.top

    //const x2 = off2.left + off2.width;
    //const x2 = off2.left
    const x2 = off2.left + off2.width / 2
    const y2 = off2.top;

    const length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));

    const cx = ((x1 + x2) / 2) - (length / 2);
    const cy = ((y1 + y2) / 2) - (thickness / 2);

    //const cx=off1.left;
    //const cy=off2.left;

    const angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);
    //const htmlLine = "<div style='z-index=4000; padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
    var htmline = document.createElement("div")
    var div_id = div1.id + "_connect_" + div2.id
    htmline.id = div_id
    htmline.style.zIndex = 4000
    htmline.style.position = "absolute"
    htmline.style.padding = "0px"
    htmline.style.margin = "0px"
    htmline.style.height = thickness + "px"
    htmline.style.backgroundColor = color
    htmline.style.lineHeight = "1px"
    htmline.style.left = cx + "px"
    htmline.style.top = cy + "px"
    htmline.style.width = length + "px"
    htmline.style.MozTransform = "rotate(" + angle + "deg)"
    htmline.style.WebkitTransform = "rotate(" + angle + "deg)"
    htmline.style.OTransform = "rotate(" + angle + "deg)"
    htmline.style.msTransform = "rotate(" + angle + "deg)"
    htmline.style.transform = "rotate(" + angle + "deg)"
    var flux = document.getElementById("flux")
    flux.appendChild(htmline)
}