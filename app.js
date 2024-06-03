let array=[]
function executetask()
{
let input=document.getElementById("input").value
array.push(input)
console.log(array)
let containeritems= document.getElementById("containeritems")

let todolistitems=document.createElement('div')
let checkbox=document.createElement('input')
checkbox.type='checkbox'
let para=document.createElement('p')
let button=document.createElement('button')
button.innerText='Delete'
para.innerHTML=input
todolistitems.classList.add('todo-flex')
checkbox.classList.add('box')
button.classList.add('button')

todolistitems.appendChild(checkbox)
todolistitems.appendChild(para)
todolistitems.appendChild(button)
containeritems.appendChild(todolistitems)

//making input filed to be after adding the task
document.getElementById("input").value=' '
}
