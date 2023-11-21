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
    <script>
  (function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
  Botsonic("init", {
    serviceBaseUrl: "https://api.botsonic.ai",
    token: "664210e6-01e9-4149-a8ff-b9779841e546",
  });
</script>
  </div>
`