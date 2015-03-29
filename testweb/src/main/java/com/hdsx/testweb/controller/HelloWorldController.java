package com.hdsx.testweb.controller;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hdsx.testweb.service.HelloWordService;

@RestController
@Scope(value = "prototype")
public class HelloWorldController {

	@Resource
	private HelloWordService HelloWordService;

	// "text/html;charset=UTF-8"
	// "application/json;charset=UTF-8"
	@RequestMapping(value = "/helloWorld/1/{type}/{name}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public String helloWorld(@PathVariable String type,
			@PathVariable String name) {
		return HelloWordService.getHelloword(type, name);
	}

}
