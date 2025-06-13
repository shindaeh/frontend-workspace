document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".rating").addEventListener('click', function (e) {
        let elem = e.target;
        //console.log(elem);
        if (elem.classList.contains("rate_radio")) {
            rating.setRate(parseInt(elem.value));
        }
    });
});
//상품평 작성 글자수 초과 이벤트 리스너
//keydown : 키를 입력하면 funcion(함수)를 수행하라.
document.querySelector(".review_textarea").addEventListener("keydown", function () {
    let review = document.querySelector(".review_textarea");
    // /^.{400,}$/;^<- 시작 #<- 끝 ,{400개 이상이면,(쉼표)임의의 문자(공백)}
    let lengthCheckEx = /^.{400,}$/;
    if (lengthCheckEx.test(review.value)) {
        //400자 이상이면 컷
        review.value = review.value.substring(0, 400);
    }
    //console.log(review.value);
});

//저장 전송전 필드 체크 이벤트 리스터
document.querySelector("#save").addEventListener('click', function () {
    //별점 선택 안했으면 메시지 표시
    if (rating.rate == 0) {
        rating.showMessage("rate");
        //메세지가 뜨면 더이상 이벤트 발생이 필요없으므로 false
        return false;
    }
    //리뷰 5자 미만이면 메세지 표시
    if (document.querySelector(".review_textarea").value.length < 5) {
        rating.showMessage("review");
        return false;
    }
    //form 서브밋
    alert("저장완료");
    //alert후 초기화
    //별점 선택 초기화
    rating.setRate(0);
    //리뷰 작성 초기화
    document.querySelector(".review_textarea").value = "";
});


// 별점 마킹 모듈 프로토타입으로 생성
//{name :홍길동 age: 30} <-값만 있는것을 넣어줄 때
function Rating() { }
Rating.prototype.rate = 0;
Rating.prototype.setRate = function (newrate) {
    //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
    this.rate = newrate;
    let items = document.querySelectorAll(".rate_radio");
    items.forEach((items, idx) => {
        if (idx < newrate) {
            items.checked = true;
        } else {
            items.checked = false;
        }
    });
};

Rating.prototype.showMessage = function (type) {
    //경고메시지 표시
    switch (type) {
        case "rate":
            //안내메시지 표시
            document.querySelector(".review_rating .warning_msg").style.display = "block";
            //안내메세지 표시 제거
            setTimeout(function () {
                document.querySelector(".review_rating .warning_msg").style.display = "none";
            }, 1000);
            break;
        case "review":
            //안내메시지 표시
            //".review_contents .warning_msg"요소가 화면에 보이게 하고
            //.style.display = "block";으로 표시
            document.querySelector(".review_contents .warning_msg").style.display = "block";
            //지정된 시간 후 안내 메세지 감춤
            setTimeout(function () {
                //style.display = "none";으로 바꿔서 1초 뒤 경고메세지 제거
                document.querySelector(".review_contents .warning_msg").style.display = "none";
            }, 1000);
            break;
    }
};

let rating = new Rating();  //별점 인스턴스 생성