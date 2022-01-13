function lockedProfile() {
    // add toggle event listener to all profile buttons
    // find associated profile details
    // it it's visible -> hide it and display label 'Show more'
    // otherwise -> show it and display label 'Hide it'

    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        const infoDif = profile.querySelector('div');

        if (isActive) {
            /*
                    const infoDif = Array
                        .from(e.target.parentElement.querySelectorAll('div'))
                        .find(d => d.id.includes('HiddenFields'));
                    */

            if (e.target.textContent == 'Show more') {
                infoDif.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDif.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
    /*
        /////////// ADDING FUNCTIONALITY FOR DISABLE BUTTON - NOT NEEDED FOR JUDGE//////////
    
        const radio = Array.from(document.querySelectorAll('input[type="radio"]'));
    
        for (const input of radio) {
            input.addEventListener('click', onLockToggle);
    
        }
    
        function onLockToggle(e) {
            let button = e.target.parentElement.querySelector('button');
            if (e.target.value == 'lock') {
                button.disabled = true;
            } else {
                button.disabled = false;
            }
        }
        */
}