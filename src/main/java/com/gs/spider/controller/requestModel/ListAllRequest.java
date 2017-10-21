package com.gs.spider.controller.requestModel;

/**
 * Created by Administrator on 2017/10/15.
 */
public class ListAllRequest {
    /**
     * 页面容量
     */
    private int size = 10;

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    /**

     * 页码
     */
    private int page = 1;
}
