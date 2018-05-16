package com.example.chat;

import java.util.List;

/**
 * 接收参数包装类
 * @author chengyu
 *
 */
public class StudendAndFriend {
    private int id;
    private String name;
    private int age;
    private List<Friend> friends;


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public List<Friend> getFriends() {
        return friends;
    }
    public void setFriends(List<Friend> friends) {
        this.friends = friends;
    }


}