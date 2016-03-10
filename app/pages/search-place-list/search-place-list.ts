//// / <reference path="../../../typings/googlemaps/google.maps.d.ts"/>

import {Page, NavController} from 'ionic-angular';
import {Inject} from 'angular2/core';

/*
  Generated class for the SearchPlaceListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/search-place-list/search-place-list.html',
})

export class SearchPlaceListPage {
  private places: Array<String>;
  private map: any;

  constructor(private nav: NavController) {
    this.nav = nav;
    this.places = [];
    console.log('constructorPlaces', this.places);
    this.loadSearchPlacesList();
    this.map = null;
    console.log('constructorPlaces', this.places);
  }

  loadSearchPlacesList(){
    this.places = [];

    navigator.geolocation.getCurrentPosition(function(position){
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      let coordinates = latitude + " " + longitude
      var MyLoc = new google.maps.LatLng(latitude,longitude);
      console.log("myLocation() Getting current position Running:");
      console.log("Latitude: ", latitude);
      console.log("Longitude: ", longitude);
      console.log("Coordinates: ", coordinates);
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: MyLoc,
        zoom: 15,
      });

      var request = {
        location: MyLoc,
        radius: 500,
        types: []
      }

      var service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch(request, (results, status) => {
        console.log(results.length);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            let placeInfo = {
              name: results[i].name
            }
            this.places.push(placeInfo.name);
            // this.places = that.places.push(placeInfo.name);
          }
        }
        console.log("this.places after the loop");
        console.log(this.places);
      });
      console.log("this.places after if");
      console.log(this.places);
    });
  };

  requestPlacesList(results, status){
    console.log(results.length);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        let placeInfo = {
          name: result[i].name
        }
        console.log(placeInfo.name);
      }
    }
  }
};
