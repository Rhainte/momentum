const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos = []; // 업데이트 할만한 것에는 선언을 let으로 한다.

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 스트링으로 전환
}


function deleteToDo(event) {
    const li = event.target.parentElement; // 부모 html을 찾음
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 우리가 클릭한 li.id와 다른 toDo는 남긴다. // 그냥 지우면 li.id가 string이라서 int형으로 바꿔준다.
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); // js에서 html 태그를 만드는 부분
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li안에 span을 넣은 상태로 만들어줌
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사함
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse = 다시 배열로 바꿈
    toDos = parsedToDos; // 새로 시작할 때 toDos 배열이 비어 있으니 parsedToDos와 같으니까 
    parsedToDos.forEach(paintToDo);
}


