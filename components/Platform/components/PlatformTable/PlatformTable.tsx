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
import { tableColumns } from "@/constants/table";

export const PlatformTable = () => {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={tableColumns}>
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
