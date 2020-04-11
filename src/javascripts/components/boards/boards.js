import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import buildBoardsComp from '../buildBoards/buildBoards';
import singleBoard from '../pins/pins';
import pinsData from '../../helpers/data/pinData';
import './boards.scss';
import newBoardComponent from '../newBoard/newBoard';

const boardsDiv = $('#boards');
const navHeadingBoardsDiv = $('#navHeadingBoards');
const navHeadingPinsDiv = $('#navHeadingPins');

const boardEvent = (e) => {
  const selectedBoardId = e.target.closest('.card').id;
  boardsDiv.addClass('hide');
  navHeadingBoardsDiv.addClass('hide');
  singleBoard.printPins(selectedBoardId);
  navHeadingPinsDiv.removeClass('hide');
  $('#pins').removeClass('hide');
};

const deleteBoardEvent = (e) => {
  const selectedBoardId = e.target.closest('.card').id;
  boardData.deleteBoard(selectedBoardId)
    .then(() => {
      pinsData.getPinsByBoardId(selectedBoardId)
        .then((selectedPins) => {
          selectedPins.forEach((pin) => {
            pinsData.deletePin(pin.id);
          });
          // eslint-disable-next-line no-use-before-define
          printBoards();
        })
        .catch((err) => console.error('cannot delete entire board', err));
    });
};

const makeABoard = (e) => {
  e.preventDefault();
  // make a new board
  const { uid } = firebase.auth().currentUser;
  const userId = uid;
  const newBoard = {
    name: $('#board-name').val(),
    desc: $('#board-desc').val(),
    img: $('#board-img').val(),
    uid: userId,

  };
  // eslint-disable-next-line no-console
  console.log('makeBoard', newBoard);
  boardData.addBoard(newBoard)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printBoards();
      // utils.printToDom('new-board', '');
    })
    .catch((err) => console.error('cannot show new board', err));
};


const printBoards = () => {
  const { uid } = firebase.auth().currentUser;
  boardData.getBoards(uid)
    .then((boards) => {
      let domString = '';
      domString += '<h2 class="text-center">Boards</h2>';
      domString += '<button class=" btn btn-primary text-center" id="create-board-form"><i class="fas fa-plus-square"></i></button>';
      domString += '<div class="card-columns justify-content-center m-5">';
      boards.forEach((board) => {
        domString += buildBoardsComp.buildBoards(board);
      });
      domString += '</div>';
      utils.printToDom('boards', domString);
      $('body').on('click', '.show-pins', boardEvent);
      $('body').on('click', '.delete-btn', deleteBoardEvent);
      $('body').on('click', '#board-creator', makeABoard);
      $('#create-board-form').click(newBoardComponent.createBoard);
    })
    .catch((err) => console.error('problem with printBoards', err));
};

export default { printBoards, boardEvent, makeABoard };
