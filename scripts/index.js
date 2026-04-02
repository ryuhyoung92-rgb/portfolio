//1. 그래픽 영역 부모 안 a(1)를 클릭 시(href#처리)
//2. 클릭한 a안에 이미지 경로(src)를 인식(저장) -> addEventListner('click',function(){})
//3. 숨긴 팝업(2)을 보이게 하면서 -> .style.display = 'block'
//4. 팝업안에 이미지 경로에 클릭한 a의 이미지경로를 대입
//5. 팝업 영역 또는 팝업 안 X버튼(3) 클릭 시
//6. 팝업 숨기기

const graphic_project_a = document.querySelectorAll('.graphic_container a'); //document = body
const graphic_popup = document.querySelector('.graphic_popup_bg');
const graphic_popup_close = graphic_popup.querySelector('#close');
console.log(graphic_project_a, graphic_popup, graphic_popup_close);

console.log(graphic_project_a[0].children[0].src);
console.log(graphic_popup.children[0].children[1].src); //속성까지 잡아줘야 경로를 잡을 수 있음
console.log(graphic_popup_close.parentNode.parentNode.parentNode);

// graphic_project_a[0].addEventListener('click',function(e){ //1
//     e.preventDefault(); //a태그의 href 기본기능 막기함수
//     // console.log('클릭테스트');
//     let aSrc = graphic_project_a[0].children[0].src; //2
//     graphic_popup.style.display = 'block'; //3
//     graphic_popup.children[0].children[1].src = aSrc; //4
//     //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
//     graphic_popup.children[0].style.width = '60%';
//     graphic_popup.children[0].style.height = '33vh';
//     //팝업이 실행됐을 때 뒤쪽 body의 전체 스크롤을 막기
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[1].addEventListener('click',function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[1].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '60%';
//     graphic_popup.children[0].style.height = '35vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[2].addEventListener('click',function(e){
//     e.preventDefault();
//     graphic_popup.style.display = 'block';
//     let aSrc = graphic_project_a[2].children[0].src
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '30%';
//     graphic_popup.children[0].style.height = '83vh';
//     document.body.style.overflow = 'hidden';
// })

graphic_popup_close.addEventListener('click',function(){ //5
    graphic_popup_close.parentNode.parentNode.parentNode.style.display = 'none'; //6
    document.body.style.overflow = 'auto';
})

function graphic_func(event, index, w=80, h=60){
    event.preventDefault(); //a태그의 href 기본기능 막기함수
    let aSrc = graphic_project_a[index].children[0].src //2
    console.log(aSrc);
    graphic_popup.style.display = 'block'; //3
    graphic_popup.children[0].children[1].src = aSrc; //4
    //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
    graphic_popup.children[0].style.width = w+'%'; //+연결연산자
    graphic_popup.children[0].style.height = h+'vh';
    //팝업이 실행됐을 때 뒤쪽 doby의 전체 스크롤 막기
    document.body.style.overflow = 'hidden';
}

graphic_project_a[0].addEventListener('click',function(e){graphic_func(e, 0, 60, 33)})
graphic_project_a[1].addEventListener('click',function(e){graphic_func(e, 1, 60, 35)})
graphic_project_a[2].addEventListener('click',function(e){graphic_func(e, 2, 30, 83)})
graphic_project_a[3].addEventListener('click',function(e){graphic_func(e, 3, 30, 60)})
graphic_project_a[4].addEventListener('click',function(e){graphic_func(e, 4, 30, 60)})
graphic_project_a[5].addEventListener('click',function(e){graphic_func(e, 5, 30, 61)})
graphic_project_a[6].addEventListener('click',function(e){graphic_func(e, 6, 30, 60)})
graphic_project_a[7].addEventListener('click',function(e){graphic_func(e, 7, 30, 60)})
graphic_project_a[8].addEventListener('click',function(e){graphic_func(e, 8, 30, 60)})
graphic_project_a[9].addEventListener('click',function(e){graphic_func(e, 9, 30, 60)})
graphic_project_a[10].addEventListener('click',function(e){graphic_func(e, 10, 30, 60)})
graphic_project_a[11].addEventListener('click',function(e){graphic_func(e, 11, 30, 60)})
graphic_project_a[12].addEventListener('click',function(e){graphic_func(e, 12, 30, 60)})
graphic_project_a[13].addEventListener('click',function(e){graphic_func(e, 13, 30, 60)})
graphic_project_a[14].addEventListener('click',function(e){graphic_func(e, 14, 30, 60)})