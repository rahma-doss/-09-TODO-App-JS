let input = document.querySelector("input")
let main = document.querySelector('.Dom')
let buttonAdd = document.querySelector("button")


let todo = ''

input.addEventListener('change', function(e){
    todo = e.target.value
})
    buttonAdd.addEventListener('click', function(){
        var container = document.createElement('div')
        container.classList.add('toList')

        var btnComplete = document.createElement('button')
        btnComplete.innerHTML ="complete"
        btnComplete.classList.add('complete')
        //btnComplete.style.color = " gray"

        var btnDelete = document.createElement('button')
        btnDelete.innerHTML = "Delete"
        btnDelete.classList.add('delete')

        var x = document.createElement('h2')
         x.classList.add('items')
        x.innerHTML = todo
        input.value= ''
        container.appendChild(btnComplete)
        container.appendChild( btnDelete)
        container.appendChild(x)
        main.appendChild(container )
        //container.appendChild.todo

        btnComplete.addEventListener('click', function() {
            btnComplete.innerHTML = "undo"
            x.style.textDecoration = 'line-through'
})
btnDelete.addEventListener('click', function(){
    btnDelete.parentElement.remove()
})
    })