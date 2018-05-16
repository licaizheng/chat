package com.example.chat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@SpringBootApplication
@RestController
@RequestMapping(value = "/User")
public class ChatApplication {

	@RequestMapping("/index")

	public Map<String, Object> home() {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello World");
		return model;
	}

	/**
	 * 保存朋友
	 */
	@RequestMapping("/saveStudent")
	@ResponseBody
	public void saveStudent(@RequestBody StudendAndFriend studendAndFriend){
		int age=studendAndFriend.getAge();
		System.out.println("接收参数friends--->> " + age);
		System.out.println("接收参数friends--->> " + studendAndFriend);
	}
//	@RequestMapping(value = "/save",method = RequestMethod.POST)
//	@ResponseBody
//	public Map<String, String> saveUser( @RequestParam(value = "name", required = true) String name,
//										@RequestParam(value = "address", required = true) String address) {
////		HttpServletRequest request = (HttpServletRequest) servletRequest;
////		HttpServletResponse response = (HttpServletResponse) servletResponse;
//		String s=name;
//		String t=address;
//		Map<String, String> model = new HashMap<String, String>();
//		model.put("id", s);
//		return model;
//	}
	public static void main(String[] args) {
		SpringApplication.run(ChatApplication.class, args);
	}
}
