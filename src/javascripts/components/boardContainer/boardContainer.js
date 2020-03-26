import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import boardComponent from '../boards/boards';

const buildBoards = () => {
  boardData.getBoards()
    .then((bigBoards) => {
      let domString = '';
      domString += '<h2 class="text-center">Boards</h2>';
      domString += '<div class="d-flex flex-wrap">';
      bigBoards.forEach((boards) => {
        domString += boardComponent.boardMaker(boards);
      });
      domString += '</div>';
      utils.printToDom('boards', domString);
    })
    .catch((err) => console.error('get boards broke', err));
};

export default { buildBoards };
