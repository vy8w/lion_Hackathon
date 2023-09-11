//URL을 이용해서 전화번호 값 가져옴
var urlParams = new URLSearchParams(window.location.search);
var phone = urlParams.get("phone");
    
var rewardAmount = 5000; 

document.getElementById("rewardText").innerHTML = phone + "님의 적립금 : " + rewardAmount + "원 있습니다."
