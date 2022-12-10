let userinfo = document.getElementById("user");

function loginEvent() {
    let user_name = 0;
    let i = 0;
    while (true) {
        if (userinfo[i] == "@") {
            break;
        }
        user_name += userinfo[i];
        i++;
    }
    alert("환영합니다! " + user_name + "님!");
}


function findChecked(event) {
    if (event.checked == true) {
        let ret = confirm("로그인 정보를 저장하시겠습니까?");
        return ret;
    }
}