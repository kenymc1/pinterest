const buildPins = (pin) => {
  let domString = '';
  domString += `<div id="${pin.id}" class="card">`;
  domString += '  <div class="card-body">';
  domString += `    <h4 class="card-title">${pin.name}</h4>`;
  domString += '  </div>';
  domString += `  <img src="${pin.img}" class="card-img-bottom" alt="...">`;
  domString += '     <div class="card-footer">';
  domString += '        <button class="delete-btn col-5"> Delete <i class="far fa-trash-alt"></i></button>';
  domString += '     </div>';
  domString += '</div>';
  return domString;
};

export default { buildPins };
