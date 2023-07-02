import { useContext } from 'react'
import { FilterContext } from '@/contexts/Filter'

export function useFilter() {
  return useContext(FilterContext)
}
