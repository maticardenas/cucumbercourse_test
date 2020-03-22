$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Login.feature");
formatter.feature({
  "name": "Application Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login into application with \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "User1",
        "Password1"
      ]
    },
    {
      "cells": [
        "User2",
        "Password2"
      ]
    },
    {
      "cells": [
        "User3",
        "Password3"
      ]
    },
    {
      "cells": [
        "User4",
        "Password4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login into application with User1 and Password1",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_login_into_application_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.cards_displayed_are_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login into application with User2 and Password2",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_login_into_application_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.cards_displayed_are_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login into application with User3 and Password3",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_login_into_application_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.cards_displayed_are_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login into application with User4 and Password4",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_login_into_application_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.cards_displayed_are_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page sign up",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sign up with following details",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.user_sign_up_with_following_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.MyStepDefinitions.cards_displayed_are_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});