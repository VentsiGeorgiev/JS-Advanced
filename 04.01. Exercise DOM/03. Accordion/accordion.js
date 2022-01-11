function toggle() {
    // намираме референция
    const div = document.querySelector('#extra');
    const btn = document.getElementsByClassName('button');

    // намираме свойството
    if (div.style.display === 'block') {
        // ако е видим, скриваме и изписваме More
        btn.textContent = 'More';
        div.style.display = '';
    } else {
        // иначе го показваме и изписваме Less
        btn.textContent = 'Less';
        div.style.display = 'block';
    }
}
