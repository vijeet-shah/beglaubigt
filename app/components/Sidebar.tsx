"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Sidebar() {
  const router = useRouter()

  const handleLogout = async () => {
    const res = await fetch('/auth/logout', { method: 'POST' })
    if (res.ok) {
      router.push('/login')
    }
  }

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800">beglaubigt.de</h1>
      </div>
      <nav className="mt-6">
        <Link href="/dashboard" className="block px-6 py-2 text-blue-600 hover:bg-gray-100">Orders</Link>
        <Link href="/dashboard/integration" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Integration</Link>
        <Link href="/dashboard/invoices" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Invoices</Link>
        <button onClick={handleLogout} className="block w-full text-left px-6 py-2 text-gray-600 hover:bg-gray-100">Log Out</button>
      </nav>
    </div>
  )
}