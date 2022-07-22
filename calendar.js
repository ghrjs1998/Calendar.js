
 // 날짜 생성 date객체 선언
 let date = new Date();

 renderCalender();



 // 전달로 이동
 function prevMonth() {
    date.setMonth(date.getMonth()-1);
    renderCalender();
 }
 // 다음달로 이동
 function nextMonth() {
     date.setMonth(date.getMonth() + 1);
     renderCalender();
 }
 // 이번달로 이동
 function today() {
     date = new Date();
     renderCalender();
 }
 
 function nextSixMonth() {
     date.setMonth(date.getMonth() + 6);
     renderCalender()
 }

 function prevSixMonth() {
     date.setMonth(date.getMonth() - 6);
     renderCalender()
 }

 function nextYear() {
     date.setFullYear(date.getFullYear() + 1)
     renderCalender()
 }

 function prevYear() {
     date.setFullYear(date.getFullYear() - 1)
     renderCalender()
 }

function renderCalender (){
// 현재연도 받아오기
    let currentYear = date.getFullYear();
    // 현재 달 받아오기
    // 1을 더해주는 이유 -> getMonth 메서드는 0부터 시작하기 때문
    let currentMonth = date.getMonth() + 1;
    // 저번달 마지막 요일, 월
    let prevLastDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    // 이번달 마지막 요일, 월
    let thisLastDay = new Date(currentYear, currentMonth, 0).getDate();

    // 남은 박스만큼 다음달 날짜 표시
    let nextDay = (prevLastDay + thisLastDay) % 7;
    if(nextDay==0){
        nextDay = 7;
    }

    let dates = "";

    // 저번달 마지막 연도, 월 표시하기
    for(let i = 0; i < prevLastDay; i++) {
        dates += "<div class='day'></div>";
    }

    // 이번달 표시하기
    // 출력한 날짜들 7칸 출력할 때마다 줄바꿈 일어나도록 하기
    for(let i = 1; i <= thisLastDay; i++) {
        dates += "<div class='day'>"  + i + "</div>";
        if(i%7==0){
            dates += "\n";
        }
    }
    // 다음달 표시하기
    for(let i = nextDay; i <7; i++) {
        dates += "<div class='day'></div>";
    }


    // 화면에 날짜 보이기
    document.getElementsByClassName("dates")[0].innerHTML = dates;
    // 화면에 년도,월 보이기
    document.querySelector(".year-month").innerHTML = currentYear + "년" + currentMonth + "월";
 }