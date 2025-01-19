'use strict';

const titleClickHandler = function (event) {
  console.log('Link was clicked!');
  console.log(event);
  event.preventDefault();

  const clickedElement = this;
  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);
  console.log('clickedElement (with plus): ' + clickedElement);
  console.log('articleSelector (with plus): ' + articleSelector);
  console.log('targetArticle (with plus): ' + targetArticle);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  console.log(activeLinks);

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /*[DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* [DONE]  remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /*[DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
};

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';

function generateTitleLinks() {
  const titleList = document.querySelector(optTitleListSelector);
  const articles = document.querySelectorAll(optArticleSelector);
  /*[DONE] remove contents of titleList */
  titleList.innerHTML = '';
  /*[DONE] for each article */
  for (let article of articles) {
    /*[DONE] get the article id */
    let articleId = article.getAttribute('id');
    /* find the title element */

    /*[DONE] get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /*[DONE] create HTML of the link */
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';
    /*[DONE] insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + linkHTML;

    console.log(articles);
  }
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
