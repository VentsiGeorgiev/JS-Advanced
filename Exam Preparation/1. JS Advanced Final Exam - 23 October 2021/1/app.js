window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById('genre');
    const songNameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');

    const likeSection = document.querySelector('#total-likes .likes p')
    const savedSeciton = document.querySelector('.saved-container')

    const addBtn = document.getElementById('add-btn');
    const collectionContainer = document.querySelector('.all-hits-container');

    addBtn.addEventListener('click', collectSong);

    function collectSong(ev) {
        ev.preventDefault();

        const genre = genreInput.value.trim();
        const songName = songNameInput.value.trim();
        const author = authorInput.value.trim();
        const date = dateInput.value.trim();

        if (genre == '' || songName == '' || author == '' || date == '') {
            return;
        }

        const imgEl = document.createElement('img')
        imgEl.src = './static/img/img.png';

        const saveBtn = el('button', 'Save song', { className: 'save-btn' })
        const likeBtn = el('button', 'Like song', { className: 'like-btn' })
        const delBtn = el('button', 'Delete', { className: 'delete-btn' })

        const divEl = el('div', [
            imgEl,
            el('h2', `Genre: ${genre}`),
            el('h2', `Name: ${songName}`),
            el('h2', `Author: ${author}`),
            el('h3', `Date: ${date}`),
            saveBtn,
            likeBtn,
            delBtn
        ], { className: 'hits-info' });

        collectionContainer.appendChild(divEl);

        genreInput.value = '';
        songNameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        likeBtn.addEventListener('click', onLike)

        function onLike() {
            let currentLikes = Number(likeSection.textContent.split(':')[1].trim());
            currentLikes++;
            likeSection.textContent = `Total Likes: ${currentLikes}`
            likeBtn.disabled = true;
        }

        saveBtn.addEventListener('click', savingSongs)

        function savingSongs() {
            savedSeciton.appendChild(divEl);
            likeBtn.remove()
            saveBtn.remove()
        }

        delBtn.addEventListener('click', removeSong)

        function removeSong() {
            divEl.remove()
        }

    }



    // # create el function
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