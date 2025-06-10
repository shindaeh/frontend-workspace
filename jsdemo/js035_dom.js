// ID라는 속성을 이용하여 속성(hNode)을 가지고왔다.
// ID는 고유값이기 때문에  getElement 가 하나 s가안붙는다.
let hNode = document.getElementById("selector");
console.log(hNode); // <h1 id="selector" class="choice">선택자</h1>
console.log(typeof hNode); // object

// getElements클래스는 다중설정이 가능하기때문에 s가 붙는다.
let hClass = document.getElementsByClassName("choic");
console.log(hClass); // HTMLCollection []
console.log(typeof hClass); // object

// p요소를 여러개 사용가능하기 때문에 s가 붙는다.
let pNode = document.getElementsByTagName("p"); //HTMLCollectionOf
console.log(pNode); // HTMLCollection(4) [p, p, p, p]
console.log(pNode.length); // 4

console.log(pNode[0]); // <p>content1</p>
//item메서드를 사용
console.log(pNode.item(0));// <p>content1</p>
//p요소의 텍스트를 가져온다.
console.log(pNode[0].innerText); //content1 
console.log(pNode[1].innerText); //content2
console.log(pNode[0].textContent); //content1
console.log(pNode[1].textContent); //content2
//style.background-color를 하이푼(-)을 지우고 color의 Color로 대문자로 변경해서 사용 가능하다.
pNode[0].style.backgroundColor = "blue";

///////////////////////////////////////////////////////////////////////////////////////////
//첫번째 요소만 가져온다.
let hId = document.querySelector("#selector"); //Element 
console.log(hId); // <h1 id="selector" class="choice">선택자</h1>

let hData = document.querySelector(".choice"); //Element 
console.log(hData); // <h1 id="selector" class="choice">선택자</h1>

//가장 첫번째 요소만 가져온다.
let pList = document.querySelector("p");//HTMLParagraphElement 실제 사용한 요소의 데이터 타입에따라 달라진다
console.log(pList); // <p style="background-color: blue;">content1</p>

let pList2 = document.querySelectorAll("p");
console.log(pList2);
//NodeList(4) [p, p, p, p]
//0:p 1:p 2:p 3:p length:4