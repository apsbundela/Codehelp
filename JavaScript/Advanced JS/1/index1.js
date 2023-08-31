


for(let i=1; i<=100;i++){

    let newElement = document.createElement('p');
    newElement.textContent = "this is para "+i;
    document.body.appendChild(newElement);
}

let fragment = document.createDocumentFragment();
for(let i=1; i<=100;i++){

    let newElement = document.createElement('p');
    newElement.textContent = "this is para "+i;
    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // 1Reflow 1Reprint



/*
    observation
1.run to completion <-- natureto code
2.JS does not execute multiples line at a same time, it execute only one by one beacuse JS os single threaded 
*/
function addPara(){
    let para = document.createElement('p');
    para.textContent = "JS is single threaded";
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = "Ajinkya virgin hai";
    document.body.appendChild(para);
}
addPara();
appendNewMessage();