package com.blueberry.blueberry;


import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    BlogPostRepository blogpostRepository;

    @GetMapping("/companies")
    List<Company> getCompanies() {
        if (companyRepository.findAll().size() < 6) {
            companyRepository.saveAll(Arrays.asList(
                    new Company(null, "UNICEF", "Sankt Eriksgatan 46, 112 34 Stockholm", "Stockholm", new Account(null, "Pernilla Baralt", "123", Role.COMPANY), "UNICEF is working towards all the childrens rights. Over the whole world we are working towards that all children get the right to the childhood they deserve. But we need your help.", "12 till 12", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(20, 00), LocalTime.of(10, 00), LocalTime.of(15, 00), LocalTime.of(10, 00), LocalTime.of(15, 00)), new ArrayList(Arrays.asList(new BlogPost("10.000 doses", "With all the help we have received, we have now been able to ship another 10.000 doses of vaccine to countries in need."), new BlogPost("We need money", "We really appreciate all the help we get. But at the moment, we are unable to make use of all the clothing donations we are receiving and there for ask that if you want to help please consider donating money instead.")))),
                    new Company(null, "Röda Korset", "Götavägen 22, 110 30 Stockholm", "Stockholm", new Account(null, "Gunnar Skogqvist", "123", Role.COMPANY), "Vi är världens största humanitära nätverk och vi finns i 192 länder. Målet är att förhindra och lindra mänskligt lidande, oavsett vem det drabbar.", "12 till 12", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Amnesty International", "Haga Östergata 30, 411 22 Göteborg", "Göteborg", new Account(null, "Ahmed Rakhtun", "123", Role.COMPANY), "Amnesty International är en global organisation som kämpar för alla människors lika värde. Vi arbetar för att mänskliga rättigheter ska gälla alla, nu och i framtiden.", "10 till 20", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Rädda barnen", "Gustavslundsvägen 141, 107 88 Stockholm", "Stockholm", new Account(null, "Alia Bhatt", "123", Role.COMPANY), "Vi finns på plats i Sverige och 119 andra länder och arbetar för alla barns självklara rätt att överleva, utvecklas och växa upp i trygghet. Att rädda barnen är att rädda världen.", "09 till 15", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "WWF", "Ulriksdals Slott, 170 81 Solna", "Solna", new Account(null, "Julia Volkova", "123", Role.COMPANY), "WWF är en helt oberoende och partipolitiskt obunden miljö- och naturvårdsorganisation som bildades 1961.", "08.30 till 16.00", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Frälsningsarmen", "Torggatan 1, 441 30 Alingsås", "Alingsås", new Account(null, "Julio Iglesias", "123", Role.COMPANY), "Frälsningsarmén i Sverige finns i cirka 70 städer/kommuner med 113 verksamheter. Det är församlingsverksamhet med gudstjänster och gruppaktiviteter för alla åldrar.", "12 till 15", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Movember", "PO Box 68600, London", "London", new Account(null, "Casper Janebrink", "123", Role.COMPANY), "Movember är en gemenskap av rockstjärnor som samlar in pengar, vilket gör skillnad för mental hälsa och självmordsförebyggande, prostatacancer och testikelcancer.", "10 till 18", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Geblod", "Norrtullsgatan 6, 6tr, 113 29 Stockholm", "Stockholm", new Account(null, "Jorien ter Mors", "123", Role.COMPANY), "I Sverige behövs i snitt en blodpåse i minuten, dygnet runt, året runt. Blodet räddar liv och används till exempel vid cancerbehandlingar, förlossningar, operationer och olyckor. Hjälp oss hjälpa andra!", "12 till 18", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Cancerfonden", "David Bagares gata 5, 101 55 Stockholm", "Stockholm", new Account(null, "Travis Bickle", "123", Role.COMPANY), "I Sverige får en av tre ett cancerbesked under sin livstid. För att färre ska drabbas och fler ska överleva finansierar vi den främsta forskningen, sprider kunskap om cancer och påverkar beslutsfattare i viktiga frågor.", "12 till 18", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Kris", "Gröndalsvägen 194, 117 69 Stockholm", "Stockholm", new Account(null, "Charles Ponzi", "123", Role.COMPANY), "Kriminellas Revansch I Samhället, KRIS, är en ideell förening där före detta kriminella och missbrukare hjälper varandra tillbaka in i samhället. Vi har funnits sedan oktober 1997, då var vi 11 medlemmar.", "12 till 15", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>())));

        }
        System.out.println(companyRepository.findAll());
        return companyRepository.findAll();
    }


    @GetMapping("/company/{name}")
    List<Company> getCompany(@PathVariable String name) {
        if (companyRepository.findAll().size() < 6) {
            companyRepository.saveAll(Arrays.asList(
                    new Company(null, "UNICEF", "Sankt Eriksgatan 46, 112 34 Stockholm", "Stockholm", new Account(null, "Pernilla Baralt", "123", Role.COMPANY), "UNICEF is working towards all the childrens rights. Over the whole world we are working towards that all children get the right to the childhood they deserve. But we need your help.", "12 till 12", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(20, 00), LocalTime.of(10, 00), LocalTime.of(15, 00), LocalTime.of(10, 00), LocalTime.of(15, 00)), new ArrayList(Arrays.asList(new BlogPost("10.000 doses", "With all the help we have received, we have now been able to ship another 10.000 doses of vaccine to countries in need."), new BlogPost("We need money", "We really appreciate all the help we get. But at the moment, we are unable to make use of all the clothing donations we are receiving and there for ask that if you want to help please consider donating money instead.")))),
                    new Company(null, "Röda Korset", "Götavägen 22, 110 30 Stockholm", "Stockholm", new Account(null, "Gunnar Skogqvist", "123", Role.COMPANY), "Vi är världens största humanitära nätverk och vi finns i 192 länder. Målet är att förhindra och lindra mänskligt lidande, oavsett vem det drabbar.", "12 till 12", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Amnesty International", "Haga Östergata 30, 411 22 Göteborg", "Göteborg", new Account(null, "Ahmed Rakhtun", "123", Role.COMPANY), "Amnesty International är en global organisation som kämpar för alla människors lika värde. Vi arbetar för att mänskliga rättigheter ska gälla alla, nu och i framtiden.", "10 till 20", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Rädda barnen", "Gustavslundsvägen 141, 107 88 Stockholm", "Stockholm", new Account(null, "Alia Bhatt", "123", Role.COMPANY), "Vi finns på plats i Sverige och 119 andra länder och arbetar för alla barns självklara rätt att överleva, utvecklas och växa upp i trygghet. Att rädda barnen är att rädda världen.", "09 till 15", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "WWF", "Ulriksdals Slott, 170 81 Solna", "Solna", new Account(null, "Julia Volkova", "123", Role.COMPANY), "WWF är en helt oberoende och partipolitiskt obunden miljö- och naturvårdsorganisation som bildades 1961.", "08.30 till 16.00", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Frälsningsarmen", "Torggatan 1, 441 30 Alingsås", "Alingsås", new Account(null, "Julio Iglesias", "123", Role.COMPANY), "Frälsningsarmén i Sverige finns i cirka 70 städer/kommuner med 113 verksamheter. Det är församlingsverksamhet med gudstjänster och gruppaktiviteter för alla åldrar.", "12 till 15", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Movember", "PO Box 68600, London", "London", new Account(null, "Casper Janebrink", "123", Role.COMPANY), "Movember är en gemenskap av rockstjärnor som samlar in pengar, vilket gör skillnad för mental hälsa och självmordsförebyggande, prostatacancer och testikelcancer.", "10 till 18", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Geblod", "Norrtullsgatan 6, 6tr, 113 29 Stockholm", "Stockholm", new Account(null, "Jorien ter Mors", "123", Role.COMPANY), "I Sverige behövs i snitt en blodpåse i minuten, dygnet runt, året runt. Blodet räddar liv och används till exempel vid cancerbehandlingar, förlossningar, operationer och olyckor. Hjälp oss hjälpa andra!", "12 till 18", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Cancerfonden", "David Bagares gata 5, 101 55 Stockholm", "Stockholm", new Account(null, "Travis Bickle", "123", Role.COMPANY), "I Sverige får en av tre ett cancerbesked under sin livstid. För att färre ska drabbas och fler ska överleva finansierar vi den främsta forskningen, sprider kunskap om cancer och påverkar beslutsfattare i viktiga frågor.", "12 till 18", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>()),
                    new Company(null, "Kris", "Gröndalsvägen 194, 117 69 Stockholm", "Stockholm", new Account(null, "Charles Ponzi", "123", Role.COMPANY), "Kriminellas Revansch I Samhället, KRIS, är en ideell förening där före detta kriminella och missbrukare hjälper varandra tillbaka in i samhället. Vi har funnits sedan oktober 1997, då var vi 11 medlemmar.", "12 till 15", new OpeningTimes(LocalTime.of(9, 00), LocalTime.of(10, 10), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00), LocalTime.of(10, 00)), new ArrayList<BlogPost>())));

        }
        return companyRepository.findByName(name);
    }

    @PostMapping("/postcompany")
    Company postCompany(@RequestBody Map<String, Object> companyForm) {
        return companyRepository.save(new Company(null, (String) companyForm.get("cName"), (String) companyForm.get("cAddress"), ((String) companyForm.get("cCity")).trim(), accountRepository.findByUsername(((String) companyForm.get("cPerson"))), (String) companyForm.get("cDescription"), (String) companyForm.get("cHours"), new OpeningTimes(), new ArrayList<BlogPost>()));
    }

    @PostMapping("/logincompany")
    Boolean loginCompany(@RequestBody Map<String, Object> loginForm) {
        return companyRepository.findByName((String) loginForm.get("cName")) != null;
    }

    @PutMapping("/edit")
    String editDescription(@RequestBody Map<String, Object> description) {
        Company company = companyRepository.findById((Long.valueOf((Integer) description.get("cId")))).get();
        company.setDescription((String) description.get("cDescription"));
        companyRepository.save(company);
        return company.getDescription();
    }

    @PutMapping("/editblogpost")
    String editBlogPost(@RequestBody Map<String, Object> description) {
        BlogPost blogpost = blogpostRepository.findById((Long.valueOf((Integer) description.get("bId")))).get();
        blogpost.setPost((String) description.get("bBlogPost"));
        blogpostRepository.save(blogpost);
        return blogpost.getPost();
    }


    @RequestMapping(value = "/changeimage/{id}",
            produces = {"application/json"},
            consumes = {"multipart/form-data"},
            method = RequestMethod.POST)
    public String changeImage(@RequestParam("file") MultipartFile file, @PathVariable("id") Long id) throws IOException {


        InputStream inputStream = null;
        OutputStream outputStream = null;
        String fileName = file.getOriginalFilename();
        File newFile = new File("C:\\Programming\\Java\\AW\\Module 13\\blueberry\\blueberryPictureService\\public\\" + fileName);

        try {
            inputStream = file.getInputStream();

            if (!newFile.exists()) {
                newFile.createNewFile();
            }
            outputStream = new FileOutputStream(newFile);
            int read = 0;
            byte[] bytes = new byte[1024];

            while ((read = inputStream.read(bytes)) != -1) {
                outputStream.write(bytes, 0, read);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        if (companyRepository.findById(id).isPresent()) {
            Company company = companyRepository.findById(id).get();
            company.setImageUrl(fileName);
            companyRepository.save(company);
        }

        return newFile.getAbsolutePath();



           /* Byte[] byteObjects = new Byte[file.getBytes().length];

            int i = 0;

            for (byte b : file.getBytes()){
                byteObjects[i++] = b;
            }

            company.setImage(byteObjects);

            companyRepository.save(company);
            System.out.println(company);*/

    }


    @GetMapping(value = "profilepic/{filename}", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody
    byte[] getImage(@PathVariable("filename") String filename) throws IOException {
        return IOUtils.toByteArray(Objects.requireNonNull(getClass()
                .getResourceAsStream("/static/pictures/" + filename)));
    }


}
