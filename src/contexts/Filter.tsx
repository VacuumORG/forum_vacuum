import {
  FunctionComponent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react'
import { FilterType } from './types'

export const FilterContext = createContext({
  search: '',
  currentPage: 1,
  filter: FilterType.RECENT,
  popularTag: '',
  setSearch: (value: string) => {},
  setCurrentPage: (value: number) => {},
  setPopularTag: (value: string) => {},
  setFilter: (value: FilterType) => {},
})

interface FilterContextProviderProps {
  children: ReactNode
}

export const FilterContextProvider: FunctionComponent<
  FilterContextProviderProps
> = ({ children }) => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [popularTag, setPopularTag] = useState('')
  const [filter, setFilter] = useState(FilterType.RECENT)

  return (
    <FilterContext.Provider
      value={{
        search,
        currentPage,
        popularTag,
        filter,
        setSearch,
        setCurrentPage,
        setPopularTag,
        setFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
