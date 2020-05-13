import Day from "./Day";

export default interface Data {
    "data": Day[],
    "city_name": string,
    "lon": string,
    "timezone": string,
    "lat": string,
    "country_code": string,
    "state_code": string
}