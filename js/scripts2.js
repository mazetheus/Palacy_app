function upUp(){
  var element = document.getElementById("logoholder");
  element.classList.add("logoholderup");
  element = document.getElementById("img-logo");
  element.classList.add("img-logo-min");
  element = document.getElementById("h2-agendamento");
  element.classList.add("disabled");
  element = document.getElementsById("top-itens");
  console.log("top-itens");
  element.classList.add("top-itens-small");
};