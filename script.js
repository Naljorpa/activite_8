

document.querySelector('#button').addEventListener('click', logMessages);

function logMessages() {
  var m ="Message";
  console.log(m);
  m = "Attention!";
  console.warn(m);
  m = "Erreur!"
  console.error(m);
}
