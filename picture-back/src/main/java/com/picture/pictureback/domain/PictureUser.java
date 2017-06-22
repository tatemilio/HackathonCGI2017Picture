package com.picture.pictureback.domain;

import org.springframework.boot.actuate.endpoint.jmx.DataEndpointMBean;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * Created by milaveaud on 22/06/2017.
 */


@Entity
public class PictureUser {

    public enum PictureProfile{
        EXPEDITION,
        ADVENTURE,
        FRIENDS
    }

    public enum JobService{
        LOG,
        ADV,
        COMPTA,
        WEB,
        DESIGN,
        SALES,
        COM
    }

    public enum PictureSite{
        CLERMONT,
        ANNECY
    }

    @GeneratedValue
    @Id
    private Long id;

    private String firstName;

    private String lastName;

    private Date birthday;

    private Date jobBirthday;

    private PictureProfile pictureProfile;

    private PictureSite pictureSite;

    private JobService jobService;

    private String avatar;

    private String favoriteOutfit;

    private String job;


    @OneToMany(targetEntity = Mood.class, mappedBy = "pictureUser", cascade = CascadeType.ALL)
    private List<Mood> userMood;

    @OneToMany(targetEntity = Poll.class, mappedBy = "pollAuthor", cascade = CascadeType.ALL)
    private List<Poll> userPoll;

    @OneToMany(targetEntity = PollFeedback.class, mappedBy = "pollVoter", cascade = CascadeType.ALL)
    private List<PollFeedback> userPollFeedback;

    @Column(columnDefinition = "TEXT")
    private String aboutMe;

    private String hobby;

    public PictureUser(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public PictureProfile getPictureProfile() {
        return pictureProfile;
    }

    public void setPictureProfile(PictureProfile pictureProfile) {
        this.pictureProfile = pictureProfile;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Date getJobBirthday() {
        return jobBirthday;
    }

    public void setJobBirthday(Date jobBirthday) {
        this.jobBirthday = jobBirthday;
    }

    public String getFavoriteOutfit() {
        return favoriteOutfit;
    }

    public void setFavoriteOutfit(String favoriteOutfit) {
        this.favoriteOutfit = favoriteOutfit;
    }

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public PictureSite getPictureSite() {
        return pictureSite;
    }

    public void setPictureSite(PictureSite pictureSite) {
        this.pictureSite = pictureSite;
    }

    public JobService getJobService() {
        return jobService;
    }

    public void setJobService(JobService jobService) {
        this.jobService = jobService;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public List<Mood> getUserMood() {
        return userMood;
    }

    public void setUserMood(List<Mood> moods) {
        this.userMood = moods;
    }

    public List<Poll> getUserPoll() {
        return userPoll;
    }

    public void setUserPoll(List<Poll> userPoll) {
        this.userPoll = userPoll;
    }

    public List<PollFeedback> getUserPollFeedback() {
        return userPollFeedback;
    }

    public void setUserPollFeedback(List<PollFeedback> userPollFeedback) {
        this.userPollFeedback = userPollFeedback;
    }


}
