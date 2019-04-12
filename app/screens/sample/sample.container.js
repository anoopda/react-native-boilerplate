import Sample from './sample.component';
import { connect } from 'react-redux';

const mapState = (state) => {
    const { sample } = state;
    return {
        sample
    }
}

const mapDispatch = (dispatch) => {
    const {sample:{
        updateCount
    },login:{handlelogout}} = dispatch;
    return {
        updateCount : (count)=>{updateCount({count:count})},
        handlelogout
    }
}

export default connect(mapState, mapDispatch)(Sample)
