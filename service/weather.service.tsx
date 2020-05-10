import { Subject } from 'rxjs';

const key = '';
const url = 'http://api.weatherbit.io/v2.0/forecast/daily';

const data = new Subject();

export async function getWeather(location: string) {
    return await baseFetch(`${url}?city=${location}&key=${key}`).then(res => data.next(res));
}

export function getData() {
    return data;
}

async function baseFetch(url: string) {
    return await fetch(url).then(desterializeData).catch(showError);
}

function desterializeData(x: Response) {
    return x.json();
}

function showError(err: Error) {
    console.log(err);
}