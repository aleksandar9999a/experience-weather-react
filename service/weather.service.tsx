import { Subject } from 'rxjs';
import { AsyncStorage } from 'react-native';
import Data from '../interfaces/Data';

const key = '';
const url = 'http://api.weatherbit.io/v2.0/forecast/daily';

const data = new Subject<Data>();
const error = new Subject();

AsyncStorage.getItem('data').then(value => {
    if (value != null) {
        const res = JSON.parse(value);
        data.next(res);
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async pos => {
                const latitude = pos.coords.latitude;
                const longitude = pos.coords.longitude;

                getWeatherByCoords(latitude, longitude);
            });
        }
    }
})

export async function getWeatherByLocation(location: string) {
    return await baseFetch(`${url}?city=${location}&key=${key}`);
}

export async function getWeatherByCoords(lat: number, lon: number) {
    return await baseFetch(`${url}?&lat=${lat}&lon=${lon}&key=${key}`);
}

export function getData() {
    return data;
}

export function getError() {
    return error;
}

async function saveData(res: Data) {
    data.next(res);
    const result = JSON.stringify(res);
    AsyncStorage.setItem('data', result);
    return res;
}

async function baseFetch(url: string) {
    return await fetch(url).then(desterializeData).then(saveData).catch(showError);
}

function desterializeData(x: Response) {
    return x.json();
}

function sentErrorToUI(message: string) {
    if (message === "JSON Parse error: Unexpected EOF") {
        error.next("Wrong location!");
        setTimeout(() => {
            error.next(null);
        }, 3000)
    } else {
        error.next("Something is wrong! See log!");
    }
}

function showError(err: Error) {
    console.log(err);
    sentErrorToUI(err.message);
}