import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { DataTable } from '../components/DataTable'
import { columns } from '../components/columns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data: aufträge } = await supabase.from('aufträge').select('*')

  const tabs = [
    { value: 'all', label: 'All', count: aufträge?.length || 0 },
    { value: 'create', label: 'Create', count: aufträge?.filter(a => a.status === 'Create').length || 0 },
    { value: 'signature', label: 'Signature', count: aufträge?.filter(a => a.status === 'Signature').length || 0 },
    { value: 'certificate', label: 'Certificate', count: aufträge?.filter(a => a.status === 'Certificate').length || 0 },
    { value: 'complete', label: 'Completed', count: aufträge?.filter(a => a.status === 'Completed').length || 0 },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Your orders</h1>
      <Tabs defaultValue="all" className="mt-6">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label} ({tab.count})
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <DataTable columns={columns} data={aufträge || []} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}