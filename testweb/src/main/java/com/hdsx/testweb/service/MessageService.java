package com.hdsx.testweb.service;

import java.util.List;

import com.hdsx.testweb.bean.MessageBean;

/**
 * 消息通知service接口
 * 
 * @author cuipengfei
 *
 */
public interface MessageService {

	/**
	 * 根据城市名称模糊查询总记录数，为分页使用
	 * 
	 * @param city
	 * @return
	 */
	long getMessagePageCount(String city);

	/**
	 * 根据城市名称模糊查询分页集合
	 * 
	 * @param city
	 * @param skip
	 * @param limit
	 * @return
	 */
	List<MessageBean> getMessagePage(String city, int skip, int limit);
}
