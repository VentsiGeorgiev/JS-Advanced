function create(words) {
   //create <div>
   // create <p>
   // set <p> content
   // configure <p> to be hidden (display: none)
   // add <p> to <div>
   // add <div> to page
   // cofigure <div> eventListener
   const content = document.getElementById('content')

   for (let word of words) {
      // for (let i = 0; i < words.length; i++) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      // para.textContent = words[i];
      para.style.display = 'none';
      div.appendChild(para);

      div.addEventListener('click', reveal)

      content.appendChild(div);


   }
   function reveal(e) {
      e.currentTarget.children[0].style.display = '';
   }


}