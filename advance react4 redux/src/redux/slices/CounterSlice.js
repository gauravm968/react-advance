const { createSlice } = require("@reduxjs/toolkit");

const initialState = {             
    value: 0,
}

export const CounterSlice = createSlice({
    name: "counter",          //slice name
    initialState,
    reducers: {                
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

//export reducers (functions)                  //action creator
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;        