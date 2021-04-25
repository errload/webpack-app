import menuCreate from '../../components/menu/menu';
import '../main.scss';
import './contacts.scss';

let menu = menuCreate(['main', 'about me', 'contacts'], 'menu');
document.querySelector('.menu__wrapper').append(menu);
