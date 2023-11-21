import './style.css'
import logo from '/logo.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logo}" class="logo"/>
    </a>
    <div id="message-container"></div>
    <div class="message-input">
      <input type="text" id="user-input" placeholder="Пожалуйста, введите ваш запрос...">
      <button id="send-button" class="button">Отправить</button>
    </div>
  </div>
`