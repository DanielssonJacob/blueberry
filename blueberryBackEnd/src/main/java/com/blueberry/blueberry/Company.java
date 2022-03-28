package com.blueberry.blueberry;

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
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String address;
    private String city;
    @OneToOne(cascade=CascadeType.ALL)
    private Account person;
    @Lob
    private String description;
    private String openingHours;

    public Company(Long id, String name){
        this.id=id;
        this.name=name;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "opening_times_id")
    private OpeningTimes openingTimes;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "blog_posts_id")
    private List<BlogPosts> blogPosts = new ArrayList<>();

}