package sauceDemoPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class checkOutTwoPage {

	
WebDriver driver; 
	
	public checkOutTwoPage(WebDriver driver) {
		
		this.driver=driver; 
		
	}
	
	
	public WebElement getfinishButton() {
		  
		  WebElement x = driver.findElement(By.id("finish"));
		  return x; 
		  
	  }
	
}
