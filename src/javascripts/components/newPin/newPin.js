import utils from '../../helpers/utils';

const createPin = () => {
  let domString = '';
  domString += '<h2 class="text-center">New Pin</h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<label for="pin-name">Name</label>';
  domString += '<div class="form-group">';
  domString += '<input type="text" class="form-control" id="pin-name" placeholder="Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="pin-img">Image Url</label>';
  domString += '<input type="url" class="form-control" id="pin-img" placeholder="Url">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-dark" id="pin-creator">Add pin</button>';
  domString += '</form>';


  utils.printToDom('new-pin', domString);
};

export default { createPin };
