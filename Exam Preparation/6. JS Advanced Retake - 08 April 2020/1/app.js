function solve() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');

    const addBtn = document.getElementById('add');

    const allSections = document.querySelectorAll('section');
    const openSectionDiv = allSections[1].querySelectorAll('div')[1];
    const processSection = document.getElementById('in-progress');


    addBtn.addEventListener('click', openTask);

    function openTask(ev) {
        ev.preventDefault();

        const task = taskInput.value.trim();
        const description = descriptionInput.value.trim();
        const date = dateInput.value.trim();

        if (task == '' || description == '' || date == '') {
            return;
        }

        const startBtn = el('button', 'Start', { className: 'green' })
        const delBtn = el('button', 'Delete', { className: 'red' })

        const article = el('article', [
            el('h3', `${task}`),
            el('p', `Description: ${description}`),
            el('p', `Due Date: ${date}`),
            el('div', [
                startBtn,
                delBtn
            ], { className: 'flex' })
        ])

        openSectionDiv.appendChild(article);

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';

        startBtn.addEventListener('click', processTask);

        function processTask() {
            const articleDiv = document.querySelector('.flex');

            processSection.appendChild(article);
            startBtn.remove();
            const finishBtn = el('button', 'Finish', { className: 'orange' })
            articleDiv.appendChild(finishBtn)

            finishBtn.addEventListener('click', completeTask)

            function completeTask() {
                const completeSectionDiv = allSections[3].querySelectorAll('div')[1];
                completeSectionDiv.appendChild(article);
                articleDiv.remove()
            }


        }

        delBtn.addEventListener('click', removeTask);

        function removeTask() {
            delBtn.parentElement.parentElement.remove();
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