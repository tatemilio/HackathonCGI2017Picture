package com.picture.pictureback.domain;


import com.sun.xml.internal.bind.v2.model.core.ID;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

import java.io.Serializable;

/**
 * Created by milaveaud on 23/06/2017.
 */
public abstract class AbstractModel<ID>implements Serializable {

    @Override
    public String toString() {
        return ReflectionToStringBuilder.toString(this);
    }

    /**
     * Method used to get an explicit name for an entity
     * @return
     */
    public abstract String getExplicitName();

    /**
     * Method used to get the Entity ID
     * @return the entity ID
     */
    public abstract ID getId();

    /**
     * Default equals
     * @param o
     * @return
     */
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AbstractModel model = (AbstractModel) o;

        return getId() != null ? getId().equals(model.getId()) : model.getId() == null;

    }
}