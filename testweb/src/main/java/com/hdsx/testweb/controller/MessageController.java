package com.hdsx.testweb.controller;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hdsx.testweb.bean.MessageBean;
import com.hdsx.testweb.service.MessageService;

@RestController
@Scope(value = "prototype")
public class MessageController {

	@Resource
	MessageService messageService;

	@RequestMapping(value = "/message/1/{xzqhdm}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	public MessageBean getMessageByXzqhdm(@PathVariable String xzqhdm) {
		MessageBean bean=messageService.getMessageByXzqhdm(xzqhdm);
		System.out.println(bean.toString());
		return bean;
	}
}
