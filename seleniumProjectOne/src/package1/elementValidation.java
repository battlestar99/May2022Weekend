package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class elementValidation {

	public static void main(String[] args) {
		
System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
	
		driver.manage().window().maximize();
	
		driver.get("http://automationpractice.com/index.php");
		
		WebElement signIn = driver.findElement(By.linkText("Sign in"));
		
		String signIntext = signIn.getText();
		
		System.out.println(signIntext);
		
		boolean flag = signIn.isDisplayed();
		
		System.out.println(flag);
		
		boolean flag1 = signIn.isEnabled();
		
		System.out.println(flag1);
		
		signIn.click();
		
		

	}

}
