(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
    modals: document.querySelectorAll('[data-modal]'),
    backdrops: document.querySelectorAll('.backdrop'),
  };

  refs.openModalBtns.forEach(btn =>
    btn.addEventListener('click', function () {
      const modalId = btn.getAttribute('data-modal-open');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      modal.classList.remove('is-hidden');
      document.body.classList.add('modal-open');
    })
  );

  refs.closeModalBtns.forEach(btn =>
    btn.addEventListener('click', function () {
      const modal = btn.closest('[data-modal]');
      modal.classList.add('is-hidden');
      document.body.classList.remove('modal-open');
    })
  );

  refs.backdrops.forEach(backdrop =>
    backdrop.addEventListener('click', function (event) {
      if (event.currentTarget === event.target) {
        backdrop.classList.add('is-hidden');
        document.body.classList.remove('modal-open');
      }
    })
  );

  if ('ontouchstart' in window) {
    refs.openModalBtns.forEach(btn =>
      btn.addEventListener('touchstart', function () {
        const modalId = btn.getAttribute('data-modal-open');
        const modal = document.querySelector(`[data-modal="${modalId}"]`);
        modal.classList.remove('is-hidden');
        document.body.classList.add('modal-open');
      })
    );
  }
})();
