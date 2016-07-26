import angular from 'angular';
import Flickr from '../../node_modules/flickr-sdk/build/flickr.min';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

class AppCtrl {
  constructor($scope, $http) {
    this.url = 'https://github.com/preboot/angular-webpack';
		this.$scope = $scope;
		this.$http = $http;

		this.flickrSettings = {
			apiKey: 'dd14767af1d65526c86941f921c803d5',
			apiSecret: '85fb3fcc72c08c3c'
		};

		this.flickrSdk = new Flickr  	({
			"apiKey":            this.flickrSettings.apiKey,
			"apiSecret":         this.flickrSettings.apiSecret
			// you can optionally include these values for testing
			// with your own account, but DO NOT use them for authenticating
			// users, see Authentication section below.
			//"accessToken":       "xxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx",
			//"accessTokenSecret": "xxxxxxxxxxxxxxxx"
		});
  }

  $postLink() {
    const el = document.getElementById('file');
    el.addEventListener('change', (evt) => {
      this.file = evt.target.files[0];
			console.log(this.file);
			this.$scope.$apply();
    });
  }

	google() {

	}

	flickr() {

	}

	authenticateFlickr() {
	}
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;