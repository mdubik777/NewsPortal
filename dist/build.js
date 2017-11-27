var myLibrary =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/webpack-demo/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderAllArticles; });
let imageSource = 'images/service_not_availalbe.jpg';

let cleanNewsContainer = sectionContainer => {
    sectionContainer.innerHTML = '';
};

let getNewsDate = _date => {
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
        if (this.description === null && this.title === '') {
            return '';
        }

        return '<div class="data-box clearfix">' + '<div class="image-box">' + '<a target="_blank" href=' + this.url + '>' + '<img src=' + this.urlToImage + '>' + '</a>' + '</div>' + '<div class="description-container">' + '<div class="source">' + this.name + '</div>' + '<div class="title">' + '<a target="_blank" href=' + this.url + '>' + this.title + '</a>' + '</div>' + '<div class="description">' + this.description + '</div>' + '</div>' + '<div class="date">' + getNewsDate(this.date) + '</div>' + '</div>';
    }
}

let renderAllArticles = (_articles, sectionContainer) => {
    let result = '';
    for (let i = 0; i < _articles.length; ++i) {
        let article = new Article(_articles[i]);
        result = result + article.renderArticle();
    }
    cleanNewsContainer(sectionContainer);
    sectionContainer.insertAdjacentHTML('beforeend', result);
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



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let showLoading = container => {
    const spinnerMarkup = '<div class="spinner">' + '<div class="rect1"></div>' + '<div class="rect2"></div>' + '<div class="rect3"></div>' + '<div class="rect4"></div>' + '<div class="rect5"></div>' + '</div>';

    container.insertAdjacentHTML('beforeend', `${spinnerMarkup}`);
};

let showErrorMsg = (container, _type) => {
    let errorMsg;
    switch (_type) {
        case 'sources':
            errorMsg = '<li class="error-msg">oops...something was wrong</li>';
            break;
        case 'articles':
            errorMsg = '<span class="error-msg">oops...something was wrong</span>';
            break;
    }

    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', `${errorMsg}`);
};

const getRequest = (_baseUrl, successCallback, errorCallback, type, container) => {

    showLoading(container);
    let promise = fetch(_baseUrl);

    promise.then(response => response.json()).then(function (data) {
        if (data && data.status === 'ok' && successCallback && typeof successCallback === 'function') {
            switch (type) {
                case 'sources':
                    successCallback(data.sources);
                    break;
                case 'articles':
                    successCallback(data.articles, container);
                    break;
            }
        }
    }, function () {
        if (errorCallback && typeof errorCallback === 'function') {
            errorCallback();
        }
        showErrorMsg(container, type);
    });
    //        .catch((error) => {
    //        throw new Error('Error with fetch');
    //})
};

/* harmony default export */ __webpack_exports__["a"] = (getRequest);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_articles__ = __webpack_require__(0);





window.onload = function () {

    const baseUrlAll = 'https://newsapi.org/v2/sources?&apiKey=83b6d448f18244e79fa4e8619b3edf03',
          baseUrl = 'https://newsapi.org/v2/top-headlines?sources=',
          api = '&apiKey=83b6d448f18244e79fa4e8619b3edf03',
          textChoice = 'continue',
          textBack = 'Back to list';

    let navWrapper = document.getElementById('main-menu-action'),
        navList = document.getElementById('buttons-list'),
        chooseButton = document.getElementById('filter-button'),
        section = document.getElementById('section'),
        arrayChannels = [],
        source = null,
        flag;

    //loading State

    let hideLoading = container => {
        container.innerHTML = '';
    };

    let createChannelsButtons = _data => {
        let channelsButtonsResult = '';
        for (let i = 0; i < _data.length; i++) {
            channelsButtonsResult += '<li id="' + _data[i].id + '" class="channel-button" data-name="' + _data[i].name + '">' + _data[i].name + '</li>';
        }

        hideLoading(navList);
        navList.insertAdjacentHTML('beforeend', channelsButtonsResult);

        buttonsChannelsEventHandler();
    };

    let buildUrl = _id => {
        return `${baseUrl}${_id}${api}`;
    };

    let buttonsEventHandler = e => {
        let _this = e.target,
            currentId = _this.id,
            url = buildUrl(currentId),
            //to comment
        //            url,                                                                                            //to uncomment
        chosenButtons = Array.prototype.slice.call(navList.childNodes);
        for (let i = 0; i < chosenButtons.length; i++) {
            chosenButtons[i].classList.remove('checked');
        }
        _this.classList.add('checked');
        section.innerHTML = '';
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(url, __WEBPACK_IMPORTED_MODULE_1__create_articles__["a" /* renderAllArticles */], null, 'articles', section); //to comment
        //        getRequest(url = buildUrl(currentId), renderAllArticles, null, 'articles', section);                //to uncomment
    };

    let cleanNewsContainer = () => {
        section.innerHTML = '';
    };

    let buttonsChannelsEventHandler = () => {
        navList.addEventListener('click', handlerEventButtons);
    };

    let handlerEventButtons = e => {
        let _this = e.target;
        if (_this.classList.contains('channel-button')) {
            _this.classList.toggle('checked');
        }

        if (_this.classList.contains('checked')) {
            arrayChannels.push(_this);
        } else if (arrayChannels.length) {
            let index = arrayChannels.indexOf(_this);

            arrayChannels.splice(index, 1);

            if (arrayChannels.length === 0) {
                chooseButton.classList.add('disabled');
            }
        }

        if (arrayChannels.length) {
            chooseButton.classList.remove('disabled');
        }
    };

    let createObjectsRequestedChannels = _arrayChannels => {
        let arrRequestedChannels = [];
        for (let i = 0; i < _arrayChannels.length; i++) {
            let obj = {
                id: _arrayChannels[i].id,
                name: _arrayChannels[i].getAttribute('data-name')
            };

            arrRequestedChannels.push(obj);
        }

        return arrRequestedChannels;
    };

    let cleanButtonsContainer = () => {
        navList.innerHTML = '';
    };

    let handlerRequestedButtons = () => {
        navList.addEventListener('click', buttonsEventHandler);
    };

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(baseUrlAll, createChannelsButtons, null, 'sources', navList);

    chooseButton.addEventListener('click', function () {

        if (flag === true) {
            flag = false;
            cleanButtonsContainer();
            navList.removeEventListener('click', buttonsEventHandler);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])(baseUrlAll, createChannelsButtons, null, 'sources', navList);
            section.innerHTML = '';
            chooseButton.innerHTML = `${textChoice}`;
            chooseButton.classList.add('disabled');
            arrayChannels = [];
            return;
        }

        cleanButtonsContainer();
        let requestedArray = createObjectsRequestedChannels(arrayChannels);
        createChannelsButtons(requestedArray);
        navList.removeEventListener('click', handlerEventButtons);
        handlerRequestedButtons();
        chooseButton.innerHTML = `${textBack}`;
        flag = true;
    });
};

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map