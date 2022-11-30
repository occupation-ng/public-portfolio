// chessboard.js
// simulate a real chessboard stead a virtual game with computer referee

// user input
//   tell the browser we want it to report to a specified function when certain mouse events happen
//document.body.addEventListener("mousedown", HandleMouseDown); // mouse event: mousedown  ;   function: HandleMouseDown()
//document.body.addEventListener("mousemove", HandleMouseMove); // mouse event: mousemove  ;   function: HandleMouseMove()
//document.body.addEventListener("mouseup", HandleMouseUp);            // mouse event: mouseup    ;   function: HandleMouseUp()


//function HandleMouseUp(e){
//	console.log(e.target.id,e)
//} //HandleMouseUp() : do this everytime the mouse is clicked up


function HandleMouseMove(e) {
    // e : OBJ{} : object representing the mousedown event
    //console.log(e)
    let game_state = safe_copy(GLOB_game_state) // localised GLOBAL
    let click_state = game_state["click_state"]
    if (click_state.length == 1) {
        if (click_state[0] === undefined || click_state[0] === null) { // JS wat
            game_state["click_state"] = []
        } else {
            let el_id = click_state[0] // click_state: [piece_id]
            let el = document.getElementById(el_id)
            let sq = game_state["ui"]["sq"]
            //el.style.top=e.layerY-(sq/2)                         // some Y properties give undesirable coordinates, see with console.log(e)
            //el.style.left=e.layerX-(sq/2)                        // some X properties give undesirable coordinates, see with console.log(e)
            el.style.top = e.pageY - (sq / 2) // pageY propert gives our desired coordinates
            el.style.left = e.pageX - (sq / 2) // pageX propert gives our desired coordinates
        }
    }
    GLOB_game_state = safe_copy(game_state) // intentional GLOBAL update with local value
} //HandleMouseMove() : do this everytime the mouse is moved


function HandleMouseDown(e) {
    // e : OBJ{} : object representing the mousedown event
    //console.log(e)
    if (e.which == 1) { // checks which button, 1:left,2:middle,3:right
        let game_state = safe_copy(GLOB_game_state) // localised GLOBAL
        let tile_id = e.target.id
        let click_state = game_state["click_state"]
        if (click_state.length == 0) { // if click_state is empty
            // check for piece
            // if piece
            // 	 clutch
            if (tile_id.split("_").length > 1) { // ignore clicks outside board or material
                let piece = get_piece(game_state, tile_id) // read only
                if (piece != "") { // Check if any tile other than an empty tile
                    game_state["click_state"] = [piece]
                    if (tile_id.slice(-2) == "_m") {
                        send_dada(["rmMat", tile_id, game_state["click_state"]])
                        game_state = remove_material(game_state, tile_id) // game_state and DOM update
                    } else {
                        send_dada(["rmPce", tile_id, game_state["click_state"]])
                        game_state = remove_piece(game_state, tile_id) // game_state update
                    }
                }
            }
        } else {
            if (tile_id.slice(-2) === "_m") {
                send_dada(["mvMat", tile_id, game_state["click_state"]])
                game_state = dropMaterial(game_state, tile_id, click_state) // game_state update
            } else {
                // check for piece
                // if piece
                // 	 swap
                // else
                //       drop
                if (tile_id.split("_").length > 1) { // ignore clicks outside board or material
                    let piece = get_piece(game_state, tile_id) // read only
                    if (piece != "") { // Check if any tile other than an empty tile
                        game_state = swapPiece(game_state, tile_id, click_state)
                    } else {
                        send_dada(["mvPce", tile_id, game_state["click_state"]])
                        game_state = dropPiece(game_state, tile_id) // game_state update
                    }
                }
            }
        }
        drawSetPieces(game_state) // DOM update
        GLOB_game_state = safe_copy(game_state) // intentional GLOBAL update with local value
    }
} // HandleMouseDown() : do this everytime the mouse is clicked down


// styling
function styleBlocBackgroundColor(game_state, i, j, bloc) {
    // to get the alternating color pattern of a chess board
    //   ___________
    //  | 0,0 |*1,0*|    i,j  *,* dark
    //  |*0,1*| 1,1 |
    //
    //    this simple pattern repeats forever
    //      we use modulo: % ; to retrieve the number's remainder when divided by 2
    //        0%2 == 0    2%2 == 0     4%2 == 0     1732%2 == 0  550%2 == 0   32%2 == 0    15151581030534%2 == 0
    //        1%2 == 1    3%2 == 1    17%2 == 1   448119%2 == 1  333%2 == 1    7%2 == 1  4606645451233055%2 == 1
    //      modulo 2 : NUMBER%2 ; identifies if NUMBER is even(0) or odd(1)
    //
    //  when j is even or zero          j%2==0        ji
    //    when i is even or zero          i%2==0      00    when j is even and i is even use lite color
    //      lite color
    //    or when i is odd                i%2==1      01    when j is even and i is odd use dark color
    //      dark color
    //  or when j is odd                j%2==1
    //    when i is even or zero          i%2==0      10    when j is odd and i is even use dark color
    //      dark color
    //    or when i is odd                i%2==1      11    when j is odd and i is odd use lite_color
    //      lite color

    if (j % 2 == 0) { // even numbered rows
        if (i % 2 == 0) { // even numbered cols
            bloc.style["background-color"] = game_state["ui"]["lite_color"]
        } else { //  odd numbered cols
            bloc.style["background-color"] = game_state["ui"]["dark_color"]
        }
    } else { //  odd numbered rows
        if (i % 2 == 0) { // even numbered cols
            bloc.style["background-color"] = game_state["ui"]["dark_color"]
        } else { //  odd numbered cols
            bloc.style["background-color"] = game_state["ui"]["lite_color"]
        }
    }
    return bloc
} // styleBlocBackgroundColor() : simple algorithm to produce the checkered pattern of a chessboard, CSS styling of HTML Elements using Javascript


function styleMaterialBloc(game_state, c, i, j, bloc) {
    // c:INT & i: INT & j: INT : material coordinates
    // piece : OBJ{} : object representing DOM element to stylise
    let offset = game_state["ui"]["offset"] // readonly
    let material_offset = get_material_offset(game_state)
    let sq = game_state["ui"]["sq"] // readonly
    bloc.style.position = "absolute" // tells the browser we will specify the exact position
    bloc.style.top = material_offset[1] + offset[1] + (((c * 2) * sq) + (sq * j)) + "px" // move down from top
    bloc.style.left = material_offset[0] + offset[0] + (sq * i) + "px" // move right from left
    bloc.style.height = sq // DOM element size of tile
    bloc.style.width = sq // DOM element size of tile
    return bloc
} // styleMaterialBloc() : CSS styling of HTML Elements using Javascript


function styleBloc(game_state, i, j, bloc) {
    // i: INT & j: INT : board coordinates
    // bloc : OBJ{} : object representing DOM element to stylise
    let offset = game_state["ui"]["offset"] // readonly
    let sq = game_state["ui"]["sq"] // readonly
    bloc.style.position = "absolute" // tells the browser we will specify the exact position
    bloc.style.top = offset[1] + (sq * j) + "px" // move down from top
    bloc.style.left = offset[0] + (sq * i) + "px" // move right from left
    bloc.style.height = sq // DOM element size of tile
    bloc.style.width = sq // DOM element size of tile
    return bloc
} // styleBloc() : CSS styling of HTML Elements using Javascript


function styleUTF8Pieces(game_state, piece) {
    // piece : OBJ{} : object representing DOM element of the piece
    let sq = game_state["ui"]["sq"] // readonly
    let font_size = game_state["ui"]["font_size"] // readonly
    piece.style.position = "absolute" // tells the browser we will specify the exact position
    piece.style.display = "flex" // display type that allows the use of the following centering properties
    piece.style.justifyContent = "center" // center the flex display UTF8 text piece horizontally in the tile
    piece.style.alignItems = "center" // center the flex display UTF8 text piece vertically in the tile
    piece.style.fontSize = font_size + "px" // fonts are usually "em" units so we want to specify that we want to use pixel,"px", units
    piece.style.height = sq // DOM element size of tile
    piece.style.width = sq // DOM element size of tile
    return piece
} // styleUTF8Pieces() : CSS styling of HTML Elements using Javascript


// utilities
function safe_copy(ins) {
    return JSON.parse(JSON.stringify(ins))
} // a javascript idiom, makes an immutable copy of any variable type


function removeIndex(ins, index) {
    // ins : LIST[] : list of arbitrary number and type of elements
    // index : INT : index of element in list you want to remove
    let outs = []
    for (var i = 0; i < ins.length; i++) {
        if (i != index) {
            outs.push(ins[i])
        }
    } // you can fold up code tokens as long as the brackets are consistent
    return outs
} // removeIndex() : modify data structure in memory


function get_material_offset(game_state) { // retrieve data structure in memory
    let dims = game_state["ui"]["dimensions"] // ex. [8,8]
    let offset = game_state["ui"]["offset"] // ex. [10,10]
    let sq = game_state["ui"]["sq"] // ex. 60
    let material_vert = offset[1] + sq * (parseInt(dims[1] / 2) - 2) // top edge of material at middle of board -2 for the number of rows per color
    let material_horz = 2 * offset[0] + (sq * dims[0]) // left edge of material at board's left edge + offset[0]
    return [material_horz, material_vert]
} // get_material_offset() : retrieve data structure in memory, readonly


function remove_material(game_state, tile_id) { // modify data structure in memory, calls a chage on DOM
    // tile_id : STR"" : string representing the DOM element's id
    let spl = tile_id.split("_")
    let i = parseInt(spl[1])
    let j = parseInt(spl[0])
    let c = parseInt(spl[2])
    if (i < game_state["material"][c][j].length) {
        game_state["material"][c][j] = removeIndex(game_state["material"][c][j], i)
        drawSetPieces(game_state) // DOM update
    }
    return game_state
} // remove_material() : modify data structure in memory, calls a chage on DOM


function remove_piece(game_state, tile_id) {
    // tile_id : STR"" : string representing the DOM element's id
    let spl = tile_id.split("_")
    let i = parseInt(spl[1])
    let j = parseInt(spl[0])
    game_state["click_state"] = [safe_copy(game_state["board"][j][i])]
    game_state["board"][j][i] = "" // empty board tile from build_board()
    return game_state
} // remove_piece() : modify data structure in memory

// these two functions show why some repetitive code is acceptable
//	repeating three first lines vs creating a new function that just functions like split()

function get_piece(game_state, tile_id) { // retrieve data structure in memory
    // tile_id : STR"" : string representing the DOM element's id
    let spl = tile_id.split("_")
    let i = parseInt(spl[1])
    let j = parseInt(spl[0])
    if (spl.length == 2) { // ex. board overlay id: 1_2 : i_j
        let board = game_state["board"] // readonly
        var piece = board[j][i]
    } else { // ex. material overlay id: 1_2_0_m : i_j_c_m
        let material = game_state["material"] // readonly
        let pcol = parseInt(spl[2])
        var piece = material[pcol][j][i]
    }
    return piece
} // get_piece() : retrieve data structure in memory


function swapPiece(game_state, tile_id, click_state) {
    // tile_id : STR"" : string representing the DOM element's id
    // click_state : LIST[OBJ{},..] : list of one or two objects of pieces that have been clicked on
    if (tile_id.slice(-2) == "_m") {
        send_dada(["mvMat", tile_id, game_state["click_state"]])
        game_state = remove_material(game_state, tile_id) // game_state and DOM update
    } else {
        send_dada(["rmPce", tile_id, game_state["click_state"]])
        game_state = remove_piece(game_state, tile_id) // game_state update
    }
    send_dada(["mvPce", tile_id, game_state["click_state"]])
    game_state = dropPiece(game_state, tile_id) // game_state update
    let swap_piece = get_piece(game_state, tile_id) // read only
    game_state["click_state"] = [swap_piece]
    return game_state
} // swapPieces() : swaps the clutched piece for an other occupying the square you drop the clutched piece, modify data structures in memory


function dropPiece(game_state, tile_id) {
    // tile_id : STR"" : string representing the DOM element's id
    // click_state : LIST[OBJ{},..] : list of one or two objects of pieces that have been clicked on
    let spl = tile_id.split("_") // ex. board overlay id: 1_7 : i_j
    let i = parseInt(spl[1])
    let j = parseInt(spl[0])
    let click_state = game_state["click_state"]
    game_state["board"][j][i] = click_state[0]
    game_state["click_state"] = [] // clear click_state
    return game_state
} // dropPiece() : places piece in clutch onto board, modify data structures in memory


function dropMaterial(game_state, tile_id) {
    // tile_id : STR"" : string representing the DOM element's id
    let click_state = game_state["click_state"]
    let color_index = click_state[0].indexOf("l") === -1 ? 1 : 0 // cs[0]: piece_id ex. "P7d".indexOf("l")===-1 means "l" is missing from the id
    let dims = game_state["ui"]["dimensions"]
    if (game_state["material"][color_index][0].length < dims[0]) {
        game_state["material"][color_index][0].push(click_state[0])
    } else {
        game_state["material"][color_index][1].push(click_state[0])
    }
    game_state["click_state"] = [] // clear click_state
    return game_state
} // dropMaterial() : places piece in clutch into material, modify data structures in memory


function drawSetPlayable(game_state) {
    let board = game_state["board"]
    let offset = game_state["ui"]["offset"]
    let sq = game_state["ui"]["sq"]
    for (var j = 0; j < board.length; j++) {
        for (var i = 0; i < board[0].length; i++) {
            let tile = board[j][i]
            if (tile != "") { // check if tile is "" for empty tile
                //console.log("err:",tile,j,i,board)
                let piece = document.getElementById(tile) // tile == id
                piece.style.top = offset[1] + (sq * j) + "px" // move down from top
                piece.style.left = offset[0] + (sq * i) + "px" // move right from left
                piece.style.zIndex = 10 + j // puts pieces on top of board:z=0; but under click overlay:z=100
            }
        }
    }
} // drawSetPlayable() : to browser via HTML and CSS


function drawSetMaterial(game_state) {
    let material = game_state["material"] // [[[].[]].[[].[]]] : [2_rows_of_dark_material,2_rows_of_lite_material]
    for (var c = 0; c < material.length; c++) { // color: 0,"l" 1,"d"
        for (var j = 0; j < 2; j++) { // j is rows in material
            for (var i = 0; i < material[c][j].length; i++) {
                let piece = document.getElementById(material[c][j][i]) // material.c.j.i is piece_id
                let material_bloc = document.getElementById(j + "_" + i + "_" + c + "_m")
                piece.style.top = material_bloc.style.top
                piece.style.left = material_bloc.style.left
                piece.style.zIndex = 10 // puts pieces on top of material:z=0; but under click overlay:z=100
            }
        }
    }
} // drawSetMaterial() : to browser via HTML and CSS


function drawBloc(game_state, dims) {
    // dims : LIST[INT,INT] : list of two integers representing the board coordinates [i,j]
    let board = game_state["board"]
    let el_board = document.getElementById("board");
    let i = dims[0]
    let j = dims[1]
    // create
    let bloc = document.createElement("div")
    // stylise
    bloc.id = "board_" + j + "_" + i // give the bloc a unique id so we can reference it later
    bloc = styleBloc(game_state, i, j, bloc) // DOM update
    bloc = styleBlocBackgroundColor(game_state, i, j, bloc)
    // draw click_overlay
    let click_overlay = document.createElement("div")
    click_overlay.id = j + "_" + i // give the bloc a unique id so we can reference it later
    click_overlay = styleBloc(game_state, i, j, click_overlay) // DOM update
    click_overlay.style.zIndex = 100 // puts overlay above pieces and board
    el_board.appendChild(bloc)
    /*let inds = document.createElement("div")                              // uncomment to see board indexes
	inds.innerHTML=j+","+i                                                
  click_overlay.appendChild(inds) */
    el_board.appendChild(click_overlay)
} // drawBloc() : to browser via HTML and CSS


function drawMaterialBloc(game_state, dims) {
    // dims : LIST[INT,INT,INT] : list of three integers representing the material coordinates [c,i,j]
    let board = game_state["board"]
    let el_board = document.getElementById("board");
    let c = dims[0] // color as 0 or 1
    let i = dims[1]
    let j = dims[2]
    let color = ["lite_color", "dark_color"][c]
    let material_color = game_state["ui"][color]
    // create
    let bloc = document.createElement("div")
    // stylise
    bloc.id = j + "_" + i + "_" + c + "_material" // give the bloc a unique id so we can reference it later
    bloc = styleMaterialBloc(game_state, c, i, j, bloc) // DOM update
    bloc.style["background-color"] = material_color // odd numbered cols have a value of 0  1-ODD%2==1-1==0
    // draw click_overlay
    let click_overlay = document.createElement("div")
    click_overlay = styleMaterialBloc(game_state, c, i, j, click_overlay) // DOM update
    click_overlay.id = j + "_" + i + "_" + c + "_m" // give the bloc a unique id so we can reference it later
    click_overlay.style.zIndex = 100 // puts overlay above pieces and board
    el_board.appendChild(bloc)
    el_board.appendChild(click_overlay)
} // drawMaterialBloc() : to browser via HTML and CSS


function newArbitraryGame(board) { // modify data structure in memory
    // board : LIST[LIST[OBJ{},..],..] : 2 dimensional list of lists of objects representing the game board
    // sets rows with a1 file and rank at lower left
    let chars = [
        [
            ["R", "♜", "d"],
            ["N", "♞", "d"],
            ["B", "♝", "d"],
            ["Q", "♛", "d"],
            ["K", "♚", "d"],
            ["B", "♝", "d"],
            ["N", "♞", "d"],
            ["R", "♜", "d"]
        ],
        [
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"]
        ],
        [
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"]
        ],
        [
            ["R", "♖", "l"],
            ["N", "♘", "l"],
            ["B", "♗", "l"],
            ["Q", "♕", "l"],
            ["K", "♔", "l"],
            ["B", "♗", "l"],
            ["N", "♘", "l"],
            ["R", "♖", "l"]
        ]
    ]
    let cnts = {
        "d": {
            "R": 0,
            "N": 0,
            "B": 0,
            "Q": 0,
            "K": 0,
            "P": 0
        },
        "l": {
            "R": 0,
            "N": 0,
            "B": 0,
            "Q": 0,
            "K": 0,
            "P": 0
        }
    }
    let dims = [board[0].length, board.length]
    for (var i = 0; i < board[0].length; i++) { // i in board[0] ensures all tiles have pieces
        let ci = i % (chars[0].length)
        for (var cj = 0; cj < chars.length; cj++) { // cj in chars ensures only the tiles in rows with pieces
            let j = cj // cj==j==0 && cj==j==1
            if (cj == 2) {
                j = board.length - 2
            } // bottom
            if (cj == 3) {
                j = board.length - 1
            } //  rows
            let p = chars[cj][ci] // p : LIST[""pid,""char,""team] : piece from chars[]
            let pid = p[0]
            //let pchar=p[1]                                        // unused but allows the reuse chars[]
            let pcol = p[2]
            cnts[pcol][pid] += 1
            board[j][i] = pid + String(cnts[pcol][pid]) + pcol
        }
    }
    return board
} // newArbitraryGame(),  place piece ids into board for a new game, modify data structure in memory


function new_game(board) { // modify data structure in memory
    // board : LIST[LIST[OBJ{},..],..] : 2 dimensional list of lists of objects representing the game board
    // sets rows with a1 file and rank at lower left
    let dark_other_row_index = 0
    let dark_pawns_row_index = 1
    let lite_pawns_row_index = board.length - 2
    let lite_other_row_index = board.length - 1
    let ids = [
        ["R1d", "N1d", "B1d", "Q1d", "K1d", "B2d", "N2d", "R2d"],
        ["P1d", "P2d", "P3d", "P4d", "P5d", "P6d", "P7d", "P8d"],
        ["P1l", "P2l", "P3l", "P4l", "P5l", "P6l", "P7l", "P8l"],
        ["R1l", "N1l", "B1l", "Q1l", "K1l", "B2l", "N2l", "R2l"]
    ]
    for (var i = 0; i < board[0].length; i++) {
        board[dark_other_row_index][i] = ids[0][i]
        board[dark_pawns_row_index][i] = ids[1][i]
        board[lite_pawns_row_index][i] = ids[2][i]
        board[lite_other_row_index][i] = ids[3][i]
    }
    return board
} // new_game() : place piece ids into board for a new game, modify data structure in memory


// onit()
function build_board(game_state) { // create data structure in memory
    let board = []
    let dimensions = game_state["ui"]["dimensions"]
    for (var j = 0; j < dimensions[1]; j++) {
        let row = []
        for (var i = 0; i < dimensions[0]; i++) {
            row.push("")
        }
        board.push(row)
    }
    game_state["board"] = board
    return game_state
} // build_board() : creates a new 2-d list representing the game board


function drawBoard(game_state) {
    let board = game_state["board"]
    for (var j = 0; j < board.length; j++) {
        for (var i = 0; i < board[0].length; i++) {
            drawBloc(game_state, [i, j]) // board_dims:[i,j]  // DOM update
        }
    }
    return game_state
} // drawBoard() : to browser via HTML and CSS


function drawMaterial(game_state) {
    let material = game_state["material"]
    let dims = game_state["ui"]["dimensions"]
    for (var c = 0; c < material.length; c++) { // color: 0,"l" 1,"d"
        for (var j = 0; j < 2; j++) {
            for (var i = 0; i < dims[0]; i++) { // first row
                drawMaterialBloc(game_state, [c, i, j]) // material_dims: [c,i,j]  // DOM update
            }
        }
    }
} // drawMaterial() : to browser via HTML and CSS


function drawArbitraryUTF8Pieces(game_state) {
    // sometimes, if your interests are finite, it makes sense to simply list them manually
    //    compare to chessboard.js algorithmic implementation
    const chars = [
        [
            ["R", "♜", "d"],
            ["N", "♞", "d"],
            ["B", "♝", "d"],
            ["Q", "♛", "d"],
            ["K", "♚", "d"],
            ["B", "♝", "d"],
            ["N", "♞", "d"],
            ["R", "♜", "d"]
        ],
        [
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"],
            ["P", "♟", "d"]
        ],
        [
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"],
            ["P", "♙", "l"]
        ],
        [
            ["R", "♖", "l"],
            ["N", "♘", "l"],
            ["B", "♗", "l"],
            ["Q", "♕", "l"],
            ["K", "♔", "l"],
            ["B", "♗", "l"],
            ["N", "♘", "l"],
            ["R", "♖", "l"]
        ]
    ]
    const cnts = {
        "d": {
            "R": 0,
            "N": 0,
            "B": 0,
            "Q": 0,
            "K": 0,
            "P": 0
        },
        "l": {
            "R": 0,
            "N": 0,
            "B": 0,
            "Q": 0,
            "K": 0,
            "P": 0
        }
    }
    const dims = game_state["ui"]["dimensions"]
    for (var j = 0; j < dims[1]; j++) {
        for (var i = 0; i < dims[0]; i++) {
            if (j == 0 || j == 1 || j == dims[1] - 1 || j == dims[1] - 2) { // juxtapose similar requirements in newArbitraryGame()
                let piece = document.createElement("div")
                let cim = i % (chars[0].length) // if board dimensions exceed 8
                let cjm = j // j==0 && j==1
                if (j == dims[1] - 1) {
                    cjm = 2
                }
                if (j == dims[1] - 2) {
                    cjm = 3
                }
                let p = chars[cjm][cim]
                let pid = p[0]
                let pchar = p[1]
                let pcol = p[2]
                //cnts[pcol][pid]=cnts[pcol][pid]+1                             // JS idiom
                cnts[pcol][pid] += 1
                piece.id = pid + String(cnts[pcol][pid]) + pcol
                piece.innerHTML = p[1]
                if (pcol == "d") { //d|l?: indexOf()==-1 means character is missing from string
                    //if (ids[j][i].indexOf("d") !== -1) {                                 //d|l?: indexOf()==-1 means character is missing from string
                    piece.style.color = game_state["ui"]["utf_piece_dark_color"]
                } else {
                    piece.style.color = game_state["ui"]["utf_piece_lite_color"]
                }
                document.getElementById("board").appendChild(styleUTF8Pieces(game_state, piece))
            }
        }
    }
} // drawArbitraryUTF8Pieces() : to browser via HTML and CSS, for goofy sized: 13x10,300x500,etc.; boards


function drawStandardUTF8Pieces(game_state) {
    // sometimes, if your interests are finite, it makes sense to simply list them manually
    //    compare to chessboard.js algorithmic implementation
    let chars = [
        ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
        ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
        ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
        ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
    ]
    let ids = [
        ["R1d", "N1d", "B1d", "Q1d", "K1d", "B2d", "N2d", "R2d"],
        ["P1d", "P2d", "P3d", "P4d", "P5d", "P6d", "P7d", "P8d"],
        ["P1l", "P2l", "P3l", "P4l", "P5l", "P6l", "P7l", "P8l"],
        ["R1l", "N1l", "B1l", "Q1l", "K1l", "B2l", "N2l", "R2l"]
    ]
    for (var j = 0; j < ids.length; j++) {
        for (var i = 0; i < ids[0].length; i++) {
            let piece = document.createElement("div")
            piece.id = ids[j][i]
            piece.innerHTML = chars[j][i]
            document.getElementById("board").appendChild(styleUTF8Pieces(game_state, piece))
        }
    }
} // drawStandardUTF8Pieces() : to browser via HTML and CSS, standard: 8x8; board


function load_game(game_state) {
    let is_new_game = true
    let board = game_state["board"]
    if (is_new_game) {
        // here are 3 ways to update the board to show a new game
        // 1. modify and replace the same variable
        //board = new_game(board)  // game_state update
        //game_state["board"]=board
        // 2. create a new variable and replace the old variable with the new value
        //new_game_board= new_game(board)
        //game_state["board"]= new_game_board
        // 3. just call the function that will return the new value
        //game_state["board"] = new_game(board)
        game_state["board"] = newArbitraryGame(board)
    } else {
        // optional: needs store, find and load functions for saved games
    }
    return game_state
} // load_game() : loaded or composed to data structure in memory


function drawSetPieces(game_state) {
    drawSetPlayable(game_state) // DOM update
    drawSetMaterial(game_state) // DOM update
} // drawSetPieces() : to browser via HTML and CSS


function play(game_state) {
    game_state = build_board(game_state) //game_state update
    //loadPieceImages() // from assets
    drawBoard(game_state) // draw* functions modify the DOM, drawing to browser via HTML and CSS
    drawMaterial(game_state) // DOM update
    //drawArbitraryUTF8Pieces(game_state) // DOM update
    drawStandardUTF8Pieces(game_state) // DOM update
    game_state = load_game(game_state) // game_state update
    drawSetPieces(game_state) // DOM update
    GLOB_game_state = safe_copy(game_state) // intentional GLOBAL update with local value
} // play(): play the game defined by gamestate


let GLOB_game_state = {} // GLOBAL for mousedown event, create datastructure in memory
function onit() {
    let game_state = {} // localised GLOBAL
    // Decide randomly which player is what color
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    game_state["dark_or_lite"] = ["l", "d"][parseInt(Math.random() * 2)] // randomly choose team
    game_state["material"] = [
        [
            [],
            []
        ],
        [
            [],
            []
        ]
    ] // store piece material
    game_state["click_state"] = [] // Store user input
    // define the ui
    game_state["ui"] = {}
    game_state["ui"]["dimensions"] = [8, 8]
    //game_state["ui"]["dimensions"]=[4,4]                             // (new|draw)Arbitrary..()
    //game_state["ui"]["dimensions"]=[20,31]                           // (new|draw)Arbitrary..()
    let peering_height = 70 // px
    game_state["ui"]["offset"] = [10, peering_height + 10]
    game_state["ui"]["sq"] = 60
    game_state["ui"]["font_size"] = 60
    game_state["ui"]["dark_color"] = "#345151" //"#9D40EF"                // entropy determines the number of colors able to represent
    game_state["ui"]["lite_color"] = "#926E82" //"#7ED4C0"                // html color picker
    game_state["ui"]["utf_piece_dark_color"] = "#698A8A" //"gray"         // entropy determines the number of colors able to represent
    game_state["ui"]["utf_piece_lite_color"] = "#9DA880" //"lightgray"    // html color picker: ex. https://paletton.com/
    //game_state["ui"]["dark_color"]="Gray"                            // colors by name: https://www.w3schools.com/html/html_colors.asp
    //game_state["ui"]["lite_color"]="LightGray"
    //game_state["ui"]["utf_piece_dark_color"]="black"
    //game_state["ui"]["utf_piece_lite_color"]="white"

    // peering
    peering(game_state)

    // play
    play(game_state)
} // onit() : gets everything started by defining some gamestate
//onit() // i am


function peering(game_state) {
    drawPeeringUI()
}


function p2p_message_received(ev) {
    //ex. ["mvPce",tile_id""], ["chat",user_id"",msg""]
    let game_state = safe_copy(GLOB_game_state) // localised GLOBAL
    console.log("P2PMsgRECV:", ev)
    let dada = JSON.parse(ev.data)
    if (dada[0] === "chat") {
        let ci = 0
        let log = document.getElementById("log")
        let user_id = dada[1]
        let chat_msg = dada[2]
        let chat_line = ci + ": " + user_id + " : " + chat_msg
        log.value = log.value + "\n" + chat_line
        log.scrollTop = 99999
        console.log("RECV CHAT:", chat_line)
    } else if (dada[0] === "rmMat") {
        let tile_id = dada[1]
        game_state["click_state"] = dada[2]
        game_state = remove_material(game_state, tile_id)
    } else if (dada[0] === "rmPce") {
        let tile_id = dada[1]
        game_state["click_state"] = dada[2]
        game_state = remove_piece(game_state, tile_id)
    } else if (dada[0] === "mvMat") {
        let tile_id = dada[1]
        game_state["click_state"] = dada[2]
        game_state = dropMaterial(game_state, tile_id)
    } else if (dada[0] === "mvPce") {
        let tile_id = dada[1]
        game_state["click_state"] = dada[2]
        game_state = dropPiece(game_state, tile_id)
    }
    drawSetPieces(game_state)
    GLOB_game_state = safe_copy(game_state) // intentional GLOBAL update with local value
}


// the act of programming is like the act of animation, everything is intentional
// https://memegenerator.net/img/instances/85327882/not-sure-if-i-am-good-at-programming-or-good-at-googling.jpg
// no one knows what they're doing: https://www.youtube.com/watch?v=oo4H-u3UVhY
// https://www.destroyallsoftware.com/talks/wat
// https://learnxinyminutes.com/docs/javascript/
// https://database.lichess.org/


function loadPieceImages() {
    let sq = game_state["ui"]["sq"]
    // loop to first create dark pieces, then lite pieces
    for (var dOl = 0; dOl < 2; dOl++) {
        if (dOl == 0) {
            color = "d"
        } else {
            color = "l"
        }
        // create pawns
        for (var i = 0; i < 8; i++) {
            let piece = document.createElement("img")
            piece.id = "p" + (1 + i) + color // give the bloc a unique id so we can reference it later
            piece.src = "assets/Chess_p" + color + "t60.png"
            piece.style.position = "absolute" // tells the browser we will specify the exact position
            piece.style.height = sq // size
            piece.style.width = sq // size
            document.getElementById("board").appendChild(piece)
        }
        // create others and their duplicates
        others = ["r", "n", "b"] // order is always consistent
        for (var i = 0; i < others.length; i++) {
            current = others[i]
            // first piece
            let piece = document.createElement("img")
            piece.id = current + "1" + color // give the bloc a unique id so we can reference it later
            piece.src = "assets/Chess_" + current + color + "t60.png"
            piece.style.position = "absolute" // tells the browser we will specify the exact position
            piece.style.height = sq // size
            piece.style.width = sq // size
            document.getElementById("board").appendChild(piece)

            // second piece
            piece = document.createElement("img")
            piece.id = current + "2" + color // give the bloc a unique id so we can reference it later
            piece.src = "assets/Chess_" + current + color + "t60.png"
            piece.style.position = "absolute" // tells the browser we will specify the exact position
            piece.style.height = sq // size
            piece.style.width = sq // size
            document.getElementById("board").appendChild(piece)
        }
        // king and queen
        piece = document.createElement("img")
        piece.id = "k" + color // give the bloc a unique id so we can reference it later
        piece.src = "assets/Chess_" + "k" + color + "t60.png"
        piece.style.position = "absolute" // tells the browser we will specify the exact position
        piece.style.height = sq // size
        piece.style.width = sq // size
        document.getElementById("board").appendChild(piece)

        piece = document.createElement("img")
        piece.id = "q" + color // give the bloc a unique id so we can reference it later
        piece.src = "assets/Chess_" + "q" + color + "t60.png"
        piece.style.position = "absolute" // tells the browser we will specify the exact position
        piece.style.height = sq // size
        piece.style.width = sq // size
        document.getElementById("board").appendChild(piece)
    }
} // loadPieceImages() : to browser from image files via HTML and CSS



function print_board() {
    let board = safe_copy(GLOB_game_state["board"])
    for (j in board) {
        let out_line = []
        for (i in board[j]) {
            let el = board[j][i]
            out_line.push(el === "" ? "   " : el)
        }
        console.log(out_line)
    }
} // print_board() : for debug


function print_material() {
    let material = safe_copy(GLOB_game_state["material"])
    for (c in material) {
        for (j in material[c]) {
            let out_line = []
            for (i in material[c][j]) {
                let el = material[c][j][i]
                out_line.push(el === "" ? "   " : el)
            }
            console.log(out_line)
        }
    }
} // print_board() : for debug






/*
function snapshot(i) { return safe_copy(i) } // returns an immutable snapshot of a global variable at time of invocation
console.log("GLOBAL WAT:")
var GLOB_wat=[{"i":0,"d":1},{"i":1,"d":1},{"i":2,"d":1},{"i":3,"d":1}]
console.log("  SET:",snapshot(GLOB_wat))
//console.log("SET:",GLOB_wat)  // wat!?!, GLOBALS cause confusing console.log() output
function wat_glob_parent() {
  console.log("  BEF:",snapshot(GLOB_wat))
  for (i in GLOB_wat) {                               // inside loop over all elements of GLOB_wat
    ea=GLOB_wat[i]                                    //   would assume the values i want to loop over would go unchanged
    wat_glob_child(ea)                                // wat_glob_child() introduces mutability issues
  }
  console.log("  AFT:",snapshot(GLOB_wat))              // the GLOBAL value is now completely different by the time we leave the loop
}

function wat_glob_child(ea) {
  let i = ea["i"]
  let d = ea["d"]
  if (i < GLOB_wat.length-1) {                        // child using the GLOBAL
    next = GLOB_wat[i+1]                              // i even make a copy of an global object so i only modify that value stead the global value
    next["d"]=next["d"]+ea["d"]                       //    !! but in some langauges, like JS, this object is mutatable, or mutable
    console.log("   child: ea",ea,"next",next)        //    !!    meaning the changes i make to my local copy gets applied to the thing it was copied from
  }                                                   //    !!    changing the global value
}
wat_glob_parent()

console.log("GLOBAL LOCALISED:")
var GLOB_loc=[{"i":0,"d":1},{"i":1,"d":1},{"i":2,"d":1},{"i":3,"d":1}]
console.log("  SET:",snapshot(GLOB_loc))
function localised_glob_parent() {
  console.log("  BEF:",snapshot(GLOB_loc))
  let localised_glob=safe_copy(GLOB_loc)
  for (i in localised_glob) {                               // inside loop over all elements of GLOB_wat
    ea=localised_glob[i]                                    //   would assume the values i want to loop over would go unchanged
    localised_glob_child(ea)                                // wat_glob_child() introduces mutability issues
  }
  GLOB_loc=safe_copy(localised_glob)                        // intentional GLOBAL update
  console.log("  AFT:",snapshot(GLOB_loc))                    // the GLOBAL value is unchanged, as the algo required
}

function localised_glob_child(ea) {
  let i = ea["i"]                                     // index in global list
  let d = ea["d"]                                     // == 1
  let localised_glob=safe_copy(GLOB_loc)
  if (i < localised_glob.length-1) {
    next = localised_glob[i+1]                        // i make a copy of an element in the global so i only modify that value stead the global value
    next["d"]=next["d"]+ea["d"]                       //  +ea['d'] == +1
    console.log("   child: ea",ea,"next",next)        // the next ea would be the value of next if using GLOBALs
    //GLOB_loc=safe_copy(localised_glob)              // even intentionally introducing an error into the global is fine
    // the GLOBAL value is now completely different but parent is using a local copy so ea is only dependant on the local values
    //console.log("\tERR with err:","next_i",i+1,"next_d should be "+(next["d"]+1),snapshot(GLOB_loc))  //  next['d']+1 ==next['d]+ea['d'] due ea['d']==1
  }
}
localised_glob_parent()
*/




/*
 * modev
    eductional
      companion to a document with broader programming documentation
      a digitally refereed game of chess adds a great deal of complexity and lines of code
        rather a strict virtualisation of a literal chess board provides a good balance
          covers interesting though straightforward and essential novice friendly programming concepts
          allows for further algorithm development in the refereed game
          allows for contrapoint to the complexity and feature implementation considerations
            "I wish this chessboard could..."
              "How could we implement that feature?  What's a good place to start?"
              or "Look at how I implemented that feature; it required me to write __ new functions and __ lines of code were added. I also needed to ..."
          also i think there's humor in the absurdity of limiting our chessboard to analogues to reality like allowing pieces to jump anywhere on the board 
            bringing attention to subtle complexity
          it is good to have a done goal in mind
            extension is always possible but an endless endeavor is just that

 * UI
   board is an 8x8 grid of tiles               _____tile_______        ______board_____________material_______
      each board tile has 3 parts             | ____________   |\     |  _______________     _______________  |
        top layer                             | \  click    \  | \    | |_|_|_|_|_|_|_|_|   |_|_|_|_|_|_|_|_| | lite material row0
          transparent click overlay           | _\  overlay  \ |  \   | |_|_|_|_|_|_|_|_|   |_|_|_|_|_|_|_|_| | lite material row1
        middle layer                          | \ \___________\|   \  | |_|_|_|_|_|_|_|_|   |_|_|_|_|_|_|_|_| | dark material row0
          the pieces                          | _\  pieces  \  |    \ | |_|_|_|_|_|_|_|_|   |_|_|_|_|_|_|_|_| | dark material row1
        bottom layer                          | \ \__________\ |     \| |_|_|_|_|_|_|_|_|__                   |
          the board                           |  \   bloc   \  |      \ |_|_|_|_|_|_|_|_   \___               |
          the material collection             |   \__________\ |       \|_|_|_|_|_|_|_|_|\     \_____         |
   material has same tile structure as board  |________________|__________|_|_|_|_|_|_|_| |          \___     |
      2 sets of 2x8 grids                                             |___________________|              \____|
        1 2x8 grid for each color                                                         |______tile______\
          8 tiles wide, 1 for each piece                                                  |  __________    |
          2 rows, 1 accounts for pawns and 1 accounts for others                          |  \ click   \   |
   tile                                                                                   |   \ overlay \  | all ui tiles have a click overlay and a bloc
      click overlay                                                                       |  __\_________\ |   but ui pieces are only present
        goes unchanged after initialisation                                               |  \         \   |     when a piece is present
          allows for easily collecting fixed coordinates with each click                  |   \  bloc   \  |       in game_state board or material
            otherwise you would need a check                                              |    \_________\ |     the indexes of the piece
              if clicked target is a piece or bloc                                        |________________|       match the coordinates of the tile
            mouse events have a target property
              event.target.id gives the id of the HTML element the mouse is moving over or clicked
                if elements are stacked at the mouse coordinates at the moment of the event
                  then the target is the one with the largest z-index value (top of the stack)
      pieces
        appearance remains unchanged after initialisation
        but coordinates change depending on board or material placement
        only present in the ui when present in matching coordinates with game_state board or material
      bloc
        goes unchanged after initialisation
        is a visual backdrop

 * Data Structures
  GLOBAL
    globals are variables accessible and modifiable from any function
      this can have unexpected consequences if a function undesirably changes a value in the global variable
      we require a global game_state due to using the browser's mouse events
    game_state : OBJ{} : key value map containing the game's data
      ["ui"]: OBJ{} : key value map configuring the user interface
      ["board"] : LIST[LIST[],] : 2 dimensional list of lists representing the game board
          pieces get placed in board i,j coordinates
            piece : ""id with empty "", ex. "Q1d"
      ["dark_or_lite"] : randomly chooses player's team
      ["click_state"] : LIST[] : list of board piece ids under click overlay that is clicked
      ["meta"]["empty_board_piece"] : ["","",""] : 0:piece,1:team,2:el_id
      ["material"] :LIST[] : list of lists, 2 rows each for 2 colors
          [   [ [],[] ]  ,    [ [],[] ]   ]
          [ dark_material, lite_material ]
            COLOR_material : [material_row1, material_row2]
            material_row*: [] | [[],..] : empty list or list of piece lists
          ex.  [ [[[…],[…],[…],[…],[…],[…],[…],[…]] , [[…],[…]]] , [[[…],[…],[…]] , []] ]
                        len:8                         len:2        len:3            len:0
                 |---------------------lite-------------------|   |----dark----------|
               3 of  dark's pieces are in material  ( 3 in row one and 0 from row two )
              10 of lite's pieces are in material  ( 8 that filled row one and 2 from row two )
          ex.  lite material row0     [ [["…","…","…","…","…","…","…","…"],
               lite material row1       ["…","…"]] ,
               dark material row0      [["…","…","…"],                 "…": piece list : ""piece; ex. "Q1d" for original dark Queen
               dark material row1       []] ]


  * Algorithms
      ignoring builtins, safe_copy(), and removeIndex()
        ->onit()                                                              	  // create a virtual chessboard
            play()																																// game_state update
							build_board()                                                       // game_state update
              //loadPieceImages()                                                 // DOM update
              drawBoard()                                                         // DOM update
                  drawBloc([i,j])                                                     // board_dims:[i,j]  // DOM update
                    styleBloc(i,j,click_overlay)                                          // DOM update
                        styleBlocBackgroundColor(game_state,i,j,bloc)                         // DOM update
              drawMaterial()                                                      // DOM update
                  drawMaterialBloc([c,i,j])                                           // material_dims: [c,i,j]  // DOM update
                      styleMaterialBloc(c,i,j,bloc)                                       // DOM update
              					get_material_offset()																									// readonly
							drawStandardUTF8Pieces()                                            // DOM update
                  styleUTF8Pieces(piece)                                              // DOM update
              load_game()                                                         // game_state update
                  new_game(board)                                                     // game_state update
                  //newArbitraryGame(board)                                           // game_state update
              drawSetPieces()                                                     // DOM update
                  drawSetPlayable()                                                   // DOM update
                  drawSetMaterial()                                                   // DOM update

        ->HandleMouseMove()                                                  // click_state and DOM update
        ->HandleMouseDown()                                                  // game_state and click_state and DOM update
              get_piece(tile_id)                                                  // read only
              remove_material(game_state,tile_id)                                   // game_state and DOM update
                  drawSetPieces()                                                     // DOM update
                      drawSetPlayable()                                                   // DOM update
                      drawSetMaterial()                                                   // DOM update
              remove_piece(game_state,tile_id)                                               // game_state update
              dropMaterial(game_state,tile_id)                                   // game_state update
              swapPiece(tile_id,click_state)                                       // game_state and DOM update
                  get_piece(tile_id)                                                  // read only
                  remove_material(game_state,tile_id)                                   // game_state and DOM update
                      drawSetPieces()                                                     // DOM update
                          drawSetPlayable()                                                   // DOM update
                          drawSetMaterial()                                                   // DOM update
                  remove_piece(game_state,tile_id)                                               // game_state update
                  dropPiece(game_state,tile_id)                                      // game_state update
              dropPiece(game_state,tile_id)                                      // game_state update
              drawSetPieces()                                                     // DOM update
                  drawSetPlayable()                                                   // DOM update
                  drawSetMaterial()                                                   // DOM update


// empty board tile and isObjEmpty() wat
      remove_piece()
      build_board()
        //row.push({}) // empty board tile
          requires wat javascript
            !isObjEmpty() => (JSON.stringify(tile) != JSON.stringify({}))
        //row.push("") // empty board tile
          requires type reassignment on the elements of board
            reassignment may have knock on benefits?
            but i prefer to keep the element types consistent
        row.push([]) // empty board tile
          able to avoid was JS using [].length===0
        row.push(["","",""])
          [""piece,""team,""id] and checked for empty tiles with [][0]===""
  changing the empty board tile value from {} to something easier to check in Javacript will
    simplify the algorithm
    remove code
      ex. chessboard.js.isObjEmpty() can be inlined
  These are both good things
    making it easier to
      'hold the whole algorithm in your head'
      make changes or updates
    shrinks possible places where errors can occur


// concerns over using globals
  i usually avoid globals
    and like in this example will act as though they are local variables when i can
	implementation using the globals from any function
    does allow you to avoid having to pass a psuedo global object through the function tree
      and intentionally updating the global after being passed through
        ex.
          the onit() function for chessboard.js
            build_board()                                // game_state update
            //loadPieces()                               // from assets
            drawBoard()                                  // draw* functions modify the DOM, drawing to browser via HTML and CSS
            drawMaterial()                               // DOM update
            drawStandardUTF8Pieces()                             // DOM update
            load_game()                                  // game_state update
            drawSetPieces()                              // DOM update
          vs onit() of purish_chessboard.js
            game_state=safe_copy(GLOB_game_state)      // localised GLOBAL
            game_state=build_board(game_state)           // game_state update
            //loadPieceImages()                          // from assets
            drawBoard(game_state)                        // draw* functions modify the DOM, drawing to browser via HTML and CSS
            drawMaterial(game_state)                     // DOM update
            drawStandardUTF8Pieces(game_state)                   // DOM update
            game_state=load_game(game_state)             // game_state update
            drawSetPieces(game_state)                    // DOM update
            GLOB_game_state=safe_copy(game_state)      // intentional GLOBAL update with local value
    but globals also allow for difficult bugs to propogate
      by allowing any function to change state at anytime
        ex. if i have a parent function and child function that both utilise a global value
          if the child function requires a small change to that value in its use and changes it for its purpose
          then when returning back to the parent function
            that global value may have been changed to the modified version the child function needed
            and now causes an error in the parent function
        see: wat_glob_parent() vs localised_glob_parent()

    purish_chessboard.js is purish because it creates subsets of the algorithm that are pure
      but also utilises globals
        when they are a built in necessity
        or when its beneficial
        but always with intent
    we still treat certain globals as globals
      window[]
      document[] : document.getElementById()


// programming language idioms
     example in purish_chessboard.js.safe_copy()
     JS if idiom
       if we want to change a 0 to a 1 or a 1 to a 0, 'flip a bit'
        we can use this if statement
          if ( b === 0 ) {
             b = 1
          else {
             b = 0
          }
        or we can use a JS idiom
          let b=0
          b = b===0 ? 1 : 0 // reassigned to 1
          syntax: variable equals the result of the following condition preceeding the question mark
                    if condition is true then use the value to the left of the colon
                    if the condition is false use the value to the right of the colon
          ex. let c = 17
              let msg = isPrime(c) ? String(c)+" is prime" : String(c)+" is composite"  // msg==="17 is prime"
              let d = 15
              let msg = isPrime(d) ? String(d)+" is prime" : String(d)+" is composite"  // msg==="15 is composite"


// variable declaration in javascript
   let, const, var
   let and const are scoped to the enclosing brackets where it is defined
      let allows later reassignmet, but without redundant let
        ex.
          function someFunc() {
            let a=17
            a=3 // allows reassignment
            let b=3
            let b=4 // ERR : unable to redeclare a previous let variable
          }
      const disallows reassignment
        communicates to anyone reading this variable is constant
          can help with understanding behaviour or debugging
        ex.
          function someFunc() {
            const a=17
            a=3 // ERR
          }
     scoping ex.
       function someFunc() {
         let a=17 // scoped by the function
         if (true) {
           let b=3
           var c=3
         }
         console.log(a+c) // can use vars from outside scope of declaration
         console.log(a+b) // ERR:b undefined: unable to use lets from outside scope of declaration
       }
   var is scoped to the function
     if declared outside of any function than is global variable
     ex.
       function someFunc() {
         var a=17 // scoped by the function
         if (isTrue) {
           var b=3
         }
         console.log(a+b) // can use vars from outside scope of declaration
       }
   any declaration without one of the above is automatically a global variable
     function someFunc() {
       a=17 // global
     }

// infinite loops
   in drawArbitraryUTF8Pieces()
    we reassign i to the length of our character set
      duplicating pieces based on the modulo of the index and length of character set
        we use a variable: mi, modulo_index; to determine which piece to set
          im=i%(pieces.length)
          pieces[im]
        if instead we used i directly via reassignment we would be in an infinite loop
          i=i%(pieces.length)
        we could also just use the calculation
          pieces[i%pieces.length]


 // print debugging
    see: print_board() and print_material()
    ex.

 // testing
    importance
    the refereed is more needing of tests because the algorithms are a bit more complex
    examples

*/
