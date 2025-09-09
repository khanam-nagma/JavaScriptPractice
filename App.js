function addElement() {
  const newDiv = document.createElement("div2");
  const newContect = document.createTextNode(
    "The document.createElement() method in JavaScript creates a new HTML element with a specified tag name."
  );
  newDiv.appendChild(newContect);
  const newElem = document.querySelector("#id");
  document.body.insertBefore(newDiv, newElem);
}
addElement();
