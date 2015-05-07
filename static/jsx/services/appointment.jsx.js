import fetch from 'whatwg-fetch';
import { createFormData, encodeParams } from '../common.jsx';

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
    return window.fetch('/upkeep/reservation/add/', {
        method: 'post',
        body: createFormData({
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
}