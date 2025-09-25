"use client";

import React, { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react";
import { ICellRendererParams } from "ag-grid-community";
// import UserModals from "./UserModals";
import { Badge } from "@/components/ui/badge";

// supabase
import { createClient } from "@/lib/supabaseClient";
import { BadgeCheckIcon, BadgeQuestionMark, BadgeXIcon } from "lucide-react";

const ProductGrid = ({ isAdmin }: { isAdmin: boolean }) => {
  const [rowData, setRowData] = useState<unknown[]>([]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "product_name",
      flex: 3,
    },
    {
      field: "price",
      flex: 2,
      cellRenderer: (params: ICellRendererParams) => {
        return <p>{params.value} TK</p>;
      },
    },
    {
      field: "discount_price",
      flex: 2,
      cellRenderer: (params: ICellRendererParams) => {
        return <p>{params.value} TK</p>;
      },
    },
    {
      field: "discount_rate",
      flex: 1,
      cellRenderer: (params: ICellRendererParams) => {
        return <p>{params.value}%</p>;
      },
    },
    {
      field: "active_yn",
      flex: 2,
      cellRenderer: (params: ICellRendererParams) => {
        return params.value === true ? (
          <div className=" flex items-center space-x-1 text-green-500">
            <BadgeCheckIcon className="w-4 h-4" />
            <p>Active</p>
          </div>
        ) : (
          <div className=" flex items-center space-x-1 text-red-500">
            <BadgeXIcon className="w-4 h-4" />
            <p>InActive</p>
          </div>
        );
      },
    },
    { field: "catagory", flex: 3 },
    {
      field: "created_at",
      flex: 2,
      cellRenderer: (params: ICellRendererParams) => {
        const date = new Date(params.value); // convert string to Date
        return (
          <p>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            }).format(date)}
          </p>
        );
      },
    },
    { field: "created_by_nm", flex: 2 },
    // TODO
    // { field: "Action", flex: 2,
    //     cellRenderer:
    //  },
    // { field: "created_at", flex: 2 },

    // {
    //   field: "Action",
    //   flex: 1,
    //   cellRenderer: UserModals,
    //   cellRendererParams: { isAdmin: isAdmin },
    // },
  ]);

  useEffect(() => {
    const supabase = createClient();

    const getUser = async () => {
      const { data } = await supabase.from("tb_products").select();
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

export default ProductGrid;
