// zoos, animals, species, zoo_animals
exports.up = function (knex) {
  return knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
      table.string('zoo_name', 128).notNullable()
      table.string('address', 128).notNullable()
    })
    .createTable('animals')
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('zoos')
};
