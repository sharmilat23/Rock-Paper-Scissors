let userscore=0;
let compscore=0;
let userwin=false;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const compchoicedisplay=document.querySelector("#comp-choice");
const user=document.querySelector("#yourscore");
const comp=document.querySelector("#compscore");

const showWinner=(userwin,compchoice,userchoice) =>{
    if(userwin){
        userscore++;
        user.innerText=userscore;
        msg.innerText=("YOU WIN!");
        compchoicedisplay.innerText=(`Computer choice: ${compchoice}`);
        msg.style.backgroundColor="green";
        msg.style.color="azure";
    }
    else{
        compscore++;
        comp.innerText=compscore;
        msg.innerText=("YOU LOSE!");
        compchoicedisplay.innerText=(`Computer choice: ${compchoice}`);
        msg.style.backgroundColor="red";
        msg.style.color="azure";
    }
}
const gencompchoice=()=>{
    let options=["rock","scissors","paper"];
    const index=Math.floor(Math.random(options) *3);
    return options[index];
}

const game= (userchoice )=>{
    const compchoice= gencompchoice();
    if (userchoice===compchoice){
        draw(userchoice,compchoice);
    }
    else{
    if(userchoice==="rock"){
        userwin = compchoice==="paper"? false: true;
    }
    else if(userchoice==="scissors"){
        userwin=compchoice==="rock"? false: true;
    }
    else{
        userwin= compchoice==="rock"? true: false;
    }
    showWinner(userwin,compchoice,userchoice);
}
}

const draw=(userchoice,compchoice)=>{
    console.log("Draw game");
    msg.innerText=("Game was a Draw!");
    compchoicedisplay.innerText=(`Both chose: ${compchoice}`);
    msg.style.backgroundColor="Yellow";
    msg.style.color="black";

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        console.log("choice selected "+ userchoice);
        game(userchoice);
    });
});
