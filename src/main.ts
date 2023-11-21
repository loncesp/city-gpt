import './style.css'
import logo from '/logo.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logo}" class="logo"/>
    </a>

    <iframe style="height:100vh;width:100vw" frameBorder="0" 
    src="https://widget.writesonic.com/CDN/index.html?service-base-url=https://api.botsonic.ai&token=664210e6-01e9-4149-a8ff-b9779841e546&base-origin=https://bot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https://bot.writesonic.com/4370752f-5062-4f22-b51f-2ba0ca96c902?t=share&workspace_id=32d2169b-bb41-4888-b4df-eaf31b381890" >
    </iframe>
  </div>
`