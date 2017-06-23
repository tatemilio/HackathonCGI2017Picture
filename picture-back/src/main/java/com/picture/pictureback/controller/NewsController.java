package com.picture.pictureback.controller;

import com.picture.pictureback.config.Views;
import com.picture.pictureback.domain.News;
import com.picture.pictureback.domain.Poll;
import com.picture.pictureback.repository.NewsRepository;
import com.picture.pictureback.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

/**
 * Created by milaveaud on 22/06/2017.
 */
@RestController
@RequestMapping("api/news")
public class NewsController {

    @Autowired
    private NewsRepository newsRepository;

    @RequestMapping(method = RequestMethod.GET)
    @JsonView(Views.List.class)
    public List<News> getAll(){
        return newsRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public News get(@PathVariable Long id) {
        return newsRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public News add(@RequestBody News news) {
        news.setId(null);
        return newsRepository.saveAndFlush(news);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public News update(@RequestBody News news, @PathVariable Long id) {
        news.setId(id);
        return newsRepository.saveAndFlush(news);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        newsRepository.delete(id);
    }

}


