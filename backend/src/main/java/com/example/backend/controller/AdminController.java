package com.example.backend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.exception.AdminNotFoundException;
import com.example.backend.model.Admin;
import com.example.backend.repository.AdminRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;
    
    @PostMapping("/admin")
    Admin newAdmin (@RequestBody Admin newAdmin)
     {
        return adminRepository.save(newAdmin);
    }
    @GetMapping("/admins")
    List<Admin> getAllAdmins(){
        return adminRepository.findAll();
    }
    @GetMapping("/admin/{id}")
    Admin getAdminById(@PathVariable Long id) {
        return adminRepository.findById(id)
                .orElseThrow(() -> new AdminNotFoundException(id));
    }
    @PutMapping("/admin/{id}")
    Admin updateAdmin(@RequestBody Admin newAdmin, @PathVariable Long id) {
        return adminRepository.findById(id)
            .map(admin ->{
                admin.setName(newAdmin.getName());
                admin.setAddress(newAdmin.getAddress());
                admin.setImageurl(newAdmin.getImageurl());
                admin.setEmail(newAdmin.getEmail());
                admin.setDescription(newAdmin.getDescription());
                return adminRepository.save(admin);
            }).orElseThrow(() -> new AdminNotFoundException(id));  
    }
    @DeleteMapping("/admin/{id}")
    String deleteUser(@PathVariable Long id){
        if(!adminRepository.existsById(id)){
            throw new AdminNotFoundException(id);
        }
        adminRepository.deleteById(id);
        return  "Admin with id "+id+" has been deleted success.";
    }
    
    
}
                
                               
   
