//1. 6개의 난수를 구하고 중복 체크
let lotto = [];
for (let i = 0; i <= 5; i++) {
    //0.0이상 ~ 1.0미만
    //0.0이상 ~ 45.0미만 난수발생
    let ran = Math.random() * 45;
    //console.log(ran);
    //floor로 소수점 버린다.
    //1이상 ~ 45이하
    ran = Math.floor(ran) + 1;
    lotto.push(ran);
    console.log(lotto);
    //중복값 제거
    for (let j = 0; j < i; j++) {
        if (lotto[j] == lotto[i]) {
            //push로 추가되는 중복된 값을 pop으로 제거한다.
            lotto.pop();
            i--;
            break;
        }
    }
}

//2. 정렬
lotto.sort((a, b) => {
    return a - b
});

console.log(lotto);
//3. 출력
//자손호출
//let divList = document.querySelector('div.wrap').children;

//'div.wrap>div'붙여서 작성하지 않으면 무한으로 결과값 생성
//위의 식과 결과값은 동일하다.
let divList = document.querySelectorAll('div.wrap>div');
//console.log(lotto);

divList.forEach((element, idx) => {
    element.innerText = lotto[idx];
})