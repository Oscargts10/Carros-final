import React from "react";

export default function VehiculosApp() {
  const datos = [
    { placa: "ABC123", vehiculo: "Jetta 2018", seguro: "2025-05-15", verificacion: "2025-07-10" },
    { placa: "XYZ789", vehiculo: "Sentra 2020", seguro: "2025-04-25", verificacion: "2025-05-05" },
  ];

  const getEstado = (fecha) => {
    const dias = Math.ceil((new Date(fecha) - new Date()) / (1000 * 60 * 60 * 24));
    if (dias < 0) return "Vencido ❌";
    if (dias <= 15) return \`Por vencer (\${dias} días) ⚠️\`;
    return \`Vigente (\${dias} días) ✅\`;
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Control de Seguros y Verificaciones</h1>
      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Vehículo</th>
            <th>Seguro</th>
            <th>Estado</th>
            <th>Verificación</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, i) => (
            <tr key={i}>
              <td>{item.placa}</td>
              <td>{item.vehiculo}</td>
              <td>{item.seguro}</td>
              <td>{getEstado(item.seguro)}</td>
              <td>{item.verificacion}</td>
              <td>{getEstado(item.verificacion)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}