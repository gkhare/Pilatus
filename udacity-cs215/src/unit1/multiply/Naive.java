package unit1.multiply;

public class Naive {
	
	public int multi(int a, int b) {
		int x = a, y = b;
		int z = 0;
		while (x>0) {
			z = z + y;
			x = x-1;
		}
		return z;
	}
	
	public static void main(String[] args) {
		Naive naive = new Naive();
		int m = naive.multi(14, 11);
		System.out.println(m);
	}

}
