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
}
