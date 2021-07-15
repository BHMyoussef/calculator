var current_btn=document.getElementById("number0");
var number1=0;
var number2=0;
var result=0;
var operateur;
var new_input=true;
var firstTime=true;
var op_Still=false;

document.getElementById("btn_holder").addEventListener("pointerdown",function(event){
		if(event.target.id!="btn_holder"){
			//ici je change le border bottom du button
			current_btn=event.target;
			current_btn.style.border="none";

			//ici on obtient un button de type nombre on écrit sur le screen
			notNbr=current_btn.id=="equale" || current_btn.id=="delete" || current_btn.id=="reset" || new RegExp("op").test(current_btn.id);
			if(notNbr==false){
				if(new_input==false){
					document.getElementById("screen").value+=current_btn.value;
				}else{
					document.getElementById("screen").value=current_btn.value;
					new_input=false;
				}
			}
			//sinon il faut séparez entre les opérateur et egale et del et reset
			else{
				//si le button est un opérateur
				if(new RegExp("op").test(current_btn.id)){
					if(op_Still)
						number1=doOp(number1*1,document.getElementById("screen").value*1,operateur);
					else
						number1=document.getElementById("screen").value*1;
					switch(current_btn.value){
						case '+':
								operateur="add";
								op_Still=true;
								break;
						case '-':
								operateur="min";
								op_Still=true;
								break;
						case 'X':
								operateur="mult";
								op_Still=true;
								break;
						case '/':
								operateur="div";
								op_Still=true;
								break;
					}
					new_input=true;	
				}


				//si le button est un egale
				else if(current_btn.id=="equale"){
					if(operateur!=undefined){
						number2=document.getElementById("screen").value*1;
						result=doOp(number1*1,number2*1,operateur);
						op_Still=false;
						operateur=undefined;
					}
					document.getElementById("screen").value=result;
					new_input=true;	
				}
				//si le button est delete
				else if(current_btn.id=="delete"){
					valeur=document.getElementById('screen').value;
					document.getElementById('screen').value=valeur.substring(0,valeur.length-1);				
				}
				else if(current_btn.id="reset"){
					number1=0;
					number2=0;
					result=0;
					operateur=undefined;
					new_input=true;
					firstTime=true;
					op_Still=false;
					document.getElementById("screen").value=0;
				}
			}
			//console.log(result,operateur);


		}
});
document.body.addEventListener("pointerup",function(event){
		if(current_btn!=null)
			current_btn.style.borderBottom="3px solid rgba(0,0,0,0.6)"
});
function doOp(a,b,op){
	switch(op){
		case 'add':
				return a+b;
				break;
		case 'min':
				return a-b;
				break;
		case 'mult':
				return a*b;
				break;
		case 'div':
				return a/b;
				break;
	}
}


