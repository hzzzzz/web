<?php 
header("Content-Type: text/plain;charset=utf-8"); 

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
	search();
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
	create();
}

    function search(){
        if (!isset($_GET["user"]) || empty($_GET["user"])
		|| !isset($_GET["pwd"]) || empty($_GET["pwd"])) {
        	echo "密码账号错误"；
        }
        echo "登录成功"；
    }

    function create(){
        if (!isset($_POST["user"]) || empty($_POST["user"])
		|| !isset($_POST["pwd"]) || empty($_POST["pwd"])) {
        	echo "注册失败";
		    return;
        }
        echo "注册成功";
    }
    
 ?>