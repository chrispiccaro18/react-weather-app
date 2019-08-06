import { UPDATE_ZIP_CODE } from '../actions/zipCodeActions';

const initialState = {
  zipCode: ''
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_ZIP_CODE:
      return { ...state, zipCode: payload };
    default:
      return state;
  }
}
