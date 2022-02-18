window.addEventListener('load', solve);

function solve() {

    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');

    const furnitureSection = document.getElementById('furniture-list');
    let totalPrice = document.querySelector('.total-price');

    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addFurniture);

    function addFurniture(ev) {
        ev.preventDefault();

        const model = modelInput.value.trim();
        const year = yearInput.value.trim();
        const description = descriptionInput.value.trim();
        let price = Number(priceInput.value.trim());

        if (model == '' || year == '' || description == '' || price == '' || price < 0 || year < 0) {
            return;
        }

        const moreBtn = el('button', 'More Info', { className: 'moreBtn' });
        const buyBtn = el('button', 'Buy it', { className: 'buyBtn' });
        const tdEl = document.createElement('td');
        tdEl.appendChild(moreBtn);
        tdEl.appendChild(buyBtn);

        const elPrice = document.createElement('td');
        // elPrice.textContent = price.toFixed(2);
        elPrice.textContent = `${price.toFixed(2)}`;

        const furnitureEl = el('tr', [
            el('td', model),
            elPrice,
            tdEl,
        ], { className: 'info' });

        const furnitureInfoEl = document.createElement('tr');
        furnitureInfoEl.classList.add('hide');
        const yearEl = el('td', `Year: ${year}`);
        const descriptionEl = el('td', `Description: ${description}`, { colSpan: '3' });

        furnitureInfoEl.appendChild(yearEl);
        furnitureInfoEl.appendChild(descriptionEl)

        furnitureSection.appendChild(furnitureEl);
        furnitureSection.appendChild(furnitureInfoEl);

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';

        moreBtn.addEventListener('click', showInfo);

        function showInfo() {
            if (moreBtn.textContent == 'More Info') {
                moreBtn.textContent = 'Less Info';
                furnitureInfoEl.classList.remove('hide')
                furnitureInfoEl.style.display = 'contents';
            } else {
                moreBtn.textContent = 'More Info';
                furnitureInfoEl.classList.add('hide');
                furnitureInfoEl.style.display = 'none';
            }
        }

        buyBtn.addEventListener('click', buyFurniture)

        function buyFurniture() {
            const td = buyBtn.parentElement.parentElement;

            let price = td.querySelectorAll('td');
            price = Number(price[1].textContent);

            totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);
            td.remove();
        }
    }


    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes)
        }
        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node)
        }
        return result;
    }

}