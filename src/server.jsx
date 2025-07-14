import express from 'express';
import { readFile } from 'fs/promises';
// import { renderToString } from 'react-dom/server'; // функция превращающая реакт компонент в строку
import { renderToStaticMarkup, renderToPipeableStream } from 'react-dom/server';
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

    const stream = renderToPipeableStream(<App />, {
      bootstrapScripts: ['/index.js'],
      onShellReady: () => {
        stream.pipe(res);
      },
    });

    // const template = await readFile('./index.html', 'utf-8');
    // const html = renderToString(<App />);

    // res.writeHead(200, {
    //   'content-type': 'text/html',
    // });

    // res.end(template.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
    // console.log('server started');

    // находим в индексе разметку и заменяем её на реакт компонент превращённый в строку
  })
  .listen(3001);

// app.use(express.static('./dist')); // раздача статики только для примера. лучше используй nginx
