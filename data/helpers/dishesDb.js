const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig);

module.exports = {
  find,
  findById,
  insert
};

function find() {
  return db("dishes");
}

function findById(id) {
  return db("dishes").where({ id });
}

function insert(recipe) {
  return db("dishes").insert(recipe);
}