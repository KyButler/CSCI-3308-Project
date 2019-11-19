/**
 * tab title 
 * blinks when it's onblur
 * Chrome & FireFox: window onfocus, onblur method；IE: document onfocusin, onfocusout methood
 */

var titleInit = document.title, isShine = true;
setInterval(function() 
{
    var title = document.title;
    if (isShine == true) 
    {
        if (/new/.test(title) == false) 
        {
            document.title = '【New Message】';
        } 
        else 
        {
            document.title = '【　　　　　】';
        }
        } 
        else 
        {
            document.title = titleInit;
        }
}, 500);

// for Chrome and FireFox  
window.onfocus = function() 
{
    console.log(123);
    isShine = false;
};
window.onblur = function() 
{
    isShine = true;
};

// for IE
document.onfocusin = function() 
{
    isShine = false;
};
document.onfocusout = function() 
{
    isShine = true;
};



/**
 * Desktop notificatioon
 */


window.onload = function () 
{
    suportNotify()
}

//check if browser supports Web Notifications API
function suportNotify()
{
    if (window.Notification) 
    {
            //supported
        console.log("supports"+"Web Notifications API");
        showMess()
    } 
    else 
    {
            //not supported
        alert("doesn't support Web Notifications API");
    }
}

//check if browser supports pop-up ntifications
function showMess()
{
    setTimeout(function () 
    {
        console.log('1：'+Notification.permission);
        //if supports window.Notification and not denied
        if(window.Notification && Notification.permission !== "denied") 
        {
            //show permission alert and ask user if they allow notifications
            Notification.requestPermission(function(status) 
            {
                console.log('2: '+status);
                //permission granted
                if (status === "granted") 
                {
                    var m = new Notification('You received a message', 
                    {
                        body: "Message content",　　//message body
                        icon:"Chat-Application/src/containers/envelope.svg"　　//message icon
                    });
                    m.onclick = function () 
                    {
                        //onclick, and jump to page
                        window.focus();
                    }
                } 
                else
                {
                    alert("The browser does not support pop-up messaages")
                }
            });
        }
    }, 1000)
}