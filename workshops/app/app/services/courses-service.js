'use strict';

let fetch = require('fetch')
  .fetch;

let baseUrl = `${global.baseUrl}/courses`;

function all(page) {
  let url = `${baseUrl}?page=${page}`;
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json.result;
    });
}

function byId(id) {
  let url = `${baseUrl}/${id}`;
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json.result;
    });
}

module.exports = {
  all,
  byId
};