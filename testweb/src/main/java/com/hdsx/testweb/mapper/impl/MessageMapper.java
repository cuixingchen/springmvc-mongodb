package com.hdsx.testweb.mapper.impl;

import java.util.List;
import java.util.regex.Pattern;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.hdsx.testweb.bean.MessageBean;
import com.hdsx.testweb.mapper.MongodbMapper;

/**
 * 消息通知dao
 * 
 * @author cuipengfei
 *
 */
@Repository
public class MessageMapper extends MongodbMapper<MessageBean> {

	@Override
	protected Class<MessageBean> getEntityClass() {
		return MessageBean.class;
	}

	/**
	 * 根据城市名模糊查询集合总数，为分页使用
	 * 
	 * @param city
	 * @return
	 */
	public long queryMessagePageCount(String city) {
		Query query = new Query();
		query.addCriteria(new Criteria("city").regex(Pattern.compile("^.*"
				+ city + ".*$", Pattern.CASE_INSENSITIVE)));
		return this.queryPageCount(query);
	}

	/**
	 * 根据城市名称模糊查询分页集合
	 * 
	 * @param city
	 * @param skip
	 * @param limit
	 * @return
	 */
	public List<MessageBean> queryMessagePage(String city, int skip, int limit) {
		Query query = new Query();
		query.addCriteria(new Criteria("city").regex(Pattern.compile("^.*"
				+ city + ".*$", Pattern.CASE_INSENSITIVE)));
		return this.queryPage(query, skip, limit);
	}

}
