var newWindowButton = document.getElementById('new-window-test');

newWindowButton.onclick = function() {
  var url = document.getElementById('url').value;
  var windowName = document.getElementById('name').value;
  window.open(url, windowName);
};
