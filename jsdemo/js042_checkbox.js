//약관 동의

document.frm.onsubmit = () => {

    let admin = document.frm.admin;
    //checked는 체크안되어있는 것이 false이기 때문에 시작을 체크안되는것으로 바꿔줘야 한다.
    //!(not)일 때 수행하라 <- 이렇게 바꺼야 하기때문에 !을 붙인다.
    if (!admin.checked) {
        alert('약관에 동의해야 합니다.');
        return false;
    }
}


//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//arrow function사용하면 위의 결과값이 나오기때문에 사용하지 않는다.
document.frm.allCheck.onclick = function () {
    // console.log(this);
    // document.frm.subject1.checked = this.checked;
    // document.frm.subject2.checked = this.checked;
    // document.frm.subject3.checked = this.checked;

    /////////////////////////////////////////////////////////////////////
    //let checkgroup = document.querySelectorAll(".checkgroup");
    //console.log(checkgroup);
    //let myThis = this;
    //checkgroup.forEach(function (element) { 
    //this 는 element
    //this.chedcked 아래와 동일한 표현
    //this.checked = myThis.checked;
    //});
    //}
    
    //////////////////////////////////////////////////////////////////
    let myThis = this;
    let checkgroup = document.querySelectorAll(".checkgroup");
    //checkgroup은 nodeList이므로 map을 사용할 수 없다.
    //Array.From()을 이용해서 nodeList을 Array로 생성한다.
    //         let myArray = Array.from(checkgroup);
    //     myArray.map((element) => {
    //         element.checked = myThis.checked;
    //     });
    // }

    let iArray = [...checkgroup];
    iArray.map((element) => {
        return element.checked = myThis.checked;
    });
}

    //전체클릭,선택
    //전체선택은 arreo funcion(애로우 함수 사용 안함)
    //document.frm.allCheck.onclick = function () 
    //.checkgroup(클래스명)으로 해야 전부다 가져온다
    //NodeList(3) [input#subject1.checkgroup, input#subject2.checkgroup, input#subject3.checkgroup]
    //let checkgroup = document.querySelectorAll(`.checkgroup`);
    //console.log(checkgroup);