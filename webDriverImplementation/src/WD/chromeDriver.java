package WD;

public class chromeDriver implements WebDriver {

	@Override
	public void findElement() {
		
		System.out.println("findelement is chromebrowser");
		
	}

	@Override
	public void sendKeys() {
		System.out.println("sendkeys is chromebrowser");
		
	}

	@Override
	public void click() {
		System.out.println("click in chromebrowser");
		
	}

}
