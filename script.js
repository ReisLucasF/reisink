const shareButtons = document.querySelectorAll('.tile-share-button')

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))

  // Função para criar e adicionar as divs com a classe 'tile-share-button'
  function addShareButton(parentElement, link) {
    // Crie a div
    var shareDiv = document.createElement('div');
    shareDiv.classList.add('tile-share-button');
    shareDiv.setAttribute('link', link); // Adicione o link como atributo

    // Crie o SVG
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('enable-background', 'new 0 0 24 24');
    svg.classList.add('sc-gKsewC', 'iPWGYb'); // Adicione as classes necessárias

    // Crie o path dentro do SVG
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('d', 'M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z');
    path.setAttribute('fill', 'rgb(1, 7, 13)');

    // Adicione o path dentro do SVG
    svg.appendChild(path);

    // Adicione o SVG dentro da div
    shareDiv.appendChild(svg);

    // Adicione a nova div dentro do elemento pai
    parentElement.appendChild(shareDiv);
  }

  // Selecione os elementos pais onde deseja adicionar as novas divs
  var parentElements = document.querySelectorAll('.tile');

  // Para cada elemento pai, adicione uma nova div com a classe 'tile-share-button'
  parentElements.forEach(function(parentElement) {
    addShareButton(parentElement, 'Youtube'); // Substitua 'Youtube' pelo link desejado
  });
