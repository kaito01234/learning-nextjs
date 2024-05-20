'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const healthcheck = () => {
    const request = new Request(`${process.env.NEXT_PUBLIC_TEST_URL}/migrationtest/api/health`);
    fetch(request).then((response) => console.log(response))
  }

  const router = useRouter()
  return (
    <div>
      <button type="button" onClick={() => router.push('/home')}>
        Home
      </button>
      <button type="button" onClick={() => router.push('/migrationtest')}>
        Migrationtest
      </button>
      <button type="button" onClick={() => router.push('/migrationtest/page2')}>
        page2
      </button>
      <button type="button" onClick={() => fetch(`/migrationtest/api/health/`, {})}>
        fetch
      </button>
      <button type="button" onClick={healthcheck}>
        healthcheck
      </button>
    </div>
  )
}
