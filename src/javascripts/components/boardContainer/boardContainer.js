import firebase from 'firebase/app';
import 'firebase/auth';

import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import boardComponent from '../boards/boards';
// import buildPins from '../pins/pins';

const getCurrentUid = () => {
  const myUid = firebase.auth().currentUser.uid;
  console.error(myUid);
  boardData.getBoardsByUid(myUid).then().catch();
};

const buildBoards = () => {
  const { uid } = firebase.auth().currentUser;
  boardData.getBoards(uid)
    .then((bigBoards) => {
      let domString = '';
      domString += '<h2 class="text-center">Boards</h2>';
      domString += '<div class="d-flex flex-wrap">';
      bigBoards.forEach((boards) => {
        domString += boardComponent.boardMaker(boards);
      });
      domString += '</div>';
      utils.printToDom('boards', domString);
      // $('body').on('click', '.farmer-card', buildPins.buildBoards);
      $('#get-uid').click(getCurrentUid);
    })
    .catch((err) => console.error('get boards broke', err));
};

export default { buildBoards };
