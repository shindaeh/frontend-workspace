function display() {
    for (let i = 0; i <= 5; i++) {
        console.log(`i=${i}`);
    }
}

console.log("start==============")
//setTimeout() : 일정 시간이 지난 후에 함수를 실행하는 방법 -한번만 수행
//setInterval() : 일정 시간 간격을 두고 함수를 실행하는 방법 - 반복 수행

//setTimeout(실행함수, 시간); 1000단위가 1초단위
//비동기화이기 때문에 end가 먼저 나오고 setTimeout이 console.log("end================")보다 뒤에 처리된다
//setTimeout(display, 5000);

//setInterval(실행함수, 시간) 1000단위가 1초단위
//비동기화(식) 5초마다 생성
//setInterval(display, 5000);


console.log("end================")