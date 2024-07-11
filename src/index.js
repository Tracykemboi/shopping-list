document.addEventListener("DOMContentLoaded", () => { 
    const shoppingList=[]//Initialize an empty array for the items

    //declare the constants for the inputs and buttons on a higher level to enable acces by functions
    const itemInput=document.getElementById('itemInput')
    const shoppinglistKart=document.getElementById('shoppingList')
    const addButton=document.getElementById('addItemButton')
    const markedPurchasedButton=document.getElementById('Markedpurchasebtn')
    const clearListButton=document.getElementById('clearListButton')

    addButton.addEventListener('click',function () {
        let newItem=itemInput.value //get the input value
        if (newItem) {
            shoppingList.push(newItem)//add the item to the array
            itemInput.value=('')
            renderShoppingList()
        }
    })
    function renderShoppingList() {
        shoppinglistKart.innerText=''
        shoppingList.forEach(function(item) { //iterate over each item on the shopping list array and add to a list
            const li=document.createElement('li')
            li.textContent=item
            li.addEventListener('click',function(){
                li.classList.toggle('purchased')// this will strikethrough purchased items when the list created is clicked.
            })
            shoppinglistKart.appendChild(li)
        })
    }
    clearListButton.addEventListener('click',function(){
        shoppingList.length=0 //this clears the shopping kart and allow for new update
        renderShoppingList()
    })
    
return shoppingList
})