$(function(){
	var receiveIcon；
	var receiveMessage；
	var audioElementHovertree;
	var showNotification =false;
//only show notification when on blur
    window.onblur = function () {
        showNotification = true;
    }
    window.onfocus = function () {
        showNotification = false;
    }});
 
//message notification
function check() {
    //check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
        return false;
    }
    if (Notification.permission !== "granted") {
        Notification.requestPermission(function (permission) {
            // Whatever the user answers, we make sure we store the information
            if (!('permission' in Notification)) {
                Notification.permission = permission;
            }
        });
        return false;
    }
    return showNotification;
}
 
function notifyMe() {
    if (check()) {
        var notification = new Notification('New Message', {
            icon: receiveIcon,
            body:receiveMessage
        });
 
        notification.onshow = function () {
            $('audio').remove();
            audioElementHovertree = document.createElement('audio');
            audioElementHovertree.setAttribute('src', 'http://w.qq.com/audio/classic.mp3');
            audioElementHovertree.setAttribute('autoplay', 'autoplay'); //turn on auto play
            audioElement.load();
        }
 
 
        notification.onclick = function () {
            window.focus();
        };
 
        setTimeout(notification.close.bind(notification), 5000);//auto clear notifications
    }
}