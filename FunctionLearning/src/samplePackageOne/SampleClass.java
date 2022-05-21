package samplePackageOne;

public class SampleClass {

	public static void main(String[] args) {
		SampleClass sc = new SampleClass();
		
		AddingIntegerNumbers ain = new AddingIntegerNumbers();
		
		ain.additionTwoNumbers(50, 60);
		ain.additionThreeNumbers(10, 80, 90);
		
//		sc.additionTwoDoubleNumbers(20.25, 50.75);
//		sc.additionTwoNames("Sumi", " Aziza");
		
		
		
		AdddingString as = new AdddingString();
		as.additionTwoNames("shumi", "Aziza");
		
		HandleBoolean hb = new HandleBoolean();
		hb.isRaining(true);
		
		HandleBoolean hb2 = new HandleBoolean();
		hb2.isRaining(false);
		
		HandleBoolean hb3 = new HandleBoolean();
		hb3.isRaining(true);
		
		
		
		
		
		
		
//		AddingDoubleNumbers adn = new AddingDoubleNumbers();
//		adn.additionTwoDoubleNumbers(100.230, 25.01);
		
		AddingDoubleNumbers.additionTwoDoubleNumbers(100.10, 200.90);
		
	}
	
	
	
	
	
	
	
}
