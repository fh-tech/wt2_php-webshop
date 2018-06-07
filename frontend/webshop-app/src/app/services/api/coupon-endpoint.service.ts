import {CommonEndPoints} from '../../types/api-request';
import {Observable} from 'rxjs/index';
import {NewProduct, Product} from '../../types/api/product';
import {Injectable} from '@angular/core';
import {ApiResourceEndPoint} from './api-resource-end-point';
import {Coupon, NewCoupon} from '../../types/api/coupon';
import {HttpRequestorService} from './http-requestor.service';

@Injectable(
    {providedIn: 'root'}
)
export class CouponEndpointService extends ApiResourceEndPoint<Coupon, NewCoupon> {

    private endpoints: CommonEndPoints = {
        all: {
            resource: 'coupon/',
            scope: ['admin'],
            method: 'GET',
        },
        byId: {
            resource: 'coupon/',
            scope: ['admin'],
            method: 'GET',
        },
        create: {
            resource: 'coupon/',
            scope: ['admin'],
            method: 'POST',
        }
    };

    constructor(protected requestor: HttpRequestorService) {
        super(requestor);
    }

    getEndPoints(): CommonEndPoints {
        return this.endpoints;
    }

}
