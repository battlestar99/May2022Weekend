package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class findingWebElement {

	public static void main(String[] args) throws InterruptedException {
		
System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
	
		driver.manage().window().maximize();
	
		driver.get("https://www.saucedemo.com/");
		
		Thread.sleep(2000);
		
		WebElement username = driver.findElement(By.id("user-name"));
		
		username.sendKeys("standard_user");
		
		
		

	}

}
