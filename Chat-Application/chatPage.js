console.log("Javascript file loaded.");

/*function sendMessage(userInput) {
    window.addEventListener
    var newMessage = document.createElement("LI");
    var text = document.createTextNode(userInput);
    newMessage.appendChild(text);
    document.getElementById("messages").appendChild(node); 
}*/

document.addEventListener("click", function () {
    console.log("You clicked on the page. . . ")
});



$(document).ready(function () {
    $(".form-control").on("keydown", function (e) {
        if (e.which == 13) {
            e.preventDefault();
            
            var text = document.getElementById("textEntryBox").value;
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(text);         // Create a text node
            console.log("You sent <",text,">");

            node.appendChild(textnode);
            node.classList.add('list-group-item');
            document.getElementById("textEntryBox").value = "";
            document.getElementById("messageList").appendChild(node);     // Append <li> to <ul> with id="myList"
        }
    });
});