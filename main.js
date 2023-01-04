//-- //ex2_1// -->
// function changeTitle(event) {
//     event.preventDefault();
//     const newTitle = document.getElementById('user-new-title').value;
//     document.querySelector('h2').innerText = newTitle;
// }

//-- //ex2_2// -->
// let counter2 = 0;
// function couner(){
//     counter2++;
//     let p =  document.getElementById("count");
//     p.textContent = counter2;
//     p.style.fontSize =`${counter2*10}px`
// }


// const heading = document.getElementById('head');

// function changeTitle() {
//   heading.textContent = 'New Head';
// }

// setTimeout(changeTitle, 1000);


//ex2_4//
// window.addEventListener('load',par);
// function par(){
// let e = document.getElementById('random');
// e.textContent = Math.floor(Math.random()*100);
// window.onload = par();
// }

//ex2_5//
// function emptyValue() {
//     let i = document.getElementById("value").value;
//     if (i == '') {
//       console.log("error");
//       return false;
//     }else{}
//   }
//   emptyValue()

//ex2_6//

// document.getElementById('hello').addEventListener('click',myFunctionHello);

// function myFunctionHello() {
// console.log('hello')};

// document.getElementById('goodbye').addEventListener('click',myFunctionBye)

// function myFunctionBye () {
// console.log('goodbye')};

//ex2_7//
// function addTodo(e) {
//     e.preventDefault();
//     const newTodoTextEl = document.getElementById("user-new-todo-input");
//     const todoListEl = document.getElementById("todo-list");
    
  
//     const newTodo = document.createElement("li");
//     newTodo.innerText = newTodoTextEl.value;
//     todoListEl.appendChild(newTodo);
//     newTodo.addEventListener("click", () => {
//       todoListEl.removeChild(newTodo);
//     });
//     newTodoTextEl.value = "";
//   };

// function MakeMyList() {
//     const userText = document.createElement('input');
//     const addBtn = document.createElement('button');
//     addBtn.setAttribute('id','addBtn');
//     const removeBtn = document.createElement('button');
//     removeBtn.setAttribute('id','removeBtn');
//     const theBigList = document.createElement('ul');
//     const theDiv = document.getElementsByTagName('div')[0];
//     theDiv.appendChild(userText);
//     theDiv.appendChild(theBigList);
//     theDiv.appendChild(addBtn);
//     theDiv.appendChild(removeBtn);
//     addBtn.addEventListener('click', event => {
//       event.preventDefault();
//       const newToDo = document.createElement('li');
//       const text = document.createTextNode(userText.value);
//       newToDo.appendChild(text);
//       const checkbox = document.createElement('input');
//     checkbox.setAttribute('type', 'checkbox');
//       theBigList.appendChild(newToDo);
//       newToDo.appendChild(checkbox);
      
//     });
//     removeBtn.addEventListener('click', event1 => {
//       event1.preventDefault();
//       const lastChild = theBigList.lastChild;
//       theBigList.removeChild(lastChild);
//     });
//     addBtn.style.backgroundColor = 'green';
//     removeBtn.style.backgroundColor = 'red';
//     addBtn.style.height = 20;
//     addBtn.style.width = 70;
//     removeBtn.style.width = 70;
//     removeBtn.style.height = 20;
//     addBtn.innerText = 'add'
//     removeBtn.innerText = 'remove'
//     theBigList.style.checkbox;
//   }
  
// MakeMyList()