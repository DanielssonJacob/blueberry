package com.blueberry.blueberry;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/companies")
    List<Company> getCompanies(){
        companyRepository.saveAll(Arrays.asList(
                new Company(null, "UNICEF"),
                new Company(null, "RED CROSS"),
                new Company(null, "AMNESTY")));
        return companyRepository.findAll();
    }

    @GetMapping("/company/{name}")
    Company getCompany(@PathVariable String name){
        companyRepository.saveAll(Arrays.asList(
                new Company(null, "UNICEF"),
                new Company(null, "RED CROSS"),
                new Company(null, "AMNESTY")));
        return companyRepository.findByName(name);
    }

}
