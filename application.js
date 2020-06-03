const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');/*display of edit button on the page */
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');/* display of remove button on the page */
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');
        /*after adding the new item to the list the text along with edit n remove button is displayed */
        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));/*edit button on the page */

        removeButton.addEventListener('click', () => this.remove(itemBox));/*remove button on the page */

    }
    edit(input){
        input.disabled= !input.disabled;
    }/*edit button functionality */
    remove(item){
        container.removeChild(item);
    }/*remove button functionality*/
}

function check(){
    if(input.value!=""){
        new item(input.value);
        input.value="";
    }
}
addButton.addEventListener('click' , check);

window.addEventListener('keydown', (e)=> {
    if(e.which == 13){
        check();
    }
})
