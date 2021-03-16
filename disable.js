document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117 ||
         e.keyCode === 73||
         e.keyCode === 105)) 
         {
             alert("hello");
        return false;
        
    } 
    else if(e.metaKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117 ||
         e.keyCode === 73||
         e.keyCode === 105)) 
         {
             alert("hello");
        return false;
        
    }
    else if(e.keyCode=== 123)
    {
        alert("hello");
        return false;
    }
    

        else {
        return true;
    }
};