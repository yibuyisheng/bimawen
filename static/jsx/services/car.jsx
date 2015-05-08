import fetch from 'whatwg-fetch';
import { createFormData, encodeParams, post } from '../common.jsx';
import { Promise } from 'es6-promise';
import xhr from 'xhr';

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

/**
 * 获取维护条目列表
 * @param type 类型，取值为：1->机油，2->机滤，3->空气滤，4->空调滤，5->人工费
 * @returns Promise
 */
function getMaintenanceItems(type) {
    return new Promise(function(resolve, reject) {
        xhr({
            method: 'GET',
            url: 'http://121.40.167.199/account/query/item/type/' + type + '/'
        }).on('load', function(response) {
            if (response.status !== 200) {
                return reject(new Error(response.response));
            }
            var data = JSON.parse(response.response);
            if (data.status != 200) {
                return reject(new Error(data.message));
            }
            resolve(data.item_list);
        }).on('error', function(response) {
            reject(new Error(response.response));
        });
    });
}

export { getMyCars, getAllCarBrand, getSeries, getModels, getAddresses, addCar, getRegions, getMaintenanceItems };