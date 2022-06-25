package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class cartPage {
	
	
	
	WebDriver driver; 
	
	  public cartPage(WebDriver driver) {
		  
		  this.driver = driver;
		  
	  }
	  
 public WebElement getfirstProductName() {
		  
		  WebElement x = driver.findElement(By.xpath("//*[@id=\"item_4_title_link\"]/div"));
		  return x; 
		  
	  }
 
 public WebElement getcheckoutButton() {
	  
	  WebElement x = driver.findElement(By.id("checkout"));
	  return x; 
	  
 }
 
	  
	  
	  

}
