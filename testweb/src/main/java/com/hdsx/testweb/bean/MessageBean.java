package com.hdsx.testweb.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 
 * @author cuipengfei
 *
 */
@Document(collection = "t_taxi_notice")
public class MessageBean {

	/**
	 * 行政区划代码
	 */
	@Id
	private String id;
	private String xzqhdm;

	private String city;

	/**
	 * 邮件地址（多个用,分割）
	 */
	private String imail;

	/**
	 * 手机号（多个用,分割）
	 */
	private String phone;

	/**
	 * 管理员邮箱
	 */
	private String adminImail;

	/**
	 * 管理员手机号
	 */
	private String adminPhone;

	/**
	 * 状态：0-不发送提醒，1-发送提醒
	 */
	private String state;

	private String message;

	@Override
	public String toString() {
		return "MessageBean [xzqhdm=" + xzqhdm + ", city=" + city + ", imail="
				+ imail + ", phone=" + phone + ", adminImail=" + adminImail
				+ ", adminPhone=" + adminPhone + ", state=" + state
				+ ", message=" + message + "]";
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getXzqhdm() {
		return xzqhdm;
	}

	public void setXzqhdm(String xzqhdm) {
		this.xzqhdm = xzqhdm;
	}

	public String getImail() {
		return imail;
	}

	public void setImail(String imail) {
		this.imail = imail;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAdminImail() {
		return adminImail;
	}

	public void setAdminImail(String adminImail) {
		this.adminImail = adminImail;
	}

	public String getAdminPhone() {
		return adminPhone;
	}

	public void setAdminPhone(String adminPhone) {
		this.adminPhone = adminPhone;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

}
