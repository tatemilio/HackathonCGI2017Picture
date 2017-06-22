package com.picture.pictureback.domain;

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
    PictureUser pictureUser;


    int moodValue;

    public PictureUser getPictureUser() {
        return pictureUser;
    }

    public void setPictureUser(PictureUser pictureUser) {
        this.pictureUser = pictureUser;
    }




}
