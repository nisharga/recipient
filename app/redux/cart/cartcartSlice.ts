import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICart {
    phoneNumber: string;
}

const initialState: ICart = {
    phoneNumber: ''
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.phoneNumber = action.payload.phoneNumber;
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
