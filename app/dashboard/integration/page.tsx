import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const integrationData = [
  { name: 'API Key', value: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
  { name: 'Webhook URL', value: 'https://api.test.de/webhook' },
  { name: 'Documentation', value: 'https://docs.test.de' },
]

export default function Integration() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Integration</h1>
      <Card>
        <CardHeader>
          <CardTitle>API Integration Details</CardTitle>
        </CardHeader>
        <CardContent>
          {integrationData.map((item, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-sm font-medium text-gray-500">{item.name}</h2>
              <p className="mt-1 text-sm text-gray-900">{item.value}</p>
            </div>
          ))}
          <Button className="mt-4">Generate New API Key</Button>
        </CardContent>
      </Card>
    </div>
  )
}