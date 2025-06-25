package com.circle.coders.controller;

import com.circle.coders.entity.Resource;
import com.circle.coders.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("resource")
public class ResourceController {
    @Autowired
    private ResourceService resourceService;

    @PostMapping("/add")
    public Resource addResource(@RequestBody Resource resource) {
        return resourceService.addResource(resource);
    }

    @GetMapping("/find-all")
    public List<Resource> getAllResources() {
        return resourceService.getAllResources();
    }

    @GetMapping("/find-by-review/{reviewId}")
    public List<Resource> getResourcesByPost(@PathVariable Long reviewId) {
        return resourceService.getResourcesByRevieweId(reviewId);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteResource(@PathVariable Long id) {
        resourceService.deleteResource(id);
    }

    @PutMapping("/update")
    public Resource updateResource(@RequestBody Resource resource) {
        return resourceService.updateResource(resource);
    }
}
