import { SET_SQUARE,REQUEST,FAIL,SUCCESS} from "../constants";

export const initialState = {
  user:null,
  status:null,
  game_data:[
    null, null, null,
    null, null, null,
    null, null, null,
  ],
  session_id:null,
  user_char:'X'
};


export default function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case SET_SQUARE+SUCCESS:
      let game_data_new=state.game_data.slice();
      game_data_new[payload.id]=payload.char;
      //console.log(game_data_new);
      return{
        ...state,
      game_data:game_data_new
      };


    default:
      return state;
  }
}
