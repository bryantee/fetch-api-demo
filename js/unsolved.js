const URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ddb7e35c23158da120af780096e0bf67/';
const skycons = new Skycons({ color: 'white' });

let cities = [
  [37.8267, -122.4233],
  [33.4484, -112.0740],
  [33.4484, 112.0740],
  [52.5200, -13.4050]
];

document.addEventListener('DOMContentLoaded', e => {
  document.querySelector('#make-request').addEventListener('click', e => {
    // code goes here for button click
    // return array of promises
  });

    // after all promises resolve, do these things next
});

// Utility functions

function appendWeatherHtml(htmlString, div) {
  document.querySelector(div).innerHTML = htmlString;
}

function appendSkycons() {
  document.querySelectorAll('.skycon')
    .forEach(x => skycons.add(x.getAttribute('id'), x.getAttribute('data-icon')));

  skycons.play();
}