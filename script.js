
// ===========玩家
function clearinput(){
    ge.value='';
}
const modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    const btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

function modalOpen(){
    modal.style.display = "block";
}
function modalClose(){
    modal.style.display = "none";
}
// function searchModal(){ 
//     // When the user clicks on the button, open the modal
//     modalOpen;
    
//     // When the user clicks on <span> (x), close the modal
//     modalClose;
//     }

myBtn.addEventListener('click',searchGesture)
// myBtn.addEventListener('click',searchModal)
myBtn.addEventListener('click',modalOpen)
span.addEventListener('click',modalClose)


function searchGesture() {
    const gestureCode = document.getElementById('ge').value;
    switch (parseInt(gestureCode)) {
        case 1:
            console.log('剪刀');
            msgP.innerText = '玩家:剪刀'
            document.getElementById('warningPic').setAttribute ('src','./img/剪刀.png');
            break;
        case 2:
            console.log('石頭');
            msgP.innerText = '玩家:石頭'
            document.getElementById('warningPic').setAttribute ('src','./img/石頭.png');
            break;
        case 3:
            console.log('布');
            msgP.innerText = '玩家:布'
            document.getElementById('warningPic').setAttribute ('src','./img/布.png');
            break;
        default:
            // alert('請填入1~3 !!!!!!!')
            document.getElementById('warningPic').setAttribute ('src','./img/1-3.png');
            
            
    }
    // // =========電腦
    const computerCode = Math.floor(Math.random() * 3) + 1;
    switch (parseInt(computerCode)) {
        case 1:
            console.log('剪刀');
            msgC.innerText = '電腦:剪刀'
            document.getElementById('cpPic').setAttribute ('src','./img/剪刀.png');
            break;
            case 2:
                console.log('石頭');
                msgC.innerText = '電腦:石頭'
                document.getElementById('cpPic').setAttribute ('src','./img/石頭.png');
                break;
                case 3:
                    console.log('布');
                    msgC.innerText = '電腦:布'
                    document.getElementById('cpPic').setAttribute ('src','./img/布.png');
            break;
    }
   
    if (parseInt(gestureCode) == 1 && parseInt(computerCode) == 2 || parseInt(gestureCode) == 2 && parseInt(computerCode) == 3 || parseInt(gestureCode) == 3 && parseInt(computerCode) == 1) {   
        res.innerText = "你輸了！再來一次吧";
    } else if (parseInt(gestureCode) == parseInt(computerCode)) {
        res.innerText = "平局！再來一次吧";   
    } else if(parseInt(gestureCode) == 1 && parseInt(computerCode) == 3 || parseInt(gestureCode) == 2 && parseInt(computerCode) == 1 || parseInt(gestureCode) == 3 && parseInt(computerCode) == 2){  
        res.innerText = "恭喜你贏了！！！";
    }else{
        res.innerText = "請填入1~3 !!!!!!!"
    }
    clearinput();
}
    // function searchModal(){
        // var modal = document.getElementById("myModal");
        
        // // Get the button that opens the modal
        // var btn = document.getElementById("myBtn");
        
        // // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];
        
        // // When the user clicks on the button, open the modal
        // btn.onclick = function() {
        //   modal.style.display = "block";
        // }
        
        // // When the user clicks on <span> (x), close the modal
        // span.onclick = function() {
        //   modal.style.display = "none";
        //   clearinput();
        // }
        
        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        //   if (event.target == modal) {
        //     modal.style.display = "none";
        //     clearinput();
        //   }
    //     }
    //     }
// ===================
// function searchModal(){
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// }
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
