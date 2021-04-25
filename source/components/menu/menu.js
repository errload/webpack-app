import './menu.scss';

export default function(array, className) {
    let menu = document.createElement('ul');
    menu.className = className;
    let listItems = '';

    array.forEach(item => {
        if(item == 'main') {
            listItems += `<li><a href="/">${item}</a></li>`;    
        } else {
            listItems += `<li><a href="/${item.split(' ').join('')}.html">${item}</a></li>`
        }
    });

    menu.innerHTML = listItems;
    return menu;
}
