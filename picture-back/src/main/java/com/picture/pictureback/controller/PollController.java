package com.picture.pictureback.controller;

import com.picture.pictureback.domain.Poll;
import com.picture.pictureback.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by milaveaud on 22/06/2017.
 */
@RestController
@RequestMapping("api/poll")
public class PollController {

    @Autowired
    private PollRepository pollRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Poll> getAll(){
        return pollRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Poll get(@PathVariable Long id) {
        return pollRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Poll add(@RequestBody Poll poll) {
        poll.setId(null);
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


