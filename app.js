const config = {
  accessToken: 'pk.eyJ1IjoibmV3dHJhbCIsImEiOiJjazJrcDY4Y2gxMmg3M2JvazU4OXV6NHZqIn0.VO5GkvBq_PSJHvX7T8H9jQ',
  showMarkers: false,
  inset: true,
  insetOptions: { markerColor: 'orange' },
  insetPosition: 'bottom-right',
  theme: 'dark',
  use3dTerrain: true,
  auto: false,
  title: '',
  subtitle: '',
  byline: '',
  footer: 'Datos: Newtral, Mapbox, OpenStreetMap',
  chapters: [
    {
      id: 'slug-style-id',
      alignment: 'center',
      hidden: true,
      title: '',
      description: '',
      location: {
        center: [-3.792046024703072, 40.376497228975055],
        zoom: 5, pitch: 0, bearing: 0, speed: 1, curve: 0.7
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: function () {
        ['edificios_lote_1','edificios_lote_2','edificios_lote_3','edificios_lote_4','edificios_lote_5','edificios_lote_6','edificios_lote_7','edificios_lote_8','edificios_lote_9']
          .forEach(layer => {
            if (window.map && map.getLayer(layer)) {
              map.setPaintProperty(layer, 'fill-color', ["case", [">=", ["get","beginning"], 0], "#01f3b3", "#01f3b3"]);
              map.setPaintProperty(layer, 'fill-outline-color', ["case", [">=", ["get","beginning"], 0], "#01f3b3", "#01f3b3"]);
            }
          });
      },
      onChapterExit: function () {},
      legend: []
    },
    {
      id: 'slug-style-id-2',
      alignment: 'center',
      hidden: false,
      title: '',
      description: `
        <p>En España hay <span class="highlight-newtral">385.105 viviendas</span> destinadas al alquiler vacacional, según los datos del Instituto Nacional de Estadística (INE).</p>
        <p>Pese a que es un 2% del total de hogares que hay en total, en algunas localidades muy turísticas el porcentaje de casas vacacionales supone hasta <span class="highlight-newtral">un cuarto</span> del parque inmobiliario.</p> 
        `,
      location: {
        center: [-3.792046024703072, 40.376497228975055],
        zoom: 6, pitch: 0, bearing: 0, speed: 1, curve: 0.7
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: function () {
        ['edificios_lote_1','edificios_lote_2','edificios_lote_3','edificios_lote_4','edificios_lote_5','edificios_lote_6','edificios_lote_7','edificios_lote_8','edificios_lote_9']
          .forEach(layer => {
            if (window.map && map.getLayer(layer)) {
              map.setPaintProperty(layer, 'fill-color', ["case", [">=", ["get","beginning"], 0], "#01f3b3", "#01f3b3"]);
              map.setPaintProperty(layer, 'fill-outline-color', ["case", [">=", ["get","beginning"], 0], "#01f3b3", "#01f3b3"]);
            }
          });
      },
      onChapterExit: function () {},
      legend: []
    },
    {
      id: 'slug-style-id-2',
      alignment: 'center',
      hidden: false,
      title: '',
      description: `
        <p>Por comunidades autónomas, <span class="highlight-newtral">Canarias</span> es la que tiene la mayor tasa media de viviendas turísticas por cada mil hogares.</p>
        <div class="iframe-container">
          <iframe title="" aria-label="Gráfico de columnas" id="datawrapper-chart-d1Ffv" src="https://datawrapper.dwcdn.net/d1Ffv/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="427" data-external="1"></iframe>
        </div>
      `,
      location: {
        center: [-3.792046024703072, 40.376497228975055],
        zoom: 6, pitch: 0, bearing: 0, speed: 1, curve: 0.7
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: function () {
        ['edificios_lote_1','edificios_lote_2','edificios_lote_3','edificios_lote_4','edificios_lote_5','edificios_lote_6','edificios_lote_7','edificios_lote_8','edificios_lote_9']
          .forEach(layer => {
            if (window.map && map.getLayer(layer)) {
              map.setPaintProperty(layer, 'fill-color', ["case", [">=", ["get","beginning"], 0], "#01f3b3", "#01f3b3"]);
              map.setPaintProperty(layer, 'fill-outline-color', ["case", [">=", ["get","beginning"], 0], "#01f3b3", "#01f3b3"]);
            }
          });
      },
      onChapterExit: function () {},
      legend: []
    },
    {
      id: 'second-slug-style-id',
      alignment: 'center',
      hidden: false,
      title: '',
      description: `<p>Las <span class="highlight-newtral">provincias insulares</span> (Las Palmas, Baleares y Santa Cruz de Tenerife) son las que mayor tasa media de alquileres vacacionales tiene por cada mil hogares.</p>
      <div class="iframe-container">
        <iframe title="" aria-label="Gráfico de columnas" id="datawrapper-chart-NSGgy" src="https://datawrapper.dwcdn.net/NSGgy/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="427" data-external="1"></iframe>
      </div>`,
      location: {
        center: [-15.136224063444702, 28.13393724665955],
        zoom: 7, pitch: 0, bearing: 0, speed: 1, curve: 0.7
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: function () {
        ['edificios_lote_1','edificios_lote_2','edificios_lote_3','edificios_lote_4','edificios_lote_5','edificios_lote_6','edificios_lote_7','edificios_lote_8','edificios_lote_9']
          .forEach(layer => {
            if (window.map && map.getLayer(layer)) {
              map.setPaintProperty(layer, 'fill-color', ["case", [">=", ["get","beginning"], 2000], "#01f3b3", "#f6f6f6"]);
              map.setPaintProperty(layer, 'fill-outline-color', ["case", [">=", ["get","beginning"], 2000], "#01f3b3", "#f6f6f6"]);
            }
          });
      },
      onChapterExit: function () {},
      legend: []
    },
    {
      id: 'third-slug-style-id',
      alignment: 'center',
      hidden: false,
      title: '',
      description: `<p>Los municipios canarios de <span class="highlight-newtral">Yaiza</span> (Lanzarote) y <span class="highlight-newtral">La Oliva</span> (Fuerteventura) son las localidades españolas con más alquileres vacacionales en proporción a su parque inmobiliario.</p>
      <p>El 24,4% y el 23,8% de sus viviendas respectivamente son vacacionales.</p>
      <p>Yaiza ha pasado de tener 1.711 viviendas vacacionales en agosto de 2020 a 2.524 en mayo de este año, es decir, <span class="highlight-newtral">ha aumentado casi en un 50% su oferta turística</span>.</p>`,
      location: {
        center: [-13.858877362056273, 28.80545566038115],
        zoom: 10, pitch: 0, bearing: 0, speed: 1, curve: 0.7
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: function () {
        ['edificios_lote_1','edificios_lote_2','edificios_lote_3','edificios_lote_4','edificios_lote_5','edificios_lote_6','edificios_lote_7','edificios_lote_8','edificios_lote_9']
          .forEach(layer => {
            if (window.map && map.getLayer(layer)) {
              map.setPaintProperty(layer, 'fill-color', ["case", [">=", ["get","beginning"], 2000], "#01f3b3", "#f6f6f6"]);
              map.setPaintProperty(layer, 'fill-outline-color', ["case", [">=", ["get","beginning"], 2000], "#01f3b3", "#f6f6f6"]);
            }
          });
      },
      onChapterExit: function () {},
      legend: []
    },

    // ===== Capítulo especial: MODO LIBRE =====
    {
      id: 'modo-libre',
      alignment: 'center',
      hidden: false,
      title: 'Explora libremente',
      description: 'Puedes mover, acercar y explorar el mapa por tu cuenta. Usa el botón para volver a la historia.',
      location: {
        center: [-3.792046024703072, 40.376497228975055],
        zoom: 5.5, pitch: 0, bearing: 0, speed: 1, curve: 0.7
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: function () {
        if (window.map) {
          map.scrollZoom.enable();
          map.dragPan.enable();
          map.doubleClickZoom.enable();
          map.keyboard.enable();
          map.boxZoom.enable();
          map.touchZoomRotate.enable();
        }
      },
      onChapterExit: function () {
        if (window.map) {
          map.scrollZoom.disable();
          map.dragPan.disable();
          map.doubleClickZoom.disable();
          map.keyboard.disable();
          map.boxZoom.disable();
          map.touchZoomRotate.disable();
        }
      },
      legend: []
    }
  ]
};
/* ========================================================= */

const STYLE_URL = 'mapbox://styles/newtral/cme6z10k3017s01qsdmpehpb2';
const SINGLE_LAYER = {
  sourceId: 'gdf_casas_vacacionales-buzcos',
  layerId:  'gdf_casas_vacacionales-buzcos',
  url:      'mapbox://newtral.84nmw1pn',
  sourceLayer: 'gdf_casas_vacacionales'
};
const LAYER_TYPE = 'fill';

// Variable que colorea
const VAR_NAME = 'tasa_2025M05';

// Paleta y percentiles sesgados
const PALETTE = [
  '#DFF5DC', '#D5F5DB', '#B6F0CE', '#7CF8C4',
  '#47F5B9', '#01f3b3', '#00DEA3', '#02B382'
];
const BIASED_PCTS = [0.08, 0.16, 0.28, 0.50, 0.75, 0.90, 0.97];

/* ====== Estado global ====== */
let map;
let scroller;
let activeChapterIndex = 0;
let autoLegend = [];
let dataMin, dataMax;
let freeMode = false;
let tooltipEl;
let geocoder;
let geocoderMounted = false;

/* ====== Utilidades ====== */
function quantileAt(sortedVals, p) {
  const n = sortedVals.length;
  if (!n) return NaN;
  const idx = p * (n - 1);
  const lo = Math.floor(idx), hi = Math.ceil(idx);
  return lo === hi ? sortedVals[lo] : sortedVals[lo] + (sortedVals[hi] - sortedVals[lo]) * (idx - lo);
}
function biasedQuantileBreaks(values, percentiles) {
  const vals = [...values].filter(Number.isFinite).sort((a,b)=>a-b);
  if (!vals.length) return [];
  const qs = percentiles.map(p => quantileAt(vals, p));
  return Array.from(new Set(qs.filter(Number.isFinite))).sort((a,b)=>a-b);
}
function pickColorsForClasses(colors, numClasses) {
  if (numClasses <= 1) return [colors[0]];
  const picked = [];
  for (let i=0; i<numClasses; i++) {
    const idx = Math.round(i * (colors.length - 1) / (numClasses - 1));
    picked.push(colors[idx]);
  }
  return picked;
}
function buildStepExpression(breaks, colors) {
  const input = ['to-number', ['get', VAR_NAME]];
  const expr = ['step', input, colors[0]];
  for (let i=0; i<breaks.length; i++) expr.push(breaks[i], colors[i+1]);
  return expr;
}
function legendFromBreaks(breaks, min, max, colors) {
  const items = [];
  const bounds = [min, ...breaks, max];
  for (let i=0; i<bounds.length-1; i++) {
    items.push({ color: colors[i], label: `${bounds[i].toFixed(2)}% – ${bounds[i+1].toFixed(2)}%` });
  }
  return items;
}

function miniLineSVG(
  values,
  {
    stroke = '#01f3b3',
    width = 180,
    height = 90,
    refLine = 50,        // valor de referencia en %
    refStroke = '#e2e8f0',
    refDash = '4,3',
    startLabel = '2020',
    endLabel = '2025',
    showXAxisLabels = true,
    yTickCount = 5,      // nº de ticks en Y
    yLabelFormatter = v => `${v.toFixed(0)}%`,
    pointStyle = 'isolated', // 'isolated' | 'all' | 'none'
    pointRadius = 2
  } = {}
) {
  if (!Array.isArray(values) || values.length === 0) return null;

  // Área interior (dejamos sitio a las etiquetas Y a la izquierda y X abajo)
  const margin = { top: 6, right: 6, bottom: 18, left: 34 };
  const innerW = Math.max(1, width - margin.left - margin.right);
  const innerH = Math.max(1, height - margin.top - margin.bottom);

  // Normalizamos: números o null
  const data = values.map(v => (Number.isFinite(v) ? Number(v) : null));
  const finiteVals = data.filter(v => Number.isFinite(v));
  if (finiteVals.length === 0) return null;

  // --- Rango fijo Y de 0 a 25 ---
  const yMin = 0;
  const yMax = 30;

  // Escalas
  const xPos = i => margin.left + (innerW * i) / Math.max(1, data.length - 1);
  const yPos = v => {
    const t = (v - yMin) / (yMax - yMin);
    return margin.top + (1 - t) * innerH;
  };

  // --- Segmentos contiguos (para NO puentear huecos) ---
  const segments = [];
  let current = [];
  for (let i = 0; i < data.length; i++) {
    const v = data[i];
    if (Number.isFinite(v)) {
      current.push([xPos(i), yPos(v)]);
    } else {
      if (current.length) segments.push(current);
      current = [];
    }
  }
  if (current.length) segments.push(current);

  // Línea de referencia
  const hasRef = Number.isFinite(refLine) && refLine >= yMin && refLine <= yMax;
  const yRef = hasRef ? yPos(refLine) : null;

  // Etiquetas X
  const xLabelY = height - 3;
  const startX = margin.left;
  const endX = width - margin.right;

  const ariaLabel =
    `Mini serie temporal (${finiteVals.length} puntos). Rango fijo ${yMin}%–${yMax}%.`;

  // Grid horizontal + etiquetas Y
  const step = (yMax - yMin) / (yTickCount - 1);
  const ticks = Array.from({ length: yTickCount }, (_, i) => yMin + i * step);
  const gridLines = ticks.map(tv => {
    const y = yPos(tv).toFixed(2);
    return `
      <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"
            stroke="#eef2f6" stroke-width="1"/>
      <text x="${margin.left - 4}" y="${y}" text-anchor="end"
            font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
            font-size="10" fill="#3b3b3b" dominant-baseline="central">
        ${yLabelFormatter(tv)}
      </text>
    `;
  }).join('');

  // Clip para que las líneas no sobresalgan del área
  const clipId = `clip-${Math.random().toString(36).slice(2, 9)}`;

  // Paths por segmento (solo tramos de >=2 puntos forman línea)
  const paths = segments
    .filter(seg => seg.length >= 2)
    .map(seg => {
      const d = seg.map(([x, y], idx) => (idx === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)).join(' ');
      return `<path d="${d}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
    })
    .join('\n');

  // Puntos: para tramos de tamaño 1 (o todos, si se pide)
  let points = '';
  if (pointStyle !== 'none') {
    const circles = [];
    if (pointStyle === 'all') {
      data.forEach((v, i) => {
        if (Number.isFinite(v)) circles.push([xPos(i), yPos(v)]);
      });
    } else {
      // 'isolated': solo segmentos de tamaño 1
      segments.filter(seg => seg.length === 1).forEach(seg => circles.push(seg[0]));
    }
    points = circles.map(([cx, cy]) =>
      `<circle cx="${cx}" cy="${cy}" r="${pointRadius}" fill="${stroke}" />`
    ).join('\n');
  }

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"
     viewBox="0 0 ${width} ${height}" role="img" aria-label="${ariaLabel}">
  <defs>
    <clipPath id="${clipId}">
      <rect x="${margin.left}" y="${margin.top}" width="${innerW}" height="${innerH}" />
    </clipPath>
  </defs>

  <!-- Grid y etiquetas del eje Y -->
  <g>
    ${gridLines}
    ${hasRef ? `
      <line x1="${margin.left}" y1="${yRef}" x2="${width - margin.right}" y2="${yRef}"
            stroke="${refStroke}" stroke-width="1" stroke-dasharray="${refDash}" />
    ` : ''}
  </g>

  <!-- Datos: líneas por segmentos y puntos para tramos aislados -->
  <g clip-path="url(#${clipId})">
    ${paths}
    ${points}
  </g>

  <!-- Etiquetas eje X -->
  ${showXAxisLabels ? `
    <g font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
       font-size="10" fill="#333">
      <text x="${startX}" y="${xLabelY}" text-anchor="start">${startLabel}</text>
      <text x="${endX}"   y="${xLabelY}" text-anchor="end">${endLabel}</text>
    </g>
  ` : ''}

</svg>
`.trim();
}

// --- Tooltip ---
function tooltipHTMLFromFeature(feature) {
  const mun  = feature?.properties?.MUNICIPIO ?? 'Sin información';
  const prov = feature?.properties?.PROVINCIA ?? 'Sin información';

  const v2020   = Number(feature?.properties?.tasa_2020M08);
  const v2021   = Number(feature?.properties?.tasa_2021M02);
  const v2021_2 = Number(feature?.properties?.tasa_2021M08);
  const v2022   = Number(feature?.properties?.tasa_2022M02);
  const v2022_2 = Number(feature?.properties?.tasa_2022M08);
  const v2023   = Number(feature?.properties?.tasa_2023M02);
  const v2023_2 = Number(feature?.properties?.tasa_2023M08);
  const v2024   = Number(feature?.properties?.tasa_2024M02);
  const v2024_2 = Number(feature?.properties?.tasa_2024M08);
  const v2025   = Number(feature?.properties?.tasa_2025M05);

  const values = [
    v2020, v2021, v2021_2,
    v2022, v2022_2,
    v2023, v2023_2,
    v2024, v2024_2,
    v2025
  ];

  const t2020Txt = Number.isFinite(v2020) ? `${v2020.toFixed(2)}%` : 'Sin datos';
  const t2025Txt = Number.isFinite(v2025) ? `${v2025.toFixed(2)}%` : 'Sin datos';

  const chart = miniLineSVG(values, {
    stroke: '#01f3b3',
    startLabel: '2020',
    endLabel: '2025',
    width: 200,
    height: 110,
    yTickCount: 6,            // 0,5,10,15,20,25
    yLabelFormatter: v => `${v.toFixed(0)}%`,
    pointStyle: 'isolated',
    pointRadius: 2
  });

  return `
    <div class="popup-container">
      <div><span class="popup-titulo">Municipio:</span> <span class="popup-construccion">${mun}</span></div>
      <div><span class="popup-etiqueta">Provincia:</span> ${prov}</div>
      <div><span class="popup-etiqueta">Tasa 2020-08:</span> ${t2020Txt}</div>
      <div><span class="popup-etiqueta">Tasa 2025-05:</span> ${t2025Txt}</div>
      ${chart || '<div style="margin-top:8px;font-size:12px;color:#666;">Sin datos suficientes para el gráfico</div>'}
    </div>
  `;
}


/* ====== Tooltip y geocoder ====== */
function ensureTooltipEl() {
  if (tooltipEl) return tooltipEl;
  const host = document.getElementById('map') || document.body;
  tooltipEl = document.createElement('div');
  tooltipEl.className = 'tooltip mapboxgl-popup-content';
  Object.assign(tooltipEl.style, { position: 'absolute', zIndex: '1100', display: 'none', pointerEvents: 'none' });
  host.appendChild(tooltipEl);
  return tooltipEl;
}
function positionTooltip(e) {
  if (!tooltipEl) return;
  const offset = 12;
  let x = e.point.x + offset;
  let y = e.point.y + offset;
  const ttRect = tooltipEl.getBoundingClientRect();
  const mapRect = document.getElementById('map').getBoundingClientRect();
  const maxX = mapRect.width  - ttRect.width  - 8;
  const maxY = mapRect.height - ttRect.height - 8;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;
  tooltipEl.style.left = `${x}px`;
  tooltipEl.style.top  = `${y}px`;
}
function onLayerMouseMove(e) {
  if (!freeMode) return;
  const f = e.features && e.features[0];
  if (!f) return;
  ensureTooltipEl();
  tooltipEl.innerHTML = tooltipHTMLFromFeature(f);
  tooltipEl.style.display = 'block';
  tooltipEl.classList.add('show');
  positionTooltip(e);
  map.getCanvas().style.cursor = 'pointer';
}
function onLayerMouseLeave() {
  if (!tooltipEl) return;
  tooltipEl.style.display = 'none';
  tooltipEl.classList.remove('show');
  if (map) map.getCanvas().style.cursor = '';
}
function attachFreeModeTooltip() {
  if (!map || !map.getLayer(SINGLE_LAYER.layerId)) return;
  map.on('mousemove',  SINGLE_LAYER.layerId, onLayerMouseMove);
  map.on('mouseleave', SINGLE_LAYER.layerId, onLayerMouseLeave);
}
function detachFreeModeTooltip() {
  if (!map || !map.getLayer(SINGLE_LAYER.layerId)) return;
  map.off('mousemove',  SINGLE_LAYER.layerId, onLayerMouseMove);
  map.off('mouseleave', SINGLE_LAYER.layerId, onLayerMouseLeave);
  onLayerMouseLeave();
}
function mountGeocoder() {
  if (!map || geocoderMounted) return;
  if (!window.MapboxGeocoder) {
    console.error('MapboxGeocoder no está disponible. Revisa la etiqueta <script> del plugin.');
    return;
  }
  geocoder = new window.MapboxGeocoder({
    accessToken: config.accessToken,
    mapboxgl: window.mapboxgl,
    marker: false,
    flyTo: { speed: 1.2, curve: 1.0, essential: true },
    placeholder: 'Buscar lugar…',
    container: 'geocoder-container'
  });
  map.addControl(geocoder);
  geocoderMounted = true;
  geocoder.on('result', () => onLayerMouseLeave());
}
function unmountGeocoder() {
  if (geocoder && geocoderMounted) {
    try { map.removeControl(geocoder); } catch {}
    geocoder = null;
    geocoderMounted = false;
    const overlay = document.getElementById('geocoder-container');
    if (overlay) overlay.innerHTML = '';
  }
}

/* ====== Leyenda y estilos ====== */
function updateLegend(legendData) {
  const legendEl = document.getElementById('legend');
  const legendContent = document.getElementById('legend-content');
  if (!legendEl || !legendContent) return;
  legendContent.innerHTML = '';
  const data = (legendData && legendData.length) ? legendData : autoLegend;
  if (!data || data.length === 0) { legendEl.classList.add('hidden'); return; }
  legendEl.classList.remove('hidden');
  data.forEach((item) => {
    const row = document.createElement('div'); row.className = 'legend-item';
    const color = document.createElement('span'); color.className = 'legend-color'; color.style.backgroundColor = item.color;
    const label = document.createElement('span'); label.textContent = item.label;
    row.appendChild(color); row.appendChild(label);
    legendContent.appendChild(row);
  });
}
function verifyChapterColors() {
  if (!map.getLayer(SINGLE_LAYER.layerId)) return;
  const fillProp   = LAYER_TYPE === 'circle' ? 'circle-color' : (LAYER_TYPE === 'line' ? 'line-color' : 'fill-color');
  const outlineProp= LAYER_TYPE === 'fill'   ? 'fill-outline-color' : (LAYER_TYPE === 'circle' ? 'circle-stroke-color' : null);
  const refFill = map.getPaintProperty(SINGLE_LAYER.layerId, fillProp);
  const refOut  = outlineProp ? map.getPaintProperty(SINGLE_LAYER.layerId, outlineProp) : null;
  const okFill  = JSON.stringify(map.getPaintProperty(SINGLE_LAYER.layerId, fillProp)) === JSON.stringify(refFill);
  const okOut   = outlineProp ? JSON.stringify(map.getPaintProperty(SINGLE_LAYER.layerId, outlineProp)) === JSON.stringify(refOut) : true;
  if (!okFill || !okOut) {
    if (LAYER_TYPE === 'fill') map.setPaintProperty(SINGLE_LAYER.layerId, 'fill-opacity', 0);
    if (LAYER_TYPE === 'circle') map.setPaintProperty(SINGLE_LAYER.layerId, 'circle-opacity', 0);
    if (LAYER_TYPE === 'line') map.setPaintProperty(SINGLE_LAYER.layerId, 'line-opacity', 0);
    if (LAYER_TYPE === 'fill') map.setPaintProperty(SINGLE_LAYER.layerId, 'fill-opacity', 1);
    if (LAYER_TYPE === 'circle') map.setPaintProperty(SINGLE_LAYER.layerId, 'circle-opacity', 1);
    if (LAYER_TYPE === 'line') map.setPaintProperty(SINGLE_LAYER.layerId, 'line-opacity', 1);
    map.setPaintProperty(SINGLE_LAYER.layerId, fillProp, refFill);
    if (outlineProp) map.setPaintProperty(SINGLE_LAYER.layerId, outlineProp, refOut);
  }
}

/* ====== Iframes Datawrapper ====== */
function setupDatawrapperAutoResize() {
  window.addEventListener('message', (event) => {
    if (event?.data?.['datawrapper-height']) {
      const iframes = document.querySelectorAll('iframe');
      for (const key in event.data['datawrapper-height']) {
        for (let i = 0; i < iframes.length; i++) {
          const iframe = iframes[i];
          if (iframe.contentWindow === event.source) {
            iframe.style.height = event.data['datawrapper-height'][key] + 'px';
          }
        }
      }
    }
  });
}

/* ====== Interactividad del mapa ====== */
function setMapInteractivity(enabled) {
  if (!map) return;
  const fn = enabled ? 'enable' : 'disable';
  map.scrollZoom[fn]();
  map.dragPan[fn]();
  map.doubleClickZoom[fn]();
  map.keyboard[fn]();
  map.boxZoom[fn]();
  map.touchZoomRotate[fn]();
}

/* ====== Capa única (vector) ====== */
function addSingleLayer() {
  map.addSource(SINGLE_LAYER.sourceId, { type: 'vector', url: SINGLE_LAYER.url });
  if (LAYER_TYPE === 'circle') {
    map.addLayer({
      id: SINGLE_LAYER.layerId,
      type: 'circle',
      source: SINGLE_LAYER.sourceId,
      'source-layer': SINGLE_LAYER.sourceLayer,
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 4, 2, 8, 4, 12, 6, 16, 8],
        'circle-color': '#01f3b3',
        'circle-opacity': 0.9,
        'circle-stroke-width': 0.5,
        'circle-stroke-color': '#013d36'
      }
    });
  } else if (LAYER_TYPE === 'fill') {
    map.addLayer({
      id: SINGLE_LAYER.layerId,
      type: 'fill',
      source: SINGLE_LAYER.sourceId,
      'source-layer': SINGLE_LAYER.sourceLayer,
      paint: {
        'fill-color': '#01f3b3',
        'fill-opacity': 0.85,
        'fill-outline-color': '#013d36'
      }
    });
  } else if (LAYER_TYPE === 'line') {
    map.addLayer({
      id: SINGLE_LAYER.layerId,
      type: 'line',
      source: SINGLE_LAYER.sourceId,
      'source-layer': SINGLE_LAYER.sourceLayer,
      paint: { 'line-color': '#01f3b3', 'line-width': 1.5, 'line-opacity': 0.9 }
    });
  }
}

/* ====== Choropleth auto con cuantiles sesgados ====== */
function applyChoroplethIfReady() {
  try {
    const feats = map.querySourceFeatures(SINGLE_LAYER.sourceId, { sourceLayer: SINGLE_LAYER.sourceLayer });
    const vals = feats.map(f => Number(f.properties?.[VAR_NAME])).filter(v => Number.isFinite(v));
    if (!vals.length) return false;

    dataMin = Math.min(...vals);
    dataMax = Math.max(...vals);

    let cuts = biasedQuantileBreaks(vals, BIASED_PCTS);
    const numClasses = (cuts?.length || 0) + 1;
    const colorsUsed = pickColorsForClasses(PALETTE, numClasses);

    const colorProp = LAYER_TYPE === 'circle' ? 'circle-color' : (LAYER_TYPE === 'line' ? 'line-color' : 'fill-color');
    const expr = buildStepExpression(cuts, colorsUsed);
    map.setPaintProperty(SINGLE_LAYER.layerId, colorProp, expr);

    if (LAYER_TYPE === 'fill') {
      map.setPaintProperty(SINGLE_LAYER.layerId, 'fill-opacity', 0.9);
      map.setPaintProperty(SINGLE_LAYER.layerId, 'fill-outline-color', '#013d36');
    }

    autoLegend = legendFromBreaks(cuts, dataMin, dataMax, colorsUsed);

    const firstLegend = (config.chapters?.[0]?.legend) || [];
    updateLegend(firstLegend.length ? firstLegend : autoLegend);

    return true;
  } catch (e) {
    console.warn('No se pudo aplicar choropleth aún.', e);
    return false;
  }
}

/* ====== Scroll/Capítulos ====== */
function setupScroller() {
  if (!window.scrollama) return;
  scroller = window.scrollama();
  scroller
    .setup({ step: '.step', offset: 0.5, debug: false })
    .onStepEnter((resp) => {
      let chapterIndex = resp.index;
      if (resp.direction === 'up' && chapterIndex > 0) chapterIndex -= 1;
      if (chapterIndex === activeChapterIndex) return;

      const current = config.chapters[chapterIndex];
      if (!current) return;
      activeChapterIndex = chapterIndex;

      const onMoveEnd = () => {
        updateLegend(current.legend || []);
        if (typeof current.onChapterEnter === 'function') {
          current.onChapterEnter();
          setTimeout(verifyChapterColors, 50);
        }
        map.off('moveend', onMoveEnd);
      };

      const flyOpts = {
        center: current.location.center,
        zoom: current.location.zoom,
        bearing: current.location.bearing,
        pitch: current.location.pitch,
        speed: current.location.speed ?? 1,
        curve: current.location.curve ?? 0.7
      };

      if (current.mapAnimation === 'flyTo' || !current.mapAnimation) map.flyTo(flyOpts);
      else map.easeTo(flyOpts);

      map.once('moveend', onMoveEnd);
    });
}

/* ====== Modo libre ====== */
function enterFreeMode() {
  freeMode = true;
  document.body.classList.add('free-mode');
  const features = document.getElementById('features');
  if (features) features.classList.add('hide');
  const btn = document.getElementById('toggle-free');
  if (btn) btn.textContent = 'Volver a la historia';

  if (scroller && scroller.destroy) scroller.destroy();
  setMapInteractivity(true);

  attachFreeModeTooltip();
  mountGeocoder();

  const c = config.chapters.find(ch => ch.id === 'modo-libre');
  if (c) {
    if (c.location) map.flyTo(c.location);
    if (typeof c.onChapterEnter === 'function') c.onChapterEnter();
  }
  setTimeout(() => map && map.resize(), 50);
}
function exitFreeMode() {
  freeMode = false;
  document.body.classList.remove('free-mode');
  const features = document.getElementById('features');
  if (features) features.classList.remove('hide');
  const btn = document.getElementById('toggle-free');
  if (btn) btn.textContent = 'Ver mapa completo';

  setMapInteractivity(false);

  detachFreeModeTooltip();
  unmountGeocoder();

  const current = config.chapters[activeChapterIndex] || config.chapters[0];
  if (current?.location) map.flyTo(current.location);
  if (typeof current?.onChapterEnter === 'function') {
    current.onChapterEnter();
    setTimeout(verifyChapterColors, 50);
  }

  if (scroller && scroller.destroy) scroller.destroy();
  setupScroller();
  setTimeout(() => map && map.resize(), 50);
}

/* ====== Render del DOM estático (header, features, footer) ====== */
function renderStaticDOM() {
  // Tema
  document.body.classList.toggle('dark', config.theme === 'dark');

  // Header
  const header = document.getElementById('header');
  header.className = config.theme;
  header.innerHTML = `
    ${config.title ? `<h1>${config.title}</h1>` : ''}
    ${config.subtitle ? `<h2>${config.subtitle}</h2>` : ''}
    ${config.byline ? `<p>${config.byline}</p>` : ''}
  `;

  // Features
  const features = document.getElementById('features');
  features.innerHTML = '';
  config.chapters.forEach((chap, idx) => {
    const step = document.createElement('div');
    step.id = chap.id;
    step.className = `step ${config.theme} ${alignmentClass(chap.alignment)} ${chap.hidden ? 'hidden' : ''} ${idx === activeChapterIndex ? 'active' : ''}`;
    const inner = document.createElement('div');
    inner.innerHTML = `
      ${chap.title ? `<h3>${chap.title}</h3>` : ''}
      ${chap.description ? `<div class="chapter-content">${chap.description}</div>` : ''}
    `;
    step.appendChild(inner);
    features.appendChild(step);
  });

  // Footer
  const footer = document.getElementById('footer');
  footer.className = config.theme;
  footer.innerHTML = `<p>${config.footer || ''}</p>`;
}
function alignmentClass(a) {
  const alignments = { left: 'lefty', center: 'centered', right: 'righty', full: 'fully' };
  return alignments[a] || 'centered';
}

/* ====== Inicio ====== */
window.addEventListener('DOMContentLoaded', () => {
  setupDatawrapperAutoResize();
  renderStaticDOM();

  // Botón modo libre
  const btn = document.getElementById('toggle-free');
  btn.addEventListener('click', () => (freeMode ? exitFreeMode() : enterFreeMode()));

  // Mapbox GL init
  window.mapboxgl = window.mapboxgl || mapboxgl; // por si UMD
  mapboxgl.accessToken = config.accessToken;

  map = new mapboxgl.Map({
    container: 'map',
    style: STYLE_URL,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    projection: config.projection
  });
  window.map = map;

  // Minimap globo si procede
  map.on('load', () => {
    if (config.inset && window.GlobeMinimap) {
      const GlobeMinimap = window.GlobeMinimap.default || window.GlobeMinimap;
      map.addControl(new GlobeMinimap({ ...(config.insetOptions || {}) }), config.insetPosition || 'bottom-right');
    }

    addSingleLayer();

    if (!applyChoroplethIfReady()) {
      const onSourceData = (e) => {
        if (e.sourceId === SINGLE_LAYER.sourceId && e.isSourceLoaded) {
          if (applyChoroplethIfReady()) map.off('sourcedata', onSourceData);
        }
      };
      map.on('sourcedata', onSourceData);
    }

    map.resize();
    setTimeout(() => map.resize(), 100);

    setupScroller();
    setMapInteractivity(false);

    if (config.chapters?.[0]?.legend?.length) updateLegend(config.chapters[0].legend);

    if (typeof config.chapters[0]?.onChapterEnter === 'function') {
      config.chapters[0].onChapterEnter();
      setTimeout(verifyChapterColors, 50);
    }
  });

  // Redimensionar
  window.addEventListener('resize', () => map && map.resize());
});