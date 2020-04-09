import firebase from 'firebase';
import 'firebase/auth';
import pinContainer from '../../components/pinContainer/pinContainer';

import boardContainer from '../../components/boardContainer/boardContainer';
// import pins from '../../components/boardContainer/boardContainer';

const authDiv = $('#auth');
const boardsDiv = $('#boards');
const pinsDiv = $('#pins');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      boardContainer.buildBoards();
    } else {
      authDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      pinsDiv.addClass('hide');
      logoutButton.addClass('hide');
      pinContainer.buildPins();
    }
  });
};


export default { checkLoginStatus };
