package sauceDemoPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class inventoryPage {

	WebDriver driver; 
	

	
	  public inventoryPage(WebDriver driver) {
		  
		  this.driver = driver;
		  
	  }
	
	
	
	 public WebElement getcart() {
		  
		  WebElement x = driver.findElement(By.xpath("//*[@id=\"shopping_cart_container\"]/a"));
		  return x; 
		  
	  }
	
	
}
