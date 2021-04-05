// App.js
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function App() {
  const [products, setproducts] = useState([
    { id: 1, name: "George", animal: "Monkey" },
    { id: 2, name: "Jeffrey", animal: "Giraffe" },
    { id: 3, name: "Alice", animal: "Giraffe" },
    { id: 4, name: "Foster", animal: "Tiger" },
    { id: 5, name: "Tracy", animal: "Bear" },
    { id: 6, name: "Joesph", animal: "Lion" },
    { id: 7, name: "Tania", animal: "Deer" },
    { id: 8, name: "Chelsea", animal: "Tiger" },
    { id: 9, name: "Benedict", animal: "Tiger" },
    { id: 10, name: "Chadd", animal: "Lion" },
    { id: 11, name: "Delphine", animal: "Deer" },
    { id: 12, name: "Elinore", animal: "Bear" },
    { id: 13, name: "Stokes", animal: "Tiger" },
    { id: 14, name: "Tamara", animal: "Lion" },
    { id: 15, name: "Zackery", animal: "Bear" },
  ]);

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "animal", text: "Animal", sort: true },
    {
      dataField: "",
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <button className="btn btn-danger btn-xs" onClick={() => del(row.id)}>
            Delete
          </button>
        );
      },
    },
  ];

  function del(index) {
    let newtab = products.filter((e) => e.id !== index);
    setproducts(newtab);
  }

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  return (
    <div className="App">
      <h5>React Table Pagination</h5>

      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={pagination}
      />
    </div>
  );
}

export default App;
