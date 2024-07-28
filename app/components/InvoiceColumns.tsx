"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Invoice = {
  id: string
  date: string
  amount: string
  status: 'Paid' | 'Pending' | 'Overdue'
}

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "id",
    header: "Invoice Number",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
          ${status === 'Paid' ? 'bg-green-100 text-green-800' : 
            status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}`}>
          {status}
        </span>
      )
    },
  },
]