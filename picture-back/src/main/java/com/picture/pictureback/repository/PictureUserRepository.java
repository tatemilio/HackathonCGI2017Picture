package com.picture.pictureback.repository;

<<<<<<< refs/remotes/origin/master:picture-back/src/main/java/com/picture/pictureback/repository/PictureUserRepository.java
import com.picture.pictureback.domain.PictureUser;
=======
import org.springframework.data.jpa.repository.JpaRepository;
>>>>>>> Auto stash before rebase of "origin/master":picture-back/src/main/java/com/picture/pictureback/domain/PictureUserRepository.java
import org.springframework.data.repository.CrudRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */

public interface PictureUserRepository extends CrudRepository<PictureUser, Long> {
        PictureUser findByEmail(String email);
}
