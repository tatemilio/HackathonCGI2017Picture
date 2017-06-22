package com.picture.pictureback.domain;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by dutrevisp on 22/06/2017.
 */
@Entity
public class NewsFeedback {

    @GeneratedValue
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pictureUserId")
    PictureUser newsCommenter;

    @ManyToOne
    @JoinColumn(name = "newsId")
    News news;

    private Date feedbackDate;

    @Column(columnDefinition="TEXT")
    private String comment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PictureUser getNewsCommenter() {
        return newsCommenter;
    }

    public void setNewsCommenter(PictureUser newsCommenter) {
        this.newsCommenter = newsCommenter;
    }

    public News getNews() {
        return news;
    }

    public void setNews(News news) {
        this.news = news;
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
