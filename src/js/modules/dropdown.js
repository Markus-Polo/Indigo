;(function () {
  const triggers = document.querySelectorAll('.toggle-class-js')

  triggers.forEach((trigger) => {
    const targetSelector = trigger.dataset.target
    const classToToggle = trigger.dataset.classToToggle

    const target = document.querySelector(targetSelector)

    trigger.addEventListener('click', () => {
      target.classList.toggle(classToToggle)
    })
  })
})()
