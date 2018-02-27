import React from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDJT9vp5p-ZxxFV2WmFGbbYxaTuW33ANcM';

export default class GoogleMapView extends React.Component {
  constructor() {
    super();
    this.state = { address: '' };

    this.handleAddressSelected = this.handleAddressSelected.bind(this);
  }

  handleAddressSelected(address) {
    this.setState({ address });
  }

  render() {
    return (
      <div>
        <h3>GoogleMaps Integration</h3>
        <AddressSearchBox onAddressSelected={this.handleAddressSelected} />
        <GoogleMap address={this.state.address} />
      </div>
    );
  }
}

function mapPredictionToAutocompleteOption(prediction) {
  return {
    value: prediction.place_id,
    label: `${prediction.structured_formatting.main_text} ${prediction.structured_formatting.secondary_text}`,
  };
}

class AddressSearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
    this.updateSearchBoxRef = this.updateSearchBoxRef.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  componentDidMount() {
    $(this.searchBox).autocomplete({
      source: (request, resolve) => {
        const term = (request.term || '').trim();
        if (term.length === 0) {
          resolve([]);
        } else {
          const autoComplete = new google.maps.places.AutocompleteService();
          autoComplete.getPlacePredictions({
            input: term,
            types: ['geocode'],
            componentRestrictions: {
              country: 'au',
            },
          }, (predictions) => {
            const autocompleteOptions = (predictions || []).map(mapPredictionToAutocompleteOption);
            resolve(autocompleteOptions);
          });
        }
      },
      minLength: 2,
      select: (event, ui) => {
        event.preventDefault();
        if (this.props.onAddressSelected) {
          this.props.onAddressSelected(ui.item.label);
        }
        this.setState({ searchTerm: ui.item.label });
        return false;
      },
      focus: () => false,
    });
  }

  handleSearchTermChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  updateSearchBoxRef(ref) {
    this.searchBox = ref;
  }

  render() {
    return (
      <div>
        <input
          ref={this.updateSearchBoxRef}
          className="form-control"
          style={{ width: 400 }}
          placeholder="Enter address"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
      </div>
    );
  }
}

class GoogleMap extends React.Component {
  constructor() {
    super();
    this.updateMapContainerRef = this.updateMapContainerRef.bind(this);
  }

  componentDidMount() {
    this.updateMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.address !== this.props.address) {
      this.updateMap();
    }
  }

  getGeocode() {
    const address = encodeURIComponent(this.props.address);

    return axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`);
  }

  updateMap() {
    const addressToSearch = (this.props.address || '').trim();
    if (!addressToSearch) {
      return;
    }
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

  updateMapContainerRef(ref) {
    this.mapContainer = ref;
  }

  render() {
    return (
      <div ref={this.updateMapContainerRef} style={{ width: 800, height: 600 }} />
    );
  }
}
