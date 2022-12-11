let userinfo;
function loginEvent() {
    let user_name="";
    let i = 0;
    userinfo=document.getElementById("user").value;
    while (true) {
        if (userinfo[i] == "@") {
            break;
        }
        user_name += userinfo[i];
        i++;
    }
    alert(user_name+"님, 환영합니다!");
}


function findChecked(event) {
    if (event.checked == true) {
        let ret = confirm("로그인 정보를 저장하시겠습니까?");
        return ret;
    }
}