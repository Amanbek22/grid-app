import { Avatar } from "@mui/material";
import { GridColDef, GridFilterModel, GridSortModel } from "@mui/x-data-grid";

export interface Row {
  id: number;
  image: string;
  description: string;
  date: string;
  number: number;
}

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (params) => <Avatar src={params.value} alt="Row" />,
  },
  { field: "description", headerName: "Description", width: 200 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "number", headerName: "Number", width: 150 },
];

export const rows: Row[] = [
  {
    id: 1,
    image:
      "https://content.api.news/v3/images/bin/615131aefb8405a4687daf730d5b2117?width=1280",
    description: "Description 1",
    date: "2023-05-31",
    number: 10,
  },
  {
    id: 2,
    image:
      "https://static.standard.co.uk/2022/08/10/14/newFile.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
    description: "Description 2",
    date: "2023-01-30",
    number: 20,
  },
  {
    id: 3,
    image:
      "https://media.glamourmagazine.co.uk/photos/63bee1de1baa0b52245d3704/3:2/w_1920,h_1280,c_limit/ANDREW%20TATE%20110123%20default-sq-GettyImages-1246122962.jpg",
    description: "Description 3",
    date: "2023-05-30",
    number: 209,
  },
  {
    id: 4,
    image:
      "https://youthscape.ams3.cdn.digitaloceanspaces.com/images/16723620780107.remini-enhanced.jpg",
    description: "Description 4",
    date: "2023-02-30",
    number: 520,
  },
  {
    id: 5,
    image:
      "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/24/16745676069378.jpg",
    description: "Description 5",
    date: "2023-04-30",
    number: 240,
  },
  // Add more rows as needed
];

export interface TableState {
  rows: Row[];
  sortModel: GridSortModel;
  filterModel: GridFilterModel;
}
