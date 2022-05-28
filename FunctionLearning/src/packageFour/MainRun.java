package packageFour;

public class MainRun {

	public static void main(String[] args) {
		
		AddingNumbers an = new AddingNumbers();
		int a = an.addTwoNumbers(50, 50);
		System.out.println(a);
		an.addThreeNumbers(10, 20, 30);
		
		boolean pOn = an.positiveOrNagetive(-10);
		System.out.println(pOn);
	}

}
