package sauceDemoTestOld;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class sauceDemoProblemUser {

	public static void main(String[] args) throws InterruptedException {
		
System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		// maximize the window 
		
		driver.manage().window().maximize();
		
		// navigating to the url
		driver.get("https://www.saucedemo.com/");
		
		Thread.sleep(2000);
		
		// finding the user name text box and typing a value 
		
	   driver.findElement(By.id("user-name")).sendKeys("problem_user");
	   
	   Thread.sleep(1000);
		
	   driver.findElement(By.name("password")).sendKeys("secret_sauce");
	   
	   Thread.sleep(1000);
	   
	   driver.findElement(By.id("login-button")).click();
	   
	   Thread.sleep(1000);
		
		

	}

}
