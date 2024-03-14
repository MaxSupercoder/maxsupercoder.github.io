"use scrict";

var list = [];
list[0] = "example";

printList();

function addNew(){
  //declaration
  var usrInput = document.getElementById("input").value;
  document.getElementById("input").value = "";
  //implementation
  list[list.length] = usrInput;
  printList();
}

var find = function(a){
  var usrInput = document.getElementById("input").value;
  var search;
  if (usrInput[0] == "#"){
    search = usrInput[1];
  } else {
    for (var i = 0; i <= list.length;){
      if (list[i] == a){
        search = i;
        break;
      } else {
        i++;
      }
    }
  }
  
  search--;
  return search;
}

function remove(){
  var usrInput = document.getElementById("input").value;
  var target = find(usrInput);
  list[target] = "";

  for (var i = target + 1; i < list.length;){
    list[i - 1] = list[i];
    i++;
  }

  list.length = list.length - 1;
  printList();
}

function complete(){
  var usrInput = document.getElementById("input").value;
  var target = find(usrInput);
  list[target] = "<del>" + list[target] + "</del>";
  printList();
}

function printList(){
  var toBePrinted = list[0];
  for(var i = 1; i < list.length;){
    toBePrinted += "<br><br>" + list[i];
    i++;
  }
  document.getElementById("output").innerHTML = toBePrinted;
  document.getElementById("input").value = "";
}

function saveList(){
  var usrInput = document.getElementById("input").value;
  let string = JSON.stringify(list);
  localStorage.setItem(usrInput , string);
}

function getList(){
  var usrInput = document.getElementById("input").value;
  let retString = localStorage.getItem(usrInput);
  let retArray = JSON.parse(retString);
  list = retArray;
  printList();
}

function deleteList(){
  var usrInput = document.getElementById("input").value;
  localStorage.removeItem(usrInput);
}