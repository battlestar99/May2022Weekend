package stepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.cartPage;
import pages.checkOutTwoPage;
import pages.checkoutOnePage;
import pages.inventoryPage;
import pages.loginPage;


public class stepDef extends baseClass {
	
	
	
	
	@Given("^user is on the home page$")
	public void user_is_on_the_home_page() {
	    
		setupChromeDriver();
		navigateHomePage();
		
		
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


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
