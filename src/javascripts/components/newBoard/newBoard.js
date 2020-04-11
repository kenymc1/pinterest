import utils from '../../helpers/utils';

const createBoard = () => {
  let domString = '';
  domString += '<h2 class="text-center">New Board</h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<label for="board-name">Name</label>';
  domString += '<div class="form-group">';
  domString += '<input type="text" class="form-control" id="board-name" placeholder="Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="board-desc">Desc</label>';
  domString += '<input type="text" class="form-control" id="board-desc" placeholder="Desc">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="board-img">Image Url</label>';
  domString += '<input type="url" class="form-control" id="board-img" placeholder="Url">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-dark" id="board-creator">Add Board</button>';
  domString += '</form>';


  utils.printToDom('new-board', domString);
};

export default { createBoard };
