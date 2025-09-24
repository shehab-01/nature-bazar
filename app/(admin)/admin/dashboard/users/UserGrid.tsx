"use client";

import React, { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react";
import { ICellRendererParams } from "ag-grid-community";
import UserModals from "./UserModals";

// supabase
import { createClient } from "@/lib/supabaseClient";

const UserGrid = ({ isAdmin }: { isAdmin: boolean }) => {
  const [rowData, setRowData] = useState<unknown[]>([]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "name",
      flex: 2,
      // cellStyle: { textAlign: "center" },
    },
    { field: "phone", flex: 3 },
    { field: "role", flex: 2 },
    {
      field: "approve_yn",
      flex: 1,
      cellRenderer: (params: ICellRendererParams) => {
        return params.value === true ? (
          <p className="bg-green-300 p-auto text-center m-auto rounded-sm">
            Approve
          </p>
        ) : (
          <p className="bg-red-300 p-auto text-center m-auto rounded-sm">
            Pending
          </p>
        );
      },
    },
    {
      field: "Action",
      flex: 1,
      cellRenderer: UserModals,
      cellRendererParams: { isAdmin: isAdmin },
    },
  ]);

  useEffect(() => {
    const supabase = createClient();

    const getUser = async () => {
      const { data } = await supabase.from("profiles").select();
      // console.log(data);
      if (data) {
        setRowData(data);
      }
    };
    getUser();
  }, []);

  return (
    <div style={{ height: 500, width: "85%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default UserGrid;
