package com.picture.pictureback.repository;

import com.picture.pictureback.domain.Mood;
import com.picture.pictureback.domain.Poll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface MoodRepository extends JpaRepository<Mood, Long> {

}