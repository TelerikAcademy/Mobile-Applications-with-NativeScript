'use strict';

var Observable = require("data/observable")
  .Observable;

var ObservableArray = require("data/observable-array")
  .ObservableArray;

class HomeViewModel extends Observable {
  constructor(services) {
    super();
    this.services = services;
    this.coursesService = this.services.courses;
    this.courses = new ObservableArray([]);
    this.page = 0;
    this.loadMoreCourses();
  }

  loadMoreCourses() {
    this.page += 1;

    this.coursesService.all(this.page)
      .then((newCourses) => {
        newCourses.forEach(course => this.courses.push(course));
      });

    return this;
  }
}

module.exports = {
  create: function(services) {
    return new HomeViewModel(services);
  }
};