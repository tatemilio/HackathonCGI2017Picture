package com.picture.pictureback.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by milaveaud on 22/06/2017.
 */
@Entity
public class DetailledTeamMood {

    @Id
    private Long id;

    private String firstName;
    private String lastName;
    private String nickName;
    private int moodValue;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public int getMoodValue() {
        return moodValue;
    }

    public void setMoodValue(int moodValue) {
        this.moodValue = moodValue;
    }
}
