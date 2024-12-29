import { createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
  

    name:"auth",
    initialState:{ isLoggedIn: false, role:"user"},

  
    reducers:{
        login(State){
            State.isLoggedIn=true;
            
        },

        logout(State){

            State.isLoggedIn=false;
        },

        ChangeRole(State,actions){

            const role= actions.payload;
            State.role=role;
            
        
        }

    }


  
});

export const authActions= authSlice.actions;
export default authSlice.reducer;