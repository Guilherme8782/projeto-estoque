
fetch('http://localhost:3000/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var html = '';

    data.forEach(function(item) {
      var nome = item.Nome;
      var tipo = item.Tipo;
      var quantidade = item.Quantidade;

      html += '<h3>' + nome + '</h3>';
      html += '<p>' + tipo + '</p>';
      html += '<p>Quantidade: ' + quantidade + '</p>';
      html += '</section>';
    });

    document.querySelector('.produtos').innerHTML = html;
    document.querySelector('.tipo').innerHTML = html;
    document.querySelector('.quantidade').innerHTML = html;
  })
  .catch(function(error) {
    console.log('Ocorreu um erro:', error);
  });