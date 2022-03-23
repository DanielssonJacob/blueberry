package com.blueberry.blueberry;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @GetMapping("/companies")
    List<Company> getCompanies(){
        if(companyRepository.findAll().size()<6){
            companyRepository.saveAll(Arrays.asList(
                    new Company(null, "UNICEF","Sankt Eriksgatan 46, 112 34 Stockholm","Pernilla Baralt","UNICEF arbetar för alla barns rättigheter. Över hela världen kämpar vi för att alla barn ska få den barndom som de har rätt till. Men vi behöver din hjälp.","12 till 12"),
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
        if(companyRepository.findAll().size()<6){
            companyRepository.saveAll(Arrays.asList(
                    new Company(null, "UNICEF","Sankt Eriksgatan 46, 112 34 Stockholm","Pernilla Baralt","UNICEF arbetar för alla barns rättigheter. Över hela världen kämpar vi för att alla barn ska få den barndom som de har rätt till. Men vi behöver din hjälp.","12 till 12"),
                    new Company(null, "Red Cross"),
                    new Company(null, "Amnesty"),
                    new Company(null, "Rädda barnen"),
                    new Company(null, "WWF"),
                    new Company(null, "Salvation Army"),
                    new Company(null, "Movember")));
        }
        return companyRepository.findByName(name);
    }

    @PostMapping("/postcompany")
    Company postCompany(@RequestBody Map<String, Object> companyForm){
        return companyRepository.save(new Company(null, (String) companyForm.get("cName"),(String) companyForm.get("cAddress"), (String) companyForm.get("cPerson"),(String) companyForm.get("cDescription"),(String) companyForm.get("cHours")));
    }

    @PostMapping("/logincompany")
    Company loginCompany(@RequestBody Map<String, Object> loginForm){
        return companyRepository.findByName((String) loginForm.get("cName"));
    }

}
