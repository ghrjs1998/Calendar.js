// 날짜 생성 date객체 활용
const date = new Date();

const Year = date.getFullYear();
const Month = date.getMonth();
document.querySelector(".year-month").textContent = `${Year}년 ${Month + 1 }월`  // 2022년 7월