
exports.up = function (knex) {
    return knex.schema.createTable('car-specs', tbl => {
        tbl.increments('id');
        tbl.varchar('VIN', 128).notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.decimal('mileage').notNullable();
        tbl.varchar('transmissionType', 128);
        tbl.varchar('titleStatus', 128);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('car-specs');
};
