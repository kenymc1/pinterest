const boardMaker = (boards) => {
  let domString = '';
  domString += `<div id="${boards.id}" class="card board">`;
  domString += '  <div class="card-body">';
  domString += `    <h5 class="card-title">${boards.name}</h5>`;
  domString += `    <p class="card-text">${boards.desc}</p>`;
  domString += '  </div>';
  domString += `  <img class="card-img-bottom" src="${boards.img}"></img>`;
  domString += '<div>';
  domString += '<button class="btn btn-primary">Show Pins <i class="fas fa-thumbtack"></i></button>';
  domString += '<button class="btn btn-danger">delete Board <i class="fas fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';


  return domString;
};
export default { boardMaker };
