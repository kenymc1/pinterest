import firebase from 'firebase';
import 'firebase/auth';


const authDiv = $('#auth');
const pinterestDiv = $('#pinterest');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      pinterestDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      pinterestDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};


export default { checkLoginStatus };
