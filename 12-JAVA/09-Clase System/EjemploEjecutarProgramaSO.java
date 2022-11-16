public class EjemploEjecutarProgramaSO {
    public static void main(String[] args) {

        //Runtime nos permite ejecutar comandos del sistema operativo.
        Runtime rt = Runtime.getRuntime();
        Process proceso;

        try {
            if (System.getProperty("os.name").toLowerCase().startsWith("windows")) {
                proceso = rt.exec("notepad");
            } else if (System.getProperty("os.name").toLowerCase().startsWith("mac")) {
                proceso = rt.exec("open");
            }else if (System.getProperty("os.name").toLowerCase().contains("nux") ||
                    System.getProperty("os.name").toLowerCase().contains("nix")) {
                proceso = rt.exec("gedit");
            }
            else {
                proceso = rt.exec("gedit");
            }
            //Se queda esperando hasta que cerremos el editor[x]
            proceso.waitFor();
        } catch(Exception e){
            System.err.println("El comando es desconocido: " + e.getMessage());
            System.exit(1);
        }
        System.out.println("Se ha cerrado el editor");
        System.exit(0);
    }
}
