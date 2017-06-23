package com.picture.pictureback.domain;

import com.fasterxml.jackson.annotation.JsonView;
import com.picture.pictureback.config.Views;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by dutrevisp on 22/06/2017.
 */
@Entity
public class News {

    @GeneratedValue
    @Id
    private Long id;

    private String title;

    @Column(columnDefinition="TEXT")
    private String summary;

    private Date openDate;
    private Date closedDate;

    @ManyToOne
    @JoinColumn(name = "pictureUserId")
    PictureUser ideaAuthor;

    @OneToMany(targetEntity = NewsFeedback.class, mappedBy = "news", cascade = CascadeType.ALL)
    @JsonView({Views.Detail.class, Views.TagDetail.class})
    private List<NewsFeedback> newsFeedback;

    //to be used when a medium such as a video is attached to the news
    private String pathToMedium;

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

    public PictureUser getIdeaAuthor() {
        return ideaAuthor;
    }

    public void setIdeaAuthor(PictureUser ideaAuthor) {
        this.ideaAuthor = ideaAuthor;
    }

    public List<NewsFeedback> getNewsFeedback() {
        return newsFeedback;
    }

    public void setNewsFeedback(List<NewsFeedback> newsFeedback) {
        this.newsFeedback = newsFeedback;
    }

    public String getPathToMedium() {
        return pathToMedium;
    }

    public void setPathToMedium(String pathToMedium) {
        this.pathToMedium = pathToMedium;
    }
}
