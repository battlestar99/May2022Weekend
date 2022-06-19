package sauceDemoTests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import sauceDemoPages.loginPage;

public class loginValidationV2 extends baseClass {
	
	
	
		
		
		
		
		@BeforeTest
		public void startTest() {
			
			setupChromeDriver();
			navigateHomePage();
			
		}
		
		@AfterTest
		public void endtest() throws InterruptedException {
			
			Thread.sleep(2000);
			driver.quit();
			
		}
		
		@BeforeMethod
		public void bforeeachTest() {
			
	       driver.get("https://www.saucedemo.com/");
			
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			
			
		}
		
		
		@Test(priority=1)
		public void standardUserLogin() throws InterruptedException {
			
			Thread.sleep(1000);
			
			lp.getUserName().sendKeys("standard_user");
			lp.getpassword().sendKeys("secret_sauce");
			lp.getloginButton().click();
			
			String expectedUrl = "https://www.saucedemo.com/inventory.html";
			
			String actualUrl = driver.getCurrentUrl();
			
			Reporter.log("Standard user successul login scenario");
			Assert.assertEquals(actualUrl, expectedUrl);
		}
		
		
		@Test (priority=2)
		public void lockedOutUserLogin() throws InterruptedException {
			
			Thread.sleep(1000);
			lp.getUserName().sendKeys("locked_out_user");
			lp.getpassword().sendKeys("secret_sauce");
			lp.getloginButton().click();
		    Thread.sleep(1000);
			
		    
		    String expectedUrl = "https://www.saucedemo.com/";
			
			String actualUrl = driver.getCurrentUrl();
			Reporter.log("locked out user unsuccessul login scenario");
			Assert.assertEquals(actualUrl, expectedUrl);
			
			
			
			
			
			
			
		}
		
		
		@Test (priority=3)
		public void problemUserLogin() throws InterruptedException {
			
			Thread.sleep(1000);
			lp.getUserName().sendKeys("problem_user");
			lp.getpassword().sendKeys("secret_sauce");
			lp.getloginButton().click();
		    Thread.sleep(1000);
			
		    String expectedUrl = "https://www.saucedemo.com/inventory.html";
			
			String actualUrl = driver.getCurrentUrl();
			Reporter.log("problem user successul login scenario");
			Assert.assertEquals(actualUrl, expectedUrl);
			
		}
		
		@Test (priority=4)
		public void performanceGlitchUserLogin() throws InterruptedException {
			
			Thread.sleep(1000);
			lp.getUserName().sendKeys("performance_glitch_user");
			lp.getpassword().sendKeys("secret_sauce");
			lp.getloginButton().click();
		    Thread.sleep(1000);
			
		    String expectedUrl = "https://www.saucedemo.com/inventor.html";
			
			String actualUrl = driver.getCurrentUrl();
			Reporter.log("performance glitch user successul login scenario");
			Assert.assertEquals(actualUrl, expectedUrl);
		}


}
