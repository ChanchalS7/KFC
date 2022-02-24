function move(e,p,c,n){
    console.log(e);
    var length=document.getElementById(c).value.length;
    var maxlength=document.getElementById(c).getAttribute('maxlength');
    if(length==maxlength){
        document.getElementById(n).focus();
    }
    console.log(length);
}