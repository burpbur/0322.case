function clearinput(){
    ge.value='';
}
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

function modalOpen(){
    modal.style.display = "block";
}
function modalClose(){
    modal.style.display = "none";
}
myBtn.addEventListener('click',searchGesture)
myBtn.addEventListener('click',modalOpen)
span.addEventListener('click',modalClose)
// ==================
function searchGesture() {
    const gestureCode = document.getElementById('ge').value;
    switch (parseInt(gestureCode)) {
            case 1:
            console.log('剪刀');
            msgP.innerText = '玩家:剪刀';
            document.getElementById('warningPic').setAttribute ('src','./img/剪刀.png');
            break;
            case 2:
            console.log('蛇');
            msgP.innerText = '玩家:蛇';
            document.getElementById('warningPic').setAttribute ('src','./img/蛇.png');
            break;
            case 3:
                console.log('人');
                msgP.innerText = '玩家:人';
                document.getElementById('warningPic').setAttribute ('src','./img/人.png');
                break;
            case 4:
                console.log('樹');
                msgP.innerText = '玩家:樹';
                document.getElementById('warningPic').setAttribute ('src','./img/樹.png');
                break;
            case 5:
                console.log('狼');
                msgP.innerText = '玩家:狼';
                document.getElementById('warningPic').setAttribute ('src','./img/狼.png');
                break;
            case 6:
                console.log('海綿');
                msgP.innerText = '玩家:海綿';
                document.getElementById('warningPic').setAttribute ('src','./img/海綿.png');
                break;
            case 7:
                console.log('布');
                msgP.innerText = '玩家:布';
                document.getElementById('warningPic').setAttribute ('src','./img/布.png');
                break;
            case 8:
                console.log('空氣');
                msgP.innerText = '玩家:空氣';
                document.getElementById('warningPic').setAttribute ('src','./img/空氣.png');
                break;
            case 9:
                console.log('水');
                msgP.innerText = '玩家:水';
                document.getElementById('warningPic').setAttribute ('src','./img/水.png');
                break;
            case 10:
                console.log('龍');
                msgP.innerText = '玩家:龍';
                document.getElementById('warningPic').setAttribute ('src','./img/龍.png');
                break;
            case 11:
                console.log('惡魔');
                msgP.innerText = '玩家:惡魔';
                document.getElementById('warningPic').setAttribute ('src','./img/惡魔.png');
                break;
            case 12:
                console.log('閃電');
                msgP.innerText = '玩家:閃電';
                document.getElementById('warningPic').setAttribute ('src','./img/閃電.png');
                break;
            case 13:
                console.log('手槍');
                msgP.innerText = '玩家:手槍';
                document.getElementById('warningPic').setAttribute ('src','./img/槍.png');
                break;
            case 14:
                console.log('石頭');
                msgP.innerText = '玩家:石頭';
                document.getElementById('warningPic').setAttribute ('src','./img/石頭.png');
                break;
            case 15:
                console.log('火');
                msgP.innerText = '玩家:火';
                document.getElementById('warningPic').setAttribute ('src','./img/火.png');
                break;
            default:
                // alert('請填入1~15 !!!!!!!')
                document.getElementById('warningPic').setAttribute ('src','./img/1-15.png');
        //     //         console.log(`${<img src="https://placehold.co/400x300/png"></img>}`);
        //     document.write('<img src="https://placehold.co/400x300/png">');
    }
    // }    
    // console.log(parseInt(gestureCode));
    // // =========電腦
    //  function searchComputerCode() {
    const computerCode = Math.floor(Math.random() * 15) + 1;
    switch (parseInt(computerCode)) {
            case 1:
                 console.log('剪刀');
                 msgC.innerText = '電腦:剪刀';
                 document.getElementById('cpPic').setAttribute ('src','./img/剪刀.png');
            break;
             case 2:
                  console.log('蛇');
                  msgC.innerText = '電腦:蛇';
                 document.getElementById('cpPic').setAttribute ('src','./img/蛇.png');
            break;
            case 3:
                 console.log('人');
                 msgC.innerText = '電腦:人';
                 document.getElementById('cpPic').setAttribute ('src','./img/人.png');
            break;
            case 4:
                console.log('樹');
                msgC.innerText = '電腦:樹';
                document.getElementById('cpPic').setAttribute ('src','./img/樹.png');
                break;
            case 5:
                console.log('狼');
                msgC.innerText = '電腦:狼';
                document.getElementById('cpPic').setAttribute ('src','./img/狼.png');
                break;
            case 6:
                console.log('海綿');
                msgC.innerText = '電腦:海綿';
                document.getElementById('cpPic').setAttribute ('src','./img/海綿.png');
                break;
            case 7:
                console.log('布');
                msgC.innerText = '電腦:布';
                document.getElementById('cpPic').setAttribute ('src','./img/布.png');
                break;
            case 8:
                console.log('空氣');
                msgC.innerText = '電腦:空氣';
                document.getElementById('cpPic').setAttribute ('src','./img/空氣.png');
                break;
            case 9:
                console.log('水');
                msgC.innerText = '電腦:水';
                document.getElementById('cpPic').setAttribute ('src','./img/水.png');
                break;
            case 10:
                console.log('龍');
                msgC.innerText = '電腦:龍';
                document.getElementById('cpPic').setAttribute ('src','./img/龍.png');
                break;
            case 11:
                console.log('惡魔');
                msgC.innerText = '電腦:惡魔';
                document.getElementById('cpPic').setAttribute ('src','./img/惡魔.png');
                break;
            case 12:
                console.log('閃電');
                msgC.innerText = '電腦:閃電';
                document.getElementById('cpPic').setAttribute ('src','./img/閃電.png');
                break;
            case 13:
                console.log('手槍');
                msgC.innerText = '電腦:手槍';
                document.getElementById('cpPic').setAttribute ('src','./img/槍.png');
                break;
            case 14:
                console.log('石頭');
                msgC.innerText = '電腦:石頭';
                document.getElementById('cpPic').setAttribute ('src','./img/石頭.png');
                break;
            case 15:
                console.log('火');
                msgC.innerText = '電腦:火';
                document.getElementById('cpPic').setAttribute ('src','./img/火.png');
                break;
    }if ((parseInt(gestureCode) == 1 && (parseInt(computerCode) >= 2 && parseInt(computerCode) <= 8))
    ||(parseInt(gestureCode) == 2 && (parseInt(computerCode) >= 3 && parseInt(computerCode) <= 9))
    ||(parseInt(gestureCode) == 3 && (parseInt(computerCode) >= 4 && parseInt(computerCode) <= 10))
    ||(parseInt(gestureCode) == 4 && (parseInt(computerCode) >= 5 && parseInt(computerCode) <= 11))
    ||(parseInt(gestureCode) == 5 && (parseInt(computerCode) >= 6 && parseInt(computerCode) <= 12))
    ||(parseInt(gestureCode) == 6 && (parseInt(computerCode) >= 7 && parseInt(computerCode) <= 13))
    ||(parseInt(gestureCode) == 7 && (parseInt(computerCode) >= 8 && parseInt(computerCode) <= 14))
    ||(parseInt(gestureCode) == 8 && (parseInt(computerCode) >= 9 && parseInt(computerCode) <= 15))
    // =====================================
    ||(parseInt(gestureCode) == 9 && ((parseInt(computerCode) >= 10 && parseInt(computerCode) <= 15 )|| parseInt(computerCode) == 1))
    // 
    // ||(parseInt(gestureCode) == 10 
    // && (parseInt(computerCode) >= 11 
    // && parseInt(computerCode) <= 15 
    // && parseInt(computerCode) == 1 
    // && parseInt(computerCode) == 2))
    // ============================
    ||(parseInt(gestureCode) == 10 && (parseInt(computerCode) == 1 || parseInt(computerCode) == 2 || (parseInt(computerCode) >= 11 && parseInt(computerCode) <= 15)))
    // 
    ||(parseInt(gestureCode) == 11 && (parseInt(computerCode) == 1 || parseInt(computerCode) == 2 || parseInt(computerCode) == 3 || (parseInt(computerCode) >= 12 && parseInt(computerCode) <= 15)))
    ||(parseInt(gestureCode) == 12 && (parseInt(computerCode) >= 1 && parseInt(computerCode) <= 4 || parseInt(computerCode) == 13 || parseInt(computerCode) >= 14 && parseInt(computerCode) <= 15))
    ||(parseInt(gestureCode) == 13 && (parseInt(computerCode) >= 1 && parseInt(computerCode) <= 5 || parseInt(computerCode) == 14 || parseInt(computerCode) == 15))
    ||(parseInt(gestureCode) == 14 && (parseInt(computerCode) >= 1 && parseInt(computerCode) <= 6 || parseInt(computerCode) == 15))
    ||(parseInt(gestureCode) == 15 && (parseInt(computerCode) >= 1 && parseInt(computerCode) <= 7))
    )
     {
        res.innerText = "恭喜你贏了！！！";
    } else if (
    (parseInt(gestureCode) == 1 && (parseInt(computerCode) >= 9 && parseInt(computerCode) <= 15))
    ||(parseInt(gestureCode) == 9 && (parseInt(computerCode) >= 2 && parseInt(computerCode) <= 8))
    ||(parseInt(gestureCode) == 10 && (parseInt(computerCode) >= 3 && parseInt(computerCode) <= 9))
    ||(parseInt(gestureCode) == 11 && (parseInt(computerCode) >= 4 && parseInt(computerCode) <= 10))
    ||(parseInt(gestureCode) == 12 && (parseInt(computerCode) >= 5 && parseInt(computerCode) <= 11))
    ||(parseInt(gestureCode) == 13 && (parseInt(computerCode) >= 6 && parseInt(computerCode) <= 12))
    ||(parseInt(gestureCode) == 14 && (parseInt(computerCode) >= 7 && parseInt(computerCode) <= 13))
    ||(parseInt(gestureCode) == 15 && (parseInt(computerCode) >= 8 && parseInt(computerCode) <= 14))
    ||(parseInt(gestureCode) == 2 && (parseInt(computerCode) == 1 || parseInt(computerCode) == 10 || parseInt(computerCode) == 11 || parseInt(computerCode) == 12 || parseInt(computerCode) == 13 || parseInt(computerCode) == 14 || parseInt(computerCode) == 15))
    ||(parseInt(gestureCode) == 3 && (parseInt(computerCode) == 1 || parseInt(computerCode) == 2 || parseInt(computerCode) == 11 || parseInt(computerCode) == 12 || parseInt(computerCode) == 13 || parseInt(computerCode) == 14 || parseInt(computerCode) == 15))
    ||(parseInt(gestureCode) == 4 && (parseInt(computerCode) == 1 || parseInt(computerCode) == 2 || parseInt(computerCode) == 3 || parseInt(computerCode) == 12 || parseInt(computerCode) == 13 || parseInt(computerCode) == 14 || parseInt(computerCode) == 15))
    ||(parseInt(gestureCode) == 5 && (parseInt(computerCode) == 1 || parseInt(computerCode) == 2 || parseInt(computerCode) == 3 || parseInt(computerCode) == 4 || parseInt(computerCode) == 13 || parseInt(computerCode) == 14 || parseInt(computerCode) == 15))
    ||(parseInt(gestureCode) == 6 && (parseInt(computerCode) == 1 || parseInt(computerCode) == 2 || parseInt(computerCode) == 3 || parseInt(computerCode) == 4 || parseInt(computerCode) == 5 || parseInt(computerCode) == 14 || parseInt(computerCode) == 15))
    ||(parseInt(gestureCode) == 7 && (parseInt(computerCode) == 1 || parseInt(computerCode) == 2 || parseInt(computerCode) == 3 || parseInt(computerCode) == 4 || parseInt(computerCode) == 5 || parseInt(computerCode) == 6 || parseInt(computerCode) == 15))
    ||(parseInt(gestureCode) == 8 && (parseInt(computerCode) >= 1 && parseInt(computerCode) <= 7))) {
        
        res.innerText = "你輸了！再來一次吧";
    } else if (parseInt(gestureCode) == parseInt(computerCode)){
        res.innerText = "平局！再來一次吧";
    }else{
        res.innerText = "請填入1~15 !!!!!!!" 
    }
    clearinput();
}
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
const advertiseBtn = document.getElementById("advertise-btn");
const advertiseOrder= document.querySelector(".advertise-order")
let showAd = true;
advertiseBtn.addEventListener("click", () => {
    showAd = !showAd;
    console.log(showAd);
    if (showAd) {
        advertiseBtn.style.display = "none";
        
        advertiseOrder.style.display = "block";
    } else {
        advertiseBtn.style.display = "none";
        advertiseOrder.style.display = "none";
    }
});
 // 輪播圖========================
 let slideIndex = 1;
 showSlides(slideIndex);
 
 // Next/previous controls
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 // Thumbnail image controls
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
 }