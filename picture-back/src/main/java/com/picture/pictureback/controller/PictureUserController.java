package com.picture.pictureback.controller;

import com.picture.pictureback.domain.PictureUser;

import com.picture.pictureback.repository.PictureUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by milaveaud on 22/06/2017.
 */

@RestController
@RequestMapping("/pictureUser")
public class PictureUserController {

    @Autowired
    private PictureUserRepository pictureUserRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<PictureUser> getAll(){
        return (List<PictureUser>) pictureUserRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public PictureUser get(@PathVariable Long id) {
        return pictureUserRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public PictureUser add(@RequestBody PictureUser pictureUser) {
        pictureUser.setId(null);
        return pictureUserRepository.save(pictureUser);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public PictureUser update(@RequestBody PictureUser pictureUser, @PathVariable Long id) {
        pictureUser.setId(id);
        return pictureUserRepository.save(pictureUser);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        pictureUserRepository.delete(id);
    }
}
