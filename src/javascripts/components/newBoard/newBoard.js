import utils from '../../helpers/utils';

const createBoard = () => {
  let domString = '';
  domString += '<h2>New Board</h2>';
  utils.printToDom('new-board', domString);
};

export default { createBoard };
