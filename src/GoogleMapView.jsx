import React from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDJT9vp5p-ZxxFV2WmFGbbYxaTuW33ANcM';

export default function GoogleMapView() {
  return <GoogleMap address="UNSW Sydney NSW" />;
}

class GoogleMap extends React.Component {
  constructor() {
    super();
    this.updateMapContainerRef = this.updateMapContainerRef.bind(this);
  }

  componentDidMount() {
    this.getGeocode().then((response) => {
      const { results } = response.data;
      if (results.length) {
        const { geometry: { location } } = results[0];
        const latLng = new google.maps.LatLng(location.lat, location.lng);
        this.map = new google.maps.Map(this.mapContainer);
        this.map.setCenter(latLng);
        this.map.setZoom(16);
        this.marker = new google.maps.Marker({
          map: this.map,
          position: latLng,
        });
      }
    });
  }

  getGeocode() {
    const address = encodeURIComponent(this.props.address);

    return axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`);
  }

  updateMapContainerRef(ref) {
    this.mapContainer = ref;
  }

  render() {
    return (
      <div>
        <h3>{this.props.address}</h3>
        <div ref={this.updateMapContainerRef} style={{ width: 800, height: 600 }} />
      </div>
    );
  }
}
