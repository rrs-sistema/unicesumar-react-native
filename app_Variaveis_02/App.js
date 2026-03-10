import React from 'react';
/* ATIVIDADE VARIÁVEIS

Jullia Acsa Rodrigues 
Rivaldo Roberto 
Nicolas brayan 

Data - 90/03/2026

*/


function App() {
  const textTitle = "O poeta é um fingidor\
                      Finge tão completamente\
                      Que chega a fingir que é dor\
                      A dor que deveras sente.";
  const sizeTitle = "16px";

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#B0CBE9",
    borderRadius: 15,
    width: 130,
    height: 80,
    justifyContent: "center",
    fontSize: 20,
    marginRight: 15
  };

  const progressBase = {
    width: "100%",
    height: 12,
    backgroundColor: "#6D89B1",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden"
  };

  return (
    <div style={{padding: 10, minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      <div style={{ backgroundColor: "white", borderRadius: 30, overflow: "hidden", paddingBottom: 20 }}>
        
        <div style={{ 
          backgroundColor: "#1D4E9E", 
          color: "white", 
          padding: "40px 20px", 
          borderBottomLeftRadius: 30, 
          borderBottomRightRadius: 30 
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#BDD4E7" }}></div>
          </div>
          <p style={{ fontSize: sizeTitle, lineHeight: "1.4", opacity: 0.9 }}>
            {textTitle}
          </p>
        </div>

        <div style={{ padding: 20 }}>
          <h3 style={{ color: "#5C7DA5", marginBottom: 15 }}>Categories</h3>
          
          <div style={{ display: "flex", gap: 15, marginBottom: 30 }}>
            <div style={{ ...boxIcon, backgroundColor: "#FF8C00" }}>📱</div>
            <div style={{ ...boxIcon, backgroundColor: "#A281F0" }}>🐾</div>
            <div style={{ ...boxIcon, backgroundColor: "#00C58E" }}>🏢</div>
          </div>

          <h3 style={{ color: "#5C7DA5", marginBottom: 15 }}>Technology</h3>

          {[1, 2, 3].map((item) => (
            <div key={item} style={{ marginBottom: 25 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={cardStyle}>{item}</div>
                <p style={{ fontSize: 12, color: "#666", flex: 1 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                </p>
              </div>
              
              <div style={progressBase}>
                <div style={{ 
                  width: item === 1 ? "70%" : item === 2 ? "30%" : "0%", 
                  height: "100%", 
                  backgroundColor: item === 1 ? "#FFD700" : "#FF8C00" 
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const boxIcon = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
  width: 75,
  height: 75,
  fontSize: 30
};

export default App;