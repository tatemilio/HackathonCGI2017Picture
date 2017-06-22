package com.picture.pictureback.repository;

import com.picture.pictureback.domain.Idea;
import com.picture.pictureback.domain.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface NewsRepository extends JpaRepository<News, Long> {

}