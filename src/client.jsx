import App from './App';
import { hydrateRoot } from 'react-dom/client'; //Это функция, которая «оживляет» статический HTML , сгенерированный на сервере, добавляя к нему интерактивность через JavaScript.

hydrateRoot(document.getElementById('root'), <App />);
