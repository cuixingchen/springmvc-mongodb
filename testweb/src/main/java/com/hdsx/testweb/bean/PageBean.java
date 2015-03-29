package com.hdsx.testweb.bean;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 
 * 
 * 
 * @param <T>
 */
public class PageBean<T> implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 总记录数
	 */
	private int total;
	/**
	 * 每页数据
	 */
	private List<T> rows;

	private Object setting;

	private int limit;
	private int start;
	private int begin;
	private int end;
	private Map<String, Object> parameter;

	public static int SUCESSCODE = 200;
	public static int FAILCODE = 201;
	int state = SUCESSCODE;
	
	public PageBean() {
	}

	public PageBean(int start, int limit) {
		if (start < 1) {
			start = 1;
		}
		if (limit < 1) {
			limit = 10;
		}
		this.limit = limit;
		this.start = start;
		this.begin = (start - 1) * limit;
		this.end = start * limit;
		setParameter();
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public List<T> getRows() {
		return rows;
	}

	public void setRows(List<T> rows) {
		this.rows = rows;
	}

	public int getBegin() {
		return begin;
	}

	public void setBegin(int begin) {
		this.begin = begin;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public Object getSetting() {
		return setting;
	}

	public void setSetting(Object setting) {
		this.setting = setting;
	}

	public void setParameter() {
		this.parameter = new HashMap<String, Object>();
		this.parameter.put("begin", begin);
		this.parameter.put("end", end);
	}

	public Map<String, Object> getParameter() {
		return parameter;
	}
}
