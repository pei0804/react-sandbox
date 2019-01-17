import _ from 'lodash'
import {READ_EVENTS} from "../action";

export default (state = {}, action) => {
    switch (action.type) {
        case  READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        default:
            return state
    }
}
