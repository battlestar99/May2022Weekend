package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class checkOutTwoPage {

	private int a;
	
private WebDriver driver; 
	
	public checkOutTwoPage(WebDriver driver) {
		
		this.driver=driver; 
		
	}
	
	
	public WebElement getfinishButton() {
		  
		  WebElement x = driver.findElement(By.id("finish"));
		  return x; 
		  
	  }
	
	private void any() {
		
	}
	
}
