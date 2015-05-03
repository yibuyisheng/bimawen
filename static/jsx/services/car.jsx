import fetch from 'whatwg-fetch';
import { createFormData } from '../common.jsx';
import { Promise } from 'es6-promise';

function getMyCars() {
    return window.fetch('/account/my/car/?token=' + localStorage.getItem('token'))
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            if (json.status !== 304) {
                throw new Error(json.message);
            }
            return json.my_car;
        });
}

function getAllCarBrand() {
    return window.fetch('/account/car/brand/')
        .then((result) => {
            return result.json();
        });
}

function getSeries(brandId) {
    return window.fetch('/account/car/series/?brand_id=' + brandId)
        .then((result) => {
            return result.json();
        });
}

function getModels(seriesId) {
    return window.fetch('/account/car/models/?series_id=' + seriesId)
        .then((result) => result.json());
}

export { getMyCars, getAllCarBrand, getSeries, getModels };