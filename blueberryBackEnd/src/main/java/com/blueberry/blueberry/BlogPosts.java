package com.blueberry.blueberry;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "blog_posts")
public class BlogPosts {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String post;
}