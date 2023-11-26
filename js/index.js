document.addEventListener("DOMContentLoaded", () => {
  console.log("hola mundo");
  const form = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const tarea = document.getElementById("tarea");
  const universidad = document.getElementById("universidad");
  const personal = document.getElementById("personal");
  let eliminar = document.querySelectorAll("#eliminar");
  let seleccionado = document.querySelectorAll("#seleccionado");
  const lista = document.getElementById("lista");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const div = document.createElement("div");
    div.className += " uk-width-1-1 item uk-border-rounded";

    const ch = document.createElement("input");
    ch.setAttribute("type", "checkbox");
    ch.className += "uk-radio uk-margin-small-right uk-margin-small-left";
    if (personal.checked) {
      ch.className += " ch2";
    }
    ch.setAttribute("id", "seleccionado");

    const intx = document.createElement("input");
    intx.setAttribute("type", "text");
    intx.className += "uk-text-emphasis uk-input itemch uk-border-rounded";
    intx.value = String(tarea.value);

    const bt = document.createElement("button");
    bt.setAttribute("id", "eliminar");
    bt.className +=
      "uk-button uk-button-danger uk-margin-small-right uk-margin-small-left uk-border-rounded";
    bt.innerHTML = "Eliminar";

    div.appendChild(ch);
    div.appendChild(intx);
    div.appendChild(bt);

    tarea.value = "";

    lista.appendChild(div);

    eliminar = document.querySelectorAll("#eliminar");
    seleccionado = document.querySelectorAll("#seleccionado");

    /* Aqui hacemos la accion de eliminar la tarea */
    eliminar.forEach((e) => {
      e.addEventListener("click", (e) => {
        const nd = e.target.parentNode;
        nd.parentNode.removeChild(nd);
      });
    });

    /* Aqui hacemos la accion de desabilitar o no con respecto al check*/
    seleccionado.forEach((e) => {
      e.addEventListener("change", (e) => {
        const tx = e.target.nextSibling;
        if (tx.disabled) {
          tx.disabled = false;
          tx.classList.remove('line')
        } else {
          tx.disabled = true;
          tx.className += ' line'
        }
      });
    });
  });

  nombre.addEventListener("keyup", (e) => {
    console.log(e);
    console.log(e.target.value);
  });
});
