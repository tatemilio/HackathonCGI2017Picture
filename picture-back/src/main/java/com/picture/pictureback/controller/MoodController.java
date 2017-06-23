package com.picture.pictureback.controller;

import com.picture.pictureback.domain.Mood;
import com.picture.pictureback.domain.PictureUser;
import com.picture.pictureback.domain.Poll;
import com.picture.pictureback.repository.MoodRepository;
import com.picture.pictureback.repository.PictureUserRepository;
import com.picture.pictureback.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

/**
 * Created by milaveaud on 22/06/2017.
 */
@RestController
@RequestMapping("api/mood")
public class MoodController {

    @Autowired
    private MoodRepository moodRepository;

    @Autowired
    private PictureUserRepository pictureUserRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Mood> getAll(){
        return moodRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Mood get(@PathVariable Long id) {
        return moodRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Mood add(@RequestBody Mood mood) {
        mood.setId(null);
        return moodRepository.saveAndFlush(mood);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Mood update(@RequestBody Mood mood, @PathVariable Long id) {
        mood.setId(id);
        return moodRepository.saveAndFlush(mood);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        moodRepository.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Mood addPictureUserMood(@RequestBody Mood mood, HttpServletRequest request) {
        mood.setId(null);
        PictureUser pictureUser = (PictureUser) request.getAttribute("user");
        mood.setPictureUser(pictureUser);
        mood.setMoodDate(new Date());
        mood.setMoodValue(mood.getMoodValue());
        return moodRepository.saveAndFlush(mood);
    }



}


