package com.gs.spider;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by dzkan on 2016/3/8.
 */
@Controller
@RequestMapping(value = "/")
public class MainController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "index";
    }
}



