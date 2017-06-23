package com.picture.pictureback.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.picture.pictureback.config.Views;
import com.picture.pictureback.domain.*;
import com.picture.pictureback.repository.PictureUserRepository;
import com.picture.pictureback.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by milaveaud on 22/06/2017.
 */
@RestController
@RequestMapping("api/pictureUser/{pictureUserId}/poll")
@CrossOrigin
public class PollController {

    @Autowired
    private PollRepository pollRepository;

    @Autowired
    private PictureUserRepository pictureUserRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Poll> getAll(){
        return pollRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Poll get(@PathVariable Long id) {
        return pollRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    @JsonView(Views.Detail.class)
    public Poll add(@PathVariable long pictureUserId, @RequestBody Poll poll) {
        List<PollOption> pollOptions=new ArrayList<PollOption>();

        poll.setId(null);
        PictureUser pictureUser = pictureUserRepository.findOne(pictureUserId);
        poll.setPollAuthor(pictureUser);
        poll.setTitle(poll.getTitle());
        poll.setSummary(poll.getSummary());
        poll.setOpeningDate(new Date());

        pollRepository.saveAndFlush(poll);

        List<String> titles = new ArrayList<String>();
        titles.add("Dans ton cul");
        titles.add("A Vegas!!!");
        titles.add("Au calme, à Val d'Isère");

        for(int i=0; i<3; i++){
            PollOption option = new PollOption();
            option.setPoll(poll);
            option.setTitle(titles.get(i));
            pollOptions.add(option);
        }
        poll.setPollOption(pollOptions);

        return pollRepository.saveAndFlush(poll);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Poll update(@RequestBody Poll poll, @PathVariable Long id) {
        poll.setId(id);
        return pollRepository.saveAndFlush(poll);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        pollRepository.delete(id);
    }



}


