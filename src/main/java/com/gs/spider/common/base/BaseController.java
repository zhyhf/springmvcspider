/*
 * File Name: BaseController.java
 * Copyright: Copyright 2016-2016 hdu All Rights Reserved.

 * Description:
 * Author: Pi Chen
 * Create Date: 2016年5月23日

 * Modifier: Pi Chen
 * Modify Date: 2016年5月23日
 * Bugzilla Id:
 * Modify Content:
 */
package com.gs.spider.common.base;

import com.google.gson.Gson;
import com.gs.spider.common.log.Logger;
//import org.apache.logging.log4j.LogManager;

/**
 *
 * @author Pi Chen
 * @version webbf V1.0.0, 2016年5月23日
 * @see
 * @since webbf V1.0.0
 */

public class BaseController
{
    public static final String FAILD = "faild";
    public static final String SUCCESS = "success";
    protected static final String MAX_LONG_AS_STRING = "9223372036854775807";
    /**
     * gson是线程安全的
     */
    protected static final Gson gson = new Gson();
    /**
     * 日志
     */
    protected Logger logger = Logger.getLogger(this.getClass());
    //protected    org.apache.logging.log4j.Logger logger = LogManager.getLogger(this.getClass());

}
