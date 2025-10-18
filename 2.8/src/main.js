import './style.css';
import viteLogo from '/vite.svg';

document.querySelector ('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="/pages/about/">О нас</a>
    <a href="/pages/news/">новости</a>
    <h1>Hello Vite!</h1>
  </div>
`;
