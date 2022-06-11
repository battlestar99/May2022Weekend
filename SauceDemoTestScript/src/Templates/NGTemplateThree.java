package Templates;

import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class NGTemplateThree {
	
	
	@BeforeTest
	public void startTest() {
		
		System.out.println("this is BeforeTest");
		
	}
	
	@AfterTest
	public void endTest() {
		
		System.out.println("This is aftertest");
		
	}
	
	
	@BeforeMethod
	public void bforeeachtest() {
		
		System.out.println("This is before method");
		
	}
	
	@AfterMethod
	public void aftereachTest() {
		
		System.out.println("This is after method");
	}
	
	@Test(priority=1)
	public void atest() {
		
		System.out.println("This is a test");
		
		
		Reporter.log("Test to validate positive login");
		Assert.assertEquals("abc","abc");
		
	}
	
	
	@Test(priority=2)
	public void btest() {
		
		System.out.println("This is b test");
		Reporter.log("Test to validate negative login");
		Assert.assertEquals("xyz", "xyz1");
		
		
		
		
		
	}
	
	
	@Test(priority=3)
	public void ctest() {
		
		System.out.println("This is c test");
		Reporter.log("Test to validate login elements");
		Assert.assertEquals(76,76);
	}
	
	
	@Test(priority=4)
	public void dtest() {
		
		System.out.println("This is c test");
		Reporter.log("Test to validate login elements present or not");
		Assert.assertEquals(true, true);
	}


}
