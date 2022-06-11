package Templates;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class NGTemplateOne {
	
	@Test
	public void mainTest() {
		
		System.out.println("This is main test");
		
	}
	
	
	@AfterTest
	public void endTest() {
		
		System.out.println("This is after test");
	}
	
	@BeforeTest
	public void startTest() {
		
		System.out.println("This is before test");
	}
	
	
	
	
	
	
	

}
