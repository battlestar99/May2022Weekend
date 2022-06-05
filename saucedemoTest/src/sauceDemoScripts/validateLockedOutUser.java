package sauceDemoScripts;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import sauceDemoPages.loginPage;

public class validateLockedOutUser {

	public static void main(String[] args) throws InterruptedException {
	
System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		// fundamental datatype 
		int x; 
		
		x=34;
		
		WebDriver driverone;
		
		driverone=new ChromeDriver();
		
		loginPage lp = new loginPage(driver);
		
		// maximize the window 
		
		driver.manage().window().maximize();
		
		// navigating to the url
		driver.get("https://www.saucedemo.com/");
		
		// implicit wait 
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		//Thread.sleep(2000);
		
		// finding the user name text box and typing a value 
		
	   lp.getUserName().sendKeys("locked_out_user");
	   
	   Thread.sleep(1000);
		
	   lp.getpassword().sendKeys("secret_sauce");
	   
	   Thread.sleep(1000);
	   
	   lp.getloginButton().click();
	   
	   Thread.sleep(1000);
		
		

	}

}
