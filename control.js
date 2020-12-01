const btnn = document.querySelector('.btn');
btnn.onclick = function() {
    let input1 = document.getElementById('Usuario').value;
	let input2 = document.getElementById('Clave').value;
	if (input1 == '' && input2 == '') {
        alert("Los campos Usuario y Clave estan vacios.");
		return false;
        }
	else if (input1 == '' && input2 != ''){
		alert("El campo Usuario esta vacio.");
		return false;
		}
	else if (input1 != '' && input2 == ''){
		alert("El campo Clave esta vacio.");
		return false;
		}
	else if(input1.includes("@") == false){
		alert("Falta el arroba en el campo Usuario.");
		return false;
		}
	return true;
	}