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
    List<Company> getCompany(@PathVariable String name){
        if(companyRepository.findAll().size()<6){
            companyRepository.saveAll(Arrays.asList(
                    new Company(null, "UNICEF","Sankt Eriksgatan 46, 112 34 Stockholm","Pernilla Baralt","UNICEF arbetar för alla barns rättigheter. Över hela världen kämpar vi för att alla barn ska få den barndom som de har rätt till. Men vi behöver din hjälp.","12 till 12"),
                    new Company(null, "Röda Korset", "Götavägen 22, 110 30 Stockholm", "Gunnar Skogqvist", "Vi är världens största humanitära nätverk och vi finns i 192 länder. Målet är att förhindra och lindra mänskligt lidande, oavsett vem det drabbar.", "12 till 12"),
                    new Company(null, "Amnesty International", "Haga Östergata 30, 411 22 Göteborg", "Ahmed Rakhtun", "Amnesty International är en global organisation som kämpar för alla människors lika värde. Vi arbetar för att mänskliga rättigheter ska gälla alla, nu och i framtiden.", "10 till 20"),
                    new Company(null, "Rädda barnen", "Gustavslundsvägen 141, 107 88 Stockholm","Alia Bhatt" ,"Vi finns på plats i Sverige och 119 andra länder och arbetar för alla barns självklara rätt att överleva, utvecklas och växa upp i trygghet. Här och nu för framtiden förändrar vi barns liv – för att trygga barn blir trygga vuxna. Att rädda barnen är att rädda världen.", "09 till 15"),
                    new Company(null, "WWF", "Ulriksdals Slott, 170 81 Solna","Julia Volkova" ,"WWF är en helt oberoende och partipolitiskt obunden miljö- och naturvårdsorganisation som bildades 1961.", "08.30 till 16.00"),
                    new Company(null, "Frälsningsarmen", "Torggatan 1, 441 30 Alingsås", "Julio Iglesias", "Frälsningsarmén i Sverige finns i cirka 70 städer/kommuner med 113 verksamheter. Det är församlingsverksamhet med gudstjänster och gruppaktiviteter för alla åldrar.", "12 till 15"),
                    new Company(null, "Movember","PO Box 68600, London","Casper Janebrink","Movember är en gemenskap av rockstjärnor som samlar in pengar, vilket gör skillnad för mental hälsa och självmordsförebyggande, prostatacancer och testikelcancer.", "10 till 18")));
        }
        return companyRepository.findByName(name);
    }

    @PostMapping("/postcompany")
    Company postCompany(@RequestBody Map<String, Object> companyForm){
        return companyRepository.save(new Company(null, (String) companyForm.get("cName"),(String) companyForm.get("cAddress"), (String) companyForm.get("cPerson"),(String) companyForm.get("cDescription"),(String) companyForm.get("cHours")));
    }

    @PostMapping("/logincompany")
    Boolean loginCompany(@RequestBody Map<String, Object> loginForm){
        return companyRepository.findByName((String) loginForm.get("cName")) != null;
    }

}
