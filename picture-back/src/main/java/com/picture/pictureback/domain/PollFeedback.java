package com.picture.pictureback.domain;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by dutrevisp on 22/06/2017.
 */
@Entity
public class PollFeedback {

    @GeneratedValue
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pictureUserId")
    PictureUser pollVoter;

    @ManyToOne
    @JoinColumn(name = "pollId")
    Poll poll;

    private Date feedbackDate;

    private int feedbackRate;

    private String comment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PictureUser getPollVoter() {
        return pollVoter;
    }

    public void setPollVoter(PictureUser pollVoter) {
        this.pollVoter = pollVoter;
    }

    public Poll getPoll() {
        return poll;
    }

    public void setPoll(Poll poll) {
        this.poll = poll;
    }

    public Date getFeedbackDate() {
        return feedbackDate;
    }

    public void setFeedbackDate(Date feedbackDate) {
        this.feedbackDate = feedbackDate;
    }

    public int getFeedbackRate() {
        return feedbackRate;
    }

    public void setFeedbackRate(int feedbackRate) {
        this.feedbackRate = feedbackRate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

}
