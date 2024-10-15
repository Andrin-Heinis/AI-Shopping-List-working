const addButton = document.querySelector('add-btn');
const itemList = document.getElementById('item-list');
const newItemInput = document.querySelector('new-item');

addButton.addEventListener('click', function() {
    const newItem = newItemInput.value;
    if (newItem !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<span class="item-name">${newItem}</span> <button class="delete-btn">Löschen</button>`;
        itemList.append(li);
        newItemInput.value = '';
        addDeleteEvent(li);
    }
});

function addDeleteEvent(item) {
    const deleteButton = item.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        item.remove;
    });
}

document.querySelectorAll('.delete-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        button.parent.remove();
    });
});
