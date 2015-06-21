package pratice.cucumber.PomPractice;

import junit.framework.Assert;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import Repractice.ContactConfirmPage;
import Repractice.ContactPage;
import Repractice.LandingPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionpractice {
	
	WebDriver driver = new FirefoxDriver() ;
	LandingPage landingPage;
	ContactPage contactpage;
	ContactConfirmPage contactconfirm;
	
	@Given("^I am on the zoo website$")
	public void I_am_on_the_zoo_website() throws Throwable {
	 landingPage = new LandingPage(driver);
	 landingPage.navigateToWebApp();
	}

	@When("^I click on \"([^\"]*)\"$")
	public void I_click_on(String link) throws Throwable {
		contactpage = landingPage.navigateToContactPage(link);
		
	}

	@When("^I enter \"([^\"]*)\" into the name field$")
	public void I_enter_into_the_name_field(String value) throws Throwable {
		contactpage.setNameField(value);
	}

	@When("^I enter \"([^\"]*)\" into the address field$")
	public void I_enter_into_the_address_field(String value) throws Throwable {
		contactpage.setAddressField(value);
	}

	@When("^I enter \"([^\"]*)\" into the postcode field$")
	public void I_enter_into_the_postcode_field(String value) throws Throwable {
		contactpage.setPostcodeField(value);
	}

	@When("^I enter \"([^\"]*)\" into the email field$")
	public void I_enter_into_the_email_field(String value) throws Throwable {
		contactpage.setEmailField(value);
	}

	@When("^I submit the contact form$")
	public void I_submit_the_contact_form() throws Throwable {
		contactconfirm = contactpage.submitForm();
	}

	@SuppressWarnings("deprecation")
	@Then("^I check I am on the confirmation page$")
	public void I_check_I_am_on_the_confirmation_page() throws Throwable {
	  Assert.assertTrue(contactconfirm.getPageTitle().contains("We have your message"));
	}

	@Then("^I close the browser$")
	public void I_close_the_browser() throws Throwable {
		contactconfirm.closeDriver();
	}

}
