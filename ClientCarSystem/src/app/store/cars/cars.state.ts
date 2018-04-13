export interface ICarsState {
  carAdded: boolean;
  carAddedId: number;
  listCars: Array<object>;
  carDetails: object;
  carReviews: Array<object>;
  currentUserCars: Array<object>;
}

export const initialState: ICarsState = {
  carAdded: false,
  carAddedId: null,
  listCars: [],
  carDetails: {},
  carReviews: [],
  currentUserCars: []
};

