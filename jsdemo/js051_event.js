let btn = document.querySelector("button");


console.log("start");
btn.addEventListener(
    "click",
    function () {
        console.log("addEventLister");
    },
    false
);

console.log("end");


/*
addEventListener는 JavaScript에서 이벤트를 처리하기 위해 사용되는 이벤트 등록 메서드입니다. HTML 요소에 특정 이벤트(예: 클릭, 마우스 오버 등)가 발생했을 때 실행할 **함수(리스너)**를 연결해줍니다.

🔹 기본 문법
javascript
코드 복사
element.addEventListener(type, listener, options);
매개변수	설명
type	이벤트 이름 (예: "click", "mouseover", "keydown" 등)
listener	이벤트 발생 시 실행할 함수
options or useCapture	선택 사항. 이벤트 전파 방식 또는 기타 설정 (자세한 설명 아래에 있음)

✅ 예제 1: 클릭 이벤트 등록
javascript
코드 복사
const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("버튼이 클릭되었습니다!");
});
✅ 예제 2: 리스너 함수 따로 정의
javascript
코드 복사
function sayHello() {
  console.log("안녕하세요!");
}

document.getElementById("myBtn").addEventListener("click", sayHello);
✅ 옵션 설명
javascript
코드 복사
element.addEventListener("click", handler, {
  capture: false,      // 캡처 단계에서 실행할지 여부 (기본은 false → 버블링 단계에서 실행)
  once: true,          // true이면 한 번 실행 후 자동 제거
  passive: true        // true이면 preventDefault()를 사용하지 않겠다고 명시 (스크롤 성능 향상에 사용됨)
});
✅ 이벤트 제거
이벤트 리스너를 제거할 때는 removeEventListener를 사용합니다.
중요: 동일한 함수 참조여야 합니다.

javascript
코드 복사
function handleClick() {
  alert("클릭됨!");
}

const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

// 나중에 제거할 수 있음
btn.removeEventListener("click", handleClick);
🔸 주의할 점
익명 함수로 등록한 이벤트는 나중에 제거할 수 없습니다.

한 요소에 여러 개의 리스너를 등록할 수 있습니다.

onclick 속성과 달리, addEventListener는 이벤트를 중복 등록할 수 있습니다
*/