import { useEffect } from 'react'
import useMousePosition from '@/hooks/useMousePosition'
import { useRouter } from 'next/router'

export const Cursor = () => {
  const router = useRouter()
  const { x, y } = useMousePosition()

  useEffect(() => {
    document.querySelector('.cursor')?.classList.remove('show', 'active')
    document?.querySelector('.cursor')?.classList.add('hide')
  }, [router])

  return (
    <div style={{ left: `${x}px`, top: `${y}px` }} className='cursor' />
  )
}
