package com.blueberry.blueberry;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "blog_posts")
public class BlogPost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String header;
    @Lob
    private String post;
    private LocalDateTime time;

    public BlogPost(String header, String post){
        this.header = header;
        this.post = post;
        this.time = LocalDateTime.now();
    }

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name="company_id")
    private Company company;


}