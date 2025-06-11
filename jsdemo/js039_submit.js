// <input type="sumit" value="login" />

// < !-- < input type = "submit" value = "login" /> -->
// < !-- < input type = "button" value = "login" id = "btn" /> -->
// < !-- < button value = "login" > login ></ > -->

// < !--위의 3개는 form요소 안에서 작성하면 form에서 subuit이 일어난다.-- >
let idNode = document.querySelector('#my_id');
let passNode = document.querySelector('#my_pass');

//현재 lof_f(폼)에서 onsubmit(submit Event)가 발생이되면 function(함수)를 수행하라.고 등록
document.log_f.onsubmit = function () {
    if (idNode.value == "") {
        alert('아이디를 입력하세요.');
        return false;
    }

    if (passNode.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }

    return true;
}