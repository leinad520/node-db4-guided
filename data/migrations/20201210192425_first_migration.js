// zoos, animals, species, zoo_animals
exports.up = function(knex) {
  return knex.schema.createTable('zoos', table => {
    table.increments('zoo_id')
    
  })
};

exports.down = function(knex) {
  
};
