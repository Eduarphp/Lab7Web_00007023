import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState(null);


  useEffect(() => {
    fetch("http://localhost:5000/api/mensaje")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch((err) => console.error("Error GET:", err));
  }, []);


  const enviarDatos = async () => {
    const body = {
      nombre: "César",
      mensaje: "Hola desde React ",
    };

    try {
      const res = await fetch("http://localhost:5000/api/echo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setRespuesta(data);
    } catch (error) {
      console.error("Error POST:", error);
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Cliente React + Vite</h1>

      <section style={{ marginTop: 20 }}>
        <h2>GET desde el backend:</h2>
        <p>{mensaje || "Cargando..."}</p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>POST hacia el backend:</h2>
        <button onClick={enviarDatos}>Enviar POST de prueba</button>

        {respuesta && (
          <pre
            style={{
              backgroundColor: "#f0f0f0",
              padding: 10,
              marginTop: 15,
              borderRadius: 5,
            }}
          >
            {JSON.stringify(respuesta, null, 2)}
          </pre>
        )}
      </section>
    </div>
  );
}

export default App;
