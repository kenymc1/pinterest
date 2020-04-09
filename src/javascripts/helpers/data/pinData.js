
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsById = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const demPins = response.data;
      const pins = [];
      Object.keys(demPins).forEach((pinId) => {
        demPins[pinId].id = pinId;
        pins.push(demPins[pinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const deletePins = (pinsId) => axios.get(`${baseUrl}/pins/${pinsId}.json`);

export default { deletePins, getPinsById };
