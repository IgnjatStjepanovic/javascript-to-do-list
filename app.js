function addNewElement() {
  let ulList = document.getElementById("myList");
  let li = document.createElement('li');
  var input = document.getElementById('input');  
  li.appendChild(document.createTextNode(input.value));
  ulList.appendChild(li);
  input.value = "";
}
