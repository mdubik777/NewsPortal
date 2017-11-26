let showLoading = (container) => {
    const spinnerMarkup = '<div class="spinner">' +
        '<div class="rect1"></div>' +
        '<div class="rect2"></div>' +
        '<div class="rect3"></div>' +
        '<div class="rect4"></div>' +
        '<div class="rect5"></div>' + '</div>';

    container.insertAdjacentHTML('beforeend' , `${spinnerMarkup}`);
};


let showErrorMsg = (container, _type) => {
    let errorMsg;
    switch (_type){
        case 'sources':
            errorMsg = '<li class="error-msg">oops...something was wrong</li>';
            break;
        case 'articles':
            errorMsg = '<span class="error-msg">oops...something was wrong</span>';
            break;
    }

    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend' , `${errorMsg}`);
};

const getRequest = (_baseUrl, successCallback, errorCallback, type, container) => {

    showLoading(container);
    let promise = fetch(_baseUrl);

    promise.then((response) => response.json())

.then(function(data) {
        if(data && data.status === 'ok' && successCallback && typeof successCallback === 'function'){
            switch (type){
                case 'sources':
                    successCallback(data.sources);
                    break;
                case 'articles':
                    successCallback(data.articles, container);
                    break;
            }
        }

    }, function() {
        if(errorCallback && typeof errorCallback === 'function'){
            errorCallback();
        }
        showErrorMsg(container, type);
    });
//        .catch((error) => {
//        throw new Error('Error with fetch');
//})
};

export default getRequest;