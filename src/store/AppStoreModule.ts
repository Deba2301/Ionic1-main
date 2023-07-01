import { StoreModule } from "@ngrx/store";
import { loadindReducer } from "./loading/loading.reducer";

export const AppStoreModule= [
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", loadindReducer)
]