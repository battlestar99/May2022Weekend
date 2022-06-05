package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class browserInteraction {

	public static void main(String[] args) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		//WebDriver driver1= new ChromeDriver();
		
		// maximize the window 
		
		driver.manage().window().maximize();
		
		// navigating to the url
		driver.get("http://automationpractice.com/index.php");
		
		// function to read the url where the driver is 
		
		String url = driver.getCurrentUrl();
		
		
		System.out.println(url);
		
		// function to read the title of the page
		
		String title = driver.getTitle();
		
		
		
		
		System.out.println(title);
		
		// clicking the sign in link 
		driver.findElement(By.linkText("Sign in")).click();
		
		// go back top the previous page 
		
		//Thread.sleep(2000);
		
		
		url = driver.getCurrentUrl();
		title = driver.getTitle();
		
		System.out.println(url);
		
		System.out.println(title);
		
		driver.navigate().back();
		
		// go forward one page 
		
		//Thread.sleep(2000);
		
		driver.navigate().forward();
		
		//Thread.sleep(2000);
		
		// refreshing a web page 
		
		driver.navigate().refresh();
		
		
		Thread.sleep(2000);
		
		
		
		
		// quitting the browser 
		
		driver.quit();
		
		//driver.close();
		
		

	}

}
