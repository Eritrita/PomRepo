package Repractice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LandingPage extends AbstractClass{

	public LandingPage(WebDriver driver) {
		super(driver);
	}

	
	public ContactPage navigateToContactPage(String link) {
		driver.findElement(By.id(link.toLowerCase() + "_link")).click();	
		return new ContactPage(driver);
		
	}
	

}
