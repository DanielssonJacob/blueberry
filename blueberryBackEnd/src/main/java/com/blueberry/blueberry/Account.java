package com.blueberry.blueberry;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(unique=true)
    private String username;
    private String password;
    private Role role;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Company> followedCompanies;

    public Account(Long id, String username, String password, Role role){
        this.id=id;
        this.username=username;
        this.password = password;
        this.role=role;
        this.followedCompanies=new ArrayList<>();
    }


    @Override
    public String toString() {
        return username;
    }





    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}