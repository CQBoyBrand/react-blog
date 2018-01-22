/**
 * Created By brand On 2018/1/21
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getDateList} from '../reducers/Archive'
import ArtListByDate from '../components/archive/Archive'

@connect(
    state=>state,
    {getDateList}
)
class Archive extends Component {
    componentDidMount(){
        this.props.getDateList()
    }
    render(){
        return (
            <div>
                <ArtListByDate data={this.props.artArchive} />
            </div>
        )
    }
}

export default Archive