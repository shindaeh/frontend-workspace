//날짜나 시간을 생성할때는 반드시 new객체를 사용한다.
let dateBtnNode = document.querySelector('button');
let pNode = document.querySelector('p');
//dateBtnNode에서 클릭이란 click이란 이벤트가 발상하게 되면
dateBtnNode.onclick = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    pNode.innerText = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
}