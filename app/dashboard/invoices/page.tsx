import { DataTable } from '../../components/DataTable'
import { columns, Invoice } from '../../components/InvoiceColumns'

const invoices: Invoice[] = [
  { id: 'INV-001', date: '2023-11-01', amount: '€500.00', status: 'Paid' },
  { id: 'INV-002', date: '2023-11-15', amount: '€750.00', status: 'Pending' },
  { id: 'INV-003', date: '2023-11-30', amount: '€1000.00', status: 'Overdue' },
]

export default function Invoices() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Invoices</h1>
      <DataTable columns={columns} data={invoices} />
    </div>
  )
}