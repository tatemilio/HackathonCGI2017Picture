package com.picture.pictureback.repository;

import com.picture.pictureback.domain.PollFeedback;
import com.picture.pictureback.domain.PollOption;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface PollOptionRepository extends CrudRepository<PollOption, Long> {

}