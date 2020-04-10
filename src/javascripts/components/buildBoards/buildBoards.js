const buildBoards = (board) => {
  let domString = '';
  domString += `<div id="${board.id}" class="card">`;
  domString += '  <div class="card-body">';
  domString += `    <h4 class="card-title">${board.name}</h4>`;
  domString += `    <p class="card-text">${board.desc}</p>`;
  domString += '  </div>';
  domString += `  <img src="${board.img}" class="card-img-bottom" alt="...">`;
  domString += '     <div class="card-footer">';
  domString += '        <button class="show-pins col-5">Pins <i class="fas fa-thumbtack"></i></button>';
  domString += '        <button class="delete-btn col-5"> Delete <i class="far fa-trash-alt"></i></button>';
  domString += '     </div>';
  domString += '</div>';
  return domString;
};

export default { buildBoards };
