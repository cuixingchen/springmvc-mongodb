package com.hdsx.testweb.service.impl;

import org.springframework.stereotype.Service;

import com.hdsx.testweb.service.HelloWordService;

@Service
public class HelloWordServiceImpl implements HelloWordService {

	@Override
	public String getHelloword(String type, String name) {
		System.out.println("type:" + type + ",name:" + name);
		
		return "type:" + type + ",name:" + name;
	}

}
