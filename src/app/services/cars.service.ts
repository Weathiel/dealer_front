import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL } from '../config';
import { Car } from '../car';

@Injectable({ providedIn: 'root' })
export class CarsService {
    constructor(private http: HttpClient,
                private url: URL) { }

    getAll() {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Car[]>(this.url.url + `cars/all`);
    }

    getLenght() {
        return this.http.get<number>(this.url.url + `cars/lenght`);
    }

    create(car) {
        return this.http.post(this.url.url + `cars/create`, car);
    }

    delete(id: number) {
        return this.http.delete(this.url.url + `cars/${id}`);
    }
}
