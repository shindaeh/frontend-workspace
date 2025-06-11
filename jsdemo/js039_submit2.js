// <input type="button" value="login" id="btn" />

// < !-- < input type = "submit" value = "login" /> -->
// < !-- < input type = "button" value = "login" id = "btn" /> -->
// < !-- < button value = "login" > login ></ > -->

// < !--위의 3개는 form요소 안에서 작성하면 form에서 subuit이 일어난다.-- >

let idNode = document.querySelector('#my_id');
let passNode = document.querySelector('#my_pass');
let btn = document.querySelector('#btn');

//btn.onclick = function () {
//엘로우 함수(위에거랑 똑같은 뜻)
btn.onclick = () => {

    if (idNode.value == "") {
        alert('아이디를 입력하세요.');
        return false;
    }

    if (passNode.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }

    // input(인풋)타입 버튼은 클릭했을때 submit이벤트가 발생하지 않기때문에
    // form에서 강제로 input이 발생하도록 sumit()메소드를 호출

    document.log_f.submit();

}