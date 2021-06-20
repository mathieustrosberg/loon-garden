import { Fragment } from "react";

const DataMenu = ({ data }) => {
  return (
    <table className='container-menu'>
      <tbody>
        {data.map((category, i) => {
          return (
            <Fragment key={'category' + i}>
              <tr className='title-category'>
                <td>{category.title}</td>
              </tr>
              <tr className='quantities-line'>
                {category.quantities &&
                  category.quantities.map((quantity, j) => {
                    return (
                      <>
                        {j === 0 && <td></td>}
                        <td key={'quantity' + j}>
                          <span>{quantity}</span>
                        </td>
                      </>
                    );
                  })}
              </tr>
              {category.product &&
                category.product.map((product, k) => {
                  return (
                    <tr key={'product' + k}>
                      <td>
                        <span className='title'>{product.title}</span>
                        <span className='description'>
                          {product.description}
                        </span>
                      </td>
                      {product.prices.map((price, l) => {
                        return (
                          <td key={'price' + l} className='price'>
                            <span>{price}</span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataMenu;
