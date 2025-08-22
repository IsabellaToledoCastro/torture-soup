// Nota de Isabella: actualizado el 19 de agosto
// Nota de Isabella: 20 de agosto, arreglos en la funcionalidad del mapa

// ----------------------
// MAPA INICIAL
// ----------------------

// Inicializar el mapa en Bucaramanga
const mapas = L.map('mapas').setView([7.12539, -73.1198], 14);

// Añadir tiles (mosaicos) de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapas);

// Ejemplo de marcador en el centro
L.marker([7.12539, -73.1198])
  .addTo(mapas)
  .bindPopup('Centro de Bucaramanga');

// ----------------------
// CAPAS ADICIONALES
// ----------------------

// Polígono BIC (zona protegida, en rojo)
const Bienes_de_Interés_Cultural = L.polygon([
  [7.1258, -73.1205],
  [7.1258, -73.1185],
  [7.1248, -73.1185],
  [7.1248, -73.1205]
], { color: 'red' }).bindPopup('Zona BIC: Bien de Interés Cultural');

// Añadir capa al mapa por defecto
Bienes_de_Interés_Cultural.addTo(mapas);

// ----------------------
// CONTROL DE CAPAS
// ----------------------
const capas = {
  "Bienes de Interés Cultural": Bienes_de_Interés_Cultural
};

// Añadir control de capas (activar/desactivar)
L.control.layers(null, capas).addTo(mapas);

// ----------------------
// FUNCIÓN PARA CAJA LATERAL
// ----------------------
// Esto servirá para mostrar info sin usar solo popups 
// Aquí luego Python podrá ayudar a generar los textos dinámicos.

function mostrarInfo(nombre, descripcion) {
    document.getElementById('caja_de_información').innerHTML = `
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
    `;
}

// Ejemplo: al hacer clic en un polígono, mostrar info en la caja lateral
Bienes_de_Interés_Cultural.on('click', () => {
    mostrarInfo('Bienes de Interés Cultural', 'Área protegida');
});