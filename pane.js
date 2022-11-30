function get_match_id(e, match_str) {
    let curr = e.target
    while (curr != document) {
        if (curr.id.substring(0, match_str.length) == match_str) { // "ng_pane_17".indexOf("pane") => 3 ; "ng_pane_17".indexOf("enap") => -1
            curr = curr.id
            break
        }
        curr = curr.parentNode
    }
    return curr
}
//console.log(
//    curr.id,
//    curr.id.substring(0, match_str.length) == match_str,
//    !isNaN(curr.id[curr.id.length - 1]),
//    curr.id.indexOf("graph") !== -1
//)
//if (curr.id.substring(0, match_str.length) == match_str && (!isNaN(curr.id[curr.id.length - 1]) ||
//        curr.id.indexOf("graph") !== -1)) { // "ng_pane_17".indexOf("pane") => 3 ; "ng_pane_17".indexOf("enap") => -1
var GLOB_event_element_id = ""

function to_top(id_to_top) {
    //console.log("TO_TOP", id_to_top)
    let zdim = 200
    let panes = piflow.home.get_all_panes().tail
    for (let i = 0; i < panes.length; i++) {
        let el = document.getElementById(panes[i])
        if (el) {
            if (el.id == id_to_top) {
                el.style.zIndex = String(zdim + 1)
            } else {
                el.style.zIndex = String(zdim)
            }
        }
    }
} // to_top(PANE_ID), enfocus clicked pane 

function select_div(move_event) {
    select_boundary = GLOB_select_boundary
    original_point = select_boundary[0]
    if (move_event.buttons == 1) {
        if (move_event.pageX > 17 && move_event.pageY > 17) { // stops from dragging too far left, off screen; 17 arbitrary, calcs at mouse location stead div edge
            let move_x = move_event.movementX
            let move_y = move_event.movementY
            let el = document.getElementById(GLOB_event_element_id)
            el.style.left = (el.offsetLeft + move_x) + "px";
            el.style.top = (el.offsetTop + move_y) + "px";
        }
    } else {
        window.removeEventListener("mousemove", select_div) //FAIL when called with .bind
        GLOB_event_element_id = "" // clear, for tidiness
    }
}

function into_view(el_id) {
    let el = document.getElementById(el_id)
    el.style.left = "200px";
    el.style.top = "200px";
} // into_view(DOM_ID), to avoid situation where pane stuck with buttons inaccessible

function drag_div(move_event) { // uses GLOB_event_element_id
    piflow.home.remove_lines(GLOB_event_element_id)
    piflow.home.draw_lines(GLOB_event_element_id)
    if (move_event.buttons == 1) {
        if (move_event.pageX > 17 && move_event.pageY > 17) { // stops from dragging too far left, off screen; 17 arbitrary, calcs at mouse location stead div edge
            let move_x = move_event.movementX
            let move_y = move_event.movementY
            let el = document.getElementById(GLOB_event_element_id)
            let nu_x = (el.offsetLeft + move_x);
            let nu_y = (el.offsetTop + move_y);
            el.style.left = nu_x + "px";
            el.style.top = nu_y + "px";
            if (check_id()) {
                piflow.home.update_pane_flow_graph_pos(GLOB_event_element_id, nu_x, nu_y)
                piflow.home.update_pane_flow_graph()
            }
        }
    } else {
        window.removeEventListener("mousemove", drag_div) //FAIL when called with .bind
        GLOB_event_element_id = "" // clear, for tidiness
    }
}

function rescale_div(move_event) {
    if (move_event.buttons == 1) {
        let move_x = move_event.movementX
        let move_y = move_event.movementY
        let el = document.getElementById(GLOB_event_element_id)
        if (el.style.fontSize == "") {
            el.style.fontSize = "1em";
        }
        var nu = parseFloat(el.style.fontSize.split("em")[0])
        if (move_y < 0) {
            nu = nu + 0.1
        } else if (move_y > 0) {
            nu = nu - 0.1
            if (nu < 1) {
                nu = 1;
            }
        }
        el.style.fontSize = String(nu) + "em"
        if (check_id()) {
            piflow.home.update_pane_flow_graph_scale(GLOB_event_element_id, nu)
            piflow.home.update_pane_flow_graph()
        }

    } else {
        window.removeEventListener("mousemove", rescale_div) //FAIL when called with .bind
        GLOB_event_element_id = "" // clear, tidiness
    }
}

function check_id() {
    return !isNaN(GLOB_event_element_id[GLOB_event_element_id.length - 1])
}

function resize_div(move_event) {
    if (move_event.buttons == 1) {
        let move_x = move_event.movementX
        let move_y = move_event.movementY
        let el = document.getElementById(GLOB_event_element_id)
        let bcr = el.getBoundingClientRect() // use bcr for precalc'd "em" values
        let scrollX = window.pageXOffset // bcr is viewport only 
        let scrollY = window.pageYOffset //   full window requires scrollXY  
        let window_top = bcr.top + scrollY
        let window_lft = bcr.left + scrollX
        let nu_x = (window_lft + move_x)
        let nu_y = (window_top + move_y)
        let nu_wid = (bcr.width - move_x)
        let nu_hei = (bcr.height - move_y)
        el.style.left = nu_x + "px";
        el.style.width = nu_wid + "px";
        el.style.top = nu_y + "px";
        el.style.height = nu_hei + "px";
        if (check_id()) {
            piflow.home.update_pane_flow_graph_dims(GLOB_event_element_id, nu_x, nu_y, nu_wid, nu_hei)
            piflow.home.update_pane_flow_graph()
        }
    } else {
        window.removeEventListener("mousemove", resize_div) //FAIL when called with .bind
        GLOB_event_element_id = "" // clear, tidiness
    }
}

function addMyRescaleEvent(click_event) { // click_event pass through
    GLOB_event_element_id = get_match_id(click_event, "pane")
    to_top(GLOB_event_element_id)
    window.addEventListener("mousemove", rescale_div)
}

function addMyResizeEvent(click_event) { // click_event pass through
    GLOB_event_element_id = get_match_id(click_event, "pane")
    to_top(GLOB_event_element_id)
    window.addEventListener("mousemove", resize_div)
}

function addMyMoveEvent(click_event) { // click_event pass through
    GLOB_event_element_id = get_match_id(click_event, "pane")
    to_top(GLOB_event_element_id)
    window.addEventListener("mousemove", drag_div)
}

function addMySelectEvent(click_event) { // click_event pass through
    GLOB_event_element_id = get_match_id(click_event, "pane")
    window.addEventListener("mousemove", select_div)
}

function press_up(click_event) {
    let el = click_event.target
    el.style.transform = "scaleX(1) scaleY(1)"
} //button push animations

function press_down(click_event) {
    let el = click_event.target
    el.style.transform = "scaleX(0) scaleY(0)"
    setTimeout(press_up, 250, click_event)
}


//clalp.ui.spacerm()




/* NOTES/DEPREC
// ?wat? FAILING?
   window.removeEventListener("mousemove",draggable_divs) //FAIL when called with .bind
   //window.removeEventListener("mousemove",draggable_divs.bind(move_event,move_id))

   // Add an abortable event listener to table
const controller = new AbortController();
   controller.abort(); // remove listener // FAIL ?wat?
  
   window.addEventListener("mousemove",draggable_divs)}
  //window.addEventListener("mousemove",draggable_divs.bind(null,event))}

//  window.addEventListener("mousemove",function(e) {draggable_divs(e,click_event)})}
  
//window.addEventListener("mousemove",draggable_divs.bind(event,got_id))} 

  ;; unable to pass the exact fn to remove it, unless i save it into a glob variable, might as well save the id in the glob

//function draggable_divs(move_id,move_event) {
  window.addEventListener("mousemove",drag_div)
function drag_div(move_event) {
 if (move_event.buttons==1) {
   let move_x = move_event.movementX
   let move_y = move_event.movementY
   let el=document.getElementById(GLOB_event_element_id)
   el.style.left = (el.offsetLeft + move_x) + "px";
   el.style.top = (el.offsetTop + move_y) + "px";
 } else {
   window.removeEventListener("mousemove",drag_div) //FAIL when called with .bind
   GLOB_event_element_id="" // clear, for tidiness
 }
}

would prefer to pass the id through
  lexical scoping
  makes global variable unecessary
but watexplicably you have to pass the function to *EventListener()
  bind somehow disrupts the ability to then use another bind in the removeEventListener

window.addEventListener("mousemove",drag_div.bind(event,GLOB_event_element_id))
function drag_div(id,move_event) {
 if (move_event.buttons==1) {
   let move_x = move_event.movementX
   let move_y = move_event.movementY
   let el=document.getElementById(GLOB_event_element_id)
   el.style.left = (el.offsetLeft + move_x) + "px";
   el.style.top = (el.offsetTop + move_y) + "px";
 } else {
   window.removeEventListener("mousemove",drag_div.bind(move_event,id)) // FAILS
   GLOB_event_element_id="" // clear, for tidiness
 }
}
*/