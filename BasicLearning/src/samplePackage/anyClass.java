package samplePackage;

public class anyClass {

	public static void main(String[] args) {
		
		int a = 10; 
		int b = 0; 
		int c=0;
		
		
		try {
		c = a/b; 
		}
		catch(ArithmeticException e) {
		
			System.out.println(e.getMessage());
			
		}
		
		
		System.out.println(c);
		
		System.out.println("this is the end of the code");
		
		
	}

}
