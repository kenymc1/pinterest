
const buildPins = (pins) => {
  // const userId = e.target.closest('.card').id;
  let domString = '';
  domString += '<h2> class="text-center">Cool Pin</h2>';
  domString += '<div class="col-12">';
  domString += '<div class="card text-white bg-dark">';
  domString += `<div class="card-header">Item ${pins.name} </div>`;
  domString += '<div class="card-body">';
  domString += `<div class="img">${pins.imageUrl}`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildPins };
