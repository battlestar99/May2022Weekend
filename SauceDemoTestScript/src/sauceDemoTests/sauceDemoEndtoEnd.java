package sauceDemoTests;

import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import sauceDemoPages.cartPage;
import sauceDemoPages.checkOutTwoPage;
import sauceDemoPages.checkoutOnePage;
import sauceDemoPages.inventoryPage;
import sauceDemoPages.loginPage;

public class sauceDemoEndtoEnd {
	
	WebDriver driver; 
	loginPage lp; 
	inventoryPage ip; 
	cartPage cp; 
	checkoutOnePage cop; 
	checkOutTwoPage cotp; 
	
	
	@BeforeTest
	public void setupTest() {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		driver = new ChromeDriver(); 
		lp = new loginPage(driver);
		ip=new inventoryPage(driver);
		cp = new cartPage(driver);
		cop = new checkoutOnePage(driver);
		cotp = new checkOutTwoPage(driver);
		
		
        driver.manage().window().maximize();
        driver.get("https://www.saucedemo.com/");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}
	
	
	@Test(priority=1)
	public void loginTest() throws InterruptedException {
		
		//Thread.sleep(1000);
		
		lp.getUserName().sendKeys("standard_user");
		lp.getpassword().sendKeys("secret_sauce");
		lp.getloginButton().click();
		
		String expectedUrl = "https://www.saucedemo.com/inventory.html";
		
		String actualUrl = driver.getCurrentUrl();
		
		Reporter.log("Standard user successul login scenario");
		Assert.assertEquals(actualUrl, expectedUrl);
		
		
	}
	
	
	@Test(priority=2)
	public void addCartValidation() {
		
		
		ip.getbackPack().click();
		ip.getcart().click();
		String actualProductname = cp.getfirstProductName().getText();
		String expectedProductName="Sauce Labs Backpack";
		Reporter.log("validating product availability in the cart");
		Assert.assertEquals(actualProductname, expectedProductName);
		
	}
	
	@Test(priority=3)
	public void buyerInfoValidation() {
		
		cp.getcheckoutButton().click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		cop.getfirstName().sendKeys("jon");
		cop.getlastName().sendKeys("mitechel");
		cop.getpostalCode().sendKeys("22030");
		cop.getcontinueButton().click();
		
		String actualUrl = driver.getCurrentUrl();
		String expectedUrl = "https://www.saucedemo.com/checkout-step-two.html";
		Reporter.log("Buyer information validation");
		Assert.assertEquals(actualUrl, expectedUrl);
		
		
		
	}
	
	
	@Test(priority=4)
	public void completeCheckout() {
		
		cotp.getfinishButton().click();
		
		String expectedUrl = "https://www.saucedemo.com/checkout-complete.html"; 
		String actualUrl = driver.getCurrentUrl();
		
		Reporter.log("checkout completion");
		Assert.assertEquals(actualUrl, expectedUrl);
		
		
	}
	
	
	@AfterTest
	public void endtest() {
		
		driver.quit();
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
