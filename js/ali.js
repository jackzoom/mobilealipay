
// DOM工具集：

function getObj(id) {
    return document.getElementById(id);
}//获取标签ID
//获取样式表样式
function getStyle(obj,attr){
//        document.all为判断IE浏览器的条件
    if(document.all){
//            兼容IE8及以下版本
        return parseInt(obj.currentStyle[attr]);
    }else{
//            兼容火狐和谷歌
        return parseInt(getComputedStyle(obj,false)[attr]);
    }
}

// window.onload=function () {
//     show_data.style.top=-400+"px";
//     show_data.style.transition="";
//
// }



var btn_Close=getObj("btn_Close");
var click_show=getObj("click_show");
var show_data=getObj("show_data");
var hide_data=getObj("hide_data");
var main=getObj("main");


btn_Close.addEventListener("click",function () {

    show_data.style.transition="all .8s ease-in-out";
    moving(0);
    console.log(show_data.style.top);

});

btn_Close.onmouseover=function () {

    btn_Close.style.background="#cccccc";
    btn_Close.style.fontSize="15px";
};
btn_Close.onmouseout=function () {

    btn_Close.style.background="white";
    btn_Close.style.fontSize="20px";
};


click_show.addEventListener("click",function () {

    show_data.style.transition="all .8s ease-in-out";
    moving(-400);
    click_show.innerHTML="单击空白处隐藏";
});

hide_data.addEventListener("click",function () {
    moving(0);
    click_show.innerHTML="单击此处来显示";

});
main.addEventListener("click",function () {
    moving(0);
});

show_data.addEventListener("click",function () {
    if(document.all){
        event.cancelable=true;
    }else{
        event.stopPropagation();
    }

});

function moving(txt) {
    if(document.all){
        event.cancelable=true;
    }else{
        event.stopPropagation();
    }
    show_data.style.top=txt+"px";
}

