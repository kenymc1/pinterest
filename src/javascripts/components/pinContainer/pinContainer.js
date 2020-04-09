// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/app';
import 'firebase/auth';

import pinData from '../../helpers/data/pinData';
import pinsComponent from '../pins/pins';
import utils from '../../helpers/utils';


// const getCurrentUid = () => {
//   const myUid = firebase.auth().currentUser.uid;
//   console.error(myUid);
//   pinData.getPinsByUid(myUid).then().catch();
// };

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 class="text-center">Pins</h2>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += pinsComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('pins', domString);
    })
    .catch((err) => console.error('problem with getPins', err));
};

export default { buildPins };
