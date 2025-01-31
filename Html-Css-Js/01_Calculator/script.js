function add(n1,n2)
{
    return n1+n2
}

function sub(n1,n2)
{
    return n1-n2
}


document.getElementById(`result`).addEventListener(`click`,function(){
    let input1 = parseFloat(document.getElementById(`input1`).value);
    let input2 = parseFloat(document.getElementById(`input2`).value);
    let mathsOperation = document.getElementById(`mathsOperation`).value;
    let output = document.getElementById(`output`)

    let result;
    switch (mathsOperation) {
        case `add`:
            result = add(input1,input2)
            break;
        case 'sub':
            result = sub(input1,input2)
            break;
        default:
            result="invalid"
            break;
            
    }

    

    output.textContent = result
})

// reset feature
document.getElementById(`reset`).addEventListener(`click`,function(){

    document.getElementById(`input1`).value=""
    document.getElementById(`input2`).value=""

    if (document.getElementById(`output`).textContent="0") {
        output.textContent="plz add the input first"
    }
    
})