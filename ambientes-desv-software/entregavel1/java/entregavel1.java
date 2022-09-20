package EntregavelJava;
import java.util.Scanner;

public class Entregavel {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);

//1 - Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.
        System.out.println("Teste se o número é primo:");
        int numero = sc.nextInt();

        boolean prima = true;
        if (numero <= 1){
            prima = false;
        }else {
            for (int r = 2; r < numero; r++) {
                if (numero % r == 0) {
                    prima = false;
                    break;
                }
            }
        }
        if(prima == false){
            System.out.println("Não é primo.");
        } else {
            System.out.println("É primo");
        }


         System.out.println();

//2 - Somatório: Soma de um conjunto de números.
        System.out.println("Quantos valores serão somados?");
        int n = sc.nextInt();

        System.out.println();

        int soma = 0;
        int i;
        for( i=1; i<=n; i++) {
            System.out.println(i + "º Valor: ");
            int num = sc.nextInt();

            soma = soma + num;
        }
        System.out.println("Somatório: " + soma);
        System.out.println();


//3 - Fibonacci: onde N > 1. Os primeiros termos são: 0, 1, 1, 2, 3, 5, 8, 13 …. Cada termo, além dos dois primeiros, é derivado da soma de seus dois antecessores mais próximos.
    System.out.println("Quantas números terão no fibonacci?");
        int fib = sc.nextInt();

        System.out.println();

        int k = 1;
        int q = 0;
        
        for(int j=1; j<=fib; j++) {

            if(j < 2){
                System.out.println(1);

            } else {

                k = k + q;
                q = k - q;

                System.out.print(k + ", ");
                System.out.println();
            }
        }
       

//4 - Máximo divisor comum: O máximo divisor comum (mdc) de dois inteiros a, b é o maior número inteiro que divide a e b.
        System.out.println();
        System.out.println("MDC: digite o primeiro valor.");
        int mdcA = sc.nextInt();
        System.out.println("MDC: digite o segundo valor.");
        int mdcB = sc.nextInt();

        int mdc = 1;
        int bigger;

        System.out.println("MDC de A e B.");
        System.out.println();

        bigger = mdcA;
        if (mdcA > mdcB){
            bigger = mdcA;
        } if (mdcB > mdcA) {
            bigger = mdcB;
        }

        for (int g = 2; g <= bigger; ++g){
            while((mdcA % g==0) && (mdcB % g == 0)){
                mdcA = mdcA / g;
                mdcB = mdcB / g;
                mdc = mdc * g;
            }
        }

        System.out.println("MDC é: " + mdc);
        System.out.println();

// 6 - Contagem: Dado um valor N, conte quantos valores inteiros existem entre 1 (inclusive) e N (inclusive).
System.out.println();
System.out.println("Digite um valor.");
int vlr = sc.nextInt();
int cont = 0;
for(int w = 1; w <= vlr; w++){
    cont++;

}
System.out.println("Quantidade de números inteiros entre 1 e " + vlr +"\n" + cont);
System.out.println();
System.out.println();

    //5 - ordenação: Ordenar um array usando o método Quicksort

    int[] vetor = new int[10];
		
		for(int t = 0; t < vetor.length; t++) {
			vetor[t] = (int) Math.floor(Math.random() * vetor.length);
			
		}
		System.out.println("QuickSort: Bagunçado");
		for(int t = 0; t < vetor.length; t++) {
			System.out.print(vetor[t] + " ");	
		}
		quicksort(vetor, 0, vetor.length - 1);
		
		System.out.println("\n\nOrganizado");
		for(int t = 0; t < vetor.length; t++) {
			System.out.print(vetor[t] + " ");	
		}
	}
	static void quicksort(int[] vetor, int left, int right) {
		if(left < right) {
			int p = piece(vetor, left, right);
			quicksort(vetor, left, p);
			quicksort(vetor, p + 1, right);	
		}
	}
	static int piece(int[] vetor, int left, int right) {
		int meio = (int) (left + right) / 2;
		int pivo = vetor[meio];
		int t = left - 1;
		int f = right + 1;
		
		while(true) {
			do {
				t++;
			} while(vetor[t] < pivo);
			do {
				f--;
			} while(vetor[f] > pivo);
				
				if(t >= f) {
					return f;	
				}
				int aux = vetor[t];
				vetor[t] = vetor[f];
				vetor[f] = aux;
         }
         

    } 
 }
