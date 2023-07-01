import { createAction } from "@ngrx/store";
import { LoadingState } from "./LoadingState";
import { hide, show } from "./loading.actions";
import { loadindReducer } from "./loading.reducer"

describe('loading store', ()=>{
    it('show',()=>{
        const initialsState: LoadingState = {show: false};
        const newstate = loadindReducer(initialsState, show());

        expect(newstate).toEqual({show: true});

    })
    it('hide',()=>{
        const initialsState: LoadingState = {show: true};
        const newstate = loadindReducer(initialsState, hide());

        expect(newstate).toEqual({show: false});

    })
    it('should keep state if action is unknown',()=>{
        const initialsState: LoadingState = {show: true};
        const action = createAction('UKNOWN')
        const newstate = loadindReducer(initialsState, action());

        expect(newstate).toEqual({show: true});

    })

})