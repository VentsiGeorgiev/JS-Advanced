function solve() {
  /* # configure event listeners # */
  // select all butons
  // first button -> table generation
  // second button -> buy furniture

  const table = document.querySelector('table.table tbody');
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  // console.log(input, output);


  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  // console.log(generateBtn, buyBtn);

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  /* # table generation # */
  function generate(e) {
    // read input JSON and parse it
    // for every array element, create table row
    const data = JSON.parse(input.value);

    for (let item of data) {

      const row = document.createElement('tr');



      row.appendChild(createCell('img', { src: item.img }));
      row.appendChild(createElement('p', {}, item.name));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('input', { type: 'checkbox' }));

      table.appendChild(row);

    }

  }

  function createCell(nestedTag, props, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);
    for (const prop in props) {
      if (Object.hasOwnProperty.call(object, prop)) {
        nested[prop] = props[prop];
      }
      if (content) {
        nested.textContent = content
      }
      cell.appendChild(nested);
      return cell;
    }
  }


  /* # buy furniture # */
  function buy(e) {
    // select all checkboxes
    // filter only checked checkboxes
    // repeat for every selected checkbox
    // -- select parent row
    // -- read item information
    // display output

    const furniture = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent),
      }));
    const names = []
    let total = 0;
    let decFactor = 0;

    for (const item of furniture) {
      names.push(item.name)
      total += item.price;
      decFactor += item.decFactor;
    }

    const result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`;

    output.value = result;

  }


}