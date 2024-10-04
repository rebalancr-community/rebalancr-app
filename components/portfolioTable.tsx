"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";

import { data } from "@/config/data";

export const PortfolioTable = () => {
  const columns = [
    {
      key: "code",
      label: "Código",
    },
    {
      key: "name",
      label: "Ativo",
    },
    {
      key: "price",
      label: "Cotação",
    },
    {
      key: "quantity",
      label: "Quantidade",
    },
    {
      key: "amount",
      label: "Patrimônio",
    },
    {
      key: "goal",
      label: "Objetivo",
    },
    {
      key: "currentTotal",
      label: "Total",
    },
  ];

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column?.key}>{column?.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item?.code}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
