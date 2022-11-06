import { RootState } from './../store'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type TPizza = {
  id: string
  title: string
  price: number
  imageUrl: string
  types: number[]
  sizes: number[]
  rating: number
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface IPizzaSliceState {
  items: TPizza[]
  status: Status
}

const initialState: IPizzaSliceState = {
  items: [],
  status: Status.LOADING,
}

export const fetchPizzas = createAsyncThunk<TPizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search } = params
    const { data } = await axios.get<TPizza[]>(
      `https://63503b7178563c1d82bd0de2.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    return data
  }
)

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TPizza[]>) {
      state.items = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = []
      console.log('Идёт отправка')
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
      console.log('ВСЁ ОК')
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
      console.log('Была ошибка')
    })
  },
})

export const selectPizzaData = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
