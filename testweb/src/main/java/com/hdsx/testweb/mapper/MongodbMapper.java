package com.hdsx.testweb.mapper;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

/**
 * mongodb查询工具类
 * 
 * @author cuipengfei
 *
 * @param <T>
 */
public abstract class MongodbMapper<T> {

	/**
	 * 持久层操作使用MongoTemplate类操作.实现将对象与Mongodb库中的数据交互操作
	 */
	@Resource
	private MongoTemplate mongoTemplate;

	/**
	 * 反射类型
	 * 
	 * @return
	 */
	protected abstract Class<T> getEntityClass();

	/**
	 * 添加一条数据
	 * 
	 * @param t
	 */
	protected void sava(T t) {
		this.mongoTemplate.save(t);
	}

	/**
	 * 根据条件查询单个实体
	 * 
	 * @param query
	 *            查询条件
	 * @return 单条记录
	 */
	protected T queryOne(Query query) {
		return this.mongoTemplate.findOne(query, this.getEntityClass());
	}

	/**
	 * 根据查询条件查询集合
	 * 
	 * @param query
	 *            查询条件
	 * @return 满足条件的集合
	 */
	protected List<T> queryList(Query query) {
		return this.mongoTemplate.find(query, this.getEntityClass());
	}

	/**
	 * 根据条件查询库中符合记录的总数,为分页查询服务
	 * 
	 * @param query
	 *            查询条件
	 * @return 满足条件的记录总数
	 */
	protected long queryPageCount(Query query) {
		return this.mongoTemplate.count(query, this.getEntityClass());
	}

	/**
	 * 通过条件进行分页查询
	 * 
	 * @param query
	 *            查询条件
	 * @param skip
	 *            查询起始位置
	 * @param limit
	 *            查询大小
	 * @return 满足条件的集合
	 */
	protected List<T> queryPage(Query query, int skip, int limit) {
		query.skip(skip);
		query.limit(limit);
		return this.mongoTemplate.find(query, this.getEntityClass());
	}

}
