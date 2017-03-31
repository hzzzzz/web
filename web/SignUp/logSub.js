window.onload=function(){
document.getElementById("sub").onclick = function() { 
	var request = new XMLHttpRequest();
	request.open("GET", "form.php");
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) { 
				var data = JSON.parse(request.responseText);
				if (data.success) { 
					document.getElementById("searchResult").innerHTML = data;
				} else {
					document.getElementById("searchResult").innerHTML = data;
				}
			} else {
				alert("发生错误：" + request.status);
			}
		} 
	}
}

}