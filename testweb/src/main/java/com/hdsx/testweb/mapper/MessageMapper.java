package com.hdsx.testweb.mapper;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.hdsx.testweb.bean.MessageBean;

/**
 * 消息实现接口
 * @author cuipengfei
 *
 */
@Repository
public interface MessageMapper extends MongoRepository<MessageBean, ObjectId> {

	MessageBean findByXzqhdm(String xzqhdm);
	
	@Query()
	List<MessageBean> queryPage(String city,int start,int limit);
	
	@Query("{'city' : city} ( city as regex)")
	int queryCount(String city);
	
	
}
