'use strict';

import BLOGS from './blogs.js';


console.log('loadarchive');
// ブログ一覧の設置
for (let i = 0; i < BLOGS.title.length; i++) {
    let ul = document.getElementById('blogs-list');
    let a = document.createElement('a');
    a.setAttribute('href', 'https://kiki0726.github.io/WHITE/archive/' + BLOGS.id[i] + '.html');
    a.setAttribute('id', 'a' + BLOGS.id[i]);
    ul.appendChild(a);

    let anchor = document.getElementById('a' + BLOGS.id[i]);
    let li = document.createElement('li');
    li.innerText = BLOGS.title[i] + '   /   ' + BLOGS.date[i];
    li.setAttribute('class', 'blogs-list__item');
    anchor.appendChild(li);
}
