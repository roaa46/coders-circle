package com.circle.coders.service;


import com.circle.coders.entity.Resource;
import com.circle.coders.repository.ResourceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResourceService {
    @Autowired
    private ResourceRepo resourceRepo;

    public Resource addResource(Resource resource) {
        return resourceRepo.save(resource);
    }


    public List<Resource> getAllResources() {
        return resourceRepo.findAll();
    }

    public void deleteResource(Long id) {
        resourceRepo.deleteById(id);
    }

    public List<Resource> getResourcesByRevieweId(Long id) {
        return resourceRepo.findByReviewId(id);
    }
    
    public Resource updateResource(Resource resource) {
        Resource current = resourceRepo.findById(resource.getId()).orElseThrow();

        current.setType(resource.getType());
        current.setUrl(resource.getUrl());

        return resourceRepo.save(current);
    }

}
