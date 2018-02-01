/**
 * Created By brand On 2018/1/18
 */
const BASE_UEL = 'http://localhost:3100'

export const getArticleList = BASE_UEL+'/getArtList'//获取文章列表
export const getTags = BASE_UEL+'/getTags'//获取标签
export const getHotArticleList = BASE_UEL+'/getHotArtList'//获取热门文章
export const getUserInfo = BASE_UEL+'/getUserInfo'//获取站长信息
export const getArtDetail = BASE_UEL+'/getArtDetail'//获取文章详情
export const getArtListByTagId = BASE_UEL+'/getArtListByTagId'//根据标签获取文章列表
export const getArticleDate = BASE_UEL+'/getArticleDate'//获取日期列表
export const getArticleListByDate = BASE_UEL+'/getArticleListByDate'//根据日期获取文章列表
export const getWebLink = BASE_UEL+'/getWebLink'//获取友情

export const addComment = BASE_UEL+'/addComment'//新增评论




