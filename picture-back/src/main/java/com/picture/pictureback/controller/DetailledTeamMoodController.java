package com.picture.pictureback.controller;

import com.picture.pictureback.domain.DetailledTeamMood;
import com.picture.pictureback.domain.TeamMood;
import com.picture.pictureback.repository.DetailledTeamMoodRepository;
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
@RequestMapping("api/detailledTeamMood")
public class DetailledTeamMoodController {

    @Autowired
    private DetailledTeamMoodRepository detailledTeamMoodRepository;


    @RequestMapping(method = RequestMethod.GET)
    public List<DetailledTeamMood> getAll(){
        return detailledTeamMoodRepository.findAll();
    }


}
