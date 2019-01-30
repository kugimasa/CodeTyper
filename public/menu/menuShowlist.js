'use strict'
{

    function addList(filename){
        var divElement = document.createElement("div");
        //ボタン生成
        //ボタンクリック時にpracticeページに遷移
        //divElement.innerHTML = '<input type="button" value="'+filename+'" onclick="changePractice('+filename+')">';
        divElement.innerHTML = '<button onclick="changePractice(\''+filename+'\');">'+filename+'</button>';
        //divElement.innerHTML = '<button onclick="A();">'+filename+'</button>';
        var parentObject = document.getElementById("fileList");
        parentObject.appendChild(divElement);
    }
    var storageRef = firebase.storage().ref();
    var databaseRef = firebase.database().ref("/c");
    //databaseの並び順を変えてボタン生成
    //onメソッドはブラウザのリロード時、データの追加時、更新時に発火
    databaseRef.orderByChild("filename").on('child_added',function(snapshot){
        console.log(snapshot.val().filename);
        addList(snapshot.val().filename);
    });
}