/* ATIVIDADE VARIÁVEIS

Jullia Acsa Rodrigues 
Rivaldo Roberto 
Nicolas brayan 

Data - 16/03/2026

*/

function App() {

  const footerText = "🐾 🐾 🐾 🐾 🐾";
  const footerBg = "#ff3ce5";
  const footerFontColor = "white";
  const footerFontSize = "18px";

  const titleProject = "Vaquinha Do amor";
  const descriptionText =
    "Faça a sua doação e ajude um cachorrinho de rua! ";

  const valueMin = "$0";
  const valueMax = "$110,000";

  const buttonsValues = ["$100", "$50", "$20", "$10"];

  // cores
  const bgScreen = "#F2F4F8";
  const bgHeader = "#7a879b";
  const bgCard = "white";
  const fontColorPrimary = "#4A6FA5";
  const fontColorSecondary = "#7A8FA6";
  const progressColor = "#2CC4A7";
  const progressBaseColor = "#6D89B1";
  const buttonColor = "#20C997";
  const buttonFontColor = "white";

  // tamanhos de fonte
  const titleSize = "20px";
  const textSize = "13px";
  const valueSize = "12px";
  const buttonFontSize = "16px";

  /* ===== ESTILOS ===== */

  const progressBase = {
    width: "100%",
    height: 12,
    backgroundColor: progressBaseColor,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: buttonFontColor,
    borderRadius: 12,
    width: 90,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: buttonFontSize,
    fontWeight: "bold"
  };

  return (
    <div
      style={{
        backgroundColor: bgScreen,
        minHeight: "100vh",
        padding: 15,
        fontFamily: "sans-serif"
      }}
    >
      <div
        style={{
          backgroundColor: bgCard,
          borderRadius: 30,
          overflow: "hidden"
        }}
      >

        {/* HEADER */}
        <div
          style={{
            backgroundColor: bgHeader,
            color: "white",
            padding: 20
          }}
        >
          <h3>VAQUINHA AJUDA PET</h3>
        </div>

        {/* IMAGEM (PLACEHOLDER) */}
        <div
          style={{
            height: 180,
            backgroundColor: "#ff16ec",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 40,
            color: "white"
          }}
        >
          ▶
        </div>

        {/* CONTEÚDO */}
        <div style={{ padding: 20 }}>

          <h2 style={{ color: fontColorPrimary, fontSize: titleSize }}>
            {titleProject}
          </h2>

          <p
            style={{
              color: fontColorSecondary,
              fontSize: textSize,
              lineHeight: 1.5
            }}
          >
            {descriptionText}
          </p>

          {/* BARRA DE PROGRESSO */}
          <div style={progressBase}>
            <div
              style={{
                width: "75%",
                height: "100%",
                backgroundColor: progressColor
              }}
            ></div>
          </div>

          {/* VALORES */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: valueSize,
              marginTop: 5,
              color: fontColorSecondary
            }}
          >
            <span>{valueMin}</span>
            <span>{valueMax}</span>
          </div>

          {/* BOTÕES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 15,
              marginTop: 20
            }}
          >
            {buttonsValues.map((value, index) => (
              <div key={index} style={buttonStyle}>
                {value}
              </div>
            ))}
          </div>

        </div>
      </div>
    <div
      style={{
        backgroundColor: footerBg,
        color: footerFontColor,
        textAlign: "center",
        padding: 15,
        fontSize: footerFontSize,
        marginTop: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
      }}>
      {footerText} 
      </div>
    </div>
  );
}

export default App;
