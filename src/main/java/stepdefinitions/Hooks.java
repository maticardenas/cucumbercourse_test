package stepdefinitions;


import io.cucumber.java.After;
import io.cucumber.java.Before;

import java.sql.SQLOutput;

public class Hooks {

    @Before("@SmokeTest")
    public void beforeValidation(){
        System.out.println("SmokeTests before hook");
    }

    @After("@SmokeTest")
    public void afterValidation(){
        System.out.println("SmokeTests after hook");
    }

    @Before("@RegTest")
    public void beforeRegValidation(){
        System.out.println("RegTest before hook");
    }

    @After("@RegTest")
    public void afterRegValidation(){
        System.out.println("RegTest after hook");
    }


}
