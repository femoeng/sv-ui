function check_empty() {
	if (document.getElementById('titulo').value == "") {
		alert("Fill All Fields !");
	} else {
		document.getElementById('form').submit();
		alert("Form Submitted Successfully...");
	}
}
//Function To Display Popup
function div_show() {
	document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
	document.getElementById('abc').style.display = "none";
}

function hideshow(){
  if (document.getElementById('div_right')) {
    if (document.getElementById('div_right').style.display == "none"){
      document.getElementById('div_grid').style.display = "none";
      document.getElementById('div_right').style.display = "block";
      document.getElementById("b_grid").disabled = false;
      document.getElementById("b_table").disabled = true;
    }
  	else{
      document.getElementById('div_grid').style.display = "block";
      document.getElementById('div_right').style.display = "none";
      document.getElementById("b_grid").disabled = true;
      document.getElementById("b_table").disabled = false;
    }
  }
}

function lista() {
      var p = document.getElementById('listView1');

      var filhos = p.childNodes;
      for( i = filhos.length - 1; i >= 0; i-- ) {
        if( filhos[i].tagName == 'LI' ) {
          p.refresh;
        }
      }

      var li = document.createElement('li');
      li.innerHTML = document.getElementById('titulo').value;
      p.appendChild(li);

      document.getElementById('abc').style.display = "none";
}

function projectista_show() {
  document.getElementById('div_projectista').style.display = "block";
}

function tutor_show() {
  document.getElementById('div_tutor').style.display = "block";
}

function visitante_show() {
  document.getElementById('div_visitante').style.display = "block";
}