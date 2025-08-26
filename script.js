document.addEventListener("DOMContentLoaded", () => {
  const inputTarefa = document.getElementById("tarefa");
  const btnAdicionar = document.getElementById("btn-adicionar");
  const lista = document.getElementById("lista");

  // função para adicionar tarefa
  const adicionarTarefa = () => {
    const texto = inputTarefa.value.trim();

    if (texto === "") {
      alert("Por favor, digite uma tarefa.");
      return;
    }

    // cria elemento <li>
    const li = document.createElement("li");
    li.textContent = texto;

    // adiciona na lista
    lista.appendChild(li);

    // limpa o input
    inputTarefa.value = "";
    inputTarefa.focus();
  };

  // evento no botão
  btnAdicionar.addEventListener("click", adicionarTarefa);

  // também permitir Enter no input
  inputTarefa.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      adicionarTarefa();
    }
  });
});
