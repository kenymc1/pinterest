import firebase from 'firebase/app';
import 'firebase/auth';
import boards from '../../components/boards/boards';


const authDiv = $('#auth');
const boardsDiv = $('#boards');
const navHeadingDiv = $('#navHeading');
const navHeadingBoardsDiv = $('#navHeadingBoards');
const navHeadingPinsDiv = $('#navHeadingPins');
const newBoardDiv = $('#new-board');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      navHeadingDiv.addClass('hide');
      navHeadingBoardsDiv.removeClass('hide');
      navHeadingPinsDiv.addClass('hide');
      newBoardDiv.removeClass('hide');
      boards.printBoards();
    } else {
      authDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      navHeadingDiv.removeClass('hide');
      navHeadingBoardsDiv.addClass('hide');
      newBoardDiv.addClass('hide');
      logoutButton.addClass('hide');
      navHeadingPinsDiv.addClass('hide');
    }
  });
};
export default { checkLoginStatus };
