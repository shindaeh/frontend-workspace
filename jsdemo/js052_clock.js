//시계00:00:00으로 나오게 설정
function leftPad(num) {
    if (num < 10) return `0${num}`;
    else
        return `${num}`
}

function setText(selector, text) {
    let targetElement = document.querySelector(selector);
    targetElement.innerText = leftPad(text);
}

//처음에 켜자마자 보이는 시간
function watchTime() {
    let present = new Date();
    const dayList = ["일", "월", "화", "수", "목", "금", "토", "일"];


    setText('#hours', present.getHours());
    setText('#minute', present.getMinutes());
    setText('#seconds', present.getSeconds());

    setText('#year', present.getFullYear());
    setText('#month', present.getMonth() + 1);
    setText('#date', present.getDate());

    const day = present.getDay();
    setText('#day', dayList[day]);

}
watchTime(); // <- 바로실행할 경우에는 ()괄호 사용
//등록하는거기때문에 watchTime()<-괄호 사용 X
let clockInterval = setInterval(watchTime, 1000);

let btn = document.querySelector('button');

btn.onclick = () => {
    if (btn.innerText == '시간종료') {
        clearInterval(clockInterval);
        btn.innerText = '시간시작';
    } else {
        clockInterval = setInterval(watchTime, 1000);
        btn.innerText = '시간종료';
    }
}

/*
leftPad는 문자열의 왼쪽에 특정 문자(또는 문자열)를 덧붙여서 일정한 길이로 맞추는 함수예요.

주로 숫자나 문자열의 포맷을 일정하게 맞춰야 할 때 사용됩니다.
예를 들어, "7"을 "007"처럼 만들고 싶을 때 leftPad("7", 3, "0") 이런 식으로 사용하죠.

leftPad("7", 3, "0") // 결과: "007"
leftPad("abc", 6, "-") // 결과: "---abc"
🔧 직접 구현해보자 (JavaScript)
자바스크립트에 내장된 leftPad 함수는 없지만, 간단히 구현할 수 있어요:

function leftPad(str, length, padChar = " ") {
  str = String(str);
  while (str.length < length) {
    str = padChar + str;
  }
  return str;
}

console.log(leftPad("42", 5, "0")); // 출력: "00042"
 실제 용도 예시
시계: "3:5:9" → "03:05:09"

고정 길이 숫자 코드: "ID-00023"

*/
/*
✅ 3. getDay() 함수 정의
Date.prototype.getDay()
현재 Date 객체가 나타내는 날짜의 요일을 반환합니다.

반환값은 숫자 (0 ~ 6):
반환값	요일
0	일요일 (Sunday)
1	월요일 (Monday)
2	화요일 (Tuesday)
3	수요일 (Wednesday)
4	목요일 (Thursday)
5	금요일 (Friday)
6	토요일 (Saturday)
*/