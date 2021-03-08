const optionUser = document.querySelectorAll(".option-item");
const scoreText = document.querySelector(".score-text");
let score = localStorage.getItem("score");


//Step 2
const tagMain = document.querySelector(".main");
const selectedOptionSection = document.querySelector(".selected-option");
const imgOptionUser = document.querySelector(".img-option-user").firstElementChild;
const borderOptionUser = document.querySelector(".img-option-user");


//Step 3
const imageDisabled = document.querySelector(".img-option-disabled");
const resultDiv = document.querySelector(".result");
const textResult = document.querySelector(".result").firstElementChild;
const optionBotBorder = document.querySelector(".img-option-bot");
const imgOptionBot = document.querySelector(".img-option-bot").firstElementChild;



window.addEventListener("load", () =>{
    scoreText.textContent = score;
})

const saveScore = (scoreUser)=>{
    localStorage.setItem("score", scoreUser);
    scoreText.textContent = localStorage.getItem("score");
}


//STATUS: 0 = PERDIO  // STATUS: 1 = GANO // STATUS: 2 = EMPATE
const step3 = (status, botOption)=>{
    
    imageDisabled.style.display = "none";
    optionBotBorder.style.display = "flex";
    optionBotBorder.id = botOption;
    imgOptionBot.setAttribute("src", `images/icon-${botOption}.svg`);


    if(status === 0) {
        textResult.textContent = "YOU LOSE";
        if(score > 0) score--;
        else score = 0;
        
    }
    else if(status === 1){
        textResult.textContent = "YOU WIN";
        score++;
        // scoreText.textContent = score;
    }
    else if(status === 2){
        score = score;
        textResult.textContent = "DRAW";
    }

    saveScore(score);
    resultDiv.style.display = "block";
}

const verifyOptions = (user, bot)=>{

    if(user == bot){
        setTimeout(()=>{
            step3(2, bot)
        }, 1000)
    }

    else if(user == "rock"){

        if(bot == "paper"){
            setTimeout(()=>{
                step3(0, bot)
            }, 1000)
        }else if(bot == "scissors"){
            setTimeout(()=>{
                step3(1, bot)
            }, 1000)
        }
    }

    else if(user == "paper"){

        if(bot == "scissors"){
            setTimeout(()=>{
                step3(0, bot)
            }, 1000)
        }else if(bot == "rock"){
            setTimeout(()=>{
                step3(1, bot)
            }, 1000)
        }
    }

    else if(user == "scissors"){

        if(bot == "rock"){
            setTimeout(()=>{
                step3(0, bot)
            }, 1000)
        }else if(bot == "paper"){
            setTimeout(()=>{
                step3(1, bot)
            }, 1000)
        }
    }
}



const step2 = (optionUser, optionBot)=>{
    tagMain.style.display = "none";
    imgOptionUser.setAttribute("src", `images/icon-${optionUser}.svg`);
    borderOptionUser.id = optionUser;
    selectedOptionSection.style.display = "flex";

    verifyOptions(optionUser, optionBot);

}

for(let i = 0; i < optionUser.length; i++){

       optionUser[i].addEventListener("click", (e)=>{

        let currentTarget = e.currentTarget;
        let selectedOption = currentTarget.id;


        let numRandom = parseInt(Math.random()*3);
        let options = ["paper", "scissors", "rock"];
        let botOption = options[numRandom];
        step2(selectedOption, botOption);
    })
}


let buttonPlay = document.querySelector(".button-play");

buttonPlay.addEventListener("click", ()=>{
    imageDisabled.style = "block";
    tagMain.style.display = "block";
    resultDiv.style.display="none";
    selectedOptionSection.style.display = "none";
    optionBotBorder.style.display = "none";

})



//RULES
const buttonRules = document.querySelector(".rules");
const menuRules = document.querySelector(".rules-menu");
const buttonExitRules = document.getElementById("close-menu-button");
const backgroundBlack = document.querySelector(".background-black");
let menuIsOpen = false;

buttonRules.addEventListener("click", ()=>{
    menuRules.style.visibility = "visible";
    menuRules.style.opacity = "1";
    backgroundBlack.style.opacity = ".6";
    backgroundBlack.style.visibility = "visible";

})

buttonExitRules.addEventListener("click", ()=>{
    setTimeout(()=>{menuRules.style.visibility = "hidden"; backgroundBlack.style.visibility="hidden"}, 1000);
    menuRules.style.opacity = "0";
    backgroundBlack.style.opacity = "0";
})




