import { RootState } from './../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TSort = {
  name: string
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price'
}

interface IFilterSliceState {
  searchValue: string
  categoryId: number
  sort: TSort
}

const initialState: IFilterSliceState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setSort(state, action: PayloadAction<TSort>) {
      state.sort = action.payload
    },
  },
})

export const selectFilter = (state: RootState) => state.filter
export const selectSort = (state: RootState) => state.filter.sort

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
