/**
 * Created by Administrator on 2017/8/5.
 */



















































/*
* document.getElementsByClassName();//ie8��֮ǰ�汾��֧�֡�
* className:����
* context:ǰ��ĸ���Ԫ����
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



//.nextSibling       �м��������� ,�е���������ҵ��ı��ڵ㡣
    //.nextElenmentSibling   ie ��֧��

function next(elem){
    do{
        elem=elem.nextSibling;
    }while( elem&&elem.nextSibling.nodeType!=1 );

    return elem;
}
//ǰһ���ֵ�
function prev(elem){
    do{
        elem=elem.previousSibling;
    }while( elem&&elem.previousSibling.nodeType!=1 );

    return elem;
}


//���������ԣ���firstChild
function first(elem){
    elem=elem.firstChild;
    return elem.nodeType==1?elem:next(elem);
}

//д�����Ǻ�������
//handler�� �¼��Ĵ�����
function addEvent(elem,type,handler){
    if(elem.addEventListener){
        elem.addEventListener(type,handler);
    }else if(elem.attachEvent){
        elem.attachEvent("on"+type,handler);
    }else{
        elem["on"+type]=handler;
    }
        };
























