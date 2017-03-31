function jsq(num) {
            if(num=="%"){
                document.getElementById('screenName').value=Math.round(document.getElementById('screenName').value)/100;
            }else{
                document.getElementById('screenName').value += document.getElementById(num).value;
            }
        }

function eva() {
            document.getElementById("screenName").value = eval(document.getElementById("screenName").value);
        }

function clearNum() {
            document.getElementById("screenName").value = "";
            document.getElementById("screenName").focus();
        }

function tuiGe() {
            var arr = document.getElementById("screenName");
            arr.value = arr.value.substring(0, arr.value.length - 1);
        }