'use strict';

 let blogs = {
    title: ['ブログ制作記・１', 'ブログ制作記・2'],
    date: ['2022.08.29', '2022.08.30'],
    id: ['220829', '220830'],
}

window.onload = function() {
    for (let i = 0; i < blogs.title.length; i++) {
        let ul = document.getElementById('blogs-list');
        let a = document.createElement('a');
        a.setAttribute('href', 'https://kiki0726.github.io/WHITE/archive/' + blogs.id[i] + '.html');
        a.setAttribute('id', 'a' + blogs.id[i]);
        ul.appendChild(a);

        let anchor = document.getElementById('a' + blogs.id[i]);
        let li = document.createElement('li');
        li.innerText = blogs.title[i] + '   /   ' + blogs.date[i];
        li.setAttribute('class', 'blogs-list__item');
        anchor.appendChild(li);
    }
}
