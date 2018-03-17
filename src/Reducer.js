/**
 * Created By brand On 2018/3/10
 */
import {combineReducers} from 'redux'

import {frontArtList} from './redux/ArticleList'
import {tagList} from './redux/Tags'
import {linkList} from './redux/LinkList'
import {HotArtList} from './redux/HotArticle'
import {userinfo} from './redux/UserInfo'
import {artDetail} from './redux/ArtDetail'
import {tagArtList} from './redux/TagArtList'
import {artArchive} from './redux/Archive'
import {artListByDate} from './redux/ArchiveArtList'
import {commentsData} from './redux/Comments'

const reducer = combineReducers({
    frontArtList,
    tagList,
    HotArtList,
    artArchive,
    artDetail,
    tagArtList,
    artListByDate,
    commentsData,
    linkList,
    userinfo
})

export default reducer