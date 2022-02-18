window.addEventListener('load', solve);

function solve() {

    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');


    const addBtn = document.getElementById('add');
    const furnitureList = document.getElementById('furniture-list');


    addBtn.addEventListener('click', addFurnitures);

    function addFurnitures(ev) {
        ev.preventDefault();

        const model = modelInput.value.trim();
        const year = Number(yearInput.value.trim());
        const description = descriptionInput.value.trim();
        const price = Number(priceInput.value.trim());


        if (model == '' || description == '' || year == '' || price == '' || year <= 0 || price <= 0) {
            return;
        }

        const tr = document.createElement('tr');
        tr.classList.add('info');
        tr.innerHTML = `<td>${model}</td>
                        <td>${price.toFixed(2)}</td>
                        <td>
                        <button class="moreBtn">More Info</button>
                        <button class="buyBtn">Buy it</button>
                        </td>`;
        const hideTr = document.createElement('tr');
        hideTr.classList.add('hide');
        hideTr.innerHTML = `<td>Year: ${year}</td><td colspan="3">Description: ${description}</td>`

        furnitureList.appendChild(tr);
        furnitureList.appendChild(hideTr);

        modelInput.value = ''
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';


        const [infoBtn, buyBtn] = tr.querySelectorAll('button');

        infoBtn.addEventListener('click', showInfo)

        function showInfo() {
            if (infoBtn.textContent == 'More Info') {
                infoBtn.textContent = 'Less Info';
                hideTr.classList.remove('hide')
                hideTr.style.display = 'contents';
            } else {
                infoBtn.textContent = 'More Info';
                hideTr.classList.add('hide');
                hideTr.style.display = 'none';
            }
        }

        buyBtn.addEventListener('click', boughtItems)

        function boughtItems() {
            let totalPrice = document.querySelector('.total-price');

            const td = buyBtn.parentElement.parentElement;

            let price = td.querySelectorAll('td');
            price = Number(price[1].textContent);

            totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

            let myNode = buyBtn.parentElement.parentElement
            myNode.innerHTML = ''
        }

    }
}


