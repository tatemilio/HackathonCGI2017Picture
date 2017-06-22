package com.picture.pictureback.repository;

import com.picture.pictureback.domain.Mood;
import com.picture.pictureback.domain.Poll;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface MoodRepository extends CrudRepository<Mood, Long> {

}