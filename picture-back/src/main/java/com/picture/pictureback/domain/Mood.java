package com.picture.pictureback.domain;

import com.fasterxml.jackson.annotation.JsonView;
import com.picture.pictureback.config.Views;
import sun.util.calendar.LocalGregorianCalendar;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by milaveaud on 22/06/2017.
 */

@Entity
public class Mood {

    @GeneratedValue
    @Id
    private Long id;

    Date moodDate;

    @ManyToOne
    @JoinColumn(name = "pictureUserId")
    @JsonView(Views.List.class)
    PictureUser pictureUser;


    int moodValue;

    public PictureUser getPictureUser() {
        return pictureUser;
    }

    public void setPictureUser(PictureUser pictureUser) {
        this.pictureUser = pictureUser;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getMoodDate() {
        return moodDate;
    }

    public void setMoodDate(Date moodDate) {
        this.moodDate = moodDate;
    }

    public int getMoodValue() {
        return moodValue;
    }

    public void setMoodValue(int moodValue) {
        this.moodValue = moodValue;
    }
}
