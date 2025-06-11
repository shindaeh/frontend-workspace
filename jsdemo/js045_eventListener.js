let btn = document.querySelector('button');

// btn.onclick = () => {
//     alert('click1')
// }
// //동일한 객체 (btn)에 동일한 이벤트 실행 불가능
// //마지막 이벤트(click2)만 실행
// btn.onclick = () => {
//     alert('click2')
// }
function click1() {
    alert('click1');
}

function click2() {
    alert('click2');
}

//btn.addEventListener('이벤트',함수,이벤트 전파)
btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false)