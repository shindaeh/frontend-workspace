//호출한 객체가 없을 경우에는 기본적으로 Window객체이다.
//Window는 최상위 객체이다.
console.log(this);

let member = {
    name: '홍길동',
    //객체에서 함수 정의할때
    //함수명 : 함수정의 show : function()
    show: function () {
        //this는 현재 자신이 포함된 객체를 나타낸다.
        console.log(this);
    }
}
//{name : '홍길동', show: f}
member.show();
/////////////////////////////////

//arrow function(애로우함수)에서는 this가 window가 된다.
let member2 = {
    name: '홍길동',
    show: () => {
        console.log(this);
    }
}
//window
member2.show();

/////////////////////////////////
let member3 = {
    name: '홍길동',
    show() {
        console.log(this);
    }
}
//{name: '홍길동', show: ƒ}
member3.show();

function showThisName() {
    console.log(this);
}
//Window
showThisName();
/////////////////////////////////

let showThisName2 = () => {
    console.log(this);
}
//Window
showThisName2();
/////////////////////////////////
//이벤트에서 this

//<button id="btn">commit</button>
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    console.log(this);
}, false);

//Window
btn.addEventListener('click', () => {
    console.log(this);
}, false);
//////////////////////////////////
const hong = { name: '홍길동' };
const jung = { name: '정해인' };

//call() : call()메서드는 모든 함수에서 사용할 수 있는 this값을 특정값으로 지정할 수 있다.
console.log('call()=================');
//this에서 사용할 값을 호출
//일반함수
showThisName.call(hong); // {name: '홍길동'}
showThisName.call(jung); // {name: '정해인'}

//화살표함수(arrow function)
showThisName2.call(hong); // window
showThisName2.call(jung); // window

//function update(birhtYear, job)속성값이 들어가있기 때문에
function update(birhtYear, job) {
    this.birhtYear = birhtYear;
    this.job = job;
    console.log(this);
}
// this => window
update(2019, 'IT');

//{name: '홍길동', birhtYear: 2000, job: '프로그래머'}
//update.call(this의 대상객체, argument, argument)
//call은 this를 호출.
update.call(hong, 2000, '프로그래머');
//{name: '정해인', birhtYear: 2016, job: '디자이너'}
//jung을 빼면 this값이 없어지기 때문에 숫자2016이 읽혀

//Number { 2016, birhtYear: '디자이너', job: undefined }
//이런 값이 나온다. (this가 number로 되버리고 나머지 값이 뒤로 값이 밀린셈)
update.call(jung, 2016, '디자이너');

///////////////////////////////////////////
//apply()
//1. apply()는 함수 매개변수를 처리하는 방법을 제외하면 call()과 같다.
//2. call()은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만 apply()은 매개변수를 배열로 받는다.

//{ name: '홍길동', birhtYear: 2000, job: '프로그래머' }
update.apply(hong, [2000, '프로그래머']);
//{ name: '정해인', birhtYear: 2016, job: '디자이너' }
update.apply(jung, [2016, '디자이너']);

////////////////////////////////////////////
//bind()
//1. call()과 사용방법은 같으나 실행을 해야 한다.
//let hongUPdate =
//hongUPdate(); (실행)
//{name: '홍길동', birhtYear: 2000, job: '프로그래머'}
let hongUPdate = update.bind(hong, 2000, '프로그래머');
hongUPdate();
//체인기법();을 이용
//{ name: '정해인', birhtYear: 2016, job: '디자이너' }
update.bind(jung, 2016, '디자이너')();