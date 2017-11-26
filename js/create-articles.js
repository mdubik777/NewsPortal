let imageSource = 'images/service_not_availalbe.jpg';

let cleanNewsContainer = (sectionContainer) => {
    sectionContainer.innerHTML = '';
};

let articleModel = {
    date: null,
    author: null,
    description: null,
    source: {
        id: null,
        name: null
    },
    title: null,
    url: null,
    urlToImage: null
};

let {date, author, description, source: {id, name}, title, url, urlToImage} = articleModel;

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


let renderAllArticles = (_articles, sectionContainer) => {
    let result = '';
    for (let i = 0; i < _articles.length; ++i) {
        result = result + renderArticle(_articles[i]);
    }
    cleanNewsContainer(sectionContainer);
    sectionContainer.insertAdjacentHTML('beforeend' , result);
};

let renderArticle = (_article) => {
    if (_article.description === null && _article.title === '' ) {
        return '';
    }
    author = _article.author;
    description = _article.description;
    id = _article.source.id;
    name = _article.source.name;
    title = _article.title;

    url = _article.url;
    if (_article.urlToImage === null) {
        urlToImage = `${imageSource}`;
    } else {
        urlToImage = _article.urlToImage;
    }

    date = getNewsDate(_article.publishedAt);

    return  '<div class="data-box clearfix">' +
        '<div class="image-box">'  +  '<a target="_blank" href=' +  url + '>' +  '<img src=' + urlToImage + '>' + '</a>'  +  '</div>' +
        '<div class="description-container">'+

        '<div class="source">' + name + '</div>' +
        '<div class="title">' + '<a target="_blank" href=' +  url + '>' + title +  '</a>'  +   '</div>' +
        '<div class="description">'+ description + '</div>' + '</div>' +
        '<div class="date">' +   date + '</div>' +

        '</div>';
};

export {renderAllArticles};
