
var dialogButtons = document.getElementsByClassName("dialog-button");

for(var i=0; i< dialogButtons.length; i++){
    document.getElementsByClassName("dialog-button")[i].addEventListener('click', function(event){
        openDialog(event);
    });
}


var openDialog = function (event){

    console.log(event);
    console.log(event.target.id);

    

    var options = {
        icon:{
            success:'assets/img/success.png',
            warning:'assets/img/warning.png',
            info:'assets/img/info.png'
        },
        text:'Boş!',
        confirm:false,
        closeButton:true
    };
    
    var myDialogDiv = document.createElement("div"); 
    myDialogDiv.className = "my-dialog";
    var myDialogHeaderDiv = document.createElement("div"); 
    myDialogHeaderDiv.className = "dialog-header";
    var myDialogHeaderCloseButton = document.createElement("button"); 
    myDialogHeaderCloseButton.className = "btn-close";
    myDialogHeaderCloseButton.innerHTML="X";
    var myDialogBodyDiv = document.createElement("div"); 
    myDialogBodyDiv.className = "dialog-body";
    var myDialogFooterDiv = document.createElement("div"); 
    myDialogFooterDiv.className = "dialog-footer";
    myDialogHeaderDiv.appendChild(myDialogHeaderCloseButton);
    myDialogDiv.appendChild(myDialogHeaderDiv);
    myDialogDiv.appendChild(myDialogBodyDiv);
    myDialogDiv.appendChild(myDialogFooterDiv);
    document.body.appendChild(myDialogDiv);

    myDialogDiv.style.display = 'block';

    myDialogHeaderCloseButton.addEventListener('click', function () {
        this.parentNode.parentNode.style.display = "none";
    });

    myDialogHeaderDiv.addEventListener('click', function () { zindex(this); });
    myDialogBodyDiv.addEventListener('click', function () { zindex(this); });
    myDialogFooterDiv.addEventListener('click', function () { zindex(this); });

    dragElement(myDialogDiv);
}


function zindex(element){
    var dialogs = document.getElementsByClassName("my-dialog");
    for(i=0; i< dialogs.length; i++){
     dialogs[i].style.zIndex = i;
    }
    element.parentNode.style.zIndex = 999;
}

function dragElement(elmnt) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (elmnt.querySelector(".dialog-header")) {
        elmnt.querySelector(".dialog-header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {

        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;

    }

    function elementDrag(e) {

        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
