package packageThree;

import samplePackageOne.AddingIntegerNumbers;

public class SampleClassConstructor {

	public static void main(String[] args) {
		
		AddingIntegerNumbers ain = new AddingIntegerNumbers(20);
//		int sumOfTwoNumbers = ain.additionTwoNumbers(20, 30);
//		System.out.println(sumOfTwoNumbers);
		
		int sumOfThreeNumbers = ain.additionThreeNumbers(50, 60, 70);
		System.out.println(sumOfThreeNumbers);
		
		int sumOfFoutNumbers = ain.additionFourNumbers(100, 200, 300, 400);
		System.out.println(sumOfFoutNumbers);
		
		AddingIntegerNumbers ain2 = new AddingIntegerNumbers(100);
		
		int sumForAin2 = ain2.additionThreeNumbers(100, 200, 300);
		System.out.println(sumForAin2);
		
		
	}
}
