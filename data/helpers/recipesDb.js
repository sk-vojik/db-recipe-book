const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig);

module.exports = {
  findById,
  insert
};

function findById(id) {
  return db("recipes").where(id);
}

function insert(recipe) {
  return db("recipes").insert(recipe);
}