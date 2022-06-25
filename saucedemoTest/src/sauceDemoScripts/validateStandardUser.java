package sauceDemoScripts;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import sauceDemoPages.loginPage;

public class validateStandardUser {

	public static void main(String[] args) throws InterruptedException {
	
System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		loginPage lp = new loginPage(driver);
		
		// maximize the window 
		
		driver.manage().window().maximize();
		
		// navigating to the url
		driver.get("https://www.saucedemo.com/");
		
		Thread.sleep(2000);
		
		// finding the user name text box and typing a value 
		
	  boolean userNameDisplayed = lp.getUserName().isDisplayed();
	  
	  if(userNameDisplayed) {
		  String userNameTextbox = lp.getUserName().getText();
		  System.out.println(userNameTextbox);
	  }else {
		  System.out.println("User name text box is not displayed");
	  }
	  
	  
	  lp.getUserName().sendKeys("standard_user");
	   Thread.sleep(1000);
		
	  lp.getpassword().sendKeys("secret_sauce");
	   
	   Thread.sleep(1000);
	   
	   lp.getloginButton().click();
	   
	   Thread.sleep(1000);
		
		

	}

}
