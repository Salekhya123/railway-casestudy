package com.railway.API_Gateway.filter;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;


@Configuration
public class Routefilter extends ZuulFilter {
    private static Logger log = LoggerFactory.getLogger(Routefilter.class);
    @Override
    public String filterType() {
        return "route";
    }
    @Override
    public int filterOrder() {
        return 1;
    }
    @Override
    public boolean shouldFilter() {
        return true;
    }
    @Override
    public Object run() {

        log.info("Inside route filter..");
        return null;
    }
}