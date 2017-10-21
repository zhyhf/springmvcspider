/*
 * File Name: UserController.java
 * Copyright: Copyright 2016-2016 hdu All Rights Reserved.

 * Description:
 * Author: Pi Chen
 * Create Date: 2016年5月23日

 * Modifier: Pi Chen
 * Modify Date: 2016年5月23日
 * Bugzilla Id:
 * Modify Content:
 */

package com.gs.spider.controller.template;

import com.gs.spider.common.base.BaseController;
import com.gs.spider.model.commons.SpiderInfo;
import com.gs.spider.model.utils.ResultBundle;
import com.gs.spider.service.commons.spiderinfo.SpiderInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author Pi Chen
 * @version webbf V1.0.0, 2016年5月23日
 * @see
 * @since webbf V1.0.0
 */
@RestController
@RequestMapping(value = "/template")
public class TemplateController_bak extends BaseController
{
//    @Autowired
//    private IUserService userService;
    @Autowired
    private SpiderInfoService spiderInfoService;

    /**
     * 存储模板
     *ResponseEntity<List<Template>>
     * @param spiderInfo 使用json格式进行序列化的spiderinfo
     * @return 模板id
     */
    @RequestMapping(value = "save",method = RequestMethod.POST, produces = "application/json; charset=utf-8")
    public ResponseEntity<ResultBundle<String>> saveTemplate(@RequestBody SpiderInfo spiderInfo, UriComponentsBuilder ucb)
    {
        logger.debug("=============spiderInfo333333======:"+"\r\n"+

                " id:"+spiderInfo.getId()+"\r\n"+
                " siteName:"+spiderInfo.getSiteName()+"\r\n"+
                " domain:"+spiderInfo.getDomain()+"\r\n"+
                " contentReg:"+spiderInfo.getContentReg()+"\r\n"+
                " contentXPath:"+spiderInfo.getContentXPath()+"\r\n"+

                " titleReg:"+spiderInfo.getTitleReg()+"\r\n"+
                " titleXPath:"+spiderInfo.getTitleXPath()+"\r\n"+
                " categoryReg:"+spiderInfo.getCategoryReg()+"\r\n"+
                " categoryXPath:"+spiderInfo.getCategoryXPath()+"\r\n"+
                " defaultCategory:"+spiderInfo.getDefaultCategory()+"\r\n"+

                " urlReg:"+spiderInfo.getUrlReg()+"\r\n"+
                " charset:"+spiderInfo.getCharset()+"\r\n"+
                " publishTimeXPath:"+spiderInfo.getPublishTimeXPath()+"\r\n"+
                " publishTimeReg:"+spiderInfo.getPublishTimeReg()+"\r\n"+
                " publishTimeFormat:"+spiderInfo.getPublishTimeFormat()+"\r\n"+

                " lang:"+spiderInfo.getLang()+"\r\n"+
                " country:"+spiderInfo.getCountry()+"\r\n"+
                " userAgent:"+spiderInfo.getUserAgent()+"\r\n"+
                " proxyHost:"+spiderInfo.getProxyHost()+"\r\n"+
                " proxyPort:"+spiderInfo.getProxyPort()+"\r\n"+

                " proxyUsername:"+spiderInfo.getProxyUsername()+"\r\n"+
                " proxyPassword:"+spiderInfo.getProxyPassword()+"\r\n"+
                " thread:"+spiderInfo.getThread()+"\r\n"+
                " retry:"+spiderInfo.getRetry()+"\r\n"+
                " sleep:"+spiderInfo.getSleep()+"\r\n"+

                " maxPageGather:"+spiderInfo.getMaxPageGather()+"\r\n"+
                " timeout:"+spiderInfo.getTimeout()+"\r\n"+
                " priority:"+spiderInfo.getPriority()+"\r\n"+
                " startURL:"+spiderInfo.getStartURL()+"\r\n"+
                " callbackURL:"+spiderInfo.getCallbackURL()+"\r\n"+

                " gatherFirstPage:"+spiderInfo.isGatherFirstPage()+"\r\n"+
                " needTitle:"+spiderInfo.isNeedTitle()+"\r\n"+
                " needContent:"+spiderInfo.isNeedContent()+"\r\n"+
                " needPublishTime:"+spiderInfo.isNeedPublishTime()+"\r\n"+
                " doNLP:"+spiderInfo.isDoNLP()+"\r\n"+
                " saveCapture:"+spiderInfo.isSaveCapture()+"\r\n"+
                " ajaxSite:"+spiderInfo.isAjaxSite()+"\r\n"+
                " autoDetectPublishDate:"+spiderInfo.isAutoDetectPublishDate()
        );

        ResultBundle<String> resultBundle=spiderInfoService.index(spiderInfo);
        //logger.debug(resultBundle.getTraceId());
        return new ResponseEntity<ResultBundle<String>>(resultBundle, HttpStatus.OK);
    }

}
