package com.picture.pictureback.controller;

import com.picture.pictureback.domain.Poll;
import com.picture.pictureback.repository.IdeaRepository;
import com.picture.pictureback.repository.TeamMoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by milaveaud on 22/06/2017.
 */
@RestController
@RequestMapping("api/teamMood")
public class TeamMoodController {

    @Autowired
    private TeamMoodRepository teamMoodRepository;


    @RequestMapping(method = RequestMethod.GET)
    public Long getAll(){
        return teamMoodRepository.count();
    }


}
