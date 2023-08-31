
let passwordShow = document.querySelector("[data-len-password]");
let sliderValue = document.querySelector("[data-len-slider]");
let upperCaseCheck = document.getElementById("upperCaseCheck");
let lowerCaseCheck = document.getElementById("lowerCaseCheck");
let numberCheck = document.getElementById("numberCheck");
let symbolCheck = document.getElementById("symbolCheck");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const generateBtn = document.getElementById("createButton");
let displayPassword = document.querySelector("[display-password]");

let passwordLength = 0;
let passwordDefaultValue = 9;
let checkCount = 0;
let symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
let funArr = [];
let newPassword ="";
passwordLength = passwordDefaultValue;
handelSlider();
function handelSlider(){
  sliderValue.value = passwordLength;
  passwordShow.innerText = passwordLength;
}


sliderValue.addEventListener("input", (event) => {
    passwordLength = passwordShow.innerText = event.target.value;
  });

allCheckBox.forEach(checkbox => {
  checkbox.addEventListener("change",()=>{
    checkCount = 0;
    allCheckBox.forEach(itemBox =>{
          if(itemBox.checked)
          checkCount++;

        })

        if(passwordLength< checkCount){
          passwordLength = checkCount;
          handelSlider();
    }
  })

});

function copyClipBoardText(){
  // Select the text field
  displayPassword.select();

  // Copy the text inside the text field
  navigator.clipboard.writeText(displayPassword.value);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumber(){
  return getRndInteger(0,9);
}

function getUpperCaseLetter(){
  return String.fromCharCode(getRndInteger(65,90))
}

function getLowerCaseLetter(){
  return String.fromCharCode(getRndInteger(97,122))
}

function getSymbol(){
  return symbols.charAt(getRndInteger(0,symbols.length)) ;
}

function shufflePassword(array) {
  //Fisher Yates Method
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

generateBtn.addEventListener("click",()=>{
  newPassword ='';
  funArr = [];
  if(checkCount == 0) return;

  if(passwordLength < checkCount) {
    passwordLength = checkCount;
    handelSlider();
}


  if(upperCaseCheck.checked){
    funArr.push(getUpperCaseLetter);
  }
  if(lowerCaseCheck.checked){
    funArr.push(getLowerCaseLetter);
  }
  if(numberCheck.checked){
    funArr.push(getRandomNumber);
  }
  if(symbolCheck.checked){
    funArr.push(getSymbol);
  }
//compulsory addition
    for(i=0; i<funArr.length ;i++){
      newPassword += funArr[i]();
    }

  for (i=0; i<passwordLength-funArr.length; i++){
    let randomIndex = getRndInteger(0, funArr.length);
    newPassword += funArr[randomIndex]();
  }

    newPassword = shufflePassword(Array.from(newPassword));
    displayPassword.value = newPassword;
})
