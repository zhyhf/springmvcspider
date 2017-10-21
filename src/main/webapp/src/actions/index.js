import React from 'react'
import messageActions from './common/messageActions'
import tableActions from './tables/tableActions'
import listActions from './spider/listActions'
import editSpiderInfoActions from './spider/editSpiderInfoActions'

//common

export const showInfo=messageActions.actions.showInfo;
export const hideInfo=messageActions.actions.hideInfo;

//tables
export const fetchPosts=tableActions.actions.fetchPosts;
export const getTableDatas=tableActions.actions.getTableDatas;
export const showModel=tableActions.actions.showModel;

//all list
export const getListDatas=listActions.actions.getListDatas;
export const showRecord=listActions.actions.showRecord;
export const getAllTemplates=listActions.actions.getAllTemplates;
export const deleteTemplateById=listActions.actions.deleteTemplateById;

//editSpiderInfo
export const saveFormData=editSpiderInfoActions.actions.saveFormData;
export const showAllSeting=editSpiderInfoActions.actions.showAllSeting;
