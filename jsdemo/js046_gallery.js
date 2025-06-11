//(1) 작은 이미지를 클릭하면 큰 이미지 보이게
let bigPhoto = document.querySelector('#photo > img');

let list_zone = document.querySelector('#inner_list');
let ul_li = list_zone.children;
console.log(ul_li); //HTMLCollection(8)0:li 1:li 2:li 3:li 4:li 5:li 6:li 7:li length:8

//HTMLCOllection -> Array
ul_li = Array.from(ul_li); // il_li [...ul_li];

ul_li.map((liTag, idx) => {
    let aTag = liTag.querySelector('a');
    aTag.onclick = (e) => {
        bigPhoto.src = aTag.href;
        e.preventDefault();
    }
});

//(2) 다음( > )버튼을 클릭할때 마다 <li>이 100만큼 이동하게 한다.
//클릭한 수 누적
let m_num = 0;
let b_btn = document.querySelector(`#next_btn`);
b_btn.onclick = (e) => {
    if (m_num >= ul_li.length - 3) return false;

    m_num++;
    list_zone.style.marginLeft = -100 * m_num + 'px';
    e.preventDefault(); //return false
}

//(3) 다음( < )버튼을 클릭할때 마다 <li>이 100만큼 이동하게 한다.

let before_btn = document.querySelector('#before_btn');
before_btn.onclick = (e) => {
    if (m_num <= 0) return false;

    m_num--;
    list_zone.style.marginLeft = -100 * m_num + 'px';
    e.preventDefault(); //return false
}
