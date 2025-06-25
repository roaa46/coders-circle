package com.circle.coders.repository;

import com.circle.coders.entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepo extends JpaRepository<Resource, Long> {
    List<Resource> findByReviewId(Long ReviewId);
}
