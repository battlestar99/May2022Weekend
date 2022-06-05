package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class dropDownInteraction {

	public static void main(String[] args) throws InterruptedException {
		
System.setProperty("webdriver.chrome.driver","C:\\Users\\Agile1Tech\\Desktop\\programminglibrarie\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
	
		driver.manage().window().maximize();
	
		driver.get("http://www.selenium.academy/Examples/Interaction.html");
		
		Thread.sleep(2000);
		
		WebElement button = driver.findElement(By.id("button"));
		
		String buttonText = button.getText();
		
		System.out.println(buttonText);
		
		button.click();
		
		WebElement textbox = driver.findElement(By.id("textbox"));
		
		textbox.sendKeys("virginia");
		
		Thread.sleep(2000);
		
		textbox.clear();
		
		WebElement checkBox = driver.findElement(By.id("checkbox"));
		
		checkBox.click();
		
		// drop down selection 
		
		// step 1: finding the weblement
		
		WebElement dropdown = driver.findElement(By.id("combobox"));
         
		// step 2: creating object of the select class and pass the weblement 
		
		Select dd = new Select(dropdown);
		
		// step 3: use the object to call appropriate functions for selecting dropdown
		
		// select by visiable text need to provide exact text 
		//dd.selectByVisibleText("Option 2");
		
		// select by index
		dd.selectByIndex(1);
		
		// select by value 
		
		dd.selectByValue("02");
		
	}

}
