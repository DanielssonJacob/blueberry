package com.blueberry.blueberry;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "opening_times")
public class OpeningTimes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalTime weekdayOpen;
    private LocalTime weekdayClose;
    private LocalTime saturdayOpen;
    private LocalTime saturdayClose;
    private LocalTime sundayOpen;
    private LocalTime sundayClose;

    public OpeningTimes(LocalTime weekdayOpen, LocalTime weekdayClose, LocalTime saturdayOpen, LocalTime saturdayClose, LocalTime sundayOpen, LocalTime sundayClose) {
        this.weekdayOpen = weekdayOpen;
        this.weekdayClose = weekdayClose;
        this.saturdayOpen = saturdayOpen;
        this.saturdayClose = saturdayClose;
        this.sundayOpen = sundayOpen;
        this.sundayClose = sundayClose;

    }
}