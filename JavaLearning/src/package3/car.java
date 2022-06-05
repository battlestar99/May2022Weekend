package package3;

public class car {
	
	int x; 
	
	
	public car(int x) {
		
		
		this.x=x;
		
	}
	
	
	
	
	
	public car (String x) {
		
		System.out.println("constructor with an string paramter");
		
	}
	
	
	public car() {
		
		System.out.println("constructor with no paramter");
		
	}
	
	
	
	public void go() {
		
		
		System.out.println("the car is going");
	}
	
	
	public void start() {
		
		System.out.println("the car is starting");
		
	}

}
