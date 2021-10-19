const addButton = document.getElementById('button-add');
//console.log(addButton);

addButton.addEventListener('click', () => {
    // hide empty message
    document.getElementById('empty-list-msg').hidden = true;
    let node = document.createElement('div');
    let itemInput = document.querySelector('.top-shop-item');
    // let itemText = itemInput.value;
    node.innerHTML = `
        <div class="input-group justify-content-center">
            <input type="text" class="form-control" aria-label="Text-input" value="${itemInput.value}">
            <button class="btn btn-outline-secondary" id="check" type="button">
                <i class="fas fa-check" style="color:green;"></i>
            </button>
            <button class="btn btn-outline-secondary" id="delete" type="button">
                <i class="far fa-trash-alt" style="color:red;"></i>
            </button>
        </div>`
    document.querySelector('.shopping-list').appendChild(node);
    
    localStorage.setItem('shopping-list', document.querySelector('.shopping-list').innerHTML);
    itemInput.value = "";
});        



//Check button function


const shoppingList = document.querySelector('.shopping-list');

shoppingList.addEventListener('click', checkEdit);

function checkEdit(event) {
    const parent = event.target.parentNode;
    const checkEditButton = event.target;
    const input = parent.childNodes[1]
    if(checkEditButton.id === 'check' && input.disabled === false) {
        input.style.textDecoration = 'line-through';
        input.disabled = true;
        checkEditButton.innerHTML = '<i class="far fa-edit" style="color:blue"></i>';
    } else if (checkEditButton.id === 'check' && input.disabled === true) {
        input.disabled = false;
        input.style.textDecoration = 'none';
        checkEditButton.innerHTML = '<i class="fas fa-check" style="color:green;"></i>';
    }
    localStorage.setItem('shopping-list', document.querySelector('.shopping-list').innerHTML);
};


//Delete button function

const listItem = document.querySelector('.shopping-list');

listItem.addEventListener('click', doDelete);

function doDelete(event) {
    const parent = event.target.parentNode;
    const deleteButton = event.target;
    
    if(deleteButton.id === 'delete') {
        parent.remove();
    }
    localStorage.setItem('shopping-list', document.querySelector('.shopping-list').innerHTML);
};



//ClearList button function
const clearButton = document.getElementById('button-reset');
const shpList = document.querySelector('.shopping-list')
clearButton.addEventListener('click', doClear);
function doClear(event) {
    if (shpList.childNodes.length>0) {
        if (confirm("Are you sure?")) {
            shpList.innerHTML="" ;
            document.getElementById('empty-list-msg').hidden = false;
            document.querySelector('.top-shop-item').value="";
        }
    }
    localStorage.setItem('shopping-list', document.querySelector('.shopping-list').innerHTML);
};

//Repopulate List
//document.addEventListener('DOMContentLoaded', loadList());
window.onload = function(){
    // JSON.parse(localStorage.getItem(formIdentifier)); 
    if (localStorage.getItem('shopping-list') != ""){
        document.getElementById('empty-list-msg').hidden = true;
        document.querySelector('.shopping-list').innerHTML = localStorage.getItem('shopping-list');
    }
}


//OnChange - to save LocalStorage...
document.querySelector(".shopping-list").addEventListener("change",(e) => {
    console.log(e.target);
    // this event & function gets fired..... but changed "value" does not reflect in object, and so it does not get saved.
    localStorage.setItem('shopping-list', document.querySelector('.shopping-list').innerHTML);
});
//window.onbeforeunload = function(event) { ... };
// window.onbeforeunload = function(e){
//     localStorage.setItem('shopping-list', document.querySelector('.shopping-list').innerHTML);
// }
