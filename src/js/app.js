console.log('my-note app.js');

window.onload = function (ev) {
  text = document.getElementById('memo').value = localStorage.getItem('text');
};

btnNewnote = document.querySelector('.btn-newnote');
btnNewnote.addEventListener('click', newNote);

btnSavenote = document.querySelector('.btn-savenote');
btnSavenote.addEventListener('click', saveNote);

btnDownload = document.querySelector('.btn-notedownload');
btnDownload.addEventListener('click', downloadNote);

btnFullscr = document.querySelector('.btn-fullscreen');
btnFullscr.addEventListener('click', scrFull);

btnAbout = document.querySelector('.btn-about');
btnAbout.addEventListener('click', showDescription);

btnClose = document.getElementById('close_about');
btnClose.addEventListener('click', hideDescription);
