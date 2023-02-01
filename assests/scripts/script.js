const getinputarr =  InputObjArr.map((element)=> { //this function return the InputObjArr
    return getResponse(element); //traversing on every element of InputObjArr
});

const inputContainerRef = document.getElementById("inputContainer");

for(let itr of getinputarr){
    inputContainerRef.appendChild(itr);
}

const btn = document.createElement("button");
const bt  = document.getElementById("ButtonContainer");
btn.innerText = 'Save';
bt.appendChild(btn);

const tablecontainer = document.getElementsByClassName("books-table")[0];
const new_table = getTable();
tablecontainer.appendChild(new_table);

btn.addEventListener("click", addData);






