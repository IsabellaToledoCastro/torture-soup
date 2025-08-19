// Nota de Isabella: actualizado el 19 de agosto

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

const zonaBIC = L.polygon([

  [7.1258, -73.1205],

  [7.1258, -73.1185],

  [7.1248, -73.1185],

  [7.1248, -73.1205]

], { color: 'red' }).bindPopup('Zona BIC: Bien de Interés Cultural');

// Polígono zona apta turismo (verde)

const zonaTurismo = L.polygon([

  [7.1265, -73.1220],

  [7.1265, -73.1200],

  [7.1255, -73.1200],

  [7.1255, -73.1220]

], { color: 'green' }).bindPopup('Zona apta para turismo');

// Añadir capas al mapa por defecto

zonaBIC.addTo(mapas);

zonaTurismo.addTo(mapas);

// ----------------------
// CONTROL DE CAPAS
// ----------------------
const capas = {

  "Zona BIC": zonaBIC,

  "Zona Turismo": zonaTurismo

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

zonaBIC.on('click', () => {

    mostrarInfo('Zona BIC', 'Área protegida según normativa de Bien de Interés Cultural.');

});

zonaTurismo.on('click', () => {

    mostrarInfo('Zona Turismo', 'Área destinada a promover actividades turísticas.');
    
});
