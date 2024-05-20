'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <a href={`${process.env.NEXT_PUBLIC_TEST_URL}/home`}>Home</a>
      <button type="button" onClick={() => router.push('/')}>
        Migrationtest
      </button>
      <button type="button" onClick={() => router.push('/page2')}>
        page2
      </button>
      <button type="button" onClick={() => fetch(`/migrationtest/api/health`, {})}>
        fetch
      </button>
    </div>
  )
}
