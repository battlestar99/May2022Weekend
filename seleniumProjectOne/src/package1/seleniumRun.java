package package1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class seleniumRun {

	public static void main(String[] args) {
		
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
	
	// create an object 
	
	WebDriver driver = new ChromeDriver();
	
	driver.get("https://twitter.com/");
	
		

	}

}
