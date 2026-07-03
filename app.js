const boton = document.getElementById("empezar");
const pregunta = document.getElementById("pregunta");

boton.addEventListener("click", () => {
    pregunta.innerHTML = `
        <h2>Pregunta 1</h2>
        <p>¿Qué es el Derecho Penal?</p>

        <button>A) El conjunto de normas que regulan los delitos y las penas.</button><br><br>
        <button>B) Un reglamento deportivo.</button><br><br>
        <button>C) Una ley de tráfico.</button>
    `;
});
