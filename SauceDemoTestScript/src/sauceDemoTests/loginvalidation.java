package sauceDemoTests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class loginvalidation extends baseClass {
	
	
	
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
	public void successfulLogin() throws InterruptedException {
		
		Thread.sleep(1000);
	    
		
		try {
		driver.findElement(By.id("user-name")).sendKeys("standard_user");	
		}
		
		catch(Exception e){
			
			System.out.println(e.getMessage());
			
		}
		
		
		System.out.println("debug code");
		
		
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
		
		
		
	    driver.findElement(By.id("login-button")).click();	
	    Thread.sleep(1000);
	}
	
	
	@Test (priority=2)
	public void unsuccessfulLogin() throws InterruptedException {
		
		Thread.sleep(1000);
		driver.findElement(By.id("user-name")).sendKeys("locked_out_user");	
	    driver.findElement(By.id("password")).sendKeys("secret_sauce");
	    driver.findElement(By.id("login-button")).click();	
	    Thread.sleep(1000);
		
		
	}
	
	public void tear() {
		
	}
	
	public void tear(int a) {
		
	}
	
	public void tear(int a, int b) {
		
	}

}
