import {initialState} from './cars.state';

import {ADD_CAR, LIST_CARS, CAR_DETAILS, CAR_LIKE, ADD_CAR_REVIEW, ALL_REVIEWS, USER_CAR_DELETE, USER_CARS} from './cars.actions';

function addCar(state = initialState, action) {

  const result = action.result;
  return Object.assign({}, state, {
    carAdded: result.success,
    carAddedId: result.success ? result.car.id : null
  });
}

function listCars(state, action) {
  return Object.assign({}, state, {
    listCars: action.cars
  });
}

function carDetails(state, action) {
  return Object.assign({}, state, {
    carDetails: action.car
  });
}

function carLike(state, action) {
  if (action.result.success) {
    const carLikes = state.carDetails.likes + 1;
    const carInfo = Object.assign({}, state.carDetails, {
      likes: carLikes
    });
    return Object.assign({}, state, {
      carDetails: carInfo
    });
  }
  return state;

}


function carAddReview(state, action) {
  const result = action.result;
  if (result.success) {
    console.log(result);
    const currentReview = result.review;
    const carReviews = state.carReviews;
    return Object.assign({}, state, {
      // carReviews: state.carReviews.push(review)
      carReviews: [...carReviews, currentReview]
    });
  }

  return state;
}

function allReviews(state, action) {
  return Object.assign({}, state, {
    carReviews: action.reviews
  });
}

function userCarDelete(state, action) {
  console.log(state);
  if (action.result.success) {

    const carId = action.id;
    const carIndex = state.currentUserCars.findIndex(c => c.id === carId);
    if (carIndex >= 0) {
      const allCars = state.currentUserCars.slice(0);
      allCars.splice(carIndex, 1);
      return Object.assign({}, state, {
        currentUserCars: allCars
      });
    }
  }
  return state;
}

function userCars(state, action) {
  return Object.assign({}, state, {
    currentUserCars: action.cars
  });
}

export function carsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAR:
      return addCar(state, action);
    case LIST_CARS:
      return listCars(state, action);
    case CAR_DETAILS:
      return carDetails(state, action);
    case CAR_LIKE:
      return carLike(state, action);
    case ADD_CAR_REVIEW:
      return carAddReview(state, action);
    case ALL_REVIEWS:
      return allReviews(state, action);
    case USER_CAR_DELETE:
      return userCarDelete(state, action);
    case USER_CARS:
      return userCars(state, action);
    default:
      return state;
  }
}
