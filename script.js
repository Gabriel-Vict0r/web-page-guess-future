const ansewerElement = document.querySelector('.answer')
const askElement = document.querySelector('.ask-to-do')
const askButton = document.querySelector('.askButton')
const answers = [
  "Certeza.",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As espectativas não são tão boas.",
  "Sim.",
  "concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];
function doAsk() {

    if(askElement.value == "") {
        alert("Digite sua pergunta!")
        return
    }
    askButton.setAttribute("disabled", true)
    const ask = "<div>" + askElement.value + "</div>"

  //generate random number
  const totalAnswer = answers.length
  const randomNumber = Math.floor(Math.random() * totalAnswer)
  
  ansewerElement.innerHTML = ask + answers[randomNumber]
    ansewerElement.style.opacity = 1
  setTimeout(function () {
    ansewerElement.style.opacity = 0;
    askButton.removeAttribute("disabled")
  }, 3000)
}