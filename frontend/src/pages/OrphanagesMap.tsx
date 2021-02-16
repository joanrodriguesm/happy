import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'; 

import '../styles/pages/orphanages-map.css'


import mapMarkerImg from '../assets/map-marker.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita!</p>
        </header>

        <footer>
          <strong>São João do Paraíso</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <MapContainer 
        center={[-15.3171938,-42.0271669]}
        zoom={16.5}
        style={{ width: '100%', height: '100%'}}
      >
          <TileLayer
            // url={"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFFFFF"/>
      </Link>

    </div>
  );
};

export default OrphanagesMap;