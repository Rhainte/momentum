const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input"); // 로그인 정보 입력 함수
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event) {
       event.preventDefault();
       loginForm.classList.add(HIDDEN_CLASSNAME);
       const username =loginInput.value;
       localStorage.setItem(USERNAME_KEY, username); // 유저값 저장
       paintGreetings(username);
}

function paintGreetings(username){
       greeting.innerText = `hello ${username}`; // 인사를 하는 함수를 작성하여 기존에 복잡한 과정없이 출력만 하기
       greeting.classList.remove(HIDDEN_CLASSNAME);
       
}

const saveUsername = localStorage.getItem(USERNAME_KEY); // 유저이름 기억하기

if (saveUsername === null) {
       loginForm.classList.remove(HIDDEN_CLASSNAME); 
       loginForm.addEventListener("submit", onLoginSubmit); // 값이 null일 때 로그인창 출력

}else {
       paintGreetings(saveUsername);
}