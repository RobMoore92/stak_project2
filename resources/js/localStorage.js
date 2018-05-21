function saveToLocal() {
    var req1 = document.getElementById('req1').value;
    var req2 = document.getElementById('req2').value;
    var req3 = document.getElementById('req3').value;
    localStorage.setItem('req1', req1);
    localStorage.setItem('req2', req2);
    localStorage.setItem('req3', req3);
}

function requirements() {
    loadReqs();
}

function calendar() {
    var x = document.getElementById("calendar_hide");
    var y = document.getElementById('req_list');
       var l1 = document.getElementById("nav-label1");
   var l3 = document.getElementById("nav-label3");
   var l4 = document.getElementById("nav-label4");
    y.style.display = "none";
    if (x.style.display === "block") {
        x.style.display = "none";
                l1.classList.remove("zoomOut");
           l4.classList.remove("zoomOut");
           l3.classList.remove("zoomOut");
            l1.classList.add("zoomIn");
           l4.classList.add("zoomIn");
           l3.classList.add("zoomIn");

    } else {
        x.style.display = "block";
                        l1.classList.remove("zoomIn");
           l3.classList.remove("zoomIn");
           l4.classList.remove("zoomIn");
           l1.classList.add("zoomOut");
           l3.classList.add("zoomOut");
           l4.classList.add("zoomOut");
    }
}


function toggler() {
    var x = document.getElementById("req_list");
    var y = document.getElementById("insert_nav");
    var z = document.getElementById('calendar_hide')
           var l4 = document.getElementById("nav-label4");
   var l2 = document.getElementById("nav-label2");
   var l3 = document.getElementById("nav-label3");
    y.style.display = "none";
    z.classList.add("calendar_hide");
    if (x.style.display === "block") {
        x.style.display = "none";
         x.style.display = "none";
                        l2.classList.remove("zoomOut");
           l4.classList.remove("zoomOut");
           l3.classList.remove("zoomOut");
            l2.classList.add("zoomIn");
           l4.classList.add("zoomIn");
           l3.classList.add("zoomIn");
    } else {
        x.style.display = "block";
        y.style.display = "block";
                        l2.classList.remove("zoomIn");
           l3.classList.remove("zoomIn");
           l4.classList.remove("zoomIn");
           l2.classList.add("zoomOut");
           l3.classList.add("zoomOut");
           l4.classList.add("zoomOut");
    }
}

function loadReqs() {
    toggler();
    var origin = document.getElementById('req_list');
    var req1 = localStorage.getItem("req1");
    var req2 = localStorage.getItem("req2");
    var req3 = localStorage.getItem("req3");
    var reqs = [req1, req2, req3];
    origin.innerHTML = '';
    if (typeof reqs[0] === undefined) {
        var no_items = document.createElement(li);
        no_items.innerHTML = 'You have no requirements set';
        origin.appendChild(no_items);
    } else {
        for (var i = 0; i < reqs.length; i++) {
            if (reqs[i] !== '') {
                var list_item = document.createElement("li");
                list_item.classList.add('delete-list')
                list_item.innerHTML = reqs[i];
                origin.appendChild(list_item);

            } else {
                var item_empty = document.createElement("li");
                item_empty.innerHTML = '    ';
                origin.appendChild(item_empty);
            }
        }
    }
}

function saveProject() {
    var title = document.getElementById('title').value;
    var due_date = document.getElementById('due_date').value
    localStorage.setItem('title', title);
    localStorage.setItem('due_date', due_date);
}

function addReferenceText() {
    var reference = window.getSelection().toString();
    localStorage.setItem('reference', reference);
}

function addReferenceUrl(){
        var url = document.getElementById('urlInput').value;
        localStorage.setItem('referenceUrl', url);
       var ding = document.getElementById('ding');
    ding.play()
}


function loadProject() {
    var new_title = localStorage.getItem("title");
    var new_due = localStorage.getItem("due_date");
    var title = document.getElementById('title1');
    var due = document.getElementById('due_date1');
    if (new_title === "") {
        title.innerHTML = "No title has been set";
    } else {
    title.innerHTML += new_title;
    }
    
    if (new_due === "") {
        due.innerHTML = 'No due date has been set';
    } else {
    due.innerHTML += new_due;
    }
}

function save() {
    var textbox = document.getElementById('textbox');
    localStorage.setItem('referenceText', textbox.innerHTML);

}

function saveas() {
alert(test);
}

function snippets_hide() {
    var y = document.getElementById("tool_popup");
          var x = document.getElementById("snippets_popup");
       var l1 = document.getElementById("nav-label1");
   var l2 = document.getElementById("nav-label2");
   var l3 = document.getElementById("nav-label3");
    if (x.style.display === "inline") {
        x.style.display = "none";
        y.style.display = "none";
                l1.classList.remove("zoomOut");
           l2.classList.remove("zoomOut");
           l3.classList.remove("zoomOut");
            l1.classList.add("zoomIn");
           l2.classList.add("zoomIn");
           l3.classList.add("zoomIn");
    } else {
        x.style.display = "inline";
                y.style.display = "none";
            l1.classList.remove("zoomIn");
           l2.classList.remove("zoomIn");
           l3.classList.remove("zoomIn");
           l1.classList.add("zoomOut");
           l2.classList.add("zoomOut");
           l3.classList.add("zoomOut");
    }
}

function tools_hide() {
    var x = document.getElementById("tool_popup");
    var y = document.getElementById("snippets_popup");
   var l1 = document.getElementById("nav-label1");
   var l2 = document.getElementById("nav-label2");
   var l4 = document.getElementById("nav-label4");

    if (x.style.display === "inline") {
        x.style.display = "none";
        y.style.display = "none";
                  l1.classList.remove("zoomOut");
           l2.classList.remove("zoomOut");
           l4.classList.remove("zoomOut");
            l1.classList.add("zoomIn");
           l2.classList.add("zoomIn");
           l4.classList.add("zoomIn");
    } else {
        x.style.display = "inline";
        y.style.display = "none";
                        l1.classList.remove("zoomIn");
           l2.classList.remove("zoomIn");
           l4.classList.remove("zoomIn");
           l1.classList.add("zoomOut");
           l2.classList.add("zoomOut");
           l4.classList.add("zoomOut");
        
    }
}

function referenceList() {
    var x = document.getElementById("reference-hide");
    var l3 = document.getElementById("nav-label3");
   var l2 = document.getElementById("nav-label2");
   var l4 = document.getElementById("nav-label4");
    if (x.style.display === "inline") {
        x.style.display = "none";

    } else {
             x.style.display = "inline";
        y.style.display = "none";

    }
}

function referenceLoad(){
  var refUrl = localStorage.getItem("referenceUrl");
    var refText = localStorage.getItem("reference");
    var originUrl = document.getElementById('reference-url');
    var originText = document.getElementById('reference-text');

    originUrl.innerHTML = refUrl;
    originText.innerHTML = refText;
}

function plagurismList() {
    var x = document.getElementById("reference-hide");
    if (x.style.display === "inline-flex") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-flex";

    }
}

function plagiarismCheck(){
    var danger = document.getElementById('warning');
    danger.play();
    var text1 = document.getElementById('plag');
    text1.style.color = "red";
}


function recentProjects() {
  var title = localStorage.getItem('title');
  var recentProjects = document.getElementById('recent-project');
  if (title === null) {
    recentProjects.innerHTML = 'No recent projects have been saved';
  } else {
        recentProjects.innerHTML = title;
  }
  }

function summarize() {
    hide_mini();
        var mini = document.getElementById("mini-screen");
    var ding = document.getElementById('ding');
    var header = document.getElementById('mini-header');
    var para = document.getElementById('mini-para');  
        header.innerHTML = "Summarized Text"
        para.innerHTML = "There are two types of auctions: those in which the price starts out low and is gradually raised, and those in which the price starts out high and is gradually lowered.<br> Auctions can be conducted in open or closed formats. <br> Though open auctions often result in higher sale prices, closed formats are sometimes preferred when privacy or the need for documentation is paramount.<br> Auctions can be conducted in open or closed formats. <br><br>Though open auctions often result in higher sale prices, closed formats are sometimes preferred when privacy or the need for documentation is paramount." + "<br><br>"+ "</span>";
    
}
function hide_mini() {
    var mini = document.getElementById("mini-screen");
    if (mini.style.display === "block") {
        mini.style.display = "none";
    } else {
        mini.style.display = "block";
}
    
}
function openImage() {
    var elem = document.createElement("img");
    elem.setAttribute("src", "resources/img/camera.jpg");
document.getElementById("imageholder").appendChild(elem);
}

function scanFile(){
    var text = "The scan tool can scan written text and import it to the project area";
    localStorage.setItem("scan", text);
}

function retrieveScan(){
    var ding = document.getElementById('ding');
    ding.play();
    var text = localStorage.getItem("scan");
         var reference = document.getElementById("mini-").innerHTML += '<br><br>' + '<p class="bold">Retrieved text from scan</p>' + text;
  
}