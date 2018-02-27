import React from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDJT9vp5p-ZxxFV2WmFGbbYxaTuW33ANcM';

export default function GoogleMapView() {
  return (
    <GoogleMap address="135 King St Sydney 2000" />
  );
}

class GoogleMap extends React.Component {
  constructor() {
    super();
    this.updateMapContainerRef = this.updateMapContainerRef.bind(this);
  }

  componentDidMount() {
    // 1. get position (lat,lng) using google map API
    // 2. create new google map object and create a marker which has this position
    // this.geocode().then(response => console.log(response.data));
    this.fetchPosition().then(pos => {
      this.map = new google.maps.Map(this.mapContainer);
      this.map.setCenter(pos);
      this.map.setZoom(16);
      this.marker = new google.maps.Marker({
        map: this.map,
        position: pos,
      });
    });
  }

  fetchPosition() {
    const address = encodeURIComponent(this.props.address);
    return new Promise((resolve) => {
      axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`)
        .then(response => {
          if (response.data.results.length === 0) {
            resolve(null);
          }
          resolve(response.data.results[0].geometry.location);
        });
    });
  }

  updateMapContainerRef(ref) {
    this.mapContainer = ref;
  }

  render() {
    return (
      <div>
        <div ref={this.updateMapContainerRef} style={{ width: 800, height: 600 }} />
      </div>
    );
  }
}
