const navGroups = document.querySelectorAll('.navGroup');

navGroups.forEach((group) => {
    group.addEventListener('click', () => {

        // 만약 group이 class로 'nav-bck'를 포함할 경우
        if(group.classList.contains('nav-bck')){
            group.classList.remove('nav-bck');   // 'nav-bck' class 제거
            group.classList.add('nav-bckStyle');   // 'nav-bckStyle' class 추가
        }

        // 만약 group이 class로 'nav-bckStyle'을 포함할 경우
        else if(group.classList.contains('nav-bckStyle')){
            group.classList.remove('nav-bckStyle');  // 'nav-bckStyle' class 제거
            group.classList.add('nav-bck');   // 'nav-bck' class 추가
        }
    });
});