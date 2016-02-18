'use strict';

var Observable = require("data/observable")
  .Observable;

class DetailsViewModel extends Observable {
  constructor(id, title, services) {
    super();
    this.id = id;
    this.title = title;
    // this.description = '1231232';
    this.services = services;
    this.coursesService = this.services.courses;
    this.loadDetails();
  }

  loadDetails() {
    let that = this;
    this.coursesService.byId(this.id)
      .then(function(courseDetails) {
        that.title = courseDetails.name;
        // that.description = courseDetails.description;
        that.set('description', courseDetails.description);
      });
  }
}

module.exports = {
  create: function(id, title, services) {
    return new DetailsViewModel(id, title, services);
  }
};