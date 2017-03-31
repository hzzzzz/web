window.onload=function(){
document.getElementById('sub').onclick=function(){
	var request = new XMLHttpRequest();
	request.open("POST", "form.php");
	var user=document.getElementById('user').value;
	var pwd=document.getElementById('password').value;
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.send('user='+user+'pwd='+pwd);
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) { 
				var data = JSON.parse(request.responseText);
				if (data.success) { 
					document.getElementById("remind_3").innerHTML = data;
				} else {
					document.getElementById("remind_3").innerHTML = data;
				}
			} else {
				alert("发生错误：" + request.status);
			}
		} 
	}
}

}