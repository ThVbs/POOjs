public class PetShop {
    
    private int numCachorros;
    private int numGatos;
    private int numPeixes;
        
    public PetShop(int numCachorros, int numGatos, int numPeixes) {
        this.numCachorros = numCachorros;
        this.numGatos = numGatos;
        this.numPeixes = numPeixes;
    }

    public int getNumCachorros() {
        return this.numCachorros;
    }

    public int getNumGatos() {
        return this.numGatos;
    }

    public int getNumPeixes() {
        return this.numPeixes;
    }
}