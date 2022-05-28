package packageFive;

public class AddingNumbers {
	
	int a = 10;
	
	public AddingNumbers(int x) {
		a = x;
	}
	
	public void addTwoNumbers(int b) {
		int c = a+b;
		System.out.println(c);
	}
	
	public void addThreeNumbers(int b, int c) {
		int d = a+b+c;
		System.out.println(d);
	}
	
	public void addFourNumbers(int b, int c, int d) {
		int e = a+b+c+d;
		System.out.println(e);
	}

}
