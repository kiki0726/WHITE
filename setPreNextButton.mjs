'use strict';

import BLOGS from './blogs.js';


console.log('load,prenextbutton');
const id = document.getElementById("blog-tag").value;
const index = BLOGS.date.indexOf(id);
// pre/nextボタンの設置
//idが最新以外ならnextボタンの設置
if (id != BLOGS.date[0]) {
    let blog_footer_next = document.getElementById('blog-footer__next');
    let next_a = document.createElement('a');
    next_a.setAttribute('href', 'https://kiki0726.github.io/WHITE/archive/' + BLOGS.id[index-1] + '.html');
    next_a.innerText = BLOGS.title[index-1] + ' 次 ＞';
    blog_footer_next.appendChild(next_a);
}
if (id != "2022.08.29") {
    //idが最古以外ならpreボタンの設置
    let blog_footer_pre = document.getElementById('blog-footer__pre');
    let pre_a = document.createElement('a');
    pre_a.setAttribute('href', 'https://kiki0726.github.io/WHITE/archive/' + BLOGS.id[index+1] + '.html');
    pre_a.innerText = '＜ 前 ' + BLOGS.title[index+1];
    blog_footer_pre.appendChild(pre_a);
}
