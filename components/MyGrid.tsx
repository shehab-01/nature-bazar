"use client";

import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

// supabase

import { createClient } from "@/lib/supabaseClient";

// Define the interface for our row data
interface ICar {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

// Create the component
const MyAgGrid = () => {
  const [rowData, setRowData] = useState<any[]>([]);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "name" },
    { field: "phone" },
    { field: "role" },
    {
      field: "approve_yn",
      cellRenderer: (params: any) => {
        return params.value === true ? "Approve" : "Pending";
      },
    },
    // { field: "gold" },
    // { field: "silver" },
    // { field: "bronze" },
    // { field: "total" },
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
    // fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    //   .then((result) => result.json())
    //   .then((rowData) => {
    //     console.log("Fetched data:", rowData); // 👈 log here
    //     setRowData(rowData);
    //   })
    //   .catch((error) => {
    //     console.error("Fetch error:", error);
    //   });
  }, []);

  return (
    <div style={{ width: "100vh", height: "70vh" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
      />
    </div>
  );
};

export default MyAgGrid;
