import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
    const position = [41.3046339, 2.0166756]
    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={true} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Carrer de la Llobatona, 82,<br /> 08840 Viladecans,<br /> Barcelona <br />
                    Telf: 678859463
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map  