package Templates;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class NGTemplateTwo {
	
	
	@BeforeTest
	
	public void startTest() {
		
		System.out.println("This is before test");
		
	}
	
	
	
	@Test(priority=1)
	public void validateLoginElement() {
		
		System.out.println("This is b test");
		
	}
	
	@Test(priority=2)
	public void validatelogin() {
		
		System.out.println("This is a test");
		
	}
	
	@AfterTest
	public void endTest() {
		
		System.out.println("This is after test");
		
	}

}
