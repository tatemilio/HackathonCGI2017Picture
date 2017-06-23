package com.picture.pictureback.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 * Created by milaveaud on 22/06/2017.
 */
@Entity
public class TeamMood {

    @Id
    private Long id;

    private int avgMood;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getAvgMood() {
        return avgMood;
    }

    public void setAvgMood(int avgMood) {
        this.avgMood = avgMood;
    }
}
