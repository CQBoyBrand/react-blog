/**
 * Created By brand On 2018/1/18
 */
import {getData,postData} from "../config/xhrConfig"

export const getFrontArtList =(data)=> postData("/getArtList",data)//获取文章列表
export const getTags =(data)=> postData("/getTags",data)//获取标签
export const getHotArticleList =(data)=> getData("/getHotArtList",data)//获取热门文章
export const getArticleDate =(data)=> getData("/getArticleDate",data)//获取日期列表
export const getArtDetail =(data)=> postData("/getArtDetail",data)//获取文章详情
export const getArtListByTagId =(data)=> postData("/getArtListByTagId",data)//根据标签获取文章列表
export const getArticleListByDate =(data)=> postData("/getArticleListByDate",data)//根据日期获取文章列表
export const addComment =(data)=> postData("/addComment",data)//新增评论
export const getWebLink =(data)=> postData("/getWebLink",data)//获取友情
export const getUserInfo =(data)=> postData("/getUserInfo",data)//获取站长信息





