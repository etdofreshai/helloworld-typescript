import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

let count = 0

function render() {
  app.innerHTML = `
    <div id="clock" class="clock"></div>
    <h1>Hello World! 🚀</h1>
    <p>This is a Vite + TypeScript project.</p>
    <button id="counter" type="button">Count: ${count}</button>
    <footer class="build-time">Built: ${__BUILD_TIME__}</footer>
  `
  document.querySelector('#counter')!.addEventListener('click', () => {
    count++
    render()
  })
  updateClock()
}

function updateClock() {
  const el = document.getElementById('clock')
  if (el) el.textContent = new Date().toLocaleString()
}

setInterval(updateClock, 1000)
render()
