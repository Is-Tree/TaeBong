var container = document.querySelector(".map"); //지도를 담을 영역의 DOM 레퍼런스

var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(35.82626220490655, 128.81856295258535), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var imageSrc = "./images/marker_red.png", // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(64, 54), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 54)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(35.82626220490655, 128.81856295258535); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="\thttps://map.kakao.com/link/map/90820395" target="_blank">' +
    '    <span class="title">태봉정밀</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다
var position = new kakao.maps.LatLng(35.82626220490655, 128.81856295258535);

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1
});

//Slider

const pics = document.querySelectorAll('.pics'),
    lb = document.querySelector(".LB"),
    rb = document.querySelector(".RB");

function handleLC(event){
    event.preventDefault();
    pics.forEach( pic => {
        if( Number(pic.style.order) === pics.length){
            pic.style.order = 1;
        }
        else if(Number(pic.style.order) === 2|| Number(pic.style.order) === 4){
            pic.style.order = Number(pic.style.order)+1;
            pic.classList.remove( pic.className.split(" ")[1]);
        }
        else if(Number(pic.style.order) === 1|| Number(pic.style.order) === 3){
            pic.style.order = Number(pic.style.order)+1;
            pic.classList.add("nearby");
        }
        else{
            pic.style.order = Number(pic.style.order)+1;
        }
    })
}

function handleRC(event){
    event.preventDefault();
    pics.forEach( pic => {
        if( Number(pic.style.order) === 1){
            pic.style.order = pics.length;
        }
        else if(Number(pic.style.order) === 2|| Number(pic.style.order) === 4){
            pic.style.order = Number(pic.style.order)-1;
            pic.classList.remove( pic.className.split(" ")[1]);
        }
        else if(Number(pic.style.order) === 3|| Number(pic.style.order) === 5){
            pic.style.order = Number(pic.style.order)-1;
            pic.classList.add("nearby");
        }
        else{
            pic.style.order = Number(pic.style.order)-1;
        }
    })
}

// sending email

const name = document.querySelector(".name"),
    message = document.querySelector(".message"),
    sendBtn = document.querySelector(".send");

function sendEmail(event){
    event.preventDefault();
    window.open(`mailto:myf8335@naver.com?subject=${ "From Web: "+ name.value}&body=${message.value}`);
}

// Auto Scrolling

const navbar = document.querySelector('.menus');

function handleMenu(event){
    event.preventDefault();
    const link = event.target.dataset.link;
    if(link == null){
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ block: "center", inline: "center", behavior: "smooth"});
}

// hamburger

const burger = document.querySelector('.bar'),
    menus = document.querySelector('.menu__container');

function handleburger(event){
    event.preventDefault();
    console.log(event);
    if(menus.classList[1] === 'none'){
        menus.classList.remove('none');
    }else {
        menus.classList.add('none');
    }
}

// init

function init() {
    lb.addEventListener("click", handleLC);
    rb.addEventListener("click", handleRC);
    sendBtn.addEventListener("click", sendEmail);
    navbar.addEventListener("click", handleMenu);
    burger.addEventListener("click", handleburger);
}

init();