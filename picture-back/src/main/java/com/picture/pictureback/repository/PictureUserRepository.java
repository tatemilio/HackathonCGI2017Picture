package com.picture.pictureback.repository;

import com.picture.pictureback.domain.PictureUser;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface PictureUserRepository extends JpaRepository<PictureUser, Long> {

}