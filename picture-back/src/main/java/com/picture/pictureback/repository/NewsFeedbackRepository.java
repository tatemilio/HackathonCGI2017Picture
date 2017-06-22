package com.picture.pictureback.repository;

import com.picture.pictureback.domain.News;
import com.picture.pictureback.domain.NewsFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface NewsFeedbackRepository extends JpaRepository<NewsFeedback, Long> {

}