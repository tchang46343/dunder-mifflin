require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  //connection: "postgresql://dunder_mifflin@localhost/knex-practice"
  connection: process.env.DB_URL
});

function getProductsWithImages() {
  knexInstance
    .select("product_id", "name", "price", "category", "image")
    .from("amazong_products")
    .whereNotNull("image")
    .then(result => {
      console.log(result);
    });
}

getProductsWithImages();

// function paginateProducts(page) {
//   const productPerPage = 10;
//   const offset = productPerPage * (page - 1);
//   knexInstance
//     .select("product_id", "name", "price", "category")
//     .from("amazong_products")
//     .limit(productPerPage)
//     .offset(offset)
//     .then(result => {
//       console.log(result);
//     });
// }

// paginateProducts(2);

// function searchByProduceName(searchTerm) {
//   knexInstance
//     .select("product_id", "name", "price", "category")
//     .from("amazong_products")
//     .where("name", "ILIKE", `%${searchTerm}%`)
//     .then(result => {
//       console.log(result);
//     });
// }
// searchByProduceName("holo");

// const qry = knexInstance
//   .select("product_id", "name", "price", "category")
//   .from("amazong_products")
//   .where({ name: "Point of view gun" })
//   .first()
//   .toQuery();
// // .then(result => {
// //   console.log(result)
// // })

// console.log(qry);

// knexInstance
//   .select("product_id", "name", "price", "category")
//   .from("amazong_products")
//   .where({ name: "Point of view gun" })
//   .first()
//   .then(result => {
//     console.log(result);
//   });

// knexInstance
//   .from("amazong_products")
//   .select("*")
//   .then(result => {
//     console.log(result);
//   });
// console.log("Knex and driver installed correctly");

// const q1 = knexInstance("amazong_products")
//   .select("*")
//   .toQuery();
// const q2 = knexInstance
//   .from("amazong_products")
//   .select("*")
//   .toQuery();

// console.log("q1:", q1);

// console.log("q2:", q2);
