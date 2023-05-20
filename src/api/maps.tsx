import axios from 'axios';
import Polyline from '@mapbox/polyline';
import {IMarker} from '../utils';

const REACT_APP_MAPBOX_TOKEN =
  'pk.eyJ1Ijoic3ViaGFtcHJlZXQiLCJhIjoiY2toY2IwejF1MDdodzJxbWRuZHAweDV6aiJ9.Ys8MP5kVTk5P9V2TDvnuDg';

('https://api.mapbox.com/directions/v5/{profile}/{coordinates}');

const directionsRoutingProfiles = [
  'driving',
  'walking',
  'cycling',
  'driving-traffic',
];

const mappedProfiles = {
  driving: 'driving',
  walking: 'walking',
  cycling: 'cycling',
  'driving-traffic': 'drivingTraffic',
};

export const getDirectionsInformation = async (
  source: IMarker,
  destination: IMarker,
) => {
  let directionsInformation = {
    driving: {
      distance: 1,
      duration: 0,
      polylineCoordinates: [],
      directionInstructions: [
        {
          name: '',
          distance: 0,
          duration: 0,
          maneuver: {},
        },
      ],
    },
    walking: {
      distance: 2,
      duration: 0,
      polylineCoordinates: [],
      directionInstructions: [
        {
          name: '',
          distance: 0,
          duration: 0,
          maneuver: {},
        },
      ],
    },
    cycling: {
      distance: 3,
      duration: 0,
      polylineCoordinates: [],
      directionInstructions: [
        {
          name: '',
          distance: 0,
          duration: 0,
          maneuver: {},
        },
      ],
    },
    drivingTraffic: {
      distance: 4,
      duration: 0,
      polylineCoordinates: [],
      directionInstructions: [
        {
          name: '',
          distance: 0,
          duration: 0,
          maneuver: {},
        },
      ],
    },
  };

  await Promise.all(
    directionsRoutingProfiles.map(async profile => {
      const url = `https://api.mapbox.com/directions/v5/mapbox/${profile}/${source.latlng.longitude},${source.latlng.latitude};${destination.latlng.longitude},${destination.latlng.latitude}?geometries=geojson&steps=true&access_token=${REACT_APP_MAPBOX_TOKEN}`;
      await axios.get(url).then(response => {
        let coords = response.data.routes[0].geometry.coordinates.map(
          (point: number[], index: number) => {
            return {
              latitude: point[1],
              longitude: point[0],
            };
          },
        );
        directionsInformation[mappedProfiles[profile]].distance =
          response.data.routes[0].distance;
        directionsInformation[mappedProfiles[profile]].duration =
          response.data.routes[0].duration;
        directionsInformation[mappedProfiles[profile]].polylineCoordinates =
          coords;
        directionsInformation[mappedProfiles[profile]].directionInstructions =
          response.data.routes[0].legs[0].steps.map(
            (item: any, index: number) => {
              return {
                name: item.name,
                distance: item.distance,
                duration: item.duration,
                maneuver: item.maneuver,
              };
            },
          );
      });
    }),
  );
  return directionsInformation;
};
