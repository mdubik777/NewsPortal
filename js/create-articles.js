let imageSource = 'images/service_not_availalbe.jpg';

let cleanNewsContainer = (sectionContainer) => {
    sectionContainer.innerHTML = '';
};


let getNewsDate = (_date) => {
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric'
    };
    return new Date(_date).toLocaleString("en", options);
};

/*-----------------------------class Article---------------------*/

class Article {
    constructor(_article) {
    this.id = _article.source.id;
    this.name = _article.source.name;
    this.description = _article.description;
    this.author = _article.author;
    this.title = _article.title;
    this.url = _article.url;
    this.urlToImage = _article.urlToImage;
    this.title = _article.title;
    this.date = _article.publishedAt;

    if (this.urlToImage === null) {
        this.urlToImage = `${imageSource}`;
    } else {
        this.urlToImage;
    }
}

    renderArticle() {
    if (this.description === null && this.title === '' ) {
        return '';
    }

    return  '<div class="data-box clearfix">' +
        '<div class="image-box">'  +  '<a target="_blank" href=' +  this.url + '>' +  '<img src=' + this.urlToImage + '>' + '</a>'  +  '</div>' +
        '<div class="description-container">'+

        '<div class="source">' + this.name + '</div>' +
        '<div class="title">' + '<a target="_blank" href=' +  this.url + '>' + this.title +  '</a>'  +   '</div>' +
        '<div class="description">'+ this.description + '</div>' + '</div>' +
        '<div class="date">' +   getNewsDate(this.date) + '</div>' +

        '</div>';
    }
}


let renderAllArticles = (_articles, sectionContainer) => {
    let result = '';
    for (let i = 0; i < _articles.length; ++i) {
        let article = new Article(_articles[i]);
        result = result + article.renderArticle();
    }
    cleanNewsContainer(sectionContainer);
    sectionContainer.insertAdjacentHTML('beforeend' , result);
};


/*----------------------------------------end----------------------------------------------*/




/*----------------Comment code above from "class Article" until comment "end" and uncomment code "Alternative option without class with usage of functions" until "end" ------------------*/
/*----------------Alternative option without class Article with usage of functions------------------*/

//let articleModel = {
//    date: null,
//    author: null,
//    description: null,
//    source: {
//        id: null,
//        name: null
//    },
//    title: null,
//    url: null,
//    urlToImage: null
//};
//
//let {date, author, description, source: {id, name}, title, url, urlToImage} = articleModel;
//
//let renderAllArticles = (_articles, sectionContainer) => {
//    let result = '';
//    for (let i = 0; i < _articles.length; ++i) {
//        result = result + renderArticle(_articles[i]);
//    }
//    cleanNewsContainer(sectionContainer);
//    sectionContainer.insertAdjacentHTML('beforeend' , result);
//};
//
//
//let renderArticle = (_article) => {
//    if (_article.description === null && _article.title === '' ) {
//        return '';
//    }
//    author = _article.author;
//    description = _article.description;
//    id = _article.source.id;
//    name = _article.source.name;
//    title = _article.title;
//
//    url = _article.url;
//    if (_article.urlToImage === null) {
//        urlToImage = `${imageSource}`;
//    } else {
//        urlToImage = _article.urlToImage;
//    }
//
//    date = getNewsDate(_article.publishedAt);
//
//    return  '<div class="data-box clearfix">' +
//        '<div class="image-box">'  +  '<a target="_blank" href=' +  url + '>' +  '<img src=' + urlToImage + '>' + '</a>'  +  '</div>' +
//        '<div class="description-container">'+
//
//        '<div class="source">' + name + '</div>' +
//        '<div class="title">' + '<a target="_blank" href=' +  url + '>' + title +  '</a>'  +   '</div>' +
//        '<div class="description">'+ description + '</div>' + '</div>' +
//        '<div class="date">' +   date + '</div>' +
//
//        '</div>';
//};
/*----------------------------------------------------end-----------------------------------------------*/



/*----------------------------------------------------Second option of code (dis-structuring)-----------------------------------------------*/
/*---------------------------To see how it works -  to comment all code above and uncomment this code until "end"---------------------------*/



//let publishedAt =null,
//    author = null,
//    description = null,
//    source = null,
//    title = null,
//    url = null,
//    urlToImage = null;
//
//
//let articleModel = {
//    publishedAt,
//    author,
//    description,
//    source,
//    title,
//    url,
//    urlToImage
//};
//
//let objectModel = (JSON.stringify(articleModel));
//
//
//let renderAllArticles = (_articles, sectionContainer) => {
//    let result = '';
//    for (let i = 0; i < _articles.length; ++i) {
//        result = result + renderArticle(_articles[i]);
//    }
//    cleanNewsContainer(sectionContainer);
//    sectionContainer.insertAdjacentHTML('beforeend' , result);
//};
//
//
//
//  let renderArticle = (_article) => {
//
//   let objectModel = Object.assign(articleModel, _article);
//   if (objectModel.description === null && objectModel.title === '' ) {
//        return '';
//    }
//
//    if (objectModel.urlToImage === null) {
//        objectModel.urlToImage = `${imageSource}`;
//    } else {
//        objectModel.urlToImage = _article.urlToImage;
//    }
//
//
//    publishedAt = getNewsDate(_article.publishedAt);
//
//    return  '<div class="data-box clearfix">' +
//        '<div class="image-box">'  +  '<a target="_blank" href=' +  objectModel.url + '>' +  '<img src=' + objectModel.urlToImage + '>' + '</a>'  +  '</div>' +
//        '<div class="description-container">'+
//
//        '<div class="source">' + objectModel.source.name + '</div>' +
//        '<div class="title">' + '<a target="_blank" href=' +  objectModel.url + '>' + objectModel.title +  '</a>'  +   '</div>' +
//        '<div class="description">'+ objectModel.description + '</div>' + '</div>' +
//        '<div class="date">' +   getNewsDate(objectModel.publishedAt) + '</div>' +
//
//        '</div>';
//};


/*----------------------------------------------------end-----------------------------------------------*/

export {renderAllArticles};
