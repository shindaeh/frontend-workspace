//p2가 중심
let myNode = document.querySelector('#p2');
//parentNode 부모
//Node : Dom으로 생성된 객체를 Node라고 부른다. 12개
//div(부모)를 가져오는 것(parentNode)
let ptNode = myNode.parentNode;
console.log(ptNode); // div#wrap
//`$P{}`를 통해서 출력하면 값이 다르게 나온다.
console.log(`${ptNode}`); // [object HTMLDivElement]
//previousSibling
let prevNode = myNode.previousSibling;
//이전 형제 노드(sibling node)를 참조할 때 사용
//enter[엔터]로 줄바꿈이 있끼 때문에 결과값이 prevNode = [object Text] 로 나온다.
console.log(`prevNode = ${prevNode}`); //prevNode = [object Text] 
//이웃의 이웃을 해야한다.
prevNode = prevNode.previousSibling;
console.log(prevNode); // <p id="p1">content1</p>
console.log(`prevNode = ${prevNode}`); //prevNode = [object HTMLParagraphElement]

/////////////////////////////////////////////////////////
//nextsibling (내 다음에 있는 이웃)
let nextNode = myNode.nextSibling;
console.log(`nextNode=${nextNode}`); //nextNode = [object Text]

nextNode = nextNode.nextSibling;
console.log(nextNode); // p#p3
console.log(`nextNode=${nextNode}`); // nextNode = [object HTMLParagraphElement]

///////////////////////////////////////////////////////////
//previousElementSibling
let prevEleNode = myNode.previousElementSibling;
//바로 상위(이전) 요소를 불러온다.(p1)
//prevEleNode:[object HTMLParagraphElement], content1
console.log(`prevEleNode:${prevEleNode}, ${prevEleNode.innerText}`);

//nextElementSibling;
let nextEleNode = myNode.nextElementSibling;
//p2가 중심이기 때문에 바로 하위(다음) 요소를 불러온다.(p3)
//nextEleNode=[object HTMLParagraphElement], content3
console.log(`nextEleNode=${nextEleNode}, ${nextEleNode.innerText}`);

//////////////////////////////
//childNodes
let divNode = document.querySelector('#wrap');
console.log(`divNode:${divNode}`); //divNode:[object HTMLDivElement]

let divChildsNode = divNode.childNodes;

console.log(`divChildesNode=${divChildsNode}`); //divChildesNode=[object NodeList]
// NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]
console.log(divChildsNode);

////////////////////////////////////////////////
//children
let divChildren = divNode.children;
//divChildren=[object HTMLCollection]
console.log(`divChildren=${divChildren}`);

//HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]
console.log(divChildren);
console.log(divChildren[0]); // <p id="p1">content1</p> 이게 간당해서 많이쓰인다.
console.log(divChildren.item(0)); // <p id="p1">content1</p>
console.log(divChildren.namedItem('p1')); // <p id="p1">content1</p> 이름으로 호출

//////////////////////////////////////////
//firstChild, firstElementChild
//기준점을 p4로 바꿈.
let pNode = document.querySelector('#p4');
let aNode = pNode.firstChild;
console.log(aNode); // #text (공백 출력) 공백은 컨텐츠라 #이출력 된다.

let imgNode = pNode.firstElementChild;
console.log(imgNode); // <img src="images/gosu.jpg" alt="영화배우 고수">

//////////////////////////////////////////////
//(호출)객체.getAttribute("속성명"),(설정) 객체.setAttribute("속성명",속성값);
//     객체.속성명 ,                      객체.속성명="속성값"
// 둘다 똑같다. 택1

let imgAttrNode = imgNode.getAttribute("src");
//images/gosu.jpg 1개만 출력
console.log(imgAttrNode);

imgAttrNode = imgNode.src;
//http://127.0.0.1:5500/jsdemo/images/gosu.jpg
console.log(imgAttrNode);
//  속성임 html의 head위에 title아님 여기서 지정함 title: 이미지위에 마우스 갖다대면 뜨는 글귀
imgNode.setAttribute('title', '스타배우');
imgNode.width = 300;
imgNode.height = 300;