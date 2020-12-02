export const dataObject = {
  "data": {
    "coord": {
      "lon": -79.42,
      "lat": 43.7
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": -1.15,
      "feels_like": -7.91,
      "temp_min": -1.67,
      "temp_max": -0.56,
      "pressure": 1004,
      "humidity": 80,
      "sea_level": 1004,
      "grnd_level": 984
    },
    "visibility": 3019,
    "wind": {
      "speed": 6.06,
      "deg": 315
    },
    "clouds": {
      "all": 100
    },
    "dt": 1606884027,
    "sys": {
      "type": 1,
      "id": 718,
      "country": "CA",
      "sunrise": 1606825931,
      "sunset": 1606858925
    },
    "timezone": -18000,
    "id": 6167865,
    "name": "Toronto",
    "cod": 200
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
    "content-length": "503",
    "content-type": "application/json; charset=utf-8"
  },
  "config": {
    "url": "http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=556087c38f053be09d8bd5d824fea113",
    "method": "get",
    "headers": {
      "Accept": "application/json, text/plain, */*"
    },
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1
  },
  "request": {}
}