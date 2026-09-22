let isPlayerTurn = true;
let ai_col = null;
let board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];
            
const colPos = [70,166,259,354,448,542,636];
            
function reset(){
    board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];
    load();
}
            
function dropPlayer(col){
    if(isPlayerTurn){
        if(col>=0 && col<=6){
            for(let i=5;i>=0;i--){
                if(board[i][col]==0){
                    board[i][col]=1;
                    break;
                }
            }
        }
        isPlayerTurn = false;
        console.log(board);
        load();
    }
}

function aiTurn(){
    if((ai_col!=null) && (!isPlayerTurn)){
        if(col>=0 && col<=6){
            for(let i=5;i>=0;i--){
                if(board[i][ai_col]==0){
                    board[i][ai_col]=2;
                    break;
                }
            }
        }
        ai_col = null;
        isPlayerTurn = true;
        console.log(board);
        load();
    }
}

function load(){
    const container = document.getElementById("pieces");
    container.innerHTML = "";

    for(let i=5;i>=0;i--){
        for(let j=0;j<7;j++){
            if(board[i][j]==1){
                let newDiv = document.createElement("div");
                newDiv.classList.add("playerPiece");
                newDiv.style.top = getRowTop(i) + "px";
                newDiv.style.left = colPos[j] + "px";
                container.appendChild(newDiv);
            }else if(board[i][j]==2){
                let newDiv = document.createElement("div");
                newDiv.classList.add("aiPiece");
                newDiv.style.top = getRowTop(i) + "px";
                newDiv.style.left = colPos[j] + "px";
                container.appendChild(newDiv);
            }else{}
        }
    }
}

const startTop = 26;
const cellSize = 80;
const spacing = 9;
function getRowTop(row){
    return startTop + row * (cellSize + spacing);
}