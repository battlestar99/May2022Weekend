package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class automationPractice {

	public static void main(String[] args) throws InterruptedException {

		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
	
		driver.manage().window().maximize();
	
		driver.get("http://automationpractice.com/index.php");
		
		Thread.sleep(2000);
		
		WebElement signInLink = driver.findElement(By.linkText("Sign in"));
		signInLink.click();
		
		WebElement emailAddress = driver.findElement(By.id("email_create"));
		emailAddress.sendKeys("dsjfhd@test.com");
		
		
		WebElement createAccountButton = driver.findElement(By.xpath("//*[@id=\"SubmitCreate\"]/span"));
		createAccountButton.click();
		
		
		

	}

}
