package com.picture.pictureback.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by dutrevisp on 22/06/2017.
 */
@Entity
public class Poll {

    @GeneratedValue
    @Id
    private Long id;

    private String title;
    private String summary;
    private Date openingDate;
    private Date closingDate;

    @ManyToOne
    @JoinColumn(name = "pictureUserId")
    PictureUser pollAuthor;

    @OneToMany(targetEntity = PollFeedback.class, mappedBy = "poll", cascade = CascadeType.ALL)
    private List<PollFeedback> pollFeedback;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Date getOpeningDate() {
        return openingDate;
    }

    public void setOpeningDate(Date openingDate) {
        this.openingDate = openingDate;
    }

    public Date getClosingDate() {
        return closingDate;
    }

    public void setClosingDate(Date closingDate) {
        this.closingDate = closingDate;
    }

    public PictureUser getPollAuthor() {
        return pollAuthor;
    }

    public void setPollAuthor(PictureUser pollAuthor) {
        this.pollAuthor = pollAuthor;
    }

    public List<PollFeedback> getPollFeedback() {
        return pollFeedback;
    }

    public void setPollFeedback(List<PollFeedback> pollFeedback) {
        this.pollFeedback = pollFeedback;
    }
}
