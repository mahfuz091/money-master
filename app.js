function getElementValueById(inputId){
    const inputValue = document.getElementById(inputId).value;
    // console.log(inputValue);
    // const input = parseInt(inputValue);
    // if(input < 0 || input == ""){
    //     alert('Input Must be a positive number')
    //     return;
    // }
    

    return inputValue;

}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const income = getElementValueById('income')
    const foodCost = getElementValueById('food');
    const rentCost = getElementValueById('rent');
    const clothCost = getElementValueById('cloth');
    
    
    if(income < 0 || income == "" || foodCost < 0 || foodCost == "" || rentCost < 0 || rentCost == "" || clothCost < 0 || clothCost == ""){
        
        


        alert('Input Must be a positive number')

        
        
        return;
        
        
       
        
    }
    
   
    
    
    
    
    const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothCost);
    const balance = parseInt(income) - totalCost;
    if(totalCost > parseInt(income)){
        alert("Invalid")
        return;
    }

    console.log(totalCost);
    setTextElementById("total", totalCost)
    setTextElementById("balance", balance)
    
    
})
document.getElementById('save').addEventListener('click', function(){
    const income = getElementValueById('income')
    const foodCost = getElementValueById('food');
    const rentCost = getElementValueById('rent');
    const clothCost = getElementValueById('cloth');
    const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothCost);

    
    const save= getElementValueById('save-percentage');
    if(save<0||save==""){
        alert('please enter a value number')
        return;
    }
    const savePercentage = parseInt(save) / 100;
    const saveAmount = parseInt(income) * savePercentage;
    setTextElementById("save-amount", saveAmount)
    const remainBalance = parseInt(income) - (totalCost + saveAmount)
    setTextElementById('remaining-balance', remainBalance)


})

