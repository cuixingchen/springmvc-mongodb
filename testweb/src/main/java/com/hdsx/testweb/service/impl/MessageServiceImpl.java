package com.hdsx.testweb.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hdsx.testweb.bean.MessageBean;
import com.hdsx.testweb.mapper.impl.MessageMapper;
import com.hdsx.testweb.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService {

	@Resource
	MessageMapper messageMapper;

	@Override
	public long getMessagePageCount(String city) {

		return messageMapper.queryMessagePageCount(city);
	}

	@Override
	public List<MessageBean> getMessagePage(String city, int skip, int limit) {

		return messageMapper.queryMessagePage(city, skip, limit);
	}

}
