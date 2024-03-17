
let demo = '<br/><img src="img/logoGoogle.jpg" draggable="false" width="240" >';
demo += '<select name="searchs"><option>10 results</option><option>30 results</option><option>100 results</option></select>';
demo += '<hr><p style="text-align: center; color: gray;">Showing 1-10 results that apeared in 0.03 seconds</p>'

function lucky() {
    /* demo += '<a href="https://en.wikipedia.org/wiki/Dog">Dogs (wiki)</a>'
    demo += '<h6>The dog is a domesticated descendant of the wolf. Also called<br/> the domestic dog, it is derived from extinct gray wolves, and the gray wolf is the dogs...</h6>'
    demo += '<a href="https://en.wikipedia.org/wiki/Cats">Cats (wiki)</a>'
    demo += '<h6>The cat (Felis catus), commonly referred to as the<br/> domestic cat or house cat, is the only domesticated species in the family Felidae.</h6>' */
    document.getElementById('content').innerHTML = demo;
    document.getElementById('url').innerHTML = "http://www.google.com/feelinglucky";
}

function search() {
    let input = document.getElementById('input').value
    if (input != "") {
    document.getElementById('content').innerHTML = demo;
    document.getElementById('url').value = "http://www.google.com/search?q=" + input
    .replaceAll(" ", "+");
    }
}
