package stepdefinitions;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.PendingException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

import java.util.List;

@RunWith(Cucumber.class)
public class MyStepDefinitions {

    @Given("^Validate the browser$")
    public void validate_the_browser() throws Throwable {
        System.out.println("Validate the browser");
    }

    @When("^Browser is triggered$")
    public void browser_is_triggered() throws Throwable {
        System.out.println("Browser is triggered");
    }

    @Then("^Check if browser is started$")
    public void check_if_browser_is_started() throws Throwable {
        System.out.println("Check if browser is started");
    }

    @Given("^User is on NetBanking landing page$")
    public void user_is_on_netbanking_landing_page() throws Throwable {
        System.out.println("User is on NetBanking landing page");
    }

    @When("^User login into application with (.+) and (.+)$")
    public void user_login_into_application_with_and(String username, String password) throws Throwable {
        System.out.println("User login into application with user: '" + username + "' and password: '" + password + "'");
    }

    @Then("^Home page is populated$")
    public void home_page_is_populated() throws Throwable {
        System.out.println("Home page is populated");
    }

    @And("^Cards displayed are \"([^\"]*)\"$")
    public void cards_displayed_are_something(String cardsDisplayed) throws Throwable {
        System.out.println("Cards displayed are '" + cardsDisplayed + "'");
    }

    @When("^User sign up with following details$")
    public void user_sign_up_with_following_details(DataTable data) throws Throwable {
        List<String> obj = data.row(0);
        System.out.println("Name: " + obj.get(0));
        System.out.println("Pass: " + obj.get(1));
        System.out.println("Mail: " + obj.get(2));
        System.out.println("Address: " + obj.get(3));
        System.out.println("Phone Number: " + obj.get(4));
    }

}
