package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.RatingType;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingTypeRepository extends PagingAndSortingRepository<RatingType, Integer> {

}
