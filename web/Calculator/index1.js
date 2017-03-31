var nums=document.getElementsByName('num');
var show=document.getElementById('result');

function showmsg(){
    var numValue=this.value;
	if (numValue=="AC") {
		show.value=0;
	}else if(numValue=="DEL"&&show.value!==0){
        show.value=show.value.slice(0, -1);
	}else if(numValue=="%"){
		show.value=Math.round(show.value)/100;
	}else if(numValue=="="){
		show.value=eval(show.value);
	}else{
		show.value+=this.value;
	}
}


for(var i=0;i<nums.length;i++){
    nums[i].addEventListener("click", showmsg, false);
}

