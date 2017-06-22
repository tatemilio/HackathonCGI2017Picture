package com.picture.pictureback.repository;

import com.picture.pictureback.domain.Poll;
import com.picture.pictureback.domain.TeamMood;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface TeamMoodRepository extends JpaRepository<TeamMood, Long> {

}
