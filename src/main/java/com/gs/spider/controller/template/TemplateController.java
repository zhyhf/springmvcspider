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
import com.gs.spider.controller.requestModel.ListAllRequest;
import com.gs.spider.model.commons.SpiderInfo;
import com.gs.spider.model.utils.ResultBundle;
import com.gs.spider.model.utils.ResultListBundle;
import com.gs.spider.service.commons.spiderinfo.SpiderInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Collection;

/**
 *
 * @author Pi Chen
 * @version webbf V1.0.0, 2016年5月23日
 * @see
 * @since webbf V1.0.0
 */
@RestController
@RequestMapping(value = "/springmvcspider/template")
public class TemplateController extends BaseController
{
    @Autowired
    private SpiderInfoService spiderInfoService;

    /**
     * 根据id删除网页模板
     *
     * @param id 网页模板id
     * @return 是否删除
     */
    @RequestMapping(value = "deleteById", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public ResponseEntity<ResultBundle<Boolean>> deleteById(String id) {
        return new ResponseEntity<ResultBundle<Boolean>>(spiderInfoService.deleteById(id), HttpStatus.OK);
    }

    /**
     * 列出库中所有爬虫模板
     *
      * @param size 页面容量
      * @param page 页码
      * @return 爬虫模板列表
     */
    @RequestMapping(value = "listAll", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
    @ResponseBody
    public ResponseEntity<Collection<SpiderInfo>>  listAll(@RequestParam(value = "size", required = false, defaultValue = "10") int size, @RequestParam(value = "page", required = false, defaultValue = "1") int page, UriComponentsBuilder ucb) {
        ResultListBundle<SpiderInfo> resultListBundle=spiderInfoService.listAll(size, page);
        return new ResponseEntity<Collection<SpiderInfo>>(resultListBundle.getResultList(), HttpStatus.OK);
    }

    /**
     * 存储模板
     *ResponseEntity<List<Template>>
     * @param spiderInfo 使用json格式进行序列化的spiderinfo
     * @return 模板id
     */
    @RequestMapping(value = "save",method = RequestMethod.POST, produces = "application/json; charset=utf-8")
    public ResponseEntity<ResultBundle<String>> saveTemplate(@RequestBody SpiderInfo spiderInfo, UriComponentsBuilder ucb)
    {
        logger.debug("=============spiderInfo======:"+"\r\n"+

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
//    /**
//     * 列出库中所有爬虫模板
//     *
//     *  @param listAllRequest 使用json格式进行序列化
//     * @return 爬虫模板列表
//     */
//    @RequestMapping(value = "listAll", method = RequestMethod.POST, produces = "application/json; charset=utf-8")
//    @ResponseBody
//    public ResponseEntity<Collection<SpiderInfo>>  listAll(@RequestBody ListAllRequest listAllRequest, UriComponentsBuilder ucb) {
//        ResultListBundle<SpiderInfo> resultListBundle=spiderInfoService.listAll(listAllRequest.getSize(), listAllRequest.getPage());
//        return new ResponseEntity<Collection<SpiderInfo>>(resultListBundle.getResultList(), HttpStatus.OK);
//    }