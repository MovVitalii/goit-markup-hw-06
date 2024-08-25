document.addEventListener('DOMContentLoaded', () => {
   const openModalButton = document.querySelector('[data-modal-open]');
   const closeModalButton = document.querySelector('[data-modal-close]');
   const modal = document.querySelector('[data-modal]');
   const backdrop = document.querySelector('.backdrop');
 
   openModalButton.addEventListener('click', () => {
     backdrop.classList.add('is-open');
   });
 
   closeModalButton.addEventListener('click', () => {
     backdrop.classList.remove('is-open');
   });
 
   backdrop.addEventListener('click', (event) => {
     if (event.target === backdrop) {
       backdrop.classList.remove('is-open');
     }
   });
 });
 