
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('carSpecs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('carSpecs').insert([
        { VIN: '3FAHP07167R209370', make: 'Ford', model: 'Fusion', mileage: '120000', transmissionType: 'automatic', titleStatus: 'clean' },
        { VIN: '3C6UR5PL9EG321341', make: 'RAM', model: '2500', mileage: '150000', transmissionType: 'automatic', titleStatus: 'clean' }
      ]);
    });
};
