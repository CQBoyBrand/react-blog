/**
 * Created By brand On 2018/1/19
 */
//文章页
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getDetails} from '../reducers/ArtDetail'
import Details from '../components/detail/Detail'

@withRouter
@connect(
    state=>state,
    {getDetails}
)
class ArtDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artId: props.match.params.id
        }
    }
    componentDidMount(){
        this.props.getDetails({"artId": this.state.artId})
    }
    componentWillReceiveProps(nextProps){
        let currentId = this.props.match.params.id;
        let nextPropsId = nextProps.match.params.id;
        if (currentId != nextPropsId) {
            this.props.getDetails({"artId": nextPropsId})
        }
    }
    render(){
        return (
            <div>
                <Details data={this.props.artDetail} />
            </div>
        )
    }
}

export default ArtDetail