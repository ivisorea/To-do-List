const addButton = document.getElementById('button-add');

addButton.addEventListener('click', () => {
    // hide empty message
    document.getElementById('empty-list-msg').hidden = true;
    let node = document.createElement('div');
    let itemText = document.querySelector('.top-shop-item').value;
    node.innerHTML = `
        <div class="input-group justify-content-center">
            <div class="input-group-text">
                <input type="text" class="form-control" aria-label="Text input" value="${itemText}">
            </div>
            <button class="btn btn-outline-secondary" id="check" type="button">
                <i class="fas fa-check" style="color:green;"></i>
            </button>
            <button class="btn btn-outline-secondary" id="delete" type="button">
                <i class="far fa-trash-alt" style="color:red;"></i>
            </button>
        </div>`
    document.querySelector('.shopping-list').appendChild(node);
});        


//Check button function


const shoppingList = document.querySelector('.shopping-list');

shoppingList.addEventListener('click', checkEdit);

function checkEdit(event) {
    const parent = event.target.parentNode;
    const checkEditButton = parent.childNodes[3];
    const input = parent.childNodes[1].childNodes[1];
    console.log(input);
    if(checkEditButton.id === 'check' && input.disabled === false) {
        input.style.textDecoration = 'line-through';
        input.disabled = true;
        checkEditButton.innerHTML = '<i class="far fa-edit" style="color:blue"></i>';
    } else if (checkEditButton.id === 'check' && input.disabled === true) {
        input.disabled = false;
        input.style.textDecoration = 'none';
        checkEditButton.innerHTML = '<i class="fas fa-check" style="color:green;"></i>';
    }
};


