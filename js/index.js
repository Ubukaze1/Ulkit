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
  let ar = [];

  if (localStorage.getItem("nombre")) {
    nombre.value = localStorage.getItem("nombre");
  }

  if (localStorage.getItem("ll")) {
    ar = JSON.parse(localStorage.getItem("ll"));
    ar.forEach((e) => {
      console.log(e.tarea);

      const div = document.createElement("div");
      div.className += " uk-width-1-1 item uk-border-rounded";

      const ch = document.createElement("input");
      ch.setAttribute("type", "checkbox");
      ch.className += "uk-radio uk-margin-small-right uk-margin-small-left";
      if (e.personal) {
        ch.className += " ch2";
      }
      ch.setAttribute("id", "seleccionado");
      ch.checked = e.disa;

      const intx = document.createElement("input");
      intx.setAttribute("type", "text");
      intx.className += "uk-text-emphasis uk-input itemch uk-border-rounded";
      intx.value = String(e.tarea);
      intx.disabled = e.disa;
      if (e.disa) {
        intx.className += " line";
      }

      const bt = document.createElement("button");
      bt.setAttribute("id", "eliminar");
      bt.className +=
        "uk-button uk-button-danger uk-margin-small-right uk-margin-small-left uk-border-rounded";
      bt.innerHTML = "Eliminar";

      div.appendChild(ch);
      div.appendChild(intx);
      div.appendChild(bt);

      lista.appendChild(div);
    });

    eliminar = document.querySelectorAll("#eliminar");
    seleccionado = document.querySelectorAll("#seleccionado");

    /* Aqui hacemos la accion de eliminar la tarea */
    eliminar.forEach((e, index) => {
      e.addEventListener("click", (e) => {
        const nd = e.target.parentNode;
        nd.parentNode.removeChild(nd);
        ar.splice(index, 1);
        localStorage.removeItem("ll");
        localStorage.setItem("ll", JSON.stringify(ar));
      });
    });

    /* Aqui hacemos la accion de desabilitar o no con respecto al check*/
    seleccionado.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        const tx = e.target.nextSibling;
        if (e.target.checked) {
          tx.disabled = true;
          tx.className += " line";
          console.log("Aqui arriba");
          const ob = ar[index];
          ob.disa = true;
          ar.splice(index, 1, ob);
          console.log(ar);
          localStorage.removeItem("ll");
          localStorage.setItem("ll", JSON.stringify(ar));
        } else {
          tx.disabled = false;
          tx.classList.remove("line");
          const ob = ar[index];
          ob.disa = false;
          ar.splice(index, 1, ob);
          console.log(ar);
          localStorage.removeItem("ll");
          localStorage.setItem("ll", JSON.stringify(ar));
        }
      });
    });
  }

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

    ar.push({
      tarea: tarea.value,
      personal: personal.checked,
      disa: false,
    });
    console.log(ar);
    localStorage.removeItem("ll");
    localStorage.setItem("ll", JSON.stringify(ar));

    tarea.value = "";

    lista.appendChild(div);

    eliminar = document.querySelectorAll("#eliminar");
    seleccionado = document.querySelectorAll("#seleccionado");

    /* Aqui hacemos la accion de eliminar la tarea */
    eliminar.forEach((e, index) => {
      e.addEventListener("click", (e) => {
        const nd = e.target.parentNode;
        nd.parentNode.removeChild(nd);
        ar.splice(index, 1);
        localStorage.removeItem("ll");
        localStorage.setItem("ll", JSON.stringify(ar));
      });
    });

    /* Aqui hacemos la accion de desabilitar o no con respecto al check*/
    seleccionado.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        const tx = e.target.nextSibling;
        if (e.target.checked) {
          tx.disabled = true;
          tx.className += " line";
          console.log("Aqui");
          const ob = ar[index];
          ob.disa = true;
          ar.splice(index, 1, ob);
          console.log(ar);
          localStorage.removeItem("ll");
          localStorage.setItem("ll", JSON.stringify(ar));
        } else {
          tx.disabled = false;
          tx.classList.remove("line");
          const ob = ar[index];
          ob.disa = false;
          ar.splice(index, 1, ob);
          console.log(ar);
          localStorage.removeItem("ll");
          localStorage.setItem("ll", JSON.stringify(ar));
        }
      });
    });
  });

  nombre.addEventListener("keyup", (e) => {
    console.log(e);
    console.log(e.target.value);
    localStorage.removeItem("nombre");
    localStorage.setItem("nombre", String(e.target.value));
  });
});
