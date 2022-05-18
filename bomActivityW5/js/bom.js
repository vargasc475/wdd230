const input = document.getElementById('favchap');
const button = document.getElementById('button'); 
const list = document.querySelector('.list');


button.addEventListener('click', function() {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    
    if (input.value == '') {
        
    }

    else {
        li.textContent = input.value;
        deleteBtn.textContent = `❌`;
    
        li.appendChild(deleteBtn);

        list.appendChild(li);
    
        deleteBtn.addEventListener('click', function() {list.removeChild(li);})

        input.focus()

        input.value = '';
    }
    
})