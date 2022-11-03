import React, { useEffect, useState } from "react";
import { Dropdown, Table } from "flowbite-react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setRefresh(!refresh));
  };
  return (
    <div>
      <div className='w-full'>
        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className='sr-only'>Edit</span>
              Actions
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {products.map((product) => {
              return (
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    <img
                      className='w-20'
                      src={product.image}
                      alt={product.name}
                    />
                  </Table.Cell>
                  <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {product.name}
                  </Table.Cell>
                  <Table.Cell>${product.price}</Table.Cell>
                  <Table.Cell>
                    <Dropdown label='Action' arrowIcon={false}>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDelete(product._id)}>
                        Delete
                      </Dropdown.Item>
                    </Dropdown>
                    <button onClick={() => handleDelete(product._id)}>
                      {" "}
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <button></button>
      </div>
    </div>
  );
};

export default AllProducts;
