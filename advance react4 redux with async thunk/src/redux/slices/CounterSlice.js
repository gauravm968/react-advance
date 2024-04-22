const { createSlice } = require("@reduxjs/toolkit");
const { createAsyncThunk } = require("@reduxjs/toolkit");

//action
export const fetchTests = createAsyncThunk("tests/fetchTests", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
})

const initialState = {             
    value: 0,
    isLoading: false,
    data: [],
    isError: false,
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
    },
    extraReducers: (builder) => {       //when use async thunk
        builder.addCase(fetchTests.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTests.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;      //pass fetched data to data var (initialState)
        });
        builder.addCase(fetchTests.rejected, (state, action) => {
            console.log("Error -> ", action.payload);
            state.isError = true;
        })
    },
});

//export reducers (functions)                  //action creator
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;        