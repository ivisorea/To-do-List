const addButton = document.getElementById('button-add');

addButton.addEventListener('click', () => {
    // hide empty message
    document.getElementById('empty-list-msg').hidden = true;
    let node = document.createElement('div');
    let itemText = document.querySelector('.top-shop-item').value;
    node.innerHTML = `
        <div class="input-group">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
            </div>
            <input type="text" class="form-control" aria-label="Text input with radio button" value="${itemText}">
            <button class="btn btn-outline-secondary" type="button" id="button-add">
                <i class="far fa-edit"></i>
            </button>
            <button class="btn btn-outline-secondary" type="button" id="button-add">
                <i class="far fa-trash-alt" style="color:red;"></i>
            </button>
        </div>`
    document.querySelector('.shopping-list').appendChild(node);
   

    

});

