package com.blueberry.blueberry;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountController {
    @Autowired
    AccountRepository accountRepository;


    @CrossOrigin(origins ="http://localhost:3000")
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
}
