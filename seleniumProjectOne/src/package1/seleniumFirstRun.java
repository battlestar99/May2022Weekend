package package1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class seleniumFirstRun {

	public static void main(String[] args) {
		
		// setting up browser driver 
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		// creating an object of the webdriver class 
		
		WebDriver driver = new ChromeDriver();
		
		WebDriver driver1 = new ChromeDriver();
		
		
		
		// navigating to the web app or web site we want to test 
		
		driver.get("http://automationpractice.com/index.php");
		
		
		driver1.get("https://www.google.com/");
		
		
		
		System.out.println("Hello World");
		

	}

}
