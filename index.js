onClickPlus = function(){
    let createResult = document.createElement('div');
    createResult.classList.add("result");
    let res = Number(inp1["value"]) + Number(inp2["value"]);
    createResult.innerHTML = res;
    div2.append(createResult);

}
let plus = document.getElementById('plus');
plus.addEventListener("click", onClickPlus);

onClickMinus = function(){
    let createResult = document.createElement('div');
    createResult.classList.add("result");
    let res = Number(inp1["value"]) - Number(inp2["value"]);
    createResult.innerHTML = res;
    div2.append(createResult);

}
let minus = document.getElementById('minus');
minus.addEventListener("click", onClickMinus);

onClickUmnozhit = function(){
    let createResult = document.createElement('div');
    createResult.classList.add("result");
    let res = Number(inp1["value"]) * Number(inp2["value"]);
    createResult.innerHTML = res;
    div2.append(createResult);

}
let umnozhit = document.getElementById('umnozhit');
umnozhit.addEventListener("click", onClickUmnozhit);

onClickPodelit = function(){
    let createResult = document.createElement('div');
    createResult.classList.add("result");
    let res = Number(inp1["value"]) / Number(inp2["value"]);
    createResult.innerHTML = res;
    div2.append(createResult);

}
let podelit = document.getElementById('podelit');
podelit.addEventListener("click", onClickPodelit);

