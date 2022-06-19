package WD;

public class safariDriver implements WebDriver {

	@Override
	public void findElement() {
		System.out.println("findelement in safari");
		
	}

	@Override
	public void sendKeys() {
		System.out.println("sendkeys in safari");
		
	}

	@Override
	public void click() {
		System.out.println("click in safari");
		
	}

}
