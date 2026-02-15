const app = document.querySelector<HTMLDivElement>('#app')!

let count = 0

function render() {
  app.innerHTML = `
    <h1>Hello World! 🚀</h1>
    <p>This is a Vite + TypeScript project.</p>
    <p style="color: #888; font-size: 0.85em;">Built: ${__BUILD_TIME__}</p>
    <button id="counter" type="button">Count: ${count}</button>
  `
  document.querySelector('#counter')!.addEventListener('click', () => {
    count++
    render()
  })
}

render()
