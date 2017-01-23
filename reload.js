$(document).ready(function(){
    
    var counting=0;
    var activated=false;
    
    $(document).mousemove(function(){resetPage()});
    $(document).mousedown(function(){resetPage()});
    $(window).resize(function(){resetPage()});
    $(window).scroll(function(){resetPage()});
    
    function resetPage() {  
        if (!activated) {
            console.log("Page Activated");
            activated=true;
            reLoad();
        } else {
            counting=0;}
    }
    
    function reLoad() {
        counting=counting+1;
        
        //FIXME
        //currently resets every 120 seconds
        //change number to change reset
        if (counting==100) {
            window.scrollTo(0,0);
            window.location.reload();
        }
        var t=setTimeout(function(){reLoad()}, 1000);
    }
});