import { SET_SQUARE,REQUEST,SUCCESS,FAIL} from "../constants";

export function setSquareActions(id, char){
  return async dispatch => {
    //console.log("actions");
    dispatch({
      type:SET_SQUARE+SUCCESS,
      payload:{id:id,char:char}
    })
  }
}