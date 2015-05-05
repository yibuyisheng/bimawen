import fetch from 'whatwg-fetch';
import { createFormData, encodeParams } from '../common.jsx';
import { Promise } from 'es6-promise';

function getMyCars() {
    return window.fetch('/account/my/car/?token=' + localStorage.getItem('token'))
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            if (json.status !== 200) {
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

/**
 * 全国地址简称
 */
function getAddresses() {
    return window.fetch('/account/query/province/')
        .then((result) => result.json());
}

function getRegions() {
    return window.fetch('/account/query/city/')
        .then((result) => result.json());
}

function addCar(carModelId, abbreviation, licensePlate, carInfo, isDefault) {
    return window.fetch('/account/my/car/add/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodeParams({
            token: localStorage.getItem('token'),
            car_model_id: carModelId,
            license_plate_aleph: abbreviation,
            license_plate: licensePlate,
            car_info: carInfo,
            is_default: isDefault ? 1 : 0
        })
    }).then((result) => result.json())
        .then((json) => {
            if (json.status !== 200) {
                throw new Error(json.message);
            }
        });
}

export { getMyCars, getAllCarBrand, getSeries, getModels, getAddresses, addCar, getRegions };