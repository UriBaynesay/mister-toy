import { toysService } from "../../services/toy.service";

export function loadToys(){
    return dispatch=>{
         toysService.query().then(toys=>{
             const action={
                 type:'SET_TOYS',
                 toys
             }
             dispatch(action)
         })
    }
}