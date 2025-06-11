/*
[1] Event Propagation(이벤트 전파)
① 캡처링(capturing phase) : 부모요소에서 Target요소로 이벤트 전파
② 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
 stopPropagation()

 [3] stopPropagation()와 preventDefault()비교
   stopPropagation() : 이벤트 전파 차단  return false(jQuery)
   preventDefault() : 디폴트 이벤트 차단  return false (javascript, jQuery)

   https://www.w3.org/TR/DOM-Level-3-Events/
*/
//alert는 알림창 띄우는 것
//버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파 // (타겟 -> 부모)전파가 기본
//이벤트를 받기 위한 변수 잡기 (e)
document.querySelector('.red').onclick = (e) => {
    alert('red');
    //변수(e)(이벤트)를 차단
    e.stopPropagation();
}

document.querySelector('.green').onclick = (e) => {
    alert('green');
    e.stopPropagation();
}

document.querySelector('.blue').onclick = (e) => {
    alert('blue');
    e.stopPropagation();
}

document.querySelector('a').onclick = (e) => {
    alert('안녕하세요.');
    //링크차단
    e.preventDefault();
    //return false 가능
}