var starGet=localStorage.getItem('stars');
$("#score-top").text(starGet);
//Checking for document if it is working
$(document).ready(function () {
    const APIKEY = "61d3dccbccd0211b32089696";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //Create Submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //Retrieve form data
      //Check for validation
      let contactName = $("#contact-name").val();
      let contactEmail = $("#contact-email").val();
      let contactMessage = $("#contact-msg").val();
  
      let jsondata = {
        "name": contactName,
        "email": contactEmail,
        "message": contactMessage
      };
  
      //API Key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-9d87.restdb.io/rest/contact",
        "method": "POST", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          $("#contact-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //Send request to databade and print response
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        $("#add-update-msg").show().fadeOut(3000);
        getContacts();
      });
    });//end of click 
  
    //Function to retrieve all the information
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-9d87.restdb.io/rest/contact",
        "method": "GET", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      $.ajax(settings).done(function (response) {
        
        let content = "";

        for (var i = 0; i < response.length && i < limit; i++) {
          content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
          <td>${response[i].email}</td>
          <td>${response[i].message}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-email='${response[i].email}'>Update</a></td></tr>`;
  
        }
      });
    }
  })

  //Map Api
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpaWppZWUiLCJhIjoiY2t5djJqM3cwMW1wajJudGd4a21ldXY3ZyJ9.i3qGKvK9xfJccSPqkMyV8Q';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/shiijiee/ckz6iu1qb000314r3590oqu2m',
        center: [103.775249, 1.333002], // starting position
        zoom: 12
      });
      // set the bounds of the map
      const bounds = [
        [101.775249, 1.033002],
        [104.775249, 1.433002]
      ];
      map.setMaxBounds(bounds);

      // an arbitrary start will always be the same
      // only the end or destination will change
      const start = [103.7752155413329,1.3327327089154863];
      // create a function to make a directions request
      async function getRoute(end) {
        // make a directions request using cycling profile
        // an arbitrary start will always be the same
        // only the end or destination will change
        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
          { method: 'GET' }
        );
        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;
        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
        // if the route already exists on the map, we'll reset it using setData
        if (map.getSource('route')) {
          map.getSource('route').setData(geojson);
        }
        // otherwise, we'll make a new request
        else {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: geojson
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75
            }
          });
        }
        // add turn instructions here at the end
      }

      map.on('load', () => {
        // make an initial directions request that
        // starts and ends at the same location
        getRoute(start);

        // Add starting point to the map
        map.addLayer({
          id: 'point',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: start
                  }
                }
              ]
            }
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#3887be'
          }
        });
        // this is where the code from the next step will go
        map.on('click', (event) => {
        const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
        const end = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }
          ]
        };
        if (map.getLayer('end')) {
          map.getSource('end').setData(end);
        } else {
          map.addLayer({
            id: 'end',
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'Point',
                      coordinates: coords
                    }
                  }
                ]
              }
            },
            paint: {
              'circle-radius': 10,
              'circle-color': '#f30'
            }
          });
        }
        getRoute(coords);
      });
      });
  