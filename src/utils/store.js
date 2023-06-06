import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './HearderSlice'

const store = configureStore({
    reducer: {
        menu: menuSlice
    }
})

export default store