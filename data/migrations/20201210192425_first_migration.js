// zoos, animals, species, zoo_animals
exports.up = function(knex) {
  return knex.schema.createTable('zoos')
};

exports.down = function(knex) {
  
};
