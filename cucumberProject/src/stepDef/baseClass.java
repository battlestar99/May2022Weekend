package stepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import pages.cartPage;
import pages.checkOutTwoPage;
import pages.checkoutOnePage;
import pages.inventoryPage;
import pages.loginPage;



public class baseClass {
	
	
	
	WebDriver driver; 
	loginPage lp; 
	inventoryPage ip; 
	cartPage cp; 
	checkoutOnePage cop; 
	checkOutTwoPage cotp; 
	
	
	
	
	public void setupChromeDriver() {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		driver = new ChromeDriver(); 
		lp = new loginPage(driver);
		ip=new inventoryPage(driver);
		cp = new cartPage(driver);
		cop = new checkoutOnePage(driver);
		cotp = new checkOutTwoPage(driver);
		
		
	}
	
	
	public void navigateHomePage() {
		
		 driver.manage().window().maximize();
		driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}

}
