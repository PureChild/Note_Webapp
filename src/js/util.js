//새 노트
var newNote = function () {
  // console.log('새 노트 버튼');
  document.getElementById('memo').value = '';
};

//노트 저장
var saveNote = function() {
  // console.log('저장 버튼');
  localStorage.text = document.getElementById('memo').value;
};

//노트 다운로드
var downloadNote = function () {
  // console.log('다운로드 버튼');
  var blob = new Blob([document.getElementById('memo').value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "text.txt");
};

//전체 화면
var scrFull = function() {
  if(screenfull.enabled){
    // console.log('be fullscreened');
    screenfull.request();
  }
  else{
    alert("can\' be fullscreen");
  }
};

//about
about_layer = document.querySelector('.about_app');

var showDescription = function () {
  // console.log('about버튼');
  about_layer.style.height = "180px";
  about_layer.style.border = "1px black dashed";
};

var hideDescription = function() {
  about_layer.style.height = "0";
  about_layer.style.border = "none";
};
