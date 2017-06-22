## API pour la météo

- Clermont-ferrand : http://api.openweathermap.org/data/2.5/weather?id=3024635&appid=411f9da1fdd7f651115c39f2a1e766c9
- Annecy : http://api.openweathermap.org/data/2.5/weather?id=6455254&appid=411f9da1fdd7f651115c39f2a1e766c9



```json
{  
   "coord":{  
      "lon":6.12,
      "lat":45.9
   },
   "weather":[  
      {  
         "id":800,
         "main":"Clear",
         "description":"clear sky",
         "icon":"01d"
      }
   ],
   "base":"stations",
   "main":{  
      "temp":303.5,
      "pressure":1019,
      "humidity":51,
      "temp_min":303.15,
      "temp_max":304.15
   },
   "visibility":10000,
   "wind":{  
      "speed":2.1,
      "deg":230
   },
   "clouds":{  
      "all":0
   },
   "dt":1498129200,
   "sys":{  
      "type":1,
      "id":5570,
      "message":0.0037,
      "country":"FR",
      "sunrise":1498103129,
      "sunset":1498159789
   },
   "id":6455254,
   "name":"Annecy",
   "cod":200
}
```

 Documentation associé : https://openweathermap.org/current