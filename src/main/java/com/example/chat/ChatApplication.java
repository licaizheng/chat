package com.example.chat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

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
	@RequestMapping(value = "/save",method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> saveUser(@RequestParam(value = "name", required = true) String name,
										@RequestParam(value = "address", required = true) String address) {
		String s=name;
		String t=address;
		Map<String, String> model = new HashMap<String, String>();
		model.put("id", s);
		return model;
	}
	public static void main(String[] args) {
		SpringApplication.run(ChatApplication.class, args);
	}
}
