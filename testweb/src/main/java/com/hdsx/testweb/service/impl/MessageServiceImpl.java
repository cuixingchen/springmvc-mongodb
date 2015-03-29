package com.hdsx.testweb.service.impl;

import javax.annotation.Resource;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import com.hdsx.testweb.bean.MessageBean;
import com.hdsx.testweb.mapper.MessageMapper;
import com.hdsx.testweb.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService {

	@Resource
	MessageMapper messageMapper;
	
	@Override
	public MessageBean getMessageByXzqhdm(String xzqhdm) {
		System.out.println("xzqhdm:"+xzqhdm);
//		return messageMapper.findOne(new ObjectId(xzqhdm));
		return messageMapper.findByXzqhdm(xzqhdm);
	}

}
