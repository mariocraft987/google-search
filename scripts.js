function lucky() {
    document.getElementById('content').innerHTML = "";
    document.getElementById('url').innerHTML = "http://www.google.com/feelinglucky";
}

function search() {
    let input = document.getElementById('input').value
    document.getElementById('content').innerHTML = "";
    document.getElementById('url').innerHTML = "http://www.google.com/search?q=" + input
    .replaceAll(" ", "+");
}