/**
 * Created by Administrator on 2017/8/5.
 */



















































/*
* document.getElementsByClassName();//ie8及之前版本不支持。
* className:类名
* context:前面的父类元素名
* */
function getByClass(className,context){
    var result=[];
    context=context||document;
    var arr=document.getElementsByTagName('*');
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].className.indexOf(className)!=-1){
            result.push(arr[i]);
        }
    }
    return result;
}



//.nextSibling       有兼容性问题 ,有的浏览器会找到文本节点。
    //.nextElenmentSibling   ie 不支持

function next(elem){
    do{
        elem=elem.nextSibling;
    }while( elem&&elem.nextSibling.nodeType!=1 );

    return elem;
}
//前一个兄弟
function prev(elem){
    do{
        elem=elem.previousSibling;
    }while( elem&&elem.previousSibling.nodeType!=1 );

    return elem;
}


//消除兼容性，找firstChild
function first(elem){
    elem=elem.firstChild;
    return elem.nodeType==1?elem:next(elem);
}

//写括号是函数调用
//handler： 事件的处理函数
function addEvent(elem,type,handler){
    if(elem.addEventListener){
        elem.addEventListener(type,handler);
    }else if(elem.attachEvent){
        elem.attachEvent("on"+type,handler);
    }else{
        elem["on"+type]=handler;
    }
        };
























