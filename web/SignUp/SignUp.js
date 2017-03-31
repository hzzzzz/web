var a=document.getElementById('user');
var b=document.getElementById('password');

function oBlur_1() {
    if (a.value=="") { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
    } else { //用户框value值不为空
        document.getElementById("remind_1").innerHTML = "";
    }
}

function oBlur_2() {
    if (b.value=="") { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
    } else { //密码框value值不为空
        document.getElementById("remind_2").innerHTML = "";
    }
}

//用户框获得焦点的隐藏提醒
function oFocus_1() {
    document.getElementById("remind_1").innerHTML = "";
}

//密码框获得焦点的隐藏提醒
function oFocus_2() {
    document.getElementById("remind_2").innerHTML = "";
}

function submitText() {
    if (a.value=="" && b.value=="") { //用户框value值和密码框value值都为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        return false; //只有返回true表单才会提交
    } else if (a.value=="") { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        return false;
    } else if (b.value=="") { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        return false;
    } else{
    	document.getElementById("remind_1").innerHTML = "";
        document.getElementById("remind_2").innerHTML = "";
        return true;
    }
}


