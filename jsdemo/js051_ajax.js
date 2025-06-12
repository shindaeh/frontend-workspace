//AJAX = Asynchronous Javascript And XML

/*
1. XMLHttpRequest 객체 생성한다.
2. 서버와 통신 할 때 사용할 처리 방법을 등록한다.
3. 요청을 전송하고 통신을 시작한다.
*/

function process() {
    const xhttp = new XMLHttpRequest();
    //등록(요청)만 한 상태
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();


    //onload메서드는 요청이 성공한다는 전제하에 실행되는이벤트 핸들러
    //readystatechange이벤트 대신 -> onload 이벤트를 사용해도 됨
    //현재 페이지가 로딩이 되면
    xhttp.onload = () => {
        //정상적으로 서버에 응답을 받았을 경우 200번이 리턴된다.
        if (xhttp.status == 200) {
            //{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
            //서버로부터 응답(xhttp.respons)을 받은것을 객체(JSON.parse)로 바꾼다.
            let data = JSON.parse(xhttp.response);
            console.log(data);
        }
    };
}

//process로 호출이 된다.
console.log("start");
process();
console.log("end");
