function addNewElement() {
  let ulList = document.getElementById("myList");
  let li = document.createElement("li");
  var input = document.getElementById("input");
  li.appendChild(document.createTextNode(input.value));
  ulList.appendChild(li);
  input.value = "";

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&#10060;";
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
  });

  let doneButton = document.createElement("button");
  doneButton.innerHTML = "&#9989";
  li.appendChild(doneButton);
  doneButton.addEventListener("click", function () {
    console.log(this.parentNode.style.backgroundColor);
    if (this.parentNode.style.backgroundColor === "chartreuse") {
      this.parentNode.style.backgroundColor = "#ffffff";
      this.parentNode.style.textDecoration = "initial";
    } else {
      this.parentNode.style.backgroundColor = "chartreuse";
      this.parentNode.style.textDecoration = "line-through";
    }
  });
}
