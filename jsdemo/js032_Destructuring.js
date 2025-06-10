//Destructuring (구조 분해 할당)
// : Destructuring(디스트럭쳐링)은 structuring(구조화)된 배열 또는 객체를 Destructuring(비구조화)
//   하여 개별적으로 변수에 할당하는 개념이다.

//1. 배열 Destructuring
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`);

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`);

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}, p=${p}, next=${next}`);

[k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`next=${next}`); // next=3,4,5,6,7,8
console.log(next); // [3, 4, 5, 6, 7, 8]

//_(언더바)를 넣으면 해당 인덱스가 빠진다.
[k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`);
console.log(`p=${p}`);
console.log(`next=${next}`);

let u, t, w;
[u, t, w] = [1, 2];
//w는 값이 없어 undefined
console.log(`u=${u}, t=${t}, w=${w}`); // u=1, t=2, w=undefined

//받을값이 없으면 기본값 3이 출력된다.
[u, t, w = 3] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`); //u=1, t=2, w=3

[u, t = 4, w = 5] = [1, 2];
console.log(`u=${u}, t=${t}, w=${w}`);

// 2.객체 Destructuring
const customer = { fullname: '고수', job: '연기자' };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname=${fullname}, job=${job}`); //fullname=고수, job=연기자

let { fullname: fn, job: jb } = customer;
console.log(`fullname=${fn},job=${jb}`); //fullname=고수,job=연기자

let { job: jb2, fullname: fn2 } = customer;
console.log(`job=${jb2}, fullname=${fn2}`) //job=연기자, fullname=고수

let { fullname: fn3, job: jb3, loc = '서울' } = customer;
console.log(`job=${jb3}, fullname=${fn3}, loc=${loc}`) //job=연기자, fullname=고수, loc=서울

//let { s, r } = { s: 1, r: 2 };
//console.log(s, r); // 1 2

let { s, r } = { s: 1, r: 2 };
console.log(r, s); // 1 2

//////////////////////////////////////////////////////////////////
//completed의 값이 true인 데이터만 검색하라.
//completed는 논리값
let habits = [
    { id: 1, content: "수영", completed: false },
    { id: 2, content: "걷기", completed: true },
    { id: 3, content: "명상", completed: true },
    { id: 4, content: "독서", completed: false },
];

let listHabit = [];
for (let i = 0; i < habits.length; i++) {
    if (habits[i].completed)
        listHabit.push(habits[i]);
}
console.log(listHabit);
//0:{ id: 2, content: '걷기', completed: true }1:{ id: 3, content: '명상', completed: true }length:2

//위에것과 동일한 결과값이 나온다.
let completedHabit = habits.filter((element) => { return element.completed });
console.log(completedHabit);
//위에것과 동일한 결과값이 나온다. 
// 값이 1개이고 리턴값이 1개 라면 생략할 수 있는것이 있음, ()괄호의 생략, retrurn의 생략이 있다.
let completedHabit2 = habits.filter(element => element.completed);
console.log(completedHabit2);

//member변수에서 데이터를 추출하여 '고수 고객님은 서울에 거주합니다.' 라고 출력하세요.
let member = {
    hname: "고수",
    address: {
        zipCode: "526-143",
        city: "서울",
    },
};

//let { hname, address } = member;
//console.log(`${hname}고객님은 ${address.city}에 거주합니다.`);
let { hname, address: { zipCode, city } } = member;
console.log(`${hname}고객님은 ${city}에 거주합니다.`);