import { NOTIFY_USER } from "../actions/types";
// remember add to combine reducers

const initialState = {
  message: null,
  messageType: null
};

export default function(state = initialState) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };

    default:
      return state;
  }
}
