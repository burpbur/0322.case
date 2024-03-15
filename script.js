
// ===========玩家
function searchGesture() {
    const gestureCode = document.getElementById('ge').value;
    switch (parseInt(gestureCode)) {
        case 1:
            console.log('剪刀');
            msgP.innerText = '玩家:剪刀'
            break;
        case 2:
            console.log('石頭');
            msgP.innerText = '玩家:石頭'
            break;
        case 3:
            console.log('布');
            msgP.innerText = '玩家:布'
            break;
        default:
            alert('???')
        //     //         console.log(`${<img src="https://placehold.co/400x300/png"></img>}`);
        //     document.write('<img src="https://placehold.co/400x300/png">');
    }
    // }    
    // console.log(parseInt(gestureCode));
    // // =========電腦
    //  function searchComputerCode() {
    const computerCode = Math.floor(Math.random() * 3) + 1;
    switch (parseInt(computerCode)) {
        case 1:
            console.log('剪刀');
            msgC.innerText = '電腦:剪刀'
            break;
        case 2:
            console.log('石頭');
            msgC.innerText = '電腦:石頭'
            break;
        case 3:
            console.log('布');
            msgC.innerText = '電腦:布'
            break;
    }
    if (parseInt(gestureCode) == 1 && parseInt(computerCode) == 2 || parseInt(gestureCode) == 2 && parseInt(computerCode) == 3 || parseInt(gestureCode) == 3 && parseInt(computerCode) == 1) {
        // res.innerText=("你出的是（" + gestureCode + "） 電腦出的是（" + computerCode + "）");
        res.innerText = "你輸了！再來一次吧";
        //System.out.println();
    } else if (parseInt(gestureCode) == parseInt(computerCode)) {
        // res.innerText=("你出的是（" + gestureCode + "） 電腦出的是（" + computerCode + "）");
        res.innerText = "平局！再來一次吧";
        // System.out.println();
    } else {
        // res.innerText=("你出的是（" + gestureCode + "） 電腦出的是（" + computerCode + "）");
        res.innerText = "恭喜你贏了！！！";
        // res.innerText="你終於戰勝了電腦，遊戲結束！";;

    }
}
// console.log(parseInt(computerCode));
// // =============分輸贏
// =====規則
    const rulesContainer = document.querySelector(".rules-container");
    const rulesBtn = document.getElementById("rules-btn");
    let showRules = true;

    rulesBtn.addEventListener("click", () => {
        showRules = !showRules;
        console.log(showRules);
        if (showRules) {
            rulesBtn.textContent = "收起規則";
            rulesContainer.style.display = "block";
        } else {
            rulesBtn.textContent = "規則簡介";
            rulesContainer.style.display = "none";
        }
    });