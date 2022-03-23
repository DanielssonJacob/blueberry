package com.blueberry.blueberry;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;


    @GetMapping("/companies")
    List<Company> getCompanies(){
        if(companyRepository.findAll().size()==0){
            companyRepository.saveAll(Arrays.asList(
                    new Company(null, "UNICEF"),
                    new Company(null, "Red Cross"),
                    new Company(null, "Amnesty"),
                    new Company(null, "Rädda barnen"),
                    new Company(null, "WWF"),
                    new Company(null, "Salvation Army"),
                    new Company(null, "Movember")));
        }

        return companyRepository.findAll();
    }


    @GetMapping("/company/{name}")
    Company getCompany(@PathVariable String name){
        if(companyRepository.findAll().size()==0){
            companyRepository.saveAll(Arrays.asList(
                    new Company(null, "UNICEF"),
                    new Company(null, "Red Cross"),
                    new Company(null, "Amnesty"),
                    new Company(null, "Rädda barnen"),
                    new Company(null, "WWF"),
                    new Company(null, "Salvation Army"),
                    new Company(null, "Movember")));
        }
        return companyRepository.findByName(name);
    }

}
