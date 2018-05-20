function loadProject(){
    var new_title = localStorage.getItem("title");
    var new_due = localStorage.getItem("due_date");
    var title = document.getElementById('title1');
    var due = document.getElementById('due_date1');
    title.innerHTML = (new_title);
    due.innerHTML = ('Due: '+ new_due);
}

function save(){
    var textbox = document.getElementById('textbox');
    localStorage.setItem('save', textbox.textContent);
}