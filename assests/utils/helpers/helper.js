function getResponse(obj) //getting the column names through this function
{
    const {NUMBER, TEXT, BOOLEAN, DATE} = inputConstants;
    const {key, id, type} = obj;

    let input = null;
    switch(type){ //number, text, date
        case NUMBER:
        case TEXT:
        case DATE:
            input = document.createElement("input");
            input.type = type;
            input.name = key; //name in key will be given to input
            input.id=id;
            break;
        default:
            input = document.createElement("input");
            input.type = TEXT; //boolean 
            input.name = key;
            input.id=id;
    }

    const mainTag = document.createElement("div");

    if(input == null)
    {
        return mainTag;
    }
    //if input is not NULL
    
        const textLabel = document.createElement("label");
        textLabel.innerText = key;
        textLabel.htmlFor = id;
        input.id = id;
        mainTag.appendChild(textLabel);
        mainTag.appendChild(input);

    return mainTag; 
}

function getTable() //function for creating table
{
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    tbody.classList.add("table-body"); //for reference

    for(let idx of InputObjArr)
    {
        let{key} = idx; //getting the data through key
        const th = document.createElement("th");
        th.innerText = key; //key contains the name of the column
        thead.appendChild(th);
    }   

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

function addData() //function for adding data in table
{
    let jigyasa = getData(); //data fetched from getData()
    const tbody = document.querySelector(".table-body"); //reference
    const trow = document.createElement("tr");
    for(let data of jigyasa)
    {
        let td = document.createElement("td"); 
        td.innerText = data; 
        trow.appendChild(td);
    }

    tbody.appendChild(trow);
}

function getData() //function for getting input from inputObjArr
{
    let data_arr = [];
    for(let idx of InputObjArr)
    {
        let{id, key} = idx; //har ek element ki id and key se access kar rahe
        const getinputval = document.getElementById(`${id}`); //accessing the id
        data_arr.push(getinputval.value);
        getinputval.value='';
      
    }
    console.log(data_arr);
    return data_arr;
}



