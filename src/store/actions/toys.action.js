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

export function addToy(toy){
    return (dispatch,getState)=>{
         toysService.save(toy).then(toy=>{
             const toys=[...getState().toysModule.toys,toy]
             debugger
             const action={
                 type:'SET_TOYS',
                 toys
             }
             dispatch(action)
         })
    }
}

export function removeToy(toyId){
    return (dispatch,getState)=>{
         toysService.remove(toyId).then(()=>{
             const toys=getState().toysModule.toys
             const newToys=toys.filter(toy=>toy._id!==toyId)
             debugger
             const action={
                 type:'SET_TOYS',
                 toys:newToys
             }
             dispatch(action)
         })
    }
}