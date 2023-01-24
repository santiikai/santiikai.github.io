const mobileView = document.getElementById("mobileView");
mobileView.addEeventListener("click", function(e) {
    if(document.getElementsByTagName('meta')['viewport'].content=='width= 1440px;'){
        document.getElementsByTagName('meta')['viewport'].content='width= 400px;';
       }else{
        document.getElementsByTagName('meta')['viewport'].content='width= 1440px;';
       }
});