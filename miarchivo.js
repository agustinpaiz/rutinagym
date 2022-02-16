let routineName = null;
let description = null;
let listExercises = [];

document.getElementById("routineName").addEventListener("change", changeName);
document.getElementById("description").addEventListener("change", changeDescription);

function changeName(){
routineName = document.getElementById("routineName").value;
console.log("routineName:   "+routineName);
}

function changeDescription(){
routineName = document.getElementById("description").value;
console.log("description:   "+routineName);
}

let personas =[
  ["Julio", 27, "Estados Unidos",["blue","black"] ],
  ["Maria", 21, "Uraguay",["brown","green"] ],
  ["Brian", 35, "Argentina",["green","red"] ],
  ["Susana", 42, "Australia",["blue","blond"] ]
  ];

function addExercise(){
	let e = document.getElementById("selector");
	let strExercise = e.options[e.selectedIndex].text;
  let r = document.getElementById("selector2");
  let RepsOrSeconds = r.options[r.selectedIndex].text;
  let number = document.getElementById("repsOrSeconds").value;
	console.log(strExercise + "---" + RepsOrSeconds +"---" +number);
	listExercises.push({
    exercise :strExercise,
    number : number ,
    RepsOrSeconds : RepsOrSeconds
  });
	console.log(listExercises);
	
	
	let prop = listExercises[listExercises.length - 1];
    document.getElementById("Exercises").innerHTML += '<li>'+ 
    prop.exercise +"   -----   " +prop.number+ " " +prop.RepsOrSeconds +"     " + '<button id='+prop+ ' class="btn" onclick="deleteExercise(this.id)"><i class="fa fa-close"></i></button>' + '</li>';
	
}

function deleteExercise(exercise){
  console.log("MI LISTA : "+listExercises);
  console.log("ESTOY BORRANDO : "+exercise);
  listExercises.splice(exercise,1);
    alert ("No se encontro");
  console.log("MI NUEVA LISTA : "+listExercises);
  showExercises();
}

function showExercises(){
	document.getElementById("Exercises").innerHTML = null;
	
	for (let prop in listExercises) {
    document.getElementById("Exercises").innerHTML += '<li>'+ 
listExercises[prop].exercise +"   -----   " +listExercises[prop].number+ " " +listExercises[prop].RepsOrSeconds +"     " + '<button id='+prop+ ' class="btn" onclick="deleteExercise(this.id)"><i class="fa fa-close"></i></button>'
			
	+'</li>';
}
}