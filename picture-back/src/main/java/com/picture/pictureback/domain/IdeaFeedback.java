package com.picture.pictureback.domain;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by dutrevisp on 22/06/2017.
 */
@Entity
public class IdeaFeedback {

    @GeneratedValue
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pictureUserId")
    PictureUser ideaCommenter;

    @ManyToOne
    @JoinColumn(name = "ideaId")
    Idea idea;

    private Date feedbackDate;

    @Column(columnDefinition="TEXT")
    private String comment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PictureUser getIdeaCommenter() {
        return ideaCommenter;
    }

    public void setIdeaCommenter(PictureUser ideaCommenter) {
        this.ideaCommenter = ideaCommenter;
    }

    public Idea getIdea() {
        return idea;
    }

    public void setIdea(Idea idea) {
        this.idea = idea;
    }

    public Date getFeedbackDate() {
        return feedbackDate;
    }

    public void setFeedbackDate(Date feedbackDate) {
        this.feedbackDate = feedbackDate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
