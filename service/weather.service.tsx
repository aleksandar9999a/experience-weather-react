import { Subject } from 'rxjs';

const key = '';
const url = 'http://api.weatherbit.io/v2.0/forecast/daily';

const data = new Subject();

export async function getWeatherByLocation(location: string) {
    return await baseFetch(`${url}?city=${location}&key=${key}`);
}

export async function getWeatherByCoords(lat: number, lon: number) {
    return await baseFetch(`${url}?&lat=${lat}&lon=${lon}&key=${key}`);
}

export function getData() {
    return data;
}

function emitData(res: any) {
    data.next(res);
}

async function baseFetch(url: string) {
    return await fetch(url).then(desterializeData).then(emitData).catch(showError);
}

function desterializeData(x: Response) {
    return x.json();
}

function showError(err: Error) {
    console.log(err);
}