import firebase from 'firebase/app';
import pins from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import './pins.scss';
import newPinComponent from '../newPin/newPin';

const closePinsView = () => {
  $('#boards').removeClass('hide');
  $('#navHeadingPins').addClass('hide');
  $('#navHeadingBoards').removeClass('hide');
  $('#pins').addClass('hide');
};

const deletePinEvent = (e) => {
  const selectedPin = e.target.closest('.card').id;
  const selectedBoardId = e.target.closest('.board-id').id;
  pins.deletePin(selectedPin)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printPins(selectedBoardId);
    })
    .catch((err) => console.error('cannot delete pin', err));
};

const makeAPin = (e) => {
  e.preventDefault();
  // make a new board
  const { uid } = firebase.auth().currentUser;
  const userId = uid;
  const newPin = {
    name: $('#pin-name').val(),
    img: $('#pin-img').val(),
    uid: userId,

  };
  // eslint-disable-next-line no-console
  console.log('makeBoard', newPin);
  pins.addPin(newPin)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printPins();
      utils.printToDom('new-pin', '');
    })
    .catch((err) => console.error('cannot show new pin', err));
};

const printPins = (boardId) => {
  pins.getPinsByBoardId(boardId)
    .then((response) => {
      const selectedPins = response;
      let domString = '';
      domString += '<i class="m-3 goBack far fa-arrow-alt-circle-left fa-2x"></i>';
      domString += '<div>';
      domString += '<h2 class="text-center">Pins</h2>';
      domString += '<button class=" btn btn-primary text-center" id="create-pin-form"><i class="fas fa-plus-square"></i></button>';
      domString += '</div>';
      domString += '<div class="card-columns justify-content-center ml-5 mr-5">';
      selectedPins.forEach((selectedPin) => {
        domString += `<div id="${selectedPin.id}" class="card">`;
        domString += `  <img src="${selectedPin.imageUrl}" class="card-img-bottom alt="...">`;
        domString += '<div class="card-body">';
        domString += '  <div class="row">';
        domString += `    <p class="col-9 p-0 m-0 card-description">${selectedPin.name}</p>`;
        domString += '    <div class= "col-3 p-0 m-0">';
        domString += `      <button id="${selectedPin.boardId}" class="board-id delete-btn">Delete <i class="delete-pin far fa-trash-alt"></i></button>`;
        domString += '    </div>';
        domString += '  </div>';
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('pins', domString);
      $('body').on('click', '.goBack', closePinsView);
      $('body').on('click', '.delete-pin', deletePinEvent);
      $('#create-pin-form').click(newPinComponent.createPin);
    })
    .catch((err) => console.error('Problem with printPins', err));
};

export default { printPins, closePinsView, makeAPin };
