// WebRTC peer to peer connections
//   logging: about:webrtc

// Globals
//err ?? const STUN_SERVERS = ["stun:stun.l.google.com:19302","stun:stun.services.mozilla.com:3478"]  //multi server LIST[STR,STR,..]
const STUN_SERVERS = "stun:stun.l.google.com:19302" // or single server STR
//const STUN_SERVERS = "stun:stun.services.mozilla.com:3478"
var GLOB_user_id = "anonymous"
var channels = []
var connections = [onit_connection()]


function onit_connection() {
    var connection = new RTCPeerConnection({
        iceServers: [{
            urls: STUN_SERVERS
        }]
    })
    connection.ondatachannel = event => {
        // compatability: MDN: YYYNYY|YYYYYY 
        //    https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/ondatachannel#browser_compatibility 
        //  console.log('ondatachannel',event)
        channels.push(add_channel_properties(event.channel)) // for guests|clients
    }
    connection.onicecandidate = event => {
        // compatability: MDN: YYYNYY|YYYYYY 
        //    https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate#browser_compatibility
        //  console.log('onicecandidate', event)
        if (!event.candidate) {
            SIGNALLING(event.srcElement.localDescription)
        }
    }
    connection.oniceconnectionstatechange = event => {
        // compatability: MDN: YYYNYY|YYYY?Y
        // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event
        //  console.log('oniceconnectionstatechange',event)
        if (event.srcElement.iceConnectionState === "connected") {
            console.log("RTC_CONNECTED")
        }
        if (event.srcElement.iceConnectionState === "disconnected") {
            console.log("RTC_DISCONNECTED")
        }
        if (event.srcElement.iceConnectionState === "failed") {
            let failure_msg = `
Peer to Peer Connection Failed
  ICE Server Failure
Reload Page And Try Again`
            alert(failure_msg)
        }
    }
    return connection
} // onit_connection(), initialise and configure a new RTC Peer Connection


function add_channel_properties(channel) {
    channel.onmessage = event => p2p_message_received(event)
    channel.onopen = event => {
        document.getElementById("status").style.backgroundColor = "green"
        document.getElementById("status").innerHTML = "⇋" //C:⇋|⇌
        document.getElementById("host").style.display = "none"
        document.getElementById("client").style.display = "none"
    }
    channel.onclose = event => {
        document.getElementById("status").style.backgroundColor = "red"
        document.getElementById("status").innerHTML = "⇀"
    }
    return channel
} // add_channel_properties(), adds ui specific properties to RTC Data Channels


function toClipboard(dada) {
    console.log("COPYdada:", dada)
    let tmp = document.createElement('textarea');
    tmp.value = JSON.stringify(dada)
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
} // toClipboard(), forces selection then copies to Clipboard(Ctrl-C), retrieve with Ctrl-V


function SIGNALLING(dada) {
    // We will work without a signalling server
    //   Utilising the Clipboard for easy copy-paste of peering dada for sharing manually
    //     Paste the offer|answer JSON into a communication of choice: messaging, eMail, pastebin, syncdtext, etc.
    //   Added to event onicecandidate for both HOST and CLIENT
    // Replace toClipboard() with a server API call if your application utilises a centralised server
    toClipboard(dada)
} // SIGNALLING(), share identifying information to other peers


async function HOST_create_room() { // 1) host_create_offer()
    var ci = 0 // this is constant when only allowing 1 connection
    channel = add_channel_properties(connections[ci].createDataChannel('dada'))
    channels.push(channel)
    const offer = await connections[ci].createOffer({
        iceRestart: true
    }) //options={}
    await connections[ci].setLocalDescription(offer)
    document.getElementById("hbutton").disabled = true
    document.getElementById("hstage2").style.display = "flex"
} // HOST_create_room(), create a Room as Host 


async function CLIENT_read_invitation() { // 2) client_accept_offer()
    var ci = 0 // this is constant when only allowing 1 connection
    const offer = JSON.parse(document.getElementById("ctextarea").value)
    await connections[ci].setRemoteDescription(offer)
    let client_stage2 = document.getElementById("cstage2")
    //client_stage2.hidden=false
    client_stage2.style.display = "flex"
} // CLIENT_read_invitation(), read Host's invitation as Client


async function CLIENT_create_rsvp() { // 3) client_create_answer()
    var ci = 0 // this is constant when only allowing 1 connection
    const answer = await connections[ci].createAnswer({
        iceRestart: true
    })
    await connections[ci].setLocalDescription(answer)
} // CLIENT_create_rsvp(), create an RSVP to Host as Client


async function HOST_include_guest() { // 4) host_accept_answer()
    var ci = 0 // this is constant when only allowing 1 connection
    const answer = JSON.parse(document.getElementById("htextarea").value)
    await connections[ci].setRemoteDescription(answer)
} // HOST_include_guest(), as Host accept an RSVP from a Client


async function send_chat() {
    let ci = 0
    let chat_msg = document.getElementById("text").value
    let log = document.getElementById("log")
    //let user_id = "user0" // ??
    let user_id = GLOB_user_id
    let chat_line = "-: " + user_id + " : " + chat_msg
    log.value = log.value + "\n" + chat_line
    log.scrollTop = 99999
    if (channels.length > ci) {
        channels[ci].send(JSON.stringify(["chat", user_id, chat_msg]))
        console.log("SEND CHAT:", chat_line)
    } // else without a p2p connection
}


async function send_dada(dada) {
    var ci = 0
    if (channels.length > ci) {
        console.log("SENDING:", dada)
        channels[ci].send(JSON.stringify(dada))
    } // else without a p2p connection
} // send_dada(), send text across a peer Datachannel




// ui event handling >>>
function choose_host_overlay(i) {
    document.getElementById("hoverlay").style.display = "none"
    document.getElementById("hstage1").style.display = "flex"
    document.getElementById("coverlay").style.display = "none"
}

function choose_client_overlay(i) {
    document.getElementById("coverlay").style.display = "none"
    document.getElementById("cstage1").style.display = "flex"
    document.getElementById("hoverlay").style.display = "none"
}

function reset_connection(click_event) {
    console.log("RESET:", click_event)
    // F5 Page Reload closes the connection
    var ci = 0 // this is constant when only allowing 1 connection
    window["channels"][ci] = {} //close the old
    window["connections"][ci].close() //close the old
    //connection = undefined // fails to overwrite connection andor close connection
    console.log("CONNECTION:", connections[ci])
    //delete window["connection"] //= undefined // overwrites connection but fails to close connection
    window["connections"][ci] = null //= undefined // overwrites connection but fails to close connection
    // STUN: $, simple response: ip,port,connectivity status
    // TURN: $$$, data relay: to improve performance of data transfer especially when hosting many connections
    window["connections"][ci] = onit_connection()
    connections[ci].signalingState = "closed" //
    document.getElementById("client").style.display = "flex"
    document.getElementById("coverlay").style.display = "inline-grid"
    document.getElementById("ctextarea").value = ""
    document.getElementById("cstage1").style.display = "none"
    document.getElementById("cstage2").style.display = "none"

    document.getElementById("host").style.display = "flex"
    document.getElementById("hoverlay").style.display = "inline-grid"
    document.getElementById("htextarea").value = ""
    document.getElementById("hbutton").disabled = false
    document.getElementById("hstage1").style.display = "none"
    document.getElementById("hstage2").style.display = "none"
} // reset_connection(), resets the p2p connection, onclick for element("reset")


function helper(click_event) {
    let hlp_msg = `
  Host: click 'Host A Room'
          -> Click 'Copy Invitation to Clipboard'
              this will save your invitation to your Ctrl-C clipboard.
          -> Use Ctrl-V to paste your invitation to the peers you want to join your room.
          -> Wait for the Client to return an RSVP
          -> Paste the RSVP into the textarea and click 'Read RSVP'
        Your peer to peer connection is now established.
  

  Guest: click 'Join A Room'
          -> Paste your Host's Invitation into the textarea and click 'Read Invitation'
          -> Click 'Copy RSVP to Clipboard'
              this will save your RSVP to your Ctrl-C clipboard.
          -> Use Ctrl-V to paste your RSVP to the host you want to join.
        If your Host accepts your RSVP your peer to peer connection is now established.`
    alert(hlp_msg)
} // helper(), display help prompt for p2p connection, onclick for element("helper")


function update_user_id(click_event) {
    GLOB_user_id = document.getElementById("user").value
} // update_user_id(), takes a new user id and sets the global value
// ui event handling <<<


// ui >>>
function drawPeeringUI() {
    let peering = document.createElement("div")
    peering.id = "peering"
    peering.style.display = "flex"
    peering.style.height = "40px"

    let navigation = document.createElement("div")
    navigation.id = "nav"
    navigation.style.display = "flex"
    navigation.style.width = "10%"

    let font_size = 25

    let connection_reset = document.createElement("p")
    connection_reset.id = "reset"
    connection_reset.style.width = "33%"
    connection_reset.style.height = "100%"
    connection_reset.innerHTML = "↺"
    connection_reset.style.backgroundColor = "purple"
    connection_reset.style.color = "white"
    connection_reset.style.display = "flex"
    connection_reset.onclick = reset_connection
    connection_reset.style.justifyContent = "center"
    connection_reset.style.alignItems = "center"
    connection_reset.style.fontSize = font_size + "px"
    connection_reset.style.fontFamily = "monospace"
    connection_reset.style.fontWeight = "bold"

    let connection_status = document.createElement("p")
    connection_status.id = "status"
    connection_status.style.width = "33%"
    connection_status.style.height = "100%"
    connection_status.innerHTML = "⇀" // p2p connected: D:↭(failing to display),C:↭   D:⇀|⇁,C:⇋|⇌
    connection_status.style.backgroundColor = "red"
    connection_status.style.color = "white"
    connection_status.style.display = "flex"
    connection_status.style.justifyContent = "center"
    connection_status.style.alignItems = "center"
    connection_status.style.fontSize = font_size + "px"
    connection_status.style.fontFamily = "monospace"
    connection_status.style.fontWeight = "bold"

    let connection_helper = document.createElement("p")
    connection_helper.id = "helper"
    connection_helper.style.width = "33%"
    connection_helper.style.height = "100%"
    connection_helper.innerHTML = "?"
    connection_helper.style.backgroundColor = "grey"
    connection_helper.style.color = "white"
    connection_helper.style.display = "flex"
    connection_helper.onclick = helper
    connection_helper.style.justifyContent = "center"
    connection_helper.style.alignItems = "center"
    connection_helper.style.fontSize = font_size + "px"
    connection_helper.style.fontFamily = "monospace"
    connection_helper.style.fontWeight = "bold"

    navigation.appendChild(connection_reset)
    navigation.appendChild(connection_status)
    navigation.appendChild(connection_helper)

    let host = document.createElement("div")
    host.id = "host"
    host.style.width = "45%"
    let host_stage1 = document.createElement("div")
    host_stage1.id = "hstage1"
    host_stage1.style.display = "flex"
    let host_stage2 = document.createElement("div")
    host_stage2.id = "hstage2"


    let host_overlay = document.createElement("p")
    host_overlay.id = "hoverlay"
    host_overlay.style.width = "100%"
    host_overlay.style.height = "100%"
    host_overlay.innerHTML = "Host A Room"
    host_overlay.style.justifyContent = "center"
    host_overlay.style.alignItems = "center"
    host_overlay.zIndex = 100
    host_overlay.style.backgroundColor = "#628c74" //earthgreen  //"blue"  //"#545498"//navy
    host_overlay.onclick = choose_host_overlay
    host_overlay.style.color = "white"
    host_overlay.style.fontSize = font_size + "px"
    host_overlay.style.fontFamily = "monospace"
    host_overlay.style.fontWeight = "bold"
    host_overlay.style.display = "inline-grid"

    let host_button = document.createElement("button")
    //host_button.id="host_button"  // err JS:231, split("_").length==2
    host_button.id = "hbutton"
    host_button.innerHTML = "Copy Invitation to Clipboard"
    host_button.onclick = HOST_create_room
    host_stage1.appendChild(host_button)

    let host_textarea = document.createElement("textarea")
    let host_textarea_button = document.createElement("button")
    host_textarea.id = "htextarea"
    host_textarea_button.id = "htextareabutton"
    host_textarea.placeholder = "Paste RSVP here"
    host_textarea_button.innerHTML = "Read RSVP"
    host_textarea_button.onclick = HOST_include_guest
    host_textarea.style.width = "150px"
    host_textarea.style.height = "30px"
    host_stage2.appendChild(host_textarea)
    host_stage2.appendChild(host_textarea_button)

    host_stage1.style.display = "none"
    host_stage2.style.display = "none"
    //host_stage1.hidden=true
    //host_stage2.hidden=true

    host.append(host_overlay)
    host.appendChild(host_stage1)
    host.appendChild(host_stage2)

    let client = document.createElement("div")
    client.id = "client"
    client.style.width = "45%"
    let client_stage1 = document.createElement("div")
    client_stage1.id = "cstage1"
    client_stage1.style.display = "flex"
    let client_stage2 = document.createElement("div")
    client_stage2.id = "cstage2"

    client_stage1.style.display = "none"
    client_stage2.style.display = "none"

    let client_overlay = document.createElement("p")
    client_overlay.id = "coverlay"
    client_overlay.style.width = "100%"
    client_overlay.style.height = "100%"
    client_overlay.innerHTML = "Join A Room"
    client_overlay.style.justifyContent = "center"
    client_overlay.style.alignItems = "center"
    client_overlay.zIndex = 100
    client_overlay.style.backgroundColor = "#b0c1f1" //green  //"orange"  //#f1be63//pink
    client_overlay.onclick = choose_client_overlay
    client_overlay.style.color = "#3a3636" //charcoal  //"black"
    client_overlay.style.fontSize = font_size + "px"
    client_overlay.style.fontFamily = "monospace"
    client_overlay.style.display = "inline-grid"

    let client_button = document.createElement("button")
    host.style.width = "45%"
    client_button.id = "cbutton"
    client_button.innerHTML = "Copy RSVP to Clipboard"
    client_button.onclick = CLIENT_create_rsvp
    client_stage2.appendChild(client_button)

    let client_textarea = document.createElement("textarea")
    let client_textarea_button = document.createElement("button")
    client_textarea.id = "ctextarea"
    client_textarea_button.id = "ctextareabutton"
    client_textarea.placeholder = "Paste Invitation"
    client_textarea_button.innerHTML = "Read Invitation"
    client_textarea_button.onclick = CLIENT_read_invitation
    client_textarea.style.width = "150px"
    client_textarea.style.height = "30px"
    client_textarea.style.rows = 2
    client_stage1.appendChild(client_textarea)
    client_stage1.appendChild(client_textarea_button)
    client.append(client_overlay)
    client.appendChild(client_stage1)
    client.appendChild(client_stage2)

    peering.appendChild(navigation)
    peering.appendChild(host)
    peering.appendChild(client)


    let send = document.createElement("div")
    send.style.position = "absolute"
    send.style.top = "75px"
    send.style.left = "500px"
    send.style.width = "300px"
    send.style.height = "200px"
    send.style.display = "block"
    send.style.backgroundColor = "grey"
    let send_b = document.createElement("div")
    let send_t = document.createElement("textarea")
    let send_l = document.createElement("textarea")
    let send_u = document.createElement("textarea")

    send_t.id = "text"
    send_t.style.width = "100%"         //  _________
    send_t.style.height = "20%"         // |log      |   log: shows log of chat
    send_t.style.resize = "none"        // |_________|  text: where user types new message
    send_t.style.outline = "none"       // |text     |  SEND: send button
                                        // |_________|  user: where user types their username
    send_l.id = "log"                   // |SEND|user|
    send_l.disabled = true              // |____|____|
    send_l.position = "relative"  
    send_l.style.width = "100%"
    send_l.style.height = "66%"
    send_l.style.resize = "none"
    send_l.style.outline = "none"
    send_l.style.rows = "5";
    send_l.style.cols = "45";

    send_b.style.position = "absolute"
    send_b.style.top = "88%"
    send_b.style.left = "2px"
    send_b.style.width = "15%"
    send_b.style.height = "10%"
    send_b.innerHTML = "SEND"
    send_b.style.backgroundColor = "#57535b"
    send_b.style.color = "white"
    send_b.onclick = send_chat

    send_u.id = "user"
    send_u.style.outline = "none"
    send_u.style.resize = "none"
    send_u.style.rows = "2"
    send_u.style.height = "10%"
    send_u.style.width = "30%"
    send_u.style.marginLeft = "20px"
    send_u.style.cols = "10"
    send_u.style.overflow = "hidden"
    send_u.placeholder = "Username"
    send_u.style.position = "absolute"
    send_u.style.top = "88%"
    send_u.style.left = "40%"
    send_u.onkeyup = update_user_id

    send.appendChild(send_l)
    send.appendChild(send_t)
    send.appendChild(send_b)
    send.appendChild(send_u)

    document.body.appendChild(peering)
    document.body.appendChild(send)
}
// ui <<<
