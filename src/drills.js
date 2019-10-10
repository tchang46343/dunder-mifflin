require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  //connection: "postgresql://dunder_mifflin@localhost/knex-practice"
  connection: process.env.DB_URL
});

//1.
function searchList(searchTerm) {
  knexInstance
    .select("item_id", "item_name", "item_price", "category")
    .from(shopping_list)
    .where("name", "ILIKE", `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}
searchLlist("Bluffalo Wings");

//2.
function paginatedProducts(page) {
  const limit = 10;
  const offset = limit * (page - 1);
  knexInstance
    .select("item_id", "item_name", "item_price", "category")
    //.select('*')
    .from(shopping_list)
    .limit(limit)
    .offset(offset)
    .then(result => {
      console.log(result);
    });
}
paginatedProducts(2);

//3.

// function productsAddedDaysAgo(daysAgo) {
//   knexInstance
//     .select('id', 'name', 'price', 'date_added', 'checked', 'category')
//     .from('shopping_list')
//     .where(
//       'date_added',
//       '>',
//       knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
//     )
//     .then(results => {
//       console.log('PRODUCTS ADDED DAYS AGO')
//       console.log(results)
//     })
// }

//4.
function addCategory() {
  knexInstance
    .select("category")
    .SUM("price as total")
    .from(shopping_list)
    .groupBy("category")
    //   .ORDER BY SUM(item_price) DESC
    .then(result => {
      console.log(result);
    });
}
addCategory();
