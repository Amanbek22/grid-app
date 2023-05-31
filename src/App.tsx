import React, { useEffect, useState } from "react";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { Container, Modal, Typography } from "@mui/material";
import { columns, Row, rows, TableState } from "./constants";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<null | Row>(null);
  const [tableState, setTableState] = useState<TableState>({
    rows: rows,
    sortModel: location.search
      ? JSON.parse(
          new URLSearchParams(location.search).get("sortModel") as string
        )
      : [],
    filterModel: location.search
      ? JSON.parse(
          new URLSearchParams(location.search).get("filterModel") as string
        )
      : { items: [] },
  });

  useEffect(() => {
    const searchParams = new URLSearchParams();
    searchParams.set("sortModel", JSON.stringify(tableState.sortModel));
    searchParams.set("filterModel", JSON.stringify(tableState.filterModel));
    navigate({ search: searchParams.toString() });
  }, [tableState.sortModel, tableState.filterModel, navigate]);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedRow(params.row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSortModelChange = (newModel: any) => {
    setTableState((prevState) => ({
      ...prevState,
      sortModel: newModel,
    }));
  };

  const handleFilterModelChange = (newModel: any) => {
    setTableState((prevState) => ({
      ...prevState,
      filterModel: newModel,
    }));
  };
  const getRowHeight = (params: any) => {
    const row = params.row as Row;
    return row?.description.length > 50 ? 300 : 100;
  };
  return (
    <Container sx={{ margin: "50px auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        getRowHeight={getRowHeight}
        onRowClick={handleRowClick}
        sortModel={tableState.sortModel}
        onSortModelChange={handleSortModelChange}
        filterModel={tableState.filterModel}
        onFilterModelChange={handleFilterModelChange}
      />

      <Modal open={openModal} onClose={handleCloseModal}>
        <div className="modalWrapper">
          {selectedRow && (
            <div>
              <img className="modal__image" src={selectedRow.image} alt="Row" />
              <Typography variant="h6">{selectedRow.description}</Typography>
              <Typography variant="body1">{selectedRow.date}</Typography>
              <Typography variant="body1">{selectedRow.number}</Typography>
            </div>
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default App;
