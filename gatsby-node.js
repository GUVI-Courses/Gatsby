const productsAPI = "https://mocki.io/v1/e700579b-3cf6-4d34-9978-0ac0f8fc64fa";

exports.createPages = async function ({ actions, graphql, reporter }) {
  const productsResponse = await fetch(productsAPI);
  const products = await productsResponse.json();

  console.log("products", products);

  products.forEach(({ name, id, image, specifications }) => {
    actions.createPage({
      path: `product-page-using-api/${id}`,
      component: require.resolve("./src/templates/product.js"),
      context: { name, id, image, specifications },
    });
  });

  const { data } = await graphql(`
    query {
      allProducts {
        edges {
          node {
            id
            image
            name
            specifications {
              display
              processor
              storage
            }
            jsonId
          }
        }
      }
    }
  `);

  console.log("graphql data", JSON.stringify(data));

  data.allProducts.edges.forEach(({ node }) => {
    actions.createPage({
      path: `product/${node.jsonId}`,
      component: require.resolve("./src/templates/product.js"),
      context: node,
    });
    reporter.info(`${node.jsonId} page is generated`);
  });
};
