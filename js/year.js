const year = document.querySelector("h3#year");

function getYear(){
    const date = new Date();
    const years = String(date.getFullYear()).padStart(4, "0");
    const months = String(date.getMonth()).padStart(2, "0");
    const days = String(date.getDay()).padStart(2, "0");
    year.innerText = `${years}년 ${months}월 ${days}일`;
}

getYear();
setInterval(getYear, 1000);