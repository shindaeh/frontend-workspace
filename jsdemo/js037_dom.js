let pNode = document.querySelector('#wrap');
//1 P null
//엘리먼트(요소)는 속성(타입값이) 1고정
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`);

//속성명 pNode의 속성들
let pAttr = pNode.attributes;
// NamedNodeMap { 0: id, 1: class, id: id, class: class, length: 2 }
console.log(pAttr);
console.log(pAttr[0]); //id=wrap
console.log(pAttr.id); //id=wrap
console.log(pAttr.length); //2(요소의 갯수)
//2(Attr의 값) id(node의 내용) wrap(0번째 인덱스의 속성의 값)
console.log(`${pAttr[0].nodeType} ${pAttr[0].nodeName} ${pAttr[0].nodeValue}`)

let textNode = pNode.firstChild;
console.log(textNode); // "content"
//3(Text의 값) #text(node의 내용) content(node의 content값)
console.log(`${textNode.nodeType} ${textNode.nodeName} ${textNode.nodeValue}`)

//////////////////////////////////////////////////////////
//텍스트만 출력할때
console.log(pNode.innerText); //content
console.log(pNode.textContent); //content

let fname = document.querySelector("#fname");
console.log(fname.value); // 홍길동