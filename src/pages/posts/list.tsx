import React from "react";
import {
  useDataGrid,
  DataGrid,
  GridColumns,
  TagField,
  DateField,
  List,
} from "@pankod/refine-mui";

import { IPost } from "../../interfaces"

const columns: GridColumns<IPost> = [
  { field: "title", headerName: "Title", flex: 1, minWidth: 350 },
  {
    field: "status",
    headerName: "Status",
    minWidth: 150,
    flex: 1,
    renderCell: function render(params) {
      return <TagField value={params.row.status} />;
    },
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    minWidth: 220,
    renderCell: function render(params) {
      return <DateField format="LLL" value={params.row.createdAt} />;
    },
  },
];

export const PostList: React.FC = () => {
  const { dataGridProps } = useDataGrid<IPost>();

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};