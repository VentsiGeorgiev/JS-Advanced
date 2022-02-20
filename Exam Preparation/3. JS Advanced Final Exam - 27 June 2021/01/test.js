function solution() {
   let nameInput = document.getElementById('fname');
   let emailInput = document.getElementById('email');
   let phoneInput = document.getElementById('phone');
   let adressInput = document.getElementById('address')
   let postalCodeInput = document.getElementById('code');

   const submitBtn = document.getElementById('submitBTN');
   const editBtn = document.getElementById('editBTN')
   const continueBtn = document.getElementById('continueBTN')

   const infoPreviewSection = document.getElementById('infoPreview');

   submitBtn.addEventListener('click', proceedReservation);

   function proceedReservation(ev) {
      ev.preventDefault();

      let name = nameInput.value.trim();
      let email = emailInput.value.trim();
      let phone = phoneInput.value.trim();
      let address = adressInput.value.trim();
      let postalCode = postalCodeInput.value.trim();

      if (nameInput.value == '' || emailInput.value == '') {
         return
      }

      // to
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      adressInput.value = '';
      postalCodeInput.value = '';

      let nameEl = el('li', `Full Name: ${name}`);
      let emailEl = el('li', `Email: ${email}`);
      let phoneEl = el('li', `Phone Number: ${phone}`);
      let adrEl = el('li', `Address: ${address}`)
      let codeEl = el('li', `Postal Code: ${postalCode}`);


      infoPreviewSection.appendChild(nameEl);
      infoPreviewSection.appendChild(emailEl);
      infoPreviewSection.appendChild(phoneEl);
      infoPreviewSection.appendChild(adrEl);
      infoPreviewSection.appendChild(codeEl);

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

      // from


      editBtn.addEventListener('click', edinInfo)

      function edinInfo() {

         let infoArr = Array.from(document.querySelectorAll('#infoPreview li'))

         let nameE = infoArr[0].textContent.split(':')[1].trim();
         let emailE = infoArr[1].textContent.split(':')[1].trim();
         let phoneNumE = infoArr[2].textContent.split(':')[1].trim();
         let adressE = infoArr[3].textContent.split(':')[1].trim();
         let codeE = infoArr[4].textContent.split(':')[1].trim();

         nameInput.value = nameE;
         emailInput.value = emailE;
         phoneInput.value = phoneNumE;
         adressInput.value = adressE;
         postalCodeInput.value = codeE;

         infoArr.forEach(x => x.remove())
         submitBtn.disabled = false;
         editBtn.disabled = true;
         continueBtn.disabled = true;

      }

      continueBtn.addEventListener('click', completeReservation);

      function completeReservation() {
         document.getElementById('block').remove();
         let divEl = document.createElement('div');
         divEl.setAttribute('id', 'block');

         let headingEl = el('h3', 'Thank you for your reservation!');
         divEl.appendChild(headingEl);
         let body = document.querySelector('body');
         body.appendChild(divEl);
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