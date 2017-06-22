package com.picture.pictureback.controller;

import com.picture.pictureback.domain.Idea;
import com.picture.pictureback.domain.News;
import com.picture.pictureback.repository.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by milaveaud on 22/06/2017.
 */
@RestController
@RequestMapping("/idea")
public class IdeaController {

    @Autowired
    private IdeaRepository ideaRepository;


    @RequestMapping(method = RequestMethod.GET)
    public List<Idea> getAll(){
        return ideaRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Idea get(@PathVariable Long id) {
        return ideaRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Idea add(@RequestBody Idea idea) {
        idea.setId(null);
        return ideaRepository.saveAndFlush(idea);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Idea update(@RequestBody Idea idea, @PathVariable Long id) {
        idea.setId(id);
        return ideaRepository.saveAndFlush(idea);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        ideaRepository.delete(id);
    }


}

