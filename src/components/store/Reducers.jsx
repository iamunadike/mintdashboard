import { ActionTypes } from "./types/ActionTypes.jsx";


export const TransmonitorReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        name: action.payload.dataType,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_total`]: action.payload.total,
      };

    case ActionTypes.DATA_UPDATE:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case ActionTypes.DATA_SET_PAGESIZE:
      return { ...storeData, pageSize: action.payload, pageon: 1 };

    default:
      return storeData || {};
  }
};
