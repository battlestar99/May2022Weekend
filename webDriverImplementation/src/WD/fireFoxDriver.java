package WD;

public class fireFoxDriver implements WebDriver {

	@Override
	public void findElement() {
		System.out.println("findelement in mozila");
		
	}

	@Override
	public void sendKeys() {
		System.out.println("sendkeys in mozila");
		
	}

	@Override
	public void click() {
		System.out.println("click in mozila");
		
	}

}
