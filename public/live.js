function loadDoc() {

    var editor = ace.edit("editor");
    var code = editor.getValue();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("editor_out").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "http://35.222.66.197:9090/run", true);
    // xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
    xhttp.setRequestHeader('Content-Type', 'text/plain');
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhttp.send(code);
}

function reset() {
    var editor = ace.edit("editor");
    editor.setValue("");
}
  