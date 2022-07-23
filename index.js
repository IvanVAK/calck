    createDiv22 = document.createElement('div');
    createDiv22.classList.add("div22");
    div2.append(createDiv22);

onClickPlus = function(){
    let div22 = document.getElementsByClassName('div22');
    input = document.querySelector(".input");
    let createResult = document.createElement('div');
    createResult.classList.add("result");
    let res = Number(inp1["value"]) + Number(inp2["value"]);
    createResult.innerHTML = res;
    div22.append(createResult);

}
let plus = document.getElementById('plus');
plus.addEventListener("click", onClickPlus);

onClickMinus = function(){
    let div22 = document.getElementsByClassName('div22');
    input = document.querySelector(".input");
    let createResult = document.createElement('div');
    createResult.classList.add("result");
    let res = Number(inp1["value"]) - Number(inp2["value"]);
    createResult.innerHTML = res;
    div22.append(createResult);

}
let minus = document.getElementById('minus');
minus.addEventListener("click", onClickMinus);

onClickUmnozhit = function(){
    let div22 = document.getElementsByClassName('div22');
    input = document.querySelector(".input");
    let createResult = document.createElement('div');
    createResult.classList.add("result");
    let res = Number(inp1["value"]) * Number(inp2["value"]);
    createResult.innerHTML = res;
    div22.append(createResult);

}
let umnozhit = document.getElementById('umnozhit');
umnozhit.addEventListener("click", onClickUmnozhit);

onClickPodelit = function(){
    let div22 = document.getElementsByClassName('div22');
    input = document.querySelector(".input");
    let createResult = document.createElement('div');
    createResult.classList.add("result");
    let res = Number(inp1["value"]) / Number(inp2["value"]);
    createResult.innerHTML = res;
    div22.append(createResult);

}
let podelit = document.getElementById('podelit');
podelit.addEventListener("click", onClickPodelit);

delt = function(){
    let div22 = document.getElementById("div22");
    div22.remove();
    createDiv22 = document.createElement('div');
    createDiv22.classList.add("div22");
    div2.append(div22);
}
let del = document.getElementById('del');
del.addEventListener("click", delt);  

