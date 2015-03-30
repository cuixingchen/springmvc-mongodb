package com.hdsx.testweb.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hdsx.testweb.bean.MessageBean;
import com.hdsx.testweb.bean.PageBean;
import com.hdsx.testweb.service.MessageService;

@RestController
@Scope(value = "prototype")
public class MessageController {

	@Resource
	MessageService messageService;

	@RequestMapping(value = "/message/1", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	public PageBean<MessageBean> getMessagePage(@RequestParam String city,
			@RequestParam(value = "page") int page,
			@RequestParam(value = "rows") int limit) {
		PageBean<MessageBean> pageBean = new PageBean<>(page, limit);
		int count = (int) messageService.getMessagePageCount(city);
		pageBean.setTotal(count);
		List<MessageBean> resultList = messageService.getMessagePage(city,
				pageBean.getBegin(), limit);
		pageBean.setRows(resultList);
		return pageBean;
	}
}
