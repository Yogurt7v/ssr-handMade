import express from 'express';
import { readFile } from 'fs/promises';
import { renderToString } from 'react-dom/server'; // функция превращающая реакт компонент в строку
// import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  const template = await readFile('./index.html', 'utf-8');
  const html = renderToString(<App />);
  // const html = renderToStaticMarkup(<App />);
  res.send(template.replace("<div id='root'></div>", `<div id="root">${html}</div>`));

  // находим в индексе разметку и заменяем её на реакт компонент превращённый в строку
});

app.use(express.static('./dist')); // раздача статики только для примера. лучше используй nginx

app.listen(port, () => {
  console.log(`Сервер стартовал на порту ${port}`);
});
