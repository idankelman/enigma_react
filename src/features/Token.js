

//==========================================================================
//                          Imports and requires
//==========================================================================


import {createSlice} from '@reduxjs/toolkit'



//==========================================================================
//                          Create Slice Object for the Token
//==========================================================================


export const userSlice = createSlice({
    name : "token",
    initialState: {value : { low:2.0 , high:2.0 ,stamp:"",chart:2.0,Time:"----"}},
    reducers:
    {
        //create the token
        create: (state,action)=>
        {
            //state holds info about current and previous values
            //state is dynamic and can change 

            //action , we can pass infomation that we want to use
            //when the value is changed

            state.value = action.payload;
        } 
    }
});


export const {create} = userSlice.actions;


//exporting the infomataion that we careted so we can use it 
export default userSlice.reducer;