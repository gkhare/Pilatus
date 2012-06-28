package unit1.multiply;

public class RussianPeasantsAlgoForMultiplication {
	
	public int multi(int a, int b) {
		int x = a, y = b;
		int z = 0;
		while (x>0) {
			if (x%2 == 1) z = z + y;
			x >>= 1;
			y <<= 1;
		}
		return z;
	}
	
	public static void main(String[] args) {
		RussianPeasantsAlgoForMultiplication multiplication = new RussianPeasantsAlgoForMultiplication();
		int m = multiplication.multi(14, 11);
		System.out.println(m);
	}

}
