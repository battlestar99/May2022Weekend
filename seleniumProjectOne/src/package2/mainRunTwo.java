package package2;

import package1.car;

public class mainRunTwo {

	public static void main(String[] args) {
		
		
		car c = new car();
		
		//classname objectname = new classname();
		
		
		c.go();
		
		c.printCarPrice(123);
		
		c.printCarPrice(367);
		
		c.printCarOwnerInfo("Michael", "PA");
		
		String x = c.getValue();
		
		System.out.println(x);
		
		int z = c.testSomething(65);
		
		System.out.println(z);

	}

}
