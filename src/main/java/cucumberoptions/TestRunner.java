package cucumberoptions;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/main/java/features",
        glue = "stepdefinitions", //package name where step definitions class are located.
        tags = { "@SmokeTest or @RegTest" },  //which tag or tags I want to execute.
        plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json", "junit:target/cukes.xml" },
        dryRun = false //if set to true will check if every scenario have a mapping implemented.
)
public class TestRunner {

}
