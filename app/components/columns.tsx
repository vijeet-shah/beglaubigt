"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Auftrag } from "@/types"

export const columns: ColumnDef<Auftrag>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Art",
  },
  {
    accessorKey: "jurisdiction",
    header: "Jurisdiction",
  },
  {
    accessorKey: "updatedAt",
    header: "Latest Update",
  },
  {
    accessorKey: "recipients",
    header: "Recipients",
    cell: ({ row }) => {
      const recipients = row.getValue("recipients") as string[]
      return <div>{recipients.join(", ")}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return <Badge>{status}</Badge>
    },
  },
]