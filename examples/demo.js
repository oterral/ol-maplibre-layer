import 'ol/ol.css';
import './style.css';

import Map from 'ol/Map';
import Source from 'ol/source/Source';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileDebug from 'ol/source/TileDebug';

import {MapLibreLayer} from '../src/index';

window.map = new Map({
  layers: [
    new MapLibreLayer({
      mapLibreOptions: {
        style:
          'https://maps.geops.io/styles/tralis_munich_schematic_v3/style.json?key=5cc87b12d7c5370001c1d655112ec5c21e0f441792cfc2fafe3e7a1e',
      },
      source: new Source({
        attributions: [
          '<a href="https://www.geo.admin.ch/en/vector-tiles-service-available-services-and-data" target="_blank">© swisstopo</a>',
        ],
      }),
    }),
    new TileLayer({
      source: new TileDebug(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [2406279, 1722649],
    zoom: 5.5,
  }),
});

window.map.on('singleclick', (evt) => {
  const features = window.map.getFeaturesAtPixel(evt.pixel);
  features.forEach((feature) => {
    console.log(feature);
  });
});
