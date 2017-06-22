package com.picture.pictureback.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by dutrevisp on 22/06/2017.
 */
@Entity
public class Idea {

    @GeneratedValue
    @Id
    private Long id;

    private String title;

    @Column(columnDefinition="TEXT")
    private String summary;

    private Date openDate;
    private Date closedDate;

    @Column(columnDefinition="TEXT")
    private String conclusion;

    @ManyToOne
    @JoinColumn(name = "pictureUserId")
    PictureUser ideaAuthor;

    @OneToMany(targetEntity = IdeaFeedback.class, mappedBy = "idea", cascade = CascadeType.ALL)
    private List<PollFeedback> ideaFeedback;

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

    public Date getOpenDate() {
        return openDate;
    }

    public void setOpenDate(Date openDate) {
        this.openDate = openDate;
    }

    public Date getClosedDate() {
        return closedDate;
    }

    public void setClosedDate(Date closedDate) {
        this.closedDate = closedDate;
    }

    public String getConclusion() {
        return conclusion;
    }

    public void setConclusion(String conclusion) {
        this.conclusion = conclusion;
    }

    public PictureUser getIdeaAuthor() {
        return ideaAuthor;
    }

    public void setIdeaAuthor(PictureUser ideaAuthor) {
        this.ideaAuthor = ideaAuthor;
    }

    public List<PollFeedback> getIdeaFeedback() {
        return ideaFeedback;
    }

    public void setIdeaFeedback(List<PollFeedback> ideaFeedback) {
        this.ideaFeedback = ideaFeedback;
    }

    public boolean isClosed(){
        return getClosedDate()!=null && (new Date()).after(getClosedDate());
    }

}
