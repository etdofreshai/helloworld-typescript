const app = document.querySelector<HTMLDivElement>('#app')!

let count = 0

function render() {
  app.innerHTML = `
    <h1>Hello World! 🚀</h1>
    <p>This is a Vite + TypeScript project.</p>
    <button id="counter" type="button">Count: ${count}</button>
  `
  document.querySelector('#counter')!.addEventListener('click', () => {
    count++
    render()
  })
}

render()
