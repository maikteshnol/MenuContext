window.onclick = hideMenuContextClick;
window.onkeydown = listenKeys;
var contextMenu = document.getElementById('contextMenu');
function showViewItemsMenu (event) {
    contextMenu.style.left = event.clientX + 'px';
    contextMenu.style.top = event.clientY + 'px';
    contextMenu.style.display = 'block';
    return false;}
function hideMenuContextClick () {
    contextMenu.style.display = 'none';
}
function listenKeys (event) {
   var keyCode = event.which || event.keyCode;
    if(keyCode == 27){
        hideMenuContextClick();
    }
}