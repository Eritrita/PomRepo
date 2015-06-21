package Repractice;

import org.openqa.selenium.WebDriver;

public class AbstractClass {
	
	protected WebDriver driver;
	
	public  AbstractClass(WebDriver driver) {
		this.driver = driver;
		
	}
	
	public LandingPage navigateToWebApp() {
		driver.navigate().to("http://thetestroom.com/webapp/");
		return new LandingPage(driver);
	}
	
	public void closeDriver() {
		driver.quit();
	}

}
