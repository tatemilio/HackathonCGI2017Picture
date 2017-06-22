package com.picture.pictureback.repository;

import com.picture.pictureback.domain.Poll;
import com.picture.pictureback.domain.PollFeedback;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by milaveaud on 22/06/2017.
 */
public interface PollFeedbackRepository extends CrudRepository<PollFeedback, Long> {

}