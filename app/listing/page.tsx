import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"
import {mockdata} from './data'
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return mockdata;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}