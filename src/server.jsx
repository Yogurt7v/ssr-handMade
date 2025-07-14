import express from 'express';
import { readFile } from 'fs/promises';
// import { renderToString } from 'react-dom/server'; // функция превращающая реакт компонент в строку
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';
import http from 'http';

// const app = express();

http
  .createServer(async (req, res) => {
    if (req.url === '/index.js') {
      const bundle = await readFile('./dist/index.js');
      res.writeHead(200, {
        'content-type': 'text/javascript',
      });

      res.end(bundle);
      return;
    }

    const template = await readFile('./index.html', 'utf-8');
    const data = await App.getServerSideProps(); // делаем запрос на сервер и потом прописываем это в статику
    // const html = renderToString(<App />);
    const html = renderToStaticMarkup(<App data={data} />);

    res.writeHead(200, {
      'content-type': 'text/html',
    });

    res.end(
      template.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div><script>window.data = ${JSON.stringify(
          data
        )}</script>`
      )
    );
    console.log('server started');

    // находим в индексе разметку и заменяем её на реакт компонент превращённый в строку
  })
  .listen(3001);

// app.use(express.static('./dist')); // раздача статики только для примера. лучше используй nginx
