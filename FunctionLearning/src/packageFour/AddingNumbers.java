package packageFour;

public class AddingNumbers {
	
	public int addTwoNumbers(int a, int b) {
		int c = a + b;
		return c;
	}
	
	public void addThreeNumbers(int a, int b, int c) {
		int d = a + b + c;
	}
	
	public boolean positiveOrNagetive(int a) {
		boolean isPositiveNumber;
		if(a>=0) {
			isPositiveNumber = true;
		}else {
			isPositiveNumber = false;
		}
		return isPositiveNumber;
		
	}
	

}
