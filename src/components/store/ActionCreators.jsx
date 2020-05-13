import { ActionTypes } from "./ActionTypes";
import { data as storeData } from "./data";
// create this action objects with a type name (identity)
// and the payload to be worked on
export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: storeData[dataType],
    total: storeData[dataType].length,
  },
});

export const updateData = (dataType, item) => ({
  type: ActionTypes.DATA_UPDATE,
  payload: {
    dataType: dataType,
    item: item,
    data: storeData[dataType],
  },
});

// the redux action that enables pagination
export const setPageSize = (newSize) => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: newSize,
});
