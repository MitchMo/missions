import { connect } from 'react-redux';
import OrderScreen from '../components/OrderScreen.jsx';
import { updateOrderDetails } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  updateOrderDetails: (details) => dispatch(updateOrderDetails({details}))
});

export default connect(
  (state) => ({
    userCoords: state.map.coords,
    pickup: state.order.pickup,
    dropoff: state.order.dropoff,
    requested_pickup_time: state.order.requested_pickup_time,
    size: state.order.size,
    weight: state.order.weight,
  }),
  mapDispatchToProps
)(OrderScreen);