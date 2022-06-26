package stepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.cartPage;
import pages.checkOutTwoPage;
import pages.checkoutOnePage;
import pages.inventoryPage;
import pages.loginPage;


public class stepDef {
	
	WebDriver driver; 
	loginPage lp; 
	inventoryPage ip; 
	cartPage cp; 
	checkoutOnePage cop; 
	checkOutTwoPage cotp; 
	
	
	@Before
	public void testSetup()
	{
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		driver = new ChromeDriver(); 
		lp = new loginPage(driver);
		ip=new inventoryPage(driver);
		cp = new cartPage(driver);
		cop = new checkoutOnePage(driver);
		cotp = new checkOutTwoPage(driver);
		
	}	
	
	
	
	 @After 
	 public void endScenario() {
	 
	 driver.quit();
	 
	 }
	 
	
	@Given("^user is on the home page$")
	public void user_is_on_the_home_page() {
	    
		
		
		driver.manage().window().maximize();
		driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	

	@When("^user enters username$")
	public void user_enters_username()  {
		
		lp.getUserName().sendKeys("standard_user");	
	}

	@When("^user enters password$")
	public void user_enters_password() {
	   
		lp.getpassword().sendKeys("secret_sauce");

	}

	@When("^user clicks on the login button$")
	public void user_clicks_on_the_login_button() {
	    
		 lp.getloginButton().click();	
	}

	@Then("^user should be logged in$")
	public void user_should_be_logged_in() {
		
		String url = driver.getCurrentUrl();
		
		System.out.println(url);
	}
	
	
	@When("^user enters invalid username$")
	public void user_enters_invalid_username() {
	   
		lp.getUserName().sendKeys("locked_out_user");	
	}

	@Then("^user should not be logged in$")
	public void user_should_not_be_logged_in() throws Throwable {
	    
		String url = driver.getCurrentUrl();
		
		System.out.println(url);
	}
	
	@When("^user clicks the backpack to cart$")
	public void user_clicks_the_backpack_to_cart()  {
	  
		ip.getbackPack().click();
	}

	@When("^user clicks on the cart button$")
	public void user_clicks_on_the_cart_button()  {
	
		
		ip.getcart().click();
	}

	@Then("^user should be in the cart page$")
	public void user_should_be_in_the_cart_page() throws Throwable {
	   
		String expectedUrl = "https://www.saucedemo.com/cart.html";
		String actualurl = driver.getCurrentUrl();
		
		Assert.assertEquals(actualurl, expectedUrl);
		
		
	}

	@When("^user clicks on the check out$")
	public void user_clicks_on_the_check_out() throws Throwable {
	    
		cp.getcheckoutButton().click();
	}

	@Then("^user should be in the informaiton page$")
	public void user_should_be_in_the_informaiton_page() throws Throwable {
          
		
		String expectedUrl = "https://www.saucedemo.com/checkout-step-one.html";
		String actualurl = driver.getCurrentUrl();
		
		
		Assert.assertEquals(actualurl, expectedUrl);
		
	}

	@When("^user enters first name$")
	public void user_enters_first_name() throws Throwable {
	   
		cop.getfirstName().sendKeys("michael");
	}

	@When("^user enters last name$")
	public void user_enters_last_name() throws Throwable {
	   
		cop.getlastName().sendKeys("scott");
	}

	@When("^user enters zip code$")
	public void user_enters_zip_code() throws Throwable {
	   
		cop.getpostalCode().sendKeys("12345"); 
	
	}
	@When("^user clicks on the continue button$")
	public void user_clicks_on_the_continue_button() throws Throwable {
	    
		cop.getcontinueButton().click();
	}



	@When("^user clicks on finish$")
	public void user_clicks_on_finish() throws Throwable {
	    
		cotp.getfinishButton().click();
	}

	@Then("^user should see checkout complete msg$")
	public void user_should_see_checkout_complete_msg() throws Throwable {
	  
		String expectedUrl="https://www.saucedemo.com/checkout-complete.html";
		String actualurl = driver.getCurrentUrl();
		
		Assert.assertEquals(actualurl, expectedUrl);
	}

	@When("^user enters username \"([^\"]*)\" in login$")
	public void user_enters_username_in_login(String username) {
	    
		lp.getUserName().sendKeys(username);
		
	}

	@When("^user enters password \"([^\"]*)\" in login$")
	public void user_enters_password_in_login(String password) {
	    
		lp.getpassword().sendKeys(password);
	}

	@Then("^user access should be \"([^\"]*)\" defined$")
	public void user_access_should_be_defined(String expectedUrl) {
	    
		String actualUrl = driver.getCurrentUrl();
		Assert.assertEquals(actualUrl, expectedUrl);
		
		
		
	}
	
	// ----------------------------------------------------------
	
	@Given("^I am doing well$")
	public void i_am_doing_well() {
	    
		System.out.println("I am implemengint the steps that I am doing well");
	}

	@When("^I am not leanring anything$")
	public void i_am_not_leanring_anything()  {
		System.out.println("I am implemengint the steps that I am not learning");
	}
	

	@Then("^I can not achive anaything also$")
	public void i_can_not_achive_anaything_also() throws Throwable {
		System.out.println("I am implemengint the steps that I am avchiveing");
	}
	


}
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


