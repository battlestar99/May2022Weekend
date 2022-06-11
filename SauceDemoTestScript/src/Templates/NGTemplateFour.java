package Templates;

import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class NGTemplateFour {
	
	
	@BeforeTest
	public void beforetest() {
		
		System.out.println("this is before test");
	}
	
	@AfterTest
	public void afterTest() {
		
		System.out.println("this is after test");
		
	}
	
	@Test
	public void loginvalidation() {
		
		System.out.println("this is login validation");
		
		// expected value is coming from requirement
		String expectedValue = "testabc";
		
		// actual value coming from the test
		String actualValue = "testab";
		
		
		Assert.assertEquals(actualValue, expectedValue);
	}
	
	
	
	
	
	
	

}
