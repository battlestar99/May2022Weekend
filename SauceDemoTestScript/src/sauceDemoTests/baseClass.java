package sauceDemoTests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import sauceDemoPages.cartPage;
import sauceDemoPages.checkOutTwoPage;
import sauceDemoPages.checkoutOnePage;
import sauceDemoPages.inventoryPage;
import sauceDemoPages.loginPage;

public class baseClass {
	
	WebDriver driver; 
	loginPage lp; 
	inventoryPage ip; 
	cartPage cp; 
	checkoutOnePage cop; 
	checkOutTwoPage cotp; 
	
	int x; 
	
	
	public void setupChromeDriver() {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		driver = new ChromeDriver(); 
		lp = new loginPage(driver);
		ip=new inventoryPage(driver);
		cp = new cartPage(driver);
		cop = new checkoutOnePage(driver);
		checkOutTwoPage cotp = new checkOutTwoPage(driver);
		
		
		int x=12;
		
		this.x=145;
       
		
	}
	
	
	public void navigateHomePage() {
		
		 driver.manage().window().maximize();
		driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}
	
	public void tearDown() {
		
	}

}
