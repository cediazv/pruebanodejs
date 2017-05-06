var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://ahysdummebxemi:7c44cffacb8f6710ec64be1cc1a1addca5ae1ead6aa54d165f6033b676aad198@ec2-50-17-236-15.compute-1.amazonaws.com:5432/d8laahr42j3e3t';
var db = pgp(connectionString);

var cn = "postgres://username:password@host:port/database";

// add query functions

module.exports = {
  getAll: getAll/*,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy*/
};

function getAll(req, res, next) {
  db.any('select * from Personas')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL peoples'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}