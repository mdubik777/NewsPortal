'use strict';

import getRequest from './request';
import {renderAllArticles} from './create-articles';


window.onload = function() {

    const baseUrlAll = 'https://newsapi.org/v2/sources?&apiKey=83b6d448f18244e79fa4e8619b3edf03',
          baseUrl = 'https://newsapi.org/v2/top-headlines?sources=',
          api = '&apiKey=83b6d448f18244e79fa4e8619b3edf03',
          textChoice = 'Choose',
          textBack = 'Back to list',
          imageSource = 'images/service_not_availalbe.jpg';

    let menuNavBtn = document.getElementById('menu-btn-action'),
        navWrapper = document.getElementById('main-menu-action'),
        globalMenu = document.getElementById('global-menu-action'),
        navList = document.getElementById('buttons-list'),
        chooseButton = document.getElementById('filter-button'),
        section = document.getElementById('section'),
        arrayChannels = [],
        source = null,
        flag;


//loading State

    let hideLoading = (container) => {
        container.innerHTML = '';
    };

    let createChannelsButtons = (_data) => {
        let channelsButtonsResult = '';
        for (let i = 0; i < _data.length; i ++) {
            channelsButtonsResult += '<li id="' + _data[i].id + '" class="channel-button" data-name="'+ _data[i].name +'">' + _data[i].name + '</li>'
        }

        hideLoading(navList);
        navList.insertAdjacentHTML('beforeend' , channelsButtonsResult);

        buttonsChannelsEventHandler();
    };

    let buildUrl = (_id) => {
        return `${baseUrl}${_id}${api}`;
    };

    let buttonsEventHandler = (e) => {
        let _this = e.target,
            currentId = _this.id,
            url = buildUrl(currentId),
            chosenButtons = Array.prototype.slice.call(navList.childNodes);
        for (let i = 0; i < chosenButtons.length; i++ ) {
            chosenButtons[i].classList.remove('checked');
        }
        _this.classList.add('checked');
        section.innerHTML = '';
        getRequest(url, renderAllArticles, null, 'articles', section);
    };

     let cleanNewsContainer = () => {
        section.innerHTML = '';
    };

    let buttonsChannelsEventHandler = () => {
        navList.addEventListener('click', handlerEventButtons);
    };

    let handlerEventButtons = (e) => {
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

    let createObjectsRequestedChannels = (_arrayChannels) => {
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

    let cleanButtonsContainer = () =>{
        navList.innerHTML = '';
    };

    let handlerRequestedButtons = () => {
        navList.addEventListener('click', buttonsEventHandler);
    };


    getRequest(baseUrlAll, createChannelsButtons, null, 'sources', navList);

    // menu

    menuNavBtn.addEventListener('click', function(e) {
        globalMenu.classList.toggle('open');
        e.stopPropagation();
    });

    document.onclick = function(e) {
        if (globalMenu.classList.contains('open')) {
            globalMenu.classList.remove('open');
        }
    };

    chooseButton.addEventListener('click', function() {

        if (flag === true) {
            flag = false;
            cleanButtonsContainer();
            navList.removeEventListener('click', buttonsEventHandler);
            getRequest(baseUrlAll, createChannelsButtons, null, 'sources', navList);
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

