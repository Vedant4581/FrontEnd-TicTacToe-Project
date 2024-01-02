let arr=['','','','','','','','','']
let boxes=document.querySelectorAll(".box")
let res=document.querySelector(".result")
let tur=document.querySelector(".turn")
let player='X'
let arr1=[]
let arr2=[]
let gameActive=true
const handleClick=(i)=>{
    if(arr[i]==='' && gameActive){
        if(player==='X'){
            arr1.push(i)
            arr[i]=`${i}`
            boxes[i].classList.add("x")
            if(checkWin(arr1)){
                gameActive=false
                tur.innerHTML="FINISHED"
                res.innerHTML="player x wins"
                console.log("player x wins")
            }
            else{
                player='O'
                tur.innerHTML="Player O turn"
            }
        }
        else{
            arr2.push(i)
            arr[i]=`${i}`
            boxes[i].classList.add("o")
            if(checkWin(arr2)){
                gameActive=false
                tur.innerHTML="FINISHED"
                res.innerHTML="player o wins"
                console.log("player o wins")
            }
            else{
                player='X'
                tur.innerHTML="Player X turn"
            }
        }
    }
    if(gameActive){checkDraw(arr)}
}

const checkDraw=()=>{
    let a=false;
    for(it of arr){
        if(it===''){
            a=true;
        }
    }
    if(!a){
        gameActive=false;
        tur.innerHTML="FINISHED"
        res.innerHTML="DRAW"
    }
    return a
}

const checkWin=(a)=>{
    const winCombos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(it of winCombos){
        if(a.includes(it[0]) && a.includes(it[1]) && a.includes(it[2])){
            return true
        }
    }
    return false;
}

const reset=()=>{
    arr=['','','','','','','','','']
    arr1=[]
    arr2=[]
    gameActive=true
    player='X'
    tur.innerHTML="Player X turn"
    res.innerHTML="Not Yet Finished..."
    for(it of boxes){
        it.classList.remove("x")
        it.classList.remove("o")
    }
}