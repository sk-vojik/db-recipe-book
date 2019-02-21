
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
    tbl.increments();

    tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
    tbl.integer('ingredients_id').unsigned().notNullable().references('id').inTable('ingredients');
    tbl.float('quantity').unsigned().notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
