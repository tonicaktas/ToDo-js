//ToDo List

// Global variabel

var taskList = [];



// addItem function

function addItem(){
  var task = document.getElementById('todoInput').value; // sparar input värdet i var task
  var ul = document.getElementById('myUl');

  if(task.trim().length === 0){ // trim tar bort all whitespace från formulären och räknar enbart täcken med denna function
    return false;
  }
  else {
  if(taskList.length < 5){
    taskList.push(task); // lägger till input till slutet av array taskList

    var li = document.createElement('li'); // skapat li



    var text = document.createTextNode(task); // skriver texten från inputen i var text

    li.appendChild(text); // lägegr till child text til li

    var checkMark = document.createElement('button'); // skapar button och sparar den i checkMark
    checkMark.innerHTML = '&check;'; // skapar icon
    checkMark.className = 'listItemButton'; // lägger till class
    checkMark.setAttribute('onclick','checkMe(this)'); // lägger till funktion
    li.appendChild(checkMark); // lägger till child checkMark till li

    var crossMark = document.createElement('button');
    crossMark.innerHTML = '&#x2715;';
    crossMark.className = 'listItemButton';
    crossMark.setAttribute('onclick','removeMe(this)');
    li.appendChild(crossMark);

    ul.appendChild(li); // lägger till child li till ul
    reset(); // resetar input fältet
  }
 }
}

// function reset

function reset(){
  document.getElementById('todoInput').value = ""; // tömmer input fälletet med töm string
}

// function checkMe

function checkMe(item){
  var liTag = item.parentElement; //hämtar parent från knappen som är klickad

  liTag.style.textDecoration = (liTag.style.textDecoration === "line-through") ? "none" : "line-through"; // lääger style
}


// function removeMe

function removeMe(item){
  var liTag = item.parentElement; // hämtar parent av knappen som är klickad med hjälp av callback
  var ulTag = liTag.parentElement;// hämtar parent av litaggen som är parent till knappen som är klickad
  ulTag.removeChild(liTag); // tar bort child som knappen är klickad i
  taskList.pop() // tar bort den clickade elementet från tasklist för att ha koll att det är under 5 inlägg

}







// function enterKey

function enterKey(){
  var input = document.getElementById('todoInput');  // hämtar input fältet
  input.onkeyup = function(key){ // när knappen släpps
    if(key.keyCode === 13){ // om knappen är enter
      addItem();
    }
  }
}

enterKey();


// function clearList

function clearList(){
  var ul = document.getElementById('myUl'); // hämtar ul
  ul.innerHTML = ""; // tömer ul
  taskList.splice(0,taskList.lenght); // tar bort allt från taskList array
}
