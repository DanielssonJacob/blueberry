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
                    new Company(null, "UNICEF","Sankt Eriksgatan 46, 112 34 Stockholm","Stockholm","Pernilla Baralt","UNICEF arbetar för alla barns rättigheter. Över hela världen kämpar vi för att alla barn ska få den barndom som de har rätt till. Men vi behöver din hjälp.","12 till 12"),
                    new Company(null, "Red Cross","Andra Långgatan 19, 413 28 Göteborg","Göteborg","Martin Ärnlöv","Röda Korset hjälper människor som drabbas av kriser och katastrofer över hela världen. Tack vare miljontals volontärer når vi fram, även när det är svårt. Välkommen till vår värld.","12 till 12"),
                    new Company(null, "Amnesty","Alsnögatan 11 Stockholm","Stockholm","Anna Johansson","Amnesty International är en global organisation som kämpar för alla människors lika värde. Vi arbetar för att mänskliga rättigheter ska gälla alla, nu och i framtiden.","12 till 12"),
                    new Company(null, "Rädda barnen","Ledebursgatan 5, 211 55 Malmö","Malmö", "Helena Thybell","Rädda Barnen är världens största självständiga barnrättsorganisation. Vi har funnits vid barnens sida i över hundra år och vi fokuserar på hållbara insatser – akuta och långsiktiga. Med Barnkonventionen som grund arbetar vi för att barns rättigheter ska bli verklighet, i Sverige och runt om i världen. För när barnen blir trygga blir världen trygg.", "12 till 12"),
                    new Company(null, "WWF","Ulriksdals Slott, 170 81 Solna","Solna","Maria Norrfalk","WWF arbetar för en framtid där människan lever i harmoni med naturen. Vi kämpar för att skydda de mest hotade och unika arterna och livsmiljöerna på planeten och för att mänskligheten ska fördela jordens resurser rättvist och använda dem på ett hållbart sätt.","12 till 12"),
                    new Company(null, "Salvation Army","Östermalmstorg 79 B, 102 42 Stockholm", "Stockholm","Brian Peddle","Vi är en kristen kyrka med ett stort socialt engagemang. För oss är omsorgen om hela människan en central del i vår tro och verksamhet. Runt om i landet driver Frälsningsarmén kårer – församlingar och även olika sociala verksamheter.", "12 till 12"),
                    new Company(null, "Movember","Movember Europe PO Box 68600 London EC1P 1EF United Kingdom", "United Kingdom","Michelle Terry","Våra fäder, partner, bröder och vänner står inför en hälsokris, men det pratas sällan om det. Män dör för unga. Vi har inte råd att hålla tyst.","12 till 12")));
        }

        return companyRepository.findAll();
    }


    @GetMapping("/company/{name}")
    List<Company> getCompany(@PathVariable String name){
        if(companyRepository.findAll().size()<6){
            companyRepository.saveAll(Arrays.asList(
                    new Company(null, "UNICEF","Sankt Eriksgatan 46, 112 34 Stockholm","Stockholm","Pernilla Baralt","UNICEF arbetar för alla barns rättigheter. Över hela världen kämpar vi för att alla barn ska få den barndom som de har rätt till. Men vi behöver din hjälp.","12 till 12"),
                    new Company(null, "Red Cross","Andra Långgatan 19, 413 28 Göteborg","Göteborg","Martin Ärnlöv","Röda Korset hjälper människor som drabbas av kriser och katastrofer över hela världen. Tack vare miljontals volontärer når vi fram, även när det är svårt. Välkommen till vår värld.","12 till 12"),
                    new Company(null, "Amnesty","Alsnögatan 11 Stockholm","Stockholm","Anna Johansson","Amnesty International är en global organisation som kämpar för alla människors lika värde. Vi arbetar för att mänskliga rättigheter ska gälla alla, nu och i framtiden.","12 till 12"),
                    new Company(null, "Rädda barnen","Ledebursgatan 5, 211 55 Malmö","Malmö", "Helena Thybell","Rädda Barnen är världens största självständiga barnrättsorganisation. Vi har funnits vid barnens sida i över hundra år och vi fokuserar på hållbara insatser – akuta och långsiktiga. Med Barnkonventionen som grund arbetar vi för att barns rättigheter ska bli verklighet, i Sverige och runt om i världen. För när barnen blir trygga blir världen trygg.", "12 till 12"),
                    new Company(null, "WWF","Ulriksdals Slott, 170 81 Solna","Solna","Maria Norrfalk","WWF arbetar för en framtid där människan lever i harmoni med naturen. Vi kämpar för att skydda de mest hotade och unika arterna och livsmiljöerna på planeten och för att mänskligheten ska fördela jordens resurser rättvist och använda dem på ett hållbart sätt.","12 till 12"),
                    new Company(null, "Salvation Army","Östermalmstorg 79 B, 102 42 Stockholm", "Stockholm","Brian Peddle","Vi är en kristen kyrka med ett stort socialt engagemang. För oss är omsorgen om hela människan en central del i vår tro och verksamhet. Runt om i landet driver Frälsningsarmén kårer – församlingar och även olika sociala verksamheter.", "12 till 12"),
                    new Company(null, "Movember","Movember Europe PO Box 68600 London EC1P 1EF United Kingdom", "United Kingdom","Michelle Terry","Våra fäder, partner, bröder och vänner står inför en hälsokris, men det pratas sällan om det. Män dör för unga. Vi har inte råd att hålla tyst.","12 till 12")));
        }
        return companyRepository.findByName(name);
    }

    @PostMapping("/postcompany")
    Company postCompany(@RequestBody Map<String, Object> companyForm){
        return companyRepository.save(new Company(null, (String) companyForm.get("cName"),(String) companyForm.get("cAddress"),((String) companyForm.get("cCity")).trim(), (String) companyForm.get("cPerson"),(String) companyForm.get("cDescription"),(String) companyForm.get("cHours")));
    }

    @PostMapping("/logincompany")
    Boolean loginCompany(@RequestBody Map<String, Object> loginForm){
        return companyRepository.findByName((String) loginForm.get("cName")) != null;
    }

}
