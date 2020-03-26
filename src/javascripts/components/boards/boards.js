const boardMaker = (boards) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += '<div class="card">';
  domString += `<div class="card-header">${boards.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${boards.color}</h5>`;
  domString += `<p class="card-text">Amount: ${boards.amount} ct.</p>`;
  domString += `<p class="card-text">Production: ${boards.year}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { boardMaker };
