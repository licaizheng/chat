package com.example.chat;

public class Friend {
    private String family;
    private String otherName;
    private String desc;


    public String getFamily() {
        return family;
    }
    public void setFamily(String family) {
        this.family = family;
    }
    public String getOtherName() {
        return otherName;
    }
    public void setOtherName(String otherName) {
        this.otherName = otherName;
    }
    public String getDesc() {
        return desc;
    }
    public void setDesc(String desc) {
        this.desc = desc;
    }

    @Override
    public String toString() {
        return "Friend [family=" + family + ", otherName=" + otherName
                + ", desc=" + desc + "]";
    }

}