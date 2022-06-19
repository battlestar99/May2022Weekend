package sauceDemoTests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import sauceDemoPages.loginPage;

public class loginDataDriven extends baseClass {

	
	
	
	
	
	@BeforeTest
	public void startTest() {
		
		setupChromeDriver();
		navigateHomePage();
		
		
	}
	
	@AfterTest
	public void endtest() throws InterruptedException {
		
		Thread.sleep(1000);
		driver.quit();
		
	}
	
	
	@Parameters({"username","password","expectedUrl"})
	@Test
	public void LoginDataTest(String username, String password, String expectedUrl) throws InterruptedException {
		
		Thread.sleep(1000);
		
		lp.getUserName().sendKeys(username);
		lp.getpassword().sendKeys(password);
		lp.getloginButton().click();
	
		String actualUrl = driver.getCurrentUrl();
		
		Reporter.log("Standard user successul login scenario");
		Assert.assertEquals(actualUrl,expectedUrl);
	}
	
}
