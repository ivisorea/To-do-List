const addButton = document.getElementById('button-add');
//console.log(addButton);

addButton.addEventListener('click', () => {
    // hide empty message
    document.getElementById('empty-list-msg').hidden = true;
    let node = document.createElement('div');
    let itemInput = document.querySelector('.top-shop-item')
    // let itemText = itemInput.value;
    node.innerHTML = `
        <div class="input-group justify-content-center">
            <input type="text" class="form-control" aria-label="Text input" value="${itemInput.value}">
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
    if (shpList.childNodes.length>1) {
        confirm("Are you sure?") ? shpList.innerHTML="" : false;
    }
    localStorage.setItem('shopping-list', document.querySelector('.shopping-list').innerHTML);
};

//Repopulate List
document.onload(loadList());
function loadList() {
    // JSON.parse(localStorage.getItem(formIdentifier)); 
    document.querySelector('.shopping-list').innerHTML = localStorage.getItem('shopping-list');
}

