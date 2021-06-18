const DataMenu = ({ data }) => {
  return (
    <div className="container-menu">
      {data.map((category, index) => {
        return (
          <div key={index}>
            <span className="titleCategory">{category.title}</span>
            <div className="quantities">
              {category.quantities &&
                category.quantities.map((quantity, index) => {
                  return <span key={index}>{quantity}</span>;
                })}
            </div>
            {category.product &&
              category.product.map((product, index) => {
                return (
                  <div key={index} className="product-wrapper">
                    <div className="title-price-wrapper">
                      <span>{product.title}</span>
                      <span>{product.description}</span>
                    </div>
                    <div>
                      {product.prices &&
                        product.prices.map((price, index) => {
                          return (
                            <span className="price" key={index}>
                              {price}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default DataMenu;

// {data.map((postDetail, index) => {
//   return (
//     <div key={index} className="container-menu">
//       <div className="col-left">
//         <span className="titleCategory">{postDetail.titleCategory}</span>
//         <span className="title">{postDetail.title}</span>
//         <span className="description">{postDetail.description}</span>
//       </div>
//       <div className="col-right">
//         <span className="quantity">{postDetail.quantity1}</span>
//         <span className="price">{postDetail.price1}</span>
//         <span className="quantity">{postDetail.quantity2}</span>
//         <span className="price">{postDetail.price2}</span>
//         <span className="quantity">{postDetail.quantity3}</span>
//         <span className="price">{postDetail.price3}</span>
//       </div>
//     </div>
//   );
// })}
