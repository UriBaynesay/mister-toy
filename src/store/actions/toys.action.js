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

export function saveToy(toy){
    return (dispatch,getState)=>{
         toysService.save(toy).then(resToy=>{
             const toys=getState().toysModule.toys
             const newToys=toys.filter(t=>t._id!==resToy._id)
             newToys.push(resToy)
             const action={
                 type:'SET_TOYS',
                 toys:newToys
             }
             dispatch(action)
         })
    }
}

export function removeToy(toyId){
    return (dispatch,getState)=>{
         return toysService.remove(toyId).then(()=>{
             const toys=getState().toysModule.toys
             const newToys=toys.filter(toy=>toy._id!==toyId)
             const action={
                 type:'SET_TOYS',
                 toys:newToys
             }
             dispatch(action)
         })
    }
}