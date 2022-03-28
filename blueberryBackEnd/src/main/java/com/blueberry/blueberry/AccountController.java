package com.blueberry.blueberry;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class AccountController {
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    CompanyRepository companyRepository;


    @PostMapping("/createaccount")
    Map<String, Object> createUser(@RequestBody Map<String, Object> createForm) throws Exception {
        Account account;
        HashMap<String, Object> jsonResult = new HashMap<>();
        if(accountRepository.findByUsername((String) createForm.get("user"))==null) {
            account= ((String) createForm.get("role")).equals("COMPANY") ?
                    accountRepository.save(new Account(null, (String) createForm.get("user"), (String) createForm.get("pwd"), Role.COMPANY))
                    :
                    accountRepository.save(new Account(null, (String) createForm.get("user"), (String) createForm.get("pwd"), Role.INDIVIDUAL));
            jsonResult.put("username", account.getUsername());
            //just for development
            jsonResult.put("password",account.getPassword());
            jsonResult.put("accessToken", "accessGranted");
            jsonResult.put("role", account.getRole());
            return jsonResult;
        } else{
            throw new Exception();
        }
    }

    @PostMapping("/auth")
    Map<String, Object> authUser(@RequestBody Map<String, Object> loginForm) throws Exception {
        if(accountRepository.findAll().size()<1){
            accountRepository.save(new Account(null,"GreatCompany", "12345", Role.COMPANY));
            accountRepository.save(new Account(null,"JD", "12345", Role.INDIVIDUAL));
            accountRepository.save(new Account(null,"User123", "12345", Role.INDIVIDUAL));
        }
        if(accountRepository.findByUsername((String) loginForm.get("user")).getPassword().equals((String) loginForm.get("pwd"))){
            HashMap<String, Object> jsonResult = new HashMap<>();
            System.out.println(loginForm);
            Account account = accountRepository.findByUsername((String) loginForm.get("user"));
            jsonResult.put("username", account.getUsername());
            //just for development
            jsonResult.put("password",account.getPassword());
            jsonResult.put("accessToken", "accessGranted");
            jsonResult.put("role", account.getRole());
            return jsonResult;
        }else{
            System.out.println();
            throw new Exception();
        }

    }


    @PostMapping("/follow")
    Company followCompany(@RequestBody Map<String, Object> follow) throws Exception {
        try{
            if (!accountRepository.findByUsername((String) follow.get("user"))
                    .getFollowedCompanies()
                    .contains(companyRepository.findById(Long.valueOf((Integer) follow.get("companyId"))).get())) {
                Account account = accountRepository.findByUsername((String) follow.get("user"));
                List<Company> followedAccount = account.getFollowedCompanies();
                followedAccount.add(companyRepository.findById(Long.valueOf((Integer) follow.get("companyId"))).get());
                account.setFollowedCompanies(followedAccount);
                accountRepository.save(account);
            }
            return companyRepository.findById(Long.valueOf((Integer) follow.get("companyId"))).get();
        } catch (Exception e){
            e.printStackTrace();
        }
        return new Company();
    }

    @GetMapping("/followedby/{username}")
    List<Company> followedBy(@PathVariable("username") String username) throws Exception {
        if(accountRepository.findByUsername(username)!=null){
            return accountRepository.findByUsername(username).getFollowedCompanies();
        } else{
            throw new Exception();
        }
    }

}
