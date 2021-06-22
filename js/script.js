//-----Toggleable nav-----//
function navToggle() {
    let nav = document.getElementById("navigationToggle");
    nav.classList.toggle('toggle')
    
}


//-----favourites tab-----//
function tabToggle(event, allContent) {
    let tabContent, tabList, i;
    tabContent = document.getElementsByClassName("tab-content");
    tabList = document.getElementsByClassName("tablist");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    for (i = 0; i < tabList.length; i++) {
        tabList[i].className = tabList[i].className.replace(" active", "");
    }
    document.getElementById(allContent).style.display = "flex";
    event.currentTarget.className = event.currentTarget.className + " active";
}
// let a = document.getElementById("firstContent");
// a.style.display = "block;