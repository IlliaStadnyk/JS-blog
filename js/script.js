'use strict';

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optArticleAuthorSelector = '.post-author';

const titleClickHandler = function (event) {
  // console.log('Link was clicked!');
  // console.log(event);
  event.preventDefault();

  const clickedElement = this;
  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);
  console.log('clickedElement (with plus): ' + clickedElement);
  console.log('articleSelector (with plus): ' + articleSelector);
  console.log('targetArticle (with plus): ' + targetArticle);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  // console.log(activeLinks);

  for (const activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /*[DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* [DONE]  remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');

  for (const activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /*[DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
};

function generateTitleLinks(customSelector = '') {
  const titleList = document.querySelector(optTitleListSelector);
  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  console.log('customer' + customSelector);
  /*[DONE] remove contents of titleList */
  titleList.innerHTML = '';
  /*[DONE] for each article */
  for (const article of articles) {
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

    // console.log(articles);
  }

  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for (const link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (const article of articles) {
    /* find tags wrapper */
    const wrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (const tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHtml = `<li><a href="#tag-${tag}">${tag}</a></li>`;
      /* add generated code to html variable */
      html = html + ' ' + linkHtml;
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    wrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
}

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href ' + href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeLinks = document.querySelectorAll('a.active');
  console.log(activeLinks);

  /* START LOOP: for each active tag link */
  for (const activeLink of activeLinks) {
    /* remove class active */
    activeLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each found tag link */
  for (const tagLink of tagLinks) {
    /* add class active */
    tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const links = document.querySelectorAll(optArticleTagsSelector + ' li a');
  // console.log(links);
  /* START LOOP: for each link */
  for (const link of links) {
    /* add tagClickHandler as event listener for that link */
    // console.log(link);
    link.addEventListener('click', tagClickHandler);
    /*  END LOOP: for each link */
  }
}

function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  for (const article of articles) {
    const author = article.getAttribute('data-author');
    // console.log(author);

    const wrapper = article.querySelector(optArticleAuthorSelector);
    // console.log(wrapper);
    wrapper.innerHTML = `by <a href="#author-${author}">${author}</a>`;
  }
}
function addClickListenersToAuthors() {
  const authors = document.querySelectorAll(optArticleAuthorSelector + ' a');
  for (const author of authors) {
    // console.log(author);
    author.addEventListener('click', authorClickHandler);
  }
}
function authorClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  // console.log(clickedElement);
  const href = clickedElement.getAttribute('href');
  console.log(href);
  const author = href.replace('#author-', '');
  const activeLinks = document.querySelectorAll('a.active');
  console.log(activeLinks);
  for (const activeLink of activeLinks) {
    /* remove class active */
    activeLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  console.log(authorLinks);
  for (let authorLink of authorLinks) {
    /* add class active */
    authorLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  generateTitleLinks('[data-author="' + author + '"]');
}

generateTitleLinks();
generateTags();
generateAuthors();
addClickListenersToTags();
addClickListenersToAuthors();
