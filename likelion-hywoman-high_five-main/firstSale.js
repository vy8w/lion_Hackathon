// 참고자료: https://letsgojieun.tistory.com/88
const aClick = document.querySelectorAll('.aColor');

for(let i=0; i<aClick.length; i++){
    aClick[i].addEventListener('click', function() {
        this.classList.toggle('aClick');
    });
}