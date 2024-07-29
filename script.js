let b=document.querySelectorAll(".box");
let r=document.querySelector(".restart_game");
let n=document.querySelector(".new_game");
let m=document.querySelector(".msg");

let turn=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const reset_game=()=>{
    turn=true;
    for(let box of b){
        box.disabled=false;
        box.innerText="";
    }
    m.classList.add("hide");
}
const disable=()=>{
    for(let box of b){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    message.innerText=`winner is ${winner}`;
    m.classList.remove("hide");
    disable();
}
const checkwinner =()=>{
    for(let patten of winpattern){
        console.log(patten[0],patten[1],patten[2]);
        console.log(b[patten[0]].innerText,b[patten[1]].innerText,b[patten[2]].innerText);
        let pos1= b[patten[0]].innerText;
        let pos2=b[patten[1]].innerText;
        let pos3=b[patten[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
}
b.forEach((box)=>{
    box.addEventListener("click",()=>{
          console.log("box is clicked")
          if(turn){
            box.innerText="o";
            turn=false;
          }
          else{
            box.innerText="x";
            turn=true;
          }
          box.disabled=true;
          checkwinner();
    })
})
n.addEventListener("click",reset_game);
r.addEventListener("click",reset_game);
