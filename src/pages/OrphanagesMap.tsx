import React from 'react';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header> 
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Rio do Sul</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map
                center={[-23.524727, -46.4296952]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={26} color="#fff"/>
            </Link>
        </div>
   )
}

export default OrphanagesMap;