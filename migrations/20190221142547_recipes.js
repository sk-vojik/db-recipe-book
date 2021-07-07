
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();

    tbl.integer('dish_id').unsigned().notNullable().references('id').inTable('dishes');
    tbl.string('name', 128).notNullable().unique('recipe_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
