package com.picture.pictureback.repository;

import com.picture.pictureback.domain.DetailledTeamMood;
import com.picture.pictureback.domain.TeamMood;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface DetailledTeamMoodRepository extends JpaRepository<DetailledTeamMood, Long> {

}
