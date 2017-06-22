package com.picture.pictureback.controller;

import com.picture.pictureback.domain.Poll;
import com.picture.pictureback.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by milaveaud on 22/06/2017.
 */
@RestController
@RequestMapping("/poll")
public class PollController {

    @Autowired
    private PollRepository pollRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Poll> getAll(){
        return pollRepository.findAll();
    }




}


