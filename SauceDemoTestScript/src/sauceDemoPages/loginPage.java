package sauceDemoPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class loginPage {
	
	
	WebDriver driver; 
	
	  public loginPage(WebDriver driver) {
		  
		  this.driver = driver;
		  
	  }
	
	
	
	  public WebElement getUserName() {
		  
		  WebElement x = driver.findElement(By.id("user-name"));
		  return x; 
		  
	  }
	  
     public WebElement getpassword() {
		  
		  WebElement x = driver.findElement(By.name("password"));
		  return x; 
		  
	  }
	
     public WebElement getloginButton() {
		  
		  WebElement x = driver.findElement(By.id("login-button"));
		  return x; 
		  
	  }
	

}