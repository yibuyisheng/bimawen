import fetch from 'whatwg-fetch';
import { createFormData, encodeParams } from '../common.jsx';
import xhr from 'xhr';
import { Promise } from 'es6-promise';

function addMaintanance(
    type,
    slipCode,
    addressId,
    carId,
    licensePlateAleph,
    licensePlate,
    reservationTime,
    contact,
    contactPhone,
    comments,
    totalAmount
) {
    return new Promise(function(resolve, reject) {
        xhr({
            url: '/upkeep/reservation/add/',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodeParams({
                token: localStorage.getItem('token'),
                maintenance_type: type,
                slip_code: slipCode,
                address_id: addressId,
                car_id: carId,
                license_plate_aleph: licensePlateAleph,
                license_plate: licensePlate,
                reservation_time: reservationTime,
                contact: contact,
                contact_phone: contactPhone,
                comments: comments,
                total_amount: totalAmount
            })
        });
    });
}

function getAppointmentCount() {
    return new Promise(function(resolve, reject) {
        resolve(1);
    });
}

export { addMaintanance, getAppointmentCount };