package unit1;

public interface EulerianPath {
	
	String howitworks = "In a graph with nodes having odd and even degrees," +
			"for a eulerian path to exists, following cases are apply\n" +
			"1. all the nodes have even degrees then there exists an eulerian path always, with the start and and the end node as the same node." +
			"2. there exists an eulerian path if there exists two nodes with odd degree and others with even degrees. in this case the path starts from one nod eand ends at other" +
			"3. no eulerian path exists if all the nodes have odd degrees";

}
