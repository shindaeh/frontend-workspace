/*
[문서 객체에 이벤트를 적용하는 방법]
요소선택.이벤트종류 = function(){실행할 문장};
btn.onclick=process;
function process(){};
*/
//현재 true이면 블루로 바뀌고 false면 레드
let chk = true;
let divNode = document.querySelector('div');
function process() {
    //동적처리
    if (chk) { //(chk = false, chk = true; )
        divNode.style.backgroundColor = 'blue';
        chk = false;
    } else {
        divNode.style.backgroundColor = 'red';
        chk = true;
    }
}

let btn = document.querySelector('button')
console.log(btn); //button
//button(버튼)에서 click(클릭)이벤트가 발생하면 process함수를 실행하도록 등록
//등록만 하기 때문에 ()를 사용하지 않는다.
btn.onclick = process; //process위에 만들어 놓음