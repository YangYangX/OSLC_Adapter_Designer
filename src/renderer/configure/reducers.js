/**
 * reducer
 *
 * appReducer:
 * reducer defined for application.
 *
 * routerReducer:
 * the reducer merges route location changes into the immutable state,
 * this part is handled by react-router-redux.
 */

 import { combineReducers } from 'redux-immutable';
 import { connectRouter } from 'connected-react-router/immutable'

 /**
  * Create the main reducer with appReducer and routeReducer
  */
 const rootReducer = (history) => combineReducers({
    //checkout: checkoutReducer,
    router: connectRouter(history)
  })
  
  export default rootReducer;
