import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const demBoards = response.data;
      const boards = [];
      Object.keys(demBoards).forEach((boardsId) => {
        demBoards[boardsId].id = boardsId;
        boards.push(demBoards[boardsId]);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});

export default { getBoards };
