var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
			mapOption = { 
				center: new kakao.maps.LatLng(37.484178356191684, 127.11556749476284), // 지도의 중심좌표
				level: 4 // 지도의 확대 레벨
			};
		
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
		
		// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.484178356191684, 127.11556749476284); 
		
		// 마커를 생성합니다
var marker = new kakao.maps.Marker({
			position: markerPosition
		});
		
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
  var swiper = new Swiper(".mySwiper", {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: "auto",
			coverflowEffect: {
			  rotate: 50,
			  stretch: 0,
			  depth: 100,
			  modifier: 1,
			  slideShadows: true,
			},
			pagination: {
			  el: ".swiper-pagination",
			},
		});