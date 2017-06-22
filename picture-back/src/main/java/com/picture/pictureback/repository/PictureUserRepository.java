package com.picture.pictureback.repository;

import com.picture.pictureback.domain.PictureUser;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface PictureUserRepository extends CrudRepository<PictureUser, Long> {

        public PictureUser findByUsername(String username);

}